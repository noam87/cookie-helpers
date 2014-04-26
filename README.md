## Cookie Helpers

Some helper functions for handling cookies in the browser.

## Install

#### Method 1: 

Simply require `cookies.js` in your HTML.


#### Method 2:

    bower install clusterfoo/cookie-helpers

## How to Use

#### Method 1:

If you are using [browserify](http://browserify.org/), simply

```js
var Cookies = require('clusterfoo.cookie-helpers');
Cookies.set(...);
Cookies.get(...);
```

Please use browserify.

#### Method 2:


```html
<script src="/path/to/cookies.js"></script>
<script>
    // initialize cookies.js
    Clusterfoo();
</script>
```

This will make the `Clusterfoo.cookies` object available globally:

```js
Clusterfoo.cookies.get( ... );
```

## API

`Cookies.get(name, value, days)`

`Cookies.get(name)`

`Cookies.destroy(name)`

--- 

The MIT License (MIT)

Copyright (c) 2014 Noam Gagliardi-Rabinovich

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
