# Malama Mobile Client Application

### Coding conventions
- Structure
  - Separate structure and aesthetics
    - Use `X.js` for structure and `sX.js` for styling
  - Separate visual and logical bits
    - Do not put service logic into JSX
  - Use strong packaging
    - Avoid putting everything into 1 package/directory
    - Separate things based on their domain
    - Eg. put each screen into 1 directory and hold all screens in the `screens` directory
    - App is root, everything else goes to a package/dir
  - Avoid re-writing same stuff everywhere
    - Styles which are common can be extracted into `GeneralStyles.js` for example
- Javascript
  - Use `const` over `let` wherever possible, to let the reader know what is variable and what is not
  - Avoid long chains of commands. Readability > cool-looking code :)
- Git
  - Use imperative for commits
    - Bad: `fix stuff`
    - Good: `Fixed Title styling on landing page`
    - Ideal: `[BRANCH-12] Fix landing title styling`
