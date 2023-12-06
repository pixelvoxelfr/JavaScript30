# Fun with HTML5 Canvas

## Intro
The goal of this tutorial is to practice with the HTML5 Canvas that allows you to draw on your page. This was something completely new to me that I've already heard of but that I've never practiced.

## Concepts learned

### The Window object

The window object allows to define parameters depending on the actual window where our app is running such as the size through window.innerWidth, window.innerHeight.

### HTML5 Canvas & Context

The Context derived from the Canvas gives us a bunch of functions and parameters to draw on the canvas. See the Resources to have a list of what you can do.

### The 'mousemove' event

This event gives us access to many parameters related to the movement of the mouse such as the position but also the speed of the movement.

## My personal take

I implemented different additional features on the exercice:

- Added a top menu to change some parameters of the brush
- Changed the size of the brush depending on the speed of the mouse (faster == smaller)

## Resources

[https://www.w3schools.com/tags/ref_canvas.asp](https://www.w3schools.com/tags/ref_canvas.asp)

[https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext)

[https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)

[https://developer.mozilla.org/fr/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation](https://developer.mozilla.org/fr/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)

[Getting Mouse Speed and Acceleration Codepen by ZFunx](https://codepen.io/zFunx/pen/WjVzWo)

[https://stackoverflow.com/questions/6417036/track-mouse-speed-with-js](https://stackoverflow.com/questions/6417036/track-mouse-speed-with-js)