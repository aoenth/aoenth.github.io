---
title: "Detecting Swift Versions in Online IDEs"
date: "2019-11-07T20:44:09Z"
---

As a young programming language, Swift changes frequently. It often brings us new features and deprecates old syntax. Sometimes when you run into an online IDE like [LeetCode](https://leetcode.com/playground/new/empty), [HackerRank](http://www.hackerrank.com) or [Online Swift Playgrounds](http://online.swiftplayground.run/), you will often wonder: which version of Swift am I working with here? Well, look no further. [This buddy on Stack Overflow](https://stackoverflow.com/questions/30790188/how-do-i-see-which-version-of-swift-im-using) uses a programmatic approach to determine the Swift version, quite cleverly. I've included the code below. 

Interestingly, [Repl.it](https://repl.it/languages/swift) actually has the version number printed as soon as the IDE is initialized. Kudos for them!

#if swift(>=5.2)
print("Hello, Swift 5.2")

#elseif swift(>=5.1)
print("Hello, Swift 5.1")

#elseif swift(>=5.0)
print("Hello, Swift 5.0")

#elseif swift(>=4.2)
print("Hello, Swift 4.2")

#elseif swift(>=4.1)
print("Hello, Swift 4.1")

#elseif swift(>=4.0)
print("Hello, Swift 4.0")

#elseif swift(>=3.2)
print("Hello, Swift 3.2")

#elseif swift(>=3.0)
print("Hello, Swift 3.0")

#elseif swift(>=2.2)
print("Hello, Swift 2.2")

#elseif swift(>=2.1)
print("Hello, Swift 2.1")

#elseif swift(>=2.0)
print("Hello, Swift 2.0")

#elseif swift(>=1.2)
print("Hello, Swift 1.2")

#elseif swift(>=1.1)
print("Hello, Swift 1.1")

#elseif swift(>=1.0)
print("Hello, Swift 1.0")

#endif
