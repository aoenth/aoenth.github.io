---
title: "The One Hundred Light Switch Problem"
date: "2023-08-23T08:25:00-0500"
author: kevin
---

I recently came across a fun math problem: We have a 100 people and 100 light switches. Starting with all lights in the off state, each person numbered 1 to 100 goes through all 100 light switches. Person number 1 toggles every switch, person number 2 toggles every other switch, person number 3 toggles every 3rd switch and so on. All the way until the 100th person toggles every 100 switches. Question is, what would the end result look like for the 100 switches?

By going through lights 1 - 9 manually, I see that lights 1, 4, 9 are on. And after a person finishes toggling switches, all light switches whose numbers before that person's starting place will not be touched. So I predicted that all the perfect squares will stay on, but don't know why. After quickly realizing each light's end state depends on how many factors does that number have. But I thought what about prime number? Then I realized that the same rule applies. All I have to do to figure out the end state is to go through all 100 numbers are figure out all of their individual factors and see if it's an even number. If it is, then the light will be off, otherwise on.

To first check the perfect square theory, I wrote this small script:

```swift
import Foundation

var values = Array(repeating: false, count: 100)
for i in 0 ..< 100 {
    var currentPerson = i
    while currentPerson < 100 {
        values[currentPerson].toggle()
        currentPerson += (i + 1)
    }
}

for i in 0 ..< 100 {
    let value = values[i]
    let valueLength = String(describing: i + 1).count
    let padding = String(repeating: " ", count: 3 - valueLength)
    print(padding + "\(i + 1)" + (value ? "T" : "F"), terminator: " ")
    if (i + 1) % 10 == 0 {
        print()
    }
}
```

It has the following output:
```
  1T   2F   3F   4T   5F   6F   7F   8F   9T  10F 
 11F  12F  13F  14F  15F  16T  17F  18F  19F  20F 
 21F  22F  23F  24F  25T  26F  27F  28F  29F  30F 
 31F  32F  33F  34F  35F  36T  37F  38F  39F  40F 
 41F  42F  43F  44F  45F  46F  47F  48F  49T  50F 
 51F  52F  53F  54F  55F  56F  57F  58F  59F  60F 
 61F  62F  63F  64T  65F  66F  67F  68F  69F  70F 
 71F  72F  73F  74F  75F  76F  77F  78F  79F  80F 
 81T  82F  83F  84F  85F  86F  87F  88F  89F  90F 
 91F  92F  93F  94F  95F  96F  97F  98F  99F 100T 
```

Then my wife and I were talking about this problem, and she said the reasons that the perfect squares will stay on is because the perfect squares have odd number of factors, and they are the only type of number that has this property. It makes sense because the factors will need another factor with which to multiply in order to produce the resulting number, so they should all be in pairs. And this phenomenon of pairing becomes a special case for perfect squares, because the two equal numbers are represented by one person in the light switch problem. Leaving the light on. I thought this problem was very simple and seeing the result is very satisfying. 
