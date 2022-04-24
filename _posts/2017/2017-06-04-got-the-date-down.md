---
title: "Got the Date() Down!"
date: "2017-06-04T07:19:08Z"
---

Been working on the Chinese Zodiac app. First I have sketched out the app in a basic functional flow diagram, followed by the adding in the corresponding UI elements. Next, I moved on to try and code it, but ran into much difficulty as I am not yet familiar with Core Data and the highly strict and inflexible Navigation Controller. I had very little trouble revisiting `UITableView` and `UIDatePicker`, but most proudly, I figured out not only how to create a _Date_ object from _DateComponents_, but also extract _DateComponents_ from a _Date_ object, with the still-new Swift 3. It may not sound too exciting too people, but somehow I feel a sense of power, after having able to manipulate time with code.

![June3rd-ChineseZodiac](https://res.cloudinary.com/solid-apps-inc/image/upload/v1650749215/SolidAppsAsset/2017/Screenshot_of_Chinese_Zodiac_app_June_3_2017_j3rfqy.png)
*Wireframe of the Chinese Zodiac app*

Interestingly, buttons in the storyboard are restricted to text-based buttons, so a common technique used for more graphical approaches is to overlay a text-less button on top of an _UIView_ rectangle. Unfortunately _UIViews_ can only be a rectangle, and I wanted them to be circles; the solution I came up was to make the _UIView_ into a square, and code in its _view.layer.cornerRadius_ as exactly half of the square's side length. Although, this solution works when users run the app,  but doesn't preview in the storyboard. This explains the yellow squares in the app wireframe screenshots.

While browsing for various topics about Swift, I came across a blogger/Swift educator named [Bob Lee](https://www.bobthedeveloper.io/), who has been writing and teaching Swift and iOS development. His blog posts are amazingly comprehensive and complete. As he puts it:

> I try to use analogy to explain iOS Development so that my 13-year-old sister may understand.

It's nice to see successful peers in the field of iOS development. Perhaps one day I can meet with him and chat about iOS.
