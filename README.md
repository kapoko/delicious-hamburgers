# [Delicious Hamburgers](https://kapoko.github.io/delicious-hamburgers) 🍔

[![npm version](https://img.shields.io/npm/v/delicious-hamburgers.svg)](https://www.npmjs.com/package/delicious-hamburgers)
[![npm](https://img.shields.io/npm/dm/delicious-hamburgers.svg)]()
[![Build Status](https://travis-ci.org/kapoko/delicious-hamburgers.svg?branch=master)](https://travis-ci.org/kapoko/delicious-hamburgers)

Beautiful hamburger menu buttons animated in pure CSS, customisable with Sass.

![gif](http://i.imgur.com/ZzPWjOY.gif)

This was inspired by [Jonsuh](https://github.com/jonsuh)'s great [hamburgers](https://github.com/jonsuh/hamburgers), however I felt the need for a little more elegant and modern animations, so here they are! 

## [Demo](https://kapoko.github.io/delicious-hamburgers)

## Usage

### Plain CSS

1. [Download this stylesheet](https://github.com/kapoko/delicious-hamburgers/blob/master/dist/hamburgers.min.css), it's all you need. Include it on your page inside the `<head>` tags.

    ```html
    <link href="path/to/hamburgers.min.css" rel="stylesheet">
    ```

2. Now add the markup:

    ```html
    <button class="hamburger hamburger--criss-cross" type="button">
        <div class="inner">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
    </button>
    ```
    
    <sup>By the way, you can also use `<div>` instead of `<button>` if you want/have to.</sup>

3. Use the class `active` on the button to trigger the animation. The implemention is up to you. You could use jQuery for example ([fiddle](https://jsfiddle.net/kapoko/03wdj278/)).

### Install via Yarn, NPM or Bower. 

Get that juicy Sass game on. Get your delicious hamburgers served up by your favourite package manager.

1. Install through the command line.

    ```bash
    yarn add delicious-hamburgers

    npm install delicious-hamburgers

    bower install delicious-hamburgers
    ```

2. Import the main `hamburgers.scss` file in your Sass file. 
    
    <sub>Note that the URL could be different depending on your project setup</sub>

    ```sass
    @import "~delicious-hamburgers/sass/hamburgers";
    ```

3. Compile your Sass. 

You can of course also [download](https://github.com/kapoko/delicious-hamburgers/archive/master.zip) the source and add it to your project manually.

## Animations

Here's a list of the animations you can choose from. Just switch out the class on the `button` element, and you're done! 

```
hamburger--apple
hamburger--arrow
hamburger--arrow-r
hamburger--collapse
hamburger--converge
hamburger--criss-cross
hamburger--default
hamburger--dive
hamburger--minimal
hamburger--spin
hamburger--stack
hamburger--twist
```

## Customisation

### How-to 

With the power of Sass you can customise the buttons to fit your project even better. Declare your variables before including `hamburgers.scss`, only then they will override the default values. Like so: 

```sass
$hamburger-color:               #fff;

@import "~delicious-hamburgers/sass/hamburgers";
```

### List of default variables

Here's a full list of the customizable options available with their default values:

```sass
$hamburger-size:                50px;
```
```sass
$hamburger-thickness:           2px;
```

> <sup>Thickness of the bars. Note: when using `hamburger--arrow` or `hamburger--arrow-r`, uneven `px` values don't seem to work well in some browsers.</sup>

```sass
$hamburger-color:               #000;
```
```sass
$hamburger-color-active:        $hamburger-color;
```
```sass
$hamburger-background:          transparent;
```
```sass
$hamburger-background-active:   $hamburger-background;
```
```sass
$hamburger-border-color:        transparent;
```
```sass
$hamburger-border-width:        0;
```

> <sup>Note: the border will always act like it's inset, even if you use a `div` element. I wanted to keep consistency between the `button` and `div` element, which normally react differently to a border. If you're using a `div` element, changing this won't affect the real size of the button.</sup>

```sass
$hamburger-opacity:             1;
```
```sass
$hamburger-opacity-hover:       1;
```
```sass
$hamburger-padding:             $hamburger-size / 10;
```

> <sup>The space between the button border and the actual bars. There's a little padding by default so the clickable area is a little bigger than the visual button. You can also use a `px` value here instead of a relative one.</sup>

```sass
$hamburger-bar-spacing:         $hamburger-size / 5;
```

> <sup>How far the bars are apart from eachother. You can also use a `px` value here instead of a relative one.</sup>

```sass
$hamburger-animation-speed:     1;
```

> <sup>The timings of the animations are carefully chosen. But you can use this factor variable to slow down or speed up the animations. Use `.5` for twice as slow, `2` for twice as fast etc.</sup>

```sass
$hamburger-border-radius:       0;
```

> <sup>Border-radius of the bars.</sup>

### For extra lean burgers, remove the animations you don't need

```sass
$hamburger-animations: (
    apple,
    arrow,
    arrow-r,
    collapse,
    converge,
    criss-cross,
    default,
    dive,
    minimal,
    spin,
    stack,
    twist
) !default;
```

Copy this, place it before loading the `hamburgers.scss` just like the other variables and remove the animations you're not using. Now they won't get compiled, resulting in a smaller filesize. 

## Copyright and license

Aw yiss, code released under [MIT License](https://github.com/kapoko/delicious-hamburgers/blob/master/LICENSE). Have at it 🤘.
