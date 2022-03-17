
<!--#echo json="package.json" key="name" underline="=" -->
create-object-and-assign
========================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
(p, ...a) → Object.assign(Object.create(p), ...a)
<!--/#echo -->


* Exactly what is says on the tin. (`→` is not `=>`)
* No shenanigans.
* No polyfills. (If you want them, try [`npm:create-assign`][cr-ass] instead.)


  [cr-ass]: https://github.com/adf0001/create-assign/blob/c9475eee87096930f672c7274e71d1cfccac37c0/create-assign.js



API
---

This module exports one function:

<!--#include file="index.js" code="javascript" -->
<!--#verbatim lncnt="4" -->
```javascript
function crObAss(p, ...a) { return Object.assign(Object.create(p), ...a); }
module.exports = crObAss;
```
<!--/include-->



Usage
-----

see [test/usage.mjs](test/usage.mjs)


<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
