
# Design In The Browser Bootstrap, Patternlab edition!

This project provides a starting point for prototypes, with tooling and an opinion on CSS and JS structure to allow for rapid development utilising Patternlab ensuring all work is as transferable and as maintainable as possible.

## What's required

It is assumed the developers computer is running OSX or Linux. Depending on your setup you may already have the below installed;

* [Node.js](http://nodejs.org) (version 4.x.x)
* [PHP](http://www.php.net/) (version 5.5+)

## What's included

* [Patternlab-PHP](https://github.com/pattern-lab/edition-php-twig-standard): Currently the most complete and stable version of patternlab, and supports [twig](http://twig.sensiolabs.org/).
* [SASS](http://sass-lang.com/) CSS with [auto-prefixing](https://github.com/postcss/autoprefixer).
* [Browsersync](https://www.browsersync.io) for autoreloading.
* [Babel](https://babeljs.io) for ES2015 support with module loading.
* Consideration for images, currently copying the directory only. We encourage using SVG for icons and pre-optimised photograph assets.
* [Build commands](#build-scripts) for generating testable or deployable assets only

## Installation

To start a prototype using this bootstrap;

* **Get the files:** Clone this repository to a new directory, for example;
`git clone https://github.com/torchbox/design-in-browser-bootstrap.git new-project`.
* **Name the project:** Open `package.json` and replace the `name` with your project name [following npm guidelines](http://browsenpm.org/package.json#name).
* **Setup git**: Run `npm run git:init` in the root of your new project to remove existing git links with this repository and create a fresh project with the directory as is committed.
* **Install dependencies** Run `npm install` to run the install process.

## Developing with it

* To start the development environment `npm run start` - to stop this process press `ctrl + c`.
* This will start Browsersync and open your default browser after the startup process is complete. You can change this configuation by modifying the `browsersync.config.js` file, documented here https://www.browsersync.io/docs/options.
* Source files for developing your project are in `site` and the distribution folder for the compiled assets is `dist`. Any changes made to files in the `dist` directory will be overwritten.

### Build scripts

To only build assets for either development or production you can use

 * `npm run build` To build development assets
 * `npm run build:prod` To build assets with minification and vendor prefixes

### Debug script

To test production, minified and vendor prefixed assets you can use

 * `npm run debug` To develop with a simple http server, no browsersync and production assets


## Troubleshooting

## Technical Debt

 - 30 minute timeout from patternlab is hardcoded and within the vendor directory, a value has been modified in /patternlab/vendor/pattern-lab/core/src/PatternLab/Console/Commands/WatchCommand.php
 - Missing classes have been added to improve the rendering of titles on the file /patternlab/vendor/pattern-lab/styleguidekit-twig-default/views/partials/patternSectionSubtype.twig