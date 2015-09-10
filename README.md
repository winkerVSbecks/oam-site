# react-basscss-hot-boilerplate

Fork of [gaearon/react-hot-boilerplate](https://github.com/gaearon/react-hot-boilerplate)
with [Basscss](http://basscss.com) and [Rebass](http://jxnblk.com/rebass).

Uses style-loader, css-loader, postcss-loader, and cssnext.

## Usage

```
npm install
npm start
open http://localhost:3000
```

Edit `src/App.js` to get started.

### Editing CSS

The `src/app.css` is imported into `App.js` and is compiled through [postcss-basscss](https://github.com/basscss/postcss-basscss), which includes [conformance checking for Basscss](https://github.com/basscss/postcss-basscss#basscss-conformance).

To adjust default custom property and custom media values, edit `app.css` or pass values in as options in `webpack.config.js`. Values defined in `webpack.config.js` will override those in the CSS file.

### Importing Rebass Components

```js
import React, { Component } from 'react'
import { Row, Col, Button } from 'rebass'
```

The complete list of components can be found on http://jxnblk.com/rebass

#### Branches

- The `nobass` branch has PostCSS set up, but without Basscss or Rebass
- The `sass-loader` branch is set up for Sass if you’re not comfortable with CSS

---

**Original README follows**

react-hot-boilerplate
=====================

The minimal dev environment to enable live-editing React components.

### Usage

```
npm install
npm start
open http://localhost:3000
```

Now edit `src/App.js`.
Your changes will appear without reloading the browser like in [this video](http://vimeo.com/100010922).

### Linting

This boilerplate project includes React-friendly ESLint configuration.

```
npm run lint
```

### Using `0.0.0.0` as Host

You may want to change the host in `server.js` and `webpack.config.js` from `localhost` to `0.0.0.0` to allow access from same WiFi network. This is not enabled by default because it is reported to cause problems on Windows. This may also be useful if you're using a VM.

### Missing Features

This boilerplate is purposefully simple to show the minimal configuration for React Hot Loader. For a real project, you'll want to add a separate config for production with hot reloading disabled and minification enabled. You'll also want to add a router, styles and maybe combine dev server with an existing server. This is out of scope of this boilerplate, but you may want to look into [other starter kits](https://github.com/gaearon/react-hot-loader/blob/master/docs/README.md#starter-kits).

### Dependencies

* React
* Webpack
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [babel-loader](https://github.com/babel/babel-loader)
* [react-hot-loader](https://github.com/gaearon/react-hot-loader)

### Resources

* [Demo video](http://vimeo.com/100010922)
* [react-hot-loader on Github](https://github.com/gaearon/react-hot-loader)
* [Integrating JSX live reload into your workflow](http://gaearon.github.io/react-hot-loader/getstarted/)
* Ping dan_abramov on Twitter or #reactjs IRC
