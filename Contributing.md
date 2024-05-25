# Contributing

## Formatting

Ensure that you use [Prettier](https://prettier.io/) so that your code is auto-formatting on save. Default settings will do

## General steps on how to make changes

At the beginning of a coding session, run `git pull` to pull whatever new changes might have been merged into `main` since your last session

If you're working on a new ticket, run `git checkout -b <branch-name>` to create a new branch where you can make your changes. Make sure to incrementally commit changes to your branch to stay more organized and for easier backtracking if necessar.

After finishing your changes, run `git push --set-upstream origin <branch-name>` to be able to create a pull request from that branch asking to have it merged into `main`

Create your PR while ensuring that the [PR template](/PRTemplate.md) is followed when typing your description for said PR
