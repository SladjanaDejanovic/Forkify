var e,t,r,n,i,o,a,s,c,u,l,d,f,p,h,g,v,m,y,b="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function _(e){return e&&e.__esModule?e.default:e}var w={},k={},E=b.parcelRequire3a11;null==E&&((E=function(e){if(e in w)return w[e].exports;if(e in k){var t=k[e];delete k[e];var r={id:e,exports:{}};return w[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){k[e]=t},b.parcelRequire3a11=E);var S={},O=function(e){return e&&e.Math===Math&&e};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
S=O("object"==typeof globalThis&&globalThis)||O("object"==typeof window&&window)||// eslint-disable-next-line no-restricted-globals -- safe
O("object"==typeof self&&self)||O("object"==typeof b&&b)||// eslint-disable-next-line no-new-func -- fallback
function(){return this}()||S||Function("return this")();var j={},$={};// Detect IE8's incomplete defineProperty implementation
j=!($=function(e){try{return!!e()}catch(e){return!0}})(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var L={},F={},M={},x={};x=!$(function(){// eslint-disable-next-line es/no-function-prototype-bind -- safe
var e=(function(){}).bind();// eslint-disable-next-line no-prototype-builtins -- safe
return"function"!=typeof e||e.hasOwnProperty("prototype")});var P=Function.prototype,T=P.call,I=x&&P.bind.bind(T,T);M=x?I:function(e){return function(){return T.apply(e,arguments)}};var q={},H={},N="object"==typeof document&&document.all,A=(H={all:N,IS_HTMLDDA:void 0===N&&void 0!==N}).all;// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
q=H.IS_HTMLDDA?function(e){return"function"==typeof e||e===A}:function(e){return"function"==typeof e};var C={},D={},R={},W={};// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
W=function(e){return null==e};var z=TypeError;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
R=function(e){if(W(e))throw z("Can't call method on "+e);return e};var U=Object;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
D=function(e){return U(R(e))};var G=M({}.hasOwnProperty);// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
C=Object.hasOwn||function(e,t){return G(D(e),t)};var B=Function.prototype,Y=j&&Object.getOwnPropertyDescriptor,J=C(B,"name")&&(!j||j&&Y(B,"name").configurable),V={},Q={},K={},X=Object.defineProperty;K=function(e,t){try{X(S,e,{value:t,configurable:!0,writable:!0})}catch(r){S[e]=t}return t};var Z="__core-js_shared__";Q=S[Z]||K(Z,{});var ee=M(Function.toString);q(Q.inspectSource)||(Q.inspectSource=function(e){return ee(e)}),V=Q.inspectSource;var et={},er={},en=S.WeakMap;er=q(en)&&/native code/.test(String(en));var ei={},eo=H.all;ei=H.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:q(e)||e===eo}:function(e){return"object"==typeof e?null!==e:q(e)};var ea={},es={},ec={},eu=S.document,el=ei(eu)&&ei(eu.createElement);ec=function(e){return el?eu.createElement(e):{}},// Thanks to IE8 for its funny defineProperty
es=!j&&!$(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty(ec("div"),"a",{get:function(){return 7}}).a});var ed={};// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
ed=j&&$(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var ef={},ep=String,eh=TypeError;// `Assert: Type(argument) is Object`
ef=function(e){if(ei(e))return e;throw eh(ep(e)+" is not an object")};var eg={},ev={},em={},ey=Function.prototype.call;em=x?ey.bind(ey):function(){return ey.apply(ey,arguments)};var eb={},e_={};e_=function(e,t){var r;return arguments.length<2?(r=S[e],q(r)?r:void 0):S[e]&&S[e][t]};var ew={};ew=M({}.isPrototypeOf);var ek={},eE={},eS={},eO={};eO="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var ej=S.process,e$=S.Deno,eL=ej&&ej.versions||e$&&e$.version,eF=eL&&eL.v8;eF&&// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(a=(o=eF.split("."))[0]>0&&o[0]<4?1:+(o[0]+o[1])),!a&&eO&&(!(o=eO.match(/Edge\/(\d+)/))||o[1]>=74)&&(o=eO.match(/Chrome\/(\d+)/))&&(a=+o[1]),eS=a;var eM=S.String;ek=// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
(eE=!!Object.getOwnPropertySymbols&&!$(function(){var e=Symbol("symbol detection");// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
// nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
// of course, fail.
return!eM(e)||!(Object(e) instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&eS&&eS<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ex=Object;eb=ek?function(e){return"symbol"==typeof e}:function(e){var t=e_("Symbol");return q(t)&&ew(t.prototype,ex(e))};var eP={},eT={},eI={},eq=String;eI=function(e){try{return eq(e)}catch(e){return"Object"}};var eH=TypeError;// `Assert: IsCallable(argument) is true`
eT=function(e){if(q(e))return e;throw eH(eI(e)+" is not a function")},// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
eP=function(e,t){var r=e[t];return W(r)?void 0:eT(r)};var eN={},eA=TypeError;// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
eN=function(e,t){var r,n;if("string"===t&&q(r=e.toString)&&!ei(n=em(r,e))||q(r=e.valueOf)&&!ei(n=em(r,e))||"string"!==t&&q(r=e.toString)&&!ei(n=em(r,e)))return n;throw eA("Can't convert object to primitive value")};var eC={},eD={};eD=!1,(eC=function(e,t){return Q[e]||(Q[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.32.1",mode:eD?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.1/LICENSE",source:"https://github.com/zloirock/core-js"});var eR={},eW=0,ez=Math.random(),eU=M(1..toString);eR=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eU(++eW+ez,36)};var eG=S.Symbol,eB=eC("wks"),eY=ek?eG.for||eG:eG&&eG.withoutSetter||eR,eJ=TypeError,eV=(C(eB,e="toPrimitive")||(eB[e]=eE&&C(eG,e)?eG[e]:eY("Symbol."+e)),eB[e]);// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
ev=function(e,t){if(!ei(e)||eb(e))return e;var r,n=eP(e,eV);if(n){if(void 0===t&&(t="default"),r=em(n,e,t),!ei(r)||eb(r))return r;throw eJ("Can't convert object to primitive value")}return void 0===t&&(t="number"),eN(e,t)},// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
eg=function(e){var t=ev(e,"string");return eb(t)?t:t+""};var eQ=TypeError,eK=Object.defineProperty,eX=Object.getOwnPropertyDescriptor,eZ="enumerable",e0="configurable",e1="writable";i=j?ed?function(e,t,r){if(ef(e),t=eg(t),ef(r),"function"==typeof e&&"prototype"===t&&"value"in r&&e1 in r&&!r[e1]){var n=eX(e,t);n&&n[e1]&&(e[t]=r.value,r={configurable:e0 in r?r[e0]:n[e0],enumerable:eZ in r?r[eZ]:n[eZ],writable:!1})}return eK(e,t,r)}:eK:function(e,t,r){if(ef(e),t=eg(t),ef(r),es)try{return eK(e,t,r)}catch(e){}if("get"in r||"set"in r)throw eQ("Accessors not supported");return"value"in r&&(e[t]=r.value),e};var e2={};e2=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},ea=j?function(e,t,r){return i(e,t,e2(1,r))}:function(e,t,r){return e[t]=r,e};var e3={},e4=eC("keys");e3=function(e){return e4[e]||(e4[e]=eR(e))};var e7={};e7={};var e8="Object already initialized",e9=S.TypeError,e5=S.WeakMap;if(er||Q.state){var e6=Q.state||(Q.state=new e5);/* eslint-disable no-self-assign -- prototype methods protection */e6.get=e6.get,e6.has=e6.has,e6.set=e6.set,/* eslint-enable no-self-assign -- prototype methods protection */s=function(e,t){if(e6.has(e))throw e9(e8);return t.facade=e,e6.set(e,t),t},c=function(e){return e6.get(e)||{}},u=function(e){return e6.has(e)}}else{var te=e3("state");e7[te]=!0,s=function(e,t){if(C(e,te))throw e9(e8);return t.facade=e,ea(e,te,t),t},c=function(e){return C(e,te)?e[te]:{}},u=function(e){return C(e,te)}}var tt=(et={set:s,get:c,has:u,enforce:function(e){return u(e)?c(e):s(e,{})},getterFor:function(e){return function(t){var r;if(!ei(t)||(r=c(t)).type!==e)throw e9("Incompatible receiver, "+e+" required");return r}}}).enforce,tr=et.get,tn=String,ti=Object.defineProperty,to=M("".slice),ta=M("".replace),ts=M([].join),tc=j&&!$(function(){return 8!==ti(function(){},"length",{value:8}).length}),tu=String(String).split("String"),tl=F=function(e,t,r){"Symbol("===to(tn(t),0,7)&&(t="["+ta(tn(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!C(e,"name")||J&&e.name!==t)&&(j?ti(e,"name",{value:t,configurable:!0}):e.name=t),tc&&r&&C(r,"arity")&&e.length!==r.arity&&ti(e,"length",{value:r.arity});try{r&&C(r,"constructor")&&r.constructor?j&&ti(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tt(e);return C(n,"source")||(n.source=ts(tu,"string"==typeof t?t:"")),e};// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString=tl(function(){return q(this)&&tr(this).source||V(this)},"toString"),L=function(e,t,r){return r.get&&F(r.get,t,{getter:!0}),r.set&&F(r.set,t,{setter:!0}),i(e,t,r)};var tf={};// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
tf=function(){var e=ef(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t};// babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
var tp=S.RegExp,th=tp.prototype;j&&$(function(){var e=!0;try{tp(".","d")}catch(t){e=!1}var t={},r="",n=e?"dgimsy":"gimsy",i=function(e,n){// eslint-disable-next-line es/no-object-defineproperty -- safe
Object.defineProperty(t,e,{get:function(){return r+=n,!0}})},o={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var a in e&&(o.hasIndices="d"),o)i(a,o[a]);return Object.getOwnPropertyDescriptor(th,"flags").get.call(t)!==n||r!==n})&&L(th,"flags",{configurable:!0,get:tf});var tg={},tv={}.propertyIsEnumerable,tm=Object.getOwnPropertyDescriptor;d=tm&&!tv.call({1:2},1)?function(e){var t=tm(this,e);return!!t&&t.enumerable}:tv;var ty={},tb={},t_={},tw=M({}.toString),tk=M("".slice);t_=function(e){return tk(tw(e),8,-1)};var tE=Object,tS=M("".split);// fallback for non-array-like ES3 and non-enumerable old V8 strings
tb=$(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return!tE("z").propertyIsEnumerable(0)})?function(e){return"String"===t_(e)?tS(e,""):tE(e)}:tE,ty=function(e){return tb(R(e))};// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var tO=Object.getOwnPropertyDescriptor;l=j?tO:function(e,t){if(e=ty(e),t=eg(t),es)try{return tO(e,t)}catch(e){}if(C(e,t))return e2(!em(d,e,t),e[t])};var tj={};tj=function(e,t,r,n){n||(n={});var o=n.enumerable,a=void 0!==n.name?n.name:t;if(q(r)&&F(r,a,n),n.global)o?e[t]=r:K(t,r);else{try{n.unsafe?e[t]&&(o=!0):delete e[t]}catch(e){}o?e[t]=r:i(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var t$={},tL={},tF={},tM={},tx={},tP={},tT=Math.ceil,tI=Math.floor;// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
tP=Math.trunc||function(e){var t=+e;return(t>0?tI:tT)(t)},// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
tx=function(e){var t=+e;// eslint-disable-next-line no-self-compare -- NaN check
return t!=t||0===t?0:tP(t)};var tq=Math.max,tH=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
tM=function(e,t){var r=tx(e);return r<0?tq(r+t,0):tH(r,t)};var tN={},tA={},tC=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
tA=function(e){return e>0?tC(tx(e),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
},// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
tN=function(e){return tA(e.length)};// `Array.prototype.{ indexOf, includes }` methods implementation
var tD=function(e){return function(t,r,n){var i,o=ty(t),a=tN(o),s=tM(n,a);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(e&&r!=r){for(;a>s;)// eslint-disable-next-line no-self-compare -- NaN check
if((i=o[s++])!=i)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tR={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:tD(!0),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:tD(!1)}.indexOf,tW=M([].push);tF=function(e,t){var r,n=ty(e),i=0,o=[];for(r in n)!C(e7,r)&&C(n,r)&&tW(o,r);// Don't enum bug & hidden keys
for(;t.length>i;)C(n,r=t[i++])&&(~tR(o,r)||tW(o,r));return o};var tz=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");f=Object.getOwnPropertyNames||function(e){return tF(e,tz)},p=Object.getOwnPropertySymbols;var tU=M([].concat);// all object keys, includes non-enumerable and symbols
tL=e_("Reflect","ownKeys")||function(e){var t=f(ef(e));return p?tU(t,p(e)):t},t$=function(e,t,r){for(var n=tL(t),o=0;o<n.length;o++){var a=n[o];C(e,a)||r&&C(r,a)||i(e,a,l(t,a))}};var tG={},tB=/#|\.prototype\./,tY=function(e,t){var r=tV[tJ(e)];return r===tK||r!==tQ&&(q(t)?$(t):!!t)},tJ=tY.normalize=function(e){return String(e).replace(tB,".").toLowerCase()},tV=tY.data={},tQ=tY.NATIVE="N",tK=tY.POLYFILL="P";tG=tY,/*
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
*/tg=function(e,t){var r,n,i,o,a,s=e.target,c=e.global,u=e.stat;if(r=c?S:u?S[s]||K(s,{}):(S[s]||{}).prototype)for(n in t){// contained in target
if(o=t[n],i=e.dontCallGetSet?(a=l(r,n))&&a.value:r[n],!tG(c?n:s+(u?".":"#")+n,e.forced)&&void 0!==i){if(typeof o==typeof i)continue;t$(o,i)}(e.sham||i&&i.sham)&&ea(o,"sham",!0),tj(r,n,o,e)}};var tX={},tZ={},t0=Function.prototype,t1=t0.apply,t2=t0.call;// eslint-disable-next-line es/no-reflect -- safe
tZ="object"==typeof Reflect&&Reflect.apply||(x?t2.bind(t1):function(){return t2.apply(t1,arguments)});var t3={},t4={},t7=(t4=function(e){// Nashorn bug:
//   https://github.com/zloirock/core-js/issues/1128
//   https://github.com/zloirock/core-js/issues/1130
if("Function"===t_(e))return M(e)})(t4.bind);// optional / simple context binding
t3=function(e,t){return eT(e),void 0===t?e:x?t7(e,t):function(){return e.apply(t,arguments)}};var t8={};t8=e_("document","documentElement");var t9={};t9=M([].slice);var t5={},t6=TypeError;t5=function(e,t){if(e<t)throw t6("Not enough arguments");return e};var re={};// eslint-disable-next-line redos/no-vulnerable -- safe
re=/(?:ipad|iphone|ipod).*applewebkit/i.test(eO);var rt={};rt="process"===t_(S.process);var rr=S.setImmediate,rn=S.clearImmediate,ri=S.process,ro=S.Dispatch,ra=S.Function,rs=S.MessageChannel,rc=S.String,ru=0,rl={},rd="onreadystatechange";$(function(){// Deno throws a ReferenceError on `location` access without `--location` flag
h=S.location});var rf=function(e){if(C(rl,e)){var t=rl[e];delete rl[e],t()}},rp=function(e){return function(){rf(e)}},rh=function(e){rf(e.data)},rg=function(e){// old engines have not location.origin
S.postMessage(rc(e),h.protocol+"//"+h.host)};rr&&rn||(rr=function(e){t5(arguments.length,1);var t=q(e)?e:ra(e),r=t9(arguments,1);return rl[++ru]=function(){tZ(t,void 0,r)},g(ru),ru},rn=function(e){delete rl[e]},rt?g=function(e){ri.nextTick(rp(e))}:ro&&ro.now?g=function(e){ro.now(rp(e))}:rs&&!re?(m=(v=new rs).port2,v.port1.onmessage=rh,g=t3(m.postMessage,m)):S.addEventListener&&q(S.postMessage)&&!S.importScripts&&h&&"file:"!==h.protocol&&!$(rg)?(g=rg,S.addEventListener("message",rh,!1)):g=rd in ec("script")?function(e){t8.appendChild(ec("script"))[rd]=function(){t8.removeChild(this),rf(e)}}:function(e){setTimeout(rp(e),0)});var rv=(tX={set:rr,clear:rn}).clear;// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
tg({global:!0,bind:!0,enumerable:!0,forced:S.clearImmediate!==rv},{clearImmediate:rv});var rm=tX.set,ry={},rb={};/* global Bun -- Deno case */rb="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var r_=S.Function,rw=/MSIE .\./.test(eO)||rb&&((t=S.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
ry=function(e,t){var r=t?2:1;return rw?function(n,i/* , ...arguments */){var o=t5(arguments.length,1)>r,a=q(n)?n:r_(n),s=o?t9(arguments,r):[],c=o?function(){tZ(a,this,s)}:a;return t?e(c,i):e(c)}:e};// https://github.com/oven-sh/bun/issues/1633
var rk=S.setImmediate?ry(rm,!1):rm;// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
tg({global:!0,bind:!0,enumerable:!0,forced:S.setImmediate!==rk},{setImmediate:rk});/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rE=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof v?r:v).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
i(c,"_invoke",{value:(a=new $(o||[]),s=f,function(r,i){if(s===p)throw Error("Generator is already running");if(s===h){if("throw"===r)throw i;// Be forgiving, per 25.3.3.3.3 of the spec:
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
function v(){}function m(){}function y(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(L([])));w&&w!==r&&n.call(w,a)&&// of the polyfill.
(b=w);var k=y.prototype=v.prototype=Object.create(b);// Helper for defining the .next, .throw, and .return methods of the
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
a):a()}})}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function $(e){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function L(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return m.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:m,configurable:!0}),m.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},// Within the body of any async function, `await x` is transformed to
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
e.done=!0,e)}},e.values=L,$.prototype={constructor:$,reset:function(e){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&// location outside the try/catch block.
(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;j(r)}return i}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:L(e),resultName:r,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=t),g}},e}({});try{regeneratorRuntime=rE}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rE:Function("r","regeneratorRuntime = r")(rE)}const rS="https://forkify-api.herokuapp.com/api/v2/recipes/",rO="89242f0a-343e-40e4-81f7-3318cb660857",rj=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e;// promise that is being returned from getJSON will be reject with this error handling, and we will be able to handle the error in model.js, where we want it. We propagated error from one async funciton to another by re-throwing it here in this catch block
}},r$={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},rL=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},rF=async function(e){try{let t=await rj(`${rS}${e}?key=${rO}`);r$.recipe=rL(t),r$.bookmarks.some(t=>t.id===e)?r$.recipe.bookmarked=!0:r$.recipe.bookmarked=!1,console.log(r$.recipe)}catch(e){throw(// Temp error handling
console.error(`${e} 💥💥💥💥`),e)}},rM=async function(e){try{r$.search.query=e;let t=await rj(`${rS}?search=${e}&key=${rO}`);console.log(t),r$.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),r$.search.page=1}catch(e){throw console.error(`${e} 💥💥💥💥`),e}},rx=function(e=r$.search.page){r$.search.page=e;let t=(e-1)*r$.search.resultsPerPage,r=e*r$.search.resultsPerPage;// 0 - for example if we requested page 1: 1 - 1 is 0, and 0 * 10 is 0, so from that position in array of results
return r$.search.results.slice(t,r)},rP=function(e){r$.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/r$.recipe.servings;// newQt = oldQt * newServings / oldServings
}),r$.recipe.servings=e},rT=function(){localStorage.setItem("bookmarks",JSON.stringify(r$.bookmarks))},rI=function(e){// Add bookmark
r$.bookmarks.push(e),e.id===r$.recipe.id&&(r$.recipe.bookmarked=!0),rT()},rq=function(e){// Remove bookmark
let t=r$.bookmarks.findIndex(t=>t.id===e);r$.bookmarks.splice(t,1),e===r$.recipe.id&&(r$.recipe.bookmarked=!1),rT()},rH=async function(e){try{let t=Object.entries(e)// make arary with Object.entries()
.filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient format! Please use the correct format :)");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await rj(`${rS}?search=${r.title}&key=${rO}`,r);r$.recipe=rL(n),rI(r$.recipe);// console.log(recipe);
}catch(e){throw e}};!function(){let e=localStorage.getItem("bookmarks");e&&(r$.bookmarks=JSON.parse(e));//JSON.parse() to convert it back to an object
}();var rN={};rN=new URL(E("kyEFX").resolve("hm5VY"),import.meta.url).toString();class rA{_data;/**
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
        <use href="${/*@__PURE__*/_(rN)}#icon-loader"></use>
      </svg>
    </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)};renderError(e=this._errorMessage){let t=`<div class="error">
      <div>
        <svg>
          <use href="${/*@__PURE__*/_(rN)}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${e}</p>
    </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`<div class="message">
      <div>
        <svg>
          <use href="${/*@__PURE__*/_(rN)}#icon-smile"></use>
        </svg>
      </div>
      <p>${e}</p>
    </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}}(Fraction=function(e,t){/* double argument invocation */if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(// what are they?
// hmm....
// assume they are ints?
this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){// or a = '2/3' and b = undefined if we are just passed a single-part number
var r,n,i=num.split(" ");/* compound fraction e.g. 'A B/C' *///  if a is an integer ...
if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));// could not parse
if(!r||n)return;/* simple fraction e.g. 'A/B' */if("string"==typeof r&&r.match("/")){// it's not a whole number... it's actually a fraction without a whole part written
var o=r.split("/");this.numerator=o[0],this.denominator=o[1];/* string floating point */}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},/* pretty-printer, converts fractions into whole numbers and fractions */Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},/* destructively rescale the fraction by some integral factor */Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));// fractions that are equal should have equal normalized forms
var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},/* Utility functions *//* Destructively normalize the fraction to its smallest representation. 
 * e.g. 4/16 -> 1/4, 14/28 -> 1/2, etc.
 * This is called after all math ops.
 */Fraction.prototype.normalize=(r=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},n=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){// XXX hackish.  Is there a better way to address this issue?
//
/* first check if we have decimals, and if we do eliminate them
         * multiply by the 10 ^ number of decimal places in the number
         * round the number to nine decimal places
         * to avoid js floating point funnies
         */if(r(this.denominator)){var e=n(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),//this.numerator *= scaleup;
this.numerator*=t}if(r(this.numerator)){var e=n(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*t),//this.numerator *= scaleup;
this.denominator*=t}var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),/* Takes two numbers and returns their greatest common factor.
 */Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return(// for each factor in fa
// if it's also in fb
// put it into the common factors
n.forEach(function(e){var t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},// Adapted from: 
// http://www.btinternet.com/~se16/js/factor.htm
Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;// and increment
return 1!=t&&r.push(t),r;// Return the prime factors
},y=Fraction;class rC extends rA{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;+n>0&&e(+n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){// event delegation is good for adding events on elements that don't exists yet when the page loads for the first time
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
              <use href="${/*@__PURE__*/_(rN)}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${/*@__PURE__*/_(rN)}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
                <svg>
                  <use href="${/*@__PURE__*/_(rN)}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
                <svg>
                  <use href="${/*@__PURE__*/_(rN)}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
            <svg>
              <use href="${/*@__PURE__*/_(rN)}#icon-user"></use>
            </svg>
          </div>

          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${/*@__PURE__*/_(rN)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
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
              <use href="${/*@__PURE__*/_(rN)}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
    `}_generateMarkupIngredient(e){return`<li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${/*@__PURE__*/_(rN)}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${e.quantity?new y(e.quantity).toString():""}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${e.unit}</span>
        ${e.description}
      </div>
    </li>
    `}}var rD=new rC;class rR{#e=document.querySelector(".search");getQuery(){let e=this.#e.querySelector(".search__field").value;return this.#t(),e}#t(){this.#e.querySelector(".search__field").value=""}addHandlerSearch(e){this.#e.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rW=new rR,rz=new class extends rA{_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`<li class="preview">
    <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">
      <figure class="preview__fig">
        <img src="${this._data.image}" alt="${this._data.title}" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${this._data.title} ...</h4>
        <p class="preview__publisher">${this._data.publisher}</p>
      
      <div class="preview__user-generated ${this._data.key?"":"hidden"}">
      <svg>
        <use href="${/*@__PURE__*/_(rN)}#icon-user"></use>
      </svg>
      </div>
    </div>
    </a>
  </li>`}};class rU extends rA{_parentElement=document.querySelector(".results");_errorMessage="No recepies found for your query! Please try again ;)";_message="";_generateMarkup(){return this._data.map(e=>rz.render(e,!1)).join("")}}var rG=new rU;class rB extends rA{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");if(!r)return;let n=+r.dataset.goto;e(n)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return(// Page 1, and there are other pages
1===e&&t>1?`<button data-goto="${e+1}" class="btn--inline pagination__btn--next">
      <span>Page ${e+1}</span>
      <svg class="search__icon">
        <use href="${/*@__PURE__*/_(rN)}#icon-arrow-right"></use>
      </svg>
    </button>`:e===t&&t>1?`
      <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${/*@__PURE__*/_(rN)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${e-1}</span>
          </button>
      `:e<t?`<button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${/*@__PURE__*/_(rN)}#icon-arrow-left"></use>
      </svg>
      <span>Page ${e-1}</span>
    </button>
    <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
      <span>Page ${e+1}</span>
      <svg class="search__icon">
        <use href="${/*@__PURE__*/_(rN)}#icon-arrow-right"></use>
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
    return '';*/}}var rY=new rB;class rJ extends rA{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it! ;)";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return console.log(this._data),this._data.map(e=>rz.render(e,!1)).join("")}}var rV=new rJ;class rQ extends rA{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded!";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault();let r=[...new FormData(this)],n=Object.fromEntries(r);// returns an object, which we spread into an array of all the fields that are in that form
e(n)})}_generateMarkup(){}}var rK=new rQ;///////////////////////////////////////////////
const rX=async function(){try{// Getting recipe id from hash
let e=window.location.hash.slice(1);if(!e)return;rD.renderSpinner(),rG.update(rx()),rV.update(r$.bookmarks),// Loading recipe
await rF(e),rD.render(r$.recipe)}catch(e){rD.renderError(),console.error(e)}},rZ=async function(){try{rG.renderSpinner();// 1) Get search query
let e=rW.getQuery();if(!e)return;// 2) Load search results
await rM(e),rG.render(rx()),rY.render(r$.search)}catch(e){console.log(e)}},r0=async function(e){try{rK.renderSpinner(),// Upload new recipe data
await rH(e),console.log(r$.recipe),rD.render(r$.recipe),rK.renderMessage(),rV.render(r$.bookmarks),// Change ID in url
window.history.pushState(null,"",`#${r$.recipe.id}`),// window.history.back() // going to previous page when clicked browser button for backwards
// Close form window
setTimeout(function(){rK.toggleWindow()},2500)}catch(e){console.error("\uD83D\uDCA5",e),rK.renderError(e.message)}};rV.addHandlerRender(function(){rV.render(r$.bookmarks)}),rD.addHandlerRender(rX),rD.addHandlerUpdateServings(function(e){// 3) Update the recipe servings (in state)
rP(e),rD.update(r$.recipe)}),rD.addHandlerAddBookmark(function(){r$.recipe.bookmarked?rq(r$.recipe.id):rI(r$.recipe),rD.update(r$.recipe),rV.render(r$.bookmarks)}),rW.addHandlerSearch(rZ),rY.addHandlerClick(function(e){rG.render(rx(e)),rY.render(r$.search)}),rK.addHandlerUpload(r0);/*
 Publisher-Subscriber Design pattern - design patterns in programming are standard solutions to certain kinds of problems.
So in the publisher-Subscriber pattern we have a publisher which is some code that knows when to react. And in this case, that's going to be the addHandlerRender function because it will contain the addEventListener method, it will know when to react to the event.Subscriber is code that actually wants to react, code that should actually be executed when the event happens,in this case that is the controlRecipes function

Subscribe to the publisher by passing into subscriber function as an argument. That means that as soon as the program loads, the init function is called which in turn immediately calls the addHandlerRender function from the view (bc the controller imports both view and model). As we call addHendlerRender, we pass in our controlRecipes function as an argument, subscribing controlRecipes to addHandlerRender. Now addHandlerRender listens for events using the addEventListener method as always, and then as soon as the event actually happens, the controlRecipes function will be called as the callback function of addEventListener (as soon as the publisher publishes an event the subscriber will get called)
*///# sourceMappingURL=index.e4dfa5f5.js.map

//# sourceMappingURL=index.e4dfa5f5.js.map
