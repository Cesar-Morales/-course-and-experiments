# Webpack Configuration

## STEPS

### - Create a package.json

```sh
npm init -y
```

### - Install webpack & webpack-cli

```sh
npm i webapack webpack-cli -D
```

### - Install html-webpack-plugin (html in dist)

```sh
npm i html-webpack-plugin
```

### - Install webpack-dev-server (interactive)

```sh
npm i webpack-dev-server
```

### - Create webpack file

```sh
touch webpack.config.js
```

# Adding React

## STEPS

### - Install Babel

```sh
npm i @babel/core @babel/cli @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties
```

### - Create a Babel file

```sh
touch .babelrc
```

### - Install react & react-dom

```sh
npm i react react-dom
```

# RUN

- npm install (_install all dependencies_)
- npm run wp-s-d (_run like a --mode=development in in localhost:12345/_)

# DEPLOY

- npx webpack -p
- result in /dist/\*
