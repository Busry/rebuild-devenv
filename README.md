# Rebuild js DEV ENV

## Git versioning

Create project folder and initialize it to be a git folder,That creates a local repo.
Then create a remote repos from any provider and link the two repo up.

```
$ mkdir project
$ git init
$ git remote add origin <remote repo url>
$ git pull origin master --allow-unrelated-histories
$ git merge origin origin/master
$ git add .
$ git commit -m " initial commit"
$ git push -u origin <local branch name>

```

## Add .editorconfig

install editorconfig in vsCode and then create .editorconfig
file in which the settings are writting.

```
$ touch .editorconfig
```

## Babel

Allow for using latest js code for all browser platforms.

```
npm install --save-dev @babel/core @babel/node @babel/cli @babel/register @babel/preset-env
```

then create `.babelrc` file and then configure it e.g

```
{ "presets": ["@babel/preset-env"] }
```

after which you can now use `babel-node` from the npm scripts of `package.json` file to run .js files, this allows babel transpile the.js files first before passing it to node.

```
"open:src": "babel-node buildScripts/srcServer.js",
```

## Webpack

Configure the webpack

webpack.config.js

```
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  mode: 'production',
  // debug: true,
  devtool: 'inline-source-map',
  // noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    })
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: { loader: 'babel-loader'} },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
    // loaders: [
    //   { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
    //   { test: /\.css$/, loaders: ['style', 'css'] }
    // ]
  }
}

```

install the following

```
npm i -D webpack webpack-dev middleware babel-loader css-loader style-loader
```

## Linting
