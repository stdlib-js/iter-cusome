"use strict";var g=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var m=g(function(b,f){
var o=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=require('@stdlib/assert-is-function/dist'),p=require('@stdlib/assert-is-iterator-like/dist'),x=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,u=require('@stdlib/symbol-iterator/dist'),s=require('@stdlib/error-tools-fmtprodmsg/dist');function v(r,e){var i,n,a;if(!p(r))throw new TypeError(s('null3v',r));if(!x(e))throw new TypeError(s('null45',e));return i=0,n={},o(n,"next",l),o(n,"return",c),u&&q(r[u])&&o(n,u,d),n;function l(){var t;return a?{done:!0}:(t=r.next(),t.done?(a=!0,t):(t.value&&(i+=1),{value:i>=e,done:!1}))}function c(t){return a=!0,arguments.length?{value:t,done:!0}:{done:!0}}function d(){return v(r[u](),e)}}f.exports=v
});var y=m();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
