(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{0:function(e,t,n){"use strict";e.exports=n(108)},107:function(n,e){function r(e,t){return n.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(e,t)}n.exports=r},108:function(e,t,n){"use strict";
/** @license React v16.5.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=n(76),r="function"==typeof Symbol&&Symbol.for,p=r?Symbol.for("react.element"):60103,l=r?Symbol.for("react.portal"):60106,o=r?Symbol.for("react.fragment"):60107,u=r?Symbol.for("react.strict_mode"):60108,i=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,f=r?Symbol.for("react.context"):60110,s=r?Symbol.for("react.async_mode"):60111,y=r?Symbol.for("react.forward_ref"):60112;r&&Symbol.for("react.placeholder");var d="function"==typeof Symbol&&Symbol.iterator;function b(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);!function(e,t,n,r,o,u,i,c){if(!e){if((e=void 0)===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[n,r,o,u,i,c],l=0;(e=Error(t.replace(/%s/g,function(){return f[l++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function v(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}function w(){}function S(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&b("85"),this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=v.prototype;var _=S.prototype=new w;_.constructor=S,a(_,v.prototype),_.isPureReactComponent=!0;var g={current:null,currentDispatcher:null},O=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var r=void 0,o={},u=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(u=""+t.key),t)O.call(t,r)&&!j.hasOwnProperty(r)&&(o[r]=t[r]);var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){for(var f=Array(c),l=0;l<c;l++)f[l]=arguments[l+2];o.children=f}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:p,type:e,key:u,ref:i,props:o,_owner:g.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===p}var P=/\/+/g,E=[];function $(e,t,n,r){if(E.length){var o=E.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function C(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,E.length<10&&E.push(e)}function R(e,t,n){return null==e?0:function e(t,n,r,o){var u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var i=!1;if(null===t)i=!0;else switch(u){case"string":case"number":i=!0;break;case"object":switch(t.$$typeof){case p:case l:i=!0}}if(i)return r(o,t,""===n?"."+A(t,0):n),1;if(i=0,n=""===n?".":n+":",Array.isArray(t))for(var c=0;c<t.length;c++){var f=n+A(u=t[c],c);i+=e(u,f,r,o)}else if("function"==typeof(f=null===t||"object"!=typeof t?null:"function"==typeof(f=d&&t[d]||t["@@iterator"])?f:null))for(t=f.call(t),c=0;!(u=t.next()).done;)i+=e(u=u.value,f=n+A(u,c++),r,o);else"object"===u&&b("31","[object Object]"==(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return i}(e,"",t,n)}function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?(n=e.key,r={"=":"=0",":":"=2"},"$"+(""+n).replace(/[=:]/g,function(e){return r[e]})):t.toString(36);var n,r}function q(e,t){e.func.call(e.context,t,e.count++)}function T(e,t,n){var r,o,u=e.result,i=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?U(e,u,n,function(e){return e}):null!=e&&(k(e)&&(o=i+(!(r=e).key||t&&t.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+n,e={$$typeof:p,type:r.type,key:o,ref:r.ref,props:r.props,_owner:r._owner}),u.push(e))}function U(e,t,n,r,o){var u="";null!=n&&(u=(""+n).replace(P,"$&/")+"/"),R(e,T,t=$(t,u,r,o)),C(t)}var I={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return U(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;R(e,q,t=$(null,null,t,n)),C(t)},count:function(e){return R(e,function(){return null},null)},toArray:function(e){var t=[];return U(e,t,null,function(e){return e}),t},only:function(e){return k(e)||b("143"),e}},createRef:function(){return{current:null}},Component:v,PureComponent:S,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,Provider:null,Consumer:null,unstable_read:null}).Provider={$$typeof:c,_context:e},(e.Consumer=e).unstable_read=function(e,t){var n=g.currentDispatcher;return null===n&&b("277"),n.readContext(e,t)}.bind(null,e),e},forwardRef:function(e){return{$$typeof:y,render:e}},Fragment:o,StrictMode:u,unstable_AsyncMode:s,unstable_Profiler:i,createElement:x,cloneElement:function(e,t,n){null==e&&b("267",e);var r=void 0,o=a({},e.props),u=e.key,i=e.ref,c=e._owner;if(null!=t){void 0!==t.ref&&(i=t.ref,c=g.current),void 0!==t.key&&(u=""+t.key);var f=void 0;for(r in e.type&&e.type.defaultProps&&(f=e.type.defaultProps),t)O.call(t,r)&&!j.hasOwnProperty(r)&&(o[r]=void 0===t[r]&&void 0!==f?f[r]:t[r])}if(1===(r=arguments.length-2))o.children=n;else if(1<r){f=Array(r);for(var l=0;l<r;l++)f[l]=arguments[l+2];o.children=f}return{$$typeof:p,type:e.type,key:u,ref:i,props:o,_owner:c}},createFactory:function(e){var t=x.bind(null,e);return t.type=e,t},isValidElement:k,version:"16.5.2",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:g,assign:a}},M=I;e.exports=M.default||M},109:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},16:function(t,e){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=r=function(e){return n(e)}:t.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(e)}t.exports=r},2:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},4:function(e,t){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},434:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",function(){return b}),n.d(t,"default",function(){return h});var r=n(2),o=n.n(r),u=n(4),i=n.n(u),c=n(6),f=n.n(c),l=n(5),a=n.n(l),p=n(7),s=n.n(p),y=n(0),d=n.n(y),b={},h=function(e){function t(){return o()(this,t),f()(this,a()(t).apply(this,arguments))}return s()(t,e),i()(t,[{key:"render",value:function(){this.props;return d.a.createElement("h1",{id:"blocks"},"Blocks")}}]),t}(d.a.PureComponent)},5:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}t.exports=n},6:function(e,t,n){var r=n(16),o=n(109);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},7:function(e,t,n){var r=n(107);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},76:function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var f=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,r,o=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var i in n=Object(arguments[u]))l.call(n,i)&&(o[i]=n[i]);if(f){r=f(n);for(var c=0;c<r.length;c++)a.call(n,r[c])&&(o[r[c]]=n[r[c]])}}return o}}}]);