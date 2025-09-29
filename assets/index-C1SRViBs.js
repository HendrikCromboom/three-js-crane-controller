(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Nf={exports:{}},_o={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qg;function Vx(){if(qg)return _o;qg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:u}}return _o.Fragment=t,_o.jsx=i,_o.jsxs=i,_o}var Yg;function kx(){return Yg||(Yg=1,Nf.exports=Vx()),Nf.exports}var me=kx(),Of={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zg;function Xx(){if(Zg)return oe;Zg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,R={};function M(U,$,vt){this.props=U,this.context=$,this.refs=R,this.updater=vt||y}M.prototype.isReactComponent={},M.prototype.setState=function(U,$){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,$,"setState")},M.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function _(){}_.prototype=M.prototype;function F(U,$,vt){this.props=U,this.context=$,this.refs=R,this.updater=vt||y}var O=F.prototype=new _;O.constructor=F,b(O,M.prototype),O.isPureReactComponent=!0;var D=Array.isArray,B={H:null,A:null,T:null,S:null,V:null},H=Object.prototype.hasOwnProperty;function I(U,$,vt,St,Dt,Ft){return vt=Ft.ref,{$$typeof:o,type:U,key:$,ref:vt!==void 0?vt:null,props:Ft}}function X(U,$){return I(U.type,$,void 0,void 0,void 0,U.props)}function w(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function C(U){var $={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(vt){return $[vt]})}var G=/\/+/g;function Z(U,$){return typeof U=="object"&&U!==null&&U.key!=null?C(""+U.key):$.toString(36)}function rt(){}function ft(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(rt,rt):(U.status="pending",U.then(function($){U.status==="pending"&&(U.status="fulfilled",U.value=$)},function($){U.status==="pending"&&(U.status="rejected",U.reason=$)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function lt(U,$,vt,St,Dt){var Ft=typeof U;(Ft==="undefined"||Ft==="boolean")&&(U=null);var et=!1;if(U===null)et=!0;else switch(Ft){case"bigint":case"string":case"number":et=!0;break;case"object":switch(U.$$typeof){case o:case t:et=!0;break;case g:return et=U._init,lt(et(U._payload),$,vt,St,Dt)}}if(et)return Dt=Dt(U),et=St===""?"."+Z(U,0):St,D(Dt)?(vt="",et!=null&&(vt=et.replace(G,"$&/")+"/"),lt(Dt,$,vt,"",function(jt){return jt})):Dt!=null&&(w(Dt)&&(Dt=X(Dt,vt+(Dt.key==null||U&&U.key===Dt.key?"":(""+Dt.key).replace(G,"$&/")+"/")+et)),$.push(Dt)),1;et=0;var gt=St===""?".":St+":";if(D(U))for(var bt=0;bt<U.length;bt++)St=U[bt],Ft=gt+Z(St,bt),et+=lt(St,$,vt,Ft,Dt);else if(bt=x(U),typeof bt=="function")for(U=bt.call(U),bt=0;!(St=U.next()).done;)St=St.value,Ft=gt+Z(St,bt++),et+=lt(St,$,vt,Ft,Dt);else if(Ft==="object"){if(typeof U.then=="function")return lt(ft(U),$,vt,St,Dt);throw $=String(U),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return et}function N(U,$,vt){if(U==null)return U;var St=[],Dt=0;return lt(U,St,"","",function(Ft){return $.call(vt,Ft,Dt++)}),St}function K(U){if(U._status===-1){var $=U._result;$=$(),$.then(function(vt){(U._status===0||U._status===-1)&&(U._status=1,U._result=vt)},function(vt){(U._status===0||U._status===-1)&&(U._status=2,U._result=vt)}),U._status===-1&&(U._status=0,U._result=$)}if(U._status===1)return U._result.default;throw U._result}var Y=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function xt(){}return oe.Children={map:N,forEach:function(U,$,vt){N(U,function(){$.apply(this,arguments)},vt)},count:function(U){var $=0;return N(U,function(){$++}),$},toArray:function(U){return N(U,function($){return $})||[]},only:function(U){if(!w(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},oe.Component=M,oe.Fragment=i,oe.Profiler=l,oe.PureComponent=F,oe.StrictMode=r,oe.Suspense=m,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,oe.__COMPILER_RUNTIME={__proto__:null,c:function(U){return B.H.useMemoCache(U)}},oe.cache=function(U){return function(){return U.apply(null,arguments)}},oe.cloneElement=function(U,$,vt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var St=b({},U.props),Dt=U.key,Ft=void 0;if($!=null)for(et in $.ref!==void 0&&(Ft=void 0),$.key!==void 0&&(Dt=""+$.key),$)!H.call($,et)||et==="key"||et==="__self"||et==="__source"||et==="ref"&&$.ref===void 0||(St[et]=$[et]);var et=arguments.length-2;if(et===1)St.children=vt;else if(1<et){for(var gt=Array(et),bt=0;bt<et;bt++)gt[bt]=arguments[bt+2];St.children=gt}return I(U.type,Dt,void 0,void 0,Ft,St)},oe.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},oe.createElement=function(U,$,vt){var St,Dt={},Ft=null;if($!=null)for(St in $.key!==void 0&&(Ft=""+$.key),$)H.call($,St)&&St!=="key"&&St!=="__self"&&St!=="__source"&&(Dt[St]=$[St]);var et=arguments.length-2;if(et===1)Dt.children=vt;else if(1<et){for(var gt=Array(et),bt=0;bt<et;bt++)gt[bt]=arguments[bt+2];Dt.children=gt}if(U&&U.defaultProps)for(St in et=U.defaultProps,et)Dt[St]===void 0&&(Dt[St]=et[St]);return I(U,Ft,void 0,void 0,null,Dt)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(U){return{$$typeof:d,render:U}},oe.isValidElement=w,oe.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:K}},oe.memo=function(U,$){return{$$typeof:p,type:U,compare:$===void 0?null:$}},oe.startTransition=function(U){var $=B.T,vt={};B.T=vt;try{var St=U(),Dt=B.S;Dt!==null&&Dt(vt,St),typeof St=="object"&&St!==null&&typeof St.then=="function"&&St.then(xt,Y)}catch(Ft){Y(Ft)}finally{B.T=$}},oe.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},oe.use=function(U){return B.H.use(U)},oe.useActionState=function(U,$,vt){return B.H.useActionState(U,$,vt)},oe.useCallback=function(U,$){return B.H.useCallback(U,$)},oe.useContext=function(U){return B.H.useContext(U)},oe.useDebugValue=function(){},oe.useDeferredValue=function(U,$){return B.H.useDeferredValue(U,$)},oe.useEffect=function(U,$,vt){var St=B.H;if(typeof vt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return St.useEffect(U,$)},oe.useId=function(){return B.H.useId()},oe.useImperativeHandle=function(U,$,vt){return B.H.useImperativeHandle(U,$,vt)},oe.useInsertionEffect=function(U,$){return B.H.useInsertionEffect(U,$)},oe.useLayoutEffect=function(U,$){return B.H.useLayoutEffect(U,$)},oe.useMemo=function(U,$){return B.H.useMemo(U,$)},oe.useOptimistic=function(U,$){return B.H.useOptimistic(U,$)},oe.useReducer=function(U,$,vt){return B.H.useReducer(U,$,vt)},oe.useRef=function(U){return B.H.useRef(U)},oe.useState=function(U){return B.H.useState(U)},oe.useSyncExternalStore=function(U,$,vt){return B.H.useSyncExternalStore(U,$,vt)},oe.useTransition=function(){return B.H.useTransition()},oe.version="19.1.1",oe}var jg;function od(){return jg||(jg=1,Of.exports=Xx()),Of.exports}var _c=od(),Pf={exports:{}},vo={},Bf={exports:{}},zf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kg;function Wx(){return Kg||(Kg=1,(function(o){function t(N,K){var Y=N.length;N.push(K);t:for(;0<Y;){var xt=Y-1>>>1,U=N[xt];if(0<l(U,K))N[xt]=K,N[Y]=U,Y=xt;else break t}}function i(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var K=N[0],Y=N.pop();if(Y!==K){N[0]=Y;t:for(var xt=0,U=N.length,$=U>>>1;xt<$;){var vt=2*(xt+1)-1,St=N[vt],Dt=vt+1,Ft=N[Dt];if(0>l(St,Y))Dt<U&&0>l(Ft,St)?(N[xt]=Ft,N[Dt]=Y,xt=Dt):(N[xt]=St,N[vt]=Y,xt=vt);else if(Dt<U&&0>l(Ft,Y))N[xt]=Ft,N[Dt]=Y,xt=Dt;else break t}}return K}function l(N,K){var Y=N.sortIndex-K.sortIndex;return Y!==0?Y:N.id-K.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,v=null,x=3,y=!1,b=!1,R=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function D(N){for(var K=i(p);K!==null;){if(K.callback===null)r(p);else if(K.startTime<=N)r(p),K.sortIndex=K.expirationTime,t(m,K);else break;K=i(p)}}function B(N){if(R=!1,D(N),!b)if(i(m)!==null)b=!0,H||(H=!0,Z());else{var K=i(p);K!==null&&lt(B,K.startTime-N)}}var H=!1,I=-1,X=5,w=-1;function C(){return M?!0:!(o.unstable_now()-w<X)}function G(){if(M=!1,H){var N=o.unstable_now();w=N;var K=!0;try{t:{b=!1,R&&(R=!1,F(I),I=-1),y=!0;var Y=x;try{e:{for(D(N),v=i(m);v!==null&&!(v.expirationTime>N&&C());){var xt=v.callback;if(typeof xt=="function"){v.callback=null,x=v.priorityLevel;var U=xt(v.expirationTime<=N);if(N=o.unstable_now(),typeof U=="function"){v.callback=U,D(N),K=!0;break e}v===i(m)&&r(m),D(N)}else r(m);v=i(m)}if(v!==null)K=!0;else{var $=i(p);$!==null&&lt(B,$.startTime-N),K=!1}}break t}finally{v=null,x=Y,y=!1}K=void 0}}finally{K?Z():H=!1}}}var Z;if(typeof O=="function")Z=function(){O(G)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,ft=rt.port2;rt.port1.onmessage=G,Z=function(){ft.postMessage(null)}}else Z=function(){_(G,0)};function lt(N,K){I=_(function(){N(o.unstable_now())},K)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(N){N.callback=null},o.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<N?Math.floor(1e3/N):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(N){switch(x){case 1:case 2:case 3:var K=3;break;default:K=x}var Y=x;x=K;try{return N()}finally{x=Y}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(N,K){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Y=x;x=N;try{return K()}finally{x=Y}},o.unstable_scheduleCallback=function(N,K,Y){var xt=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?xt+Y:xt):Y=xt,N){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=Y+U,N={id:g++,callback:K,priorityLevel:N,startTime:Y,expirationTime:U,sortIndex:-1},Y>xt?(N.sortIndex=Y,t(p,N),i(m)===null&&N===i(p)&&(R?(F(I),I=-1):R=!0,lt(B,Y-xt))):(N.sortIndex=U,t(m,N),b||y||(b=!0,H||(H=!0,Z()))),N},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(N){var K=x;return function(){var Y=x;x=K;try{return N.apply(this,arguments)}finally{x=Y}}}})(zf)),zf}var Qg;function qx(){return Qg||(Qg=1,Bf.exports=Wx()),Bf.exports}var If={exports:{}},Rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jg;function Yx(){if(Jg)return Rn;Jg=1;var o=od();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Rn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,g)},Rn.flushSync=function(m){var p=h.T,g=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=g,r.d.f()}},Rn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Rn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Rn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:y}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Rn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Rn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Rn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Rn.requestFormReset=function(m){r.d.r(m)},Rn.unstable_batchedUpdates=function(m,p){return m(p)},Rn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},Rn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Rn.version="19.1.1",Rn}var $g;function Zx(){if($g)return If.exports;$g=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),If.exports=Yx(),If.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t_;function jx(){if(t_)return vo;t_=1;var o=qx(),t=od(),i=Zx();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(u(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return d(c),e;if(f===s)return d(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var S=!1,T=c.child;T;){if(T===a){S=!0,a=c,s=f;break}if(T===s){S=!0,s=c,a=f;break}T=T.sibling}if(!S){for(T=f.child;T;){if(T===a){S=!0,a=f,s=c;break}if(T===s){S=!0,s=f,a=c;break}T=T.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),F=Symbol.for("react.consumer"),O=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var rt=Symbol.for("react.client.reference");function ft(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===rt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case M:return"Profiler";case R:return"StrictMode";case B:return"Suspense";case H:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case y:return"Portal";case O:return(e.displayName||"Context")+".Provider";case F:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:ft(e.type)||"Memo";case X:n=e._payload,e=e._init;try{return ft(e(n))}catch{}}return null}var lt=Array.isArray,N=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},xt=[],U=-1;function $(e){return{current:e}}function vt(e){0>U||(e.current=xt[U],xt[U]=null,U--)}function St(e,n){U++,xt[U]=e.current,e.current=n}var Dt=$(null),Ft=$(null),et=$(null),gt=$(null);function bt(e,n){switch(St(et,n),St(Ft,e),St(Dt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Sg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Sg(n),e=Mg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}vt(Dt),St(Dt,e)}function jt(){vt(Dt),vt(Ft),vt(et)}function Wt(e){e.memoizedState!==null&&St(gt,e);var n=Dt.current,a=Mg(n,e.type);n!==a&&(St(Ft,e),St(Dt,a))}function he(e){Ft.current===e&&(vt(Dt),vt(Ft)),gt.current===e&&(vt(gt),fo._currentValue=Y)}var en=Object.prototype.hasOwnProperty,z=o.unstable_scheduleCallback,Ue=o.unstable_cancelCallback,ae=o.unstable_shouldYield,ee=o.unstable_requestPaint,Ot=o.unstable_now,Fe=o.unstable_getCurrentPriorityLevel,Gt=o.unstable_ImmediatePriority,re=o.unstable_UserBlockingPriority,Xe=o.unstable_NormalPriority,We=o.unstable_LowPriority,L=o.unstable_IdlePriority,E=o.log,tt=o.unstable_setDisableYieldValue,ut=null,pt=null;function ct(e){if(typeof E=="function"&&tt(e),pt&&typeof pt.setStrictMode=="function")try{pt.setStrictMode(ut,e)}catch{}}var Pt=Math.clz32?Math.clz32:qt,At=Math.log,kt=Math.LN2;function qt(e){return e>>>=0,e===0?32:31-(At(e)/kt|0)|0}var Mt=256,Ut=4194304;function Zt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Vt(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var c=0,f=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?c=Zt(s):(S&=T,S!==0?c=Zt(S):a||(a=T&~e,a!==0&&(c=Zt(a))))):(T=s&~f,T!==0?c=Zt(T):S!==0?c=Zt(S):a||(a=s&~e,a!==0&&(c=Zt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Ct(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function se(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var e=Mt;return Mt<<=1,(Mt&4194048)===0&&(Mt=256),e}function Tt(){var e=Ut;return Ut<<=1,(Ut&62914560)===0&&(Ut=4194304),e}function Rt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Bt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function yt(e,n,a,s,c,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,P=e.expirationTimes,J=e.hiddenUpdates;for(a=S&~a;0<a;){var ht=31-Pt(a),mt=1<<ht;T[ht]=0,P[ht]=-1;var it=J[ht];if(it!==null)for(J[ht]=null,ht=0;ht<it.length;ht++){var at=it[ht];at!==null&&(at.lane&=-536870913)}a&=~mt}s!==0&&_t(e,s,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function _t(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-Pt(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&4194090}function Ht(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-Pt(a),c=1<<s;c&n|e[s]&n&&(e[s]|=n),a&=~c}}function ie(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ce(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ye(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:Hg(e.type))}function li(e,n){var a=K.p;try{return K.p=e,n()}finally{K.p=a}}var on=Math.random().toString(36).slice(2),ln="__reactFiber$"+on,Ye="__reactProps$"+on,Si="__reactContainer$"+on,gr="__reactEvents$"+on,zo="__reactListeners$"+on,_r="__reactHandles$"+on,Es="__reactResources$"+on,Mi="__reactMarker$"+on;function vr(e){delete e[ln],delete e[Ye],delete e[gr],delete e[zo],delete e[_r]}function Oi(e){var n=e[ln];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Si]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=bg(e);e!==null;){if(a=e[ln])return a;e=bg(e)}return n}e=a,a=e.parentNode}return null}function aa(e){if(e=e[ln]||e[Si]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Fa(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function ra(e){var n=e[Es];return n||(n=e[Es]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function nn(e){e[Mi]=!0}var Io=new Set,Fo={};function A(e,n){W(e,n),W(e+"Capture",n)}function W(e,n){for(Fo[e]=n,e=0;e<n.length;e++)Io.add(n[e])}var st=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ot={},j={};function Et(e){return en.call(j,e)?!0:en.call(ot,e)?!1:st.test(e)?j[e]=!0:(ot[e]=!0,!1)}function wt(e,n,a){if(Et(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function zt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Lt(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}var Qt,$t;function Xt(e){if(Qt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Qt=n&&n[1]||"",$t=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qt+e+$t}var ce=!1;function Ee(e,n){if(!e||ce)return"";ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(at){var it=at}Reflect.construct(e,[],mt)}else{try{mt.call()}catch(at){it=at}e.call(mt.prototype)}}else{try{throw Error()}catch(at){it=at}(mt=e())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(at){if(at&&it&&typeof at.stack=="string")return[at.stack,it.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),S=f[0],T=f[1];if(S&&T){var P=S.split(`
`),J=T.split(`
`);for(c=s=0;s<P.length&&!P[s].includes("DetermineComponentFrameRoot");)s++;for(;c<J.length&&!J[c].includes("DetermineComponentFrameRoot");)c++;if(s===P.length||c===J.length)for(s=P.length-1,c=J.length-1;1<=s&&0<=c&&P[s]!==J[c];)c--;for(;1<=s&&0<=c;s--,c--)if(P[s]!==J[c]){if(s!==1||c!==1)do if(s--,c--,0>c||P[s]!==J[c]){var ht=`
`+P[s].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=s&&0<=c);break}}}finally{ce=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Xt(a):""}function Ve(e){switch(e.tag){case 26:case 27:case 5:return Xt(e.type);case 16:return Xt("Lazy");case 13:return Xt("Suspense");case 19:return Xt("SuspenseList");case 0:case 15:return Ee(e.type,!1);case 11:return Ee(e.type.render,!1);case 1:return Ee(e.type,!0);case 31:return Xt("Activity");default:return""}}function Le(e){try{var n="";do n+=Ve(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ue(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Kt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ge(e){var n=Kt(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){s=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ge(e){e._valueTracker||(e._valueTracker=Ge(e))}function Tn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=Kt(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function ci(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Dn=/[\n"\\]/g;function pn(e){return e.replace(Dn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ze(e,n,a,s,c,f,S,T){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ue(n)):e.value!==""+ue(n)&&(e.value=""+ue(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?bn(e,S,ue(n)):a!=null?bn(e,S,ue(a)):s!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+ue(T):e.removeAttribute("name")}function Un(e,n,a,s,c,f,S,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+ue(a):"",n=n!=null?""+ue(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=T?e.checked:!!s,e.defaultChecked=!!s,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S)}function bn(e,n,a){n==="number"&&ci(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ze(e,n,a,s){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&s&&(e[a].defaultSelected=!0)}else{for(a=""+ue(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function xn(e,n,a){if(n!=null&&(n=""+ue(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ue(a):""}function xr(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(lt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ue(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s)}function On(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var F0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Sd(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||F0.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Md(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Sd(e,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Sd(e,f,n[f])}function Uc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var H0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),G0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ho(e){return G0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Lc=null;function Nc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sr=null,Mr=null;function yd(e){var n=aa(e);if(n&&(e=n.stateNode)){var a=e[Ye]||null;t:switch(e=n.stateNode,n.type){case"input":if(ze(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+pn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var c=s[Ye]||null;if(!c)throw Error(r(90));ze(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&Tn(s)}break t;case"textarea":xn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Ze(e,!!a.multiple,n,!1)}}}var Oc=!1;function Ed(e,n,a){if(Oc)return e(n,a);Oc=!0;try{var s=e(n);return s}finally{if(Oc=!1,(Sr!==null||Mr!==null)&&(bl(),Sr&&(n=Sr,e=Mr,Mr=Sr=null,yd(n),e)))for(n=0;n<e.length;n++)yd(e[n])}}function Ts(e,n){var a=e.stateNode;if(a===null)return null;var s=a[Ye]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pc=!1;if(Pi)try{var bs={};Object.defineProperty(bs,"passive",{get:function(){Pc=!0}}),window.addEventListener("test",bs,bs),window.removeEventListener("test",bs,bs)}catch{Pc=!1}var sa=null,Bc=null,Go=null;function Td(){if(Go)return Go;var e,n=Bc,a=n.length,s,c="value"in sa?sa.value:sa.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var S=a-e;for(s=1;s<=S&&n[a-s]===c[f-s];s++);return Go=c.slice(e,1<s?1-s:void 0)}function Vo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ko(){return!0}function bd(){return!1}function Pn(e){function n(a,s,c,f,S){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ko:bd,this.isPropagationStopped=bd,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ko)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ko)},persist:function(){},isPersistent:ko}),n}var Ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xo=Pn(Ha),As=g({},Ha,{view:0,detail:0}),V0=Pn(As),zc,Ic,Rs,Wo=g({},As,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Rs&&(Rs&&e.type==="mousemove"?(zc=e.screenX-Rs.screenX,Ic=e.screenY-Rs.screenY):Ic=zc=0,Rs=e),zc)},movementY:function(e){return"movementY"in e?e.movementY:Ic}}),Ad=Pn(Wo),k0=g({},Wo,{dataTransfer:0}),X0=Pn(k0),W0=g({},As,{relatedTarget:0}),Fc=Pn(W0),q0=g({},Ha,{animationName:0,elapsedTime:0,pseudoElement:0}),Y0=Pn(q0),Z0=g({},Ha,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),j0=Pn(Z0),K0=g({},Ha,{data:0}),Rd=Pn(K0),Q0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},J0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=$0[e])?!!n[e]:!1}function Hc(){return tv}var ev=g({},As,{key:function(e){if(e.key){var n=Q0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Vo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?J0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hc,charCode:function(e){return e.type==="keypress"?Vo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),nv=Pn(ev),iv=g({},Wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cd=Pn(iv),av=g({},As,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hc}),rv=Pn(av),sv=g({},Ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),ov=Pn(sv),lv=g({},Wo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),cv=Pn(lv),uv=g({},Ha,{newState:0,oldState:0}),fv=Pn(uv),hv=[9,13,27,32],Gc=Pi&&"CompositionEvent"in window,Cs=null;Pi&&"documentMode"in document&&(Cs=document.documentMode);var dv=Pi&&"TextEvent"in window&&!Cs,wd=Pi&&(!Gc||Cs&&8<Cs&&11>=Cs),Dd=" ",Ud=!1;function Ld(e,n){switch(e){case"keyup":return hv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yr=!1;function pv(e,n){switch(e){case"compositionend":return Nd(n);case"keypress":return n.which!==32?null:(Ud=!0,Dd);case"textInput":return e=n.data,e===Dd&&Ud?null:e;default:return null}}function mv(e,n){if(yr)return e==="compositionend"||!Gc&&Ld(e,n)?(e=Td(),Go=Bc=sa=null,yr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return wd&&n.locale!=="ko"?null:n.data;default:return null}}var gv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Od(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!gv[e.type]:n==="textarea"}function Pd(e,n,a,s){Sr?Mr?Mr.push(s):Mr=[s]:Sr=s,n=Ul(n,"onChange"),0<n.length&&(a=new Xo("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var ws=null,Ds=null;function _v(e){mg(e,0)}function qo(e){var n=Fa(e);if(Tn(n))return e}function Bd(e,n){if(e==="change")return n}var zd=!1;if(Pi){var Vc;if(Pi){var kc="oninput"in document;if(!kc){var Id=document.createElement("div");Id.setAttribute("oninput","return;"),kc=typeof Id.oninput=="function"}Vc=kc}else Vc=!1;zd=Vc&&(!document.documentMode||9<document.documentMode)}function Fd(){ws&&(ws.detachEvent("onpropertychange",Hd),Ds=ws=null)}function Hd(e){if(e.propertyName==="value"&&qo(Ds)){var n=[];Pd(n,Ds,e,Nc(e)),Ed(_v,n)}}function vv(e,n,a){e==="focusin"?(Fd(),ws=n,Ds=a,ws.attachEvent("onpropertychange",Hd)):e==="focusout"&&Fd()}function xv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qo(Ds)}function Sv(e,n){if(e==="click")return qo(n)}function Mv(e,n){if(e==="input"||e==="change")return qo(n)}function yv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var kn=typeof Object.is=="function"?Object.is:yv;function Us(e,n){if(kn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!en.call(n,c)||!kn(e[c],n[c]))return!1}return!0}function Gd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vd(e,n){var a=Gd(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Gd(a)}}function kd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?kd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Xd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=ci(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=ci(e.document)}return n}function Xc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Ev=Pi&&"documentMode"in document&&11>=document.documentMode,Er=null,Wc=null,Ls=null,qc=!1;function Wd(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;qc||Er==null||Er!==ci(s)||(s=Er,"selectionStart"in s&&Xc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ls&&Us(Ls,s)||(Ls=s,s=Ul(Wc,"onSelect"),0<s.length&&(n=new Xo("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=Er)))}function Ga(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Tr={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionrun:Ga("Transition","TransitionRun"),transitionstart:Ga("Transition","TransitionStart"),transitioncancel:Ga("Transition","TransitionCancel"),transitionend:Ga("Transition","TransitionEnd")},Yc={},qd={};Pi&&(qd=document.createElement("div").style,"AnimationEvent"in window||(delete Tr.animationend.animation,delete Tr.animationiteration.animation,delete Tr.animationstart.animation),"TransitionEvent"in window||delete Tr.transitionend.transition);function Va(e){if(Yc[e])return Yc[e];if(!Tr[e])return e;var n=Tr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in qd)return Yc[e]=n[a];return e}var Yd=Va("animationend"),Zd=Va("animationiteration"),jd=Va("animationstart"),Tv=Va("transitionrun"),bv=Va("transitionstart"),Av=Va("transitioncancel"),Kd=Va("transitionend"),Qd=new Map,Zc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zc.push("scrollEnd");function ui(e,n){Qd.set(e,n),A(n,[e])}var Jd=new WeakMap;function Jn(e,n){if(typeof e=="object"&&e!==null){var a=Jd.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Le(n)},Jd.set(e,n),n)}return{value:e,source:n,stack:Le(n)}}var $n=[],br=0,jc=0;function Yo(){for(var e=br,n=jc=br=0;n<e;){var a=$n[n];$n[n++]=null;var s=$n[n];$n[n++]=null;var c=$n[n];$n[n++]=null;var f=$n[n];if($n[n++]=null,s!==null&&c!==null){var S=s.pending;S===null?c.next=c:(c.next=S.next,S.next=c),s.pending=c}f!==0&&$d(a,c,f)}}function Zo(e,n,a,s){$n[br++]=e,$n[br++]=n,$n[br++]=a,$n[br++]=s,jc|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function Kc(e,n,a,s){return Zo(e,n,a,s),jo(e)}function Ar(e,n){return Zo(e,null,null,n),jo(e)}function $d(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Pt(a),e=f.hiddenUpdates,s=e[c],s===null?e[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function jo(e){if(50<io)throw io=0,nf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Rr={};function Rv(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(e,n,a,s){return new Rv(e,n,a,s)}function Qc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bi(e,n){var a=e.alternate;return a===null?(a=Xn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function tp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ko(e,n,a,s,c,f){var S=0;if(s=e,typeof e=="function")Qc(e)&&(S=1);else if(typeof e=="string")S=wx(e,a,Dt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=Xn(31,a,n,c),e.elementType=w,e.lanes=f,e;case b:return ka(a.children,c,f,n);case R:S=8,c|=24;break;case M:return e=Xn(12,a,n,c|2),e.elementType=M,e.lanes=f,e;case B:return e=Xn(13,a,n,c),e.elementType=B,e.lanes=f,e;case H:return e=Xn(19,a,n,c),e.elementType=H,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case O:S=10;break t;case F:S=9;break t;case D:S=11;break t;case I:S=14;break t;case X:S=16,s=null;break t}S=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=Xn(S,a,n,c),n.elementType=e,n.type=s,n.lanes=f,n}function ka(e,n,a,s){return e=Xn(7,e,s,n),e.lanes=a,e}function Jc(e,n,a){return e=Xn(6,e,null,n),e.lanes=a,e}function $c(e,n,a){return n=Xn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Cr=[],wr=0,Qo=null,Jo=0,ti=[],ei=0,Xa=null,zi=1,Ii="";function Wa(e,n){Cr[wr++]=Jo,Cr[wr++]=Qo,Qo=e,Jo=n}function ep(e,n,a){ti[ei++]=zi,ti[ei++]=Ii,ti[ei++]=Xa,Xa=e;var s=zi;e=Ii;var c=32-Pt(s)-1;s&=~(1<<c),a+=1;var f=32-Pt(n)+c;if(30<f){var S=c-c%5;f=(s&(1<<S)-1).toString(32),s>>=S,c-=S,zi=1<<32-Pt(n)+c|a<<c|s,Ii=f+e}else zi=1<<f|a<<c|s,Ii=e}function tu(e){e.return!==null&&(Wa(e,1),ep(e,1,0))}function eu(e){for(;e===Qo;)Qo=Cr[--wr],Cr[wr]=null,Jo=Cr[--wr],Cr[wr]=null;for(;e===Xa;)Xa=ti[--ei],ti[ei]=null,Ii=ti[--ei],ti[ei]=null,zi=ti[--ei],ti[ei]=null}var Ln=null,je=null,Re=!1,qa=null,yi=!1,nu=Error(r(519));function Ya(e){var n=Error(r(418,""));throw Ps(Jn(n,e)),nu}function np(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[ln]=e,n[Ye]=s,a){case"dialog":ve("cancel",n),ve("close",n);break;case"iframe":case"object":case"embed":ve("load",n);break;case"video":case"audio":for(a=0;a<ro.length;a++)ve(ro[a],n);break;case"source":ve("error",n);break;case"img":case"image":case"link":ve("error",n),ve("load",n);break;case"details":ve("toggle",n);break;case"input":ve("invalid",n),Un(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),ge(n);break;case"select":ve("invalid",n);break;case"textarea":ve("invalid",n),xr(n,s.value,s.defaultValue,s.children),ge(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||xg(n.textContent,a)?(s.popover!=null&&(ve("beforetoggle",n),ve("toggle",n)),s.onScroll!=null&&ve("scroll",n),s.onScrollEnd!=null&&ve("scrollend",n),s.onClick!=null&&(n.onclick=Ll),n=!0):n=!1,n||Ya(e)}function ip(e){for(Ln=e.return;Ln;)switch(Ln.tag){case 5:case 13:yi=!1;return;case 27:case 3:yi=!0;return;default:Ln=Ln.return}}function Ns(e){if(e!==Ln)return!1;if(!Re)return ip(e),Re=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||xf(e.type,e.memoizedProps)),a=!a),a&&je&&Ya(e),ip(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){je=hi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}je=null}}else n===27?(n=je,ya(e.type)?(e=Ef,Ef=null,je=e):je=n):je=Ln?hi(e.stateNode.nextSibling):null;return!0}function Os(){je=Ln=null,Re=!1}function ap(){var e=qa;return e!==null&&(In===null?In=e:In.push.apply(In,e),qa=null),e}function Ps(e){qa===null?qa=[e]:qa.push(e)}var iu=$(null),Za=null,Fi=null;function oa(e,n,a){St(iu,n._currentValue),n._currentValue=a}function Hi(e){e._currentValue=iu.current,vt(iu)}function au(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function ru(e,n,a,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var S=c.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=c;for(var P=0;P<n.length;P++)if(T.context===n[P]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),au(f.return,a,e),s||(S=null);break t}f=T.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),au(S,a,e),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===e){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function Bs(e,n,a,s){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var T=c.type;kn(c.pendingProps.value,S.value)||(e!==null?e.push(T):e=[T])}}else if(c===gt.current){if(S=c.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(fo):e=[fo])}c=c.return}e!==null&&ru(n,e,a,s),n.flags|=262144}function $o(e){for(e=e.firstContext;e!==null;){if(!kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ja(e){Za=e,Fi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function An(e){return rp(Za,e)}function tl(e,n){return Za===null&&ja(e),rp(e,n)}function rp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Fi===null){if(e===null)throw Error(r(308));Fi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Fi=Fi.next=n;return a}var Cv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},wv=o.unstable_scheduleCallback,Dv=o.unstable_NormalPriority,cn={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function su(){return{controller:new Cv,data:new Map,refCount:0}}function zs(e){e.refCount--,e.refCount===0&&wv(Dv,function(){e.controller.abort()})}var Is=null,ou=0,Dr=0,Ur=null;function Uv(e,n){if(Is===null){var a=Is=[];ou=0,Dr=uf(),Ur={status:"pending",value:void 0,then:function(s){a.push(s)}}}return ou++,n.then(sp,sp),n}function sp(){if(--ou===0&&Is!==null){Ur!==null&&(Ur.status="fulfilled");var e=Is;Is=null,Dr=0,Ur=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Lv(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var op=N.S;N.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Uv(e,n),op!==null&&op(e,n)};var Ka=$(null);function lu(){var e=Ka.current;return e!==null?e:He.pooledCache}function el(e,n){n===null?St(Ka,Ka.current):St(Ka,n.pool)}function lp(){var e=lu();return e===null?null:{parent:cn._currentValue,pool:e}}var Fs=Error(r(460)),cp=Error(r(474)),nl=Error(r(542)),cu={then:function(){}};function up(e){return e=e.status,e==="fulfilled"||e==="rejected"}function il(){}function fp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(il,il),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,dp(e),e;default:if(typeof n.status=="string")n.then(il,il);else{if(e=He,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,dp(e),e}throw Hs=n,Fs}}var Hs=null;function hp(){if(Hs===null)throw Error(r(459));var e=Hs;return Hs=null,e}function dp(e){if(e===Fs||e===nl)throw Error(r(483))}var la=!1;function uu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function fu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ca(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ua(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(we&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=jo(e),$d(e,null,a),n}return Zo(e,s,n,a),jo(e)}function Gs(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Ht(e,a)}}function hu(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var du=!1;function Vs(){if(du){var e=Ur;if(e!==null)throw e}}function ks(e,n,a,s){du=!1;var c=e.updateQueue;la=!1;var f=c.firstBaseUpdate,S=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var P=T,J=P.next;P.next=null,S===null?f=J:S.next=J,S=P;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,T=ht.lastBaseUpdate,T!==S&&(T===null?ht.firstBaseUpdate=J:T.next=J,ht.lastBaseUpdate=P))}if(f!==null){var mt=c.baseState;S=0,ht=J=P=null,T=f;do{var it=T.lane&-536870913,at=it!==T.lane;if(at?(Me&it)===it:(s&it)===it){it!==0&&it===Dr&&(du=!0),ht!==null&&(ht=ht.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var ne=e,Jt=T;it=n;var Pe=a;switch(Jt.tag){case 1:if(ne=Jt.payload,typeof ne=="function"){mt=ne.call(Pe,mt,it);break t}mt=ne;break t;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=Jt.payload,it=typeof ne=="function"?ne.call(Pe,mt,it):ne,it==null)break t;mt=g({},mt,it);break t;case 2:la=!0}}it=T.callback,it!==null&&(e.flags|=64,at&&(e.flags|=8192),at=c.callbacks,at===null?c.callbacks=[it]:at.push(it))}else at={lane:it,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ht===null?(J=ht=at,P=mt):ht=ht.next=at,S|=it;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;at=T,T=at.next,at.next=null,c.lastBaseUpdate=at,c.shared.pending=null}}while(!0);ht===null&&(P=mt),c.baseState=P,c.firstBaseUpdate=J,c.lastBaseUpdate=ht,f===null&&(c.shared.lanes=0),va|=S,e.lanes=S,e.memoizedState=mt}}function pp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function mp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)pp(a[e],n)}var Lr=$(null),al=$(0);function gp(e,n){e=Yi,St(al,e),St(Lr,n),Yi=e|n.baseLanes}function pu(){St(al,Yi),St(Lr,Lr.current)}function mu(){Yi=al.current,vt(Lr),vt(al)}var fa=0,de=null,Ne=null,an=null,rl=!1,Nr=!1,Qa=!1,sl=0,Xs=0,Or=null,Nv=0;function $e(){throw Error(r(321))}function gu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!kn(e[a],n[a]))return!1;return!0}function _u(e,n,a,s,c,f){return fa=f,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=e===null||e.memoizedState===null?$p:tm,Qa=!1,f=a(s,c),Qa=!1,Nr&&(f=vp(n,a,s,c)),_p(e),f}function _p(e){N.H=hl;var n=Ne!==null&&Ne.next!==null;if(fa=0,an=Ne=de=null,rl=!1,Xs=0,Or=null,n)throw Error(r(300));e===null||mn||(e=e.dependencies,e!==null&&$o(e)&&(mn=!0))}function vp(e,n,a,s){de=e;var c=0;do{if(Nr&&(Or=null),Xs=0,Nr=!1,25<=c)throw Error(r(301));if(c+=1,an=Ne=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}N.H=Hv,f=n(a,s)}while(Nr);return f}function Ov(){var e=N.H,n=e.useState()[0];return n=typeof n.then=="function"?Ws(n):n,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(de.flags|=1024),n}function vu(){var e=sl!==0;return sl=0,e}function xu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Su(e){if(rl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}rl=!1}fa=0,an=Ne=de=null,Nr=!1,Xs=sl=0,Or=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?de.memoizedState=an=e:an=an.next=e,an}function rn(){if(Ne===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var n=an===null?de.memoizedState:an.next;if(n!==null)an=n,Ne=e;else{if(e===null)throw de.alternate===null?Error(r(467)):Error(r(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},an===null?de.memoizedState=an=e:an=an.next=e}return an}function Mu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ws(e){var n=Xs;return Xs+=1,Or===null&&(Or=[]),e=fp(Or,e,n),n=de,(an===null?n.memoizedState:an.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?$p:tm),e}function ol(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ws(e);if(e.$$typeof===O)return An(e)}throw Error(r(438,String(e)))}function yu(e){var n=null,a=de.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=de.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Mu(),de.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=C;return n.index++,a}function Gi(e,n){return typeof n=="function"?n(e):n}function ll(e){var n=rn();return Eu(n,Ne,e)}function Eu(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=e.baseQueue,f=s.pending;if(f!==null){if(c!==null){var S=c.next;c.next=f.next,f.next=S}n.baseQueue=c=f,s.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var T=S=null,P=null,J=n,ht=!1;do{var mt=J.lane&-536870913;if(mt!==J.lane?(Me&mt)===mt:(fa&mt)===mt){var it=J.revertLane;if(it===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),mt===Dr&&(ht=!0);else if((fa&it)===it){J=J.next,it===Dr&&(ht=!0);continue}else mt={lane:0,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},P===null?(T=P=mt,S=f):P=P.next=mt,de.lanes|=it,va|=it;mt=J.action,Qa&&a(f,mt),f=J.hasEagerState?J.eagerState:a(f,mt)}else it={lane:mt,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},P===null?(T=P=it,S=f):P=P.next=it,de.lanes|=mt,va|=mt;J=J.next}while(J!==null&&J!==n);if(P===null?S=f:P.next=T,!kn(f,e.memoizedState)&&(mn=!0,ht&&(a=Ur,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=P,s.lastRenderedState=f}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Tu(e){var n=rn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do f=e(f,S.action),S=S.next;while(S!==c);kn(f,n.memoizedState)||(mn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function xp(e,n,a){var s=de,c=rn(),f=Re;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!kn((Ne||c).memoizedState,a);S&&(c.memoizedState=a,mn=!0),c=c.queue;var T=yp.bind(null,s,c,e);if(qs(2048,8,T,[e]),c.getSnapshot!==n||S||an!==null&&an.memoizedState.tag&1){if(s.flags|=2048,Pr(9,cl(),Mp.bind(null,s,c,a,n),null),He===null)throw Error(r(349));f||(fa&124)!==0||Sp(s,n,a)}return a}function Sp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=de.updateQueue,n===null?(n=Mu(),de.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Mp(e,n,a,s){n.value=a,n.getSnapshot=s,Ep(n)&&Tp(e)}function yp(e,n,a){return a(function(){Ep(n)&&Tp(e)})}function Ep(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!kn(e,a)}catch{return!0}}function Tp(e){var n=Ar(e,2);n!==null&&jn(n,e,2)}function bu(e){var n=Bn();if(typeof e=="function"){var a=e;if(e=a(),Qa){ct(!0);try{a()}finally{ct(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:e},n}function bp(e,n,a,s){return e.baseState=a,Eu(e,Ne,typeof s=="function"?s:Gi)}function Pv(e,n,a,s,c){if(fl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};N.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Ap(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Ap(e,n){var a=n.action,s=n.payload,c=e.state;if(n.isTransition){var f=N.T,S={};N.T=S;try{var T=a(c,s),P=N.S;P!==null&&P(S,T),Rp(e,n,T)}catch(J){Au(e,n,J)}finally{N.T=f}}else try{f=a(c,s),Rp(e,n,f)}catch(J){Au(e,n,J)}}function Rp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Cp(e,n,s)},function(s){return Au(e,n,s)}):Cp(e,n,a)}function Cp(e,n,a){n.status="fulfilled",n.value=a,wp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Ap(e,a)))}function Au(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,wp(n),n=n.next;while(n!==s)}e.action=null}function wp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Dp(e,n){return n}function Up(e,n){if(Re){var a=He.formState;if(a!==null){t:{var s=de;if(Re){if(je){e:{for(var c=je,f=yi;c.nodeType!==8;){if(!f){c=null;break e}if(c=hi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){je=hi(c.nextSibling),s=c.data==="F!";break t}}Ya(s)}s=!1}s&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dp,lastRenderedState:n},a.queue=s,a=Kp.bind(null,de,s),s.dispatch=a,s=bu(!1),f=Uu.bind(null,de,!1,s.queue),s=Bn(),c={state:n,dispatch:null,action:e,pending:null},s.queue=c,a=Pv.bind(null,de,c,f,a),c.dispatch=a,s.memoizedState=e,[n,a,!1]}function Lp(e){var n=rn();return Np(n,Ne,e)}function Np(e,n,a){if(n=Eu(e,n,Dp)[0],e=ll(Gi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Ws(n)}catch(S){throw S===Fs?nl:S}else s=n;n=rn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(de.flags|=2048,Pr(9,cl(),Bv.bind(null,c,a),null)),[s,f,e]}function Bv(e,n){e.action=n}function Op(e){var n=rn(),a=Ne;if(a!==null)return Np(n,a,e);rn(),n=n.memoizedState,a=rn();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function Pr(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=de.updateQueue,n===null&&(n=Mu(),de.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function cl(){return{destroy:void 0,resource:void 0}}function Pp(){return rn().memoizedState}function ul(e,n,a,s){var c=Bn();s=s===void 0?null:s,de.flags|=e,c.memoizedState=Pr(1|n,cl(),a,s)}function qs(e,n,a,s){var c=rn();s=s===void 0?null:s;var f=c.memoizedState.inst;Ne!==null&&s!==null&&gu(s,Ne.memoizedState.deps)?c.memoizedState=Pr(n,f,a,s):(de.flags|=e,c.memoizedState=Pr(1|n,f,a,s))}function Bp(e,n){ul(8390656,8,e,n)}function zp(e,n){qs(2048,8,e,n)}function Ip(e,n){return qs(4,2,e,n)}function Fp(e,n){return qs(4,4,e,n)}function Hp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Gp(e,n,a){a=a!=null?a.concat([e]):null,qs(4,4,Hp.bind(null,n,e),a)}function Ru(){}function Vp(e,n){var a=rn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&gu(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function kp(e,n){var a=rn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&gu(n,s[1]))return s[0];if(s=e(),Qa){ct(!0);try{e()}finally{ct(!1)}}return a.memoizedState=[s,n],s}function Cu(e,n,a){return a===void 0||(fa&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=qm(),de.lanes|=e,va|=e,a)}function Xp(e,n,a,s){return kn(a,n)?a:Lr.current!==null?(e=Cu(e,a,s),kn(e,n)||(mn=!0),e):(fa&42)===0?(mn=!0,e.memoizedState=a):(e=qm(),de.lanes|=e,va|=e,n)}function Wp(e,n,a,s,c){var f=K.p;K.p=f!==0&&8>f?f:8;var S=N.T,T={};N.T=T,Uu(e,!1,n,a);try{var P=c(),J=N.S;if(J!==null&&J(T,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ht=Lv(P,s);Ys(e,n,ht,Zn(e))}else Ys(e,n,s,Zn(e))}catch(mt){Ys(e,n,{then:function(){},status:"rejected",reason:mt},Zn())}finally{K.p=f,N.T=S}}function zv(){}function wu(e,n,a,s){if(e.tag!==5)throw Error(r(476));var c=qp(e).queue;Wp(e,c,n,Y,a===null?zv:function(){return Yp(e),a(s)})}function qp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Yp(e){var n=qp(e).next.queue;Ys(e,n,{},Zn())}function Du(){return An(fo)}function Zp(){return rn().memoizedState}function jp(){return rn().memoizedState}function Iv(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Zn();e=ca(a);var s=ua(n,e,a);s!==null&&(jn(s,n,a),Gs(s,n,a)),n={cache:su()},e.payload=n;return}n=n.return}}function Fv(e,n,a){var s=Zn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},fl(e)?Qp(n,a):(a=Kc(e,n,a,s),a!==null&&(jn(a,e,s),Jp(a,n,s)))}function Kp(e,n,a){var s=Zn();Ys(e,n,a,s)}function Ys(e,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(fl(e))Qp(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,T=f(S,a);if(c.hasEagerState=!0,c.eagerState=T,kn(T,S))return Zo(e,n,c,0),He===null&&Yo(),!1}catch{}finally{}if(a=Kc(e,n,c,s),a!==null)return jn(a,e,s),Jp(a,n,s),!0}return!1}function Uu(e,n,a,s){if(s={lane:2,revertLane:uf(),action:s,hasEagerState:!1,eagerState:null,next:null},fl(e)){if(n)throw Error(r(479))}else n=Kc(e,a,s,2),n!==null&&jn(n,e,2)}function fl(e){var n=e.alternate;return e===de||n!==null&&n===de}function Qp(e,n){Nr=rl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Jp(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Ht(e,a)}}var hl={readContext:An,use:ol,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e},$p={readContext:An,use:ol,useCallback:function(e,n){return Bn().memoizedState=[e,n===void 0?null:n],e},useContext:An,useEffect:Bp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,ul(4194308,4,Hp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return ul(4194308,4,e,n)},useInsertionEffect:function(e,n){ul(4,2,e,n)},useMemo:function(e,n){var a=Bn();n=n===void 0?null:n;var s=e();if(Qa){ct(!0);try{e()}finally{ct(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=Bn();if(a!==void 0){var c=a(n);if(Qa){ct(!0);try{a(n)}finally{ct(!1)}}}else c=n;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=Fv.bind(null,de,e),[s.memoizedState,e]},useRef:function(e){var n=Bn();return e={current:e},n.memoizedState=e},useState:function(e){e=bu(e);var n=e.queue,a=Kp.bind(null,de,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Ru,useDeferredValue:function(e,n){var a=Bn();return Cu(a,e,n)},useTransition:function(){var e=bu(!1);return e=Wp.bind(null,de,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=de,c=Bn();if(Re){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),He===null)throw Error(r(349));(Me&124)!==0||Sp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Bp(yp.bind(null,s,f,e),[e]),s.flags|=2048,Pr(9,cl(),Mp.bind(null,s,f,a,n),null),a},useId:function(){var e=Bn(),n=He.identifierPrefix;if(Re){var a=Ii,s=zi;a=(s&~(1<<32-Pt(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=sl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Nv++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Du,useFormState:Up,useActionState:Up,useOptimistic:function(e){var n=Bn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Uu.bind(null,de,!0,a),a.dispatch=n,[e,n]},useMemoCache:yu,useCacheRefresh:function(){return Bn().memoizedState=Iv.bind(null,de)}},tm={readContext:An,use:ol,useCallback:Vp,useContext:An,useEffect:zp,useImperativeHandle:Gp,useInsertionEffect:Ip,useLayoutEffect:Fp,useMemo:kp,useReducer:ll,useRef:Pp,useState:function(){return ll(Gi)},useDebugValue:Ru,useDeferredValue:function(e,n){var a=rn();return Xp(a,Ne.memoizedState,e,n)},useTransition:function(){var e=ll(Gi)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:Ws(e),n]},useSyncExternalStore:xp,useId:Zp,useHostTransitionStatus:Du,useFormState:Lp,useActionState:Lp,useOptimistic:function(e,n){var a=rn();return bp(a,Ne,e,n)},useMemoCache:yu,useCacheRefresh:jp},Hv={readContext:An,use:ol,useCallback:Vp,useContext:An,useEffect:zp,useImperativeHandle:Gp,useInsertionEffect:Ip,useLayoutEffect:Fp,useMemo:kp,useReducer:Tu,useRef:Pp,useState:function(){return Tu(Gi)},useDebugValue:Ru,useDeferredValue:function(e,n){var a=rn();return Ne===null?Cu(a,e,n):Xp(a,Ne.memoizedState,e,n)},useTransition:function(){var e=Tu(Gi)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:Ws(e),n]},useSyncExternalStore:xp,useId:Zp,useHostTransitionStatus:Du,useFormState:Op,useActionState:Op,useOptimistic:function(e,n){var a=rn();return Ne!==null?bp(a,Ne,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:yu,useCacheRefresh:jp},Br=null,Zs=0;function dl(e){var n=Zs;return Zs+=1,Br===null&&(Br=[]),fp(Br,e,n)}function js(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function pl(e,n){throw n.$$typeof===v?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function em(e){var n=e._init;return n(e._payload)}function nm(e){function n(q,V){if(e){var Q=q.deletions;Q===null?(q.deletions=[V],q.flags|=16):Q.push(V)}}function a(q,V){if(!e)return null;for(;V!==null;)n(q,V),V=V.sibling;return null}function s(q){for(var V=new Map;q!==null;)q.key!==null?V.set(q.key,q):V.set(q.index,q),q=q.sibling;return V}function c(q,V){return q=Bi(q,V),q.index=0,q.sibling=null,q}function f(q,V,Q){return q.index=Q,e?(Q=q.alternate,Q!==null?(Q=Q.index,Q<V?(q.flags|=67108866,V):Q):(q.flags|=67108866,V)):(q.flags|=1048576,V)}function S(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function T(q,V,Q,dt){return V===null||V.tag!==6?(V=Jc(Q,q.mode,dt),V.return=q,V):(V=c(V,Q),V.return=q,V)}function P(q,V,Q,dt){var It=Q.type;return It===b?ht(q,V,Q.props.children,dt,Q.key):V!==null&&(V.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===X&&em(It)===V.type)?(V=c(V,Q.props),js(V,Q),V.return=q,V):(V=Ko(Q.type,Q.key,Q.props,null,q.mode,dt),js(V,Q),V.return=q,V)}function J(q,V,Q,dt){return V===null||V.tag!==4||V.stateNode.containerInfo!==Q.containerInfo||V.stateNode.implementation!==Q.implementation?(V=$c(Q,q.mode,dt),V.return=q,V):(V=c(V,Q.children||[]),V.return=q,V)}function ht(q,V,Q,dt,It){return V===null||V.tag!==7?(V=ka(Q,q.mode,dt,It),V.return=q,V):(V=c(V,Q),V.return=q,V)}function mt(q,V,Q){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Jc(""+V,q.mode,Q),V.return=q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case x:return Q=Ko(V.type,V.key,V.props,null,q.mode,Q),js(Q,V),Q.return=q,Q;case y:return V=$c(V,q.mode,Q),V.return=q,V;case X:var dt=V._init;return V=dt(V._payload),mt(q,V,Q)}if(lt(V)||Z(V))return V=ka(V,q.mode,Q,null),V.return=q,V;if(typeof V.then=="function")return mt(q,dl(V),Q);if(V.$$typeof===O)return mt(q,tl(q,V),Q);pl(q,V)}return null}function it(q,V,Q,dt){var It=V!==null?V.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return It!==null?null:T(q,V,""+Q,dt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:return Q.key===It?P(q,V,Q,dt):null;case y:return Q.key===It?J(q,V,Q,dt):null;case X:return It=Q._init,Q=It(Q._payload),it(q,V,Q,dt)}if(lt(Q)||Z(Q))return It!==null?null:ht(q,V,Q,dt,null);if(typeof Q.then=="function")return it(q,V,dl(Q),dt);if(Q.$$typeof===O)return it(q,V,tl(q,Q),dt);pl(q,Q)}return null}function at(q,V,Q,dt,It){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return q=q.get(Q)||null,T(V,q,""+dt,It);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case x:return q=q.get(dt.key===null?Q:dt.key)||null,P(V,q,dt,It);case y:return q=q.get(dt.key===null?Q:dt.key)||null,J(V,q,dt,It);case X:var pe=dt._init;return dt=pe(dt._payload),at(q,V,Q,dt,It)}if(lt(dt)||Z(dt))return q=q.get(Q)||null,ht(V,q,dt,It,null);if(typeof dt.then=="function")return at(q,V,Q,dl(dt),It);if(dt.$$typeof===O)return at(q,V,Q,tl(V,dt),It);pl(V,dt)}return null}function ne(q,V,Q,dt){for(var It=null,pe=null,Yt=V,te=V=0,_n=null;Yt!==null&&te<Q.length;te++){Yt.index>te?(_n=Yt,Yt=null):_n=Yt.sibling;var Te=it(q,Yt,Q[te],dt);if(Te===null){Yt===null&&(Yt=_n);break}e&&Yt&&Te.alternate===null&&n(q,Yt),V=f(Te,V,te),pe===null?It=Te:pe.sibling=Te,pe=Te,Yt=_n}if(te===Q.length)return a(q,Yt),Re&&Wa(q,te),It;if(Yt===null){for(;te<Q.length;te++)Yt=mt(q,Q[te],dt),Yt!==null&&(V=f(Yt,V,te),pe===null?It=Yt:pe.sibling=Yt,pe=Yt);return Re&&Wa(q,te),It}for(Yt=s(Yt);te<Q.length;te++)_n=at(Yt,q,te,Q[te],dt),_n!==null&&(e&&_n.alternate!==null&&Yt.delete(_n.key===null?te:_n.key),V=f(_n,V,te),pe===null?It=_n:pe.sibling=_n,pe=_n);return e&&Yt.forEach(function(Ra){return n(q,Ra)}),Re&&Wa(q,te),It}function Jt(q,V,Q,dt){if(Q==null)throw Error(r(151));for(var It=null,pe=null,Yt=V,te=V=0,_n=null,Te=Q.next();Yt!==null&&!Te.done;te++,Te=Q.next()){Yt.index>te?(_n=Yt,Yt=null):_n=Yt.sibling;var Ra=it(q,Yt,Te.value,dt);if(Ra===null){Yt===null&&(Yt=_n);break}e&&Yt&&Ra.alternate===null&&n(q,Yt),V=f(Ra,V,te),pe===null?It=Ra:pe.sibling=Ra,pe=Ra,Yt=_n}if(Te.done)return a(q,Yt),Re&&Wa(q,te),It;if(Yt===null){for(;!Te.done;te++,Te=Q.next())Te=mt(q,Te.value,dt),Te!==null&&(V=f(Te,V,te),pe===null?It=Te:pe.sibling=Te,pe=Te);return Re&&Wa(q,te),It}for(Yt=s(Yt);!Te.done;te++,Te=Q.next())Te=at(Yt,q,te,Te.value,dt),Te!==null&&(e&&Te.alternate!==null&&Yt.delete(Te.key===null?te:Te.key),V=f(Te,V,te),pe===null?It=Te:pe.sibling=Te,pe=Te);return e&&Yt.forEach(function(Gx){return n(q,Gx)}),Re&&Wa(q,te),It}function Pe(q,V,Q,dt){if(typeof Q=="object"&&Q!==null&&Q.type===b&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:t:{for(var It=Q.key;V!==null;){if(V.key===It){if(It=Q.type,It===b){if(V.tag===7){a(q,V.sibling),dt=c(V,Q.props.children),dt.return=q,q=dt;break t}}else if(V.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===X&&em(It)===V.type){a(q,V.sibling),dt=c(V,Q.props),js(dt,Q),dt.return=q,q=dt;break t}a(q,V);break}else n(q,V);V=V.sibling}Q.type===b?(dt=ka(Q.props.children,q.mode,dt,Q.key),dt.return=q,q=dt):(dt=Ko(Q.type,Q.key,Q.props,null,q.mode,dt),js(dt,Q),dt.return=q,q=dt)}return S(q);case y:t:{for(It=Q.key;V!==null;){if(V.key===It)if(V.tag===4&&V.stateNode.containerInfo===Q.containerInfo&&V.stateNode.implementation===Q.implementation){a(q,V.sibling),dt=c(V,Q.children||[]),dt.return=q,q=dt;break t}else{a(q,V);break}else n(q,V);V=V.sibling}dt=$c(Q,q.mode,dt),dt.return=q,q=dt}return S(q);case X:return It=Q._init,Q=It(Q._payload),Pe(q,V,Q,dt)}if(lt(Q))return ne(q,V,Q,dt);if(Z(Q)){if(It=Z(Q),typeof It!="function")throw Error(r(150));return Q=It.call(Q),Jt(q,V,Q,dt)}if(typeof Q.then=="function")return Pe(q,V,dl(Q),dt);if(Q.$$typeof===O)return Pe(q,V,tl(q,Q),dt);pl(q,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,V!==null&&V.tag===6?(a(q,V.sibling),dt=c(V,Q),dt.return=q,q=dt):(a(q,V),dt=Jc(Q,q.mode,dt),dt.return=q,q=dt),S(q)):a(q,V)}return function(q,V,Q,dt){try{Zs=0;var It=Pe(q,V,Q,dt);return Br=null,It}catch(Yt){if(Yt===Fs||Yt===nl)throw Yt;var pe=Xn(29,Yt,null,q.mode);return pe.lanes=dt,pe.return=q,pe}finally{}}}var zr=nm(!0),im=nm(!1),ni=$(null),Ei=null;function ha(e){var n=e.alternate;St(un,un.current&1),St(ni,e),Ei===null&&(n===null||Lr.current!==null||n.memoizedState!==null)&&(Ei=e)}function am(e){if(e.tag===22){if(St(un,un.current),St(ni,e),Ei===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ei=e)}}else da()}function da(){St(un,un.current),St(ni,ni.current)}function Vi(e){vt(ni),Ei===e&&(Ei=null),vt(un)}var un=$(0);function ml(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||yf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Lu(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Nu={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=Zn(),c=ca(s);c.payload=n,a!=null&&(c.callback=a),n=ua(e,c,s),n!==null&&(jn(n,e,s),Gs(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=Zn(),c=ca(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ua(e,c,s),n!==null&&(jn(n,e,s),Gs(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Zn(),s=ca(a);s.tag=2,n!=null&&(s.callback=n),n=ua(e,s,a),n!==null&&(jn(n,e,a),Gs(n,e,a))}};function rm(e,n,a,s,c,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,S):n.prototype&&n.prototype.isPureReactComponent?!Us(a,s)||!Us(c,f):!0}function sm(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&Nu.enqueueReplaceState(n,n.state,null)}function Ja(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var gl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function om(e){gl(e)}function lm(e){console.error(e)}function cm(e){gl(e)}function _l(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function um(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Ou(e,n,a){return a=ca(a),a.tag=3,a.payload={element:null},a.callback=function(){_l(e,n)},a}function fm(e){return e=ca(e),e.tag=3,e}function hm(e,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;e.payload=function(){return c(f)},e.callback=function(){um(n,a,s)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){um(n,a,s),typeof c!="function"&&(xa===null?xa=new Set([this]):xa.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function Gv(e,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Bs(n,a,c,!0),a=ni.current,a!==null){switch(a.tag){case 13:return Ei===null?rf():a.alternate===null&&Ke===0&&(Ke=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===cu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),of(e,s,c)),!1;case 22:return a.flags|=65536,s===cu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),of(e,s,c)),!1}throw Error(r(435,a.tag))}return of(e,s,c),rf(),!1}if(Re)return n=ni.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==nu&&(e=Error(r(422),{cause:s}),Ps(Jn(e,a)))):(s!==nu&&(n=Error(r(423),{cause:s}),Ps(Jn(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=Jn(s,a),c=Ou(e.stateNode,s,c),hu(e,c),Ke!==4&&(Ke=2)),!1;var f=Error(r(520),{cause:s});if(f=Jn(f,a),no===null?no=[f]:no.push(f),Ke!==4&&(Ke=2),n===null)return!0;s=Jn(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Ou(a.stateNode,s,e),hu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(xa===null||!xa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=fm(c),hm(c,e,a,s),hu(a,c),!1}a=a.return}while(a!==null);return!1}var dm=Error(r(461)),mn=!1;function Sn(e,n,a,s){n.child=e===null?im(n,null,a,s):zr(n,e.child,a,s)}function pm(e,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var S={};for(var T in s)T!=="ref"&&(S[T]=s[T])}else S=s;return ja(n),s=_u(e,n,a,S,f,c),T=vu(),e!==null&&!mn?(xu(e,n,c),ki(e,n,c)):(Re&&T&&tu(n),n.flags|=1,Sn(e,n,s,c),n.child)}function mm(e,n,a,s,c){if(e===null){var f=a.type;return typeof f=="function"&&!Qc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,gm(e,n,f,s,c)):(e=Ko(a.type,null,s,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Vu(e,c)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Us,a(S,s)&&e.ref===n.ref)return ki(e,n,c)}return n.flags|=1,e=Bi(f,s),e.ref=n.ref,e.return=n,n.child=e}function gm(e,n,a,s,c){if(e!==null){var f=e.memoizedProps;if(Us(f,s)&&e.ref===n.ref)if(mn=!1,n.pendingProps=s=f,Vu(e,c))(e.flags&131072)!==0&&(mn=!0);else return n.lanes=e.lanes,ki(e,n,c)}return Pu(e,n,a,s,c)}function _m(e,n,a){var s=n.pendingProps,c=s.children,f=e!==null?e.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=f!==null?f.baseLanes|a:a,e!==null){for(c=n.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return vm(e,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&el(n,f!==null?f.cachePool:null),f!==null?gp(n,f):pu(),am(n);else return n.lanes=n.childLanes=536870912,vm(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(el(n,f.cachePool),gp(n,f),da(),n.memoizedState=null):(e!==null&&el(n,null),pu(),da());return Sn(e,n,c,a),n.child}function vm(e,n,a,s){var c=lu();return c=c===null?null:{parent:cn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&el(n,null),pu(),am(n),e!==null&&Bs(e,n,s,!0),null}function vl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Pu(e,n,a,s,c){return ja(n),a=_u(e,n,a,s,void 0,c),s=vu(),e!==null&&!mn?(xu(e,n,c),ki(e,n,c)):(Re&&s&&tu(n),n.flags|=1,Sn(e,n,a,c),n.child)}function xm(e,n,a,s,c,f){return ja(n),n.updateQueue=null,a=vp(n,s,a,c),_p(e),s=vu(),e!==null&&!mn?(xu(e,n,f),ki(e,n,f)):(Re&&s&&tu(n),n.flags|=1,Sn(e,n,a,f),n.child)}function Sm(e,n,a,s,c){if(ja(n),n.stateNode===null){var f=Rr,S=a.contextType;typeof S=="object"&&S!==null&&(f=An(S)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Nu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},uu(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?An(S):Rr,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Lu(n,a,S,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&Nu.enqueueReplaceState(f,f.state,null),ks(n,s,f,c),Vs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,P=Ja(a,T);f.props=P;var J=f.context,ht=a.contextType;S=Rr,typeof ht=="object"&&ht!==null&&(S=An(ht));var mt=a.getDerivedStateFromProps;ht=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ht||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||J!==S)&&sm(n,f,s,S),la=!1;var it=n.memoizedState;f.state=it,ks(n,s,f,c),Vs(),J=n.memoizedState,T||it!==J||la?(typeof mt=="function"&&(Lu(n,a,mt,s),J=n.memoizedState),(P=la||rm(n,a,P,s,it,J,S))?(ht||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=J),f.props=s,f.state=J,f.context=S,s=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,fu(e,n),S=n.memoizedProps,ht=Ja(a,S),f.props=ht,mt=n.pendingProps,it=f.context,J=a.contextType,P=Rr,typeof J=="object"&&J!==null&&(P=An(J)),T=a.getDerivedStateFromProps,(J=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==mt||it!==P)&&sm(n,f,s,P),la=!1,it=n.memoizedState,f.state=it,ks(n,s,f,c),Vs();var at=n.memoizedState;S!==mt||it!==at||la||e!==null&&e.dependencies!==null&&$o(e.dependencies)?(typeof T=="function"&&(Lu(n,a,T,s),at=n.memoizedState),(ht=la||rm(n,a,ht,s,it,at,P)||e!==null&&e.dependencies!==null&&$o(e.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,at,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,at,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=at),f.props=s,f.state=at,f.context=P,s=ht):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,vl(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=zr(n,e.child,null,c),n.child=zr(n,null,a,c)):Sn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=ki(e,n,c),e}function Mm(e,n,a,s){return Os(),n.flags|=256,Sn(e,n,a,s),n.child}var Bu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function zu(e){return{baseLanes:e,cachePool:lp()}}function Iu(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ii),e}function ym(e,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(un.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Re){if(c?ha(n):da(),Re){var T=je,P;if(P=T){t:{for(P=T,T=yi;P.nodeType!==8;){if(!T){T=null;break t}if(P=hi(P.nextSibling),P===null){T=null;break t}}T=P}T!==null?(n.memoizedState={dehydrated:T,treeContext:Xa!==null?{id:zi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},P=Xn(18,null,null,0),P.stateNode=T,P.return=n,n.child=P,Ln=n,je=null,P=!0):P=!1}P||Ya(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return yf(T)?n.lanes=32:n.lanes=536870912,null;Vi(n)}return T=s.children,s=s.fallback,c?(da(),c=n.mode,T=xl({mode:"hidden",children:T},c),s=ka(s,c,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,c=n.child,c.memoizedState=zu(a),c.childLanes=Iu(e,S,a),n.memoizedState=Bu,s):(ha(n),Fu(n,T))}if(P=e.memoizedState,P!==null&&(T=P.dehydrated,T!==null)){if(f)n.flags&256?(ha(n),n.flags&=-257,n=Hu(e,n,a)):n.memoizedState!==null?(da(),n.child=e.child,n.flags|=128,n=null):(da(),c=s.fallback,T=n.mode,s=xl({mode:"visible",children:s.children},T),c=ka(c,T,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,zr(n,e.child,null,a),s=n.child,s.memoizedState=zu(a),s.childLanes=Iu(e,S,a),n.memoizedState=Bu,n=c);else if(ha(n),yf(T)){if(S=T.nextSibling&&T.nextSibling.dataset,S)var J=S.dgst;S=J,s=Error(r(419)),s.stack="",s.digest=S,Ps({value:s,source:null,stack:null}),n=Hu(e,n,a)}else if(mn||Bs(e,n,a,!1),S=(a&e.childLanes)!==0,mn||S){if(S=He,S!==null&&(s=a&-a,s=(s&42)!==0?1:ie(s),s=(s&(S.suspendedLanes|a))!==0?0:s,s!==0&&s!==P.retryLane))throw P.retryLane=s,Ar(e,s),jn(S,e,s),dm;T.data==="$?"||rf(),n=Hu(e,n,a)}else T.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=P.treeContext,je=hi(T.nextSibling),Ln=n,Re=!0,qa=null,yi=!1,e!==null&&(ti[ei++]=zi,ti[ei++]=Ii,ti[ei++]=Xa,zi=e.id,Ii=e.overflow,Xa=n),n=Fu(n,s.children),n.flags|=4096);return n}return c?(da(),c=s.fallback,T=n.mode,P=e.child,J=P.sibling,s=Bi(P,{mode:"hidden",children:s.children}),s.subtreeFlags=P.subtreeFlags&65011712,J!==null?c=Bi(J,c):(c=ka(c,T,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,T=e.child.memoizedState,T===null?T=zu(a):(P=T.cachePool,P!==null?(J=cn._currentValue,P=P.parent!==J?{parent:J,pool:J}:P):P=lp(),T={baseLanes:T.baseLanes|a,cachePool:P}),c.memoizedState=T,c.childLanes=Iu(e,S,a),n.memoizedState=Bu,s):(ha(n),a=e.child,e=a.sibling,a=Bi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function Fu(e,n){return n=xl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function xl(e,n){return e=Xn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Hu(e,n,a){return zr(n,e.child,null,a),e=Fu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Em(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),au(e.return,n,a)}function Gu(e,n,a,s,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=c)}function Tm(e,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;if(Sn(e,n,s.children,a),s=un.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Em(e,a,n);else if(e.tag===19)Em(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}switch(St(un,s),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&ml(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Gu(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&ml(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Gu(n,!0,a,null,f);break;case"together":Gu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ki(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),va|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Bs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Bi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Bi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Vu(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&$o(e)))}function Vv(e,n,a){switch(n.tag){case 3:bt(n,n.stateNode.containerInfo),oa(n,cn,e.memoizedState.cache),Os();break;case 27:case 5:Wt(n);break;case 4:bt(n,n.stateNode.containerInfo);break;case 10:oa(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ha(n),n.flags|=128,null):(a&n.child.childLanes)!==0?ym(e,n,a):(ha(n),e=ki(e,n,a),e!==null?e.sibling:null);ha(n);break;case 19:var c=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Bs(e,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Tm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),St(un,un.current),s)break;return null;case 22:case 23:return n.lanes=0,_m(e,n,a);case 24:oa(n,cn,e.memoizedState.cache)}return ki(e,n,a)}function bm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)mn=!0;else{if(!Vu(e,a)&&(n.flags&128)===0)return mn=!1,Vv(e,n,a);mn=(e.flags&131072)!==0}else mn=!1,Re&&(n.flags&1048576)!==0&&ep(n,Jo,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")Qc(s)?(e=Ja(s,e),n.tag=1,n=Sm(null,n,s,e,a)):(n.tag=0,n=Pu(null,n,s,e,a));else{if(s!=null){if(c=s.$$typeof,c===D){n.tag=11,n=pm(null,n,s,e,a);break t}else if(c===I){n.tag=14,n=mm(null,n,s,e,a);break t}}throw n=ft(s)||s,Error(r(306,n,""))}}return n;case 0:return Pu(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=Ja(s,n.pendingProps),Sm(e,n,s,c,a);case 3:t:{if(bt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,fu(e,n),ks(n,s,null,a);var S=n.memoizedState;if(s=S.cache,oa(n,cn,s),s!==f.cache&&ru(n,[cn],a,!0),Vs(),s=S.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Mm(e,n,s,a);break t}else if(s!==c){c=Jn(Error(r(424)),n),Ps(c),n=Mm(e,n,s,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(je=hi(e.firstChild),Ln=n,Re=!0,qa=null,yi=!0,a=im(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Os(),s===c){n=ki(e,n,a);break t}Sn(e,n,s,a)}n=n.child}return n;case 26:return vl(e,n),e===null?(a=wg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Re||(a=n.type,e=n.pendingProps,s=Nl(et.current).createElement(a),s[ln]=n,s[Ye]=e,yn(s,a,e),nn(s),n.stateNode=s):n.memoizedState=wg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Wt(n),e===null&&Re&&(s=n.stateNode=Ag(n.type,n.pendingProps,et.current),Ln=n,yi=!0,c=je,ya(n.type)?(Ef=c,je=hi(s.firstChild)):je=c),Sn(e,n,n.pendingProps.children,a),vl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Re&&((c=s=je)&&(s=gx(s,n.type,n.pendingProps,yi),s!==null?(n.stateNode=s,Ln=n,je=hi(s.firstChild),yi=!1,c=!0):c=!1),c||Ya(n)),Wt(n),c=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,s=f.children,xf(c,f)?s=null:S!==null&&xf(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=_u(e,n,Ov,null,null,a),fo._currentValue=c),vl(e,n),Sn(e,n,s,a),n.child;case 6:return e===null&&Re&&((e=a=je)&&(a=_x(a,n.pendingProps,yi),a!==null?(n.stateNode=a,Ln=n,je=null,e=!0):e=!1),e||Ya(n)),null;case 13:return ym(e,n,a);case 4:return bt(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=zr(n,null,s,a):Sn(e,n,s,a),n.child;case 11:return pm(e,n,n.type,n.pendingProps,a);case 7:return Sn(e,n,n.pendingProps,a),n.child;case 8:return Sn(e,n,n.pendingProps.children,a),n.child;case 12:return Sn(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,oa(n,n.type,s.value),Sn(e,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,ja(n),c=An(c),s=s(c),n.flags|=1,Sn(e,n,s,a),n.child;case 14:return mm(e,n,n.type,n.pendingProps,a);case 15:return gm(e,n,n.type,n.pendingProps,a);case 19:return Tm(e,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},e===null?(a=xl(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Bi(e.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return _m(e,n,a);case 24:return ja(n),s=An(cn),e===null?(c=lu(),c===null&&(c=He,f=su(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},uu(n),oa(n,cn,c)):((e.lanes&a)!==0&&(fu(e,n),ks(n,null,null,a),Vs()),c=e.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),oa(n,cn,s)):(s=f.cache,oa(n,cn,s),s!==c.cache&&ru(n,[cn],a,!0))),Sn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Xi(e){e.flags|=4}function Am(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Og(n)){if(n=ni.current,n!==null&&((Me&4194048)===Me?Ei!==null:(Me&62914560)!==Me&&(Me&536870912)===0||n!==Ei))throw Hs=cu,cp;e.flags|=8192}}function Sl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Tt():536870912,e.lanes|=n,Gr|=n)}function Ks(e,n){if(!Re)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function kv(e,n,a){var s=n.pendingProps;switch(eu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Hi(cn),jt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ns(n)?Xi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ap())),qe(n),null;case 26:return a=n.memoizedState,e===null?(Xi(n),a!==null?(qe(n),Am(n,a)):(qe(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Xi(n),qe(n),Am(n,a)):(qe(n),n.flags&=-16777217):(e.memoizedProps!==s&&Xi(n),qe(n),n.flags&=-16777217),null;case 27:he(n),a=et.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Xi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qe(n),null}e=Dt.current,Ns(n)?np(n):(e=Ag(c,s,a),n.stateNode=e,Xi(n))}return qe(n),null;case 5:if(he(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Xi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qe(n),null}if(e=Dt.current,Ns(n))np(n);else{switch(c=Nl(et.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?e.multiple=!0:s.size&&(e.size=s.size);break;default:e=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}e[ln]=n,e[Ye]=s;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(yn(e,a,s),a){case"button":case"input":case"select":case"textarea":e=!!s.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Xi(n)}}return qe(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&Xi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=et.current,Ns(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,c=Ln,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[ln]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||xg(e.nodeValue,a)),e||Ya(n)}else e=Nl(e).createTextNode(s),e[ln]=n,n.stateNode=e}return qe(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Ns(n),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[ln]=n}else Os(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),c=!1}else c=ap(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Vi(n),n):(Vi(n),null)}if(Vi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,e=e!==null&&e.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Sl(n,n.updateQueue),qe(n),null;case 4:return jt(),e===null&&pf(n.stateNode.containerInfo),qe(n),null;case 10:return Hi(n.type),qe(n),null;case 19:if(vt(un),c=n.memoizedState,c===null)return qe(n),null;if(s=(n.flags&128)!==0,f=c.rendering,f===null)if(s)Ks(c,!1);else{if(Ke!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=ml(e),f!==null){for(n.flags|=128,Ks(c,!1),e=f.updateQueue,n.updateQueue=e,Sl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)tp(a,e),a=a.sibling;return St(un,un.current&1|2),n.child}e=e.sibling}c.tail!==null&&Ot()>El&&(n.flags|=128,s=!0,Ks(c,!1),n.lanes=4194304)}else{if(!s)if(e=ml(f),e!==null){if(n.flags|=128,s=!0,e=e.updateQueue,n.updateQueue=e,Sl(n,e),Ks(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Re)return qe(n),null}else 2*Ot()-c.renderingStartTime>El&&a!==536870912&&(n.flags|=128,s=!0,Ks(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(e=c.last,e!==null?e.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=Ot(),n.sibling=null,e=un.current,St(un,s?e&1|2:e&1),n):(qe(n),null);case 22:case 23:return Vi(n),mu(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&Sl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&vt(Ka),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Hi(cn),qe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Xv(e,n){switch(eu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Hi(cn),jt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return he(n),null;case 13:if(Vi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Os()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return vt(un),null;case 4:return jt(),null;case 10:return Hi(n.type),null;case 22:case 23:return Vi(n),mu(),e!==null&&vt(Ka),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Hi(cn),null;case 25:return null;default:return null}}function Rm(e,n){switch(eu(n),n.tag){case 3:Hi(cn),jt();break;case 26:case 27:case 5:he(n);break;case 4:jt();break;case 13:Vi(n);break;case 19:vt(un);break;case 10:Hi(n.type);break;case 22:case 23:Vi(n),mu(),e!==null&&vt(Ka);break;case 24:Hi(cn)}}function Qs(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&e)===e){s=void 0;var f=a.create,S=a.inst;s=f(),S.destroy=s}a=a.next}while(a!==c)}}catch(T){Ie(n,n.return,T)}}function pa(e,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&e)===e){var S=s.inst,T=S.destroy;if(T!==void 0){S.destroy=void 0,c=n;var P=a,J=T;try{J()}catch(ht){Ie(c,P,ht)}}}s=s.next}while(s!==f)}}catch(ht){Ie(n,n.return,ht)}}function Cm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{mp(n,a)}catch(s){Ie(e,e.return,s)}}}function wm(e,n,a){a.props=Ja(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Ie(e,n,s)}}function Js(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(c){Ie(e,n,c)}}function Ti(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Ie(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ie(e,n,c)}else a.current=null}function Dm(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Ie(e,e.return,c)}}function ku(e,n,a){try{var s=e.stateNode;fx(s,e.type,a,n),s[Ye]=n}catch(c){Ie(e,e.return,c)}}function Um(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ya(e.type)||e.tag===4}function Xu(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Um(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wu(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ll));else if(s!==4&&(s===27&&ya(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Wu(e,n,a),e=e.sibling;e!==null;)Wu(e,n,a),e=e.sibling}function Ml(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&ya(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ml(e,n,a),e=e.sibling;e!==null;)Ml(e,n,a),e=e.sibling}function Lm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);yn(n,s,a),n[ln]=e,n[Ye]=a}catch(f){Ie(e,e.return,f)}}var Wi=!1,tn=!1,qu=!1,Nm=typeof WeakSet=="function"?WeakSet:Set,gn=null;function Wv(e,n){if(e=e.containerInfo,_f=Fl,e=Xd(e),Xc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,T=-1,P=-1,J=0,ht=0,mt=e,it=null;e:for(;;){for(var at;mt!==a||c!==0&&mt.nodeType!==3||(T=S+c),mt!==f||s!==0&&mt.nodeType!==3||(P=S+s),mt.nodeType===3&&(S+=mt.nodeValue.length),(at=mt.firstChild)!==null;)it=mt,mt=at;for(;;){if(mt===e)break e;if(it===a&&++J===c&&(T=S),it===f&&++ht===s&&(P=S),(at=mt.nextSibling)!==null)break;mt=it,it=mt.parentNode}mt=at}a=T===-1||P===-1?null:{start:T,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(vf={focusedElem:e,selectionRange:a},Fl=!1,gn=n;gn!==null;)if(n=gn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,gn=e;else for(;gn!==null;){switch(n=gn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var ne=Ja(a.type,c,a.elementType===a.type);e=s.getSnapshotBeforeUpdate(ne,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(Jt){Ie(a,a.return,Jt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Mf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Mf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,gn=e;break}gn=n.return}}function Om(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ma(e,a),s&4&&Qs(5,a);break;case 1:if(ma(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){Ie(a,a.return,S)}else{var c=Ja(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Ie(a,a.return,S)}}s&64&&Cm(a),s&512&&Js(a,a.return);break;case 3:if(ma(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{mp(e,n)}catch(S){Ie(a,a.return,S)}}break;case 27:n===null&&s&4&&Lm(a);case 26:case 5:ma(e,a),n===null&&s&4&&Dm(a),s&512&&Js(a,a.return);break;case 12:ma(e,a);break;case 13:ma(e,a),s&4&&zm(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=tx.bind(null,a),vx(e,a))));break;case 22:if(s=a.memoizedState!==null||Wi,!s){n=n!==null&&n.memoizedState!==null||tn,c=Wi;var f=tn;Wi=s,(tn=n)&&!f?ga(e,a,(a.subtreeFlags&8772)!==0):ma(e,a),Wi=c,tn=f}break;case 30:break;default:ma(e,a)}}function Pm(e){var n=e.alternate;n!==null&&(e.alternate=null,Pm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&vr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ke=null,zn=!1;function qi(e,n,a){for(a=a.child;a!==null;)Bm(e,n,a),a=a.sibling}function Bm(e,n,a){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(ut,a)}catch{}switch(a.tag){case 26:tn||Ti(a,n),qi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:tn||Ti(a,n);var s=ke,c=zn;ya(a.type)&&(ke=a.stateNode,zn=!1),qi(e,n,a),oo(a.stateNode),ke=s,zn=c;break;case 5:tn||Ti(a,n);case 6:if(s=ke,c=zn,ke=null,qi(e,n,a),ke=s,zn=c,ke!==null)if(zn)try{(ke.nodeType===9?ke.body:ke.nodeName==="HTML"?ke.ownerDocument.body:ke).removeChild(a.stateNode)}catch(f){Ie(a,n,f)}else try{ke.removeChild(a.stateNode)}catch(f){Ie(a,n,f)}break;case 18:ke!==null&&(zn?(e=ke,Tg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),go(e)):Tg(ke,a.stateNode));break;case 4:s=ke,c=zn,ke=a.stateNode.containerInfo,zn=!0,qi(e,n,a),ke=s,zn=c;break;case 0:case 11:case 14:case 15:tn||pa(2,a,n),tn||pa(4,a,n),qi(e,n,a);break;case 1:tn||(Ti(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&wm(a,n,s)),qi(e,n,a);break;case 21:qi(e,n,a);break;case 22:tn=(s=tn)||a.memoizedState!==null,qi(e,n,a),tn=s;break;default:qi(e,n,a)}}function zm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{go(e)}catch(a){Ie(n,n.return,a)}}function qv(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Nm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Nm),n;default:throw Error(r(435,e.tag))}}function Yu(e,n){var a=qv(e);n.forEach(function(s){var c=ex.bind(null,e,s);a.has(s)||(a.add(s),s.then(c,c))})}function Wn(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=e,S=n,T=S;t:for(;T!==null;){switch(T.tag){case 27:if(ya(T.type)){ke=T.stateNode,zn=!1;break t}break;case 5:ke=T.stateNode,zn=!1;break t;case 3:case 4:ke=T.stateNode.containerInfo,zn=!0;break t}T=T.return}if(ke===null)throw Error(r(160));Bm(f,S,c),ke=null,zn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Im(n,e),n=n.sibling}var fi=null;function Im(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Wn(n,e),qn(e),s&4&&(pa(3,e,e.return),Qs(3,e),pa(5,e,e.return));break;case 1:Wn(n,e),qn(e),s&512&&(tn||a===null||Ti(a,a.return)),s&64&&Wi&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=fi;if(Wn(n,e),qn(e),s&512&&(tn||a===null||Ti(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){t:{s=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Mi]||f[ln]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),yn(f,s,a),f[ln]=e,nn(f),s=f;break t;case"link":var S=Lg("link","href",c).get(s+(a.href||""));if(S){for(var T=0;T<S.length;T++)if(f=S[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(T,1);break e}}f=c.createElement(s),yn(f,s,a),c.head.appendChild(f);break;case"meta":if(S=Lg("meta","content",c).get(s+(a.content||""))){for(T=0;T<S.length;T++)if(f=S[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(T,1);break e}}f=c.createElement(s),yn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[ln]=e,nn(f),s=f}e.stateNode=s}else Ng(c,e.type,e.stateNode);else e.stateNode=Ug(c,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Ng(c,e.type,e.stateNode):Ug(c,s,e.memoizedProps)):s===null&&e.stateNode!==null&&ku(e,e.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,e),qn(e),s&512&&(tn||a===null||Ti(a,a.return)),a!==null&&s&4&&ku(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,e),qn(e),s&512&&(tn||a===null||Ti(a,a.return)),e.flags&32){c=e.stateNode;try{On(c,"")}catch(at){Ie(e,e.return,at)}}s&4&&e.stateNode!=null&&(c=e.memoizedProps,ku(e,c,a!==null?a.memoizedProps:c)),s&1024&&(qu=!0);break;case 6:if(Wn(n,e),qn(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(at){Ie(e,e.return,at)}}break;case 3:if(Bl=null,c=fi,fi=Ol(n.containerInfo),Wn(n,e),fi=c,qn(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{go(n.containerInfo)}catch(at){Ie(e,e.return,at)}qu&&(qu=!1,Fm(e));break;case 4:s=fi,fi=Ol(e.stateNode.containerInfo),Wn(n,e),qn(e),fi=s;break;case 12:Wn(n,e),qn(e);break;case 13:Wn(n,e),qn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&($u=Ot()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Yu(e,s)));break;case 22:c=e.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,J=Wi,ht=tn;if(Wi=J||c,tn=ht||P,Wn(n,e),tn=ht,Wi=J,qn(e),s&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||P||Wi||tn||$a(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(f=P.stateNode,c)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{T=P.stateNode;var mt=P.memoizedProps.style,it=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;T.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(at){Ie(P,P.return,at)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=c?"":P.memoizedProps}catch(at){Ie(P,P.return,at)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Yu(e,a))));break;case 19:Wn(n,e),qn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Yu(e,s)));break;case 30:break;case 21:break;default:Wn(n,e),qn(e)}}function qn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(Um(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=Xu(e);Ml(e,f,c);break;case 5:var S=a.stateNode;a.flags&32&&(On(S,""),a.flags&=-33);var T=Xu(e);Ml(e,T,S);break;case 3:case 4:var P=a.stateNode.containerInfo,J=Xu(e);Wu(e,J,P);break;default:throw Error(r(161))}}catch(ht){Ie(e,e.return,ht)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Fm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Fm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ma(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Om(e,n.alternate,n),n=n.sibling}function $a(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:pa(4,n,n.return),$a(n);break;case 1:Ti(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&wm(n,n.return,a),$a(n);break;case 27:oo(n.stateNode);case 26:case 5:Ti(n,n.return),$a(n);break;case 22:n.memoizedState===null&&$a(n);break;case 30:$a(n);break;default:$a(n)}e=e.sibling}}function ga(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=e,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:ga(c,f,a),Qs(4,f);break;case 1:if(ga(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(J){Ie(s,s.return,J)}if(s=f,c=s.updateQueue,c!==null){var T=s.stateNode;try{var P=c.shared.hiddenCallbacks;if(P!==null)for(c.shared.hiddenCallbacks=null,c=0;c<P.length;c++)pp(P[c],T)}catch(J){Ie(s,s.return,J)}}a&&S&64&&Cm(f),Js(f,f.return);break;case 27:Lm(f);case 26:case 5:ga(c,f,a),a&&s===null&&S&4&&Dm(f),Js(f,f.return);break;case 12:ga(c,f,a);break;case 13:ga(c,f,a),a&&S&4&&zm(c,f);break;case 22:f.memoizedState===null&&ga(c,f,a),Js(f,f.return);break;case 30:break;default:ga(c,f,a)}n=n.sibling}}function Zu(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&zs(a))}function ju(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&zs(e))}function bi(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Hm(e,n,a,s),n=n.sibling}function Hm(e,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:bi(e,n,a,s),c&2048&&Qs(9,n);break;case 1:bi(e,n,a,s);break;case 3:bi(e,n,a,s),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&zs(e)));break;case 12:if(c&2048){bi(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,S=f.id,T=f.onPostCommit;typeof T=="function"&&T(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(P){Ie(n,n.return,P)}}else bi(e,n,a,s);break;case 13:bi(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?bi(e,n,a,s):$s(e,n):f._visibility&2?bi(e,n,a,s):(f._visibility|=2,Ir(e,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&Zu(S,n);break;case 24:bi(e,n,a,s),c&2048&&ju(n.alternate,n);break;default:bi(e,n,a,s)}}function Ir(e,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,S=n,T=a,P=s,J=S.flags;switch(S.tag){case 0:case 11:case 15:Ir(f,S,T,P,c),Qs(8,S);break;case 23:break;case 22:var ht=S.stateNode;S.memoizedState!==null?ht._visibility&2?Ir(f,S,T,P,c):$s(f,S):(ht._visibility|=2,Ir(f,S,T,P,c)),c&&J&2048&&Zu(S.alternate,S);break;case 24:Ir(f,S,T,P,c),c&&J&2048&&ju(S.alternate,S);break;default:Ir(f,S,T,P,c)}n=n.sibling}}function $s(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,c=s.flags;switch(s.tag){case 22:$s(a,s),c&2048&&Zu(s.alternate,s);break;case 24:$s(a,s),c&2048&&ju(s.alternate,s);break;default:$s(a,s)}n=n.sibling}}var to=8192;function Fr(e){if(e.subtreeFlags&to)for(e=e.child;e!==null;)Gm(e),e=e.sibling}function Gm(e){switch(e.tag){case 26:Fr(e),e.flags&to&&e.memoizedState!==null&&Ux(fi,e.memoizedState,e.memoizedProps);break;case 5:Fr(e);break;case 3:case 4:var n=fi;fi=Ol(e.stateNode.containerInfo),Fr(e),fi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=to,to=16777216,Fr(e),to=n):Fr(e));break;default:Fr(e)}}function Vm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function eo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];gn=s,Xm(s,e)}Vm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)km(e),e=e.sibling}function km(e){switch(e.tag){case 0:case 11:case 15:eo(e),e.flags&2048&&pa(9,e,e.return);break;case 3:eo(e);break;case 12:eo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,yl(e)):eo(e);break;default:eo(e)}}function yl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];gn=s,Xm(s,e)}Vm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:pa(8,n,n.return),yl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,yl(n));break;default:yl(n)}e=e.sibling}}function Xm(e,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:pa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:zs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,gn=s;else t:for(a=e;gn!==null;){s=gn;var c=s.sibling,f=s.return;if(Pm(s),s===a){gn=null;break t}if(c!==null){c.return=f,gn=c;break t}gn=f}}}var Yv={getCacheForType:function(e){var n=An(cn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},Zv=typeof WeakMap=="function"?WeakMap:Map,we=0,He=null,_e=null,Me=0,De=0,Yn=null,_a=!1,Hr=!1,Ku=!1,Yi=0,Ke=0,va=0,tr=0,Qu=0,ii=0,Gr=0,no=null,In=null,Ju=!1,$u=0,El=1/0,Tl=null,xa=null,Mn=0,Sa=null,Vr=null,kr=0,tf=0,ef=null,Wm=null,io=0,nf=null;function Zn(){if((we&2)!==0&&Me!==0)return Me&-Me;if(N.T!==null){var e=Dr;return e!==0?e:uf()}return ye()}function qm(){ii===0&&(ii=(Me&536870912)===0||Re?k():536870912);var e=ni.current;return e!==null&&(e.flags|=32),ii}function jn(e,n,a){(e===He&&(De===2||De===9)||e.cancelPendingCommit!==null)&&(Xr(e,0),Ma(e,Me,ii,!1)),Bt(e,a),((we&2)===0||e!==He)&&(e===He&&((we&2)===0&&(tr|=a),Ke===4&&Ma(e,Me,ii,!1)),Ai(e))}function Ym(e,n,a){if((we&6)!==0)throw Error(r(327));var s=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Ct(e,n),c=s?Qv(e,n):sf(e,n,!0),f=s;do{if(c===0){Hr&&!s&&Ma(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!jv(a)){c=sf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var T=e;c=no;var P=T.current.memoizedState.isDehydrated;if(P&&(Xr(T,S).flags|=256),S=sf(T,S,!1),S!==2){if(Ku&&!P){T.errorRecoveryDisabledLanes|=f,tr|=f,c=4;break t}f=In,In=c,f!==null&&(In===null?In=f:In.push.apply(In,f))}c=S}if(f=!1,c!==2)continue}}if(c===1){Xr(e,0),Ma(e,n,0,!0);break}t:{switch(s=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ma(s,n,ii,!_a);break t;case 2:In=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=$u+300-Ot(),10<c)){if(Ma(s,n,ii,!_a),Vt(s,0,!0)!==0)break t;s.timeoutHandle=yg(Zm.bind(null,s,a,In,Tl,Ju,n,ii,tr,Gr,_a,f,2,-0,0),c);break t}Zm(s,a,In,Tl,Ju,n,ii,tr,Gr,_a,f,0,-0,0)}}break}while(!0);Ai(e)}function Zm(e,n,a,s,c,f,S,T,P,J,ht,mt,it,at){if(e.timeoutHandle=-1,mt=n.subtreeFlags,(mt&8192||(mt&16785408)===16785408)&&(uo={stylesheets:null,count:0,unsuspend:Dx},Gm(n),mt=Lx(),mt!==null)){e.cancelPendingCommit=mt(eg.bind(null,e,n,f,a,s,c,S,T,P,ht,1,it,at)),Ma(e,f,S,!J);return}eg(e,n,f,a,s,c,S,T,P)}function jv(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!kn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ma(e,n,a,s){n&=~Qu,n&=~tr,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var c=n;0<c;){var f=31-Pt(c),S=1<<f;s[f]=-1,c&=~S}a!==0&&_t(e,a,n)}function bl(){return(we&6)===0?(ao(0),!1):!0}function af(){if(_e!==null){if(De===0)var e=_e.return;else e=_e,Fi=Za=null,Su(e),Br=null,Zs=0,e=_e;for(;e!==null;)Rm(e.alternate,e),e=e.return;_e=null}}function Xr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,dx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),af(),He=e,_e=a=Bi(e.current,null),Me=n,De=0,Yn=null,_a=!1,Hr=Ct(e,n),Ku=!1,Gr=ii=Qu=tr=va=Ke=0,In=no=null,Ju=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var c=31-Pt(s),f=1<<c;n|=e[c],s&=~f}return Yi=n,Yo(),a}function jm(e,n){de=null,N.H=hl,n===Fs||n===nl?(n=hp(),De=3):n===cp?(n=hp(),De=4):De=n===dm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Yn=n,_e===null&&(Ke=1,_l(e,Jn(n,e.current)))}function Km(){var e=N.H;return N.H=hl,e===null?hl:e}function Qm(){var e=N.A;return N.A=Yv,e}function rf(){Ke=4,_a||(Me&4194048)!==Me&&ni.current!==null||(Hr=!0),(va&134217727)===0&&(tr&134217727)===0||He===null||Ma(He,Me,ii,!1)}function sf(e,n,a){var s=we;we|=2;var c=Km(),f=Qm();(He!==e||Me!==n)&&(Tl=null,Xr(e,n)),n=!1;var S=Ke;t:do try{if(De!==0&&_e!==null){var T=_e,P=Yn;switch(De){case 8:af(),S=6;break t;case 3:case 2:case 9:case 6:ni.current===null&&(n=!0);var J=De;if(De=0,Yn=null,Wr(e,T,P,J),a&&Hr){S=0;break t}break;default:J=De,De=0,Yn=null,Wr(e,T,P,J)}}Kv(),S=Ke;break}catch(ht){jm(e,ht)}while(!0);return n&&e.shellSuspendCounter++,Fi=Za=null,we=s,N.H=c,N.A=f,_e===null&&(He=null,Me=0,Yo()),S}function Kv(){for(;_e!==null;)Jm(_e)}function Qv(e,n){var a=we;we|=2;var s=Km(),c=Qm();He!==e||Me!==n?(Tl=null,El=Ot()+500,Xr(e,n)):Hr=Ct(e,n);t:do try{if(De!==0&&_e!==null){n=_e;var f=Yn;e:switch(De){case 1:De=0,Yn=null,Wr(e,n,f,1);break;case 2:case 9:if(up(f)){De=0,Yn=null,$m(n);break}n=function(){De!==2&&De!==9||He!==e||(De=7),Ai(e)},f.then(n,n);break t;case 3:De=7;break t;case 4:De=5;break t;case 7:up(f)?(De=0,Yn=null,$m(n)):(De=0,Yn=null,Wr(e,n,f,7));break;case 5:var S=null;switch(_e.tag){case 26:S=_e.memoizedState;case 5:case 27:var T=_e;if(!S||Og(S)){De=0,Yn=null;var P=T.sibling;if(P!==null)_e=P;else{var J=T.return;J!==null?(_e=J,Al(J)):_e=null}break e}}De=0,Yn=null,Wr(e,n,f,5);break;case 6:De=0,Yn=null,Wr(e,n,f,6);break;case 8:af(),Ke=6;break t;default:throw Error(r(462))}}Jv();break}catch(ht){jm(e,ht)}while(!0);return Fi=Za=null,N.H=s,N.A=c,we=a,_e!==null?0:(He=null,Me=0,Yo(),Ke)}function Jv(){for(;_e!==null&&!ae();)Jm(_e)}function Jm(e){var n=bm(e.alternate,e,Yi);e.memoizedProps=e.pendingProps,n===null?Al(e):_e=n}function $m(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=xm(a,n,n.pendingProps,n.type,void 0,Me);break;case 11:n=xm(a,n,n.pendingProps,n.type.render,n.ref,Me);break;case 5:Su(n);default:Rm(a,n),n=_e=tp(n,Yi),n=bm(a,n,Yi)}e.memoizedProps=e.pendingProps,n===null?Al(e):_e=n}function Wr(e,n,a,s){Fi=Za=null,Su(n),Br=null,Zs=0;var c=n.return;try{if(Gv(e,c,n,a,Me)){Ke=1,_l(e,Jn(a,e.current)),_e=null;return}}catch(f){if(c!==null)throw _e=c,f;Ke=1,_l(e,Jn(a,e.current)),_e=null;return}n.flags&32768?(Re||s===1?e=!0:Hr||(Me&536870912)!==0?e=!1:(_a=e=!0,(s===2||s===9||s===3||s===6)&&(s=ni.current,s!==null&&s.tag===13&&(s.flags|=16384))),tg(n,e)):Al(n)}function Al(e){var n=e;do{if((n.flags&32768)!==0){tg(n,_a);return}e=n.return;var a=kv(n.alternate,n,Yi);if(a!==null){_e=a;return}if(n=n.sibling,n!==null){_e=n;return}_e=n=e}while(n!==null);Ke===0&&(Ke=5)}function tg(e,n){do{var a=Xv(e.alternate,e);if(a!==null){a.flags&=32767,_e=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){_e=e;return}_e=e=a}while(e!==null);Ke=6,_e=null}function eg(e,n,a,s,c,f,S,T,P){e.cancelPendingCommit=null;do Rl();while(Mn!==0);if((we&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=jc,yt(e,a,f,S,T,P),e===He&&(_e=He=null,Me=0),Vr=n,Sa=e,kr=a,tf=f,ef=c,Wm=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,nx(Xe,function(){return sg(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=N.T,N.T=null,c=K.p,K.p=2,S=we,we|=4;try{Wv(e,n,a)}finally{we=S,K.p=c,N.T=s}}Mn=1,ng(),ig(),ag()}}function ng(){if(Mn===1){Mn=0;var e=Sa,n=Vr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var s=K.p;K.p=2;var c=we;we|=4;try{Im(n,e);var f=vf,S=Xd(e.containerInfo),T=f.focusedElem,P=f.selectionRange;if(S!==T&&T&&T.ownerDocument&&kd(T.ownerDocument.documentElement,T)){if(P!==null&&Xc(T)){var J=P.start,ht=P.end;if(ht===void 0&&(ht=J),"selectionStart"in T)T.selectionStart=J,T.selectionEnd=Math.min(ht,T.value.length);else{var mt=T.ownerDocument||document,it=mt&&mt.defaultView||window;if(it.getSelection){var at=it.getSelection(),ne=T.textContent.length,Jt=Math.min(P.start,ne),Pe=P.end===void 0?Jt:Math.min(P.end,ne);!at.extend&&Jt>Pe&&(S=Pe,Pe=Jt,Jt=S);var q=Vd(T,Jt),V=Vd(T,Pe);if(q&&V&&(at.rangeCount!==1||at.anchorNode!==q.node||at.anchorOffset!==q.offset||at.focusNode!==V.node||at.focusOffset!==V.offset)){var Q=mt.createRange();Q.setStart(q.node,q.offset),at.removeAllRanges(),Jt>Pe?(at.addRange(Q),at.extend(V.node,V.offset)):(Q.setEnd(V.node,V.offset),at.addRange(Q))}}}}for(mt=[],at=T;at=at.parentNode;)at.nodeType===1&&mt.push({element:at,left:at.scrollLeft,top:at.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<mt.length;T++){var dt=mt[T];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}Fl=!!_f,vf=_f=null}finally{we=c,K.p=s,N.T=a}}e.current=n,Mn=2}}function ig(){if(Mn===2){Mn=0;var e=Sa,n=Vr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var s=K.p;K.p=2;var c=we;we|=4;try{Om(e,n.alternate,n)}finally{we=c,K.p=s,N.T=a}}Mn=3}}function ag(){if(Mn===4||Mn===3){Mn=0,ee();var e=Sa,n=Vr,a=kr,s=Wm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Mn=5:(Mn=0,Vr=Sa=null,rg(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(xa=null),Ce(a),n=n.stateNode,pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(ut,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=N.T,c=K.p,K.p=2,N.T=null;try{for(var f=e.onRecoverableError,S=0;S<s.length;S++){var T=s[S];f(T.value,{componentStack:T.stack})}}finally{N.T=n,K.p=c}}(kr&3)!==0&&Rl(),Ai(e),c=e.pendingLanes,(a&4194090)!==0&&(c&42)!==0?e===nf?io++:(io=0,nf=e):io=0,ao(0)}}function rg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,zs(n)))}function Rl(e){return ng(),ig(),ag(),sg()}function sg(){if(Mn!==5)return!1;var e=Sa,n=tf;tf=0;var a=Ce(kr),s=N.T,c=K.p;try{K.p=32>a?32:a,N.T=null,a=ef,ef=null;var f=Sa,S=kr;if(Mn=0,Vr=Sa=null,kr=0,(we&6)!==0)throw Error(r(331));var T=we;if(we|=4,km(f.current),Hm(f,f.current,S,a),we=T,ao(0,!1),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(ut,f)}catch{}return!0}finally{K.p=c,N.T=s,rg(e,n)}}function og(e,n,a){n=Jn(a,n),n=Ou(e.stateNode,n,2),e=ua(e,n,2),e!==null&&(Bt(e,2),Ai(e))}function Ie(e,n,a){if(e.tag===3)og(e,e,a);else for(;n!==null;){if(n.tag===3){og(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(xa===null||!xa.has(s))){e=Jn(a,e),a=fm(2),s=ua(n,a,2),s!==null&&(hm(a,s,n,e),Bt(s,2),Ai(s));break}}n=n.return}}function of(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new Zv;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(Ku=!0,c.add(a),e=$v.bind(null,e,n,a),n.then(e,e))}function $v(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,He===e&&(Me&a)===a&&(Ke===4||Ke===3&&(Me&62914560)===Me&&300>Ot()-$u?(we&2)===0&&Xr(e,0):Qu|=a,Gr===Me&&(Gr=0)),Ai(e)}function lg(e,n){n===0&&(n=Tt()),e=Ar(e,n),e!==null&&(Bt(e,n),Ai(e))}function tx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),lg(e,a)}function ex(e,n){var a=0;switch(e.tag){case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),lg(e,a)}function nx(e,n){return z(e,n)}var Cl=null,qr=null,lf=!1,wl=!1,cf=!1,er=0;function Ai(e){e!==qr&&e.next===null&&(qr===null?Cl=qr=e:qr=qr.next=e),wl=!0,lf||(lf=!0,ax())}function ao(e,n){if(!cf&&wl){cf=!0;do for(var a=!1,s=Cl;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var S=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-Pt(42|e)+1)-1,f&=c&~(S&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,hg(s,f))}else f=Me,f=Vt(s,s===He?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Ct(s,f)||(a=!0,hg(s,f));s=s.next}while(a);cf=!1}}function ix(){cg()}function cg(){wl=lf=!1;var e=0;er!==0&&(hx()&&(e=er),er=0);for(var n=Ot(),a=null,s=Cl;s!==null;){var c=s.next,f=ug(s,n);f===0?(s.next=null,a===null?Cl=c:a.next=c,c===null&&(qr=a)):(a=s,(e!==0||(f&3)!==0)&&(wl=!0)),s=c}ao(e)}function ug(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-Pt(f),T=1<<S,P=c[S];P===-1?((T&a)===0||(T&s)!==0)&&(c[S]=se(T,n)):P<=n&&(e.expiredLanes|=T),f&=~T}if(n=He,a=Me,a=Vt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(De===2||De===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Ue(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ct(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&Ue(s),Ce(a)){case 2:case 8:a=re;break;case 32:a=Xe;break;case 268435456:a=L;break;default:a=Xe}return s=fg.bind(null,e),a=z(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&Ue(s),e.callbackPriority=2,e.callbackNode=null,2}function fg(e,n){if(Mn!==0&&Mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Rl()&&e.callbackNode!==a)return null;var s=Me;return s=Vt(e,e===He?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(Ym(e,s,n),ug(e,Ot()),e.callbackNode!=null&&e.callbackNode===a?fg.bind(null,e):null)}function hg(e,n){if(Rl())return null;Ym(e,n,!0)}function ax(){px(function(){(we&6)!==0?z(Gt,ix):cg()})}function uf(){return er===0&&(er=k()),er}function dg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ho(""+e)}function pg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function rx(e,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=dg((c[Ye]||null).action),S=s.submitter;S&&(n=(n=S[Ye]||null)?dg(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var T=new Xo("action","action",null,s,c);e.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(er!==0){var P=S?pg(c,S):new FormData(c);wu(a,{pending:!0,data:P,method:c.method,action:f},null,P)}}else typeof f=="function"&&(T.preventDefault(),P=S?pg(c,S):new FormData(c),wu(a,{pending:!0,data:P,method:c.method,action:f},f,P))},currentTarget:c}]})}}for(var ff=0;ff<Zc.length;ff++){var hf=Zc[ff],sx=hf.toLowerCase(),ox=hf[0].toUpperCase()+hf.slice(1);ui(sx,"on"+ox)}ui(Yd,"onAnimationEnd"),ui(Zd,"onAnimationIteration"),ui(jd,"onAnimationStart"),ui("dblclick","onDoubleClick"),ui("focusin","onFocus"),ui("focusout","onBlur"),ui(Tv,"onTransitionRun"),ui(bv,"onTransitionStart"),ui(Av,"onTransitionCancel"),ui(Kd,"onTransitionEnd"),W("onMouseEnter",["mouseout","mouseover"]),W("onMouseLeave",["mouseout","mouseover"]),W("onPointerEnter",["pointerout","pointerover"]),W("onPointerLeave",["pointerout","pointerover"]),A("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),A("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),A("onBeforeInput",["compositionend","keypress","textInput","paste"]),A("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ro));function mg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var S=s.length-1;0<=S;S--){var T=s[S],P=T.instance,J=T.currentTarget;if(T=T.listener,P!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=J;try{f(c)}catch(ht){gl(ht)}c.currentTarget=null,f=P}else for(S=0;S<s.length;S++){if(T=s[S],P=T.instance,J=T.currentTarget,T=T.listener,P!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=J;try{f(c)}catch(ht){gl(ht)}c.currentTarget=null,f=P}}}}function ve(e,n){var a=n[gr];a===void 0&&(a=n[gr]=new Set);var s=e+"__bubble";a.has(s)||(gg(n,e,2,!1),a.add(s))}function df(e,n,a){var s=0;n&&(s|=4),gg(a,e,s,n)}var Dl="_reactListening"+Math.random().toString(36).slice(2);function pf(e){if(!e[Dl]){e[Dl]=!0,Io.forEach(function(a){a!=="selectionchange"&&(lx.has(a)||df(a,!1,e),df(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Dl]||(n[Dl]=!0,df("selectionchange",!1,n))}}function gg(e,n,a,s){switch(Hg(n)){case 2:var c=Px;break;case 8:c=Bx;break;default:c=Cf}a=c.bind(null,n,a,e),c=void 0,!Pc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function mf(e,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var S=s.tag;if(S===3||S===4){var T=s.stateNode.containerInfo;if(T===c)break;if(S===4)for(S=s.return;S!==null;){var P=S.tag;if((P===3||P===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;T!==null;){if(S=Oi(T),S===null)return;if(P=S.tag,P===5||P===6||P===26||P===27){s=f=S;continue t}T=T.parentNode}}s=s.return}Ed(function(){var J=f,ht=Nc(a),mt=[];t:{var it=Qd.get(e);if(it!==void 0){var at=Xo,ne=e;switch(e){case"keypress":if(Vo(a)===0)break t;case"keydown":case"keyup":at=nv;break;case"focusin":ne="focus",at=Fc;break;case"focusout":ne="blur",at=Fc;break;case"beforeblur":case"afterblur":at=Fc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":at=Ad;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":at=X0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":at=rv;break;case Yd:case Zd:case jd:at=Y0;break;case Kd:at=ov;break;case"scroll":case"scrollend":at=V0;break;case"wheel":at=cv;break;case"copy":case"cut":case"paste":at=j0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":at=Cd;break;case"toggle":case"beforetoggle":at=fv}var Jt=(n&4)!==0,Pe=!Jt&&(e==="scroll"||e==="scrollend"),q=Jt?it!==null?it+"Capture":null:it;Jt=[];for(var V=J,Q;V!==null;){var dt=V;if(Q=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||Q===null||q===null||(dt=Ts(V,q),dt!=null&&Jt.push(so(V,dt,Q))),Pe)break;V=V.return}0<Jt.length&&(it=new at(it,ne,null,a,ht),mt.push({event:it,listeners:Jt}))}}if((n&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",at=e==="mouseout"||e==="pointerout",it&&a!==Lc&&(ne=a.relatedTarget||a.fromElement)&&(Oi(ne)||ne[Si]))break t;if((at||it)&&(it=ht.window===ht?ht:(it=ht.ownerDocument)?it.defaultView||it.parentWindow:window,at?(ne=a.relatedTarget||a.toElement,at=J,ne=ne?Oi(ne):null,ne!==null&&(Pe=u(ne),Jt=ne.tag,ne!==Pe||Jt!==5&&Jt!==27&&Jt!==6)&&(ne=null)):(at=null,ne=J),at!==ne)){if(Jt=Ad,dt="onMouseLeave",q="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(Jt=Cd,dt="onPointerLeave",q="onPointerEnter",V="pointer"),Pe=at==null?it:Fa(at),Q=ne==null?it:Fa(ne),it=new Jt(dt,V+"leave",at,a,ht),it.target=Pe,it.relatedTarget=Q,dt=null,Oi(ht)===J&&(Jt=new Jt(q,V+"enter",ne,a,ht),Jt.target=Q,Jt.relatedTarget=Pe,dt=Jt),Pe=dt,at&&ne)e:{for(Jt=at,q=ne,V=0,Q=Jt;Q;Q=Yr(Q))V++;for(Q=0,dt=q;dt;dt=Yr(dt))Q++;for(;0<V-Q;)Jt=Yr(Jt),V--;for(;0<Q-V;)q=Yr(q),Q--;for(;V--;){if(Jt===q||q!==null&&Jt===q.alternate)break e;Jt=Yr(Jt),q=Yr(q)}Jt=null}else Jt=null;at!==null&&_g(mt,it,at,Jt,!1),ne!==null&&Pe!==null&&_g(mt,Pe,ne,Jt,!0)}}t:{if(it=J?Fa(J):window,at=it.nodeName&&it.nodeName.toLowerCase(),at==="select"||at==="input"&&it.type==="file")var It=Bd;else if(Od(it))if(zd)It=Mv;else{It=xv;var pe=vv}else at=it.nodeName,!at||at.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?J&&Uc(J.elementType)&&(It=Bd):It=Sv;if(It&&(It=It(e,J))){Pd(mt,It,a,ht);break t}pe&&pe(e,it,J),e==="focusout"&&J&&it.type==="number"&&J.memoizedProps.value!=null&&bn(it,"number",it.value)}switch(pe=J?Fa(J):window,e){case"focusin":(Od(pe)||pe.contentEditable==="true")&&(Er=pe,Wc=J,Ls=null);break;case"focusout":Ls=Wc=Er=null;break;case"mousedown":qc=!0;break;case"contextmenu":case"mouseup":case"dragend":qc=!1,Wd(mt,a,ht);break;case"selectionchange":if(Ev)break;case"keydown":case"keyup":Wd(mt,a,ht)}var Yt;if(Gc)t:{switch(e){case"compositionstart":var te="onCompositionStart";break t;case"compositionend":te="onCompositionEnd";break t;case"compositionupdate":te="onCompositionUpdate";break t}te=void 0}else yr?Ld(e,a)&&(te="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(te="onCompositionStart");te&&(wd&&a.locale!=="ko"&&(yr||te!=="onCompositionStart"?te==="onCompositionEnd"&&yr&&(Yt=Td()):(sa=ht,Bc="value"in sa?sa.value:sa.textContent,yr=!0)),pe=Ul(J,te),0<pe.length&&(te=new Rd(te,e,null,a,ht),mt.push({event:te,listeners:pe}),Yt?te.data=Yt:(Yt=Nd(a),Yt!==null&&(te.data=Yt)))),(Yt=dv?pv(e,a):mv(e,a))&&(te=Ul(J,"onBeforeInput"),0<te.length&&(pe=new Rd("onBeforeInput","beforeinput",null,a,ht),mt.push({event:pe,listeners:te}),pe.data=Yt)),rx(mt,e,J,a,ht)}mg(mt,n)})}function so(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Ul(e,n){for(var a=n+"Capture",s=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Ts(e,a),c!=null&&s.unshift(so(e,c,f)),c=Ts(e,n),c!=null&&s.push(so(e,c,f))),e.tag===3)return s;e=e.return}return[]}function Yr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function _g(e,n,a,s,c){for(var f=n._reactName,S=[];a!==null&&a!==s;){var T=a,P=T.alternate,J=T.stateNode;if(T=T.tag,P!==null&&P===s)break;T!==5&&T!==26&&T!==27||J===null||(P=J,c?(J=Ts(a,f),J!=null&&S.unshift(so(a,J,P))):c||(J=Ts(a,f),J!=null&&S.push(so(a,J,P)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var cx=/\r\n?/g,ux=/\u0000|\uFFFD/g;function vg(e){return(typeof e=="string"?e:""+e).replace(cx,`
`).replace(ux,"")}function xg(e,n){return n=vg(n),vg(e)===n}function Ll(){}function Oe(e,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||On(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&On(e,""+s);break;case"className":zt(e,"class",s);break;case"tabIndex":zt(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":zt(e,a,s);break;case"style":Md(e,s,f);break;case"data":if(n!=="object"){zt(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Ho(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Oe(e,n,"name",c.name,c,null),Oe(e,n,"formEncType",c.formEncType,c,null),Oe(e,n,"formMethod",c.formMethod,c,null),Oe(e,n,"formTarget",c.formTarget,c,null)):(Oe(e,n,"encType",c.encType,c,null),Oe(e,n,"method",c.method,c,null),Oe(e,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Ho(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Ll);break;case"onScroll":s!=null&&ve("scroll",e);break;case"onScrollEnd":s!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=Ho(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":ve("beforetoggle",e),ve("toggle",e),wt(e,"popover",s);break;case"xlinkActuate":Lt(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Lt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Lt(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Lt(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Lt(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Lt(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Lt(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Lt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Lt(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":wt(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=H0.get(a)||a,wt(e,a,s))}}function gf(e,n,a,s,c,f){switch(a){case"style":Md(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?On(e,s):(typeof s=="number"||typeof s=="bigint")&&On(e,""+s);break;case"onScroll":s!=null&&ve("scroll",e);break;case"onScrollEnd":s!=null&&ve("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Ll);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Fo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[Ye]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,c);break t}a in e?e[a]=s:s===!0?e.setAttribute(a,""):wt(e,a,s)}}}function yn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Oe(e,n,f,S,a,null)}}c&&Oe(e,n,"srcSet",a.srcSet,a,null),s&&Oe(e,n,"src",a.src,a,null);return;case"input":ve("invalid",e);var T=f=S=c=null,P=null,J=null;for(s in a)if(a.hasOwnProperty(s)){var ht=a[s];if(ht!=null)switch(s){case"name":c=ht;break;case"type":S=ht;break;case"checked":P=ht;break;case"defaultChecked":J=ht;break;case"value":f=ht;break;case"defaultValue":T=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(r(137,n));break;default:Oe(e,n,s,ht,a,null)}}Un(e,f,T,P,J,S,c,!1),ge(e);return;case"select":ve("invalid",e),s=S=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":S=T;break;case"multiple":s=T;default:Oe(e,n,c,T,a,null)}n=f,a=S,e.multiple=!!s,n!=null?Ze(e,!!s,n,!1):a!=null&&Ze(e,!!s,a,!0);return;case"textarea":ve("invalid",e),f=c=s=null;for(S in a)if(a.hasOwnProperty(S)&&(T=a[S],T!=null))switch(S){case"value":s=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Oe(e,n,S,T,a,null)}xr(e,s,c,f),ge(e);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(s=a[P],s!=null))switch(P){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Oe(e,n,P,s,a,null)}return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(s=0;s<ro.length;s++)ve(ro[s],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(s=a[J],s!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Oe(e,n,J,s,a,null)}return;default:if(Uc(n)){for(ht in a)a.hasOwnProperty(ht)&&(s=a[ht],s!==void 0&&gf(e,n,ht,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Oe(e,n,T,s,a,null))}function fx(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,S=null,T=null,P=null,J=null,ht=null;for(at in a){var mt=a[at];if(a.hasOwnProperty(at)&&mt!=null)switch(at){case"checked":break;case"value":break;case"defaultValue":P=mt;default:s.hasOwnProperty(at)||Oe(e,n,at,null,s,mt)}}for(var it in s){var at=s[it];if(mt=a[it],s.hasOwnProperty(it)&&(at!=null||mt!=null))switch(it){case"type":f=at;break;case"name":c=at;break;case"checked":J=at;break;case"defaultChecked":ht=at;break;case"value":S=at;break;case"defaultValue":T=at;break;case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(r(137,n));break;default:at!==mt&&Oe(e,n,it,at,s,mt)}}ze(e,S,T,P,J,ht,f,c);return;case"select":at=S=T=it=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":at=P;default:s.hasOwnProperty(f)||Oe(e,n,f,null,s,P)}for(c in s)if(f=s[c],P=a[c],s.hasOwnProperty(c)&&(f!=null||P!=null))switch(c){case"value":it=f;break;case"defaultValue":T=f;break;case"multiple":S=f;default:f!==P&&Oe(e,n,c,f,s,P)}n=T,a=S,s=at,it!=null?Ze(e,!!a,it,!1):!!s!=!!a&&(n!=null?Ze(e,!!a,n,!0):Ze(e,!!a,a?[]:"",!1));return;case"textarea":at=it=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Oe(e,n,T,null,s,c)}for(S in s)if(c=s[S],f=a[S],s.hasOwnProperty(S)&&(c!=null||f!=null))switch(S){case"value":it=c;break;case"defaultValue":at=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Oe(e,n,S,c,s,f)}xn(e,it,at);return;case"option":for(var ne in a)if(it=a[ne],a.hasOwnProperty(ne)&&it!=null&&!s.hasOwnProperty(ne))switch(ne){case"selected":e.selected=!1;break;default:Oe(e,n,ne,null,s,it)}for(P in s)if(it=s[P],at=a[P],s.hasOwnProperty(P)&&it!==at&&(it!=null||at!=null))switch(P){case"selected":e.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:Oe(e,n,P,it,s,at)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in a)it=a[Jt],a.hasOwnProperty(Jt)&&it!=null&&!s.hasOwnProperty(Jt)&&Oe(e,n,Jt,null,s,it);for(J in s)if(it=s[J],at=a[J],s.hasOwnProperty(J)&&it!==at&&(it!=null||at!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:Oe(e,n,J,it,s,at)}return;default:if(Uc(n)){for(var Pe in a)it=a[Pe],a.hasOwnProperty(Pe)&&it!==void 0&&!s.hasOwnProperty(Pe)&&gf(e,n,Pe,void 0,s,it);for(ht in s)it=s[ht],at=a[ht],!s.hasOwnProperty(ht)||it===at||it===void 0&&at===void 0||gf(e,n,ht,it,s,at);return}}for(var q in a)it=a[q],a.hasOwnProperty(q)&&it!=null&&!s.hasOwnProperty(q)&&Oe(e,n,q,null,s,it);for(mt in s)it=s[mt],at=a[mt],!s.hasOwnProperty(mt)||it===at||it==null&&at==null||Oe(e,n,mt,it,s,at)}var _f=null,vf=null;function Nl(e){return e.nodeType===9?e:e.ownerDocument}function Sg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Mg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function xf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Sf=null;function hx(){var e=window.event;return e&&e.type==="popstate"?e===Sf?!1:(Sf=e,!0):(Sf=null,!1)}var yg=typeof setTimeout=="function"?setTimeout:void 0,dx=typeof clearTimeout=="function"?clearTimeout:void 0,Eg=typeof Promise=="function"?Promise:void 0,px=typeof queueMicrotask=="function"?queueMicrotask:typeof Eg<"u"?function(e){return Eg.resolve(null).then(e).catch(mx)}:yg;function mx(e){setTimeout(function(){throw e})}function ya(e){return e==="head"}function Tg(e,n){var a=n,s=0,c=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<s&&8>s){a=s;var S=e.ownerDocument;if(a&1&&oo(S.documentElement),a&2&&oo(S.body),a&4)for(a=S.head,oo(a),S=a.firstChild;S;){var T=S.nextSibling,P=S.nodeName;S[Mi]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=T}}if(c===0){e.removeChild(f),go(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:s=a.charCodeAt(0)-48;else s=0;a=f}while(a);go(n)}function Mf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Mf(a),vr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function gx(e,n,a,s){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Mi])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=hi(e.nextSibling),e===null)break}return null}function _x(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=hi(e.nextSibling),e===null))return null;return e}function yf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function vx(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function hi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Ef=null;function bg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function Ag(e,n,a){switch(n=Nl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function oo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);vr(e)}var ai=new Map,Rg=new Set;function Ol(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Zi=K.d;K.d={f:xx,r:Sx,D:Mx,C:yx,L:Ex,m:Tx,X:Ax,S:bx,M:Rx};function xx(){var e=Zi.f(),n=bl();return e||n}function Sx(e){var n=aa(e);n!==null&&n.tag===5&&n.type==="form"?Yp(n):Zi.r(e)}var Zr=typeof document>"u"?null:document;function Cg(e,n,a){var s=Zr;if(s&&typeof n=="string"&&n){var c=pn(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Rg.has(c)||(Rg.add(c),e={rel:e,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),yn(n,"link",e),nn(n),s.head.appendChild(n)))}}function Mx(e){Zi.D(e),Cg("dns-prefetch",e,null)}function yx(e,n){Zi.C(e,n),Cg("preconnect",e,n)}function Ex(e,n,a){Zi.L(e,n,a);var s=Zr;if(s&&e&&n){var c='link[rel="preload"][as="'+pn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+pn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+pn(a.imageSizes)+'"]')):c+='[href="'+pn(e)+'"]';var f=c;switch(n){case"style":f=jr(e);break;case"script":f=Kr(e)}ai.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ai.set(f,e),s.querySelector(c)!==null||n==="style"&&s.querySelector(lo(f))||n==="script"&&s.querySelector(co(f))||(n=s.createElement("link"),yn(n,"link",e),nn(n),s.head.appendChild(n)))}}function Tx(e,n){Zi.m(e,n);var a=Zr;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+pn(s)+'"][href="'+pn(e)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Kr(e)}if(!ai.has(f)&&(e=g({rel:"modulepreload",href:e},n),ai.set(f,e),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(co(f)))return}s=a.createElement("link"),yn(s,"link",e),nn(s),a.head.appendChild(s)}}}function bx(e,n,a){Zi.S(e,n,a);var s=Zr;if(s&&e){var c=ra(s).hoistableStyles,f=jr(e);n=n||"default";var S=c.get(f);if(!S){var T={loading:0,preload:null};if(S=s.querySelector(lo(f)))T.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ai.get(f))&&Tf(e,a);var P=S=s.createElement("link");nn(P),yn(P,"link",e),P._p=new Promise(function(J,ht){P.onload=J,P.onerror=ht}),P.addEventListener("load",function(){T.loading|=1}),P.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Pl(S,n,s)}S={type:"stylesheet",instance:S,count:1,state:T},c.set(f,S)}}}function Ax(e,n){Zi.X(e,n);var a=Zr;if(a&&e){var s=ra(a).hoistableScripts,c=Kr(e),f=s.get(c);f||(f=a.querySelector(co(c)),f||(e=g({src:e,async:!0},n),(n=ai.get(c))&&bf(e,n),f=a.createElement("script"),nn(f),yn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Rx(e,n){Zi.M(e,n);var a=Zr;if(a&&e){var s=ra(a).hoistableScripts,c=Kr(e),f=s.get(c);f||(f=a.querySelector(co(c)),f||(e=g({src:e,async:!0,type:"module"},n),(n=ai.get(c))&&bf(e,n),f=a.createElement("script"),nn(f),yn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function wg(e,n,a,s){var c=(c=et.current)?Ol(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=jr(a.href),a=ra(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=jr(a.href);var f=ra(c).hoistableStyles,S=f.get(e);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=c.querySelector(lo(e)))&&!f._p&&(S.instance=f,S.state.loading=5),ai.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ai.set(e,a),f||Cx(c,e,a,S.state))),n&&s===null)throw Error(r(528,""));return S}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Kr(a),a=ra(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function jr(e){return'href="'+pn(e)+'"'}function lo(e){return'link[rel="stylesheet"]['+e+"]"}function Dg(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function Cx(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),yn(n,"link",a),nn(n),e.head.appendChild(n))}function Kr(e){return'[src="'+pn(e)+'"]'}function co(e){return"script[async]"+e}function Ug(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+pn(a.href)+'"]');if(s)return n.instance=s,nn(s),s;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),nn(s),yn(s,"style",c),Pl(s,a.precedence,e),n.instance=s;case"stylesheet":c=jr(a.href);var f=e.querySelector(lo(c));if(f)return n.state.loading|=4,n.instance=f,nn(f),f;s=Dg(a),(c=ai.get(c))&&Tf(s,c),f=(e.ownerDocument||e).createElement("link"),nn(f);var S=f;return S._p=new Promise(function(T,P){S.onload=T,S.onerror=P}),yn(f,"link",s),n.state.loading|=4,Pl(f,a.precedence,e),n.instance=f;case"script":return f=Kr(a.src),(c=e.querySelector(co(f)))?(n.instance=c,nn(c),c):(s=a,(c=ai.get(f))&&(s=g({},a),bf(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),nn(c),yn(c,"link",s),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Pl(s,a.precedence,e));return n.instance}function Pl(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,S=0;S<s.length;S++){var T=s[S];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Tf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function bf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Bl=null;function Lg(e,n,a){if(Bl===null){var s=new Map,c=Bl=new Map;c.set(a,s)}else c=Bl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[Mi]||f[ln]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var T=s.get(S);T?T.push(f):s.set(S,[f])}}return s}function Ng(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function wx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Og(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var uo=null;function Dx(){}function Ux(e,n,a){if(uo===null)throw Error(r(475));var s=uo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=jr(a.href),f=e.querySelector(lo(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(s.count++,s=zl.bind(s),e.then(s,s)),n.state.loading|=4,n.instance=f,nn(f);return}f=e.ownerDocument||e,a=Dg(a),(c=ai.get(c))&&Tf(a,c),f=f.createElement("link"),nn(f);var S=f;S._p=new Promise(function(T,P){S.onload=T,S.onerror=P}),yn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=zl.bind(s),e.addEventListener("load",n),e.addEventListener("error",n))}}function Lx(){if(uo===null)throw Error(r(475));var e=uo;return e.stylesheets&&e.count===0&&Af(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Af(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function zl(){if(this.count--,this.count===0){if(this.stylesheets)Af(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Il=null;function Af(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Il=new Map,n.forEach(Nx,e),Il=null,zl.call(e))}function Nx(e,n){if(!(n.state.loading&4)){var a=Il.get(e);if(a)var s=a.get(null);else{a=new Map,Il.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var S=c[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),s=S)}s&&a.set(null,s)}c=n.instance,S=c.getAttribute("data-precedence"),f=a.get(S)||s,f===s&&a.set(null,c),a.set(S,c),this.count++,s=zl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var fo={$$typeof:O,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function Ox(e,n,a,s,c,f,S,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rt(0),this.hiddenUpdates=Rt(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function Pg(e,n,a,s,c,f,S,T,P,J,ht,mt){return e=new Ox(e,n,a,S,T,P,J,mt),n=1,f===!0&&(n|=24),f=Xn(3,null,null,n),e.current=f,f.stateNode=e,n=su(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},uu(f),e}function Bg(e){return e?(e=Rr,e):Rr}function zg(e,n,a,s,c,f){c=Bg(c),s.context===null?s.context=c:s.pendingContext=c,s=ca(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=ua(e,s,n),a!==null&&(jn(a,e,n),Gs(a,e,n))}function Ig(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Rf(e,n){Ig(e,n),(e=e.alternate)&&Ig(e,n)}function Fg(e){if(e.tag===13){var n=Ar(e,67108864);n!==null&&jn(n,e,67108864),Rf(e,67108864)}}var Fl=!0;function Px(e,n,a,s){var c=N.T;N.T=null;var f=K.p;try{K.p=2,Cf(e,n,a,s)}finally{K.p=f,N.T=c}}function Bx(e,n,a,s){var c=N.T;N.T=null;var f=K.p;try{K.p=8,Cf(e,n,a,s)}finally{K.p=f,N.T=c}}function Cf(e,n,a,s){if(Fl){var c=wf(s);if(c===null)mf(e,n,s,Hl,a),Gg(e,s);else if(Ix(c,e,n,a,s))s.stopPropagation();else if(Gg(e,s),n&4&&-1<zx.indexOf(e)){for(;c!==null;){var f=aa(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Zt(f.pendingLanes);if(S!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;S;){var P=1<<31-Pt(S);T.entanglements[1]|=P,S&=~P}Ai(f),(we&6)===0&&(El=Ot()+500,ao(0))}}break;case 13:T=Ar(f,2),T!==null&&jn(T,f,2),bl(),Rf(f,2)}if(f=wf(s),f===null&&mf(e,n,s,Hl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else mf(e,n,s,null,a)}}function wf(e){return e=Nc(e),Df(e)}var Hl=null;function Df(e){if(Hl=null,e=Oi(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Hl=e,null}function Hg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Fe()){case Gt:return 2;case re:return 8;case Xe:case We:return 32;case L:return 268435456;default:return 32}default:return 32}}var Uf=!1,Ea=null,Ta=null,ba=null,ho=new Map,po=new Map,Aa=[],zx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Gg(e,n){switch(e){case"focusin":case"focusout":Ea=null;break;case"dragenter":case"dragleave":Ta=null;break;case"mouseover":case"mouseout":ba=null;break;case"pointerover":case"pointerout":ho.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":po.delete(n.pointerId)}}function mo(e,n,a,s,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=aa(n),n!==null&&Fg(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function Ix(e,n,a,s,c){switch(n){case"focusin":return Ea=mo(Ea,e,n,a,s,c),!0;case"dragenter":return Ta=mo(Ta,e,n,a,s,c),!0;case"mouseover":return ba=mo(ba,e,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return ho.set(f,mo(ho.get(f)||null,e,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,po.set(f,mo(po.get(f)||null,e,n,a,s,c)),!0}return!1}function Vg(e){var n=Oi(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,li(e.priority,function(){if(a.tag===13){var s=Zn();s=ie(s);var c=Ar(a,s);c!==null&&jn(c,a,s),Rf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=wf(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Lc=s,a.target.dispatchEvent(s),Lc=null}else return n=aa(a),n!==null&&Fg(n),e.blockedOn=a,!1;n.shift()}return!0}function kg(e,n,a){Gl(e)&&a.delete(n)}function Fx(){Uf=!1,Ea!==null&&Gl(Ea)&&(Ea=null),Ta!==null&&Gl(Ta)&&(Ta=null),ba!==null&&Gl(ba)&&(ba=null),ho.forEach(kg),po.forEach(kg)}function Vl(e,n){e.blockedOn===n&&(e.blockedOn=null,Uf||(Uf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Fx)))}var kl=null;function Xg(e){kl!==e&&(kl=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){kl===e&&(kl=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],c=e[n+2];if(typeof s!="function"){if(Df(s||a)===null)continue;break}var f=aa(a);f!==null&&(e.splice(n,3),n-=3,wu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function go(e){function n(P){return Vl(P,e)}Ea!==null&&Vl(Ea,e),Ta!==null&&Vl(Ta,e),ba!==null&&Vl(ba,e),ho.forEach(n),po.forEach(n);for(var a=0;a<Aa.length;a++){var s=Aa[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Aa.length&&(a=Aa[0],a.blockedOn===null);)Vg(a),a.blockedOn===null&&Aa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],S=c[Ye]||null;if(typeof f=="function")S||Xg(a);else if(S){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,S=f[Ye]||null)T=S.formAction;else if(Df(c)!==null)continue}else T=S.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),Xg(a)}}}function Lf(e){this._internalRoot=e}Xl.prototype.render=Lf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Zn();zg(a,s,e,n,null,null)},Xl.prototype.unmount=Lf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;zg(e.current,2,null,e,null,null),bl(),n[Si]=null}};function Xl(e){this._internalRoot=e}Xl.prototype.unstable_scheduleHydration=function(e){if(e){var n=ye();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Aa.length&&n!==0&&n<Aa[a].priority;a++);Aa.splice(a,0,e),a===0&&Vg(e)}};var Wg=t.version;if(Wg!=="19.1.1")throw Error(r(527,Wg,"19.1.1"));K.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var Hx={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wl.isDisabled&&Wl.supportsFiber)try{ut=Wl.inject(Hx),pt=Wl}catch{}}return vo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",c=om,f=lm,S=cm,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=Pg(e,1,!1,null,null,a,s,c,f,S,T,null),e[Si]=n.current,pf(e),new Lf(n)},vo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,c="",f=om,S=lm,T=cm,P=null,J=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(P=a.unstable_transitionCallbacks),a.formState!==void 0&&(J=a.formState)),n=Pg(e,1,!0,n,a??null,s,c,f,S,T,P,J),n.context=Bg(null),a=n.current,s=Zn(),s=ie(s),c=ca(s),c.callback=null,ua(a,c,s),a=s,n.current.lanes=a,Bt(n,a),Ai(n),e[Si]=n.current,pf(e),new Xl(n)},vo.version="19.1.1",vo}var e_;function Kx(){if(e_)return Pf.exports;e_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Pf.exports=jx(),Pf.exports}var Qx=Kx();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ld="180",Jx=0,n_=1,$x=2,i0=1,a0=2,ta=3,za=0,Hn=1,ea=2,Pa=0,hs=1,i_=2,a_=3,r_=4,tS=5,ur=100,eS=101,nS=102,iS=103,aS=104,rS=200,sS=201,oS=202,lS=203,vh=204,xh=205,cS=206,uS=207,fS=208,hS=209,dS=210,pS=211,mS=212,gS=213,_S=214,Sh=0,Mh=1,yh=2,ps=3,Eh=4,Th=5,bh=6,Ah=7,r0=0,vS=1,xS=2,Ba=0,SS=1,MS=2,yS=3,ES=4,TS=5,bS=6,AS=7,s0=300,ms=301,gs=302,Rh=303,Ch=304,Cc=306,wh=1e3,hr=1001,Dh=1002,vi=1003,RS=1004,ql=1005,Ci=1006,Ff=1007,dr=1008,Li=1009,o0=1010,l0=1011,Ao=1012,cd=1013,pr=1014,na=1015,Lo=1016,ud=1017,fd=1018,Ro=1020,c0=35902,u0=35899,f0=1021,h0=1022,_i=1023,Co=1026,wo=1027,d0=1028,hd=1029,p0=1030,dd=1031,pd=1033,vc=33776,xc=33777,Sc=33778,Mc=33779,Uh=35840,Lh=35841,Nh=35842,Oh=35843,Ph=36196,Bh=37492,zh=37496,Ih=37808,Fh=37809,Hh=37810,Gh=37811,Vh=37812,kh=37813,Xh=37814,Wh=37815,qh=37816,Yh=37817,Zh=37818,jh=37819,Kh=37820,Qh=37821,Jh=36492,$h=36494,td=36495,ed=36283,nd=36284,id=36285,ad=36286,CS=3200,wS=3201,m0=0,DS=1,Oa="",si="srgb",_s="srgb-linear",Ec="linear",Be="srgb",Qr=7680,s_=519,US=512,LS=513,NS=514,g0=515,OS=516,PS=517,BS=518,zS=519,o_=35044,l_="300 es",wi=2e3,Tc=2001;class Ss{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hf=Math.PI/180,rd=180/Math.PI;function No(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Cn[o&255]+Cn[o>>8&255]+Cn[o>>16&255]+Cn[o>>24&255]+"-"+Cn[t&255]+Cn[t>>8&255]+"-"+Cn[t>>16&15|64]+Cn[t>>24&255]+"-"+Cn[i&63|128]+Cn[i>>8&255]+"-"+Cn[i>>16&255]+Cn[i>>24&255]+Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]).toLowerCase()}function Se(o,t,i){return Math.max(t,Math.min(i,o))}function IS(o,t){return(o%t+t)%t}function Gf(o,t,i){return(1-i)*o+i*t}function xo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Fn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ae{constructor(t=0,i=0){Ae.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Se(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*r-h*l+t.x,this.y=u*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,h,d){let m=r[l+0],p=r[l+1],g=r[l+2],v=r[l+3];const x=u[h+0],y=u[h+1],b=u[h+2],R=u[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v;return}if(d===1){t[i+0]=x,t[i+1]=y,t[i+2]=b,t[i+3]=R;return}if(v!==R||m!==x||p!==y||g!==b){let M=1-d;const _=m*x+p*y+g*b+v*R,F=_>=0?1:-1,O=1-_*_;if(O>Number.EPSILON){const B=Math.sqrt(O),H=Math.atan2(B,_*F);M=Math.sin(M*H)/B,d=Math.sin(d*H)/B}const D=d*F;if(m=m*M+x*D,p=p*M+y*D,g=g*M+b*D,v=v*M+R*D,M===1-d){const B=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=B,p*=B,g*=B,v*=B}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v}static multiplyQuaternionsFlat(t,i,r,l,u,h){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],v=u[h],x=u[h+1],y=u[h+2],b=u[h+3];return t[i]=d*b+g*v+m*y-p*x,t[i+1]=m*b+g*x+p*v-d*y,t[i+2]=p*b+g*y+d*x-m*v,t[i+3]=g*b-d*v-m*x-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),v=d(u/2),x=m(r/2),y=m(l/2),b=m(u/2);switch(h){case"XYZ":this._x=x*g*v+p*y*b,this._y=p*y*v-x*g*b,this._z=p*g*b+x*y*v,this._w=p*g*v-x*y*b;break;case"YXZ":this._x=x*g*v+p*y*b,this._y=p*y*v-x*g*b,this._z=p*g*b-x*y*v,this._w=p*g*v+x*y*b;break;case"ZXY":this._x=x*g*v-p*y*b,this._y=p*y*v+x*g*b,this._z=p*g*b+x*y*v,this._w=p*g*v-x*y*b;break;case"ZYX":this._x=x*g*v-p*y*b,this._y=p*y*v+x*g*b,this._z=p*g*b-x*y*v,this._w=p*g*v+x*y*b;break;case"YZX":this._x=x*g*v+p*y*b,this._y=p*y*v+x*g*b,this._z=p*g*b-x*y*v,this._w=p*g*v-x*y*b;break;case"XZY":this._x=x*g*v-p*y*b,this._y=p*y*v-x*g*b,this._z=p*g*b+x*y*v,this._w=p*g*v+x*y*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],v=i[10],x=r+d+v;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(g-m)*y,this._y=(u-p)*y,this._z=(h-l)*y}else if(r>d&&r>v){const y=2*Math.sqrt(1+r-d-v);this._w=(g-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(u+p)/y}else if(d>v){const y=2*Math.sqrt(1+d-r-v);this._w=(u-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+v-r-d);this._w=(h-l)/y,this._x=(u+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+h*d+l*p-u*m,this._y=l*g+h*m+u*d-r*p,this._z=u*g+h*p+r*m-l*d,this._w=h*g-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*t._w+r*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const y=1-i;return this._w=y*h+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),v=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=h*v+this._w*x,this._x=r*v+this._x*x,this._y=l*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class nt{constructor(t=0,i=0,r=0){nt.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(c_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(c_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*r),g=2*(d*i-u*l),v=2*(u*r-h*i);return this.x=i+m*p+h*v-d*g,this.y=r+m*g+d*p-u*v,this.z=l+m*v+u*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this.z=Se(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this.z=Se(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-r*m,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Vf.copy(this).projectOnVector(t),this.sub(Vf)}reflect(t){return this.sub(Vf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Se(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vf=new nt,c_=new Oo;class le{constructor(t,i,r,l,u,h,d,m,p){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,m,p)}set(t,i,r,l,u,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=r,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],g=r[4],v=r[7],x=r[2],y=r[5],b=r[8],R=l[0],M=l[3],_=l[6],F=l[1],O=l[4],D=l[7],B=l[2],H=l[5],I=l[8];return u[0]=h*R+d*F+m*B,u[3]=h*M+d*O+m*H,u[6]=h*_+d*D+m*I,u[1]=p*R+g*F+v*B,u[4]=p*M+g*O+v*H,u[7]=p*_+g*D+v*I,u[2]=x*R+y*F+b*B,u[5]=x*M+y*O+b*H,u[8]=x*_+y*D+b*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-r*u*g+r*d*m+l*u*p-l*h*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],v=g*h-d*p,x=d*m-g*u,y=p*u-h*m,b=i*v+r*x+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return t[0]=v*R,t[1]=(l*p-g*r)*R,t[2]=(d*r-l*h)*R,t[3]=x*R,t[4]=(g*i-l*m)*R,t[5]=(l*u-d*i)*R,t[6]=y*R,t[7]=(r*m-p*i)*R,t[8]=(h*i-r*u)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(kf.makeScale(t,i)),this}rotate(t){return this.premultiply(kf.makeRotation(-t)),this}translate(t,i){return this.premultiply(kf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const kf=new le;function _0(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function bc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function FS(){const o=bc("canvas");return o.style.display="block",o}const u_={};function Do(o){o in u_||(u_[o]=!0,console.warn(o))}function HS(o,t,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const f_=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),h_=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function GS(){const o={enabled:!0,workingColorSpace:_s,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Be&&(l.r=ia(l.r),l.g=ia(l.g),l.b=ia(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Be&&(l.r=ds(l.r),l.g=ds(l.g),l.b=ds(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Oa?Ec:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Do("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Do("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[_s]:{primaries:t,whitePoint:r,transfer:Ec,toXYZ:f_,fromXYZ:h_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:t,whitePoint:r,transfer:Be,toXYZ:f_,fromXYZ:h_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),o}const be=GS();function ia(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ds(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Jr;class VS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{Jr===void 0&&(Jr=bc("canvas")),Jr.width=t.width,Jr.height=t.height;const l=Jr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=Jr}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=bc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=ia(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ia(i[r]/255)*255):i[r]=ia(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let kS=0;class md{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=No(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Xf(l[h].image)):u.push(Xf(l[h]))}else u=Xf(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function Xf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?VS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let XS=0;const Wf=new nt;class Gn extends Ss{constructor(t=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,r=hr,l=hr,u=Ci,h=dr,d=_i,m=Li,p=Gn.DEFAULT_ANISOTROPY,g=Oa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:XS++}),this.uuid=No(),this.name="",this.source=new md(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Wf).x}get height(){return this.source.getSize(Wf).y}get depth(){return this.source.getSize(Wf).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==s0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wh:t.x=t.x-Math.floor(t.x);break;case hr:t.x=t.x<0?0:1;break;case Dh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wh:t.y=t.y-Math.floor(t.y);break;case hr:t.y=t.y<0?0:1;break;case Dh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=s0;Gn.DEFAULT_ANISOTROPY=1;class Qe{constructor(t=0,i=0,r=0,l=1){Qe.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const m=t.elements,p=m[0],g=m[4],v=m[8],x=m[1],y=m[5],b=m[9],R=m[2],M=m[6],_=m[10];if(Math.abs(g-x)<.01&&Math.abs(v-R)<.01&&Math.abs(b-M)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+R)<.1&&Math.abs(b+M)<.1&&Math.abs(p+y+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,D=(y+1)/2,B=(_+1)/2,H=(g+x)/4,I=(v+R)/4,X=(b+M)/4;return O>D&&O>B?O<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(O),l=H/r,u=I/r):D>B?D<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),r=H/l,u=X/l):B<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(B),r=I/u,l=X/u),this.set(r,l,u,i),this}let F=Math.sqrt((M-b)*(M-b)+(v-R)*(v-R)+(x-g)*(x-g));return Math.abs(F)<.001&&(F=1),this.x=(M-b)/F,this.y=(v-R)/F,this.z=(x-g)/F,this.w=Math.acos((p+y+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this.z=Se(this.z,t.z,i.z),this.w=Se(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this.z=Se(this.z,t,i),this.w=Se(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class WS extends Ss{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new Qe(0,0,t,i),this.scissorTest=!1,this.viewport=new Qe(0,0,t,i);const l={width:t,height:i,depth:r.depth},u=new Gn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Ci,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new md(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mr extends WS{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class v0 extends Gn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=vi,this.minFilter=vi,this.wrapR=hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class qS extends Gn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=vi,this.minFilter=vi,this.wrapR=hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Po{constructor(t=new nt(1/0,1/0,1/0),i=new nt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(di.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(di.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=di.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,di):di.fromBufferAttribute(u,h),di.applyMatrix4(t.matrixWorld),this.expandByPoint(di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Yl.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Yl.copy(r.boundingBox)),Yl.applyMatrix4(t.matrixWorld),this.union(Yl)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,di),di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(So),Zl.subVectors(this.max,So),$r.subVectors(t.a,So),ts.subVectors(t.b,So),es.subVectors(t.c,So),Ca.subVectors(ts,$r),wa.subVectors(es,ts),nr.subVectors($r,es);let i=[0,-Ca.z,Ca.y,0,-wa.z,wa.y,0,-nr.z,nr.y,Ca.z,0,-Ca.x,wa.z,0,-wa.x,nr.z,0,-nr.x,-Ca.y,Ca.x,0,-wa.y,wa.x,0,-nr.y,nr.x,0];return!qf(i,$r,ts,es,Zl)||(i=[1,0,0,0,1,0,0,0,1],!qf(i,$r,ts,es,Zl))?!1:(jl.crossVectors(Ca,wa),i=[jl.x,jl.y,jl.z],qf(i,$r,ts,es,Zl))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ji),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ji=[new nt,new nt,new nt,new nt,new nt,new nt,new nt,new nt],di=new nt,Yl=new Po,$r=new nt,ts=new nt,es=new nt,Ca=new nt,wa=new nt,nr=new nt,So=new nt,Zl=new nt,jl=new nt,ir=new nt;function qf(o,t,i,r,l){for(let u=0,h=o.length-3;u<=h;u+=3){ir.fromArray(o,u);const d=l.x*Math.abs(ir.x)+l.y*Math.abs(ir.y)+l.z*Math.abs(ir.z),m=t.dot(ir),p=i.dot(ir),g=r.dot(ir);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const YS=new Po,Mo=new nt,Yf=new nt;class wc{constructor(t=new nt,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):YS.setFromPoints(t).getCenter(r);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Mo.subVectors(t,this.center);const i=Mo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Mo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Mo.copy(t.center).add(Yf)),this.expandByPoint(Mo.copy(t.center).sub(Yf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ki=new nt,Zf=new nt,Kl=new nt,Da=new nt,jf=new nt,Ql=new nt,Kf=new nt;class x0{constructor(t=new nt,i=new nt(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ki)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ki.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ki.copy(this.origin).addScaledVector(this.direction,i),Ki.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Zf.copy(t).add(i).multiplyScalar(.5),Kl.copy(i).sub(t).normalize(),Da.copy(this.origin).sub(Zf);const u=t.distanceTo(i)*.5,h=-this.direction.dot(Kl),d=Da.dot(this.direction),m=-Da.dot(Kl),p=Da.lengthSq(),g=Math.abs(1-h*h);let v,x,y,b;if(g>0)if(v=h*m-d,x=h*d-m,b=u*g,v>=0)if(x>=-b)if(x<=b){const R=1/g;v*=R,x*=R,y=v*(v+h*x+2*d)+x*(h*v+x+2*m)+p}else x=u,v=Math.max(0,-(h*x+d)),y=-v*v+x*(x+2*m)+p;else x=-u,v=Math.max(0,-(h*x+d)),y=-v*v+x*(x+2*m)+p;else x<=-b?(v=Math.max(0,-(-h*u+d)),x=v>0?-u:Math.min(Math.max(-u,-m),u),y=-v*v+x*(x+2*m)+p):x<=b?(v=0,x=Math.min(Math.max(-u,-m),u),y=x*(x+2*m)+p):(v=Math.max(0,-(h*u+d)),x=v>0?u:Math.min(Math.max(-u,-m),u),y=-v*v+x*(x+2*m)+p);else x=h>0?-u:u,v=Math.max(0,-(h*x+d)),y=-v*v+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Zf).addScaledVector(Kl,x),y}intersectSphere(t,i){Ki.subVectors(t.center,this.origin);const r=Ki.dot(this.direction),l=Ki.dot(Ki)-r*r,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(r=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(r=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),g>=0?(u=(t.min.y-x.y)*g,h=(t.max.y-x.y)*g):(u=(t.max.y-x.y)*g,h=(t.min.y-x.y)*g),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),v>=0?(d=(t.min.z-x.z)*v,m=(t.max.z-x.z)*v):(d=(t.max.z-x.z)*v,m=(t.min.z-x.z)*v),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,Ki)!==null}intersectTriangle(t,i,r,l,u){jf.subVectors(i,t),Ql.subVectors(r,t),Kf.crossVectors(jf,Ql);let h=this.direction.dot(Kf),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Da.subVectors(this.origin,t);const m=d*this.direction.dot(Ql.crossVectors(Da,Ql));if(m<0)return null;const p=d*this.direction.dot(jf.cross(Da));if(p<0||m+p>h)return null;const g=-d*Da.dot(Kf);return g<0?null:this.at(g/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(t,i,r,l,u,h,d,m,p,g,v,x,y,b,R,M){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,m,p,g,v,x,y,b,R,M)}set(t,i,r,l,u,h,d,m,p,g,v,x,y,b,R,M){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=x,_[3]=y,_[7]=b,_[11]=R,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/ns.setFromMatrixColumn(t,0).length(),u=1/ns.setFromMatrixColumn(t,1).length(),h=1/ns.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),v=Math.sin(u);if(t.order==="XYZ"){const x=h*g,y=h*v,b=d*g,R=d*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=y+b*p,i[5]=x-R*p,i[9]=-d*m,i[2]=R-x*p,i[6]=b+y*p,i[10]=h*m}else if(t.order==="YXZ"){const x=m*g,y=m*v,b=p*g,R=p*v;i[0]=x+R*d,i[4]=b*d-y,i[8]=h*p,i[1]=h*v,i[5]=h*g,i[9]=-d,i[2]=y*d-b,i[6]=R+x*d,i[10]=h*m}else if(t.order==="ZXY"){const x=m*g,y=m*v,b=p*g,R=p*v;i[0]=x-R*d,i[4]=-h*v,i[8]=b+y*d,i[1]=y+b*d,i[5]=h*g,i[9]=R-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const x=h*g,y=h*v,b=d*g,R=d*v;i[0]=m*g,i[4]=b*p-y,i[8]=x*p+R,i[1]=m*v,i[5]=R*p+x,i[9]=y*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const x=h*m,y=h*p,b=d*m,R=d*p;i[0]=m*g,i[4]=R-x*v,i[8]=b*v+y,i[1]=v,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=y*v+b,i[10]=x-R*v}else if(t.order==="XZY"){const x=h*m,y=h*p,b=d*m,R=d*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=x*v+R,i[5]=h*g,i[9]=y*v-b,i[2]=b*v-y,i[6]=d*g,i[10]=R*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ZS,t,jS)}lookAt(t,i,r){const l=this.elements;return Kn.subVectors(t,i),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Ua.crossVectors(r,Kn),Ua.lengthSq()===0&&(Math.abs(r.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Ua.crossVectors(r,Kn)),Ua.normalize(),Jl.crossVectors(Kn,Ua),l[0]=Ua.x,l[4]=Jl.x,l[8]=Kn.x,l[1]=Ua.y,l[5]=Jl.y,l[9]=Kn.y,l[2]=Ua.z,l[6]=Jl.z,l[10]=Kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],g=r[1],v=r[5],x=r[9],y=r[13],b=r[2],R=r[6],M=r[10],_=r[14],F=r[3],O=r[7],D=r[11],B=r[15],H=l[0],I=l[4],X=l[8],w=l[12],C=l[1],G=l[5],Z=l[9],rt=l[13],ft=l[2],lt=l[6],N=l[10],K=l[14],Y=l[3],xt=l[7],U=l[11],$=l[15];return u[0]=h*H+d*C+m*ft+p*Y,u[4]=h*I+d*G+m*lt+p*xt,u[8]=h*X+d*Z+m*N+p*U,u[12]=h*w+d*rt+m*K+p*$,u[1]=g*H+v*C+x*ft+y*Y,u[5]=g*I+v*G+x*lt+y*xt,u[9]=g*X+v*Z+x*N+y*U,u[13]=g*w+v*rt+x*K+y*$,u[2]=b*H+R*C+M*ft+_*Y,u[6]=b*I+R*G+M*lt+_*xt,u[10]=b*X+R*Z+M*N+_*U,u[14]=b*w+R*rt+M*K+_*$,u[3]=F*H+O*C+D*ft+B*Y,u[7]=F*I+O*G+D*lt+B*xt,u[11]=F*X+O*Z+D*N+B*U,u[15]=F*w+O*rt+D*K+B*$,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],v=t[6],x=t[10],y=t[14],b=t[3],R=t[7],M=t[11],_=t[15];return b*(+u*m*v-l*p*v-u*d*x+r*p*x+l*d*y-r*m*y)+R*(+i*m*y-i*p*x+u*h*x-l*h*y+l*p*g-u*m*g)+M*(+i*p*v-i*d*y-u*h*v+r*h*y+u*d*g-r*p*g)+_*(-l*d*g-i*m*v+i*d*x+l*h*v-r*h*x+r*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],v=t[9],x=t[10],y=t[11],b=t[12],R=t[13],M=t[14],_=t[15],F=v*M*p-R*x*p+R*m*y-d*M*y-v*m*_+d*x*_,O=b*x*p-g*M*p-b*m*y+h*M*y+g*m*_-h*x*_,D=g*R*p-b*v*p+b*d*y-h*R*y-g*d*_+h*v*_,B=b*v*m-g*R*m-b*d*x+h*R*x+g*d*M-h*v*M,H=i*F+r*O+l*D+u*B;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/H;return t[0]=F*I,t[1]=(R*x*u-v*M*u-R*l*y+r*M*y+v*l*_-r*x*_)*I,t[2]=(d*M*u-R*m*u+R*l*p-r*M*p-d*l*_+r*m*_)*I,t[3]=(v*m*u-d*x*u-v*l*p+r*x*p+d*l*y-r*m*y)*I,t[4]=O*I,t[5]=(g*M*u-b*x*u+b*l*y-i*M*y-g*l*_+i*x*_)*I,t[6]=(b*m*u-h*M*u-b*l*p+i*M*p+h*l*_-i*m*_)*I,t[7]=(h*x*u-g*m*u+g*l*p-i*x*p-h*l*y+i*m*y)*I,t[8]=D*I,t[9]=(b*v*u-g*R*u-b*r*y+i*R*y+g*r*_-i*v*_)*I,t[10]=(h*R*u-b*d*u+b*r*p-i*R*p-h*r*_+i*d*_)*I,t[11]=(g*d*u-h*v*u-g*r*p+i*v*p+h*r*y-i*d*y)*I,t[12]=B*I,t[13]=(g*R*l-b*v*l+b*r*x-i*R*x-g*r*M+i*v*M)*I,t[14]=(b*d*l-h*R*l-b*r*m+i*R*m+h*r*M-i*d*M)*I,t[15]=(h*v*l-g*d*l+g*r*m-i*v*m-h*r*x+i*d*x)*I,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=t.x,d=t.y,m=t.z,p=u*h,g=u*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*h,0,p*m-l*d,g*m+l*h,u*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,h){return this.set(1,r,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,g=h+h,v=d+d,x=u*p,y=u*g,b=u*v,R=h*g,M=h*v,_=d*v,F=m*p,O=m*g,D=m*v,B=r.x,H=r.y,I=r.z;return l[0]=(1-(R+_))*B,l[1]=(y+D)*B,l[2]=(b-O)*B,l[3]=0,l[4]=(y-D)*H,l[5]=(1-(x+_))*H,l[6]=(M+F)*H,l[7]=0,l[8]=(b+O)*I,l[9]=(M-F)*I,l[10]=(1-(x+R))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=ns.set(l[0],l[1],l[2]).length();const h=ns.set(l[4],l[5],l[6]).length(),d=ns.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],pi.copy(this);const p=1/u,g=1/h,v=1/d;return pi.elements[0]*=p,pi.elements[1]*=p,pi.elements[2]*=p,pi.elements[4]*=g,pi.elements[5]*=g,pi.elements[6]*=g,pi.elements[8]*=v,pi.elements[9]*=v,pi.elements[10]*=v,i.setFromRotationMatrix(pi),r.x=u,r.y=h,r.z=d,this}makePerspective(t,i,r,l,u,h,d=wi,m=!1){const p=this.elements,g=2*u/(i-t),v=2*u/(r-l),x=(i+t)/(i-t),y=(r+l)/(r-l);let b,R;if(m)b=u/(h-u),R=h*u/(h-u);else if(d===wi)b=-(h+u)/(h-u),R=-2*h*u/(h-u);else if(d===Tc)b=-h/(h-u),R=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,u,h,d=wi,m=!1){const p=this.elements,g=2/(i-t),v=2/(r-l),x=-(i+t)/(i-t),y=-(r+l)/(r-l);let b,R;if(m)b=1/(h-u),R=h/(h-u);else if(d===wi)b=-2/(h-u),R=-(h+u)/(h-u);else if(d===Tc)b=-1/(h-u),R=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=v,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const ns=new nt,pi=new Je,ZS=new nt(0,0,0),jS=new nt(1,1,1),Ua=new nt,Jl=new nt,Kn=new nt,d_=new Je,p_=new Oo;class Ni{constructor(t=0,i=0,r=0,l=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],v=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(Se(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Se(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Se(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return d_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(d_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return p_.setFromEuler(this),this.setFromQuaternion(p_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class S0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let KS=0;const m_=new nt,is=new Oo,Qi=new Je,$l=new nt,yo=new nt,QS=new nt,JS=new Oo,g_=new nt(1,0,0),__=new nt(0,1,0),v_=new nt(0,0,1),x_={type:"added"},$S={type:"removed"},as={type:"childadded",child:null},Qf={type:"childremoved",child:null};class En extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=No(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();const t=new nt,i=new Ni,r=new Oo,l=new nt(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Je},normalMatrix:{value:new le}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new S0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return is.setFromAxisAngle(t,i),this.quaternion.multiply(is),this}rotateOnWorldAxis(t,i){return is.setFromAxisAngle(t,i),this.quaternion.premultiply(is),this}rotateX(t){return this.rotateOnAxis(g_,t)}rotateY(t){return this.rotateOnAxis(__,t)}rotateZ(t){return this.rotateOnAxis(v_,t)}translateOnAxis(t,i){return m_.copy(t).applyQuaternion(this.quaternion),this.position.add(m_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(g_,t)}translateY(t){return this.translateOnAxis(__,t)}translateZ(t){return this.translateOnAxis(v_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?$l.copy(t):$l.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(yo,$l,this.up):Qi.lookAt($l,yo,this.up),this.quaternion.setFromRotationMatrix(Qi),l&&(Qi.extractRotation(l.matrixWorld),is.setFromRotationMatrix(Qi),this.quaternion.premultiply(is.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(x_),as.child=t,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent($S),Qf.child=t,this.dispatchEvent(Qf),Qf.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(x_),as.child=t,this.dispatchEvent(as),as.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yo,t,QS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yo,JS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];u(t.shapes,v)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),v=h(t.shapes),x=h(t.skeletons),y=h(t.animations),b=h(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),b.length>0&&(r.nodes=b)}return r.object=l,r;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}En.DEFAULT_UP=new nt(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new nt,Ji=new nt,Jf=new nt,$i=new nt,rs=new nt,ss=new nt,S_=new nt,$f=new nt,th=new nt,eh=new nt,nh=new Qe,ih=new Qe,ah=new Qe;class gi{constructor(t=new nt,i=new nt,r=new nt){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),mi.subVectors(t,i),l.cross(mi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){mi.subVectors(l,i),Ji.subVectors(r,i),Jf.subVectors(t,i);const h=mi.dot(mi),d=mi.dot(Ji),m=mi.dot(Jf),p=Ji.dot(Ji),g=Ji.dot(Jf),v=h*p-d*d;if(v===0)return u.set(0,0,0),null;const x=1/v,y=(p*m-d*g)*x,b=(h*g-d*m)*x;return u.set(1-y-b,b,y)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(t,i,r,l,u,h,d,m){return this.getBarycoord(t,i,r,l,$i)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,$i.x),m.addScaledVector(h,$i.y),m.addScaledVector(d,$i.z),m)}static getInterpolatedAttribute(t,i,r,l,u,h){return nh.setScalar(0),ih.setScalar(0),ah.setScalar(0),nh.fromBufferAttribute(t,i),ih.fromBufferAttribute(t,r),ah.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(nh,u.x),h.addScaledVector(ih,u.y),h.addScaledVector(ah,u.z),h}static isFrontFacing(t,i,r,l){return mi.subVectors(r,i),Ji.subVectors(t,i),mi.cross(Ji).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mi.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),mi.cross(Ji).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return gi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return gi.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return gi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let h,d;rs.subVectors(l,r),ss.subVectors(u,r),$f.subVectors(t,r);const m=rs.dot($f),p=ss.dot($f);if(m<=0&&p<=0)return i.copy(r);th.subVectors(t,l);const g=rs.dot(th),v=ss.dot(th);if(g>=0&&v<=g)return i.copy(l);const x=m*v-g*p;if(x<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(r).addScaledVector(rs,h);eh.subVectors(t,u);const y=rs.dot(eh),b=ss.dot(eh);if(b>=0&&y<=b)return i.copy(u);const R=y*p-m*b;if(R<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(r).addScaledVector(ss,d);const M=g*b-y*v;if(M<=0&&v-g>=0&&y-b>=0)return S_.subVectors(u,l),d=(v-g)/(v-g+(y-b)),i.copy(l).addScaledVector(S_,d);const _=1/(M+R+x);return h=R*_,d=x*_,i.copy(r).addScaledVector(rs,h).addScaledVector(ss,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const M0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},La={h:0,s:0,l:0},tc={h:0,s:0,l:0};function rh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class xe{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=be.workingColorSpace){return this.r=t,this.g=i,this.b=r,be.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=be.workingColorSpace){if(t=IS(t,1),i=Se(i,0,1),r=Se(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=rh(h,u,t+1/3),this.g=rh(h,u,t),this.b=rh(h,u,t-1/3)}return be.colorSpaceToWorking(this,l),this}setStyle(t,i=si){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=si){const r=M0[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ia(t.r),this.g=ia(t.g),this.b=ia(t.b),this}copyLinearToSRGB(t){return this.r=ds(t.r),this.g=ds(t.g),this.b=ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=si){return be.workingToColorSpace(wn.copy(this),t),Math.round(Se(wn.r*255,0,255))*65536+Math.round(Se(wn.g*255,0,255))*256+Math.round(Se(wn.b*255,0,255))}getHexString(t=si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=be.workingColorSpace){be.workingToColorSpace(wn.copy(this),i);const r=wn.r,l=wn.g,u=wn.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=g<=.5?v/(h+d):v/(2-h-d),h){case r:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-r)/v+2;break;case u:m=(r-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=be.workingColorSpace){return be.workingToColorSpace(wn.copy(this),i),t.r=wn.r,t.g=wn.g,t.b=wn.b,t}getStyle(t=si){be.workingToColorSpace(wn.copy(this),t);const i=wn.r,r=wn.g,l=wn.b;return t!==si?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(La),this.setHSL(La.h+t,La.s+i,La.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(La),t.getHSL(tc);const r=Gf(La.h,tc.h,i),l=Gf(La.s,tc.s,i),u=Gf(La.l,tc.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new xe;xe.NAMES=M0;let tM=0;class Ms extends Ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=No(),this.name="",this.type="Material",this.blending=hs,this.side=za,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vh,this.blendDst=xh,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=s_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(r.blending=this.blending),this.side!==za&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==vh&&(r.blendSrc=this.blendSrc),this.blendDst!==xh&&(r.blendDst=this.blendDst),this.blendEquation!==ur&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==s_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Qr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Qr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class y0 extends Ms{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=r0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const sn=new nt,ec=new Ae;let eM=0;class Di{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:eM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=o_,this.updateRanges=[],this.gpuType=na,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)ec.fromBufferAttribute(this,i),ec.applyMatrix3(t),this.setXY(i,ec.x,ec.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix3(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix4(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyNormalMatrix(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.transformDirection(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=xo(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Fn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=xo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=xo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=xo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=xo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Fn(i,this.array),r=Fn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Fn(i,this.array),r=Fn(r,this.array),l=Fn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Fn(i,this.array),r=Fn(r,this.array),l=Fn(l,this.array),u=Fn(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==o_&&(t.usage=this.usage),t}}class E0 extends Di{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class T0 extends Di{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Vn extends Di{constructor(t,i,r){super(new Float32Array(t),i,r)}}let nM=0;const ri=new Je,sh=new En,os=new nt,Qn=new Po,Eo=new Po,vn=new nt;class xi extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=No(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_0(t)?T0:E0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new le().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ri.makeRotationFromQuaternion(t),this.applyMatrix4(ri),this}rotateX(t){return ri.makeRotationX(t),this.applyMatrix4(ri),this}rotateY(t){return ri.makeRotationY(t),this.applyMatrix4(ri),this}rotateZ(t){return ri.makeRotationZ(t),this.applyMatrix4(ri),this}translate(t,i,r){return ri.makeTranslation(t,i,r),this.applyMatrix4(ri),this}scale(t,i,r){return ri.makeScale(t,i,r),this.applyMatrix4(ri),this}lookAt(t){return sh.lookAt(t),sh.updateMatrix(),this.applyMatrix4(sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Vn(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Po);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new nt(-1/0,-1/0,-1/0),new nt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Qn.setFromBufferAttribute(u),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new nt,1/0);return}if(t){const r=this.boundingSphere.center;if(Qn.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Eo.setFromBufferAttribute(d),this.morphTargetsRelative?(vn.addVectors(Qn.min,Eo.min),Qn.expandByPoint(vn),vn.addVectors(Qn.max,Eo.max),Qn.expandByPoint(vn)):(Qn.expandByPoint(Eo.min),Qn.expandByPoint(Eo.max))}Qn.getCenter(r);let l=0;for(let u=0,h=t.count;u<h;u++)vn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(vn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)vn.fromBufferAttribute(d,p),m&&(os.fromBufferAttribute(t,p),vn.add(os)),l=Math.max(l,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Di(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let X=0;X<r.count;X++)d[X]=new nt,m[X]=new nt;const p=new nt,g=new nt,v=new nt,x=new Ae,y=new Ae,b=new Ae,R=new nt,M=new nt;function _(X,w,C){p.fromBufferAttribute(r,X),g.fromBufferAttribute(r,w),v.fromBufferAttribute(r,C),x.fromBufferAttribute(u,X),y.fromBufferAttribute(u,w),b.fromBufferAttribute(u,C),g.sub(p),v.sub(p),y.sub(x),b.sub(x);const G=1/(y.x*b.y-b.x*y.y);isFinite(G)&&(R.copy(g).multiplyScalar(b.y).addScaledVector(v,-y.y).multiplyScalar(G),M.copy(v).multiplyScalar(y.x).addScaledVector(g,-b.x).multiplyScalar(G),d[X].add(R),d[w].add(R),d[C].add(R),m[X].add(M),m[w].add(M),m[C].add(M))}let F=this.groups;F.length===0&&(F=[{start:0,count:t.count}]);for(let X=0,w=F.length;X<w;++X){const C=F[X],G=C.start,Z=C.count;for(let rt=G,ft=G+Z;rt<ft;rt+=3)_(t.getX(rt+0),t.getX(rt+1),t.getX(rt+2))}const O=new nt,D=new nt,B=new nt,H=new nt;function I(X){B.fromBufferAttribute(l,X),H.copy(B);const w=d[X];O.copy(w),O.sub(B.multiplyScalar(B.dot(w))).normalize(),D.crossVectors(H,w);const G=D.dot(m[X])<0?-1:1;h.setXYZW(X,O.x,O.y,O.z,G)}for(let X=0,w=F.length;X<w;++X){const C=F[X],G=C.start,Z=C.count;for(let rt=G,ft=G+Z;rt<ft;rt+=3)I(t.getX(rt+0)),I(t.getX(rt+1)),I(t.getX(rt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Di(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const l=new nt,u=new nt,h=new nt,d=new nt,m=new nt,p=new nt,g=new nt,v=new nt;if(t)for(let x=0,y=t.count;x<y;x+=3){const b=t.getX(x+0),R=t.getX(x+1),M=t.getX(x+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,R),h.fromBufferAttribute(i,M),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,R),p.fromBufferAttribute(r,M),d.add(g),m.add(g),p.add(g),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)vn.fromBufferAttribute(t,i),vn.normalize(),t.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,v=d.normalized,x=new p.constructor(m.length*g);let y=0,b=0;for(let R=0,M=m.length;R<M;R++){d.isInterleavedBufferAttribute?y=m[R]*d.data.stride+d.offset:y=m[R]*g;for(let _=0;_<g;_++)x[b++]=p[y++]}return new Di(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new xi,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,v=p.length;g<v;g++){const x=p[g],y=t(x,r);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,x=p.length;v<x;v++){const y=p[v];g.push(y.toJSON(t.data))}g.length>0&&(l[m]=g,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=t.morphAttributes;for(const p in u){const g=[],v=u[p];for(let x=0,y=v.length;x<y;x++)g.push(v[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const M_=new Je,ar=new x0,nc=new wc,y_=new nt,ic=new nt,ac=new nt,rc=new nt,oh=new nt,sc=new nt,E_=new nt,oc=new nt;class fn extends En{constructor(t=new xi,i=new y0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){sc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],v=u[m];g!==0&&(oh.fromBufferAttribute(v,t),h?sc.addScaledVector(oh,g):sc.addScaledVector(oh.sub(i),g))}i.add(sc)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),nc.copy(r.boundingSphere),nc.applyMatrix4(u),ar.copy(t.ray).recast(t.near),!(nc.containsPoint(ar.origin)===!1&&(ar.intersectSphere(nc,y_)===null||ar.origin.distanceToSquared(y_)>(t.far-t.near)**2))&&(M_.copy(u).invert(),ar.copy(t.ray).applyMatrix4(M_),!(r.boundingBox!==null&&ar.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,ar)))}_computeIntersections(t,i,r){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,x=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,R=x.length;b<R;b++){const M=x[b],_=h[M.materialIndex],F=Math.max(M.start,y.start),O=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let D=F,B=O;D<B;D+=3){const H=d.getX(D),I=d.getX(D+1),X=d.getX(D+2);l=lc(this,_,t,r,p,g,v,H,I,X),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),R=Math.min(d.count,y.start+y.count);for(let M=b,_=R;M<_;M+=3){const F=d.getX(M),O=d.getX(M+1),D=d.getX(M+2);l=lc(this,h,t,r,p,g,v,F,O,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,R=x.length;b<R;b++){const M=x[b],_=h[M.materialIndex],F=Math.max(M.start,y.start),O=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let D=F,B=O;D<B;D+=3){const H=D,I=D+1,X=D+2;l=lc(this,_,t,r,p,g,v,H,I,X),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),R=Math.min(m.count,y.start+y.count);for(let M=b,_=R;M<_;M+=3){const F=M,O=M+1,D=M+2;l=lc(this,h,t,r,p,g,v,F,O,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function iM(o,t,i,r,l,u,h,d){let m;if(t.side===Hn?m=r.intersectTriangle(h,u,l,!0,d):m=r.intersectTriangle(l,u,h,t.side===za,d),m===null)return null;oc.copy(d),oc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(oc);return p<i.near||p>i.far?null:{distance:p,point:oc.clone(),object:o}}function lc(o,t,i,r,l,u,h,d,m,p){o.getVertexPosition(d,ic),o.getVertexPosition(m,ac),o.getVertexPosition(p,rc);const g=iM(o,t,i,r,ic,ac,rc,E_);if(g){const v=new nt;gi.getBarycoord(E_,ic,ac,rc,v),l&&(g.uv=gi.getInterpolatedAttribute(l,d,m,p,v,new Ae)),u&&(g.uv1=gi.getInterpolatedAttribute(u,d,m,p,v,new Ae)),h&&(g.normal=gi.getInterpolatedAttribute(h,d,m,p,v,new nt),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new nt,materialIndex:0};gi.getNormal(ic,ac,rc,x.normal),g.face=x,g.barycoord=v}return g}class Ui extends xi{constructor(t=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],g=[],v=[];let x=0,y=0;b("z","y","x",-1,-1,r,i,t,h,u,0),b("z","y","x",1,-1,r,i,-t,h,u,1),b("x","z","y",1,1,t,r,i,l,h,2),b("x","z","y",1,-1,t,r,-i,l,h,3),b("x","y","z",1,-1,t,i,r,l,u,4),b("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Vn(p,3)),this.setAttribute("normal",new Vn(g,3)),this.setAttribute("uv",new Vn(v,2));function b(R,M,_,F,O,D,B,H,I,X,w){const C=D/I,G=B/X,Z=D/2,rt=B/2,ft=H/2,lt=I+1,N=X+1;let K=0,Y=0;const xt=new nt;for(let U=0;U<N;U++){const $=U*G-rt;for(let vt=0;vt<lt;vt++){const St=vt*C-Z;xt[R]=St*F,xt[M]=$*O,xt[_]=ft,p.push(xt.x,xt.y,xt.z),xt[R]=0,xt[M]=0,xt[_]=H>0?1:-1,g.push(xt.x,xt.y,xt.z),v.push(vt/I),v.push(1-U/X),K+=1}}for(let U=0;U<X;U++)for(let $=0;$<I;$++){const vt=x+$+lt*U,St=x+$+lt*(U+1),Dt=x+($+1)+lt*(U+1),Ft=x+($+1)+lt*U;m.push(vt,St,Ft),m.push(St,Dt,Ft),Y+=6}d.addGroup(y,Y,w),y+=Y,x+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ui(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function vs(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Nn(o){const t={};for(let i=0;i<o.length;i++){const r=vs(o[i]);for(const l in r)t[l]=r[l]}return t}function aM(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function b0(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:be.workingColorSpace}const rM={clone:vs,merge:Nn};var sM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ia extends Ms{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sM,this.fragmentShader=oM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vs(t.uniforms),this.uniformsGroups=aM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class A0 extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Na=new nt,T_=new Ae,b_=new Ae;class oi extends A0{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=rd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Hf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rd*2*Math.atan(Math.tan(Hf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Na.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Na.x,Na.y).multiplyScalar(-t/Na.z),Na.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Na.x,Na.y).multiplyScalar(-t/Na.z)}getViewSize(t,i){return this.getViewBounds(t,T_,b_),i.subVectors(b_,T_)}setViewOffset(t,i,r,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Hf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ls=-90,cs=1;class lM extends En{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new oi(ls,cs,t,i);l.layers=this.layers,this.add(l);const u=new oi(ls,cs,t,i);u.layers=this.layers,this.add(u);const h=new oi(ls,cs,t,i);h.layers=this.layers,this.add(h);const d=new oi(ls,cs,t,i);d.layers=this.layers,this.add(d);const m=new oi(ls,cs,t,i);m.layers=this.layers,this.add(m);const p=new oi(ls,cs,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(t===wi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Tc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,g]=this.children,v=t.getRenderTarget(),x=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=R,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(v,x,y),t.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class R0 extends Gn{constructor(t=[],i=ms,r,l,u,h,d,m,p,g){super(t,i,r,l,u,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class cM extends mr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new R0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Ui(5,5,5),u=new Ia({name:"CubemapFromEquirect",uniforms:vs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Hn,blending:Pa});u.uniforms.tEquirect.value=i;const h=new fn(l,u),d=i.minFilter;return i.minFilter===dr&&(i.minFilter=Ci),new lM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(u)}}class cc extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uM={type:"move"};class lh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new nt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new nt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new nt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new nt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const R of t.hand.values()){const M=i.getJointPose(R,r),_=this._getHandJoint(p,R);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),y=.02,b=.005;p.inputState.pinching&&x>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(uM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new cc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class gd{constructor(t,i=1,r=1e3){this.isFog=!0,this.name="",this.color=new xe(t),this.near=i,this.far=r}clone(){return new gd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class fM extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const ch=new nt,hM=new nt,dM=new le;class lr{constructor(t=new nt(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=ch.subVectors(r,i).cross(hM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(ch),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||dM.getNormalMatrix(t),l=this.coplanarPoint(ch).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rr=new wc,pM=new Ae(.5,.5),uc=new nt;class _d{constructor(t=new lr,i=new lr,r=new lr,l=new lr,u=new lr,h=new lr){this.planes=[t,i,r,l,u,h]}set(t,i,r,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=wi,r=!1){const l=this.planes,u=t.elements,h=u[0],d=u[1],m=u[2],p=u[3],g=u[4],v=u[5],x=u[6],y=u[7],b=u[8],R=u[9],M=u[10],_=u[11],F=u[12],O=u[13],D=u[14],B=u[15];if(l[0].setComponents(p-h,y-g,_-b,B-F).normalize(),l[1].setComponents(p+h,y+g,_+b,B+F).normalize(),l[2].setComponents(p+d,y+v,_+R,B+O).normalize(),l[3].setComponents(p-d,y-v,_-R,B-O).normalize(),r)l[4].setComponents(m,x,M,D).normalize(),l[5].setComponents(p-m,y-x,_-M,B-D).normalize();else if(l[4].setComponents(p-m,y-x,_-M,B-D).normalize(),i===wi)l[5].setComponents(p+m,y+x,_+M,B+D).normalize();else if(i===Tc)l[5].setComponents(m,x,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),rr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(t){rr.center.set(0,0,0);const i=pM.distanceTo(t.center);return rr.radius=.7071067811865476+i,rr.applyMatrix4(t.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(uc.x=l.normal.x>0?t.max.x:t.min.x,uc.y=l.normal.y>0?t.max.y:t.min.y,uc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(uc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vd extends Ms{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ac=new nt,Rc=new nt,A_=new Je,To=new x0,fc=new wc,uh=new nt,R_=new nt;class C0 extends En{constructor(t=new xi,i=new vd){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,u=i.count;l<u;l++)Ac.fromBufferAttribute(i,l-1),Rc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Ac.distanceTo(Rc);t.setAttribute("lineDistance",new Vn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),fc.copy(r.boundingSphere),fc.applyMatrix4(l),fc.radius+=u,t.ray.intersectsSphere(fc)===!1)return;A_.copy(l).invert(),To.copy(t.ray).applyMatrix4(A_);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=r.index,x=r.attributes.position;if(g!==null){const y=Math.max(0,h.start),b=Math.min(g.count,h.start+h.count);for(let R=y,M=b-1;R<M;R+=p){const _=g.getX(R),F=g.getX(R+1),O=hc(this,t,To,m,_,F,R);O&&i.push(O)}if(this.isLineLoop){const R=g.getX(b-1),M=g.getX(y),_=hc(this,t,To,m,R,M,b-1);_&&i.push(_)}}else{const y=Math.max(0,h.start),b=Math.min(x.count,h.start+h.count);for(let R=y,M=b-1;R<M;R+=p){const _=hc(this,t,To,m,R,R+1,R);_&&i.push(_)}if(this.isLineLoop){const R=hc(this,t,To,m,b-1,y,b-1);R&&i.push(R)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function hc(o,t,i,r,l,u,h){const d=o.geometry.attributes.position;if(Ac.fromBufferAttribute(d,l),Rc.fromBufferAttribute(d,u),i.distanceSqToSegment(Ac,Rc,uh,R_)>r)return;uh.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(uh);if(!(p<t.near||p>t.far))return{distance:p,point:R_.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const C_=new nt,w_=new nt;class mM extends C0{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[];for(let l=0,u=i.count;l<u;l+=2)C_.fromBufferAttribute(i,l),w_.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+C_.distanceTo(w_);t.setAttribute("lineDistance",new Vn(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class w0 extends Gn{constructor(t,i,r=pr,l,u,h,d=vi,m=vi,p,g=Co,v=1){if(g!==Co&&g!==wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:v};super(x,l,u,h,d,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new md(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class D0 extends Gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class xs extends xi{constructor(t=1,i=1,r=1,l=32,u=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:l,heightSegments:u,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),u=Math.floor(u);const g=[],v=[],x=[],y=[];let b=0;const R=[],M=r/2;let _=0;F(),h===!1&&(t>0&&O(!0),i>0&&O(!1)),this.setIndex(g),this.setAttribute("position",new Vn(v,3)),this.setAttribute("normal",new Vn(x,3)),this.setAttribute("uv",new Vn(y,2));function F(){const D=new nt,B=new nt;let H=0;const I=(i-t)/r;for(let X=0;X<=u;X++){const w=[],C=X/u,G=C*(i-t)+t;for(let Z=0;Z<=l;Z++){const rt=Z/l,ft=rt*m+d,lt=Math.sin(ft),N=Math.cos(ft);B.x=G*lt,B.y=-C*r+M,B.z=G*N,v.push(B.x,B.y,B.z),D.set(lt,I,N).normalize(),x.push(D.x,D.y,D.z),y.push(rt,1-C),w.push(b++)}R.push(w)}for(let X=0;X<l;X++)for(let w=0;w<u;w++){const C=R[w][X],G=R[w+1][X],Z=R[w+1][X+1],rt=R[w][X+1];(t>0||w!==0)&&(g.push(C,G,rt),H+=3),(i>0||w!==u-1)&&(g.push(G,Z,rt),H+=3)}p.addGroup(_,H,0),_+=H}function O(D){const B=b,H=new Ae,I=new nt;let X=0;const w=D===!0?t:i,C=D===!0?1:-1;for(let Z=1;Z<=l;Z++)v.push(0,M*C,0),x.push(0,C,0),y.push(.5,.5),b++;const G=b;for(let Z=0;Z<=l;Z++){const ft=Z/l*m+d,lt=Math.cos(ft),N=Math.sin(ft);I.x=w*N,I.y=M*C,I.z=w*lt,v.push(I.x,I.y,I.z),x.push(0,C,0),H.x=lt*.5+.5,H.y=N*.5*C+.5,y.push(H.x,H.y),b++}for(let Z=0;Z<l;Z++){const rt=B+Z,ft=G+Z;D===!0?g.push(ft,ft+1,rt):g.push(ft+1,ft,rt),X+=3}p.addGroup(_,X,D===!0?1:2),_+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xs(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Bo extends xi{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,v=t/d,x=i/m,y=[],b=[],R=[],M=[];for(let _=0;_<g;_++){const F=_*x-h;for(let O=0;O<p;O++){const D=O*v-u;b.push(D,-F,0),R.push(0,0,1),M.push(O/d),M.push(1-_/m)}}for(let _=0;_<m;_++)for(let F=0;F<d;F++){const O=F+p*_,D=F+p*(_+1),B=F+1+p*(_+1),H=F+1+p*_;y.push(O,D,H),y.push(D,B,H)}this.setIndex(y),this.setAttribute("position",new Vn(b,3)),this.setAttribute("normal",new Vn(R,3)),this.setAttribute("uv",new Vn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bo(t.width,t.height,t.widthSegments,t.heightSegments)}}class Uo extends Ms{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=m0,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class gM extends Ms{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=CS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class _M extends Ms{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class U0 extends En{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const fh=new Je,D_=new nt,U_=new nt;class vM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.mapType=Li,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _d,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;D_.setFromMatrixPosition(t.matrixWorld),i.position.copy(D_),U_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(U_),i.updateMatrixWorld(),fh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(fh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class L0 extends A0{constructor(t=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,h=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class xM extends vM{constructor(){super(new L0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class SM extends U0{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.shadow=new xM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class MM extends U0{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class yM extends oi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class N0 extends mM{constructor(t=10,i=10,r=4473924,l=8947848){r=new xe(r),l=new xe(l);const u=i/2,h=t/i,d=t/2,m=[],p=[];for(let x=0,y=0,b=-d;x<=i;x++,b+=h){m.push(-d,0,b,d,0,b),m.push(b,0,-d,b,0,d);const R=x===u?r:l;R.toArray(p,y),y+=3,R.toArray(p,y),y+=3,R.toArray(p,y),y+=3,R.toArray(p,y),y+=3}const g=new xi;g.setAttribute("position",new Vn(m,3)),g.setAttribute("color",new Vn(p,3));const v=new vd({vertexColors:!0,toneMapped:!1});super(g,v),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function L_(o,t,i,r){const l=EM(r);switch(i){case f0:return o*t;case d0:return o*t/l.components*l.byteLength;case hd:return o*t/l.components*l.byteLength;case p0:return o*t*2/l.components*l.byteLength;case dd:return o*t*2/l.components*l.byteLength;case h0:return o*t*3/l.components*l.byteLength;case _i:return o*t*4/l.components*l.byteLength;case pd:return o*t*4/l.components*l.byteLength;case vc:case xc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Sc:case Mc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Lh:case Oh:return Math.max(o,16)*Math.max(t,8)/4;case Uh:case Nh:return Math.max(o,8)*Math.max(t,8)/2;case Ph:case Bh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case zh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Ih:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Fh:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Hh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Gh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Vh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case kh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Xh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Wh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case qh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Yh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Zh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case jh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Kh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Qh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Jh:case $h:case td:return Math.ceil(o/4)*Math.ceil(t/4)*16;case ed:case nd:return Math.ceil(o/4)*Math.ceil(t/4)*8;case id:case ad:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function EM(o){switch(o){case Li:case o0:return{byteLength:1,components:1};case Ao:case l0:case Lo:return{byteLength:2,components:1};case ud:case fd:return{byteLength:2,components:4};case pr:case cd:case na:return{byteLength:4,components:1};case c0:case u0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ld}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ld);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function O0(){let o=null,t=!1,i=null,r=null;function l(u,h){i(u,h),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function TM(o){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,v=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,g),d.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,p){const g=m.array,v=m.updateRanges;if(o.bindBuffer(p,d),v.length===0)o.bufferSubData(p,0,g);else{v.sort((y,b)=>y.start-b.start);let x=0;for(let y=1;y<v.length;y++){const b=v[x],R=v[y];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++x,v[x]=R)}v.length=x+1;for(let y=0,b=v.length;y<b;y++){const R=v[y];o.bufferSubData(p,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(o.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var bM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,AM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,RM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,CM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,DM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,UM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,LM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,NM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,OM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,PM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,BM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,IM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,FM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,HM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,GM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,XM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,WM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,YM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ZM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,KM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,QM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,JM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$M=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ty=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ey="gl_FragColor = linearToOutputTexel( gl_FragColor );",ny=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ay=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ry=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ly=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,py=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,my=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_y=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,My=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ey=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ty=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,by=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ay=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ry=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Uy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ly=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ny=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Oy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Py=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,By=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Iy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Gy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ky=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ky=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$y=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,tE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,aE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,oE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_E=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,SE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ME=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,EE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const TE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,UE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,LE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,NE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,OE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,FE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,WE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$E=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fe={alphahash_fragment:bM,alphahash_pars_fragment:AM,alphamap_fragment:RM,alphamap_pars_fragment:CM,alphatest_fragment:wM,alphatest_pars_fragment:DM,aomap_fragment:UM,aomap_pars_fragment:LM,batching_pars_vertex:NM,batching_vertex:OM,begin_vertex:PM,beginnormal_vertex:BM,bsdfs:zM,iridescence_fragment:IM,bumpmap_pars_fragment:FM,clipping_planes_fragment:HM,clipping_planes_pars_fragment:GM,clipping_planes_pars_vertex:VM,clipping_planes_vertex:kM,color_fragment:XM,color_pars_fragment:WM,color_pars_vertex:qM,color_vertex:YM,common:ZM,cube_uv_reflection_fragment:jM,defaultnormal_vertex:KM,displacementmap_pars_vertex:QM,displacementmap_vertex:JM,emissivemap_fragment:$M,emissivemap_pars_fragment:ty,colorspace_fragment:ey,colorspace_pars_fragment:ny,envmap_fragment:iy,envmap_common_pars_fragment:ay,envmap_pars_fragment:ry,envmap_pars_vertex:sy,envmap_physical_pars_fragment:_y,envmap_vertex:oy,fog_vertex:ly,fog_pars_vertex:cy,fog_fragment:uy,fog_pars_fragment:fy,gradientmap_pars_fragment:hy,lightmap_pars_fragment:dy,lights_lambert_fragment:py,lights_lambert_pars_fragment:my,lights_pars_begin:gy,lights_toon_fragment:vy,lights_toon_pars_fragment:xy,lights_phong_fragment:Sy,lights_phong_pars_fragment:My,lights_physical_fragment:yy,lights_physical_pars_fragment:Ey,lights_fragment_begin:Ty,lights_fragment_maps:by,lights_fragment_end:Ay,logdepthbuf_fragment:Ry,logdepthbuf_pars_fragment:Cy,logdepthbuf_pars_vertex:wy,logdepthbuf_vertex:Dy,map_fragment:Uy,map_pars_fragment:Ly,map_particle_fragment:Ny,map_particle_pars_fragment:Oy,metalnessmap_fragment:Py,metalnessmap_pars_fragment:By,morphinstance_vertex:zy,morphcolor_vertex:Iy,morphnormal_vertex:Fy,morphtarget_pars_vertex:Hy,morphtarget_vertex:Gy,normal_fragment_begin:Vy,normal_fragment_maps:ky,normal_pars_fragment:Xy,normal_pars_vertex:Wy,normal_vertex:qy,normalmap_pars_fragment:Yy,clearcoat_normal_fragment_begin:Zy,clearcoat_normal_fragment_maps:jy,clearcoat_pars_fragment:Ky,iridescence_pars_fragment:Qy,opaque_fragment:Jy,packing:$y,premultiplied_alpha_fragment:tE,project_vertex:eE,dithering_fragment:nE,dithering_pars_fragment:iE,roughnessmap_fragment:aE,roughnessmap_pars_fragment:rE,shadowmap_pars_fragment:sE,shadowmap_pars_vertex:oE,shadowmap_vertex:lE,shadowmask_pars_fragment:cE,skinbase_vertex:uE,skinning_pars_vertex:fE,skinning_vertex:hE,skinnormal_vertex:dE,specularmap_fragment:pE,specularmap_pars_fragment:mE,tonemapping_fragment:gE,tonemapping_pars_fragment:_E,transmission_fragment:vE,transmission_pars_fragment:xE,uv_pars_fragment:SE,uv_pars_vertex:ME,uv_vertex:yE,worldpos_vertex:EE,background_vert:TE,background_frag:bE,backgroundCube_vert:AE,backgroundCube_frag:RE,cube_vert:CE,cube_frag:wE,depth_vert:DE,depth_frag:UE,distanceRGBA_vert:LE,distanceRGBA_frag:NE,equirect_vert:OE,equirect_frag:PE,linedashed_vert:BE,linedashed_frag:zE,meshbasic_vert:IE,meshbasic_frag:FE,meshlambert_vert:HE,meshlambert_frag:GE,meshmatcap_vert:VE,meshmatcap_frag:kE,meshnormal_vert:XE,meshnormal_frag:WE,meshphong_vert:qE,meshphong_frag:YE,meshphysical_vert:ZE,meshphysical_frag:jE,meshtoon_vert:KE,meshtoon_frag:QE,points_vert:JE,points_frag:$E,shadow_vert:tT,shadow_frag:eT,sprite_vert:nT,sprite_frag:iT},Nt={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},Ri={basic:{uniforms:Nn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:Nn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new xe(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:Nn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:Nn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:Nn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new xe(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:Nn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:Nn([Nt.points,Nt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:Nn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:Nn([Nt.common,Nt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:Nn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:Nn([Nt.sprite,Nt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distanceRGBA:{uniforms:Nn([Nt.common,Nt.displacementmap,{referencePosition:{value:new nt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distanceRGBA_vert,fragmentShader:fe.distanceRGBA_frag},shadow:{uniforms:Nn([Nt.lights,Nt.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};Ri.physical={uniforms:Nn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const dc={r:0,b:0,g:0},sr=new Ni,aT=new Je;function rT(o,t,i,r,l,u,h){const d=new xe(0);let m=u===!0?0:1,p,g,v=null,x=0,y=null;function b(O){let D=O.isScene===!0?O.background:null;return D&&D.isTexture&&(D=(O.backgroundBlurriness>0?i:t).get(D)),D}function R(O){let D=!1;const B=b(O);B===null?_(d,m):B&&B.isColor&&(_(B,1),D=!0);const H=o.xr.getEnvironmentBlendMode();H==="additive"?r.buffers.color.setClear(0,0,0,1,h):H==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(O,D){const B=b(D);B&&(B.isCubeTexture||B.mapping===Cc)?(g===void 0&&(g=new fn(new Ui(1,1,1),new Ia({name:"BackgroundCubeMaterial",uniforms:vs(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(H,I,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),sr.copy(D.backgroundRotation),sr.x*=-1,sr.y*=-1,sr.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),g.material.uniforms.envMap.value=B,g.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(aT.makeRotationFromEuler(sr)),g.material.toneMapped=be.getTransfer(B.colorSpace)!==Be,(v!==B||x!==B.version||y!==o.toneMapping)&&(g.material.needsUpdate=!0,v=B,x=B.version,y=o.toneMapping),g.layers.enableAll(),O.unshift(g,g.geometry,g.material,0,0,null)):B&&B.isTexture&&(p===void 0&&(p=new fn(new Bo(2,2),new Ia({name:"BackgroundMaterial",uniforms:vs(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:za,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=B,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=be.getTransfer(B.colorSpace)!==Be,B.matrixAutoUpdate===!0&&B.updateMatrix(),p.material.uniforms.uvTransform.value.copy(B.matrix),(v!==B||x!==B.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,v=B,x=B.version,y=o.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function _(O,D){O.getRGB(dc,b0(o)),r.buffers.color.setClear(dc.r,dc.g,dc.b,D,h)}function F(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,D=1){d.set(O),m=D,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,_(d,m)},render:R,addToRenderList:M,dispose:F}}function sT(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=x(null);let u=l,h=!1;function d(C,G,Z,rt,ft){let lt=!1;const N=v(rt,Z,G);u!==N&&(u=N,p(u.object)),lt=y(C,rt,Z,ft),lt&&b(C,rt,Z,ft),ft!==null&&t.update(ft,o.ELEMENT_ARRAY_BUFFER),(lt||h)&&(h=!1,D(C,G,Z,rt),ft!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ft).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function g(C){return o.deleteVertexArray(C)}function v(C,G,Z){const rt=Z.wireframe===!0;let ft=r[C.id];ft===void 0&&(ft={},r[C.id]=ft);let lt=ft[G.id];lt===void 0&&(lt={},ft[G.id]=lt);let N=lt[rt];return N===void 0&&(N=x(m()),lt[rt]=N),N}function x(C){const G=[],Z=[],rt=[];for(let ft=0;ft<i;ft++)G[ft]=0,Z[ft]=0,rt[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Z,attributeDivisors:rt,object:C,attributes:{},index:null}}function y(C,G,Z,rt){const ft=u.attributes,lt=G.attributes;let N=0;const K=Z.getAttributes();for(const Y in K)if(K[Y].location>=0){const U=ft[Y];let $=lt[Y];if($===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&($=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&($=C.instanceColor)),U===void 0||U.attribute!==$||$&&U.data!==$.data)return!0;N++}return u.attributesNum!==N||u.index!==rt}function b(C,G,Z,rt){const ft={},lt=G.attributes;let N=0;const K=Z.getAttributes();for(const Y in K)if(K[Y].location>=0){let U=lt[Y];U===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(U=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(U=C.instanceColor));const $={};$.attribute=U,U&&U.data&&($.data=U.data),ft[Y]=$,N++}u.attributes=ft,u.attributesNum=N,u.index=rt}function R(){const C=u.newAttributes;for(let G=0,Z=C.length;G<Z;G++)C[G]=0}function M(C){_(C,0)}function _(C,G){const Z=u.newAttributes,rt=u.enabledAttributes,ft=u.attributeDivisors;Z[C]=1,rt[C]===0&&(o.enableVertexAttribArray(C),rt[C]=1),ft[C]!==G&&(o.vertexAttribDivisor(C,G),ft[C]=G)}function F(){const C=u.newAttributes,G=u.enabledAttributes;for(let Z=0,rt=G.length;Z<rt;Z++)G[Z]!==C[Z]&&(o.disableVertexAttribArray(Z),G[Z]=0)}function O(C,G,Z,rt,ft,lt,N){N===!0?o.vertexAttribIPointer(C,G,Z,ft,lt):o.vertexAttribPointer(C,G,Z,rt,ft,lt)}function D(C,G,Z,rt){R();const ft=rt.attributes,lt=Z.getAttributes(),N=G.defaultAttributeValues;for(const K in lt){const Y=lt[K];if(Y.location>=0){let xt=ft[K];if(xt===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(xt=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(xt=C.instanceColor)),xt!==void 0){const U=xt.normalized,$=xt.itemSize,vt=t.get(xt);if(vt===void 0)continue;const St=vt.buffer,Dt=vt.type,Ft=vt.bytesPerElement,et=Dt===o.INT||Dt===o.UNSIGNED_INT||xt.gpuType===cd;if(xt.isInterleavedBufferAttribute){const gt=xt.data,bt=gt.stride,jt=xt.offset;if(gt.isInstancedInterleavedBuffer){for(let Wt=0;Wt<Y.locationSize;Wt++)_(Y.location+Wt,gt.meshPerAttribute);C.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Wt=0;Wt<Y.locationSize;Wt++)M(Y.location+Wt);o.bindBuffer(o.ARRAY_BUFFER,St);for(let Wt=0;Wt<Y.locationSize;Wt++)O(Y.location+Wt,$/Y.locationSize,Dt,U,bt*Ft,(jt+$/Y.locationSize*Wt)*Ft,et)}else{if(xt.isInstancedBufferAttribute){for(let gt=0;gt<Y.locationSize;gt++)_(Y.location+gt,xt.meshPerAttribute);C.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let gt=0;gt<Y.locationSize;gt++)M(Y.location+gt);o.bindBuffer(o.ARRAY_BUFFER,St);for(let gt=0;gt<Y.locationSize;gt++)O(Y.location+gt,$/Y.locationSize,Dt,U,$*Ft,$/Y.locationSize*gt*Ft,et)}}else if(N!==void 0){const U=N[K];if(U!==void 0)switch(U.length){case 2:o.vertexAttrib2fv(Y.location,U);break;case 3:o.vertexAttrib3fv(Y.location,U);break;case 4:o.vertexAttrib4fv(Y.location,U);break;default:o.vertexAttrib1fv(Y.location,U)}}}}F()}function B(){X();for(const C in r){const G=r[C];for(const Z in G){const rt=G[Z];for(const ft in rt)g(rt[ft].object),delete rt[ft];delete G[Z]}delete r[C]}}function H(C){if(r[C.id]===void 0)return;const G=r[C.id];for(const Z in G){const rt=G[Z];for(const ft in rt)g(rt[ft].object),delete rt[ft];delete G[Z]}delete r[C.id]}function I(C){for(const G in r){const Z=r[G];if(Z[C.id]===void 0)continue;const rt=Z[C.id];for(const ft in rt)g(rt[ft].object),delete rt[ft];delete Z[C.id]}}function X(){w(),h=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:X,resetDefaultState:w,dispose:B,releaseStatesOfGeometry:H,releaseStatesOfProgram:I,initAttributes:R,enableAttribute:M,disableUnusedAttributes:F}}function oT(o,t,i){let r;function l(p){r=p}function u(p,g){o.drawArrays(r,p,g),i.update(g,r,1)}function h(p,g,v){v!==0&&(o.drawArraysInstanced(r,p,g,v),i.update(g,r,v))}function d(p,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let y=0;for(let b=0;b<v;b++)y+=g[b];i.update(y,r,1)}function m(p,g,v,x){if(v===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<p.length;b++)h(p[b],g[b],x[b]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,g,0,x,0,v);let b=0;for(let R=0;R<v;R++)b+=g[R]*x[R];i.update(b,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function lT(o,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(I){return!(I!==_i&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const X=I===Lo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Li&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==na&&!X)}function m(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),F=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),B=b>0,H=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:F,maxVaryings:O,maxFragmentUniforms:D,vertexTextures:B,maxSamples:H}}function cT(o){const t=this;let i=null,r=0,l=!1,u=!1;const h=new lr,d=new le,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const y=v.length!==0||x||r!==0||l;return l=x,r=v.length,y},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){i=g(v,x,0)},this.setState=function(v,x,y){const b=v.clippingPlanes,R=v.clipIntersection,M=v.clipShadows,_=o.get(v);if(!l||b===null||b.length===0||u&&!M)u?g(null):p();else{const F=u?0:r,O=F*4;let D=_.clippingState||null;m.value=D,D=g(b,x,O,y);for(let B=0;B!==O;++B)D[B]=i[B];_.clippingState=D,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=F}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(v,x,y,b){const R=v!==null?v.length:0;let M=null;if(R!==0){if(M=m.value,b!==!0||M===null){const _=y+R*4,F=x.matrixWorldInverse;d.getNormalMatrix(F),(M===null||M.length<_)&&(M=new Float32Array(_));for(let O=0,D=y;O!==R;++O,D+=4)h.copy(v[O]).applyMatrix4(F,d),h.normal.toArray(M,D),M[D+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,M}}function uT(o){let t=new WeakMap;function i(h,d){return d===Rh?h.mapping=ms:d===Ch&&(h.mapping=gs),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Rh||d===Ch)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new cM(m.height);return p.fromEquirectangularTexture(o,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const fs=4,N_=[.125,.215,.35,.446,.526,.582],fr=20,hh=new L0,O_=new xe;let dh=null,ph=0,mh=0,gh=!1;const cr=(1+Math.sqrt(5))/2,us=1/cr,P_=[new nt(-cr,us,0),new nt(cr,us,0),new nt(-us,0,cr),new nt(us,0,cr),new nt(0,cr,-us),new nt(0,cr,us),new nt(-1,1,-1),new nt(1,1,-1),new nt(-1,1,1),new nt(1,1,1)],fT=new nt;class B_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,u={}){const{size:h=256,position:d=fT}=u;dh=this._renderer.getRenderTarget(),ph=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel(),gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=F_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=I_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(dh,ph,mh),this._renderer.xr.enabled=gh,t.scissorTest=!1,pc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===ms||t.mapping===gs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),dh=this._renderer.getRenderTarget(),ph=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel(),gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ci,minFilter:Ci,generateMipmaps:!1,type:Lo,format:_i,colorSpace:_s,depthBuffer:!1},l=z_(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=z_(t,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hT(u)),this._blurMaterial=dT(u,t,i)}return l}_compileMaterial(t){const i=new fn(this._lodPlanes[0],t);this._renderer.compile(i,hh)}_sceneToCubeUV(t,i,r,l,u){const m=new oi(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,y=v.toneMapping;v.getClearColor(O_),v.toneMapping=Ba,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null));const R=new y0({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),M=new fn(new Ui,R);let _=!1;const F=t.background;F?F.isColor&&(R.color.copy(F),t.background=null,_=!0):(R.color.copy(O_),_=!0);for(let O=0;O<6;O++){const D=O%3;D===0?(m.up.set(0,p[O],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[O],u.y,u.z)):D===1?(m.up.set(0,0,p[O]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[O],u.z)):(m.up.set(0,p[O],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[O]));const B=this._cubeSize;pc(l,D*B,O>2?B:0,B,B),v.setRenderTarget(l),_&&v.render(M,m),v.render(t,m)}M.geometry.dispose(),M.material.dispose(),v.toneMapping=y,v.autoClear=x,t.background=F}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===ms||t.mapping===gs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=F_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=I_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new fn(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;pc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,hh)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=P_[(l-u-1)%P_.length];this._blur(t,u-1,u,h,d)}i.autoClear=r}_blur(t,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",u),this._halfBlur(h,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new fn(this._lodPlanes[l],p),x=p.uniforms,y=this._sizeLods[r]-1,b=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*fr-1),R=u/b,M=isFinite(u)?1+Math.floor(g*R):fr;M>fr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${fr}`);const _=[];let F=0;for(let I=0;I<fr;++I){const X=I/R,w=Math.exp(-X*X/2);_.push(w),I===0?F+=w:I<M&&(F+=2*w)}for(let I=0;I<_.length;I++)_[I]=_[I]/F;x.envMap.value=t.texture,x.samples.value=M,x.weights.value=_,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:O}=this;x.dTheta.value=b,x.mipInt.value=O-r;const D=this._sizeLods[l],B=3*D*(l>O-fs?l-O+fs:0),H=4*(this._cubeSize-D);pc(i,B,H,3*D,2*D),m.setRenderTarget(i),m.render(v,hh)}}function hT(o){const t=[],i=[],r=[];let l=o;const u=o-fs+1+N_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-fs?m=N_[h-o+fs-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,b=6,R=3,M=2,_=1,F=new Float32Array(R*b*y),O=new Float32Array(M*b*y),D=new Float32Array(_*b*y);for(let H=0;H<y;H++){const I=H%3*2/3-1,X=H>2?0:-1,w=[I,X,0,I+2/3,X,0,I+2/3,X+1,0,I,X,0,I+2/3,X+1,0,I,X+1,0];F.set(w,R*b*H),O.set(x,M*b*H);const C=[H,H,H,H,H,H];D.set(C,_*b*H)}const B=new xi;B.setAttribute("position",new Di(F,R)),B.setAttribute("uv",new Di(O,M)),B.setAttribute("faceIndex",new Di(D,_)),t.push(B),l>fs&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function z_(o,t,i){const r=new mr(o,t,i);return r.texture.mapping=Cc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function pc(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function dT(o,t,i){const r=new Float32Array(fr),l=new nt(0,1,0);return new Ia({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function I_(){return new Ia({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function F_(){return new Ia({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function xd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function pT(o){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Rh||m===Ch,g=m===ms||m===gs;if(p||g){let v=t.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new B_(o)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const y=d.image;return p&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new B_(o)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function mT(o){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Do("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function gT(o,t,i,r){const l={},u=new WeakMap;function h(v){const x=v.target;x.index!==null&&t.remove(x.index);for(const b in x.attributes)t.remove(x.attributes[b]);x.removeEventListener("dispose",h),delete l[x.id];const y=u.get(x);y&&(t.remove(y),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(v,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const y in x)t.update(x[y],o.ARRAY_BUFFER)}function p(v){const x=[],y=v.index,b=v.attributes.position;let R=0;if(y!==null){const F=y.array;R=y.version;for(let O=0,D=F.length;O<D;O+=3){const B=F[O+0],H=F[O+1],I=F[O+2];x.push(B,H,H,I,I,B)}}else if(b!==void 0){const F=b.array;R=b.version;for(let O=0,D=F.length/3-1;O<D;O+=3){const B=O+0,H=O+1,I=O+2;x.push(B,H,H,I,I,B)}}else return;const M=new(_0(x)?T0:E0)(x,1);M.version=R;const _=u.get(v);_&&t.remove(_),u.set(v,M)}function g(v){const x=u.get(v);if(x){const y=v.index;y!==null&&x.version<y.version&&p(v)}else p(v);return u.get(v)}return{get:d,update:m,getWireframeAttribute:g}}function _T(o,t,i){let r;function l(x){r=x}let u,h;function d(x){u=x.type,h=x.bytesPerElement}function m(x,y){o.drawElements(r,y,u,x*h),i.update(y,r,1)}function p(x,y,b){b!==0&&(o.drawElementsInstanced(r,y,u,x*h,b),i.update(y,r,b))}function g(x,y,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,u,x,0,b);let M=0;for(let _=0;_<b;_++)M+=y[_];i.update(M,r,1)}function v(x,y,b,R){if(b===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<x.length;_++)p(x[_]/h,y[_],R[_]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,u,x,0,R,0,b);let _=0;for(let F=0;F<b;F++)_+=y[F]*R[F];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function vT(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function xT(o,t,i){const r=new WeakMap,l=new Qe;function u(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let x=r.get(d);if(x===void 0||x.count!==v){let C=function(){X.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var y=C;x!==void 0&&x.texture.dispose();const b=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],F=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let D=0;b===!0&&(D=1),R===!0&&(D=2),M===!0&&(D=3);let B=d.attributes.position.count*D,H=1;B>t.maxTextureSize&&(H=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const I=new Float32Array(B*H*4*v),X=new v0(I,B,H,v);X.type=na,X.needsUpdate=!0;const w=D*4;for(let G=0;G<v;G++){const Z=_[G],rt=F[G],ft=O[G],lt=B*H*4*G;for(let N=0;N<Z.count;N++){const K=N*w;b===!0&&(l.fromBufferAttribute(Z,N),I[lt+K+0]=l.x,I[lt+K+1]=l.y,I[lt+K+2]=l.z,I[lt+K+3]=0),R===!0&&(l.fromBufferAttribute(rt,N),I[lt+K+4]=l.x,I[lt+K+5]=l.y,I[lt+K+6]=l.z,I[lt+K+7]=0),M===!0&&(l.fromBufferAttribute(ft,N),I[lt+K+8]=l.x,I[lt+K+9]=l.y,I[lt+K+10]=l.z,I[lt+K+11]=ft.itemSize===4?l.w:1)}}x={count:v,texture:X,size:new Ae(B,H)},r.set(d,x),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const R=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",R),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:u}}function ST(o,t,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,g=m.geometry,v=t.get(m,g);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const P0=new Gn,H_=new w0(1,1),B0=new v0,z0=new qS,I0=new R0,G_=[],V_=[],k_=new Float32Array(16),X_=new Float32Array(9),W_=new Float32Array(4);function ys(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let u=G_[l];if(u===void 0&&(u=new Float32Array(l),G_[l]=u),t!==0){r.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(u,d)}return u}function hn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function dn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function Dc(o,t){let i=V_[t];i===void 0&&(i=new Int32Array(t),V_[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function MT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function yT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2fv(this.addr,t),dn(i,t)}}function ET(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(hn(i,t))return;o.uniform3fv(this.addr,t),dn(i,t)}}function TT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4fv(this.addr,t),dn(i,t)}}function bT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,r))return;W_.set(r),o.uniformMatrix2fv(this.addr,!1,W_),dn(i,r)}}function AT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,r))return;X_.set(r),o.uniformMatrix3fv(this.addr,!1,X_),dn(i,r)}}function RT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,r))return;k_.set(r),o.uniformMatrix4fv(this.addr,!1,k_),dn(i,r)}}function CT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function wT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2iv(this.addr,t),dn(i,t)}}function DT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;o.uniform3iv(this.addr,t),dn(i,t)}}function UT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4iv(this.addr,t),dn(i,t)}}function LT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function NT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2uiv(this.addr,t),dn(i,t)}}function OT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;o.uniform3uiv(this.addr,t),dn(i,t)}}function PT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4uiv(this.addr,t),dn(i,t)}}function BT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(H_.compareFunction=g0,u=H_):u=P0,i.setTexture2D(t||u,l)}function zT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||z0,l)}function IT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||I0,l)}function FT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||B0,l)}function HT(o){switch(o){case 5126:return MT;case 35664:return yT;case 35665:return ET;case 35666:return TT;case 35674:return bT;case 35675:return AT;case 35676:return RT;case 5124:case 35670:return CT;case 35667:case 35671:return wT;case 35668:case 35672:return DT;case 35669:case 35673:return UT;case 5125:return LT;case 36294:return NT;case 36295:return OT;case 36296:return PT;case 35678:case 36198:case 36298:case 36306:case 35682:return BT;case 35679:case 36299:case 36307:return zT;case 35680:case 36300:case 36308:case 36293:return IT;case 36289:case 36303:case 36311:case 36292:return FT}}function GT(o,t){o.uniform1fv(this.addr,t)}function VT(o,t){const i=ys(t,this.size,2);o.uniform2fv(this.addr,i)}function kT(o,t){const i=ys(t,this.size,3);o.uniform3fv(this.addr,i)}function XT(o,t){const i=ys(t,this.size,4);o.uniform4fv(this.addr,i)}function WT(o,t){const i=ys(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function qT(o,t){const i=ys(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function YT(o,t){const i=ys(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function ZT(o,t){o.uniform1iv(this.addr,t)}function jT(o,t){o.uniform2iv(this.addr,t)}function KT(o,t){o.uniform3iv(this.addr,t)}function QT(o,t){o.uniform4iv(this.addr,t)}function JT(o,t){o.uniform1uiv(this.addr,t)}function $T(o,t){o.uniform2uiv(this.addr,t)}function tb(o,t){o.uniform3uiv(this.addr,t)}function eb(o,t){o.uniform4uiv(this.addr,t)}function nb(o,t,i){const r=this.cache,l=t.length,u=Dc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),dn(r,u));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||P0,u[h])}function ib(o,t,i){const r=this.cache,l=t.length,u=Dc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),dn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||z0,u[h])}function ab(o,t,i){const r=this.cache,l=t.length,u=Dc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),dn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||I0,u[h])}function rb(o,t,i){const r=this.cache,l=t.length,u=Dc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),dn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||B0,u[h])}function sb(o){switch(o){case 5126:return GT;case 35664:return VT;case 35665:return kT;case 35666:return XT;case 35674:return WT;case 35675:return qT;case 35676:return YT;case 5124:case 35670:return ZT;case 35667:case 35671:return jT;case 35668:case 35672:return KT;case 35669:case 35673:return QT;case 5125:return JT;case 36294:return $T;case 36295:return tb;case 36296:return eb;case 35678:case 36198:case 36298:case 36306:case 35682:return nb;case 35679:case 36299:case 36307:return ib;case 35680:case 36300:case 36308:case 36293:return ab;case 36289:case 36303:case 36311:case 36292:return rb}}class ob{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=HT(i.type)}}class lb{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=sb(i.type)}}class cb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],r)}}}const _h=/(\w+)(\])?(\[|\.)?/g;function q_(o,t){o.seq.push(t),o.map[t.id]=t}function ub(o,t,i){const r=o.name,l=r.length;for(_h.lastIndex=0;;){const u=_h.exec(r),h=_h.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){q_(i,p===void 0?new ob(d,o,t):new lb(d,o,t));break}else{let v=i.map[d];v===void 0&&(v=new cb(d),q_(i,v)),i=v}}}class yc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),h=t.getUniformLocation(i,u.name);ub(u,h,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function Y_(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const fb=37297;let hb=0;function db(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const Z_=new le;function pb(o){be._getMatrix(Z_,be.workingColorSpace,o);const t=`mat3( ${Z_.elements.map(i=>i.toFixed(4))} )`;switch(be.getTransfer(o)){case Ec:return[t,"LinearTransferOETF"];case Be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function j_(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(r&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+db(o.getShaderSource(t),d)}else return u}function mb(o,t){const i=pb(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function gb(o,t){let i;switch(t){case SS:i="Linear";break;case MS:i="Reinhard";break;case yS:i="Cineon";break;case ES:i="ACESFilmic";break;case bS:i="AgX";break;case AS:i="Neutral";break;case TS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const mc=new nt;function _b(){be.getLuminanceCoefficients(mc);const o=mc.x.toFixed(4),t=mc.y.toFixed(4),i=mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bo).join(`
`)}function xb(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function Sb(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(t,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function bo(o){return o!==""}function K_(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Q_(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Mb=/^[ \t]*#include +<([\w\d./]+)>/gm;function sd(o){return o.replace(Mb,Eb)}const yb=new Map;function Eb(o,t){let i=fe[t];if(i===void 0){const r=yb.get(t);if(r!==void 0)i=fe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return sd(i)}const Tb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function J_(o){return o.replace(Tb,bb)}function bb(o,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function $_(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ab(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===i0?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===a0?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ta&&(t="SHADOWMAP_TYPE_VSM"),t}function Rb(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ms:case gs:t="ENVMAP_TYPE_CUBE";break;case Cc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Cb(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case gs:t="ENVMAP_MODE_REFRACTION";break}return t}function wb(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case r0:t="ENVMAP_BLENDING_MULTIPLY";break;case vS:t="ENVMAP_BLENDING_MIX";break;case xS:t="ENVMAP_BLENDING_ADD";break}return t}function Db(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function Ub(o,t,i,r){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=Ab(i),p=Rb(i),g=Cb(i),v=wb(i),x=Db(i),y=vb(i),b=xb(u),R=l.createProgram();let M,_,F=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(bo).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(bo).join(`
`),_.length>0&&(_+=`
`)):(M=[$_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bo).join(`
`),_=[$_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ba?"#define TONE_MAPPING":"",i.toneMapping!==Ba?fe.tonemapping_pars_fragment:"",i.toneMapping!==Ba?gb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,mb("linearToOutputTexel",i.outputColorSpace),_b(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(bo).join(`
`)),h=sd(h),h=K_(h,i),h=Q_(h,i),d=sd(d),d=K_(d,i),d=Q_(d,i),h=J_(h),d=J_(d),i.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===l_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===l_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const O=F+M+h,D=F+_+d,B=Y_(l,l.VERTEX_SHADER,O),H=Y_(l,l.FRAGMENT_SHADER,D);l.attachShader(R,B),l.attachShader(R,H),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function I(G){if(o.debug.checkShaderErrors){const Z=l.getProgramInfoLog(R)||"",rt=l.getShaderInfoLog(B)||"",ft=l.getShaderInfoLog(H)||"",lt=Z.trim(),N=rt.trim(),K=ft.trim();let Y=!0,xt=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(Y=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,B,H);else{const U=j_(l,B,"vertex"),$=j_(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+lt+`
`+U+`
`+$)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(N===""||K==="")&&(xt=!1);xt&&(G.diagnostics={runnable:Y,programLog:lt,vertexShader:{log:N,prefix:M},fragmentShader:{log:K,prefix:_}})}l.deleteShader(B),l.deleteShader(H),X=new yc(l,R),w=Sb(l,R)}let X;this.getUniforms=function(){return X===void 0&&I(this),X};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(R,fb)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=hb++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=B,this.fragmentShader=H,this}let Lb=0;class Nb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new Ob(t),i.set(t,r)),r}}class Ob{constructor(t){this.id=Lb++,this.code=t,this.usedTimes=0}}function Pb(o,t,i,r,l,u,h){const d=new S0,m=new Nb,p=new Set,g=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let y=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(w){return p.add(w),w===0?"uv":`uv${w}`}function M(w,C,G,Z,rt){const ft=Z.fog,lt=rt.geometry,N=w.isMeshStandardMaterial?Z.environment:null,K=(w.isMeshStandardMaterial?i:t).get(w.envMap||N),Y=K&&K.mapping===Cc?K.image.height:null,xt=b[w.type];w.precision!==null&&(y=l.getMaxPrecision(w.precision),y!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const U=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,$=U!==void 0?U.length:0;let vt=0;lt.morphAttributes.position!==void 0&&(vt=1),lt.morphAttributes.normal!==void 0&&(vt=2),lt.morphAttributes.color!==void 0&&(vt=3);let St,Dt,Ft,et;if(xt){const ye=Ri[xt];St=ye.vertexShader,Dt=ye.fragmentShader}else St=w.vertexShader,Dt=w.fragmentShader,m.update(w),Ft=m.getVertexShaderID(w),et=m.getFragmentShaderID(w);const gt=o.getRenderTarget(),bt=o.state.buffers.depth.getReversed(),jt=rt.isInstancedMesh===!0,Wt=rt.isBatchedMesh===!0,he=!!w.map,en=!!w.matcap,z=!!K,Ue=!!w.aoMap,ae=!!w.lightMap,ee=!!w.bumpMap,Ot=!!w.normalMap,Fe=!!w.displacementMap,Gt=!!w.emissiveMap,re=!!w.metalnessMap,Xe=!!w.roughnessMap,We=w.anisotropy>0,L=w.clearcoat>0,E=w.dispersion>0,tt=w.iridescence>0,ut=w.sheen>0,pt=w.transmission>0,ct=We&&!!w.anisotropyMap,Pt=L&&!!w.clearcoatMap,At=L&&!!w.clearcoatNormalMap,kt=L&&!!w.clearcoatRoughnessMap,qt=tt&&!!w.iridescenceMap,Mt=tt&&!!w.iridescenceThicknessMap,Ut=ut&&!!w.sheenColorMap,Zt=ut&&!!w.sheenRoughnessMap,Vt=!!w.specularMap,Ct=!!w.specularColorMap,se=!!w.specularIntensityMap,k=pt&&!!w.transmissionMap,Tt=pt&&!!w.thicknessMap,Rt=!!w.gradientMap,Bt=!!w.alphaMap,yt=w.alphaTest>0,_t=!!w.alphaHash,Ht=!!w.extensions;let ie=Ba;w.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(ie=o.toneMapping);const Ce={shaderID:xt,shaderType:w.type,shaderName:w.name,vertexShader:St,fragmentShader:Dt,defines:w.defines,customVertexShaderID:Ft,customFragmentShaderID:et,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:Wt,batchingColor:Wt&&rt._colorsTexture!==null,instancing:jt,instancingColor:jt&&rt.instanceColor!==null,instancingMorph:jt&&rt.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:gt===null?o.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:_s,alphaToCoverage:!!w.alphaToCoverage,map:he,matcap:en,envMap:z,envMapMode:z&&K.mapping,envMapCubeUVHeight:Y,aoMap:Ue,lightMap:ae,bumpMap:ee,normalMap:Ot,displacementMap:x&&Fe,emissiveMap:Gt,normalMapObjectSpace:Ot&&w.normalMapType===DS,normalMapTangentSpace:Ot&&w.normalMapType===m0,metalnessMap:re,roughnessMap:Xe,anisotropy:We,anisotropyMap:ct,clearcoat:L,clearcoatMap:Pt,clearcoatNormalMap:At,clearcoatRoughnessMap:kt,dispersion:E,iridescence:tt,iridescenceMap:qt,iridescenceThicknessMap:Mt,sheen:ut,sheenColorMap:Ut,sheenRoughnessMap:Zt,specularMap:Vt,specularColorMap:Ct,specularIntensityMap:se,transmission:pt,transmissionMap:k,thicknessMap:Tt,gradientMap:Rt,opaque:w.transparent===!1&&w.blending===hs&&w.alphaToCoverage===!1,alphaMap:Bt,alphaTest:yt,alphaHash:_t,combine:w.combine,mapUv:he&&R(w.map.channel),aoMapUv:Ue&&R(w.aoMap.channel),lightMapUv:ae&&R(w.lightMap.channel),bumpMapUv:ee&&R(w.bumpMap.channel),normalMapUv:Ot&&R(w.normalMap.channel),displacementMapUv:Fe&&R(w.displacementMap.channel),emissiveMapUv:Gt&&R(w.emissiveMap.channel),metalnessMapUv:re&&R(w.metalnessMap.channel),roughnessMapUv:Xe&&R(w.roughnessMap.channel),anisotropyMapUv:ct&&R(w.anisotropyMap.channel),clearcoatMapUv:Pt&&R(w.clearcoatMap.channel),clearcoatNormalMapUv:At&&R(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:kt&&R(w.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&R(w.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&R(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&R(w.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&R(w.sheenRoughnessMap.channel),specularMapUv:Vt&&R(w.specularMap.channel),specularColorMapUv:Ct&&R(w.specularColorMap.channel),specularIntensityMapUv:se&&R(w.specularIntensityMap.channel),transmissionMapUv:k&&R(w.transmissionMap.channel),thicknessMapUv:Tt&&R(w.thicknessMap.channel),alphaMapUv:Bt&&R(w.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(Ot||We),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!lt.attributes.uv&&(he||Bt),fog:!!ft,useFog:w.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:bt,skinning:rt.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:vt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:ie,decodeVideoTexture:he&&w.map.isVideoTexture===!0&&be.getTransfer(w.map.colorSpace)===Be,decodeVideoTextureEmissive:Gt&&w.emissiveMap.isVideoTexture===!0&&be.getTransfer(w.emissiveMap.colorSpace)===Be,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ea,flipSided:w.side===Hn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ht&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&w.extensions.multiDraw===!0||Wt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ce.vertexUv1s=p.has(1),Ce.vertexUv2s=p.has(2),Ce.vertexUv3s=p.has(3),p.clear(),Ce}function _(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const G in w.defines)C.push(G),C.push(w.defines[G]);return w.isRawShaderMaterial===!1&&(F(C,w),O(C,w),C.push(o.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function F(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function O(w,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),w.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),w.push(d.mask)}function D(w){const C=b[w.type];let G;if(C){const Z=Ri[C];G=rM.clone(Z.uniforms)}else G=w.uniforms;return G}function B(w,C){let G;for(let Z=0,rt=g.length;Z<rt;Z++){const ft=g[Z];if(ft.cacheKey===C){G=ft,++G.usedTimes;break}}return G===void 0&&(G=new Ub(o,C,w,u),g.push(G)),G}function H(w){if(--w.usedTimes===0){const C=g.indexOf(w);g[C]=g[g.length-1],g.pop(),w.destroy()}}function I(w){m.remove(w)}function X(){m.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:D,acquireProgram:B,releaseProgram:H,releaseShaderCache:I,programs:g,dispose:X}}function Bb(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function zb(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function t0(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function e0(){const o=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function h(v,x,y,b,R,M){let _=o[t];return _===void 0?(_={id:v.id,object:v,geometry:x,material:y,groupOrder:b,renderOrder:v.renderOrder,z:R,group:M},o[t]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=y,_.groupOrder=b,_.renderOrder=v.renderOrder,_.z=R,_.group=M),t++,_}function d(v,x,y,b,R,M){const _=h(v,x,y,b,R,M);y.transmission>0?r.push(_):y.transparent===!0?l.push(_):i.push(_)}function m(v,x,y,b,R,M){const _=h(v,x,y,b,R,M);y.transmission>0?r.unshift(_):y.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,x){i.length>1&&i.sort(v||zb),r.length>1&&r.sort(x||t0),l.length>1&&l.sort(x||t0)}function g(){for(let v=t,x=o.length;v<x;v++){const y=o[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function Ib(){let o=new WeakMap;function t(r,l){const u=o.get(r);let h;return u===void 0?(h=new e0,o.set(r,[h])):l>=u.length?(h=new e0,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function Fb(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new nt,color:new xe};break;case"SpotLight":i={position:new nt,direction:new nt,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new nt,color:new xe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new nt,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":i={color:new xe,position:new nt,halfWidth:new nt,halfHeight:new nt};break}return o[t.id]=i,i}}}function Hb(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let Gb=0;function Vb(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function kb(o){const t=new Fb,i=Hb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new nt);const l=new nt,u=new Je,h=new Je;function d(p){let g=0,v=0,x=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let y=0,b=0,R=0,M=0,_=0,F=0,O=0,D=0,B=0,H=0,I=0;p.sort(Vb);for(let w=0,C=p.length;w<C;w++){const G=p[w],Z=G.color,rt=G.intensity,ft=G.distance,lt=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=Z.r*rt,v+=Z.g*rt,x+=Z.b*rt;else if(G.isLightProbe){for(let N=0;N<9;N++)r.probe[N].addScaledVector(G.sh.coefficients[N],rt);I++}else if(G.isDirectionalLight){const N=t.get(G);if(N.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const K=G.shadow,Y=i.get(G);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,r.directionalShadow[y]=Y,r.directionalShadowMap[y]=lt,r.directionalShadowMatrix[y]=G.shadow.matrix,F++}r.directional[y]=N,y++}else if(G.isSpotLight){const N=t.get(G);N.position.setFromMatrixPosition(G.matrixWorld),N.color.copy(Z).multiplyScalar(rt),N.distance=ft,N.coneCos=Math.cos(G.angle),N.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),N.decay=G.decay,r.spot[R]=N;const K=G.shadow;if(G.map&&(r.spotLightMap[B]=G.map,B++,K.updateMatrices(G),G.castShadow&&H++),r.spotLightMatrix[R]=K.matrix,G.castShadow){const Y=i.get(G);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,r.spotShadow[R]=Y,r.spotShadowMap[R]=lt,D++}R++}else if(G.isRectAreaLight){const N=t.get(G);N.color.copy(Z).multiplyScalar(rt),N.halfWidth.set(G.width*.5,0,0),N.halfHeight.set(0,G.height*.5,0),r.rectArea[M]=N,M++}else if(G.isPointLight){const N=t.get(G);if(N.color.copy(G.color).multiplyScalar(G.intensity),N.distance=G.distance,N.decay=G.decay,G.castShadow){const K=G.shadow,Y=i.get(G);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,Y.shadowCameraNear=K.camera.near,Y.shadowCameraFar=K.camera.far,r.pointShadow[b]=Y,r.pointShadowMap[b]=lt,r.pointShadowMatrix[b]=G.shadow.matrix,O++}r.point[b]=N,b++}else if(G.isHemisphereLight){const N=t.get(G);N.skyColor.copy(G.color).multiplyScalar(rt),N.groundColor.copy(G.groundColor).multiplyScalar(rt),r.hemi[_]=N,_++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Nt.LTC_FLOAT_1,r.rectAreaLTC2=Nt.LTC_FLOAT_2):(r.rectAreaLTC1=Nt.LTC_HALF_1,r.rectAreaLTC2=Nt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=x;const X=r.hash;(X.directionalLength!==y||X.pointLength!==b||X.spotLength!==R||X.rectAreaLength!==M||X.hemiLength!==_||X.numDirectionalShadows!==F||X.numPointShadows!==O||X.numSpotShadows!==D||X.numSpotMaps!==B||X.numLightProbes!==I)&&(r.directional.length=y,r.spot.length=R,r.rectArea.length=M,r.point.length=b,r.hemi.length=_,r.directionalShadow.length=F,r.directionalShadowMap.length=F,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=F,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=D+B-H,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=I,X.directionalLength=y,X.pointLength=b,X.spotLength=R,X.rectAreaLength=M,X.hemiLength=_,X.numDirectionalShadows=F,X.numPointShadows=O,X.numSpotShadows=D,X.numSpotMaps=B,X.numLightProbes=I,r.version=Gb++)}function m(p,g){let v=0,x=0,y=0,b=0,R=0;const M=g.matrixWorldInverse;for(let _=0,F=p.length;_<F;_++){const O=p[_];if(O.isDirectionalLight){const D=r.directional[v];D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),v++}else if(O.isSpotLight){const D=r.spot[y];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),y++}else if(O.isRectAreaLight){const D=r.rectArea[b];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(M),h.identity(),u.copy(O.matrixWorld),u.premultiply(M),h.extractRotation(u),D.halfWidth.set(O.width*.5,0,0),D.halfHeight.set(0,O.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),b++}else if(O.isPointLight){const D=r.point[x];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(M),x++}else if(O.isHemisphereLight){const D=r.hemi[R];D.direction.setFromMatrixPosition(O.matrixWorld),D.direction.transformDirection(M),R++}}}return{setup:d,setupView:m,state:r}}function n0(o){const t=new kb(o),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function h(g){r.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function Xb(o){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new n0(o),t.set(l,[d])):u>=h.length?(d=new n0(o),h.push(d)):d=h[u],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const Wb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Yb(o,t,i){let r=new _d;const l=new Ae,u=new Ae,h=new Qe,d=new gM({depthPacking:wS}),m=new _M,p={},g=i.maxTextureSize,v={[za]:Hn,[Hn]:za,[ea]:ea},x=new Ia({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:Wb,fragmentShader:qb}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const b=new xi;b.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new fn(b,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=i0;let _=this.type;this.render=function(H,I,X){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||H.length===0)return;const w=o.getRenderTarget(),C=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),Z=o.state;Z.setBlending(Pa),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const rt=_!==ta&&this.type===ta,ft=_===ta&&this.type!==ta;for(let lt=0,N=H.length;lt<N;lt++){const K=H[lt],Y=K.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const xt=Y.getFrameExtents();if(l.multiply(xt),u.copy(Y.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/xt.x),l.x=u.x*xt.x,Y.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/xt.y),l.y=u.y*xt.y,Y.mapSize.y=u.y)),Y.map===null||rt===!0||ft===!0){const $=this.type!==ta?{minFilter:vi,magFilter:vi}:{};Y.map!==null&&Y.map.dispose(),Y.map=new mr(l.x,l.y,$),Y.map.texture.name=K.name+".shadowMap",Y.camera.updateProjectionMatrix()}o.setRenderTarget(Y.map),o.clear();const U=Y.getViewportCount();for(let $=0;$<U;$++){const vt=Y.getViewport($);h.set(u.x*vt.x,u.y*vt.y,u.x*vt.z,u.y*vt.w),Z.viewport(h),Y.updateMatrices(K,$),r=Y.getFrustum(),D(I,X,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===ta&&F(Y,X),Y.needsUpdate=!1}_=this.type,M.needsUpdate=!1,o.setRenderTarget(w,C,G)};function F(H,I){const X=t.update(R);x.defines.VSM_SAMPLES!==H.blurSamples&&(x.defines.VSM_SAMPLES=H.blurSamples,y.defines.VSM_SAMPLES=H.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new mr(l.x,l.y)),x.uniforms.shadow_pass.value=H.map.texture,x.uniforms.resolution.value=H.mapSize,x.uniforms.radius.value=H.radius,o.setRenderTarget(H.mapPass),o.clear(),o.renderBufferDirect(I,null,X,x,R,null),y.uniforms.shadow_pass.value=H.mapPass.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,o.setRenderTarget(H.map),o.clear(),o.renderBufferDirect(I,null,X,y,R,null)}function O(H,I,X,w){let C=null;const G=X.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(G!==void 0)C=G;else if(C=X.isPointLight===!0?m:d,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const Z=C.uuid,rt=I.uuid;let ft=p[Z];ft===void 0&&(ft={},p[Z]=ft);let lt=ft[rt];lt===void 0&&(lt=C.clone(),ft[rt]=lt,I.addEventListener("dispose",B)),C=lt}if(C.visible=I.visible,C.wireframe=I.wireframe,w===ta?C.side=I.shadowSide!==null?I.shadowSide:I.side:C.side=I.shadowSide!==null?I.shadowSide:v[I.side],C.alphaMap=I.alphaMap,C.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,C.map=I.map,C.clipShadows=I.clipShadows,C.clippingPlanes=I.clippingPlanes,C.clipIntersection=I.clipIntersection,C.displacementMap=I.displacementMap,C.displacementScale=I.displacementScale,C.displacementBias=I.displacementBias,C.wireframeLinewidth=I.wireframeLinewidth,C.linewidth=I.linewidth,X.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const Z=o.properties.get(C);Z.light=X}return C}function D(H,I,X,w,C){if(H.visible===!1)return;if(H.layers.test(I.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&C===ta)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,H.matrixWorld);const rt=t.update(H),ft=H.material;if(Array.isArray(ft)){const lt=rt.groups;for(let N=0,K=lt.length;N<K;N++){const Y=lt[N],xt=ft[Y.materialIndex];if(xt&&xt.visible){const U=O(H,xt,w,C);H.onBeforeShadow(o,H,I,X,rt,U,Y),o.renderBufferDirect(X,null,rt,U,H,Y),H.onAfterShadow(o,H,I,X,rt,U,Y)}}}else if(ft.visible){const lt=O(H,ft,w,C);H.onBeforeShadow(o,H,I,X,rt,lt,null),o.renderBufferDirect(X,null,rt,lt,H,null),H.onAfterShadow(o,H,I,X,rt,lt,null)}}const Z=H.children;for(let rt=0,ft=Z.length;rt<ft;rt++)D(Z[rt],I,X,w,C)}function B(H){H.target.removeEventListener("dispose",B);for(const X in p){const w=p[X],C=H.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const Zb={[Sh]:Mh,[yh]:bh,[Eh]:Ah,[ps]:Th,[Mh]:Sh,[bh]:yh,[Ah]:Eh,[Th]:ps};function jb(o,t){function i(){let k=!1;const Tt=new Qe;let Rt=null;const Bt=new Qe(0,0,0,0);return{setMask:function(yt){Rt!==yt&&!k&&(o.colorMask(yt,yt,yt,yt),Rt=yt)},setLocked:function(yt){k=yt},setClear:function(yt,_t,Ht,ie,Ce){Ce===!0&&(yt*=ie,_t*=ie,Ht*=ie),Tt.set(yt,_t,Ht,ie),Bt.equals(Tt)===!1&&(o.clearColor(yt,_t,Ht,ie),Bt.copy(Tt))},reset:function(){k=!1,Rt=null,Bt.set(-1,0,0,0)}}}function r(){let k=!1,Tt=!1,Rt=null,Bt=null,yt=null;return{setReversed:function(_t){if(Tt!==_t){const Ht=t.get("EXT_clip_control");_t?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),Tt=_t;const ie=yt;yt=null,this.setClear(ie)}},getReversed:function(){return Tt},setTest:function(_t){_t?gt(o.DEPTH_TEST):bt(o.DEPTH_TEST)},setMask:function(_t){Rt!==_t&&!k&&(o.depthMask(_t),Rt=_t)},setFunc:function(_t){if(Tt&&(_t=Zb[_t]),Bt!==_t){switch(_t){case Sh:o.depthFunc(o.NEVER);break;case Mh:o.depthFunc(o.ALWAYS);break;case yh:o.depthFunc(o.LESS);break;case ps:o.depthFunc(o.LEQUAL);break;case Eh:o.depthFunc(o.EQUAL);break;case Th:o.depthFunc(o.GEQUAL);break;case bh:o.depthFunc(o.GREATER);break;case Ah:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Bt=_t}},setLocked:function(_t){k=_t},setClear:function(_t){yt!==_t&&(Tt&&(_t=1-_t),o.clearDepth(_t),yt=_t)},reset:function(){k=!1,Rt=null,Bt=null,yt=null,Tt=!1}}}function l(){let k=!1,Tt=null,Rt=null,Bt=null,yt=null,_t=null,Ht=null,ie=null,Ce=null;return{setTest:function(ye){k||(ye?gt(o.STENCIL_TEST):bt(o.STENCIL_TEST))},setMask:function(ye){Tt!==ye&&!k&&(o.stencilMask(ye),Tt=ye)},setFunc:function(ye,li,on){(Rt!==ye||Bt!==li||yt!==on)&&(o.stencilFunc(ye,li,on),Rt=ye,Bt=li,yt=on)},setOp:function(ye,li,on){(_t!==ye||Ht!==li||ie!==on)&&(o.stencilOp(ye,li,on),_t=ye,Ht=li,ie=on)},setLocked:function(ye){k=ye},setClear:function(ye){Ce!==ye&&(o.clearStencil(ye),Ce=ye)},reset:function(){k=!1,Tt=null,Rt=null,Bt=null,yt=null,_t=null,Ht=null,ie=null,Ce=null}}}const u=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},v={},x=new WeakMap,y=[],b=null,R=!1,M=null,_=null,F=null,O=null,D=null,B=null,H=null,I=new xe(0,0,0),X=0,w=!1,C=null,G=null,Z=null,rt=null,ft=null;const lt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,K=0;const Y=o.getParameter(o.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),N=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),N=K>=2);let xt=null,U={};const $=o.getParameter(o.SCISSOR_BOX),vt=o.getParameter(o.VIEWPORT),St=new Qe().fromArray($),Dt=new Qe().fromArray(vt);function Ft(k,Tt,Rt,Bt){const yt=new Uint8Array(4),_t=o.createTexture();o.bindTexture(k,_t),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ht=0;Ht<Rt;Ht++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Tt,0,o.RGBA,1,1,Bt,0,o.RGBA,o.UNSIGNED_BYTE,yt):o.texImage2D(Tt+Ht,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,yt);return _t}const et={};et[o.TEXTURE_2D]=Ft(o.TEXTURE_2D,o.TEXTURE_2D,1),et[o.TEXTURE_CUBE_MAP]=Ft(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[o.TEXTURE_2D_ARRAY]=Ft(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),et[o.TEXTURE_3D]=Ft(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),gt(o.DEPTH_TEST),h.setFunc(ps),ee(!1),Ot(n_),gt(o.CULL_FACE),Ue(Pa);function gt(k){g[k]!==!0&&(o.enable(k),g[k]=!0)}function bt(k){g[k]!==!1&&(o.disable(k),g[k]=!1)}function jt(k,Tt){return v[k]!==Tt?(o.bindFramebuffer(k,Tt),v[k]=Tt,k===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Tt),k===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Tt),!0):!1}function Wt(k,Tt){let Rt=y,Bt=!1;if(k){Rt=x.get(Tt),Rt===void 0&&(Rt=[],x.set(Tt,Rt));const yt=k.textures;if(Rt.length!==yt.length||Rt[0]!==o.COLOR_ATTACHMENT0){for(let _t=0,Ht=yt.length;_t<Ht;_t++)Rt[_t]=o.COLOR_ATTACHMENT0+_t;Rt.length=yt.length,Bt=!0}}else Rt[0]!==o.BACK&&(Rt[0]=o.BACK,Bt=!0);Bt&&o.drawBuffers(Rt)}function he(k){return b!==k?(o.useProgram(k),b=k,!0):!1}const en={[ur]:o.FUNC_ADD,[eS]:o.FUNC_SUBTRACT,[nS]:o.FUNC_REVERSE_SUBTRACT};en[iS]=o.MIN,en[aS]=o.MAX;const z={[rS]:o.ZERO,[sS]:o.ONE,[oS]:o.SRC_COLOR,[vh]:o.SRC_ALPHA,[dS]:o.SRC_ALPHA_SATURATE,[fS]:o.DST_COLOR,[cS]:o.DST_ALPHA,[lS]:o.ONE_MINUS_SRC_COLOR,[xh]:o.ONE_MINUS_SRC_ALPHA,[hS]:o.ONE_MINUS_DST_COLOR,[uS]:o.ONE_MINUS_DST_ALPHA,[pS]:o.CONSTANT_COLOR,[mS]:o.ONE_MINUS_CONSTANT_COLOR,[gS]:o.CONSTANT_ALPHA,[_S]:o.ONE_MINUS_CONSTANT_ALPHA};function Ue(k,Tt,Rt,Bt,yt,_t,Ht,ie,Ce,ye){if(k===Pa){R===!0&&(bt(o.BLEND),R=!1);return}if(R===!1&&(gt(o.BLEND),R=!0),k!==tS){if(k!==M||ye!==w){if((_!==ur||D!==ur)&&(o.blendEquation(o.FUNC_ADD),_=ur,D=ur),ye)switch(k){case hs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case i_:o.blendFunc(o.ONE,o.ONE);break;case a_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case r_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case hs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case i_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case a_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case r_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}F=null,O=null,B=null,H=null,I.set(0,0,0),X=0,M=k,w=ye}return}yt=yt||Tt,_t=_t||Rt,Ht=Ht||Bt,(Tt!==_||yt!==D)&&(o.blendEquationSeparate(en[Tt],en[yt]),_=Tt,D=yt),(Rt!==F||Bt!==O||_t!==B||Ht!==H)&&(o.blendFuncSeparate(z[Rt],z[Bt],z[_t],z[Ht]),F=Rt,O=Bt,B=_t,H=Ht),(ie.equals(I)===!1||Ce!==X)&&(o.blendColor(ie.r,ie.g,ie.b,Ce),I.copy(ie),X=Ce),M=k,w=!1}function ae(k,Tt){k.side===ea?bt(o.CULL_FACE):gt(o.CULL_FACE);let Rt=k.side===Hn;Tt&&(Rt=!Rt),ee(Rt),k.blending===hs&&k.transparent===!1?Ue(Pa):Ue(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),u.setMask(k.colorWrite);const Bt=k.stencilWrite;d.setTest(Bt),Bt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Gt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?gt(o.SAMPLE_ALPHA_TO_COVERAGE):bt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ee(k){C!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),C=k)}function Ot(k){k!==Jx?(gt(o.CULL_FACE),k!==G&&(k===n_?o.cullFace(o.BACK):k===$x?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):bt(o.CULL_FACE),G=k}function Fe(k){k!==Z&&(N&&o.lineWidth(k),Z=k)}function Gt(k,Tt,Rt){k?(gt(o.POLYGON_OFFSET_FILL),(rt!==Tt||ft!==Rt)&&(o.polygonOffset(Tt,Rt),rt=Tt,ft=Rt)):bt(o.POLYGON_OFFSET_FILL)}function re(k){k?gt(o.SCISSOR_TEST):bt(o.SCISSOR_TEST)}function Xe(k){k===void 0&&(k=o.TEXTURE0+lt-1),xt!==k&&(o.activeTexture(k),xt=k)}function We(k,Tt,Rt){Rt===void 0&&(xt===null?Rt=o.TEXTURE0+lt-1:Rt=xt);let Bt=U[Rt];Bt===void 0&&(Bt={type:void 0,texture:void 0},U[Rt]=Bt),(Bt.type!==k||Bt.texture!==Tt)&&(xt!==Rt&&(o.activeTexture(Rt),xt=Rt),o.bindTexture(k,Tt||et[k]),Bt.type=k,Bt.texture=Tt)}function L(){const k=U[xt];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function tt(){try{o.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ut(){try{o.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pt(){try{o.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ct(){try{o.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pt(){try{o.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function At(){try{o.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function kt(){try{o.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function qt(){try{o.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Mt(){try{o.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ut(k){St.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),St.copy(k))}function Zt(k){Dt.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),Dt.copy(k))}function Vt(k,Tt){let Rt=p.get(Tt);Rt===void 0&&(Rt=new WeakMap,p.set(Tt,Rt));let Bt=Rt.get(k);Bt===void 0&&(Bt=o.getUniformBlockIndex(Tt,k.name),Rt.set(k,Bt))}function Ct(k,Tt){const Bt=p.get(Tt).get(k);m.get(Tt)!==Bt&&(o.uniformBlockBinding(Tt,Bt,k.__bindingPointIndex),m.set(Tt,Bt))}function se(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},xt=null,U={},v={},x=new WeakMap,y=[],b=null,R=!1,M=null,_=null,F=null,O=null,D=null,B=null,H=null,I=new xe(0,0,0),X=0,w=!1,C=null,G=null,Z=null,rt=null,ft=null,St.set(0,0,o.canvas.width,o.canvas.height),Dt.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:gt,disable:bt,bindFramebuffer:jt,drawBuffers:Wt,useProgram:he,setBlending:Ue,setMaterial:ae,setFlipSided:ee,setCullFace:Ot,setLineWidth:Fe,setPolygonOffset:Gt,setScissorTest:re,activeTexture:Xe,bindTexture:We,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:tt,texImage2D:qt,texImage3D:Mt,updateUBOMapping:Vt,uniformBlockBinding:Ct,texStorage2D:At,texStorage3D:kt,texSubImage2D:ut,texSubImage3D:pt,compressedTexSubImage2D:ct,compressedTexSubImage3D:Pt,scissor:Ut,viewport:Zt,reset:se}}function Kb(o,t,i,r,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ae,g=new WeakMap;let v;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,E){return y?new OffscreenCanvas(L,E):bc("canvas")}function R(L,E,tt){let ut=1;const pt=We(L);if((pt.width>tt||pt.height>tt)&&(ut=tt/Math.max(pt.width,pt.height)),ut<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ct=Math.floor(ut*pt.width),Pt=Math.floor(ut*pt.height);v===void 0&&(v=b(ct,Pt));const At=E?b(ct,Pt):v;return At.width=ct,At.height=Pt,At.getContext("2d").drawImage(L,0,0,ct,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+ct+"x"+Pt+")."),At}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),L;return L}function M(L){return L.generateMipmaps}function _(L){o.generateMipmap(L)}function F(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(L,E,tt,ut,pt=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ct=E;if(E===o.RED&&(tt===o.FLOAT&&(ct=o.R32F),tt===o.HALF_FLOAT&&(ct=o.R16F),tt===o.UNSIGNED_BYTE&&(ct=o.R8)),E===o.RED_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ct=o.R8UI),tt===o.UNSIGNED_SHORT&&(ct=o.R16UI),tt===o.UNSIGNED_INT&&(ct=o.R32UI),tt===o.BYTE&&(ct=o.R8I),tt===o.SHORT&&(ct=o.R16I),tt===o.INT&&(ct=o.R32I)),E===o.RG&&(tt===o.FLOAT&&(ct=o.RG32F),tt===o.HALF_FLOAT&&(ct=o.RG16F),tt===o.UNSIGNED_BYTE&&(ct=o.RG8)),E===o.RG_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ct=o.RG8UI),tt===o.UNSIGNED_SHORT&&(ct=o.RG16UI),tt===o.UNSIGNED_INT&&(ct=o.RG32UI),tt===o.BYTE&&(ct=o.RG8I),tt===o.SHORT&&(ct=o.RG16I),tt===o.INT&&(ct=o.RG32I)),E===o.RGB_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ct=o.RGB8UI),tt===o.UNSIGNED_SHORT&&(ct=o.RGB16UI),tt===o.UNSIGNED_INT&&(ct=o.RGB32UI),tt===o.BYTE&&(ct=o.RGB8I),tt===o.SHORT&&(ct=o.RGB16I),tt===o.INT&&(ct=o.RGB32I)),E===o.RGBA_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ct=o.RGBA8UI),tt===o.UNSIGNED_SHORT&&(ct=o.RGBA16UI),tt===o.UNSIGNED_INT&&(ct=o.RGBA32UI),tt===o.BYTE&&(ct=o.RGBA8I),tt===o.SHORT&&(ct=o.RGBA16I),tt===o.INT&&(ct=o.RGBA32I)),E===o.RGB&&(tt===o.UNSIGNED_INT_5_9_9_9_REV&&(ct=o.RGB9_E5),tt===o.UNSIGNED_INT_10F_11F_11F_REV&&(ct=o.R11F_G11F_B10F)),E===o.RGBA){const Pt=pt?Ec:be.getTransfer(ut);tt===o.FLOAT&&(ct=o.RGBA32F),tt===o.HALF_FLOAT&&(ct=o.RGBA16F),tt===o.UNSIGNED_BYTE&&(ct=Pt===Be?o.SRGB8_ALPHA8:o.RGBA8),tt===o.UNSIGNED_SHORT_4_4_4_4&&(ct=o.RGBA4),tt===o.UNSIGNED_SHORT_5_5_5_1&&(ct=o.RGB5_A1)}return(ct===o.R16F||ct===o.R32F||ct===o.RG16F||ct===o.RG32F||ct===o.RGBA16F||ct===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function D(L,E){let tt;return L?E===null||E===pr||E===Ro?tt=o.DEPTH24_STENCIL8:E===na?tt=o.DEPTH32F_STENCIL8:E===Ao&&(tt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===pr||E===Ro?tt=o.DEPTH_COMPONENT24:E===na?tt=o.DEPTH_COMPONENT32F:E===Ao&&(tt=o.DEPTH_COMPONENT16),tt}function B(L,E){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==vi&&L.minFilter!==Ci?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function H(L){const E=L.target;E.removeEventListener("dispose",H),X(E),E.isVideoTexture&&g.delete(E)}function I(L){const E=L.target;E.removeEventListener("dispose",I),C(E)}function X(L){const E=r.get(L);if(E.__webglInit===void 0)return;const tt=L.source,ut=x.get(tt);if(ut){const pt=ut[E.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&w(L),Object.keys(ut).length===0&&x.delete(tt)}r.remove(L)}function w(L){const E=r.get(L);o.deleteTexture(E.__webglTexture);const tt=L.source,ut=x.get(tt);delete ut[E.__cacheKey],h.memory.textures--}function C(L){const E=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(E.__webglFramebuffer[ut]))for(let pt=0;pt<E.__webglFramebuffer[ut].length;pt++)o.deleteFramebuffer(E.__webglFramebuffer[ut][pt]);else o.deleteFramebuffer(E.__webglFramebuffer[ut]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ut])}else{if(Array.isArray(E.__webglFramebuffer))for(let ut=0;ut<E.__webglFramebuffer.length;ut++)o.deleteFramebuffer(E.__webglFramebuffer[ut]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ut=0;ut<E.__webglColorRenderbuffer.length;ut++)E.__webglColorRenderbuffer[ut]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ut]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const tt=L.textures;for(let ut=0,pt=tt.length;ut<pt;ut++){const ct=r.get(tt[ut]);ct.__webglTexture&&(o.deleteTexture(ct.__webglTexture),h.memory.textures--),r.remove(tt[ut])}r.remove(L)}let G=0;function Z(){G=0}function rt(){const L=G;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),G+=1,L}function ft(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function lt(L,E){const tt=r.get(L);if(L.isVideoTexture&&re(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&tt.__version!==L.version){const ut=L.image;if(ut===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(tt,L,E);return}}else L.isExternalTexture&&(tt.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,tt.__webglTexture,o.TEXTURE0+E)}function N(L,E){const tt=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&tt.__version!==L.version){et(tt,L,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,tt.__webglTexture,o.TEXTURE0+E)}function K(L,E){const tt=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&tt.__version!==L.version){et(tt,L,E);return}i.bindTexture(o.TEXTURE_3D,tt.__webglTexture,o.TEXTURE0+E)}function Y(L,E){const tt=r.get(L);if(L.version>0&&tt.__version!==L.version){gt(tt,L,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,tt.__webglTexture,o.TEXTURE0+E)}const xt={[wh]:o.REPEAT,[hr]:o.CLAMP_TO_EDGE,[Dh]:o.MIRRORED_REPEAT},U={[vi]:o.NEAREST,[RS]:o.NEAREST_MIPMAP_NEAREST,[ql]:o.NEAREST_MIPMAP_LINEAR,[Ci]:o.LINEAR,[Ff]:o.LINEAR_MIPMAP_NEAREST,[dr]:o.LINEAR_MIPMAP_LINEAR},$={[US]:o.NEVER,[zS]:o.ALWAYS,[LS]:o.LESS,[g0]:o.LEQUAL,[NS]:o.EQUAL,[BS]:o.GEQUAL,[OS]:o.GREATER,[PS]:o.NOTEQUAL};function vt(L,E){if(E.type===na&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Ci||E.magFilter===Ff||E.magFilter===ql||E.magFilter===dr||E.minFilter===Ci||E.minFilter===Ff||E.minFilter===ql||E.minFilter===dr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,xt[E.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,xt[E.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,xt[E.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,U[E.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,U[E.minFilter]),E.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,$[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===vi||E.minFilter!==ql&&E.minFilter!==dr||E.type===na&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");o.texParameterf(L,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function St(L,E){let tt=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",H));const ut=E.source;let pt=x.get(ut);pt===void 0&&(pt={},x.set(ut,pt));const ct=ft(E);if(ct!==L.__cacheKey){pt[ct]===void 0&&(pt[ct]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,tt=!0),pt[ct].usedTimes++;const Pt=pt[L.__cacheKey];Pt!==void 0&&(pt[L.__cacheKey].usedTimes--,Pt.usedTimes===0&&w(E)),L.__cacheKey=ct,L.__webglTexture=pt[ct].texture}return tt}function Dt(L,E,tt){return Math.floor(Math.floor(L/tt)/E)}function Ft(L,E,tt,ut){const ct=L.updateRanges;if(ct.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,tt,ut,E.data);else{ct.sort((Mt,Ut)=>Mt.start-Ut.start);let Pt=0;for(let Mt=1;Mt<ct.length;Mt++){const Ut=ct[Pt],Zt=ct[Mt],Vt=Ut.start+Ut.count,Ct=Dt(Zt.start,E.width,4),se=Dt(Ut.start,E.width,4);Zt.start<=Vt+1&&Ct===se&&Dt(Zt.start+Zt.count-1,E.width,4)===Ct?Ut.count=Math.max(Ut.count,Zt.start+Zt.count-Ut.start):(++Pt,ct[Pt]=Zt)}ct.length=Pt+1;const At=o.getParameter(o.UNPACK_ROW_LENGTH),kt=o.getParameter(o.UNPACK_SKIP_PIXELS),qt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Mt=0,Ut=ct.length;Mt<Ut;Mt++){const Zt=ct[Mt],Vt=Math.floor(Zt.start/4),Ct=Math.ceil(Zt.count/4),se=Vt%E.width,k=Math.floor(Vt/E.width),Tt=Ct,Rt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,se),o.pixelStorei(o.UNPACK_SKIP_ROWS,k),i.texSubImage2D(o.TEXTURE_2D,0,se,k,Tt,Rt,tt,ut,E.data)}L.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,At),o.pixelStorei(o.UNPACK_SKIP_PIXELS,kt),o.pixelStorei(o.UNPACK_SKIP_ROWS,qt)}}function et(L,E,tt){let ut=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ut=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ut=o.TEXTURE_3D);const pt=St(L,E),ct=E.source;i.bindTexture(ut,L.__webglTexture,o.TEXTURE0+tt);const Pt=r.get(ct);if(ct.version!==Pt.__version||pt===!0){i.activeTexture(o.TEXTURE0+tt);const At=be.getPrimaries(be.workingColorSpace),kt=E.colorSpace===Oa?null:be.getPrimaries(E.colorSpace),qt=E.colorSpace===Oa||At===kt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let Mt=R(E.image,!1,l.maxTextureSize);Mt=Xe(E,Mt);const Ut=u.convert(E.format,E.colorSpace),Zt=u.convert(E.type);let Vt=O(E.internalFormat,Ut,Zt,E.colorSpace,E.isVideoTexture);vt(ut,E);let Ct;const se=E.mipmaps,k=E.isVideoTexture!==!0,Tt=Pt.__version===void 0||pt===!0,Rt=ct.dataReady,Bt=B(E,Mt);if(E.isDepthTexture)Vt=D(E.format===wo,E.type),Tt&&(k?i.texStorage2D(o.TEXTURE_2D,1,Vt,Mt.width,Mt.height):i.texImage2D(o.TEXTURE_2D,0,Vt,Mt.width,Mt.height,0,Ut,Zt,null));else if(E.isDataTexture)if(se.length>0){k&&Tt&&i.texStorage2D(o.TEXTURE_2D,Bt,Vt,se[0].width,se[0].height);for(let yt=0,_t=se.length;yt<_t;yt++)Ct=se[yt],k?Rt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Ct.width,Ct.height,Ut,Zt,Ct.data):i.texImage2D(o.TEXTURE_2D,yt,Vt,Ct.width,Ct.height,0,Ut,Zt,Ct.data);E.generateMipmaps=!1}else k?(Tt&&i.texStorage2D(o.TEXTURE_2D,Bt,Vt,Mt.width,Mt.height),Rt&&Ft(E,Mt,Ut,Zt)):i.texImage2D(o.TEXTURE_2D,0,Vt,Mt.width,Mt.height,0,Ut,Zt,Mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){k&&Tt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,Vt,se[0].width,se[0].height,Mt.depth);for(let yt=0,_t=se.length;yt<_t;yt++)if(Ct=se[yt],E.format!==_i)if(Ut!==null)if(k){if(Rt)if(E.layerUpdates.size>0){const Ht=L_(Ct.width,Ct.height,E.format,E.type);for(const ie of E.layerUpdates){const Ce=Ct.data.subarray(ie*Ht/Ct.data.BYTES_PER_ELEMENT,(ie+1)*Ht/Ct.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,ie,Ct.width,Ct.height,1,Ut,Ce)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Ct.width,Ct.height,Mt.depth,Ut,Ct.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,yt,Vt,Ct.width,Ct.height,Mt.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Rt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Ct.width,Ct.height,Mt.depth,Ut,Zt,Ct.data):i.texImage3D(o.TEXTURE_2D_ARRAY,yt,Vt,Ct.width,Ct.height,Mt.depth,0,Ut,Zt,Ct.data)}else{k&&Tt&&i.texStorage2D(o.TEXTURE_2D,Bt,Vt,se[0].width,se[0].height);for(let yt=0,_t=se.length;yt<_t;yt++)Ct=se[yt],E.format!==_i?Ut!==null?k?Rt&&i.compressedTexSubImage2D(o.TEXTURE_2D,yt,0,0,Ct.width,Ct.height,Ut,Ct.data):i.compressedTexImage2D(o.TEXTURE_2D,yt,Vt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Rt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Ct.width,Ct.height,Ut,Zt,Ct.data):i.texImage2D(o.TEXTURE_2D,yt,Vt,Ct.width,Ct.height,0,Ut,Zt,Ct.data)}else if(E.isDataArrayTexture)if(k){if(Tt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,Vt,Mt.width,Mt.height,Mt.depth),Rt)if(E.layerUpdates.size>0){const yt=L_(Mt.width,Mt.height,E.format,E.type);for(const _t of E.layerUpdates){const Ht=Mt.data.subarray(_t*yt/Mt.data.BYTES_PER_ELEMENT,(_t+1)*yt/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,Mt.width,Mt.height,1,Ut,Zt,Ht)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Ut,Zt,Mt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Vt,Mt.width,Mt.height,Mt.depth,0,Ut,Zt,Mt.data);else if(E.isData3DTexture)k?(Tt&&i.texStorage3D(o.TEXTURE_3D,Bt,Vt,Mt.width,Mt.height,Mt.depth),Rt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Ut,Zt,Mt.data)):i.texImage3D(o.TEXTURE_3D,0,Vt,Mt.width,Mt.height,Mt.depth,0,Ut,Zt,Mt.data);else if(E.isFramebufferTexture){if(Tt)if(k)i.texStorage2D(o.TEXTURE_2D,Bt,Vt,Mt.width,Mt.height);else{let yt=Mt.width,_t=Mt.height;for(let Ht=0;Ht<Bt;Ht++)i.texImage2D(o.TEXTURE_2D,Ht,Vt,yt,_t,0,Ut,Zt,null),yt>>=1,_t>>=1}}else if(se.length>0){if(k&&Tt){const yt=We(se[0]);i.texStorage2D(o.TEXTURE_2D,Bt,Vt,yt.width,yt.height)}for(let yt=0,_t=se.length;yt<_t;yt++)Ct=se[yt],k?Rt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Ut,Zt,Ct):i.texImage2D(o.TEXTURE_2D,yt,Vt,Ut,Zt,Ct);E.generateMipmaps=!1}else if(k){if(Tt){const yt=We(Mt);i.texStorage2D(o.TEXTURE_2D,Bt,Vt,yt.width,yt.height)}Rt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ut,Zt,Mt)}else i.texImage2D(o.TEXTURE_2D,0,Vt,Ut,Zt,Mt);M(E)&&_(ut),Pt.__version=ct.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function gt(L,E,tt){if(E.image.length!==6)return;const ut=St(L,E),pt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+tt);const ct=r.get(pt);if(pt.version!==ct.__version||ut===!0){i.activeTexture(o.TEXTURE0+tt);const Pt=be.getPrimaries(be.workingColorSpace),At=E.colorSpace===Oa?null:be.getPrimaries(E.colorSpace),kt=E.colorSpace===Oa||Pt===At?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);const qt=E.isCompressedTexture||E.image[0].isCompressedTexture,Mt=E.image[0]&&E.image[0].isDataTexture,Ut=[];for(let _t=0;_t<6;_t++)!qt&&!Mt?Ut[_t]=R(E.image[_t],!0,l.maxCubemapSize):Ut[_t]=Mt?E.image[_t].image:E.image[_t],Ut[_t]=Xe(E,Ut[_t]);const Zt=Ut[0],Vt=u.convert(E.format,E.colorSpace),Ct=u.convert(E.type),se=O(E.internalFormat,Vt,Ct,E.colorSpace),k=E.isVideoTexture!==!0,Tt=ct.__version===void 0||ut===!0,Rt=pt.dataReady;let Bt=B(E,Zt);vt(o.TEXTURE_CUBE_MAP,E);let yt;if(qt){k&&Tt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,se,Zt.width,Zt.height);for(let _t=0;_t<6;_t++){yt=Ut[_t].mipmaps;for(let Ht=0;Ht<yt.length;Ht++){const ie=yt[Ht];E.format!==_i?Vt!==null?k?Rt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht,0,0,ie.width,ie.height,Vt,ie.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht,se,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht,0,0,ie.width,ie.height,Vt,Ct,ie.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht,se,ie.width,ie.height,0,Vt,Ct,ie.data)}}}else{if(yt=E.mipmaps,k&&Tt){yt.length>0&&Bt++;const _t=We(Ut[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,se,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Mt){k?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Ut[_t].width,Ut[_t].height,Vt,Ct,Ut[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,se,Ut[_t].width,Ut[_t].height,0,Vt,Ct,Ut[_t].data);for(let Ht=0;Ht<yt.length;Ht++){const Ce=yt[Ht].image[_t].image;k?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht+1,0,0,Ce.width,Ce.height,Vt,Ct,Ce.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht+1,se,Ce.width,Ce.height,0,Vt,Ct,Ce.data)}}else{k?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Vt,Ct,Ut[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,se,Vt,Ct,Ut[_t]);for(let Ht=0;Ht<yt.length;Ht++){const ie=yt[Ht];k?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht+1,0,0,Vt,Ct,ie.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht+1,se,Vt,Ct,ie.image[_t])}}}M(E)&&_(o.TEXTURE_CUBE_MAP),ct.__version=pt.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function bt(L,E,tt,ut,pt,ct){const Pt=u.convert(tt.format,tt.colorSpace),At=u.convert(tt.type),kt=O(tt.internalFormat,Pt,At,tt.colorSpace),qt=r.get(E),Mt=r.get(tt);if(Mt.__renderTarget=E,!qt.__hasExternalTextures){const Ut=Math.max(1,E.width>>ct),Zt=Math.max(1,E.height>>ct);pt===o.TEXTURE_3D||pt===o.TEXTURE_2D_ARRAY?i.texImage3D(pt,ct,kt,Ut,Zt,E.depth,0,Pt,At,null):i.texImage2D(pt,ct,kt,Ut,Zt,0,Pt,At,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),Gt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ut,pt,Mt.__webglTexture,0,Fe(E)):(pt===o.TEXTURE_2D||pt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ut,pt,Mt.__webglTexture,ct),i.bindFramebuffer(o.FRAMEBUFFER,null)}function jt(L,E,tt){if(o.bindRenderbuffer(o.RENDERBUFFER,L),E.depthBuffer){const ut=E.depthTexture,pt=ut&&ut.isDepthTexture?ut.type:null,ct=D(E.stencilBuffer,pt),Pt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,At=Fe(E);Gt(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,At,ct,E.width,E.height):tt?o.renderbufferStorageMultisample(o.RENDERBUFFER,At,ct,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ct,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Pt,o.RENDERBUFFER,L)}else{const ut=E.textures;for(let pt=0;pt<ut.length;pt++){const ct=ut[pt],Pt=u.convert(ct.format,ct.colorSpace),At=u.convert(ct.type),kt=O(ct.internalFormat,Pt,At,ct.colorSpace),qt=Fe(E);tt&&Gt(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,qt,kt,E.width,E.height):Gt(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,qt,kt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,kt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Wt(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ut=r.get(E.depthTexture);ut.__renderTarget=E,(!ut.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),lt(E.depthTexture,0);const pt=ut.__webglTexture,ct=Fe(E);if(E.depthTexture.format===Co)Gt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,pt,0,ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,pt,0);else if(E.depthTexture.format===wo)Gt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,pt,0,ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,pt,0);else throw new Error("Unknown depthTexture format")}function he(L){const E=r.get(L),tt=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const ut=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ut){const pt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ut.removeEventListener("dispose",pt)};ut.addEventListener("dispose",pt),E.__depthDisposeCallback=pt}E.__boundDepthTexture=ut}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");const ut=L.texture.mipmaps;ut&&ut.length>0?Wt(E.__webglFramebuffer[0],L):Wt(E.__webglFramebuffer,L)}else if(tt){E.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ut]),E.__webglDepthbuffer[ut]===void 0)E.__webglDepthbuffer[ut]=o.createRenderbuffer(),jt(E.__webglDepthbuffer[ut],L,!1);else{const pt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=E.__webglDepthbuffer[ut];o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,pt,o.RENDERBUFFER,ct)}}else{const ut=L.texture.mipmaps;if(ut&&ut.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),jt(E.__webglDepthbuffer,L,!1);else{const pt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,pt,o.RENDERBUFFER,ct)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function en(L,E,tt){const ut=r.get(L);E!==void 0&&bt(ut.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),tt!==void 0&&he(L)}function z(L){const E=L.texture,tt=r.get(L),ut=r.get(E);L.addEventListener("dispose",I);const pt=L.textures,ct=L.isWebGLCubeRenderTarget===!0,Pt=pt.length>1;if(Pt||(ut.__webglTexture===void 0&&(ut.__webglTexture=o.createTexture()),ut.__version=E.version,h.memory.textures++),ct){tt.__webglFramebuffer=[];for(let At=0;At<6;At++)if(E.mipmaps&&E.mipmaps.length>0){tt.__webglFramebuffer[At]=[];for(let kt=0;kt<E.mipmaps.length;kt++)tt.__webglFramebuffer[At][kt]=o.createFramebuffer()}else tt.__webglFramebuffer[At]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){tt.__webglFramebuffer=[];for(let At=0;At<E.mipmaps.length;At++)tt.__webglFramebuffer[At]=o.createFramebuffer()}else tt.__webglFramebuffer=o.createFramebuffer();if(Pt)for(let At=0,kt=pt.length;At<kt;At++){const qt=r.get(pt[At]);qt.__webglTexture===void 0&&(qt.__webglTexture=o.createTexture(),h.memory.textures++)}if(L.samples>0&&Gt(L)===!1){tt.__webglMultisampledFramebuffer=o.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let At=0;At<pt.length;At++){const kt=pt[At];tt.__webglColorRenderbuffer[At]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,tt.__webglColorRenderbuffer[At]);const qt=u.convert(kt.format,kt.colorSpace),Mt=u.convert(kt.type),Ut=O(kt.internalFormat,qt,Mt,kt.colorSpace,L.isXRRenderTarget===!0),Zt=Fe(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Zt,Ut,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+At,o.RENDERBUFFER,tt.__webglColorRenderbuffer[At])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(tt.__webglDepthRenderbuffer=o.createRenderbuffer(),jt(tt.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ct){i.bindTexture(o.TEXTURE_CUBE_MAP,ut.__webglTexture),vt(o.TEXTURE_CUBE_MAP,E);for(let At=0;At<6;At++)if(E.mipmaps&&E.mipmaps.length>0)for(let kt=0;kt<E.mipmaps.length;kt++)bt(tt.__webglFramebuffer[At][kt],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+At,kt);else bt(tt.__webglFramebuffer[At],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);M(E)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Pt){for(let At=0,kt=pt.length;At<kt;At++){const qt=pt[At],Mt=r.get(qt);let Ut=o.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ut=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ut,Mt.__webglTexture),vt(Ut,qt),bt(tt.__webglFramebuffer,L,qt,o.COLOR_ATTACHMENT0+At,Ut,0),M(qt)&&_(Ut)}i.unbindTexture()}else{let At=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(At=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(At,ut.__webglTexture),vt(At,E),E.mipmaps&&E.mipmaps.length>0)for(let kt=0;kt<E.mipmaps.length;kt++)bt(tt.__webglFramebuffer[kt],L,E,o.COLOR_ATTACHMENT0,At,kt);else bt(tt.__webglFramebuffer,L,E,o.COLOR_ATTACHMENT0,At,0);M(E)&&_(At),i.unbindTexture()}L.depthBuffer&&he(L)}function Ue(L){const E=L.textures;for(let tt=0,ut=E.length;tt<ut;tt++){const pt=E[tt];if(M(pt)){const ct=F(L),Pt=r.get(pt).__webglTexture;i.bindTexture(ct,Pt),_(ct),i.unbindTexture()}}}const ae=[],ee=[];function Ot(L){if(L.samples>0){if(Gt(L)===!1){const E=L.textures,tt=L.width,ut=L.height;let pt=o.COLOR_BUFFER_BIT;const ct=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Pt=r.get(L),At=E.length>1;if(At)for(let qt=0;qt<E.length;qt++)i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const kt=L.texture.mipmaps;kt&&kt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let qt=0;qt<E.length;qt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(pt|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(pt|=o.STENCIL_BUFFER_BIT)),At){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[qt]);const Mt=r.get(E[qt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Mt,0)}o.blitFramebuffer(0,0,tt,ut,0,0,tt,ut,pt,o.NEAREST),m===!0&&(ae.length=0,ee.length=0,ae.push(o.COLOR_ATTACHMENT0+qt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ae.push(ct),ee.push(ct),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ee)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ae))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),At)for(let qt=0;qt<E.length;qt++){i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[qt]);const Mt=r.get(E[qt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.TEXTURE_2D,Mt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const E=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Fe(L){return Math.min(l.maxSamples,L.samples)}function Gt(L){const E=r.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function re(L){const E=h.render.frame;g.get(L)!==E&&(g.set(L,E),L.update())}function Xe(L,E){const tt=L.colorSpace,ut=L.format,pt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||tt!==_s&&tt!==Oa&&(be.getTransfer(tt)===Be?(ut!==_i||pt!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),E}function We(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=rt,this.resetTextureUnits=Z,this.setTexture2D=lt,this.setTexture2DArray=N,this.setTexture3D=K,this.setTextureCube=Y,this.rebindTextures=en,this.setupRenderTarget=z,this.updateRenderTargetMipmap=Ue,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=Gt}function Qb(o,t){function i(r,l=Oa){let u;const h=be.getTransfer(l);if(r===Li)return o.UNSIGNED_BYTE;if(r===ud)return o.UNSIGNED_SHORT_4_4_4_4;if(r===fd)return o.UNSIGNED_SHORT_5_5_5_1;if(r===c0)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===u0)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===o0)return o.BYTE;if(r===l0)return o.SHORT;if(r===Ao)return o.UNSIGNED_SHORT;if(r===cd)return o.INT;if(r===pr)return o.UNSIGNED_INT;if(r===na)return o.FLOAT;if(r===Lo)return o.HALF_FLOAT;if(r===f0)return o.ALPHA;if(r===h0)return o.RGB;if(r===_i)return o.RGBA;if(r===Co)return o.DEPTH_COMPONENT;if(r===wo)return o.DEPTH_STENCIL;if(r===d0)return o.RED;if(r===hd)return o.RED_INTEGER;if(r===p0)return o.RG;if(r===dd)return o.RG_INTEGER;if(r===pd)return o.RGBA_INTEGER;if(r===vc||r===xc||r===Sc||r===Mc)if(h===Be)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===vc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===xc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Sc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Mc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===vc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===xc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Sc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Mc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Uh||r===Lh||r===Nh||r===Oh)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Uh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Lh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Nh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Oh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ph||r===Bh||r===zh)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Ph||r===Bh)return h===Be?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===zh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ih||r===Fh||r===Hh||r===Gh||r===Vh||r===kh||r===Xh||r===Wh||r===qh||r===Yh||r===Zh||r===jh||r===Kh||r===Qh)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Ih)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Fh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Hh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Gh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Vh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===kh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Xh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Wh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===qh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Yh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Zh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===jh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Kh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Qh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Jh||r===$h||r===td)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===Jh)return h===Be?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===$h)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===td)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ed||r===nd||r===id||r===ad)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===ed)return u.COMPRESSED_RED_RGTC1_EXT;if(r===nd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===id)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ad)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ro?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const Jb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$b=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class tA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new D0(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Ia({vertexShader:Jb,fragmentShader:$b,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new fn(new Bo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eA extends Ss{constructor(t,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,g=null,v=null,x=null,y=null,b=null;const R=typeof XRWebGLBinding<"u",M=new tA,_={},F=i.getContextAttributes();let O=null,D=null;const B=[],H=[],I=new Ae;let X=null;const w=new oi;w.viewport=new Qe;const C=new oi;C.viewport=new Qe;const G=[w,C],Z=new yM;let rt=null,ft=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let gt=B[et];return gt===void 0&&(gt=new lh,B[et]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(et){let gt=B[et];return gt===void 0&&(gt=new lh,B[et]=gt),gt.getGripSpace()},this.getHand=function(et){let gt=B[et];return gt===void 0&&(gt=new lh,B[et]=gt),gt.getHandSpace()};function lt(et){const gt=H.indexOf(et.inputSource);if(gt===-1)return;const bt=B[gt];bt!==void 0&&(bt.update(et.inputSource,et.frame,p||h),bt.dispatchEvent({type:et.type,data:et.inputSource}))}function N(){l.removeEventListener("select",lt),l.removeEventListener("selectstart",lt),l.removeEventListener("selectend",lt),l.removeEventListener("squeeze",lt),l.removeEventListener("squeezestart",lt),l.removeEventListener("squeezeend",lt),l.removeEventListener("end",N),l.removeEventListener("inputsourceschange",K);for(let et=0;et<B.length;et++){const gt=H[et];gt!==null&&(H[et]=null,B[et].disconnect(gt))}rt=null,ft=null,M.reset();for(const et in _)delete _[et];t.setRenderTarget(O),y=null,x=null,v=null,l=null,D=null,Ft.stop(),r.isPresenting=!1,t.setPixelRatio(X),t.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){u=et,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){d=et,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(et){p=et},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return v===null&&R&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(et){if(l=et,l!==null){if(O=t.getRenderTarget(),l.addEventListener("select",lt),l.addEventListener("selectstart",lt),l.addEventListener("selectend",lt),l.addEventListener("squeeze",lt),l.addEventListener("squeezestart",lt),l.addEventListener("squeezeend",lt),l.addEventListener("end",N),l.addEventListener("inputsourceschange",K),F.xrCompatible!==!0&&await i.makeXRCompatible(),X=t.getPixelRatio(),t.getSize(I),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,jt=null,Wt=null;F.depth&&(Wt=F.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,bt=F.stencil?wo:Co,jt=F.stencil?Ro:pr);const he={colorFormat:i.RGBA8,depthFormat:Wt,scaleFactor:u};v=this.getBinding(),x=v.createProjectionLayer(he),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),D=new mr(x.textureWidth,x.textureHeight,{format:_i,type:Li,depthTexture:new w0(x.textureWidth,x.textureHeight,jt,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:F.stencil,colorSpace:t.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const bt={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,bt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),D=new mr(y.framebufferWidth,y.framebufferHeight,{format:_i,type:Li,colorSpace:t.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Ft.setContext(l),Ft.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function K(et){for(let gt=0;gt<et.removed.length;gt++){const bt=et.removed[gt],jt=H.indexOf(bt);jt>=0&&(H[jt]=null,B[jt].disconnect(bt))}for(let gt=0;gt<et.added.length;gt++){const bt=et.added[gt];let jt=H.indexOf(bt);if(jt===-1){for(let he=0;he<B.length;he++)if(he>=H.length){H.push(bt),jt=he;break}else if(H[he]===null){H[he]=bt,jt=he;break}if(jt===-1)break}const Wt=B[jt];Wt&&Wt.connect(bt)}}const Y=new nt,xt=new nt;function U(et,gt,bt){Y.setFromMatrixPosition(gt.matrixWorld),xt.setFromMatrixPosition(bt.matrixWorld);const jt=Y.distanceTo(xt),Wt=gt.projectionMatrix.elements,he=bt.projectionMatrix.elements,en=Wt[14]/(Wt[10]-1),z=Wt[14]/(Wt[10]+1),Ue=(Wt[9]+1)/Wt[5],ae=(Wt[9]-1)/Wt[5],ee=(Wt[8]-1)/Wt[0],Ot=(he[8]+1)/he[0],Fe=en*ee,Gt=en*Ot,re=jt/(-ee+Ot),Xe=re*-ee;if(gt.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Xe),et.translateZ(re),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Wt[10]===-1)et.projectionMatrix.copy(gt.projectionMatrix),et.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{const We=en+re,L=z+re,E=Fe-Xe,tt=Gt+(jt-Xe),ut=Ue*z/L*We,pt=ae*z/L*We;et.projectionMatrix.makePerspective(E,tt,ut,pt,We,L),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function $(et,gt){gt===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(gt.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(l===null)return;let gt=et.near,bt=et.far;M.texture!==null&&(M.depthNear>0&&(gt=M.depthNear),M.depthFar>0&&(bt=M.depthFar)),Z.near=C.near=w.near=gt,Z.far=C.far=w.far=bt,(rt!==Z.near||ft!==Z.far)&&(l.updateRenderState({depthNear:Z.near,depthFar:Z.far}),rt=Z.near,ft=Z.far),Z.layers.mask=et.layers.mask|6,w.layers.mask=Z.layers.mask&3,C.layers.mask=Z.layers.mask&5;const jt=et.parent,Wt=Z.cameras;$(Z,jt);for(let he=0;he<Wt.length;he++)$(Wt[he],jt);Wt.length===2?U(Z,w,C):Z.projectionMatrix.copy(w.projectionMatrix),vt(et,Z,jt)};function vt(et,gt,bt){bt===null?et.matrix.copy(gt.matrixWorld):(et.matrix.copy(bt.matrixWorld),et.matrix.invert(),et.matrix.multiply(gt.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(gt.projectionMatrix),et.projectionMatrixInverse.copy(gt.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=rd*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function(et){m=et,x!==null&&(x.fixedFoveation=et),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=et)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Z)},this.getCameraTexture=function(et){return _[et]};let St=null;function Dt(et,gt){if(g=gt.getViewerPose(p||h),b=gt,g!==null){const bt=g.views;y!==null&&(t.setRenderTargetFramebuffer(D,y.framebuffer),t.setRenderTarget(D));let jt=!1;bt.length!==Z.cameras.length&&(Z.cameras.length=0,jt=!0);for(let z=0;z<bt.length;z++){const Ue=bt[z];let ae=null;if(y!==null)ae=y.getViewport(Ue);else{const Ot=v.getViewSubImage(x,Ue);ae=Ot.viewport,z===0&&(t.setRenderTargetTextures(D,Ot.colorTexture,Ot.depthStencilTexture),t.setRenderTarget(D))}let ee=G[z];ee===void 0&&(ee=new oi,ee.layers.enable(z),ee.viewport=new Qe,G[z]=ee),ee.matrix.fromArray(Ue.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(Ue.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(ae.x,ae.y,ae.width,ae.height),z===0&&(Z.matrix.copy(ee.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),jt===!0&&Z.cameras.push(ee)}const Wt=l.enabledFeatures;if(Wt&&Wt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){v=r.getBinding();const z=v.getDepthInformation(bt[0]);z&&z.isValid&&z.texture&&M.init(z,l.renderState)}if(Wt&&Wt.includes("camera-access")&&R){t.state.unbindTexture(),v=r.getBinding();for(let z=0;z<bt.length;z++){const Ue=bt[z].camera;if(Ue){let ae=_[Ue];ae||(ae=new D0,_[Ue]=ae);const ee=v.getCameraImage(Ue);ae.sourceTexture=ee}}}}for(let bt=0;bt<B.length;bt++){const jt=H[bt],Wt=B[bt];jt!==null&&Wt!==void 0&&Wt.update(jt,gt,p||h)}St&&St(et,gt),gt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:gt}),b=null}const Ft=new O0;Ft.setAnimationLoop(Dt),this.setAnimationLoop=function(et){St=et},this.dispose=function(){}}}const or=new Ni,nA=new Je;function iA(o,t){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function r(M,_){_.color.getRGB(M.fogColor.value,b0(o)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,F,O,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(M,_):_.isMeshToonMaterial?(u(M,_),v(M,_)):_.isMeshPhongMaterial?(u(M,_),g(M,_)):_.isMeshStandardMaterial?(u(M,_),x(M,_),_.isMeshPhysicalMaterial&&y(M,_,D)):_.isMeshMatcapMaterial?(u(M,_),b(M,_)):_.isMeshDepthMaterial?u(M,_):_.isMeshDistanceMaterial?(u(M,_),R(M,_)):_.isMeshNormalMaterial?u(M,_):_.isLineBasicMaterial?(h(M,_),_.isLineDashedMaterial&&d(M,_)):_.isPointsMaterial?m(M,_,F,O):_.isSpriteMaterial?p(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===Hn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===Hn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const F=t.get(_),O=F.envMap,D=F.envMapRotation;O&&(M.envMap.value=O,or.copy(D),or.x*=-1,or.y*=-1,or.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),M.envMapRotation.value.setFromMatrix4(nA.makeRotationFromEuler(or)),M.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function h(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function d(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function m(M,_,F,O){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*F,M.scale.value=O*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function p(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function g(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function v(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function x(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function y(M,_,F){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Hn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=F.texture,M.transmissionSamplerSize.value.set(F.width,F.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,_){_.matcap&&(M.matcap.value=_.matcap)}function R(M,_){const F=t.get(_).light;M.referencePosition.value.setFromMatrixPosition(F.matrixWorld),M.nearDistance.value=F.shadow.camera.near,M.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function aA(o,t,i,r){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(F,O){const D=O.program;r.uniformBlockBinding(F,D)}function p(F,O){let D=l[F.id];D===void 0&&(b(F),D=g(F),l[F.id]=D,F.addEventListener("dispose",M));const B=O.program;r.updateUBOMapping(F,B);const H=t.render.frame;u[F.id]!==H&&(x(F),u[F.id]=H)}function g(F){const O=v();F.__bindingPointIndex=O;const D=o.createBuffer(),B=F.__size,H=F.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,B,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,D),D}function v(){for(let F=0;F<d;F++)if(h.indexOf(F)===-1)return h.push(F),F;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(F){const O=l[F.id],D=F.uniforms,B=F.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let H=0,I=D.length;H<I;H++){const X=Array.isArray(D[H])?D[H]:[D[H]];for(let w=0,C=X.length;w<C;w++){const G=X[w];if(y(G,H,w,B)===!0){const Z=G.__offset,rt=Array.isArray(G.value)?G.value:[G.value];let ft=0;for(let lt=0;lt<rt.length;lt++){const N=rt[lt],K=R(N);typeof N=="number"||typeof N=="boolean"?(G.__data[0]=N,o.bufferSubData(o.UNIFORM_BUFFER,Z+ft,G.__data)):N.isMatrix3?(G.__data[0]=N.elements[0],G.__data[1]=N.elements[1],G.__data[2]=N.elements[2],G.__data[3]=0,G.__data[4]=N.elements[3],G.__data[5]=N.elements[4],G.__data[6]=N.elements[5],G.__data[7]=0,G.__data[8]=N.elements[6],G.__data[9]=N.elements[7],G.__data[10]=N.elements[8],G.__data[11]=0):(N.toArray(G.__data,ft),ft+=K.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Z,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(F,O,D,B){const H=F.value,I=O+"_"+D;if(B[I]===void 0)return typeof H=="number"||typeof H=="boolean"?B[I]=H:B[I]=H.clone(),!0;{const X=B[I];if(typeof H=="number"||typeof H=="boolean"){if(X!==H)return B[I]=H,!0}else if(X.equals(H)===!1)return X.copy(H),!0}return!1}function b(F){const O=F.uniforms;let D=0;const B=16;for(let I=0,X=O.length;I<X;I++){const w=Array.isArray(O[I])?O[I]:[O[I]];for(let C=0,G=w.length;C<G;C++){const Z=w[C],rt=Array.isArray(Z.value)?Z.value:[Z.value];for(let ft=0,lt=rt.length;ft<lt;ft++){const N=rt[ft],K=R(N),Y=D%B,xt=Y%K.boundary,U=Y+xt;D+=xt,U!==0&&B-U<K.storage&&(D+=B-U),Z.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=D,D+=K.storage}}}const H=D%B;return H>0&&(D+=B-H),F.__size=D,F.__cache={},this}function R(F){const O={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(O.boundary=4,O.storage=4):F.isVector2?(O.boundary=8,O.storage=8):F.isVector3||F.isColor?(O.boundary=16,O.storage=12):F.isVector4?(O.boundary=16,O.storage=16):F.isMatrix3?(O.boundary=48,O.storage=48):F.isMatrix4?(O.boundary=64,O.storage=64):F.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",F),O}function M(F){const O=F.target;O.removeEventListener("dispose",M);const D=h.indexOf(O.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(l[O.id]),delete l[O.id],delete u[O.id]}function _(){for(const F in l)o.deleteBuffer(l[F]);h=[],l={},u={}}return{bind:m,update:p,dispose:_}}class rA{constructor(t={}){const{canvas:i=FS(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=h;const b=new Uint32Array(4),R=new Int32Array(4);let M=null,_=null;const F=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ba,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let B=!1;this._outputColorSpace=si;let H=0,I=0,X=null,w=-1,C=null;const G=new Qe,Z=new Qe;let rt=null;const ft=new xe(0);let lt=0,N=i.width,K=i.height,Y=1,xt=null,U=null;const $=new Qe(0,0,N,K),vt=new Qe(0,0,N,K);let St=!1;const Dt=new _d;let Ft=!1,et=!1;const gt=new Je,bt=new nt,jt=new Qe,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function en(){return X===null?Y:1}let z=r;function Ue(A,W){return i.getContext(A,W)}try{const A={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ld}`),i.addEventListener("webglcontextlost",Rt,!1),i.addEventListener("webglcontextrestored",Bt,!1),i.addEventListener("webglcontextcreationerror",yt,!1),z===null){const W="webgl2";if(z=Ue(W,A),z===null)throw Ue(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ae,ee,Ot,Fe,Gt,re,Xe,We,L,E,tt,ut,pt,ct,Pt,At,kt,qt,Mt,Ut,Zt,Vt,Ct,se;function k(){ae=new mT(z),ae.init(),Vt=new Qb(z,ae),ee=new lT(z,ae,t,Vt),Ot=new jb(z,ae),ee.reversedDepthBuffer&&x&&Ot.buffers.depth.setReversed(!0),Fe=new vT(z),Gt=new Bb,re=new Kb(z,ae,Ot,Gt,ee,Vt,Fe),Xe=new uT(D),We=new pT(D),L=new TM(z),Ct=new sT(z,L),E=new gT(z,L,Fe,Ct),tt=new ST(z,E,L,Fe),Mt=new xT(z,ee,re),At=new cT(Gt),ut=new Pb(D,Xe,We,ae,ee,Ct,At),pt=new iA(D,Gt),ct=new Ib,Pt=new Xb(ae),qt=new rT(D,Xe,We,Ot,tt,y,m),kt=new Yb(D,tt,ee),se=new aA(z,Fe,ee,Ot),Ut=new oT(z,ae,Fe),Zt=new _T(z,ae,Fe),Fe.programs=ut.programs,D.capabilities=ee,D.extensions=ae,D.properties=Gt,D.renderLists=ct,D.shadowMap=kt,D.state=Ot,D.info=Fe}k();const Tt=new eA(D,z);this.xr=Tt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const A=ae.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ae.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(A){A!==void 0&&(Y=A,this.setSize(N,K,!1))},this.getSize=function(A){return A.set(N,K)},this.setSize=function(A,W,st=!0){if(Tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=A,K=W,i.width=Math.floor(A*Y),i.height=Math.floor(W*Y),st===!0&&(i.style.width=A+"px",i.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(N*Y,K*Y).floor()},this.setDrawingBufferSize=function(A,W,st){N=A,K=W,Y=st,i.width=Math.floor(A*st),i.height=Math.floor(W*st),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(G)},this.getViewport=function(A){return A.copy($)},this.setViewport=function(A,W,st,ot){A.isVector4?$.set(A.x,A.y,A.z,A.w):$.set(A,W,st,ot),Ot.viewport(G.copy($).multiplyScalar(Y).round())},this.getScissor=function(A){return A.copy(vt)},this.setScissor=function(A,W,st,ot){A.isVector4?vt.set(A.x,A.y,A.z,A.w):vt.set(A,W,st,ot),Ot.scissor(Z.copy(vt).multiplyScalar(Y).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(A){Ot.setScissorTest(St=A)},this.setOpaqueSort=function(A){xt=A},this.setTransparentSort=function(A){U=A},this.getClearColor=function(A){return A.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,st=!0){let ot=0;if(A){let j=!1;if(X!==null){const Et=X.texture.format;j=Et===pd||Et===dd||Et===hd}if(j){const Et=X.texture.type,wt=Et===Li||Et===pr||Et===Ao||Et===Ro||Et===ud||Et===fd,zt=qt.getClearColor(),Lt=qt.getClearAlpha(),Qt=zt.r,$t=zt.g,Xt=zt.b;wt?(b[0]=Qt,b[1]=$t,b[2]=Xt,b[3]=Lt,z.clearBufferuiv(z.COLOR,0,b)):(R[0]=Qt,R[1]=$t,R[2]=Xt,R[3]=Lt,z.clearBufferiv(z.COLOR,0,R))}else ot|=z.COLOR_BUFFER_BIT}W&&(ot|=z.DEPTH_BUFFER_BIT),st&&(ot|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Rt,!1),i.removeEventListener("webglcontextrestored",Bt,!1),i.removeEventListener("webglcontextcreationerror",yt,!1),qt.dispose(),ct.dispose(),Pt.dispose(),Gt.dispose(),Xe.dispose(),We.dispose(),tt.dispose(),Ct.dispose(),se.dispose(),ut.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",on),Tt.removeEventListener("sessionend",ln),Ye.stop()};function Rt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const A=Fe.autoReset,W=kt.enabled,st=kt.autoUpdate,ot=kt.needsUpdate,j=kt.type;k(),Fe.autoReset=A,kt.enabled=W,kt.autoUpdate=st,kt.needsUpdate=ot,kt.type=j}function yt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function _t(A){const W=A.target;W.removeEventListener("dispose",_t),Ht(W)}function Ht(A){ie(A),Gt.remove(A)}function ie(A){const W=Gt.get(A).programs;W!==void 0&&(W.forEach(function(st){ut.releaseProgram(st)}),A.isShaderMaterial&&ut.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,st,ot,j,Et){W===null&&(W=Wt);const wt=j.isMesh&&j.matrixWorld.determinant()<0,zt=aa(A,W,st,ot,j);Ot.setMaterial(ot,wt);let Lt=st.index,Qt=1;if(ot.wireframe===!0){if(Lt=E.getWireframeAttribute(st),Lt===void 0)return;Qt=2}const $t=st.drawRange,Xt=st.attributes.position;let ce=$t.start*Qt,Ee=($t.start+$t.count)*Qt;Et!==null&&(ce=Math.max(ce,Et.start*Qt),Ee=Math.min(Ee,(Et.start+Et.count)*Qt)),Lt!==null?(ce=Math.max(ce,0),Ee=Math.min(Ee,Lt.count)):Xt!=null&&(ce=Math.max(ce,0),Ee=Math.min(Ee,Xt.count));const Ve=Ee-ce;if(Ve<0||Ve===1/0)return;Ct.setup(j,ot,zt,st,Lt);let Le,ue=Ut;if(Lt!==null&&(Le=L.get(Lt),ue=Zt,ue.setIndex(Le)),j.isMesh)ot.wireframe===!0?(Ot.setLineWidth(ot.wireframeLinewidth*en()),ue.setMode(z.LINES)):ue.setMode(z.TRIANGLES);else if(j.isLine){let Kt=ot.linewidth;Kt===void 0&&(Kt=1),Ot.setLineWidth(Kt*en()),j.isLineSegments?ue.setMode(z.LINES):j.isLineLoop?ue.setMode(z.LINE_LOOP):ue.setMode(z.LINE_STRIP)}else j.isPoints?ue.setMode(z.POINTS):j.isSprite&&ue.setMode(z.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Do("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ue.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))ue.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Kt=j._multiDrawStarts,Ge=j._multiDrawCounts,ge=j._multiDrawCount,Tn=Lt?L.get(Lt).bytesPerElement:1,ci=Gt.get(ot).currentProgram.getUniforms();for(let Dn=0;Dn<ge;Dn++)ci.setValue(z,"_gl_DrawID",Dn),ue.render(Kt[Dn]/Tn,Ge[Dn])}else if(j.isInstancedMesh)ue.renderInstances(ce,Ve,j.count);else if(st.isInstancedBufferGeometry){const Kt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Ge=Math.min(st.instanceCount,Kt);ue.renderInstances(ce,Ve,Ge)}else ue.render(ce,Ve)};function Ce(A,W,st){A.transparent===!0&&A.side===ea&&A.forceSinglePass===!1?(A.side=Hn,A.needsUpdate=!0,Mi(A,W,st),A.side=za,A.needsUpdate=!0,Mi(A,W,st),A.side=ea):Mi(A,W,st)}this.compile=function(A,W,st=null){st===null&&(st=A),_=Pt.get(st),_.init(W),O.push(_),st.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),A!==st&&A.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),_.setupLights();const ot=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Et=j.material;if(Et)if(Array.isArray(Et))for(let wt=0;wt<Et.length;wt++){const zt=Et[wt];Ce(zt,st,j),ot.add(zt)}else Ce(Et,st,j),ot.add(Et)}),_=O.pop(),ot},this.compileAsync=function(A,W,st=null){const ot=this.compile(A,W,st);return new Promise(j=>{function Et(){if(ot.forEach(function(wt){Gt.get(wt).currentProgram.isReady()&&ot.delete(wt)}),ot.size===0){j(A);return}setTimeout(Et,10)}ae.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let ye=null;function li(A){ye&&ye(A)}function on(){Ye.stop()}function ln(){Ye.start()}const Ye=new O0;Ye.setAnimationLoop(li),typeof self<"u"&&Ye.setContext(self),this.setAnimationLoop=function(A){ye=A,Tt.setAnimationLoop(A),A===null?Ye.stop():Ye.start()},Tt.addEventListener("sessionstart",on),Tt.addEventListener("sessionend",ln),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(W),W=Tt.getCamera()),A.isScene===!0&&A.onBeforeRender(D,A,W,X),_=Pt.get(A,O.length),_.init(W),O.push(_),gt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Dt.setFromProjectionMatrix(gt,wi,W.reversedDepth),et=this.localClippingEnabled,Ft=At.init(this.clippingPlanes,et),M=ct.get(A,F.length),M.init(),F.push(M),Tt.enabled===!0&&Tt.isPresenting===!0){const Et=D.xr.getDepthSensingMesh();Et!==null&&Si(Et,W,-1/0,D.sortObjects)}Si(A,W,0,D.sortObjects),M.finish(),D.sortObjects===!0&&M.sort(xt,U),he=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,he&&qt.addToRenderList(M,A),this.info.render.frame++,Ft===!0&&At.beginShadows();const st=_.state.shadowsArray;kt.render(st,A,W),Ft===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=M.opaque,j=M.transmissive;if(_.setupLights(),W.isArrayCamera){const Et=W.cameras;if(j.length>0)for(let wt=0,zt=Et.length;wt<zt;wt++){const Lt=Et[wt];zo(ot,j,A,Lt)}he&&qt.render(A);for(let wt=0,zt=Et.length;wt<zt;wt++){const Lt=Et[wt];gr(M,A,Lt,Lt.viewport)}}else j.length>0&&zo(ot,j,A,W),he&&qt.render(A),gr(M,A,W);X!==null&&I===0&&(re.updateMultisampleRenderTarget(X),re.updateRenderTargetMipmap(X)),A.isScene===!0&&A.onAfterRender(D,A,W),Ct.resetDefaultState(),w=-1,C=null,O.pop(),O.length>0?(_=O[O.length-1],Ft===!0&&At.setGlobalState(D.clippingPlanes,_.state.camera)):_=null,F.pop(),F.length>0?M=F[F.length-1]:M=null};function Si(A,W,st,ot){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)st=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Dt.intersectsSprite(A)){ot&&jt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(gt);const wt=tt.update(A),zt=A.material;zt.visible&&M.push(A,wt,zt,st,jt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Dt.intersectsObject(A))){const wt=tt.update(A),zt=A.material;if(ot&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),jt.copy(A.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),jt.copy(wt.boundingSphere.center)),jt.applyMatrix4(A.matrixWorld).applyMatrix4(gt)),Array.isArray(zt)){const Lt=wt.groups;for(let Qt=0,$t=Lt.length;Qt<$t;Qt++){const Xt=Lt[Qt],ce=zt[Xt.materialIndex];ce&&ce.visible&&M.push(A,wt,ce,st,jt.z,Xt)}}else zt.visible&&M.push(A,wt,zt,st,jt.z,null)}}const Et=A.children;for(let wt=0,zt=Et.length;wt<zt;wt++)Si(Et[wt],W,st,ot)}function gr(A,W,st,ot){const j=A.opaque,Et=A.transmissive,wt=A.transparent;_.setupLightsView(st),Ft===!0&&At.setGlobalState(D.clippingPlanes,st),ot&&Ot.viewport(G.copy(ot)),j.length>0&&_r(j,W,st),Et.length>0&&_r(Et,W,st),wt.length>0&&_r(wt,W,st),Ot.buffers.depth.setTest(!0),Ot.buffers.depth.setMask(!0),Ot.buffers.color.setMask(!0),Ot.setPolygonOffset(!1)}function zo(A,W,st,ot){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ot.id]===void 0&&(_.state.transmissionRenderTarget[ot.id]=new mr(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?Lo:Li,minFilter:dr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace}));const Et=_.state.transmissionRenderTarget[ot.id],wt=ot.viewport||G;Et.setSize(wt.z*D.transmissionResolutionScale,wt.w*D.transmissionResolutionScale);const zt=D.getRenderTarget(),Lt=D.getActiveCubeFace(),Qt=D.getActiveMipmapLevel();D.setRenderTarget(Et),D.getClearColor(ft),lt=D.getClearAlpha(),lt<1&&D.setClearColor(16777215,.5),D.clear(),he&&qt.render(st);const $t=D.toneMapping;D.toneMapping=Ba;const Xt=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),_.setupLightsView(ot),Ft===!0&&At.setGlobalState(D.clippingPlanes,ot),_r(A,st,ot),re.updateMultisampleRenderTarget(Et),re.updateRenderTargetMipmap(Et),ae.has("WEBGL_multisampled_render_to_texture")===!1){let ce=!1;for(let Ee=0,Ve=W.length;Ee<Ve;Ee++){const Le=W[Ee],ue=Le.object,Kt=Le.geometry,Ge=Le.material,ge=Le.group;if(Ge.side===ea&&ue.layers.test(ot.layers)){const Tn=Ge.side;Ge.side=Hn,Ge.needsUpdate=!0,Es(ue,st,ot,Kt,Ge,ge),Ge.side=Tn,Ge.needsUpdate=!0,ce=!0}}ce===!0&&(re.updateMultisampleRenderTarget(Et),re.updateRenderTargetMipmap(Et))}D.setRenderTarget(zt,Lt,Qt),D.setClearColor(ft,lt),Xt!==void 0&&(ot.viewport=Xt),D.toneMapping=$t}function _r(A,W,st){const ot=W.isScene===!0?W.overrideMaterial:null;for(let j=0,Et=A.length;j<Et;j++){const wt=A[j],zt=wt.object,Lt=wt.geometry,Qt=wt.group;let $t=wt.material;$t.allowOverride===!0&&ot!==null&&($t=ot),zt.layers.test(st.layers)&&Es(zt,W,st,Lt,$t,Qt)}}function Es(A,W,st,ot,j,Et){A.onBeforeRender(D,W,st,ot,j,Et),A.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(D,W,st,ot,A,Et),j.transparent===!0&&j.side===ea&&j.forceSinglePass===!1?(j.side=Hn,j.needsUpdate=!0,D.renderBufferDirect(st,W,ot,j,A,Et),j.side=za,j.needsUpdate=!0,D.renderBufferDirect(st,W,ot,j,A,Et),j.side=ea):D.renderBufferDirect(st,W,ot,j,A,Et),A.onAfterRender(D,W,st,ot,j,Et)}function Mi(A,W,st){W.isScene!==!0&&(W=Wt);const ot=Gt.get(A),j=_.state.lights,Et=_.state.shadowsArray,wt=j.state.version,zt=ut.getParameters(A,j.state,Et,W,st),Lt=ut.getProgramCacheKey(zt);let Qt=ot.programs;ot.environment=A.isMeshStandardMaterial?W.environment:null,ot.fog=W.fog,ot.envMap=(A.isMeshStandardMaterial?We:Xe).get(A.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,Qt===void 0&&(A.addEventListener("dispose",_t),Qt=new Map,ot.programs=Qt);let $t=Qt.get(Lt);if($t!==void 0){if(ot.currentProgram===$t&&ot.lightsStateVersion===wt)return Oi(A,zt),$t}else zt.uniforms=ut.getUniforms(A),A.onBeforeCompile(zt,D),$t=ut.acquireProgram(zt,Lt),Qt.set(Lt,$t),ot.uniforms=zt.uniforms;const Xt=ot.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xt.clippingPlanes=At.uniform),Oi(A,zt),ot.needsLights=ra(A),ot.lightsStateVersion=wt,ot.needsLights&&(Xt.ambientLightColor.value=j.state.ambient,Xt.lightProbe.value=j.state.probe,Xt.directionalLights.value=j.state.directional,Xt.directionalLightShadows.value=j.state.directionalShadow,Xt.spotLights.value=j.state.spot,Xt.spotLightShadows.value=j.state.spotShadow,Xt.rectAreaLights.value=j.state.rectArea,Xt.ltc_1.value=j.state.rectAreaLTC1,Xt.ltc_2.value=j.state.rectAreaLTC2,Xt.pointLights.value=j.state.point,Xt.pointLightShadows.value=j.state.pointShadow,Xt.hemisphereLights.value=j.state.hemi,Xt.directionalShadowMap.value=j.state.directionalShadowMap,Xt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Xt.spotShadowMap.value=j.state.spotShadowMap,Xt.spotLightMatrix.value=j.state.spotLightMatrix,Xt.spotLightMap.value=j.state.spotLightMap,Xt.pointShadowMap.value=j.state.pointShadowMap,Xt.pointShadowMatrix.value=j.state.pointShadowMatrix),ot.currentProgram=$t,ot.uniformsList=null,$t}function vr(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=yc.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function Oi(A,W){const st=Gt.get(A);st.outputColorSpace=W.outputColorSpace,st.batching=W.batching,st.batchingColor=W.batchingColor,st.instancing=W.instancing,st.instancingColor=W.instancingColor,st.instancingMorph=W.instancingMorph,st.skinning=W.skinning,st.morphTargets=W.morphTargets,st.morphNormals=W.morphNormals,st.morphColors=W.morphColors,st.morphTargetsCount=W.morphTargetsCount,st.numClippingPlanes=W.numClippingPlanes,st.numIntersection=W.numClipIntersection,st.vertexAlphas=W.vertexAlphas,st.vertexTangents=W.vertexTangents,st.toneMapping=W.toneMapping}function aa(A,W,st,ot,j){W.isScene!==!0&&(W=Wt),re.resetTextureUnits();const Et=W.fog,wt=ot.isMeshStandardMaterial?W.environment:null,zt=X===null?D.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:_s,Lt=(ot.isMeshStandardMaterial?We:Xe).get(ot.envMap||wt),Qt=ot.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,$t=!!st.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Xt=!!st.morphAttributes.position,ce=!!st.morphAttributes.normal,Ee=!!st.morphAttributes.color;let Ve=Ba;ot.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Ve=D.toneMapping);const Le=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,ue=Le!==void 0?Le.length:0,Kt=Gt.get(ot),Ge=_.state.lights;if(Ft===!0&&(et===!0||A!==C)){const Ze=A===C&&ot.id===w;At.setState(ot,A,Ze)}let ge=!1;ot.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Ge.state.version||Kt.outputColorSpace!==zt||j.isBatchedMesh&&Kt.batching===!1||!j.isBatchedMesh&&Kt.batching===!0||j.isBatchedMesh&&Kt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Kt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Kt.instancing===!1||!j.isInstancedMesh&&Kt.instancing===!0||j.isSkinnedMesh&&Kt.skinning===!1||!j.isSkinnedMesh&&Kt.skinning===!0||j.isInstancedMesh&&Kt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Kt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Kt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Kt.instancingMorph===!1&&j.morphTexture!==null||Kt.envMap!==Lt||ot.fog===!0&&Kt.fog!==Et||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==At.numPlanes||Kt.numIntersection!==At.numIntersection)||Kt.vertexAlphas!==Qt||Kt.vertexTangents!==$t||Kt.morphTargets!==Xt||Kt.morphNormals!==ce||Kt.morphColors!==Ee||Kt.toneMapping!==Ve||Kt.morphTargetsCount!==ue)&&(ge=!0):(ge=!0,Kt.__version=ot.version);let Tn=Kt.currentProgram;ge===!0&&(Tn=Mi(ot,W,j));let ci=!1,Dn=!1,pn=!1;const ze=Tn.getUniforms(),Un=Kt.uniforms;if(Ot.useProgram(Tn.program)&&(ci=!0,Dn=!0,pn=!0),ot.id!==w&&(w=ot.id,Dn=!0),ci||C!==A){Ot.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ze.setValue(z,"projectionMatrix",A.projectionMatrix),ze.setValue(z,"viewMatrix",A.matrixWorldInverse);const xn=ze.map.cameraPosition;xn!==void 0&&xn.setValue(z,bt.setFromMatrixPosition(A.matrixWorld)),ee.logarithmicDepthBuffer&&ze.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&ze.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,Dn=!0,pn=!0)}if(j.isSkinnedMesh){ze.setOptional(z,j,"bindMatrix"),ze.setOptional(z,j,"bindMatrixInverse");const Ze=j.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),ze.setValue(z,"boneTexture",Ze.boneTexture,re))}j.isBatchedMesh&&(ze.setOptional(z,j,"batchingTexture"),ze.setValue(z,"batchingTexture",j._matricesTexture,re),ze.setOptional(z,j,"batchingIdTexture"),ze.setValue(z,"batchingIdTexture",j._indirectTexture,re),ze.setOptional(z,j,"batchingColorTexture"),j._colorsTexture!==null&&ze.setValue(z,"batchingColorTexture",j._colorsTexture,re));const bn=st.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&Mt.update(j,st,Tn),(Dn||Kt.receiveShadow!==j.receiveShadow)&&(Kt.receiveShadow=j.receiveShadow,ze.setValue(z,"receiveShadow",j.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(Un.envMap.value=Lt,Un.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&W.environment!==null&&(Un.envMapIntensity.value=W.environmentIntensity),Dn&&(ze.setValue(z,"toneMappingExposure",D.toneMappingExposure),Kt.needsLights&&Fa(Un,pn),Et&&ot.fog===!0&&pt.refreshFogUniforms(Un,Et),pt.refreshMaterialUniforms(Un,ot,Y,K,_.state.transmissionRenderTarget[A.id]),yc.upload(z,vr(Kt),Un,re)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(yc.upload(z,vr(Kt),Un,re),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&ze.setValue(z,"center",j.center),ze.setValue(z,"modelViewMatrix",j.modelViewMatrix),ze.setValue(z,"normalMatrix",j.normalMatrix),ze.setValue(z,"modelMatrix",j.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const Ze=ot.uniformsGroups;for(let xn=0,xr=Ze.length;xn<xr;xn++){const On=Ze[xn];se.update(On,Tn),se.bind(On,Tn)}}return Tn}function Fa(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function ra(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(A,W,st){const ot=Gt.get(A);ot.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),Gt.get(A.texture).__webglTexture=W,Gt.get(A.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:st,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const st=Gt.get(A);st.__webglFramebuffer=W,st.__useDefaultFramebuffer=W===void 0};const nn=z.createFramebuffer();this.setRenderTarget=function(A,W=0,st=0){X=A,H=W,I=st;let ot=!0,j=null,Et=!1,wt=!1;if(A){const Lt=Gt.get(A);if(Lt.__useDefaultFramebuffer!==void 0)Ot.bindFramebuffer(z.FRAMEBUFFER,null),ot=!1;else if(Lt.__webglFramebuffer===void 0)re.setupRenderTarget(A);else if(Lt.__hasExternalTextures)re.rebindTextures(A,Gt.get(A.texture).__webglTexture,Gt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Xt=A.depthTexture;if(Lt.__boundDepthTexture!==Xt){if(Xt!==null&&Gt.has(Xt)&&(A.width!==Xt.image.width||A.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(A)}}const Qt=A.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(wt=!0);const $t=Gt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray($t[W])?j=$t[W][st]:j=$t[W],Et=!0):A.samples>0&&re.useMultisampledRTT(A)===!1?j=Gt.get(A).__webglMultisampledFramebuffer:Array.isArray($t)?j=$t[st]:j=$t,G.copy(A.viewport),Z.copy(A.scissor),rt=A.scissorTest}else G.copy($).multiplyScalar(Y).floor(),Z.copy(vt).multiplyScalar(Y).floor(),rt=St;if(st!==0&&(j=nn),Ot.bindFramebuffer(z.FRAMEBUFFER,j)&&ot&&Ot.drawBuffers(A,j),Ot.viewport(G),Ot.scissor(Z),Ot.setScissorTest(rt),Et){const Lt=Gt.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+W,Lt.__webglTexture,st)}else if(wt){const Lt=W;for(let Qt=0;Qt<A.textures.length;Qt++){const $t=Gt.get(A.textures[Qt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Qt,$t.__webglTexture,st,Lt)}}else if(A!==null&&st!==0){const Lt=Gt.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Lt.__webglTexture,st)}w=-1},this.readRenderTargetPixels=function(A,W,st,ot,j,Et,wt,zt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Gt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(Lt=Lt[wt]),Lt){Ot.bindFramebuffer(z.FRAMEBUFFER,Lt);try{const Qt=A.textures[zt],$t=Qt.format,Xt=Qt.type;if(!ee.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-ot&&st>=0&&st<=A.height-j&&(A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+zt),z.readPixels(W,st,ot,j,Vt.convert($t),Vt.convert(Xt),Et))}finally{const Qt=X!==null?Gt.get(X).__webglFramebuffer:null;Ot.bindFramebuffer(z.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(A,W,st,ot,j,Et,wt,zt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=Gt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(Lt=Lt[wt]),Lt)if(W>=0&&W<=A.width-ot&&st>=0&&st<=A.height-j){Ot.bindFramebuffer(z.FRAMEBUFFER,Lt);const Qt=A.textures[zt],$t=Qt.format,Xt=Qt.type;if(!ee.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ce=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ce),z.bufferData(z.PIXEL_PACK_BUFFER,Et.byteLength,z.STREAM_READ),A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+zt),z.readPixels(W,st,ot,j,Vt.convert($t),Vt.convert(Xt),0);const Ee=X!==null?Gt.get(X).__webglFramebuffer:null;Ot.bindFramebuffer(z.FRAMEBUFFER,Ee);const Ve=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await HS(z,Ve,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ce),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Et),z.deleteBuffer(ce),z.deleteSync(Ve),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,st=0){const ot=Math.pow(2,-st),j=Math.floor(A.image.width*ot),Et=Math.floor(A.image.height*ot),wt=W!==null?W.x:0,zt=W!==null?W.y:0;re.setTexture2D(A,0),z.copyTexSubImage2D(z.TEXTURE_2D,st,0,0,wt,zt,j,Et),Ot.unbindTexture()};const Io=z.createFramebuffer(),Fo=z.createFramebuffer();this.copyTextureToTexture=function(A,W,st=null,ot=null,j=0,Et=null){Et===null&&(j!==0?(Do("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Et=j,j=0):Et=0);let wt,zt,Lt,Qt,$t,Xt,ce,Ee,Ve;const Le=A.isCompressedTexture?A.mipmaps[Et]:A.image;if(st!==null)wt=st.max.x-st.min.x,zt=st.max.y-st.min.y,Lt=st.isBox3?st.max.z-st.min.z:1,Qt=st.min.x,$t=st.min.y,Xt=st.isBox3?st.min.z:0;else{const bn=Math.pow(2,-j);wt=Math.floor(Le.width*bn),zt=Math.floor(Le.height*bn),A.isDataArrayTexture?Lt=Le.depth:A.isData3DTexture?Lt=Math.floor(Le.depth*bn):Lt=1,Qt=0,$t=0,Xt=0}ot!==null?(ce=ot.x,Ee=ot.y,Ve=ot.z):(ce=0,Ee=0,Ve=0);const ue=Vt.convert(W.format),Kt=Vt.convert(W.type);let Ge;W.isData3DTexture?(re.setTexture3D(W,0),Ge=z.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(re.setTexture2DArray(W,0),Ge=z.TEXTURE_2D_ARRAY):(re.setTexture2D(W,0),Ge=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,W.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,W.unpackAlignment);const ge=z.getParameter(z.UNPACK_ROW_LENGTH),Tn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),ci=z.getParameter(z.UNPACK_SKIP_PIXELS),Dn=z.getParameter(z.UNPACK_SKIP_ROWS),pn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Le.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Le.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Qt),z.pixelStorei(z.UNPACK_SKIP_ROWS,$t),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Xt);const ze=A.isDataArrayTexture||A.isData3DTexture,Un=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const bn=Gt.get(A),Ze=Gt.get(W),xn=Gt.get(bn.__renderTarget),xr=Gt.get(Ze.__renderTarget);Ot.bindFramebuffer(z.READ_FRAMEBUFFER,xn.__webglFramebuffer),Ot.bindFramebuffer(z.DRAW_FRAMEBUFFER,xr.__webglFramebuffer);for(let On=0;On<Lt;On++)ze&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Gt.get(A).__webglTexture,j,Xt+On),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Gt.get(W).__webglTexture,Et,Ve+On)),z.blitFramebuffer(Qt,$t,wt,zt,ce,Ee,wt,zt,z.DEPTH_BUFFER_BIT,z.NEAREST);Ot.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||Gt.has(A)){const bn=Gt.get(A),Ze=Gt.get(W);Ot.bindFramebuffer(z.READ_FRAMEBUFFER,Io),Ot.bindFramebuffer(z.DRAW_FRAMEBUFFER,Fo);for(let xn=0;xn<Lt;xn++)ze?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,bn.__webglTexture,j,Xt+xn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,bn.__webglTexture,j),Un?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ze.__webglTexture,Et,Ve+xn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ze.__webglTexture,Et),j!==0?z.blitFramebuffer(Qt,$t,wt,zt,ce,Ee,wt,zt,z.COLOR_BUFFER_BIT,z.NEAREST):Un?z.copyTexSubImage3D(Ge,Et,ce,Ee,Ve+xn,Qt,$t,wt,zt):z.copyTexSubImage2D(Ge,Et,ce,Ee,Qt,$t,wt,zt);Ot.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Un?A.isDataTexture||A.isData3DTexture?z.texSubImage3D(Ge,Et,ce,Ee,Ve,wt,zt,Lt,ue,Kt,Le.data):W.isCompressedArrayTexture?z.compressedTexSubImage3D(Ge,Et,ce,Ee,Ve,wt,zt,Lt,ue,Le.data):z.texSubImage3D(Ge,Et,ce,Ee,Ve,wt,zt,Lt,ue,Kt,Le):A.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Et,ce,Ee,wt,zt,ue,Kt,Le.data):A.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Et,ce,Ee,Le.width,Le.height,ue,Le.data):z.texSubImage2D(z.TEXTURE_2D,Et,ce,Ee,wt,zt,ue,Kt,Le);z.pixelStorei(z.UNPACK_ROW_LENGTH,ge),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Tn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ci),z.pixelStorei(z.UNPACK_SKIP_ROWS,Dn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,pn),Et===0&&W.generateMipmaps&&z.generateMipmap(Ge),Ot.unbindTexture()},this.initRenderTarget=function(A){Gt.get(A).__webglFramebuffer===void 0&&re.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?re.setTextureCube(A,0):A.isData3DTexture?re.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?re.setTexture2DArray(A,0):re.setTexture2D(A,0),Ot.unbindTexture()},this.resetState=function(){H=0,I=0,X=null,Ot.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=be._getDrawingBufferColorSpace(t),i.unpackColorSpace=be._getUnpackColorSpace()}}class sA{scene;camera;renderer;constructor(t){this.scene=new fM,this.scene.background=new xe(8900331),this.scene.fog=new gd(8900331,50,200),this.camera=new oi(60,t.clientWidth/t.clientHeight,.1,1e3),this.camera.position.set(30,25,30),this.camera.lookAt(0,10,0),this.renderer=new rA({antialias:!0}),this.renderer.setSize(t.clientWidth,t.clientHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=a0,t.appendChild(this.renderer.domElement)}}class oA{static addToScene(t){const i=new MM(16777215,.5);t.add(i);const r=new SM(16777215,.8);r.position.set(50,50,30),r.castShadow=!0,r.shadow.camera.left=-30,r.shadow.camera.right=30,r.shadow.camera.top=30,r.shadow.camera.bottom=-30,r.shadow.mapSize.set(2048,2048),t.add(r)}}class lA{static addToScene(t){const i=new Bo(100,100),r=new Uo({color:7048739}),l=new fn(i,r);l.rotation.x=-Math.PI/2,l.receiveShadow=!0,t.add(l);const u=new N0(100,20,4473924,8947848);t.add(u)}}class gc{static craneMat;static create(){this.craneMat=new Uo({color:16753920});const t=new xs(2,3,2,8),i=new fn(t,this.craneMat);i.position.y=1,i.castShadow=!0;const r=new xs(2.5,2.5,.5,8),l=new fn(r,this.craneMat);l.castShadow=!0,i.add(l);const u=new Ui(1.5,15,1.5),h=new fn(u,this.craneMat);return h.position.y=7.5,h.castShadow=!0,l.add(h),i}static returnCraneMat(){return this.craneMat}}class cA{static create(){const t=new Ui(2,2,2),i=new Uo({color:9127187}),r=new fn(t,i);return r.position.set(8,1,5),r.castShadow=!0,r}}function uA(){const o=_c.useRef(null),[t,i]=_c.useState({boom:0,cable:5,rotation:0,trolley:0});return _c.useEffect(()=>{if(!o.current)return;const r=new sA(o.current);oA.addToScene(r.scene),lA.addToScene(r.scene);const l=gc.create();r.scene.add(l);const u=cA.create();r.scene.add(u);const h=new N0(100,20,4473924,8947848);r.scene.add(h);const d=new xs(2.5,2.5,.5,8),m=new fn(d,gc.craneMat);m.position.y=2.5,m.castShadow=!0,l.add(m);const p=new Ui(1.5,15,1.5),g=new fn(p,gc.craneMat);g.position.y=7.5,g.castShadow=!0,m.add(g);const v=new Ui(20,.8,.8),x=new fn(v,gc.craneMat);x.position.set(10,15,0),x.castShadow=!0,m.add(x);const y=new Ui(1,1,1),b=new Uo({color:16729156}),R=new fn(y,b);R.castShadow=!0,x.add(R);const M=new vd({color:3355443,linewidth:2}),_=new xi,F=[new nt(0,0,0),new nt(0,-5,0)];_.setFromPoints(F);const O=new C0(_,M);R.add(O);const D=new xs(.3,.3,.8,8),B=new Uo({color:3355443}),H=new fn(D,B);H.castShadow=!0,O.add(H);const I={},X=N=>{I[N.key.toLowerCase()]=!0},w=N=>{I[N.key.toLowerCase()]=!1};window.addEventListener("keydown",X),window.addEventListener("keyup",w);let C=0,G=5,Z=0,rt=0;function ft(){requestAnimationFrame(ft),I.q&&C<.3&&(C+=.01),I.e&&C>-.5&&(C-=.01),x.rotation.z=C,I.w&&G>1&&(G-=.1),I.s&&G<15&&(G+=.1);const N=[new nt(0,0,0),new nt(0,-G,0)];O.geometry.setFromPoints(N),H.position.y=-G,I.a&&(Z+=.02),I.d&&(Z-=.02),m.rotation.y=Z,I.arrowleft&&rt>-8&&(rt-=.1),I.arrowright&&rt<8&&(rt+=.1),R.position.x=rt,i({boom:Number(((C+.5)/.8*100).toFixed(0)),cable:Number(G.toFixed(1)),rotation:Number((Z*180/Math.PI%360).toFixed(0)),trolley:Number(rt.toFixed(1))}),r.renderer.render(r.scene,r.camera)}ft();const lt=()=>{o.current&&(r.camera.aspect=o.current.clientWidth/o.current.clientHeight,r.camera.updateProjectionMatrix(),r.renderer.setSize(o.current.clientWidth,o.current.clientHeight))};return window.addEventListener("resize",lt),()=>{window.removeEventListener("keydown",X),window.removeEventListener("keyup",w),window.removeEventListener("resize",lt),o.current?.removeChild(r.renderer.domElement),r.renderer.dispose()}},[]),me.jsxs("div",{className:"w-full h-screen flex flex-col bg-gray-900",children:[me.jsx("div",{ref:o,className:"flex-1"}),me.jsxs("div",{className:"bg-gray-800 text-white p-4",children:[me.jsx("h2",{className:"text-2xl font-bold mb-3 text-orange-400",children:"🏗️ Crane Controller"}),me.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 mb-4",children:[me.jsxs("div",{className:"bg-gray-700 p-3 rounded",children:[me.jsx("div",{className:"text-gray-400 text-sm",children:"Boom Angle"}),me.jsxs("div",{className:"text-2xl font-bold",children:[t.boom,"%"]})]}),me.jsxs("div",{className:"bg-gray-700 p-3 rounded",children:[me.jsx("div",{className:"text-gray-400 text-sm",children:"Cable Length"}),me.jsxs("div",{className:"text-2xl font-bold",children:[t.cable,"m"]})]}),me.jsxs("div",{className:"bg-gray-700 p-3 rounded",children:[me.jsx("div",{className:"text-gray-400 text-sm",children:"Rotation"}),me.jsxs("div",{className:"text-2xl font-bold",children:[t.rotation,"°"]})]}),me.jsxs("div",{className:"bg-gray-700 p-3 rounded",children:[me.jsx("div",{className:"text-gray-400 text-sm",children:"Trolley Pos"}),me.jsxs("div",{className:"text-2xl font-bold",children:[t.trolley,"m"]})]})]}),me.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",children:[me.jsxs("div",{className:"bg-gray-700 p-3 rounded",children:[me.jsx("div",{className:"font-semibold mb-2 text-orange-400",children:"Movement Controls:"}),me.jsxs("div",{className:"space-y-1",children:[me.jsxs("div",{children:[me.jsx("kbd",{className:"bg-gray-600 px-2 py-1 rounded",children:"W"})," / ",me.jsx("kbd",{className:"bg-gray-600 px-2 py-1 rounded",children:"S"})," - Cable Up/Down"]}),me.jsxs("div",{children:[me.jsx("kbd",{className:"bg-gray-600 px-2 py-1 rounded",children:"A"})," / ",me.jsx("kbd",{className:"bg-gray-600 px-2 py-1 rounded",children:"D"})," - Rotate Left/Right"]})]})]}),me.jsxs("div",{className:"bg-gray-700 p-3 rounded",children:[me.jsx("div",{className:"font-semibold mb-2 text-orange-400",children:"Advanced Controls:"}),me.jsxs("div",{className:"space-y-1",children:[me.jsxs("div",{children:[me.jsx("kbd",{className:"bg-gray-600 px-2 py-1 rounded",children:"Q"})," / ",me.jsx("kbd",{className:"bg-gray-600 px-2 py-1 rounded",children:"E"})," - Boom Up/Down"]}),me.jsxs("div",{children:[me.jsx("kbd",{className:"bg-gray-600 px-2 py-1 rounded",children:"←"})," / ",me.jsx("kbd",{className:"bg-gray-600 px-2 py-1 rounded",children:"→"})," - Trolley Left/Right"]})]})]})]})]})]})}Qx.createRoot(document.getElementById("root")).render(me.jsx(_c.StrictMode,{children:me.jsx(uA,{})}));
