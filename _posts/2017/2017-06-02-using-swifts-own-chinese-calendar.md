---
title: "Using Swift's Own Chinese Calendar"
date: "2017-06-02T05:17:29Z"
---

After some more research about the Chinese calendar, I actually found out that the Swift library support many types of calendar, including the Chinese calendar. Since the Chinese calendar adds a leap month every three years as opposed to the Gregorian calendar's leap day (Feb. 29th), the Calendar object actually has a boolean property "isLeapMonth" to determine whether or not the year has a leap month.

To convert Gregorian calendar to Chinese, first I instantiated a calendar using "Calendar(identifier: Calendar.Identifier.chinese)". Then, one is able to create a DateFormatter object with this instance of calendar by assigning it to DateFormatter.calendar. Finally, I used the DateFormatter to nicely format any Date object into the corresponding Chinese calendar date using DateFormatter.string(from: Date).

With the math figured out, the next step is to sketch the app's functions and UI in detail. Planning to finish that before the weekend!

> ![June1-ChineseCalendar](https://res.cloudinary.com/solid-apps-inc/image/upload/v1650747858/SolidAppsAsset/2017/Screenshot_of_Swift_Playgrounds_-_Chinese_Calendar_csqape.png)
