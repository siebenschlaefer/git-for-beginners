import React, { Fragment } from 'react';
import { action as popmotionAction, chain } from 'popmotion';
import { action } from 'mobx';

import { createChapter, init, readOn } from '../Chapter';
import { ChapterText } from '../ChapterSection';
import Tooltip from '../../components/Tooltip';
import { actionQueue, delay } from './utils';

const gitInATeamChapter = createChapter('Git in a Team', {
  inheritFrom: 'Git in the Console',
  sections: [
    new ChapterText(() => (
      <Fragment>
        Do you see the label at the last <Tooltip name="commit">commit</Tooltip>{' '}
        and the line connecting all the commits? That’s called a{' '}
        <strong>branch</strong>. Git uses branches to support if working in a
        team on different parts of your projects at the same time. A branch is
        basically a chain of commits. By default every Git project comes with a{' '}
        <code>master</code> branch.
      </Fragment>
    )),
    new ChapterText(() => (
      <Fragment>
        To work on a new feature we create a branch called{' '}
        <code>new-feature</code>. By now new commits are still added to the{' '}
        <code>master</code> branch because our new branch is not active yet. To
        change that we need to activate <code>new-feature</code>.{' '}
        <em>It’s called checking out a branch.</em>
      </Fragment>
    )),
    new ChapterText(() => (
      <Fragment>
        Once done we may add new commits. Do you see the changes that have been
        added to the <code>master</code> branch by some other user? Might be a
        bugfix.
      </Fragment>
    )),
    new ChapterText(() => (
      <Fragment>
        Next, to merge the changes from both branches, we simply checkout the{' '}
        <code>master</code> branch again and merge our changes from{' '}
        <code>new-feature</code> into the now active <code>master</code> branch.
      </Fragment>
    )),
    new ChapterText(() => 'Not difficult, right? Let’s get it right now …'),
  ],
  get vis() {
    return this.parent.vis;
  },
  [init]() {
    this.vis.showBranches = true;
    this.actionQueue = actionQueue().start();

    this.createNewFeatureBranch = popmotionAction(({ complete }) => {
      this.vis.createBranch('new-feature');
      complete();
    });

    this.createCommit = popmotionAction(({ complete }) => {
      this.vis.createCommit();
      complete();
    });

    this.checkoutNewFeature = popmotionAction(({ complete }) => {
      this.vis.checkout('new-feature');
      complete();
    });

    this.checkoutMaster = popmotionAction(({ complete }) => {
      this.vis.checkout('master');
      complete();
    });

    this.mergeNewFeature = popmotionAction(({ complete }) => {
      this.vis.merge('new-feature');
      complete();
    });
  },
  [readOn]() {
    if (!this.hasNewBranch) {
      this.hasNewBranch = true;

      this.actionQueue.add(delay(1000), this.createNewFeatureBranch);
    } else if (!this.checkoutNewBranch) {
      this.checkoutNewBranch = true;
      this.actionQueue.add(delay(1000), this.checkoutNewFeature);
    } else if (!this.createdNewCommits) {
      this.createdNewCommits = true;
      this.actionQueue.add(
        delay(1000),
        this.createCommit,
        delay(1000),
        this.createCommit,
        delay(1000),
        popmotionAction(
          action(({ complete }) => {
            chain(
              this.checkoutMaster,
              popmotionAction(({ complete }) => {
                console.log('commit create without reset');
                this.vis.createCommit(null, false);
                complete();
              }),
              this.checkoutNewFeature,
            ).start({ complete });
          }),
        ),
      );
    } else if (!this.mergeMaster) {
      this.mergeMaster = true;

      this.actionQueue.add(
        delay(2000),
        this.checkoutMaster,
        delay(1400),
        this.mergeNewFeature,
      );
    }
  },
});

export default gitInATeamChapter;
