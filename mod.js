// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var t=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;var e="function"==typeof Symbol?Symbol.toStringTag:"";var n=r&&"symbol"==typeof Symbol.toStringTag?function(r){var n,a,l,f,y;if(null==r)return t.call(r);a=r[e],y=e,n=null!=(f=r)&&o.call(f,y);try{r[e]=void 0}catch(o){return t.call(r)}return l=t.call(r),n?r[e]=a:delete r[e],l}:function(r){return t.call(r)},a="function"==typeof SharedArrayBuffer;function l(r){return a&&r instanceof SharedArrayBuffer||"[object SharedArrayBuffer]"===n(r)}export{l as default};
//# sourceMappingURL=mod.js.map
