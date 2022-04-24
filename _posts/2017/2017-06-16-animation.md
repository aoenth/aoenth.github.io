---
title: "Animation!"
date: "2017-06-16T01:20:24Z"
---

It has been a while focusing on the basics of Objective-C and iOS programming. Today I finally ran into animation! The infrastructure behind animation is Core Animation, which first appeared during WWDC in 2006 and it was supported by the first iPhone that was released in 2007. Apple later released `SpriteKit` that came along with iOS 7. `SpriteKit` supports physical properties, gravity, collisions and other animation settings right inside Interface Builder. But I like to know a little bit of more code in exchange for more control in the application.

For 90% of the time, animation is done on UIView's. The main method to animate views is `animateWithDuration:animations:completion:`. It can have many other arguments such as delay and options.

```objc
+ (void)animateWithDuration: // how long the animation is
                    options: // how the animation should behave, such as  transitions
                  animation: // a block that describes the animation in detail
                 completion: // a block that executes if the animation is complete
}
```

Moving on to Dynamic Animation. This is the kind of animation that allows interaction between objects, such as collision, gravity, bouncing and other cool stuff.

To start off, a `UIDynamicAnimator` is initiated with a view in which you want to animate, then various behaviors can be added to the animator. The animation is then evaluated at run time, forming a real-time 2D physical environment. The common behaviors such as gravity and collision actually exist as `UIGravityBehavior` and `UICollisionBehavior`, among others. Gravity can be set to any angle, and not just "down", the positive y direction on a screen. The acceleration is also adjustable, the default is set to 1000 points/s². When animated, this acceleration will feel like the real 9.81m/s². The collision is actually easier to implement: simply set the property `translatesReferenceBoundsIntoBoundary` to "`YES`" and all of the view's bounds are able to collide. Here is a demo:

<img width="350" src="https://res.cloudinary.com/solid-apps-inc/image/upload/v1650775687/SolidAppsAsset/2017/2017-06-15-DropIt_xs32cq.gif" />

(You can also play around this demo by cloning [this repo](https://github.com/aoenth/Dropit/tree/717a3d1dfe684d27ec3b6249ef137c29c74de870). This is an earlier commit, later commits require [Fingertips](https://github.com/mapbox/Fingertips) installed by cocoapod, you are also welcome to try it)
