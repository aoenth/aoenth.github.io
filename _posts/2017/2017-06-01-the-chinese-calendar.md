---
title: "The Chinese Calendar"
date: "2017-06-01T05:52:04Z"
---

Aside from attending my own graduation ceremony today, I have read some [articles](http://www.math.nus.edu.sg/aslaksen/calendar/chinese.shtml) about the Chinese calendar which will be implemented for my next app that includes Chinese Zodiac Signs. I found out that the modern Chinese calendar is essentially a calendar that counts by synodic months, which are complete phase periods of the moon observed on earth (time between one new moon to the next). Synodic months average to about 29.53 days, so 12 synodic months are about 11 days short from earth's rotation around the sun: 365.24 days. To make up for this difference, a "leap month" called the intercalary month is inserted every 3 years.

The Chinese calendar has 24 solar terms or in Chinese "节气" which are used to mark the change of seasons and weather patterns. As a result, the intercalary month recalibrates the prediction of these "seasonal markers" for the use of planning out crop plantation and harvesting. But that's another topic at another time.

With this information, I can write very little code to determine the Zodiac Sign for any given year and not relying on hard-coded data or CSV parsers.
