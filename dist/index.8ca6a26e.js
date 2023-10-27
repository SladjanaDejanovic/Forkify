!function(){var e,t,r,n,i,o,a,s,c,u,l,f,p,d,h,g,v,y,m="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function b(e){return e&&e.__esModule?e.default:e}var _={},w={},k=m.parcelRequire3a11;null==k&&((k=function(e){if(e in _)return _[e].exports;if(e in w){var t=w[e];delete w[e];var r={id:e,exports:{}};return _[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){w[e]=t},m.parcelRequire3a11=k),k.register("aNJCr",function(e,t){Object.defineProperty(e.exports,"getBundleURL",{get:function(){return r},set:function(e){return r=e},enumerable:!0,configurable:!0});var r,n={};r=function(e){var t=n[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)// Use the 3rd one, which will be a runtime in the original bundle.
return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),n[e]=t),t}});var E={},S=function(e){return e&&e.Math===Math&&e};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
E=S("object"==typeof globalThis&&globalThis)||S("object"==typeof window&&window)||// eslint-disable-next-line no-restricted-globals -- safe
S("object"==typeof self&&self)||S("object"==typeof m&&m)||// eslint-disable-next-line no-new-func -- fallback
function(){return this}()||E||Function("return this")();var $={},O={};// Detect IE8's incomplete defineProperty implementation
$=!(O=function(e){try{return!!e()}catch(e){return!0}})(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var j={},T={},A={},P={};P=!O(function(){// eslint-disable-next-line es/no-function-prototype-bind -- safe
var e=(function(){}).bind();// eslint-disable-next-line no-prototype-builtins -- safe
return"function"!=typeof e||e.hasOwnProperty("prototype")});var L=Function.prototype,x=L.call,M=P&&L.bind.bind(x,x);A=P?M:function(e){return function(){return x.apply(e,arguments)}};var I={},C={},R="object"==typeof document&&document.all,F=(C={all:R,IS_HTMLDDA:void 0===R&&void 0!==R}).all;// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
I=C.IS_HTMLDDA?function(e){return"function"==typeof e||e===F}:function(e){return"function"==typeof e};var H={},N={},q={},D={};// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
D=function(e){return null==e};var U=TypeError;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
q=function(e){if(D(e))throw U("Can't call method on "+e);return e};var W=Object;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
N=function(e){return W(q(e))};var B=A({}.hasOwnProperty);// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
H=Object.hasOwn||function(e,t){return B(N(e),t)};var G=Function.prototype,z=$&&Object.getOwnPropertyDescriptor,Y=H(G,"name"),V=Y&&(!$||$&&z(G,"name").configurable),J={},Q={},K={},Z=Object.defineProperty;K=function(e,t){try{Z(E,e,{value:t,configurable:!0,writable:!0})}catch(r){E[e]=t}return t};var X="__core-js_shared__";Q=E[X]||K(X,{});var ee=A(Function.toString);I(Q.inspectSource)||(Q.inspectSource=function(e){return ee(e)}),J=Q.inspectSource;var et={},er={},en=E.WeakMap;er=I(en)&&/native code/.test(String(en));var ei={},eo=C.all;ei=C.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:I(e)||e===eo}:function(e){return"object"==typeof e?null!==e:I(e)};var ea={},es={},ec={},eu=E.document,el=ei(eu)&&ei(eu.createElement);ec=function(e){return el?eu.createElement(e):{}},// Thanks to IE8 for its funny defineProperty
es=!$&&!O(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty(ec("div"),"a",{get:function(){return 7}}).a});var ef={};// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
ef=$&&O(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var ep={},ed=String,eh=TypeError;// `Assert: Type(argument) is Object`
ep=function(e){if(ei(e))return e;throw eh(ed(e)+" is not an object")};var eg={},ev={},ey={},em=Function.prototype.call;ey=P?em.bind(em):function(){return em.apply(em,arguments)};var eb={},e_={};e_=function(e,t){var r;return arguments.length<2?(r=E[e],I(r)?r:void 0):E[e]&&E[e][t]};var ew={};ew=A({}.isPrototypeOf);var ek={},eE={},eS={},e$={};e$="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var eO=E.process,ej=E.Deno,eT=eO&&eO.versions||ej&&ej.version,eA=eT&&eT.v8;eA&&// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(n=(r=eA.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!n&&e$&&(!(r=e$.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=e$.match(/Chrome\/(\d+)/))&&(n=+r[1]),eS=n;var eP=E.String;ek=// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
(eE=!!Object.getOwnPropertySymbols&&!O(function(){var e=Symbol("symbol detection");// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
// nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
// of course, fail.
return!eP(e)||!(Object(e) instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&eS&&eS<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var eL=Object;eb=ek?function(e){return"symbol"==typeof e}:function(e){var t=e_("Symbol");return I(t)&&ew(t.prototype,eL(e))};var ex={},eM={},eI={},eC=String;eI=function(e){try{return eC(e)}catch(e){return"Object"}};var eR=TypeError;// `Assert: IsCallable(argument) is true`
eM=function(e){if(I(e))return e;throw eR(eI(e)+" is not a function")},// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
ex=function(e,t){var r=e[t];return D(r)?void 0:eM(r)};var eF={},eH=TypeError;// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
eF=function(e,t){var r,n;if("string"===t&&I(r=e.toString)&&!ei(n=ey(r,e))||I(r=e.valueOf)&&!ei(n=ey(r,e))||"string"!==t&&I(r=e.toString)&&!ei(n=ey(r,e)))return n;throw eH("Can't convert object to primitive value")};var eN={},eq={},eD={};eD=!1,(eq=function(e,t){return Q[e]||(Q[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.32.1",mode:eD?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.1/LICENSE",source:"https://github.com/zloirock/core-js"});var eU={},eW=0,eB=Math.random(),eG=A(1..toString);eU=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eG(++eW+eB,36)};var ez=E.Symbol,eY=eq("wks"),eV=ek?ez.for||ez:ez&&ez.withoutSetter||eU,eJ=TypeError,eQ=(eN=function(e){return H(eY,e)||(eY[e]=eE&&H(ez,e)?ez[e]:eV("Symbol."+e)),eY[e]})("toPrimitive");// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
ev=function(e,t){if(!ei(e)||eb(e))return e;var r,n=ex(e,eQ);if(n){if(void 0===t&&(t="default"),r=ey(n,e,t),!ei(r)||eb(r))return r;throw eJ("Can't convert object to primitive value")}return void 0===t&&(t="number"),eF(e,t)},// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
eg=function(e){var t=ev(e,"string");return eb(t)?t:t+""};var eK=TypeError,eZ=Object.defineProperty,eX=Object.getOwnPropertyDescriptor,e0="enumerable",e1="configurable",e2="writable";t=$?ef?function(e,t,r){if(ep(e),t=eg(t),ep(r),"function"==typeof e&&"prototype"===t&&"value"in r&&e2 in r&&!r[e2]){var n=eX(e,t);n&&n[e2]&&(e[t]=r.value,r={configurable:e1 in r?r[e1]:n[e1],enumerable:e0 in r?r[e0]:n[e0],writable:!1})}return eZ(e,t,r)}:eZ:function(e,t,r){if(ep(e),t=eg(t),ep(r),es)try{return eZ(e,t,r)}catch(e){}if("get"in r||"set"in r)throw eK("Accessors not supported");return"value"in r&&(e[t]=r.value),e};var e9={};e9=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},ea=$?function(e,r,n){return t(e,r,e9(1,n))}:function(e,t,r){return e[t]=r,e};var e3={},e4=eq("keys");e3=function(e){return e4[e]||(e4[e]=eU(e))};var e8={};e8={};var e7="Object already initialized",e6=E.TypeError,e5=E.WeakMap;if(er||Q.state){var te=Q.state||(Q.state=new e5);/* eslint-disable no-self-assign -- prototype methods protection */te.get=te.get,te.has=te.has,te.set=te.set,/* eslint-enable no-self-assign -- prototype methods protection */i=function(e,t){if(te.has(e))throw e6(e7);return t.facade=e,te.set(e,t),t},o=function(e){return te.get(e)||{}},a=function(e){return te.has(e)}}else{var tt=e3("state");e8[tt]=!0,i=function(e,t){if(H(e,tt))throw e6(e7);return t.facade=e,ea(e,tt,t),t},o=function(e){return H(e,tt)?e[tt]:{}},a=function(e){return H(e,tt)}}var tr=(et={set:i,get:o,has:a,enforce:function(e){return a(e)?o(e):i(e,{})},getterFor:function(e){return function(t){var r;if(!ei(t)||(r=o(t)).type!==e)throw e6("Incompatible receiver, "+e+" required");return r}}}).enforce,tn=et.get,ti=String,to=Object.defineProperty,ta=A("".slice),ts=A("".replace),tc=A([].join),tu=$&&!O(function(){return 8!==to(function(){},"length",{value:8}).length}),tl=String(String).split("String"),tf=T=function(e,t,r){"Symbol("===ta(ti(t),0,7)&&(t="["+ts(ti(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!H(e,"name")||V&&e.name!==t)&&($?to(e,"name",{value:t,configurable:!0}):e.name=t),tu&&r&&H(r,"arity")&&e.length!==r.arity&&to(e,"length",{value:r.arity});try{r&&H(r,"constructor")&&r.constructor?$&&to(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tr(e);return H(n,"source")||(n.source=tc(tl,"string"==typeof t?t:"")),e};// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString=tf(function(){return I(this)&&tn(this).source||J(this)},"toString"),j=function(e,r,n){return n.get&&T(n.get,r,{getter:!0}),n.set&&T(n.set,r,{setter:!0}),t(e,r,n)};var tp={};// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
tp=function(){var e=ep(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t};// babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
var td=E.RegExp,th=td.prototype;$&&O(function(){var e=!0;try{td(".","d")}catch(t){e=!1}var t={},r="",n=e?"dgimsy":"gimsy",i=function(e,n){// eslint-disable-next-line es/no-object-defineproperty -- safe
Object.defineProperty(t,e,{get:function(){return r+=n,!0}})},o={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var a in e&&(o.hasIndices="d"),o)i(a,o[a]);return Object.getOwnPropertyDescriptor(th,"flags").get.call(t)!==n||r!==n})&&j(th,"flags",{configurable:!0,get:tp});var tg={},tv={};// eslint-disable-next-line es/no-typed-arrays -- safe
tv="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView;var ty={},tm={},tb=eN("toStringTag"),t_={};t_[tb]="z",tm="[object z]"===String(t_);var tw={},tk=A({}.toString),tE=A("".slice);tw=function(e){return tE(tk(e),8,-1)};var tS=eN("toStringTag"),t$=Object,tO="Arguments"===tw(function(){return arguments}()),tj=function(e,t){try{return e[t]}catch(e){}};// getting tag from ES6+ `Object.prototype.toString`
ty=tm?tw:function(e){var t,r,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=tj(t=t$(e),tS))?r:tO?tw(t):"Object"===(n=tw(t))&&I(t.callee)?"Arguments":n};var tT={};tT=function(e,r,n,i){i||(i={});var o=i.enumerable,a=void 0!==i.name?i.name:r;if(I(n)&&T(n,a,i),i.global)o?e[r]=n:K(r,n);else{try{i.unsafe?e[r]&&(o=!0):delete e[r]}catch(e){}o?e[r]=n:t(e,r,{value:n,enumerable:!1,configurable:!i.nonConfigurable,writable:!i.nonWritable})}return e};var tA={},tP={};tP=!O(function(){function e(){}// eslint-disable-next-line es/no-object-getprototypeof -- required for testing
return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype});var tL=e3("IE_PROTO"),tx=Object,tM=tx.prototype;// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
tA=tP?tx.getPrototypeOf:function(e){var t=N(e);if(H(t,tL))return t[tL];var r=t.constructor;return I(r)&&t instanceof r?r.prototype:t instanceof tx?tM:null};var tI={},tC={};tC=function(e,t,r){try{// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
return A(eM(Object.getOwnPropertyDescriptor(e,t)[r]))}catch(e){}};var tR={},tF=String,tH=TypeError;tR=function(e){if("object"==typeof e||I(e))return e;throw tH("Can't set "+tF(e)+" as a prototype")},// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
tI=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,r={};try{(e=tC(Object.prototype,"__proto__","set"))(r,[]),t=r instanceof Array}catch(e){}return function(r,n){return ep(r),tR(n),t?e(r,n):r.__proto__=n,r}}():void 0);var tN=et.enforce,tq=et.get,tD=E.Int8Array,tU=tD&&tD.prototype,tW=E.Uint8ClampedArray,tB=tW&&tW.prototype,tG=tD&&tA(tD),tz=tU&&tA(tU),tY=Object.prototype,tV=E.TypeError,tJ=eN("toStringTag"),tQ=eU("TYPED_ARRAY_TAG"),tK="TypedArrayConstructor",tZ=tv&&!!tI&&"Opera"!==ty(E.opera),tX=!1,t0={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},t1={BigInt64Array:8,BigUint64Array:8},t2=function(e){var t=tA(e);if(ei(t)){var r=tq(t);return r&&H(r,tK)?r[tK]:t2(t)}},t9=function(e){if(!ei(e))return!1;var t=ty(e);return H(t0,t)||H(t1,t)};for(s in t0)(u=(c=E[s])&&c.prototype)?tN(u)[tK]=c:tZ=!1;for(s in t1)(u=(c=E[s])&&c.prototype)&&(tN(u)[tK]=c);// WebKit bug - typed arrays constructors prototype is Object.prototype
if((!tZ||!I(tG)||tG===Function.prototype)&&(// eslint-disable-next-line no-shadow -- safe
tG=function(){throw tV("Incorrect invocation")},tZ))for(s in t0)E[s]&&tI(E[s],tG);if((!tZ||!tz||tz===tY)&&(tz=tG.prototype,tZ))for(s in t0)E[s]&&tI(E[s].prototype,tz);if(tZ&&tA(tB)!==tz&&tI(tB,tz),$&&!H(tz,tJ))for(s in tX=!0,j(tz,tJ,{configurable:!0,get:function(){return ei(this)?this[tQ]:void 0}}),t0)E[s]&&ea(E[s],tQ,s);tg={NATIVE_ARRAY_BUFFER_VIEWS:tZ,TYPED_ARRAY_TAG:tX&&tQ,aTypedArray:function(e){if(t9(e))return e;throw tV("Target is not a typed array")},aTypedArrayConstructor:function(e){if(I(e)&&(!tI||ew(tG,e)))return e;throw tV(eI(e)+" is not a typed array constructor")},exportTypedArrayMethod:function(e,t,r,n){if($){if(r)for(var i in t0){var o=E[i];if(o&&H(o.prototype,e))try{delete o.prototype[e]}catch(r){// old WebKit bug - some methods are non-configurable
try{o.prototype[e]=t}catch(e){}}}(!tz[e]||r)&&tT(tz,e,r?t:tZ&&tU[e]||t,n)}},exportTypedArrayStaticMethod:function(e,t,r){var n,i;if($){if(tI){if(r){for(n in t0)if((i=E[n])&&H(i,e))try{delete i[e]}catch(e){}}if(tG[e]&&!r)return;try{return tT(tG,e,r?t:tZ&&tG[e]||t)}catch(e){}}for(n in t0)(i=E[n])&&(!i[e]||r)&&tT(i,e,t)}},getTypedArrayConstructor:t2,isView:function(e){if(!ei(e))return!1;var t=ty(e);return"DataView"===t||H(t0,t)||H(t1,t)},isTypedArray:t9,TypedArray:tG,TypedArrayPrototype:tz};var t3={},t4={},t8={},t7={},t6=Math.ceil,t5=Math.floor;// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
t7=Math.trunc||function(e){var t=+e;return(t>0?t5:t6)(t)},// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
t8=function(e){var t=+e;// eslint-disable-next-line no-self-compare -- NaN check
return t!=t||0===t?0:t7(t)};var re=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
t4=function(e){return e>0?re(t8(e),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
},// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
t3=function(e){return t4(e.length)};var rt={},rr={},rn=RangeError;rr=function(e){var t=t8(e);if(t<0)throw rn("The argument can't be less than 0");return t};var ri=RangeError;rt=function(e,t){var r=rr(e);if(r%t)throw ri("Wrong offset");return r};var ro=E.RangeError,ra=E.Int8Array,rs=ra&&ra.prototype,rc=rs&&rs.set,ru=tg.aTypedArray,rl=tg.exportTypedArrayMethod,rf=!O(function(){// eslint-disable-next-line es/no-typed-arrays -- required for testing
var e=new Uint8ClampedArray(2);return ey(rc,e,{length:1,0:3},1),3!==e[1]}),rp=rf&&tg.NATIVE_ARRAY_BUFFER_VIEWS&&O(function(){var e=new ra(2);return e.set(1),e.set("2",1),0!==e[0]||2!==e[1]});// `%TypedArray%.prototype.set` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.set
rl("set",function(e/* , offset */){ru(this);var t=rt(arguments.length>1?arguments[1]:void 0,1),r=N(e);if(rf)return ey(rc,this,r,t);var n=this.length,i=t3(r),o=0;if(i+t>n)throw ro("Wrong length");for(;o<i;)this[t+o]=r[o++]},!rf||rp);var rd={},rh={}.propertyIsEnumerable,rg=Object.getOwnPropertyDescriptor;f=rg&&!rh.call({1:2},1)?function(e){var t=rg(this,e);return!!t&&t.enumerable}:rh;var rv={},ry={},rm=Object,rb=A("".split);// fallback for non-array-like ES3 and non-enumerable old V8 strings
ry=O(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return!rm("z").propertyIsEnumerable(0)})?function(e){return"String"===tw(e)?rb(e,""):rm(e)}:rm,rv=function(e){return ry(q(e))};// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var r_=Object.getOwnPropertyDescriptor;l=$?r_:function(e,t){if(e=rv(e),t=eg(t),es)try{return r_(e,t)}catch(e){}if(H(e,t))return e9(!ey(f,e,t),e[t])};var rw={},rk={},rE={},rS={},r$=Math.max,rO=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
rS=function(e,t){var r=t8(e);return r<0?r$(r+t,0):rO(r,t)};// `Array.prototype.{ indexOf, includes }` methods implementation
var rj=function(e){return function(t,r,n){var i,o=rv(t),a=t3(o),s=rS(n,a);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(e&&r!=r){for(;a>s;)// eslint-disable-next-line no-self-compare -- NaN check
if((i=o[s++])!=i)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},rT={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:rj(!0),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:rj(!1)}.indexOf,rA=A([].push);rE=function(e,t){var r,n=rv(e),i=0,o=[];for(r in n)!H(e8,r)&&H(n,r)&&rA(o,r);// Don't enum bug & hidden keys
for(;t.length>i;)H(n,r=t[i++])&&(~rT(o,r)||rA(o,r));return o};var rP=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");p=Object.getOwnPropertyNames||function(e){return rE(e,rP)},d=Object.getOwnPropertySymbols;var rL=A([].concat);// all object keys, includes non-enumerable and symbols
rk=e_("Reflect","ownKeys")||function(e){var t=p(ep(e));return d?rL(t,d(e)):t},rw=function(e,r,n){for(var i=rk(r),o=0;o<i.length;o++){var a=i[o];H(e,a)||n&&H(n,a)||t(e,a,l(r,a))}};var rx={},rM=/#|\.prototype\./,rI=function(e,t){var r=rR[rC(e)];return r===rH||r!==rF&&(I(t)?O(t):!!t)},rC=rI.normalize=function(e){return String(e).replace(rM,".").toLowerCase()},rR=rI.data={},rF=rI.NATIVE="N",rH=rI.POLYFILL="P";rx=rI,/*
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
*/rd=function(e,t){var r,n,i,o,a,s=e.target,c=e.global,u=e.stat;if(r=c?E:u?E[s]||K(s,{}):(E[s]||{}).prototype)for(n in t){// contained in target
if(o=t[n],i=e.dontCallGetSet?(a=l(r,n))&&a.value:r[n],!rx(c?n:s+(u?".":"#")+n,e.forced)&&void 0!==i){if(typeof o==typeof i)continue;rw(o,i)}(e.sham||i&&i.sham)&&ea(o,"sham",!0),tT(r,n,o,e)}};var rN={},rq={},rD=Function.prototype,rU=rD.apply,rW=rD.call;// eslint-disable-next-line es/no-reflect -- safe
rq="object"==typeof Reflect&&Reflect.apply||(P?rW.bind(rU):function(){return rW.apply(rU,arguments)});var rB={},rG={},rz=(rG=function(e){// Nashorn bug:
//   https://github.com/zloirock/core-js/issues/1128
//   https://github.com/zloirock/core-js/issues/1130
if("Function"===tw(e))return A(e)})(rG.bind);// optional / simple context binding
rB=function(e,t){return eM(e),void 0===t?e:P?rz(e,t):function(){return e.apply(t,arguments)}};var rY={};rY=e_("document","documentElement");var rV={};rV=A([].slice);var rJ={},rQ=TypeError;rJ=function(e,t){if(e<t)throw rQ("Not enough arguments");return e};var rK={};// eslint-disable-next-line redos/no-vulnerable -- safe
rK=/(?:ipad|iphone|ipod).*applewebkit/i.test(e$);var rZ={};rZ="process"===tw(E.process);var rX=E.setImmediate,r0=E.clearImmediate,r1=E.process,r2=E.Dispatch,r9=E.Function,r3=E.MessageChannel,r4=E.String,r8=0,r7={},r6="onreadystatechange";O(function(){// Deno throws a ReferenceError on `location` access without `--location` flag
h=E.location});var r5=function(e){if(H(r7,e)){var t=r7[e];delete r7[e],t()}},ne=function(e){return function(){r5(e)}},nt=function(e){r5(e.data)},nr=function(e){// old engines have not location.origin
E.postMessage(r4(e),h.protocol+"//"+h.host)};rX&&r0||(rX=function(e){rJ(arguments.length,1);var t=I(e)?e:r9(e),r=rV(arguments,1);return r7[++r8]=function(){rq(t,void 0,r)},g(r8),r8},r0=function(e){delete r7[e]},rZ?g=function(e){r1.nextTick(ne(e))}:r2&&r2.now?g=function(e){r2.now(ne(e))}:r3&&!rK?(y=(v=new r3).port2,v.port1.onmessage=nt,g=rB(y.postMessage,y)):E.addEventListener&&I(E.postMessage)&&!E.importScripts&&h&&"file:"!==h.protocol&&!O(nr)?(g=nr,E.addEventListener("message",nt,!1)):g=r6 in ec("script")?function(e){rY.appendChild(ec("script"))[r6]=function(){rY.removeChild(this),r5(e)}}:function(e){setTimeout(ne(e),0)});var nn=(rN={set:rX,clear:r0}).clear;// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
rd({global:!0,bind:!0,enumerable:!0,forced:E.clearImmediate!==nn},{clearImmediate:nn});var ni=rN.set,no={},na={};/* global Bun -- Deno case */na="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var ns=E.Function,nc=/MSIE .\./.test(e$)||na&&((e=E.Bun.version.split(".")).length<3||"0"===e[0]&&(e[1]<3||"3"===e[1]&&"0"===e[2]));// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
no=function(e,t){var r=t?2:1;return nc?function(n,i/* , ...arguments */){var o=rJ(arguments.length,1)>r,a=I(n)?n:ns(n),s=o?rV(arguments,r):[],c=o?function(){rq(a,this,s)}:a;return t?e(c,i):e(c)}:e};// https://github.com/oven-sh/bun/issues/1633
var nu=E.setImmediate?no(ni,!1):ni;// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
rd({global:!0,bind:!0,enumerable:!0,forced:E.setImmediate!==nu},{setImmediate:nu});/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nl=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof v?r:v).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
i(c,"_invoke",{value:(a=new j(o||[]),s=p,function(r,i){if(s===d)throw Error("Generator is already running");if(s===h){if("throw"===r)throw i;// Be forgiving, per 25.3.3.3.3 of the spec:
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
n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g);var a=f(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var s=a.arg;return s?s.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
n[r.resultName]=s.value,// Resume execution at the desired location (see delegateYield).
n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(o,a);if(c){if(c===g)continue;return c}}if("next"===a.method)// function.sent implementation.
a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===p)throw s=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=d;var u=f(e,n,a);if("normal"===u.type){if(// If an exception is thrown from innerFn, we leave state ===
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
function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",d="executing",h="completed",g={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function v(){}function y(){}function m(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(T([])));w&&w!==r&&n.call(w,a)&&// of the polyfill.
(b=w);var k=m.prototype=v.prototype=Object.create(b);// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=f(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){// When a yielded Promise is resolved, its final value becomes
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
this.tryEntries=[{tryLoc:"root"}],e.forEach($,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return y.prototype=m,i(k,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:y,configurable:!0}),y.displayName=u(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
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
e.done=!0,e)}},e.values=T,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&// location outside the try/catch block.
(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;O(r)}return i}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=t),g}},e}({});try{regeneratorRuntime=nl}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=nl:Function("r","regeneratorRuntime = r")(nl)}let nf="https://forkify-api.herokuapp.com/api/v2/recipes/",np="89242f0a-343e-40e4-81f7-3318cb660857",nd=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e;// promise that is being returned from getJSON will be reject with this error handling, and we will be able to handle the error in model.js, where we want it. We propagated error from one async funciton to another by re-throwing it here in this catch block
}},nh={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},ng=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},nv=async function(e){try{let t=await nd(`${nf}${e}?key=${np}`);nh.recipe=ng(t),nh.bookmarks.some(t=>t.id===e)?nh.recipe.bookmarked=!0:nh.recipe.bookmarked=!1,console.log(nh.recipe)}catch(e){throw(// Temp error handling
console.error(`${e} 💥💥💥💥`),e)}},ny=async function(e){try{nh.search.query=e;let t=await nd(`${nf}?search=${e}&key=${np}`);console.log(t),nh.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),nh.search.page=1}catch(e){throw console.error(`${e} 💥💥💥💥`),e}},nm=function(e=nh.search.page){nh.search.page=e;let t=(e-1)*nh.search.resultsPerPage,r=e*nh.search.resultsPerPage;// 0 - for example if we requested page 1: 1 - 1 is 0, and 0 * 10 is 0, so from that position in array of results
return nh.search.results.slice(t,r)},nb=function(e){nh.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/nh.recipe.servings;// newQt = oldQt * newServings / oldServings
}),nh.recipe.servings=e},n_=function(){localStorage.setItem("bookmarks",JSON.stringify(nh.bookmarks))},nw=function(e){// Add bookmark
nh.bookmarks.push(e),e.id===nh.recipe.id&&(nh.recipe.bookmarked=!0),n_()},nk=function(e){// Remove bookmark
let t=nh.bookmarks.findIndex(t=>t.id===e);nh.bookmarks.splice(t,1),e===nh.recipe.id&&(nh.recipe.bookmarked=!1),n_()},nE=async function(e){try{let t=Object.entries(e)// make arary with Object.entries()
.filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient format! Please use the correct format :)");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await nd(`${nf}?search=${r.title}&key=${np}`,r);nh.recipe=ng(n),nw(nh.recipe);// console.log(recipe);
}catch(e){throw e}};!function(){let e=localStorage.getItem("bookmarks");e&&(nh.bookmarks=JSON.parse(e));//JSON.parse() to convert it back to an object
}();var nS={};nS=k("aNJCr").getBundleURL("4ko55")+k("iE7OH").resolve("d9SZC");class n${_data;/**
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
        <use href="${/*@__PURE__*/b(nS)}#icon-loader"></use>
      </svg>
    </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)};renderError(e=this._errorMessage){let t=`<div class="error">
      <div>
        <svg>
          <use href="${/*@__PURE__*/b(nS)}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${e}</p>
    </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`<div class="message">
      <div>
        <svg>
          <use href="${/*@__PURE__*/b(nS)}#icon-smile"></use>
        </svg>
      </div>
      <p>${e}</p>
    </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}}var nO={};//FRACTY REDUCES THE FRACTION.
function nj(e,t,r,n,i){var o,a,s;let c=[2,3,5];//If the numerator isn't from a repeating decimal case, the initialized array of prime numbers will suffice to find the common denominators.
if(!0===i)for(let t=3;t*t<=e;t+=2)e%t==0&&c.push(t);let u=0,l=e,f=t;//Initialize counter over the prime number array for the while loop.
for(;u<=c.length;)l%c[u]==0&&f%c[u]==0?(c[u],l/=c[u],f/=c[u]):u++;return o=f,a=l,s=r,1===o&&1===a?`${s=`${n}${(parseInt(s)+1).toString()}`}`:0===a?`${n}${s}`:"0"==s?`${n}${a}/${o}`:`${n}${s} ${a}/${o}`//If there's an integer and a fraction return both.
}// FRACTY CONVERTS DECIMAL NUMBERS TO FRACTIONS BY ASSUMING THAT TRAILING PATTERNS FROM 10^-2 CONTINUE TO REPEAT
// The assumption is based on the most standard numbering conventions
// e.g. 3.51 will convert to 3 51/100 while 3.511 will convert to 3 23/45
// Throw any number up to 16 digits long at fracty and let fracy do the work.
// If number is beyond 16 digits fracty will truncate at 15 digits to compensate for roundoff errors created in IEEE 754 Floating Point conversion.
nO=function(e){let t,r;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";let n=e.toString(),i=n.split("."),o=i[0];if("0"==r&&"0"!==o)return o;if("0"==r&&"0"==o)return"0";if("99"==(r=n.length>=17?i[1].slice(0,i[1].length-1):i[1])&&"0"!==o)return`${o} 99/100`;if("99"==r&&"0"==o)return"99/100";if(1-parseFloat(`.${r}`)<.0011&&(r="999"),void 0==r)return o;let a=r.split("").reverse().join(""),s=a.match(/^(\d+)\1{1,2}/);//Reverse the string to look for patterns.
if(!s||!(r.length>2))return(//IF THERE'S NO TRAILING PATTERN FRACTY DIVIDES THE INPUT BY THE NEAREST BASE 10 INTEGER GREATER THAN THE NUMERATOR.
function(e,t,r){let n=parseInt(e,10),i=Math.pow(10,e.length);//Numerator begins as decimal input converted into an integer.
return nj(n,i,t,r,!1);//Reduce the numerator and denominator.
}(r,o,t));//Begin calculating the numerator and denominator for decimals that don't have a pattern.
{let e=s[0].split("").reverse().join(""),n=s[1].split("").reverse().join("");if(n.length>1){let e=n.split(""),t=1;for(let r=0;r<e.length;r++)t/=e[0]/e[r];1===t&&(n=e[0])}return n.length>1&&n.length%2==0&&(n=parseInt(n.slice(0,n.length/2),10)-parseInt(n.slice(n.length/2,n.length),10)==0?n.slice(0,n.length/2):n),//IF THERE'S A TRAILING PATTERN FRACTY DIVIDES THE INPUT BY ONE SUBTRACTED FROM THE NEAREST BASE 10 NUMBER WITH NUMBER OF ZEROS EQUAL TO THE LENGTH OF THE REPEATED PATTERN (I.E. A SERIES OF 9'S) MULTIPLIED BY THE BASE 10 NUMBER GREATER THAN AND CLOSEST TO THE INPUT.
function(e,t,r,n,i){let o=e.length-r.length>=1?e.length-r.length:1,a=Math.pow(10,o),s=parseFloat(`0.${e}`),c=Math.pow(10,t.length),u=Math.round((s*c-s)*Math.pow(10,o));//Does the length of the non pattern segment of the input = 0? If it does, that's incorrect since we know it must equal at least 1, otherwise it's the length of the decimal input minus the length of the full pattern.
return nj(u,(c-1)*a,n,i,!0);//Further reduce the numerator and denominator.
}(r,n,e,o,t);//Begin calculating the numerator and denominator for decimals that have a pattern.
}};class nT extends n${_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;+n>0&&e(+n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){// event delegation is good for adding events on elements that don't exists yet when the page loads for the first time
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
              <use href="${/*@__PURE__*/b(nS)}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${/*@__PURE__*/b(nS)}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
                <svg>
                  <use href="${/*@__PURE__*/b(nS)}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
                <svg>
                  <use href="${/*@__PURE__*/b(nS)}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
            <svg>
              <use href="${/*@__PURE__*/b(nS)}#icon-user"></use>
            </svg>
          </div>

          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${/*@__PURE__*/b(nS)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
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
              <use href="${/*@__PURE__*/b(nS)}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
    `}_generateMarkupIngredient(e){return`<li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${/*@__PURE__*/b(nS)}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${e.quantity?/*@__PURE__*/b(nO)(e.quantity):""}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${e.unit}</span>
        ${e.description}
      </div>
    </li>
    `}}var nA=new nT;class nP{#e=document.querySelector(".search");getQuery(){let e=this.#e.querySelector(".search__field").value;return this.#t(),e}#t(){this.#e.querySelector(".search__field").value=""}addHandlerSearch(e){this.#e.addEventListener("submit",function(t){t.preventDefault(),e()})}}var nL=new nP,nx=new class extends n${_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`<li class="preview">
    <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">
      <figure class="preview__fig">
        <img src="${this._data.image}" alt="${this._data.title}" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${this._data.title} ...</h4>
        <p class="preview__publisher">${this._data.publisher}</p>
      
      <div class="preview__user-generated ${this._data.key?"":"hidden"}">
      <svg>
        <use href="${/*@__PURE__*/b(nS)}#icon-user"></use>
      </svg>
      </div>
    </div>
    </a>
  </li>`}};class nM extends n${_parentElement=document.querySelector(".results");_errorMessage="No recepies found for your query! Please try again ;)";_message="";_generateMarkup(){return this._data.map(e=>nx.render(e,!1)).join("")}}var nI=new nM;class nC extends n${_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");if(!r)return;let n=+r.dataset.goto;e(n)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return(// Page 1, and there are other pages
1===e&&t>1?`<button data-goto="${e+1}" class="btn--inline pagination__btn--next">
      <span>Page ${e+1}</span>
      <svg class="search__icon">
        <use href="${/*@__PURE__*/b(nS)}#icon-arrow-right"></use>
      </svg>
    </button>`:e===t&&t>1?`
      <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${/*@__PURE__*/b(nS)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${e-1}</span>
          </button>
      `:e<t?`<button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${/*@__PURE__*/b(nS)}#icon-arrow-left"></use>
      </svg>
      <span>Page ${e-1}</span>
    </button>
    <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
      <span>Page ${e+1}</span>
      <svg class="search__icon">
        <use href="${/*@__PURE__*/b(nS)}#icon-arrow-right"></use>
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
    return '';*/}}var nR=new nC;class nF extends n${_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it! ;)";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return console.log(this._data),this._data.map(e=>nx.render(e,!1)).join("")}}var nH=new nF;class nN extends n${_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded!";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault();let r=[...new FormData(this)],n=Object.fromEntries(r);// returns an object, which we spread into an array of all the fields that are in that form
e(n)})}_generateMarkup(){}}var nq=new nN;///////////////////////////////////////////////
let nD=async function(){try{// Getting recipe id from hash
let e=window.location.hash.slice(1);if(!e)return;nA.renderSpinner(),nI.update(nm()),nH.update(nh.bookmarks),// Loading recipe
await nv(e),nA.render(nh.recipe)}catch(e){nA.renderError(),console.error(e)}},nU=async function(){try{nI.renderSpinner();// 1) Get search query
let e=nL.getQuery();if(!e)return;// 2) Load search results
await ny(e),nI.render(nm()),nR.render(nh.search)}catch(e){console.log(e)}},nW=async function(e){try{nq.renderSpinner(),// Upload new recipe data
await nE(e),console.log(nh.recipe),nA.render(nh.recipe),nq.renderMessage(),nH.render(nh.bookmarks),// Change ID in url
window.history.pushState(null,"",`#${nh.recipe.id}`),// window.history.back() // going to previous page when clicked browser button for backwards
// Close form window
setTimeout(function(){nq.toggleWindow()},2500)}catch(e){console.error("\uD83D\uDCA5",e),nq.renderError(e.message)}};nH.addHandlerRender(function(){nH.render(nh.bookmarks)}),nA.addHandlerRender(nD),nA.addHandlerUpdateServings(function(e){// 3) Update the recipe servings (in state)
nb(e),nA.update(nh.recipe)}),nA.addHandlerAddBookmark(function(){nh.recipe.bookmarked?nk(nh.recipe.id):nw(nh.recipe),nA.update(nh.recipe),nH.render(nh.bookmarks)}),nL.addHandlerSearch(nU),nR.addHandlerClick(function(e){nI.render(nm(e)),nR.render(nh.search)}),nq.addHandlerUpload(nW)}();//# sourceMappingURL=index.8ca6a26e.js.map

//# sourceMappingURL=index.8ca6a26e.js.map
