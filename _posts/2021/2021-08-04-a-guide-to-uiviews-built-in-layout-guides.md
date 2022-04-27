---
title: "A Guide to UIView's Built-in Layout Guides"
date: "2021-08-04T23:42:17Z"
author: kevin
---

Since iOS 9 there has been a newcomer in the world of Auto Layout: UILayoutGuide. I knew they exist, but didn't know they were anything useful. When I wrote programmatic UIKit, I just used the supposedly standard 8 point margin. This is acceptable when there were no notches and safe areas.

aView.topAnchor.constraint(equalTo: view.topAnchor, constant: 8).isActive = true
aView.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 8).isActive = true
aView.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -8).isActive = true

Then later I found from auto-complete that these "system spacing" equivalents exist. Along with the `NSLayoutConstraint.activate([...])` syntax. Without doing any research, the multiplier sounds like it might work better with dynamic type and accessibility, but I didn't like it because it only supports iOS 11 or later, and I have an app that I still want to support iOS 10. Also notice the first and second items are swapped for the trailing and bottom constraints. Without swapping it or having a negative multiplier feels like it should work, but no luck so far.
```swift
NSLayoutConstraint.activate([
    aView.topAnchor.constraint(equalToSystemSpacingBelow: view.topAnchor, multiplier: 1),
    aView.leadingAnchor.constraint(equalToSystemSpacingAfter: view.leadingAnchor, multiplier: 1),
    view.trailingAnchor.constraint(equalToSystemSpacingAfter: aView.trailingAnchor, multiplier: 1),
    view.bottomAnchor.constraint(equalToSystemSpacingBelow: aView.bottomAnchor, multiplier: 1),
])
```

Today, I got frustrated with programmatic Auto Layout and wanted to read the official [Auto Layout Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AutolayoutPG/index.html#//apple_ref/doc/uid/TP40010853-CH7-SW1). It's a shame that I never read it, at least to a degree where I got anything useful from it. When reading it, I came across `layoutMarginGuide` and `readableContentGuide`. I didn't know what was the big deal or what their differences were, so with the added eager to try my freshly downloaded Xcode 13 beta 4, I started a small experiment. As of 2021, here were their differences:

![](https://res.cloudinary.com/solid-apps-inc/image/upload/v1650776946/SolidAppsAsset/2017/portrait-4_madt0e.png)

Figure 1 - Different layout guides on an iPad, an iPhone with notch and a 4" iPod touch

Looking at Figure 1, we have the blue area representing the layout margin guide, green is the readable content guide, and orange being the safe area layout guide. Aside from the legend, you might not be able to see the blue because it blends with the orange (safe area). Interestingly, the margin layout guide (blue) is just the safe area inset by 20 points in horizontally on the iPad and 16 points on the non-iPads. The readable content guide is identical to the layout margin guide on the non-iPads, but is significantly narrower on the iPad.

Here are the test results for landscape. Notice on the iPhone (middle), the safe area has inset on all four screen edges, avoiding the notch on one side and the home indicator on the bottom. They all leave enough space to be embedded in a UINavigationController.

![](https://res.cloudinary.com/solid-apps-inc/image/upload/v1650776971/SolidAppsAsset/2017/landscape-3_tqquzd.png)

Any subview that is not owned by the default view of a UIViewController will receive an 8 point margin for their subviews, if it were to be constrained to either the layout margin guide or the readable content guide of its parent view.

![](https://res.cloudinary.com/solid-apps-inc/image/upload/v1650776994/SolidAppsAsset/2017/portrait-5_kxle3t.png)

Landscape:

![](https://res.cloudinary.com/solid-apps-inc/image/upload/v1650777025/SolidAppsAsset/2017/landscape-4_h5jhn5.png)

The frame of the `safeAreaLayoutGuide` of any view will not go out of the default view's `safeAreaLayoutGuide`'s frame, this means adding a subview to a view whose frame is within the safe area will receive 0 point margins, as opposed to the 8.

In conclusion, the layout margin guide and the readable content guide is really useful! When you want the default spacing around any view, you can just use the layout margin guide, and it automatically applies the appropriate spacing for you. When you are displaying large bodies of text, the readable content guide helps keep the text within an accepted maximum width so you don't have to worry about it yourself. Both of these layout guides work on all devices.

If you're interested in exploring more, [here is the source](https://gist.github.com/aoenth/a3f65ed35ada5f8eebdd89a71b3a714b) that I used to generate these screens.
