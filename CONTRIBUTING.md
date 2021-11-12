# Contribution guidelines

First of all, thanks for thinking of contributing to this project. :smile:

Before creating a Pull Request, please make sure that you're assigned the task on a GitHub issue.

-   If a relevant issue already exists, discuss on the issue and get it assigned to yourself on GitHub.
-   If no relevant issue exists, open a new issue and get it assigned to yourself on GitHub.

Please proceed with a Pull Request only after you're assigned. It'd be sad if your Pull Request (and your hard work) isn't accepted because of incompatibility or someone else already finishing it.

When you start working on the issue, please kindly update the status in the project to `In Progress`

When you create a PR, make sure that you include a bit of description to what the PR introduces to the code base. And if possible, make your PRs as small possible so that we can review and merge it quickly.

When your PR is ready, make sure to request for review from the person who assigned you to the issue.

# Prerequisites

-   Make sure you have [Node JS](https://nodejs.org) installed.

# Installing

-   In the terminal type `npm install` to install all required packages
-   Ask System Admin for `.env` variables for all needed credentials

# Developing

1. Install with

    ```sh
    git clone https://github.com/LeafGlobalFintech/forex-tool
    cd forex-tool
    npm i
    npm run dev
    ```

2. Checkout a branch from `develop` and make your changes in it branch (say, `feat-new-stuff`). These changes can be adding new features, fixing bugs, adding documentations, or refactoring existing code. Make sure your commit messages reflect your changes. Look at the section below for detailed instructions.

3. Make sure that your branch successfully run without any error or warning. We won't be able to merge your PR if your code doesn't pass.

4. Make sure to periodically merge `develop` into your branch to avoid conflicts when creating a PR.

# Commit Message Structure

-   If you are committing a feature, add `feat:` prefix then add description of the message.

```
Example: feat: added readme file
```

-   If you are committing a fix, add `fix:` prefix then add description of the message

```
Example: fix: fixed typo in readme file
```

-   If you are committing an improvement of an existing code, add `impr:` prefix then add description of the message

```
Example: impr: added validating to if an id is a mongodb id on top of checking if the field is empty
```

-   If you are committing a refactor of an existing code, add `refact:` prefix then add description of the message

```
Example: refact: reduced code for checking for null values on array
```

-   **Tip**: You can combine commit prefixes like:

```
Example: feat&fix: added readme file, fixed typo in readme file
```
