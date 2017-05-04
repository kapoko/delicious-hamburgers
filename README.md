# Delicious Hamburgers 🍔

[![Build Status](https://travis-ci.org/kapoko/delicious-hamburgers.svg?branch=master)](https://travis-ci.org/kapoko/delicious-hamburgers)
[![npm version](https://badge.fury.io/js/delicious-hamburgers.svg)](https://badge.fury.io/js/delicious-hamburgers)

Beautiful hamburger menu buttons with pure CSS animations, customizable with SASS.

## Usage

### Plain CSS

1. [Download this stylesheet](https://github.com/kapoko/delicious-hamburgers/blob/master/dist/hamburgers.min.css) and include it on your page inside the `<head>` tags.

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

3. Use the class `active` on the button to trigger the animation. The implemention is up to you. You could use jQuery for example.

### Install via Yarn, NPM or Bower. 

Get that juicy SASS game on. Get your Delicious Hamburgers served up by your favourite package manager.

1. Install through the command line.

    ```bash
    yarn add delicious-hamburgers

    npm install delicious-hamburgers

    bower install delicious-hamburgers
    ```

2. Import the main `hamburgers.scss` file in your SASS file. 
    
    <sub>Note that the URL could be different depending on your project setup</sub>

    ```sass
    @import "~delicious-hamburgers/sass/hamburgers";
    ```

3. Compile your SASS. 

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

## Customization

### How-to 

With the power of SASS you can customize the buttons to fit your project even better. Declare your variables before including `hamburgers.scss`, only then they will override the default values. Like so: 

```sass
$hamburger-color:       #fff;

@import "~delicious-hamburgers/sass/hamburgers";
```

### List

Here's a full list of the customizable options available with their default values:

```sass
$hamburger-size:            50px;
```
```sass
$hamburger-thickness:       2px;
```

> <sup>Thickness of the bars. Note: when using `hamburger--arrow` or `hamburger--arrow-r`, uneven `px` values don't seem to work well in some browsers.</sup>

```sass
$hamburger-color:           #000;
```
```sass
$hamburger-color-active:    $hamburger-color;
```
```sass
$hamburger-opacity:         1;
```
```sass
$hamburger-opacity-hover:   1;
```
```sass
$hamburger-padding:         $hamburger-size / 10;
```

> <sup>The space between the button border and the actual bars. There's a little padding by default so the clickable area is a little bigger than the visual button. You can also use a `px` value here instead of a relative one.</sup>

```sass
$hamburger-bar-spacing:     $hamburger-size / 5;
```

> <sup>How far the bars are apart from eachother. You can also use a `px` value here instead of a relative one.</sup>

```sass
$hamburger-animation-speed: 1;
```

> <sup>The timings of the animations are carefully chosen. But you can use this factor variable to slow down or speed up the animations. Use `.5` for twice as slow, `2` for twice as fast etc.</sup>

```sass
$hamburger-border-radius:   0;
```
