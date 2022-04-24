---
title: "Value-driven Color"
date: "2020-05-27T20:46:54Z"
---

There are times when you want to display a graph of data and add meaningful colors based on their values. Such as the one below.

![](https://res.cloudinary.com/solid-apps-inc/image/upload/v1650776647/SolidAppsAsset/2017/simulator-screen-shot-iphone-11-pro-max-2020-05-27-at-16.23.39_oby3r9.png)

What we can do is to put a fixed number of colors, and use a switch statement with their case statement as ranges.

https://gist.github.com/aoenth/d88c052ca4d145e4650b20b1be0b57d1

What if we wanted a gradual change of colors, with a unique color corresponding to each value? Moreover, what if the y-values are not always 100?

![](https://res.cloudinary.com/solid-apps-inc/image/upload/v1650776677/SolidAppsAsset/2017/simulator-screen-shot-iphone-11-pro-max-2020-05-27-at-16.36.41_eip8jf.png)

My solution comes down in calculating each component of the RGB values of the resulting color, with the desired intermediate colors hard-coded.

https://gist.github.com/aoenth/53ffda83df9566ce7af8c882f04e5653

This approach gets the job done, but from a design point of view, I personally like finite number of colors. In fact, the app that is shown in this blog post is currently using a finite number of colors. These colors are the template colors in the Sketch app, and I thought they looked beautiful.
