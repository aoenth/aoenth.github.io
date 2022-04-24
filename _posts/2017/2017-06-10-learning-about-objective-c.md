---
title: "Learning about Objective-C"
date: "2017-06-10T01:14:59Z"
---

Coming back from an iOS Coding club, I realized the importance of knowing Objective-C as a developer for iOS. Club member Harrison recommended the CS193P course from iTunes U library, so today I gave it a go and went through two lectures.

The lectures are densely-packed with information, but it is absolutely wonderful that I can take notes after pausing the video, and playing at half speed over and over when something is hard to understand. Today I learnt that this programming language is more than 30-years old and it is a strict superset of the C language (Probably lots of others languages are too). It uses C-style header (.h) and implementation files (.m), and it certainly is syntactically weird compared to other languages like Java.

Objective-C differs from C in that, it is completely object-oriented, it adds syntax for classes and methods. Objective-C differs from other modern OO programming languages in that, it has a special way of implementing public and private properties: the public properties are declared inside the header file, whereas the private properties are in the implementation file. During implementation, the getters and setters of public properties are automatically generated unless otherwise overwritten. For memory management, it uses the so called "automatic reference counting", meaning that as soon as there are no more "strong" pointers pointing to an instance in the memory, the memory it occupies is instantly freed, so you know exactly when things are released. Moreover, in Objective-C, when a pointer is pointing to nil, or null in other languages, the pointer will actually return 0 instead of crashing the program, which is very convenient.

In Objective-C, both square brackets and dot-notation are used to access the instance's properties and methods, I got really confused until I learned today that, by convention, only use dot notation when accessing the instance's setters and getters.

As an exercise, I made an app "Matchismo" that flips a playing card around: a random card is draw from a deck of card each time it is tapped. There is a temporary ugly label below showing how many flips have occurred. This app allowed me to really understand the underlying principle of the MVC design strategy - grouping code into model, the view, and the controller, and a set of rules of how one is communicated to another.

<video controls width="100%" src="https://res.cloudinary.com/solid-apps-inc/video/upload/v1650774876/SolidAppsAsset/2017/2017-06-10-Matchismo.mp4" />

I believe Objective-C is really a necessity for any iOS developer, not only because Swift is still in development, but also because lots of code written for iOS are still in Objective-C. I'll continue to learn Objective-C from the iTunes U library in the upcoming few days.
