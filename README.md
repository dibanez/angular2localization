# Angular 2 Localization
[![Build Status](https://travis-ci.org/robisim74/angular2localization.svg?branch=master)](https://travis-ci.org/robisim74/angular2localization) [![npm version](https://badge.fury.io/js/angular2localization.svg)](https://badge.fury.io/js/angular2localization)
> An Angular 2 library to translate messages, dates and numbers.

This library is developed using TypeScript and Angular 2 for i18n and l10n of Angular 2 apps written in TypeScript, ES5 or ES6. 
It allows, in addition to translation, to localize numbers and dates of your app, adding language code, country code, and optionally script code, numbering system and calendar, through [Internationalization API](https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/Intl). It also implements the validation of numbers by locales. 
Because it is only a branch of Angular 2, the goal is the complete integration with the native solutions of Angular 2.

[Sample app](http://robisim74.github.io/angular2localization) built with Angular 2 Material & webpack, and its [source code](https://github.com/robisim74/angular2localization/tree/gh-pages).

Get the changelog by [releases](https://github.com/robisim74/angular2localization/releases).

Angular version: 2.0.0-rc.5.

## Angular 2 i18n solutions
             | **Angular 2 (work-in)** _Native_ | **ng2-translate** _External library_ | **angular2localization** _External library_
------------ | -------------------------------- | ------------------------------------ | -------------------------------------------
_Messages_ | Html attribute, Message ID, ? | impure pipe | pure pipe
_File formats_ | XLIFF, XMB/XTB, ? | static JSON | static JSON and via Web API
_New bootstrap (when language changes)_ | yes | no | no
_Getting the translation in component class_ | ? | yes | yes
_Default locale_ | ? | no | yes
_Numbers_ | pure pipe via Intl (only for en-US) | - | pure pipe via Intl
_Dates_ | pure pipe via Intl (only for en-US) | - | pure pipe via Intl
_Validation_ | - | - | numbers validation 

## Installing
You can add `angular2localization` to your project using `npm`:
```Shell
npm install --save angular2localization
```

## Loading
### Using SystemJS configuration
```JavaScript
var map = {
    ...
    'angular2localization': 'node_modules'
};

var packages = {
    ...
    'angular2localization/angular2localization': { main: '/bundles/angular2localization.umd.min.js', defaultExtension: 'js' }
};
```
#### Angular-CLI
See [Angular-CLI settings](https://github.com/robisim74/angular2localization/blob/master/doc/spec.md#Appendix%20A).
#### Ionic 2
[Using Ionic 2](https://github.com/robisim74/angular2localization/blob/master/doc/spec.md#Appendix%20B) with this library.

### Via webpack
Import the library in your `vendor` file after Angular 2 imports:
```TypeScript
import 'angular2localization/angular2localization';
```

### Plain JavaScript
If you build apps in Angular 2 using ES5, you can include the `umd` bundle in your `index.html`:
```Html
<script src="node_modules/angular2localization/bundles/angular2localization.umd.min.js"></script>
```
and using global `ng.angular2localization` namespace. For a basic usage, see this [ES5 example](https://github.com/robisim74/angular2localization/blob/master/doc/spec.md#Appendix%20C).

## Usage
See [library specification](https://github.com/robisim74/angular2localization/blob/master/doc/spec.md).

## Related projects
[Angular 2 Localization with an ASP.NET CORE MVC Service](https://damienbod.com/2016/04/29/angular-2-localization-with-an-asp-net-core-mvc-service/) @damienbod

## Building
In order to build the library if you want to contribute:
```Shell
npm install
typings install

npm test

npm run build
```
To test locally the npm package:
```Shell
npm pack ./dist
```
Then you can install it in your app to test it:
```Shell
npm install [path]angular2localization-[version].tgz
```

##License
MIT
