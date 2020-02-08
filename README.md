# NovaMining Maintenance Webapp

This is the official repository of NovaMining's Maintenance Webapp. It has been built using [NextJS v9.2.1](https://github.com/zeit/next.js) as a JS Web Framework according to ES6 standards, styling is made on top of [Bulma CSS Framework v0.8.0](https://github.com/jgthms/bulma) while SCSS compiling is provided by [Babel 7.7.2](https://babeljs.io/), modules are compiled by [Webpack v4.41.2](https://webpack.js.org/). Any other reference to dependencies can be found in [`package.json`](https://github.com/novamining-network/novamining-maintenance/blob/master/package.json) file.

## How to run app

### Run development build:

```
yarn
yarn dev
```

### Run production build:

```
yarn build
yarn start
```
or
```
yarn prod
```

### Export as static HTML files:

```
yarn build
yarn export
```

### Serve on your local machine:

To try on your local machine note: you'll need to install [Serve](https://github.com/zeit/serve)

```
yarn add serve
cd out
serve -p 8080
```
