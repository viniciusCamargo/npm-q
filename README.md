# npm-s
> aka **npm quick start**

It creates an empty `app.js` file and a `package.json` with the following properties in the current directory¹:
```json
{
  "name": "current-working-directory",
  "version": "0.0.1",
  "scripts": {
    "start": "node app.js"
  }
}
```

**¹ If it's given a second parameter, it'll create a new directory and iniate the package there.**

## Why
- Faster than `npm init`: you're not prompt with any options.
- More concise than `npm init [-y|--yes]`: you only have the **required** `name` and `version` fields of `package.json`.
- The `start` script is already filled with the created `app.js` file.

## Install
```console
$ npm i npm-s -g
```

## Usage
```console
$ npm-s [folder-name]
```
