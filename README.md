# Creating React app without CRA (Create React App)

## Why?

CRA is a command line tool that sets up a react environment for us. There are alot of configurations done on our behalf, and the abstraction results in lack of customizability. Therefore, CRA is a good starting tool for devs starting out with react, but webpack is better moving forward.

## Notes

Production Ready React Application requires a react environment (Javascript transpiler + module binder)

> Javascript Transpiler (Babel.JS) - converts one form of code to another (ES 5/6 to backwards compatible browser code). This is usually needed for browsers to support newer language innovations (i.e arrow functions)

> Module binder (webpack/gulp) - Takes different files (JS, CSS) and bundles them to smaller group of files. It also helps us manage dependencies by ordering which dependency gets loaded first (dependency graph).

## Steps

```
    -- initializing npm project --
    npm init -y                                 // initialize npm in current directory with default settings

    -- installing react libraries --
    npm install react                           // install react library
    npm install react-dom                       // install react-dom library

    -- installing module binder libraries --
    npm install webpack --save-dev              // install webpack as dev dependency (not required in prod. mybe cause we have build tools that take care of that prior to deployment)
    npm install webpack-cli --save-dev          // cli commands for webpack for efficiency
    npm install webpack-dev-server --save-dev   // this will give us a server with live reload

    -- installing transpiler libraries --
    npm install @babel/core --save-dev          // code transpiler
    npm install babel-loader --save-dev         // JS loader (required by webpack to handle different file types and determine order/how files are loaded)
    npm install @babel/preset-react --save-dev  // presets for all React plugins (to support language features + JSX)
    npm install @babel/preset-env --save-dev    // preset that allows us to use recent version of JS code (without having to worry about syntax transforms to target environment) + make JS bundles smaller
    npm install html-webpack-plugin --save-dev  // simplifies html file creation to serve webpack bundles (adding JS bundle to index.html file)

    -- configuring webpack --
    touch webpack.config.js                     // for configuration, loaders, build information
```

![webpack.config.js configuration](./assets/Screenshot%202023-06-05%20at%203.25.33%20PM.png)