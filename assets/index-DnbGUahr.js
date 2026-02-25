(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Hy(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var bh={exports:{}},zo={};var cv;function Gy(){if(cv)return zo;cv=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:c}}return zo.Fragment=t,zo.jsx=i,zo.jsxs=i,zo}var uv;function Vy(){return uv||(uv=1,bh.exports=Gy()),bh.exports}var Q=Vy(),Th={exports:{}},ce={};var fv;function ky(){if(fv)return ce;fv=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),x=Symbol.iterator;function M(N){return N===null||typeof N!="object"?null:(N=x&&N[x]||N["@@iterator"],typeof N=="function"?N:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,S={};function _(N,J,vt){this.props=N,this.context=J,this.refs=S,this.updater=vt||E}_.prototype.isReactComponent={},_.prototype.setState=function(N,J){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,J,"setState")},_.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function L(){}L.prototype=_.prototype;function U(N,J,vt){this.props=N,this.context=J,this.refs=S,this.updater=vt||E}var D=U.prototype=new L;D.constructor=U,T(D,_.prototype),D.isPureReactComponent=!0;var F=Array.isArray;function H(){}var B={H:null,A:null,T:null,S:null},Y=Object.prototype.hasOwnProperty;function C(N,J,vt){var mt=vt.ref;return{$$typeof:s,type:N,key:J,ref:mt!==void 0?mt:null,props:vt}}function w(N,J){return C(N.type,J,N.props)}function G(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function rt(N){var J={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(vt){return J[vt]})}var ft=/\/+/g;function yt(N,J){return typeof N=="object"&&N!==null&&N.key!=null?rt(""+N.key):J.toString(36)}function K(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(H,H):(N.status="pending",N.then(function(J){N.status==="pending"&&(N.status="fulfilled",N.value=J)},function(J){N.status==="pending"&&(N.status="rejected",N.reason=J)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function P(N,J,vt,mt,Ct){var $=typeof N;($==="undefined"||$==="boolean")&&(N=null);var ct=!1;if(N===null)ct=!0;else switch($){case"bigint":case"string":case"number":ct=!0;break;case"object":switch(N.$$typeof){case s:case t:ct=!0;break;case v:return ct=N._init,P(ct(N._payload),J,vt,mt,Ct)}}if(ct)return Ct=Ct(N),ct=mt===""?"."+yt(N,0):mt,F(Ct)?(vt="",ct!=null&&(vt=ct.replace(ft,"$&/")+"/"),P(Ct,J,vt,"",function(Ot){return Ot})):Ct!=null&&(G(Ct)&&(Ct=w(Ct,vt+(Ct.key==null||N&&N.key===Ct.key?"":(""+Ct.key).replace(ft,"$&/")+"/")+ct)),J.push(Ct)),1;ct=0;var wt=mt===""?".":mt+":";if(F(N))for(var Nt=0;Nt<N.length;Nt++)mt=N[Nt],$=wt+yt(mt,Nt),ct+=P(mt,J,vt,$,Ct);else if(Nt=M(N),typeof Nt=="function")for(N=Nt.call(N),Nt=0;!(mt=N.next()).done;)mt=mt.value,$=wt+yt(mt,Nt++),ct+=P(mt,J,vt,$,Ct);else if($==="object"){if(typeof N.then=="function")return P(K(N),J,vt,mt,Ct);throw J=String(N),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return ct}function W(N,J,vt){if(N==null)return N;var mt=[],Ct=0;return P(N,mt,"","",function($){return J.call(vt,$,Ct++)}),mt}function k(N){if(N._status===-1){var J=N._result;J=J(),J.then(function(vt){(N._status===0||N._status===-1)&&(N._status=1,N._result=vt)},function(vt){(N._status===0||N._status===-1)&&(N._status=2,N._result=vt)}),N._status===-1&&(N._status=0,N._result=J)}if(N._status===1)return N._result.default;throw N._result}var _t=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},Mt={map:W,forEach:function(N,J,vt){W(N,function(){J.apply(this,arguments)},vt)},count:function(N){var J=0;return W(N,function(){J++}),J},toArray:function(N){return W(N,function(J){return J})||[]},only:function(N){if(!G(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return ce.Activity=g,ce.Children=Mt,ce.Component=_,ce.Fragment=i,ce.Profiler=l,ce.PureComponent=U,ce.StrictMode=r,ce.Suspense=m,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,ce.__COMPILER_RUNTIME={__proto__:null,c:function(N){return B.H.useMemoCache(N)}},ce.cache=function(N){return function(){return N.apply(null,arguments)}},ce.cacheSignal=function(){return null},ce.cloneElement=function(N,J,vt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var mt=T({},N.props),Ct=N.key;if(J!=null)for($ in J.key!==void 0&&(Ct=""+J.key),J)!Y.call(J,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&J.ref===void 0||(mt[$]=J[$]);var $=arguments.length-2;if($===1)mt.children=vt;else if(1<$){for(var ct=Array($),wt=0;wt<$;wt++)ct[wt]=arguments[wt+2];mt.children=ct}return C(N.type,Ct,mt)},ce.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},ce.createElement=function(N,J,vt){var mt,Ct={},$=null;if(J!=null)for(mt in J.key!==void 0&&($=""+J.key),J)Y.call(J,mt)&&mt!=="key"&&mt!=="__self"&&mt!=="__source"&&(Ct[mt]=J[mt]);var ct=arguments.length-2;if(ct===1)Ct.children=vt;else if(1<ct){for(var wt=Array(ct),Nt=0;Nt<ct;Nt++)wt[Nt]=arguments[Nt+2];Ct.children=wt}if(N&&N.defaultProps)for(mt in ct=N.defaultProps,ct)Ct[mt]===void 0&&(Ct[mt]=ct[mt]);return C(N,$,Ct)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(N){return{$$typeof:d,render:N}},ce.isValidElement=G,ce.lazy=function(N){return{$$typeof:v,_payload:{_status:-1,_result:N},_init:k}},ce.memo=function(N,J){return{$$typeof:p,type:N,compare:J===void 0?null:J}},ce.startTransition=function(N){var J=B.T,vt={};B.T=vt;try{var mt=N(),Ct=B.S;Ct!==null&&Ct(vt,mt),typeof mt=="object"&&mt!==null&&typeof mt.then=="function"&&mt.then(H,_t)}catch($){_t($)}finally{J!==null&&vt.types!==null&&(J.types=vt.types),B.T=J}},ce.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},ce.use=function(N){return B.H.use(N)},ce.useActionState=function(N,J,vt){return B.H.useActionState(N,J,vt)},ce.useCallback=function(N,J){return B.H.useCallback(N,J)},ce.useContext=function(N){return B.H.useContext(N)},ce.useDebugValue=function(){},ce.useDeferredValue=function(N,J){return B.H.useDeferredValue(N,J)},ce.useEffect=function(N,J){return B.H.useEffect(N,J)},ce.useEffectEvent=function(N){return B.H.useEffectEvent(N)},ce.useId=function(){return B.H.useId()},ce.useImperativeHandle=function(N,J,vt){return B.H.useImperativeHandle(N,J,vt)},ce.useInsertionEffect=function(N,J){return B.H.useInsertionEffect(N,J)},ce.useLayoutEffect=function(N,J){return B.H.useLayoutEffect(N,J)},ce.useMemo=function(N,J){return B.H.useMemo(N,J)},ce.useOptimistic=function(N,J){return B.H.useOptimistic(N,J)},ce.useReducer=function(N,J,vt){return B.H.useReducer(N,J,vt)},ce.useRef=function(N){return B.H.useRef(N)},ce.useState=function(N){return B.H.useState(N)},ce.useSyncExternalStore=function(N,J,vt){return B.H.useSyncExternalStore(N,J,vt)},ce.useTransition=function(){return B.H.useTransition()},ce.version="19.2.0",ce}var hv;function lp(){return hv||(hv=1,Th.exports=ky()),Th.exports}var st=lp();const Ur=Hy(st);var Ah={exports:{}},Bo={},Rh={exports:{}},Ch={};var dv;function Xy(){return dv||(dv=1,(function(s){function t(P,W){var k=P.length;P.push(W);t:for(;0<k;){var _t=k-1>>>1,Mt=P[_t];if(0<l(Mt,W))P[_t]=W,P[k]=Mt,k=_t;else break t}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var W=P[0],k=P.pop();if(k!==W){P[0]=k;t:for(var _t=0,Mt=P.length,N=Mt>>>1;_t<N;){var J=2*(_t+1)-1,vt=P[J],mt=J+1,Ct=P[mt];if(0>l(vt,k))mt<Mt&&0>l(Ct,vt)?(P[_t]=Ct,P[mt]=k,_t=mt):(P[_t]=vt,P[J]=k,_t=J);else if(mt<Mt&&0>l(Ct,k))P[_t]=Ct,P[mt]=k,_t=mt;else break t}}return W}function l(P,W){var k=P.sortIndex-W.sortIndex;return k!==0?k:P.id-W.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var m=[],p=[],v=1,g=null,x=3,M=!1,E=!1,T=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function D(P){for(var W=i(p);W!==null;){if(W.callback===null)r(p);else if(W.startTime<=P)r(p),W.sortIndex=W.expirationTime,t(m,W);else break;W=i(p)}}function F(P){if(T=!1,D(P),!E)if(i(m)!==null)E=!0,H||(H=!0,rt());else{var W=i(p);W!==null&&K(F,W.startTime-P)}}var H=!1,B=-1,Y=5,C=-1;function w(){return S?!0:!(s.unstable_now()-C<Y)}function G(){if(S=!1,H){var P=s.unstable_now();C=P;var W=!0;try{t:{E=!1,T&&(T=!1,L(B),B=-1),M=!0;var k=x;try{e:{for(D(P),g=i(m);g!==null&&!(g.expirationTime>P&&w());){var _t=g.callback;if(typeof _t=="function"){g.callback=null,x=g.priorityLevel;var Mt=_t(g.expirationTime<=P);if(P=s.unstable_now(),typeof Mt=="function"){g.callback=Mt,D(P),W=!0;break e}g===i(m)&&r(m),D(P)}else r(m);g=i(m)}if(g!==null)W=!0;else{var N=i(p);N!==null&&K(F,N.startTime-P),W=!1}}break t}finally{g=null,x=k,M=!1}W=void 0}}finally{W?rt():H=!1}}}var rt;if(typeof U=="function")rt=function(){U(G)};else if(typeof MessageChannel<"u"){var ft=new MessageChannel,yt=ft.port2;ft.port1.onmessage=G,rt=function(){yt.postMessage(null)}}else rt=function(){_(G,0)};function K(P,W){B=_(function(){P(s.unstable_now())},W)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(P){P.callback=null},s.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<P?Math.floor(1e3/P):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(P){switch(x){case 1:case 2:case 3:var W=3;break;default:W=x}var k=x;x=W;try{return P()}finally{x=k}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(P,W){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var k=x;x=P;try{return W()}finally{x=k}},s.unstable_scheduleCallback=function(P,W,k){var _t=s.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?_t+k:_t):k=_t,P){case 1:var Mt=-1;break;case 2:Mt=250;break;case 5:Mt=1073741823;break;case 4:Mt=1e4;break;default:Mt=5e3}return Mt=k+Mt,P={id:v++,callback:W,priorityLevel:P,startTime:k,expirationTime:Mt,sortIndex:-1},k>_t?(P.sortIndex=k,t(p,P),i(m)===null&&P===i(p)&&(T?(L(B),B=-1):T=!0,K(F,k-_t))):(P.sortIndex=Mt,t(m,P),E||M||(E=!0,H||(H=!0,rt()))),P},s.unstable_shouldYield=w,s.unstable_wrapCallback=function(P){var W=x;return function(){var k=x;x=W;try{return P.apply(this,arguments)}finally{x=k}}}})(Ch)),Ch}var pv;function Wy(){return pv||(pv=1,Rh.exports=Xy()),Rh.exports}var wh={exports:{}},Rn={};var mv;function qy(){if(mv)return Rn;mv=1;var s=lp();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:v}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Rn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,v)},Rn.flushSync=function(m){var p=f.T,v=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=v,r.d.f()}},Rn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Rn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Rn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,g=d(v,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:x,fetchPriority:M}):v==="script"&&r.d.X(m,{crossOrigin:g,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Rn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Rn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,g=d(v,p.crossOrigin);r.d.L(m,v,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Rn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Rn.requestFormReset=function(m){r.d.r(m)},Rn.unstable_batchedUpdates=function(m,p){return m(p)},Rn.useFormState=function(m,p,v){return f.H.useFormState(m,p,v)},Rn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Rn.version="19.2.0",Rn}var gv;function jy(){if(gv)return wh.exports;gv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),wh.exports=qy(),wh.exports}var vv;function Yy(){if(vv)return Bo;vv=1;var s=Wy(),t=lp(),i=jy();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return m(u),e;if(h===o)return m(u),n;h=h.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=h;else{for(var y=!1,A=u.child;A;){if(A===a){y=!0,a=u,o=h;break}if(A===o){y=!0,o=u,a=h;break}A=A.sibling}if(!y){for(A=h.child;A;){if(A===a){y=!0,a=h,o=u;break}if(A===o){y=!0,o=h,a=u;break}A=A.sibling}if(!y)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),U=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function rt(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var ft=Symbol.for("react.client.reference");function yt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ft?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case _:return"Profiler";case S:return"StrictMode";case F:return"Suspense";case H:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case U:return e.displayName||"Context";case L:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return n=e.displayName||null,n!==null?n:yt(e.type)||"Memo";case Y:n=e._payload,e=e._init;try{return yt(e(n))}catch{}}return null}var K=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k={pending:!1,data:null,method:null,action:null},_t=[],Mt=-1;function N(e){return{current:e}}function J(e){0>Mt||(e.current=_t[Mt],_t[Mt]=null,Mt--)}function vt(e,n){Mt++,_t[Mt]=e.current,e.current=n}var mt=N(null),Ct=N(null),$=N(null),ct=N(null);function wt(e,n){switch(vt($,n),vt(Ct,e),vt(mt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?L0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=L0(n),e=N0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}J(mt),vt(mt,e)}function Nt(){J(mt),J(Ct),J($)}function Ot(e){e.memoizedState!==null&&vt(ct,e);var n=mt.current,a=N0(n,e.type);n!==a&&(vt(Ct,e),vt(mt,a))}function oe(e){Ct.current===e&&(J(mt),J(Ct)),ct.current===e&&(J(ct),Lo._currentValue=k)}var Qe,z;function ae(e){if(Qe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Qe=n&&n[1]||"",z=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qe+e+z}var qt=!1;function jt(e,n){if(!e||qt)return"";qt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(ut){var it=ut}Reflect.construct(e,[],xt)}else{try{xt.call()}catch(ut){it=ut}e.call(xt.prototype)}}else{try{throw Error()}catch(ut){it=ut}(xt=e())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(ut){if(ut&&it&&typeof ut.stack=="string")return[ut.stack,it.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),y=h[0],A=h[1];if(y&&A){var I=y.split(`
`),et=A.split(`
`);for(u=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;u<et.length&&!et[u].includes("DetermineComponentFrameRoot");)u++;if(o===I.length||u===et.length)for(o=I.length-1,u=et.length-1;1<=o&&0<=u&&I[o]!==et[u];)u--;for(;1<=o&&0<=u;o--,u--)if(I[o]!==et[u]){if(o!==1||u!==1)do if(o--,u--,0>u||I[o]!==et[u]){var dt=`
`+I[o].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=o&&0<=u);break}}}finally{qt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ae(a):""}function Yt(e,n){switch(e.tag){case 26:case 27:case 5:return ae(e.type);case 16:return ae("Lazy");case 13:return e.child!==n&&n!==null?ae("Suspense Fallback"):ae("Suspense");case 19:return ae("SuspenseList");case 0:case 15:return jt(e.type,!1);case 11:return jt(e.type.render,!1);case 1:return jt(e.type,!0);case 31:return ae("Activity");default:return""}}function Be(e){try{var n="",a=null;do n+=Yt(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ht=Object.prototype.hasOwnProperty,se=s.unstable_scheduleCallback,Ye=s.unstable_cancelCallback,We=s.unstable_shouldYield,O=s.unstable_requestPaint,b=s.unstable_now,nt=s.unstable_getCurrentPriorityLevel,pt=s.unstable_ImmediatePriority,bt=s.unstable_UserBlockingPriority,ht=s.unstable_NormalPriority,Jt=s.unstable_LowPriority,Dt=s.unstable_IdlePriority,Kt=s.log,Qt=s.unstable_setDisableYieldValue,At=null,Ut=null;function $t(e){if(typeof Kt=="function"&&Qt(e),Ut&&typeof Ut.setStrictMode=="function")try{Ut.setStrictMode(At,e)}catch{}}var Ft=Math.clz32?Math.clz32:X,Pt=Math.log,ue=Math.LN2;function X(e){return e>>>=0,e===0?32:31-(Pt(e)/ue|0)|0}var Rt=256,Lt=262144,Gt=4194304;function Tt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function St(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~h,o!==0?u=Tt(o):(y&=A,y!==0?u=Tt(y):a||(a=A&~e,a!==0&&(u=Tt(a))))):(A=o&~h,A!==0?u=Tt(A):y!==0?u=Tt(y):a||(a=o&~e,a!==0&&(u=Tt(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function Vt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function le(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Oe(){var e=Gt;return Gt<<=1,(Gt&62914560)===0&&(Gt=4194304),e}function Te(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Dn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ei(e,n,a,o,u,h){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,I=e.expirationTimes,et=e.hiddenUpdates;for(a=y&~a;0<a;){var dt=31-Ft(a),xt=1<<dt;A[dt]=0,I[dt]=-1;var it=et[dt];if(it!==null)for(et[dt]=null,dt=0;dt<it.length;dt++){var ut=it[dt];ut!==null&&(ut.lane&=-536870913)}a&=~xt}o!==0&&Ws(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(y&~n))}function Ws(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Ft(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Ai(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Ft(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Pr(e,n){var a=n&-n;return a=(a&42)!==0?1:zr(a),(a&(e.suspendedLanes|n))!==0?0:a}function zr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Br(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function $a(){var e=W.p;return e!==0?e:(e=window.event,e===void 0?32:nv(e.type))}function qs(e,n){var a=W.p;try{return W.p=e,n()}finally{W.p=a}}var Xn=Math.random().toString(36).slice(2),sn="__reactFiber$"+Xn,yn="__reactProps$"+Xn,_a="__reactContainer$"+Xn,js="__reactEvents$"+Xn,vu="__reactListeners$"+Xn,_u="__reactHandles$"+Xn,hl="__reactResources$"+Xn,tr="__reactMarker$"+Xn;function R(e){delete e[sn],delete e[yn],delete e[js],delete e[vu],delete e[_u]}function q(e){var n=e[sn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[_a]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=H0(e);e!==null;){if(a=e[sn])return a;e=H0(e)}return n}e=a,a=e.parentNode}return null}function ot(e){if(e=e[sn]||e[_a]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function lt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function Z(e){var n=e[hl];return n||(n=e[hl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Et(e){e[tr]=!0}var zt=new Set,Xt={};function It(e,n){te(e,n),te(e+"Capture",n)}function te(e,n){for(Xt[e]=n,e=0;e<n.length;e++)zt.add(n[e])}var re=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ee={},me={};function Le(e){return Ht.call(me,e)?!0:Ht.call(ee,e)?!1:re.test(e)?me[e]=!0:(ee[e]=!0,!1)}function Ve(e,n,a){if(Le(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ne(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function ge(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function Wt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ae(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,h.call(this,y)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Sn(e){if(!e._valueTracker){var n=Xe(e)?"checked":"value";e._valueTracker=Ae(e,n,""+e[n])}}function Fi(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Xe(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function gn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var er=/[\n"\\]/g;function xe(e){return e.replace(er,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function An(e,n,a,o,u,h,y,A){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Wt(n)):e.value!==""+Wt(n)&&(e.value=""+Wt(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?hn(e,y,Wt(n)):a!=null?hn(e,y,Wt(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+Wt(A):e.removeAttribute("name")}function Un(e,n,a,o,u,h,y,A){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){Sn(e);return}a=a!=null?""+Wt(a):"",n=n!=null?""+Wt(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),Sn(e)}function hn(e,n,a){n==="number"&&gn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function nn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Wt(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Ir(e,n,a){if(n!=null&&(n=""+Wt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Wt(a):""}function Ri(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(K(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Wt(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Sn(e)}function Fr(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var P1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wp(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||P1.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Dp(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&wp(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&wp(e,h,n[h])}function xu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var z1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),B1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function dl(e){return B1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Hi(){}var yu=null;function Su(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hr=null,Gr=null;function Up(e){var n=ot(e);if(n&&(e=n.stateNode)){var a=e[yn]||null;t:switch(e=n.stateNode,n.type){case"input":if(An(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+xe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[yn]||null;if(!u)throw Error(r(90));An(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Fi(o)}break t;case"textarea":Ir(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&nn(e,!!a.multiple,n,!1)}}}var Mu=!1;function Lp(e,n,a){if(Mu)return e(n,a);Mu=!0;try{var o=e(n);return o}finally{if(Mu=!1,(Hr!==null||Gr!==null)&&(tc(),Hr&&(n=Hr,e=Gr,Gr=Hr=null,Up(n),e)))for(n=0;n<e.length;n++)Up(e[n])}}function Ys(e,n){var a=e.stateNode;if(a===null)return null;var o=a[yn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eu=!1;if(Gi)try{var Zs={};Object.defineProperty(Zs,"passive",{get:function(){Eu=!0}}),window.addEventListener("test",Zs,Zs),window.removeEventListener("test",Zs,Zs)}catch{Eu=!1}var xa=null,bu=null,pl=null;function Np(){if(pl)return pl;var e,n=bu,a=n.length,o,u="value"in xa?xa.value:xa.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var y=a-e;for(o=1;o<=y&&n[a-o]===u[h-o];o++);return pl=u.slice(e,1<o?1-o:void 0)}function ml(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function gl(){return!0}function Op(){return!1}function Pn(e){function n(a,o,u,h,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=y,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(h):h[A]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?gl:Op,this.isPropagationStopped=Op,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=gl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=gl)},persist:function(){},isPersistent:gl}),n}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vl=Pn(nr),Ks=g({},nr,{view:0,detail:0}),I1=Pn(Ks),Tu,Au,Qs,_l=g({},Ks,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qs&&(Qs&&e.type==="mousemove"?(Tu=e.screenX-Qs.screenX,Au=e.screenY-Qs.screenY):Au=Tu=0,Qs=e),Tu)},movementY:function(e){return"movementY"in e?e.movementY:Au}}),Pp=Pn(_l),F1=g({},_l,{dataTransfer:0}),H1=Pn(F1),G1=g({},Ks,{relatedTarget:0}),Ru=Pn(G1),V1=g({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),k1=Pn(V1),X1=g({},nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),W1=Pn(X1),q1=g({},nr,{data:0}),zp=Pn(q1),j1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Y1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Z1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function K1(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Z1[e])?!!n[e]:!1}function Cu(){return K1}var Q1=g({},Ks,{key:function(e){if(e.key){var n=j1[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ml(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Y1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cu,charCode:function(e){return e.type==="keypress"?ml(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ml(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),J1=Pn(Q1),$1=g({},_l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bp=Pn($1),tx=g({},Ks,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cu}),ex=Pn(tx),nx=g({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),ix=Pn(nx),ax=g({},_l,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rx=Pn(ax),sx=g({},nr,{newState:0,oldState:0}),ox=Pn(sx),lx=[9,13,27,32],wu=Gi&&"CompositionEvent"in window,Js=null;Gi&&"documentMode"in document&&(Js=document.documentMode);var cx=Gi&&"TextEvent"in window&&!Js,Ip=Gi&&(!wu||Js&&8<Js&&11>=Js),Fp=" ",Hp=!1;function Gp(e,n){switch(e){case"keyup":return lx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vr=!1;function ux(e,n){switch(e){case"compositionend":return Vp(n);case"keypress":return n.which!==32?null:(Hp=!0,Fp);case"textInput":return e=n.data,e===Fp&&Hp?null:e;default:return null}}function fx(e,n){if(Vr)return e==="compositionend"||!wu&&Gp(e,n)?(e=Np(),pl=bu=xa=null,Vr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ip&&n.locale!=="ko"?null:n.data;default:return null}}var hx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!hx[e.type]:n==="textarea"}function Xp(e,n,a,o){Hr?Gr?Gr.push(o):Gr=[o]:Hr=o,n=oc(n,"onChange"),0<n.length&&(a=new vl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var $s=null,to=null;function dx(e){A0(e,0)}function xl(e){var n=lt(e);if(Fi(n))return e}function Wp(e,n){if(e==="change")return n}var qp=!1;if(Gi){var Du;if(Gi){var Uu="oninput"in document;if(!Uu){var jp=document.createElement("div");jp.setAttribute("oninput","return;"),Uu=typeof jp.oninput=="function"}Du=Uu}else Du=!1;qp=Du&&(!document.documentMode||9<document.documentMode)}function Yp(){$s&&($s.detachEvent("onpropertychange",Zp),to=$s=null)}function Zp(e){if(e.propertyName==="value"&&xl(to)){var n=[];Xp(n,to,e,Su(e)),Lp(dx,n)}}function px(e,n,a){e==="focusin"?(Yp(),$s=n,to=a,$s.attachEvent("onpropertychange",Zp)):e==="focusout"&&Yp()}function mx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xl(to)}function gx(e,n){if(e==="click")return xl(n)}function vx(e,n){if(e==="input"||e==="change")return xl(n)}function _x(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Wn=typeof Object.is=="function"?Object.is:_x;function eo(e,n){if(Wn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Ht.call(n,u)||!Wn(e[u],n[u]))return!1}return!0}function Kp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qp(e,n){var a=Kp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Kp(a)}}function Jp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Jp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function $p(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=gn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=gn(e.document)}return n}function Lu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var xx=Gi&&"documentMode"in document&&11>=document.documentMode,kr=null,Nu=null,no=null,Ou=!1;function tm(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ou||kr==null||kr!==gn(o)||(o=kr,"selectionStart"in o&&Lu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),no&&eo(no,o)||(no=o,o=oc(Nu,"onSelect"),0<o.length&&(n=new vl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=kr)))}function ir(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Xr={animationend:ir("Animation","AnimationEnd"),animationiteration:ir("Animation","AnimationIteration"),animationstart:ir("Animation","AnimationStart"),transitionrun:ir("Transition","TransitionRun"),transitionstart:ir("Transition","TransitionStart"),transitioncancel:ir("Transition","TransitionCancel"),transitionend:ir("Transition","TransitionEnd")},Pu={},em={};Gi&&(em=document.createElement("div").style,"AnimationEvent"in window||(delete Xr.animationend.animation,delete Xr.animationiteration.animation,delete Xr.animationstart.animation),"TransitionEvent"in window||delete Xr.transitionend.transition);function ar(e){if(Pu[e])return Pu[e];if(!Xr[e])return e;var n=Xr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in em)return Pu[e]=n[a];return e}var nm=ar("animationend"),im=ar("animationiteration"),am=ar("animationstart"),yx=ar("transitionrun"),Sx=ar("transitionstart"),Mx=ar("transitioncancel"),rm=ar("transitionend"),sm=new Map,zu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");zu.push("scrollEnd");function pi(e,n){sm.set(e,n),It(n,[e])}var yl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ni=[],Wr=0,Bu=0;function Sl(){for(var e=Wr,n=Bu=Wr=0;n<e;){var a=ni[n];ni[n++]=null;var o=ni[n];ni[n++]=null;var u=ni[n];ni[n++]=null;var h=ni[n];if(ni[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}h!==0&&om(a,u,h)}}function Ml(e,n,a,o){ni[Wr++]=e,ni[Wr++]=n,ni[Wr++]=a,ni[Wr++]=o,Bu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Iu(e,n,a,o){return Ml(e,n,a,o),El(e)}function rr(e,n){return Ml(e,null,null,n),El(e)}function om(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-Ft(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function El(e){if(50<To)throw To=0,Yf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var qr={};function Ex(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(e,n,a,o){return new Ex(e,n,a,o)}function Fu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vi(e,n){var a=e.alternate;return a===null?(a=qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function lm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function bl(e,n,a,o,u,h){var y=0;if(o=e,typeof e=="function")Fu(e)&&(y=1);else if(typeof e=="string")y=Cy(e,a,mt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=qn(31,a,n,u),e.elementType=C,e.lanes=h,e;case T:return sr(a.children,u,h,n);case S:y=8,u|=24;break;case _:return e=qn(12,a,n,u|2),e.elementType=_,e.lanes=h,e;case F:return e=qn(13,a,n,u),e.elementType=F,e.lanes=h,e;case H:return e=qn(19,a,n,u),e.elementType=H,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:y=10;break t;case L:y=9;break t;case D:y=11;break t;case B:y=14;break t;case Y:y=16,o=null;break t}y=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=qn(y,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function sr(e,n,a,o){return e=qn(7,e,o,n),e.lanes=a,e}function Hu(e,n,a){return e=qn(6,e,null,n),e.lanes=a,e}function cm(e){var n=qn(18,null,null,0);return n.stateNode=e,n}function Gu(e,n,a){return n=qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var um=new WeakMap;function ii(e,n){if(typeof e=="object"&&e!==null){var a=um.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Be(n)},um.set(e,n),n)}return{value:e,source:n,stack:Be(n)}}var jr=[],Yr=0,Tl=null,io=0,ai=[],ri=0,ya=null,Ci=1,wi="";function ki(e,n){jr[Yr++]=io,jr[Yr++]=Tl,Tl=e,io=n}function fm(e,n,a){ai[ri++]=Ci,ai[ri++]=wi,ai[ri++]=ya,ya=e;var o=Ci;e=wi;var u=32-Ft(o)-1;o&=~(1<<u),a+=1;var h=32-Ft(n)+u;if(30<h){var y=u-u%5;h=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Ci=1<<32-Ft(n)+u|a<<u|o,wi=h+e}else Ci=1<<h|a<<u|o,wi=e}function Vu(e){e.return!==null&&(ki(e,1),fm(e,1,0))}function ku(e){for(;e===Tl;)Tl=jr[--Yr],jr[Yr]=null,io=jr[--Yr],jr[Yr]=null;for(;e===ya;)ya=ai[--ri],ai[ri]=null,wi=ai[--ri],ai[ri]=null,Ci=ai[--ri],ai[ri]=null}function hm(e,n){ai[ri++]=Ci,ai[ri++]=wi,ai[ri++]=ya,Ci=n.id,wi=n.overflow,ya=e}var Mn=null,qe=null,Me=!1,Sa=null,si=!1,Xu=Error(r(519));function Ma(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ao(ii(n,e)),Xu}function dm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[sn]=e,n[yn]=o,a){case"dialog":_e("cancel",n),_e("close",n);break;case"iframe":case"object":case"embed":_e("load",n);break;case"video":case"audio":for(a=0;a<Ro.length;a++)_e(Ro[a],n);break;case"source":_e("error",n);break;case"img":case"image":case"link":_e("error",n),_e("load",n);break;case"details":_e("toggle",n);break;case"input":_e("invalid",n),Un(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":_e("invalid",n);break;case"textarea":_e("invalid",n),Ri(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||D0(n.textContent,a)?(o.popover!=null&&(_e("beforetoggle",n),_e("toggle",n)),o.onScroll!=null&&_e("scroll",n),o.onScrollEnd!=null&&_e("scrollend",n),o.onClick!=null&&(n.onclick=Hi),n=!0):n=!1,n||Ma(e,!0)}function pm(e){for(Mn=e.return;Mn;)switch(Mn.tag){case 5:case 31:case 13:si=!1;return;case 27:case 3:si=!0;return;default:Mn=Mn.return}}function Zr(e){if(e!==Mn)return!1;if(!Me)return pm(e),Me=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ch(e.type,e.memoizedProps)),a=!a),a&&qe&&Ma(e),pm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));qe=F0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));qe=F0(e)}else n===27?(n=qe,za(e.type)?(e=ph,ph=null,qe=e):qe=n):qe=Mn?li(e.stateNode.nextSibling):null;return!0}function or(){qe=Mn=null,Me=!1}function Wu(){var e=Sa;return e!==null&&(Fn===null?Fn=e:Fn.push.apply(Fn,e),Sa=null),e}function ao(e){Sa===null?Sa=[e]:Sa.push(e)}var qu=N(null),lr=null,Xi=null;function Ea(e,n,a){vt(qu,n._currentValue),n._currentValue=a}function Wi(e){e._currentValue=qu.current,J(qu)}function ju(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Yu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var y=u.child;h=h.firstContext;t:for(;h!==null;){var A=h;h=u;for(var I=0;I<n.length;I++)if(A.context===n[I]){h.lanes|=a,A=h.alternate,A!==null&&(A.lanes|=a),ju(h.return,a,e),o||(y=null);break t}h=A.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(r(341));y.lanes|=a,h=y.alternate,h!==null&&(h.lanes|=a),ju(y,a,e),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===e){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function Kr(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var A=u.type;Wn(u.pendingProps.value,y.value)||(e!==null?e.push(A):e=[A])}}else if(u===ct.current){if(y=u.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Lo):e=[Lo])}u=u.return}e!==null&&Yu(n,e,a,o),n.flags|=262144}function Al(e){for(e=e.firstContext;e!==null;){if(!Wn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function cr(e){lr=e,Xi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function En(e){return mm(lr,e)}function Rl(e,n){return lr===null&&cr(e),mm(e,n)}function mm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Xi===null){if(e===null)throw Error(r(308));Xi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Xi=Xi.next=n;return a}var bx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Tx=s.unstable_scheduleCallback,Ax=s.unstable_NormalPriority,on={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Zu(){return{controller:new bx,data:new Map,refCount:0}}function ro(e){e.refCount--,e.refCount===0&&Tx(Ax,function(){e.controller.abort()})}var so=null,Ku=0,Qr=0,Jr=null;function Rx(e,n){if(so===null){var a=so=[];Ku=0,Qr=th(),Jr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Ku++,n.then(gm,gm),n}function gm(){if(--Ku===0&&so!==null){Jr!==null&&(Jr.status="fulfilled");var e=so;so=null,Qr=0,Jr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Cx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var vm=P.S;P.S=function(e,n){t0=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Rx(e,n),vm!==null&&vm(e,n)};var ur=N(null);function Qu(){var e=ur.current;return e!==null?e:ke.pooledCache}function Cl(e,n){n===null?vt(ur,ur.current):vt(ur,n.pool)}function _m(){var e=Qu();return e===null?null:{parent:on._currentValue,pool:e}}var $r=Error(r(460)),Ju=Error(r(474)),wl=Error(r(542)),Dl={then:function(){}};function xm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ym(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Hi,Hi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Mm(e),e;default:if(typeof n.status=="string")n.then(Hi,Hi);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Mm(e),e}throw hr=n,$r}}function fr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(hr=a,$r):a}}var hr=null;function Sm(){if(hr===null)throw Error(r(459));var e=hr;return hr=null,e}function Mm(e){if(e===$r||e===wl)throw Error(r(483))}var ts=null,oo=0;function Ul(e){var n=oo;return oo+=1,ts===null&&(ts=[]),ym(ts,e,n)}function lo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ll(e,n){throw n.$$typeof===x?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Em(e){function n(j,V){if(e){var tt=j.deletions;tt===null?(j.deletions=[V],j.flags|=16):tt.push(V)}}function a(j,V){if(!e)return null;for(;V!==null;)n(j,V),V=V.sibling;return null}function o(j){for(var V=new Map;j!==null;)j.key!==null?V.set(j.key,j):V.set(j.index,j),j=j.sibling;return V}function u(j,V){return j=Vi(j,V),j.index=0,j.sibling=null,j}function h(j,V,tt){return j.index=tt,e?(tt=j.alternate,tt!==null?(tt=tt.index,tt<V?(j.flags|=67108866,V):tt):(j.flags|=67108866,V)):(j.flags|=1048576,V)}function y(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function A(j,V,tt,gt){return V===null||V.tag!==6?(V=Hu(tt,j.mode,gt),V.return=j,V):(V=u(V,tt),V.return=j,V)}function I(j,V,tt,gt){var ne=tt.type;return ne===T?dt(j,V,tt.props.children,gt,tt.key):V!==null&&(V.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===Y&&fr(ne)===V.type)?(V=u(V,tt.props),lo(V,tt),V.return=j,V):(V=bl(tt.type,tt.key,tt.props,null,j.mode,gt),lo(V,tt),V.return=j,V)}function et(j,V,tt,gt){return V===null||V.tag!==4||V.stateNode.containerInfo!==tt.containerInfo||V.stateNode.implementation!==tt.implementation?(V=Gu(tt,j.mode,gt),V.return=j,V):(V=u(V,tt.children||[]),V.return=j,V)}function dt(j,V,tt,gt,ne){return V===null||V.tag!==7?(V=sr(tt,j.mode,gt,ne),V.return=j,V):(V=u(V,tt),V.return=j,V)}function xt(j,V,tt){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Hu(""+V,j.mode,tt),V.return=j,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case M:return tt=bl(V.type,V.key,V.props,null,j.mode,tt),lo(tt,V),tt.return=j,tt;case E:return V=Gu(V,j.mode,tt),V.return=j,V;case Y:return V=fr(V),xt(j,V,tt)}if(K(V)||rt(V))return V=sr(V,j.mode,tt,null),V.return=j,V;if(typeof V.then=="function")return xt(j,Ul(V),tt);if(V.$$typeof===U)return xt(j,Rl(j,V),tt);Ll(j,V)}return null}function it(j,V,tt,gt){var ne=V!==null?V.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return ne!==null?null:A(j,V,""+tt,gt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case M:return tt.key===ne?I(j,V,tt,gt):null;case E:return tt.key===ne?et(j,V,tt,gt):null;case Y:return tt=fr(tt),it(j,V,tt,gt)}if(K(tt)||rt(tt))return ne!==null?null:dt(j,V,tt,gt,null);if(typeof tt.then=="function")return it(j,V,Ul(tt),gt);if(tt.$$typeof===U)return it(j,V,Rl(j,tt),gt);Ll(j,tt)}return null}function ut(j,V,tt,gt,ne){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return j=j.get(tt)||null,A(V,j,""+gt,ne);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case M:return j=j.get(gt.key===null?tt:gt.key)||null,I(V,j,gt,ne);case E:return j=j.get(gt.key===null?tt:gt.key)||null,et(V,j,gt,ne);case Y:return gt=fr(gt),ut(j,V,tt,gt,ne)}if(K(gt)||rt(gt))return j=j.get(tt)||null,dt(V,j,gt,ne,null);if(typeof gt.then=="function")return ut(j,V,tt,Ul(gt),ne);if(gt.$$typeof===U)return ut(j,V,tt,Rl(V,gt),ne);Ll(V,gt)}return null}function kt(j,V,tt,gt){for(var ne=null,Ce=null,Zt=V,he=V=0,Se=null;Zt!==null&&he<tt.length;he++){Zt.index>he?(Se=Zt,Zt=null):Se=Zt.sibling;var we=it(j,Zt,tt[he],gt);if(we===null){Zt===null&&(Zt=Se);break}e&&Zt&&we.alternate===null&&n(j,Zt),V=h(we,V,he),Ce===null?ne=we:Ce.sibling=we,Ce=we,Zt=Se}if(he===tt.length)return a(j,Zt),Me&&ki(j,he),ne;if(Zt===null){for(;he<tt.length;he++)Zt=xt(j,tt[he],gt),Zt!==null&&(V=h(Zt,V,he),Ce===null?ne=Zt:Ce.sibling=Zt,Ce=Zt);return Me&&ki(j,he),ne}for(Zt=o(Zt);he<tt.length;he++)Se=ut(Zt,j,he,tt[he],gt),Se!==null&&(e&&Se.alternate!==null&&Zt.delete(Se.key===null?he:Se.key),V=h(Se,V,he),Ce===null?ne=Se:Ce.sibling=Se,Ce=Se);return e&&Zt.forEach(function(Ga){return n(j,Ga)}),Me&&ki(j,he),ne}function ie(j,V,tt,gt){if(tt==null)throw Error(r(151));for(var ne=null,Ce=null,Zt=V,he=V=0,Se=null,we=tt.next();Zt!==null&&!we.done;he++,we=tt.next()){Zt.index>he?(Se=Zt,Zt=null):Se=Zt.sibling;var Ga=it(j,Zt,we.value,gt);if(Ga===null){Zt===null&&(Zt=Se);break}e&&Zt&&Ga.alternate===null&&n(j,Zt),V=h(Ga,V,he),Ce===null?ne=Ga:Ce.sibling=Ga,Ce=Ga,Zt=Se}if(we.done)return a(j,Zt),Me&&ki(j,he),ne;if(Zt===null){for(;!we.done;he++,we=tt.next())we=xt(j,we.value,gt),we!==null&&(V=h(we,V,he),Ce===null?ne=we:Ce.sibling=we,Ce=we);return Me&&ki(j,he),ne}for(Zt=o(Zt);!we.done;he++,we=tt.next())we=ut(Zt,j,he,we.value,gt),we!==null&&(e&&we.alternate!==null&&Zt.delete(we.key===null?he:we.key),V=h(we,V,he),Ce===null?ne=we:Ce.sibling=we,Ce=we);return e&&Zt.forEach(function(Fy){return n(j,Fy)}),Me&&ki(j,he),ne}function He(j,V,tt,gt){if(typeof tt=="object"&&tt!==null&&tt.type===T&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case M:t:{for(var ne=tt.key;V!==null;){if(V.key===ne){if(ne=tt.type,ne===T){if(V.tag===7){a(j,V.sibling),gt=u(V,tt.props.children),gt.return=j,j=gt;break t}}else if(V.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===Y&&fr(ne)===V.type){a(j,V.sibling),gt=u(V,tt.props),lo(gt,tt),gt.return=j,j=gt;break t}a(j,V);break}else n(j,V);V=V.sibling}tt.type===T?(gt=sr(tt.props.children,j.mode,gt,tt.key),gt.return=j,j=gt):(gt=bl(tt.type,tt.key,tt.props,null,j.mode,gt),lo(gt,tt),gt.return=j,j=gt)}return y(j);case E:t:{for(ne=tt.key;V!==null;){if(V.key===ne)if(V.tag===4&&V.stateNode.containerInfo===tt.containerInfo&&V.stateNode.implementation===tt.implementation){a(j,V.sibling),gt=u(V,tt.children||[]),gt.return=j,j=gt;break t}else{a(j,V);break}else n(j,V);V=V.sibling}gt=Gu(tt,j.mode,gt),gt.return=j,j=gt}return y(j);case Y:return tt=fr(tt),He(j,V,tt,gt)}if(K(tt))return kt(j,V,tt,gt);if(rt(tt)){if(ne=rt(tt),typeof ne!="function")throw Error(r(150));return tt=ne.call(tt),ie(j,V,tt,gt)}if(typeof tt.then=="function")return He(j,V,Ul(tt),gt);if(tt.$$typeof===U)return He(j,V,Rl(j,tt),gt);Ll(j,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,V!==null&&V.tag===6?(a(j,V.sibling),gt=u(V,tt),gt.return=j,j=gt):(a(j,V),gt=Hu(tt,j.mode,gt),gt.return=j,j=gt),y(j)):a(j,V)}return function(j,V,tt,gt){try{oo=0;var ne=He(j,V,tt,gt);return ts=null,ne}catch(Zt){if(Zt===$r||Zt===wl)throw Zt;var Ce=qn(29,Zt,null,j.mode);return Ce.lanes=gt,Ce.return=j,Ce}finally{}}}var dr=Em(!0),bm=Em(!1),ba=!1;function $u(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function tf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ta(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Aa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ue&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=El(e),om(e,null,a),n}return Ml(e,o,n,a),El(e)}function co(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ai(e,a)}}function ef(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=y:h=h.next=y,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var nf=!1;function uo(){if(nf){var e=Jr;if(e!==null)throw e}}function fo(e,n,a,o){nf=!1;var u=e.updateQueue;ba=!1;var h=u.firstBaseUpdate,y=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var I=A,et=I.next;I.next=null,y===null?h=et:y.next=et,y=I;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,A=dt.lastBaseUpdate,A!==y&&(A===null?dt.firstBaseUpdate=et:A.next=et,dt.lastBaseUpdate=I))}if(h!==null){var xt=u.baseState;y=0,dt=et=I=null,A=h;do{var it=A.lane&-536870913,ut=it!==A.lane;if(ut?(ye&it)===it:(o&it)===it){it!==0&&it===Qr&&(nf=!0),dt!==null&&(dt=dt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var kt=e,ie=A;it=n;var He=a;switch(ie.tag){case 1:if(kt=ie.payload,typeof kt=="function"){xt=kt.call(He,xt,it);break t}xt=kt;break t;case 3:kt.flags=kt.flags&-65537|128;case 0:if(kt=ie.payload,it=typeof kt=="function"?kt.call(He,xt,it):kt,it==null)break t;xt=g({},xt,it);break t;case 2:ba=!0}}it=A.callback,it!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=u.callbacks,ut===null?u.callbacks=[it]:ut.push(it))}else ut={lane:it,tag:A.tag,payload:A.payload,callback:A.callback,next:null},dt===null?(et=dt=ut,I=xt):dt=dt.next=ut,y|=it;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ut=A,A=ut.next,ut.next=null,u.lastBaseUpdate=ut,u.shared.pending=null}}while(!0);dt===null&&(I=xt),u.baseState=I,u.firstBaseUpdate=et,u.lastBaseUpdate=dt,h===null&&(u.shared.lanes=0),Ua|=y,e.lanes=y,e.memoizedState=xt}}function Tm(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Am(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Tm(a[e],n)}var es=N(null),Nl=N(0);function Rm(e,n){e=ta,vt(Nl,e),vt(es,n),ta=e|n.baseLanes}function af(){vt(Nl,ta),vt(es,es.current)}function rf(){ta=Nl.current,J(es),J(Nl)}var jn=N(null),oi=null;function Ra(e){var n=e.alternate;vt(an,an.current&1),vt(jn,e),oi===null&&(n===null||es.current!==null||n.memoizedState!==null)&&(oi=e)}function sf(e){vt(an,an.current),vt(jn,e),oi===null&&(oi=e)}function Cm(e){e.tag===22?(vt(an,an.current),vt(jn,e),oi===null&&(oi=e)):Ca()}function Ca(){vt(an,an.current),vt(jn,jn.current)}function Yn(e){J(jn),oi===e&&(oi=null),J(an)}var an=N(0);function Ol(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||hh(a)||dh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var qi=0,fe=null,Ie=null,ln=null,Pl=!1,ns=!1,pr=!1,zl=0,ho=0,is=null,wx=0;function $e(){throw Error(r(321))}function of(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Wn(e[a],n[a]))return!1;return!0}function lf(e,n,a,o,u,h){return qi=h,fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=e===null||e.memoizedState===null?fg:Ef,pr=!1,h=a(o,u),pr=!1,ns&&(h=Dm(n,a,o,u)),wm(e),h}function wm(e){P.H=go;var n=Ie!==null&&Ie.next!==null;if(qi=0,ln=Ie=fe=null,Pl=!1,ho=0,is=null,n)throw Error(r(300));e===null||cn||(e=e.dependencies,e!==null&&Al(e)&&(cn=!0))}function Dm(e,n,a,o){fe=e;var u=0;do{if(ns&&(is=null),ho=0,ns=!1,25<=u)throw Error(r(301));if(u+=1,ln=Ie=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}P.H=hg,h=n(a,o)}while(ns);return h}function Dx(){var e=P.H,n=e.useState()[0];return n=typeof n.then=="function"?po(n):n,e=e.useState()[0],(Ie!==null?Ie.memoizedState:null)!==e&&(fe.flags|=1024),n}function cf(){var e=zl!==0;return zl=0,e}function uf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function ff(e){if(Pl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Pl=!1}qi=0,ln=Ie=fe=null,ns=!1,ho=zl=0,is=null}function Ln(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?fe.memoizedState=ln=e:ln=ln.next=e,ln}function rn(){if(Ie===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var n=ln===null?fe.memoizedState:ln.next;if(n!==null)ln=n,Ie=e;else{if(e===null)throw fe.alternate===null?Error(r(467)):Error(r(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},ln===null?fe.memoizedState=ln=e:ln=ln.next=e}return ln}function Bl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function po(e){var n=ho;return ho+=1,is===null&&(is=[]),e=ym(is,e,n),n=fe,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?fg:Ef),e}function Il(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return po(e);if(e.$$typeof===U)return En(e)}throw Error(r(438,String(e)))}function hf(e){var n=null,a=fe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=fe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Bl(),fe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=w;return n.index++,a}function ji(e,n){return typeof n=="function"?n(e):n}function Fl(e){var n=rn();return df(n,Ie,e)}function df(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var y=u.next;u.next=h.next,h.next=y}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var A=y=null,I=null,et=n,dt=!1;do{var xt=et.lane&-536870913;if(xt!==et.lane?(ye&xt)===xt:(qi&xt)===xt){var it=et.revertLane;if(it===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),xt===Qr&&(dt=!0);else if((qi&it)===it){et=et.next,it===Qr&&(dt=!0);continue}else xt={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},I===null?(A=I=xt,y=h):I=I.next=xt,fe.lanes|=it,Ua|=it;xt=et.action,pr&&a(h,xt),h=et.hasEagerState?et.eagerState:a(h,xt)}else it={lane:xt,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},I===null?(A=I=it,y=h):I=I.next=it,fe.lanes|=xt,Ua|=xt;et=et.next}while(et!==null&&et!==n);if(I===null?y=h:I.next=A,!Wn(h,e.memoizedState)&&(cn=!0,dt&&(a=Jr,a!==null)))throw a;e.memoizedState=h,e.baseState=y,e.baseQueue=I,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function pf(e){var n=rn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do h=e(h,y.action),y=y.next;while(y!==u);Wn(h,n.memoizedState)||(cn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function Um(e,n,a){var o=fe,u=rn(),h=Me;if(h){if(a===void 0)throw Error(r(407));a=a()}else a=n();var y=!Wn((Ie||u).memoizedState,a);if(y&&(u.memoizedState=a,cn=!0),u=u.queue,vf(Om.bind(null,o,u,e),[e]),u.getSnapshot!==n||y||ln!==null&&ln.memoizedState.tag&1){if(o.flags|=2048,as(9,{destroy:void 0},Nm.bind(null,o,u,a,n),null),ke===null)throw Error(r(349));h||(qi&127)!==0||Lm(o,n,a)}return a}function Lm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=fe.updateQueue,n===null?(n=Bl(),fe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Nm(e,n,a,o){n.value=a,n.getSnapshot=o,Pm(n)&&zm(e)}function Om(e,n,a){return a(function(){Pm(n)&&zm(e)})}function Pm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Wn(e,a)}catch{return!0}}function zm(e){var n=rr(e,2);n!==null&&Hn(n,e,2)}function mf(e){var n=Ln();if(typeof e=="function"){var a=e;if(e=a(),pr){$t(!0);try{a()}finally{$t(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:e},n}function Bm(e,n,a,o){return e.baseState=a,df(e,Ie,typeof o=="function"?o:ji)}function Ux(e,n,a,o,u){if(Vl(e))throw Error(r(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){h.listeners.push(y)}};P.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,Im(n,h)):(h.next=a.next,n.pending=a.next=h)}}function Im(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=P.T,y={};P.T=y;try{var A=a(u,o),I=P.S;I!==null&&I(y,A),Fm(e,n,A)}catch(et){gf(e,n,et)}finally{h!==null&&y.types!==null&&(h.types=y.types),P.T=h}}else try{h=a(u,o),Fm(e,n,h)}catch(et){gf(e,n,et)}}function Fm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Hm(e,n,o)},function(o){return gf(e,n,o)}):Hm(e,n,a)}function Hm(e,n,a){n.status="fulfilled",n.value=a,Gm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Im(e,a)))}function gf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Gm(n),n=n.next;while(n!==o)}e.action=null}function Gm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Vm(e,n){return n}function km(e,n){if(Me){var a=ke.formState;if(a!==null){t:{var o=fe;if(Me){if(qe){e:{for(var u=qe,h=si;u.nodeType!==8;){if(!h){u=null;break e}if(u=li(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){qe=li(u.nextSibling),o=u.data==="F!";break t}}Ma(o)}o=!1}o&&(n=a[0])}}return a=Ln(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vm,lastRenderedState:n},a.queue=o,a=lg.bind(null,fe,o),o.dispatch=a,o=mf(!1),h=Mf.bind(null,fe,!1,o.queue),o=Ln(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Ux.bind(null,fe,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Xm(e){var n=rn();return Wm(n,Ie,e)}function Wm(e,n,a){if(n=df(e,n,Vm)[0],e=Fl(ji)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=po(n)}catch(y){throw y===$r?wl:y}else o=n;n=rn();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(fe.flags|=2048,as(9,{destroy:void 0},Lx.bind(null,u,a),null)),[o,h,e]}function Lx(e,n){e.action=n}function qm(e){var n=rn(),a=Ie;if(a!==null)return Wm(n,a,e);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function as(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=fe.updateQueue,n===null&&(n=Bl(),fe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function jm(){return rn().memoizedState}function Hl(e,n,a,o){var u=Ln();fe.flags|=e,u.memoizedState=as(1|n,{destroy:void 0},a,o===void 0?null:o)}function Gl(e,n,a,o){var u=rn();o=o===void 0?null:o;var h=u.memoizedState.inst;Ie!==null&&o!==null&&of(o,Ie.memoizedState.deps)?u.memoizedState=as(n,h,a,o):(fe.flags|=e,u.memoizedState=as(1|n,h,a,o))}function Ym(e,n){Hl(8390656,8,e,n)}function vf(e,n){Gl(2048,8,e,n)}function Nx(e){fe.flags|=4;var n=fe.updateQueue;if(n===null)n=Bl(),fe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Zm(e){var n=rn().memoizedState;return Nx({ref:n,nextImpl:e}),function(){if((Ue&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Km(e,n){return Gl(4,2,e,n)}function Qm(e,n){return Gl(4,4,e,n)}function Jm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function $m(e,n,a){a=a!=null?a.concat([e]):null,Gl(4,4,Jm.bind(null,n,e),a)}function _f(){}function tg(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&of(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function eg(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&of(n,o[1]))return o[0];if(o=e(),pr){$t(!0);try{e()}finally{$t(!1)}}return a.memoizedState=[o,n],o}function xf(e,n,a){return a===void 0||(qi&1073741824)!==0&&(ye&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=n0(),fe.lanes|=e,Ua|=e,a)}function ng(e,n,a,o){return Wn(a,n)?a:es.current!==null?(e=xf(e,a,o),Wn(e,n)||(cn=!0),e):(qi&42)===0||(qi&1073741824)!==0&&(ye&261930)===0?(cn=!0,e.memoizedState=a):(e=n0(),fe.lanes|=e,Ua|=e,n)}function ig(e,n,a,o,u){var h=W.p;W.p=h!==0&&8>h?h:8;var y=P.T,A={};P.T=A,Mf(e,!1,n,a);try{var I=u(),et=P.S;if(et!==null&&et(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var dt=Cx(I,o);mo(e,n,dt,Qn(e))}else mo(e,n,o,Qn(e))}catch(xt){mo(e,n,{then:function(){},status:"rejected",reason:xt},Qn())}finally{W.p=h,y!==null&&A.types!==null&&(y.types=A.types),P.T=y}}function Ox(){}function yf(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=ag(e).queue;ig(e,u,n,k,a===null?Ox:function(){return rg(e),a(o)})}function ag(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:k,baseState:k,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:k},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function rg(e){var n=ag(e);n.next===null&&(n=e.alternate.memoizedState),mo(e,n.next.queue,{},Qn())}function Sf(){return En(Lo)}function sg(){return rn().memoizedState}function og(){return rn().memoizedState}function Px(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();e=Ta(a);var o=Aa(n,e,a);o!==null&&(Hn(o,n,a),co(o,n,a)),n={cache:Zu()},e.payload=n;return}n=n.return}}function zx(e,n,a){var o=Qn();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Vl(e)?cg(n,a):(a=Iu(e,n,a,o),a!==null&&(Hn(a,e,o),ug(a,n,o)))}function lg(e,n,a){var o=Qn();mo(e,n,a,o)}function mo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Vl(e))cg(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var y=n.lastRenderedState,A=h(y,a);if(u.hasEagerState=!0,u.eagerState=A,Wn(A,y))return Ml(e,n,u,0),ke===null&&Sl(),!1}catch{}finally{}if(a=Iu(e,n,u,o),a!==null)return Hn(a,e,o),ug(a,n,o),!0}return!1}function Mf(e,n,a,o){if(o={lane:2,revertLane:th(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Vl(e)){if(n)throw Error(r(479))}else n=Iu(e,a,o,2),n!==null&&Hn(n,e,2)}function Vl(e){var n=e.alternate;return e===fe||n!==null&&n===fe}function cg(e,n){ns=Pl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function ug(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ai(e,a)}}var go={readContext:En,use:Il,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e};go.useEffectEvent=$e;var fg={readContext:En,use:Il,useCallback:function(e,n){return Ln().memoizedState=[e,n===void 0?null:n],e},useContext:En,useEffect:Ym,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Hl(4194308,4,Jm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Hl(4194308,4,e,n)},useInsertionEffect:function(e,n){Hl(4,2,e,n)},useMemo:function(e,n){var a=Ln();n=n===void 0?null:n;var o=e();if(pr){$t(!0);try{e()}finally{$t(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Ln();if(a!==void 0){var u=a(n);if(pr){$t(!0);try{a(n)}finally{$t(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=zx.bind(null,fe,e),[o.memoizedState,e]},useRef:function(e){var n=Ln();return e={current:e},n.memoizedState=e},useState:function(e){e=mf(e);var n=e.queue,a=lg.bind(null,fe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:_f,useDeferredValue:function(e,n){var a=Ln();return xf(a,e,n)},useTransition:function(){var e=mf(!1);return e=ig.bind(null,fe,e.queue,!0,!1),Ln().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=fe,u=Ln();if(Me){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),ke===null)throw Error(r(349));(ye&127)!==0||Lm(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,Ym(Om.bind(null,o,h,e),[e]),o.flags|=2048,as(9,{destroy:void 0},Nm.bind(null,o,h,a,n),null),a},useId:function(){var e=Ln(),n=ke.identifierPrefix;if(Me){var a=wi,o=Ci;a=(o&~(1<<32-Ft(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=zl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=wx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Sf,useFormState:km,useActionState:km,useOptimistic:function(e){var n=Ln();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Mf.bind(null,fe,!0,a),a.dispatch=n,[e,n]},useMemoCache:hf,useCacheRefresh:function(){return Ln().memoizedState=Px.bind(null,fe)},useEffectEvent:function(e){var n=Ln(),a={impl:e};return n.memoizedState=a,function(){if((Ue&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Ef={readContext:En,use:Il,useCallback:tg,useContext:En,useEffect:vf,useImperativeHandle:$m,useInsertionEffect:Km,useLayoutEffect:Qm,useMemo:eg,useReducer:Fl,useRef:jm,useState:function(){return Fl(ji)},useDebugValue:_f,useDeferredValue:function(e,n){var a=rn();return ng(a,Ie.memoizedState,e,n)},useTransition:function(){var e=Fl(ji)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:po(e),n]},useSyncExternalStore:Um,useId:sg,useHostTransitionStatus:Sf,useFormState:Xm,useActionState:Xm,useOptimistic:function(e,n){var a=rn();return Bm(a,Ie,e,n)},useMemoCache:hf,useCacheRefresh:og};Ef.useEffectEvent=Zm;var hg={readContext:En,use:Il,useCallback:tg,useContext:En,useEffect:vf,useImperativeHandle:$m,useInsertionEffect:Km,useLayoutEffect:Qm,useMemo:eg,useReducer:pf,useRef:jm,useState:function(){return pf(ji)},useDebugValue:_f,useDeferredValue:function(e,n){var a=rn();return Ie===null?xf(a,e,n):ng(a,Ie.memoizedState,e,n)},useTransition:function(){var e=pf(ji)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:po(e),n]},useSyncExternalStore:Um,useId:sg,useHostTransitionStatus:Sf,useFormState:qm,useActionState:qm,useOptimistic:function(e,n){var a=rn();return Ie!==null?Bm(a,Ie,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:hf,useCacheRefresh:og};hg.useEffectEvent=Zm;function bf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Tf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Qn(),u=Ta(o);u.payload=n,a!=null&&(u.callback=a),n=Aa(e,u,o),n!==null&&(Hn(n,e,o),co(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Qn(),u=Ta(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Aa(e,u,o),n!==null&&(Hn(n,e,o),co(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Qn(),o=Ta(a);o.tag=2,n!=null&&(o.callback=n),n=Aa(e,o,a),n!==null&&(Hn(n,e,a),co(n,e,a))}};function dg(e,n,a,o,u,h,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,y):n.prototype&&n.prototype.isPureReactComponent?!eo(a,o)||!eo(u,h):!0}function pg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Tf.enqueueReplaceState(n,n.state,null)}function mr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function mg(e){yl(e)}function gg(e){console.error(e)}function vg(e){yl(e)}function kl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function _g(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Af(e,n,a){return a=Ta(a),a.tag=3,a.payload={element:null},a.callback=function(){kl(e,n)},a}function xg(e){return e=Ta(e),e.tag=3,e}function yg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){_g(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){_g(n,a,o),typeof u!="function"&&(La===null?La=new Set([this]):La.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function Bx(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Kr(n,a,u,!0),a=jn.current,a!==null){switch(a.tag){case 31:case 13:return oi===null?ec():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Dl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Qf(e,o,u)),!1;case 22:return a.flags|=65536,o===Dl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Qf(e,o,u)),!1}throw Error(r(435,a.tag))}return Qf(e,o,u),ec(),!1}if(Me)return n=jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Xu&&(e=Error(r(422),{cause:o}),ao(ii(e,a)))):(o!==Xu&&(n=Error(r(423),{cause:o}),ao(ii(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ii(o,a),u=Af(e.stateNode,o,u),ef(e,u),tn!==4&&(tn=2)),!1;var h=Error(r(520),{cause:o});if(h=ii(h,a),bo===null?bo=[h]:bo.push(h),tn!==4&&(tn=2),n===null)return!0;o=ii(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Af(a.stateNode,o,e),ef(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(La===null||!La.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=xg(u),yg(u,e,a,o),ef(a,u),!1}a=a.return}while(a!==null);return!1}var Rf=Error(r(461)),cn=!1;function bn(e,n,a,o){n.child=e===null?bm(n,null,a,o):dr(n,e.child,a,o)}function Sg(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var y={};for(var A in o)A!=="ref"&&(y[A]=o[A])}else y=o;return cr(n),o=lf(e,n,a,y,h,u),A=cf(),e!==null&&!cn?(uf(e,n,u),Yi(e,n,u)):(Me&&A&&Vu(n),n.flags|=1,bn(e,n,o,u),n.child)}function Mg(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!Fu(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,Eg(e,n,h,o,u)):(e=bl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!Pf(e,u)){var y=h.memoizedProps;if(a=a.compare,a=a!==null?a:eo,a(y,o)&&e.ref===n.ref)return Yi(e,n,u)}return n.flags|=1,e=Vi(h,o),e.ref=n.ref,e.return=n,n.child=e}function Eg(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(eo(h,o)&&e.ref===n.ref)if(cn=!1,n.pendingProps=o=h,Pf(e,u))(e.flags&131072)!==0&&(cn=!0);else return n.lanes=e.lanes,Yi(e,n,u)}return Cf(e,n,a,o,u)}function bg(e,n,a,o){var u=o.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return Tg(e,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Cl(n,h!==null?h.cachePool:null),h!==null?Rm(n,h):af(),Cm(n);else return o=n.lanes=536870912,Tg(e,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(Cl(n,h.cachePool),Rm(n,h),Ca(),n.memoizedState=null):(e!==null&&Cl(n,null),af(),Ca());return bn(e,n,u,a),n.child}function vo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Tg(e,n,a,o,u){var h=Qu();return h=h===null?null:{parent:on._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&Cl(n,null),af(),Cm(n),e!==null&&Kr(e,n,o,!0),n.childLanes=u,null}function Xl(e,n){return n=ql({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Ag(e,n,a){return dr(n,e.child,null,a),e=Xl(n,n.pendingProps),e.flags|=2,Yn(n),n.memoizedState=null,e}function Ix(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Me){if(o.mode==="hidden")return e=Xl(n,o),n.lanes=536870912,vo(null,e);if(sf(n),(e=qe)?(e=I0(e,si),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ya!==null?{id:Ci,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},a=cm(e),a.return=n,n.child=a,Mn=n,qe=null)):e=null,e===null)throw Ma(n);return n.lanes=536870912,null}return Xl(n,o)}var h=e.memoizedState;if(h!==null){var y=h.dehydrated;if(sf(n),u)if(n.flags&256)n.flags&=-257,n=Ag(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(cn||Kr(e,n,a,!1),u=(a&e.childLanes)!==0,cn||u){if(o=ke,o!==null&&(y=Pr(o,a),y!==0&&y!==h.retryLane))throw h.retryLane=y,rr(e,y),Hn(o,e,y),Rf;ec(),n=Ag(e,n,a)}else e=h.treeContext,qe=li(y.nextSibling),Mn=n,Me=!0,Sa=null,si=!1,e!==null&&hm(n,e),n=Xl(n,o),n.flags|=4096;return n}return e=Vi(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Wl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Cf(e,n,a,o,u){return cr(n),a=lf(e,n,a,o,void 0,u),o=cf(),e!==null&&!cn?(uf(e,n,u),Yi(e,n,u)):(Me&&o&&Vu(n),n.flags|=1,bn(e,n,a,u),n.child)}function Rg(e,n,a,o,u,h){return cr(n),n.updateQueue=null,a=Dm(n,o,a,u),wm(e),o=cf(),e!==null&&!cn?(uf(e,n,h),Yi(e,n,h)):(Me&&o&&Vu(n),n.flags|=1,bn(e,n,a,h),n.child)}function Cg(e,n,a,o,u){if(cr(n),n.stateNode===null){var h=qr,y=a.contextType;typeof y=="object"&&y!==null&&(h=En(y)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Tf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},$u(n),y=a.contextType,h.context=typeof y=="object"&&y!==null?En(y):qr,h.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(bf(n,a,y,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(y=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),y!==h.state&&Tf.enqueueReplaceState(h,h.state,null),fo(n,o,h,u),uo(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var A=n.memoizedProps,I=mr(a,A);h.props=I;var et=h.context,dt=a.contextType;y=qr,typeof dt=="object"&&dt!==null&&(y=En(dt));var xt=a.getDerivedStateFromProps;dt=typeof xt=="function"||typeof h.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,dt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(A||et!==y)&&pg(n,h,o,y),ba=!1;var it=n.memoizedState;h.state=it,fo(n,o,h,u),uo(),et=n.memoizedState,A||it!==et||ba?(typeof xt=="function"&&(bf(n,a,xt,o),et=n.memoizedState),(I=ba||dg(n,a,I,o,it,et,y))?(dt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=et),h.props=o,h.state=et,h.context=y,o=I):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,tf(e,n),y=n.memoizedProps,dt=mr(a,y),h.props=dt,xt=n.pendingProps,it=h.context,et=a.contextType,I=qr,typeof et=="object"&&et!==null&&(I=En(et)),A=a.getDerivedStateFromProps,(et=typeof A=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(y!==xt||it!==I)&&pg(n,h,o,I),ba=!1,it=n.memoizedState,h.state=it,fo(n,o,h,u),uo();var ut=n.memoizedState;y!==xt||it!==ut||ba||e!==null&&e.dependencies!==null&&Al(e.dependencies)?(typeof A=="function"&&(bf(n,a,A,o),ut=n.memoizedState),(dt=ba||dg(n,a,dt,o,it,ut,I)||e!==null&&e.dependencies!==null&&Al(e.dependencies))?(et||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ut,I),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ut,I)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||y===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ut),h.props=o,h.state=ut,h.context=I,o=dt):(typeof h.componentDidUpdate!="function"||y===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,Wl(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=dr(n,e.child,null,u),n.child=dr(n,null,a,u)):bn(e,n,a,u),n.memoizedState=h.state,e=n.child):e=Yi(e,n,u),e}function wg(e,n,a,o){return or(),n.flags|=256,bn(e,n,a,o),n.child}var wf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Df(e){return{baseLanes:e,cachePool:_m()}}function Uf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Kn),e}function Dg(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,y;if((y=h)||(y=e!==null&&e.memoizedState===null?!1:(an.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(Me){if(u?Ra(n):Ca(),(e=qe)?(e=I0(e,si),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ya!==null?{id:Ci,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},a=cm(e),a.return=n,n.child=a,Mn=n,qe=null)):e=null,e===null)throw Ma(n);return dh(e)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Ca(),u=n.mode,A=ql({mode:"hidden",children:A},u),o=sr(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=Df(a),o.childLanes=Uf(e,y,a),n.memoizedState=wf,vo(null,o)):(Ra(n),Lf(n,A))}var I=e.memoizedState;if(I!==null&&(A=I.dehydrated,A!==null)){if(h)n.flags&256?(Ra(n),n.flags&=-257,n=Nf(e,n,a)):n.memoizedState!==null?(Ca(),n.child=e.child,n.flags|=128,n=null):(Ca(),A=o.fallback,u=n.mode,o=ql({mode:"visible",children:o.children},u),A=sr(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,dr(n,e.child,null,a),o=n.child,o.memoizedState=Df(a),o.childLanes=Uf(e,y,a),n.memoizedState=wf,n=vo(null,o));else if(Ra(n),dh(A)){if(y=A.nextSibling&&A.nextSibling.dataset,y)var et=y.dgst;y=et,o=Error(r(419)),o.stack="",o.digest=y,ao({value:o,source:null,stack:null}),n=Nf(e,n,a)}else if(cn||Kr(e,n,a,!1),y=(a&e.childLanes)!==0,cn||y){if(y=ke,y!==null&&(o=Pr(y,a),o!==0&&o!==I.retryLane))throw I.retryLane=o,rr(e,o),Hn(y,e,o),Rf;hh(A)||ec(),n=Nf(e,n,a)}else hh(A)?(n.flags|=192,n.child=e.child,n=null):(e=I.treeContext,qe=li(A.nextSibling),Mn=n,Me=!0,Sa=null,si=!1,e!==null&&hm(n,e),n=Lf(n,o.children),n.flags|=4096);return n}return u?(Ca(),A=o.fallback,u=n.mode,I=e.child,et=I.sibling,o=Vi(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,et!==null?A=Vi(et,A):(A=sr(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,vo(null,o),o=n.child,A=e.child.memoizedState,A===null?A=Df(a):(u=A.cachePool,u!==null?(I=on._currentValue,u=u.parent!==I?{parent:I,pool:I}:u):u=_m(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=Uf(e,y,a),n.memoizedState=wf,vo(e.child,o)):(Ra(n),a=e.child,e=a.sibling,a=Vi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=a,n.memoizedState=null,a)}function Lf(e,n){return n=ql({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function ql(e,n){return e=qn(22,e,null,n),e.lanes=0,e}function Nf(e,n,a){return dr(n,e.child,null,a),e=Lf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Ug(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),ju(e.return,n,a)}function Of(e,n,a,o,u,h){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:h}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=h)}function Lg(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var y=an.current,A=(y&2)!==0;if(A?(y=y&1|2,n.flags|=128):y&=1,vt(an,y),bn(e,n,o,a),o=Me?io:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ug(e,a,n);else if(e.tag===19)Ug(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Ol(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Of(n,!1,u,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Ol(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Of(n,!0,a,null,h,o);break;case"together":Of(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Yi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ua|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Kr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Vi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Vi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Pf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Al(e)))}function Fx(e,n,a){switch(n.tag){case 3:wt(n,n.stateNode.containerInfo),Ea(n,on,e.memoizedState.cache),or();break;case 27:case 5:Ot(n);break;case 4:wt(n,n.stateNode.containerInfo);break;case 10:Ea(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,sf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ra(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Dg(e,n,a):(Ra(n),e=Yi(e,n,a),e!==null?e.sibling:null);Ra(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Kr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Lg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),vt(an,an.current),o)break;return null;case 22:return n.lanes=0,bg(e,n,a,n.pendingProps);case 24:Ea(n,on,e.memoizedState.cache)}return Yi(e,n,a)}function Ng(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)cn=!0;else{if(!Pf(e,a)&&(n.flags&128)===0)return cn=!1,Fx(e,n,a);cn=(e.flags&131072)!==0}else cn=!1,Me&&(n.flags&1048576)!==0&&fm(n,io,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=fr(n.elementType),n.type=e,typeof e=="function")Fu(e)?(o=mr(e,o),n.tag=1,n=Cg(null,n,e,o,a)):(n.tag=0,n=Cf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===D){n.tag=11,n=Sg(null,n,e,o,a);break t}else if(u===B){n.tag=14,n=Mg(null,n,e,o,a);break t}}throw n=yt(e)||e,Error(r(306,n,""))}}return n;case 0:return Cf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=mr(o,n.pendingProps),Cg(e,n,o,u,a);case 3:t:{if(wt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,tf(e,n),fo(n,o,null,a);var y=n.memoizedState;if(o=y.cache,Ea(n,on,o),o!==h.cache&&Yu(n,[on],a,!0),uo(),o=y.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=wg(e,n,o,a);break t}else if(o!==u){u=ii(Error(r(424)),n),ao(u),n=wg(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(qe=li(e.firstChild),Mn=n,Me=!0,Sa=null,si=!0,a=bm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(or(),o===u){n=Yi(e,n,a);break t}bn(e,n,o,a)}n=n.child}return n;case 26:return Wl(e,n),e===null?(a=X0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Me||(a=n.type,e=n.pendingProps,o=lc($.current).createElement(a),o[sn]=n,o[yn]=e,Tn(o,a,e),Et(o),n.stateNode=o):n.memoizedState=X0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ot(n),e===null&&Me&&(o=n.stateNode=G0(n.type,n.pendingProps,$.current),Mn=n,si=!0,u=qe,za(n.type)?(ph=u,qe=li(o.firstChild)):qe=u),bn(e,n,n.pendingProps.children,a),Wl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Me&&((u=o=qe)&&(o=my(o,n.type,n.pendingProps,si),o!==null?(n.stateNode=o,Mn=n,qe=li(o.firstChild),si=!1,u=!0):u=!1),u||Ma(n)),Ot(n),u=n.type,h=n.pendingProps,y=e!==null?e.memoizedProps:null,o=h.children,ch(u,h)?o=null:y!==null&&ch(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=lf(e,n,Dx,null,null,a),Lo._currentValue=u),Wl(e,n),bn(e,n,o,a),n.child;case 6:return e===null&&Me&&((e=a=qe)&&(a=gy(a,n.pendingProps,si),a!==null?(n.stateNode=a,Mn=n,qe=null,e=!0):e=!1),e||Ma(n)),null;case 13:return Dg(e,n,a);case 4:return wt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=dr(n,null,o,a):bn(e,n,o,a),n.child;case 11:return Sg(e,n,n.type,n.pendingProps,a);case 7:return bn(e,n,n.pendingProps,a),n.child;case 8:return bn(e,n,n.pendingProps.children,a),n.child;case 12:return bn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ea(n,n.type,o.value),bn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,cr(n),u=En(u),o=o(u),n.flags|=1,bn(e,n,o,a),n.child;case 14:return Mg(e,n,n.type,n.pendingProps,a);case 15:return Eg(e,n,n.type,n.pendingProps,a);case 19:return Lg(e,n,a);case 31:return Ix(e,n,a);case 22:return bg(e,n,a,n.pendingProps);case 24:return cr(n),o=En(on),e===null?(u=Qu(),u===null&&(u=ke,h=Zu(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},$u(n),Ea(n,on,u)):((e.lanes&a)!==0&&(tf(e,n),fo(n,null,null,a),uo()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ea(n,on,o)):(o=h.cache,Ea(n,on,o),o!==u.cache&&Yu(n,[on],a,!0))),bn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Zi(e){e.flags|=4}function zf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(s0())e.flags|=8192;else throw hr=Dl,Ju}else e.flags&=-16777217}function Og(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Z0(n))if(s0())e.flags|=8192;else throw hr=Dl,Ju}function jl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Oe():536870912,e.lanes|=n,ls|=n)}function _o(e,n){if(!Me)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function je(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Hx(e,n,a){var o=n.pendingProps;switch(ku(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(n),null;case 1:return je(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Wi(on),Nt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Zr(n)?Zi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Wu())),je(n),null;case 26:var u=n.type,h=n.memoizedState;return e===null?(Zi(n),h!==null?(je(n),Og(n,h)):(je(n),zf(n,u,null,o,a))):h?h!==e.memoizedState?(Zi(n),je(n),Og(n,h)):(je(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&Zi(n),je(n),zf(n,u,e,o,a)),null;case 27:if(oe(n),a=$.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Zi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return je(n),null}e=mt.current,Zr(n)?dm(n):(e=G0(u,o,a),n.stateNode=e,Zi(n))}return je(n),null;case 5:if(oe(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Zi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return je(n),null}if(h=mt.current,Zr(n))dm(n);else{var y=lc($.current);switch(h){case 1:h=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=y.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}h[sn]=n,h[yn]=o;t:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)h.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break t;for(;y.sibling===null;){if(y.return===null||y.return===n)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=h;t:switch(Tn(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&Zi(n)}}return je(n),zf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Zi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=$.current,Zr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Mn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[sn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||D0(e.nodeValue,a)),e||Ma(n,!0)}else e=lc(e).createTextNode(o),e[sn]=n,n.stateNode=e}return je(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Zr(n),a!==null){if(e===null){if(!o)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[sn]=n}else or(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),e=!1}else a=Wu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Yn(n),n):(Yn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return je(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Zr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[sn]=n}else or(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),u=!1}else u=Wu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Yn(n),n):(Yn(n),null)}return Yn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),jl(n,n.updateQueue),je(n),null);case 4:return Nt(),e===null&&ah(n.stateNode.containerInfo),je(n),null;case 10:return Wi(n.type),je(n),null;case 19:if(J(an),o=n.memoizedState,o===null)return je(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)_o(o,!1);else{if(tn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=Ol(e),h!==null){for(n.flags|=128,_o(o,!1),e=h.updateQueue,n.updateQueue=e,jl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)lm(a,e),a=a.sibling;return vt(an,an.current&1|2),Me&&ki(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&b()>Jl&&(n.flags|=128,u=!0,_o(o,!1),n.lanes=4194304)}else{if(!u)if(e=Ol(h),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,jl(n,e),_o(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Me)return je(n),null}else 2*b()-o.renderingStartTime>Jl&&a!==536870912&&(n.flags|=128,u=!0,_o(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(e=o.last,e!==null?e.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=b(),e.sibling=null,a=an.current,vt(an,u?a&1|2:a&1),Me&&ki(n,o.treeForkCount),e):(je(n),null);case 22:case 23:return Yn(n),rf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(je(n),n.subtreeFlags&6&&(n.flags|=8192)):je(n),a=n.updateQueue,a!==null&&jl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&J(ur),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Wi(on),je(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Gx(e,n){switch(ku(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Wi(on),Nt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return oe(n),null;case 31:if(n.memoizedState!==null){if(Yn(n),n.alternate===null)throw Error(r(340));or()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Yn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));or()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return J(an),null;case 4:return Nt(),null;case 10:return Wi(n.type),null;case 22:case 23:return Yn(n),rf(),e!==null&&J(ur),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Wi(on),null;case 25:return null;default:return null}}function Pg(e,n){switch(ku(n),n.tag){case 3:Wi(on),Nt();break;case 26:case 27:case 5:oe(n);break;case 4:Nt();break;case 31:n.memoizedState!==null&&Yn(n);break;case 13:Yn(n);break;case 19:J(an);break;case 10:Wi(n.type);break;case 22:case 23:Yn(n),rf(),e!==null&&J(ur);break;case 24:Wi(on)}}function xo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,y=a.inst;o=h(),y.destroy=o}a=a.next}while(a!==u)}}catch(A){ze(n,n.return,A)}}function wa(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var y=o.inst,A=y.destroy;if(A!==void 0){y.destroy=void 0,u=n;var I=a,et=A;try{et()}catch(dt){ze(u,I,dt)}}}o=o.next}while(o!==h)}}catch(dt){ze(n,n.return,dt)}}function zg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Am(n,a)}catch(o){ze(e,e.return,o)}}}function Bg(e,n,a){a.props=mr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){ze(e,n,o)}}function yo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){ze(e,n,u)}}function Di(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){ze(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){ze(e,n,u)}else a.current=null}function Ig(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){ze(e,e.return,u)}}function Bf(e,n,a){try{var o=e.stateNode;cy(o,e.type,a,n),o[yn]=n}catch(u){ze(e,e.return,u)}}function Fg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&za(e.type)||e.tag===4}function If(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Fg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&za(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ff(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Hi));else if(o!==4&&(o===27&&za(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Ff(e,n,a),e=e.sibling;e!==null;)Ff(e,n,a),e=e.sibling}function Yl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&za(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Yl(e,n,a),e=e.sibling;e!==null;)Yl(e,n,a),e=e.sibling}function Hg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Tn(n,o,a),n[sn]=e,n[yn]=a}catch(h){ze(e,e.return,h)}}var Ki=!1,un=!1,Hf=!1,Gg=typeof WeakSet=="function"?WeakSet:Set,vn=null;function Vx(e,n){if(e=e.containerInfo,oh=mc,e=$p(e),Lu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var y=0,A=-1,I=-1,et=0,dt=0,xt=e,it=null;e:for(;;){for(var ut;xt!==a||u!==0&&xt.nodeType!==3||(A=y+u),xt!==h||o!==0&&xt.nodeType!==3||(I=y+o),xt.nodeType===3&&(y+=xt.nodeValue.length),(ut=xt.firstChild)!==null;)it=xt,xt=ut;for(;;){if(xt===e)break e;if(it===a&&++et===u&&(A=y),it===h&&++dt===o&&(I=y),(ut=xt.nextSibling)!==null)break;xt=it,it=xt.parentNode}xt=ut}a=A===-1||I===-1?null:{start:A,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(lh={focusedElem:e,selectionRange:a},mc=!1,vn=n;vn!==null;)if(n=vn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,vn=e;else for(;vn!==null;){switch(n=vn,h=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var kt=mr(a.type,u);e=o.getSnapshotBeforeUpdate(kt,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(ie){ze(a,a.return,ie)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)fh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":fh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,vn=e;break}vn=n.return}}function Vg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ji(e,a),o&4&&xo(5,a);break;case 1:if(Ji(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(y){ze(a,a.return,y)}else{var u=mr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){ze(a,a.return,y)}}o&64&&zg(a),o&512&&yo(a,a.return);break;case 3:if(Ji(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Am(e,n)}catch(y){ze(a,a.return,y)}}break;case 27:n===null&&o&4&&Hg(a);case 26:case 5:Ji(e,a),n===null&&o&4&&Ig(a),o&512&&yo(a,a.return);break;case 12:Ji(e,a);break;case 31:Ji(e,a),o&4&&Wg(e,a);break;case 13:Ji(e,a),o&4&&qg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Qx.bind(null,a),vy(e,a))));break;case 22:if(o=a.memoizedState!==null||Ki,!o){n=n!==null&&n.memoizedState!==null||un,u=Ki;var h=un;Ki=o,(un=n)&&!h?$i(e,a,(a.subtreeFlags&8772)!==0):Ji(e,a),Ki=u,un=h}break;case 30:break;default:Ji(e,a)}}function kg(e){var n=e.alternate;n!==null&&(e.alternate=null,kg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&R(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ze=null,zn=!1;function Qi(e,n,a){for(a=a.child;a!==null;)Xg(e,n,a),a=a.sibling}function Xg(e,n,a){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(At,a)}catch{}switch(a.tag){case 26:un||Di(a,n),Qi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:un||Di(a,n);var o=Ze,u=zn;za(a.type)&&(Ze=a.stateNode,zn=!1),Qi(e,n,a),wo(a.stateNode),Ze=o,zn=u;break;case 5:un||Di(a,n);case 6:if(o=Ze,u=zn,Ze=null,Qi(e,n,a),Ze=o,zn=u,Ze!==null)if(zn)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(a.stateNode)}catch(h){ze(a,n,h)}else try{Ze.removeChild(a.stateNode)}catch(h){ze(a,n,h)}break;case 18:Ze!==null&&(zn?(e=Ze,z0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),gs(e)):z0(Ze,a.stateNode));break;case 4:o=Ze,u=zn,Ze=a.stateNode.containerInfo,zn=!0,Qi(e,n,a),Ze=o,zn=u;break;case 0:case 11:case 14:case 15:wa(2,a,n),un||wa(4,a,n),Qi(e,n,a);break;case 1:un||(Di(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Bg(a,n,o)),Qi(e,n,a);break;case 21:Qi(e,n,a);break;case 22:un=(o=un)||a.memoizedState!==null,Qi(e,n,a),un=o;break;default:Qi(e,n,a)}}function Wg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{gs(e)}catch(a){ze(n,n.return,a)}}}function qg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{gs(e)}catch(a){ze(n,n.return,a)}}function kx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Gg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Gg),n;default:throw Error(r(435,e.tag))}}function Zl(e,n){var a=kx(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Jx.bind(null,e,o);o.then(u,u)}})}function Bn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,y=n,A=y;t:for(;A!==null;){switch(A.tag){case 27:if(za(A.type)){Ze=A.stateNode,zn=!1;break t}break;case 5:Ze=A.stateNode,zn=!1;break t;case 3:case 4:Ze=A.stateNode.containerInfo,zn=!0;break t}A=A.return}if(Ze===null)throw Error(r(160));Xg(h,y,u),Ze=null,zn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)jg(n,e),n=n.sibling}var mi=null;function jg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Bn(n,e),In(e),o&4&&(wa(3,e,e.return),xo(3,e),wa(5,e,e.return));break;case 1:Bn(n,e),In(e),o&512&&(un||a===null||Di(a,a.return)),o&64&&Ki&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=mi;if(Bn(n,e),In(e),o&512&&(un||a===null||Di(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[tr]||h[sn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),Tn(h,o,a),h[sn]=e,Et(h),o=h;break t;case"link":var y=j0("link","href",u).get(o+(a.href||""));if(y){for(var A=0;A<y.length;A++)if(h=y[A],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(A,1);break e}}h=u.createElement(o),Tn(h,o,a),u.head.appendChild(h);break;case"meta":if(y=j0("meta","content",u).get(o+(a.content||""))){for(A=0;A<y.length;A++)if(h=y[A],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(A,1);break e}}h=u.createElement(o),Tn(h,o,a),u.head.appendChild(h);break;default:throw Error(r(468,o))}h[sn]=e,Et(h),o=h}e.stateNode=o}else Y0(u,e.type,e.stateNode);else e.stateNode=q0(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?Y0(u,e.type,e.stateNode):q0(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Bf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Bn(n,e),In(e),o&512&&(un||a===null||Di(a,a.return)),a!==null&&o&4&&Bf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Bn(n,e),In(e),o&512&&(un||a===null||Di(a,a.return)),e.flags&32){u=e.stateNode;try{Fr(u,"")}catch(kt){ze(e,e.return,kt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Bf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Hf=!0);break;case 6:if(Bn(n,e),In(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(kt){ze(e,e.return,kt)}}break;case 3:if(fc=null,u=mi,mi=cc(n.containerInfo),Bn(n,e),mi=u,In(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{gs(n.containerInfo)}catch(kt){ze(e,e.return,kt)}Hf&&(Hf=!1,Yg(e));break;case 4:o=mi,mi=cc(e.stateNode.containerInfo),Bn(n,e),In(e),mi=o;break;case 12:Bn(n,e),In(e);break;case 31:Bn(n,e),In(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Zl(e,o)));break;case 13:Bn(n,e),In(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ql=b()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Zl(e,o)));break;case 22:u=e.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,et=Ki,dt=un;if(Ki=et||u,un=dt||I,Bn(n,e),un=dt,Ki=et,In(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||I||Ki||un||gr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(h=I.stateNode,u)y=h.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{A=I.stateNode;var xt=I.memoizedProps.style,it=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;A.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(kt){ze(I,I.return,kt)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=u?"":I.memoizedProps}catch(kt){ze(I,I.return,kt)}}}else if(n.tag===18){if(a===null){I=n;try{var ut=I.stateNode;u?B0(ut,!0):B0(I.stateNode,!1)}catch(kt){ze(I,I.return,kt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Zl(e,a))));break;case 19:Bn(n,e),In(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Zl(e,o)));break;case 30:break;case 21:break;default:Bn(n,e),In(e)}}function In(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Fg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,h=If(e);Yl(e,h,u);break;case 5:var y=a.stateNode;a.flags&32&&(Fr(y,""),a.flags&=-33);var A=If(e);Yl(e,A,y);break;case 3:case 4:var I=a.stateNode.containerInfo,et=If(e);Ff(e,et,I);break;default:throw Error(r(161))}}catch(dt){ze(e,e.return,dt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Yg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Yg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ji(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Vg(e,n.alternate,n),n=n.sibling}function gr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:wa(4,n,n.return),gr(n);break;case 1:Di(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Bg(n,n.return,a),gr(n);break;case 27:wo(n.stateNode);case 26:case 5:Di(n,n.return),gr(n);break;case 22:n.memoizedState===null&&gr(n);break;case 30:gr(n);break;default:gr(n)}e=e.sibling}}function $i(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,y=h.flags;switch(h.tag){case 0:case 11:case 15:$i(u,h,a),xo(4,h);break;case 1:if($i(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(et){ze(o,o.return,et)}if(o=h,u=o.updateQueue,u!==null){var A=o.stateNode;try{var I=u.shared.hiddenCallbacks;if(I!==null)for(u.shared.hiddenCallbacks=null,u=0;u<I.length;u++)Tm(I[u],A)}catch(et){ze(o,o.return,et)}}a&&y&64&&zg(h),yo(h,h.return);break;case 27:Hg(h);case 26:case 5:$i(u,h,a),a&&o===null&&y&4&&Ig(h),yo(h,h.return);break;case 12:$i(u,h,a);break;case 31:$i(u,h,a),a&&y&4&&Wg(u,h);break;case 13:$i(u,h,a),a&&y&4&&qg(u,h);break;case 22:h.memoizedState===null&&$i(u,h,a),yo(h,h.return);break;case 30:break;default:$i(u,h,a)}n=n.sibling}}function Gf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ro(a))}function Vf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ro(e))}function gi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Zg(e,n,a,o),n=n.sibling}function Zg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:gi(e,n,a,o),u&2048&&xo(9,n);break;case 1:gi(e,n,a,o);break;case 3:gi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ro(e)));break;case 12:if(u&2048){gi(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,y=h.id,A=h.onPostCommit;typeof A=="function"&&A(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){ze(n,n.return,I)}}else gi(e,n,a,o);break;case 31:gi(e,n,a,o);break;case 13:gi(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,y=n.alternate,n.memoizedState!==null?h._visibility&2?gi(e,n,a,o):So(e,n):h._visibility&2?gi(e,n,a,o):(h._visibility|=2,rs(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Gf(y,n);break;case 24:gi(e,n,a,o),u&2048&&Vf(n.alternate,n);break;default:gi(e,n,a,o)}}function rs(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,y=n,A=a,I=o,et=y.flags;switch(y.tag){case 0:case 11:case 15:rs(h,y,A,I,u),xo(8,y);break;case 23:break;case 22:var dt=y.stateNode;y.memoizedState!==null?dt._visibility&2?rs(h,y,A,I,u):So(h,y):(dt._visibility|=2,rs(h,y,A,I,u)),u&&et&2048&&Gf(y.alternate,y);break;case 24:rs(h,y,A,I,u),u&&et&2048&&Vf(y.alternate,y);break;default:rs(h,y,A,I,u)}n=n.sibling}}function So(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:So(a,o),u&2048&&Gf(o.alternate,o);break;case 24:So(a,o),u&2048&&Vf(o.alternate,o);break;default:So(a,o)}n=n.sibling}}var Mo=8192;function ss(e,n,a){if(e.subtreeFlags&Mo)for(e=e.child;e!==null;)Kg(e,n,a),e=e.sibling}function Kg(e,n,a){switch(e.tag){case 26:ss(e,n,a),e.flags&Mo&&e.memoizedState!==null&&wy(a,mi,e.memoizedState,e.memoizedProps);break;case 5:ss(e,n,a);break;case 3:case 4:var o=mi;mi=cc(e.stateNode.containerInfo),ss(e,n,a),mi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Mo,Mo=16777216,ss(e,n,a),Mo=o):ss(e,n,a));break;default:ss(e,n,a)}}function Qg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Eo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];vn=o,$g(o,e)}Qg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Jg(e),e=e.sibling}function Jg(e){switch(e.tag){case 0:case 11:case 15:Eo(e),e.flags&2048&&wa(9,e,e.return);break;case 3:Eo(e);break;case 12:Eo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Kl(e)):Eo(e);break;default:Eo(e)}}function Kl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];vn=o,$g(o,e)}Qg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:wa(8,n,n.return),Kl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Kl(n));break;default:Kl(n)}e=e.sibling}}function $g(e,n){for(;vn!==null;){var a=vn;switch(a.tag){case 0:case 11:case 15:wa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ro(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,vn=o;else t:for(a=e;vn!==null;){o=vn;var u=o.sibling,h=o.return;if(kg(o),o===a){vn=null;break t}if(u!==null){u.return=h,vn=u;break t}vn=h}}}var Xx={getCacheForType:function(e){var n=En(on),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return En(on).controller.signal}},Wx=typeof WeakMap=="function"?WeakMap:Map,Ue=0,ke=null,ve=null,ye=0,Pe=0,Zn=null,Da=!1,os=!1,kf=!1,ta=0,tn=0,Ua=0,vr=0,Xf=0,Kn=0,ls=0,bo=null,Fn=null,Wf=!1,Ql=0,t0=0,Jl=1/0,$l=null,La=null,dn=0,Na=null,cs=null,ea=0,qf=0,jf=null,e0=null,To=0,Yf=null;function Qn(){return(Ue&2)!==0&&ye!==0?ye&-ye:P.T!==null?th():$a()}function n0(){if(Kn===0)if((ye&536870912)===0||Me){var e=Lt;Lt<<=1,(Lt&3932160)===0&&(Lt=262144),Kn=e}else Kn=536870912;return e=jn.current,e!==null&&(e.flags|=32),Kn}function Hn(e,n,a){(e===ke&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)&&(us(e,0),Oa(e,ye,Kn,!1)),Dn(e,a),((Ue&2)===0||e!==ke)&&(e===ke&&((Ue&2)===0&&(vr|=a),tn===4&&Oa(e,ye,Kn,!1)),Ui(e))}function i0(e,n,a){if((Ue&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Vt(e,n),u=o?Yx(e,n):Kf(e,n,!0),h=o;do{if(u===0){os&&!o&&Oa(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!qx(a)){u=Kf(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var A=e;u=bo;var I=A.current.memoizedState.isDehydrated;if(I&&(us(A,y).flags|=256),y=Kf(A,y,!1),y!==2){if(kf&&!I){A.errorRecoveryDisabledLanes|=h,vr|=h,u=4;break t}h=Fn,Fn=u,h!==null&&(Fn===null?Fn=h:Fn.push.apply(Fn,h))}u=y}if(h=!1,u!==2)continue}}if(u===1){us(e,0),Oa(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Oa(o,n,Kn,!Da);break t;case 2:Fn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Ql+300-b(),10<u)){if(Oa(o,n,Kn,!Da),St(o,0,!0)!==0)break t;ea=n,o.timeoutHandle=O0(a0.bind(null,o,a,Fn,$l,Wf,n,Kn,vr,ls,Da,h,"Throttled",-0,0),u);break t}a0(o,a,Fn,$l,Wf,n,Kn,vr,ls,Da,h,null,-0,0)}}break}while(!0);Ui(e)}function a0(e,n,a,o,u,h,y,A,I,et,dt,xt,it,ut){if(e.timeoutHandle=-1,xt=n.subtreeFlags,xt&8192||(xt&16785408)===16785408){xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Hi},Kg(n,h,xt);var kt=(h&62914560)===h?Ql-b():(h&4194048)===h?t0-b():0;if(kt=Dy(xt,kt),kt!==null){ea=h,e.cancelPendingCommit=kt(h0.bind(null,e,n,h,a,o,u,y,A,I,dt,xt,null,it,ut)),Oa(e,h,y,!et);return}}h0(e,n,h,a,o,u,y,A,I)}function qx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!Wn(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Oa(e,n,a,o){n&=~Xf,n&=~vr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-Ft(u),y=1<<h;o[h]=-1,u&=~y}a!==0&&Ws(e,a,n)}function tc(){return(Ue&6)===0?(Ao(0),!1):!0}function Zf(){if(ve!==null){if(Pe===0)var e=ve.return;else e=ve,Xi=lr=null,ff(e),ts=null,oo=0,e=ve;for(;e!==null;)Pg(e.alternate,e),e=e.return;ve=null}}function us(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,hy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ea=0,Zf(),ke=e,ve=a=Vi(e.current,null),ye=n,Pe=0,Zn=null,Da=!1,os=Vt(e,n),kf=!1,ls=Kn=Xf=vr=Ua=tn=0,Fn=bo=null,Wf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Ft(o),h=1<<u;n|=e[u],o&=~h}return ta=n,Sl(),a}function r0(e,n){fe=null,P.H=go,n===$r||n===wl?(n=Sm(),Pe=3):n===Ju?(n=Sm(),Pe=4):Pe=n===Rf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,ve===null&&(tn=1,kl(e,ii(n,e.current)))}function s0(){var e=jn.current;return e===null?!0:(ye&4194048)===ye?oi===null:(ye&62914560)===ye||(ye&536870912)!==0?e===oi:!1}function o0(){var e=P.H;return P.H=go,e===null?go:e}function l0(){var e=P.A;return P.A=Xx,e}function ec(){tn=4,Da||(ye&4194048)!==ye&&jn.current!==null||(os=!0),(Ua&134217727)===0&&(vr&134217727)===0||ke===null||Oa(ke,ye,Kn,!1)}function Kf(e,n,a){var o=Ue;Ue|=2;var u=o0(),h=l0();(ke!==e||ye!==n)&&($l=null,us(e,n)),n=!1;var y=tn;t:do try{if(Pe!==0&&ve!==null){var A=ve,I=Zn;switch(Pe){case 8:Zf(),y=6;break t;case 3:case 2:case 9:case 6:jn.current===null&&(n=!0);var et=Pe;if(Pe=0,Zn=null,fs(e,A,I,et),a&&os){y=0;break t}break;default:et=Pe,Pe=0,Zn=null,fs(e,A,I,et)}}jx(),y=tn;break}catch(dt){r0(e,dt)}while(!0);return n&&e.shellSuspendCounter++,Xi=lr=null,Ue=o,P.H=u,P.A=h,ve===null&&(ke=null,ye=0,Sl()),y}function jx(){for(;ve!==null;)c0(ve)}function Yx(e,n){var a=Ue;Ue|=2;var o=o0(),u=l0();ke!==e||ye!==n?($l=null,Jl=b()+500,us(e,n)):os=Vt(e,n);t:do try{if(Pe!==0&&ve!==null){n=ve;var h=Zn;e:switch(Pe){case 1:Pe=0,Zn=null,fs(e,n,h,1);break;case 2:case 9:if(xm(h)){Pe=0,Zn=null,u0(n);break}n=function(){Pe!==2&&Pe!==9||ke!==e||(Pe=7),Ui(e)},h.then(n,n);break t;case 3:Pe=7;break t;case 4:Pe=5;break t;case 7:xm(h)?(Pe=0,Zn=null,u0(n)):(Pe=0,Zn=null,fs(e,n,h,7));break;case 5:var y=null;switch(ve.tag){case 26:y=ve.memoizedState;case 5:case 27:var A=ve;if(y?Z0(y):A.stateNode.complete){Pe=0,Zn=null;var I=A.sibling;if(I!==null)ve=I;else{var et=A.return;et!==null?(ve=et,nc(et)):ve=null}break e}}Pe=0,Zn=null,fs(e,n,h,5);break;case 6:Pe=0,Zn=null,fs(e,n,h,6);break;case 8:Zf(),tn=6;break t;default:throw Error(r(462))}}Zx();break}catch(dt){r0(e,dt)}while(!0);return Xi=lr=null,P.H=o,P.A=u,Ue=a,ve!==null?0:(ke=null,ye=0,Sl(),tn)}function Zx(){for(;ve!==null&&!We();)c0(ve)}function c0(e){var n=Ng(e.alternate,e,ta);e.memoizedProps=e.pendingProps,n===null?nc(e):ve=n}function u0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Rg(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=Rg(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:ff(n);default:Pg(a,n),n=ve=lm(n,ta),n=Ng(a,n,ta)}e.memoizedProps=e.pendingProps,n===null?nc(e):ve=n}function fs(e,n,a,o){Xi=lr=null,ff(n),ts=null,oo=0;var u=n.return;try{if(Bx(e,u,n,a,ye)){tn=1,kl(e,ii(a,e.current)),ve=null;return}}catch(h){if(u!==null)throw ve=u,h;tn=1,kl(e,ii(a,e.current)),ve=null;return}n.flags&32768?(Me||o===1?e=!0:os||(ye&536870912)!==0?e=!1:(Da=e=!0,(o===2||o===9||o===3||o===6)&&(o=jn.current,o!==null&&o.tag===13&&(o.flags|=16384))),f0(n,e)):nc(n)}function nc(e){var n=e;do{if((n.flags&32768)!==0){f0(n,Da);return}e=n.return;var a=Hx(n.alternate,n,ta);if(a!==null){ve=a;return}if(n=n.sibling,n!==null){ve=n;return}ve=n=e}while(n!==null);tn===0&&(tn=5)}function f0(e,n){do{var a=Gx(e.alternate,e);if(a!==null){a.flags&=32767,ve=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ve=e;return}ve=e=a}while(e!==null);tn=6,ve=null}function h0(e,n,a,o,u,h,y,A,I){e.cancelPendingCommit=null;do ic();while(dn!==0);if((Ue&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(h=n.lanes|n.childLanes,h|=Bu,ei(e,a,h,y,A,I),e===ke&&(ve=ke=null,ye=0),cs=n,Na=e,ea=a,qf=h,jf=u,e0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,$x(ht,function(){return v0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=W.p,W.p=2,y=Ue,Ue|=4;try{Vx(e,n,a)}finally{Ue=y,W.p=u,P.T=o}}dn=1,d0(),p0(),m0()}}function d0(){if(dn===1){dn=0;var e=Na,n=cs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=W.p;W.p=2;var u=Ue;Ue|=4;try{jg(n,e);var h=lh,y=$p(e.containerInfo),A=h.focusedElem,I=h.selectionRange;if(y!==A&&A&&A.ownerDocument&&Jp(A.ownerDocument.documentElement,A)){if(I!==null&&Lu(A)){var et=I.start,dt=I.end;if(dt===void 0&&(dt=et),"selectionStart"in A)A.selectionStart=et,A.selectionEnd=Math.min(dt,A.value.length);else{var xt=A.ownerDocument||document,it=xt&&xt.defaultView||window;if(it.getSelection){var ut=it.getSelection(),kt=A.textContent.length,ie=Math.min(I.start,kt),He=I.end===void 0?ie:Math.min(I.end,kt);!ut.extend&&ie>He&&(y=He,He=ie,ie=y);var j=Qp(A,ie),V=Qp(A,He);if(j&&V&&(ut.rangeCount!==1||ut.anchorNode!==j.node||ut.anchorOffset!==j.offset||ut.focusNode!==V.node||ut.focusOffset!==V.offset)){var tt=xt.createRange();tt.setStart(j.node,j.offset),ut.removeAllRanges(),ie>He?(ut.addRange(tt),ut.extend(V.node,V.offset)):(tt.setEnd(V.node,V.offset),ut.addRange(tt))}}}}for(xt=[],ut=A;ut=ut.parentNode;)ut.nodeType===1&&xt.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<xt.length;A++){var gt=xt[A];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}mc=!!oh,lh=oh=null}finally{Ue=u,W.p=o,P.T=a}}e.current=n,dn=2}}function p0(){if(dn===2){dn=0;var e=Na,n=cs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=W.p;W.p=2;var u=Ue;Ue|=4;try{Vg(e,n.alternate,n)}finally{Ue=u,W.p=o,P.T=a}}dn=3}}function m0(){if(dn===4||dn===3){dn=0,O();var e=Na,n=cs,a=ea,o=e0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?dn=5:(dn=0,cs=Na=null,g0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(La=null),Br(a),n=n.stateNode,Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(At,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,u=W.p,W.p=2,P.T=null;try{for(var h=e.onRecoverableError,y=0;y<o.length;y++){var A=o[y];h(A.value,{componentStack:A.stack})}}finally{P.T=n,W.p=u}}(ea&3)!==0&&ic(),Ui(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Yf?To++:(To=0,Yf=e):To=0,Ao(0)}}function g0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ro(n)))}function ic(){return d0(),p0(),m0(),v0()}function v0(){if(dn!==5)return!1;var e=Na,n=qf;qf=0;var a=Br(ea),o=P.T,u=W.p;try{W.p=32>a?32:a,P.T=null,a=jf,jf=null;var h=Na,y=ea;if(dn=0,cs=Na=null,ea=0,(Ue&6)!==0)throw Error(r(331));var A=Ue;if(Ue|=4,Jg(h.current),Zg(h,h.current,y,a),Ue=A,Ao(0,!1),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(At,h)}catch{}return!0}finally{W.p=u,P.T=o,g0(e,n)}}function _0(e,n,a){n=ii(a,n),n=Af(e.stateNode,n,2),e=Aa(e,n,2),e!==null&&(Dn(e,2),Ui(e))}function ze(e,n,a){if(e.tag===3)_0(e,e,a);else for(;n!==null;){if(n.tag===3){_0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(La===null||!La.has(o))){e=ii(a,e),a=xg(2),o=Aa(n,a,2),o!==null&&(yg(a,o,n,e),Dn(o,2),Ui(o));break}}n=n.return}}function Qf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Wx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(kf=!0,u.add(a),e=Kx.bind(null,e,n,a),n.then(e,e))}function Kx(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ke===e&&(ye&a)===a&&(tn===4||tn===3&&(ye&62914560)===ye&&300>b()-Ql?(Ue&2)===0&&us(e,0):Xf|=a,ls===ye&&(ls=0)),Ui(e)}function x0(e,n){n===0&&(n=Oe()),e=rr(e,n),e!==null&&(Dn(e,n),Ui(e))}function Qx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),x0(e,a)}function Jx(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),x0(e,a)}function $x(e,n){return se(e,n)}var ac=null,hs=null,Jf=!1,rc=!1,$f=!1,Pa=0;function Ui(e){e!==hs&&e.next===null&&(hs===null?ac=hs=e:hs=hs.next=e),rc=!0,Jf||(Jf=!0,ey())}function Ao(e,n){if(!$f&&rc){$f=!0;do for(var a=!1,o=ac;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var y=o.suspendedLanes,A=o.pingedLanes;h=(1<<31-Ft(42|e)+1)-1,h&=u&~(y&~A),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,E0(o,h))}else h=ye,h=St(o,o===ke?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Vt(o,h)||(a=!0,E0(o,h));o=o.next}while(a);$f=!1}}function ty(){y0()}function y0(){rc=Jf=!1;var e=0;Pa!==0&&fy()&&(e=Pa);for(var n=b(),a=null,o=ac;o!==null;){var u=o.next,h=S0(o,n);h===0?(o.next=null,a===null?ac=u:a.next=u,u===null&&(hs=a)):(a=o,(e!==0||(h&3)!==0)&&(rc=!0)),o=u}dn!==0&&dn!==5||Ao(e),Pa!==0&&(Pa=0)}function S0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var y=31-Ft(h),A=1<<y,I=u[y];I===-1?((A&a)===0||(A&o)!==0)&&(u[y]=le(A,n)):I<=n&&(e.expiredLanes|=A),h&=~A}if(n=ke,a=ye,a=St(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ye(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Vt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Ye(o),Br(a)){case 2:case 8:a=bt;break;case 32:a=ht;break;case 268435456:a=Dt;break;default:a=ht}return o=M0.bind(null,e),a=se(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Ye(o),e.callbackPriority=2,e.callbackNode=null,2}function M0(e,n){if(dn!==0&&dn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ic()&&e.callbackNode!==a)return null;var o=ye;return o=St(e,e===ke?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(i0(e,o,n),S0(e,b()),e.callbackNode!=null&&e.callbackNode===a?M0.bind(null,e):null)}function E0(e,n){if(ic())return null;i0(e,n,!0)}function ey(){dy(function(){(Ue&6)!==0?se(pt,ty):y0()})}function th(){if(Pa===0){var e=Qr;e===0&&(e=Rt,Rt<<=1,(Rt&261888)===0&&(Rt=256)),Pa=e}return Pa}function b0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:dl(""+e)}function T0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function ny(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=b0((u[yn]||null).action),y=o.submitter;y&&(n=(n=y[yn]||null)?b0(n.formAction):y.getAttribute("formAction"),n!==null&&(h=n,y=null));var A=new vl("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Pa!==0){var I=y?T0(u,y):new FormData(u);yf(a,{pending:!0,data:I,method:u.method,action:h},null,I)}}else typeof h=="function"&&(A.preventDefault(),I=y?T0(u,y):new FormData(u),yf(a,{pending:!0,data:I,method:u.method,action:h},h,I))},currentTarget:u}]})}}for(var eh=0;eh<zu.length;eh++){var nh=zu[eh],iy=nh.toLowerCase(),ay=nh[0].toUpperCase()+nh.slice(1);pi(iy,"on"+ay)}pi(nm,"onAnimationEnd"),pi(im,"onAnimationIteration"),pi(am,"onAnimationStart"),pi("dblclick","onDoubleClick"),pi("focusin","onFocus"),pi("focusout","onBlur"),pi(yx,"onTransitionRun"),pi(Sx,"onTransitionStart"),pi(Mx,"onTransitionCancel"),pi(rm,"onTransitionEnd"),te("onMouseEnter",["mouseout","mouseover"]),te("onMouseLeave",["mouseout","mouseover"]),te("onPointerEnter",["pointerout","pointerover"]),te("onPointerLeave",["pointerout","pointerover"]),It("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),It("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),It("onBeforeInput",["compositionend","keypress","textInput","paste"]),It("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),It("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),It("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ry=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ro));function A0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var y=o.length-1;0<=y;y--){var A=o[y],I=A.instance,et=A.currentTarget;if(A=A.listener,I!==h&&u.isPropagationStopped())break t;h=A,u.currentTarget=et;try{h(u)}catch(dt){yl(dt)}u.currentTarget=null,h=I}else for(y=0;y<o.length;y++){if(A=o[y],I=A.instance,et=A.currentTarget,A=A.listener,I!==h&&u.isPropagationStopped())break t;h=A,u.currentTarget=et;try{h(u)}catch(dt){yl(dt)}u.currentTarget=null,h=I}}}}function _e(e,n){var a=n[js];a===void 0&&(a=n[js]=new Set);var o=e+"__bubble";a.has(o)||(R0(n,e,2,!1),a.add(o))}function ih(e,n,a){var o=0;n&&(o|=4),R0(a,e,o,n)}var sc="_reactListening"+Math.random().toString(36).slice(2);function ah(e){if(!e[sc]){e[sc]=!0,zt.forEach(function(a){a!=="selectionchange"&&(ry.has(a)||ih(a,!1,e),ih(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[sc]||(n[sc]=!0,ih("selectionchange",!1,n))}}function R0(e,n,a,o){switch(nv(n)){case 2:var u=Ny;break;case 8:u=Oy;break;default:u=xh}a=u.bind(null,n,a,e),u=void 0,!Eu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function rh(e,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var A=o.stateNode.containerInfo;if(A===u)break;if(y===4)for(y=o.return;y!==null;){var I=y.tag;if((I===3||I===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;A!==null;){if(y=q(A),y===null)return;if(I=y.tag,I===5||I===6||I===26||I===27){o=h=y;continue t}A=A.parentNode}}o=o.return}Lp(function(){var et=h,dt=Su(a),xt=[];t:{var it=sm.get(e);if(it!==void 0){var ut=vl,kt=e;switch(e){case"keypress":if(ml(a)===0)break t;case"keydown":case"keyup":ut=J1;break;case"focusin":kt="focus",ut=Ru;break;case"focusout":kt="blur",ut=Ru;break;case"beforeblur":case"afterblur":ut=Ru;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=Pp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=H1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=ex;break;case nm:case im:case am:ut=k1;break;case rm:ut=ix;break;case"scroll":case"scrollend":ut=I1;break;case"wheel":ut=rx;break;case"copy":case"cut":case"paste":ut=W1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=Bp;break;case"toggle":case"beforetoggle":ut=ox}var ie=(n&4)!==0,He=!ie&&(e==="scroll"||e==="scrollend"),j=ie?it!==null?it+"Capture":null:it;ie=[];for(var V=et,tt;V!==null;){var gt=V;if(tt=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||tt===null||j===null||(gt=Ys(V,j),gt!=null&&ie.push(Co(V,gt,tt))),He)break;V=V.return}0<ie.length&&(it=new ut(it,kt,null,a,dt),xt.push({event:it,listeners:ie}))}}if((n&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",ut=e==="mouseout"||e==="pointerout",it&&a!==yu&&(kt=a.relatedTarget||a.fromElement)&&(q(kt)||kt[_a]))break t;if((ut||it)&&(it=dt.window===dt?dt:(it=dt.ownerDocument)?it.defaultView||it.parentWindow:window,ut?(kt=a.relatedTarget||a.toElement,ut=et,kt=kt?q(kt):null,kt!==null&&(He=c(kt),ie=kt.tag,kt!==He||ie!==5&&ie!==27&&ie!==6)&&(kt=null)):(ut=null,kt=et),ut!==kt)){if(ie=Pp,gt="onMouseLeave",j="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(ie=Bp,gt="onPointerLeave",j="onPointerEnter",V="pointer"),He=ut==null?it:lt(ut),tt=kt==null?it:lt(kt),it=new ie(gt,V+"leave",ut,a,dt),it.target=He,it.relatedTarget=tt,gt=null,q(dt)===et&&(ie=new ie(j,V+"enter",kt,a,dt),ie.target=tt,ie.relatedTarget=He,gt=ie),He=gt,ut&&kt)e:{for(ie=sy,j=ut,V=kt,tt=0,gt=j;gt;gt=ie(gt))tt++;gt=0;for(var ne=V;ne;ne=ie(ne))gt++;for(;0<tt-gt;)j=ie(j),tt--;for(;0<gt-tt;)V=ie(V),gt--;for(;tt--;){if(j===V||V!==null&&j===V.alternate){ie=j;break e}j=ie(j),V=ie(V)}ie=null}else ie=null;ut!==null&&C0(xt,it,ut,ie,!1),kt!==null&&He!==null&&C0(xt,He,kt,ie,!0)}}t:{if(it=et?lt(et):window,ut=it.nodeName&&it.nodeName.toLowerCase(),ut==="select"||ut==="input"&&it.type==="file")var Ce=Wp;else if(kp(it))if(qp)Ce=vx;else{Ce=mx;var Zt=px}else ut=it.nodeName,!ut||ut.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?et&&xu(et.elementType)&&(Ce=Wp):Ce=gx;if(Ce&&(Ce=Ce(e,et))){Xp(xt,Ce,a,dt);break t}Zt&&Zt(e,it,et),e==="focusout"&&et&&it.type==="number"&&et.memoizedProps.value!=null&&hn(it,"number",it.value)}switch(Zt=et?lt(et):window,e){case"focusin":(kp(Zt)||Zt.contentEditable==="true")&&(kr=Zt,Nu=et,no=null);break;case"focusout":no=Nu=kr=null;break;case"mousedown":Ou=!0;break;case"contextmenu":case"mouseup":case"dragend":Ou=!1,tm(xt,a,dt);break;case"selectionchange":if(xx)break;case"keydown":case"keyup":tm(xt,a,dt)}var he;if(wu)t:{switch(e){case"compositionstart":var Se="onCompositionStart";break t;case"compositionend":Se="onCompositionEnd";break t;case"compositionupdate":Se="onCompositionUpdate";break t}Se=void 0}else Vr?Gp(e,a)&&(Se="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Se="onCompositionStart");Se&&(Ip&&a.locale!=="ko"&&(Vr||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&Vr&&(he=Np()):(xa=dt,bu="value"in xa?xa.value:xa.textContent,Vr=!0)),Zt=oc(et,Se),0<Zt.length&&(Se=new zp(Se,e,null,a,dt),xt.push({event:Se,listeners:Zt}),he?Se.data=he:(he=Vp(a),he!==null&&(Se.data=he)))),(he=cx?ux(e,a):fx(e,a))&&(Se=oc(et,"onBeforeInput"),0<Se.length&&(Zt=new zp("onBeforeInput","beforeinput",null,a,dt),xt.push({event:Zt,listeners:Se}),Zt.data=he)),ny(xt,e,et,a,dt)}A0(xt,n)})}function Co(e,n,a){return{instance:e,listener:n,currentTarget:a}}function oc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=Ys(e,a),u!=null&&o.unshift(Co(e,u,h)),u=Ys(e,n),u!=null&&o.push(Co(e,u,h))),e.tag===3)return o;e=e.return}return[]}function sy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function C0(e,n,a,o,u){for(var h=n._reactName,y=[];a!==null&&a!==o;){var A=a,I=A.alternate,et=A.stateNode;if(A=A.tag,I!==null&&I===o)break;A!==5&&A!==26&&A!==27||et===null||(I=et,u?(et=Ys(a,h),et!=null&&y.unshift(Co(a,et,I))):u||(et=Ys(a,h),et!=null&&y.push(Co(a,et,I)))),a=a.return}y.length!==0&&e.push({event:n,listeners:y})}var oy=/\r\n?/g,ly=/\u0000|\uFFFD/g;function w0(e){return(typeof e=="string"?e:""+e).replace(oy,`
`).replace(ly,"")}function D0(e,n){return n=w0(n),w0(e)===n}function Fe(e,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Fr(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Fr(e,""+o);break;case"className":Ne(e,"class",o);break;case"tabIndex":Ne(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ne(e,a,o);break;case"style":Dp(e,o,h);break;case"data":if(n!=="object"){Ne(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=dl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Fe(e,n,"name",u.name,u,null),Fe(e,n,"formEncType",u.formEncType,u,null),Fe(e,n,"formMethod",u.formMethod,u,null),Fe(e,n,"formTarget",u.formTarget,u,null)):(Fe(e,n,"encType",u.encType,u,null),Fe(e,n,"method",u.method,u,null),Fe(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=dl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Hi);break;case"onScroll":o!=null&&_e("scroll",e);break;case"onScrollEnd":o!=null&&_e("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=dl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":_e("beforetoggle",e),_e("toggle",e),Ve(e,"popover",o);break;case"xlinkActuate":ge(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ge(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ge(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ge(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ge(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ge(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ge(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ge(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ge(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ve(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=z1.get(a)||a,Ve(e,a,o))}}function sh(e,n,a,o,u,h){switch(a){case"style":Dp(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Fr(e,o):(typeof o=="number"||typeof o=="bigint")&&Fr(e,""+o);break;case"onScroll":o!=null&&_e("scroll",e);break;case"onScrollEnd":o!=null&&_e("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Hi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Xt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[yn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Ve(e,a,o)}}}function Tn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",e),_e("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var y=a[h];if(y!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Fe(e,n,h,y,a,null)}}u&&Fe(e,n,"srcSet",a.srcSet,a,null),o&&Fe(e,n,"src",a.src,a,null);return;case"input":_e("invalid",e);var A=h=y=u=null,I=null,et=null;for(o in a)if(a.hasOwnProperty(o)){var dt=a[o];if(dt!=null)switch(o){case"name":u=dt;break;case"type":y=dt;break;case"checked":I=dt;break;case"defaultChecked":et=dt;break;case"value":h=dt;break;case"defaultValue":A=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(r(137,n));break;default:Fe(e,n,o,dt,a,null)}}Un(e,h,A,I,et,y,u,!1);return;case"select":_e("invalid",e),o=y=h=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":h=A;break;case"defaultValue":y=A;break;case"multiple":o=A;default:Fe(e,n,u,A,a,null)}n=h,a=y,e.multiple=!!o,n!=null?nn(e,!!o,n,!1):a!=null&&nn(e,!!o,a,!0);return;case"textarea":_e("invalid",e),h=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(A=a[y],A!=null))switch(y){case"value":o=A;break;case"defaultValue":u=A;break;case"children":h=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Fe(e,n,y,A,a,null)}Ri(e,o,u,h);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(o=a[I],o!=null))switch(I){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Fe(e,n,I,o,a,null)}return;case"dialog":_e("beforetoggle",e),_e("toggle",e),_e("cancel",e),_e("close",e);break;case"iframe":case"object":_e("load",e);break;case"video":case"audio":for(o=0;o<Ro.length;o++)_e(Ro[o],e);break;case"image":_e("error",e),_e("load",e);break;case"details":_e("toggle",e);break;case"embed":case"source":case"link":_e("error",e),_e("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in a)if(a.hasOwnProperty(et)&&(o=a[et],o!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Fe(e,n,et,o,a,null)}return;default:if(xu(n)){for(dt in a)a.hasOwnProperty(dt)&&(o=a[dt],o!==void 0&&sh(e,n,dt,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Fe(e,n,A,o,a,null))}function cy(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,y=null,A=null,I=null,et=null,dt=null;for(ut in a){var xt=a[ut];if(a.hasOwnProperty(ut)&&xt!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":I=xt;default:o.hasOwnProperty(ut)||Fe(e,n,ut,null,o,xt)}}for(var it in o){var ut=o[it];if(xt=a[it],o.hasOwnProperty(it)&&(ut!=null||xt!=null))switch(it){case"type":h=ut;break;case"name":u=ut;break;case"checked":et=ut;break;case"defaultChecked":dt=ut;break;case"value":y=ut;break;case"defaultValue":A=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:ut!==xt&&Fe(e,n,it,ut,o,xt)}}An(e,y,A,I,et,dt,h,u);return;case"select":ut=y=A=it=null;for(h in a)if(I=a[h],a.hasOwnProperty(h)&&I!=null)switch(h){case"value":break;case"multiple":ut=I;default:o.hasOwnProperty(h)||Fe(e,n,h,null,o,I)}for(u in o)if(h=o[u],I=a[u],o.hasOwnProperty(u)&&(h!=null||I!=null))switch(u){case"value":it=h;break;case"defaultValue":A=h;break;case"multiple":y=h;default:h!==I&&Fe(e,n,u,h,o,I)}n=A,a=y,o=ut,it!=null?nn(e,!!a,it,!1):!!o!=!!a&&(n!=null?nn(e,!!a,n,!0):nn(e,!!a,a?[]:"",!1));return;case"textarea":ut=it=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Fe(e,n,A,null,o,u)}for(y in o)if(u=o[y],h=a[y],o.hasOwnProperty(y)&&(u!=null||h!=null))switch(y){case"value":it=u;break;case"defaultValue":ut=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==h&&Fe(e,n,y,u,o,h)}Ir(e,it,ut);return;case"option":for(var kt in a)if(it=a[kt],a.hasOwnProperty(kt)&&it!=null&&!o.hasOwnProperty(kt))switch(kt){case"selected":e.selected=!1;break;default:Fe(e,n,kt,null,o,it)}for(I in o)if(it=o[I],ut=a[I],o.hasOwnProperty(I)&&it!==ut&&(it!=null||ut!=null))switch(I){case"selected":e.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:Fe(e,n,I,it,o,ut)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in a)it=a[ie],a.hasOwnProperty(ie)&&it!=null&&!o.hasOwnProperty(ie)&&Fe(e,n,ie,null,o,it);for(et in o)if(it=o[et],ut=a[et],o.hasOwnProperty(et)&&it!==ut&&(it!=null||ut!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:Fe(e,n,et,it,o,ut)}return;default:if(xu(n)){for(var He in a)it=a[He],a.hasOwnProperty(He)&&it!==void 0&&!o.hasOwnProperty(He)&&sh(e,n,He,void 0,o,it);for(dt in o)it=o[dt],ut=a[dt],!o.hasOwnProperty(dt)||it===ut||it===void 0&&ut===void 0||sh(e,n,dt,it,o,ut);return}}for(var j in a)it=a[j],a.hasOwnProperty(j)&&it!=null&&!o.hasOwnProperty(j)&&Fe(e,n,j,null,o,it);for(xt in o)it=o[xt],ut=a[xt],!o.hasOwnProperty(xt)||it===ut||it==null&&ut==null||Fe(e,n,xt,it,o,ut)}function U0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function uy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],h=u.transferSize,y=u.initiatorType,A=u.duration;if(h&&A&&U0(y)){for(y=0,A=u.responseEnd,o+=1;o<a.length;o++){var I=a[o],et=I.startTime;if(et>A)break;var dt=I.transferSize,xt=I.initiatorType;dt&&U0(xt)&&(I=I.responseEnd,y+=dt*(I<A?1:(A-et)/(I-et)))}if(--o,n+=8*(h+y)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var oh=null,lh=null;function lc(e){return e.nodeType===9?e:e.ownerDocument}function L0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function N0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function ch(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var uh=null;function fy(){var e=window.event;return e&&e.type==="popstate"?e===uh?!1:(uh=e,!0):(uh=null,!1)}var O0=typeof setTimeout=="function"?setTimeout:void 0,hy=typeof clearTimeout=="function"?clearTimeout:void 0,P0=typeof Promise=="function"?Promise:void 0,dy=typeof queueMicrotask=="function"?queueMicrotask:typeof P0<"u"?function(e){return P0.resolve(null).then(e).catch(py)}:O0;function py(e){setTimeout(function(){throw e})}function za(e){return e==="head"}function z0(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),gs(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")wo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,wo(a);for(var h=a.firstChild;h;){var y=h.nextSibling,A=h.nodeName;h[tr]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=y}}else a==="body"&&wo(e.ownerDocument.body);a=u}while(a);gs(n)}function B0(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function fh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":fh(a),R(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function my(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[tr])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=li(e.nextSibling),e===null)break}return null}function gy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=li(e.nextSibling),e===null))return null;return e}function I0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=li(e.nextSibling),e===null))return null;return e}function hh(e){return e.data==="$?"||e.data==="$~"}function dh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function vy(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function li(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var ph=null;function F0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return li(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function H0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function G0(e,n,a){switch(n=lc(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function wo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);R(e)}var ci=new Map,V0=new Set;function cc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var na=W.d;W.d={f:_y,r:xy,D:yy,C:Sy,L:My,m:Ey,X:Ty,S:by,M:Ay};function _y(){var e=na.f(),n=tc();return e||n}function xy(e){var n=ot(e);n!==null&&n.tag===5&&n.type==="form"?rg(n):na.r(e)}var ds=typeof document>"u"?null:document;function k0(e,n,a){var o=ds;if(o&&typeof n=="string"&&n){var u=xe(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),V0.has(u)||(V0.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Tn(n,"link",e),Et(n),o.head.appendChild(n)))}}function yy(e){na.D(e),k0("dns-prefetch",e,null)}function Sy(e,n){na.C(e,n),k0("preconnect",e,n)}function My(e,n,a){na.L(e,n,a);var o=ds;if(o&&e&&n){var u='link[rel="preload"][as="'+xe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+xe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+xe(a.imageSizes)+'"]')):u+='[href="'+xe(e)+'"]';var h=u;switch(n){case"style":h=ps(e);break;case"script":h=ms(e)}ci.has(h)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ci.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Do(h))||n==="script"&&o.querySelector(Uo(h))||(n=o.createElement("link"),Tn(n,"link",e),Et(n),o.head.appendChild(n)))}}function Ey(e,n){na.m(e,n);var a=ds;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+xe(o)+'"][href="'+xe(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=ms(e)}if(!ci.has(h)&&(e=g({rel:"modulepreload",href:e},n),ci.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Uo(h)))return}o=a.createElement("link"),Tn(o,"link",e),Et(o),a.head.appendChild(o)}}}function by(e,n,a){na.S(e,n,a);var o=ds;if(o&&e){var u=Z(o).hoistableStyles,h=ps(e);n=n||"default";var y=u.get(h);if(!y){var A={loading:0,preload:null};if(y=o.querySelector(Do(h)))A.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ci.get(h))&&mh(e,a);var I=y=o.createElement("link");Et(I),Tn(I,"link",e),I._p=new Promise(function(et,dt){I.onload=et,I.onerror=dt}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,uc(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:A},u.set(h,y)}}}function Ty(e,n){na.X(e,n);var a=ds;if(a&&e){var o=Z(a).hoistableScripts,u=ms(e),h=o.get(u);h||(h=a.querySelector(Uo(u)),h||(e=g({src:e,async:!0},n),(n=ci.get(u))&&gh(e,n),h=a.createElement("script"),Et(h),Tn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function Ay(e,n){na.M(e,n);var a=ds;if(a&&e){var o=Z(a).hoistableScripts,u=ms(e),h=o.get(u);h||(h=a.querySelector(Uo(u)),h||(e=g({src:e,async:!0,type:"module"},n),(n=ci.get(u))&&gh(e,n),h=a.createElement("script"),Et(h),Tn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function X0(e,n,a,o){var u=(u=$.current)?cc(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ps(a.href),a=Z(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ps(a.href);var h=Z(u).hoistableStyles,y=h.get(e);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,y),(h=u.querySelector(Do(e)))&&!h._p&&(y.instance=h,y.state.loading=5),ci.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ci.set(e,a),h||Ry(u,e,a,y.state))),n&&o===null)throw Error(r(528,""));return y}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ms(a),a=Z(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function ps(e){return'href="'+xe(e)+'"'}function Do(e){return'link[rel="stylesheet"]['+e+"]"}function W0(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function Ry(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Tn(n,"link",a),Et(n),e.head.appendChild(n))}function ms(e){return'[src="'+xe(e)+'"]'}function Uo(e){return"script[async]"+e}function q0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+xe(a.href)+'"]');if(o)return n.instance=o,Et(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Et(o),Tn(o,"style",u),uc(o,a.precedence,e),n.instance=o;case"stylesheet":u=ps(a.href);var h=e.querySelector(Do(u));if(h)return n.state.loading|=4,n.instance=h,Et(h),h;o=W0(a),(u=ci.get(u))&&mh(o,u),h=(e.ownerDocument||e).createElement("link"),Et(h);var y=h;return y._p=new Promise(function(A,I){y.onload=A,y.onerror=I}),Tn(h,"link",o),n.state.loading|=4,uc(h,a.precedence,e),n.instance=h;case"script":return h=ms(a.src),(u=e.querySelector(Uo(h)))?(n.instance=u,Et(u),u):(o=a,(u=ci.get(h))&&(o=g({},a),gh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),Et(u),Tn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,uc(o,a.precedence,e));return n.instance}function uc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,y=0;y<o.length;y++){var A=o[y];if(A.dataset.precedence===n)h=A;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function mh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function gh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var fc=null;function j0(e,n,a){if(fc===null){var o=new Map,u=fc=new Map;u.set(a,o)}else u=fc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[tr]||h[sn]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var y=h.getAttribute(n)||"";y=e+y;var A=o.get(y);A?A.push(h):o.set(y,[h])}}return o}function Y0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Cy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Z0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function wy(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=ps(o.href),h=n.querySelector(Do(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=hc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,Et(h);return}h=n.ownerDocument||n,o=W0(o),(u=ci.get(u))&&mh(o,u),h=h.createElement("link"),Et(h);var y=h;y._p=new Promise(function(A,I){y.onload=A,y.onerror=I}),Tn(h,"link",o),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=hc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var vh=0;function Dy(e,n){return e.stylesheets&&e.count===0&&pc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&pc(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&vh===0&&(vh=62500*uy());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&pc(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>vh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function hc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)pc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var dc=null;function pc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,dc=new Map,n.forEach(Uy,e),dc=null,hc.call(e))}function Uy(e,n){if(!(n.state.loading&4)){var a=dc.get(e);if(a)var o=a.get(null);else{a=new Map,dc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var y=u[h];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),h=a.get(y)||o,h===o&&a.set(null,u),a.set(y,u),this.count++,o=hc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Lo={$$typeof:U,Provider:null,Consumer:null,_currentValue:k,_currentValue2:k,_threadCount:0};function Ly(e,n,a,o,u,h,y,A,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function K0(e,n,a,o,u,h,y,A,I,et,dt,xt){return e=new Ly(e,n,a,y,I,et,dt,xt,A),n=1,h===!0&&(n|=24),h=qn(3,null,null,n),e.current=h,h.stateNode=e,n=Zu(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},$u(h),e}function Q0(e){return e?(e=qr,e):qr}function J0(e,n,a,o,u,h){u=Q0(u),o.context===null?o.context=u:o.pendingContext=u,o=Ta(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Aa(e,o,n),a!==null&&(Hn(a,e,n),co(a,e,n))}function $0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function _h(e,n){$0(e,n),(e=e.alternate)&&$0(e,n)}function tv(e){if(e.tag===13||e.tag===31){var n=rr(e,67108864);n!==null&&Hn(n,e,67108864),_h(e,67108864)}}function ev(e){if(e.tag===13||e.tag===31){var n=Qn();n=zr(n);var a=rr(e,n);a!==null&&Hn(a,e,n),_h(e,n)}}var mc=!0;function Ny(e,n,a,o){var u=P.T;P.T=null;var h=W.p;try{W.p=2,xh(e,n,a,o)}finally{W.p=h,P.T=u}}function Oy(e,n,a,o){var u=P.T;P.T=null;var h=W.p;try{W.p=8,xh(e,n,a,o)}finally{W.p=h,P.T=u}}function xh(e,n,a,o){if(mc){var u=yh(o);if(u===null)rh(e,n,o,gc,a),iv(e,o);else if(zy(u,e,n,a,o))o.stopPropagation();else if(iv(e,o),n&4&&-1<Py.indexOf(e)){for(;u!==null;){var h=ot(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var y=Tt(h.pendingLanes);if(y!==0){var A=h;for(A.pendingLanes|=2,A.entangledLanes|=2;y;){var I=1<<31-Ft(y);A.entanglements[1]|=I,y&=~I}Ui(h),(Ue&6)===0&&(Jl=b()+500,Ao(0))}}break;case 31:case 13:A=rr(h,2),A!==null&&Hn(A,h,2),tc(),_h(h,2)}if(h=yh(o),h===null&&rh(e,n,o,gc,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else rh(e,n,o,null,a)}}function yh(e){return e=Su(e),Sh(e)}var gc=null;function Sh(e){if(gc=null,e=q(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return gc=e,null}function nv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(nt()){case pt:return 2;case bt:return 8;case ht:case Jt:return 32;case Dt:return 268435456;default:return 32}default:return 32}}var Mh=!1,Ba=null,Ia=null,Fa=null,No=new Map,Oo=new Map,Ha=[],Py="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function iv(e,n){switch(e){case"focusin":case"focusout":Ba=null;break;case"dragenter":case"dragleave":Ia=null;break;case"mouseover":case"mouseout":Fa=null;break;case"pointerover":case"pointerout":No.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oo.delete(n.pointerId)}}function Po(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=ot(n),n!==null&&tv(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function zy(e,n,a,o,u){switch(n){case"focusin":return Ba=Po(Ba,e,n,a,o,u),!0;case"dragenter":return Ia=Po(Ia,e,n,a,o,u),!0;case"mouseover":return Fa=Po(Fa,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return No.set(h,Po(No.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Oo.set(h,Po(Oo.get(h)||null,e,n,a,o,u)),!0}return!1}function av(e){var n=q(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,qs(e.priority,function(){ev(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,qs(e.priority,function(){ev(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=yh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);yu=o,a.target.dispatchEvent(o),yu=null}else return n=ot(a),n!==null&&tv(n),e.blockedOn=a,!1;n.shift()}return!0}function rv(e,n,a){vc(e)&&a.delete(n)}function By(){Mh=!1,Ba!==null&&vc(Ba)&&(Ba=null),Ia!==null&&vc(Ia)&&(Ia=null),Fa!==null&&vc(Fa)&&(Fa=null),No.forEach(rv),Oo.forEach(rv)}function _c(e,n){e.blockedOn===n&&(e.blockedOn=null,Mh||(Mh=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,By)))}var xc=null;function sv(e){xc!==e&&(xc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){xc===e&&(xc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Sh(o||a)===null)continue;break}var h=ot(a);h!==null&&(e.splice(n,3),n-=3,yf(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function gs(e){function n(I){return _c(I,e)}Ba!==null&&_c(Ba,e),Ia!==null&&_c(Ia,e),Fa!==null&&_c(Fa,e),No.forEach(n),Oo.forEach(n);for(var a=0;a<Ha.length;a++){var o=Ha[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ha.length&&(a=Ha[0],a.blockedOn===null);)av(a),a.blockedOn===null&&Ha.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],y=u[yn]||null;if(typeof h=="function")y||sv(a);else if(y){var A=null;if(h&&h.hasAttribute("formAction")){if(u=h,y=h[yn]||null)A=y.formAction;else if(Sh(u)!==null)continue}else A=y.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),sv(a)}}}function ov(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Eh(e){this._internalRoot=e}yc.prototype.render=Eh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Qn();J0(a,o,e,n,null,null)},yc.prototype.unmount=Eh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;J0(e.current,2,null,e,null,null),tc(),n[_a]=null}};function yc(e){this._internalRoot=e}yc.prototype.unstable_scheduleHydration=function(e){if(e){var n=$a();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ha.length&&n!==0&&n<Ha[a].priority;a++);Ha.splice(a,0,e),a===0&&av(e)}};var lv=t.version;if(lv!=="19.2.0")throw Error(r(527,lv,"19.2.0"));W.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var Iy={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sc.isDisabled&&Sc.supportsFiber)try{At=Sc.inject(Iy),Ut=Sc}catch{}}return Bo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=mg,h=gg,y=vg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=K0(e,1,!1,null,null,a,o,null,u,h,y,ov),e[_a]=n.current,ah(e),new Eh(n)},Bo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",h=mg,y=gg,A=vg,I=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=K0(e,1,!0,n,a??null,o,u,I,h,y,A,ov),n.context=Q0(null),a=n.current,o=Qn(),o=zr(o),u=Ta(o),u.callback=null,Aa(a,u,o),a=o,n.current.lanes=a,Dn(n,a),Ui(n),e[_a]=n.current,ah(e),new yc(n)},Bo.version="19.2.0",Bo}var _v;function Zy(){if(_v)return Ah.exports;_v=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Ah.exports=Yy(),Ah.exports}var Ky=Zy();var xv="popstate";function Qy(s={}){function t(r,l){let{pathname:c,search:f,hash:d}=r.location;return md("",{pathname:c,search:f,hash:d},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(r,l){return typeof l=="string"?l:Zo(l)}return $y(t,i,null,s)}function Je(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function Ti(s,t){if(!s){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Jy(){return Math.random().toString(36).substring(2,10)}function yv(s,t){return{usr:s.state,key:s.key,idx:t}}function md(s,t,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof t=="string"?Gs(t):t,state:i,key:t&&t.key||r||Jy()}}function Zo({pathname:s="/",search:t="",hash:i=""}){return t&&t!=="?"&&(s+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Gs(s){let t={};if(s){let i=s.indexOf("#");i>=0&&(t.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(t.search=s.substring(r),s=s.substring(0,r)),s&&(t.pathname=s)}return t}function $y(s,t,i,r={}){let{window:l=document.defaultView,v5Compat:c=!1}=r,f=l.history,d="POP",m=null,p=v();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function v(){return(f.state||{idx:null}).idx}function g(){d="POP";let S=v(),_=S==null?null:S-p;p=S,m&&m({action:d,location:T.location,delta:_})}function x(S,_){d="PUSH";let L=md(T.location,S,_);p=v()+1;let U=yv(L,p),D=T.createHref(L);try{f.pushState(U,"",D)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;l.location.assign(D)}c&&m&&m({action:d,location:T.location,delta:1})}function M(S,_){d="REPLACE";let L=md(T.location,S,_);p=v();let U=yv(L,p),D=T.createHref(L);f.replaceState(U,"",D),c&&m&&m({action:d,location:T.location,delta:0})}function E(S){return tS(S)}let T={get action(){return d},get location(){return s(l,f)},listen(S){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(xv,g),m=S,()=>{l.removeEventListener(xv,g),m=null}},createHref(S){return t(l,S)},createURL:E,encodeLocation(S){let _=E(S);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:x,replace:M,go(S){return f.go(S)}};return T}function tS(s,t=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Je(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:Zo(s);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function B_(s,t,i="/"){return eS(s,t,i,!1)}function eS(s,t,i,r){let l=typeof t=="string"?Gs(t):t,c=ma(l.pathname||"/",i);if(c==null)return null;let f=I_(s);nS(f);let d=null;for(let m=0;d==null&&m<f.length;++m){let p=dS(c);d=fS(f[m],p,r)}return d}function I_(s,t=[],i=[],r="",l=!1){let c=(f,d,m=l,p)=>{let v={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:d,route:f};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(r)&&m)return;Je(v.relativePath.startsWith(r),`Absolute route path "${v.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(r.length)}let g=da([r,v.relativePath]),x=i.concat(v);f.children&&f.children.length>0&&(Je(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),I_(f.children,t,x,g,m)),!(f.path==null&&!f.index)&&t.push({path:g,score:cS(g,f.index),routesMeta:x})};return s.forEach((f,d)=>{if(f.path===""||!f.path?.includes("?"))c(f,d);else for(let m of F_(f.path))c(f,d,!0,m)}),t}function F_(s){let t=s.split("/");if(t.length===0)return[];let[i,...r]=t,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(r.length===0)return l?[c,""]:[c];let f=F_(r.join("/")),d=[];return d.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&d.push(...f),d.map(m=>s.startsWith("/")&&m===""?"/":m)}function nS(s){s.sort((t,i)=>t.score!==i.score?i.score-t.score:uS(t.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var iS=/^:[\w-]+$/,aS=3,rS=2,sS=1,oS=10,lS=-2,Sv=s=>s==="*";function cS(s,t){let i=s.split("/"),r=i.length;return i.some(Sv)&&(r+=lS),t&&(r+=rS),i.filter(l=>!Sv(l)).reduce((l,c)=>l+(iS.test(c)?aS:c===""?sS:oS),r)}function uS(s,t){return s.length===t.length&&s.slice(0,-1).every((r,l)=>r===t[l])?s[s.length-1]-t[t.length-1]:0}function fS(s,t,i=!1){let{routesMeta:r}=s,l={},c="/",f=[];for(let d=0;d<r.length;++d){let m=r[d],p=d===r.length-1,v=c==="/"?t:t.slice(c.length)||"/",g=iu({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},v),x=m.route;if(!g&&p&&i&&!r[r.length-1].route.index&&(g=iu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},v)),!g)return null;Object.assign(l,g.params),f.push({params:l,pathname:da([c,g.pathname]),pathnameBase:_S(da([c,g.pathnameBase])),route:x}),g.pathnameBase!=="/"&&(c=da([c,g.pathnameBase]))}return f}function iu(s,t){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=hS(s.path,s.caseSensitive,s.end),l=t.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:r.reduce((p,{paramName:v,isOptional:g},x)=>{if(v==="*"){let E=d[x]||"";f=c.slice(0,c.length-E.length).replace(/(.)\/+$/,"$1")}const M=d[x];return g&&!M?p[v]=void 0:p[v]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:f,pattern:s}}function hS(s,t=!1,i=!0){Ti(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,d,m)=>(r.push({paramName:d,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function dS(s){try{return s.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ti(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),s}}function ma(s,t){if(t==="/")return s;if(!s.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}var pS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,mS=s=>pS.test(s);function gS(s,t="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Gs(s):s,c;if(i)if(mS(i))c=i;else{if(i.includes("//")){let f=i;i=i.replace(/\/\/+/g,"/"),Ti(!1,`Pathnames cannot have embedded double slashes - normalizing ${f} -> ${i}`)}i.startsWith("/")?c=Mv(i.substring(1),"/"):c=Mv(i,t)}else c=t;return{pathname:c,search:xS(r),hash:yS(l)}}function Mv(s,t){let i=t.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Dh(s,t,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function vS(s){return s.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function H_(s){let t=vS(s);return t.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase)}function G_(s,t,i,r=!1){let l;typeof s=="string"?l=Gs(s):(l={...s},Je(!l.pathname||!l.pathname.includes("?"),Dh("?","pathname","search",l)),Je(!l.pathname||!l.pathname.includes("#"),Dh("#","pathname","hash",l)),Je(!l.search||!l.search.includes("#"),Dh("#","search","hash",l)));let c=s===""||l.pathname==="",f=c?"/":l.pathname,d;if(f==null)d=i;else{let g=t.length-1;if(!r&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),g-=1;l.pathname=x.join("/")}d=g>=0?t[g]:"/"}let m=gS(l,d),p=f&&f!=="/"&&f.endsWith("/"),v=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||v)&&(m.pathname+="/"),m}var da=s=>s.join("/").replace(/\/\/+/g,"/"),_S=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),xS=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,yS=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function SS(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var V_=["POST","PUT","PATCH","DELETE"];new Set(V_);var MS=["GET",...V_];new Set(MS);var Vs=st.createContext(null);Vs.displayName="DataRouter";var fu=st.createContext(null);fu.displayName="DataRouterState";st.createContext(!1);var k_=st.createContext({isTransitioning:!1});k_.displayName="ViewTransition";var ES=st.createContext(new Map);ES.displayName="Fetchers";var bS=st.createContext(null);bS.displayName="Await";var Bi=st.createContext(null);Bi.displayName="Navigation";var nl=st.createContext(null);nl.displayName="Location";var Ii=st.createContext({outlet:null,matches:[],isDataRoute:!1});Ii.displayName="Route";var cp=st.createContext(null);cp.displayName="RouteError";function TS(s,{relative:t}={}){Je(il(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=st.useContext(Bi),{hash:l,pathname:c,search:f}=al(s,{relative:t}),d=c;return i!=="/"&&(d=c==="/"?i:da([i,c])),r.createHref({pathname:d,search:f,hash:l})}function il(){return st.useContext(nl)!=null}function va(){return Je(il(),"useLocation() may be used only in the context of a <Router> component."),st.useContext(nl).location}var X_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function W_(s){st.useContext(Bi).static||st.useLayoutEffect(s)}function up(){let{isDataRoute:s}=st.useContext(Ii);return s?IS():AS()}function AS(){Je(il(),"useNavigate() may be used only in the context of a <Router> component.");let s=st.useContext(Vs),{basename:t,navigator:i}=st.useContext(Bi),{matches:r}=st.useContext(Ii),{pathname:l}=va(),c=JSON.stringify(H_(r)),f=st.useRef(!1);return W_(()=>{f.current=!0}),st.useCallback((m,p={})=>{if(Ti(f.current,X_),!f.current)return;if(typeof m=="number"){i.go(m);return}let v=G_(m,JSON.parse(c),l,p.relative==="path");s==null&&t!=="/"&&(v.pathname=v.pathname==="/"?t:da([t,v.pathname])),(p.replace?i.replace:i.push)(v,p.state,p)},[t,i,c,l,s])}st.createContext(null);function q_(){let{matches:s}=st.useContext(Ii),t=s[s.length-1];return t?t.params:{}}function al(s,{relative:t}={}){let{matches:i}=st.useContext(Ii),{pathname:r}=va(),l=JSON.stringify(H_(i));return st.useMemo(()=>G_(s,JSON.parse(l),r,t==="path"),[s,l,r,t])}function RS(s,t){return j_(s,t)}function j_(s,t,i,r,l){Je(il(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=st.useContext(Bi),{matches:f}=st.useContext(Ii),d=f[f.length-1],m=d?d.params:{},p=d?d.pathname:"/",v=d?d.pathnameBase:"/",g=d&&d.route;{let L=g&&g.path||"";Y_(p,!g||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let x=va(),M;if(t){let L=typeof t=="string"?Gs(t):t;Je(v==="/"||L.pathname?.startsWith(v),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${L.pathname}" was given in the \`location\` prop.`),M=L}else M=x;let E=M.pathname||"/",T=E;if(v!=="/"){let L=v.replace(/^\//,"").split("/");T="/"+E.replace(/^\//,"").split("/").slice(L.length).join("/")}let S=B_(s,{pathname:T});Ti(g||S!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),Ti(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=LS(S&&S.map(L=>Object.assign({},L,{params:Object.assign({},m,L.params),pathname:da([v,c.encodeLocation?c.encodeLocation(L.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?v:da([v,c.encodeLocation?c.encodeLocation(L.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathnameBase])})),f,i,r,l);return t&&_?st.createElement(nl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},_):_}function CS(){let s=BS(),t=SS(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=st.createElement(st.Fragment,null,st.createElement("p",null,"💿 Hey developer 👋"),st.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",st.createElement("code",{style:c},"ErrorBoundary")," or"," ",st.createElement("code",{style:c},"errorElement")," prop on your route.")),st.createElement(st.Fragment,null,st.createElement("h2",null,"Unexpected Application Error!"),st.createElement("h3",{style:{fontStyle:"italic"}},t),i?st.createElement("pre",{style:l},i):null,f)}var wS=st.createElement(CS,null),DS=class extends st.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,t){return t.location!==s.location||t.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:t.error,location:t.location,revalidation:s.revalidation||t.revalidation}}componentDidCatch(s,t){this.props.onError?this.props.onError(s,t):console.error("React Router caught the following error during render",s)}render(){return this.state.error!==void 0?st.createElement(Ii.Provider,{value:this.props.routeContext},st.createElement(cp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function US({routeContext:s,match:t,children:i}){let r=st.useContext(Vs);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),st.createElement(Ii.Provider,{value:s},i)}function LS(s,t=[],i=null,r=null,l=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let c=s,f=i?.errors;if(f!=null){let v=c.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);Je(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,v+1))}let d=!1,m=-1;if(i)for(let v=0;v<c.length;v++){let g=c[v];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=v),g.route.id){let{loaderData:x,errors:M}=i,E=g.route.loader&&!x.hasOwnProperty(g.route.id)&&(!M||M[g.route.id]===void 0);if(g.route.lazy||E){d=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}let p=i&&r?(v,g)=>{r(v,{location:i.location,params:i.matches?.[0]?.params??{},errorInfo:g})}:void 0;return c.reduceRight((v,g,x)=>{let M,E=!1,T=null,S=null;i&&(M=f&&g.route.id?f[g.route.id]:void 0,T=g.route.errorElement||wS,d&&(m<0&&x===0?(Y_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,S=null):m===x&&(E=!0,S=g.route.hydrateFallbackElement||null)));let _=t.concat(c.slice(0,x+1)),L=()=>{let U;return M?U=T:E?U=S:g.route.Component?U=st.createElement(g.route.Component,null):g.route.element?U=g.route.element:U=v,st.createElement(US,{match:g,routeContext:{outlet:v,matches:_,isDataRoute:i!=null},children:U})};return i&&(g.route.ErrorBoundary||g.route.errorElement||x===0)?st.createElement(DS,{location:i.location,revalidation:i.revalidation,component:T,error:M,children:L(),routeContext:{outlet:null,matches:_,isDataRoute:!0},onError:p}):L()},null)}function fp(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function NS(s){let t=st.useContext(Vs);return Je(t,fp(s)),t}function OS(s){let t=st.useContext(fu);return Je(t,fp(s)),t}function PS(s){let t=st.useContext(Ii);return Je(t,fp(s)),t}function hp(s){let t=PS(s),i=t.matches[t.matches.length-1];return Je(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function zS(){return hp("useRouteId")}function BS(){let s=st.useContext(cp),t=OS("useRouteError"),i=hp("useRouteError");return s!==void 0?s:t.errors?.[i]}function IS(){let{router:s}=NS("useNavigate"),t=hp("useNavigate"),i=st.useRef(!1);return W_(()=>{i.current=!0}),st.useCallback(async(l,c={})=>{Ti(i.current,X_),i.current&&(typeof l=="number"?s.navigate(l):await s.navigate(l,{fromRouteId:t,...c}))},[s,t])}var Ev={};function Y_(s,t,i){!t&&!Ev[s]&&(Ev[s]=!0,Ti(!1,i))}st.memo(FS);function FS({routes:s,future:t,state:i,unstable_onError:r}){return j_(s,void 0,i,r,t)}function qo(s){Je(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function HS({basename:s="/",children:t=null,location:i,navigationType:r="POP",navigator:l,static:c=!1}){Je(!il(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=s.replace(/^\/*/,"/"),d=st.useMemo(()=>({basename:f,navigator:l,static:c,future:{}}),[f,l,c]);typeof i=="string"&&(i=Gs(i));let{pathname:m="/",search:p="",hash:v="",state:g=null,key:x="default"}=i,M=st.useMemo(()=>{let E=ma(m,f);return E==null?null:{location:{pathname:E,search:p,hash:v,state:g,key:x},navigationType:r}},[f,m,p,v,g,x,r]);return Ti(M!=null,`<Router basename="${f}"> is not able to match the URL "${m}${p}${v}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:st.createElement(Bi.Provider,{value:d},st.createElement(nl.Provider,{children:t,value:M}))}function GS({children:s,location:t}){return RS(gd(s),t)}function gd(s,t=[]){let i=[];return st.Children.forEach(s,(r,l)=>{if(!st.isValidElement(r))return;let c=[...t,l];if(r.type===st.Fragment){i.push.apply(i,gd(r.props.children,c));return}Je(r.type===qo,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Je(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=gd(r.props.children,c)),i.push(f)}),i}var Kc="get",Qc="application/x-www-form-urlencoded";function hu(s){return s!=null&&typeof s.tagName=="string"}function VS(s){return hu(s)&&s.tagName.toLowerCase()==="button"}function kS(s){return hu(s)&&s.tagName.toLowerCase()==="form"}function XS(s){return hu(s)&&s.tagName.toLowerCase()==="input"}function WS(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function qS(s,t){return s.button===0&&(!t||t==="_self")&&!WS(s)}var Mc=null;function jS(){if(Mc===null)try{new FormData(document.createElement("form"),0),Mc=!1}catch{Mc=!0}return Mc}var YS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Uh(s){return s!=null&&!YS.has(s)?(Ti(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Qc}"`),null):s}function ZS(s,t){let i,r,l,c,f;if(kS(s)){let d=s.getAttribute("action");r=d?ma(d,t):null,i=s.getAttribute("method")||Kc,l=Uh(s.getAttribute("enctype"))||Qc,c=new FormData(s)}else if(VS(s)||XS(s)&&(s.type==="submit"||s.type==="image")){let d=s.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||d.getAttribute("action");if(r=m?ma(m,t):null,i=s.getAttribute("formmethod")||d.getAttribute("method")||Kc,l=Uh(s.getAttribute("formenctype"))||Uh(d.getAttribute("enctype"))||Qc,c=new FormData(d,s),!jS()){let{name:p,type:v,value:g}=s;if(v==="image"){let x=p?`${p}.`:"";c.append(`${x}x`,"0"),c.append(`${x}y`,"0")}else p&&c.append(p,g)}}else{if(hu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Kc,r=null,l=Qc,f=s}return c&&l==="text/plain"&&(f=c,c=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function dp(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function KS(s,t,i){let r=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return r.pathname==="/"?r.pathname=`_root.${i}`:t&&ma(r.pathname,t)==="/"?r.pathname=`${t.replace(/\/$/,"")}/_root.${i}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${i}`,r}async function QS(s,t){if(s.id in t)return t[s.id];try{let i=await import(s.module);return t[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function JS(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function $S(s,t,i){let r=await Promise.all(s.map(async l=>{let c=t.routes[l.route.id];if(c){let f=await QS(c,i);return f.links?f.links():[]}return[]}));return iM(r.flat(1).filter(JS).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function bv(s,t,i,r,l,c){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,d=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return c==="assets"?t.filter((m,p)=>f(m,p)||d(m,p)):c==="data"?t.filter((m,p)=>{let v=r.routes[m.route.id];if(!v||!v.hasLoader)return!1;if(f(m,p)||d(m,p))return!0;if(m.route.shouldRevalidate){let g=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function tM(s,t,{includeHydrateFallback:i}={}){return eM(s.map(r=>{let l=t.routes[r.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function eM(s){return[...new Set(s)]}function nM(s){let t={},i=Object.keys(s).sort();for(let r of i)t[r]=s[r];return t}function iM(s,t){let i=new Set;return new Set(t),s.reduce((r,l)=>{let c=JSON.stringify(nM(l));return i.has(c)||(i.add(c),r.push({key:c,link:l})),r},[])}function Z_(){let s=st.useContext(Vs);return dp(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function aM(){let s=st.useContext(fu);return dp(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var pp=st.createContext(void 0);pp.displayName="FrameworkContext";function K_(){let s=st.useContext(pp);return dp(s,"You must render this element inside a <HydratedRouter> element"),s}function rM(s,t){let i=st.useContext(pp),[r,l]=st.useState(!1),[c,f]=st.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:p,onMouseLeave:v,onTouchStart:g}=t,x=st.useRef(null);st.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let T=_=>{_.forEach(L=>{f(L.isIntersecting)})},S=new IntersectionObserver(T,{threshold:.5});return x.current&&S.observe(x.current),()=>{S.disconnect()}}},[s]),st.useEffect(()=>{if(r){let T=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(T)}}},[r]);let M=()=>{l(!0)},E=()=>{l(!1),f(!1)};return i?s!=="intent"?[c,x,{}]:[c,x,{onFocus:Io(d,M),onBlur:Io(m,E),onMouseEnter:Io(p,M),onMouseLeave:Io(v,E),onTouchStart:Io(g,M)}]:[!1,x,{}]}function Io(s,t){return i=>{s&&s(i),i.defaultPrevented||t(i)}}function sM({page:s,...t}){let{router:i}=Z_(),r=st.useMemo(()=>B_(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?st.createElement(lM,{page:s,matches:r,...t}):null}function oM(s){let{manifest:t,routeModules:i}=K_(),[r,l]=st.useState([]);return st.useEffect(()=>{let c=!1;return $S(s,t,i).then(f=>{c||l(f)}),()=>{c=!0}},[s,t,i]),r}function lM({page:s,matches:t,...i}){let r=va(),{manifest:l,routeModules:c}=K_(),{basename:f}=Z_(),{loaderData:d,matches:m}=aM(),p=st.useMemo(()=>bv(s,t,m,l,r,"data"),[s,t,m,l,r]),v=st.useMemo(()=>bv(s,t,m,l,r,"assets"),[s,t,m,l,r]),g=st.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let E=new Set,T=!1;if(t.forEach(_=>{let L=l.routes[_.route.id];!L||!L.hasLoader||(!p.some(U=>U.route.id===_.route.id)&&_.route.id in d&&c[_.route.id]?.shouldRevalidate||L.hasClientLoader?T=!0:E.add(_.route.id))}),E.size===0)return[];let S=KS(s,f,"data");return T&&E.size>0&&S.searchParams.set("_routes",t.filter(_=>E.has(_.route.id)).map(_=>_.route.id).join(",")),[S.pathname+S.search]},[f,d,r,l,p,t,s,c]),x=st.useMemo(()=>tM(v,l),[v,l]),M=oM(v);return st.createElement(st.Fragment,null,g.map(E=>st.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...i})),x.map(E=>st.createElement("link",{key:E,rel:"modulepreload",href:E,...i})),M.map(({key:E,link:T})=>st.createElement("link",{key:E,nonce:i.nonce,...T})))}function cM(...s){return t=>{s.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var Q_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Q_&&(window.__reactRouterVersion="7.9.6")}catch{}function uM({basename:s,children:t,window:i}){let r=st.useRef();r.current==null&&(r.current=Qy({window:i,v5Compat:!0}));let l=r.current,[c,f]=st.useState({action:l.action,location:l.location}),d=st.useCallback(m=>{st.startTransition(()=>f(m))},[f]);return st.useLayoutEffect(()=>l.listen(d),[l,d]),st.createElement(HS,{basename:s,children:t,location:c.location,navigationType:c.action,navigator:l})}var J_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,rl=st.forwardRef(function({onClick:t,discover:i="render",prefetch:r="none",relative:l,reloadDocument:c,replace:f,state:d,target:m,to:p,preventScrollReset:v,viewTransition:g,...x},M){let{basename:E}=st.useContext(Bi),T=typeof p=="string"&&J_.test(p),S,_=!1;if(typeof p=="string"&&T&&(S=p,Q_))try{let C=new URL(window.location.href),w=p.startsWith("//")?new URL(C.protocol+p):new URL(p),G=ma(w.pathname,E);w.origin===C.origin&&G!=null?p=G+w.search+w.hash:_=!0}catch{Ti(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=TS(p,{relative:l}),[U,D,F]=rM(r,x),H=pM(p,{replace:f,state:d,target:m,preventScrollReset:v,relative:l,viewTransition:g});function B(C){t&&t(C),C.defaultPrevented||H(C)}let Y=st.createElement("a",{...x,...F,href:S||L,onClick:_||c?t:B,ref:cM(M,D),target:m,"data-discover":!T&&i==="render"?"true":void 0});return U&&!T?st.createElement(st.Fragment,null,Y,st.createElement(sM,{page:L})):Y});rl.displayName="Link";var fM=st.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:r="",end:l=!1,style:c,to:f,viewTransition:d,children:m,...p},v){let g=al(f,{relative:p.relative}),x=va(),M=st.useContext(fu),{navigator:E,basename:T}=st.useContext(Bi),S=M!=null&&xM(g)&&d===!0,_=E.encodeLocation?E.encodeLocation(g).pathname:g.pathname,L=x.pathname,U=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(L=L.toLowerCase(),U=U?U.toLowerCase():null,_=_.toLowerCase()),U&&T&&(U=ma(U,T)||U);const D=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let F=L===_||!l&&L.startsWith(_)&&L.charAt(D)==="/",H=U!=null&&(U===_||!l&&U.startsWith(_)&&U.charAt(_.length)==="/"),B={isActive:F,isPending:H,isTransitioning:S},Y=F?t:void 0,C;typeof r=="function"?C=r(B):C=[r,F?"active":null,H?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let w=typeof c=="function"?c(B):c;return st.createElement(rl,{...p,"aria-current":Y,className:C,ref:v,style:w,to:f,viewTransition:d},typeof m=="function"?m(B):m)});fM.displayName="NavLink";var hM=st.forwardRef(({discover:s="render",fetcherKey:t,navigate:i,reloadDocument:r,replace:l,state:c,method:f=Kc,action:d,onSubmit:m,relative:p,preventScrollReset:v,viewTransition:g,...x},M)=>{let E=vM(),T=_M(d,{relative:p}),S=f.toLowerCase()==="get"?"get":"post",_=typeof d=="string"&&J_.test(d),L=U=>{if(m&&m(U),U.defaultPrevented)return;U.preventDefault();let D=U.nativeEvent.submitter,F=D?.getAttribute("formmethod")||f;E(D||U.currentTarget,{fetcherKey:t,method:F,navigate:i,replace:l,state:c,relative:p,preventScrollReset:v,viewTransition:g})};return st.createElement("form",{ref:M,method:S,action:T,onSubmit:r?m:L,...x,"data-discover":!_&&s==="render"?"true":void 0})});hM.displayName="Form";function dM(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $_(s){let t=st.useContext(Vs);return Je(t,dM(s)),t}function pM(s,{target:t,replace:i,state:r,preventScrollReset:l,relative:c,viewTransition:f}={}){let d=up(),m=va(),p=al(s,{relative:c});return st.useCallback(v=>{if(qS(v,t)){v.preventDefault();let g=i!==void 0?i:Zo(m)===Zo(p);d(s,{replace:g,state:r,preventScrollReset:l,relative:c,viewTransition:f})}},[m,d,p,i,r,t,s,l,c,f])}var mM=0,gM=()=>`__${String(++mM)}__`;function vM(){let{router:s}=$_("useSubmit"),{basename:t}=st.useContext(Bi),i=zS();return st.useCallback(async(r,l={})=>{let{action:c,method:f,encType:d,formData:m,body:p}=ZS(r,t);if(l.navigate===!1){let v=l.fetcherKey||gM();await s.fetch(v,i,l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||d,flushSync:l.flushSync})}else await s.navigate(l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||d,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[s,t,i])}function _M(s,{relative:t}={}){let{basename:i}=st.useContext(Bi),r=st.useContext(Ii);Je(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),c={...al(s||".",{relative:t})},f=va();if(s==null){c.search=f.search;let d=new URLSearchParams(c.search),m=d.getAll("index");if(m.some(v=>v==="")){d.delete("index"),m.filter(g=>g).forEach(g=>d.append("index",g));let v=d.toString();c.search=v?`?${v}`:""}}return(!s||s===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:da([i,c.pathname])),Zo(c)}function xM(s,{relative:t}={}){let i=st.useContext(k_);Je(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=$_("useViewTransitionState"),l=al(s,{relative:t});if(!i.isTransitioning)return!1;let c=ma(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=ma(i.nextLocation.pathname,r)||i.nextLocation.pathname;return iu(l.pathname,f)!=null||iu(l.pathname,c)!=null}var t1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Tv=Ur.createContext&&Ur.createContext(t1),yM=["attr","size","title"];function SM(s,t){if(s==null)return{};var i=MM(s,t),r,l;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(s);for(l=0;l<c.length;l++)r=c[l],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(s,r)&&(i[r]=s[r])}return i}function MM(s,t){if(s==null)return{};var i={};for(var r in s)if(Object.prototype.hasOwnProperty.call(s,r)){if(t.indexOf(r)>=0)continue;i[r]=s[r]}return i}function au(){return au=Object.assign?Object.assign.bind():function(s){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(s[r]=i[r])}return s},au.apply(this,arguments)}function Av(s,t){var i=Object.keys(s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);t&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(s,l).enumerable})),i.push.apply(i,r)}return i}function ru(s){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?Av(Object(i),!0).forEach(function(r){EM(s,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(i)):Av(Object(i)).forEach(function(r){Object.defineProperty(s,r,Object.getOwnPropertyDescriptor(i,r))})}return s}function EM(s,t,i){return t=bM(t),t in s?Object.defineProperty(s,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):s[t]=i,s}function bM(s){var t=TM(s,"string");return typeof t=="symbol"?t:t+""}function TM(s,t){if(typeof s!="object"||!s)return s;var i=s[Symbol.toPrimitive];if(i!==void 0){var r=i.call(s,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(s)}function e1(s){return s&&s.map((t,i)=>Ur.createElement(t.tag,ru({key:i},t.attr),e1(t.child)))}function kn(s){return t=>Ur.createElement(AM,au({attr:ru({},s.attr)},t),e1(s.child))}function AM(s){var t=i=>{var{attr:r,size:l,title:c}=s,f=SM(s,yM),d=l||i.size||"1em",m;return i.className&&(m=i.className),s.className&&(m=(m?m+" ":"")+s.className),Ur.createElement("svg",au({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,r,f,{className:m,style:ru(ru({color:s.color||i.color},i.style),s.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),c&&Ur.createElement("title",null,c),s.children)};return Tv!==void 0?Ur.createElement(Tv.Consumer,null,i=>t(i)):t(t1)}function RM(s){return kn({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4.4 67.6.1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z"},child:[]}]})(s)}function CM(s){return kn({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"},child:[]}]})(s)}function wM(s){return kn({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(s)}function DM(s){return kn({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"},child:[]}]})(s)}function UM(s){return kn({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"},child:[]}]})(s)}function LM(s){return kn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"},child:[]}]})(s)}function n1(s){return kn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(s)}function NM(s){return kn({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M181.9 256.1c-5-16-4.9-46.9-2-46.9 8.4 0 7.6 36.9 2 46.9zm-1.7 47.2c-7.7 20.2-17.3 43.3-28.4 62.7 18.3-7 39-17.2 62.9-21.9-12.7-9.6-24.9-23.4-34.5-40.8zM86.1 428.1c0 .8 13.2-5.4 34.9-40.2-6.7 6.3-29.1 24.5-34.9 40.2zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm-8 171.8c-20-12.2-33.3-29-42.7-53.8 4.5-18.5 11.6-46.6 6.2-64.2-4.7-29.4-42.4-26.5-47.8-6.8-5 18.3-.4 44.1 8.1 77-11.6 27.6-28.7 64.6-40.8 85.8-.1 0-.1.1-.2.1-27.1 13.9-73.6 44.5-54.5 68 5.6 6.9 16 10 21.5 10 17.9 0 35.7-18 61.1-61.8 25.8-8.5 54.1-19.1 79-23.2 21.7 11.8 47.1 19.5 64 19.5 29.2 0 31.2-32 19.7-43.4-13.9-13.6-54.3-9.7-73.6-7.2zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-74.1 255.3c4.1-2.7-2.5-11.9-42.8-9 37.1 15.8 42.8 9 42.8 9z"},child:[]}]})(s)}function OM(s){return kn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"},child:[]}]})(s)}function PM(s){return kn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"},child:[]}]})(s)}const zM=[{id:1,name:"About",hash:"hero"},{id:2,name:"Projects",hash:"projects"},{id:3,name:"Contact",hash:"contact"},{id:4,name:"Notes",path:"/notes"}],BM="/assets/cv.pdf",Lh={title:"Dipti Dhawade",tagline:"Computer Science & Artificial Intelligence | Plaksha University",description:"I build intelligent systems and real-world AI applications at the intersection of machine learning, computer vision, and robotics. Currently pursuing my BTech in Computer Science and Artificial Intelligence at Plaksha University, I have worked on projects ranging from autonomous underwater vehicles to lightweight text segmentation models. Beyond code, I am passionate about community impact — from empowering rural communities as a UN Millennium Fellow to promoting gender equity in STEM."},Rv="https://www.plaksha.edu.in",_r=[{id:"london",name:"London",country:"UK",lat:51.5074,lng:-.1278,photos:["https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80","https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=600&q=80","https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=600&q=80"],emoji:"🎡"},{id:"edinburgh",name:"Edinburgh",country:"Scotland",lat:55.9533,lng:-3.1883,photos:["https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=600&q=80","https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80","https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&q=80"],emoji:"🏰"},{id:"oxford",name:"Oxford",country:"UK",lat:51.752,lng:-1.2577,photos:["https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a?w=600&q=80","https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=600&q=80","https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=600&q=80"],emoji:"🎓"},{id:"brighton",name:"Brighton",country:"UK",lat:50.8225,lng:-.1372,photos:["https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=600&q=80","https://images.unsplash.com/photo-1558618047-f4e60cde8811?w=600&q=80","https://images.unsplash.com/photo-1596394723269-b2cbca4e6313?w=600&q=80"],emoji:"🎠"},{id:"noida",name:"Noida",country:"India",lat:28.5355,lng:77.391,photos:["https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80","https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80","https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=600&q=80"],emoji:"🏙️"},{id:"chandigarh",name:"Chandigarh",country:"India",lat:30.7333,lng:76.7794,photos:["https://images.unsplash.com/photo-1617195737496-bc30194e3a19?w=600&q=80","https://images.unsplash.com/photo-1624367407685-7f3d7c6f9f62?w=600&q=80","https://images.unsplash.com/photo-1626015365107-39ea66c87f21?w=600&q=80"],emoji:"🌹"},{id:"pune",name:"Pune",country:"India",lat:18.5204,lng:73.8567,photos:["https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=600&q=80","https://images.unsplash.com/photo-1601314002592-b8734bca6604?w=600&q=80","https://images.unsplash.com/photo-1590766940554-b8ad5be21018?w=600&q=80"],emoji:"🏯"},{id:"goa",name:"Goa",country:"India",lat:15.2993,lng:74.124,photos:["https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80","https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?w=600&q=80","https://images.unsplash.com/photo-1582972236019-ea4af5ffe587?w=600&q=80"],emoji:"🏖️"},{id:"bangalore",name:"Bangalore",country:"India",lat:12.9716,lng:77.5946,photos:["https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=600&q=80","https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&q=80","https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&q=80"],emoji:"🌿"},{id:"dehradun",name:"Dehradun",country:"India",lat:30.3165,lng:78.0322,photos:["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80","https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=600&q=80","https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&q=80"],emoji:"🏔️"},{id:"srikakulam",name:"Srikakulam",country:"India",lat:18.2949,lng:83.8938,photos:["https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?w=600&q=80","https://images.unsplash.com/photo-1559628233-100c798642d8?w=600&q=80","https://images.unsplash.com/photo-1604928141064-207cea6f571f?w=600&q=80"],emoji:"🌊"},{id:"jaipur",name:"Jaipur",country:"India",lat:26.9124,lng:75.7873,photos:["https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&q=80","https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=80","https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80"],emoji:"🏰"},{id:"mumbai",name:"Mumbai",country:"India",lat:19.076,lng:72.8777,photos:["https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=600&q=80","https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=600&q=80","https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&q=80"],emoji:"🌆"},{id:"kolkata",name:"Kolkata",country:"India",lat:22.5726,lng:88.3639,photos:["https://images.unsplash.com/photo-1558431382-27e303142255?w=600&q=80","https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80","https://images.unsplash.com/photo-1574958269340-fa927503f3dd?w=600&q=80"],emoji:"🌉"}],IM=["Class Notes","Past Papers"],FM={"Class Notes":"class-notes","Past Papers":"past-papers"};Object.fromEntries(Object.entries(FM).map(([s,t])=>[t,s]));const mp=[{id:"plaksha-university",title:"Plaksha University | CSAI",subheading:null,image:"/assets/notes/plaksha.png",subjectLabels:["Machine Learning","Deep Learning","Design and Analysis of Algorithms","Theory of Computation","Foundations of Computer Systems","Computer Networks","Discrete Maths"],subjects:[{id:"machine-learning",name:"Machine Learning",folders:{"Class Notes":[{title:"Open notes",link:"https://plakshauniversity1-my.sharepoint.com/:o:/g/personal/dipti_dhawade_ug23_plaksha_edu_in/IgCWt6n8sULWRaEETbmeeCMLAR8n1w9ntSyQbu6C5bsu9vY?e=D9Eks7"}],"Past Papers":[]}},{id:"deep-learning",name:"Deep Learning",folders:{"Class Notes":[{title:"Open notes",link:"https://plakshauniversity1-my.sharepoint.com/:o:/g/personal/dipti_dhawade_ug23_plaksha_edu_in/IgBuoSHpbtA2Rpf230uPGCg1AUpbkaaK2OAtd31Sy_Gg45M?e=iPnHEm"}],"Past Papers":[]}},{id:"design-analysis-algorithms",name:"Design and Analysis of Algorithms",folders:{"Class Notes":[{title:"Open notes",link:"https://plakshauniversity1-my.sharepoint.com/:o:/g/personal/dipti_dhawade_ug23_plaksha_edu_in/IgD4M9maiRfyT4aPCglNgp_IAYrsrdMuI9dLU_b6J4tuEeo?e=ggq5QR"}],"Past Papers":[]}},{id:"theory-of-computation",name:"Theory of Computation",folders:{"Class Notes":[{title:"Open notes",link:"https://plakshauniversity1-my.sharepoint.com/:o:/g/personal/dipti_dhawade_ug23_plaksha_edu_in/IgCWGagtwNZeRbs5b2LG1UKCASSL6hZJ7FgTPI4T18hSJ2Q?e=yx23UG"}],"Past Papers":[]}},{id:"foundations-computer-systems",name:"Foundations of Computer Systems",folders:{"Class Notes":[{title:"Open notes",link:"https://plakshauniversity1-my.sharepoint.com/:o:/g/personal/dipti_dhawade_ug23_plaksha_edu_in/IgBtvEksY2HaSI5T6ugcjGsBAemIAxVdzmuYsWY3bC-_17s?e=QoBaLj"}],"Past Papers":[]}},{id:"computer-networks",name:"Computer Networks",folders:{"Class Notes":[{title:"Open notes",link:"https://plakshauniversity1-my.sharepoint.com/:o:/g/personal/dipti_dhawade_ug23_plaksha_edu_in/IgAjiEd6BC1tSpBBxLq3mqOtAW8prLWRq3W0Qvk8k0U1DBM?e=HVFd8f"}],"Past Papers":[]}},{id:"discrete-maths",name:"Discrete Maths",folders:{"Class Notes":[{title:"Open notes",link:"https://plakshauniversity1-my.sharepoint.com/:o:/g/personal/dipti_dhawade_ug23_plaksha_edu_in/IgAcXyVq1F2MT45eri3ZF2rBAWqgwO4JWYhheKct1wKvZD4?e=EFAidu"}],"Past Papers":[{title:"Open Past Papers folder (Google Drive)",link:"https://drive.google.com/drive/folders/1rsOg0m6Z-oPXP4rfQ6WkW6rs_QFjAYQk?usp=sharing"}]}},{id:"operating-systems",name:"Operating Systems",folders:{"Class Notes":[{title:"Open notes",link:"https://plakshauniversity1-my.sharepoint.com/:o:/g/personal/dipti_dhawade_ug23_plaksha_edu_in/IgBWo0peOPmeTLOzJttgdVGtATxlM18JnW9Pq_ynpuaFedg?e=Uqgxs4"}],"Past Papers":[]}},{id:"database-management-systems",name:"Database Management Systems",folders:{"Class Notes":[{title:"Open notes",link:"https://plakshauniversity1-my.sharepoint.com/:o:/g/personal/dipti_dhawade_ug23_plaksha_edu_in/IgAy4-8fjOcKQL7UQaj6TUp7AchXCLncosHSQHyJyHzzicU?e=uRB5xM"}],"Past Papers":[]}},{id:"Reinforcement Learning",name:"Reinforcement Learning",folders:{"Class Notes":[{title:"Open notes",link:"https://plakshauniversity1-my.sharepoint.com/:o:/g/personal/dipti_dhawade_ug23_plaksha_edu_in/IgB_2xUod09lSIZKbYb1ik08ARldexU9UdGBn5lOSge6W6c?e=Em6TgT"}],"Past Papers":[]}}]},{id:"software-development",title:"Software Development",subheading:null,image:"/assets/notes/software-dev.png",subjectLabels:["React.js","MERN Stack","JavaScript","System Design"],subjects:[{id:"react-js",name:"React.js",folders:{"Class Notes":[],"Past Papers":[]}},{id:"mern-stack",name:"MERN Stack",folders:{"Class Notes":[],"Past Papers":[]}},{id:"javascript",name:"JavaScript",folders:{"Class Notes":[],"Past Papers":[]}},{id:"system-design",name:"System Design",folders:{"Class Notes":[],"Past Papers":[]}}]},{id:"gate",title:"GATE | CSE",subheading:null,image:"/assets/notes/gate.png",subjectLabels:["C Programming","Mathematics","DSA","Computer Organization","Operating Systems","Databases"],subjects:[{id:"c-programming",name:"C Programming",folders:{"Class Notes":[],"Past Papers":[]}},{id:"mathematics",name:"Mathematics",folders:{"Class Notes":[],"Past Papers":[]}},{id:"dsa",name:"DSA",folders:{"Class Notes":[],"Past Papers":[]}},{id:"computer-organization",name:"Computer Organization",folders:{"Class Notes":[],"Past Papers":[]}},{id:"operating-systems",name:"Operating Systems",folders:{"Class Notes":[],"Past Papers":[]}},{id:"databases",name:"Databases",folders:{"Class Notes":[],"Past Papers":[]}}]}],Ec={email:"diptidhawade2002@gmail.com",links:[{label:"LinkedIn",href:"https://www.linkedin.com/in/dipti-dhawade-927a29214/",icon:"linkedin"},{label:"GitHub",href:"https://github.com/cherie-dips",icon:"github"}]},HM=[{title:"GWiST Groq Chatbot — API Workshop Demo",desc:"A minimal yet functional React chatbot built using the Groq API, developed as part of a technical workshop organized by the DS Brar Centre for Girls and Women in STEM (GWiST) at Plaksha University.",subdesc:"Designed to introduce participants to LLM-powered application development, the app demonstrates real-time AI chat interaction using Groq's inference API — built with React, Vite, and JavaScript, keeping the setup lightweight and beginner-friendly for workshop attendees.",href:"https://github.com/cherie-dips/gwist-techWorkshop",spotlight:"/assets/projects/gwist-chatbot.png",tags:[{id:1,name:"React",path:"/assets/react.svg"},{id:2,name:"JavaScript",path:"assets/tailwindcss.png"},{id:3,name:"Groq API",path:"/assets/typescript.png"},{id:4,name:"Vite",path:"/assets/framer.png"}]},{title:"Mobile-Hi-SAM — Lightweight Text Segmentation",desc:"A parameter-efficient hierarchical text segmentation model designed for edge deployment. Integrates MobileSAM's TinyViT encoder and Hi-SAM pipeline with a custom hierarchical decoder for word, line, and paragraph segmentation on the HierText dataset.",subdesc:"Achieved ~62% of Hi-SAM's Panoptic Quality (PQ) using only 12.6M parameters — an ≈98% reduction in model size — making it viable for on-device inference. Built with Python and PyTorch under Prof. Anupam Sobti.",href:"https://github.com/cherie-dips/DL_Project",texture:"/assets/projects/mobile-hi-sam.mp4",thumbnail:"/assets/projects/mobile-hi-sam.png",tags:[{id:1,name:"Python",path:"/assets/react.svg"},{id:2,name:"PyTorch",path:"assets/tailwindcss.png"}]},{title:"NoteScanner — RAG-Powered Handwritten Notes Assistant",desc:"An application that lets students chat with their own handwritten course material. Uses OCR to extract content from notes, stores vector embeddings in ChromaDB, and leverages GroqLLM via a RAG-based pipeline to answer natural language queries.",subdesc:"Built with Python, FastAPI, React, ChromaDB, and Docker, NoteScanner bridges the gap between physical notes and intelligent retrieval — making studying more interactive and efficient.",href:"https://github.com/cherie-dips/NoteScanner",spotlight:"/assets/projects/note-scanner.png?v=2",tags:[{id:1,name:"Python",path:"/assets/react.svg"},{id:2,name:"FastAPI",path:"assets/tailwindcss.png"},{id:3,name:"React",path:"/assets/typescript.png"},{id:4,name:"Docker",path:"/assets/framer.png"}]},{title:"Chronic Wound Status Assessment using AI",desc:"An AI-based chronic wound monitoring system that uses microscopic images of pH-sensitive hydrogels to enable real-time, non-invasive pH estimation for chronic wound assessment.",subdesc:"Developed under Prof. Siddharth and Prof. Rucha Joshi, the pipeline implements ResNet-18 feature extraction combined with Random Forest classification to ensure robustness against imaging variability — enabling accessible, label-free wound diagnostics.",href:"https://github.com/cherie-dips/MLPR_Project",spotlight:"/assets/projects/chronic-wound.png",tags:[{id:1,name:"Python",path:"/assets/react.svg"},{id:2,name:"OpenCV",path:"assets/tailwindcss.png"},{id:3,name:"PyTorch",path:"/assets/typescript.png"}]}],Nh="dipti-profile-theme",ca="/diptidhawade/",i1=()=>{const s=document.getElementById("hero");s&&s.scrollIntoView({behavior:"smooth",block:"start"})},Cv=({onNavigate:s})=>{const t=va(),i=ca.replace(/\/$/,""),r=t.pathname===i+"/notes"||t.pathname.startsWith(i+"/notes/");return Q.jsx("ul",{className:"nav-ul",children:zM.map(({id:l,hash:c,name:f,path:d})=>Q.jsx("li",{className:"nav-li",children:d?Q.jsx(rl,{to:d,className:`nav-li_a ${d==="/notes"&&r?"nav-li_a-active":""}`,onClick:s,children:f}):c==="hero"?Q.jsx("a",{href:ca,className:"nav-li_a",onClick:m=>{m.preventDefault(),window.history.replaceState(null,"",ca),i1(),s?.()},children:f}):Q.jsx("a",{href:`${ca}#${c}`,className:"nav-li_a",onClick:s,children:f})},l))})},GM=()=>{const[s,t]=st.useState(!1),[i,r]=st.useState(()=>{try{return localStorage.getItem(Nh)==="light"}catch{return!1}}),l=()=>t(f=>!f),c=()=>t(!1);return st.useEffect(()=>{if(i){document.body.classList.add("theme-light");try{localStorage.setItem(Nh,"light")}catch{}}else{document.body.classList.remove("theme-light");try{localStorage.setItem(Nh,"dark")}catch{}}},[i]),Q.jsxs("header",{className:"navbar-header",children:[Q.jsxs("div",{className:"navbar-inner page-content",children:[Q.jsx("a",{href:ca,className:"nav-name-link navbar-name",onClick:f=>{const d=ca.replace(/\/$/,"");(window.location.pathname===d||window.location.pathname===d+"/")&&(f.preventDefault(),window.history.replaceState(null,"",ca),i1()),c()},children:"Dipti Dhawade"}),Q.jsx("button",{type:"button",onClick:l,className:"navbar-toggle","aria-label":"Toggle menu",children:Q.jsx("img",{src:s?`${ca}assets/close.svg`:`${ca}assets/menu.svg`,alt:"",className:"navbar-toggle-icon"})}),Q.jsxs("div",{className:"navbar-actions",children:[Q.jsx("nav",{className:"navbar-desktop",children:Q.jsx(Cv,{})}),Q.jsx("button",{type:"button",className:"navbar-theme-btn",onClick:()=>r(f=>!f),"aria-label":i?"Switch to dark background":"Switch to light background",title:i?"Dark background":"Light background",children:i?Q.jsx(OM,{}):Q.jsx(PM,{})})]})]}),Q.jsx("div",{className:`nav-sidebar ${s?"navbar-sidebar-open":"navbar-sidebar-closed"}`,children:Q.jsx("nav",{className:"navbar-sidebar-inner",children:Q.jsx(Cv,{onNavigate:c})})})]})},VM="/diptidhawade/",Za=s=>s?VM+s.replace(/^\//,""):"";function wv(s){if(!s||typeof s!="string"||!s.includes("drive.google.com"))return null;const t=s.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/)||s.match(/[?&]id=([a-zA-Z0-9_-]+)/);return t?`https://drive.google.com/file/d/${t[1]}/preview`:null}function kM(s){return kn({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z"},child:[]}]})(s)}function XM(s){return kn({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"},child:[]}]})(s)}function WM(s){return kn({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"},child:[]}]})(s)}function qM(s){return kn({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z"},child:[]}]})(s)}const jM=()=>`${window.location.origin}${Za(BM)}`,YM=[{name:"C++",Icon:kM,color:"#00599C"},{name:"JavaScript",Icon:XM,color:"#F7DF1E"},{name:"Python",Icon:UM,color:"#3776AB"},{name:"React",Icon:LM,color:"#61DAFB"},{name:"Git",Icon:CM,color:"#F05032"},{name:"PostgreSQL",Icon:qM,color:"#336791"},{name:"MongoDB",Icon:WM,color:"#47A248"},{name:"Docker",Icon:RM,color:"#2496ED"}],ZM=()=>Q.jsx("section",{id:"cv",className:"hero-section",children:Q.jsxs("div",{className:"page-content hero-inner",children:[Q.jsxs("div",{className:"hero-text-col",children:[Q.jsx("h1",{className:"hero-title",children:Lh.title}),Q.jsx("p",{className:"hero-tagline",children:Lh.tagline.split(/(Plaksha University)/g).map((s,t)=>s==="Plaksha University"?Q.jsx("a",{href:Rv,target:"_blank",rel:"noopener noreferrer",className:"hero-inline-link",children:"Plaksha University"},t):s)}),Q.jsx("p",{className:"hero-description",children:Lh.description.split(/(Plaksha University)/g).map((s,t)=>s==="Plaksha University"?Q.jsx("a",{href:Rv,target:"_blank",rel:"noopener noreferrer",className:"hero-inline-link",children:"Plaksha University"},t):s)}),Q.jsx("div",{className:"hero-tech-logos",children:YM.map(({name:s,Icon:t,color:i})=>Q.jsx("div",{className:"hero-tech-item",title:s,children:Q.jsx(t,{className:"hero-tech-icon",style:{color:i}})},s))})]}),Q.jsxs("div",{className:"hero-image-col",children:[Q.jsx("img",{src:Za("/assets/Photo.jpeg"),alt:"Dipti Dhawade",className:"hero-image"}),Q.jsx("div",{className:"hero-cv-row",children:Q.jsxs("a",{href:jM(),target:"_blank",rel:"noopener noreferrer",className:"hero-cv-link","aria-label":"View CV",children:[Q.jsx("span",{className:"hero-cv-link-icon",children:Q.jsx(NM,{})}),Q.jsx("span",{className:"hero-cv-link-label",children:"Resume"})]})})]})]})});const gp="180",KM=0,Dv=1,QM=2,a1=1,JM=2,la=3,ga=0,Vn=1,ua=2,Ka=0,Os=1,Uv=2,Lv=3,Nv=4,$M=5,Rr=100,tE=101,eE=102,nE=103,iE=104,aE=200,rE=201,sE=202,oE=203,vd=204,_d=205,lE=206,cE=207,uE=208,fE=209,hE=210,dE=211,pE=212,mE=213,gE=214,xd=0,yd=1,Sd=2,zs=3,Md=4,Ed=5,bd=6,Td=7,vp=0,vE=1,_E=2,Qa=0,xE=1,yE=2,SE=3,ME=4,EE=5,bE=6,TE=7,r1=300,Bs=301,Is=302,Ad=303,Rd=304,du=306,Cd=1e3,wr=1001,wd=1002,Mi=1003,AE=1004,bc=1005,Ni=1006,Oh=1007,Dr=1008,Pi=1009,s1=1010,o1=1011,Ko=1012,_p=1013,Lr=1014,fa=1015,sl=1016,xp=1017,yp=1018,Qo=1020,l1=35902,c1=35899,u1=1021,f1=1022,Si=1023,Jo=1026,$o=1027,h1=1028,Sp=1029,d1=1030,Mp=1031,Ep=1033,Jc=33776,$c=33777,tu=33778,eu=33779,Dd=35840,Ud=35841,Ld=35842,Nd=35843,Od=36196,Pd=37492,zd=37496,Bd=37808,Id=37809,Fd=37810,Hd=37811,Gd=37812,Vd=37813,kd=37814,Xd=37815,Wd=37816,qd=37817,jd=37818,Yd=37819,Zd=37820,Kd=37821,Qd=36492,Jd=36494,$d=36495,tp=36283,ep=36284,np=36285,ip=36286,RE=3200,CE=3201,p1=0,wE=1,Ya="",fi="srgb",Fs="srgb-linear",su="linear",Ge="srgb",vs=7680,Ov=519,DE=512,UE=513,LE=514,m1=515,NE=516,OE=517,PE=518,zE=519,Pv=35044,zv="300 es",Oi=2e3,ou=2001;class ks{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ph=Math.PI/180,ap=180/Math.PI;function ol(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]+"-"+Cn[t&255]+Cn[t>>8&255]+"-"+Cn[t>>16&15|64]+Cn[t>>24&255]+"-"+Cn[i&63|128]+Cn[i>>8&255]+"-"+Cn[i>>16&255]+Cn[i>>24&255]+Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]).toLowerCase()}function Ee(s,t,i){return Math.max(t,Math.min(i,s))}function BE(s,t){return(s%t+t)%t}function zh(s,t,i){return(1-i)*s+i*t}function Fo(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Gn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Re{constructor(t=0,i=0){Re.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Ee(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*r-f*l+t.x,this.y=c*l+f*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ll{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,f,d){let m=r[l+0],p=r[l+1],v=r[l+2],g=r[l+3];const x=c[f+0],M=c[f+1],E=c[f+2],T=c[f+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=v,t[i+3]=g;return}if(d===1){t[i+0]=x,t[i+1]=M,t[i+2]=E,t[i+3]=T;return}if(g!==T||m!==x||p!==M||v!==E){let S=1-d;const _=m*x+p*M+v*E+g*T,L=_>=0?1:-1,U=1-_*_;if(U>Number.EPSILON){const F=Math.sqrt(U),H=Math.atan2(F,_*L);S=Math.sin(S*H)/F,d=Math.sin(d*H)/F}const D=d*L;if(m=m*S+x*D,p=p*S+M*D,v=v*S+E*D,g=g*S+T*D,S===1-d){const F=1/Math.sqrt(m*m+p*p+v*v+g*g);m*=F,p*=F,v*=F,g*=F}}t[i]=m,t[i+1]=p,t[i+2]=v,t[i+3]=g}static multiplyQuaternionsFlat(t,i,r,l,c,f){const d=r[l],m=r[l+1],p=r[l+2],v=r[l+3],g=c[f],x=c[f+1],M=c[f+2],E=c[f+3];return t[i]=d*E+v*g+m*M-p*x,t[i+1]=m*E+v*x+p*g-d*M,t[i+2]=p*E+v*M+d*x-m*g,t[i+3]=v*E-d*g-m*x-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,m=Math.sin,p=d(r/2),v=d(l/2),g=d(c/2),x=m(r/2),M=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=x*v*g+p*M*E,this._y=p*M*g-x*v*E,this._z=p*v*E+x*M*g,this._w=p*v*g-x*M*E;break;case"YXZ":this._x=x*v*g+p*M*E,this._y=p*M*g-x*v*E,this._z=p*v*E-x*M*g,this._w=p*v*g+x*M*E;break;case"ZXY":this._x=x*v*g-p*M*E,this._y=p*M*g+x*v*E,this._z=p*v*E+x*M*g,this._w=p*v*g-x*M*E;break;case"ZYX":this._x=x*v*g-p*M*E,this._y=p*M*g+x*v*E,this._z=p*v*E-x*M*g,this._w=p*v*g+x*M*E;break;case"YZX":this._x=x*v*g+p*M*E,this._y=p*M*g+x*v*E,this._z=p*v*E-x*M*g,this._w=p*v*g-x*M*E;break;case"XZY":this._x=x*v*g-p*M*E,this._y=p*M*g-x*v*E,this._z=p*v*E+x*M*g,this._w=p*v*g+x*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],f=i[1],d=i[5],m=i[9],p=i[2],v=i[6],g=i[10],x=r+d+g;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(v-m)*M,this._y=(c-p)*M,this._z=(f-l)*M}else if(r>d&&r>g){const M=2*Math.sqrt(1+r-d-g);this._w=(v-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+p)/M}else if(d>g){const M=2*Math.sqrt(1+d-r-g);this._w=(c-p)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+g-r-d);this._w=(f-l)/M,this._x=(c+p)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,f=t._w,d=i._x,m=i._y,p=i._z,v=i._w;return this._x=r*v+f*d+l*p-c*m,this._y=l*v+f*m+c*d-r*p,this._z=c*v+f*p+r*m-l*d,this._w=f*v-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,f=this._w;let d=f*t._w+r*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=f,this._x=r,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*f+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),v=Math.atan2(p,d),g=Math.sin((1-i)*v)/p,x=Math.sin(i*v)/p;return this._w=f*g+this._w*x,this._x=r*g+this._x*x,this._y=l*g+this._y*x,this._z=c*g+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class at{constructor(t=0,i=0,r=0){at.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Bv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Bv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,f=t.y,d=t.z,m=t.w,p=2*(f*l-d*r),v=2*(d*i-c*l),g=2*(c*r-f*i);return this.x=i+m*p+f*g-d*v,this.y=r+m*v+d*p-c*g,this.z=l+m*g+c*v-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this.z=Ee(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this.z=Ee(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*f-r*m,this.z=r*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Bh.copy(this).projectOnVector(t),this.sub(Bh)}reflect(t){return this.sub(Bh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Ee(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bh=new at,Bv=new ll;class de{constructor(t,i,r,l,c,f,d,m,p){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,d,m,p)}set(t,i,r,l,c,f,d,m,p){const v=this.elements;return v[0]=t,v[1]=l,v[2]=d,v[3]=i,v[4]=c,v[5]=m,v[6]=r,v[7]=f,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],d=r[3],m=r[6],p=r[1],v=r[4],g=r[7],x=r[2],M=r[5],E=r[8],T=l[0],S=l[3],_=l[6],L=l[1],U=l[4],D=l[7],F=l[2],H=l[5],B=l[8];return c[0]=f*T+d*L+m*F,c[3]=f*S+d*U+m*H,c[6]=f*_+d*D+m*B,c[1]=p*T+v*L+g*F,c[4]=p*S+v*U+g*H,c[7]=p*_+v*D+g*B,c[2]=x*T+M*L+E*F,c[5]=x*S+M*U+E*H,c[8]=x*_+M*D+E*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],v=t[8];return i*f*v-i*d*p-r*c*v+r*d*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],v=t[8],g=v*f-d*p,x=d*m-v*c,M=p*c-f*m,E=i*g+r*x+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=g*T,t[1]=(l*p-v*r)*T,t[2]=(d*r-l*f)*T,t[3]=x*T,t[4]=(v*i-l*m)*T,t[5]=(l*c-d*i)*T,t[6]=M*T,t[7]=(r*m-p*i)*T,t[8]=(f*i-r*c)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,f,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*f+p*d)+f+t,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Ih.makeScale(t,i)),this}rotate(t){return this.premultiply(Ih.makeRotation(-t)),this}translate(t,i){return this.premultiply(Ih.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ih=new de;function g1(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function tl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function IE(){const s=tl("canvas");return s.style.display="block",s}const Iv={};function el(s){s in Iv||(Iv[s]=!0,console.warn(s))}function FE(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const Fv=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hv=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function HE(){const s={enabled:!0,workingColorSpace:Fs,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ge&&(l.r=pa(l.r),l.g=pa(l.g),l.b=pa(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ge&&(l.r=Ps(l.r),l.g=Ps(l.g),l.b=Ps(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ya?su:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return el("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return el("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Fs]:{primaries:t,whitePoint:r,transfer:su,toXYZ:Fv,fromXYZ:Hv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:t,whitePoint:r,transfer:Ge,toXYZ:Fv,fromXYZ:Hv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),s}const De=HE();function pa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ps(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let _s;class GE{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{_s===void 0&&(_s=tl("canvas")),_s.width=t.width,_s.height=t.height;const l=_s.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=_s}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=tl("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=pa(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(pa(i[r]/255)*255):i[r]=pa(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let VE=0;class bp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:VE++}),this.uuid=ol(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(Fh(l[f].image)):c.push(Fh(l[f]))}else c=Fh(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function Fh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?GE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kE=0;const Hh=new at;class On extends ks{constructor(t=On.DEFAULT_IMAGE,i=On.DEFAULT_MAPPING,r=wr,l=wr,c=Ni,f=Dr,d=Si,m=Pi,p=On.DEFAULT_ANISOTROPY,v=Ya){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kE++}),this.uuid=ol(),this.name="",this.source=new bp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Hh).x}get height(){return this.source.getSize(Hh).y}get depth(){return this.source.getSize(Hh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==r1)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Cd:t.x=t.x-Math.floor(t.x);break;case wr:t.x=t.x<0?0:1;break;case wd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Cd:t.y=t.y-Math.floor(t.y);break;case wr:t.y=t.y<0?0:1;break;case wd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=r1;On.DEFAULT_ANISOTROPY=1;class en{constructor(t=0,i=0,r=0,l=1){en.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,p=m[0],v=m[4],g=m[8],x=m[1],M=m[5],E=m[9],T=m[2],S=m[6],_=m[10];if(Math.abs(v-x)<.01&&Math.abs(g-T)<.01&&Math.abs(E-S)<.01){if(Math.abs(v+x)<.1&&Math.abs(g+T)<.1&&Math.abs(E+S)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,D=(M+1)/2,F=(_+1)/2,H=(v+x)/4,B=(g+T)/4,Y=(E+S)/4;return U>D&&U>F?U<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(U),l=H/r,c=B/r):D>F?D<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),r=H/l,c=Y/l):F<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),r=B/c,l=Y/c),this.set(r,l,c,i),this}let L=Math.sqrt((S-E)*(S-E)+(g-T)*(g-T)+(x-v)*(x-v));return Math.abs(L)<.001&&(L=1),this.x=(S-E)/L,this.y=(g-T)/L,this.z=(x-v)/L,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this.z=Ee(this.z,t.z,i.z),this.w=Ee(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this.z=Ee(this.z,t,i),this.w=Ee(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class XE extends ks{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new en(0,0,t,i),this.scissorTest=!1,this.viewport=new en(0,0,t,i);const l={width:t,height:i,depth:r.depth},c=new On(l);this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Ni,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new bp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nr extends XE{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class v1 extends On{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class WE extends On{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cl{constructor(t=new at(1/0,1/0,1/0),i=new at(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(vi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(vi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=vi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,vi):vi.fromBufferAttribute(c,f),vi.applyMatrix4(t.matrixWorld),this.expandByPoint(vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Tc.copy(r.boundingBox)),Tc.applyMatrix4(t.matrixWorld),this.union(Tc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vi),vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ho),Ac.subVectors(this.max,Ho),xs.subVectors(t.a,Ho),ys.subVectors(t.b,Ho),Ss.subVectors(t.c,Ho),Va.subVectors(ys,xs),ka.subVectors(Ss,ys),xr.subVectors(xs,Ss);let i=[0,-Va.z,Va.y,0,-ka.z,ka.y,0,-xr.z,xr.y,Va.z,0,-Va.x,ka.z,0,-ka.x,xr.z,0,-xr.x,-Va.y,Va.x,0,-ka.y,ka.x,0,-xr.y,xr.x,0];return!Gh(i,xs,ys,Ss,Ac)||(i=[1,0,0,0,1,0,0,0,1],!Gh(i,xs,ys,Ss,Ac))?!1:(Rc.crossVectors(Va,ka),i=[Rc.x,Rc.y,Rc.z],Gh(i,xs,ys,Ss,Ac))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ia[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ia[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ia[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ia[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ia[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ia[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ia[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ia[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ia),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ia=[new at,new at,new at,new at,new at,new at,new at,new at],vi=new at,Tc=new cl,xs=new at,ys=new at,Ss=new at,Va=new at,ka=new at,xr=new at,Ho=new at,Ac=new at,Rc=new at,yr=new at;function Gh(s,t,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){yr.fromArray(s,c);const d=l.x*Math.abs(yr.x)+l.y*Math.abs(yr.y)+l.z*Math.abs(yr.z),m=t.dot(yr),p=i.dot(yr),v=r.dot(yr);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const qE=new cl,Go=new at,Vh=new at;class ul{constructor(t=new at,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):qE.setFromPoints(t).getCenter(r);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Go.subVectors(t,this.center);const i=Go.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Go,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Go.copy(t.center).add(Vh)),this.expandByPoint(Go.copy(t.center).sub(Vh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const aa=new at,kh=new at,Cc=new at,Xa=new at,Xh=new at,wc=new at,Wh=new at;class pu{constructor(t=new at,i=new at(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,aa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=aa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(aa.copy(this.origin).addScaledVector(this.direction,i),aa.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){kh.copy(t).add(i).multiplyScalar(.5),Cc.copy(i).sub(t).normalize(),Xa.copy(this.origin).sub(kh);const c=t.distanceTo(i)*.5,f=-this.direction.dot(Cc),d=Xa.dot(this.direction),m=-Xa.dot(Cc),p=Xa.lengthSq(),v=Math.abs(1-f*f);let g,x,M,E;if(v>0)if(g=f*m-d,x=f*d-m,E=c*v,g>=0)if(x>=-E)if(x<=E){const T=1/v;g*=T,x*=T,M=g*(g+f*x+2*d)+x*(f*g+x+2*m)+p}else x=c,g=Math.max(0,-(f*x+d)),M=-g*g+x*(x+2*m)+p;else x=-c,g=Math.max(0,-(f*x+d)),M=-g*g+x*(x+2*m)+p;else x<=-E?(g=Math.max(0,-(-f*c+d)),x=g>0?-c:Math.min(Math.max(-c,-m),c),M=-g*g+x*(x+2*m)+p):x<=E?(g=0,x=Math.min(Math.max(-c,-m),c),M=x*(x+2*m)+p):(g=Math.max(0,-(f*c+d)),x=g>0?c:Math.min(Math.max(-c,-m),c),M=-g*g+x*(x+2*m)+p);else x=f>0?-c:c,g=Math.max(0,-(f*x+d)),M=-g*g+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(kh).addScaledVector(Cc,x),M}intersectSphere(t,i){aa.subVectors(t.center,this.origin);const r=aa.dot(this.direction),l=aa.dot(aa)-r*r,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=r-f,m=r+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,f,d,m;const p=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(r=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(r=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),v>=0?(c=(t.min.y-x.y)*v,f=(t.max.y-x.y)*v):(c=(t.max.y-x.y)*v,f=(t.min.y-x.y)*v),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),g>=0?(d=(t.min.z-x.z)*g,m=(t.max.z-x.z)*g):(d=(t.max.z-x.z)*g,m=(t.min.z-x.z)*g),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,aa)!==null}intersectTriangle(t,i,r,l,c){Xh.subVectors(i,t),wc.subVectors(r,t),Wh.crossVectors(Xh,wc);let f=this.direction.dot(Wh),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;Xa.subVectors(this.origin,t);const m=d*this.direction.dot(wc.crossVectors(Xa,wc));if(m<0)return null;const p=d*this.direction.dot(Xh.cross(Xa));if(p<0||m+p>f)return null;const v=-d*Xa.dot(Wh);return v<0?null:this.at(v/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(t,i,r,l,c,f,d,m,p,v,g,x,M,E,T,S){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,d,m,p,v,g,x,M,E,T,S)}set(t,i,r,l,c,f,d,m,p,v,g,x,M,E,T,S){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=c,_[5]=f,_[9]=d,_[13]=m,_[2]=p,_[6]=v,_[10]=g,_[14]=x,_[3]=M,_[7]=E,_[11]=T,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/Ms.setFromMatrixColumn(t,0).length(),c=1/Ms.setFromMatrixColumn(t,1).length(),f=1/Ms.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,f=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const x=f*v,M=f*g,E=d*v,T=d*g;i[0]=m*v,i[4]=-m*g,i[8]=p,i[1]=M+E*p,i[5]=x-T*p,i[9]=-d*m,i[2]=T-x*p,i[6]=E+M*p,i[10]=f*m}else if(t.order==="YXZ"){const x=m*v,M=m*g,E=p*v,T=p*g;i[0]=x+T*d,i[4]=E*d-M,i[8]=f*p,i[1]=f*g,i[5]=f*v,i[9]=-d,i[2]=M*d-E,i[6]=T+x*d,i[10]=f*m}else if(t.order==="ZXY"){const x=m*v,M=m*g,E=p*v,T=p*g;i[0]=x-T*d,i[4]=-f*g,i[8]=E+M*d,i[1]=M+E*d,i[5]=f*v,i[9]=T-x*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(t.order==="ZYX"){const x=f*v,M=f*g,E=d*v,T=d*g;i[0]=m*v,i[4]=E*p-M,i[8]=x*p+T,i[1]=m*g,i[5]=T*p+x,i[9]=M*p-E,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(t.order==="YZX"){const x=f*m,M=f*p,E=d*m,T=d*p;i[0]=m*v,i[4]=T-x*g,i[8]=E*g+M,i[1]=g,i[5]=f*v,i[9]=-d*v,i[2]=-p*v,i[6]=M*g+E,i[10]=x-T*g}else if(t.order==="XZY"){const x=f*m,M=f*p,E=d*m,T=d*p;i[0]=m*v,i[4]=-g,i[8]=p*v,i[1]=x*g+T,i[5]=f*v,i[9]=M*g-E,i[2]=E*g-M,i[6]=d*v,i[10]=T*g+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jE,t,YE)}lookAt(t,i,r){const l=this.elements;return Jn.subVectors(t,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Wa.crossVectors(r,Jn),Wa.lengthSq()===0&&(Math.abs(r.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Wa.crossVectors(r,Jn)),Wa.normalize(),Dc.crossVectors(Jn,Wa),l[0]=Wa.x,l[4]=Dc.x,l[8]=Jn.x,l[1]=Wa.y,l[5]=Dc.y,l[9]=Jn.y,l[2]=Wa.z,l[6]=Dc.z,l[10]=Jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],d=r[4],m=r[8],p=r[12],v=r[1],g=r[5],x=r[9],M=r[13],E=r[2],T=r[6],S=r[10],_=r[14],L=r[3],U=r[7],D=r[11],F=r[15],H=l[0],B=l[4],Y=l[8],C=l[12],w=l[1],G=l[5],rt=l[9],ft=l[13],yt=l[2],K=l[6],P=l[10],W=l[14],k=l[3],_t=l[7],Mt=l[11],N=l[15];return c[0]=f*H+d*w+m*yt+p*k,c[4]=f*B+d*G+m*K+p*_t,c[8]=f*Y+d*rt+m*P+p*Mt,c[12]=f*C+d*ft+m*W+p*N,c[1]=v*H+g*w+x*yt+M*k,c[5]=v*B+g*G+x*K+M*_t,c[9]=v*Y+g*rt+x*P+M*Mt,c[13]=v*C+g*ft+x*W+M*N,c[2]=E*H+T*w+S*yt+_*k,c[6]=E*B+T*G+S*K+_*_t,c[10]=E*Y+T*rt+S*P+_*Mt,c[14]=E*C+T*ft+S*W+_*N,c[3]=L*H+U*w+D*yt+F*k,c[7]=L*B+U*G+D*K+F*_t,c[11]=L*Y+U*rt+D*P+F*Mt,c[15]=L*C+U*ft+D*W+F*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],f=t[1],d=t[5],m=t[9],p=t[13],v=t[2],g=t[6],x=t[10],M=t[14],E=t[3],T=t[7],S=t[11],_=t[15];return E*(+c*m*g-l*p*g-c*d*x+r*p*x+l*d*M-r*m*M)+T*(+i*m*M-i*p*x+c*f*x-l*f*M+l*p*v-c*m*v)+S*(+i*p*g-i*d*M-c*f*g+r*f*M+c*d*v-r*p*v)+_*(-l*d*v-i*m*g+i*d*x+l*f*g-r*f*x+r*m*v)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],v=t[8],g=t[9],x=t[10],M=t[11],E=t[12],T=t[13],S=t[14],_=t[15],L=g*S*p-T*x*p+T*m*M-d*S*M-g*m*_+d*x*_,U=E*x*p-v*S*p-E*m*M+f*S*M+v*m*_-f*x*_,D=v*T*p-E*g*p+E*d*M-f*T*M-v*d*_+f*g*_,F=E*g*m-v*T*m-E*d*x+f*T*x+v*d*S-f*g*S,H=i*L+r*U+l*D+c*F;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/H;return t[0]=L*B,t[1]=(T*x*c-g*S*c-T*l*M+r*S*M+g*l*_-r*x*_)*B,t[2]=(d*S*c-T*m*c+T*l*p-r*S*p-d*l*_+r*m*_)*B,t[3]=(g*m*c-d*x*c-g*l*p+r*x*p+d*l*M-r*m*M)*B,t[4]=U*B,t[5]=(v*S*c-E*x*c+E*l*M-i*S*M-v*l*_+i*x*_)*B,t[6]=(E*m*c-f*S*c-E*l*p+i*S*p+f*l*_-i*m*_)*B,t[7]=(f*x*c-v*m*c+v*l*p-i*x*p-f*l*M+i*m*M)*B,t[8]=D*B,t[9]=(E*g*c-v*T*c-E*r*M+i*T*M+v*r*_-i*g*_)*B,t[10]=(f*T*c-E*d*c+E*r*p-i*T*p-f*r*_+i*d*_)*B,t[11]=(v*d*c-f*g*c-v*r*p+i*g*p+f*r*M-i*d*M)*B,t[12]=F*B,t[13]=(v*T*l-E*g*l+E*r*x-i*T*x-v*r*S+i*g*S)*B,t[14]=(E*d*l-f*T*l-E*r*m+i*T*m+f*r*S-i*d*S)*B,t[15]=(f*g*l-v*d*l+v*r*m-i*g*m-f*r*x+i*d*x)*B,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=t.x,d=t.y,m=t.z,p=c*f,v=c*d;return this.set(p*f+r,p*d-l*m,p*m+l*d,0,p*d+l*m,v*d+r,v*m-l*f,0,p*m-l*d,v*m+l*f,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,f){return this.set(1,r,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,f=i._y,d=i._z,m=i._w,p=c+c,v=f+f,g=d+d,x=c*p,M=c*v,E=c*g,T=f*v,S=f*g,_=d*g,L=m*p,U=m*v,D=m*g,F=r.x,H=r.y,B=r.z;return l[0]=(1-(T+_))*F,l[1]=(M+D)*F,l[2]=(E-U)*F,l[3]=0,l[4]=(M-D)*H,l[5]=(1-(x+_))*H,l[6]=(S+L)*H,l[7]=0,l[8]=(E+U)*B,l[9]=(S-L)*B,l[10]=(1-(x+T))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=Ms.set(l[0],l[1],l[2]).length();const f=Ms.set(l[4],l[5],l[6]).length(),d=Ms.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],_i.copy(this);const p=1/c,v=1/f,g=1/d;return _i.elements[0]*=p,_i.elements[1]*=p,_i.elements[2]*=p,_i.elements[4]*=v,_i.elements[5]*=v,_i.elements[6]*=v,_i.elements[8]*=g,_i.elements[9]*=g,_i.elements[10]*=g,i.setFromRotationMatrix(_i),r.x=c,r.y=f,r.z=d,this}makePerspective(t,i,r,l,c,f,d=Oi,m=!1){const p=this.elements,v=2*c/(i-t),g=2*c/(r-l),x=(i+t)/(i-t),M=(r+l)/(r-l);let E,T;if(m)E=c/(f-c),T=f*c/(f-c);else if(d===Oi)E=-(f+c)/(f-c),T=-2*f*c/(f-c);else if(d===ou)E=-f/(f-c),T=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,c,f,d=Oi,m=!1){const p=this.elements,v=2/(i-t),g=2/(r-l),x=-(i+t)/(i-t),M=-(r+l)/(r-l);let E,T;if(m)E=1/(f-c),T=f/(f-c);else if(d===Oi)E=-2/(f-c),T=-(f+c)/(f-c);else if(d===ou)E=-1/(f-c),T=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=g,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const Ms=new at,_i=new Ke,jE=new at(0,0,0),YE=new at(1,1,1),Wa=new at,Dc=new at,Jn=new at,Gv=new Ke,Vv=new ll;class zi{constructor(t=0,i=0,r=0,l=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],m=l[1],p=l[5],v=l[9],g=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ee(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Ee(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Ee(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Gv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gv,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Vv.setFromEuler(this),this.setFromQuaternion(Vv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";class Tp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ZE=0;const kv=new at,Es=new ll,ra=new Ke,Uc=new at,Vo=new at,KE=new at,QE=new ll,Xv=new at(1,0,0),Wv=new at(0,1,0),qv=new at(0,0,1),jv={type:"added"},JE={type:"removed"},bs={type:"childadded",child:null},qh={type:"childremoved",child:null};class xn extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ZE++}),this.uuid=ol(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xn.DEFAULT_UP.clone();const t=new at,i=new zi,r=new ll,l=new at(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ke},normalMatrix:{value:new de}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Es.setFromAxisAngle(t,i),this.quaternion.multiply(Es),this}rotateOnWorldAxis(t,i){return Es.setFromAxisAngle(t,i),this.quaternion.premultiply(Es),this}rotateX(t){return this.rotateOnAxis(Xv,t)}rotateY(t){return this.rotateOnAxis(Wv,t)}rotateZ(t){return this.rotateOnAxis(qv,t)}translateOnAxis(t,i){return kv.copy(t).applyQuaternion(this.quaternion),this.position.add(kv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Xv,t)}translateY(t){return this.translateOnAxis(Wv,t)}translateZ(t){return this.translateOnAxis(qv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ra.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Uc.copy(t):Uc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ra.lookAt(Vo,Uc,this.up):ra.lookAt(Uc,Vo,this.up),this.quaternion.setFromRotationMatrix(ra),l&&(ra.extractRotation(l.matrixWorld),Es.setFromRotationMatrix(ra),this.quaternion.premultiply(Es.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jv),bs.child=t,this.dispatchEvent(bs),bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(JE),qh.child=t,this.dispatchEvent(qh),qh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ra.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ra.multiply(t.parent.matrixWorld)),t.applyMatrix4(ra),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jv),bs.child=t,this.dispatchEvent(bs),bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,t,KE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,QE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const g=m[p];c(t.shapes,g)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=f(t.geometries),m=f(t.materials),p=f(t.textures),v=f(t.images),g=f(t.shapes),x=f(t.skeletons),M=f(t.animations),E=f(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),g.length>0&&(r.shapes=g),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=l,r;function f(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}xn.DEFAULT_UP=new at(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new at,sa=new at,jh=new at,oa=new at,Ts=new at,As=new at,Yv=new at,Yh=new at,Zh=new at,Kh=new at,Qh=new en,Jh=new en,$h=new en;class yi{constructor(t=new at,i=new at,r=new at){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),xi.subVectors(t,i),l.cross(xi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){xi.subVectors(l,i),sa.subVectors(r,i),jh.subVectors(t,i);const f=xi.dot(xi),d=xi.dot(sa),m=xi.dot(jh),p=sa.dot(sa),v=sa.dot(jh),g=f*p-d*d;if(g===0)return c.set(0,0,0),null;const x=1/g,M=(p*m-d*v)*x,E=(f*v-d*m)*x;return c.set(1-M-E,E,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,oa)===null?!1:oa.x>=0&&oa.y>=0&&oa.x+oa.y<=1}static getInterpolation(t,i,r,l,c,f,d,m){return this.getBarycoord(t,i,r,l,oa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,oa.x),m.addScaledVector(f,oa.y),m.addScaledVector(d,oa.z),m)}static getInterpolatedAttribute(t,i,r,l,c,f){return Qh.setScalar(0),Jh.setScalar(0),$h.setScalar(0),Qh.fromBufferAttribute(t,i),Jh.fromBufferAttribute(t,r),$h.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Qh,c.x),f.addScaledVector(Jh,c.y),f.addScaledVector($h,c.z),f}static isFrontFacing(t,i,r,l){return xi.subVectors(r,i),sa.subVectors(t,i),xi.cross(sa).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xi.subVectors(this.c,this.b),sa.subVectors(this.a,this.b),xi.cross(sa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return yi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return yi.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return yi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let f,d;Ts.subVectors(l,r),As.subVectors(c,r),Yh.subVectors(t,r);const m=Ts.dot(Yh),p=As.dot(Yh);if(m<=0&&p<=0)return i.copy(r);Zh.subVectors(t,l);const v=Ts.dot(Zh),g=As.dot(Zh);if(v>=0&&g<=v)return i.copy(l);const x=m*g-v*p;if(x<=0&&m>=0&&v<=0)return f=m/(m-v),i.copy(r).addScaledVector(Ts,f);Kh.subVectors(t,c);const M=Ts.dot(Kh),E=As.dot(Kh);if(E>=0&&M<=E)return i.copy(c);const T=M*p-m*E;if(T<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(r).addScaledVector(As,d);const S=v*E-M*g;if(S<=0&&g-v>=0&&M-E>=0)return Yv.subVectors(c,l),d=(g-v)/(g-v+(M-E)),i.copy(l).addScaledVector(Yv,d);const _=1/(S+T+x);return f=T*_,d=x*_,i.copy(r).addScaledVector(Ts,f).addScaledVector(As,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const _1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qa={h:0,s:0,l:0},Lc={h:0,s:0,l:0};function td(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class be{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=fi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,De.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=De.workingColorSpace){return this.r=t,this.g=i,this.b=r,De.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=De.workingColorSpace){if(t=BE(t,1),i=Ee(i,0,1),r=Ee(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=td(f,c,t+1/3),this.g=td(f,c,t),this.b=td(f,c,t-1/3)}return De.colorSpaceToWorking(this,l),this}setStyle(t,i=fi){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=fi){const r=_1[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pa(t.r),this.g=pa(t.g),this.b=pa(t.b),this}copyLinearToSRGB(t){return this.r=Ps(t.r),this.g=Ps(t.g),this.b=Ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fi){return De.workingToColorSpace(wn.copy(this),t),Math.round(Ee(wn.r*255,0,255))*65536+Math.round(Ee(wn.g*255,0,255))*256+Math.round(Ee(wn.b*255,0,255))}getHexString(t=fi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=De.workingColorSpace){De.workingToColorSpace(wn.copy(this),i);const r=wn.r,l=wn.g,c=wn.b,f=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const v=(d+f)/2;if(d===f)m=0,p=0;else{const g=f-d;switch(p=v<=.5?g/(f+d):g/(2-f-d),f){case r:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-r)/g+2;break;case c:m=(r-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=v,t}getRGB(t,i=De.workingColorSpace){return De.workingToColorSpace(wn.copy(this),i),t.r=wn.r,t.g=wn.g,t.b=wn.b,t}getStyle(t=fi){De.workingToColorSpace(wn.copy(this),t);const i=wn.r,r=wn.g,l=wn.b;return t!==fi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(qa),this.setHSL(qa.h+t,qa.s+i,qa.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(qa),t.getHSL(Lc);const r=zh(qa.h,Lc.h,i),l=zh(qa.s,Lc.s,i),c=zh(qa.l,Lc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new be;be.NAMES=_1;let $E=0;class Or extends ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$E++}),this.uuid=ol(),this.name="",this.type="Material",this.blending=Os,this.side=ga,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vd,this.blendDst=_d,this.blendEquation=Rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ov,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(r.blending=this.blending),this.side!==ga&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==vd&&(r.blendSrc=this.blendSrc),this.blendDst!==_d&&(r.blendDst=this.blendDst),this.blendEquation!==Rr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ov&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class lu extends Or{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=vp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fn=new at,Nc=new Re;let t2=0;class Ei{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:t2++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Pv,this.updateRanges=[],this.gpuType=fa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Nc.fromBufferAttribute(this,i),Nc.applyMatrix3(t),this.setXY(i,Nc.x,Nc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Fo(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Gn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Fo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Fo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Fo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Fo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array),l=Gn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array),l=Gn(l,this.array),c=Gn(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Pv&&(t.usage=this.usage),t}}class x1 extends Ei{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class y1 extends Ei{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class bi extends Ei{constructor(t,i,r){super(new Float32Array(t),i,r)}}let e2=0;const ui=new Ke,ed=new xn,Rs=new at,$n=new cl,ko=new cl,_n=new at;class di extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:e2++}),this.uuid=ol(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(g1(t)?y1:x1)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new de().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ui.makeRotationFromQuaternion(t),this.applyMatrix4(ui),this}rotateX(t){return ui.makeRotationX(t),this.applyMatrix4(ui),this}rotateY(t){return ui.makeRotationY(t),this.applyMatrix4(ui),this}rotateZ(t){return ui.makeRotationZ(t),this.applyMatrix4(ui),this}translate(t,i,r){return ui.makeTranslation(t,i,r),this.applyMatrix4(ui),this}scale(t,i,r){return ui.makeScale(t,i,r),this.applyMatrix4(ui),this}lookAt(t){return ed.lookAt(t),ed.updateMatrix(),this.applyMatrix4(ed.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new bi(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new at(-1/0,-1/0,-1/0),new at(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];$n.setFromBufferAttribute(c),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ul);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new at,1/0);return}if(t){const r=this.boundingSphere.center;if($n.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];ko.setFromBufferAttribute(d),this.morphTargetsRelative?(_n.addVectors($n.min,ko.min),$n.expandByPoint(_n),_n.addVectors($n.max,ko.max),$n.expandByPoint(_n)):($n.expandByPoint(ko.min),$n.expandByPoint(ko.max))}$n.getCenter(r);let l=0;for(let c=0,f=t.count;c<f;c++)_n.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(_n));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)_n.fromBufferAttribute(d,p),m&&(Rs.fromBufferAttribute(t,p),_n.add(Rs)),l=Math.max(l,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ei(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let Y=0;Y<r.count;Y++)d[Y]=new at,m[Y]=new at;const p=new at,v=new at,g=new at,x=new Re,M=new Re,E=new Re,T=new at,S=new at;function _(Y,C,w){p.fromBufferAttribute(r,Y),v.fromBufferAttribute(r,C),g.fromBufferAttribute(r,w),x.fromBufferAttribute(c,Y),M.fromBufferAttribute(c,C),E.fromBufferAttribute(c,w),v.sub(p),g.sub(p),M.sub(x),E.sub(x);const G=1/(M.x*E.y-E.x*M.y);isFinite(G)&&(T.copy(v).multiplyScalar(E.y).addScaledVector(g,-M.y).multiplyScalar(G),S.copy(g).multiplyScalar(M.x).addScaledVector(v,-E.x).multiplyScalar(G),d[Y].add(T),d[C].add(T),d[w].add(T),m[Y].add(S),m[C].add(S),m[w].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let Y=0,C=L.length;Y<C;++Y){const w=L[Y],G=w.start,rt=w.count;for(let ft=G,yt=G+rt;ft<yt;ft+=3)_(t.getX(ft+0),t.getX(ft+1),t.getX(ft+2))}const U=new at,D=new at,F=new at,H=new at;function B(Y){F.fromBufferAttribute(l,Y),H.copy(F);const C=d[Y];U.copy(C),U.sub(F.multiplyScalar(F.dot(C))).normalize(),D.crossVectors(H,C);const G=D.dot(m[Y])<0?-1:1;f.setXYZW(Y,U.x,U.y,U.z,G)}for(let Y=0,C=L.length;Y<C;++Y){const w=L[Y],G=w.start,rt=w.count;for(let ft=G,yt=G+rt;ft<yt;ft+=3)B(t.getX(ft+0)),B(t.getX(ft+1)),B(t.getX(ft+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ei(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const l=new at,c=new at,f=new at,d=new at,m=new at,p=new at,v=new at,g=new at;if(t)for(let x=0,M=t.count;x<M;x+=3){const E=t.getX(x+0),T=t.getX(x+1),S=t.getX(x+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,S),v.subVectors(f,c),g.subVectors(l,c),v.cross(g),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,T),p.fromBufferAttribute(r,S),d.add(v),m.add(v),p.add(v),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(T,m.x,m.y,m.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),v.subVectors(f,c),g.subVectors(l,c),v.cross(g),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)_n.fromBufferAttribute(t,i),_n.normalize(),t.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function t(d,m){const p=d.array,v=d.itemSize,g=d.normalized,x=new p.constructor(m.length*v);let M=0,E=0;for(let T=0,S=m.length;T<S;T++){d.isInterleavedBufferAttribute?M=m[T]*d.data.stride+d.offset:M=m[T]*v;for(let _=0;_<v;_++)x[E++]=p[M++]}return new Ei(x,v,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new di,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let v=0,g=p.length;v<g;v++){const x=p[v],M=t(x,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let g=0,x=p.length;g<x;g++){const M=p[g];v.push(M.toJSON(t.data))}v.length>0&&(l[m]=v,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=t.morphAttributes;for(const p in c){const v=[],g=c[p];for(let x=0,M=g.length;x<M;x++)v.push(g[x].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,v=f.length;p<v;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zv=new Ke,Sr=new pu,Oc=new ul,Kv=new at,Pc=new at,zc=new at,Bc=new at,nd=new at,Ic=new at,Qv=new at,Fc=new at;class ti extends xn{constructor(t=new di,i=new lu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Ic.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=d[m],g=c[m];v!==0&&(nd.fromBufferAttribute(g,t),f?Ic.addScaledVector(nd,v):Ic.addScaledVector(nd.sub(i),v))}i.add(Ic)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Oc.copy(r.boundingSphere),Oc.applyMatrix4(c),Sr.copy(t.ray).recast(t.near),!(Oc.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(Oc,Kv)===null||Sr.origin.distanceToSquared(Kv)>(t.far-t.near)**2))&&(Zv.copy(c).invert(),Sr.copy(t.ray).applyMatrix4(Zv),!(r.boundingBox!==null&&Sr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,Sr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,f=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,g=c.attributes.normal,x=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,T=x.length;E<T;E++){const S=x[E],_=f[S.materialIndex],L=Math.max(S.start,M.start),U=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let D=L,F=U;D<F;D+=3){const H=d.getX(D),B=d.getX(D+1),Y=d.getX(D+2);l=Hc(this,_,t,r,p,v,g,H,B,Y),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),T=Math.min(d.count,M.start+M.count);for(let S=E,_=T;S<_;S+=3){const L=d.getX(S),U=d.getX(S+1),D=d.getX(S+2);l=Hc(this,f,t,r,p,v,g,L,U,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,T=x.length;E<T;E++){const S=x[E],_=f[S.materialIndex],L=Math.max(S.start,M.start),U=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let D=L,F=U;D<F;D+=3){const H=D,B=D+1,Y=D+2;l=Hc(this,_,t,r,p,v,g,H,B,Y),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),T=Math.min(m.count,M.start+M.count);for(let S=E,_=T;S<_;S+=3){const L=S,U=S+1,D=S+2;l=Hc(this,f,t,r,p,v,g,L,U,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function n2(s,t,i,r,l,c,f,d){let m;if(t.side===Vn?m=r.intersectTriangle(f,c,l,!0,d):m=r.intersectTriangle(l,c,f,t.side===ga,d),m===null)return null;Fc.copy(d),Fc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Fc);return p<i.near||p>i.far?null:{distance:p,point:Fc.clone(),object:s}}function Hc(s,t,i,r,l,c,f,d,m,p){s.getVertexPosition(d,Pc),s.getVertexPosition(m,zc),s.getVertexPosition(p,Bc);const v=n2(s,t,i,r,Pc,zc,Bc,Qv);if(v){const g=new at;yi.getBarycoord(Qv,Pc,zc,Bc,g),l&&(v.uv=yi.getInterpolatedAttribute(l,d,m,p,g,new Re)),c&&(v.uv1=yi.getInterpolatedAttribute(c,d,m,p,g,new Re)),f&&(v.normal=yi.getInterpolatedAttribute(f,d,m,p,g,new at),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new at,materialIndex:0};yi.getNormal(Pc,zc,Bc,x.normal),v.face=x,v.barycoord=g}return v}class fl extends di{constructor(t=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],v=[],g=[];let x=0,M=0;E("z","y","x",-1,-1,r,i,t,f,c,0),E("z","y","x",1,-1,r,i,-t,f,c,1),E("x","z","y",1,1,t,r,i,l,f,2),E("x","z","y",1,-1,t,r,-i,l,f,3),E("x","y","z",1,-1,t,i,r,l,c,4),E("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new bi(p,3)),this.setAttribute("normal",new bi(v,3)),this.setAttribute("uv",new bi(g,2));function E(T,S,_,L,U,D,F,H,B,Y,C){const w=D/B,G=F/Y,rt=D/2,ft=F/2,yt=H/2,K=B+1,P=Y+1;let W=0,k=0;const _t=new at;for(let Mt=0;Mt<P;Mt++){const N=Mt*G-ft;for(let J=0;J<K;J++){const vt=J*w-rt;_t[T]=vt*L,_t[S]=N*U,_t[_]=yt,p.push(_t.x,_t.y,_t.z),_t[T]=0,_t[S]=0,_t[_]=H>0?1:-1,v.push(_t.x,_t.y,_t.z),g.push(J/B),g.push(1-Mt/Y),W+=1}}for(let Mt=0;Mt<Y;Mt++)for(let N=0;N<B;N++){const J=x+N+K*Mt,vt=x+N+K*(Mt+1),mt=x+(N+1)+K*(Mt+1),Ct=x+(N+1)+K*Mt;m.push(J,vt,Ct),m.push(vt,mt,Ct),k+=6}d.addGroup(M,k,C),M+=k,x+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Hs(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Nn(s){const t={};for(let i=0;i<s.length;i++){const r=Hs(s[i]);for(const l in r)t[l]=r[l]}return t}function i2(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function S1(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:De.workingColorSpace}const a2={clone:Hs,merge:Nn};var r2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,s2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ja extends Or{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=r2,this.fragmentShader=s2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hs(t.uniforms),this.uniformsGroups=i2(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class M1 extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ja=new at,Jv=new Re,$v=new Re;class hi extends M1{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=ap*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ph*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ap*2*Math.atan(Math.tan(Ph*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){ja.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ja.x,ja.y).multiplyScalar(-t/ja.z),ja.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ja.x,ja.y).multiplyScalar(-t/ja.z)}getViewSize(t,i){return this.getViewBounds(t,Jv,$v),i.subVectors($v,Jv)}setViewOffset(t,i,r,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Ph*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*r/p,l*=f.width/m,r*=f.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Cs=-90,ws=1;class o2 extends xn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new hi(Cs,ws,t,i);l.layers=this.layers,this.add(l);const c=new hi(Cs,ws,t,i);c.layers=this.layers,this.add(c);const f=new hi(Cs,ws,t,i);f.layers=this.layers,this.add(f);const d=new hi(Cs,ws,t,i);d.layers=this.layers,this.add(d);const m=new hi(Cs,ws,t,i);m.layers=this.layers,this.add(m);const p=new hi(Cs,ws,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,d,m]=i;for(const p of i)this.remove(p);if(t===Oi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===ou)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,m,p,v]=this.children,g=t.getRenderTarget(),x=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,f),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=T,t.setRenderTarget(r,5,l),t.render(i,v),t.setRenderTarget(g,x,M),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class E1 extends On{constructor(t=[],i=Bs,r,l,c,f,d,m,p,v){super(t,i,r,l,c,f,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class l2 extends Nr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new E1(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new fl(5,5,5),c=new Ja({name:"CubemapFromEquirect",uniforms:Hs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Vn,blending:Ka});c.uniforms.tEquirect.value=i;const f=new ti(l,c),d=i.minFilter;return i.minFilter===Dr&&(i.minFilter=Ni),new o2(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,r,l);t.setRenderTarget(c)}}class jo extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const c2={type:"move"};class id{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new at,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new at),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new at,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new at),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const T of t.hand.values()){const S=i.getJointPose(T,r),_=this._getHandJoint(p,T);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const v=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=v.position.distanceTo(g.position),M=.02,E=.005;p.inputState.pinching&&x>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(c2)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new jo;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class u2 extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const ad=new at,f2=new at,h2=new de;class Tr{constructor(t=new at(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=ad.subVectors(r,i).cross(f2.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(ad),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||h2.getNormalMatrix(t),l=this.coplanarPoint(ad).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mr=new ul,d2=new Re(.5,.5),Gc=new at;class Ap{constructor(t=new Tr,i=new Tr,r=new Tr,l=new Tr,c=new Tr,f=new Tr){this.planes=[t,i,r,l,c,f]}set(t,i,r,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Oi,r=!1){const l=this.planes,c=t.elements,f=c[0],d=c[1],m=c[2],p=c[3],v=c[4],g=c[5],x=c[6],M=c[7],E=c[8],T=c[9],S=c[10],_=c[11],L=c[12],U=c[13],D=c[14],F=c[15];if(l[0].setComponents(p-f,M-v,_-E,F-L).normalize(),l[1].setComponents(p+f,M+v,_+E,F+L).normalize(),l[2].setComponents(p+d,M+g,_+T,F+U).normalize(),l[3].setComponents(p-d,M-g,_-T,F-U).normalize(),r)l[4].setComponents(m,x,S,D).normalize(),l[5].setComponents(p-m,M-x,_-S,F-D).normalize();else if(l[4].setComponents(p-m,M-x,_-S,F-D).normalize(),i===Oi)l[5].setComponents(p+m,M+x,_+S,F+D).normalize();else if(i===ou)l[5].setComponents(m,x,S,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Mr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(t){Mr.center.set(0,0,0);const i=d2.distanceTo(t.center);return Mr.radius=.7071067811865476+i,Mr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Gc.x=l.normal.x>0?t.max.x:t.min.x,Gc.y=l.normal.y>0?t.max.y:t.min.y,Gc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Gc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class b1 extends Or{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const cu=new at,uu=new at,t_=new Ke,Xo=new pu,Vc=new ul,rd=new at,e_=new at;class p2 extends xn{constructor(t=new di,i=new b1){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)cu.fromBufferAttribute(i,l-1),uu.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=cu.distanceTo(uu);t.setAttribute("lineDistance",new bi(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Vc.copy(r.boundingSphere),Vc.applyMatrix4(l),Vc.radius+=c,t.ray.intersectsSphere(Vc)===!1)return;t_.copy(l).invert(),Xo.copy(t.ray).applyMatrix4(t_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,v=r.index,x=r.attributes.position;if(v!==null){const M=Math.max(0,f.start),E=Math.min(v.count,f.start+f.count);for(let T=M,S=E-1;T<S;T+=p){const _=v.getX(T),L=v.getX(T+1),U=kc(this,t,Xo,m,_,L,T);U&&i.push(U)}if(this.isLineLoop){const T=v.getX(E-1),S=v.getX(M),_=kc(this,t,Xo,m,T,S,E-1);_&&i.push(_)}}else{const M=Math.max(0,f.start),E=Math.min(x.count,f.start+f.count);for(let T=M,S=E-1;T<S;T+=p){const _=kc(this,t,Xo,m,T,T+1,T);_&&i.push(_)}if(this.isLineLoop){const T=kc(this,t,Xo,m,E-1,M,E-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function kc(s,t,i,r,l,c,f){const d=s.geometry.attributes.position;if(cu.fromBufferAttribute(d,l),uu.fromBufferAttribute(d,c),i.distanceSqToSegment(cu,uu,rd,e_)>r)return;rd.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(rd);if(!(p<t.near||p>t.far))return{distance:p,point:e_.clone().applyMatrix4(s.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:s}}class T1 extends Or{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const n_=new Ke,rp=new pu,Xc=new ul,Wc=new at;class m2 extends xn{constructor(t=new di,i=new T1){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Xc.copy(r.boundingSphere),Xc.applyMatrix4(l),Xc.radius+=c,t.ray.intersectsSphere(Xc)===!1)return;n_.copy(l).invert(),rp.copy(t.ray).applyMatrix4(n_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=r.index,g=r.attributes.position;if(p!==null){const x=Math.max(0,f.start),M=Math.min(p.count,f.start+f.count);for(let E=x,T=M;E<T;E++){const S=p.getX(E);Wc.fromBufferAttribute(g,S),i_(Wc,S,m,l,t,i,this)}}else{const x=Math.max(0,f.start),M=Math.min(g.count,f.start+f.count);for(let E=x,T=M;E<T;E++)Wc.fromBufferAttribute(g,E),i_(Wc,E,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function i_(s,t,i,r,l,c,f){const d=rp.distanceSqToPoint(s);if(d<i){const m=new at;rp.closestPointToPoint(s,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class A1 extends On{constructor(t,i,r=Lr,l,c,f,d=Mi,m=Mi,p,v=Jo,g=1){if(v!==Jo&&v!==$o)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:g};super(x,l,c,f,d,m,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new bp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class R1 extends On{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class mu extends di{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,f=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,v=m+1,g=t/d,x=i/m,M=[],E=[],T=[],S=[];for(let _=0;_<v;_++){const L=_*x-f;for(let U=0;U<p;U++){const D=U*g-c;E.push(D,-L,0),T.push(0,0,1),S.push(U/d),S.push(1-_/m)}}for(let _=0;_<m;_++)for(let L=0;L<d;L++){const U=L+p*_,D=L+p*(_+1),F=L+1+p*(_+1),H=L+1+p*_;M.push(U,D,H),M.push(D,F,H)}this.setIndex(M),this.setAttribute("position",new bi(E,3)),this.setAttribute("normal",new bi(T,3)),this.setAttribute("uv",new bi(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mu(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ls extends di{constructor(t=1,i=32,r=16,l=0,c=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:f,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(f+d,Math.PI);let p=0;const v=[],g=new at,x=new at,M=[],E=[],T=[],S=[];for(let _=0;_<=r;_++){const L=[],U=_/r;let D=0;_===0&&f===0?D=.5/i:_===r&&m===Math.PI&&(D=-.5/i);for(let F=0;F<=i;F++){const H=F/i;g.x=-t*Math.cos(l+H*c)*Math.sin(f+U*d),g.y=t*Math.cos(f+U*d),g.z=t*Math.sin(l+H*c)*Math.sin(f+U*d),E.push(g.x,g.y,g.z),x.copy(g).normalize(),T.push(x.x,x.y,x.z),S.push(H+D,1-U),L.push(p++)}v.push(L)}for(let _=0;_<r;_++)for(let L=0;L<i;L++){const U=v[_][L+1],D=v[_][L],F=v[_+1][L],H=v[_+1][L+1];(_!==0||f>0)&&M.push(U,D,H),(_!==r-1||m<Math.PI)&&M.push(D,F,H)}this.setIndex(M),this.setAttribute("position",new bi(E,3)),this.setAttribute("normal",new bi(T,3)),this.setAttribute("uv",new bi(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ls(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class a_ extends Or{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new be(16777215),this.specular=new be(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=p1,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=vp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class g2 extends Or{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=RE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class v2 extends Or{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const sd={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class _2{constructor(t,i,r){const l=this;let c=!1,f=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=r,this.abortController=new AbortController,this.itemStart=function(v){d++,c===!1&&l.onStart!==void 0&&l.onStart(v,f,d),c=!0},this.itemEnd=function(v){f++,l.onProgress!==void 0&&l.onProgress(v,f,d),f===d&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(v){l.onError!==void 0&&l.onError(v)},this.resolveURL=function(v){return m?m(v):v},this.setURLModifier=function(v){return m=v,this},this.addHandler=function(v,g){return p.push(v,g),this},this.removeHandler=function(v){const g=p.indexOf(v);return g!==-1&&p.splice(g,2),this},this.getHandler=function(v){for(let g=0,x=p.length;g<x;g+=2){const M=p[g],E=p[g+1];if(M.global&&(M.lastIndex=0),M.test(v))return E}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const x2=new _2;class Rp{constructor(t){this.manager=t!==void 0?t:x2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const r=this;return new Promise(function(l,c){r.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Rp.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ds=new WeakMap;class y2 extends Rp{constructor(t){super(t)}load(t,i,r,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,f=sd.get(`image:${t}`);if(f!==void 0){if(f.complete===!0)c.manager.itemStart(t),setTimeout(function(){i&&i(f),c.manager.itemEnd(t)},0);else{let g=Ds.get(f);g===void 0&&(g=[],Ds.set(f,g)),g.push({onLoad:i,onError:l})}return f}const d=tl("img");function m(){v(),i&&i(this);const g=Ds.get(this)||[];for(let x=0;x<g.length;x++){const M=g[x];M.onLoad&&M.onLoad(this)}Ds.delete(this),c.manager.itemEnd(t)}function p(g){v(),l&&l(g),sd.remove(`image:${t}`);const x=Ds.get(this)||[];for(let M=0;M<x.length;M++){const E=x[M];E.onError&&E.onError(g)}Ds.delete(this),c.manager.itemError(t),c.manager.itemEnd(t)}function v(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),sd.add(`image:${t}`,d),c.manager.itemStart(t),d.src=t,d}}class S2 extends Rp{constructor(t){super(t)}load(t,i,r,l){const c=new On,f=new y2(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(t,function(d){c.image=d,c.needsUpdate=!0,i!==void 0&&i(c)},r,l),c}}class C1 extends xn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new be(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const od=new Ke,r_=new at,s_=new at;class M2{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.mapType=Pi,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ap,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;r_.setFromMatrixPosition(t.matrixWorld),i.position.copy(r_),s_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(s_),i.updateMatrixWorld(),od.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(od,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(od)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class w1 extends M1{constructor(t=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,f=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class E2 extends M2{constructor(){super(new w1(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class o_ extends C1{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.target=new xn,this.shadow=new E2}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class b2 extends C1{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class T2 extends hi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const l_=new Ke;class c_{constructor(t,i,r=0,l=1/0){this.ray=new pu(t,i),this.near=r,this.far=l,this.camera=null,this.layers=new Tp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return l_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(l_),this}intersectObject(t,i=!0,r=[]){return sp(t,this,r,i),r.sort(u_),r}intersectObjects(t,i=!0,r=[]){for(let l=0,c=t.length;l<c;l++)sp(t[l],this,r,i);return r.sort(u_),r}}function u_(s,t){return s.distance-t.distance}function sp(s,t,i,r){let l=!0;if(s.layers.test(t.layers)&&s.raycast(t,i)===!1&&(l=!1),l===!0&&r===!0){const c=s.children;for(let f=0,d=c.length;f<d;f++)sp(c[f],t,i,!0)}}function f_(s,t,i,r){const l=A2(r);switch(i){case u1:return s*t;case h1:return s*t/l.components*l.byteLength;case Sp:return s*t/l.components*l.byteLength;case d1:return s*t*2/l.components*l.byteLength;case Mp:return s*t*2/l.components*l.byteLength;case f1:return s*t*3/l.components*l.byteLength;case Si:return s*t*4/l.components*l.byteLength;case Ep:return s*t*4/l.components*l.byteLength;case Jc:case $c:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case tu:case eu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ud:case Nd:return Math.max(s,16)*Math.max(t,8)/4;case Dd:case Ld:return Math.max(s,8)*Math.max(t,8)/2;case Od:case Pd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case zd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Bd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Id:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Fd:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Hd:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Gd:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Vd:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case kd:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Xd:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Wd:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case qd:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case jd:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Yd:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Zd:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Kd:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Qd:case Jd:case $d:return Math.ceil(s/4)*Math.ceil(t/4)*16;case tp:case ep:return Math.ceil(s/4)*Math.ceil(t/4)*8;case np:case ip:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function A2(s){switch(s){case Pi:case s1:return{byteLength:1,components:1};case Ko:case o1:case sl:return{byteLength:2,components:1};case xp:case yp:return{byteLength:2,components:4};case Lr:case _p:case fa:return{byteLength:4,components:1};case l1:case c1:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gp);function D1(){let s=null,t=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function R2(s){const t=new WeakMap;function i(d,m){const p=d.array,v=d.usage,g=p.byteLength,x=s.createBuffer();s.bindBuffer(m,x),s.bufferData(m,p,v),d.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,m,p){const v=m.array,g=m.updateRanges;if(s.bindBuffer(p,d),g.length===0)s.bufferSubData(p,0,v);else{g.sort((M,E)=>M.start-E.start);let x=0;for(let M=1;M<g.length;M++){const E=g[x],T=g[M];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++x,g[x]=T)}g.length=x+1;for(let M=0,E=g.length;M<E;M++){const T=g[M];s.bufferSubData(p,T.start*v.BYTES_PER_ELEMENT,v,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(s.deleteBuffer(m.buffer),t.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=t.get(d);(!v||v.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:f}}var C2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,w2=`#ifdef USE_ALPHAHASH
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
#endif`,D2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,U2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,L2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,N2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,O2=`#ifdef USE_AOMAP
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
#endif`,P2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,z2=`#ifdef USE_BATCHING
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
#endif`,B2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,I2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,F2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,H2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,G2=`#ifdef USE_IRIDESCENCE
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
#endif`,V2=`#ifdef USE_BUMPMAP
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
#endif`,k2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,X2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,W2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,q2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,j2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Y2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Z2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,K2=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Q2=`#define PI 3.141592653589793
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
} // validated`,J2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$2=`vec3 transformedNormal = objectNormal;
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
#endif`,tb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ib=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ab="gl_FragColor = linearToOutputTexel( gl_FragColor );",rb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sb=`#ifdef USE_ENVMAP
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
#endif`,ob=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lb=`#ifdef USE_ENVMAP
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
#endif`,cb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ub=`#ifdef USE_ENVMAP
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
#endif`,fb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,db=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mb=`#ifdef USE_GRADIENTMAP
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
}`,gb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_b=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xb=`uniform bool receiveShadow;
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
#endif`,yb=`#ifdef USE_ENVMAP
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
#endif`,Sb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Eb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tb=`PhysicalMaterial material;
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
#endif`,Ab=`struct PhysicalMaterial {
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
}`,Rb=`
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
#endif`,Cb=`#if defined( RE_IndirectDiffuse )
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
#endif`,wb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Db=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ub=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ob=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bb=`#if defined( USE_POINTS_UV )
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
#endif`,Ib=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kb=`#ifdef USE_MORPHTARGETS
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
#endif`,Xb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kb=`#ifdef USE_NORMALMAP
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
#endif`,Qb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$b=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,iT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hT=`float getShadowMask() {
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
}`,dT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pT=`#ifdef USE_SKINNING
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
#endif`,mT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gT=`#ifdef USE_SKINNING
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
#endif`,vT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_T=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ST=`#ifdef USE_TRANSMISSION
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
#endif`,MT=`#ifdef USE_TRANSMISSION
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
#endif`,ET=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const RT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,CT=`uniform sampler2D t2D;
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
}`,wT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,UT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NT=`#include <common>
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
}`,OT=`#if DEPTH_PACKING == 3200
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
}`,PT=`#define DISTANCE
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
}`,zT=`#define DISTANCE
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
}`,BT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,IT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FT=`uniform float scale;
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
}`,HT=`uniform vec3 diffuse;
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
}`,GT=`#include <common>
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
}`,VT=`uniform vec3 diffuse;
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
}`,kT=`#define LAMBERT
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
}`,XT=`#define LAMBERT
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
}`,WT=`#define MATCAP
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
}`,qT=`#define MATCAP
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
}`,jT=`#define NORMAL
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
}`,YT=`#define NORMAL
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
}`,ZT=`#define PHONG
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
}`,KT=`#define PHONG
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
}`,QT=`#define STANDARD
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
}`,JT=`#define STANDARD
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
}`,$T=`#define TOON
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
}`,t3=`#define TOON
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
}`,e3=`uniform float size;
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
}`,n3=`uniform vec3 diffuse;
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
}`,i3=`#include <common>
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
}`,a3=`uniform vec3 color;
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
}`,r3=`uniform float rotation;
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
}`,s3=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:C2,alphahash_pars_fragment:w2,alphamap_fragment:D2,alphamap_pars_fragment:U2,alphatest_fragment:L2,alphatest_pars_fragment:N2,aomap_fragment:O2,aomap_pars_fragment:P2,batching_pars_vertex:z2,batching_vertex:B2,begin_vertex:I2,beginnormal_vertex:F2,bsdfs:H2,iridescence_fragment:G2,bumpmap_pars_fragment:V2,clipping_planes_fragment:k2,clipping_planes_pars_fragment:X2,clipping_planes_pars_vertex:W2,clipping_planes_vertex:q2,color_fragment:j2,color_pars_fragment:Y2,color_pars_vertex:Z2,color_vertex:K2,common:Q2,cube_uv_reflection_fragment:J2,defaultnormal_vertex:$2,displacementmap_pars_vertex:tb,displacementmap_vertex:eb,emissivemap_fragment:nb,emissivemap_pars_fragment:ib,colorspace_fragment:ab,colorspace_pars_fragment:rb,envmap_fragment:sb,envmap_common_pars_fragment:ob,envmap_pars_fragment:lb,envmap_pars_vertex:cb,envmap_physical_pars_fragment:yb,envmap_vertex:ub,fog_vertex:fb,fog_pars_vertex:hb,fog_fragment:db,fog_pars_fragment:pb,gradientmap_pars_fragment:mb,lightmap_pars_fragment:gb,lights_lambert_fragment:vb,lights_lambert_pars_fragment:_b,lights_pars_begin:xb,lights_toon_fragment:Sb,lights_toon_pars_fragment:Mb,lights_phong_fragment:Eb,lights_phong_pars_fragment:bb,lights_physical_fragment:Tb,lights_physical_pars_fragment:Ab,lights_fragment_begin:Rb,lights_fragment_maps:Cb,lights_fragment_end:wb,logdepthbuf_fragment:Db,logdepthbuf_pars_fragment:Ub,logdepthbuf_pars_vertex:Lb,logdepthbuf_vertex:Nb,map_fragment:Ob,map_pars_fragment:Pb,map_particle_fragment:zb,map_particle_pars_fragment:Bb,metalnessmap_fragment:Ib,metalnessmap_pars_fragment:Fb,morphinstance_vertex:Hb,morphcolor_vertex:Gb,morphnormal_vertex:Vb,morphtarget_pars_vertex:kb,morphtarget_vertex:Xb,normal_fragment_begin:Wb,normal_fragment_maps:qb,normal_pars_fragment:jb,normal_pars_vertex:Yb,normal_vertex:Zb,normalmap_pars_fragment:Kb,clearcoat_normal_fragment_begin:Qb,clearcoat_normal_fragment_maps:Jb,clearcoat_pars_fragment:$b,iridescence_pars_fragment:tT,opaque_fragment:eT,packing:nT,premultiplied_alpha_fragment:iT,project_vertex:aT,dithering_fragment:rT,dithering_pars_fragment:sT,roughnessmap_fragment:oT,roughnessmap_pars_fragment:lT,shadowmap_pars_fragment:cT,shadowmap_pars_vertex:uT,shadowmap_vertex:fT,shadowmask_pars_fragment:hT,skinbase_vertex:dT,skinning_pars_vertex:pT,skinning_vertex:mT,skinnormal_vertex:gT,specularmap_fragment:vT,specularmap_pars_fragment:_T,tonemapping_fragment:xT,tonemapping_pars_fragment:yT,transmission_fragment:ST,transmission_pars_fragment:MT,uv_pars_fragment:ET,uv_pars_vertex:bT,uv_vertex:TT,worldpos_vertex:AT,background_vert:RT,background_frag:CT,backgroundCube_vert:wT,backgroundCube_frag:DT,cube_vert:UT,cube_frag:LT,depth_vert:NT,depth_frag:OT,distanceRGBA_vert:PT,distanceRGBA_frag:zT,equirect_vert:BT,equirect_frag:IT,linedashed_vert:FT,linedashed_frag:HT,meshbasic_vert:GT,meshbasic_frag:VT,meshlambert_vert:kT,meshlambert_frag:XT,meshmatcap_vert:WT,meshmatcap_frag:qT,meshnormal_vert:jT,meshnormal_frag:YT,meshphong_vert:ZT,meshphong_frag:KT,meshphysical_vert:QT,meshphysical_frag:JT,meshtoon_vert:$T,meshtoon_frag:t3,points_vert:e3,points_frag:n3,shadow_vert:i3,shadow_frag:a3,sprite_vert:r3,sprite_frag:s3},Bt={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Li={basic:{uniforms:Nn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:Nn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new be(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:Nn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:Nn([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:Nn([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new be(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:Nn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:Nn([Bt.points,Bt.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:Nn([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:Nn([Bt.common,Bt.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:Nn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:Nn([Bt.sprite,Bt.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:Nn([Bt.common,Bt.displacementmap,{referencePosition:{value:new at},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:Nn([Bt.lights,Bt.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};Li.physical={uniforms:Nn([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const qc={r:0,b:0,g:0},Er=new zi,o3=new Ke;function l3(s,t,i,r,l,c,f){const d=new be(0);let m=c===!0?0:1,p,v,g=null,x=0,M=null;function E(U){let D=U.isScene===!0?U.background:null;return D&&D.isTexture&&(D=(U.backgroundBlurriness>0?i:t).get(D)),D}function T(U){let D=!1;const F=E(U);F===null?_(d,m):F&&F.isColor&&(_(F,1),D=!0);const H=s.xr.getEnvironmentBlendMode();H==="additive"?r.buffers.color.setClear(0,0,0,1,f):H==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(U,D){const F=E(D);F&&(F.isCubeTexture||F.mapping===du)?(v===void 0&&(v=new ti(new fl(1,1,1),new Ja({name:"BackgroundCubeMaterial",uniforms:Hs(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(H,B,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Er.copy(D.backgroundRotation),Er.x*=-1,Er.y*=-1,Er.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),v.material.uniforms.envMap.value=F,v.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(o3.makeRotationFromEuler(Er)),v.material.toneMapped=De.getTransfer(F.colorSpace)!==Ge,(g!==F||x!==F.version||M!==s.toneMapping)&&(v.material.needsUpdate=!0,g=F,x=F.version,M=s.toneMapping),v.layers.enableAll(),U.unshift(v,v.geometry,v.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new ti(new mu(2,2),new Ja({name:"BackgroundMaterial",uniforms:Hs(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:ga,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=De.getTransfer(F.colorSpace)!==Ge,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(g!==F||x!==F.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,g=F,x=F.version,M=s.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function _(U,D){U.getRGB(qc,S1(s)),r.buffers.color.setClear(qc.r,qc.g,qc.b,D,f)}function L(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,D=1){d.set(U),m=D,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,_(d,m)},render:T,addToRenderList:S,dispose:L}}function c3(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=x(null);let c=l,f=!1;function d(w,G,rt,ft,yt){let K=!1;const P=g(ft,rt,G);c!==P&&(c=P,p(c.object)),K=M(w,ft,rt,yt),K&&E(w,ft,rt,yt),yt!==null&&t.update(yt,s.ELEMENT_ARRAY_BUFFER),(K||f)&&(f=!1,D(w,G,rt,ft),yt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(yt).buffer))}function m(){return s.createVertexArray()}function p(w){return s.bindVertexArray(w)}function v(w){return s.deleteVertexArray(w)}function g(w,G,rt){const ft=rt.wireframe===!0;let yt=r[w.id];yt===void 0&&(yt={},r[w.id]=yt);let K=yt[G.id];K===void 0&&(K={},yt[G.id]=K);let P=K[ft];return P===void 0&&(P=x(m()),K[ft]=P),P}function x(w){const G=[],rt=[],ft=[];for(let yt=0;yt<i;yt++)G[yt]=0,rt[yt]=0,ft[yt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:rt,attributeDivisors:ft,object:w,attributes:{},index:null}}function M(w,G,rt,ft){const yt=c.attributes,K=G.attributes;let P=0;const W=rt.getAttributes();for(const k in W)if(W[k].location>=0){const Mt=yt[k];let N=K[k];if(N===void 0&&(k==="instanceMatrix"&&w.instanceMatrix&&(N=w.instanceMatrix),k==="instanceColor"&&w.instanceColor&&(N=w.instanceColor)),Mt===void 0||Mt.attribute!==N||N&&Mt.data!==N.data)return!0;P++}return c.attributesNum!==P||c.index!==ft}function E(w,G,rt,ft){const yt={},K=G.attributes;let P=0;const W=rt.getAttributes();for(const k in W)if(W[k].location>=0){let Mt=K[k];Mt===void 0&&(k==="instanceMatrix"&&w.instanceMatrix&&(Mt=w.instanceMatrix),k==="instanceColor"&&w.instanceColor&&(Mt=w.instanceColor));const N={};N.attribute=Mt,Mt&&Mt.data&&(N.data=Mt.data),yt[k]=N,P++}c.attributes=yt,c.attributesNum=P,c.index=ft}function T(){const w=c.newAttributes;for(let G=0,rt=w.length;G<rt;G++)w[G]=0}function S(w){_(w,0)}function _(w,G){const rt=c.newAttributes,ft=c.enabledAttributes,yt=c.attributeDivisors;rt[w]=1,ft[w]===0&&(s.enableVertexAttribArray(w),ft[w]=1),yt[w]!==G&&(s.vertexAttribDivisor(w,G),yt[w]=G)}function L(){const w=c.newAttributes,G=c.enabledAttributes;for(let rt=0,ft=G.length;rt<ft;rt++)G[rt]!==w[rt]&&(s.disableVertexAttribArray(rt),G[rt]=0)}function U(w,G,rt,ft,yt,K,P){P===!0?s.vertexAttribIPointer(w,G,rt,yt,K):s.vertexAttribPointer(w,G,rt,ft,yt,K)}function D(w,G,rt,ft){T();const yt=ft.attributes,K=rt.getAttributes(),P=G.defaultAttributeValues;for(const W in K){const k=K[W];if(k.location>=0){let _t=yt[W];if(_t===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(_t=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(_t=w.instanceColor)),_t!==void 0){const Mt=_t.normalized,N=_t.itemSize,J=t.get(_t);if(J===void 0)continue;const vt=J.buffer,mt=J.type,Ct=J.bytesPerElement,$=mt===s.INT||mt===s.UNSIGNED_INT||_t.gpuType===_p;if(_t.isInterleavedBufferAttribute){const ct=_t.data,wt=ct.stride,Nt=_t.offset;if(ct.isInstancedInterleavedBuffer){for(let Ot=0;Ot<k.locationSize;Ot++)_(k.location+Ot,ct.meshPerAttribute);w.isInstancedMesh!==!0&&ft._maxInstanceCount===void 0&&(ft._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Ot=0;Ot<k.locationSize;Ot++)S(k.location+Ot);s.bindBuffer(s.ARRAY_BUFFER,vt);for(let Ot=0;Ot<k.locationSize;Ot++)U(k.location+Ot,N/k.locationSize,mt,Mt,wt*Ct,(Nt+N/k.locationSize*Ot)*Ct,$)}else{if(_t.isInstancedBufferAttribute){for(let ct=0;ct<k.locationSize;ct++)_(k.location+ct,_t.meshPerAttribute);w.isInstancedMesh!==!0&&ft._maxInstanceCount===void 0&&(ft._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let ct=0;ct<k.locationSize;ct++)S(k.location+ct);s.bindBuffer(s.ARRAY_BUFFER,vt);for(let ct=0;ct<k.locationSize;ct++)U(k.location+ct,N/k.locationSize,mt,Mt,N*Ct,N/k.locationSize*ct*Ct,$)}}else if(P!==void 0){const Mt=P[W];if(Mt!==void 0)switch(Mt.length){case 2:s.vertexAttrib2fv(k.location,Mt);break;case 3:s.vertexAttrib3fv(k.location,Mt);break;case 4:s.vertexAttrib4fv(k.location,Mt);break;default:s.vertexAttrib1fv(k.location,Mt)}}}}L()}function F(){Y();for(const w in r){const G=r[w];for(const rt in G){const ft=G[rt];for(const yt in ft)v(ft[yt].object),delete ft[yt];delete G[rt]}delete r[w]}}function H(w){if(r[w.id]===void 0)return;const G=r[w.id];for(const rt in G){const ft=G[rt];for(const yt in ft)v(ft[yt].object),delete ft[yt];delete G[rt]}delete r[w.id]}function B(w){for(const G in r){const rt=r[G];if(rt[w.id]===void 0)continue;const ft=rt[w.id];for(const yt in ft)v(ft[yt].object),delete ft[yt];delete rt[w.id]}}function Y(){C(),f=!0,c!==l&&(c=l,p(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:C,dispose:F,releaseStatesOfGeometry:H,releaseStatesOfProgram:B,initAttributes:T,enableAttribute:S,disableUnusedAttributes:L}}function u3(s,t,i){let r;function l(p){r=p}function c(p,v){s.drawArrays(r,p,v),i.update(v,r,1)}function f(p,v,g){g!==0&&(s.drawArraysInstanced(r,p,v,g),i.update(v,r,g))}function d(p,v,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,g);let M=0;for(let E=0;E<g;E++)M+=v[E];i.update(M,r,1)}function m(p,v,g,x){if(g===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)f(p[E],v[E],x[E]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,v,0,x,0,g);let E=0;for(let T=0;T<g;T++)E+=v[T]*x[T];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function f3(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(B){return!(B!==Si&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const Y=B===sl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==Pi&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==fa&&!Y)}function m(B){if(B==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const g=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),U=s.getParameter(s.MAX_VARYING_VECTORS),D=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),F=E>0,H=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:L,maxVaryings:U,maxFragmentUniforms:D,vertexTextures:F,maxSamples:H}}function h3(s){const t=this;let i=null,r=0,l=!1,c=!1;const f=new Tr,d=new de,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const M=g.length!==0||x||r!==0||l;return l=x,r=g.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,x){i=v(g,x,0)},this.setState=function(g,x,M){const E=g.clippingPlanes,T=g.clipIntersection,S=g.clipShadows,_=s.get(g);if(!l||E===null||E.length===0||c&&!S)c?v(null):p();else{const L=c?0:r,U=L*4;let D=_.clippingState||null;m.value=D,D=v(E,x,U,M);for(let F=0;F!==U;++F)D[F]=i[F];_.clippingState=D,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=L}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function v(g,x,M,E){const T=g!==null?g.length:0;let S=null;if(T!==0){if(S=m.value,E!==!0||S===null){const _=M+T*4,L=x.matrixWorldInverse;d.getNormalMatrix(L),(S===null||S.length<_)&&(S=new Float32Array(_));for(let U=0,D=M;U!==T;++U,D+=4)f.copy(g[U]).applyMatrix4(L,d),f.normal.toArray(S,D),S[D+3]=f.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,S}}function d3(s){let t=new WeakMap;function i(f,d){return d===Ad?f.mapping=Bs:d===Rd&&(f.mapping=Is),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===Ad||d===Rd)if(t.has(f)){const m=t.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new l2(m.height);return p.fromEquirectangularTexture(s,f),t.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const Ns=4,h_=[.125,.215,.35,.446,.526,.582],Cr=20,ld=new w1,d_=new be;let cd=null,ud=0,fd=0,hd=!1;const Ar=(1+Math.sqrt(5))/2,Us=1/Ar,p_=[new at(-Ar,Us,0),new at(Ar,Us,0),new at(-Us,0,Ar),new at(Us,0,Ar),new at(0,Ar,-Us),new at(0,Ar,Us),new at(-1,1,-1),new at(1,1,-1),new at(-1,1,1),new at(1,1,1)],p3=new at;class m_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,c={}){const{size:f=256,position:d=p3}=c;cd=this._renderer.getRenderTarget(),ud=this._renderer.getActiveCubeFace(),fd=this._renderer.getActiveMipmapLevel(),hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=__(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=v_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(cd,ud,fd),this._renderer.xr.enabled=hd,t.scissorTest=!1,jc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Bs||t.mapping===Is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),cd=this._renderer.getRenderTarget(),ud=this._renderer.getActiveCubeFace(),fd=this._renderer.getActiveMipmapLevel(),hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ni,minFilter:Ni,generateMipmaps:!1,type:sl,format:Si,colorSpace:Fs,depthBuffer:!1},l=g_(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=g_(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=m3(c)),this._blurMaterial=g3(c,t,i)}return l}_compileMaterial(t){const i=new ti(this._lodPlanes[0],t);this._renderer.compile(i,ld)}_sceneToCubeUV(t,i,r,l,c){const m=new hi(90,1,i,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,M=g.toneMapping;g.getClearColor(d_),g.toneMapping=Qa,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null));const T=new lu({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1}),S=new ti(new fl,T);let _=!1;const L=t.background;L?L.isColor&&(T.color.copy(L),t.background=null,_=!0):(T.color.copy(d_),_=!0);for(let U=0;U<6;U++){const D=U%3;D===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[U],c.y,c.z)):D===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[U]));const F=this._cubeSize;jc(l,D*F,U>2?F:0,F,F),g.setRenderTarget(l),_&&g.render(S,m),g.render(t,m)}S.geometry.dispose(),S.material.dispose(),g.toneMapping=M,g.autoClear=x,t.background=L}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Bs||t.mapping===Is;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=__()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=v_());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new ti(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;jc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,ld)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=p_[(l-c-1)%p_.length];this._blur(t,c-1,c,f,d)}i.autoClear=r}_blur(t,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,r,l,"latitudinal",c),this._halfBlur(f,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,g=new ti(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Cr-1),T=c/E,S=isFinite(c)?1+Math.floor(v*T):Cr;S>Cr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Cr}`);const _=[];let L=0;for(let B=0;B<Cr;++B){const Y=B/T,C=Math.exp(-Y*Y/2);_.push(C),B===0?L+=C:B<S&&(L+=2*C)}for(let B=0;B<_.length;B++)_[B]=_[B]/L;x.envMap.value=t.texture,x.samples.value=S,x.weights.value=_,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:U}=this;x.dTheta.value=E,x.mipInt.value=U-r;const D=this._sizeLods[l],F=3*D*(l>U-Ns?l-U+Ns:0),H=4*(this._cubeSize-D);jc(i,F,H,3*D,2*D),m.setRenderTarget(i),m.render(g,ld)}}function m3(s){const t=[],i=[],r=[];let l=s;const c=s-Ns+1+h_.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);i.push(d);let m=1/d;f>s-Ns?m=h_[f-s+Ns-1]:f===0&&(m=0),r.push(m);const p=1/(d-2),v=-p,g=1+p,x=[v,v,g,v,g,g,v,v,g,g,v,g],M=6,E=6,T=3,S=2,_=1,L=new Float32Array(T*E*M),U=new Float32Array(S*E*M),D=new Float32Array(_*E*M);for(let H=0;H<M;H++){const B=H%3*2/3-1,Y=H>2?0:-1,C=[B,Y,0,B+2/3,Y,0,B+2/3,Y+1,0,B,Y,0,B+2/3,Y+1,0,B,Y+1,0];L.set(C,T*E*H),U.set(x,S*E*H);const w=[H,H,H,H,H,H];D.set(w,_*E*H)}const F=new di;F.setAttribute("position",new Ei(L,T)),F.setAttribute("uv",new Ei(U,S)),F.setAttribute("faceIndex",new Ei(D,_)),t.push(F),l>Ns&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function g_(s,t,i){const r=new Nr(s,t,i);return r.texture.mapping=du,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function jc(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function g3(s,t,i){const r=new Float32Array(Cr),l=new at(0,1,0);return new Ja({name:"SphericalGaussianBlur",defines:{n:Cr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Cp(),fragmentShader:`

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
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function v_(){return new Ja({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cp(),fragmentShader:`

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
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function __(){return new Ja({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function Cp(){return`

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
	`}function v3(s){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Ad||m===Rd,v=m===Bs||m===Is;if(p||v){let g=t.get(d);const x=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new m_(s)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const M=d.image;return p&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new m_(s)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function _3(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&el("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function x3(s,t,i,r){const l={},c=new WeakMap;function f(g){const x=g.target;x.index!==null&&t.remove(x.index);for(const E in x.attributes)t.remove(x.attributes[E]);x.removeEventListener("dispose",f),delete l[x.id];const M=c.get(x);M&&(t.remove(M),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(g,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function m(g){const x=g.attributes;for(const M in x)t.update(x[M],s.ARRAY_BUFFER)}function p(g){const x=[],M=g.index,E=g.attributes.position;let T=0;if(M!==null){const L=M.array;T=M.version;for(let U=0,D=L.length;U<D;U+=3){const F=L[U+0],H=L[U+1],B=L[U+2];x.push(F,H,H,B,B,F)}}else if(E!==void 0){const L=E.array;T=E.version;for(let U=0,D=L.length/3-1;U<D;U+=3){const F=U+0,H=U+1,B=U+2;x.push(F,H,H,B,B,F)}}else return;const S=new(g1(x)?y1:x1)(x,1);S.version=T;const _=c.get(g);_&&t.remove(_),c.set(g,S)}function v(g){const x=c.get(g);if(x){const M=g.index;M!==null&&x.version<M.version&&p(g)}else p(g);return c.get(g)}return{get:d,update:m,getWireframeAttribute:v}}function y3(s,t,i){let r;function l(x){r=x}let c,f;function d(x){c=x.type,f=x.bytesPerElement}function m(x,M){s.drawElements(r,M,c,x*f),i.update(M,r,1)}function p(x,M,E){E!==0&&(s.drawElementsInstanced(r,M,c,x*f,E),i.update(M,r,E))}function v(x,M,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,x,0,E);let S=0;for(let _=0;_<E;_++)S+=M[_];i.update(S,r,1)}function g(x,M,E,T){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<x.length;_++)p(x[_]/f,M[_],T[_]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,c,x,0,T,0,E);let _=0;for(let L=0;L<E;L++)_+=M[L]*T[L];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function S3(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,d){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=d*(c/3);break;case s.LINES:i.lines+=d*(c/2);break;case s.LINE_STRIP:i.lines+=d*(c-1);break;case s.LINE_LOOP:i.lines+=d*c;break;case s.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function M3(s,t,i){const r=new WeakMap,l=new en;function c(f,d,m){const p=f.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=v!==void 0?v.length:0;let x=r.get(d);if(x===void 0||x.count!==g){let w=function(){Y.dispose(),r.delete(d),d.removeEventListener("dispose",w)};var M=w;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let D=0;E===!0&&(D=1),T===!0&&(D=2),S===!0&&(D=3);let F=d.attributes.position.count*D,H=1;F>t.maxTextureSize&&(H=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const B=new Float32Array(F*H*4*g),Y=new v1(B,F,H,g);Y.type=fa,Y.needsUpdate=!0;const C=D*4;for(let G=0;G<g;G++){const rt=_[G],ft=L[G],yt=U[G],K=F*H*4*G;for(let P=0;P<rt.count;P++){const W=P*C;E===!0&&(l.fromBufferAttribute(rt,P),B[K+W+0]=l.x,B[K+W+1]=l.y,B[K+W+2]=l.z,B[K+W+3]=0),T===!0&&(l.fromBufferAttribute(ft,P),B[K+W+4]=l.x,B[K+W+5]=l.y,B[K+W+6]=l.z,B[K+W+7]=0),S===!0&&(l.fromBufferAttribute(yt,P),B[K+W+8]=l.x,B[K+W+9]=l.y,B[K+W+10]=l.z,B[K+W+11]=yt.itemSize===4?l.w:1)}}x={count:g,texture:Y,size:new Re(F,H)},r.set(d,x),d.addEventListener("dispose",w)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const T=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",T),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:c}}function E3(s,t,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,v=m.geometry,g=t.get(m,v);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return g}function f(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const U1=new On,x_=new A1(1,1),L1=new v1,N1=new WE,O1=new E1,y_=[],S_=[],M_=new Float32Array(16),E_=new Float32Array(9),b_=new Float32Array(4);function Xs(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=y_[l];if(c===void 0&&(c=new Float32Array(l),y_[l]=c),t!==0){r.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=i,s[f].toArray(c,d)}return c}function pn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function mn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function gu(s,t){let i=S_[t];i===void 0&&(i=new Int32Array(t),S_[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function b3(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function T3(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;s.uniform2fv(this.addr,t),mn(i,t)}}function A3(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(pn(i,t))return;s.uniform3fv(this.addr,t),mn(i,t)}}function R3(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;s.uniform4fv(this.addr,t),mn(i,t)}}function C3(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(pn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,r))return;b_.set(r),s.uniformMatrix2fv(this.addr,!1,b_),mn(i,r)}}function w3(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(pn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,r))return;E_.set(r),s.uniformMatrix3fv(this.addr,!1,E_),mn(i,r)}}function D3(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(pn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,r))return;M_.set(r),s.uniformMatrix4fv(this.addr,!1,M_),mn(i,r)}}function U3(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function L3(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;s.uniform2iv(this.addr,t),mn(i,t)}}function N3(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pn(i,t))return;s.uniform3iv(this.addr,t),mn(i,t)}}function O3(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;s.uniform4iv(this.addr,t),mn(i,t)}}function P3(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function z3(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;s.uniform2uiv(this.addr,t),mn(i,t)}}function B3(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pn(i,t))return;s.uniform3uiv(this.addr,t),mn(i,t)}}function I3(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;s.uniform4uiv(this.addr,t),mn(i,t)}}function F3(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(x_.compareFunction=m1,c=x_):c=U1,i.setTexture2D(t||c,l)}function H3(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||N1,l)}function G3(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||O1,l)}function V3(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||L1,l)}function k3(s){switch(s){case 5126:return b3;case 35664:return T3;case 35665:return A3;case 35666:return R3;case 35674:return C3;case 35675:return w3;case 35676:return D3;case 5124:case 35670:return U3;case 35667:case 35671:return L3;case 35668:case 35672:return N3;case 35669:case 35673:return O3;case 5125:return P3;case 36294:return z3;case 36295:return B3;case 36296:return I3;case 35678:case 36198:case 36298:case 36306:case 35682:return F3;case 35679:case 36299:case 36307:return H3;case 35680:case 36300:case 36308:case 36293:return G3;case 36289:case 36303:case 36311:case 36292:return V3}}function X3(s,t){s.uniform1fv(this.addr,t)}function W3(s,t){const i=Xs(t,this.size,2);s.uniform2fv(this.addr,i)}function q3(s,t){const i=Xs(t,this.size,3);s.uniform3fv(this.addr,i)}function j3(s,t){const i=Xs(t,this.size,4);s.uniform4fv(this.addr,i)}function Y3(s,t){const i=Xs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function Z3(s,t){const i=Xs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function K3(s,t){const i=Xs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function Q3(s,t){s.uniform1iv(this.addr,t)}function J3(s,t){s.uniform2iv(this.addr,t)}function $3(s,t){s.uniform3iv(this.addr,t)}function tA(s,t){s.uniform4iv(this.addr,t)}function eA(s,t){s.uniform1uiv(this.addr,t)}function nA(s,t){s.uniform2uiv(this.addr,t)}function iA(s,t){s.uniform3uiv(this.addr,t)}function aA(s,t){s.uniform4uiv(this.addr,t)}function rA(s,t,i){const r=this.cache,l=t.length,c=gu(i,l);pn(r,c)||(s.uniform1iv(this.addr,c),mn(r,c));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||U1,c[f])}function sA(s,t,i){const r=this.cache,l=t.length,c=gu(i,l);pn(r,c)||(s.uniform1iv(this.addr,c),mn(r,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||N1,c[f])}function oA(s,t,i){const r=this.cache,l=t.length,c=gu(i,l);pn(r,c)||(s.uniform1iv(this.addr,c),mn(r,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||O1,c[f])}function lA(s,t,i){const r=this.cache,l=t.length,c=gu(i,l);pn(r,c)||(s.uniform1iv(this.addr,c),mn(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||L1,c[f])}function cA(s){switch(s){case 5126:return X3;case 35664:return W3;case 35665:return q3;case 35666:return j3;case 35674:return Y3;case 35675:return Z3;case 35676:return K3;case 5124:case 35670:return Q3;case 35667:case 35671:return J3;case 35668:case 35672:return $3;case 35669:case 35673:return tA;case 5125:return eA;case 36294:return nA;case 36295:return iA;case 36296:return aA;case 35678:case 36198:case 36298:case 36306:case 35682:return rA;case 35679:case 36299:case 36307:return sA;case 35680:case 36300:case 36308:case 36293:return oA;case 36289:case 36303:case 36311:case 36292:return lA}}class uA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=k3(i.type)}}class fA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=cA(i.type)}}class hA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,i[d.id],r)}}}const dd=/(\w+)(\])?(\[|\.)?/g;function T_(s,t){s.seq.push(t),s.map[t.id]=t}function dA(s,t,i){const r=s.name,l=r.length;for(dd.lastIndex=0;;){const c=dd.exec(r),f=dd.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){T_(i,p===void 0?new uA(d,s,t):new fA(d,s,t));break}else{let g=i.map[d];g===void 0&&(g=new hA(d),T_(i,g)),i=g}}}class nu{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),f=t.getUniformLocation(i,c.name);dA(c,f,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&r.push(f)}return r}}function A_(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const pA=37297;let mA=0;function gA(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const d=f+1;r.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return r.join(`
`)}const R_=new de;function vA(s){De._getMatrix(R_,De.workingColorSpace,s);const t=`mat3( ${R_.elements.map(i=>i.toFixed(4))} )`;switch(De.getTransfer(s)){case su:return[t,"LinearTransferOETF"];case Ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function C_(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),c=(s.getShaderInfoLog(t)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+gA(s.getShaderSource(t),d)}else return c}function _A(s,t){const i=vA(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function xA(s,t){let i;switch(t){case xE:i="Linear";break;case yE:i="Reinhard";break;case SE:i="Cineon";break;case ME:i="ACESFilmic";break;case bE:i="AgX";break;case TE:i="Neutral";break;case EE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Yc=new at;function yA(){De.getLuminanceCoefficients(Yc);const s=Yc.x.toFixed(4),t=Yc.y.toFixed(4),i=Yc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function SA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yo).join(`
`)}function MA(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function EA(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),f=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:s.getAttribLocation(t,f),locationSize:d}}return i}function Yo(s){return s!==""}function w_(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function D_(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const bA=/^[ \t]*#include +<([\w\d./]+)>/gm;function op(s){return s.replace(bA,AA)}const TA=new Map;function AA(s,t){let i=pe[t];if(i===void 0){const r=TA.get(t);if(r!==void 0)i=pe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return op(i)}const RA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function U_(s){return s.replace(RA,CA)}function CA(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function L_(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function wA(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===a1?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===JM?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===la&&(t="SHADOWMAP_TYPE_VSM"),t}function DA(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Bs:case Is:t="ENVMAP_TYPE_CUBE";break;case du:t="ENVMAP_TYPE_CUBE_UV";break}return t}function UA(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Is:t="ENVMAP_MODE_REFRACTION";break}return t}function LA(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case vp:t="ENVMAP_BLENDING_MULTIPLY";break;case vE:t="ENVMAP_BLENDING_MIX";break;case _E:t="ENVMAP_BLENDING_ADD";break}return t}function NA(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function OA(s,t,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=wA(i),p=DA(i),v=UA(i),g=LA(i),x=NA(i),M=SA(i),E=MA(c),T=l.createProgram();let S,_,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Yo).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Yo).join(`
`),_.length>0&&(_+=`
`)):(S=[L_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yo).join(`
`),_=[L_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Qa?"#define TONE_MAPPING":"",i.toneMapping!==Qa?pe.tonemapping_pars_fragment:"",i.toneMapping!==Qa?xA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,_A("linearToOutputTexel",i.outputColorSpace),yA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Yo).join(`
`)),f=op(f),f=w_(f,i),f=D_(f,i),d=op(d),d=w_(d,i),d=D_(d,i),f=U_(f),d=U_(d),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===zv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===zv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const U=L+S+f,D=L+_+d,F=A_(l,l.VERTEX_SHADER,U),H=A_(l,l.FRAGMENT_SHADER,D);l.attachShader(T,F),l.attachShader(T,H),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function B(G){if(s.debug.checkShaderErrors){const rt=l.getProgramInfoLog(T)||"",ft=l.getShaderInfoLog(F)||"",yt=l.getShaderInfoLog(H)||"",K=rt.trim(),P=ft.trim(),W=yt.trim();let k=!0,_t=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(k=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,T,F,H);else{const Mt=C_(l,F,"vertex"),N=C_(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+K+`
`+Mt+`
`+N)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(P===""||W==="")&&(_t=!1);_t&&(G.diagnostics={runnable:k,programLog:K,vertexShader:{log:P,prefix:S},fragmentShader:{log:W,prefix:_}})}l.deleteShader(F),l.deleteShader(H),Y=new nu(l,T),C=EA(l,T)}let Y;this.getUniforms=function(){return Y===void 0&&B(this),Y};let C;this.getAttributes=function(){return C===void 0&&B(this),C};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(T,pA)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=mA++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=F,this.fragmentShader=H,this}let PA=0;class zA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new BA(t),i.set(t,r)),r}}class BA{constructor(t){this.id=PA++,this.code=t,this.usedTimes=0}}function IA(s,t,i,r,l,c,f){const d=new Tp,m=new zA,p=new Set,v=[],g=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(C){return p.add(C),C===0?"uv":`uv${C}`}function S(C,w,G,rt,ft){const yt=rt.fog,K=ft.geometry,P=C.isMeshStandardMaterial?rt.environment:null,W=(C.isMeshStandardMaterial?i:t).get(C.envMap||P),k=W&&W.mapping===du?W.image.height:null,_t=E[C.type];C.precision!==null&&(M=l.getMaxPrecision(C.precision),M!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",M,"instead."));const Mt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,N=Mt!==void 0?Mt.length:0;let J=0;K.morphAttributes.position!==void 0&&(J=1),K.morphAttributes.normal!==void 0&&(J=2),K.morphAttributes.color!==void 0&&(J=3);let vt,mt,Ct,$;if(_t){const Te=Li[_t];vt=Te.vertexShader,mt=Te.fragmentShader}else vt=C.vertexShader,mt=C.fragmentShader,m.update(C),Ct=m.getVertexShaderID(C),$=m.getFragmentShaderID(C);const ct=s.getRenderTarget(),wt=s.state.buffers.depth.getReversed(),Nt=ft.isInstancedMesh===!0,Ot=ft.isBatchedMesh===!0,oe=!!C.map,Qe=!!C.matcap,z=!!W,ae=!!C.aoMap,qt=!!C.lightMap,jt=!!C.bumpMap,Yt=!!C.normalMap,Be=!!C.displacementMap,Ht=!!C.emissiveMap,se=!!C.metalnessMap,Ye=!!C.roughnessMap,We=C.anisotropy>0,O=C.clearcoat>0,b=C.dispersion>0,nt=C.iridescence>0,pt=C.sheen>0,bt=C.transmission>0,ht=We&&!!C.anisotropyMap,Jt=O&&!!C.clearcoatMap,Dt=O&&!!C.clearcoatNormalMap,Kt=O&&!!C.clearcoatRoughnessMap,Qt=nt&&!!C.iridescenceMap,At=nt&&!!C.iridescenceThicknessMap,Ut=pt&&!!C.sheenColorMap,$t=pt&&!!C.sheenRoughnessMap,Ft=!!C.specularMap,Pt=!!C.specularColorMap,ue=!!C.specularIntensityMap,X=bt&&!!C.transmissionMap,Rt=bt&&!!C.thicknessMap,Lt=!!C.gradientMap,Gt=!!C.alphaMap,Tt=C.alphaTest>0,St=!!C.alphaHash,Vt=!!C.extensions;let le=Qa;C.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(le=s.toneMapping);const Oe={shaderID:_t,shaderType:C.type,shaderName:C.name,vertexShader:vt,fragmentShader:mt,defines:C.defines,customVertexShaderID:Ct,customFragmentShaderID:$,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:Ot,batchingColor:Ot&&ft._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&ft.instanceColor!==null,instancingMorph:Nt&&ft.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ct===null?s.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Fs,alphaToCoverage:!!C.alphaToCoverage,map:oe,matcap:Qe,envMap:z,envMapMode:z&&W.mapping,envMapCubeUVHeight:k,aoMap:ae,lightMap:qt,bumpMap:jt,normalMap:Yt,displacementMap:x&&Be,emissiveMap:Ht,normalMapObjectSpace:Yt&&C.normalMapType===wE,normalMapTangentSpace:Yt&&C.normalMapType===p1,metalnessMap:se,roughnessMap:Ye,anisotropy:We,anisotropyMap:ht,clearcoat:O,clearcoatMap:Jt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Kt,dispersion:b,iridescence:nt,iridescenceMap:Qt,iridescenceThicknessMap:At,sheen:pt,sheenColorMap:Ut,sheenRoughnessMap:$t,specularMap:Ft,specularColorMap:Pt,specularIntensityMap:ue,transmission:bt,transmissionMap:X,thicknessMap:Rt,gradientMap:Lt,opaque:C.transparent===!1&&C.blending===Os&&C.alphaToCoverage===!1,alphaMap:Gt,alphaTest:Tt,alphaHash:St,combine:C.combine,mapUv:oe&&T(C.map.channel),aoMapUv:ae&&T(C.aoMap.channel),lightMapUv:qt&&T(C.lightMap.channel),bumpMapUv:jt&&T(C.bumpMap.channel),normalMapUv:Yt&&T(C.normalMap.channel),displacementMapUv:Be&&T(C.displacementMap.channel),emissiveMapUv:Ht&&T(C.emissiveMap.channel),metalnessMapUv:se&&T(C.metalnessMap.channel),roughnessMapUv:Ye&&T(C.roughnessMap.channel),anisotropyMapUv:ht&&T(C.anisotropyMap.channel),clearcoatMapUv:Jt&&T(C.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&T(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Kt&&T(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Qt&&T(C.iridescenceMap.channel),iridescenceThicknessMapUv:At&&T(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&T(C.sheenColorMap.channel),sheenRoughnessMapUv:$t&&T(C.sheenRoughnessMap.channel),specularMapUv:Ft&&T(C.specularMap.channel),specularColorMapUv:Pt&&T(C.specularColorMap.channel),specularIntensityMapUv:ue&&T(C.specularIntensityMap.channel),transmissionMapUv:X&&T(C.transmissionMap.channel),thicknessMapUv:Rt&&T(C.thicknessMap.channel),alphaMapUv:Gt&&T(C.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Yt||We),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:ft.isPoints===!0&&!!K.attributes.uv&&(oe||Gt),fog:!!yt,useFog:C.fog===!0,fogExp2:!!yt&&yt.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:wt,skinning:ft.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:J,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:le,decodeVideoTexture:oe&&C.map.isVideoTexture===!0&&De.getTransfer(C.map.colorSpace)===Ge,decodeVideoTextureEmissive:Ht&&C.emissiveMap.isVideoTexture===!0&&De.getTransfer(C.emissiveMap.colorSpace)===Ge,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===ua,flipSided:C.side===Vn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Vt&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&C.extensions.multiDraw===!0||Ot)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Oe.vertexUv1s=p.has(1),Oe.vertexUv2s=p.has(2),Oe.vertexUv3s=p.has(3),p.clear(),Oe}function _(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const G in C.defines)w.push(G),w.push(C.defines[G]);return C.isRawShaderMaterial===!1&&(L(w,C),U(w,C),w.push(s.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function L(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function U(C,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),w.gradientMap&&d.enable(22),C.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),C.push(d.mask)}function D(C){const w=E[C.type];let G;if(w){const rt=Li[w];G=a2.clone(rt.uniforms)}else G=C.uniforms;return G}function F(C,w){let G;for(let rt=0,ft=v.length;rt<ft;rt++){const yt=v[rt];if(yt.cacheKey===w){G=yt,++G.usedTimes;break}}return G===void 0&&(G=new OA(s,w,C,c),v.push(G)),G}function H(C){if(--C.usedTimes===0){const w=v.indexOf(C);v[w]=v[v.length-1],v.pop(),C.destroy()}}function B(C){m.remove(C)}function Y(){m.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:D,acquireProgram:F,releaseProgram:H,releaseShaderCache:B,programs:v,dispose:Y}}function FA(){let s=new WeakMap;function t(f){return s.has(f)}function i(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function r(f){s.delete(f)}function l(f,d,m){s.get(f)[d]=m}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function HA(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function N_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function O_(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function f(g,x,M,E,T,S){let _=s[t];return _===void 0?(_={id:g.id,object:g,geometry:x,material:M,groupOrder:E,renderOrder:g.renderOrder,z:T,group:S},s[t]=_):(_.id=g.id,_.object=g,_.geometry=x,_.material=M,_.groupOrder=E,_.renderOrder=g.renderOrder,_.z=T,_.group=S),t++,_}function d(g,x,M,E,T,S){const _=f(g,x,M,E,T,S);M.transmission>0?r.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(g,x,M,E,T,S){const _=f(g,x,M,E,T,S);M.transmission>0?r.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(g,x){i.length>1&&i.sort(g||HA),r.length>1&&r.sort(x||N_),l.length>1&&l.sort(x||N_)}function v(){for(let g=t,x=s.length;g<x;g++){const M=s[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:v,sort:p}}function GA(){let s=new WeakMap;function t(r,l){const c=s.get(r);let f;return c===void 0?(f=new O_,s.set(r,[f])):l>=c.length?(f=new O_,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:t,dispose:i}}function VA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new at,color:new be};break;case"SpotLight":i={position:new at,direction:new at,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new at,color:new be,distance:0,decay:0};break;case"HemisphereLight":i={direction:new at,skyColor:new be,groundColor:new be};break;case"RectAreaLight":i={color:new be,position:new at,halfWidth:new at,halfHeight:new at};break}return s[t.id]=i,i}}}function kA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let XA=0;function WA(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function qA(s){const t=new VA,i=kA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new at);const l=new at,c=new Ke,f=new Ke;function d(p){let v=0,g=0,x=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let M=0,E=0,T=0,S=0,_=0,L=0,U=0,D=0,F=0,H=0,B=0;p.sort(WA);for(let C=0,w=p.length;C<w;C++){const G=p[C],rt=G.color,ft=G.intensity,yt=G.distance,K=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)v+=rt.r*ft,g+=rt.g*ft,x+=rt.b*ft;else if(G.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(G.sh.coefficients[P],ft);B++}else if(G.isDirectionalLight){const P=t.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const W=G.shadow,k=i.get(G);k.shadowIntensity=W.intensity,k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,r.directionalShadow[M]=k,r.directionalShadowMap[M]=K,r.directionalShadowMatrix[M]=G.shadow.matrix,L++}r.directional[M]=P,M++}else if(G.isSpotLight){const P=t.get(G);P.position.setFromMatrixPosition(G.matrixWorld),P.color.copy(rt).multiplyScalar(ft),P.distance=yt,P.coneCos=Math.cos(G.angle),P.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),P.decay=G.decay,r.spot[T]=P;const W=G.shadow;if(G.map&&(r.spotLightMap[F]=G.map,F++,W.updateMatrices(G),G.castShadow&&H++),r.spotLightMatrix[T]=W.matrix,G.castShadow){const k=i.get(G);k.shadowIntensity=W.intensity,k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,r.spotShadow[T]=k,r.spotShadowMap[T]=K,D++}T++}else if(G.isRectAreaLight){const P=t.get(G);P.color.copy(rt).multiplyScalar(ft),P.halfWidth.set(G.width*.5,0,0),P.halfHeight.set(0,G.height*.5,0),r.rectArea[S]=P,S++}else if(G.isPointLight){const P=t.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),P.distance=G.distance,P.decay=G.decay,G.castShadow){const W=G.shadow,k=i.get(G);k.shadowIntensity=W.intensity,k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,k.shadowCameraNear=W.camera.near,k.shadowCameraFar=W.camera.far,r.pointShadow[E]=k,r.pointShadowMap[E]=K,r.pointShadowMatrix[E]=G.shadow.matrix,U++}r.point[E]=P,E++}else if(G.isHemisphereLight){const P=t.get(G);P.skyColor.copy(G.color).multiplyScalar(ft),P.groundColor.copy(G.groundColor).multiplyScalar(ft),r.hemi[_]=P,_++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Bt.LTC_FLOAT_1,r.rectAreaLTC2=Bt.LTC_FLOAT_2):(r.rectAreaLTC1=Bt.LTC_HALF_1,r.rectAreaLTC2=Bt.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=g,r.ambient[2]=x;const Y=r.hash;(Y.directionalLength!==M||Y.pointLength!==E||Y.spotLength!==T||Y.rectAreaLength!==S||Y.hemiLength!==_||Y.numDirectionalShadows!==L||Y.numPointShadows!==U||Y.numSpotShadows!==D||Y.numSpotMaps!==F||Y.numLightProbes!==B)&&(r.directional.length=M,r.spot.length=T,r.rectArea.length=S,r.point.length=E,r.hemi.length=_,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=D+F-H,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=B,Y.directionalLength=M,Y.pointLength=E,Y.spotLength=T,Y.rectAreaLength=S,Y.hemiLength=_,Y.numDirectionalShadows=L,Y.numPointShadows=U,Y.numSpotShadows=D,Y.numSpotMaps=F,Y.numLightProbes=B,r.version=XA++)}function m(p,v){let g=0,x=0,M=0,E=0,T=0;const S=v.matrixWorldInverse;for(let _=0,L=p.length;_<L;_++){const U=p[_];if(U.isDirectionalLight){const D=r.directional[g];D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),g++}else if(U.isSpotLight){const D=r.spot[M];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(S),D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),M++}else if(U.isRectAreaLight){const D=r.rectArea[E];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(S),f.identity(),c.copy(U.matrixWorld),c.premultiply(S),f.extractRotation(c),D.halfWidth.set(U.width*.5,0,0),D.halfHeight.set(0,U.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),E++}else if(U.isPointLight){const D=r.point[x];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(S),x++}else if(U.isHemisphereLight){const D=r.hemi[T];D.direction.setFromMatrixPosition(U.matrixWorld),D.direction.transformDirection(S),T++}}}return{setup:d,setupView:m,state:r}}function P_(s){const t=new qA(s),i=[],r=[];function l(v){p.camera=v,i.length=0,r.length=0}function c(v){i.push(v)}function f(v){r.push(v)}function d(){t.setup(i)}function m(v){t.setupView(i,v)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:f}}function jA(s){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new P_(s),t.set(l,[d])):c>=f.length?(d=new P_(s),f.push(d)):d=f[c],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const YA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZA=`uniform sampler2D shadow_pass;
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
}`;function KA(s,t,i){let r=new Ap;const l=new Re,c=new Re,f=new en,d=new g2({depthPacking:CE}),m=new v2,p={},v=i.maxTextureSize,g={[ga]:Vn,[Vn]:ga,[ua]:ua},x=new Ja({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:YA,fragmentShader:ZA}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const E=new di;E.setAttribute("position",new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new ti(E,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=a1;let _=this.type;this.render=function(H,B,Y){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||H.length===0)return;const C=s.getRenderTarget(),w=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),rt=s.state;rt.setBlending(Ka),rt.buffers.depth.getReversed()===!0?rt.buffers.color.setClear(0,0,0,0):rt.buffers.color.setClear(1,1,1,1),rt.buffers.depth.setTest(!0),rt.setScissorTest(!1);const ft=_!==la&&this.type===la,yt=_===la&&this.type!==la;for(let K=0,P=H.length;K<P;K++){const W=H[K],k=W.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;l.copy(k.mapSize);const _t=k.getFrameExtents();if(l.multiply(_t),c.copy(k.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/_t.x),l.x=c.x*_t.x,k.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/_t.y),l.y=c.y*_t.y,k.mapSize.y=c.y)),k.map===null||ft===!0||yt===!0){const N=this.type!==la?{minFilter:Mi,magFilter:Mi}:{};k.map!==null&&k.map.dispose(),k.map=new Nr(l.x,l.y,N),k.map.texture.name=W.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();const Mt=k.getViewportCount();for(let N=0;N<Mt;N++){const J=k.getViewport(N);f.set(c.x*J.x,c.y*J.y,c.x*J.z,c.y*J.w),rt.viewport(f),k.updateMatrices(W,N),r=k.getFrustum(),D(B,Y,k.camera,W,this.type)}k.isPointLightShadow!==!0&&this.type===la&&L(k,Y),k.needsUpdate=!1}_=this.type,S.needsUpdate=!1,s.setRenderTarget(C,w,G)};function L(H,B){const Y=t.update(T);x.defines.VSM_SAMPLES!==H.blurSamples&&(x.defines.VSM_SAMPLES=H.blurSamples,M.defines.VSM_SAMPLES=H.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Nr(l.x,l.y)),x.uniforms.shadow_pass.value=H.map.texture,x.uniforms.resolution.value=H.mapSize,x.uniforms.radius.value=H.radius,s.setRenderTarget(H.mapPass),s.clear(),s.renderBufferDirect(B,null,Y,x,T,null),M.uniforms.shadow_pass.value=H.mapPass.texture,M.uniforms.resolution.value=H.mapSize,M.uniforms.radius.value=H.radius,s.setRenderTarget(H.map),s.clear(),s.renderBufferDirect(B,null,Y,M,T,null)}function U(H,B,Y,C){let w=null;const G=Y.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(G!==void 0)w=G;else if(w=Y.isPointLight===!0?m:d,s.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const rt=w.uuid,ft=B.uuid;let yt=p[rt];yt===void 0&&(yt={},p[rt]=yt);let K=yt[ft];K===void 0&&(K=w.clone(),yt[ft]=K,B.addEventListener("dispose",F)),w=K}if(w.visible=B.visible,w.wireframe=B.wireframe,C===la?w.side=B.shadowSide!==null?B.shadowSide:B.side:w.side=B.shadowSide!==null?B.shadowSide:g[B.side],w.alphaMap=B.alphaMap,w.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,w.map=B.map,w.clipShadows=B.clipShadows,w.clippingPlanes=B.clippingPlanes,w.clipIntersection=B.clipIntersection,w.displacementMap=B.displacementMap,w.displacementScale=B.displacementScale,w.displacementBias=B.displacementBias,w.wireframeLinewidth=B.wireframeLinewidth,w.linewidth=B.linewidth,Y.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const rt=s.properties.get(w);rt.light=Y}return w}function D(H,B,Y,C,w){if(H.visible===!1)return;if(H.layers.test(B.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&w===la)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,H.matrixWorld);const ft=t.update(H),yt=H.material;if(Array.isArray(yt)){const K=ft.groups;for(let P=0,W=K.length;P<W;P++){const k=K[P],_t=yt[k.materialIndex];if(_t&&_t.visible){const Mt=U(H,_t,C,w);H.onBeforeShadow(s,H,B,Y,ft,Mt,k),s.renderBufferDirect(Y,null,ft,Mt,H,k),H.onAfterShadow(s,H,B,Y,ft,Mt,k)}}}else if(yt.visible){const K=U(H,yt,C,w);H.onBeforeShadow(s,H,B,Y,ft,K,null),s.renderBufferDirect(Y,null,ft,K,H,null),H.onAfterShadow(s,H,B,Y,ft,K,null)}}const rt=H.children;for(let ft=0,yt=rt.length;ft<yt;ft++)D(rt[ft],B,Y,C,w)}function F(H){H.target.removeEventListener("dispose",F);for(const Y in p){const C=p[Y],w=H.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const QA={[xd]:yd,[Sd]:bd,[Md]:Td,[zs]:Ed,[yd]:xd,[bd]:Sd,[Td]:Md,[Ed]:zs};function JA(s,t){function i(){let X=!1;const Rt=new en;let Lt=null;const Gt=new en(0,0,0,0);return{setMask:function(Tt){Lt!==Tt&&!X&&(s.colorMask(Tt,Tt,Tt,Tt),Lt=Tt)},setLocked:function(Tt){X=Tt},setClear:function(Tt,St,Vt,le,Oe){Oe===!0&&(Tt*=le,St*=le,Vt*=le),Rt.set(Tt,St,Vt,le),Gt.equals(Rt)===!1&&(s.clearColor(Tt,St,Vt,le),Gt.copy(Rt))},reset:function(){X=!1,Lt=null,Gt.set(-1,0,0,0)}}}function r(){let X=!1,Rt=!1,Lt=null,Gt=null,Tt=null;return{setReversed:function(St){if(Rt!==St){const Vt=t.get("EXT_clip_control");St?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),Rt=St;const le=Tt;Tt=null,this.setClear(le)}},getReversed:function(){return Rt},setTest:function(St){St?ct(s.DEPTH_TEST):wt(s.DEPTH_TEST)},setMask:function(St){Lt!==St&&!X&&(s.depthMask(St),Lt=St)},setFunc:function(St){if(Rt&&(St=QA[St]),Gt!==St){switch(St){case xd:s.depthFunc(s.NEVER);break;case yd:s.depthFunc(s.ALWAYS);break;case Sd:s.depthFunc(s.LESS);break;case zs:s.depthFunc(s.LEQUAL);break;case Md:s.depthFunc(s.EQUAL);break;case Ed:s.depthFunc(s.GEQUAL);break;case bd:s.depthFunc(s.GREATER);break;case Td:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Gt=St}},setLocked:function(St){X=St},setClear:function(St){Tt!==St&&(Rt&&(St=1-St),s.clearDepth(St),Tt=St)},reset:function(){X=!1,Lt=null,Gt=null,Tt=null,Rt=!1}}}function l(){let X=!1,Rt=null,Lt=null,Gt=null,Tt=null,St=null,Vt=null,le=null,Oe=null;return{setTest:function(Te){X||(Te?ct(s.STENCIL_TEST):wt(s.STENCIL_TEST))},setMask:function(Te){Rt!==Te&&!X&&(s.stencilMask(Te),Rt=Te)},setFunc:function(Te,Dn,ei){(Lt!==Te||Gt!==Dn||Tt!==ei)&&(s.stencilFunc(Te,Dn,ei),Lt=Te,Gt=Dn,Tt=ei)},setOp:function(Te,Dn,ei){(St!==Te||Vt!==Dn||le!==ei)&&(s.stencilOp(Te,Dn,ei),St=Te,Vt=Dn,le=ei)},setLocked:function(Te){X=Te},setClear:function(Te){Oe!==Te&&(s.clearStencil(Te),Oe=Te)},reset:function(){X=!1,Rt=null,Lt=null,Gt=null,Tt=null,St=null,Vt=null,le=null,Oe=null}}}const c=new i,f=new r,d=new l,m=new WeakMap,p=new WeakMap;let v={},g={},x=new WeakMap,M=[],E=null,T=!1,S=null,_=null,L=null,U=null,D=null,F=null,H=null,B=new be(0,0,0),Y=0,C=!1,w=null,G=null,rt=null,ft=null,yt=null;const K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,W=0;const k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(k)[1]),P=W>=1):k.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),P=W>=2);let _t=null,Mt={};const N=s.getParameter(s.SCISSOR_BOX),J=s.getParameter(s.VIEWPORT),vt=new en().fromArray(N),mt=new en().fromArray(J);function Ct(X,Rt,Lt,Gt){const Tt=new Uint8Array(4),St=s.createTexture();s.bindTexture(X,St),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Vt=0;Vt<Lt;Vt++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Rt,0,s.RGBA,1,1,Gt,0,s.RGBA,s.UNSIGNED_BYTE,Tt):s.texImage2D(Rt+Vt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Tt);return St}const $={};$[s.TEXTURE_2D]=Ct(s.TEXTURE_2D,s.TEXTURE_2D,1),$[s.TEXTURE_CUBE_MAP]=Ct(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[s.TEXTURE_2D_ARRAY]=Ct(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),$[s.TEXTURE_3D]=Ct(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),ct(s.DEPTH_TEST),f.setFunc(zs),jt(!1),Yt(Dv),ct(s.CULL_FACE),ae(Ka);function ct(X){v[X]!==!0&&(s.enable(X),v[X]=!0)}function wt(X){v[X]!==!1&&(s.disable(X),v[X]=!1)}function Nt(X,Rt){return g[X]!==Rt?(s.bindFramebuffer(X,Rt),g[X]=Rt,X===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Rt),X===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Rt),!0):!1}function Ot(X,Rt){let Lt=M,Gt=!1;if(X){Lt=x.get(Rt),Lt===void 0&&(Lt=[],x.set(Rt,Lt));const Tt=X.textures;if(Lt.length!==Tt.length||Lt[0]!==s.COLOR_ATTACHMENT0){for(let St=0,Vt=Tt.length;St<Vt;St++)Lt[St]=s.COLOR_ATTACHMENT0+St;Lt.length=Tt.length,Gt=!0}}else Lt[0]!==s.BACK&&(Lt[0]=s.BACK,Gt=!0);Gt&&s.drawBuffers(Lt)}function oe(X){return E!==X?(s.useProgram(X),E=X,!0):!1}const Qe={[Rr]:s.FUNC_ADD,[tE]:s.FUNC_SUBTRACT,[eE]:s.FUNC_REVERSE_SUBTRACT};Qe[nE]=s.MIN,Qe[iE]=s.MAX;const z={[aE]:s.ZERO,[rE]:s.ONE,[sE]:s.SRC_COLOR,[vd]:s.SRC_ALPHA,[hE]:s.SRC_ALPHA_SATURATE,[uE]:s.DST_COLOR,[lE]:s.DST_ALPHA,[oE]:s.ONE_MINUS_SRC_COLOR,[_d]:s.ONE_MINUS_SRC_ALPHA,[fE]:s.ONE_MINUS_DST_COLOR,[cE]:s.ONE_MINUS_DST_ALPHA,[dE]:s.CONSTANT_COLOR,[pE]:s.ONE_MINUS_CONSTANT_COLOR,[mE]:s.CONSTANT_ALPHA,[gE]:s.ONE_MINUS_CONSTANT_ALPHA};function ae(X,Rt,Lt,Gt,Tt,St,Vt,le,Oe,Te){if(X===Ka){T===!0&&(wt(s.BLEND),T=!1);return}if(T===!1&&(ct(s.BLEND),T=!0),X!==$M){if(X!==S||Te!==C){if((_!==Rr||D!==Rr)&&(s.blendEquation(s.FUNC_ADD),_=Rr,D=Rr),Te)switch(X){case Os:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Uv:s.blendFunc(s.ONE,s.ONE);break;case Lv:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Nv:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Os:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Uv:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Lv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nv:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}L=null,U=null,F=null,H=null,B.set(0,0,0),Y=0,S=X,C=Te}return}Tt=Tt||Rt,St=St||Lt,Vt=Vt||Gt,(Rt!==_||Tt!==D)&&(s.blendEquationSeparate(Qe[Rt],Qe[Tt]),_=Rt,D=Tt),(Lt!==L||Gt!==U||St!==F||Vt!==H)&&(s.blendFuncSeparate(z[Lt],z[Gt],z[St],z[Vt]),L=Lt,U=Gt,F=St,H=Vt),(le.equals(B)===!1||Oe!==Y)&&(s.blendColor(le.r,le.g,le.b,Oe),B.copy(le),Y=Oe),S=X,C=!1}function qt(X,Rt){X.side===ua?wt(s.CULL_FACE):ct(s.CULL_FACE);let Lt=X.side===Vn;Rt&&(Lt=!Lt),jt(Lt),X.blending===Os&&X.transparent===!1?ae(Ka):ae(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),c.setMask(X.colorWrite);const Gt=X.stencilWrite;d.setTest(Gt),Gt&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ht(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ct(s.SAMPLE_ALPHA_TO_COVERAGE):wt(s.SAMPLE_ALPHA_TO_COVERAGE)}function jt(X){w!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),w=X)}function Yt(X){X!==KM?(ct(s.CULL_FACE),X!==G&&(X===Dv?s.cullFace(s.BACK):X===QM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):wt(s.CULL_FACE),G=X}function Be(X){X!==rt&&(P&&s.lineWidth(X),rt=X)}function Ht(X,Rt,Lt){X?(ct(s.POLYGON_OFFSET_FILL),(ft!==Rt||yt!==Lt)&&(s.polygonOffset(Rt,Lt),ft=Rt,yt=Lt)):wt(s.POLYGON_OFFSET_FILL)}function se(X){X?ct(s.SCISSOR_TEST):wt(s.SCISSOR_TEST)}function Ye(X){X===void 0&&(X=s.TEXTURE0+K-1),_t!==X&&(s.activeTexture(X),_t=X)}function We(X,Rt,Lt){Lt===void 0&&(_t===null?Lt=s.TEXTURE0+K-1:Lt=_t);let Gt=Mt[Lt];Gt===void 0&&(Gt={type:void 0,texture:void 0},Mt[Lt]=Gt),(Gt.type!==X||Gt.texture!==Rt)&&(_t!==Lt&&(s.activeTexture(Lt),_t=Lt),s.bindTexture(X,Rt||$[X]),Gt.type=X,Gt.texture=Rt)}function O(){const X=Mt[_t];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function b(){try{s.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function nt(){try{s.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function pt(){try{s.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function bt(){try{s.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ht(){try{s.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Jt(){try{s.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Dt(){try{s.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Kt(){try{s.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Qt(){try{s.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function At(){try{s.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ut(X){vt.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),vt.copy(X))}function $t(X){mt.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),mt.copy(X))}function Ft(X,Rt){let Lt=p.get(Rt);Lt===void 0&&(Lt=new WeakMap,p.set(Rt,Lt));let Gt=Lt.get(X);Gt===void 0&&(Gt=s.getUniformBlockIndex(Rt,X.name),Lt.set(X,Gt))}function Pt(X,Rt){const Gt=p.get(Rt).get(X);m.get(Rt)!==Gt&&(s.uniformBlockBinding(Rt,Gt,X.__bindingPointIndex),m.set(Rt,Gt))}function ue(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},_t=null,Mt={},g={},x=new WeakMap,M=[],E=null,T=!1,S=null,_=null,L=null,U=null,D=null,F=null,H=null,B=new be(0,0,0),Y=0,C=!1,w=null,G=null,rt=null,ft=null,yt=null,vt.set(0,0,s.canvas.width,s.canvas.height),mt.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:ct,disable:wt,bindFramebuffer:Nt,drawBuffers:Ot,useProgram:oe,setBlending:ae,setMaterial:qt,setFlipSided:jt,setCullFace:Yt,setLineWidth:Be,setPolygonOffset:Ht,setScissorTest:se,activeTexture:Ye,bindTexture:We,unbindTexture:O,compressedTexImage2D:b,compressedTexImage3D:nt,texImage2D:Qt,texImage3D:At,updateUBOMapping:Ft,uniformBlockBinding:Pt,texStorage2D:Dt,texStorage3D:Kt,texSubImage2D:pt,texSubImage3D:bt,compressedTexSubImage2D:ht,compressedTexSubImage3D:Jt,scissor:Ut,viewport:$t,reset:ue}}function $A(s,t,i,r,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Re,v=new WeakMap;let g;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,b){return M?new OffscreenCanvas(O,b):tl("canvas")}function T(O,b,nt){let pt=1;const bt=We(O);if((bt.width>nt||bt.height>nt)&&(pt=nt/Math.max(bt.width,bt.height)),pt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ht=Math.floor(pt*bt.width),Jt=Math.floor(pt*bt.height);g===void 0&&(g=E(ht,Jt));const Dt=b?E(ht,Jt):g;return Dt.width=ht,Dt.height=Jt,Dt.getContext("2d").drawImage(O,0,0,ht,Jt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+bt.width+"x"+bt.height+") to ("+ht+"x"+Jt+")."),Dt}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+bt.width+"x"+bt.height+")."),O;return O}function S(O){return O.generateMipmaps}function _(O){s.generateMipmap(O)}function L(O){return O.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?s.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function U(O,b,nt,pt,bt=!1){if(O!==null){if(s[O]!==void 0)return s[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ht=b;if(b===s.RED&&(nt===s.FLOAT&&(ht=s.R32F),nt===s.HALF_FLOAT&&(ht=s.R16F),nt===s.UNSIGNED_BYTE&&(ht=s.R8)),b===s.RED_INTEGER&&(nt===s.UNSIGNED_BYTE&&(ht=s.R8UI),nt===s.UNSIGNED_SHORT&&(ht=s.R16UI),nt===s.UNSIGNED_INT&&(ht=s.R32UI),nt===s.BYTE&&(ht=s.R8I),nt===s.SHORT&&(ht=s.R16I),nt===s.INT&&(ht=s.R32I)),b===s.RG&&(nt===s.FLOAT&&(ht=s.RG32F),nt===s.HALF_FLOAT&&(ht=s.RG16F),nt===s.UNSIGNED_BYTE&&(ht=s.RG8)),b===s.RG_INTEGER&&(nt===s.UNSIGNED_BYTE&&(ht=s.RG8UI),nt===s.UNSIGNED_SHORT&&(ht=s.RG16UI),nt===s.UNSIGNED_INT&&(ht=s.RG32UI),nt===s.BYTE&&(ht=s.RG8I),nt===s.SHORT&&(ht=s.RG16I),nt===s.INT&&(ht=s.RG32I)),b===s.RGB_INTEGER&&(nt===s.UNSIGNED_BYTE&&(ht=s.RGB8UI),nt===s.UNSIGNED_SHORT&&(ht=s.RGB16UI),nt===s.UNSIGNED_INT&&(ht=s.RGB32UI),nt===s.BYTE&&(ht=s.RGB8I),nt===s.SHORT&&(ht=s.RGB16I),nt===s.INT&&(ht=s.RGB32I)),b===s.RGBA_INTEGER&&(nt===s.UNSIGNED_BYTE&&(ht=s.RGBA8UI),nt===s.UNSIGNED_SHORT&&(ht=s.RGBA16UI),nt===s.UNSIGNED_INT&&(ht=s.RGBA32UI),nt===s.BYTE&&(ht=s.RGBA8I),nt===s.SHORT&&(ht=s.RGBA16I),nt===s.INT&&(ht=s.RGBA32I)),b===s.RGB&&(nt===s.UNSIGNED_INT_5_9_9_9_REV&&(ht=s.RGB9_E5),nt===s.UNSIGNED_INT_10F_11F_11F_REV&&(ht=s.R11F_G11F_B10F)),b===s.RGBA){const Jt=bt?su:De.getTransfer(pt);nt===s.FLOAT&&(ht=s.RGBA32F),nt===s.HALF_FLOAT&&(ht=s.RGBA16F),nt===s.UNSIGNED_BYTE&&(ht=Jt===Ge?s.SRGB8_ALPHA8:s.RGBA8),nt===s.UNSIGNED_SHORT_4_4_4_4&&(ht=s.RGBA4),nt===s.UNSIGNED_SHORT_5_5_5_1&&(ht=s.RGB5_A1)}return(ht===s.R16F||ht===s.R32F||ht===s.RG16F||ht===s.RG32F||ht===s.RGBA16F||ht===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function D(O,b){let nt;return O?b===null||b===Lr||b===Qo?nt=s.DEPTH24_STENCIL8:b===fa?nt=s.DEPTH32F_STENCIL8:b===Ko&&(nt=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Lr||b===Qo?nt=s.DEPTH_COMPONENT24:b===fa?nt=s.DEPTH_COMPONENT32F:b===Ko&&(nt=s.DEPTH_COMPONENT16),nt}function F(O,b){return S(O)===!0||O.isFramebufferTexture&&O.minFilter!==Mi&&O.minFilter!==Ni?Math.log2(Math.max(b.width,b.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?b.mipmaps.length:1}function H(O){const b=O.target;b.removeEventListener("dispose",H),Y(b),b.isVideoTexture&&v.delete(b)}function B(O){const b=O.target;b.removeEventListener("dispose",B),w(b)}function Y(O){const b=r.get(O);if(b.__webglInit===void 0)return;const nt=O.source,pt=x.get(nt);if(pt){const bt=pt[b.__cacheKey];bt.usedTimes--,bt.usedTimes===0&&C(O),Object.keys(pt).length===0&&x.delete(nt)}r.remove(O)}function C(O){const b=r.get(O);s.deleteTexture(b.__webglTexture);const nt=O.source,pt=x.get(nt);delete pt[b.__cacheKey],f.memory.textures--}function w(O){const b=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(b.__webglFramebuffer[pt]))for(let bt=0;bt<b.__webglFramebuffer[pt].length;bt++)s.deleteFramebuffer(b.__webglFramebuffer[pt][bt]);else s.deleteFramebuffer(b.__webglFramebuffer[pt]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[pt])}else{if(Array.isArray(b.__webglFramebuffer))for(let pt=0;pt<b.__webglFramebuffer.length;pt++)s.deleteFramebuffer(b.__webglFramebuffer[pt]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let pt=0;pt<b.__webglColorRenderbuffer.length;pt++)b.__webglColorRenderbuffer[pt]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[pt]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const nt=O.textures;for(let pt=0,bt=nt.length;pt<bt;pt++){const ht=r.get(nt[pt]);ht.__webglTexture&&(s.deleteTexture(ht.__webglTexture),f.memory.textures--),r.remove(nt[pt])}r.remove(O)}let G=0;function rt(){G=0}function ft(){const O=G;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),G+=1,O}function yt(O){const b=[];return b.push(O.wrapS),b.push(O.wrapT),b.push(O.wrapR||0),b.push(O.magFilter),b.push(O.minFilter),b.push(O.anisotropy),b.push(O.internalFormat),b.push(O.format),b.push(O.type),b.push(O.generateMipmaps),b.push(O.premultiplyAlpha),b.push(O.flipY),b.push(O.unpackAlignment),b.push(O.colorSpace),b.join()}function K(O,b){const nt=r.get(O);if(O.isVideoTexture&&se(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&nt.__version!==O.version){const pt=O.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(nt,O,b);return}}else O.isExternalTexture&&(nt.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,nt.__webglTexture,s.TEXTURE0+b)}function P(O,b){const nt=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&nt.__version!==O.version){$(nt,O,b);return}i.bindTexture(s.TEXTURE_2D_ARRAY,nt.__webglTexture,s.TEXTURE0+b)}function W(O,b){const nt=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&nt.__version!==O.version){$(nt,O,b);return}i.bindTexture(s.TEXTURE_3D,nt.__webglTexture,s.TEXTURE0+b)}function k(O,b){const nt=r.get(O);if(O.version>0&&nt.__version!==O.version){ct(nt,O,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,nt.__webglTexture,s.TEXTURE0+b)}const _t={[Cd]:s.REPEAT,[wr]:s.CLAMP_TO_EDGE,[wd]:s.MIRRORED_REPEAT},Mt={[Mi]:s.NEAREST,[AE]:s.NEAREST_MIPMAP_NEAREST,[bc]:s.NEAREST_MIPMAP_LINEAR,[Ni]:s.LINEAR,[Oh]:s.LINEAR_MIPMAP_NEAREST,[Dr]:s.LINEAR_MIPMAP_LINEAR},N={[DE]:s.NEVER,[zE]:s.ALWAYS,[UE]:s.LESS,[m1]:s.LEQUAL,[LE]:s.EQUAL,[PE]:s.GEQUAL,[NE]:s.GREATER,[OE]:s.NOTEQUAL};function J(O,b){if(b.type===fa&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ni||b.magFilter===Oh||b.magFilter===bc||b.magFilter===Dr||b.minFilter===Ni||b.minFilter===Oh||b.minFilter===bc||b.minFilter===Dr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(O,s.TEXTURE_WRAP_S,_t[b.wrapS]),s.texParameteri(O,s.TEXTURE_WRAP_T,_t[b.wrapT]),(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)&&s.texParameteri(O,s.TEXTURE_WRAP_R,_t[b.wrapR]),s.texParameteri(O,s.TEXTURE_MAG_FILTER,Mt[b.magFilter]),s.texParameteri(O,s.TEXTURE_MIN_FILTER,Mt[b.minFilter]),b.compareFunction&&(s.texParameteri(O,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(O,s.TEXTURE_COMPARE_FUNC,N[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Mi||b.minFilter!==bc&&b.minFilter!==Dr||b.type===fa&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const nt=t.get("EXT_texture_filter_anisotropic");s.texParameterf(O,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function vt(O,b){let nt=!1;O.__webglInit===void 0&&(O.__webglInit=!0,b.addEventListener("dispose",H));const pt=b.source;let bt=x.get(pt);bt===void 0&&(bt={},x.set(pt,bt));const ht=yt(b);if(ht!==O.__cacheKey){bt[ht]===void 0&&(bt[ht]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,nt=!0),bt[ht].usedTimes++;const Jt=bt[O.__cacheKey];Jt!==void 0&&(bt[O.__cacheKey].usedTimes--,Jt.usedTimes===0&&C(b)),O.__cacheKey=ht,O.__webglTexture=bt[ht].texture}return nt}function mt(O,b,nt){return Math.floor(Math.floor(O/nt)/b)}function Ct(O,b,nt,pt){const ht=O.updateRanges;if(ht.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,nt,pt,b.data);else{ht.sort((At,Ut)=>At.start-Ut.start);let Jt=0;for(let At=1;At<ht.length;At++){const Ut=ht[Jt],$t=ht[At],Ft=Ut.start+Ut.count,Pt=mt($t.start,b.width,4),ue=mt(Ut.start,b.width,4);$t.start<=Ft+1&&Pt===ue&&mt($t.start+$t.count-1,b.width,4)===Pt?Ut.count=Math.max(Ut.count,$t.start+$t.count-Ut.start):(++Jt,ht[Jt]=$t)}ht.length=Jt+1;const Dt=s.getParameter(s.UNPACK_ROW_LENGTH),Kt=s.getParameter(s.UNPACK_SKIP_PIXELS),Qt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let At=0,Ut=ht.length;At<Ut;At++){const $t=ht[At],Ft=Math.floor($t.start/4),Pt=Math.ceil($t.count/4),ue=Ft%b.width,X=Math.floor(Ft/b.width),Rt=Pt,Lt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ue),s.pixelStorei(s.UNPACK_SKIP_ROWS,X),i.texSubImage2D(s.TEXTURE_2D,0,ue,X,Rt,Lt,nt,pt,b.data)}O.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Dt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Kt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Qt)}}function $(O,b,nt){let pt=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(pt=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(pt=s.TEXTURE_3D);const bt=vt(O,b),ht=b.source;i.bindTexture(pt,O.__webglTexture,s.TEXTURE0+nt);const Jt=r.get(ht);if(ht.version!==Jt.__version||bt===!0){i.activeTexture(s.TEXTURE0+nt);const Dt=De.getPrimaries(De.workingColorSpace),Kt=b.colorSpace===Ya?null:De.getPrimaries(b.colorSpace),Qt=b.colorSpace===Ya||Dt===Kt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let At=T(b.image,!1,l.maxTextureSize);At=Ye(b,At);const Ut=c.convert(b.format,b.colorSpace),$t=c.convert(b.type);let Ft=U(b.internalFormat,Ut,$t,b.colorSpace,b.isVideoTexture);J(pt,b);let Pt;const ue=b.mipmaps,X=b.isVideoTexture!==!0,Rt=Jt.__version===void 0||bt===!0,Lt=ht.dataReady,Gt=F(b,At);if(b.isDepthTexture)Ft=D(b.format===$o,b.type),Rt&&(X?i.texStorage2D(s.TEXTURE_2D,1,Ft,At.width,At.height):i.texImage2D(s.TEXTURE_2D,0,Ft,At.width,At.height,0,Ut,$t,null));else if(b.isDataTexture)if(ue.length>0){X&&Rt&&i.texStorage2D(s.TEXTURE_2D,Gt,Ft,ue[0].width,ue[0].height);for(let Tt=0,St=ue.length;Tt<St;Tt++)Pt=ue[Tt],X?Lt&&i.texSubImage2D(s.TEXTURE_2D,Tt,0,0,Pt.width,Pt.height,Ut,$t,Pt.data):i.texImage2D(s.TEXTURE_2D,Tt,Ft,Pt.width,Pt.height,0,Ut,$t,Pt.data);b.generateMipmaps=!1}else X?(Rt&&i.texStorage2D(s.TEXTURE_2D,Gt,Ft,At.width,At.height),Lt&&Ct(b,At,Ut,$t)):i.texImage2D(s.TEXTURE_2D,0,Ft,At.width,At.height,0,Ut,$t,At.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){X&&Rt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Gt,Ft,ue[0].width,ue[0].height,At.depth);for(let Tt=0,St=ue.length;Tt<St;Tt++)if(Pt=ue[Tt],b.format!==Si)if(Ut!==null)if(X){if(Lt)if(b.layerUpdates.size>0){const Vt=f_(Pt.width,Pt.height,b.format,b.type);for(const le of b.layerUpdates){const Oe=Pt.data.subarray(le*Vt/Pt.data.BYTES_PER_ELEMENT,(le+1)*Vt/Pt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Tt,0,0,le,Pt.width,Pt.height,1,Ut,Oe)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Tt,0,0,0,Pt.width,Pt.height,At.depth,Ut,Pt.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Tt,Ft,Pt.width,Pt.height,At.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Lt&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Tt,0,0,0,Pt.width,Pt.height,At.depth,Ut,$t,Pt.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Tt,Ft,Pt.width,Pt.height,At.depth,0,Ut,$t,Pt.data)}else{X&&Rt&&i.texStorage2D(s.TEXTURE_2D,Gt,Ft,ue[0].width,ue[0].height);for(let Tt=0,St=ue.length;Tt<St;Tt++)Pt=ue[Tt],b.format!==Si?Ut!==null?X?Lt&&i.compressedTexSubImage2D(s.TEXTURE_2D,Tt,0,0,Pt.width,Pt.height,Ut,Pt.data):i.compressedTexImage2D(s.TEXTURE_2D,Tt,Ft,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Lt&&i.texSubImage2D(s.TEXTURE_2D,Tt,0,0,Pt.width,Pt.height,Ut,$t,Pt.data):i.texImage2D(s.TEXTURE_2D,Tt,Ft,Pt.width,Pt.height,0,Ut,$t,Pt.data)}else if(b.isDataArrayTexture)if(X){if(Rt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Gt,Ft,At.width,At.height,At.depth),Lt)if(b.layerUpdates.size>0){const Tt=f_(At.width,At.height,b.format,b.type);for(const St of b.layerUpdates){const Vt=At.data.subarray(St*Tt/At.data.BYTES_PER_ELEMENT,(St+1)*Tt/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,St,At.width,At.height,1,Ut,$t,Vt)}b.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Ut,$t,At.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Ft,At.width,At.height,At.depth,0,Ut,$t,At.data);else if(b.isData3DTexture)X?(Rt&&i.texStorage3D(s.TEXTURE_3D,Gt,Ft,At.width,At.height,At.depth),Lt&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Ut,$t,At.data)):i.texImage3D(s.TEXTURE_3D,0,Ft,At.width,At.height,At.depth,0,Ut,$t,At.data);else if(b.isFramebufferTexture){if(Rt)if(X)i.texStorage2D(s.TEXTURE_2D,Gt,Ft,At.width,At.height);else{let Tt=At.width,St=At.height;for(let Vt=0;Vt<Gt;Vt++)i.texImage2D(s.TEXTURE_2D,Vt,Ft,Tt,St,0,Ut,$t,null),Tt>>=1,St>>=1}}else if(ue.length>0){if(X&&Rt){const Tt=We(ue[0]);i.texStorage2D(s.TEXTURE_2D,Gt,Ft,Tt.width,Tt.height)}for(let Tt=0,St=ue.length;Tt<St;Tt++)Pt=ue[Tt],X?Lt&&i.texSubImage2D(s.TEXTURE_2D,Tt,0,0,Ut,$t,Pt):i.texImage2D(s.TEXTURE_2D,Tt,Ft,Ut,$t,Pt);b.generateMipmaps=!1}else if(X){if(Rt){const Tt=We(At);i.texStorage2D(s.TEXTURE_2D,Gt,Ft,Tt.width,Tt.height)}Lt&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ut,$t,At)}else i.texImage2D(s.TEXTURE_2D,0,Ft,Ut,$t,At);S(b)&&_(pt),Jt.__version=ht.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function ct(O,b,nt){if(b.image.length!==6)return;const pt=vt(O,b),bt=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+nt);const ht=r.get(bt);if(bt.version!==ht.__version||pt===!0){i.activeTexture(s.TEXTURE0+nt);const Jt=De.getPrimaries(De.workingColorSpace),Dt=b.colorSpace===Ya?null:De.getPrimaries(b.colorSpace),Kt=b.colorSpace===Ya||Jt===Dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);const Qt=b.isCompressedTexture||b.image[0].isCompressedTexture,At=b.image[0]&&b.image[0].isDataTexture,Ut=[];for(let St=0;St<6;St++)!Qt&&!At?Ut[St]=T(b.image[St],!0,l.maxCubemapSize):Ut[St]=At?b.image[St].image:b.image[St],Ut[St]=Ye(b,Ut[St]);const $t=Ut[0],Ft=c.convert(b.format,b.colorSpace),Pt=c.convert(b.type),ue=U(b.internalFormat,Ft,Pt,b.colorSpace),X=b.isVideoTexture!==!0,Rt=ht.__version===void 0||pt===!0,Lt=bt.dataReady;let Gt=F(b,$t);J(s.TEXTURE_CUBE_MAP,b);let Tt;if(Qt){X&&Rt&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Gt,ue,$t.width,$t.height);for(let St=0;St<6;St++){Tt=Ut[St].mipmaps;for(let Vt=0;Vt<Tt.length;Vt++){const le=Tt[Vt];b.format!==Si?Ft!==null?X?Lt&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Vt,0,0,le.width,le.height,Ft,le.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Vt,ue,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Lt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Vt,0,0,le.width,le.height,Ft,Pt,le.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Vt,ue,le.width,le.height,0,Ft,Pt,le.data)}}}else{if(Tt=b.mipmaps,X&&Rt){Tt.length>0&&Gt++;const St=We(Ut[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Gt,ue,St.width,St.height)}for(let St=0;St<6;St++)if(At){X?Lt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Ut[St].width,Ut[St].height,Ft,Pt,Ut[St].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ue,Ut[St].width,Ut[St].height,0,Ft,Pt,Ut[St].data);for(let Vt=0;Vt<Tt.length;Vt++){const Oe=Tt[Vt].image[St].image;X?Lt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Vt+1,0,0,Oe.width,Oe.height,Ft,Pt,Oe.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Vt+1,ue,Oe.width,Oe.height,0,Ft,Pt,Oe.data)}}else{X?Lt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Ft,Pt,Ut[St]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ue,Ft,Pt,Ut[St]);for(let Vt=0;Vt<Tt.length;Vt++){const le=Tt[Vt];X?Lt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Vt+1,0,0,Ft,Pt,le.image[St]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Vt+1,ue,Ft,Pt,le.image[St])}}}S(b)&&_(s.TEXTURE_CUBE_MAP),ht.__version=bt.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function wt(O,b,nt,pt,bt,ht){const Jt=c.convert(nt.format,nt.colorSpace),Dt=c.convert(nt.type),Kt=U(nt.internalFormat,Jt,Dt,nt.colorSpace),Qt=r.get(b),At=r.get(nt);if(At.__renderTarget=b,!Qt.__hasExternalTextures){const Ut=Math.max(1,b.width>>ht),$t=Math.max(1,b.height>>ht);bt===s.TEXTURE_3D||bt===s.TEXTURE_2D_ARRAY?i.texImage3D(bt,ht,Kt,Ut,$t,b.depth,0,Jt,Dt,null):i.texImage2D(bt,ht,Kt,Ut,$t,0,Jt,Dt,null)}i.bindFramebuffer(s.FRAMEBUFFER,O),Ht(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pt,bt,At.__webglTexture,0,Be(b)):(bt===s.TEXTURE_2D||bt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&bt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pt,bt,At.__webglTexture,ht),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Nt(O,b,nt){if(s.bindRenderbuffer(s.RENDERBUFFER,O),b.depthBuffer){const pt=b.depthTexture,bt=pt&&pt.isDepthTexture?pt.type:null,ht=D(b.stencilBuffer,bt),Jt=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Dt=Be(b);Ht(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Dt,ht,b.width,b.height):nt?s.renderbufferStorageMultisample(s.RENDERBUFFER,Dt,ht,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ht,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Jt,s.RENDERBUFFER,O)}else{const pt=b.textures;for(let bt=0;bt<pt.length;bt++){const ht=pt[bt],Jt=c.convert(ht.format,ht.colorSpace),Dt=c.convert(ht.type),Kt=U(ht.internalFormat,Jt,Dt,ht.colorSpace),Qt=Be(b);nt&&Ht(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Qt,Kt,b.width,b.height):Ht(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Qt,Kt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Kt,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ot(O,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,O),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=r.get(b.depthTexture);pt.__renderTarget=b,(!pt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),K(b.depthTexture,0);const bt=pt.__webglTexture,ht=Be(b);if(b.depthTexture.format===Jo)Ht(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,bt,0,ht):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,bt,0);else if(b.depthTexture.format===$o)Ht(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,bt,0,ht):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,bt,0);else throw new Error("Unknown depthTexture format")}function oe(O){const b=r.get(O),nt=O.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==O.depthTexture){const pt=O.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),pt){const bt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,pt.removeEventListener("dispose",bt)};pt.addEventListener("dispose",bt),b.__depthDisposeCallback=bt}b.__boundDepthTexture=pt}if(O.depthTexture&&!b.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");const pt=O.texture.mipmaps;pt&&pt.length>0?Ot(b.__webglFramebuffer[0],O):Ot(b.__webglFramebuffer,O)}else if(nt){b.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[pt]),b.__webglDepthbuffer[pt]===void 0)b.__webglDepthbuffer[pt]=s.createRenderbuffer(),Nt(b.__webglDepthbuffer[pt],O,!1);else{const bt=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=b.__webglDepthbuffer[pt];s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,bt,s.RENDERBUFFER,ht)}}else{const pt=O.texture.mipmaps;if(pt&&pt.length>0?i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Nt(b.__webglDepthbuffer,O,!1);else{const bt=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,bt,s.RENDERBUFFER,ht)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Qe(O,b,nt){const pt=r.get(O);b!==void 0&&wt(pt.__webglFramebuffer,O,O.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),nt!==void 0&&oe(O)}function z(O){const b=O.texture,nt=r.get(O),pt=r.get(b);O.addEventListener("dispose",B);const bt=O.textures,ht=O.isWebGLCubeRenderTarget===!0,Jt=bt.length>1;if(Jt||(pt.__webglTexture===void 0&&(pt.__webglTexture=s.createTexture()),pt.__version=b.version,f.memory.textures++),ht){nt.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(b.mipmaps&&b.mipmaps.length>0){nt.__webglFramebuffer[Dt]=[];for(let Kt=0;Kt<b.mipmaps.length;Kt++)nt.__webglFramebuffer[Dt][Kt]=s.createFramebuffer()}else nt.__webglFramebuffer[Dt]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){nt.__webglFramebuffer=[];for(let Dt=0;Dt<b.mipmaps.length;Dt++)nt.__webglFramebuffer[Dt]=s.createFramebuffer()}else nt.__webglFramebuffer=s.createFramebuffer();if(Jt)for(let Dt=0,Kt=bt.length;Dt<Kt;Dt++){const Qt=r.get(bt[Dt]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=s.createTexture(),f.memory.textures++)}if(O.samples>0&&Ht(O)===!1){nt.__webglMultisampledFramebuffer=s.createFramebuffer(),nt.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let Dt=0;Dt<bt.length;Dt++){const Kt=bt[Dt];nt.__webglColorRenderbuffer[Dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,nt.__webglColorRenderbuffer[Dt]);const Qt=c.convert(Kt.format,Kt.colorSpace),At=c.convert(Kt.type),Ut=U(Kt.internalFormat,Qt,At,Kt.colorSpace,O.isXRRenderTarget===!0),$t=Be(O);s.renderbufferStorageMultisample(s.RENDERBUFFER,$t,Ut,O.width,O.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Dt,s.RENDERBUFFER,nt.__webglColorRenderbuffer[Dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),O.depthBuffer&&(nt.__webglDepthRenderbuffer=s.createRenderbuffer(),Nt(nt.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ht){i.bindTexture(s.TEXTURE_CUBE_MAP,pt.__webglTexture),J(s.TEXTURE_CUBE_MAP,b);for(let Dt=0;Dt<6;Dt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Kt=0;Kt<b.mipmaps.length;Kt++)wt(nt.__webglFramebuffer[Dt][Kt],O,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Kt);else wt(nt.__webglFramebuffer[Dt],O,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);S(b)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Jt){for(let Dt=0,Kt=bt.length;Dt<Kt;Dt++){const Qt=bt[Dt],At=r.get(Qt);let Ut=s.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ut=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ut,At.__webglTexture),J(Ut,Qt),wt(nt.__webglFramebuffer,O,Qt,s.COLOR_ATTACHMENT0+Dt,Ut,0),S(Qt)&&_(Ut)}i.unbindTexture()}else{let Dt=s.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Dt=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Dt,pt.__webglTexture),J(Dt,b),b.mipmaps&&b.mipmaps.length>0)for(let Kt=0;Kt<b.mipmaps.length;Kt++)wt(nt.__webglFramebuffer[Kt],O,b,s.COLOR_ATTACHMENT0,Dt,Kt);else wt(nt.__webglFramebuffer,O,b,s.COLOR_ATTACHMENT0,Dt,0);S(b)&&_(Dt),i.unbindTexture()}O.depthBuffer&&oe(O)}function ae(O){const b=O.textures;for(let nt=0,pt=b.length;nt<pt;nt++){const bt=b[nt];if(S(bt)){const ht=L(O),Jt=r.get(bt).__webglTexture;i.bindTexture(ht,Jt),_(ht),i.unbindTexture()}}}const qt=[],jt=[];function Yt(O){if(O.samples>0){if(Ht(O)===!1){const b=O.textures,nt=O.width,pt=O.height;let bt=s.COLOR_BUFFER_BIT;const ht=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Jt=r.get(O),Dt=b.length>1;if(Dt)for(let Qt=0;Qt<b.length;Qt++)i.bindFramebuffer(s.FRAMEBUFFER,Jt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Jt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Jt.__webglMultisampledFramebuffer);const Kt=O.texture.mipmaps;Kt&&Kt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Jt.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Jt.__webglFramebuffer);for(let Qt=0;Qt<b.length;Qt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(bt|=s.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(bt|=s.STENCIL_BUFFER_BIT)),Dt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Jt.__webglColorRenderbuffer[Qt]);const At=r.get(b[Qt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,At,0)}s.blitFramebuffer(0,0,nt,pt,0,0,nt,pt,bt,s.NEAREST),m===!0&&(qt.length=0,jt.length=0,qt.push(s.COLOR_ATTACHMENT0+Qt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(qt.push(ht),jt.push(ht),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,jt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,qt))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Dt)for(let Qt=0;Qt<b.length;Qt++){i.bindFramebuffer(s.FRAMEBUFFER,Jt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qt,s.RENDERBUFFER,Jt.__webglColorRenderbuffer[Qt]);const At=r.get(b[Qt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Jt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qt,s.TEXTURE_2D,At,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Jt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const b=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Be(O){return Math.min(l.maxSamples,O.samples)}function Ht(O){const b=r.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function se(O){const b=f.render.frame;v.get(O)!==b&&(v.set(O,b),O.update())}function Ye(O,b){const nt=O.colorSpace,pt=O.format,bt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||nt!==Fs&&nt!==Ya&&(De.getTransfer(nt)===Ge?(pt!==Si||bt!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),b}function We(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=ft,this.resetTextureUnits=rt,this.setTexture2D=K,this.setTexture2DArray=P,this.setTexture3D=W,this.setTextureCube=k,this.rebindTextures=Qe,this.setupRenderTarget=z,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=Yt,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Ht}function tR(s,t){function i(r,l=Ya){let c;const f=De.getTransfer(l);if(r===Pi)return s.UNSIGNED_BYTE;if(r===xp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===yp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===l1)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===c1)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===s1)return s.BYTE;if(r===o1)return s.SHORT;if(r===Ko)return s.UNSIGNED_SHORT;if(r===_p)return s.INT;if(r===Lr)return s.UNSIGNED_INT;if(r===fa)return s.FLOAT;if(r===sl)return s.HALF_FLOAT;if(r===u1)return s.ALPHA;if(r===f1)return s.RGB;if(r===Si)return s.RGBA;if(r===Jo)return s.DEPTH_COMPONENT;if(r===$o)return s.DEPTH_STENCIL;if(r===h1)return s.RED;if(r===Sp)return s.RED_INTEGER;if(r===d1)return s.RG;if(r===Mp)return s.RG_INTEGER;if(r===Ep)return s.RGBA_INTEGER;if(r===Jc||r===$c||r===tu||r===eu)if(f===Ge)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Jc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Jc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===$c)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===tu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===eu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Dd||r===Ud||r===Ld||r===Nd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Dd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ud)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ld)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Nd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Od||r===Pd||r===zd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Od||r===Pd)return f===Ge?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===zd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Bd||r===Id||r===Fd||r===Hd||r===Gd||r===Vd||r===kd||r===Xd||r===Wd||r===qd||r===jd||r===Yd||r===Zd||r===Kd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Bd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Id)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Fd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Hd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Gd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Vd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===kd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Xd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Wd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===qd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===jd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Yd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Zd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Kd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Qd||r===Jd||r===$d)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===Qd)return f===Ge?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Jd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===$d)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===tp||r===ep||r===np||r===ip)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===tp)return c.COMPRESSED_RED_RGTC1_EXT;if(r===ep)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===np)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ip)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Qo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const eR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nR=`
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

}`;class iR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new R1(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Ja({vertexShader:eR,fragmentShader:nR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ti(new mu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class aR extends ks{constructor(t,i){super();const r=this;let l=null,c=1,f=null,d="local-floor",m=1,p=null,v=null,g=null,x=null,M=null,E=null;const T=typeof XRWebGLBinding<"u",S=new iR,_={},L=i.getContextAttributes();let U=null,D=null;const F=[],H=[],B=new Re;let Y=null;const C=new hi;C.viewport=new en;const w=new hi;w.viewport=new en;const G=[C,w],rt=new T2;let ft=null,yt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ct=F[$];return ct===void 0&&(ct=new id,F[$]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function($){let ct=F[$];return ct===void 0&&(ct=new id,F[$]=ct),ct.getGripSpace()},this.getHand=function($){let ct=F[$];return ct===void 0&&(ct=new id,F[$]=ct),ct.getHandSpace()};function K($){const ct=H.indexOf($.inputSource);if(ct===-1)return;const wt=F[ct];wt!==void 0&&(wt.update($.inputSource,$.frame,p||f),wt.dispatchEvent({type:$.type,data:$.inputSource}))}function P(){l.removeEventListener("select",K),l.removeEventListener("selectstart",K),l.removeEventListener("selectend",K),l.removeEventListener("squeeze",K),l.removeEventListener("squeezestart",K),l.removeEventListener("squeezeend",K),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",W);for(let $=0;$<F.length;$++){const ct=H[$];ct!==null&&(H[$]=null,F[$].disconnect(ct))}ft=null,yt=null,S.reset();for(const $ in _)delete _[$];t.setRenderTarget(U),M=null,x=null,g=null,l=null,D=null,Ct.stop(),r.isPresenting=!1,t.setPixelRatio(Y),t.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){c=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){d=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function($){p=$},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return g===null&&T&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function($){if(l=$,l!==null){if(U=t.getRenderTarget(),l.addEventListener("select",K),l.addEventListener("selectstart",K),l.addEventListener("selectend",K),l.addEventListener("squeeze",K),l.addEventListener("squeezestart",K),l.addEventListener("squeezeend",K),l.addEventListener("end",P),l.addEventListener("inputsourceschange",W),L.xrCompatible!==!0&&await i.makeXRCompatible(),Y=t.getPixelRatio(),t.getSize(B),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Nt=null,Ot=null;L.depth&&(Ot=L.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,wt=L.stencil?$o:Jo,Nt=L.stencil?Qo:Lr);const oe={colorFormat:i.RGBA8,depthFormat:Ot,scaleFactor:c};g=this.getBinding(),x=g.createProjectionLayer(oe),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),D=new Nr(x.textureWidth,x.textureHeight,{format:Si,type:Pi,depthTexture:new A1(x.textureWidth,x.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:L.stencil,colorSpace:t.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const wt={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,wt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new Nr(M.framebufferWidth,M.framebufferHeight,{format:Si,type:Pi,colorSpace:t.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),Ct.setContext(l),Ct.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function W($){for(let ct=0;ct<$.removed.length;ct++){const wt=$.removed[ct],Nt=H.indexOf(wt);Nt>=0&&(H[Nt]=null,F[Nt].disconnect(wt))}for(let ct=0;ct<$.added.length;ct++){const wt=$.added[ct];let Nt=H.indexOf(wt);if(Nt===-1){for(let oe=0;oe<F.length;oe++)if(oe>=H.length){H.push(wt),Nt=oe;break}else if(H[oe]===null){H[oe]=wt,Nt=oe;break}if(Nt===-1)break}const Ot=F[Nt];Ot&&Ot.connect(wt)}}const k=new at,_t=new at;function Mt($,ct,wt){k.setFromMatrixPosition(ct.matrixWorld),_t.setFromMatrixPosition(wt.matrixWorld);const Nt=k.distanceTo(_t),Ot=ct.projectionMatrix.elements,oe=wt.projectionMatrix.elements,Qe=Ot[14]/(Ot[10]-1),z=Ot[14]/(Ot[10]+1),ae=(Ot[9]+1)/Ot[5],qt=(Ot[9]-1)/Ot[5],jt=(Ot[8]-1)/Ot[0],Yt=(oe[8]+1)/oe[0],Be=Qe*jt,Ht=Qe*Yt,se=Nt/(-jt+Yt),Ye=se*-jt;if(ct.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ye),$.translateZ(se),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ot[10]===-1)$.projectionMatrix.copy(ct.projectionMatrix),$.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const We=Qe+se,O=z+se,b=Be-Ye,nt=Ht+(Nt-Ye),pt=ae*z/O*We,bt=qt*z/O*We;$.projectionMatrix.makePerspective(b,nt,pt,bt,We,O),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function N($,ct){ct===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ct.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(l===null)return;let ct=$.near,wt=$.far;S.texture!==null&&(S.depthNear>0&&(ct=S.depthNear),S.depthFar>0&&(wt=S.depthFar)),rt.near=w.near=C.near=ct,rt.far=w.far=C.far=wt,(ft!==rt.near||yt!==rt.far)&&(l.updateRenderState({depthNear:rt.near,depthFar:rt.far}),ft=rt.near,yt=rt.far),rt.layers.mask=$.layers.mask|6,C.layers.mask=rt.layers.mask&3,w.layers.mask=rt.layers.mask&5;const Nt=$.parent,Ot=rt.cameras;N(rt,Nt);for(let oe=0;oe<Ot.length;oe++)N(Ot[oe],Nt);Ot.length===2?Mt(rt,C,w):rt.projectionMatrix.copy(C.projectionMatrix),J($,rt,Nt)};function J($,ct,wt){wt===null?$.matrix.copy(ct.matrixWorld):($.matrix.copy(wt.matrixWorld),$.matrix.invert(),$.matrix.multiply(ct.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ct.projectionMatrix),$.projectionMatrixInverse.copy(ct.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ap*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return rt},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function($){m=$,x!==null&&(x.fixedFoveation=$),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=$)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(rt)},this.getCameraTexture=function($){return _[$]};let vt=null;function mt($,ct){if(v=ct.getViewerPose(p||f),E=ct,v!==null){const wt=v.views;M!==null&&(t.setRenderTargetFramebuffer(D,M.framebuffer),t.setRenderTarget(D));let Nt=!1;wt.length!==rt.cameras.length&&(rt.cameras.length=0,Nt=!0);for(let z=0;z<wt.length;z++){const ae=wt[z];let qt=null;if(M!==null)qt=M.getViewport(ae);else{const Yt=g.getViewSubImage(x,ae);qt=Yt.viewport,z===0&&(t.setRenderTargetTextures(D,Yt.colorTexture,Yt.depthStencilTexture),t.setRenderTarget(D))}let jt=G[z];jt===void 0&&(jt=new hi,jt.layers.enable(z),jt.viewport=new en,G[z]=jt),jt.matrix.fromArray(ae.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(ae.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(qt.x,qt.y,qt.width,qt.height),z===0&&(rt.matrix.copy(jt.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale)),Nt===!0&&rt.cameras.push(jt)}const Ot=l.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){g=r.getBinding();const z=g.getDepthInformation(wt[0]);z&&z.isValid&&z.texture&&S.init(z,l.renderState)}if(Ot&&Ot.includes("camera-access")&&T){t.state.unbindTexture(),g=r.getBinding();for(let z=0;z<wt.length;z++){const ae=wt[z].camera;if(ae){let qt=_[ae];qt||(qt=new R1,_[ae]=qt);const jt=g.getCameraImage(ae);qt.sourceTexture=jt}}}}for(let wt=0;wt<F.length;wt++){const Nt=H[wt],Ot=F[wt];Nt!==null&&Ot!==void 0&&Ot.update(Nt,ct,p||f)}vt&&vt($,ct),ct.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ct}),E=null}const Ct=new D1;Ct.setAnimationLoop(mt),this.setAnimationLoop=function($){vt=$},this.dispose=function(){}}}const br=new zi,rR=new Ke;function sR(s,t){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,S1(s)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,L,U,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(S,_):_.isMeshToonMaterial?(c(S,_),g(S,_)):_.isMeshPhongMaterial?(c(S,_),v(S,_)):_.isMeshStandardMaterial?(c(S,_),x(S,_),_.isMeshPhysicalMaterial&&M(S,_,D)):_.isMeshMatcapMaterial?(c(S,_),E(S,_)):_.isMeshDepthMaterial?c(S,_):_.isMeshDistanceMaterial?(c(S,_),T(S,_)):_.isMeshNormalMaterial?c(S,_):_.isLineBasicMaterial?(f(S,_),_.isLineDashedMaterial&&d(S,_)):_.isPointsMaterial?m(S,_,L,U):_.isSpriteMaterial?p(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Vn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Vn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const L=t.get(_),U=L.envMap,D=L.envMapRotation;U&&(S.envMap.value=U,br.copy(D),br.x*=-1,br.y*=-1,br.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),S.envMapRotation.value.setFromMatrix4(rR.makeRotationFromEuler(br)),S.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function f(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function d(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function m(S,_,L,U){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*L,S.scale.value=U*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function v(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function g(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function x(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function M(S,_,L){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Vn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,_){_.matcap&&(S.matcap.value=_.matcap)}function T(S,_){const L=t.get(_).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function oR(s,t,i,r){let l={},c={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,U){const D=U.program;r.uniformBlockBinding(L,D)}function p(L,U){let D=l[L.id];D===void 0&&(E(L),D=v(L),l[L.id]=D,L.addEventListener("dispose",S));const F=U.program;r.updateUBOMapping(L,F);const H=t.render.frame;c[L.id]!==H&&(x(L),c[L.id]=H)}function v(L){const U=g();L.__bindingPointIndex=U;const D=s.createBuffer(),F=L.__size,H=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,D),s.bufferData(s.UNIFORM_BUFFER,F,H),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,U,D),D}function g(){for(let L=0;L<d;L++)if(f.indexOf(L)===-1)return f.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const U=l[L.id],D=L.uniforms,F=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,U);for(let H=0,B=D.length;H<B;H++){const Y=Array.isArray(D[H])?D[H]:[D[H]];for(let C=0,w=Y.length;C<w;C++){const G=Y[C];if(M(G,H,C,F)===!0){const rt=G.__offset,ft=Array.isArray(G.value)?G.value:[G.value];let yt=0;for(let K=0;K<ft.length;K++){const P=ft[K],W=T(P);typeof P=="number"||typeof P=="boolean"?(G.__data[0]=P,s.bufferSubData(s.UNIFORM_BUFFER,rt+yt,G.__data)):P.isMatrix3?(G.__data[0]=P.elements[0],G.__data[1]=P.elements[1],G.__data[2]=P.elements[2],G.__data[3]=0,G.__data[4]=P.elements[3],G.__data[5]=P.elements[4],G.__data[6]=P.elements[5],G.__data[7]=0,G.__data[8]=P.elements[6],G.__data[9]=P.elements[7],G.__data[10]=P.elements[8],G.__data[11]=0):(P.toArray(G.__data,yt),yt+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,rt,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(L,U,D,F){const H=L.value,B=U+"_"+D;if(F[B]===void 0)return typeof H=="number"||typeof H=="boolean"?F[B]=H:F[B]=H.clone(),!0;{const Y=F[B];if(typeof H=="number"||typeof H=="boolean"){if(Y!==H)return F[B]=H,!0}else if(Y.equals(H)===!1)return Y.copy(H),!0}return!1}function E(L){const U=L.uniforms;let D=0;const F=16;for(let B=0,Y=U.length;B<Y;B++){const C=Array.isArray(U[B])?U[B]:[U[B]];for(let w=0,G=C.length;w<G;w++){const rt=C[w],ft=Array.isArray(rt.value)?rt.value:[rt.value];for(let yt=0,K=ft.length;yt<K;yt++){const P=ft[yt],W=T(P),k=D%F,_t=k%W.boundary,Mt=k+_t;D+=_t,Mt!==0&&F-Mt<W.storage&&(D+=F-Mt),rt.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),rt.__offset=D,D+=W.storage}}}const H=D%F;return H>0&&(D+=F-H),L.__size=D,L.__cache={},this}function T(L){const U={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(U.boundary=4,U.storage=4):L.isVector2?(U.boundary=8,U.storage=8):L.isVector3||L.isColor?(U.boundary=16,U.storage=12):L.isVector4?(U.boundary=16,U.storage=16):L.isMatrix3?(U.boundary=48,U.storage=48):L.isMatrix4?(U.boundary=64,U.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),U}function S(L){const U=L.target;U.removeEventListener("dispose",S);const D=f.indexOf(U.__bindingPointIndex);f.splice(D,1),s.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function _(){for(const L in l)s.deleteBuffer(l[L]);f=[],l={},c={}}return{bind:m,update:p,dispose:_}}class lR{constructor(t={}){const{canvas:i=IE(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=f;const E=new Uint32Array(4),T=new Int32Array(4);let S=null,_=null;const L=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let F=!1;this._outputColorSpace=fi;let H=0,B=0,Y=null,C=-1,w=null;const G=new en,rt=new en;let ft=null;const yt=new be(0);let K=0,P=i.width,W=i.height,k=1,_t=null,Mt=null;const N=new en(0,0,P,W),J=new en(0,0,P,W);let vt=!1;const mt=new Ap;let Ct=!1,$=!1;const ct=new Ke,wt=new at,Nt=new en,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function Qe(){return Y===null?k:1}let z=r;function ae(R,q){return i.getContext(R,q)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${gp}`),i.addEventListener("webglcontextlost",Lt,!1),i.addEventListener("webglcontextrestored",Gt,!1),i.addEventListener("webglcontextcreationerror",Tt,!1),z===null){const q="webgl2";if(z=ae(q,R),z===null)throw ae(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let qt,jt,Yt,Be,Ht,se,Ye,We,O,b,nt,pt,bt,ht,Jt,Dt,Kt,Qt,At,Ut,$t,Ft,Pt,ue;function X(){qt=new _3(z),qt.init(),Ft=new tR(z,qt),jt=new f3(z,qt,t,Ft),Yt=new JA(z,qt),jt.reversedDepthBuffer&&x&&Yt.buffers.depth.setReversed(!0),Be=new S3(z),Ht=new FA,se=new $A(z,qt,Yt,Ht,jt,Ft,Be),Ye=new d3(D),We=new v3(D),O=new R2(z),Pt=new c3(z,O),b=new x3(z,O,Be,Pt),nt=new E3(z,b,O,Be),At=new M3(z,jt,se),Dt=new h3(Ht),pt=new IA(D,Ye,We,qt,jt,Pt,Dt),bt=new sR(D,Ht),ht=new GA,Jt=new jA(qt),Qt=new l3(D,Ye,We,Yt,nt,M,m),Kt=new KA(D,nt,jt),ue=new oR(z,Be,jt,Yt),Ut=new u3(z,qt,Be),$t=new y3(z,qt,Be),Be.programs=pt.programs,D.capabilities=jt,D.extensions=qt,D.properties=Ht,D.renderLists=ht,D.shadowMap=Kt,D.state=Yt,D.info=Be}X();const Rt=new aR(D,z);this.xr=Rt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const R=qt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=qt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(R){R!==void 0&&(k=R,this.setSize(P,W,!1))},this.getSize=function(R){return R.set(P,W)},this.setSize=function(R,q,ot=!0){if(Rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=R,W=q,i.width=Math.floor(R*k),i.height=Math.floor(q*k),ot===!0&&(i.style.width=R+"px",i.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(P*k,W*k).floor()},this.setDrawingBufferSize=function(R,q,ot){P=R,W=q,k=ot,i.width=Math.floor(R*ot),i.height=Math.floor(q*ot),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(G)},this.getViewport=function(R){return R.copy(N)},this.setViewport=function(R,q,ot,lt){R.isVector4?N.set(R.x,R.y,R.z,R.w):N.set(R,q,ot,lt),Yt.viewport(G.copy(N).multiplyScalar(k).round())},this.getScissor=function(R){return R.copy(J)},this.setScissor=function(R,q,ot,lt){R.isVector4?J.set(R.x,R.y,R.z,R.w):J.set(R,q,ot,lt),Yt.scissor(rt.copy(J).multiplyScalar(k).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(R){Yt.setScissorTest(vt=R)},this.setOpaqueSort=function(R){_t=R},this.setTransparentSort=function(R){Mt=R},this.getClearColor=function(R){return R.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor(...arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,ot=!0){let lt=0;if(R){let Z=!1;if(Y!==null){const Et=Y.texture.format;Z=Et===Ep||Et===Mp||Et===Sp}if(Z){const Et=Y.texture.type,zt=Et===Pi||Et===Lr||Et===Ko||Et===Qo||Et===xp||Et===yp,Xt=Qt.getClearColor(),It=Qt.getClearAlpha(),te=Xt.r,re=Xt.g,ee=Xt.b;zt?(E[0]=te,E[1]=re,E[2]=ee,E[3]=It,z.clearBufferuiv(z.COLOR,0,E)):(T[0]=te,T[1]=re,T[2]=ee,T[3]=It,z.clearBufferiv(z.COLOR,0,T))}else lt|=z.COLOR_BUFFER_BIT}q&&(lt|=z.DEPTH_BUFFER_BIT),ot&&(lt|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Lt,!1),i.removeEventListener("webglcontextrestored",Gt,!1),i.removeEventListener("webglcontextcreationerror",Tt,!1),Qt.dispose(),ht.dispose(),Jt.dispose(),Ht.dispose(),Ye.dispose(),We.dispose(),nt.dispose(),Pt.dispose(),ue.dispose(),pt.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",ei),Rt.removeEventListener("sessionend",Ws),Ai.stop()};function Lt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Gt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const R=Be.autoReset,q=Kt.enabled,ot=Kt.autoUpdate,lt=Kt.needsUpdate,Z=Kt.type;X(),Be.autoReset=R,Kt.enabled=q,Kt.autoUpdate=ot,Kt.needsUpdate=lt,Kt.type=Z}function Tt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function St(R){const q=R.target;q.removeEventListener("dispose",St),Vt(q)}function Vt(R){le(R),Ht.remove(R)}function le(R){const q=Ht.get(R).programs;q!==void 0&&(q.forEach(function(ot){pt.releaseProgram(ot)}),R.isShaderMaterial&&pt.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,ot,lt,Z,Et){q===null&&(q=Ot);const zt=Z.isMesh&&Z.matrixWorld.determinant()<0,Xt=_a(R,q,ot,lt,Z);Yt.setMaterial(lt,zt);let It=ot.index,te=1;if(lt.wireframe===!0){if(It=b.getWireframeAttribute(ot),It===void 0)return;te=2}const re=ot.drawRange,ee=ot.attributes.position;let me=re.start*te,Le=(re.start+re.count)*te;Et!==null&&(me=Math.max(me,Et.start*te),Le=Math.min(Le,(Et.start+Et.count)*te)),It!==null?(me=Math.max(me,0),Le=Math.min(Le,It.count)):ee!=null&&(me=Math.max(me,0),Le=Math.min(Le,ee.count));const Ve=Le-me;if(Ve<0||Ve===1/0)return;Pt.setup(Z,lt,Xt,ot,It);let Ne,ge=Ut;if(It!==null&&(Ne=O.get(It),ge=$t,ge.setIndex(Ne)),Z.isMesh)lt.wireframe===!0?(Yt.setLineWidth(lt.wireframeLinewidth*Qe()),ge.setMode(z.LINES)):ge.setMode(z.TRIANGLES);else if(Z.isLine){let Wt=lt.linewidth;Wt===void 0&&(Wt=1),Yt.setLineWidth(Wt*Qe()),Z.isLineSegments?ge.setMode(z.LINES):Z.isLineLoop?ge.setMode(z.LINE_LOOP):ge.setMode(z.LINE_STRIP)}else Z.isPoints?ge.setMode(z.POINTS):Z.isSprite&&ge.setMode(z.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)el("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ge.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(qt.get("WEBGL_multi_draw"))ge.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Wt=Z._multiDrawStarts,Xe=Z._multiDrawCounts,Ae=Z._multiDrawCount,Sn=It?O.get(It).bytesPerElement:1,Fi=Ht.get(lt).currentProgram.getUniforms();for(let gn=0;gn<Ae;gn++)Fi.setValue(z,"_gl_DrawID",gn),ge.render(Wt[gn]/Sn,Xe[gn])}else if(Z.isInstancedMesh)ge.renderInstances(me,Ve,Z.count);else if(ot.isInstancedBufferGeometry){const Wt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Xe=Math.min(ot.instanceCount,Wt);ge.renderInstances(me,Ve,Xe)}else ge.render(me,Ve)};function Oe(R,q,ot){R.transparent===!0&&R.side===ua&&R.forceSinglePass===!1?(R.side=Vn,R.needsUpdate=!0,Xn(R,q,ot),R.side=ga,R.needsUpdate=!0,Xn(R,q,ot),R.side=ua):Xn(R,q,ot)}this.compile=function(R,q,ot=null){ot===null&&(ot=R),_=Jt.get(ot),_.init(q),U.push(_),ot.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),R!==ot&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),_.setupLights();const lt=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Et=Z.material;if(Et)if(Array.isArray(Et))for(let zt=0;zt<Et.length;zt++){const Xt=Et[zt];Oe(Xt,ot,Z),lt.add(Xt)}else Oe(Et,ot,Z),lt.add(Et)}),_=U.pop(),lt},this.compileAsync=function(R,q,ot=null){const lt=this.compile(R,q,ot);return new Promise(Z=>{function Et(){if(lt.forEach(function(zt){Ht.get(zt).currentProgram.isReady()&&lt.delete(zt)}),lt.size===0){Z(R);return}setTimeout(Et,10)}qt.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Te=null;function Dn(R){Te&&Te(R)}function ei(){Ai.stop()}function Ws(){Ai.start()}const Ai=new D1;Ai.setAnimationLoop(Dn),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(R){Te=R,Rt.setAnimationLoop(R),R===null?Ai.stop():Ai.start()},Rt.addEventListener("sessionstart",ei),Rt.addEventListener("sessionend",Ws),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(q),q=Rt.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,q,Y),_=Jt.get(R,U.length),_.init(q),U.push(_),ct.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),mt.setFromProjectionMatrix(ct,Oi,q.reversedDepth),$=this.localClippingEnabled,Ct=Dt.init(this.clippingPlanes,$),S=ht.get(R,L.length),S.init(),L.push(S),Rt.enabled===!0&&Rt.isPresenting===!0){const Et=D.xr.getDepthSensingMesh();Et!==null&&Pr(Et,q,-1/0,D.sortObjects)}Pr(R,q,0,D.sortObjects),S.finish(),D.sortObjects===!0&&S.sort(_t,Mt),oe=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,oe&&Qt.addToRenderList(S,R),this.info.render.frame++,Ct===!0&&Dt.beginShadows();const ot=_.state.shadowsArray;Kt.render(ot,R,q),Ct===!0&&Dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const lt=S.opaque,Z=S.transmissive;if(_.setupLights(),q.isArrayCamera){const Et=q.cameras;if(Z.length>0)for(let zt=0,Xt=Et.length;zt<Xt;zt++){const It=Et[zt];Br(lt,Z,R,It)}oe&&Qt.render(R);for(let zt=0,Xt=Et.length;zt<Xt;zt++){const It=Et[zt];zr(S,R,It,It.viewport)}}else Z.length>0&&Br(lt,Z,R,q),oe&&Qt.render(R),zr(S,R,q);Y!==null&&B===0&&(se.updateMultisampleRenderTarget(Y),se.updateRenderTargetMipmap(Y)),R.isScene===!0&&R.onAfterRender(D,R,q),Pt.resetDefaultState(),C=-1,w=null,U.pop(),U.length>0?(_=U[U.length-1],Ct===!0&&Dt.setGlobalState(D.clippingPlanes,_.state.camera)):_=null,L.pop(),L.length>0?S=L[L.length-1]:S=null};function Pr(R,q,ot,lt){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)ot=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||mt.intersectsSprite(R)){lt&&Nt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ct);const zt=nt.update(R),Xt=R.material;Xt.visible&&S.push(R,zt,Xt,ot,Nt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||mt.intersectsObject(R))){const zt=nt.update(R),Xt=R.material;if(lt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Nt.copy(R.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),Nt.copy(zt.boundingSphere.center)),Nt.applyMatrix4(R.matrixWorld).applyMatrix4(ct)),Array.isArray(Xt)){const It=zt.groups;for(let te=0,re=It.length;te<re;te++){const ee=It[te],me=Xt[ee.materialIndex];me&&me.visible&&S.push(R,zt,me,ot,Nt.z,ee)}}else Xt.visible&&S.push(R,zt,Xt,ot,Nt.z,null)}}const Et=R.children;for(let zt=0,Xt=Et.length;zt<Xt;zt++)Pr(Et[zt],q,ot,lt)}function zr(R,q,ot,lt){const Z=R.opaque,Et=R.transmissive,zt=R.transparent;_.setupLightsView(ot),Ct===!0&&Dt.setGlobalState(D.clippingPlanes,ot),lt&&Yt.viewport(G.copy(lt)),Z.length>0&&$a(Z,q,ot),Et.length>0&&$a(Et,q,ot),zt.length>0&&$a(zt,q,ot),Yt.buffers.depth.setTest(!0),Yt.buffers.depth.setMask(!0),Yt.buffers.color.setMask(!0),Yt.setPolygonOffset(!1)}function Br(R,q,ot,lt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[lt.id]===void 0&&(_.state.transmissionRenderTarget[lt.id]=new Nr(1,1,{generateMipmaps:!0,type:qt.has("EXT_color_buffer_half_float")||qt.has("EXT_color_buffer_float")?sl:Pi,minFilter:Dr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace}));const Et=_.state.transmissionRenderTarget[lt.id],zt=lt.viewport||G;Et.setSize(zt.z*D.transmissionResolutionScale,zt.w*D.transmissionResolutionScale);const Xt=D.getRenderTarget(),It=D.getActiveCubeFace(),te=D.getActiveMipmapLevel();D.setRenderTarget(Et),D.getClearColor(yt),K=D.getClearAlpha(),K<1&&D.setClearColor(16777215,.5),D.clear(),oe&&Qt.render(ot);const re=D.toneMapping;D.toneMapping=Qa;const ee=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),_.setupLightsView(lt),Ct===!0&&Dt.setGlobalState(D.clippingPlanes,lt),$a(R,ot,lt),se.updateMultisampleRenderTarget(Et),se.updateRenderTargetMipmap(Et),qt.has("WEBGL_multisampled_render_to_texture")===!1){let me=!1;for(let Le=0,Ve=q.length;Le<Ve;Le++){const Ne=q[Le],ge=Ne.object,Wt=Ne.geometry,Xe=Ne.material,Ae=Ne.group;if(Xe.side===ua&&ge.layers.test(lt.layers)){const Sn=Xe.side;Xe.side=Vn,Xe.needsUpdate=!0,qs(ge,ot,lt,Wt,Xe,Ae),Xe.side=Sn,Xe.needsUpdate=!0,me=!0}}me===!0&&(se.updateMultisampleRenderTarget(Et),se.updateRenderTargetMipmap(Et))}D.setRenderTarget(Xt,It,te),D.setClearColor(yt,K),ee!==void 0&&(lt.viewport=ee),D.toneMapping=re}function $a(R,q,ot){const lt=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,Et=R.length;Z<Et;Z++){const zt=R[Z],Xt=zt.object,It=zt.geometry,te=zt.group;let re=zt.material;re.allowOverride===!0&&lt!==null&&(re=lt),Xt.layers.test(ot.layers)&&qs(Xt,q,ot,It,re,te)}}function qs(R,q,ot,lt,Z,Et){R.onBeforeRender(D,q,ot,lt,Z,Et),R.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(D,q,ot,lt,R,Et),Z.transparent===!0&&Z.side===ua&&Z.forceSinglePass===!1?(Z.side=Vn,Z.needsUpdate=!0,D.renderBufferDirect(ot,q,lt,Z,R,Et),Z.side=ga,Z.needsUpdate=!0,D.renderBufferDirect(ot,q,lt,Z,R,Et),Z.side=ua):D.renderBufferDirect(ot,q,lt,Z,R,Et),R.onAfterRender(D,q,ot,lt,Z,Et)}function Xn(R,q,ot){q.isScene!==!0&&(q=Ot);const lt=Ht.get(R),Z=_.state.lights,Et=_.state.shadowsArray,zt=Z.state.version,Xt=pt.getParameters(R,Z.state,Et,q,ot),It=pt.getProgramCacheKey(Xt);let te=lt.programs;lt.environment=R.isMeshStandardMaterial?q.environment:null,lt.fog=q.fog,lt.envMap=(R.isMeshStandardMaterial?We:Ye).get(R.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,te===void 0&&(R.addEventListener("dispose",St),te=new Map,lt.programs=te);let re=te.get(It);if(re!==void 0){if(lt.currentProgram===re&&lt.lightsStateVersion===zt)return yn(R,Xt),re}else Xt.uniforms=pt.getUniforms(R),R.onBeforeCompile(Xt,D),re=pt.acquireProgram(Xt,It),te.set(It,re),lt.uniforms=Xt.uniforms;const ee=lt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ee.clippingPlanes=Dt.uniform),yn(R,Xt),lt.needsLights=vu(R),lt.lightsStateVersion=zt,lt.needsLights&&(ee.ambientLightColor.value=Z.state.ambient,ee.lightProbe.value=Z.state.probe,ee.directionalLights.value=Z.state.directional,ee.directionalLightShadows.value=Z.state.directionalShadow,ee.spotLights.value=Z.state.spot,ee.spotLightShadows.value=Z.state.spotShadow,ee.rectAreaLights.value=Z.state.rectArea,ee.ltc_1.value=Z.state.rectAreaLTC1,ee.ltc_2.value=Z.state.rectAreaLTC2,ee.pointLights.value=Z.state.point,ee.pointLightShadows.value=Z.state.pointShadow,ee.hemisphereLights.value=Z.state.hemi,ee.directionalShadowMap.value=Z.state.directionalShadowMap,ee.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,ee.spotShadowMap.value=Z.state.spotShadowMap,ee.spotLightMatrix.value=Z.state.spotLightMatrix,ee.spotLightMap.value=Z.state.spotLightMap,ee.pointShadowMap.value=Z.state.pointShadowMap,ee.pointShadowMatrix.value=Z.state.pointShadowMatrix),lt.currentProgram=re,lt.uniformsList=null,re}function sn(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=nu.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function yn(R,q){const ot=Ht.get(R);ot.outputColorSpace=q.outputColorSpace,ot.batching=q.batching,ot.batchingColor=q.batchingColor,ot.instancing=q.instancing,ot.instancingColor=q.instancingColor,ot.instancingMorph=q.instancingMorph,ot.skinning=q.skinning,ot.morphTargets=q.morphTargets,ot.morphNormals=q.morphNormals,ot.morphColors=q.morphColors,ot.morphTargetsCount=q.morphTargetsCount,ot.numClippingPlanes=q.numClippingPlanes,ot.numIntersection=q.numClipIntersection,ot.vertexAlphas=q.vertexAlphas,ot.vertexTangents=q.vertexTangents,ot.toneMapping=q.toneMapping}function _a(R,q,ot,lt,Z){q.isScene!==!0&&(q=Ot),se.resetTextureUnits();const Et=q.fog,zt=lt.isMeshStandardMaterial?q.environment:null,Xt=Y===null?D.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Fs,It=(lt.isMeshStandardMaterial?We:Ye).get(lt.envMap||zt),te=lt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,re=!!ot.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),ee=!!ot.morphAttributes.position,me=!!ot.morphAttributes.normal,Le=!!ot.morphAttributes.color;let Ve=Qa;lt.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Ve=D.toneMapping);const Ne=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,ge=Ne!==void 0?Ne.length:0,Wt=Ht.get(lt),Xe=_.state.lights;if(Ct===!0&&($===!0||R!==w)){const hn=R===w&&lt.id===C;Dt.setState(lt,R,hn)}let Ae=!1;lt.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==Xe.state.version||Wt.outputColorSpace!==Xt||Z.isBatchedMesh&&Wt.batching===!1||!Z.isBatchedMesh&&Wt.batching===!0||Z.isBatchedMesh&&Wt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Wt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Wt.instancing===!1||!Z.isInstancedMesh&&Wt.instancing===!0||Z.isSkinnedMesh&&Wt.skinning===!1||!Z.isSkinnedMesh&&Wt.skinning===!0||Z.isInstancedMesh&&Wt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Wt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Wt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Wt.instancingMorph===!1&&Z.morphTexture!==null||Wt.envMap!==It||lt.fog===!0&&Wt.fog!==Et||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==Dt.numPlanes||Wt.numIntersection!==Dt.numIntersection)||Wt.vertexAlphas!==te||Wt.vertexTangents!==re||Wt.morphTargets!==ee||Wt.morphNormals!==me||Wt.morphColors!==Le||Wt.toneMapping!==Ve||Wt.morphTargetsCount!==ge)&&(Ae=!0):(Ae=!0,Wt.__version=lt.version);let Sn=Wt.currentProgram;Ae===!0&&(Sn=Xn(lt,q,Z));let Fi=!1,gn=!1,er=!1;const xe=Sn.getUniforms(),An=Wt.uniforms;if(Yt.useProgram(Sn.program)&&(Fi=!0,gn=!0,er=!0),lt.id!==C&&(C=lt.id,gn=!0),Fi||w!==R){Yt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),xe.setValue(z,"projectionMatrix",R.projectionMatrix),xe.setValue(z,"viewMatrix",R.matrixWorldInverse);const nn=xe.map.cameraPosition;nn!==void 0&&nn.setValue(z,wt.setFromMatrixPosition(R.matrixWorld)),jt.logarithmicDepthBuffer&&xe.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&xe.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,gn=!0,er=!0)}if(Z.isSkinnedMesh){xe.setOptional(z,Z,"bindMatrix"),xe.setOptional(z,Z,"bindMatrixInverse");const hn=Z.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),xe.setValue(z,"boneTexture",hn.boneTexture,se))}Z.isBatchedMesh&&(xe.setOptional(z,Z,"batchingTexture"),xe.setValue(z,"batchingTexture",Z._matricesTexture,se),xe.setOptional(z,Z,"batchingIdTexture"),xe.setValue(z,"batchingIdTexture",Z._indirectTexture,se),xe.setOptional(z,Z,"batchingColorTexture"),Z._colorsTexture!==null&&xe.setValue(z,"batchingColorTexture",Z._colorsTexture,se));const Un=ot.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&At.update(Z,ot,Sn),(gn||Wt.receiveShadow!==Z.receiveShadow)&&(Wt.receiveShadow=Z.receiveShadow,xe.setValue(z,"receiveShadow",Z.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(An.envMap.value=It,An.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&q.environment!==null&&(An.envMapIntensity.value=q.environmentIntensity),gn&&(xe.setValue(z,"toneMappingExposure",D.toneMappingExposure),Wt.needsLights&&js(An,er),Et&&lt.fog===!0&&bt.refreshFogUniforms(An,Et),bt.refreshMaterialUniforms(An,lt,k,W,_.state.transmissionRenderTarget[R.id]),nu.upload(z,sn(Wt),An,se)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(nu.upload(z,sn(Wt),An,se),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&xe.setValue(z,"center",Z.center),xe.setValue(z,"modelViewMatrix",Z.modelViewMatrix),xe.setValue(z,"normalMatrix",Z.normalMatrix),xe.setValue(z,"modelMatrix",Z.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const hn=lt.uniformsGroups;for(let nn=0,Ir=hn.length;nn<Ir;nn++){const Ri=hn[nn];ue.update(Ri,Sn),ue.bind(Ri,Sn)}}return Sn}function js(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function vu(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(R,q,ot){const lt=Ht.get(R);lt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),Ht.get(R.texture).__webglTexture=q,Ht.get(R.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:ot,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const ot=Ht.get(R);ot.__webglFramebuffer=q,ot.__useDefaultFramebuffer=q===void 0};const _u=z.createFramebuffer();this.setRenderTarget=function(R,q=0,ot=0){Y=R,H=q,B=ot;let lt=!0,Z=null,Et=!1,zt=!1;if(R){const It=Ht.get(R);if(It.__useDefaultFramebuffer!==void 0)Yt.bindFramebuffer(z.FRAMEBUFFER,null),lt=!1;else if(It.__webglFramebuffer===void 0)se.setupRenderTarget(R);else if(It.__hasExternalTextures)se.rebindTextures(R,Ht.get(R.texture).__webglTexture,Ht.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ee=R.depthTexture;if(It.__boundDepthTexture!==ee){if(ee!==null&&Ht.has(ee)&&(R.width!==ee.image.width||R.height!==ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(R)}}const te=R.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(zt=!0);const re=Ht.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(re[q])?Z=re[q][ot]:Z=re[q],Et=!0):R.samples>0&&se.useMultisampledRTT(R)===!1?Z=Ht.get(R).__webglMultisampledFramebuffer:Array.isArray(re)?Z=re[ot]:Z=re,G.copy(R.viewport),rt.copy(R.scissor),ft=R.scissorTest}else G.copy(N).multiplyScalar(k).floor(),rt.copy(J).multiplyScalar(k).floor(),ft=vt;if(ot!==0&&(Z=_u),Yt.bindFramebuffer(z.FRAMEBUFFER,Z)&&lt&&Yt.drawBuffers(R,Z),Yt.viewport(G),Yt.scissor(rt),Yt.setScissorTest(ft),Et){const It=Ht.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+q,It.__webglTexture,ot)}else if(zt){const It=q;for(let te=0;te<R.textures.length;te++){const re=Ht.get(R.textures[te]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+te,re.__webglTexture,ot,It)}}else if(R!==null&&ot!==0){const It=Ht.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,It.__webglTexture,ot)}C=-1},this.readRenderTargetPixels=function(R,q,ot,lt,Z,Et,zt,Xt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=Ht.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&zt!==void 0&&(It=It[zt]),It){Yt.bindFramebuffer(z.FRAMEBUFFER,It);try{const te=R.textures[Xt],re=te.format,ee=te.type;if(!jt.textureFormatReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!jt.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-lt&&ot>=0&&ot<=R.height-Z&&(R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Xt),z.readPixels(q,ot,lt,Z,Ft.convert(re),Ft.convert(ee),Et))}finally{const te=Y!==null?Ht.get(Y).__webglFramebuffer:null;Yt.bindFramebuffer(z.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(R,q,ot,lt,Z,Et,zt,Xt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=Ht.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&zt!==void 0&&(It=It[zt]),It)if(q>=0&&q<=R.width-lt&&ot>=0&&ot<=R.height-Z){Yt.bindFramebuffer(z.FRAMEBUFFER,It);const te=R.textures[Xt],re=te.format,ee=te.type;if(!jt.textureFormatReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!jt.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const me=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,me),z.bufferData(z.PIXEL_PACK_BUFFER,Et.byteLength,z.STREAM_READ),R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Xt),z.readPixels(q,ot,lt,Z,Ft.convert(re),Ft.convert(ee),0);const Le=Y!==null?Ht.get(Y).__webglFramebuffer:null;Yt.bindFramebuffer(z.FRAMEBUFFER,Le);const Ve=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await FE(z,Ve,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,me),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Et),z.deleteBuffer(me),z.deleteSync(Ve),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,ot=0){const lt=Math.pow(2,-ot),Z=Math.floor(R.image.width*lt),Et=Math.floor(R.image.height*lt),zt=q!==null?q.x:0,Xt=q!==null?q.y:0;se.setTexture2D(R,0),z.copyTexSubImage2D(z.TEXTURE_2D,ot,0,0,zt,Xt,Z,Et),Yt.unbindTexture()};const hl=z.createFramebuffer(),tr=z.createFramebuffer();this.copyTextureToTexture=function(R,q,ot=null,lt=null,Z=0,Et=null){Et===null&&(Z!==0?(el("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Et=Z,Z=0):Et=0);let zt,Xt,It,te,re,ee,me,Le,Ve;const Ne=R.isCompressedTexture?R.mipmaps[Et]:R.image;if(ot!==null)zt=ot.max.x-ot.min.x,Xt=ot.max.y-ot.min.y,It=ot.isBox3?ot.max.z-ot.min.z:1,te=ot.min.x,re=ot.min.y,ee=ot.isBox3?ot.min.z:0;else{const Un=Math.pow(2,-Z);zt=Math.floor(Ne.width*Un),Xt=Math.floor(Ne.height*Un),R.isDataArrayTexture?It=Ne.depth:R.isData3DTexture?It=Math.floor(Ne.depth*Un):It=1,te=0,re=0,ee=0}lt!==null?(me=lt.x,Le=lt.y,Ve=lt.z):(me=0,Le=0,Ve=0);const ge=Ft.convert(q.format),Wt=Ft.convert(q.type);let Xe;q.isData3DTexture?(se.setTexture3D(q,0),Xe=z.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(se.setTexture2DArray(q,0),Xe=z.TEXTURE_2D_ARRAY):(se.setTexture2D(q,0),Xe=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,q.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,q.unpackAlignment);const Ae=z.getParameter(z.UNPACK_ROW_LENGTH),Sn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Fi=z.getParameter(z.UNPACK_SKIP_PIXELS),gn=z.getParameter(z.UNPACK_SKIP_ROWS),er=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ne.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ne.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,te),z.pixelStorei(z.UNPACK_SKIP_ROWS,re),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ee);const xe=R.isDataArrayTexture||R.isData3DTexture,An=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const Un=Ht.get(R),hn=Ht.get(q),nn=Ht.get(Un.__renderTarget),Ir=Ht.get(hn.__renderTarget);Yt.bindFramebuffer(z.READ_FRAMEBUFFER,nn.__webglFramebuffer),Yt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ir.__webglFramebuffer);for(let Ri=0;Ri<It;Ri++)xe&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ht.get(R).__webglTexture,Z,ee+Ri),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ht.get(q).__webglTexture,Et,Ve+Ri)),z.blitFramebuffer(te,re,zt,Xt,me,Le,zt,Xt,z.DEPTH_BUFFER_BIT,z.NEAREST);Yt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||Ht.has(R)){const Un=Ht.get(R),hn=Ht.get(q);Yt.bindFramebuffer(z.READ_FRAMEBUFFER,hl),Yt.bindFramebuffer(z.DRAW_FRAMEBUFFER,tr);for(let nn=0;nn<It;nn++)xe?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Un.__webglTexture,Z,ee+nn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Un.__webglTexture,Z),An?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,hn.__webglTexture,Et,Ve+nn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,hn.__webglTexture,Et),Z!==0?z.blitFramebuffer(te,re,zt,Xt,me,Le,zt,Xt,z.COLOR_BUFFER_BIT,z.NEAREST):An?z.copyTexSubImage3D(Xe,Et,me,Le,Ve+nn,te,re,zt,Xt):z.copyTexSubImage2D(Xe,Et,me,Le,te,re,zt,Xt);Yt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else An?R.isDataTexture||R.isData3DTexture?z.texSubImage3D(Xe,Et,me,Le,Ve,zt,Xt,It,ge,Wt,Ne.data):q.isCompressedArrayTexture?z.compressedTexSubImage3D(Xe,Et,me,Le,Ve,zt,Xt,It,ge,Ne.data):z.texSubImage3D(Xe,Et,me,Le,Ve,zt,Xt,It,ge,Wt,Ne):R.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Et,me,Le,zt,Xt,ge,Wt,Ne.data):R.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Et,me,Le,Ne.width,Ne.height,ge,Ne.data):z.texSubImage2D(z.TEXTURE_2D,Et,me,Le,zt,Xt,ge,Wt,Ne);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ae),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Sn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Fi),z.pixelStorei(z.UNPACK_SKIP_ROWS,gn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,er),Et===0&&q.generateMipmaps&&z.generateMipmap(Xe),Yt.unbindTexture()},this.initRenderTarget=function(R){Ht.get(R).__webglFramebuffer===void 0&&se.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?se.setTextureCube(R,0):R.isData3DTexture?se.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?se.setTexture2DArray(R,0):se.setTexture2D(R,0),Yt.unbindTexture()},this.resetState=function(){H=0,B=0,Y=null,Yt.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=De._getDrawingBufferColorSpace(t),i.unpackColorSpace=De._getUnpackColorSpace()}}function pd(s,t,i=1){const r=(90-s)*(Math.PI/180),l=(t+180)*(Math.PI/180);return new at(-i*Math.sin(r)*Math.cos(l),i*Math.cos(r),i*Math.sin(r)*Math.sin(l))}function cR(s,t,i=60){const r=[];for(let l=0;l<=i;l++){const c=l/i,f=new at().lerpVectors(s,t,c);f.normalize().multiplyScalar(1+Math.sin(Math.PI*c)*.35),r.push(f)}return r}const Wo=220,Zc=200,uR=1.2,fR=9;function hR(){const s=st.useRef(null),t=st.useRef(null),i=st.useRef(null),r=st.useRef(null),l=st.useRef(null),c=st.useRef([]),f=st.useRef([]),d=st.useRef(null),m=st.useRef(!1),p=st.useRef(!1),v=st.useRef({x:0,y:0}),g=st.useRef({x:.3,y:0}),x=st.useRef({x:.3,y:0}),M=st.useRef(!0),E=st.useRef(null),T=st.useRef(3.2),S=st.useRef(3.2),[_,L]=st.useState(null),[U,D]=st.useState(null),[F,H]=st.useState(0),[B,Y]=st.useState(!1),[C,w]=st.useState(null),G=st.useRef(null);G.current=_,st.useEffect(()=>{const K=s.current;if(!K)return;const P=K.clientWidth,W=K.clientHeight,k=new lR({antialias:!0,alpha:!0});k.setPixelRatio(Math.min(window.devicePixelRatio,2)),k.setSize(P,W),k.setClearColor(0,0),K.appendChild(k.domElement),i.current=k;const _t=new u2,Mt=new hi(45,P/W,.1,100);Mt.position.set(0,0,3.2),r.current=Mt,_t.add(new b2(16777215,.4));const N=new o_(8956671,1.2);N.position.set(5,5,5),_t.add(N);const J=new o_(16746564,.3);J.position.set(-5,-2,-5),_t.add(J);const vt=new jo;_t.add(vt),l.current=vt;const mt=new S2,Ct=mt.load("https://raw.githubusercontent.com/turban/webgl-earth/master/images/2_no_clouds_4k.jpg"),$=mt.load("https://raw.githubusercontent.com/turban/webgl-earth/master/images/elev_bump_4k.jpg"),ct=mt.load("https://raw.githubusercontent.com/turban/webgl-earth/master/images/water_4k.png");vt.add(new ti(new Ls(1,64,64),new a_({map:Ct,bumpMap:$,bumpScale:.05,specularMap:ct,specular:new be(3359846),shininess:25}))),vt.add(new ti(new Ls(1.06,64,64),new a_({color:4491519,transparent:!0,opacity:.08,side:ga})));const wt=new Float32Array(1500*3);for(let z=0;z<wt.length;z++)wt[z]=(Math.random()-.5)*80;const Nt=new di;Nt.setAttribute("position",new Ei(wt,3)),_t.add(new m2(Nt,new T1({color:16777215,size:.08,transparent:!0,opacity:.6}))),_r.forEach(z=>{const ae=pd(z.lat,z.lng,1.01),qt=new ti(new Ls(.018,16,16),new lu({color:16737860}));qt.position.copy(ae),qt.userData.cityId=z.id,vt.add(qt);const jt=new ti(new Ls(.035,16,16),new lu({color:16746598,transparent:!0,opacity:.3}));jt.position.copy(ae),vt.add(jt),c.current.push({dot:qt,ring:jt,city:z,pos:ae})});for(let z=0;z<_r.length-1;z++){const ae=pd(_r[z].lat,_r[z].lng,1.01),qt=pd(_r[z+1].lat,_r[z+1].lng,1.01),jt=new p2(new di().setFromPoints(cR(ae,qt)),new b1({color:16742229,transparent:!0,opacity:.4}));vt.add(jt),f.current.push(jt)}let Ot=0;const oe=()=>{d.current=requestAnimationFrame(oe),Ot+=.01,M.current&&(g.current.y+=.002),x.current.x+=(g.current.x-x.current.x)*.06,x.current.y+=(g.current.y-x.current.y)*.06,vt.rotation.x=x.current.x,vt.rotation.y=x.current.y,S.current+=(T.current-S.current)*.08,Mt.position.z=S.current,c.current.forEach(({ring:ae},qt)=>{const jt=1+.4*Math.sin(Ot*2+qt);ae.scale.setScalar(jt),ae.material.opacity=.12+.15*Math.sin(Ot*2+qt)}),f.current.forEach((ae,qt)=>{ae.material.opacity=.2+.2*Math.sin(Ot+qt*.5)});const z=G.current;if(z){const ae=c.current.find(qt=>qt.city.id===z.id);if(ae){const qt=ae.pos.clone().applyMatrix4(vt.matrixWorld),jt=new at(0,0,1);if(qt.clone().normalize().dot(jt)>0){const Ht=qt.clone().project(Mt),se=K.getBoundingClientRect(),Ye=(Ht.x+1)/2*se.width,We=(-Ht.y+1)/2*se.height;D({x:Ye,y:We,visible:!0})}else D(Ht=>Ht?{...Ht,visible:!1}:null)}}k.render(_t,Mt)};oe();const Qe=()=>{const z=K.clientWidth,ae=K.clientHeight;k.setSize(z,ae),Mt.aspect=z/ae,Mt.updateProjectionMatrix()};return window.addEventListener("resize",Qe),()=>{cancelAnimationFrame(d.current),window.removeEventListener("resize",Qe),k.dispose(),K.contains(k.domElement)&&K.removeChild(k.domElement)}},[]),st.useEffect(()=>{const K=s.current;if(!K)return;const P=()=>{M.current=!1,clearTimeout(E.current),E.current=setTimeout(()=>{M.current=!0},3e3)},W=mt=>{mt.preventDefault(),P();const Ct=mt.deltaY>0?.3:-.3;T.current=Math.max(uR,Math.min(fR,T.current+Ct))},k=mt=>{m.current=!0,p.current=!1,M.current=!1,v.current={x:mt.clientX,y:mt.clientY},K.style.cursor="grabbing"},_t=mt=>{if(m.current){const Nt=mt.clientX-v.current.x,Ot=mt.clientY-v.current.y;(Math.abs(Nt)>2||Math.abs(Ot)>2)&&(p.current=!0),g.current.y+=Nt*.005,g.current.x=Math.max(-1.2,Math.min(1.2,g.current.x+Ot*.005)),v.current={x:mt.clientX,y:mt.clientY};return}const Ct=K.getBoundingClientRect(),$=new Re((mt.clientX-Ct.left)/Ct.width*2-1,-((mt.clientY-Ct.top)/Ct.height)*2+1),ct=new c_;ct.setFromCamera($,r.current);const wt=ct.intersectObjects(c.current.map(Nt=>Nt.dot));wt.length>0?(w(wt[0].object.userData.cityId),K.style.cursor="pointer"):(w(null),K.style.cursor="grab")},Mt=mt=>{K.style.cursor="grab";const Ct=p.current;if(m.current=!1,p.current=!1,P(),Ct)return;const $=K.getBoundingClientRect(),ct=new Re((mt.clientX-$.left)/$.width*2-1,-((mt.clientY-$.top)/$.height)*2+1),wt=new c_;wt.setFromCamera(ct,r.current);const Nt=wt.intersectObjects(c.current.map(Ot=>Ot.dot));if(Nt.length>0){const Ot=_r.find(oe=>oe.id===Nt[0].object.userData.cityId);L(Ot),H(0),Y(!0)}else L(null),D(null)},N=mt=>{m.current=!0,p.current=!1,M.current=!1,v.current={x:mt.touches[0].clientX,y:mt.touches[0].clientY}},J=mt=>{const Ct=mt.touches[0].clientX-v.current.x,$=mt.touches[0].clientY-v.current.y;(Math.abs(Ct)>4||Math.abs($)>4)&&(p.current=!0),g.current.y+=Ct*.005,g.current.x=Math.max(-1.2,Math.min(1.2,g.current.x+$*.005)),v.current={x:mt.touches[0].clientX,y:mt.touches[0].clientY}},vt=()=>{m.current=!1,P()};return K.addEventListener("wheel",W,{passive:!1}),K.addEventListener("mousedown",k),window.addEventListener("mousemove",_t),window.addEventListener("mouseup",Mt),K.addEventListener("touchstart",N,{passive:!0}),K.addEventListener("touchmove",J,{passive:!0}),K.addEventListener("touchend",vt),()=>{K.removeEventListener("wheel",W),K.removeEventListener("mousedown",k),window.removeEventListener("mousemove",_t),window.removeEventListener("mouseup",Mt),K.removeEventListener("touchstart",N),K.removeEventListener("touchmove",J),K.removeEventListener("touchend",vt),clearTimeout(E.current)}},[]),st.useEffect(()=>{c.current.forEach(({dot:K,city:P})=>{const W=_?.id===P.id,k=C===P.id;K.material.color.set(W?16768324:k?16750950:16737860),K.scale.setScalar(W?1.9:k?1.4:1)})},[_,C]);const ft=(()=>{if(!U||!s.current)return null;const K=s.current.getBoundingClientRect(),P=K.width,W=K.height,k=U.x,_t=U.y;let Mt=k+14,N=_t-Zc/2;const J=20;let vt=J,mt=P-Wo-J,Ct=J,$=W-Zc-J;if(t.current){const ct=t.current.getBoundingClientRect(),wt=ct.left+24,Nt=ct.top+24,Ot=ct.right-24,oe=ct.bottom-24;vt=Math.max(J,wt-K.left),mt=Math.min(P-Wo-J,Ot-K.left-Wo),Ct=Math.max(J,Nt-K.top),$=Math.min(W-Zc-J,oe-K.top-Zc)}return Mt>mt&&(Mt=k-Wo-14),Mt=Math.max(vt,Math.min(mt,Mt)),N=Math.max(Ct,Math.min($,N)),{left:Mt,top:N}})(),yt=_&&U?.visible!==!1&&ft;return Q.jsxs("section",{ref:t,id:"travel",className:"travelglobe-world",style:{width:"min(50vw, 50vh)",height:"min(50vw, 50vh)",maxWidth:"min(50vw, 50vh, 420px)",maxHeight:"min(50vw, 50vh, 420px)",background:"radial-gradient(ellipse at 30% 40%, #0a0e1a 0%, #050709 70%)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"24px",position:"relative",overflow:"hidden",borderRadius:"12px"},children:[Q.jsx("div",{style:{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(68,102,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(68,102,255,0.04) 1px, transparent 1px)",backgroundSize:"60px 60px",pointerEvents:"none"}}),Q.jsx("div",{className:"travelglobe-layout",children:Q.jsxs("div",{className:"travelglobe-globe-col",style:{position:"relative",zIndex:2},children:[Q.jsx("div",{className:"travelglobe-canvas-wrap",ref:s}),yt&&Q.jsxs("div",{className:"travelglobe-card-overlay",style:{position:"absolute",left:ft.left,top:ft.top,width:Wo,pointerEvents:"auto",animation:"cardIn 0.22s cubic-bezier(0.34,1.56,0.64,1) both"},children:[Q.jsx("div",{style:{position:"absolute",[ft.left>U.x?"left":"right"]:"-14px",top:"50%",width:"14px",height:"1px",background:"rgba(255,119,85,0.45)",transform:"translateY(-50%)"}}),Q.jsxs("div",{className:"travelglobe-card-box",style:{background:"rgba(7, 9, 17, 0.93)",borderRadius:"14px",overflow:"hidden",backdropFilter:"blur(18px)",boxShadow:"0 12px 48px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)"},children:[Q.jsxs("div",{style:{position:"relative",width:"100%",height:"130px",overflow:"hidden"},children:[Q.jsx("img",{src:_.photos[F].startsWith("http")?_.photos[F]:"/diptidhawade/"+_.photos[F],alt:_.name,onLoad:()=>Y(!1),style:{width:"100%",height:"100%",objectFit:"cover",display:"block",opacity:B?0:1,transition:"opacity 0.3s ease"}},_.id+F),B&&Q.jsx("div",{style:{position:"absolute",inset:0,background:"rgba(7,9,17,0.85)",display:"flex",alignItems:"center",justifyContent:"center"},children:Q.jsx("div",{style:{width:"20px",height:"20px",border:"2px solid rgba(255,119,85,0.25)",borderTopColor:"#ff7755",borderRadius:"50%",animation:"spin 0.65s linear infinite"}})}),Q.jsx("button",{onClick:()=>{L(null),D(null)},style:{position:"absolute",top:"7px",left:"7px",width:"20px",height:"20px",background:"rgba(0,0,0,0.6)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"50%",color:"rgba(255,255,255,0.65)",fontSize:"10px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",padding:0,lineHeight:1,transition:"background 0.15s"},onMouseEnter:K=>K.currentTarget.style.background="rgba(220,60,40,0.65)",onMouseLeave:K=>K.currentTarget.style.background="rgba(0,0,0,0.6)",children:"✕"}),Q.jsx("button",{type:"button",className:"travelglobe-photo-arrow travelglobe-photo-arrow-left",onClick:()=>{Y(!0),H(K=>(K-1+_.photos.length)%_.photos.length)},"aria-label":"Previous photo",children:"‹"}),Q.jsx("button",{type:"button",className:"travelglobe-photo-arrow travelglobe-photo-arrow-right",onClick:()=>{Y(!0),H(K=>(K+1)%_.photos.length)},"aria-label":"Next photo",children:"›"}),Q.jsx("div",{style:{position:"absolute",bottom:"6px",left:"50%",transform:"translateX(-50%)",display:"flex",gap:"4px",alignItems:"center"},children:_.photos.map((K,P)=>Q.jsx("button",{onClick:()=>{Y(!0),H(P)},style:{width:P===F?"14px":"5px",height:"5px",borderRadius:"3px",background:P===F?"#ff7755":"rgba(255,255,255,0.35)",border:"none",cursor:"pointer",padding:0,transition:"all 0.25s ease"}},P))})]}),Q.jsxs("div",{style:{padding:"9px 12px 11px",display:"flex",alignItems:"center",gap:"7px"},children:[Q.jsx("span",{style:{fontSize:"18px",lineHeight:1},children:_.emoji}),Q.jsxs("div",{children:[Q.jsx("div",{className:"travelglobe-card-city-name",style:{fontFamily:"'Georgia', serif",fontSize:"13px",fontWeight:"400",lineHeight:1.25},children:_.name}),Q.jsx("div",{className:"travelglobe-card-country",style:{fontFamily:"'Courier New', monospace",fontSize:"9px",letterSpacing:"2px",textTransform:"uppercase",marginTop:"1px"},children:_.country})]})]})]})]})]})})]})}function dR(){const[s,t]=st.useState(null);return st.useEffect(()=>{const i=r=>{r.key==="Escape"&&t(null)};return s&&(document.addEventListener("keydown",i),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",i),document.body.style.overflow=""}},[s]),Q.jsxs("section",{className:"projects-page",children:[Q.jsxs("div",{className:"projects-inner",children:[Q.jsx("h1",{className:"projects-title",children:"Projects"}),HM.map((i,r)=>Q.jsxs("div",{className:"projects-item",children:[Q.jsx("div",{className:"projects-item-media-card",children:i.texture?Q.jsx("video",{src:Za(i.texture),poster:i.thumbnail?Za(i.thumbnail):void 0,controls:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata"}):Q.jsx("button",{type:"button",className:"projects-item-image-btn",onClick:()=>t(i.spotlight),"aria-label":"Expand image",children:Q.jsx("img",{src:Za(i.spotlight),alt:"",loading:"lazy"})})}),Q.jsxs("div",{className:"projects-item-body",children:[Q.jsx("h3",{className:"projects-item-title",children:Q.jsx("a",{href:i.href,target:"_blank",rel:"noopener noreferrer",children:i.title})}),Q.jsx("p",{className:"projects-item-desc",children:i.desc}),i.subdesc&&Q.jsx("p",{className:"projects-item-subdesc",children:i.subdesc}),i.tags?.length>0&&Q.jsx("div",{className:"projects-item-tags",children:i.tags.map(l=>Q.jsx("span",{className:"projects-item-tag",children:l.name},l.id))}),Q.jsx("a",{href:i.href,target:"_blank",rel:"noopener noreferrer",className:"projects-item-view",children:"View"})]})]},r))]}),s&&Q.jsxs("div",{className:"projects-image-lightbox",onClick:()=>t(null),role:"dialog","aria-modal":"true","aria-label":"Expand image",children:[Q.jsx("button",{type:"button",className:"projects-lightbox-close",onClick:()=>t(null),"aria-label":"Close",children:"×"}),Q.jsx("img",{src:Za(s),alt:"",className:"projects-lightbox-img",onClick:i=>i.stopPropagation()})]})]})}const pR={linkedin:DM,github:wM,email:n1};function mR(){return Q.jsx("section",{className:"contact-page",children:Q.jsxs("div",{className:"contact-inner",children:[Q.jsx("h1",{className:"contact-title",children:"Contact"}),Q.jsx("p",{className:"contact-intro",children:"Drop me an email or connect with me on LinkedIn or GitHub."}),Q.jsxs("div",{className:"contact-block",children:[Q.jsx("div",{className:"contact-label",children:"Email"}),Q.jsxs("a",{href:`mailto:${Ec.email}`,className:"contact-link","aria-label":"Email",children:[Q.jsx("span",{className:"contact-link-icon",children:Q.jsx(n1,{})}),Q.jsx("span",{className:"contact-link-label",children:Ec.email})]})]}),Ec.links?.length>0&&Q.jsxs("div",{className:"contact-block",children:[Q.jsx("div",{className:"contact-label",children:"Links"}),Q.jsx("div",{className:"contact-links",children:Ec.links.map((s,t)=>{const i=s.icon?pR[s.icon]:null;return Q.jsxs("a",{href:s.href,target:"_blank",rel:"noopener noreferrer",className:"contact-link","aria-label":s.label,children:[i&&Q.jsx("span",{className:"contact-link-icon",children:Q.jsx(i,{})}),Q.jsx("span",{className:"contact-link-label",children:s.label})]},t)})})]})]})})}function gR(){return Q.jsxs("div",{className:"notes-page page-content",children:[Q.jsx("h1",{className:"notes-title",children:"Notes"}),Q.jsx("ul",{className:"notes-category-list notes-category-grid",children:mp.map((s,t)=>Q.jsx("li",{className:"notes-category-item",children:Q.jsxs(rl,{to:`/notes/${s.id}`,className:"notes-category-card notes-category-box",children:[Q.jsx("span",{className:"notes-category-number",children:String(t+1).padStart(2,"0")}),Q.jsx("div",{className:"notes-category-image-wrap",children:Q.jsx("img",{src:Za(s.image.replace(/^\//,"")),alt:"",className:"notes-category-image"})}),Q.jsx("span",{className:"notes-category-title",children:s.title}),Q.jsxs("div",{className:"notes-category-tags",children:[(s.subjectLabels||s.subjects.map(i=>i.name)).slice(0,5).map(i=>Q.jsx("span",{className:"notes-category-tag",children:i},i)),(s.subjectLabels||s.subjects.map(i=>i.name)).length>5&&Q.jsx("span",{className:"notes-category-tag notes-category-tag-more",children:"+ more"})]})]})},s.id))})]})}function vR(){const{categoryId:s}=q_(),t=up(),i=mp.find(r=>r.id===s);return i?Q.jsxs("div",{className:"notes-page notes-category-page page-content",children:[Q.jsx("button",{type:"button",onClick:()=>t("/notes"),className:"notes-back-btn",children:"← Back to Notes"}),Q.jsx("h1",{className:"notes-title",children:i.title}),i.subheading&&Q.jsx("p",{className:"notes-subheading",children:i.subheading}),Q.jsx("ul",{className:"notes-subject-list",children:i.subjects.map(r=>Q.jsx("li",{children:Q.jsx(rl,{to:`/notes/${s}/${r.id}`,className:"notes-subject-card",children:r.name})},r.id))})]}):Q.jsxs("div",{className:"notes-page page-content",children:[Q.jsx("p",{children:"Category not found."}),Q.jsx("button",{type:"button",onClick:()=>t("/notes"),className:"notes-back-btn",children:"← Back to Notes"})]})}function _R(){const{categoryId:s,subjectId:t}=q_(),i=up(),[r,l]=st.useState(null),c=mp.find(g=>g.id===s),f=c?.subjects.find(g=>g.id===t);if(!c||!f)return Q.jsxs("div",{className:"notes-page page-content",children:[Q.jsx("p",{children:"Subject not found."}),Q.jsx("button",{type:"button",onClick:()=>i("/notes"),className:"notes-back-btn",children:"← Back to Notes"})]});const d=g=>l(g),m=g=>{const x=wv(g);l(x||g)},p=g=>!!g.link,v=g=>!!wv(g);return Q.jsxs("div",{className:"notes-page page-content",children:[Q.jsxs("button",{type:"button",onClick:()=>i(`/notes/${s}`),className:"notes-back-btn",children:["← Back to ",c.title]}),Q.jsx("h1",{className:"notes-title",children:f.name}),Q.jsx("p",{className:"notes-folder-intro",children:"Class Notes, Past Papers"}),Q.jsx("div",{className:"notes-folders",children:IM.map(g=>{const x=f.folders[g]||[];return Q.jsxs("section",{className:"notes-folder-section",children:[Q.jsx("h2",{className:"notes-folder-title",children:g}),x.length===0?Q.jsx("p",{className:"notes-empty",children:"No notes yet."}):Q.jsx("ul",{className:"notes-pdf-list",children:x.map((M,E)=>Q.jsx("li",{children:p(M)?v(M.link)?Q.jsxs("button",{type:"button",className:"notes-pdf-link notes-pdf-link-external",onClick:()=>m(M.link),children:[M.title," ↗"]}):Q.jsxs("a",{href:M.link,target:"_blank",rel:"noopener noreferrer",className:"notes-pdf-link notes-pdf-link-external",children:[M.title," ↗"]}):Q.jsx("button",{type:"button",className:"notes-pdf-link",onClick:()=>d(M.path),children:M.title})},E))})]},g)})}),r&&Q.jsx(xR,{src:r,onClose:()=>l(null)})]})}function xR({src:s,onClose:t}){const r=s.startsWith("http")?s:Za(s)+"#toolbar=0";return Q.jsx("div",{className:"notes-pdf-overlay",onClick:t,onContextMenu:l=>l.preventDefault(),role:"dialog","aria-modal":"true",children:Q.jsxs("div",{className:"notes-pdf-modal",onClick:l=>l.stopPropagation(),onContextMenu:l=>l.stopPropagation(),children:[Q.jsxs("div",{className:"notes-pdf-header",children:[Q.jsx("span",{className:"notes-pdf-view-only",children:"View only — do not download or distribute"}),Q.jsx("button",{type:"button",className:"notes-pdf-close",onClick:t,"aria-label":"Close",children:"✕"})]}),Q.jsx("iframe",{title:"PDF viewer",src:r,className:"notes-pdf-iframe"})]})})}const ha="/diptidhawade/",yR=({children:s})=>Q.jsx("div",{className:"page-content",children:s}),z_=["hero","projects","contact"];function SR(s){const t=document.getElementById(s);if(!t)return;const i=t.getBoundingClientRect(),r=window.innerHeight;i.top>=0&&i.top<=r*.4||t.scrollIntoView({behavior:"smooth",block:"start"})}function MR(){const{pathname:s,hash:t}=va();return st.useEffect(()=>{if(s!=="/")return;t==="#hero"&&window.history.replaceState(null,"",ha);const i=t?t.slice(1):"hero",r=document.getElementById(i);r&&requestAnimationFrame(()=>{r.scrollIntoView({behavior:"smooth",block:"start"})})},[s,t]),st.useEffect(()=>{const i=ha.replace(/\/$/,""),r=()=>{if(!(window.location.pathname===i||window.location.pathname===i+"/"))return;const c=window.location.hash.slice(1);SR(c||"hero")};return window.addEventListener("hashchange",r),()=>window.removeEventListener("hashchange",r)},[]),st.useEffect(()=>{const i=ha.replace(/\/$/,"");(window.location.pathname===i||window.location.pathname===i+"/")&&window.location.hash==="#hero"&&window.history.replaceState(null,"",ha)},[]),null}function ER(){const s=st.useRef(!1);return st.useEffect(()=>{const t=new IntersectionObserver(i=>{if(!s.current)for(const r of i){if(!r.isIntersecting)continue;const l=r.target.id;if(z_.includes(l)&&r.intersectionRatio>=.2){const c=window.location.hash.slice(1),f=l==="hero"?ha:`${ha}#${l}`;(c==="hero"||!c?ha:`${ha}#${c}`)!==f&&(s.current=!0,window.history.replaceState(null,"",f),s.current=!1);break}}},{root:null,rootMargin:"-20% 0px -60% 0px",threshold:[0,.2,.5]});return z_.forEach(i=>{const r=document.getElementById(i);r&&t.observe(r)}),()=>t.disconnect()},[]),null}function bR(){return Q.jsxs(Q.Fragment,{children:[Q.jsx(MR,{}),Q.jsx(ER,{}),Q.jsx("div",{id:"hero",children:Q.jsx(ZM,{})}),Q.jsx("div",{id:"projects",children:Q.jsx(yR,{children:Q.jsx(dR,{})})}),Q.jsxs("div",{className:"contact-globe-row page-content",children:[Q.jsx("div",{id:"contact",className:"contact-globe-col",children:Q.jsx(mR,{})}),Q.jsx("div",{id:"my-journey",className:"contact-globe-col",children:Q.jsx(hR,{})})]})]})}const TR=()=>Q.jsxs(uM,{basename:ha.replace(/\/$/,""),children:[Q.jsx(GM,{}),Q.jsx("main",{className:"w-full min-w-0",children:Q.jsxs(GS,{children:[Q.jsx(qo,{path:"/",element:Q.jsx(bR,{})}),Q.jsx(qo,{path:"/notes",element:Q.jsx(gR,{})}),Q.jsx(qo,{path:"/notes/:categoryId",element:Q.jsx(vR,{})}),Q.jsx(qo,{path:"/notes/:categoryId/:subjectId",element:Q.jsx(_R,{})})]})})]});Ky.createRoot(document.getElementById("root")).render(Q.jsx(st.StrictMode,{children:Q.jsx(TR,{})}));
