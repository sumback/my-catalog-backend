# Contributing to MAL Desktop

We would love for you to contribute to MY-CATALOG-BACKEND and help make it even better than it is today!
As a contributor, here are the guidelines we would like you to follow:

- [Commit Message Guidelines](#commit)

## <a name="commit"></a> Commit Message Format

_This specification is inspired by and supersedes the [AngularJS commit message format][commit-message-format]._

We have very precise rules over how our Git commit messages must be formatted.
This format leads to **easier to read commit history**.

### <a name="commit-message"></a>Commit Message

```
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: app|common|compiler|vue|assets|locales|router|service|...
  │
  └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|test
```

- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests
