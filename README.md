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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# isSharedArrayBuffer

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is a [SharedArrayBuffer][mdn-sharedarraybuffer].



<section class="usage">

## Usage

```javascript
import isSharedArrayBuffer from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-sharedarraybuffer@v0.2.2-deno/mod.js';
```

#### isSharedArrayBuffer( value )

Tests if a value is a [`SharedArrayBuffer`][mdn-sharedarraybuffer].

<!-- eslint-disable no-unused-vars -->

```javascript
import SharedArrayBuffer from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-shared-buffer@deno/mod.js';

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
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@deno/mod.js';
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';
import Int8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-int8@deno/mod.js';
import Int16Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-int16@deno/mod.js';
import Int32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-int32@deno/mod.js';
import Uint8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@deno/mod.js';
import Uint8ClampedArray from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8c@deno/mod.js';
import Uint16Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint16@deno/mod.js';
import Uint32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@deno/mod.js';
import ArrayBuffer from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-buffer@deno/mod.js';
import SharedArrayBuffer from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-shared-buffer@deno/mod.js';
import isSharedArrayBuffer from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-sharedarraybuffer@v0.2.2-deno/mod.js';

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

-   <span class="package-name">[`@stdlib/assert-is-arraybuffer`][@stdlib/assert/is-arraybuffer]</span><span class="delimiter">: </span><span class="description">test if a value is an ArrayBuffer.</span>
-   <span class="package-name">[`@stdlib/assert-is-typed-array`][@stdlib/assert/is-typed-array]</span><span class="delimiter">: </span><span class="description">test if a value is a typed array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-sharedarraybuffer.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-sharedarraybuffer

[test-image]: https://github.com/stdlib-js/assert-is-sharedarraybuffer/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/assert-is-sharedarraybuffer/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-sharedarraybuffer/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-sharedarraybuffer?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-sharedarraybuffer.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-sharedarraybuffer/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-sharedarraybuffer/tree/deno
[deno-readme]: https://github.com/stdlib-js/assert-is-sharedarraybuffer/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/assert-is-sharedarraybuffer/tree/umd
[umd-readme]: https://github.com/stdlib-js/assert-is-sharedarraybuffer/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/assert-is-sharedarraybuffer/tree/esm
[esm-readme]: https://github.com/stdlib-js/assert-is-sharedarraybuffer/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/assert-is-sharedarraybuffer/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-sharedarraybuffer/main/LICENSE

[mdn-sharedarraybuffer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer

<!-- <related-links> -->

[@stdlib/assert/is-arraybuffer]: https://github.com/stdlib-js/assert-is-arraybuffer/tree/deno

[@stdlib/assert/is-typed-array]: https://github.com/stdlib-js/assert-is-typed-array/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
