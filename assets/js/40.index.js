(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{0:function(e,t,n){"use strict";e.exports=n(107)},107:function(e,t,n){"use strict";
/** @license React v16.5.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=n(76),r="function"==typeof Symbol&&Symbol.for,d=r?Symbol.for("react.element"):60103,s=r?Symbol.for("react.portal"):60106,o=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,l=r?Symbol.for("react.profiler"):60114,i=r?Symbol.for("react.provider"):60109,c=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,h=r?Symbol.for("react.forward_ref"):60112;r&&Symbol.for("react.placeholder");var p="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);!function(e,t,n,r,o,a,l,i){if(!e){if((e=void 0)===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,a,l,i],s=0;(e=Error(t.replace(/%s/g,function(){return c[s++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function b(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||g}function v(){}function k(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||g}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&m("85"),this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=b.prototype;var w=k.prototype=new v;w.constructor=k,u(w,b.prototype),w.isPureReactComponent=!0;var E={current:null,currentDispatcher:null},S=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,n){var r=void 0,o={},a=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(a=""+t.key),t)S.call(t,r)&&!x.hasOwnProperty(r)&&(o[r]=t[r]);var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){for(var c=Array(i),s=0;s<i;s++)c[s]=arguments[s+2];o.children=c}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===o[r]&&(o[r]=i[r]);return{$$typeof:d,type:e,key:a,ref:l,props:o,_owner:E.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===d}var j=/\/+/g,P=[];function R(e,t,n,r){if(P.length){var o=P.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function I(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,P.length<10&&P.push(e)}function C(e,t,n){return null==e?0:function e(t,n,r,o){var a=typeof t;"undefined"!==a&&"boolean"!==a||(t=null);var l=!1;if(null===t)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case d:case s:l=!0}}if(l)return r(o,t,""===n?"."+T(t,0):n),1;if(l=0,n=""===n?".":n+":",Array.isArray(t))for(var i=0;i<t.length;i++){var c=n+T(a=t[i],i);l+=e(a,c,r,o)}else if("function"==typeof(c=null===t||"object"!=typeof t?null:"function"==typeof(c=p&&t[p]||t["@@iterator"])?c:null))for(t=c.call(t),i=0;!(a=t.next()).done;)l+=e(a=a.value,c=n+T(a,i++),r,o);else"object"===a&&m("31","[object Object]"==(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return l}(e,"",t,n)}function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?(n=e.key,r={"=":"=0",":":"=2"},"$"+(""+n).replace(/[=:]/g,function(e){return r[e]})):t.toString(36);var n,r}function D(e,t){e.func.call(e.context,t,e.count++)}function A(e,t,n){var r,o,a=e.result,l=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?$(e,a,n,function(e){return e}):null!=e&&(_(e)&&(o=l+(!(r=e).key||t&&t.key===e.key?"":(""+e.key).replace(j,"$&/")+"/")+n,e={$$typeof:d,type:r.type,key:o,ref:r.ref,props:r.props,_owner:r._owner}),a.push(e))}function $(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(j,"$&/")+"/"),C(e,A,t=R(t,a,r,o)),I(t)}var F={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return $(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;C(e,D,t=R(null,null,t,n)),I(t)},count:function(e){return C(e,function(){return null},null)},toArray:function(e){var t=[];return $(e,t,null,function(e){return e}),t},only:function(e){return _(e)||m("143"),e}},createRef:function(){return{current:null}},Component:b,PureComponent:k,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:c,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,Provider:null,Consumer:null,unstable_read:null}).Provider={$$typeof:i,_context:e},(e.Consumer=e).unstable_read=function(e,t){var n=E.currentDispatcher;return null===n&&m("277"),n.readContext(e,t)}.bind(null,e),e},forwardRef:function(e){return{$$typeof:h,render:e}},Fragment:o,StrictMode:a,unstable_AsyncMode:f,unstable_Profiler:l,createElement:O,cloneElement:function(e,t,n){null==e&&m("267",e);var r=void 0,o=u({},e.props),a=e.key,l=e.ref,i=e._owner;if(null!=t){void 0!==t.ref&&(l=t.ref,i=E.current),void 0!==t.key&&(a=""+t.key);var c=void 0;for(r in e.type&&e.type.defaultProps&&(c=e.type.defaultProps),t)S.call(t,r)&&!x.hasOwnProperty(r)&&(o[r]=void 0===t[r]&&void 0!==c?c[r]:t[r])}if(1===(r=arguments.length-2))o.children=n;else if(1<r){c=Array(r);for(var s=0;s<r;s++)c[s]=arguments[s+2];o.children=c}return{$$typeof:d,type:e.type,key:a,ref:l,props:o,_owner:i}},createFactory:function(e){var t=O.bind(null,e);return t.type=e,t},isValidElement:_,version:"16.5.2",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:E,assign:u}},B=F;e.exports=B.default||B},108:function(n,e){function r(e,t){return n.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(e,t)}n.exports=r},109:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},16:function(t,e){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=r=function(e){return n(e)}:t.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(e)}t.exports=r},2:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},4:function(e,t){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},454:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",function(){return m}),n.d(t,"default",function(){return g});var r=n(2),o=n.n(r),a=n(4),l=n.n(a),i=n(6),c=n.n(i),s=n(5),u=n.n(s),d=n(7),f=n.n(d),h=n(0),p=n.n(h),m={},g=function(e){function t(){return o()(this,t),c()(this,u()(t).apply(this,arguments))}return f()(t,e),l()(t,[{key:"render",value:function(){var e=this.props;return p.a.createElement("div",null,p.a.createElement("h1",{id:"consensus-algorithm"},"Consensus Algorithm"),p.a.createElement("p",null,"RISE uses a Delegated Proof of Stake (DPoS) model  to come to a consensus about which blocks to add to the blockchain. Delegated Proof of Stake is a consensus algorithm in which token holders have the ability to vote for a validator or a group of validators to decide on which transactions are valid and should be added. The system is designed to maintain irrefutable truth across the network through the use of a digital democracy."),p.a.createElement("p",null,"Specific nodes called Delegates produce all of the Blocks on the network and are voted in by RISE token holders, the stakeholders of the RISE network. The number of Delegates elected and producing blocks is fixed at 101, and each stakeholder is allowed to vote for up to 101 delegates. The weight of the stakeholder's vote is based upon how many RISE tokens that stakeholder possesses. A RISE token holder can vote for a delegate or many delegates by creating ",p.a.createElement(e.Link,{href:"pages/protocol/Transactions!vote-transaction"},"a Vote Transaction"),"."),p.a.createElement("p",null,"Although there are many consensus algorithms in development across various blockchain technologies, RISE has chosen DPoS to be the primary Consensus mechanism due to its many advantages in comparison to other systems. DPoS is an inherently democratic system and through the use of real-time voting allows for the entire network to participate in deciding on validity, whereas many systems concentrate the power in few nodes with large CPU resources. In addition, the lack of large computational barriers and long network propagation, allows for any node to participate, in a fast and efficient manner, increasing the networks overall transaction speed and efficiency."),p.a.createElement("h2",{id:"delegates"},"Delegates"),p.a.createElement("p",null,"A Delegate is a type of RISE account that has the ability to be elected to generate and validate blocks on the blockchain. Any account has the ability to register as a delegate by creating ",p.a.createElement(e.Link,{href:"pages/protocol/Transactions!register-delegate-transaction"},"a Register Delegate Transaction")," and submitting it to the network. Once validated, token holders can vote for the delegate to become a block producer. Only the top 101 delegates with the most votes weighted by stake are allowed to actually validate and generate blocks. Delegates receive a ",p.a.createElement("a",{href:"#block-rewards"},"fixed award")," for every block they produce."),p.a.createElement("p",null,"A Delegate's role in the system therefore is to"),p.a.createElement("ul",null,p.a.createElement("li",null,"Ensure the node is online and reachable"),p.a.createElement("li",null,"Collect up to 25 transactions from across the network for the next block"),p.a.createElement("li",null,"Sign, validate and broadcast the block"),p.a.createElement("li",null,"Work with other delegates in reaching consensus")),p.a.createElement("p",null,"If a delegate misbehaves on the network, the other delegates will refuse to accept the invalid blocks. In addition, stakeholders have the ability to remove their votes from a delegate and vote for another node."),p.a.createElement("h2",{id:"forging--rounds"},"Forging & Rounds"),p.a.createElement("p",null,'Forging is the process of validating and adding blocks to the blockchain ("mining" in the Bitcoin consensus algorithm). Only the top 101 delegates with the most votes weighted by stake are allowed to forge on the network. Forging delegates generate blocks in rounds. 101 blocks are produced every round in which each Delegate validates and generates one Block per round. At the beginning of the round, Delegates are promoted or demoted depending on the votes from the transactions in the previous round. Then each delegate gets assigned a 30 second timeslot in the round in which to generate a block. Therefore the round time is 50 minutes and 30 seconds (101 times 30 seconds). During their timeslot a delegate must select up to 25 transactions from the network and add them to a new block. Once the delegate has signed the block and broadcast it to the rest of the network, the next delegate can begin producing a new block in their assigned timeslot. If a delegate misses its timeslot, the next delegate must step in and forge two blocks.'),p.a.createElement("h2",{id:"broadhash-consensus"},"Broadhash Consensus"),p.a.createElement("p",null,"The Broadhash is an aggregated rolling hash of the last five blocks on the blockchain. Nodes which have the same broadhash therefore are in agreement about the current state of the blockchain. The hash is used to ensure that the majority nodes on the network reach consensus about the tip of the blockchain, thereby an important strategy to preventing forks in the blockchain. Peers on the network broadcast their broadhash to other peers via ",p.a.createElement(e.Link,{href:"pages/protocol/PeerToPeer!architecture"},"system headers"),". Broadhash consensus is achieved by selected 100 random peers attached to a node, and querying their broadhash. If 51 out of the 100 peers, have the same broadhash, than the node can be fairly certain that the network is in agreement about the blockchain state. Once consensus is achieved, delegates can generate the next block in their timeslot as described in ",p.a.createElement("a",{href:"#forging--rounds"},"Forging & Rounds"),"."),p.a.createElement("h2",{id:"forging-rewards"},"Forging Rewards"),p.a.createElement("p",null,"To incentivize delegates, as well as reward delegates for contributing by generating blocks. These rewards are collected from fixed inflation rates, as well as various network fees. Forging Delegates receive rewards in RISE at the end of every round."),p.a.createElement("h3",{id:"block-rewards"},"Block Rewards"),p.a.createElement("p",null,"Forging Delegates receive a fixed reward for every block they successfully generate and gets accepted by the network. These fixed rewards contribute to inflation in the token ecosystem. Although inflation will reduce over time, the inflation rate will never go away. Current milestones are as follows:"),p.a.createElement("div",{className:"table-wrapper"},p.a.createElement("table",null,p.a.createElement("thead",null,p.a.createElement("tr",null,p.a.createElement("th",null,"Year"),p.a.createElement("th",null,"Block #"),p.a.createElement("th",null,"Reward"),p.a.createElement("th",null,"Inflation"))),p.a.createElement("tbody",null,p.a.createElement("tr",null,p.a.createElement("td",null,"1"),p.a.createElement("td",null,"-"),p.a.createElement("td",null,"15 RISE"),p.a.createElement("td",null,"14.33%")),p.a.createElement("tr",null,p.a.createElement("td",null,p.a.createElement("strong",null,"2")),p.a.createElement("td",null,p.a.createElement("strong",null,"1,054,080")),p.a.createElement("td",null,p.a.createElement("strong",null,"12 RISE")),p.a.createElement("td",null,p.a.createElement("strong",null,"10.03%"))),p.a.createElement("tr",null,p.a.createElement("td",null,"3"),p.a.createElement("td",null,"2,108,160"),p.a.createElement("td",null,"9 RISE"),p.a.createElement("td",null,"6.84%")),p.a.createElement("tr",null,p.a.createElement("td",null,"4"),p.a.createElement("td",null,"3,162,240"),p.a.createElement("td",null,"6 RISE"),p.a.createElement("td",null,"4.27%")),p.a.createElement("tr",null,p.a.createElement("td",null,"5"),p.a.createElement("td",null,"4,216,320"),p.a.createElement("td",null,"3 RISE"),p.a.createElement("td",null,"2.05%")),p.a.createElement("tr",null,p.a.createElement("td",null,"6+"),p.a.createElement("td",null,"5,270,400"),p.a.createElement("td",null,"1 RISE"),p.a.createElement("td",null,"-"))))),p.a.createElement("p",null,"Currently the network is on Milestone 2, and therefore forging delegates receive 12 RISE per forged block. If a delegate misses its timeslot in the round (as described in ",p.a.createElement("a",{href:"#forging--rounds"},"Forging & Rounds"),"), then the next active delegate will receive double the reward as it must generate two blocks."),p.a.createElement("h3",{id:"network-fees"},"Network Fees"),p.a.createElement("p",null,"All transactions on the network require a fee in order to prevent spam from flooding the network (More information on the Fee Schedule is covered in ",p.a.createElement(e.Link,{href:"pages/protocol/Transactions"},"Transactions"),"). All transactional fees at the end of the round are aggregated and then split between all active participants in the last round."))}}]),t}(p.a.PureComponent)},5:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}t.exports=n},6:function(e,t,n){var r=n(16),o=n(109);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},7:function(e,t,n){var r=n(108);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},76:function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,r,o=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var l in n=Object(arguments[a]))s.call(n,l)&&(o[l]=n[l]);if(c){r=c(n);for(var i=0;i<r.length;i++)u.call(n,r[i])&&(o[r[i]]=n[r[i]])}}return o}}}]);