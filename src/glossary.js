import React, { Fragment } from 'react';

import Glossary, { GlossaryTerm } from './models/Glossary';
import { TooltipTerm } from './components/Tooltip';

export default new Glossary({
  version: new GlossaryTerm('Version', () => (
    <Fragment>
      <p>
        A version in this tutorial is a copy of a file or the whole project.
      </p>
      <p>
        It contains changes or a snapshot of your project at a certain point of
        time and can be restored in case changes got lost.
      </p>
    </Fragment>
  )),
  commit: new GlossaryTerm('Commit', () => (
    <Fragment>
      <p>
        A commit is a <TooltipTerm name="version">version</TooltipTerm>, a
        snapshot of your project at a certain point of time stored in the{' '}
        <TooltipTerm name="repository">repository</TooltipTerm>.
      </p>
      <p>
        It contains a strange but unique identifier (e.g. <code>4823f6</code>),
        the commits author, e-mail and creation date.
      </p>
    </Fragment>
  )),
  repository: new GlossaryTerm('Repository', () => (
    <Fragment>
      <p>
        The repository is the{' '}
        <TooltipTerm name="versionDatabase">version database</TooltipTerm>{' '}
        storing all the versions of your project as{' '}
        <TooltipTerm name="commit">commits</TooltipTerm>.
      </p>
      <p>
        In it's kind it is a simple object database initialised in your project
        folder.
      </p>
    </Fragment>
  )),
  stagingArea: new GlossaryTerm('Staging Area', () => (
    <Fragment>
      <p>
        The staging area can be used to collect changes in those files you want
        to be part of the next <TooltipTerm name="version">version</TooltipTerm>.
      </p>
      <p>
        By this you are able to group changes into separate versions, e.g. by
        feature or topic.
      </p>
    </Fragment>
  )),
  workingDirectory: new GlossaryTerm('Working Directory', () => (
    <Fragment>
      <p>
        The working directory is essentially the folder on your computer where
        all the files of your project are stored in.
      </p>
      <p>
        Here you add, modify or delete files with other software as you are used
        to.
      </p>
    </Fragment>
  )),
  cloud: new GlossaryTerm('Cloud', () => (
    <Fragment>
      <p>
        A cloud is an external storage in the internet, where you can upload and
        download files and sharing them with others.
      </p>
      <p>
        Cloud providers often provide software which you can use to
        automatically upload and download changes to and from the cloud.
      </p>
    </Fragment>
  )),
  versionDatabase: new GlossaryTerm('Version Database', () => (
    <Fragment>
      <p>
        A version database is a database to store versions of your files and
        folders.
      </p>
      <p>
        Depending on its implementation it stores just changes in content of the
        the different files or snapshots of your whole project.
      </p>
    </Fragment>
  )),
  console: new GlossaryTerm('Console', () => (
    <Fragment>
      <p>
        Console, command-line or command-line interface (CLI) is a text based
        controlling interface for your computer. A long time ago it was the only
        way to communicate with a computer until it got replaced by graphical
        user interfaces.
      </p>
      <p>
        Still many computer experts, programmers etc are using the console as
        the main tool to have a faster and more direct way of controlling their
        computers.
      </p>
    </Fragment>
  )),
  branch: new GlossaryTerm('Branch', () => (
    <Fragment>
      <p>
        A branch is basically a chain of{' '}
        <TooltipTerm name="commit">commits</TooltipTerm>. Git uses branches to
        support work in a team on different parts of your projects at the same
        time.
      </p>
      <p>
        Branches also allow you to try out new ideas and concepts without
        risking changes in the main version stored for example in the{' '}
        <code>master</code> branch.
      </p>
    </Fragment>
  )),
});
