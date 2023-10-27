!function(){var e,t,r,n,o,i,a,s,c,u,l,f,p,d,h,g,v,y,m,b,_,w="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function k(e){return e&&e.__esModule?e.default:e}var E={},S={},O=w.parcelRequire3a11;null==O&&((O=function(e){if(e in E)return E[e].exports;if(e in S){var t=S[e];delete S[e];var r={id:e,exports:{}};return E[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){S[e]=t},w.parcelRequire3a11=O),O.register("aNJCr",function(e,t){Object.defineProperty(e.exports,"getBundleURL",{get:function(){return r},set:function(e){return r=e},enumerable:!0,configurable:!0});var r,n={};r=function(e){var t=n[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)// Use the 3rd one, which will be a runtime in the original bundle.
return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),n[e]=t),t}});var j={},A=function(e){return e&&e.Math===Math&&e};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
j=A("object"==typeof globalThis&&globalThis)||A("object"==typeof window&&window)||// eslint-disable-next-line no-restricted-globals -- safe
A("object"==typeof self&&self)||A("object"==typeof w&&w)||// eslint-disable-next-line no-new-func -- fallback
function(){return this}()||j||Function("return this")();var T={},$={};// Detect IE8's incomplete defineProperty implementation
T=!($=function(e){try{return!!e()}catch(e){return!0}})(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var F={},L={},P={},x={};x=!$(function(){// eslint-disable-next-line es/no-function-prototype-bind -- safe
var e=(function(){}).bind();// eslint-disable-next-line no-prototype-builtins -- safe
return"function"!=typeof e||e.hasOwnProperty("prototype")});var M=Function.prototype,I=M.call,C=x&&M.bind.bind(I,I);P=x?C:function(e){return function(){return I.apply(e,arguments)}};var R={},N={},q="object"==typeof document&&document.all,H=(N={all:q,IS_HTMLDDA:void 0===q&&void 0!==q}).all;// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
R=N.IS_HTMLDDA?function(e){return"function"==typeof e||e===H}:function(e){return"function"==typeof e};var D={},U={},W={},z={};// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
z=function(e){return null==e};var B=TypeError;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
W=function(e){if(z(e))throw B("Can't call method on "+e);return e};var G=Object;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
U=function(e){return G(W(e))};var V=P({}.hasOwnProperty);// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
D=Object.hasOwn||function(e,t){return V(U(e),t)};var Y=Function.prototype,J=T&&Object.getOwnPropertyDescriptor,Q=D(Y,"name"),K=Q&&(!T||T&&J(Y,"name").configurable),Z={},X={},ee={},et=Object.defineProperty;ee=function(e,t){try{et(j,e,{value:t,configurable:!0,writable:!0})}catch(r){j[e]=t}return t};var er="__core-js_shared__";X=j[er]||ee(er,{});var en=P(Function.toString);R(X.inspectSource)||(X.inspectSource=function(e){return en(e)}),Z=X.inspectSource;var eo={},ei={},ea=j.WeakMap;ei=R(ea)&&/native code/.test(String(ea));var es={},ec=N.all;es=N.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:R(e)||e===ec}:function(e){return"object"==typeof e?null!==e:R(e)};var eu={},el={},ef={},ep=j.document,ed=es(ep)&&es(ep.createElement);ef=function(e){return ed?ep.createElement(e):{}},// Thanks to IE8 for its funny defineProperty
el=!T&&!$(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty(ef("div"),"a",{get:function(){return 7}}).a});var eh={};// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
eh=T&&$(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eg={},ev=String,ey=TypeError;// `Assert: Type(argument) is Object`
eg=function(e){if(es(e))return e;throw ey(ev(e)+" is not an object")};var em={},eb={},e_={},ew=Function.prototype.call;e_=x?ew.bind(ew):function(){return ew.apply(ew,arguments)};var ek={},eE={};eE=function(e,t){var r;return arguments.length<2?(r=j[e],R(r)?r:void 0):j[e]&&j[e][t]};var eS={};eS=P({}.isPrototypeOf);var eO={},ej={},eA={},eT={};eT="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var e$=j.process,eF=j.Deno,eL=e$&&e$.versions||eF&&eF.version,eP=eL&&eL.v8;eP&&// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(i=(o=eP.split("."))[0]>0&&o[0]<4?1:+(o[0]+o[1])),!i&&eT&&(!(o=eT.match(/Edge\/(\d+)/))||o[1]>=74)&&(o=eT.match(/Chrome\/(\d+)/))&&(i=+o[1]),eA=i;var ex=j.String;eO=// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
(ej=!!Object.getOwnPropertySymbols&&!$(function(){var e=Symbol("symbol detection");// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
// nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
// of course, fail.
return!ex(e)||!(Object(e) instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&eA&&eA<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var eM=Object;ek=eO?function(e){return"symbol"==typeof e}:function(e){var t=eE("Symbol");return R(t)&&eS(t.prototype,eM(e))};var eI={},eC={},eR={},eN=String;eR=function(e){try{return eN(e)}catch(e){return"Object"}};var eq=TypeError;// `Assert: IsCallable(argument) is true`
eC=function(e){if(R(e))return e;throw eq(eR(e)+" is not a function")},// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
eI=function(e,t){var r=e[t];return z(r)?void 0:eC(r)};var eH={},eD=TypeError;// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
eH=function(e,t){var r,n;if("string"===t&&R(r=e.toString)&&!es(n=e_(r,e))||R(r=e.valueOf)&&!es(n=e_(r,e))||"string"!==t&&R(r=e.toString)&&!es(n=e_(r,e)))return n;throw eD("Can't convert object to primitive value")};var eU={},eW={},ez={};ez=!1,(eW=function(e,t){return X[e]||(X[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.32.1",mode:ez?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.1/LICENSE",source:"https://github.com/zloirock/core-js"});var eB={},eG=0,eV=Math.random(),eY=P(1..toString);eB=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eY(++eG+eV,36)};var eJ=j.Symbol,eQ=eW("wks"),eK=eO?eJ.for||eJ:eJ&&eJ.withoutSetter||eB,eZ=TypeError,eX=(eU=function(e){return D(eQ,e)||(eQ[e]=ej&&D(eJ,e)?eJ[e]:eK("Symbol."+e)),eQ[e]})("toPrimitive");// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
eb=function(e,t){if(!es(e)||ek(e))return e;var r,n=eI(e,eX);if(n){if(void 0===t&&(t="default"),r=e_(n,e,t),!es(r)||ek(r))return r;throw eZ("Can't convert object to primitive value")}return void 0===t&&(t="number"),eH(e,t)},// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
em=function(e){var t=eb(e,"string");return ek(t)?t:t+""};var e0=TypeError,e1=Object.defineProperty,e2=Object.getOwnPropertyDescriptor,e3="enumerable",e4="configurable",e8="writable";n=T?eh?function(e,t,r){if(eg(e),t=em(t),eg(r),"function"==typeof e&&"prototype"===t&&"value"in r&&e8 in r&&!r[e8]){var n=e2(e,t);n&&n[e8]&&(e[t]=r.value,r={configurable:e4 in r?r[e4]:n[e4],enumerable:e3 in r?r[e3]:n[e3],writable:!1})}return e1(e,t,r)}:e1:function(e,t,r){if(eg(e),t=em(t),eg(r),el)try{return e1(e,t,r)}catch(e){}if("get"in r||"set"in r)throw e0("Accessors not supported");return"value"in r&&(e[t]=r.value),e};var e7={};e7=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},eu=T?function(e,t,r){return n(e,t,e7(1,r))}:function(e,t,r){return e[t]=r,e};var e9={},e6=eW("keys");e9=function(e){return e6[e]||(e6[e]=eB(e))};var e5={};e5={};var te="Object already initialized",tt=j.TypeError,tr=j.WeakMap;if(ei||X.state){var tn=X.state||(X.state=new tr);/* eslint-disable no-self-assign -- prototype methods protection */tn.get=tn.get,tn.has=tn.has,tn.set=tn.set,/* eslint-enable no-self-assign -- prototype methods protection */a=function(e,t){if(tn.has(e))throw tt(te);return t.facade=e,tn.set(e,t),t},s=function(e){return tn.get(e)||{}},c=function(e){return tn.has(e)}}else{var to=e9("state");e5[to]=!0,a=function(e,t){if(D(e,to))throw tt(te);return t.facade=e,eu(e,to,t),t},s=function(e){return D(e,to)?e[to]:{}},c=function(e){return D(e,to)}}var ti=(eo={set:a,get:s,has:c,enforce:function(e){return c(e)?s(e):a(e,{})},getterFor:function(e){return function(t){var r;if(!es(t)||(r=s(t)).type!==e)throw tt("Incompatible receiver, "+e+" required");return r}}}).enforce,ta=eo.get,ts=String,tc=Object.defineProperty,tu=P("".slice),tl=P("".replace),tf=P([].join),tp=T&&!$(function(){return 8!==tc(function(){},"length",{value:8}).length}),th=String(String).split("String"),tg=L=function(e,t,r){"Symbol("===tu(ts(t),0,7)&&(t="["+tl(ts(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!D(e,"name")||K&&e.name!==t)&&(T?tc(e,"name",{value:t,configurable:!0}):e.name=t),tp&&r&&D(r,"arity")&&e.length!==r.arity&&tc(e,"length",{value:r.arity});try{r&&D(r,"constructor")&&r.constructor?T&&tc(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=ti(e);return D(n,"source")||(n.source=tf(th,"string"==typeof t?t:"")),e};// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString=tg(function(){return R(this)&&ta(this).source||Z(this)},"toString"),F=function(e,t,r){return r.get&&L(r.get,t,{getter:!0}),r.set&&L(r.set,t,{setter:!0}),n(e,t,r)};var tv={};// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
tv=function(){var e=eg(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t};// babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
var ty=j.RegExp,tm=ty.prototype;T&&$(function(){var e=!0;try{ty(".","d")}catch(t){e=!1}var t={},r="",n=e?"dgimsy":"gimsy",o=function(e,n){// eslint-disable-next-line es/no-object-defineproperty -- safe
Object.defineProperty(t,e,{get:function(){return r+=n,!0}})},i={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var a in e&&(i.hasIndices="d"),i)o(a,i[a]);return Object.getOwnPropertyDescriptor(tm,"flags").get.call(t)!==n||r!==n})&&F(tm,"flags",{configurable:!0,get:tv});var tb={},t_={};// eslint-disable-next-line es/no-typed-arrays -- safe
t_="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView;var tw={},tk={},tE=eU("toStringTag"),tS={};tS[tE]="z",tk="[object z]"===String(tS);var tO={},tj=P({}.toString),tA=P("".slice);tO=function(e){return tA(tj(e),8,-1)};var tT=eU("toStringTag"),t$=Object,tF="Arguments"===tO(function(){return arguments}()),tL=function(e,t){try{return e[t]}catch(e){}};// getting tag from ES6+ `Object.prototype.toString`
tw=tk?tO:function(e){var t,r,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=tL(t=t$(e),tT))?r:tF?tO(t):"Object"===(n=tO(t))&&R(t.callee)?"Arguments":n};var tP={};tP=function(e,t,r,o){o||(o={});var i=o.enumerable,a=void 0!==o.name?o.name:t;if(R(r)&&L(r,a,o),o.global)i?e[t]=r:ee(t,r);else{try{o.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:n(e,t,{value:r,enumerable:!1,configurable:!o.nonConfigurable,writable:!o.nonWritable})}return e};var tx={},tM={};tM=!$(function(){function e(){}// eslint-disable-next-line es/no-object-getprototypeof -- required for testing
return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype});var tI=e9("IE_PROTO"),tC=Object,tR=tC.prototype;// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
tx=tM?tC.getPrototypeOf:function(e){var t=U(e);if(D(t,tI))return t[tI];var r=t.constructor;return R(r)&&t instanceof r?r.prototype:t instanceof tC?tR:null};var tN={},tq={};tq=function(e,t,r){try{// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
return P(eC(Object.getOwnPropertyDescriptor(e,t)[r]))}catch(e){}};var tH={},tD=String,tU=TypeError;tH=function(e){if("object"==typeof e||R(e))return e;throw tU("Can't set "+tD(e)+" as a prototype")},// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
tN=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,r={};try{(e=tq(Object.prototype,"__proto__","set"))(r,[]),t=r instanceof Array}catch(e){}return function(r,n){return eg(r),tH(n),t?e(r,n):r.__proto__=n,r}}():void 0);var tW=eo.enforce,tz=eo.get,tB=j.Int8Array,tG=tB&&tB.prototype,tV=j.Uint8ClampedArray,tY=tV&&tV.prototype,tJ=tB&&tx(tB),tQ=tG&&tx(tG),tK=Object.prototype,tZ=j.TypeError,tX=eU("toStringTag"),t0=eB("TYPED_ARRAY_TAG"),t1="TypedArrayConstructor",t2=t_&&!!tN&&"Opera"!==tw(j.opera),t3=!1,t4={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},t8={BigInt64Array:8,BigUint64Array:8},t7=function(e){var t=tx(e);if(es(t)){var r=tz(t);return r&&D(r,t1)?r[t1]:t7(t)}},t9=function(e){if(!es(e))return!1;var t=tw(e);return D(t4,t)||D(t8,t)};for(u in t4)(f=(l=j[u])&&l.prototype)?tW(f)[t1]=l:t2=!1;for(u in t8)(f=(l=j[u])&&l.prototype)&&(tW(f)[t1]=l);// WebKit bug - typed arrays constructors prototype is Object.prototype
if((!t2||!R(tJ)||tJ===Function.prototype)&&(// eslint-disable-next-line no-shadow -- safe
tJ=function(){throw tZ("Incorrect invocation")},t2))for(u in t4)j[u]&&tN(j[u],tJ);if((!t2||!tQ||tQ===tK)&&(tQ=tJ.prototype,t2))for(u in t4)j[u]&&tN(j[u].prototype,tQ);if(t2&&tx(tY)!==tQ&&tN(tY,tQ),T&&!D(tQ,tX))for(u in t3=!0,F(tQ,tX,{configurable:!0,get:function(){return es(this)?this[t0]:void 0}}),t4)j[u]&&eu(j[u],t0,u);tb={NATIVE_ARRAY_BUFFER_VIEWS:t2,TYPED_ARRAY_TAG:t3&&t0,aTypedArray:function(e){if(t9(e))return e;throw tZ("Target is not a typed array")},aTypedArrayConstructor:function(e){if(R(e)&&(!tN||eS(tJ,e)))return e;throw tZ(eR(e)+" is not a typed array constructor")},exportTypedArrayMethod:function(e,t,r,n){if(T){if(r)for(var o in t4){var i=j[o];if(i&&D(i.prototype,e))try{delete i.prototype[e]}catch(r){// old WebKit bug - some methods are non-configurable
try{i.prototype[e]=t}catch(e){}}}(!tQ[e]||r)&&tP(tQ,e,r?t:t2&&tG[e]||t,n)}},exportTypedArrayStaticMethod:function(e,t,r){var n,o;if(T){if(tN){if(r){for(n in t4)if((o=j[n])&&D(o,e))try{delete o[e]}catch(e){}}if(tJ[e]&&!r)return;try{return tP(tJ,e,r?t:t2&&tJ[e]||t)}catch(e){}}for(n in t4)(o=j[n])&&(!o[e]||r)&&tP(o,e,t)}},getTypedArrayConstructor:t7,isView:function(e){if(!es(e))return!1;var t=tw(e);return"DataView"===t||D(t4,t)||D(t8,t)},isTypedArray:t9,TypedArray:tJ,TypedArrayPrototype:tQ};var t6={},t5={},re={},rt={},rr=Math.ceil,rn=Math.floor;// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
rt=Math.trunc||function(e){var t=+e;return(t>0?rn:rr)(t)},// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
re=function(e){var t=+e;// eslint-disable-next-line no-self-compare -- NaN check
return t!=t||0===t?0:rt(t)};var ro=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
t5=function(e){return e>0?ro(re(e),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
},// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
t6=function(e){return t5(e.length)};var ri={},ra={},rs=RangeError;ra=function(e){var t=re(e);if(t<0)throw rs("The argument can't be less than 0");return t};var rc=RangeError;ri=function(e,t){var r=ra(e);if(r%t)throw rc("Wrong offset");return r};var ru=j.RangeError,rl=j.Int8Array,rf=rl&&rl.prototype,rp=rf&&rf.set,rd=tb.aTypedArray,rh=tb.exportTypedArrayMethod,rg=!$(function(){// eslint-disable-next-line es/no-typed-arrays -- required for testing
var e=new Uint8ClampedArray(2);return e_(rp,e,{length:1,0:3},1),3!==e[1]}),rv=rg&&tb.NATIVE_ARRAY_BUFFER_VIEWS&&$(function(){var e=new rl(2);return e.set(1),e.set("2",1),0!==e[0]||2!==e[1]});// `%TypedArray%.prototype.set` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.set
rh("set",function(e/* , offset */){rd(this);var t=ri(arguments.length>1?arguments[1]:void 0,1),r=U(e);if(rg)return e_(rp,this,r,t);var n=this.length,o=t6(r),i=0;if(o+t>n)throw ru("Wrong length");for(;i<o;)this[t+i]=r[i++]},!rg||rv);var ry={},rm={}.propertyIsEnumerable,rb=Object.getOwnPropertyDescriptor;d=rb&&!rm.call({1:2},1)?function(e){var t=rb(this,e);return!!t&&t.enumerable}:rm;var r_={},rw={},rk=Object,rE=P("".split);// fallback for non-array-like ES3 and non-enumerable old V8 strings
rw=$(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return!rk("z").propertyIsEnumerable(0)})?function(e){return"String"===tO(e)?rE(e,""):rk(e)}:rk,r_=function(e){return rw(W(e))};// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var rS=Object.getOwnPropertyDescriptor;p=T?rS:function(e,t){if(e=r_(e),t=em(t),el)try{return rS(e,t)}catch(e){}if(D(e,t))return e7(!e_(d,e,t),e[t])};var rO={},rj={},rA={},rT={},r$=Math.max,rF=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
rT=function(e,t){var r=re(e);return r<0?r$(r+t,0):rF(r,t)};// `Array.prototype.{ indexOf, includes }` methods implementation
var rL=function(e){return function(t,r,n){var o,i=r_(t),a=t6(i),s=rT(n,a);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(e&&r!=r){for(;a>s;)// eslint-disable-next-line no-self-compare -- NaN check
if((o=i[s++])!=o)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;a>s;s++)if((e||s in i)&&i[s]===r)return e||s||0;return!e&&-1}},rP={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:rL(!0),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:rL(!1)}.indexOf,rx=P([].push);rA=function(e,t){var r,n=r_(e),o=0,i=[];for(r in n)!D(e5,r)&&D(n,r)&&rx(i,r);// Don't enum bug & hidden keys
for(;t.length>o;)D(n,r=t[o++])&&(~rP(i,r)||rx(i,r));return i};var rM=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");h=Object.getOwnPropertyNames||function(e){return rA(e,rM)},g=Object.getOwnPropertySymbols;var rI=P([].concat);// all object keys, includes non-enumerable and symbols
rj=eE("Reflect","ownKeys")||function(e){var t=h(eg(e));return g?rI(t,g(e)):t},rO=function(e,t,r){for(var o=rj(t),i=0;i<o.length;i++){var a=o[i];D(e,a)||r&&D(r,a)||n(e,a,p(t,a))}};var rC={},rR=/#|\.prototype\./,rN=function(e,t){var r=rH[rq(e)];return r===rU||r!==rD&&(R(t)?$(t):!!t)},rq=rN.normalize=function(e){return String(e).replace(rR,".").toLowerCase()},rH=rN.data={},rD=rN.NATIVE="N",rU=rN.POLYFILL="P";rC=rN,/*
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
*/ry=function(e,t){var r,n,o,i,a,s=e.target,c=e.global,u=e.stat;if(r=c?j:u?j[s]||ee(s,{}):(j[s]||{}).prototype)for(n in t){// contained in target
if(i=t[n],o=e.dontCallGetSet?(a=p(r,n))&&a.value:r[n],!rC(c?n:s+(u?".":"#")+n,e.forced)&&void 0!==o){if(typeof i==typeof o)continue;rO(i,o)}(e.sham||o&&o.sham)&&eu(i,"sham",!0),tP(r,n,i,e)}};var rW={},rz={},rB=Function.prototype,rG=rB.apply,rV=rB.call;// eslint-disable-next-line es/no-reflect -- safe
rz="object"==typeof Reflect&&Reflect.apply||(x?rV.bind(rG):function(){return rV.apply(rG,arguments)});var rY={},rJ={},rQ=(rJ=function(e){// Nashorn bug:
//   https://github.com/zloirock/core-js/issues/1128
//   https://github.com/zloirock/core-js/issues/1130
if("Function"===tO(e))return P(e)})(rJ.bind);// optional / simple context binding
rY=function(e,t){return eC(e),void 0===t?e:x?rQ(e,t):function(){return e.apply(t,arguments)}};var rK={};rK=eE("document","documentElement");var rZ={};rZ=P([].slice);var rX={},r0=TypeError;rX=function(e,t){if(e<t)throw r0("Not enough arguments");return e};var r1={};// eslint-disable-next-line redos/no-vulnerable -- safe
r1=/(?:ipad|iphone|ipod).*applewebkit/i.test(eT);var r2={};r2="process"===tO(j.process);var r3=j.setImmediate,r4=j.clearImmediate,r8=j.process,r7=j.Dispatch,r9=j.Function,r6=j.MessageChannel,r5=j.String,ne=0,nt={},nr="onreadystatechange";$(function(){// Deno throws a ReferenceError on `location` access without `--location` flag
v=j.location});var nn=function(e){if(D(nt,e)){var t=nt[e];delete nt[e],t()}},no=function(e){return function(){nn(e)}},ni=function(e){nn(e.data)},na=function(e){// old engines have not location.origin
j.postMessage(r5(e),v.protocol+"//"+v.host)};r3&&r4||(r3=function(e){rX(arguments.length,1);var t=R(e)?e:r9(e),r=rZ(arguments,1);return nt[++ne]=function(){rz(t,void 0,r)},y(ne),ne},r4=function(e){delete nt[e]},r2?y=function(e){r8.nextTick(no(e))}:r7&&r7.now?y=function(e){r7.now(no(e))}:r6&&!r1?(b=(m=new r6).port2,m.port1.onmessage=ni,y=rY(b.postMessage,b)):j.addEventListener&&R(j.postMessage)&&!j.importScripts&&v&&"file:"!==v.protocol&&!$(na)?(y=na,j.addEventListener("message",ni,!1)):y=nr in ef("script")?function(e){rK.appendChild(ef("script"))[nr]=function(){rK.removeChild(this),nn(e)}}:function(e){setTimeout(no(e),0)});var ns=(rW={set:r3,clear:r4}).clear;// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
ry({global:!0,bind:!0,enumerable:!0,forced:j.clearImmediate!==ns},{clearImmediate:ns});var nc=rW.set,nu={},nl={};/* global Bun -- Deno case */nl="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var nf=j.Function,np=/MSIE .\./.test(eT)||nl&&((e=j.Bun.version.split(".")).length<3||"0"===e[0]&&(e[1]<3||"3"===e[1]&&"0"===e[2]));// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
nu=function(e,t){var r=t?2:1;return np?function(n,o/* , ...arguments */){var i=rX(arguments.length,1)>r,a=R(n)?n:nf(n),s=i?rZ(arguments,r):[],c=i?function(){rz(a,this,s)}:a;return t?e(c,o):e(c)}:e};// https://github.com/oven-sh/bun/issues/1633
var nd=j.setImmediate?nu(nc,!1):nc;// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
ry({global:!0,bind:!0,enumerable:!0,forced:j.setImmediate!==nd},{setImmediate:nd});/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nh=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,i){var a,s,c=Object.create((r&&r.prototype instanceof v?r:v).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
o(c,"_invoke",{value:(a=new A(i||[]),s=p,function(r,o){if(s===d)throw Error("Generator is already running");if(s===h){if("throw"===r)throw o;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return{value:t,done:!0}}for(a.method=r,a.arg=o;;){var i=a.delegate;if(i){var c=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function e(r,n){var o=n.method,i=r.iterator[o];if(i===t)return(// A .throw or .return when the delegate iterator has no .throw
// method, or a missing .next mehtod, always terminate the
// yield* loop.
n.delegate=null,"throw"===o&&r.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+o+"' method")),g);var a=f(i,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var s=a.arg;return s?s.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
n[r.resultName]=s.value,// Resume execution at the desired location (see delegateYield).
n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(i,a);if(c){if(c===g)continue;return c}}if("next"===a.method)// function.sent implementation.
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
o(this,"_invoke",{value:function(o,i){function a(){return new t(function(r,a){!function r(o,i,a,s){var c=f(e[o],e,i);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
u.value=e,a(u)},function(e){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return r("throw",e,a,s)})}}(o,i,r,a)})}return r=// all previous Promises have been resolved before calling invoke,
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
a):a()}})}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw TypeError(typeof e+" is not iterable")}return y.prototype=m,o(k,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:y,configurable:!0}),y.displayName=u(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new S(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a// If outerFn is a generator, return the full iterator.
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
e.done=!0,e)}},e.values=T,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&// location outside the try/catch block.
(i=null);var a=i?i.completion:{};return(a.type=e,a.arg=t,i)?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=t),g}},e}({});try{regeneratorRuntime=nh}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=nh:Function("r","regeneratorRuntime = r")(nh)}let ng="https://forkify-api.herokuapp.com/api/v2/recipes/",nv="89242f0a-343e-40e4-81f7-3318cb660857",ny=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),o=await n.json();if(!n.ok)throw Error(`${o.message} (${n.status})`);return o}catch(e){throw e;// promise that is being returned from getJSON will be reject with this error handling, and we will be able to handle the error in model.js, where we want it. We propagated error from one async funciton to another by re-throwing it here in this catch block
}},nm={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},nb=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},n_=async function(e){try{let t=await ny(`${ng}${e}?key=${nv}`);nm.recipe=nb(t),nm.bookmarks.some(t=>t.id===e)?nm.recipe.bookmarked=!0:nm.recipe.bookmarked=!1,console.log(nm.recipe)}catch(e){throw(// Temp error handling
console.error(`${e} 💥💥💥💥`),e)}},nw=async function(e){try{nm.search.query=e;let t=await ny(`${ng}?search=${e}&key=${nv}`);console.log(t),nm.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),nm.search.page=1}catch(e){throw console.error(`${e} 💥💥💥💥`),e}},nk=function(e=nm.search.page){nm.search.page=e;let t=(e-1)*nm.search.resultsPerPage,r=e*nm.search.resultsPerPage;// 0 - for example if we requested page 1: 1 - 1 is 0, and 0 * 10 is 0, so from that position in array of results
return nm.search.results.slice(t,r)},nE=function(e){nm.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/nm.recipe.servings;// newQt = oldQt * newServings / oldServings
}),nm.recipe.servings=e},nS=function(){localStorage.setItem("bookmarks",JSON.stringify(nm.bookmarks))},nO=function(e){// Add bookmark
nm.bookmarks.push(e),e.id===nm.recipe.id&&(nm.recipe.bookmarked=!0),nS()},nj=function(e){// Remove bookmark
let t=nm.bookmarks.findIndex(t=>t.id===e);nm.bookmarks.splice(t,1),e===nm.recipe.id&&(nm.recipe.bookmarked=!1),nS()},nA=async function(e){try{let t=Object.entries(e)// make arary with Object.entries()
.filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient format! Please use the correct format :)");let[r,n,o]=t;return{quantity:r?+r:null,unit:n,description:o}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await ny(`${ng}?search=${r.title}&key=${nv}`,r);nm.recipe=nb(n),nO(nm.recipe);// console.log(recipe);
}catch(e){throw e}};!function(){let e=localStorage.getItem("bookmarks");e&&(nm.bookmarks=JSON.parse(e));//JSON.parse() to convert it back to an object
}();var nT={};nT=O("aNJCr").getBundleURL("4ko55")+O("iE7OH").resolve("d9SZC");class n${_data;/**
   * Render the recieved object to the DOM
   * @param {Object | Object[]} data The data to be rendered (e.g. recipe)
   * @param {boolean} [render=true] If false, create markup string instead of rendering to the DOM
   * @returns {undefined | string} A markup string is returned if render=false
   * @this {Object} View instance
   * @author Sladjana Dejanovic
   * @todo Finish implementation
   */render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=document.createRange().createContextualFragment(t),n=Array.from(r.querySelectorAll("*")),o=Array.from(this._parentElement.querySelectorAll("*"));n.forEach((e,t)=>{let r=o[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>{r.setAttribute(e.name,e.value)})})}_clear(){this._parentElement.innerHTML=""}renderSpinner=function(){let e=`
    <div class="spinner">
      <svg>
        <use href="${/*@__PURE__*/k(nT)}#icon-loader"></use>
      </svg>
    </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)};renderError(e=this._errorMessage){let t=`<div class="error">
      <div>
        <svg>
          <use href="${/*@__PURE__*/k(nT)}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${e}</p>
    </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`<div class="message">
      <div>
        <svg>
          <use href="${/*@__PURE__*/k(nT)}#icon-smile"></use>
        </svg>
      </div>
      <p>${e}</p>
    </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}}(Fraction=function(e,t){/* double argument invocation */if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(// what are they?
// hmm....
// assume they are ints?
this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){// or a = '2/3' and b = undefined if we are just passed a single-part number
var r,n,o=num.split(" ");/* compound fraction e.g. 'A B/C' *///  if a is an integer ...
if(o[0]&&(r=o[0]),o[1]&&(n=o[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));// could not parse
if(!r||n)return;/* simple fraction e.g. 'A/B' */if("string"==typeof r&&r.match("/")){// it's not a whole number... it's actually a fraction without a whole part written
var i=r.split("/");this.numerator=i[0],this.denominator=i[1];/* string floating point */}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},/* pretty-printer, converts fractions into whole numbers and fractions */Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},/* destructively rescale the fraction by some integral factor */Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));// fractions that are equal should have equal normalized forms
var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},/* Utility functions *//* Destructively normalize the fraction to its smallest representation. 
 * e.g. 4/16 -> 1/4, 14/28 -> 1/2, etc.
 * This is called after all math ops.
 */Fraction.prototype.normalize=(t=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},r=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){// XXX hackish.  Is there a better way to address this issue?
//
/* first check if we have decimals, and if we do eliminate them
         * multiply by the 10 ^ number of decimal places in the number
         * round the number to nine decimal places
         * to avoid js floating point funnies
         */if(t(this.denominator)){var e=r(this.denominator,9),n=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*n),//this.numerator *= scaleup;
this.numerator*=n}if(t(this.numerator)){var e=r(this.numerator,9),n=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*n),//this.numerator *= scaleup;
this.denominator*=n}var o=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=o,this.denominator/=o,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),/* Takes two numbers and returns their greatest common factor.
 */Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),o=Fraction.primeFactors(t);return(// for each factor in fa
// if it's also in fb
// put it into the common factors
n.forEach(function(e){var t=o.indexOf(e);t>=0&&(r.push(e),o.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},// Adapted from: 
// http://www.btinternet.com/~se16/js/factor.htm
Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;// and increment
return 1!=t&&r.push(t),r;// Return the prime factors
},_=Fraction;class nF extends n${_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;+n>0&&e(+n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){// event delegation is good for adding events on elements that don't exists yet when the page loads for the first time
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
              <use href="${/*@__PURE__*/k(nT)}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${/*@__PURE__*/k(nT)}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
                <svg>
                  <use href="${/*@__PURE__*/k(nT)}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
                <svg>
                  <use href="${/*@__PURE__*/k(nT)}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
            <svg>
              <use href="${/*@__PURE__*/k(nT)}#icon-user"></use>
            </svg>
          </div>

          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${/*@__PURE__*/k(nT)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
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
              <use href="${/*@__PURE__*/k(nT)}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
    `}_generateMarkupIngredient(e){return`<li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${/*@__PURE__*/k(nT)}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${e.quantity?new _(e.quantity).toString():""}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${e.unit}</span>
        ${e.description}
      </div>
    </li>
    `}}var nL=new nF;class nP{#e=document.querySelector(".search");getQuery(){let e=this.#e.querySelector(".search__field").value;return this.#t(),e}#t(){this.#e.querySelector(".search__field").value=""}addHandlerSearch(e){this.#e.addEventListener("submit",function(t){t.preventDefault(),e()})}}var nx=new nP,nM=new class extends n${_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`<li class="preview">
    <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">
      <figure class="preview__fig">
        <img src="${this._data.image}" alt="${this._data.title}" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${this._data.title} ...</h4>
        <p class="preview__publisher">${this._data.publisher}</p>
      
      <div class="preview__user-generated ${this._data.key?"":"hidden"}">
      <svg>
        <use href="${/*@__PURE__*/k(nT)}#icon-user"></use>
      </svg>
      </div>
    </div>
    </a>
  </li>`}};class nI extends n${_parentElement=document.querySelector(".results");_errorMessage="No recepies found for your query! Please try again ;)";_message="";_generateMarkup(){return this._data.map(e=>nM.render(e,!1)).join("")}}var nC=new nI;class nR extends n${_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");if(!r)return;let n=+r.dataset.goto;e(n)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return(// Page 1, and there are other pages
1===e&&t>1?`<button data-goto="${e+1}" class="btn--inline pagination__btn--next">
      <span>Page ${e+1}</span>
      <svg class="search__icon">
        <use href="${/*@__PURE__*/k(nT)}#icon-arrow-right"></use>
      </svg>
    </button>`:e===t&&t>1?`
      <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${/*@__PURE__*/k(nT)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${e-1}</span>
          </button>
      `:e<t?`<button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${/*@__PURE__*/k(nT)}#icon-arrow-left"></use>
      </svg>
      <span>Page ${e-1}</span>
    </button>
    <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
      <span>Page ${e+1}</span>
      <svg class="search__icon">
        <use href="${/*@__PURE__*/k(nT)}#icon-arrow-right"></use>
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
    return '';*/}}var nN=new nR;class nq extends n${_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it! ;)";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return console.log(this._data),this._data.map(e=>nM.render(e,!1)).join("")}}var nH=new nq;class nD extends n${_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded!";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault();let r=[...new FormData(this)],n=Object.fromEntries(r);// returns an object, which we spread into an array of all the fields that are in that form
e(n)})}_generateMarkup(){}}var nU=new nD;///////////////////////////////////////////////
let nW=async function(){try{// Getting recipe id from hash
let e=window.location.hash.slice(1);if(!e)return;nL.renderSpinner(),nC.update(nk()),nH.update(nm.bookmarks),// Loading recipe
await n_(e),nL.render(nm.recipe)}catch(e){nL.renderError(),console.error(e)}},nz=async function(){try{nC.renderSpinner();// 1) Get search query
let e=nx.getQuery();if(!e)return;// 2) Load search results
await nw(e),nC.render(nk()),nN.render(nm.search)}catch(e){console.log(e)}},nB=async function(e){try{nU.renderSpinner(),// Upload new recipe data
await nA(e),console.log(nm.recipe),nL.render(nm.recipe),nU.renderMessage(),nH.render(nm.bookmarks),// Change ID in url
window.history.pushState(null,"",`#${nm.recipe.id}`),// window.history.back() // going to previous page when clicked browser button for backwards
// Close form window
setTimeout(function(){nU.toggleWindow()},2500)}catch(e){console.error("\uD83D\uDCA5",e),nU.renderError(e.message)}};nH.addHandlerRender(function(){nH.render(nm.bookmarks)}),nL.addHandlerRender(nW),nL.addHandlerUpdateServings(function(e){// 3) Update the recipe servings (in state)
nE(e),nL.update(nm.recipe)}),nL.addHandlerAddBookmark(function(){nm.recipe.bookmarked?nj(nm.recipe.id):nO(nm.recipe),nL.update(nm.recipe),nH.render(nm.bookmarks)}),nx.addHandlerSearch(nz),nN.addHandlerClick(function(e){nC.render(nk(e)),nN.render(nm.search)}),nU.addHandlerUpload(nB)}();//# sourceMappingURL=index.18d59065.js.map

//# sourceMappingURL=index.18d59065.js.map
