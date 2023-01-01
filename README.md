<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# isSharedArrayBuffer

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is a [SharedArrayBuffer][mdn-sharedarraybuffer].

<section class="installation">

## Installation

```bash
npm install @stdlib/assert-is-sharedarraybuffer
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var isSharedArrayBuffer = require( '@stdlib/assert-is-sharedarraybuffer' );
```

#### isSharedArrayBuffer( value )

Tests if a value is a [`SharedArrayBuffer`][mdn-sharedarraybuffer].

<!-- eslint-disable no-unused-vars -->

```javascript
var SharedArrayBuffer = require( '@stdlib/array-shared-buffer' );

var bool;
try {
    bool = isSharedArrayBuffer( new SharedArrayBuffer( 10 ) );
    // returns true
} catch ( err ) {
    console.log( 'Environment does not support SharedArrayBuffers.' );
}

bool = isSharedArrayBuffer( [] );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-unused-vars -->

<!-- eslint no-undef: "error" -->

```javascript
var Float32Array = require( '@stdlib/array-float32' );
var Float64Array = require( '@stdlib/array-float64' );
var Int8Array = require( '@stdlib/array-int8' );
var Int16Array = require( '@stdlib/array-int16' );
var Int32Array = require( '@stdlib/array-int32' );
var Uint8Array = require( '@stdlib/array-uint8' );
var Uint8ClampedArray = require( '@stdlib/array-uint8c' );
var Uint16Array = require( '@stdlib/array-uint16' );
var Uint32Array = require( '@stdlib/array-uint32' );
var ArrayBuffer = require( '@stdlib/array-buffer' );
var SharedArrayBuffer = require( '@stdlib/array-shared-buffer' );
var isSharedArrayBuffer = require( '@stdlib/assert-is-sharedarraybuffer' );

var bool;
try {
    bool = isSharedArrayBuffer( new SharedArrayBuffer( 10 ) );
    // returns true
} catch ( err ) {
    console.log( 'Environment does not support SharedArrayBuffers.' );
}
bool = isSharedArrayBuffer( new ArrayBuffer( 10 ) );
// returns false

bool = isSharedArrayBuffer( new Float32Array( 10 ) );
// returns false

bool = isSharedArrayBuffer( new Int8Array( 10 ) );
// returns false

bool = isSharedArrayBuffer( new Uint8Array( 10 ) );
// returns false

bool = isSharedArrayBuffer( new Uint8ClampedArray( 10 ) );
// returns false

bool = isSharedArrayBuffer( new Int16Array( 10 ) );
// returns false

bool = isSharedArrayBuffer( new Uint16Array( 10 ) );
// returns false

bool = isSharedArrayBuffer( new Int32Array( 10 ) );
// returns false

bool = isSharedArrayBuffer( new Uint32Array( 10 ) );
// returns false

bool = isSharedArrayBuffer( new Float64Array( 10 ) );
// returns false

bool = isSharedArrayBuffer( new Array( 10 ) );
// returns false

bool = isSharedArrayBuffer( {} );
// returns false

bool = isSharedArrayBuffer( null );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-arraybuffer`][@stdlib/assert/is-arraybuffer]</span><span class="delimiter">: </span><span class="description">test if a value is an ArrayBuffer.</span>
-   <span class="package-name">[`@stdlib/assert/is-typed-array`][@stdlib/assert/is-typed-array]</span><span class="delimiter">: </span><span class="description">test if a value is a typed array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-sharedarraybuffer.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-sharedarraybuffer

[test-image]: https://github.com/stdlib-js/assert-is-sharedarraybuffer/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert-is-sharedarraybuffer/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-sharedarraybuffer/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-sharedarraybuffer?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-sharedarraybuffer.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-sharedarraybuffer/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-sharedarraybuffer/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-is-sharedarraybuffer/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-is-sharedarraybuffer/tree/esm
[branches-url]: https://github.com/stdlib-js/assert-is-sharedarraybuffer/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-sharedarraybuffer/main/LICENSE

[mdn-sharedarraybuffer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer

<!-- <related-links> -->

[@stdlib/assert/is-arraybuffer]: https://github.com/stdlib-js/assert-is-arraybuffer

[@stdlib/assert/is-typed-array]: https://github.com/stdlib-js/assert-is-typed-array

<!-- </related-links> -->

</section>

<!-- /.links -->
