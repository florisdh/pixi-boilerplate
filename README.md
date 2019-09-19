# pixijs-boilerplate
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)[![forthebadge](https://forthebadge.com/images/badges/check-it-out.svg)](https://forthebadge.com)

A fundamental **pixi.js boilerplate** to kickstart your game and start coding directly.

## Features
- Fast development pipeline
- Basic splash screen while preloading
- Easy asset batch loading
- Split game logics using pixi-scenes plugin
- Clear project hierarchy
- Auto cache busting source files
- Minified distribution builds

## Usage

### Setup
Clone the repository and install required dependencies.
```
git clone https://github.com/florisdh/pixi-boilerplate AWESOME-PROJECT
cd AWESOME-PROJECT
npm i
```

### Development
While developing you should run the development task, this will transpile your source files and copy all needed assets. Every time the watcher notices that a source file or asset is changed, it will build again. Please note that the typescript type checking is done in the background to improve performance and will not stop the build.
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
Needed a more feature rich version of the [pixi-start](https://github.com/florisdh/pixi-start) which contains more setup tools and scripts needed in most game projects.

## TODO
- Resize behaviour
- Sample app
- Some utils
- Write README
- Add ads
- Add analytics
