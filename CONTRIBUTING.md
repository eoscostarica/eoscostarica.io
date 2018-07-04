# Contributing

<!-- START doctoc generated TOC please keep comment here to allow auto update -->

<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

## Contents

* [Reporting bugs](#reporting-bugs)
* [Git Workflow](#git-workflow)
* [Pull Request General Guidelines](#pull-request-general-guidelines)
    * [Commit Standards](#commit-standards)
    * [Working on Your First Pull Request?](#working-on-your-first-pull-request)
* [Advanced Git tools](#advanced-git-tools)
* [Version Numbers](#version-numbers)
    * [Breaking.Feature.Fix](#breakingfeaturefix)
        * [Breaking](#breaking)
        * [Feature](#feature)
        * [Fix](#fix)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Reporting bugs

Before submitting your issue please check that you've completed the following steps:

* Made sure you're on the latest version
* Used the search feature to ensure that the bug hasn't been reported before

Bug reports should contain the following information:

* Summary: A brief description.
* Steps to reproduce: How did you encounter the bug? Instructions to reproduce it.
* Expected behavior: How did you expect it to behave?
* Actual behavior: How did it actually behave?
* References: Links to any related tickets or information sources.
* If possible, attach visual documentation of the bug. Screenshot or animated gif

## Development Process

At EOS Costa Rica we use Github's Projects board to prioritize the work and the standard Github Flow https://guides.github.com/introduction/flow/ for code changes.

We follow the [open source collaborative ettiquete](https://github.com/rstacruz/collaborative-etiquette/blob/master/README.md#top) and the [standardjs code style](https://standardjs.com).

We use a Kanban-style board with built-in triggers to automatically move issues and pull requests across To do, In progress and Done columns. That's were we prioritize the work. [Go to Project Board](https://github.com/eoscostarica/dmeetup/projects/1).

![](https://gaboesquivel.com/img/2018/05/github-flow.png)

## Pull Request General Guidelines

* Please check to make sure that there aren't existing pull requests attempting to address the issue mentioned.
* Check for related issues on the issue tracker.
* Non-trivial changes should be discussed on an issue first.
* Let us know you're working on the issue.
* Develop in a topic branch, not master.
* Provide useful pull request description
* Write a good description of your PR.
* Make well scoped pull requests. 1 PR per feature of bug fix.
* Reference the github issue on the pull request description.

### Commit Standards

* Make atomic commits, don't mix unrelated code changes.
* Provide useful commit messages.
* Provide a short commit message in the first line (50-100 character). Looking at the output of `gitk` or `git log --oneline` might help you understand why.

### Working on Your First Pull Request?

You can learn how from this _free_ series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

## Advanced Git tools

There are also tools like [Hub](https://hub.github.com/) and [git-extras](https://github.com/tj/git-extras) that facilitate interacting with Github.
You can leverage these tools to contribute to this repository.

## Version Numbers

[Semver](http://semver.org), except the version roles have the semantic names, "Breaking.Feature.Fix" instead of "Major.Minor.Patch".

#### Breaking.Feature.Fix

We don't decide what the version will be. The API changes decide. Version numbers are for computers, not people. Release names are for people.

##### Breaking

Any breaking change, no matter how small increments the Breaking version number. Incrementing the Breaking version number has absolutely no relationship with issuing a release.

##### Feature

When any new feature is added. This could be as small as a new public property, or as large as a new module contract being exposed.

##### Fix

When a documented feature does not behave as documented, or when a security issue is discovered and fixed without altering documented behavior.
