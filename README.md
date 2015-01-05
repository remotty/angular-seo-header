# angular-seo-header

An angular plugin for SEO (Search Engine Optimization) header.

- dynamic document title
- dynamic meta tag (not yet)
- dynamic header (link...) (not yet)

inspired by [angularjs-viewhead](https://github.com/apparentlymart/angularjs-viewhead).

### support

- ui-router (not yet)
- IE8 and above

## Installation

(1) Get angular-seo-header via [Bower](http://bower.io/)

```sh
$ bower install angular-seo-header
```
or add bower.json
```sh
$ bower install angular-seo-header --save
```

(2) add javascript link to html

```html
...
<script src="bower_components/angular-seo-header/dist/angular-seo-header.min.js"></script>
...
```

(3) add `'angular-seo-header'` to your main module's list of dependencies

```javascript
var myApp = angular.module('myApp', ['angular-seo-header']);
```

(4) enjoy!

## Usage

### options

use `seoOptionProvider`

```js
.config(function (seoOptionProvider) {
  seoOptionProvider.setOptions({
    title: {
      prefix: "homepage | ",
      postfix: " | homepage"
    }
  });
})
```

### directive

(1) add title to each view's template

- use element type if you want to remove element

```html
<seo-title>About</seo-title>
```

- use attribute type if you don't want to remove element

```html
<h1 seo-title>About</h1>
```

## Contributing

1. Fork it ( https://github.com/remotty/angular-seo-header/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

### setup

```
$ bower install
$ npm install
$ node_modules/protractor/bin/webdriver-manager update
```

### test

```
$ gulp test
```

### build

```
$ gulp
```
