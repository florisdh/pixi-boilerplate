# pixijs-starter
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)[![forthebadge](https://forthebadge.com/images/badges/check-it-out.svg)](https://forthebadge.com)

[![dependencies](https://david-dm.org/florisdh/pixijs-starter.svg)](https://david-dm.org/florisdh/pixijs-starter)

A fast and up to date **Pixi.js starter project** using webpack to give your project a headstart.

## Features
- Mixed typescript/javascript source support
- Sample Pixi.js container demo
- Clear project hierarchy
- Auto cache busting source files
- Fast auto-reload development cycle
- Minified distribution builds

## Under the hood
- Pixi.js v5
- Webpack v4.2
- Typescript v3.3
- Handlebars v4.1

## Usage

### Setup
Clone the starter and install required dependencies. (you've probably done this before)
```
git clone https://github.com/florisdh/pixijs-starter AWESOME-PROJECT
cd AWESOME-PROJECT
npm i
```

### Development
During the development you should run the development task, this will transpile your source files and copy all needed assets. Every time the watcher notices that a source file or asset is changed, it will build again. Please note that the typescript type checking is done in the background to improve performance and will not stop the build.
```
npm run dev
```
After running the development task you can go to ``http://localhost:8080`` in your favorite web browser and see the results. If you want to browse the files you can look in the ``_build/dev`` folder.

### Distribution
Running the distribution task will do the same as the development tasks to the source files and assets, but it will minify the transpiled source files into a smaller bundle.
```
npm run dist
```
You can browse the resulting files in the ``_build/dist`` directory or run ``http-server`` here to see it in the browser.

## About
Seeing some other starters/boilerplates go deprecated or using older pixi versions, I decided to setup a solid and up to date starter. Please let me know if you're using it or have some feedback. :)

## TODO
- Seperate output bundles
- Enable source mapping
