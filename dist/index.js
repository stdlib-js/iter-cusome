"use strict";var g=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(n){throw (e=0, n)}};};var m=g(function(b,f){
var o=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=require('@stdlib/assert-is-function/dist'),p=require('@stdlib/assert-is-iterator-like/dist'),x=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,i=require('@stdlib/symbol-iterator/dist'),s=require('@stdlib/error-tools-fmtprodmsg/dist');function v(r,e){var n,u,a;if(!p(r))throw new TypeError(s('1yV3v',r));if(!x(e))throw new TypeError(s('1yV45',e));return n=0,u={},o(u,"next",l),o(u,"return",c),i&&q(r[i])&&o(u,i,d),u;function l(){var t;return a?{done:!0}:(t=r.next(),t.done?(a=!0,t):(t.value&&(n+=1),{value:n>=e,done:!1}))}function c(t){return a=!0,arguments.length?{value:t,done:!0}:{done:!0}}function d(){return v(r[i](),e)}}f.exports=v
});var y=m();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
