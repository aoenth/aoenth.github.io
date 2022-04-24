---
title: "Run-time Matters!"
date: "2017-07-09T21:15:36Z"
---

These days I have been working solely on the Chinese Zodiac app. I haven't really gotten chance to publicize it. The reason being, I wanted to surprise the world with what I have created. Maybe this way I don't get enough feedbacks, so I have decided to have the app ready for public beta on the 15th of July, and giving me another two weeks or so to really polish the app for feedbacks and tweaking.

Today I took a break from developing and worked on some HackerRank challenges. I started by picking the easiest ones first, and ran into a [challenge](https://www.hackerrank.com/challenges/the-love-letter-mystery) that had a really high success rate (>90%) and labeled as "easy".

Basically the challenge is to count the number of character changes to transform a string into a palindrome, a symmetric word like "level", or it can be a sentence, like "Madam, I'm Adam". The character change between consecutive letters in the alphabet count as one. For example, to change from 'c' to 'a', it has to go through 'b', so 'c-b-a' has two changes.

So I gave it a try and after some googling, I have had the solution working inside my own Xcode console within about an hour (very slow I know haha). Being very proud of myself, and my googling skills, I pasted the solution code into HackerRank's editor, clicked "Submit Code", and waited for all the checkmarks to become green. And earn my points to up my rank on the site. I felt like a child in the morning on Christmas Day.

After about 20 seconds, here is what I saw:

![Screen Shot 2017-07-09 at 3.20.17 PM.png](https://res.cloudinary.com/solid-apps-inc/image/upload/v1650776165/SolidAppsAsset/2017/screen-shot-2017-07-09-at-3-20-17-pm_jci6cz.png)

It terminated on me and throwing me a "time out" error.

Ok, definitely code has to be improved. Seeing some monstrous constraints (a string of length up to 10⁴ characters) on the HackerRank challenge page, I determined the code must be shortened somehow. So I went back to Xcode and tried to trim down the complexity of the code. Nope, didn't help a bit: I put the code into a Playground file and on the sidebar it shows the number of iterations for each function is called. Boy! For a 20-character string, some function had over 4800 iterations. And that's when I realized, only the number of changes mattered, I don't actually need to make the words into palindromes, I only needed to count the numbers needed. So I guess when people say "know exactly what you want" when doing anything, is no lie. So I deleted all the code that converts the input to a palindrome and only counted whenever a change is required. Another 20 minutes passed and I pasted into HackerRank editor and tried again:

![Screen Shot 2017-07-09 at 3.45.35 PM](https://res.cloudinary.com/solid-apps-inc/image/upload/v1650776198/SolidAppsAsset/2017/screen-shot-2017-07-09-at-3-45-35-pm_qihtfq.png)

Alright, not bad, at least Test Case #5 and #6 are good now.

Then I came across a snippet of code that I saved up that converts a string into an array of ASCII numbers for each of the characters in the string. I thought I didn't need it at first, but I still gave it a shot. I converted each string input into an array and have their ASCII number subtracted symmetrically from beginning to exactly half of the string, and then added all the differences. Surprisingly it worked in Xcode, so with another surge of hope, I updated the code in the HR editor and clicked Submit Code: YAY! (Another half of an hour)

![Screen Shot 2017-07-09 at 4.24.56 PM.png](https://res.cloudinary.com/solid-apps-inc/image/upload/v1650776240/SolidAppsAsset/2017/screen-shot-2017-07-09-at-4-24-56-pm_tmsjm1.png)

This challenge really gave a heads up for me about code efficiency and run time. Programming before this point for me was all about two states: working or not. And this is one of the first times I had to make my code run better. It's exciting to see myself growing.
