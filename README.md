# Perlclip on mobile

I came to know [Perlclip](http://www.satisfice.com/tools.shtml) from Rapid Sofware Testing course. I find the tool is very useful especially its `counterstring` feature. Below is a quote from Perlclip help about counterstring:

```
counterstring {num} [{char}]:

Produces a special string of length {num} that counts its own characters.

"counterstring 10" would produce "*3*5*7*10*" which is a ten character long string, such that each asterisk is at a position in the string equal to the number that precedes it. This is useful for pasting into fields that cut off text, so that you can tell how many characters were actually pasted.

You can specify a separator other than asterisk. "counterstring 15 A" would produce "A3A5A7A9A12A15A"
```

I miss this feature when testing a mobile app. That's why I'm building a progressive web app for it.
