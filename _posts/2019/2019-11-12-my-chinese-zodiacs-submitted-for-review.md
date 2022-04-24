---
title: "\"My Chinese Zodiacs\" Submitted for Review"
date: "2019-11-12T03:12:52Z"
---

The long waited update to the Chinese Zodiac app is submitted for review. This update includes support for screens of iPhone X or later, and a redesign of the layout for easier access to the match feature.

In the process to update this app from version 1.0, many places of the code was refactored. First was to convert to Swift 4.2, then Swift 5. It wasn't too difficult because Xcode does most of the conversion for you.

Then there was a major update to the storyboard. The "Add" button now takes you straight into adding a new person, where before you had to select whether to add a new person or start matching the list of friends. 2 weeks ago, the `UITabBar` was added on the bottom. Along with cute icons for each of the tabs on the tab bar. The pig graphic is the same pig used in the zodiac signs in the app, if that was not obvious. And the heart in the pig for the matching icon, its vector path is same as the heart shape on certain gift for a special someone this year.

Due to this change, lots of segues are removed, and hidden navigation bars are used to handle all of the inter-view controller navigation. Big, rounded-rectangle buttons will trigger the navigation actions. This is a huge improvement from version 1.0, because before, each button activated a new segue and a brand new `UIViewController` is created. This is a problem because if you navigate back and forth a couple of times, you would actually have a huge stack of view controllers held in memory, and eventually your iDevice will run out of memory and iOS will kill the app. This probably has something to do with memory cycles, and can probably be caught by using Instruments in Xcode. I say probably because I haven't actually tested the app in Instruments. I should though. For next release, I promise!

Data Access for each person now has its own class "PersonDao". It sounds like it is coming from Java, but I am indeed was just writing Java code at work last week.

Further more, the fetching of "persons" and the matching of list of "persons" is now in the background and will asynchronously update the UI once it is done.

Lastly, the `UISegmentedControl` has its default background color changed from white. The default color is gray, and it is not very pleasing to the eye when the text in front of them is white.

Here is a sneak peak!

![](https://res.cloudinary.com/solid-apps-inc/image/upload/v1650776591/SolidAppsAsset/2017/screen-shot-2019-11-11-at-7.40.23-pm_k4yooy.png)

In the next update. I'm planning to support iPads and easier birthday input.
