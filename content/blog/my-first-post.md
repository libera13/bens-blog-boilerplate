---
title: Using semantic-release 
date: 2021-03-12T20:47:18
excerpt: Here is a little bit about my first post.
---

### [semantic-release on Github](https://github.com/semantic-release/semantic-release#-semantic-release)

 
### Highlights

- Fully automated release

### How it work
* it uses [Angular Commit Message Conventions](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format)
tools such as commitizen or [commitlint](https://github.com/commitizen/cz-cli#using-the-command-line-tool) can be used to force contributors to write according to the styleguide

### Requirements

In order to use **semantic-release** you need:

- To host your code in a [Git repository](https://git-scm.com)
- Use a Continuous Integration service that allows you to [securely set up credentials](docs/usage/ci-configuration.md#authentication)
- Git CLI version [2.7.1 or higher](docs/support/FAQ.md#why-does-semantic-release-require-git-version--271) installed in your Continuous Integration environment
- [Node.js](https://nodejs.org) version [10.18 or higher](docs/support/FAQ.md#why-does-semantic-release-require-node-version--1018) installed in your Continuous Integration environment


### Conclusion
Tool is great for open source project, published on npm. Too much setup for small, private project. 





_CheatSheet for [Angular Commit Message Conventions](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format)_

```

The `<type>` and `<summary>` fields are mandatory, the `(<scope>)` field is optional.


##### Type

Must be one of the following:

* **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
* **ci**: Changes to our CI configuration files and scripts (example scopes: Circle, BrowserStack, SauceLabs)
* **docs**: Documentation only changes
* **feat**: A new feature
* **fix**: A bug fix
* **perf**: A code change that improves performance
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **test**: Adding missing tests or correcting existing tests

