---
title: "Views, Drawing and Gestures"
date: "2017-06-15T06:10:48Z"
---

Aside from dragging UIViews, - rectangular areas that allow you to put things in it - from the Interface Builder within Xcode, it is possible to create, change, and completely control a view with code. You'll think it will look a lot like old school Java game programming - lots of pixel manipulation. Yes and no. It is more complicated in that, in UIView you don't work with pixels, you work with "points" instead. This is to make sure that objects are rendered the same size on both retina and non-retina device screens. To take into account all the screen sizes and pixel densities, a "scale factor" constant is set within the view class, and this scale factor will be multiplied to the proportions of the view size at run time, which can be figured out by calling `self.bounds.size.width` or `self.bounds.size.height`. This "point" system works really well when it comes supporting fonts: `CGPoint`, the "point" object containing an x and y coordinate, can be directly used as font sizes in `UIFont`. This way it is easy to control the size of various objects in proportions to the size of the view in which they contain.

Geometry can also be drawn using paths. In `UIKit`, `UIBezierPath` is used to draw the path first, and various stroke and fill methods are applied after. But since one line of such "painting code" effects everything that was created within the view, so one must use `CGContext` to assign different "canvases" called "graphics state" for individual objects. Graphics states can be saved and restored within drawing subroutines:

```objc
-(void)drawGreenCircle:(CGContextRef) ctxt {
    // get out of current Graphics State and
    // start a new one CGContextSaveGState(ctxt);
    [[UIColor greenColor] setFill];
    // draw circle... // restore ctxt as the original Graphics State CGContextRestoreGState(ctxt);
} 

// main drawing method: 
-(void)drawRect:(CGRect)aRect {
    CGContextRef context = UIGraphicsGetCurrentContext();
    [[UIColor redColor] setFill];
    // do some stuff here 
    // draw a green circle inside "context":
    [self drawGreenCircle: context];
    // do more stuff & expect fill color to be red 
}
```

Lastly, I also learned about gestures. It is handled in `UIKit` by `UIGestureRecognizer`. Prior to this gesture recognizer, it was insanely difficult to know how the user is swiping the screen, due to the fact that lots of data is generated even for the simplest gestures. It is quite impressive what the Apple engineers did to make the touch experience so buttery smooth even for the very first iPhone back in 2007. The gesture recognizer supports pan, pinch, swipe, and tap, each has their own API. Pan and pinch are continuous gestures, they have different methods to detect when the touch began, have been, and ended, but all of the four gestures support a single "Recognized" state,  which can be used to trigger cool actions like flipping a card over. Below is a very very basic demo of what I learned today:
 

![June14-SuperCard](https://i.ibb.co/jHQn4zb/2017-06-14-Matchismo.gif)
