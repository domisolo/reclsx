# Reclsx

---

[![NPM version](https://badgen.net/npm/v/reclsx)](https://www.npmjs.com/package/reclsx)
[![NPM Weekly Downloads](https://badgen.net/npm/dw/reclsx)](https://www.npmjs.com/package/reclsx)
[![License](https://badgen.net/npm/license/reclsx)](https://www.npmjs.com/package/reclsx)

> Dynamically `classnames` in `React`<br>Based on [react/jsx-runtime](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html)<br>Using [classNames/dedupe](https://github.com/JedWatson/classnames#alternate-dedupe-version)

## Example

```javascript
import React from 'react';
// no need to import classnames or clsx

function Header(props) {
  ...
  return (
    <header
      className={[
        'flex h-50px',
        'border rounded',
        { 'justify-between': props.between }
        { 'items-center justify-center': props.center }
      ]}
    >
    </header>
  )
}

// Apply
<Header center />

// Output
<header class="flex h-50px border rounded items-center justify-center"></header>
```

## Install

```bash
# via npm
$ npm i reclsx classnames

# via yarn
$ yarn add reclsx classnames
```

## Usage

The constructing `className` conditionally using [JedWatson/classnames](https://github.com/JedWatson/classnames), For detailed API options, please refer to [classNames/dedupe](https://github.com/JedWatson/classnames#alternate-dedupe-version)

```javascript
// basic
<div className="header navbar" /> // => <div class="header navbar"></div>

// conditionally
<div className={{ 'header': true, 'navbar': false, 'foo': true }} /> // => <div class="header foo"></div>
<div className={[ 'header', { 'navbar': false }, 'content', { 'foo': true } ]} /> // => <div class="header content foo"></div>
<div className={[ 'header', 'navbar', { 'navbar': false }, 'foo' ]} /> // => <div class="header foo"></div>

// dedupe
<div className={[ 'header', 'header', 'foo' ]} /> // => <div class="header foo"></div>

```

## Configure

Use Reclsx's jsx functions instead of the default jsx-runtime when compiling JSX.

### TypeScript support(Optional)

Make the Typescript compiler recognize Reclsx's className types in React.

```json
{
  "compilerOptions": {
    "jsxImportSource": "reclsx"
  }
}
```

### For Vite

```javascript
// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "reclsx",
    }),
  ],
});
```

### For Babel

Works with `Webpack` `Rollup` `Taro` etc.

```javascript
// .babelrc
{
  "presets": [
    [
      "@babel/preset-react",
      {
        "runtime": "automatic",
        "importSource": "reclsx"
      }
    ]
  ]
}
```

### For Esbuild

```javascript
# via JS
require("esbuild").buildSync({
  entryPoints: ["app.jsx"],
  bundle: true,
  jsxFactory: "jsx",
  inject: ['./node_modules/reclsx/dist/jsx-runtime.js'],
  outfile: "out.js",
});
```

## Support

React >= 17.0.0

## LICENSE [MIT](LICENSE)

Copyright © 2022 Daniel Zhao.
