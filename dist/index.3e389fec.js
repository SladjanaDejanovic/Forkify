var e,t,r,n,i,o,a,s,c,u,l,d,f,p,h,g,v="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function y(e){return e&&e.__esModule?e.default:e}var m={},b={},_=v.parcelRequire3a11;null==_&&((_=function(e){if(e in m)return m[e].exports;if(e in b){var t=b[e];delete b[e];var r={id:e,exports:{}};return m[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){b[e]=t},v.parcelRequire3a11=_);var w={},k=function(e){return e&&e.Math===Math&&e};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
w=k("object"==typeof globalThis&&globalThis)||k("object"==typeof window&&window)||// eslint-disable-next-line no-restricted-globals -- safe
k("object"==typeof self&&self)||k("object"==typeof v&&v)||// eslint-disable-next-line no-new-func -- fallback
function(){return this}()||w||Function("return this")();var E={},S={};// Detect IE8's incomplete defineProperty implementation
E=!(S=function(e){try{return!!e()}catch(e){return!0}})(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var $={},O={},j={},L={};L=!S(function(){// eslint-disable-next-line es/no-function-prototype-bind -- safe
var e=(function(){}).bind();// eslint-disable-next-line no-prototype-builtins -- safe
return"function"!=typeof e||e.hasOwnProperty("prototype")});var P=Function.prototype,x=P.call,M=L&&P.bind.bind(x,x);j=L?M:function(e){return function(){return x.apply(e,arguments)}};var T={},I={},q="object"==typeof document&&document.all,H=(I={all:q,IS_HTMLDDA:void 0===q&&void 0!==q}).all;// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
T=I.IS_HTMLDDA?function(e){return"function"==typeof e||e===H}:function(e){return"function"==typeof e};var F={},A={},N={},C={};// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
C=function(e){return null==e};var D=TypeError;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
N=function(e){if(C(e))throw D("Can't call method on "+e);return e};var R=Object;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
A=function(e){return R(N(e))};var W=j({}.hasOwnProperty);// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
F=Object.hasOwn||function(e,t){return W(A(e),t)};var U=Function.prototype,G=E&&Object.getOwnPropertyDescriptor,z=F(U,"name")&&(!E||E&&G(U,"name").configurable),B={},Y={},J={},V=Object.defineProperty;J=function(e,t){try{V(w,e,{value:t,configurable:!0,writable:!0})}catch(r){w[e]=t}return t};var Q="__core-js_shared__";Y=w[Q]||J(Q,{});var K=j(Function.toString);T(Y.inspectSource)||(Y.inspectSource=function(e){return K(e)}),B=Y.inspectSource;var X={},Z={},ee=w.WeakMap;Z=T(ee)&&/native code/.test(String(ee));var et={},er=I.all;et=I.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:T(e)||e===er}:function(e){return"object"==typeof e?null!==e:T(e)};var en={},ei={},eo={},ea=w.document,es=et(ea)&&et(ea.createElement);eo=function(e){return es?ea.createElement(e):{}},// Thanks to IE8 for its funny defineProperty
ei=!E&&!S(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty(eo("div"),"a",{get:function(){return 7}}).a});var ec={};// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
ec=E&&S(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eu={},el=String,ed=TypeError;// `Assert: Type(argument) is Object`
eu=function(e){if(et(e))return e;throw ed(el(e)+" is not an object")};var ef={},ep={},eh={},eg=Function.prototype.call;eh=L?eg.bind(eg):function(){return eg.apply(eg,arguments)};var ev={},ey={};ey=function(e,t){var r;return arguments.length<2?(r=w[e],T(r)?r:void 0):w[e]&&w[e][t]};var em={};em=j({}.isPrototypeOf);var eb={},e_={},ew={},ek={};ek="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var eE=w.process,eS=w.Deno,e$=eE&&eE.versions||eS&&eS.version,eO=e$&&e$.v8;eO&&// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(i=(n=eO.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!i&&ek&&(!(n=ek.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=ek.match(/Chrome\/(\d+)/))&&(i=+n[1]),ew=i;var ej=w.String;eb=// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
(e_=!!Object.getOwnPropertySymbols&&!S(function(){var e=Symbol("symbol detection");// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
// nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
// of course, fail.
return!ej(e)||!(Object(e) instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&ew&&ew<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var eL=Object;ev=eb?function(e){return"symbol"==typeof e}:function(e){var t=ey("Symbol");return T(t)&&em(t.prototype,eL(e))};var eP={},ex={},eM={},eT=String;eM=function(e){try{return eT(e)}catch(e){return"Object"}};var eI=TypeError;// `Assert: IsCallable(argument) is true`
ex=function(e){if(T(e))return e;throw eI(eM(e)+" is not a function")},// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
eP=function(e,t){var r=e[t];return C(r)?void 0:ex(r)};var eq={},eH=TypeError;// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
eq=function(e,t){var r,n;if("string"===t&&T(r=e.toString)&&!et(n=eh(r,e))||T(r=e.valueOf)&&!et(n=eh(r,e))||"string"!==t&&T(r=e.toString)&&!et(n=eh(r,e)))return n;throw eH("Can't convert object to primitive value")};var eF={},eA={};eA=!1,(eF=function(e,t){return Y[e]||(Y[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.32.1",mode:eA?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.1/LICENSE",source:"https://github.com/zloirock/core-js"});var eN={},eC=0,eD=Math.random(),eR=j(1..toString);eN=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eR(++eC+eD,36)};var eW=w.Symbol,eU=eF("wks"),eG=eb?eW.for||eW:eW&&eW.withoutSetter||eN,ez=TypeError,eB=(F(eU,e="toPrimitive")||(eU[e]=e_&&F(eW,e)?eW[e]:eG("Symbol."+e)),eU[e]);// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
ep=function(e,t){if(!et(e)||ev(e))return e;var r,n=eP(e,eB);if(n){if(void 0===t&&(t="default"),r=eh(n,e,t),!et(r)||ev(r))return r;throw ez("Can't convert object to primitive value")}return void 0===t&&(t="number"),eq(e,t)},// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
ef=function(e){var t=ep(e,"string");return ev(t)?t:t+""};var eY=TypeError,eJ=Object.defineProperty,eV=Object.getOwnPropertyDescriptor,eQ="enumerable",eK="configurable",eX="writable";r=E?ec?function(e,t,r){if(eu(e),t=ef(t),eu(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eX in r&&!r[eX]){var n=eV(e,t);n&&n[eX]&&(e[t]=r.value,r={configurable:eK in r?r[eK]:n[eK],enumerable:eQ in r?r[eQ]:n[eQ],writable:!1})}return eJ(e,t,r)}:eJ:function(e,t,r){if(eu(e),t=ef(t),eu(r),ei)try{return eJ(e,t,r)}catch(e){}if("get"in r||"set"in r)throw eY("Accessors not supported");return"value"in r&&(e[t]=r.value),e};var eZ={};eZ=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},en=E?function(e,t,n){return r(e,t,eZ(1,n))}:function(e,t,r){return e[t]=r,e};var e0={},e1=eF("keys");e0=function(e){return e1[e]||(e1[e]=eN(e))};var e2={};e2={};var e9="Object already initialized",e3=w.TypeError,e4=w.WeakMap;if(Z||Y.state){var e7=Y.state||(Y.state=new e4);/* eslint-disable no-self-assign -- prototype methods protection */e7.get=e7.get,e7.has=e7.has,e7.set=e7.set,/* eslint-enable no-self-assign -- prototype methods protection */o=function(e,t){if(e7.has(e))throw e3(e9);return t.facade=e,e7.set(e,t),t},a=function(e){return e7.get(e)||{}},s=function(e){return e7.has(e)}}else{var e8=e0("state");e2[e8]=!0,o=function(e,t){if(F(e,e8))throw e3(e9);return t.facade=e,en(e,e8,t),t},a=function(e){return F(e,e8)?e[e8]:{}},s=function(e){return F(e,e8)}}var e5=(X={set:o,get:a,has:s,enforce:function(e){return s(e)?a(e):o(e,{})},getterFor:function(e){return function(t){var r;if(!et(t)||(r=a(t)).type!==e)throw e3("Incompatible receiver, "+e+" required");return r}}}).enforce,e6=X.get,te=String,tt=Object.defineProperty,tr=j("".slice),tn=j("".replace),ti=j([].join),to=E&&!S(function(){return 8!==tt(function(){},"length",{value:8}).length}),ta=String(String).split("String"),ts=O=function(e,t,r){"Symbol("===tr(te(t),0,7)&&(t="["+tn(te(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!F(e,"name")||z&&e.name!==t)&&(E?tt(e,"name",{value:t,configurable:!0}):e.name=t),to&&r&&F(r,"arity")&&e.length!==r.arity&&tt(e,"length",{value:r.arity});try{r&&F(r,"constructor")&&r.constructor?E&&tt(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=e5(e);return F(n,"source")||(n.source=ti(ta,"string"==typeof t?t:"")),e};// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString=ts(function(){return T(this)&&e6(this).source||B(this)},"toString"),$=function(e,t,n){return n.get&&O(n.get,t,{getter:!0}),n.set&&O(n.set,t,{setter:!0}),r(e,t,n)};var tc={};// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
tc=function(){var e=eu(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t};// babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
var tu=w.RegExp,tl=tu.prototype;E&&S(function(){var e=!0;try{tu(".","d")}catch(t){e=!1}var t={},r="",n=e?"dgimsy":"gimsy",i=function(e,n){// eslint-disable-next-line es/no-object-defineproperty -- safe
Object.defineProperty(t,e,{get:function(){return r+=n,!0}})},o={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var a in e&&(o.hasIndices="d"),o)i(a,o[a]);return Object.getOwnPropertyDescriptor(tl,"flags").get.call(t)!==n||r!==n})&&$(tl,"flags",{configurable:!0,get:tc});var td={},tf={}.propertyIsEnumerable,tp=Object.getOwnPropertyDescriptor;u=tp&&!tf.call({1:2},1)?function(e){var t=tp(this,e);return!!t&&t.enumerable}:tf;var th={},tg={},tv={},ty=j({}.toString),tm=j("".slice);tv=function(e){return tm(ty(e),8,-1)};var tb=Object,t_=j("".split);// fallback for non-array-like ES3 and non-enumerable old V8 strings
tg=S(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return!tb("z").propertyIsEnumerable(0)})?function(e){return"String"===tv(e)?t_(e,""):tb(e)}:tb,th=function(e){return tg(N(e))};// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var tw=Object.getOwnPropertyDescriptor;c=E?tw:function(e,t){if(e=th(e),t=ef(t),ei)try{return tw(e,t)}catch(e){}if(F(e,t))return eZ(!eh(u,e,t),e[t])};var tk={};tk=function(e,t,n,i){i||(i={});var o=i.enumerable,a=void 0!==i.name?i.name:t;if(T(n)&&O(n,a,i),i.global)o?e[t]=n:J(t,n);else{try{i.unsafe?e[t]&&(o=!0):delete e[t]}catch(e){}o?e[t]=n:r(e,t,{value:n,enumerable:!1,configurable:!i.nonConfigurable,writable:!i.nonWritable})}return e};var tE={},tS={},t$={},tO={},tj={},tL={},tP=Math.ceil,tx=Math.floor;// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
tL=Math.trunc||function(e){var t=+e;return(t>0?tx:tP)(t)},// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
tj=function(e){var t=+e;// eslint-disable-next-line no-self-compare -- NaN check
return t!=t||0===t?0:tL(t)};var tM=Math.max,tT=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
tO=function(e,t){var r=tj(e);return r<0?tM(r+t,0):tT(r,t)};var tI={},tq={},tH=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
tq=function(e){return e>0?tH(tj(e),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
},// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
tI=function(e){return tq(e.length)};// `Array.prototype.{ indexOf, includes }` methods implementation
var tF=function(e){return function(t,r,n){var i,o=th(t),a=tI(o),s=tO(n,a);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(e&&r!=r){for(;a>s;)// eslint-disable-next-line no-self-compare -- NaN check
if((i=o[s++])!=i)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tA={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:tF(!0),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:tF(!1)}.indexOf,tN=j([].push);t$=function(e,t){var r,n=th(e),i=0,o=[];for(r in n)!F(e2,r)&&F(n,r)&&tN(o,r);// Don't enum bug & hidden keys
for(;t.length>i;)F(n,r=t[i++])&&(~tA(o,r)||tN(o,r));return o};var tC=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");l=Object.getOwnPropertyNames||function(e){return t$(e,tC)},d=Object.getOwnPropertySymbols;var tD=j([].concat);// all object keys, includes non-enumerable and symbols
tS=ey("Reflect","ownKeys")||function(e){var t=l(eu(e));return d?tD(t,d(e)):t},tE=function(e,t,n){for(var i=tS(t),o=0;o<i.length;o++){var a=i[o];F(e,a)||n&&F(n,a)||r(e,a,c(t,a))}};var tR={},tW=/#|\.prototype\./,tU=function(e,t){var r=tz[tG(e)];return r===tY||r!==tB&&(T(t)?S(t):!!t)},tG=tU.normalize=function(e){return String(e).replace(tW,".").toLowerCase()},tz=tU.data={},tB=tU.NATIVE="N",tY=tU.POLYFILL="P";tR=tU,/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/td=function(e,t){var r,n,i,o,a,s=e.target,u=e.global,l=e.stat;if(r=u?w:l?w[s]||J(s,{}):(w[s]||{}).prototype)for(n in t){// contained in target
if(o=t[n],i=e.dontCallGetSet?(a=c(r,n))&&a.value:r[n],!tR(u?n:s+(l?".":"#")+n,e.forced)&&void 0!==i){if(typeof o==typeof i)continue;tE(o,i)}(e.sham||i&&i.sham)&&en(o,"sham",!0),tk(r,n,o,e)}};var tJ={},tV={},tQ=Function.prototype,tK=tQ.apply,tX=tQ.call;// eslint-disable-next-line es/no-reflect -- safe
tV="object"==typeof Reflect&&Reflect.apply||(L?tX.bind(tK):function(){return tX.apply(tK,arguments)});var tZ={},t0={},t1=(t0=function(e){// Nashorn bug:
//   https://github.com/zloirock/core-js/issues/1128
//   https://github.com/zloirock/core-js/issues/1130
if("Function"===tv(e))return j(e)})(t0.bind);// optional / simple context binding
tZ=function(e,t){return ex(e),void 0===t?e:L?t1(e,t):function(){return e.apply(t,arguments)}};var t2={};t2=ey("document","documentElement");var t9={};t9=j([].slice);var t3={},t4=TypeError;t3=function(e,t){if(e<t)throw t4("Not enough arguments");return e};var t7={};// eslint-disable-next-line redos/no-vulnerable -- safe
t7=/(?:ipad|iphone|ipod).*applewebkit/i.test(ek);var t8={};t8="process"===tv(w.process);var t5=w.setImmediate,t6=w.clearImmediate,re=w.process,rt=w.Dispatch,rr=w.Function,rn=w.MessageChannel,ri=w.String,ro=0,ra={},rs="onreadystatechange";S(function(){// Deno throws a ReferenceError on `location` access without `--location` flag
f=w.location});var rc=function(e){if(F(ra,e)){var t=ra[e];delete ra[e],t()}},ru=function(e){return function(){rc(e)}},rl=function(e){rc(e.data)},rd=function(e){// old engines have not location.origin
w.postMessage(ri(e),f.protocol+"//"+f.host)};t5&&t6||(t5=function(e){t3(arguments.length,1);var t=T(e)?e:rr(e),r=t9(arguments,1);return ra[++ro]=function(){tV(t,void 0,r)},p(ro),ro},t6=function(e){delete ra[e]},t8?p=function(e){re.nextTick(ru(e))}:rt&&rt.now?p=function(e){rt.now(ru(e))}:rn&&!t7?(g=(h=new rn).port2,h.port1.onmessage=rl,p=tZ(g.postMessage,g)):w.addEventListener&&T(w.postMessage)&&!w.importScripts&&f&&"file:"!==f.protocol&&!S(rd)?(p=rd,w.addEventListener("message",rl,!1)):p=rs in eo("script")?function(e){t2.appendChild(eo("script"))[rs]=function(){t2.removeChild(this),rc(e)}}:function(e){setTimeout(ru(e),0)});var rf=(tJ={set:t5,clear:t6}).clear;// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
td({global:!0,bind:!0,enumerable:!0,forced:w.clearImmediate!==rf},{clearImmediate:rf});var rp=tJ.set,rh={},rg={};/* global Bun -- Deno case */rg="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rv=w.Function,ry=/MSIE .\./.test(ek)||rg&&((t=w.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
rh=function(e,t){var r=t?2:1;return ry?function(n,i/* , ...arguments */){var o=t3(arguments.length,1)>r,a=T(n)?n:rv(n),s=o?t9(arguments,r):[],c=o?function(){tV(a,this,s)}:a;return t?e(c,i):e(c)}:e};// https://github.com/oven-sh/bun/issues/1633
var rm=w.setImmediate?rh(rp,!1):rp;// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
td({global:!0,bind:!0,enumerable:!0,forced:w.setImmediate!==rm},{setImmediate:rm});/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rb=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof v?r:v).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
i(c,"_invoke",{value:(a=new j(o||[]),s=f,function(r,i){if(s===p)throw Error("Generator is already running");if(s===h){if("throw"===r)throw i;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return{value:t,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var c=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return(// A .throw or .return when the delegate iterator has no .throw
// method, or a missing .next mehtod, always terminate the
// yield* loop.
n.delegate=null,"throw"===i&&r.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g);var a=d(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var s=a.arg;return s?s.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
n[r.resultName]=s.value,// Resume execution at the desired location (see delegateYield).
n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(o,a);if(c){if(c===g)continue;return c}}if("next"===a.method)// function.sent implementation.
a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===f)throw s=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=p;var u=d(e,n,a);if("normal"===u.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
s=a.done?h:"suspendedYield",u.arg===g)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=h,// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
a.method="throw",a.arg=u.arg)}})}),c)}// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var f="suspendedStart",p="executing",h="completed",g={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function v(){}function y(){}function m(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(L([])));w&&w!==r&&n.call(w,a)&&// of the polyfill.
(b=w);var k=m.prototype=v.prototype=Object.create(b);// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=d(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
u.value=e,a(u)},function(e){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return r("throw",e,a,s)})}}(i,o,r,a)})}return r=// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
r?r.then(a,// invocations of the iterator.
a):a()}})}function $(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],e.forEach($,this),this.reset(!0)}function L(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return y.prototype=m,i(k,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:y,configurable:!0}),y.displayName=u(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a// If outerFn is a generator, return the full iterator.
:a.next().then(function(e){return e.done?e.value:a.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
E(k),u(k,c,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
e.done=!0,e)}},e.values=L,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&// location outside the try/catch block.
(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;O(r)}return i}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:L(e),resultName:r,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=t),g}},e}({});try{regeneratorRuntime=rb}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rb:Function("r","regeneratorRuntime = r")(rb)}const r_="https://forkify-api.herokuapp.com/api/v2/recipes/",rw="89242f0a-343e-40e4-81f7-3318cb660857",rk=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e;// promise that is being returned from getJSON will be reject with this error handling, and we will be able to handle the error in model.js, where we want it. We propagated error from one async funciton to another by re-throwing it here in this catch block
}},rE={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},rS=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},r$=async function(e){try{let t=await rk(`${r_}${e}?key=${rw}`);rE.recipe=rS(t),rE.bookmarks.some(t=>t.id===e)?rE.recipe.bookmarked=!0:rE.recipe.bookmarked=!1,console.log(rE.recipe)}catch(e){throw(// Temp error handling
console.error(`${e} 💥💥💥💥`),e)}},rO=async function(e){try{rE.search.query=e;let t=await rk(`${r_}?search=${e}&key=${rw}`);console.log(t),rE.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),rE.search.page=1}catch(e){throw console.error(`${e} 💥💥💥💥`),e}},rj=function(e=rE.search.page){rE.search.page=e;let t=(e-1)*rE.search.resultsPerPage,r=e*rE.search.resultsPerPage;// 0 - for example if we requested page 1: 1 - 1 is 0, and 0 * 10 is 0, so from that position in array of results
return rE.search.results.slice(t,r)},rL=function(e){rE.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rE.recipe.servings;// newQt = oldQt * newServings / oldServings
}),rE.recipe.servings=e},rP=function(){localStorage.setItem("bookmarks",JSON.stringify(rE.bookmarks))},rx=function(e){// Add bookmark
rE.bookmarks.push(e),e.id===rE.recipe.id&&(rE.recipe.bookmarked=!0),rP()},rM=function(e){// Remove bookmark
let t=rE.bookmarks.findIndex(t=>t.id===e);rE.bookmarks.splice(t,1),e===rE.recipe.id&&(rE.recipe.bookmarked=!1),rP()},rT=async function(e){try{let t=Object.entries(e)// make arary with Object.entries()
.filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient format! Please use the correct format :)");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await rk(`${r_}?search=${r.title}&key=${rw}`,r);rE.recipe=rS(n),rx(rE.recipe);// console.log(recipe);
}catch(e){throw e}};!function(){let e=localStorage.getItem("bookmarks");e&&(rE.bookmarks=JSON.parse(e));//JSON.parse() to convert it back to an object
}();var rI={};rI=new URL(_("kyEFX").resolve("hm5VY"),import.meta.url).toString();class rq{_data;/**
   * Render the recieved object to the DOM
   * @param {Object | Object[]} data The data to be rendered (e.g. recipe)
   * @param {boolean} [render=true] If false, create markup string instead of rendering to the DOM
   * @returns {undefined | string} A markup string is returned if render=false
   * @this {Object} View instance
   * @author Sladjana Dejanovic
   * @todo Finish implementation
   */render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=document.createRange().createContextualFragment(t),n=Array.from(r.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));n.forEach((e,t)=>{let r=i[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>{r.setAttribute(e.name,e.value)})})}_clear(){this._parentElement.innerHTML=""}renderSpinner=function(){let e=`
    <div class="spinner">
      <svg>
        <use href="${/*@__PURE__*/y(rI)}#icon-loader"></use>
      </svg>
    </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)};renderError(e=this._errorMessage){let t=`<div class="error">
      <div>
        <svg>
          <use href="${/*@__PURE__*/y(rI)}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${e}</p>
    </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`<div class="message">
      <div>
        <svg>
          <use href="${/*@__PURE__*/y(rI)}#icon-smile"></use>
        </svg>
      </div>
      <p>${e}</p>
    </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}}var rH={};//FRACTY REDUCES THE FRACTION.
function rF(e,t,r,n,i){var o,a,s;let c=[2,3,5];//If the numerator isn't from a repeating decimal case, the initialized array of prime numbers will suffice to find the common denominators.
if(!0===i)for(let t=3;t*t<=e;t+=2)e%t==0&&c.push(t);let u=0,l=e,d=t;//Initialize counter over the prime number array for the while loop.
for(;u<=c.length;)l%c[u]==0&&d%c[u]==0?(c[u],l/=c[u],d/=c[u]):u++;return o=d,a=l,s=r,1===o&&1===a?`${s=`${n}${(parseInt(s)+1).toString()}`}`:0===a?`${n}${s}`:"0"==s?`${n}${a}/${o}`:`${n}${s} ${a}/${o}`//If there's an integer and a fraction return both.
}// FRACTY CONVERTS DECIMAL NUMBERS TO FRACTIONS BY ASSUMING THAT TRAILING PATTERNS FROM 10^-2 CONTINUE TO REPEAT
// The assumption is based on the most standard numbering conventions
// e.g. 3.51 will convert to 3 51/100 while 3.511 will convert to 3 23/45
// Throw any number up to 16 digits long at fracty and let fracy do the work.
// If number is beyond 16 digits fracty will truncate at 15 digits to compensate for roundoff errors created in IEEE 754 Floating Point conversion.
rH=function(e){let t,r;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";let n=e.toString(),i=n.split("."),o=i[0];if("0"==r&&"0"!==o)return o;if("0"==r&&"0"==o)return"0";if("99"==(r=n.length>=17?i[1].slice(0,i[1].length-1):i[1])&&"0"!==o)return`${o} 99/100`;if("99"==r&&"0"==o)return"99/100";if(1-parseFloat(`.${r}`)<.0011&&(r="999"),void 0==r)return o;let a=r.split("").reverse().join(""),s=a.match(/^(\d+)\1{1,2}/);//Reverse the string to look for patterns.
if(!s||!(r.length>2))return(//IF THERE'S NO TRAILING PATTERN FRACTY DIVIDES THE INPUT BY THE NEAREST BASE 10 INTEGER GREATER THAN THE NUMERATOR.
function(e,t,r){let n=parseInt(e,10),i=Math.pow(10,e.length);//Numerator begins as decimal input converted into an integer.
return rF(n,i,t,r,!1);//Reduce the numerator and denominator.
}(r,o,t));//Begin calculating the numerator and denominator for decimals that don't have a pattern.
{let e=s[0].split("").reverse().join(""),n=s[1].split("").reverse().join("");if(n.length>1){let e=n.split(""),t=1;for(let r=0;r<e.length;r++)t/=e[0]/e[r];1===t&&(n=e[0])}return n.length>1&&n.length%2==0&&(n=parseInt(n.slice(0,n.length/2),10)-parseInt(n.slice(n.length/2,n.length),10)==0?n.slice(0,n.length/2):n),//IF THERE'S A TRAILING PATTERN FRACTY DIVIDES THE INPUT BY ONE SUBTRACTED FROM THE NEAREST BASE 10 NUMBER WITH NUMBER OF ZEROS EQUAL TO THE LENGTH OF THE REPEATED PATTERN (I.E. A SERIES OF 9'S) MULTIPLIED BY THE BASE 10 NUMBER GREATER THAN AND CLOSEST TO THE INPUT.
function(e,t,r,n,i){let o=e.length-r.length>=1?e.length-r.length:1,a=Math.pow(10,o),s=parseFloat(`0.${e}`),c=Math.pow(10,t.length),u=Math.round((s*c-s)*Math.pow(10,o));//Does the length of the non pattern segment of the input = 0? If it does, that's incorrect since we know it must equal at least 1, otherwise it's the length of the decimal input minus the length of the full pattern.
return rF(u,(c-1)*a,n,i,!0);//Further reduce the numerator and denominator.
}(r,n,e,o,t);//Begin calculating the numerator and denominator for decimals that have a pattern.
}};class rA extends rq{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;+n>0&&e(+n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){// event delegation is good for adding events on elements that don't exists yet when the page loads for the first time
let r=t.target.closest(".btn--bookmark");r&&e()})}_generateMarkup(){return`
    <figure class="recipe__fig">
          <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${/*@__PURE__*/y(rI)}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${/*@__PURE__*/y(rI)}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
                <svg>
                  <use href="${/*@__PURE__*/y(rI)}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
                <svg>
                  <use href="${/*@__PURE__*/y(rI)}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
            <svg>
              <use href="${/*@__PURE__*/y(rI)}#icon-user"></use>
            </svg>
          </div>

          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${/*@__PURE__*/y(rI)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this._data.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${/*@__PURE__*/y(rI)}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
    `}_generateMarkupIngredient(e){return`<li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${/*@__PURE__*/y(rI)}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${e.quantity?/*@__PURE__*/y(rH)(e.quantity):""}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${e.unit}</span>
        ${e.description}
      </div>
    </li>
    `}}var rN=new rA;class rC{#e=document.querySelector(".search");getQuery(){let e=this.#e.querySelector(".search__field").value;return this.#t(),e}#t(){this.#e.querySelector(".search__field").value=""}addHandlerSearch(e){this.#e.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rD=new rC,rR=new class extends rq{_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`<li class="preview">
    <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">
      <figure class="preview__fig">
        <img src="${this._data.image}" alt="${this._data.title}" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${this._data.title} ...</h4>
        <p class="preview__publisher">${this._data.publisher}</p>
      
      <div class="preview__user-generated ${this._data.key?"":"hidden"}">
      <svg>
        <use href="${/*@__PURE__*/y(rI)}#icon-user"></use>
      </svg>
      </div>
    </div>
    </a>
  </li>`}};class rW extends rq{_parentElement=document.querySelector(".results");_errorMessage="No recepies found for your query! Please try again ;)";_message="";_generateMarkup(){return this._data.map(e=>rR.render(e,!1)).join("")}}var rU=new rW;class rG extends rq{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");if(!r)return;let n=+r.dataset.goto;e(n)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return(// Page 1, and there are other pages
1===e&&t>1?`<button data-goto="${e+1}" class="btn--inline pagination__btn--next">
      <span>Page ${e+1}</span>
      <svg class="search__icon">
        <use href="${/*@__PURE__*/y(rI)}#icon-arrow-right"></use>
      </svg>
    </button>`:e===t&&t>1?`
      <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${/*@__PURE__*/y(rI)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${e-1}</span>
          </button>
      `:e<t?`<button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${/*@__PURE__*/y(rI)}#icon-arrow-left"></use>
      </svg>
      <span>Page ${e-1}</span>
    </button>
    <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
      <span>Page ${e+1}</span>
      <svg class="search__icon">
        <use href="${/*@__PURE__*/y(rI)}#icon-arrow-right"></use>
      </svg>
    </button>`:"");/*
    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return `
      ${generatePageButtons(curPage, numPages)}
      <button data-goto="${
        curPage + 1
      }" class="btn--inline pagination__btn--next">
        <span>Page ${curPage + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>`;
    }

    // Last page
    if (curPage === numPages && numPages > 1) {
      return `
      <button data-goto="${
        curPage - 1
      }" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${curPage - 1}</span>
      </button>
      ${generatePageButtons(curPage, numPages)}
    `;
    }

    // Other page
    if (curPage < numPages) {
      return `
      ${generatePageButtons(curPage, numPages)}
      <button data-goto="${
        curPage + 1
      }" class="btn--inline pagination__btn--next">
        <span>Page ${curPage + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>`;
    }

    // Page 1, and there are no other pages
    return '';*/}}var rz=new rG;class rB extends rq{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it! ;)";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return console.log(this._data),this._data.map(e=>rR.render(e,!1)).join("")}}var rY=new rB;class rJ extends rq{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded!";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault();let r=[...new FormData(this)],n=Object.fromEntries(r);// returns an object, which we spread into an array of all the fields that are in that form
e(n)})}_generateMarkup(){}}var rV=new rJ;///////////////////////////////////////////////
const rQ=async function(){try{// Getting recipe id from hash
let e=window.location.hash.slice(1);if(!e)return;rN.renderSpinner(),rU.update(rj()),rY.update(rE.bookmarks),// Loading recipe
await r$(e),rN.render(rE.recipe)}catch(e){rN.renderError(),console.error(e)}},rK=async function(){try{rU.renderSpinner();// 1) Get search query
let e=rD.getQuery();if(!e)return;// 2) Load search results
await rO(e),rU.render(rj()),rz.render(rE.search)}catch(e){console.log(e)}},rX=async function(e){try{rV.renderSpinner(),// Upload new recipe data
await rT(e),console.log(rE.recipe),rN.render(rE.recipe),rV.renderMessage(),rY.render(rE.bookmarks),// Change ID in url
window.history.pushState(null,"",`#${rE.recipe.id}`),// window.history.back() // going to previous page when clicked browser button for backwards
// Close form window
setTimeout(function(){rV.toggleWindow()},2500)}catch(e){console.error("\uD83D\uDCA5",e),rV.renderError(e.message)}};rY.addHandlerRender(function(){rY.render(rE.bookmarks)}),rN.addHandlerRender(rQ),rN.addHandlerUpdateServings(function(e){// 3) Update the recipe servings (in state)
rL(e),rN.update(rE.recipe)}),rN.addHandlerAddBookmark(function(){rE.recipe.bookmarked?rM(rE.recipe.id):rx(rE.recipe),rN.update(rE.recipe),rY.render(rE.bookmarks)}),rD.addHandlerSearch(rK),rz.addHandlerClick(function(e){rU.render(rj(e)),rz.render(rE.search)}),rV.addHandlerUpload(rX);/*
 Publisher-Subscriber Design pattern - design patterns in programming are standard solutions to certain kinds of problems.
So in the publisher-Subscriber pattern we have a publisher which is some code that knows when to react. And in this case, that's going to be the addHandlerRender function because it will contain the addEventListener method, it will know when to react to the event.Subscriber is code that actually wants to react, code that should actually be executed when the event happens,in this case that is the controlRecipes function

Subscribe to the publisher by passing into subscriber function as an argument. That means that as soon as the program loads, the init function is called which in turn immediately calls the addHandlerRender function from the view (bc the controller imports both view and model). As we call addHendlerRender, we pass in our controlRecipes function as an argument, subscribing controlRecipes to addHandlerRender. Now addHandlerRender listens for events using the addEventListener method as always, and then as soon as the event actually happens, the controlRecipes function will be called as the callback function of addEventListener (as soon as the publisher publishes an event the subscriber will get called)
*///# sourceMappingURL=index.3e389fec.js.map

//# sourceMappingURL=index.3e389fec.js.map
