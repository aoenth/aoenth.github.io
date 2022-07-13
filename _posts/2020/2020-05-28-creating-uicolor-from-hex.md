---
title: "Creating UIColor from hex"
date: "2020-05-28T20:05:02Z"
tags: 
  - "uicolor"
  - "uikit"
math: true
---

There are times when you see a vibrant color on the web, or you wanna copy a color hex from Sketch, and you want to use this color in your app. The problem arises when you notice that none of the `UIColor` initializer overloads accept a hex as an argument. I spent an hour or two on this and created a `UIColor` extension which does just that. Let's see how it is done.

The color hex is a hexadecimal that ranges from `0x0` to `0xFFFFFF`, each pair of the digits from left to right correspond to the red, green and blue values that are out of 255, or `0xFF`. To extract the blue color, simply perform AND on the color hex with `0xFF`. For the remaining colors, we need to perform bit shifting in hexadecimal.

Bit Shifting in Hexadecimal

To understand bit shifting in hexadecimal, we need to understand how bit shifting is done in other radices. In binary, shifting to the right is equivalent to integer-dividing the value by 2.

`0b11011 >> 1 = 0b1101`

Therefore `27 >> 1 = 13`.

In decimal, shifting to the right is equivalent to integer-dividing the value by 10.

`7532 >> ?? = 753`

Why did I put question mark here? That is because the bitwise operator `>>` shifts the preceding operand bitwise, not "decimalwise". Unfortunately 10 is not a power of 2, we cannot use the bitwise operator to shift in decimal, because the binary value itself changes its "shape", or its bit composition, during the shift.

Hexadecimal has a radix of 16, which is a power of 2, and we can use the bitwise operator to shift its bits. Knowing that shifting to the right by 1 is equivalent of dividing the original valud by 2, we simply need to get the quotient between the original and the shifted value. For example

`0x001100 >> ?? = 0x000110`

That equation says in decimal `4352 >> ?? = 272`. The quotient of the two values is 16, which is $$ 2^4 $$. The `??` in the equation is 4:

`0x001100 >> 4 = 0x000110`

Let's try different values and see if we're right.

`0xFF0000 >> ?? = 0x0FF000`

In decimal, that is `16711680 >> ?? = 1044480`, we get 16 again after dividing 16711680 by 1044480. Okay. Let's try by shifting 2 digits:

`0xFF0000 >> ?? = 0x00FF00`

That is, `16711680 >> ?? = 65280`, we get 256, which is $$ 16^2 $$ or $$(2^4)^2$$, or $$ 2^8 $$. The `??` is 8.

How about 3 digits?

`0xFF0000 >> ?? = 0x000FF0`

That is `16711680 >> ?? = 4080 = 4096`, which is 163 or 24^3, or 212. The `??` in the equation is 12.

So we can conclude that in binary shifting, the number of digits you want to shift, say,`x`, is equal to the number after the `>>` operator. But in hexadecimal, that number can be determined by:

$$\begin{aligned} 16^x &= (2^4)^x \\

&= 2^{4x} \\

\end{aligned}$$

And now if we just take the exponents:

$$ log_2 2^{4x} = 4x $$

We get 4 times the original `x`. In other words, each bit shift in hexadecimal is 4 times that of binary.

## Extending UIColor

Going back to our original problem. We now know how to bit shift in hexadecimal, we can write something like:

https://gist.github.com/aoenth/80483e698b7314dadcd3707a6c55c85c

We create a convenience initializer, and decompose the input hexadecimal number into red, green and blue components. Next we shift all of them to 2 digits, and divide the resulting value by `0xFF` to get a CGFloat value between 0 to 1, which is what Swift wants in order to create a UIColor using its designated initializer.

To use this extension, we simply prepend the hex code with "0x" to tell Swift that this is a hex number. Fantastic! We can now copy these hex codes and use them directly in our code.

![](https://res.cloudinary.com/solid-apps-inc/image/upload/v1650776820/SolidAppsAsset/2017/screen-shot-2020-05-28-at-4.02.32-pm_cfojd8.png)
