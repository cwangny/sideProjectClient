# Local Development

1. Download ExpoGo for Android or iOS to run this project locally.
2. Run `npm install` to install all the dependencies.
3. Run `npm start` to start the development server.
4. Run `npm run tunnelMode` if step 3 doesn't work.

# Formatting and Linting

- ESLint is used to show errors and warnings in the code.
- Prettier is used to automically format the code.

1. Download ESLint and Prettier Extention for VSCode.
2. Search settings.json by Ctrl + Shift + P and open it and paste this:

```JSON
{
  "editor.formatOnSave": true,
  "eslint.codeActionsOnSave.rules": null,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```
