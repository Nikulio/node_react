# Welcome to the KriStarter, React/Redux UI boilerplate!

![welcome](https://media.giphy.com/media/26vUTlnHulTgAU7le/giphy.gif "Grill")

## Usage

### With yarn :

```
git clone git@github.com:Nikulio/kristarter.git

cd kristarter

yarn
```

**for development:**

`yarn start`


or

`yarn start-dashboard`





**for production:**

`yarn build`

### With npm :

```
git clone git@github.com:Nikulio/kristarter.git

cd kristarter

npm i
```

**for development:**

`npm run start`

or

`npm run start-dashboard`

**for production:**

`npm run build`

### Flow usage

* Run `flow` in terminal for start Flow server
* Put `@flow` in comment at the top of yours .js file which you want to start checking (//@flow for .js files)
* You are all-set!

### Optional

* Install React DevTools for [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
* Install Redux DevTools for [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

## Guide

Kristarter is made for easier React/Redux development. For now it is :

* Webpack 4 based
* ES 5/6/7 compiler
* CSS/SCSS loader
* CSS reset included
* JSX compiler
* Boilerplate for redux-form
* Arrow functions in React classes and easier store creation :

```
store = {
  hello: "world"
}
```

instead of:

```
constructor(props) {
  super(props);
  this.state = {
    hello: "world"
  }
}
```

Also, no need in `this` binding, if you want to create new class method.
Just use arrows:

```
yourFunction = (optionalArg, optionalArg2) => {
  console.log("no need in this binding in the constructor")
}
```

* Webpack dev server and HMR included
* Preinstalled Redux
* Basic file structure included

I included best file structure IMHO for React/Redux project. We are splitting all
components into smart/dumb (visit [this page](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) for more info)
Also IMHO best way to write and maintain styles is to create external `index.scss`
in the component directory and use it.

So, smart components we are storing in the `components` folder, dumb in `containers`
folder. Action creators we are storing in the `action/index.js` file, constants
for actions we are storing in the `action/contst.js`

For new reducers we are creating new file in the `reducers` folder and import
them into `reducers/index.js` file.

In `public` folder we may add new images and other static files. For example, if you
have `house.jpg` and you want to use it in the project you should add it to the
`public/img` folder and use in you component as `img/house.jpg`. Also you should move it with we Webpack with `CopyWebpackPlugin`. You may find basic usage of it in the
`webpack.config.js` file or use it like this:

```
new CopyWebpackPlugin(
  [
    { from: "public/favicon.ico", to: "./" }, //for favicon
    { from: "public/img/", to: "./img" } //for images
  ]
),
```

* Default React/Redux lifecycle included

You may check basic React/Redux usage after installing project. In `App/App.js`
we are calling ours test action (`this.props.initAction(initActionData);`) and
causing `INIT_ACTION`. Take a glance on it and then create your own ones!

> Thanks for the attention and feel free to contact me!
