(function(F,gs){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=F.document?gs(F,!0):function(pi){if(!pi.document)throw new Error("jQuery requires a window with a document");return gs(pi)}:gs(F)})(typeof window<"u"?window:this,function(F,gs){"use strict";var pi=[],Ul=Object.getPrototypeOf,Ma=pi.slice,Kc=pi.flat?function(x){return pi.flat.call(x)}:function(x){return pi.concat.apply([],x)},Ko=pi.push,ro=pi.indexOf,oo={},Gl=oo.toString,lo=oo.hasOwnProperty,Xc=lo.toString,ir=Xc.call(Object),Di={},ei=function(D){return"function"==typeof D&&"number"!=typeof D.nodeType&&"function"!=typeof D.item},xr=function(D){return null!=D&&D===D.window},li=F.document,Tr={type:!0,src:!0,nonce:!0,noModule:!0};function nr(x,D,R){var V,Z,ee=(R=R||li).createElement("script");if(ee.text=x,D)for(V in Tr)(Z=D[V]||D.getAttribute&&D.getAttribute(V))&&ee.setAttribute(V,Z);R.head.appendChild(ee).parentNode.removeChild(ee)}function kr(x){return null==x?x+"":"object"==typeof x||"function"==typeof x?oo[Gl.call(x)]||"object":typeof x}var U=function(x,D){return new U.fn.init(x,D)};function Sr(x){var D=!!x&&"length"in x&&x.length,R=kr(x);return!ei(x)&&!xr(x)&&("array"===R||0===D||"number"==typeof D&&D>0&&D-1 in x)}U.fn=U.prototype={jquery:"3.6.4",constructor:U,length:0,toArray:function(){return Ma.call(this)},get:function(x){return null==x?Ma.call(this):x<0?this[x+this.length]:this[x]},pushStack:function(x){var D=U.merge(this.constructor(),x);return D.prevObject=this,D},each:function(x){return U.each(this,x)},map:function(x){return this.pushStack(U.map(this,function(D,R){return x.call(D,R,D)}))},slice:function(){return this.pushStack(Ma.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(U.grep(this,function(x,D){return(D+1)%2}))},odd:function(){return this.pushStack(U.grep(this,function(x,D){return D%2}))},eq:function(x){var D=this.length,R=+x+(x<0?D:0);return this.pushStack(R>=0&&R<D?[this[R]]:[])},end:function(){return this.prevObject||this.constructor()},push:Ko,sort:pi.sort,splice:pi.splice},U.extend=U.fn.extend=function(){var x,D,R,V,Z,ee,ae=arguments[0]||{},ye=1,ve=arguments.length,Me=!1;for("boolean"==typeof ae&&(Me=ae,ae=arguments[ye]||{},ye++),"object"!=typeof ae&&!ei(ae)&&(ae={}),ye===ve&&(ae=this,ye--);ye<ve;ye++)if(null!=(x=arguments[ye]))for(D in x)V=x[D],"__proto__"!==D&&ae!==V&&(Me&&V&&(U.isPlainObject(V)||(Z=Array.isArray(V)))?(R=ae[D],ee=Z&&!Array.isArray(R)?[]:Z||U.isPlainObject(R)?R:{},Z=!1,ae[D]=U.extend(Me,ee,V)):void 0!==V&&(ae[D]=V));return ae},U.extend({expando:"jQuery"+("3.6.4"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(x){throw new Error(x)},noop:function(){},isPlainObject:function(x){var D,R;return!(!x||"[object Object]"!==Gl.call(x)||(D=Ul(x))&&("function"!=typeof(R=lo.call(D,"constructor")&&D.constructor)||Xc.call(R)!==ir))},isEmptyObject:function(x){var D;for(D in x)return!1;return!0},globalEval:function(x,D,R){nr(x,{nonce:D&&D.nonce},R)},each:function(x,D){var R,V=0;if(Sr(x))for(R=x.length;V<R&&!1!==D.call(x[V],V,x[V]);V++);else for(V in x)if(!1===D.call(x[V],V,x[V]))break;return x},makeArray:function(x,D){var R=D||[];return null!=x&&(Sr(Object(x))?U.merge(R,"string"==typeof x?[x]:x):Ko.call(R,x)),R},inArray:function(x,D,R){return null==D?-1:ro.call(D,x,R)},merge:function(x,D){for(var R=+D.length,V=0,Z=x.length;V<R;V++)x[Z++]=D[V];return x.length=Z,x},grep:function(x,D,R){for(var Z=[],ee=0,ae=x.length,ye=!R;ee<ae;ee++)!D(x[ee],ee)!==ye&&Z.push(x[ee]);return Z},map:function(x,D,R){var V,Z,ee=0,ae=[];if(Sr(x))for(V=x.length;ee<V;ee++)null!=(Z=D(x[ee],ee,R))&&ae.push(Z);else for(ee in x)null!=(Z=D(x[ee],ee,R))&&ae.push(Z);return Kc(ae)},guid:1,support:Di}),"function"==typeof Symbol&&(U.fn[Symbol.iterator]=pi[Symbol.iterator]),U.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(x,D){oo["[object "+D+"]"]=D.toLowerCase()});var ar=
/*!
     * Sizzle CSS Selector Engine v2.3.10
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://js.foundation/
     *
     * Date: 2023-02-14