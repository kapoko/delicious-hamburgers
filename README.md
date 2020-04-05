# [Delicious Hamburgers](https://kapoko.github.io/delicious-hamburgers) 🍔

[![npm version](https://img.shields.io/npm/v/delicious-hamburgers.svg)](https://www.npmjs.com/package/delicious-hamburgers)
[![npm](https://img.shields.io/npm/dm/delicious-hamburgers.svg)]()
[![github release](https://github.com/kapoko/delicious-hamburgers/workflows/Build%Release/badge.svg)]()
[![](https://github.com/kapoko/delicious-hamburgers/workflows/Build%Site/badge.svg)]()

Beautiful hamburger menu buttons animated in pure CSS, customisable with Sass.

![gif](http://i.imgur.com/ZzPWjOY.gif)

This was inspired by [Jonsuh](https://github.com/jonsuh)'s great [hamburgers](https://github.com/jonsuh/hamburgers), however I felt the need for a little more elegant and modern animations, so here they are! 

## [Demo](https://kapoko.github.io/delicious-hamburgers)

## Usage

### Install via npm or Yarn

Get your delicious hamburgers served up by your favourite package manager.

1. Install through the command line.

    ```bash
    yarn add delicious-hamburgers
    ```
    ```bash
    npm install delicious-hamburgers
    ```

2. Import Sass. First import the base file and then whichever animation you want. 
    
    ```scss
    @import "~delicious-hamburgers/scss/base";
    @import "~delicious-hamburgers/scss/animations/criss-cross";
    ```

    <sup>If you want to import everything you can also use `@import "~delicious-hamburgers/scss/hamburgers"`.</sup>

3. Add HTML markup. Switch out `hamburger--criss-cross` for the animation you want.

    ```html
    <button class="hamburger hamburger--criss-cross" type="button">
        <div class="inner">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
    </button>
    ```

    <sup>You can also use `<div>` instead of `<button>` if you want/have to.</sup>

4. Add class `active` to the `button` element to trigger the animation. The implemention is up to you. Here's an example in Javascript: ([fiddle](https://jsfiddle.net/kapoko/03wdj278/6/)).

### Plain CSS

1. You can also [download this stylesheet](https://github.com/kapoko/delicious-hamburgers/releases/latest/download/hamburgers.min.css), it's all you need. Include it on your page inside the `<head>` tags.

    ```html
    <link href="path/to/hamburgers.min.css" rel="stylesheet">
    ```

2. Add the HTML markup like above.

## Animations

Here's a list of the animations you can choose from. Just switch out the class on the `button` element, and you're done! 

```
hamburger--apple
hamburger--arrow
hamburger--arrow-right
hamburger--chop
hamburger--collapse
hamburger--converge
hamburger--criss-cross
hamburger--default
hamburger--dive
hamburger--flatten
hamburger--magnetic
hamburger--minimal
hamburger--parallel
hamburger--push
hamburger--shelf
hamburger--simple
hamburger--spin
hamburger--stack
hamburger--twist
hamburger--vertical
```

## Customisation

### How-to 

With the power of Sass you can customise the buttons to fit your project even better. Declare your variables **before** including the `base` file, only then they will override the default values. Like so: 

```scss
$hamburger-color:               #fff;

@import "~delicious-hamburgers/scss/base";
@import "~delicious-hamburgers/scss/animations/criss-cross";
```

### List of default variables

Here's a full list of the customizable options available with their default values:

```scss
$hamburger-size:                            50px;
$hamburger-thickness:                       2px; // Thickness of the bars
$hamburger-color:                           #000;
$hamburger-color-hover:                     $hamburger-color;
$hamburger-color-active:                    $hamburger-color;
$hamburger-background:                      transparent;
$hamburger-background-hover:                $hamburger-background;
$hamburger-background-active:               $hamburger-background;
$hamburger-background-transition-speed:     0.2s;
$hamburger-border-color:                    transparent;
$hamburger-border-width:                    0; // Note: the border will always act like it's inset, even if 
                                            // you use a div element. I wanted to keep consistency between 
                                            // the button and div element, which normally react differently 
                                            // to a border. If you're using a div element, changing this won't 
                                            // affect the real size of the button.
$hamburger-opacity:                         1;
$hamburger-opacity-hover:                   1;
$hamburger-opacity-transition-speed:        0.2s;
$hamburger-padding:                         round($hamburger-size / 10); // The space between the button border 
                                            // and the actual bars. There's a little padding by default so the 
                                            // clickable area is a little bigger than the visual button. You 
                                            // can also use a px value here instead of a relative one.
$hamburger-border-radius:                   0; // Border-radius of the button.
$hamburger-bar-border-radius:               0; // Border-radius of the bars.
$hamburger-bar-spacing:                     round($hamburger-size / 5); // How far the bars are apart from 
                                            // eachother. You can also use a px value here instead of a relative 
                                            // one.
$hamburger-animation-speed:                 1; // The timings of the animations are carefully chosen. But you 
                                            // can use this factor variable to slow down or speed up the animations. 
                                            // Use .5 for twice as slow, 2 for twice as fast etc.
$hamburger-class-name:                      'hamburger' // The main class and prefixes of the animation classes 
                                            // can be changed. This allows for different styled buttons on the 
                                            // same page.
```

#### Select which animations to compile by variable

Even if you import all the animations by including `~delicious-hamburgers/scss/hamburgers.scss` you can use the following variable to choose which animations to compile. Since v1.x.x this is not really necessary anymore because you can import animations separately, but here's the option anyway. 

```scss
$hamburger-animations: ( hamburger--apple, hamburger--arrow, etc... );
```

## Migration from v0.x.x to v1.x.x

There's some breaking changes when updating from v0.x.x to v1.x.x.

### Compatiblity with different sass implementations

For extra robustness this package makes use of [Sass' `math` module](https://sass-lang.com/documentation/modules/math). There are many different implementations of the Sass language and the primary one is [Dart Sass](https://sass-lang.com/dart-sass), which supports this math module. As of now `LibSass` (and because of that also `node-sass`) and `RubySass` haven't implemented this module yet, although in the future they most likely will.

If you get an error like `SassError: Invalid CSS after "$root-two: math": expected expression (e.g. 1px, bold), was ".sqrt(2);"` your project is probably not using Dart Sass, most likely `node-sass`. Read on for a possible solution.

<sup>Other examples needed? Please post an [issue](https://github.com/kapoko/delicious-hamburgers/issues) on Github.</sup>

#### Using webpack with `sass-loader`, or `node-sass` in general?

If you're using webpack try removing `node-sass` (which depends on LibSass) from your projects' devDependencies, and install `sass` (which is a Javascript distribution of Dart Sass). See [here](https://webpack.js.org/loaders/sass-loader/#implementation) for more information.

#### Using parcel-bundler?

Parcel officially uses `sass` so you're good to go!

### Bower support dropped

From v1.0.0 and on Bower support has been dropped. Versions v0.x.x will still be available on Bower as deprecated package.

### Variable name changes

Old (v0.x.x) | New (v1.x.x) | Comments
--- | --- | ---
`$hamburger-border-radius` | `$hamburger-bar-border-radius` | <sup>`$hamburger-border-radius` is now used for the outside border.</sup>
`$hamburger-animations: (arrow-r)` | `$hamburger-animations: (arrow-right)` | <sup>Variable is the same, but arrow-r is now arrow-right.</sup>
| `$hamburger-color-hover` |
| `$hamburger-background-hover` |

## Copyright and license

Aw yiss, code released under [MIT License](https://github.com/kapoko/delicious-hamburgers/blob/master/LICENSE). Have at it 🤘.
