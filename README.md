# Perlclip on mobile

> James Bach's Perlclip on mobile

I came to know [Perlclip](http://www.satisfice.com/tools.shtml) from Rapid Sofware Testing course. I find the tool is very useful especially its `counterstring` feature. Below is a quote from Perlclip help about counterstring:

```
counterstring {num} [{char}]:

Produces a special string of length {num} that counts its own characters.

"counterstring 10" would produce "*3*5*7*10*" which is a ten character long string, such that each asterisk is at a position in the string equal to the number that precedes it. This is useful for pasting into fields that cut off text, so that you can tell how many characters were actually pasted.

You can specify a separator other than asterisk. "counterstring 15 A" would produce "A3A5A7A9A12A15A"
```

I miss this feature when testing a mobile app. That's why I'm building a progressive web app for it.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
