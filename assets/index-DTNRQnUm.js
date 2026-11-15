(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function wS(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Eh={exports:{}},Io={};var e_;function DS(){if(e_)return Io;e_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Io.Fragment=e,Io.jsx=i,Io.jsxs=i,Io}var t_;function US(){return t_||(t_=1,Eh.exports=DS()),Eh.exports}var ae=US(),bh={exports:{}},lt={};var n_;function LS(){if(n_)return lt;n_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),x=Symbol.iterator;function M(O){return O===null||typeof O!="object"?null:(O=x&&O[x]||O["@@iterator"],typeof O=="function"?O:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,S={};function _(O,te,Ae){this.props=O,this.context=te,this.refs=S,this.updater=Ae||E}_.prototype.isReactComponent={},_.prototype.setState=function(O,te){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,te,"setState")},_.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function U(){}U.prototype=_.prototype;function L(O,te,Ae){this.props=O,this.context=te,this.refs=S,this.updater=Ae||E}var D=L.prototype=new U;D.constructor=L,T(D,_.prototype),D.isPureReactComponent=!0;var H=Array.isArray;function F(){}var z={H:null,A:null,T:null,S:null},Q=Object.prototype.hasOwnProperty;function w(O,te,Ae){var De=Ae.ref;return{$$typeof:r,type:O,key:te,ref:De!==void 0?De:null,props:Ae}}function C(O,te){return w(O.type,te,O.props)}function G(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function ne(O){var te={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Ae){return te[Ae]})}var he=/\/+/g;function _e(O,te){return typeof O=="object"&&O!==null&&O.key!=null?ne(""+O.key):te.toString(36)}function pe(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(F,F):(O.status="pending",O.then(function(te){O.status==="pending"&&(O.status="fulfilled",O.value=te)},function(te){O.status==="pending"&&(O.status="rejected",O.reason=te)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function P(O,te,Ae,De,ze){var re=typeof O;(re==="undefined"||re==="boolean")&&(O=null);var fe=!1;if(O===null)fe=!0;else switch(re){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(O.$$typeof){case r:case e:fe=!0;break;case v:return fe=O._init,P(fe(O._payload),te,Ae,De,ze)}}if(fe)return ze=ze(O),fe=De===""?"."+_e(O,0):De,H(ze)?(Ae="",fe!=null&&(Ae=fe.replace(he,"$&/")+"/"),P(ze,te,Ae,"",function(qe){return qe})):ze!=null&&(G(ze)&&(ze=C(ze,Ae+(ze.key==null||O&&O.key===ze.key?"":(""+ze.key).replace(he,"$&/")+"/")+fe)),te.push(ze)),1;fe=0;var Oe=De===""?".":De+":";if(H(O))for(var He=0;He<O.length;He++)De=O[He],re=Oe+_e(De,He),fe+=P(De,te,Ae,re,ze);else if(He=M(O),typeof He=="function")for(O=He.call(O),He=0;!(De=O.next()).done;)De=De.value,re=Oe+_e(De,He++),fe+=P(De,te,Ae,re,ze);else if(re==="object"){if(typeof O.then=="function")return P(pe(O),te,Ae,De,ze);throw te=String(O),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.")}return fe}function K(O,te,Ae){if(O==null)return O;var De=[],ze=0;return P(O,De,"","",function(re){return te.call(Ae,re,ze++)}),De}function q(O){if(O._status===-1){var te=O._result;te=te(),te.then(function(Ae){(O._status===0||O._status===-1)&&(O._status=1,O._result=Ae)},function(Ae){(O._status===0||O._status===-1)&&(O._status=2,O._result=Ae)}),O._status===-1&&(O._status=0,O._result=te)}if(O._status===1)return O._result.default;throw O._result}var Ee=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var te=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(te))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},X={map:K,forEach:function(O,te,Ae){K(O,function(){te.apply(this,arguments)},Ae)},count:function(O){var te=0;return K(O,function(){te++}),te},toArray:function(O){return K(O,function(te){return te})||[]},only:function(O){if(!G(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return lt.Activity=g,lt.Children=X,lt.Component=_,lt.Fragment=i,lt.Profiler=l,lt.PureComponent=L,lt.StrictMode=s,lt.Suspense=m,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,lt.__COMPILER_RUNTIME={__proto__:null,c:function(O){return z.H.useMemoCache(O)}},lt.cache=function(O){return function(){return O.apply(null,arguments)}},lt.cacheSignal=function(){return null},lt.cloneElement=function(O,te,Ae){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var De=T({},O.props),ze=O.key;if(te!=null)for(re in te.key!==void 0&&(ze=""+te.key),te)!Q.call(te,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&te.ref===void 0||(De[re]=te[re]);var re=arguments.length-2;if(re===1)De.children=Ae;else if(1<re){for(var fe=Array(re),Oe=0;Oe<re;Oe++)fe[Oe]=arguments[Oe+2];De.children=fe}return w(O.type,ze,De)},lt.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},lt.createElement=function(O,te,Ae){var De,ze={},re=null;if(te!=null)for(De in te.key!==void 0&&(re=""+te.key),te)Q.call(te,De)&&De!=="key"&&De!=="__self"&&De!=="__source"&&(ze[De]=te[De]);var fe=arguments.length-2;if(fe===1)ze.children=Ae;else if(1<fe){for(var Oe=Array(fe),He=0;He<fe;He++)Oe[He]=arguments[He+2];ze.children=Oe}if(O&&O.defaultProps)for(De in fe=O.defaultProps,fe)ze[De]===void 0&&(ze[De]=fe[De]);return w(O,re,ze)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(O){return{$$typeof:d,render:O}},lt.isValidElement=G,lt.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:q}},lt.memo=function(O,te){return{$$typeof:p,type:O,compare:te===void 0?null:te}},lt.startTransition=function(O){var te=z.T,Ae={};z.T=Ae;try{var De=O(),ze=z.S;ze!==null&&ze(Ae,De),typeof De=="object"&&De!==null&&typeof De.then=="function"&&De.then(F,Ee)}catch(re){Ee(re)}finally{te!==null&&Ae.types!==null&&(te.types=Ae.types),z.T=te}},lt.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},lt.use=function(O){return z.H.use(O)},lt.useActionState=function(O,te,Ae){return z.H.useActionState(O,te,Ae)},lt.useCallback=function(O,te){return z.H.useCallback(O,te)},lt.useContext=function(O){return z.H.useContext(O)},lt.useDebugValue=function(){},lt.useDeferredValue=function(O,te){return z.H.useDeferredValue(O,te)},lt.useEffect=function(O,te){return z.H.useEffect(O,te)},lt.useEffectEvent=function(O){return z.H.useEffectEvent(O)},lt.useId=function(){return z.H.useId()},lt.useImperativeHandle=function(O,te,Ae){return z.H.useImperativeHandle(O,te,Ae)},lt.useInsertionEffect=function(O,te){return z.H.useInsertionEffect(O,te)},lt.useLayoutEffect=function(O,te){return z.H.useLayoutEffect(O,te)},lt.useMemo=function(O,te){return z.H.useMemo(O,te)},lt.useOptimistic=function(O,te){return z.H.useOptimistic(O,te)},lt.useReducer=function(O,te,Ae){return z.H.useReducer(O,te,Ae)},lt.useRef=function(O){return z.H.useRef(O)},lt.useState=function(O){return z.H.useState(O)},lt.useSyncExternalStore=function(O,te,Ae){return z.H.useSyncExternalStore(O,te,Ae)},lt.useTransition=function(){return z.H.useTransition()},lt.version="19.2.0",lt}var i_;function tp(){return i_||(i_=1,bh.exports=LS()),bh.exports}var ue=tp();const Dr=wS(ue);var Th={exports:{}},Bo={},Ah={exports:{}},Rh={};var a_;function NS(){return a_||(a_=1,(function(r){function e(P,K){var q=P.length;P.push(K);e:for(;0<q;){var Ee=q-1>>>1,X=P[Ee];if(0<l(X,K))P[Ee]=K,P[q]=X,q=Ee;else break e}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var K=P[0],q=P.pop();if(q!==K){P[0]=q;e:for(var Ee=0,X=P.length,O=X>>>1;Ee<O;){var te=2*(Ee+1)-1,Ae=P[te],De=te+1,ze=P[De];if(0>l(Ae,q))De<X&&0>l(ze,Ae)?(P[Ee]=ze,P[De]=q,Ee=De):(P[Ee]=Ae,P[te]=q,Ee=te);else if(De<X&&0>l(ze,q))P[Ee]=ze,P[De]=q,Ee=De;else break e}}return K}function l(P,K){var q=P.sortIndex-K.sortIndex;return q!==0?q:P.id-K.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();r.unstable_now=function(){return f.now()-d}}var m=[],p=[],v=1,g=null,x=3,M=!1,E=!1,T=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function D(P){for(var K=i(p);K!==null;){if(K.callback===null)s(p);else if(K.startTime<=P)s(p),K.sortIndex=K.expirationTime,e(m,K);else break;K=i(p)}}function H(P){if(T=!1,D(P),!E)if(i(m)!==null)E=!0,F||(F=!0,ne());else{var K=i(p);K!==null&&pe(H,K.startTime-P)}}var F=!1,z=-1,Q=5,w=-1;function C(){return S?!0:!(r.unstable_now()-w<Q)}function G(){if(S=!1,F){var P=r.unstable_now();w=P;var K=!0;try{e:{E=!1,T&&(T=!1,U(z),z=-1),M=!0;var q=x;try{t:{for(D(P),g=i(m);g!==null&&!(g.expirationTime>P&&C());){var Ee=g.callback;if(typeof Ee=="function"){g.callback=null,x=g.priorityLevel;var X=Ee(g.expirationTime<=P);if(P=r.unstable_now(),typeof X=="function"){g.callback=X,D(P),K=!0;break t}g===i(m)&&s(m),D(P)}else s(m);g=i(m)}if(g!==null)K=!0;else{var O=i(p);O!==null&&pe(H,O.startTime-P),K=!1}}break e}finally{g=null,x=q,M=!1}K=void 0}}finally{K?ne():F=!1}}}var ne;if(typeof L=="function")ne=function(){L(G)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,_e=he.port2;he.port1.onmessage=G,ne=function(){_e.postMessage(null)}}else ne=function(){_(G,0)};function pe(P,K){z=_(function(){P(r.unstable_now())},K)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(P){P.callback=null},r.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<P?Math.floor(1e3/P):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(P){switch(x){case 1:case 2:case 3:var K=3;break;default:K=x}var q=x;x=K;try{return P()}finally{x=q}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(P,K){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var q=x;x=P;try{return K()}finally{x=q}},r.unstable_scheduleCallback=function(P,K,q){var Ee=r.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?Ee+q:Ee):q=Ee,P){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=q+X,P={id:v++,callback:K,priorityLevel:P,startTime:q,expirationTime:X,sortIndex:-1},q>Ee?(P.sortIndex=q,e(p,P),i(m)===null&&P===i(p)&&(T?(U(z),z=-1):T=!0,pe(H,q-Ee))):(P.sortIndex=X,e(m,P),E||M||(E=!0,F||(F=!0,ne()))),P},r.unstable_shouldYield=C,r.unstable_wrapCallback=function(P){var K=x;return function(){var q=x;x=K;try{return P.apply(this,arguments)}finally{x=q}}}})(Rh)),Rh}var r_;function OS(){return r_||(r_=1,Ah.exports=NS()),Ah.exports}var Ch={exports:{}},An={};var s_;function PS(){if(s_)return An;s_=1;var r=tp();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:v}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,An.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,v)},An.flushSync=function(m){var p=f.T,v=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=v,s.d.f()}},An.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},An.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},An.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,g=d(v,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:x,fetchPriority:M}):v==="script"&&s.d.X(m,{crossOrigin:g,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},An.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},An.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,g=d(v,p.crossOrigin);s.d.L(m,v,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},An.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},An.requestFormReset=function(m){s.d.r(m)},An.unstable_batchedUpdates=function(m,p){return m(p)},An.useFormState=function(m,p,v){return f.H.useFormState(m,p,v)},An.useFormStatus=function(){return f.H.useHostTransitionStatus()},An.version="19.2.0",An}var o_;function zS(){if(o_)return Ch.exports;o_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Ch.exports=PS(),Ch.exports}var l_;function IS(){if(l_)return Bo;l_=1;var r=OS(),e=tp(),i=zS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return m(u),t;if(h===o)return m(u),n;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=h;else{for(var y=!1,A=u.child;A;){if(A===a){y=!0,a=u,o=h;break}if(A===o){y=!0,o=u,a=h;break}A=A.sibling}if(!y){for(A=h.child;A;){if(A===a){y=!0,a=h,o=u;break}if(A===o){y=!0,o=h,a=u;break}A=A.sibling}if(!y)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),L=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function ne(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var he=Symbol.for("react.client.reference");function _e(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===he?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case _:return"Profiler";case S:return"StrictMode";case H:return"Suspense";case F:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case L:return t.displayName||"Context";case U:return(t._context.displayName||"Context")+".Consumer";case D:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:_e(t.type)||"Memo";case Q:n=t._payload,t=t._init;try{return _e(t(n))}catch{}}return null}var pe=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},Ee=[],X=-1;function O(t){return{current:t}}function te(t){0>X||(t.current=Ee[X],Ee[X]=null,X--)}function Ae(t,n){X++,Ee[X]=t.current,t.current=n}var De=O(null),ze=O(null),re=O(null),fe=O(null);function Oe(t,n){switch(Ae(re,n),Ae(ze,t),Ae(De,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Ev(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Ev(n),t=bv(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}te(De),Ae(De,t)}function He(){te(De),te(ze),te(re)}function qe(t){t.memoizedState!==null&&Ae(fe,t);var n=De.current,a=bv(n,t.type);n!==a&&(Ae(ze,t),Ae(De,a))}function ct(t){ze.current===t&&(te(De),te(ze)),fe.current===t&&(te(fe),No._currentValue=q)}var Kt,B;function Mt(t){if(Kt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Kt=n&&n[1]||"",B=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Kt+t+B}var it=!1;function tt(t,n){if(!t||it)return"";it=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(ce){var ie=ce}Reflect.construct(t,[],xe)}else{try{xe.call()}catch(ce){ie=ce}t.call(xe.prototype)}}else{try{throw Error()}catch(ce){ie=ce}(xe=t())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(ce){if(ce&&ie&&typeof ce.stack=="string")return[ce.stack,ie.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),y=h[0],A=h[1];if(y&&A){var I=y.split(`
`),ee=A.split(`
`);for(u=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ee.length&&!ee[u].includes("DetermineComponentFrameRoot");)u++;if(o===I.length||u===ee.length)for(o=I.length-1,u=ee.length-1;1<=o&&0<=u&&I[o]!==ee[u];)u--;for(;1<=o&&0<=u;o--,u--)if(I[o]!==ee[u]){if(o!==1||u!==1)do if(o--,u--,0>u||I[o]!==ee[u]){var me=`
`+I[o].replace(" at new "," at ");return t.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",t.displayName)),me}while(1<=o&&0<=u);break}}}finally{it=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Mt(a):""}function je(t,n){switch(t.tag){case 26:case 27:case 5:return Mt(t.type);case 16:return Mt("Lazy");case 13:return t.child!==n&&n!==null?Mt("Suspense Fallback"):Mt("Suspense");case 19:return Mt("SuspenseList");case 0:case 15:return tt(t.type,!1);case 11:return tt(t.type.render,!1);case 1:return tt(t.type,!0);case 31:return Mt("Activity");default:return""}}function Ut(t){try{var n="",a=null;do n+=je(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ge=Object.prototype.hasOwnProperty,rt=r.unstable_scheduleCallback,Wt=r.unstable_cancelCallback,Vt=r.unstable_shouldYield,N=r.unstable_requestPaint,b=r.unstable_now,J=r.unstable_getCurrentPriorityLevel,ge=r.unstable_ImmediatePriority,Te=r.unstable_UserBlockingPriority,de=r.unstable_NormalPriority,Ke=r.unstable_LowPriority,Y=r.unstable_IdlePriority,be=r.log,Le=r.unstable_setDisableYieldValue,Me=null,Ce=null;function ke(t){if(typeof be=="function"&&Le(t),Ce&&typeof Ce.setStrictMode=="function")try{Ce.setStrictMode(Me,t)}catch{}}var Ue=Math.clz32?Math.clz32:k,Pe=Math.log,st=Math.LN2;function k(t){return t>>>=0,t===0?32:31-(Pe(t)/st|0)|0}var we=256,Ne=262144,Ve=4194304;function Re(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ye(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,h=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var A=o&134217727;return A!==0?(o=A&~h,o!==0?u=Re(o):(y&=A,y!==0?u=Re(y):a||(a=A&~t,a!==0&&(u=Re(a))))):(A=o&~h,A!==0?u=Re(A):y!==0?u=Re(y):a||(a=o&~t,a!==0&&(u=Re(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function Xe(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ot(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ot(){var t=Ve;return Ve<<=1,(Ve&62914560)===0&&(Ve=4194304),t}function Tt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function wn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ni(t,n,a,o,u,h){var y=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,I=t.expirationTimes,ee=t.hiddenUpdates;for(a=y&~a;0<a;){var me=31-Ue(a),xe=1<<me;A[me]=0,I[me]=-1;var ie=ee[me];if(ie!==null)for(ee[me]=null,me=0;me<ie.length;me++){var ce=ie[me];ce!==null&&(ce.lane&=-536870913)}a&=~xe}o!==0&&qs(t,o,0),h!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=h&~(y&~n))}function qs(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Ue(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Ai(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Ue(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Nr(t,n){var a=n&-n;return a=(a&42)!==0?1:Or(a),(a&(t.suspendedLanes|n))!==0?0:a}function Or(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Pr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function $a(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:jv(t.type))}function js(t,n){var a=K.p;try{return K.p=t,n()}finally{K.p=a}}var Wn=Math.random().toString(36).slice(2),sn="__reactFiber$"+Wn,xn="__reactProps$"+Wn,_a="__reactContainer$"+Wn,Ys="__reactEvents$"+Wn,gu="__reactListeners$"+Wn,vu="__reactHandles$"+Wn,hl="__reactResources$"+Wn,er="__reactMarker$"+Wn;function R(t){delete t[sn],delete t[xn],delete t[Ys],delete t[gu],delete t[vu]}function W(t){var n=t[sn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[_a]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Uv(t);t!==null;){if(a=t[sn])return a;t=Uv(t)}return n}t=a,a=t.parentNode}return null}function oe(t){if(t=t[sn]||t[_a]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function le(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Z(t){var n=t[hl];return n||(n=t[hl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Se(t){t[er]=!0}var Ie=new Set,Ye={};function Fe(t,n){Je(t,n),Je(t+"Capture",n)}function Je(t,n){for(Ye[t]=n,t=0;t<n.length;t++)Ie.add(n[t])}var at=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$e={},pt={};function Lt(t){return Ge.call(pt,t)?!0:Ge.call($e,t)?!1:at.test(t)?pt[t]=!0:($e[t]=!0,!1)}function kt(t,n,a){if(Lt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Nt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function mt(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function Ze(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function At(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,h.call(this,y)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function yn(t){if(!t._valueTracker){var n=qt(t)?"checked":"value";t._valueTracker=At(t,n,""+t[n])}}function Ii(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=qt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function gn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var tr=/[\n"\\]/g;function _t(t){return t.replace(tr,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Tn(t,n,a,o,u,h,y,A){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),n!=null?y==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Ze(n)):t.value!==""+Ze(n)&&(t.value=""+Ze(n)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),n!=null?hn(t,y,Ze(n)):a!=null?hn(t,y,Ze(a)):o!=null&&t.removeAttribute("value"),u==null&&h!=null&&(t.defaultChecked=!!h),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+Ze(A):t.removeAttribute("name")}function Dn(t,n,a,o,u,h,y,A){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){yn(t);return}a=a!=null?""+Ze(a):"",n=n!=null?""+Ze(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=A?t.checked:!!o,t.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),yn(t)}function hn(t,n,a){n==="number"&&gn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function en(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+Ze(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function zr(t,n,a){if(n!=null&&(n=""+Ze(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Ze(a):""}function Ri(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(pe(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Ze(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),yn(t)}function Ir(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var bx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function yp(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||bx.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Sp(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&yp(t,u,o)}else for(var h in n)n.hasOwnProperty(h)&&yp(t,h,n[h])}function _u(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ax=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function dl(t){return Ax.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Bi(){}var xu=null;function yu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Br=null,Fr=null;function Mp(t){var n=oe(t);if(n&&(t=n.stateNode)){var a=t[xn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Tn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+_t(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[xn]||null;if(!u)throw Error(s(90));Tn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Ii(o)}break e;case"textarea":zr(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&en(t,!!a.multiple,n,!1)}}}var Su=!1;function Ep(t,n,a){if(Su)return t(n,a);Su=!0;try{var o=t(n);return o}finally{if(Su=!1,(Br!==null||Fr!==null)&&(ec(),Br&&(n=Br,t=Fr,Fr=Br=null,Mp(n),t)))for(n=0;n<t.length;n++)Mp(t[n])}}function Zs(t,n){var a=t.stateNode;if(a===null)return null;var o=a[xn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mu=!1;if(Fi)try{var Ks={};Object.defineProperty(Ks,"passive",{get:function(){Mu=!0}}),window.addEventListener("test",Ks,Ks),window.removeEventListener("test",Ks,Ks)}catch{Mu=!1}var xa=null,Eu=null,pl=null;function bp(){if(pl)return pl;var t,n=Eu,a=n.length,o,u="value"in xa?xa.value:xa.textContent,h=u.length;for(t=0;t<a&&n[t]===u[t];t++);var y=a-t;for(o=1;o<=y&&n[a-o]===u[h-o];o++);return pl=u.slice(t,1<o?1-o:void 0)}function ml(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function gl(){return!0}function Tp(){return!1}function zn(t){function n(a,o,u,h,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=y,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(h):h[A]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?gl:Tp,this.isPropagationStopped=Tp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=gl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=gl)},persist:function(){},isPersistent:gl}),n}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vl=zn(nr),Qs=g({},nr,{view:0,detail:0}),Rx=zn(Qs),bu,Tu,Js,_l=g({},Qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ru,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Js&&(Js&&t.type==="mousemove"?(bu=t.screenX-Js.screenX,Tu=t.screenY-Js.screenY):Tu=bu=0,Js=t),bu)},movementY:function(t){return"movementY"in t?t.movementY:Tu}}),Ap=zn(_l),Cx=g({},_l,{dataTransfer:0}),wx=zn(Cx),Dx=g({},Qs,{relatedTarget:0}),Au=zn(Dx),Ux=g({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),Lx=zn(Ux),Nx=g({},nr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ox=zn(Nx),Px=g({},nr,{data:0}),Rp=zn(Px),zx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ix={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Bx[t])?!!n[t]:!1}function Ru(){return Fx}var Hx=g({},Qs,{key:function(t){if(t.key){var n=zx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ml(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ix[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ru,charCode:function(t){return t.type==="keypress"?ml(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ml(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Gx=zn(Hx),Vx=g({},_l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cp=zn(Vx),kx=g({},Qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ru}),Xx=zn(kx),Wx=g({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),qx=zn(Wx),jx=g({},_l,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Yx=zn(jx),Zx=g({},nr,{newState:0,oldState:0}),Kx=zn(Zx),Qx=[9,13,27,32],Cu=Fi&&"CompositionEvent"in window,$s=null;Fi&&"documentMode"in document&&($s=document.documentMode);var Jx=Fi&&"TextEvent"in window&&!$s,wp=Fi&&(!Cu||$s&&8<$s&&11>=$s),Dp=" ",Up=!1;function Lp(t,n){switch(t){case"keyup":return Qx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Np(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hr=!1;function $x(t,n){switch(t){case"compositionend":return Np(n);case"keypress":return n.which!==32?null:(Up=!0,Dp);case"textInput":return t=n.data,t===Dp&&Up?null:t;default:return null}}function ey(t,n){if(Hr)return t==="compositionend"||!Cu&&Lp(t,n)?(t=bp(),pl=Eu=xa=null,Hr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return wp&&n.locale!=="ko"?null:n.data;default:return null}}var ty={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Op(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!ty[t.type]:n==="textarea"}function Pp(t,n,a,o){Br?Fr?Fr.push(o):Fr=[o]:Br=o,n=oc(n,"onChange"),0<n.length&&(a=new vl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var eo=null,to=null;function ny(t){vv(t,0)}function xl(t){var n=le(t);if(Ii(n))return t}function zp(t,n){if(t==="change")return n}var Ip=!1;if(Fi){var wu;if(Fi){var Du="oninput"in document;if(!Du){var Bp=document.createElement("div");Bp.setAttribute("oninput","return;"),Du=typeof Bp.oninput=="function"}wu=Du}else wu=!1;Ip=wu&&(!document.documentMode||9<document.documentMode)}function Fp(){eo&&(eo.detachEvent("onpropertychange",Hp),to=eo=null)}function Hp(t){if(t.propertyName==="value"&&xl(to)){var n=[];Pp(n,to,t,yu(t)),Ep(ny,n)}}function iy(t,n,a){t==="focusin"?(Fp(),eo=n,to=a,eo.attachEvent("onpropertychange",Hp)):t==="focusout"&&Fp()}function ay(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xl(to)}function ry(t,n){if(t==="click")return xl(n)}function sy(t,n){if(t==="input"||t==="change")return xl(n)}function oy(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var qn=typeof Object.is=="function"?Object.is:oy;function no(t,n){if(qn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Ge.call(n,u)||!qn(t[u],n[u]))return!1}return!0}function Gp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vp(t,n){var a=Gp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Gp(a)}}function kp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?kp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Xp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=gn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=gn(t.document)}return n}function Uu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var ly=Fi&&"documentMode"in document&&11>=document.documentMode,Gr=null,Lu=null,io=null,Nu=!1;function Wp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Nu||Gr==null||Gr!==gn(o)||(o=Gr,"selectionStart"in o&&Uu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),io&&no(io,o)||(io=o,o=oc(Lu,"onSelect"),0<o.length&&(n=new vl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Gr)))}function ir(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Vr={animationend:ir("Animation","AnimationEnd"),animationiteration:ir("Animation","AnimationIteration"),animationstart:ir("Animation","AnimationStart"),transitionrun:ir("Transition","TransitionRun"),transitionstart:ir("Transition","TransitionStart"),transitioncancel:ir("Transition","TransitionCancel"),transitionend:ir("Transition","TransitionEnd")},Ou={},qp={};Fi&&(qp=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function ar(t){if(Ou[t])return Ou[t];if(!Vr[t])return t;var n=Vr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in qp)return Ou[t]=n[a];return t}var jp=ar("animationend"),Yp=ar("animationiteration"),Zp=ar("animationstart"),cy=ar("transitionrun"),uy=ar("transitionstart"),fy=ar("transitioncancel"),Kp=ar("transitionend"),Qp=new Map,Pu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pu.push("scrollEnd");function mi(t,n){Qp.set(t,n),Fe(n,[t])}var yl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ii=[],kr=0,zu=0;function Sl(){for(var t=kr,n=zu=kr=0;n<t;){var a=ii[n];ii[n++]=null;var o=ii[n];ii[n++]=null;var u=ii[n];ii[n++]=null;var h=ii[n];if(ii[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}h!==0&&Jp(a,u,h)}}function Ml(t,n,a,o){ii[kr++]=t,ii[kr++]=n,ii[kr++]=a,ii[kr++]=o,zu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Iu(t,n,a,o){return Ml(t,n,a,o),El(t)}function rr(t,n){return Ml(t,null,null,n),El(t)}function Jp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=t.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(u=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,u&&n!==null&&(u=31-Ue(a),t=h.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function El(t){if(50<Ao)throw Ao=0,jf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Xr={};function hy(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,n,a,o){return new hy(t,n,a,o)}function Bu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Hi(t,n){var a=t.alternate;return a===null?(a=jn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function $p(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function bl(t,n,a,o,u,h){var y=0;if(o=t,typeof t=="function")Bu(t)&&(y=1);else if(typeof t=="string")y=vS(t,a,De.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case w:return t=jn(31,a,n,u),t.elementType=w,t.lanes=h,t;case T:return sr(a.children,u,h,n);case S:y=8,u|=24;break;case _:return t=jn(12,a,n,u|2),t.elementType=_,t.lanes=h,t;case H:return t=jn(13,a,n,u),t.elementType=H,t.lanes=h,t;case F:return t=jn(19,a,n,u),t.elementType=F,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:y=10;break e;case U:y=9;break e;case D:y=11;break e;case z:y=14;break e;case Q:y=16,o=null;break e}y=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=jn(y,a,n,u),n.elementType=t,n.type=o,n.lanes=h,n}function sr(t,n,a,o){return t=jn(7,t,o,n),t.lanes=a,t}function Fu(t,n,a){return t=jn(6,t,null,n),t.lanes=a,t}function em(t){var n=jn(18,null,null,0);return n.stateNode=t,n}function Hu(t,n,a){return n=jn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var tm=new WeakMap;function ai(t,n){if(typeof t=="object"&&t!==null){var a=tm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Ut(n)},tm.set(t,n),n)}return{value:t,source:n,stack:Ut(n)}}var Wr=[],qr=0,Tl=null,ao=0,ri=[],si=0,ya=null,Ci=1,wi="";function Gi(t,n){Wr[qr++]=ao,Wr[qr++]=Tl,Tl=t,ao=n}function nm(t,n,a){ri[si++]=Ci,ri[si++]=wi,ri[si++]=ya,ya=t;var o=Ci;t=wi;var u=32-Ue(o)-1;o&=~(1<<u),a+=1;var h=32-Ue(n)+u;if(30<h){var y=u-u%5;h=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Ci=1<<32-Ue(n)+u|a<<u|o,wi=h+t}else Ci=1<<h|a<<u|o,wi=t}function Gu(t){t.return!==null&&(Gi(t,1),nm(t,1,0))}function Vu(t){for(;t===Tl;)Tl=Wr[--qr],Wr[qr]=null,ao=Wr[--qr],Wr[qr]=null;for(;t===ya;)ya=ri[--si],ri[si]=null,wi=ri[--si],ri[si]=null,Ci=ri[--si],ri[si]=null}function im(t,n){ri[si++]=Ci,ri[si++]=wi,ri[si++]=ya,Ci=n.id,wi=n.overflow,ya=t}var Sn=null,jt=null,Et=!1,Sa=null,oi=!1,ku=Error(s(519));function Ma(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ro(ai(n,t)),ku}function am(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[sn]=t,n[xn]=o,a){case"dialog":vt("cancel",n),vt("close",n);break;case"iframe":case"object":case"embed":vt("load",n);break;case"video":case"audio":for(a=0;a<Co.length;a++)vt(Co[a],n);break;case"source":vt("error",n);break;case"img":case"image":case"link":vt("error",n),vt("load",n);break;case"details":vt("toggle",n);break;case"input":vt("invalid",n),Dn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":vt("invalid",n);break;case"textarea":vt("invalid",n),Ri(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Sv(n.textContent,a)?(o.popover!=null&&(vt("beforetoggle",n),vt("toggle",n)),o.onScroll!=null&&vt("scroll",n),o.onScrollEnd!=null&&vt("scrollend",n),o.onClick!=null&&(n.onclick=Bi),n=!0):n=!1,n||Ma(t,!0)}function rm(t){for(Sn=t.return;Sn;)switch(Sn.tag){case 5:case 31:case 13:oi=!1;return;case 27:case 3:oi=!0;return;default:Sn=Sn.return}}function jr(t){if(t!==Sn)return!1;if(!Et)return rm(t),Et=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||lh(t.type,t.memoizedProps)),a=!a),a&&jt&&Ma(t),rm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));jt=Dv(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));jt=Dv(t)}else n===27?(n=jt,za(t.type)?(t=dh,dh=null,jt=t):jt=n):jt=Sn?ci(t.stateNode.nextSibling):null;return!0}function or(){jt=Sn=null,Et=!1}function Xu(){var t=Sa;return t!==null&&(Hn===null?Hn=t:Hn.push.apply(Hn,t),Sa=null),t}function ro(t){Sa===null?Sa=[t]:Sa.push(t)}var Wu=O(null),lr=null,Vi=null;function Ea(t,n,a){Ae(Wu,n._currentValue),n._currentValue=a}function ki(t){t._currentValue=Wu.current,te(Wu)}function qu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function ju(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var h=u.dependencies;if(h!==null){var y=u.child;h=h.firstContext;e:for(;h!==null;){var A=h;h=u;for(var I=0;I<n.length;I++)if(A.context===n[I]){h.lanes|=a,A=h.alternate,A!==null&&(A.lanes|=a),qu(h.return,a,t),o||(y=null);break e}h=A.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(s(341));y.lanes|=a,h=y.alternate,h!==null&&(h.lanes|=a),qu(y,a,t),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===t){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function Yr(t,n,a,o){t=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var A=u.type;qn(u.pendingProps.value,y.value)||(t!==null?t.push(A):t=[A])}}else if(u===fe.current){if(y=u.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(No):t=[No])}u=u.return}t!==null&&ju(n,t,a,o),n.flags|=262144}function Al(t){for(t=t.firstContext;t!==null;){if(!qn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function cr(t){lr=t,Vi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Mn(t){return sm(lr,t)}function Rl(t,n){return lr===null&&cr(t),sm(t,n)}function sm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Vi===null){if(t===null)throw Error(s(308));Vi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Vi=Vi.next=n;return a}var dy=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},py=r.unstable_scheduleCallback,my=r.unstable_NormalPriority,on={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yu(){return{controller:new dy,data:new Map,refCount:0}}function so(t){t.refCount--,t.refCount===0&&py(my,function(){t.controller.abort()})}var oo=null,Zu=0,Zr=0,Kr=null;function gy(t,n){if(oo===null){var a=oo=[];Zu=0,Zr=$f(),Kr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Zu++,n.then(om,om),n}function om(){if(--Zu===0&&oo!==null){Kr!==null&&(Kr.status="fulfilled");var t=oo;oo=null,Zr=0,Kr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function vy(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var lm=P.S;P.S=function(t,n){Wg=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&gy(t,n),lm!==null&&lm(t,n)};var ur=O(null);function Ku(){var t=ur.current;return t!==null?t:Xt.pooledCache}function Cl(t,n){n===null?Ae(ur,ur.current):Ae(ur,n.pool)}function cm(){var t=Ku();return t===null?null:{parent:on._currentValue,pool:t}}var Qr=Error(s(460)),Qu=Error(s(474)),wl=Error(s(542)),Dl={then:function(){}};function um(t){return t=t.status,t==="fulfilled"||t==="rejected"}function fm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Bi,Bi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,dm(t),t;default:if(typeof n.status=="string")n.then(Bi,Bi);else{if(t=Xt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,dm(t),t}throw hr=n,Qr}}function fr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(hr=a,Qr):a}}var hr=null;function hm(){if(hr===null)throw Error(s(459));var t=hr;return hr=null,t}function dm(t){if(t===Qr||t===wl)throw Error(s(483))}var Jr=null,lo=0;function Ul(t){var n=lo;return lo+=1,Jr===null&&(Jr=[]),fm(Jr,t,n)}function co(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ll(t,n){throw n.$$typeof===x?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function pm(t){function n(j,V){if(t){var $=j.deletions;$===null?(j.deletions=[V],j.flags|=16):$.push(V)}}function a(j,V){if(!t)return null;for(;V!==null;)n(j,V),V=V.sibling;return null}function o(j){for(var V=new Map;j!==null;)j.key!==null?V.set(j.key,j):V.set(j.index,j),j=j.sibling;return V}function u(j,V){return j=Hi(j,V),j.index=0,j.sibling=null,j}function h(j,V,$){return j.index=$,t?($=j.alternate,$!==null?($=$.index,$<V?(j.flags|=67108866,V):$):(j.flags|=67108866,V)):(j.flags|=1048576,V)}function y(j){return t&&j.alternate===null&&(j.flags|=67108866),j}function A(j,V,$,ve){return V===null||V.tag!==6?(V=Fu($,j.mode,ve),V.return=j,V):(V=u(V,$),V.return=j,V)}function I(j,V,$,ve){var et=$.type;return et===T?me(j,V,$.props.children,ve,$.key):V!==null&&(V.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===Q&&fr(et)===V.type)?(V=u(V,$.props),co(V,$),V.return=j,V):(V=bl($.type,$.key,$.props,null,j.mode,ve),co(V,$),V.return=j,V)}function ee(j,V,$,ve){return V===null||V.tag!==4||V.stateNode.containerInfo!==$.containerInfo||V.stateNode.implementation!==$.implementation?(V=Hu($,j.mode,ve),V.return=j,V):(V=u(V,$.children||[]),V.return=j,V)}function me(j,V,$,ve,et){return V===null||V.tag!==7?(V=sr($,j.mode,ve,et),V.return=j,V):(V=u(V,$),V.return=j,V)}function xe(j,V,$){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Fu(""+V,j.mode,$),V.return=j,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case M:return $=bl(V.type,V.key,V.props,null,j.mode,$),co($,V),$.return=j,$;case E:return V=Hu(V,j.mode,$),V.return=j,V;case Q:return V=fr(V),xe(j,V,$)}if(pe(V)||ne(V))return V=sr(V,j.mode,$,null),V.return=j,V;if(typeof V.then=="function")return xe(j,Ul(V),$);if(V.$$typeof===L)return xe(j,Rl(j,V),$);Ll(j,V)}return null}function ie(j,V,$,ve){var et=V!==null?V.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return et!==null?null:A(j,V,""+$,ve);if(typeof $=="object"&&$!==null){switch($.$$typeof){case M:return $.key===et?I(j,V,$,ve):null;case E:return $.key===et?ee(j,V,$,ve):null;case Q:return $=fr($),ie(j,V,$,ve)}if(pe($)||ne($))return et!==null?null:me(j,V,$,ve,null);if(typeof $.then=="function")return ie(j,V,Ul($),ve);if($.$$typeof===L)return ie(j,V,Rl(j,$),ve);Ll(j,$)}return null}function ce(j,V,$,ve,et){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return j=j.get($)||null,A(V,j,""+ve,et);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case M:return j=j.get(ve.key===null?$:ve.key)||null,I(V,j,ve,et);case E:return j=j.get(ve.key===null?$:ve.key)||null,ee(V,j,ve,et);case Q:return ve=fr(ve),ce(j,V,$,ve,et)}if(pe(ve)||ne(ve))return j=j.get($)||null,me(V,j,ve,et,null);if(typeof ve.then=="function")return ce(j,V,$,Ul(ve),et);if(ve.$$typeof===L)return ce(j,V,$,Rl(V,ve),et);Ll(V,ve)}return null}function We(j,V,$,ve){for(var et=null,Rt=null,Qe=V,ft=V=0,yt=null;Qe!==null&&ft<$.length;ft++){Qe.index>ft?(yt=Qe,Qe=null):yt=Qe.sibling;var Ct=ie(j,Qe,$[ft],ve);if(Ct===null){Qe===null&&(Qe=yt);break}t&&Qe&&Ct.alternate===null&&n(j,Qe),V=h(Ct,V,ft),Rt===null?et=Ct:Rt.sibling=Ct,Rt=Ct,Qe=yt}if(ft===$.length)return a(j,Qe),Et&&Gi(j,ft),et;if(Qe===null){for(;ft<$.length;ft++)Qe=xe(j,$[ft],ve),Qe!==null&&(V=h(Qe,V,ft),Rt===null?et=Qe:Rt.sibling=Qe,Rt=Qe);return Et&&Gi(j,ft),et}for(Qe=o(Qe);ft<$.length;ft++)yt=ce(Qe,j,ft,$[ft],ve),yt!==null&&(t&&yt.alternate!==null&&Qe.delete(yt.key===null?ft:yt.key),V=h(yt,V,ft),Rt===null?et=yt:Rt.sibling=yt,Rt=yt);return t&&Qe.forEach(function(Ga){return n(j,Ga)}),Et&&Gi(j,ft),et}function nt(j,V,$,ve){if($==null)throw Error(s(151));for(var et=null,Rt=null,Qe=V,ft=V=0,yt=null,Ct=$.next();Qe!==null&&!Ct.done;ft++,Ct=$.next()){Qe.index>ft?(yt=Qe,Qe=null):yt=Qe.sibling;var Ga=ie(j,Qe,Ct.value,ve);if(Ga===null){Qe===null&&(Qe=yt);break}t&&Qe&&Ga.alternate===null&&n(j,Qe),V=h(Ga,V,ft),Rt===null?et=Ga:Rt.sibling=Ga,Rt=Ga,Qe=yt}if(Ct.done)return a(j,Qe),Et&&Gi(j,ft),et;if(Qe===null){for(;!Ct.done;ft++,Ct=$.next())Ct=xe(j,Ct.value,ve),Ct!==null&&(V=h(Ct,V,ft),Rt===null?et=Ct:Rt.sibling=Ct,Rt=Ct);return Et&&Gi(j,ft),et}for(Qe=o(Qe);!Ct.done;ft++,Ct=$.next())Ct=ce(Qe,j,ft,Ct.value,ve),Ct!==null&&(t&&Ct.alternate!==null&&Qe.delete(Ct.key===null?ft:Ct.key),V=h(Ct,V,ft),Rt===null?et=Ct:Rt.sibling=Ct,Rt=Ct);return t&&Qe.forEach(function(CS){return n(j,CS)}),Et&&Gi(j,ft),et}function Ft(j,V,$,ve){if(typeof $=="object"&&$!==null&&$.type===T&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case M:e:{for(var et=$.key;V!==null;){if(V.key===et){if(et=$.type,et===T){if(V.tag===7){a(j,V.sibling),ve=u(V,$.props.children),ve.return=j,j=ve;break e}}else if(V.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===Q&&fr(et)===V.type){a(j,V.sibling),ve=u(V,$.props),co(ve,$),ve.return=j,j=ve;break e}a(j,V);break}else n(j,V);V=V.sibling}$.type===T?(ve=sr($.props.children,j.mode,ve,$.key),ve.return=j,j=ve):(ve=bl($.type,$.key,$.props,null,j.mode,ve),co(ve,$),ve.return=j,j=ve)}return y(j);case E:e:{for(et=$.key;V!==null;){if(V.key===et)if(V.tag===4&&V.stateNode.containerInfo===$.containerInfo&&V.stateNode.implementation===$.implementation){a(j,V.sibling),ve=u(V,$.children||[]),ve.return=j,j=ve;break e}else{a(j,V);break}else n(j,V);V=V.sibling}ve=Hu($,j.mode,ve),ve.return=j,j=ve}return y(j);case Q:return $=fr($),Ft(j,V,$,ve)}if(pe($))return We(j,V,$,ve);if(ne($)){if(et=ne($),typeof et!="function")throw Error(s(150));return $=et.call($),nt(j,V,$,ve)}if(typeof $.then=="function")return Ft(j,V,Ul($),ve);if($.$$typeof===L)return Ft(j,V,Rl(j,$),ve);Ll(j,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,V!==null&&V.tag===6?(a(j,V.sibling),ve=u(V,$),ve.return=j,j=ve):(a(j,V),ve=Fu($,j.mode,ve),ve.return=j,j=ve),y(j)):a(j,V)}return function(j,V,$,ve){try{lo=0;var et=Ft(j,V,$,ve);return Jr=null,et}catch(Qe){if(Qe===Qr||Qe===wl)throw Qe;var Rt=jn(29,Qe,null,j.mode);return Rt.lanes=ve,Rt.return=j,Rt}finally{}}}var dr=pm(!0),mm=pm(!1),ba=!1;function Ju(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $u(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ta(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Aa(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Dt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=El(t),Jp(t,null,a),n}return Ml(t,o,n,a),El(t)}function uo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Ai(t,a)}}function ef(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=y:h=h.next=y,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var tf=!1;function fo(){if(tf){var t=Kr;if(t!==null)throw t}}function ho(t,n,a,o){tf=!1;var u=t.updateQueue;ba=!1;var h=u.firstBaseUpdate,y=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var I=A,ee=I.next;I.next=null,y===null?h=ee:y.next=ee,y=I;var me=t.alternate;me!==null&&(me=me.updateQueue,A=me.lastBaseUpdate,A!==y&&(A===null?me.firstBaseUpdate=ee:A.next=ee,me.lastBaseUpdate=I))}if(h!==null){var xe=u.baseState;y=0,me=ee=I=null,A=h;do{var ie=A.lane&-536870913,ce=ie!==A.lane;if(ce?(xt&ie)===ie:(o&ie)===ie){ie!==0&&ie===Zr&&(tf=!0),me!==null&&(me=me.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var We=t,nt=A;ie=n;var Ft=a;switch(nt.tag){case 1:if(We=nt.payload,typeof We=="function"){xe=We.call(Ft,xe,ie);break e}xe=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=nt.payload,ie=typeof We=="function"?We.call(Ft,xe,ie):We,ie==null)break e;xe=g({},xe,ie);break e;case 2:ba=!0}}ie=A.callback,ie!==null&&(t.flags|=64,ce&&(t.flags|=8192),ce=u.callbacks,ce===null?u.callbacks=[ie]:ce.push(ie))}else ce={lane:ie,tag:A.tag,payload:A.payload,callback:A.callback,next:null},me===null?(ee=me=ce,I=xe):me=me.next=ce,y|=ie;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ce=A,A=ce.next,ce.next=null,u.lastBaseUpdate=ce,u.shared.pending=null}}while(!0);me===null&&(I=xe),u.baseState=I,u.firstBaseUpdate=ee,u.lastBaseUpdate=me,h===null&&(u.shared.lanes=0),Ua|=y,t.lanes=y,t.memoizedState=xe}}function gm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function vm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)gm(a[t],n)}var $r=O(null),Nl=O(0);function _m(t,n){t=Ji,Ae(Nl,t),Ae($r,n),Ji=t|n.baseLanes}function nf(){Ae(Nl,Ji),Ae($r,$r.current)}function af(){Ji=Nl.current,te($r),te(Nl)}var Yn=O(null),li=null;function Ra(t){var n=t.alternate;Ae(tn,tn.current&1),Ae(Yn,t),li===null&&(n===null||$r.current!==null||n.memoizedState!==null)&&(li=t)}function rf(t){Ae(tn,tn.current),Ae(Yn,t),li===null&&(li=t)}function xm(t){t.tag===22?(Ae(tn,tn.current),Ae(Yn,t),li===null&&(li=t)):Ca()}function Ca(){Ae(tn,tn.current),Ae(Yn,Yn.current)}function Zn(t){te(Yn),li===t&&(li=null),te(tn)}var tn=O(0);function Ol(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||fh(a)||hh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Xi=0,ut=null,It=null,ln=null,Pl=!1,es=!1,pr=!1,zl=0,po=0,ts=null,_y=0;function Jt(){throw Error(s(321))}function sf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!qn(t[a],n[a]))return!1;return!0}function of(t,n,a,o,u,h){return Xi=h,ut=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?ng:Mf,pr=!1,h=a(o,u),pr=!1,es&&(h=Sm(n,a,o,u)),ym(t),h}function ym(t){P.H=vo;var n=It!==null&&It.next!==null;if(Xi=0,ln=It=ut=null,Pl=!1,po=0,ts=null,n)throw Error(s(300));t===null||cn||(t=t.dependencies,t!==null&&Al(t)&&(cn=!0))}function Sm(t,n,a,o){ut=t;var u=0;do{if(es&&(ts=null),po=0,es=!1,25<=u)throw Error(s(301));if(u+=1,ln=It=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}P.H=ig,h=n(a,o)}while(es);return h}function xy(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?mo(n):n,t=t.useState()[0],(It!==null?It.memoizedState:null)!==t&&(ut.flags|=1024),n}function lf(){var t=zl!==0;return zl=0,t}function cf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function uf(t){if(Pl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Pl=!1}Xi=0,ln=It=ut=null,es=!1,po=zl=0,ts=null}function Un(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?ut.memoizedState=ln=t:ln=ln.next=t,ln}function nn(){if(It===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=It.next;var n=ln===null?ut.memoizedState:ln.next;if(n!==null)ln=n,It=t;else{if(t===null)throw ut.alternate===null?Error(s(467)):Error(s(310));It=t,t={memoizedState:It.memoizedState,baseState:It.baseState,baseQueue:It.baseQueue,queue:It.queue,next:null},ln===null?ut.memoizedState=ln=t:ln=ln.next=t}return ln}function Il(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function mo(t){var n=po;return po+=1,ts===null&&(ts=[]),t=fm(ts,t,n),n=ut,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?ng:Mf),t}function Bl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return mo(t);if(t.$$typeof===L)return Mn(t)}throw Error(s(438,String(t)))}function ff(t){var n=null,a=ut.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ut.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Il(),ut.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=C;return n.index++,a}function Wi(t,n){return typeof n=="function"?n(t):n}function Fl(t){var n=nn();return hf(n,It,t)}function hf(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,h=o.pending;if(h!==null){if(u!==null){var y=u.next;u.next=h.next,h.next=y}n.baseQueue=u=h,o.pending=null}if(h=t.baseState,u===null)t.memoizedState=h;else{n=u.next;var A=y=null,I=null,ee=n,me=!1;do{var xe=ee.lane&-536870913;if(xe!==ee.lane?(xt&xe)===xe:(Xi&xe)===xe){var ie=ee.revertLane;if(ie===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),xe===Zr&&(me=!0);else if((Xi&ie)===ie){ee=ee.next,ie===Zr&&(me=!0);continue}else xe={lane:0,revertLane:ee.revertLane,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},I===null?(A=I=xe,y=h):I=I.next=xe,ut.lanes|=ie,Ua|=ie;xe=ee.action,pr&&a(h,xe),h=ee.hasEagerState?ee.eagerState:a(h,xe)}else ie={lane:xe,revertLane:ee.revertLane,gesture:ee.gesture,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},I===null?(A=I=ie,y=h):I=I.next=ie,ut.lanes|=xe,Ua|=xe;ee=ee.next}while(ee!==null&&ee!==n);if(I===null?y=h:I.next=A,!qn(h,t.memoizedState)&&(cn=!0,me&&(a=Kr,a!==null)))throw a;t.memoizedState=h,t.baseState=y,t.baseQueue=I,o.lastRenderedState=h}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function df(t){var n=nn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do h=t(h,y.action),y=y.next;while(y!==u);qn(h,n.memoizedState)||(cn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function Mm(t,n,a){var o=ut,u=nn(),h=Et;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var y=!qn((It||u).memoizedState,a);if(y&&(u.memoizedState=a,cn=!0),u=u.queue,gf(Tm.bind(null,o,u,t),[t]),u.getSnapshot!==n||y||ln!==null&&ln.memoizedState.tag&1){if(o.flags|=2048,ns(9,{destroy:void 0},bm.bind(null,o,u,a,n),null),Xt===null)throw Error(s(349));h||(Xi&127)!==0||Em(o,n,a)}return a}function Em(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ut.updateQueue,n===null?(n=Il(),ut.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function bm(t,n,a,o){n.value=a,n.getSnapshot=o,Am(n)&&Rm(t)}function Tm(t,n,a){return a(function(){Am(n)&&Rm(t)})}function Am(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!qn(t,a)}catch{return!0}}function Rm(t){var n=rr(t,2);n!==null&&Gn(n,t,2)}function pf(t){var n=Un();if(typeof t=="function"){var a=t;if(t=a(),pr){ke(!0);try{a()}finally{ke(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:t},n}function Cm(t,n,a,o){return t.baseState=a,hf(t,It,typeof o=="function"?o:Wi)}function yy(t,n,a,o,u){if(Vl(t))throw Error(s(485));if(t=n.action,t!==null){var h={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){h.listeners.push(y)}};P.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,wm(n,h)):(h.next=a.next,n.pending=a.next=h)}}function wm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var h=P.T,y={};P.T=y;try{var A=a(u,o),I=P.S;I!==null&&I(y,A),Dm(t,n,A)}catch(ee){mf(t,n,ee)}finally{h!==null&&y.types!==null&&(h.types=y.types),P.T=h}}else try{h=a(u,o),Dm(t,n,h)}catch(ee){mf(t,n,ee)}}function Dm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Um(t,n,o)},function(o){return mf(t,n,o)}):Um(t,n,a)}function Um(t,n,a){n.status="fulfilled",n.value=a,Lm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,wm(t,a)))}function mf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Lm(n),n=n.next;while(n!==o)}t.action=null}function Lm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Nm(t,n){return n}function Om(t,n){if(Et){var a=Xt.formState;if(a!==null){e:{var o=ut;if(Et){if(jt){t:{for(var u=jt,h=oi;u.nodeType!==8;){if(!h){u=null;break t}if(u=ci(u.nextSibling),u===null){u=null;break t}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){jt=ci(u.nextSibling),o=u.data==="F!";break e}}Ma(o)}o=!1}o&&(n=a[0])}}return a=Un(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Nm,lastRenderedState:n},a.queue=o,a=$m.bind(null,ut,o),o.dispatch=a,o=pf(!1),h=Sf.bind(null,ut,!1,o.queue),o=Un(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=yy.bind(null,ut,u,h,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Pm(t){var n=nn();return zm(n,It,t)}function zm(t,n,a){if(n=hf(t,n,Nm)[0],t=Fl(Wi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=mo(n)}catch(y){throw y===Qr?wl:y}else o=n;n=nn();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(ut.flags|=2048,ns(9,{destroy:void 0},Sy.bind(null,u,a),null)),[o,h,t]}function Sy(t,n){t.action=n}function Im(t){var n=nn(),a=It;if(a!==null)return zm(n,a,t);nn(),n=n.memoizedState,a=nn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function ns(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ut.updateQueue,n===null&&(n=Il(),ut.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Bm(){return nn().memoizedState}function Hl(t,n,a,o){var u=Un();ut.flags|=t,u.memoizedState=ns(1|n,{destroy:void 0},a,o===void 0?null:o)}function Gl(t,n,a,o){var u=nn();o=o===void 0?null:o;var h=u.memoizedState.inst;It!==null&&o!==null&&sf(o,It.memoizedState.deps)?u.memoizedState=ns(n,h,a,o):(ut.flags|=t,u.memoizedState=ns(1|n,h,a,o))}function Fm(t,n){Hl(8390656,8,t,n)}function gf(t,n){Gl(2048,8,t,n)}function My(t){ut.flags|=4;var n=ut.updateQueue;if(n===null)n=Il(),ut.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Hm(t){var n=nn().memoizedState;return My({ref:n,nextImpl:t}),function(){if((Dt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Gm(t,n){return Gl(4,2,t,n)}function Vm(t,n){return Gl(4,4,t,n)}function km(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Xm(t,n,a){a=a!=null?a.concat([t]):null,Gl(4,4,km.bind(null,n,t),a)}function vf(){}function Wm(t,n){var a=nn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&sf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function qm(t,n){var a=nn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&sf(n,o[1]))return o[0];if(o=t(),pr){ke(!0);try{t()}finally{ke(!1)}}return a.memoizedState=[o,n],o}function _f(t,n,a){return a===void 0||(Xi&1073741824)!==0&&(xt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=jg(),ut.lanes|=t,Ua|=t,a)}function jm(t,n,a,o){return qn(a,n)?a:$r.current!==null?(t=_f(t,a,o),qn(t,n)||(cn=!0),t):(Xi&42)===0||(Xi&1073741824)!==0&&(xt&261930)===0?(cn=!0,t.memoizedState=a):(t=jg(),ut.lanes|=t,Ua|=t,n)}function Ym(t,n,a,o,u){var h=K.p;K.p=h!==0&&8>h?h:8;var y=P.T,A={};P.T=A,Sf(t,!1,n,a);try{var I=u(),ee=P.S;if(ee!==null&&ee(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var me=vy(I,o);go(t,n,me,Jn(t))}else go(t,n,o,Jn(t))}catch(xe){go(t,n,{then:function(){},status:"rejected",reason:xe},Jn())}finally{K.p=h,y!==null&&A.types!==null&&(y.types=A.types),P.T=y}}function Ey(){}function xf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=Zm(t).queue;Ym(t,u,n,q,a===null?Ey:function(){return Km(t),a(o)})}function Zm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Km(t){var n=Zm(t);n.next===null&&(n=t.alternate.memoizedState),go(t,n.next.queue,{},Jn())}function yf(){return Mn(No)}function Qm(){return nn().memoizedState}function Jm(){return nn().memoizedState}function by(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Jn();t=Ta(a);var o=Aa(n,t,a);o!==null&&(Gn(o,n,a),uo(o,n,a)),n={cache:Yu()},t.payload=n;return}n=n.return}}function Ty(t,n,a){var o=Jn();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Vl(t)?eg(n,a):(a=Iu(t,n,a,o),a!==null&&(Gn(a,t,o),tg(a,n,o)))}function $m(t,n,a){var o=Jn();go(t,n,a,o)}function go(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Vl(t))eg(n,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var y=n.lastRenderedState,A=h(y,a);if(u.hasEagerState=!0,u.eagerState=A,qn(A,y))return Ml(t,n,u,0),Xt===null&&Sl(),!1}catch{}finally{}if(a=Iu(t,n,u,o),a!==null)return Gn(a,t,o),tg(a,n,o),!0}return!1}function Sf(t,n,a,o){if(o={lane:2,revertLane:$f(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Vl(t)){if(n)throw Error(s(479))}else n=Iu(t,a,o,2),n!==null&&Gn(n,t,2)}function Vl(t){var n=t.alternate;return t===ut||n!==null&&n===ut}function eg(t,n){es=Pl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function tg(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Ai(t,a)}}var vo={readContext:Mn,use:Bl,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useLayoutEffect:Jt,useInsertionEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useSyncExternalStore:Jt,useId:Jt,useHostTransitionStatus:Jt,useFormState:Jt,useActionState:Jt,useOptimistic:Jt,useMemoCache:Jt,useCacheRefresh:Jt};vo.useEffectEvent=Jt;var ng={readContext:Mn,use:Bl,useCallback:function(t,n){return Un().memoizedState=[t,n===void 0?null:n],t},useContext:Mn,useEffect:Fm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Hl(4194308,4,km.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Hl(4194308,4,t,n)},useInsertionEffect:function(t,n){Hl(4,2,t,n)},useMemo:function(t,n){var a=Un();n=n===void 0?null:n;var o=t();if(pr){ke(!0);try{t()}finally{ke(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Un();if(a!==void 0){var u=a(n);if(pr){ke(!0);try{a(n)}finally{ke(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=Ty.bind(null,ut,t),[o.memoizedState,t]},useRef:function(t){var n=Un();return t={current:t},n.memoizedState=t},useState:function(t){t=pf(t);var n=t.queue,a=$m.bind(null,ut,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:vf,useDeferredValue:function(t,n){var a=Un();return _f(a,t,n)},useTransition:function(){var t=pf(!1);return t=Ym.bind(null,ut,t.queue,!0,!1),Un().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ut,u=Un();if(Et){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Xt===null)throw Error(s(349));(xt&127)!==0||Em(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,Fm(Tm.bind(null,o,h,t),[t]),o.flags|=2048,ns(9,{destroy:void 0},bm.bind(null,o,h,a,n),null),a},useId:function(){var t=Un(),n=Xt.identifierPrefix;if(Et){var a=wi,o=Ci;a=(o&~(1<<32-Ue(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=zl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=_y++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:yf,useFormState:Om,useActionState:Om,useOptimistic:function(t){var n=Un();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Sf.bind(null,ut,!0,a),a.dispatch=n,[t,n]},useMemoCache:ff,useCacheRefresh:function(){return Un().memoizedState=by.bind(null,ut)},useEffectEvent:function(t){var n=Un(),a={impl:t};return n.memoizedState=a,function(){if((Dt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Mf={readContext:Mn,use:Bl,useCallback:Wm,useContext:Mn,useEffect:gf,useImperativeHandle:Xm,useInsertionEffect:Gm,useLayoutEffect:Vm,useMemo:qm,useReducer:Fl,useRef:Bm,useState:function(){return Fl(Wi)},useDebugValue:vf,useDeferredValue:function(t,n){var a=nn();return jm(a,It.memoizedState,t,n)},useTransition:function(){var t=Fl(Wi)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:mo(t),n]},useSyncExternalStore:Mm,useId:Qm,useHostTransitionStatus:yf,useFormState:Pm,useActionState:Pm,useOptimistic:function(t,n){var a=nn();return Cm(a,It,t,n)},useMemoCache:ff,useCacheRefresh:Jm};Mf.useEffectEvent=Hm;var ig={readContext:Mn,use:Bl,useCallback:Wm,useContext:Mn,useEffect:gf,useImperativeHandle:Xm,useInsertionEffect:Gm,useLayoutEffect:Vm,useMemo:qm,useReducer:df,useRef:Bm,useState:function(){return df(Wi)},useDebugValue:vf,useDeferredValue:function(t,n){var a=nn();return It===null?_f(a,t,n):jm(a,It.memoizedState,t,n)},useTransition:function(){var t=df(Wi)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:mo(t),n]},useSyncExternalStore:Mm,useId:Qm,useHostTransitionStatus:yf,useFormState:Im,useActionState:Im,useOptimistic:function(t,n){var a=nn();return It!==null?Cm(a,It,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:ff,useCacheRefresh:Jm};ig.useEffectEvent=Hm;function Ef(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var bf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=Jn(),u=Ta(o);u.payload=n,a!=null&&(u.callback=a),n=Aa(t,u,o),n!==null&&(Gn(n,t,o),uo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=Jn(),u=Ta(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Aa(t,u,o),n!==null&&(Gn(n,t,o),uo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Jn(),o=Ta(a);o.tag=2,n!=null&&(o.callback=n),n=Aa(t,o,a),n!==null&&(Gn(n,t,a),uo(n,t,a))}};function ag(t,n,a,o,u,h,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,h,y):n.prototype&&n.prototype.isPureReactComponent?!no(a,o)||!no(u,h):!0}function rg(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&bf.enqueueReplaceState(n,n.state,null)}function mr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function sg(t){yl(t)}function og(t){console.error(t)}function lg(t){yl(t)}function kl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function cg(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Tf(t,n,a){return a=Ta(a),a.tag=3,a.payload={element:null},a.callback=function(){kl(t,n)},a}function ug(t){return t=Ta(t),t.tag=3,t}function fg(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;t.payload=function(){return u(h)},t.callback=function(){cg(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){cg(n,a,o),typeof u!="function"&&(La===null?La=new Set([this]):La.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function Ay(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Yr(n,a,u,!0),a=Yn.current,a!==null){switch(a.tag){case 31:case 13:return li===null?tc():a.alternate===null&&$t===0&&($t=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Dl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Kf(t,o,u)),!1;case 22:return a.flags|=65536,o===Dl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Kf(t,o,u)),!1}throw Error(s(435,a.tag))}return Kf(t,o,u),tc(),!1}if(Et)return n=Yn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==ku&&(t=Error(s(422),{cause:o}),ro(ai(t,a)))):(o!==ku&&(n=Error(s(423),{cause:o}),ro(ai(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=ai(o,a),u=Tf(t.stateNode,o,u),ef(t,u),$t!==4&&($t=2)),!1;var h=Error(s(520),{cause:o});if(h=ai(h,a),To===null?To=[h]:To.push(h),$t!==4&&($t=2),n===null)return!0;o=ai(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Tf(a.stateNode,o,t),ef(a,t),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(La===null||!La.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=ug(u),fg(u,t,a,o),ef(a,u),!1}a=a.return}while(a!==null);return!1}var Af=Error(s(461)),cn=!1;function En(t,n,a,o){n.child=t===null?mm(n,null,a,o):dr(n,t.child,a,o)}function hg(t,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var y={};for(var A in o)A!=="ref"&&(y[A]=o[A])}else y=o;return cr(n),o=of(t,n,a,y,h,u),A=lf(),t!==null&&!cn?(cf(t,n,u),qi(t,n,u)):(Et&&A&&Gu(n),n.flags|=1,En(t,n,o,u),n.child)}function dg(t,n,a,o,u){if(t===null){var h=a.type;return typeof h=="function"&&!Bu(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,pg(t,n,h,o,u)):(t=bl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(h=t.child,!Of(t,u)){var y=h.memoizedProps;if(a=a.compare,a=a!==null?a:no,a(y,o)&&t.ref===n.ref)return qi(t,n,u)}return n.flags|=1,t=Hi(h,o),t.ref=n.ref,t.return=n,n.child=t}function pg(t,n,a,o,u){if(t!==null){var h=t.memoizedProps;if(no(h,o)&&t.ref===n.ref)if(cn=!1,n.pendingProps=o=h,Of(t,u))(t.flags&131072)!==0&&(cn=!0);else return n.lanes=t.lanes,qi(t,n,u)}return Rf(t,n,a,o,u)}function mg(t,n,a,o){var u=o.children,h=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return gg(t,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Cl(n,h!==null?h.cachePool:null),h!==null?_m(n,h):nf(),xm(n);else return o=n.lanes=536870912,gg(t,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(Cl(n,h.cachePool),_m(n,h),Ca(),n.memoizedState=null):(t!==null&&Cl(n,null),nf(),Ca());return En(t,n,u,a),n.child}function _o(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function gg(t,n,a,o,u){var h=Ku();return h=h===null?null:{parent:on._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},t!==null&&Cl(n,null),nf(),xm(n),t!==null&&Yr(t,n,o,!0),n.childLanes=u,null}function Xl(t,n){return n=ql({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function vg(t,n,a){return dr(n,t.child,null,a),t=Xl(n,n.pendingProps),t.flags|=2,Zn(n),n.memoizedState=null,t}function Ry(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Et){if(o.mode==="hidden")return t=Xl(n,o),n.lanes=536870912,_o(null,t);if(rf(n),(t=jt)?(t=wv(t,oi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ya!==null?{id:Ci,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},a=em(t),a.return=n,n.child=a,Sn=n,jt=null)):t=null,t===null)throw Ma(n);return n.lanes=536870912,null}return Xl(n,o)}var h=t.memoizedState;if(h!==null){var y=h.dehydrated;if(rf(n),u)if(n.flags&256)n.flags&=-257,n=vg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(cn||Yr(t,n,a,!1),u=(a&t.childLanes)!==0,cn||u){if(o=Xt,o!==null&&(y=Nr(o,a),y!==0&&y!==h.retryLane))throw h.retryLane=y,rr(t,y),Gn(o,t,y),Af;tc(),n=vg(t,n,a)}else t=h.treeContext,jt=ci(y.nextSibling),Sn=n,Et=!0,Sa=null,oi=!1,t!==null&&im(n,t),n=Xl(n,o),n.flags|=4096;return n}return t=Hi(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Wl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Rf(t,n,a,o,u){return cr(n),a=of(t,n,a,o,void 0,u),o=lf(),t!==null&&!cn?(cf(t,n,u),qi(t,n,u)):(Et&&o&&Gu(n),n.flags|=1,En(t,n,a,u),n.child)}function _g(t,n,a,o,u,h){return cr(n),n.updateQueue=null,a=Sm(n,o,a,u),ym(t),o=lf(),t!==null&&!cn?(cf(t,n,h),qi(t,n,h)):(Et&&o&&Gu(n),n.flags|=1,En(t,n,a,h),n.child)}function xg(t,n,a,o,u){if(cr(n),n.stateNode===null){var h=Xr,y=a.contextType;typeof y=="object"&&y!==null&&(h=Mn(y)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=bf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},Ju(n),y=a.contextType,h.context=typeof y=="object"&&y!==null?Mn(y):Xr,h.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(Ef(n,a,y,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(y=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),y!==h.state&&bf.enqueueReplaceState(h,h.state,null),ho(n,o,h,u),fo(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){h=n.stateNode;var A=n.memoizedProps,I=mr(a,A);h.props=I;var ee=h.context,me=a.contextType;y=Xr,typeof me=="object"&&me!==null&&(y=Mn(me));var xe=a.getDerivedStateFromProps;me=typeof xe=="function"||typeof h.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,me||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(A||ee!==y)&&rg(n,h,o,y),ba=!1;var ie=n.memoizedState;h.state=ie,ho(n,o,h,u),fo(),ee=n.memoizedState,A||ie!==ee||ba?(typeof xe=="function"&&(Ef(n,a,xe,o),ee=n.memoizedState),(I=ba||ag(n,a,I,o,ie,ee,y))?(me||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ee),h.props=o,h.state=ee,h.context=y,o=I):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,$u(t,n),y=n.memoizedProps,me=mr(a,y),h.props=me,xe=n.pendingProps,ie=h.context,ee=a.contextType,I=Xr,typeof ee=="object"&&ee!==null&&(I=Mn(ee)),A=a.getDerivedStateFromProps,(ee=typeof A=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(y!==xe||ie!==I)&&rg(n,h,o,I),ba=!1,ie=n.memoizedState,h.state=ie,ho(n,o,h,u),fo();var ce=n.memoizedState;y!==xe||ie!==ce||ba||t!==null&&t.dependencies!==null&&Al(t.dependencies)?(typeof A=="function"&&(Ef(n,a,A,o),ce=n.memoizedState),(me=ba||ag(n,a,me,o,ie,ce,I)||t!==null&&t.dependencies!==null&&Al(t.dependencies))?(ee||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ce,I),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ce,I)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||y===t.memoizedProps&&ie===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&ie===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ce),h.props=o,h.state=ce,h.context=I,o=me):(typeof h.componentDidUpdate!="function"||y===t.memoizedProps&&ie===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&ie===t.memoizedState||(n.flags|=1024),o=!1)}return h=o,Wl(t,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,t!==null&&o?(n.child=dr(n,t.child,null,u),n.child=dr(n,null,a,u)):En(t,n,a,u),n.memoizedState=h.state,t=n.child):t=qi(t,n,u),t}function yg(t,n,a,o){return or(),n.flags|=256,En(t,n,a,o),n.child}var Cf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wf(t){return{baseLanes:t,cachePool:cm()}}function Df(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Qn),t}function Sg(t,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,y;if((y=h)||(y=t!==null&&t.memoizedState===null?!1:(tn.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,t===null){if(Et){if(u?Ra(n):Ca(),(t=jt)?(t=wv(t,oi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ya!==null?{id:Ci,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},a=em(t),a.return=n,n.child=a,Sn=n,jt=null)):t=null,t===null)throw Ma(n);return hh(t)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Ca(),u=n.mode,A=ql({mode:"hidden",children:A},u),o=sr(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=wf(a),o.childLanes=Df(t,y,a),n.memoizedState=Cf,_o(null,o)):(Ra(n),Uf(n,A))}var I=t.memoizedState;if(I!==null&&(A=I.dehydrated,A!==null)){if(h)n.flags&256?(Ra(n),n.flags&=-257,n=Lf(t,n,a)):n.memoizedState!==null?(Ca(),n.child=t.child,n.flags|=128,n=null):(Ca(),A=o.fallback,u=n.mode,o=ql({mode:"visible",children:o.children},u),A=sr(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,dr(n,t.child,null,a),o=n.child,o.memoizedState=wf(a),o.childLanes=Df(t,y,a),n.memoizedState=Cf,n=_o(null,o));else if(Ra(n),hh(A)){if(y=A.nextSibling&&A.nextSibling.dataset,y)var ee=y.dgst;y=ee,o=Error(s(419)),o.stack="",o.digest=y,ro({value:o,source:null,stack:null}),n=Lf(t,n,a)}else if(cn||Yr(t,n,a,!1),y=(a&t.childLanes)!==0,cn||y){if(y=Xt,y!==null&&(o=Nr(y,a),o!==0&&o!==I.retryLane))throw I.retryLane=o,rr(t,o),Gn(y,t,o),Af;fh(A)||tc(),n=Lf(t,n,a)}else fh(A)?(n.flags|=192,n.child=t.child,n=null):(t=I.treeContext,jt=ci(A.nextSibling),Sn=n,Et=!0,Sa=null,oi=!1,t!==null&&im(n,t),n=Uf(n,o.children),n.flags|=4096);return n}return u?(Ca(),A=o.fallback,u=n.mode,I=t.child,ee=I.sibling,o=Hi(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,ee!==null?A=Hi(ee,A):(A=sr(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,_o(null,o),o=n.child,A=t.child.memoizedState,A===null?A=wf(a):(u=A.cachePool,u!==null?(I=on._currentValue,u=u.parent!==I?{parent:I,pool:I}:u):u=cm(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=Df(t,y,a),n.memoizedState=Cf,_o(t.child,o)):(Ra(n),a=t.child,t=a.sibling,a=Hi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(y=n.deletions,y===null?(n.deletions=[t],n.flags|=16):y.push(t)),n.child=a,n.memoizedState=null,a)}function Uf(t,n){return n=ql({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function ql(t,n){return t=jn(22,t,null,n),t.lanes=0,t}function Lf(t,n,a){return dr(n,t.child,null,a),t=Uf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Mg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),qu(t.return,n,a)}function Nf(t,n,a,o,u,h){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:h}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=h)}function Eg(t,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var y=tn.current,A=(y&2)!==0;if(A?(y=y&1|2,n.flags|=128):y&=1,Ae(tn,y),En(t,n,o,a),o=Et?ao:0,!A&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mg(t,a,n);else if(t.tag===19)Mg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Ol(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Nf(n,!1,u,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Ol(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Nf(n,!0,a,null,h,o);break;case"together":Nf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function qi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ua|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Yr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Hi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Hi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Of(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Al(t)))}function Cy(t,n,a){switch(n.tag){case 3:Oe(n,n.stateNode.containerInfo),Ea(n,on,t.memoizedState.cache),or();break;case 27:case 5:qe(n);break;case 4:Oe(n,n.stateNode.containerInfo);break;case 10:Ea(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,rf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ra(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Sg(t,n,a):(Ra(n),t=qi(t,n,a),t!==null?t.sibling:null);Ra(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Yr(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Eg(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Ae(tn,tn.current),o)break;return null;case 22:return n.lanes=0,mg(t,n,a,n.pendingProps);case 24:Ea(n,on,t.memoizedState.cache)}return qi(t,n,a)}function bg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)cn=!0;else{if(!Of(t,a)&&(n.flags&128)===0)return cn=!1,Cy(t,n,a);cn=(t.flags&131072)!==0}else cn=!1,Et&&(n.flags&1048576)!==0&&nm(n,ao,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=fr(n.elementType),n.type=t,typeof t=="function")Bu(t)?(o=mr(t,o),n.tag=1,n=xg(null,n,t,o,a)):(n.tag=0,n=Rf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===D){n.tag=11,n=hg(null,n,t,o,a);break e}else if(u===z){n.tag=14,n=dg(null,n,t,o,a);break e}}throw n=_e(t)||t,Error(s(306,n,""))}}return n;case 0:return Rf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=mr(o,n.pendingProps),xg(t,n,o,u,a);case 3:e:{if(Oe(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,$u(t,n),ho(n,o,null,a);var y=n.memoizedState;if(o=y.cache,Ea(n,on,o),o!==h.cache&&ju(n,[on],a,!0),fo(),o=y.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=yg(t,n,o,a);break e}else if(o!==u){u=ai(Error(s(424)),n),ro(u),n=yg(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(jt=ci(t.firstChild),Sn=n,Et=!0,Sa=null,oi=!0,a=mm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(or(),o===u){n=qi(t,n,a);break e}En(t,n,o,a)}n=n.child}return n;case 26:return Wl(t,n),t===null?(a=Pv(n.type,null,n.pendingProps,null))?n.memoizedState=a:Et||(a=n.type,t=n.pendingProps,o=lc(re.current).createElement(a),o[sn]=n,o[xn]=t,bn(o,a,t),Se(o),n.stateNode=o):n.memoizedState=Pv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return qe(n),t===null&&Et&&(o=n.stateNode=Lv(n.type,n.pendingProps,re.current),Sn=n,oi=!0,u=jt,za(n.type)?(dh=u,jt=ci(o.firstChild)):jt=u),En(t,n,n.pendingProps.children,a),Wl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Et&&((u=o=jt)&&(o=aS(o,n.type,n.pendingProps,oi),o!==null?(n.stateNode=o,Sn=n,jt=ci(o.firstChild),oi=!1,u=!0):u=!1),u||Ma(n)),qe(n),u=n.type,h=n.pendingProps,y=t!==null?t.memoizedProps:null,o=h.children,lh(u,h)?o=null:y!==null&&lh(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=of(t,n,xy,null,null,a),No._currentValue=u),Wl(t,n),En(t,n,o,a),n.child;case 6:return t===null&&Et&&((t=a=jt)&&(a=rS(a,n.pendingProps,oi),a!==null?(n.stateNode=a,Sn=n,jt=null,t=!0):t=!1),t||Ma(n)),null;case 13:return Sg(t,n,a);case 4:return Oe(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=dr(n,null,o,a):En(t,n,o,a),n.child;case 11:return hg(t,n,n.type,n.pendingProps,a);case 7:return En(t,n,n.pendingProps,a),n.child;case 8:return En(t,n,n.pendingProps.children,a),n.child;case 12:return En(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ea(n,n.type,o.value),En(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,cr(n),u=Mn(u),o=o(u),n.flags|=1,En(t,n,o,a),n.child;case 14:return dg(t,n,n.type,n.pendingProps,a);case 15:return pg(t,n,n.type,n.pendingProps,a);case 19:return Eg(t,n,a);case 31:return Ry(t,n,a);case 22:return mg(t,n,a,n.pendingProps);case 24:return cr(n),o=Mn(on),t===null?(u=Ku(),u===null&&(u=Xt,h=Yu(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},Ju(n),Ea(n,on,u)):((t.lanes&a)!==0&&($u(t,n),ho(n,null,null,a),fo()),u=t.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ea(n,on,o)):(o=h.cache,Ea(n,on,o),o!==u.cache&&ju(n,[on],a,!0))),En(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ji(t){t.flags|=4}function Pf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Qg())t.flags|=8192;else throw hr=Dl,Qu}else t.flags&=-16777217}function Tg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Hv(n))if(Qg())t.flags|=8192;else throw hr=Dl,Qu}function jl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ot():536870912,t.lanes|=n,ss|=n)}function xo(t,n){if(!Et)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Yt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function wy(t,n,a){var o=n.pendingProps;switch(Vu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(n),null;case 1:return Yt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ki(on),He(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(jr(n)?ji(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Xu())),Yt(n),null;case 26:var u=n.type,h=n.memoizedState;return t===null?(ji(n),h!==null?(Yt(n),Tg(n,h)):(Yt(n),Pf(n,u,null,o,a))):h?h!==t.memoizedState?(ji(n),Yt(n),Tg(n,h)):(Yt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&ji(n),Yt(n),Pf(n,u,t,o,a)),null;case 27:if(ct(n),a=re.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ji(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Yt(n),null}t=De.current,jr(n)?am(n):(t=Lv(u,o,a),n.stateNode=t,ji(n))}return Yt(n),null;case 5:if(ct(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ji(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Yt(n),null}if(h=De.current,jr(n))am(n);else{var y=lc(re.current);switch(h){case 1:h=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=y.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}h[sn]=n,h[xn]=o;e:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)h.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break e;for(;y.sibling===null;){if(y.return===null||y.return===n)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=h;e:switch(bn(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ji(n)}}return Yt(n),Pf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ji(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=re.current,jr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Sn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[sn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Sv(t.nodeValue,a)),t||Ma(n,!0)}else t=lc(t).createTextNode(o),t[sn]=n,n.stateNode=t}return Yt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=jr(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[sn]=n}else or(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Yt(n),t=!1}else a=Xu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Zn(n),n):(Zn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Yt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=jr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[sn]=n}else or(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Yt(n),u=!1}else u=Xu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Zn(n),n):(Zn(n),null)}return Zn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),jl(n,n.updateQueue),Yt(n),null);case 4:return He(),t===null&&ih(n.stateNode.containerInfo),Yt(n),null;case 10:return ki(n.type),Yt(n),null;case 19:if(te(tn),o=n.memoizedState,o===null)return Yt(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)xo(o,!1);else{if($t!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(h=Ol(t),h!==null){for(n.flags|=128,xo(o,!1),t=h.updateQueue,n.updateQueue=t,jl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)$p(a,t),a=a.sibling;return Ae(tn,tn.current&1|2),Et&&Gi(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&b()>Jl&&(n.flags|=128,u=!0,xo(o,!1),n.lanes=4194304)}else{if(!u)if(t=Ol(h),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,jl(n,t),xo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Et)return Yt(n),null}else 2*b()-o.renderingStartTime>Jl&&a!==536870912&&(n.flags|=128,u=!0,xo(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(t=o.last,t!==null?t.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=b(),t.sibling=null,a=tn.current,Ae(tn,u?a&1|2:a&1),Et&&Gi(n,o.treeForkCount),t):(Yt(n),null);case 22:case 23:return Zn(n),af(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Yt(n),n.subtreeFlags&6&&(n.flags|=8192)):Yt(n),a=n.updateQueue,a!==null&&jl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&te(ur),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ki(on),Yt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Dy(t,n){switch(Vu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ki(on),He(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ct(n),null;case 31:if(n.memoizedState!==null){if(Zn(n),n.alternate===null)throw Error(s(340));or()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Zn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));or()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return te(tn),null;case 4:return He(),null;case 10:return ki(n.type),null;case 22:case 23:return Zn(n),af(),t!==null&&te(ur),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ki(on),null;case 25:return null;default:return null}}function Ag(t,n){switch(Vu(n),n.tag){case 3:ki(on),He();break;case 26:case 27:case 5:ct(n);break;case 4:He();break;case 31:n.memoizedState!==null&&Zn(n);break;case 13:Zn(n);break;case 19:te(tn);break;case 10:ki(n.type);break;case 22:case 23:Zn(n),af(),t!==null&&te(ur);break;case 24:ki(on)}}function yo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var h=a.create,y=a.inst;o=h(),y.destroy=o}a=a.next}while(a!==u)}}catch(A){zt(n,n.return,A)}}function wa(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&t)===t){var y=o.inst,A=y.destroy;if(A!==void 0){y.destroy=void 0,u=n;var I=a,ee=A;try{ee()}catch(me){zt(u,I,me)}}}o=o.next}while(o!==h)}}catch(me){zt(n,n.return,me)}}function Rg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{vm(n,a)}catch(o){zt(t,t.return,o)}}}function Cg(t,n,a){a.props=mr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){zt(t,n,o)}}function So(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){zt(t,n,u)}}function Di(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){zt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){zt(t,n,u)}else a.current=null}function wg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){zt(t,t.return,u)}}function zf(t,n,a){try{var o=t.stateNode;Jy(o,t.type,a,n),o[xn]=n}catch(u){zt(t,t.return,u)}}function Dg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&za(t.type)||t.tag===4}function If(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Dg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&za(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Bi));else if(o!==4&&(o===27&&za(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Bf(t,n,a),t=t.sibling;t!==null;)Bf(t,n,a),t=t.sibling}function Yl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&za(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Yl(t,n,a),t=t.sibling;t!==null;)Yl(t,n,a),t=t.sibling}function Ug(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);bn(n,o,a),n[sn]=t,n[xn]=a}catch(h){zt(t,t.return,h)}}var Yi=!1,un=!1,Ff=!1,Lg=typeof WeakSet=="function"?WeakSet:Set,vn=null;function Uy(t,n){if(t=t.containerInfo,sh=mc,t=Xp(t),Uu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var y=0,A=-1,I=-1,ee=0,me=0,xe=t,ie=null;t:for(;;){for(var ce;xe!==a||u!==0&&xe.nodeType!==3||(A=y+u),xe!==h||o!==0&&xe.nodeType!==3||(I=y+o),xe.nodeType===3&&(y+=xe.nodeValue.length),(ce=xe.firstChild)!==null;)ie=xe,xe=ce;for(;;){if(xe===t)break t;if(ie===a&&++ee===u&&(A=y),ie===h&&++me===o&&(I=y),(ce=xe.nextSibling)!==null)break;xe=ie,ie=xe.parentNode}xe=ce}a=A===-1||I===-1?null:{start:A,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(oh={focusedElem:t,selectionRange:a},mc=!1,vn=n;vn!==null;)if(n=vn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,vn=t;else for(;vn!==null;){switch(n=vn,h=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var We=mr(a.type,u);t=o.getSnapshotBeforeUpdate(We,h),o.__reactInternalSnapshotBeforeUpdate=t}catch(nt){zt(a,a.return,nt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)uh(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":uh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,vn=t;break}vn=n.return}}function Ng(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ki(t,a),o&4&&yo(5,a);break;case 1:if(Ki(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(y){zt(a,a.return,y)}else{var u=mr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(y){zt(a,a.return,y)}}o&64&&Rg(a),o&512&&So(a,a.return);break;case 3:if(Ki(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{vm(t,n)}catch(y){zt(a,a.return,y)}}break;case 27:n===null&&o&4&&Ug(a);case 26:case 5:Ki(t,a),n===null&&o&4&&wg(a),o&512&&So(a,a.return);break;case 12:Ki(t,a);break;case 31:Ki(t,a),o&4&&zg(t,a);break;case 13:Ki(t,a),o&4&&Ig(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Hy.bind(null,a),sS(t,a))));break;case 22:if(o=a.memoizedState!==null||Yi,!o){n=n!==null&&n.memoizedState!==null||un,u=Yi;var h=un;Yi=o,(un=n)&&!h?Qi(t,a,(a.subtreeFlags&8772)!==0):Ki(t,a),Yi=u,un=h}break;case 30:break;default:Ki(t,a)}}function Og(t){var n=t.alternate;n!==null&&(t.alternate=null,Og(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&R(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Zt=null,In=!1;function Zi(t,n,a){for(a=a.child;a!==null;)Pg(t,n,a),a=a.sibling}function Pg(t,n,a){if(Ce&&typeof Ce.onCommitFiberUnmount=="function")try{Ce.onCommitFiberUnmount(Me,a)}catch{}switch(a.tag){case 26:un||Di(a,n),Zi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:un||Di(a,n);var o=Zt,u=In;za(a.type)&&(Zt=a.stateNode,In=!1),Zi(t,n,a),Do(a.stateNode),Zt=o,In=u;break;case 5:un||Di(a,n);case 6:if(o=Zt,u=In,Zt=null,Zi(t,n,a),Zt=o,In=u,Zt!==null)if(In)try{(Zt.nodeType===9?Zt.body:Zt.nodeName==="HTML"?Zt.ownerDocument.body:Zt).removeChild(a.stateNode)}catch(h){zt(a,n,h)}else try{Zt.removeChild(a.stateNode)}catch(h){zt(a,n,h)}break;case 18:Zt!==null&&(In?(t=Zt,Rv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ps(t)):Rv(Zt,a.stateNode));break;case 4:o=Zt,u=In,Zt=a.stateNode.containerInfo,In=!0,Zi(t,n,a),Zt=o,In=u;break;case 0:case 11:case 14:case 15:wa(2,a,n),un||wa(4,a,n),Zi(t,n,a);break;case 1:un||(Di(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Cg(a,n,o)),Zi(t,n,a);break;case 21:Zi(t,n,a);break;case 22:un=(o=un)||a.memoizedState!==null,Zi(t,n,a),un=o;break;default:Zi(t,n,a)}}function zg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ps(t)}catch(a){zt(n,n.return,a)}}}function Ig(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ps(t)}catch(a){zt(n,n.return,a)}}function Ly(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Lg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Lg),n;default:throw Error(s(435,t.tag))}}function Zl(t,n){var a=Ly(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Gy.bind(null,t,o);o.then(u,u)}})}function Bn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=t,y=n,A=y;e:for(;A!==null;){switch(A.tag){case 27:if(za(A.type)){Zt=A.stateNode,In=!1;break e}break;case 5:Zt=A.stateNode,In=!1;break e;case 3:case 4:Zt=A.stateNode.containerInfo,In=!0;break e}A=A.return}if(Zt===null)throw Error(s(160));Pg(h,y,u),Zt=null,In=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Bg(n,t),n=n.sibling}var gi=null;function Bg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Bn(n,t),Fn(t),o&4&&(wa(3,t,t.return),yo(3,t),wa(5,t,t.return));break;case 1:Bn(n,t),Fn(t),o&512&&(un||a===null||Di(a,a.return)),o&64&&Yi&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=gi;if(Bn(n,t),Fn(t),o&512&&(un||a===null||Di(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[er]||h[sn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),bn(h,o,a),h[sn]=t,Se(h),o=h;break e;case"link":var y=Bv("link","href",u).get(o+(a.href||""));if(y){for(var A=0;A<y.length;A++)if(h=y[A],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(A,1);break t}}h=u.createElement(o),bn(h,o,a),u.head.appendChild(h);break;case"meta":if(y=Bv("meta","content",u).get(o+(a.content||""))){for(A=0;A<y.length;A++)if(h=y[A],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(A,1);break t}}h=u.createElement(o),bn(h,o,a),u.head.appendChild(h);break;default:throw Error(s(468,o))}h[sn]=t,Se(h),o=h}t.stateNode=o}else Fv(u,t.type,t.stateNode);else t.stateNode=Iv(u,o,t.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?Fv(u,t.type,t.stateNode):Iv(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&zf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Bn(n,t),Fn(t),o&512&&(un||a===null||Di(a,a.return)),a!==null&&o&4&&zf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Bn(n,t),Fn(t),o&512&&(un||a===null||Di(a,a.return)),t.flags&32){u=t.stateNode;try{Ir(u,"")}catch(We){zt(t,t.return,We)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,zf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Ff=!0);break;case 6:if(Bn(n,t),Fn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(We){zt(t,t.return,We)}}break;case 3:if(fc=null,u=gi,gi=cc(n.containerInfo),Bn(n,t),gi=u,Fn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{ps(n.containerInfo)}catch(We){zt(t,t.return,We)}Ff&&(Ff=!1,Fg(t));break;case 4:o=gi,gi=cc(t.stateNode.containerInfo),Bn(n,t),Fn(t),gi=o;break;case 12:Bn(n,t),Fn(t);break;case 31:Bn(n,t),Fn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Zl(t,o)));break;case 13:Bn(n,t),Fn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ql=b()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Zl(t,o)));break;case 22:u=t.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,ee=Yi,me=un;if(Yi=ee||u,un=me||I,Bn(n,t),un=me,Yi=ee,Fn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||I||Yi||un||gr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(h=I.stateNode,u)y=h.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{A=I.stateNode;var xe=I.memoizedProps.style,ie=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;A.style.display=ie==null||typeof ie=="boolean"?"":(""+ie).trim()}}catch(We){zt(I,I.return,We)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=u?"":I.memoizedProps}catch(We){zt(I,I.return,We)}}}else if(n.tag===18){if(a===null){I=n;try{var ce=I.stateNode;u?Cv(ce,!0):Cv(I.stateNode,!1)}catch(We){zt(I,I.return,We)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Zl(t,a))));break;case 19:Bn(n,t),Fn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Zl(t,o)));break;case 30:break;case 21:break;default:Bn(n,t),Fn(t)}}function Fn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(Dg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,h=If(t);Yl(t,h,u);break;case 5:var y=a.stateNode;a.flags&32&&(Ir(y,""),a.flags&=-33);var A=If(t);Yl(t,A,y);break;case 3:case 4:var I=a.stateNode.containerInfo,ee=If(t);Bf(t,ee,I);break;default:throw Error(s(161))}}catch(me){zt(t,t.return,me)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Fg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Fg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ki(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Ng(t,n.alternate,n),n=n.sibling}function gr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:wa(4,n,n.return),gr(n);break;case 1:Di(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Cg(n,n.return,a),gr(n);break;case 27:Do(n.stateNode);case 26:case 5:Di(n,n.return),gr(n);break;case 22:n.memoizedState===null&&gr(n);break;case 30:gr(n);break;default:gr(n)}t=t.sibling}}function Qi(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,h=n,y=h.flags;switch(h.tag){case 0:case 11:case 15:Qi(u,h,a),yo(4,h);break;case 1:if(Qi(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ee){zt(o,o.return,ee)}if(o=h,u=o.updateQueue,u!==null){var A=o.stateNode;try{var I=u.shared.hiddenCallbacks;if(I!==null)for(u.shared.hiddenCallbacks=null,u=0;u<I.length;u++)gm(I[u],A)}catch(ee){zt(o,o.return,ee)}}a&&y&64&&Rg(h),So(h,h.return);break;case 27:Ug(h);case 26:case 5:Qi(u,h,a),a&&o===null&&y&4&&wg(h),So(h,h.return);break;case 12:Qi(u,h,a);break;case 31:Qi(u,h,a),a&&y&4&&zg(u,h);break;case 13:Qi(u,h,a),a&&y&4&&Ig(u,h);break;case 22:h.memoizedState===null&&Qi(u,h,a),So(h,h.return);break;case 30:break;default:Qi(u,h,a)}n=n.sibling}}function Hf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&so(a))}function Gf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&so(t))}function vi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Hg(t,n,a,o),n=n.sibling}function Hg(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:vi(t,n,a,o),u&2048&&yo(9,n);break;case 1:vi(t,n,a,o);break;case 3:vi(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&so(t)));break;case 12:if(u&2048){vi(t,n,a,o),t=n.stateNode;try{var h=n.memoizedProps,y=h.id,A=h.onPostCommit;typeof A=="function"&&A(y,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){zt(n,n.return,I)}}else vi(t,n,a,o);break;case 31:vi(t,n,a,o);break;case 13:vi(t,n,a,o);break;case 23:break;case 22:h=n.stateNode,y=n.alternate,n.memoizedState!==null?h._visibility&2?vi(t,n,a,o):Mo(t,n):h._visibility&2?vi(t,n,a,o):(h._visibility|=2,is(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Hf(y,n);break;case 24:vi(t,n,a,o),u&2048&&Gf(n.alternate,n);break;default:vi(t,n,a,o)}}function is(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=t,y=n,A=a,I=o,ee=y.flags;switch(y.tag){case 0:case 11:case 15:is(h,y,A,I,u),yo(8,y);break;case 23:break;case 22:var me=y.stateNode;y.memoizedState!==null?me._visibility&2?is(h,y,A,I,u):Mo(h,y):(me._visibility|=2,is(h,y,A,I,u)),u&&ee&2048&&Hf(y.alternate,y);break;case 24:is(h,y,A,I,u),u&&ee&2048&&Gf(y.alternate,y);break;default:is(h,y,A,I,u)}n=n.sibling}}function Mo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Mo(a,o),u&2048&&Hf(o.alternate,o);break;case 24:Mo(a,o),u&2048&&Gf(o.alternate,o);break;default:Mo(a,o)}n=n.sibling}}var Eo=8192;function as(t,n,a){if(t.subtreeFlags&Eo)for(t=t.child;t!==null;)Gg(t,n,a),t=t.sibling}function Gg(t,n,a){switch(t.tag){case 26:as(t,n,a),t.flags&Eo&&t.memoizedState!==null&&_S(a,gi,t.memoizedState,t.memoizedProps);break;case 5:as(t,n,a);break;case 3:case 4:var o=gi;gi=cc(t.stateNode.containerInfo),as(t,n,a),gi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Eo,Eo=16777216,as(t,n,a),Eo=o):as(t,n,a));break;default:as(t,n,a)}}function Vg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function bo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];vn=o,Xg(o,t)}Vg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)kg(t),t=t.sibling}function kg(t){switch(t.tag){case 0:case 11:case 15:bo(t),t.flags&2048&&wa(9,t,t.return);break;case 3:bo(t);break;case 12:bo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Kl(t)):bo(t);break;default:bo(t)}}function Kl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];vn=o,Xg(o,t)}Vg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:wa(8,n,n.return),Kl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Kl(n));break;default:Kl(n)}t=t.sibling}}function Xg(t,n){for(;vn!==null;){var a=vn;switch(a.tag){case 0:case 11:case 15:wa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:so(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,vn=o;else e:for(a=t;vn!==null;){o=vn;var u=o.sibling,h=o.return;if(Og(o),o===a){vn=null;break e}if(u!==null){u.return=h,vn=u;break e}vn=h}}}var Ny={getCacheForType:function(t){var n=Mn(on),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Mn(on).controller.signal}},Oy=typeof WeakMap=="function"?WeakMap:Map,Dt=0,Xt=null,gt=null,xt=0,Pt=0,Kn=null,Da=!1,rs=!1,Vf=!1,Ji=0,$t=0,Ua=0,vr=0,kf=0,Qn=0,ss=0,To=null,Hn=null,Xf=!1,Ql=0,Wg=0,Jl=1/0,$l=null,La=null,dn=0,Na=null,os=null,$i=0,Wf=0,qf=null,qg=null,Ao=0,jf=null;function Jn(){return(Dt&2)!==0&&xt!==0?xt&-xt:P.T!==null?$f():$a()}function jg(){if(Qn===0)if((xt&536870912)===0||Et){var t=Ne;Ne<<=1,(Ne&3932160)===0&&(Ne=262144),Qn=t}else Qn=536870912;return t=Yn.current,t!==null&&(t.flags|=32),Qn}function Gn(t,n,a){(t===Xt&&(Pt===2||Pt===9)||t.cancelPendingCommit!==null)&&(ls(t,0),Oa(t,xt,Qn,!1)),wn(t,a),((Dt&2)===0||t!==Xt)&&(t===Xt&&((Dt&2)===0&&(vr|=a),$t===4&&Oa(t,xt,Qn,!1)),Ui(t))}function Yg(t,n,a){if((Dt&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Xe(t,n),u=o?Iy(t,n):Zf(t,n,!0),h=o;do{if(u===0){rs&&!o&&Oa(t,n,0,!1);break}else{if(a=t.current.alternate,h&&!Py(a)){u=Zf(t,n,!1),h=!1;continue}if(u===2){if(h=n,t.errorRecoveryDisabledLanes&h)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;e:{var A=t;u=To;var I=A.current.memoizedState.isDehydrated;if(I&&(ls(A,y).flags|=256),y=Zf(A,y,!1),y!==2){if(Vf&&!I){A.errorRecoveryDisabledLanes|=h,vr|=h,u=4;break e}h=Hn,Hn=u,h!==null&&(Hn===null?Hn=h:Hn.push.apply(Hn,h))}u=y}if(h=!1,u!==2)continue}}if(u===1){ls(t,0),Oa(t,n,0,!0);break}e:{switch(o=t,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Oa(o,n,Qn,!Da);break e;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Ql+300-b(),10<u)){if(Oa(o,n,Qn,!Da),ye(o,0,!0)!==0)break e;$i=n,o.timeoutHandle=Tv(Zg.bind(null,o,a,Hn,$l,Xf,n,Qn,vr,ss,Da,h,"Throttled",-0,0),u);break e}Zg(o,a,Hn,$l,Xf,n,Qn,vr,ss,Da,h,null,-0,0)}}break}while(!0);Ui(t)}function Zg(t,n,a,o,u,h,y,A,I,ee,me,xe,ie,ce){if(t.timeoutHandle=-1,xe=n.subtreeFlags,xe&8192||(xe&16785408)===16785408){xe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Bi},Gg(n,h,xe);var We=(h&62914560)===h?Ql-b():(h&4194048)===h?Wg-b():0;if(We=xS(xe,We),We!==null){$i=h,t.cancelPendingCommit=We(iv.bind(null,t,n,h,a,o,u,y,A,I,me,xe,null,ie,ce)),Oa(t,h,y,!ee);return}}iv(t,n,h,a,o,u,y,A,I)}function Py(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!qn(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Oa(t,n,a,o){n&=~kf,n&=~vr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var h=31-Ue(u),y=1<<h;o[h]=-1,u&=~y}a!==0&&qs(t,a,n)}function ec(){return(Dt&6)===0?(Ro(0),!1):!0}function Yf(){if(gt!==null){if(Pt===0)var t=gt.return;else t=gt,Vi=lr=null,uf(t),Jr=null,lo=0,t=gt;for(;t!==null;)Ag(t.alternate,t),t=t.return;gt=null}}function ls(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,tS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),$i=0,Yf(),Xt=t,gt=a=Hi(t.current,null),xt=n,Pt=0,Kn=null,Da=!1,rs=Xe(t,n),Vf=!1,ss=Qn=kf=vr=Ua=$t=0,Hn=To=null,Xf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Ue(o),h=1<<u;n|=t[u],o&=~h}return Ji=n,Sl(),a}function Kg(t,n){ut=null,P.H=vo,n===Qr||n===wl?(n=hm(),Pt=3):n===Qu?(n=hm(),Pt=4):Pt=n===Af?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,gt===null&&($t=1,kl(t,ai(n,t.current)))}function Qg(){var t=Yn.current;return t===null?!0:(xt&4194048)===xt?li===null:(xt&62914560)===xt||(xt&536870912)!==0?t===li:!1}function Jg(){var t=P.H;return P.H=vo,t===null?vo:t}function $g(){var t=P.A;return P.A=Ny,t}function tc(){$t=4,Da||(xt&4194048)!==xt&&Yn.current!==null||(rs=!0),(Ua&134217727)===0&&(vr&134217727)===0||Xt===null||Oa(Xt,xt,Qn,!1)}function Zf(t,n,a){var o=Dt;Dt|=2;var u=Jg(),h=$g();(Xt!==t||xt!==n)&&($l=null,ls(t,n)),n=!1;var y=$t;e:do try{if(Pt!==0&&gt!==null){var A=gt,I=Kn;switch(Pt){case 8:Yf(),y=6;break e;case 3:case 2:case 9:case 6:Yn.current===null&&(n=!0);var ee=Pt;if(Pt=0,Kn=null,cs(t,A,I,ee),a&&rs){y=0;break e}break;default:ee=Pt,Pt=0,Kn=null,cs(t,A,I,ee)}}zy(),y=$t;break}catch(me){Kg(t,me)}while(!0);return n&&t.shellSuspendCounter++,Vi=lr=null,Dt=o,P.H=u,P.A=h,gt===null&&(Xt=null,xt=0,Sl()),y}function zy(){for(;gt!==null;)ev(gt)}function Iy(t,n){var a=Dt;Dt|=2;var o=Jg(),u=$g();Xt!==t||xt!==n?($l=null,Jl=b()+500,ls(t,n)):rs=Xe(t,n);e:do try{if(Pt!==0&&gt!==null){n=gt;var h=Kn;t:switch(Pt){case 1:Pt=0,Kn=null,cs(t,n,h,1);break;case 2:case 9:if(um(h)){Pt=0,Kn=null,tv(n);break}n=function(){Pt!==2&&Pt!==9||Xt!==t||(Pt=7),Ui(t)},h.then(n,n);break e;case 3:Pt=7;break e;case 4:Pt=5;break e;case 7:um(h)?(Pt=0,Kn=null,tv(n)):(Pt=0,Kn=null,cs(t,n,h,7));break;case 5:var y=null;switch(gt.tag){case 26:y=gt.memoizedState;case 5:case 27:var A=gt;if(y?Hv(y):A.stateNode.complete){Pt=0,Kn=null;var I=A.sibling;if(I!==null)gt=I;else{var ee=A.return;ee!==null?(gt=ee,nc(ee)):gt=null}break t}}Pt=0,Kn=null,cs(t,n,h,5);break;case 6:Pt=0,Kn=null,cs(t,n,h,6);break;case 8:Yf(),$t=6;break e;default:throw Error(s(462))}}By();break}catch(me){Kg(t,me)}while(!0);return Vi=lr=null,P.H=o,P.A=u,Dt=a,gt!==null?0:(Xt=null,xt=0,Sl(),$t)}function By(){for(;gt!==null&&!Vt();)ev(gt)}function ev(t){var n=bg(t.alternate,t,Ji);t.memoizedProps=t.pendingProps,n===null?nc(t):gt=n}function tv(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=_g(a,n,n.pendingProps,n.type,void 0,xt);break;case 11:n=_g(a,n,n.pendingProps,n.type.render,n.ref,xt);break;case 5:uf(n);default:Ag(a,n),n=gt=$p(n,Ji),n=bg(a,n,Ji)}t.memoizedProps=t.pendingProps,n===null?nc(t):gt=n}function cs(t,n,a,o){Vi=lr=null,uf(n),Jr=null,lo=0;var u=n.return;try{if(Ay(t,u,n,a,xt)){$t=1,kl(t,ai(a,t.current)),gt=null;return}}catch(h){if(u!==null)throw gt=u,h;$t=1,kl(t,ai(a,t.current)),gt=null;return}n.flags&32768?(Et||o===1?t=!0:rs||(xt&536870912)!==0?t=!1:(Da=t=!0,(o===2||o===9||o===3||o===6)&&(o=Yn.current,o!==null&&o.tag===13&&(o.flags|=16384))),nv(n,t)):nc(n)}function nc(t){var n=t;do{if((n.flags&32768)!==0){nv(n,Da);return}t=n.return;var a=wy(n.alternate,n,Ji);if(a!==null){gt=a;return}if(n=n.sibling,n!==null){gt=n;return}gt=n=t}while(n!==null);$t===0&&($t=5)}function nv(t,n){do{var a=Dy(t.alternate,t);if(a!==null){a.flags&=32767,gt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){gt=t;return}gt=t=a}while(t!==null);$t=6,gt=null}function iv(t,n,a,o,u,h,y,A,I){t.cancelPendingCommit=null;do ic();while(dn!==0);if((Dt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=zu,ni(t,a,h,y,A,I),t===Xt&&(gt=Xt=null,xt=0),os=n,Na=t,$i=a,Wf=h,qf=u,qg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Vy(de,function(){return lv(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=K.p,K.p=2,y=Dt,Dt|=4;try{Uy(t,n,a)}finally{Dt=y,K.p=u,P.T=o}}dn=1,av(),rv(),sv()}}function av(){if(dn===1){dn=0;var t=Na,n=os,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=K.p;K.p=2;var u=Dt;Dt|=4;try{Bg(n,t);var h=oh,y=Xp(t.containerInfo),A=h.focusedElem,I=h.selectionRange;if(y!==A&&A&&A.ownerDocument&&kp(A.ownerDocument.documentElement,A)){if(I!==null&&Uu(A)){var ee=I.start,me=I.end;if(me===void 0&&(me=ee),"selectionStart"in A)A.selectionStart=ee,A.selectionEnd=Math.min(me,A.value.length);else{var xe=A.ownerDocument||document,ie=xe&&xe.defaultView||window;if(ie.getSelection){var ce=ie.getSelection(),We=A.textContent.length,nt=Math.min(I.start,We),Ft=I.end===void 0?nt:Math.min(I.end,We);!ce.extend&&nt>Ft&&(y=Ft,Ft=nt,nt=y);var j=Vp(A,nt),V=Vp(A,Ft);if(j&&V&&(ce.rangeCount!==1||ce.anchorNode!==j.node||ce.anchorOffset!==j.offset||ce.focusNode!==V.node||ce.focusOffset!==V.offset)){var $=xe.createRange();$.setStart(j.node,j.offset),ce.removeAllRanges(),nt>Ft?(ce.addRange($),ce.extend(V.node,V.offset)):($.setEnd(V.node,V.offset),ce.addRange($))}}}}for(xe=[],ce=A;ce=ce.parentNode;)ce.nodeType===1&&xe.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<xe.length;A++){var ve=xe[A];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}mc=!!sh,oh=sh=null}finally{Dt=u,K.p=o,P.T=a}}t.current=n,dn=2}}function rv(){if(dn===2){dn=0;var t=Na,n=os,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=K.p;K.p=2;var u=Dt;Dt|=4;try{Ng(t,n.alternate,n)}finally{Dt=u,K.p=o,P.T=a}}dn=3}}function sv(){if(dn===4||dn===3){dn=0,N();var t=Na,n=os,a=$i,o=qg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?dn=5:(dn=0,os=Na=null,ov(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(La=null),Pr(a),n=n.stateNode,Ce&&typeof Ce.onCommitFiberRoot=="function")try{Ce.onCommitFiberRoot(Me,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,u=K.p,K.p=2,P.T=null;try{for(var h=t.onRecoverableError,y=0;y<o.length;y++){var A=o[y];h(A.value,{componentStack:A.stack})}}finally{P.T=n,K.p=u}}($i&3)!==0&&ic(),Ui(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===jf?Ao++:(Ao=0,jf=t):Ao=0,Ro(0)}}function ov(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,so(n)))}function ic(){return av(),rv(),sv(),lv()}function lv(){if(dn!==5)return!1;var t=Na,n=Wf;Wf=0;var a=Pr($i),o=P.T,u=K.p;try{K.p=32>a?32:a,P.T=null,a=qf,qf=null;var h=Na,y=$i;if(dn=0,os=Na=null,$i=0,(Dt&6)!==0)throw Error(s(331));var A=Dt;if(Dt|=4,kg(h.current),Hg(h,h.current,y,a),Dt=A,Ro(0,!1),Ce&&typeof Ce.onPostCommitFiberRoot=="function")try{Ce.onPostCommitFiberRoot(Me,h)}catch{}return!0}finally{K.p=u,P.T=o,ov(t,n)}}function cv(t,n,a){n=ai(a,n),n=Tf(t.stateNode,n,2),t=Aa(t,n,2),t!==null&&(wn(t,2),Ui(t))}function zt(t,n,a){if(t.tag===3)cv(t,t,a);else for(;n!==null;){if(n.tag===3){cv(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(La===null||!La.has(o))){t=ai(a,t),a=ug(2),o=Aa(n,a,2),o!==null&&(fg(a,o,n,t),wn(o,2),Ui(o));break}}n=n.return}}function Kf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Oy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Vf=!0,u.add(a),t=Fy.bind(null,t,n,a),n.then(t,t))}function Fy(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Xt===t&&(xt&a)===a&&($t===4||$t===3&&(xt&62914560)===xt&&300>b()-Ql?(Dt&2)===0&&ls(t,0):kf|=a,ss===xt&&(ss=0)),Ui(t)}function uv(t,n){n===0&&(n=Ot()),t=rr(t,n),t!==null&&(wn(t,n),Ui(t))}function Hy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),uv(t,a)}function Gy(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),uv(t,a)}function Vy(t,n){return rt(t,n)}var ac=null,us=null,Qf=!1,rc=!1,Jf=!1,Pa=0;function Ui(t){t!==us&&t.next===null&&(us===null?ac=us=t:us=us.next=t),rc=!0,Qf||(Qf=!0,Xy())}function Ro(t,n){if(!Jf&&rc){Jf=!0;do for(var a=!1,o=ac;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var y=o.suspendedLanes,A=o.pingedLanes;h=(1<<31-Ue(42|t)+1)-1,h&=u&~(y&~A),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,pv(o,h))}else h=xt,h=ye(o,o===Xt?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Xe(o,h)||(a=!0,pv(o,h));o=o.next}while(a);Jf=!1}}function ky(){fv()}function fv(){rc=Qf=!1;var t=0;Pa!==0&&eS()&&(t=Pa);for(var n=b(),a=null,o=ac;o!==null;){var u=o.next,h=hv(o,n);h===0?(o.next=null,a===null?ac=u:a.next=u,u===null&&(us=a)):(a=o,(t!==0||(h&3)!==0)&&(rc=!0)),o=u}dn!==0&&dn!==5||Ro(t),Pa!==0&&(Pa=0)}function hv(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var y=31-Ue(h),A=1<<y,I=u[y];I===-1?((A&a)===0||(A&o)!==0)&&(u[y]=ot(A,n)):I<=n&&(t.expiredLanes|=A),h&=~A}if(n=Xt,a=xt,a=ye(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Pt===2||Pt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Wt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Xe(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Wt(o),Pr(a)){case 2:case 8:a=Te;break;case 32:a=de;break;case 268435456:a=Y;break;default:a=de}return o=dv.bind(null,t),a=rt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Wt(o),t.callbackPriority=2,t.callbackNode=null,2}function dv(t,n){if(dn!==0&&dn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(ic()&&t.callbackNode!==a)return null;var o=xt;return o=ye(t,t===Xt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Yg(t,o,n),hv(t,b()),t.callbackNode!=null&&t.callbackNode===a?dv.bind(null,t):null)}function pv(t,n){if(ic())return null;Yg(t,n,!0)}function Xy(){nS(function(){(Dt&6)!==0?rt(ge,ky):fv()})}function $f(){if(Pa===0){var t=Zr;t===0&&(t=we,we<<=1,(we&261888)===0&&(we=256)),Pa=t}return Pa}function mv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:dl(""+t)}function gv(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Wy(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=mv((u[xn]||null).action),y=o.submitter;y&&(n=(n=y[xn]||null)?mv(n.formAction):y.getAttribute("formAction"),n!==null&&(h=n,y=null));var A=new vl("action","action",null,o,u);t.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Pa!==0){var I=y?gv(u,y):new FormData(u);xf(a,{pending:!0,data:I,method:u.method,action:h},null,I)}}else typeof h=="function"&&(A.preventDefault(),I=y?gv(u,y):new FormData(u),xf(a,{pending:!0,data:I,method:u.method,action:h},h,I))},currentTarget:u}]})}}for(var eh=0;eh<Pu.length;eh++){var th=Pu[eh],qy=th.toLowerCase(),jy=th[0].toUpperCase()+th.slice(1);mi(qy,"on"+jy)}mi(jp,"onAnimationEnd"),mi(Yp,"onAnimationIteration"),mi(Zp,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi(cy,"onTransitionRun"),mi(uy,"onTransitionStart"),mi(fy,"onTransitionCancel"),mi(Kp,"onTransitionEnd"),Je("onMouseEnter",["mouseout","mouseover"]),Je("onMouseLeave",["mouseout","mouseover"]),Je("onPointerEnter",["pointerout","pointerover"]),Je("onPointerLeave",["pointerout","pointerover"]),Fe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Fe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Fe("onBeforeInput",["compositionend","keypress","textInput","paste"]),Fe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Fe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Fe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Co));function vv(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var h=void 0;if(n)for(var y=o.length-1;0<=y;y--){var A=o[y],I=A.instance,ee=A.currentTarget;if(A=A.listener,I!==h&&u.isPropagationStopped())break e;h=A,u.currentTarget=ee;try{h(u)}catch(me){yl(me)}u.currentTarget=null,h=I}else for(y=0;y<o.length;y++){if(A=o[y],I=A.instance,ee=A.currentTarget,A=A.listener,I!==h&&u.isPropagationStopped())break e;h=A,u.currentTarget=ee;try{h(u)}catch(me){yl(me)}u.currentTarget=null,h=I}}}}function vt(t,n){var a=n[Ys];a===void 0&&(a=n[Ys]=new Set);var o=t+"__bubble";a.has(o)||(_v(n,t,2,!1),a.add(o))}function nh(t,n,a){var o=0;n&&(o|=4),_v(a,t,o,n)}var sc="_reactListening"+Math.random().toString(36).slice(2);function ih(t){if(!t[sc]){t[sc]=!0,Ie.forEach(function(a){a!=="selectionchange"&&(Yy.has(a)||nh(a,!1,t),nh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[sc]||(n[sc]=!0,nh("selectionchange",!1,n))}}function _v(t,n,a,o){switch(jv(n)){case 2:var u=MS;break;case 8:u=ES;break;default:u=_h}a=u.bind(null,n,a,t),u=void 0,!Mu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function ah(t,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var A=o.stateNode.containerInfo;if(A===u)break;if(y===4)for(y=o.return;y!==null;){var I=y.tag;if((I===3||I===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;A!==null;){if(y=W(A),y===null)return;if(I=y.tag,I===5||I===6||I===26||I===27){o=h=y;continue e}A=A.parentNode}}o=o.return}Ep(function(){var ee=h,me=yu(a),xe=[];e:{var ie=Qp.get(t);if(ie!==void 0){var ce=vl,We=t;switch(t){case"keypress":if(ml(a)===0)break e;case"keydown":case"keyup":ce=Gx;break;case"focusin":We="focus",ce=Au;break;case"focusout":We="blur",ce=Au;break;case"beforeblur":case"afterblur":ce=Au;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=Ap;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=wx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=Xx;break;case jp:case Yp:case Zp:ce=Lx;break;case Kp:ce=qx;break;case"scroll":case"scrollend":ce=Rx;break;case"wheel":ce=Yx;break;case"copy":case"cut":case"paste":ce=Ox;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=Cp;break;case"toggle":case"beforetoggle":ce=Kx}var nt=(n&4)!==0,Ft=!nt&&(t==="scroll"||t==="scrollend"),j=nt?ie!==null?ie+"Capture":null:ie;nt=[];for(var V=ee,$;V!==null;){var ve=V;if($=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||$===null||j===null||(ve=Zs(V,j),ve!=null&&nt.push(wo(V,ve,$))),Ft)break;V=V.return}0<nt.length&&(ie=new ce(ie,We,null,a,me),xe.push({event:ie,listeners:nt}))}}if((n&7)===0){e:{if(ie=t==="mouseover"||t==="pointerover",ce=t==="mouseout"||t==="pointerout",ie&&a!==xu&&(We=a.relatedTarget||a.fromElement)&&(W(We)||We[_a]))break e;if((ce||ie)&&(ie=me.window===me?me:(ie=me.ownerDocument)?ie.defaultView||ie.parentWindow:window,ce?(We=a.relatedTarget||a.toElement,ce=ee,We=We?W(We):null,We!==null&&(Ft=c(We),nt=We.tag,We!==Ft||nt!==5&&nt!==27&&nt!==6)&&(We=null)):(ce=null,We=ee),ce!==We)){if(nt=Ap,ve="onMouseLeave",j="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(nt=Cp,ve="onPointerLeave",j="onPointerEnter",V="pointer"),Ft=ce==null?ie:le(ce),$=We==null?ie:le(We),ie=new nt(ve,V+"leave",ce,a,me),ie.target=Ft,ie.relatedTarget=$,ve=null,W(me)===ee&&(nt=new nt(j,V+"enter",We,a,me),nt.target=$,nt.relatedTarget=Ft,ve=nt),Ft=ve,ce&&We)t:{for(nt=Zy,j=ce,V=We,$=0,ve=j;ve;ve=nt(ve))$++;ve=0;for(var et=V;et;et=nt(et))ve++;for(;0<$-ve;)j=nt(j),$--;for(;0<ve-$;)V=nt(V),ve--;for(;$--;){if(j===V||V!==null&&j===V.alternate){nt=j;break t}j=nt(j),V=nt(V)}nt=null}else nt=null;ce!==null&&xv(xe,ie,ce,nt,!1),We!==null&&Ft!==null&&xv(xe,Ft,We,nt,!0)}}e:{if(ie=ee?le(ee):window,ce=ie.nodeName&&ie.nodeName.toLowerCase(),ce==="select"||ce==="input"&&ie.type==="file")var Rt=zp;else if(Op(ie))if(Ip)Rt=sy;else{Rt=ay;var Qe=iy}else ce=ie.nodeName,!ce||ce.toLowerCase()!=="input"||ie.type!=="checkbox"&&ie.type!=="radio"?ee&&_u(ee.elementType)&&(Rt=zp):Rt=ry;if(Rt&&(Rt=Rt(t,ee))){Pp(xe,Rt,a,me);break e}Qe&&Qe(t,ie,ee),t==="focusout"&&ee&&ie.type==="number"&&ee.memoizedProps.value!=null&&hn(ie,"number",ie.value)}switch(Qe=ee?le(ee):window,t){case"focusin":(Op(Qe)||Qe.contentEditable==="true")&&(Gr=Qe,Lu=ee,io=null);break;case"focusout":io=Lu=Gr=null;break;case"mousedown":Nu=!0;break;case"contextmenu":case"mouseup":case"dragend":Nu=!1,Wp(xe,a,me);break;case"selectionchange":if(ly)break;case"keydown":case"keyup":Wp(xe,a,me)}var ft;if(Cu)e:{switch(t){case"compositionstart":var yt="onCompositionStart";break e;case"compositionend":yt="onCompositionEnd";break e;case"compositionupdate":yt="onCompositionUpdate";break e}yt=void 0}else Hr?Lp(t,a)&&(yt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(yt="onCompositionStart");yt&&(wp&&a.locale!=="ko"&&(Hr||yt!=="onCompositionStart"?yt==="onCompositionEnd"&&Hr&&(ft=bp()):(xa=me,Eu="value"in xa?xa.value:xa.textContent,Hr=!0)),Qe=oc(ee,yt),0<Qe.length&&(yt=new Rp(yt,t,null,a,me),xe.push({event:yt,listeners:Qe}),ft?yt.data=ft:(ft=Np(a),ft!==null&&(yt.data=ft)))),(ft=Jx?$x(t,a):ey(t,a))&&(yt=oc(ee,"onBeforeInput"),0<yt.length&&(Qe=new Rp("onBeforeInput","beforeinput",null,a,me),xe.push({event:Qe,listeners:yt}),Qe.data=ft)),Wy(xe,t,ee,a,me)}vv(xe,n)})}function wo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function oc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=Zs(t,a),u!=null&&o.unshift(wo(t,u,h)),u=Zs(t,n),u!=null&&o.push(wo(t,u,h))),t.tag===3)return o;t=t.return}return[]}function Zy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function xv(t,n,a,o,u){for(var h=n._reactName,y=[];a!==null&&a!==o;){var A=a,I=A.alternate,ee=A.stateNode;if(A=A.tag,I!==null&&I===o)break;A!==5&&A!==26&&A!==27||ee===null||(I=ee,u?(ee=Zs(a,h),ee!=null&&y.unshift(wo(a,ee,I))):u||(ee=Zs(a,h),ee!=null&&y.push(wo(a,ee,I)))),a=a.return}y.length!==0&&t.push({event:n,listeners:y})}var Ky=/\r\n?/g,Qy=/\u0000|\uFFFD/g;function yv(t){return(typeof t=="string"?t:""+t).replace(Ky,`
`).replace(Qy,"")}function Sv(t,n){return n=yv(n),yv(t)===n}function Bt(t,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Ir(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Ir(t,""+o);break;case"className":Nt(t,"class",o);break;case"tabIndex":Nt(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Nt(t,a,o);break;case"style":Sp(t,o,h);break;case"data":if(n!=="object"){Nt(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=dl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Bt(t,n,"name",u.name,u,null),Bt(t,n,"formEncType",u.formEncType,u,null),Bt(t,n,"formMethod",u.formMethod,u,null),Bt(t,n,"formTarget",u.formTarget,u,null)):(Bt(t,n,"encType",u.encType,u,null),Bt(t,n,"method",u.method,u,null),Bt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=dl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Bi);break;case"onScroll":o!=null&&vt("scroll",t);break;case"onScrollEnd":o!=null&&vt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=dl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":vt("beforetoggle",t),vt("toggle",t),kt(t,"popover",o);break;case"xlinkActuate":mt(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":mt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":mt(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":mt(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":mt(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":mt(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":mt(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":mt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":mt(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":kt(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Tx.get(a)||a,kt(t,a,o))}}function rh(t,n,a,o,u,h){switch(a){case"style":Sp(t,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Ir(t,o):(typeof o=="number"||typeof o=="bigint")&&Ir(t,""+o);break;case"onScroll":o!=null&&vt("scroll",t);break;case"onScrollEnd":o!=null&&vt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Bi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ye.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=t[xn]||null,h=h!=null?h[a]:null,typeof h=="function"&&t.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):kt(t,a,o)}}}function bn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":vt("error",t),vt("load",t);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var y=a[h];if(y!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Bt(t,n,h,y,a,null)}}u&&Bt(t,n,"srcSet",a.srcSet,a,null),o&&Bt(t,n,"src",a.src,a,null);return;case"input":vt("invalid",t);var A=h=y=u=null,I=null,ee=null;for(o in a)if(a.hasOwnProperty(o)){var me=a[o];if(me!=null)switch(o){case"name":u=me;break;case"type":y=me;break;case"checked":I=me;break;case"defaultChecked":ee=me;break;case"value":h=me;break;case"defaultValue":A=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(s(137,n));break;default:Bt(t,n,o,me,a,null)}}Dn(t,h,A,I,ee,y,u,!1);return;case"select":vt("invalid",t),o=y=h=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":h=A;break;case"defaultValue":y=A;break;case"multiple":o=A;default:Bt(t,n,u,A,a,null)}n=h,a=y,t.multiple=!!o,n!=null?en(t,!!o,n,!1):a!=null&&en(t,!!o,a,!0);return;case"textarea":vt("invalid",t),h=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(A=a[y],A!=null))switch(y){case"value":o=A;break;case"defaultValue":u=A;break;case"children":h=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Bt(t,n,y,A,a,null)}Ri(t,o,u,h);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(o=a[I],o!=null))switch(I){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Bt(t,n,I,o,a,null)}return;case"dialog":vt("beforetoggle",t),vt("toggle",t),vt("cancel",t),vt("close",t);break;case"iframe":case"object":vt("load",t);break;case"video":case"audio":for(o=0;o<Co.length;o++)vt(Co[o],t);break;case"image":vt("error",t),vt("load",t);break;case"details":vt("toggle",t);break;case"embed":case"source":case"link":vt("error",t),vt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ee in a)if(a.hasOwnProperty(ee)&&(o=a[ee],o!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Bt(t,n,ee,o,a,null)}return;default:if(_u(n)){for(me in a)a.hasOwnProperty(me)&&(o=a[me],o!==void 0&&rh(t,n,me,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Bt(t,n,A,o,a,null))}function Jy(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,y=null,A=null,I=null,ee=null,me=null;for(ce in a){var xe=a[ce];if(a.hasOwnProperty(ce)&&xe!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":I=xe;default:o.hasOwnProperty(ce)||Bt(t,n,ce,null,o,xe)}}for(var ie in o){var ce=o[ie];if(xe=a[ie],o.hasOwnProperty(ie)&&(ce!=null||xe!=null))switch(ie){case"type":h=ce;break;case"name":u=ce;break;case"checked":ee=ce;break;case"defaultChecked":me=ce;break;case"value":y=ce;break;case"defaultValue":A=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(s(137,n));break;default:ce!==xe&&Bt(t,n,ie,ce,o,xe)}}Tn(t,y,A,I,ee,me,h,u);return;case"select":ce=y=A=ie=null;for(h in a)if(I=a[h],a.hasOwnProperty(h)&&I!=null)switch(h){case"value":break;case"multiple":ce=I;default:o.hasOwnProperty(h)||Bt(t,n,h,null,o,I)}for(u in o)if(h=o[u],I=a[u],o.hasOwnProperty(u)&&(h!=null||I!=null))switch(u){case"value":ie=h;break;case"defaultValue":A=h;break;case"multiple":y=h;default:h!==I&&Bt(t,n,u,h,o,I)}n=A,a=y,o=ce,ie!=null?en(t,!!a,ie,!1):!!o!=!!a&&(n!=null?en(t,!!a,n,!0):en(t,!!a,a?[]:"",!1));return;case"textarea":ce=ie=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Bt(t,n,A,null,o,u)}for(y in o)if(u=o[y],h=a[y],o.hasOwnProperty(y)&&(u!=null||h!=null))switch(y){case"value":ie=u;break;case"defaultValue":ce=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&Bt(t,n,y,u,o,h)}zr(t,ie,ce);return;case"option":for(var We in a)if(ie=a[We],a.hasOwnProperty(We)&&ie!=null&&!o.hasOwnProperty(We))switch(We){case"selected":t.selected=!1;break;default:Bt(t,n,We,null,o,ie)}for(I in o)if(ie=o[I],ce=a[I],o.hasOwnProperty(I)&&ie!==ce&&(ie!=null||ce!=null))switch(I){case"selected":t.selected=ie&&typeof ie!="function"&&typeof ie!="symbol";break;default:Bt(t,n,I,ie,o,ce)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var nt in a)ie=a[nt],a.hasOwnProperty(nt)&&ie!=null&&!o.hasOwnProperty(nt)&&Bt(t,n,nt,null,o,ie);for(ee in o)if(ie=o[ee],ce=a[ee],o.hasOwnProperty(ee)&&ie!==ce&&(ie!=null||ce!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(s(137,n));break;default:Bt(t,n,ee,ie,o,ce)}return;default:if(_u(n)){for(var Ft in a)ie=a[Ft],a.hasOwnProperty(Ft)&&ie!==void 0&&!o.hasOwnProperty(Ft)&&rh(t,n,Ft,void 0,o,ie);for(me in o)ie=o[me],ce=a[me],!o.hasOwnProperty(me)||ie===ce||ie===void 0&&ce===void 0||rh(t,n,me,ie,o,ce);return}}for(var j in a)ie=a[j],a.hasOwnProperty(j)&&ie!=null&&!o.hasOwnProperty(j)&&Bt(t,n,j,null,o,ie);for(xe in o)ie=o[xe],ce=a[xe],!o.hasOwnProperty(xe)||ie===ce||ie==null&&ce==null||Bt(t,n,xe,ie,o,ce)}function Mv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function $y(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],h=u.transferSize,y=u.initiatorType,A=u.duration;if(h&&A&&Mv(y)){for(y=0,A=u.responseEnd,o+=1;o<a.length;o++){var I=a[o],ee=I.startTime;if(ee>A)break;var me=I.transferSize,xe=I.initiatorType;me&&Mv(xe)&&(I=I.responseEnd,y+=me*(I<A?1:(A-ee)/(I-ee)))}if(--o,n+=8*(h+y)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var sh=null,oh=null;function lc(t){return t.nodeType===9?t:t.ownerDocument}function Ev(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function bv(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function lh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ch=null;function eS(){var t=window.event;return t&&t.type==="popstate"?t===ch?!1:(ch=t,!0):(ch=null,!1)}var Tv=typeof setTimeout=="function"?setTimeout:void 0,tS=typeof clearTimeout=="function"?clearTimeout:void 0,Av=typeof Promise=="function"?Promise:void 0,nS=typeof queueMicrotask=="function"?queueMicrotask:typeof Av<"u"?function(t){return Av.resolve(null).then(t).catch(iS)}:Tv;function iS(t){setTimeout(function(){throw t})}function za(t){return t==="head"}function Rv(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),ps(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Do(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Do(a);for(var h=a.firstChild;h;){var y=h.nextSibling,A=h.nodeName;h[er]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=y}}else a==="body"&&Do(t.ownerDocument.body);a=u}while(a);ps(n)}function Cv(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function uh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":uh(a),R(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function aS(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[er])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=ci(t.nextSibling),t===null)break}return null}function rS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ci(t.nextSibling),t===null))return null;return t}function wv(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ci(t.nextSibling),t===null))return null;return t}function fh(t){return t.data==="$?"||t.data==="$~"}function hh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function sS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function ci(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var dh=null;function Dv(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return ci(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Uv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Lv(t,n,a){switch(n=lc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Do(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);R(t)}var ui=new Map,Nv=new Set;function cc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ea=K.d;K.d={f:oS,r:lS,D:cS,C:uS,L:fS,m:hS,X:pS,S:dS,M:mS};function oS(){var t=ea.f(),n=ec();return t||n}function lS(t){var n=oe(t);n!==null&&n.tag===5&&n.type==="form"?Km(n):ea.r(t)}var fs=typeof document>"u"?null:document;function Ov(t,n,a){var o=fs;if(o&&typeof n=="string"&&n){var u=_t(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Nv.has(u)||(Nv.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),bn(n,"link",t),Se(n),o.head.appendChild(n)))}}function cS(t){ea.D(t),Ov("dns-prefetch",t,null)}function uS(t,n){ea.C(t,n),Ov("preconnect",t,n)}function fS(t,n,a){ea.L(t,n,a);var o=fs;if(o&&t&&n){var u='link[rel="preload"][as="'+_t(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+_t(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+_t(a.imageSizes)+'"]')):u+='[href="'+_t(t)+'"]';var h=u;switch(n){case"style":h=hs(t);break;case"script":h=ds(t)}ui.has(h)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ui.set(h,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Uo(h))||n==="script"&&o.querySelector(Lo(h))||(n=o.createElement("link"),bn(n,"link",t),Se(n),o.head.appendChild(n)))}}function hS(t,n){ea.m(t,n);var a=fs;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+_t(o)+'"][href="'+_t(t)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=ds(t)}if(!ui.has(h)&&(t=g({rel:"modulepreload",href:t},n),ui.set(h,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Lo(h)))return}o=a.createElement("link"),bn(o,"link",t),Se(o),a.head.appendChild(o)}}}function dS(t,n,a){ea.S(t,n,a);var o=fs;if(o&&t){var u=Z(o).hoistableStyles,h=hs(t);n=n||"default";var y=u.get(h);if(!y){var A={loading:0,preload:null};if(y=o.querySelector(Uo(h)))A.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ui.get(h))&&ph(t,a);var I=y=o.createElement("link");Se(I),bn(I,"link",t),I._p=new Promise(function(ee,me){I.onload=ee,I.onerror=me}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,uc(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:A},u.set(h,y)}}}function pS(t,n){ea.X(t,n);var a=fs;if(a&&t){var o=Z(a).hoistableScripts,u=ds(t),h=o.get(u);h||(h=a.querySelector(Lo(u)),h||(t=g({src:t,async:!0},n),(n=ui.get(u))&&mh(t,n),h=a.createElement("script"),Se(h),bn(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function mS(t,n){ea.M(t,n);var a=fs;if(a&&t){var o=Z(a).hoistableScripts,u=ds(t),h=o.get(u);h||(h=a.querySelector(Lo(u)),h||(t=g({src:t,async:!0,type:"module"},n),(n=ui.get(u))&&mh(t,n),h=a.createElement("script"),Se(h),bn(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function Pv(t,n,a,o){var u=(u=re.current)?cc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=hs(a.href),a=Z(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=hs(a.href);var h=Z(u).hoistableStyles,y=h.get(t);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,y),(h=u.querySelector(Uo(t)))&&!h._p&&(y.instance=h,y.state.loading=5),ui.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ui.set(t,a),h||gS(u,t,a,y.state))),n&&o===null)throw Error(s(528,""));return y}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ds(a),a=Z(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function hs(t){return'href="'+_t(t)+'"'}function Uo(t){return'link[rel="stylesheet"]['+t+"]"}function zv(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function gS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),bn(n,"link",a),Se(n),t.head.appendChild(n))}function ds(t){return'[src="'+_t(t)+'"]'}function Lo(t){return"script[async]"+t}function Iv(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+_t(a.href)+'"]');if(o)return n.instance=o,Se(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),Se(o),bn(o,"style",u),uc(o,a.precedence,t),n.instance=o;case"stylesheet":u=hs(a.href);var h=t.querySelector(Uo(u));if(h)return n.state.loading|=4,n.instance=h,Se(h),h;o=zv(a),(u=ui.get(u))&&ph(o,u),h=(t.ownerDocument||t).createElement("link"),Se(h);var y=h;return y._p=new Promise(function(A,I){y.onload=A,y.onerror=I}),bn(h,"link",o),n.state.loading|=4,uc(h,a.precedence,t),n.instance=h;case"script":return h=ds(a.src),(u=t.querySelector(Lo(h)))?(n.instance=u,Se(u),u):(o=a,(u=ui.get(h))&&(o=g({},a),mh(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),Se(u),bn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,uc(o,a.precedence,t));return n.instance}function uc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,y=0;y<o.length;y++){var A=o[y];if(A.dataset.precedence===n)h=A;else if(h!==u)break}h?h.parentNode.insertBefore(t,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function ph(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function mh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var fc=null;function Bv(t,n,a){if(fc===null){var o=new Map,u=fc=new Map;u.set(a,o)}else u=fc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var h=a[u];if(!(h[er]||h[sn]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var y=h.getAttribute(n)||"";y=t+y;var A=o.get(y);A?A.push(h):o.set(y,[h])}}return o}function Fv(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function vS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Hv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function _S(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=hs(o.href),h=n.querySelector(Uo(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=hc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=h,Se(h);return}h=n.ownerDocument||n,o=zv(o),(u=ui.get(u))&&ph(o,u),h=h.createElement("link"),Se(h);var y=h;y._p=new Promise(function(A,I){y.onload=A,y.onerror=I}),bn(h,"link",o),a.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=hc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var gh=0;function xS(t,n){return t.stylesheets&&t.count===0&&pc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&pc(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+n);0<t.imgBytes&&gh===0&&(gh=62500*$y());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&pc(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>gh?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function hc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)pc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var dc=null;function pc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,dc=new Map,n.forEach(yS,t),dc=null,hc.call(t))}function yS(t,n){if(!(n.state.loading&4)){var a=dc.get(t);if(a)var o=a.get(null);else{a=new Map,dc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var y=u[h];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),h=a.get(y)||o,h===o&&a.set(null,u),a.set(y,u),this.count++,o=hc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var No={$$typeof:L,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function SS(t,n,a,o,u,h,y,A,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Tt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tt(0),this.hiddenUpdates=Tt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function Gv(t,n,a,o,u,h,y,A,I,ee,me,xe){return t=new SS(t,n,a,y,I,ee,me,xe,A),n=1,h===!0&&(n|=24),h=jn(3,null,null,n),t.current=h,h.stateNode=t,n=Yu(),n.refCount++,t.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},Ju(h),t}function Vv(t){return t?(t=Xr,t):Xr}function kv(t,n,a,o,u,h){u=Vv(u),o.context===null?o.context=u:o.pendingContext=u,o=Ta(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Aa(t,o,n),a!==null&&(Gn(a,t,n),uo(a,t,n))}function Xv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function vh(t,n){Xv(t,n),(t=t.alternate)&&Xv(t,n)}function Wv(t){if(t.tag===13||t.tag===31){var n=rr(t,67108864);n!==null&&Gn(n,t,67108864),vh(t,67108864)}}function qv(t){if(t.tag===13||t.tag===31){var n=Jn();n=Or(n);var a=rr(t,n);a!==null&&Gn(a,t,n),vh(t,n)}}var mc=!0;function MS(t,n,a,o){var u=P.T;P.T=null;var h=K.p;try{K.p=2,_h(t,n,a,o)}finally{K.p=h,P.T=u}}function ES(t,n,a,o){var u=P.T;P.T=null;var h=K.p;try{K.p=8,_h(t,n,a,o)}finally{K.p=h,P.T=u}}function _h(t,n,a,o){if(mc){var u=xh(o);if(u===null)ah(t,n,o,gc,a),Yv(t,o);else if(TS(u,t,n,a,o))o.stopPropagation();else if(Yv(t,o),n&4&&-1<bS.indexOf(t)){for(;u!==null;){var h=oe(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var y=Re(h.pendingLanes);if(y!==0){var A=h;for(A.pendingLanes|=2,A.entangledLanes|=2;y;){var I=1<<31-Ue(y);A.entanglements[1]|=I,y&=~I}Ui(h),(Dt&6)===0&&(Jl=b()+500,Ro(0))}}break;case 31:case 13:A=rr(h,2),A!==null&&Gn(A,h,2),ec(),vh(h,2)}if(h=xh(o),h===null&&ah(t,n,o,gc,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else ah(t,n,o,null,a)}}function xh(t){return t=yu(t),yh(t)}var gc=null;function yh(t){if(gc=null,t=W(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return gc=t,null}function jv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(J()){case ge:return 2;case Te:return 8;case de:case Ke:return 32;case Y:return 268435456;default:return 32}default:return 32}}var Sh=!1,Ia=null,Ba=null,Fa=null,Oo=new Map,Po=new Map,Ha=[],bS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Yv(t,n){switch(t){case"focusin":case"focusout":Ia=null;break;case"dragenter":case"dragleave":Ba=null;break;case"mouseover":case"mouseout":Fa=null;break;case"pointerover":case"pointerout":Oo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(n.pointerId)}}function zo(t,n,a,o,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=oe(n),n!==null&&Wv(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function TS(t,n,a,o,u){switch(n){case"focusin":return Ia=zo(Ia,t,n,a,o,u),!0;case"dragenter":return Ba=zo(Ba,t,n,a,o,u),!0;case"mouseover":return Fa=zo(Fa,t,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return Oo.set(h,zo(Oo.get(h)||null,t,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Po.set(h,zo(Po.get(h)||null,t,n,a,o,u)),!0}return!1}function Zv(t){var n=W(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,js(t.priority,function(){qv(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,js(t.priority,function(){qv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function vc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=xh(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);xu=o,a.target.dispatchEvent(o),xu=null}else return n=oe(a),n!==null&&Wv(n),t.blockedOn=a,!1;n.shift()}return!0}function Kv(t,n,a){vc(t)&&a.delete(n)}function AS(){Sh=!1,Ia!==null&&vc(Ia)&&(Ia=null),Ba!==null&&vc(Ba)&&(Ba=null),Fa!==null&&vc(Fa)&&(Fa=null),Oo.forEach(Kv),Po.forEach(Kv)}function _c(t,n){t.blockedOn===n&&(t.blockedOn=null,Sh||(Sh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,AS)))}var xc=null;function Qv(t){xc!==t&&(xc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){xc===t&&(xc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(yh(o||a)===null)continue;break}var h=oe(a);h!==null&&(t.splice(n,3),n-=3,xf(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function ps(t){function n(I){return _c(I,t)}Ia!==null&&_c(Ia,t),Ba!==null&&_c(Ba,t),Fa!==null&&_c(Fa,t),Oo.forEach(n),Po.forEach(n);for(var a=0;a<Ha.length;a++){var o=Ha[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Ha.length&&(a=Ha[0],a.blockedOn===null);)Zv(a),a.blockedOn===null&&Ha.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],y=u[xn]||null;if(typeof h=="function")y||Qv(a);else if(y){var A=null;if(h&&h.hasAttribute("formAction")){if(u=h,y=h[xn]||null)A=y.formAction;else if(yh(u)!==null)continue}else A=y.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),Qv(a)}}}function Jv(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Mh(t){this._internalRoot=t}yc.prototype.render=Mh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Jn();kv(a,o,t,n,null,null)},yc.prototype.unmount=Mh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;kv(t.current,2,null,t,null,null),ec(),n[_a]=null}};function yc(t){this._internalRoot=t}yc.prototype.unstable_scheduleHydration=function(t){if(t){var n=$a();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ha.length&&n!==0&&n<Ha[a].priority;a++);Ha.splice(a,0,t),a===0&&Zv(t)}};var $v=e.version;if($v!=="19.2.0")throw Error(s(527,$v,"19.2.0"));K.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var RS={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sc.isDisabled&&Sc.supportsFiber)try{Me=Sc.inject(RS),Ce=Sc}catch{}}return Bo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=sg,h=og,y=lg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=Gv(t,1,!1,null,null,a,o,null,u,h,y,Jv),t[_a]=n.current,ih(t),new Mh(n)},Bo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",h=sg,y=og,A=lg,I=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=Gv(t,1,!0,n,a??null,o,u,I,h,y,A,Jv),n.context=Vv(null),a=n.current,o=Jn(),o=Or(o),u=Ta(o),u.callback=null,Aa(a,u,o),a=o,n.current.lanes=a,wn(n,a),Ui(n),t[_a]=n.current,ih(t),new yc(n)},Bo.version="19.2.0",Bo}var c_;function BS(){if(c_)return Th.exports;c_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Th.exports=IS(),Th.exports}var FS=BS();var u_="popstate";function HS(r={}){function e(s,l){let{pathname:c,search:f,hash:d}=s.location;return ud("",{pathname:c,search:f,hash:d},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(s,l){return typeof l=="string"?l:Qo(l)}return VS(e,i,null,r)}function Qt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Ti(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function GS(){return Math.random().toString(36).substring(2,10)}function f_(r,e){return{usr:r.state,key:r.key,idx:e}}function ud(r,e,i=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Hs(e):e,state:i,key:e&&e.key||s||GS()}}function Qo({pathname:r="/",search:e="",hash:i=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(r+=i.charAt(0)==="#"?i:"#"+i),r}function Hs(r){let e={};if(r){let i=r.indexOf("#");i>=0&&(e.hash=r.substring(i),r=r.substring(0,i));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function VS(r,e,i,s={}){let{window:l=document.defaultView,v5Compat:c=!1}=s,f=l.history,d="POP",m=null,p=v();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function v(){return(f.state||{idx:null}).idx}function g(){d="POP";let S=v(),_=S==null?null:S-p;p=S,m&&m({action:d,location:T.location,delta:_})}function x(S,_){d="PUSH";let U=ud(T.location,S,_);p=v()+1;let L=f_(U,p),D=T.createHref(U);try{f.pushState(L,"",D)}catch(H){if(H instanceof DOMException&&H.name==="DataCloneError")throw H;l.location.assign(D)}c&&m&&m({action:d,location:T.location,delta:1})}function M(S,_){d="REPLACE";let U=ud(T.location,S,_);p=v();let L=f_(U,p),D=T.createHref(U);f.replaceState(L,"",D),c&&m&&m({action:d,location:T.location,delta:0})}function E(S){return kS(S)}let T={get action(){return d},get location(){return r(l,f)},listen(S){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(u_,g),m=S,()=>{l.removeEventListener(u_,g),m=null}},createHref(S){return e(l,S)},createURL:E,encodeLocation(S){let _=E(S);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:x,replace:M,go(S){return f.go(S)}};return T}function kS(r,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Qt(i,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:Qo(r);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=i+s),new URL(s,i)}function R0(r,e,i="/"){return XS(r,e,i,!1)}function XS(r,e,i,s){let l=typeof e=="string"?Hs(e):e,c=da(l.pathname||"/",i);if(c==null)return null;let f=C0(r);WS(f);let d=null;for(let m=0;d==null&&m<f.length;++m){let p=nM(c);d=eM(f[m],p,s)}return d}function C0(r,e=[],i=[],s="",l=!1){let c=(f,d,m=l,p)=>{let v={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:d,route:f};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(s)&&m)return;Qt(v.relativePath.startsWith(s),`Absolute route path "${v.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(s.length)}let g=ua([s,v.relativePath]),x=i.concat(v);f.children&&f.children.length>0&&(Qt(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),C0(f.children,e,x,g,m)),!(f.path==null&&!f.index)&&e.push({path:g,score:JS(g,f.index),routesMeta:x})};return r.forEach((f,d)=>{if(f.path===""||!f.path?.includes("?"))c(f,d);else for(let m of w0(f.path))c(f,d,!0,m)}),e}function w0(r){let e=r.split("/");if(e.length===0)return[];let[i,...s]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(s.length===0)return l?[c,""]:[c];let f=w0(s.join("/")),d=[];return d.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&d.push(...f),d.map(m=>r.startsWith("/")&&m===""?"/":m)}function WS(r){r.sort((e,i)=>e.score!==i.score?i.score-e.score:$S(e.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var qS=/^:[\w-]+$/,jS=3,YS=2,ZS=1,KS=10,QS=-2,h_=r=>r==="*";function JS(r,e){let i=r.split("/"),s=i.length;return i.some(h_)&&(s+=QS),e&&(s+=YS),i.filter(l=>!h_(l)).reduce((l,c)=>l+(qS.test(c)?jS:c===""?ZS:KS),s)}function $S(r,e){return r.length===e.length&&r.slice(0,-1).every((s,l)=>s===e[l])?r[r.length-1]-e[e.length-1]:0}function eM(r,e,i=!1){let{routesMeta:s}=r,l={},c="/",f=[];for(let d=0;d<s.length;++d){let m=s[d],p=d===s.length-1,v=c==="/"?e:e.slice(c.length)||"/",g=tu({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},v),x=m.route;if(!g&&p&&i&&!s[s.length-1].route.index&&(g=tu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},v)),!g)return null;Object.assign(l,g.params),f.push({params:l,pathname:ua([c,g.pathname]),pathnameBase:oM(ua([c,g.pathnameBase])),route:x}),g.pathnameBase!=="/"&&(c=ua([c,g.pathnameBase]))}return f}function tu(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,s]=tM(r.path,r.caseSensitive,r.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:s.reduce((p,{paramName:v,isOptional:g},x)=>{if(v==="*"){let E=d[x]||"";f=c.slice(0,c.length-E.length).replace(/(.)\/+$/,"$1")}const M=d[x];return g&&!M?p[v]=void 0:p[v]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:f,pattern:r}}function tM(r,e=!1,i=!0){Ti(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,d,m)=>(s.push({paramName:d,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function nM(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ti(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function da(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,s=r.charAt(i);return s&&s!=="/"?null:r.slice(i)||"/"}var iM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,aM=r=>iM.test(r);function rM(r,e="/"){let{pathname:i,search:s="",hash:l=""}=typeof r=="string"?Hs(r):r,c;if(i)if(aM(i))c=i;else{if(i.includes("//")){let f=i;i=i.replace(/\/\/+/g,"/"),Ti(!1,`Pathnames cannot have embedded double slashes - normalizing ${f} -> ${i}`)}i.startsWith("/")?c=d_(i.substring(1),"/"):c=d_(i,e)}else c=e;return{pathname:c,search:lM(s),hash:cM(l)}}function d_(r,e){let i=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function wh(r,e,i,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function sM(r){return r.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function D0(r){let e=sM(r);return e.map((i,s)=>s===e.length-1?i.pathname:i.pathnameBase)}function U0(r,e,i,s=!1){let l;typeof r=="string"?l=Hs(r):(l={...r},Qt(!l.pathname||!l.pathname.includes("?"),wh("?","pathname","search",l)),Qt(!l.pathname||!l.pathname.includes("#"),wh("#","pathname","hash",l)),Qt(!l.search||!l.search.includes("#"),wh("#","search","hash",l)));let c=r===""||l.pathname==="",f=c?"/":l.pathname,d;if(f==null)d=i;else{let g=e.length-1;if(!s&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),g-=1;l.pathname=x.join("/")}d=g>=0?e[g]:"/"}let m=rM(l,d),p=f&&f!=="/"&&f.endsWith("/"),v=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||v)&&(m.pathname+="/"),m}var ua=r=>r.join("/").replace(/\/\/+/g,"/"),oM=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),lM=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,cM=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function uM(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var L0=["POST","PUT","PATCH","DELETE"];new Set(L0);var fM=["GET",...L0];new Set(fM);var Gs=ue.createContext(null);Gs.displayName="DataRouter";var uu=ue.createContext(null);uu.displayName="DataRouterState";ue.createContext(!1);var N0=ue.createContext({isTransitioning:!1});N0.displayName="ViewTransition";var hM=ue.createContext(new Map);hM.displayName="Fetchers";var dM=ue.createContext(null);dM.displayName="Await";var zi=ue.createContext(null);zi.displayName="Navigation";var al=ue.createContext(null);al.displayName="Location";var ga=ue.createContext({outlet:null,matches:[],isDataRoute:!1});ga.displayName="Route";var np=ue.createContext(null);np.displayName="RouteError";function pM(r,{relative:e}={}){Qt(rl(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=ue.useContext(zi),{hash:l,pathname:c,search:f}=sl(r,{relative:e}),d=c;return i!=="/"&&(d=c==="/"?i:ua([i,c])),s.createHref({pathname:d,search:f,hash:l})}function rl(){return ue.useContext(al)!=null}function Ja(){return Qt(rl(),"useLocation() may be used only in the context of a <Router> component."),ue.useContext(al).location}var O0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function P0(r){ue.useContext(zi).static||ue.useLayoutEffect(r)}function mM(){let{isDataRoute:r}=ue.useContext(ga);return r?CM():gM()}function gM(){Qt(rl(),"useNavigate() may be used only in the context of a <Router> component.");let r=ue.useContext(Gs),{basename:e,navigator:i}=ue.useContext(zi),{matches:s}=ue.useContext(ga),{pathname:l}=Ja(),c=JSON.stringify(D0(s)),f=ue.useRef(!1);return P0(()=>{f.current=!0}),ue.useCallback((m,p={})=>{if(Ti(f.current,O0),!f.current)return;if(typeof m=="number"){i.go(m);return}let v=U0(m,JSON.parse(c),l,p.relative==="path");r==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:ua([e,v.pathname])),(p.replace?i.replace:i.push)(v,p.state,p)},[e,i,c,l,r])}ue.createContext(null);function sl(r,{relative:e}={}){let{matches:i}=ue.useContext(ga),{pathname:s}=Ja(),l=JSON.stringify(D0(i));return ue.useMemo(()=>U0(r,JSON.parse(l),s,e==="path"),[r,l,s,e])}function vM(r,e){return z0(r,e)}function z0(r,e,i,s,l){Qt(rl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=ue.useContext(zi),{matches:f}=ue.useContext(ga),d=f[f.length-1],m=d?d.params:{},p=d?d.pathname:"/",v=d?d.pathnameBase:"/",g=d&&d.route;{let U=g&&g.path||"";I0(p,!g||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let x=Ja(),M;if(e){let U=typeof e=="string"?Hs(e):e;Qt(v==="/"||U.pathname?.startsWith(v),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${U.pathname}" was given in the \`location\` prop.`),M=U}else M=x;let E=M.pathname||"/",T=E;if(v!=="/"){let U=v.replace(/^\//,"").split("/");T="/"+E.replace(/^\//,"").split("/").slice(U.length).join("/")}let S=R0(r,{pathname:T});Ti(g||S!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),Ti(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=MM(S&&S.map(U=>Object.assign({},U,{params:Object.assign({},m,U.params),pathname:ua([v,c.encodeLocation?c.encodeLocation(U.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?v:ua([v,c.encodeLocation?c.encodeLocation(U.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathnameBase])})),f,i,s,l);return e&&_?ue.createElement(al.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},_):_}function _M(){let r=RM(),e=uM(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",r),f=ue.createElement(ue.Fragment,null,ue.createElement("p",null,"💿 Hey developer 👋"),ue.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ue.createElement("code",{style:c},"ErrorBoundary")," or"," ",ue.createElement("code",{style:c},"errorElement")," prop on your route.")),ue.createElement(ue.Fragment,null,ue.createElement("h2",null,"Unexpected Application Error!"),ue.createElement("h3",{style:{fontStyle:"italic"}},e),i?ue.createElement("pre",{style:l},i):null,f)}var xM=ue.createElement(_M,null),yM=class extends ue.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.onError?this.props.onError(r,e):console.error("React Router caught the following error during render",r)}render(){return this.state.error!==void 0?ue.createElement(ga.Provider,{value:this.props.routeContext},ue.createElement(np.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function SM({routeContext:r,match:e,children:i}){let s=ue.useContext(Gs);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),ue.createElement(ga.Provider,{value:r},i)}function MM(r,e=[],i=null,s=null,l=null){if(r==null){if(!i)return null;if(i.errors)r=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)r=i.matches;else return null}let c=r,f=i?.errors;if(f!=null){let v=c.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);Qt(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,v+1))}let d=!1,m=-1;if(i)for(let v=0;v<c.length;v++){let g=c[v];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=v),g.route.id){let{loaderData:x,errors:M}=i,E=g.route.loader&&!x.hasOwnProperty(g.route.id)&&(!M||M[g.route.id]===void 0);if(g.route.lazy||E){d=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}let p=i&&s?(v,g)=>{s(v,{location:i.location,params:i.matches?.[0]?.params??{},errorInfo:g})}:void 0;return c.reduceRight((v,g,x)=>{let M,E=!1,T=null,S=null;i&&(M=f&&g.route.id?f[g.route.id]:void 0,T=g.route.errorElement||xM,d&&(m<0&&x===0?(I0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,S=null):m===x&&(E=!0,S=g.route.hydrateFallbackElement||null)));let _=e.concat(c.slice(0,x+1)),U=()=>{let L;return M?L=T:E?L=S:g.route.Component?L=ue.createElement(g.route.Component,null):g.route.element?L=g.route.element:L=v,ue.createElement(SM,{match:g,routeContext:{outlet:v,matches:_,isDataRoute:i!=null},children:L})};return i&&(g.route.ErrorBoundary||g.route.errorElement||x===0)?ue.createElement(yM,{location:i.location,revalidation:i.revalidation,component:T,error:M,children:U(),routeContext:{outlet:null,matches:_,isDataRoute:!0},onError:p}):U()},null)}function ip(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function EM(r){let e=ue.useContext(Gs);return Qt(e,ip(r)),e}function bM(r){let e=ue.useContext(uu);return Qt(e,ip(r)),e}function TM(r){let e=ue.useContext(ga);return Qt(e,ip(r)),e}function ap(r){let e=TM(r),i=e.matches[e.matches.length-1];return Qt(i.route.id,`${r} can only be used on routes that contain a unique "id"`),i.route.id}function AM(){return ap("useRouteId")}function RM(){let r=ue.useContext(np),e=bM("useRouteError"),i=ap("useRouteError");return r!==void 0?r:e.errors?.[i]}function CM(){let{router:r}=EM("useNavigate"),e=ap("useNavigate"),i=ue.useRef(!1);return P0(()=>{i.current=!0}),ue.useCallback(async(l,c={})=>{Ti(i.current,O0),i.current&&(typeof l=="number"?r.navigate(l):await r.navigate(l,{fromRouteId:e,...c}))},[r,e])}var p_={};function I0(r,e,i){!e&&!p_[r]&&(p_[r]=!0,Ti(!1,i))}ue.memo(wM);function wM({routes:r,future:e,state:i,unstable_onError:s}){return z0(r,void 0,i,s,e)}function B0(r){Qt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function DM({basename:r="/",children:e=null,location:i,navigationType:s="POP",navigator:l,static:c=!1}){Qt(!rl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=r.replace(/^\/*/,"/"),d=ue.useMemo(()=>({basename:f,navigator:l,static:c,future:{}}),[f,l,c]);typeof i=="string"&&(i=Hs(i));let{pathname:m="/",search:p="",hash:v="",state:g=null,key:x="default"}=i,M=ue.useMemo(()=>{let E=da(m,f);return E==null?null:{location:{pathname:E,search:p,hash:v,state:g,key:x},navigationType:s}},[f,m,p,v,g,x,s]);return Ti(M!=null,`<Router basename="${f}"> is not able to match the URL "${m}${p}${v}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:ue.createElement(zi.Provider,{value:d},ue.createElement(al.Provider,{children:e,value:M}))}function UM({children:r,location:e}){return vM(fd(r),e)}function fd(r,e=[]){let i=[];return ue.Children.forEach(r,(s,l)=>{if(!ue.isValidElement(s))return;let c=[...e,l];if(s.type===ue.Fragment){i.push.apply(i,fd(s.props.children,c));return}Qt(s.type===B0,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Qt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=fd(s.props.children,c)),i.push(f)}),i}var Yc="get",Zc="application/x-www-form-urlencoded";function fu(r){return r!=null&&typeof r.tagName=="string"}function LM(r){return fu(r)&&r.tagName.toLowerCase()==="button"}function NM(r){return fu(r)&&r.tagName.toLowerCase()==="form"}function OM(r){return fu(r)&&r.tagName.toLowerCase()==="input"}function PM(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function zM(r,e){return r.button===0&&(!e||e==="_self")&&!PM(r)}var Mc=null;function IM(){if(Mc===null)try{new FormData(document.createElement("form"),0),Mc=!1}catch{Mc=!0}return Mc}var BM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Dh(r){return r!=null&&!BM.has(r)?(Ti(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Zc}"`),null):r}function FM(r,e){let i,s,l,c,f;if(NM(r)){let d=r.getAttribute("action");s=d?da(d,e):null,i=r.getAttribute("method")||Yc,l=Dh(r.getAttribute("enctype"))||Zc,c=new FormData(r)}else if(LM(r)||OM(r)&&(r.type==="submit"||r.type==="image")){let d=r.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=r.getAttribute("formaction")||d.getAttribute("action");if(s=m?da(m,e):null,i=r.getAttribute("formmethod")||d.getAttribute("method")||Yc,l=Dh(r.getAttribute("formenctype"))||Dh(d.getAttribute("enctype"))||Zc,c=new FormData(d,r),!IM()){let{name:p,type:v,value:g}=r;if(v==="image"){let x=p?`${p}.`:"";c.append(`${x}x`,"0"),c.append(`${x}y`,"0")}else p&&c.append(p,g)}}else{if(fu(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Yc,s=null,l=Zc,f=r}return c&&l==="text/plain"&&(f=c,c=void 0),{action:s,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function rp(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function HM(r,e,i){let s=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return s.pathname==="/"?s.pathname=`_root.${i}`:e&&da(s.pathname,e)==="/"?s.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${i}`,s}async function GM(r,e){if(r.id in e)return e[r.id];try{let i=await import(r.module);return e[r.id]=i,i}catch(i){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function VM(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function kM(r,e,i){let s=await Promise.all(r.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await GM(c,i);return f.links?f.links():[]}return[]}));return jM(s.flat(1).filter(VM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function m_(r,e,i,s,l,c){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,d=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return c==="assets"?e.filter((m,p)=>f(m,p)||d(m,p)):c==="data"?e.filter((m,p)=>{let v=s.routes[m.route.id];if(!v||!v.hasLoader)return!1;if(f(m,p)||d(m,p))return!0;if(m.route.shouldRevalidate){let g=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function XM(r,e,{includeHydrateFallback:i}={}){return WM(r.map(s=>{let l=e.routes[s.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function WM(r){return[...new Set(r)]}function qM(r){let e={},i=Object.keys(r).sort();for(let s of i)e[s]=r[s];return e}function jM(r,e){let i=new Set;return new Set(e),r.reduce((s,l)=>{let c=JSON.stringify(qM(l));return i.has(c)||(i.add(c),s.push({key:c,link:l})),s},[])}function F0(){let r=ue.useContext(Gs);return rp(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function YM(){let r=ue.useContext(uu);return rp(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var sp=ue.createContext(void 0);sp.displayName="FrameworkContext";function H0(){let r=ue.useContext(sp);return rp(r,"You must render this element inside a <HydratedRouter> element"),r}function ZM(r,e){let i=ue.useContext(sp),[s,l]=ue.useState(!1),[c,f]=ue.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:p,onMouseLeave:v,onTouchStart:g}=e,x=ue.useRef(null);ue.useEffect(()=>{if(r==="render"&&f(!0),r==="viewport"){let T=_=>{_.forEach(U=>{f(U.isIntersecting)})},S=new IntersectionObserver(T,{threshold:.5});return x.current&&S.observe(x.current),()=>{S.disconnect()}}},[r]),ue.useEffect(()=>{if(s){let T=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(T)}}},[s]);let M=()=>{l(!0)},E=()=>{l(!1),f(!1)};return i?r!=="intent"?[c,x,{}]:[c,x,{onFocus:Fo(d,M),onBlur:Fo(m,E),onMouseEnter:Fo(p,M),onMouseLeave:Fo(v,E),onTouchStart:Fo(g,M)}]:[!1,x,{}]}function Fo(r,e){return i=>{r&&r(i),i.defaultPrevented||e(i)}}function KM({page:r,...e}){let{router:i}=F0(),s=ue.useMemo(()=>R0(i.routes,r,i.basename),[i.routes,r,i.basename]);return s?ue.createElement(JM,{page:r,matches:s,...e}):null}function QM(r){let{manifest:e,routeModules:i}=H0(),[s,l]=ue.useState([]);return ue.useEffect(()=>{let c=!1;return kM(r,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[r,e,i]),s}function JM({page:r,matches:e,...i}){let s=Ja(),{manifest:l,routeModules:c}=H0(),{basename:f}=F0(),{loaderData:d,matches:m}=YM(),p=ue.useMemo(()=>m_(r,e,m,l,s,"data"),[r,e,m,l,s]),v=ue.useMemo(()=>m_(r,e,m,l,s,"assets"),[r,e,m,l,s]),g=ue.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let E=new Set,T=!1;if(e.forEach(_=>{let U=l.routes[_.route.id];!U||!U.hasLoader||(!p.some(L=>L.route.id===_.route.id)&&_.route.id in d&&c[_.route.id]?.shouldRevalidate||U.hasClientLoader?T=!0:E.add(_.route.id))}),E.size===0)return[];let S=HM(r,f,"data");return T&&E.size>0&&S.searchParams.set("_routes",e.filter(_=>E.has(_.route.id)).map(_=>_.route.id).join(",")),[S.pathname+S.search]},[f,d,s,l,p,e,r,c]),x=ue.useMemo(()=>XM(v,l),[v,l]),M=QM(v);return ue.createElement(ue.Fragment,null,g.map(E=>ue.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...i})),x.map(E=>ue.createElement("link",{key:E,rel:"modulepreload",href:E,...i})),M.map(({key:E,link:T})=>ue.createElement("link",{key:E,nonce:i.nonce,...T})))}function $M(...r){return e=>{r.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var G0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{G0&&(window.__reactRouterVersion="7.9.6")}catch{}function eE({basename:r,children:e,window:i}){let s=ue.useRef();s.current==null&&(s.current=HS({window:i,v5Compat:!0}));let l=s.current,[c,f]=ue.useState({action:l.action,location:l.location}),d=ue.useCallback(m=>{ue.startTransition(()=>f(m))},[f]);return ue.useLayoutEffect(()=>l.listen(d),[l,d]),ue.createElement(DM,{basename:r,children:e,location:c.location,navigationType:c.action,navigator:l})}var V0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,k0=ue.forwardRef(function({onClick:e,discover:i="render",prefetch:s="none",relative:l,reloadDocument:c,replace:f,state:d,target:m,to:p,preventScrollReset:v,viewTransition:g,...x},M){let{basename:E}=ue.useContext(zi),T=typeof p=="string"&&V0.test(p),S,_=!1;if(typeof p=="string"&&T&&(S=p,G0))try{let w=new URL(window.location.href),C=p.startsWith("//")?new URL(w.protocol+p):new URL(p),G=da(C.pathname,E);C.origin===w.origin&&G!=null?p=G+C.search+C.hash:_=!0}catch{Ti(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let U=pM(p,{relative:l}),[L,D,H]=ZM(s,x),F=aE(p,{replace:f,state:d,target:m,preventScrollReset:v,relative:l,viewTransition:g});function z(w){e&&e(w),w.defaultPrevented||F(w)}let Q=ue.createElement("a",{...x,...H,href:S||U,onClick:_||c?e:z,ref:$M(M,D),target:m,"data-discover":!T&&i==="render"?"true":void 0});return L&&!T?ue.createElement(ue.Fragment,null,Q,ue.createElement(KM,{page:U})):Q});k0.displayName="Link";var tE=ue.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:s="",end:l=!1,style:c,to:f,viewTransition:d,children:m,...p},v){let g=sl(f,{relative:p.relative}),x=Ja(),M=ue.useContext(uu),{navigator:E,basename:T}=ue.useContext(zi),S=M!=null&&cE(g)&&d===!0,_=E.encodeLocation?E.encodeLocation(g).pathname:g.pathname,U=x.pathname,L=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(U=U.toLowerCase(),L=L?L.toLowerCase():null,_=_.toLowerCase()),L&&T&&(L=da(L,T)||L);const D=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let H=U===_||!l&&U.startsWith(_)&&U.charAt(D)==="/",F=L!=null&&(L===_||!l&&L.startsWith(_)&&L.charAt(_.length)==="/"),z={isActive:H,isPending:F,isTransitioning:S},Q=H?e:void 0,w;typeof s=="function"?w=s(z):w=[s,H?"active":null,F?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let C=typeof c=="function"?c(z):c;return ue.createElement(k0,{...p,"aria-current":Q,className:w,ref:v,style:C,to:f,viewTransition:d},typeof m=="function"?m(z):m)});tE.displayName="NavLink";var nE=ue.forwardRef(({discover:r="render",fetcherKey:e,navigate:i,reloadDocument:s,replace:l,state:c,method:f=Yc,action:d,onSubmit:m,relative:p,preventScrollReset:v,viewTransition:g,...x},M)=>{let E=oE(),T=lE(d,{relative:p}),S=f.toLowerCase()==="get"?"get":"post",_=typeof d=="string"&&V0.test(d),U=L=>{if(m&&m(L),L.defaultPrevented)return;L.preventDefault();let D=L.nativeEvent.submitter,H=D?.getAttribute("formmethod")||f;E(D||L.currentTarget,{fetcherKey:e,method:H,navigate:i,replace:l,state:c,relative:p,preventScrollReset:v,viewTransition:g})};return ue.createElement("form",{ref:M,method:S,action:T,onSubmit:s?m:U,...x,"data-discover":!_&&r==="render"?"true":void 0})});nE.displayName="Form";function iE(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function X0(r){let e=ue.useContext(Gs);return Qt(e,iE(r)),e}function aE(r,{target:e,replace:i,state:s,preventScrollReset:l,relative:c,viewTransition:f}={}){let d=mM(),m=Ja(),p=sl(r,{relative:c});return ue.useCallback(v=>{if(zM(v,e)){v.preventDefault();let g=i!==void 0?i:Qo(m)===Qo(p);d(r,{replace:g,state:s,preventScrollReset:l,relative:c,viewTransition:f})}},[m,d,p,i,s,e,r,l,c,f])}var rE=0,sE=()=>`__${String(++rE)}__`;function oE(){let{router:r}=X0("useSubmit"),{basename:e}=ue.useContext(zi),i=AM();return ue.useCallback(async(s,l={})=>{let{action:c,method:f,encType:d,formData:m,body:p}=FM(s,e);if(l.navigate===!1){let v=l.fetcherKey||sE();await r.fetch(v,i,l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||d,flushSync:l.flushSync})}else await r.navigate(l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||d,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[r,e,i])}function lE(r,{relative:e}={}){let{basename:i}=ue.useContext(zi),s=ue.useContext(ga);Qt(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),c={...sl(r||".",{relative:e})},f=Ja();if(r==null){c.search=f.search;let d=new URLSearchParams(c.search),m=d.getAll("index");if(m.some(v=>v==="")){d.delete("index"),m.filter(g=>g).forEach(g=>d.append("index",g));let v=d.toString();c.search=v?`?${v}`:""}}return(!r||r===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:ua([i,c.pathname])),Qo(c)}function cE(r,{relative:e}={}){let i=ue.useContext(N0);Qt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=X0("useViewTransitionState"),l=sl(r,{relative:e});if(!i.isTransitioning)return!1;let c=da(i.currentLocation.pathname,s)||i.currentLocation.pathname,f=da(i.nextLocation.pathname,s)||i.nextLocation.pathname;return tu(l.pathname,f)!=null||tu(l.pathname,c)!=null}var W0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},g_=Dr.createContext&&Dr.createContext(W0),uE=["attr","size","title"];function fE(r,e){if(r==null)return{};var i=hE(r,e),s,l;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);for(l=0;l<c.length;l++)s=c[l],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(r,s)&&(i[s]=r[s])}return i}function hE(r,e){if(r==null)return{};var i={};for(var s in r)if(Object.prototype.hasOwnProperty.call(r,s)){if(e.indexOf(s)>=0)continue;i[s]=r[s]}return i}function nu(){return nu=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])}return r},nu.apply(this,arguments)}function v_(r,e){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);e&&(s=s.filter(function(l){return Object.getOwnPropertyDescriptor(r,l).enumerable})),i.push.apply(i,s)}return i}function iu(r){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?v_(Object(i),!0).forEach(function(s){dE(r,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):v_(Object(i)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(i,s))})}return r}function dE(r,e,i){return e=pE(e),e in r?Object.defineProperty(r,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[e]=i,r}function pE(r){var e=mE(r,"string");return typeof e=="symbol"?e:e+""}function mE(r,e){if(typeof r!="object"||!r)return r;var i=r[Symbol.toPrimitive];if(i!==void 0){var s=i.call(r,e);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function q0(r){return r&&r.map((e,i)=>Dr.createElement(e.tag,iu({key:i},e.attr),q0(e.child)))}function va(r){return e=>Dr.createElement(gE,nu({attr:iu({},r.attr)},e),q0(r.child))}function gE(r){var e=i=>{var{attr:s,size:l,title:c}=r,f=fE(r,uE),d=l||i.size||"1em",m;return i.className&&(m=i.className),r.className&&(m=(m?m+" ":"")+r.className),Dr.createElement("svg",nu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,s,f,{className:m,style:iu(iu({color:r.color||i.color},i.style),r.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),c&&Dr.createElement("title",null,c),r.children)};return g_!==void 0?Dr.createElement(g_.Consumer,null,i=>e(i)):e(W0)}function vE(r){return va({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"},child:[]},{tag:"polyline",attr:{points:"19 12 12 19 5 12"},child:[]}]})(r)}function _E(r){return va({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"},child:[]}]})(r)}function xE(r){return va({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]}]})(r)}function yE(r){return va({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(r)}function SE(r){return va({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"},child:[]},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]}]})(r)}function ME(r){return va({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"1 4 1 10 7 10"},child:[]},{tag:"path",attr:{d:"M3.51 15a9 9 0 1 0 2.13-9.36L1 10"},child:[]}]})(r)}function EE(r){return va({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(r)}function bE(r){return va({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(r)}const TE=[{id:1,name:"Projects",hash:"projects"},{id:2,name:"Experience",hash:"experience"},{id:3,name:"Contact",hash:"contact"}],op="/assets/cv.pdf",AE="Open to software and AI roles",RE="https://navbot-web.onrender.com/",j0="https://cherie-dips.github.io/Interview.ai/#notes",CE="https://leetcode.com/u/LBQ7IYa12g/",wE="https://www.codechef.com/users/plaksha_cc_23",DE="https://github.com/cherie-dips",Vn=[{id:"london",name:"London",country:"UK",lat:51.5074,lng:-.1278,emoji:"🎡"},{id:"edinburgh",name:"Edinburgh",country:"Scotland",lat:55.9533,lng:-3.1883,emoji:"🏰"},{id:"oxford",name:"Oxford",country:"UK",lat:51.752,lng:-1.2577,emoji:"🎓"},{id:"brighton",name:"Brighton",country:"UK",lat:50.8225,lng:-.1372,emoji:"🎠"},{id:"noida",name:"Noida",country:"India",lat:28.5355,lng:77.391,emoji:"🏙️"},{id:"chandigarh",name:"Chandigarh",country:"India",lat:30.7333,lng:76.7794,emoji:"🌹"},{id:"pune",name:"Pune",country:"India",lat:18.5204,lng:73.8567,emoji:"🏯"},{id:"goa",name:"Goa",country:"India",lat:15.2993,lng:74.124,emoji:"🏖️"},{id:"bangalore",name:"Bangalore",country:"India",lat:12.9716,lng:77.5946,emoji:"🌿"},{id:"dehradun",name:"Dehradun",country:"India",lat:30.3165,lng:78.0322,emoji:"🏔️"},{id:"srikakulam",name:"Srikakulam",country:"India",lat:18.2949,lng:83.8938,emoji:"🌊"},{id:"hyderabad",name:"Hyderabad",country:"India",lat:17.385,lng:78.4867,emoji:"🕌"},{id:"mumbai",name:"Mumbai",country:"India",lat:19.076,lng:72.8777,emoji:"🌆"},{id:"kolkata",name:"Kolkata",country:"India",lat:22.5726,lng:88.3639,emoji:"🌉"}],Ds={email:"diptidhawade2002@gmail.com",links:[{label:"LinkedIn",href:"https://www.linkedin.com/in/dipti-dhawade-927a29214/",icon:"linkedin"},{label:"GitHub",href:"https://github.com/cherie-dips",icon:"github"}]},UE=[{role:"Research Intern",organization:"Indian School of Business (ISB)",duration:"June 2026 – July 2026",description:"Developed a multi-dimensional vulnerability profiling framework for ~7,000 rural blocks across India, integrating 30+ indicators across exposure, sensitivity, and adaptive capacity under Prof. Ashwini Chhatre. Processed block-level datasets from satellite/remote sensing sources (CROPGRIDS, CHIRPS, CHIRTS, SoilGrids) and government surveys to assess climate vulnerability across these units.",tags:["Python","Google Earth Engine","Data Analysis"]},{role:"Intern",organization:"Reimagining Higher Education Foundation, Plaksha University",duration:"Oct 2024 – May 2025",description:"Coordinated high-stake events like Founders' Day and Foundation Day at Plaksha University & conducted campus tours for founders, prospective students, and visitors. Researched and managed prospect donors list to support fundraising.",tags:["Event Management","Fundraising"]},{role:"Intern",organization:"Centre for Thinking, Language and Communication (CTLC), Plaksha University",duration:"Sep 2023 – May 2024",description:"Reviewed and synthesized scholarly literature to support academic research papers.",tags:["Research","Academic Writing"]},{role:"Intern",organization:"Action in Rural Technology and Service (ARTS), Srikakulam, Andhra Pradesh",duration:"June 2023 – July 2023",description:"Researched economic and financial literacy in rural and tribal Savara communities; developed a project enabling small business creation, loan access, and sustainable income generation using local resources.",tags:["Social Impact","Research"]}],LE=["Systems","Full-stack","AI / ML","Robotics"],__=[{title:"NavBot — Chatbot for Any Website",slug:"navbot",categories:["Full-stack","AI / ML"],desc:"An AI chatbot-as-a-service that lets any website owner add a Q&A assistant to their site with a single script tag. NavBot crawls and indexes the site, then answers visitor questions by text or voice using only that site's content, with source links.",subdesc:"An agentic RAG pipeline plans each question with Gemini, runs multi-query search over Pinecone, reranks results with a cross-encoder, and checks the live site when the index falls short. Owners get a dashboard with analytics, editable FAQs, and widget theming.",href:"https://github.com/cherie-dips/NavBot",website:"https://navbot-web.onrender.com/",websiteLabel:"Try it live",spotlight:"https://www.youtube.com/watch?v=dQ3EHuyKFAg",thumbnail:"/assets/projects/navbot.jpg",tags:[{id:1,name:"React",path:"/assets/react.svg"},{id:2,name:"Pinecone",path:"assets/tailwindcss.png"},{id:3,name:"Gemini",path:"/assets/typescript.png"},{id:4,name:"RAG",path:"/assets/framer.png"}]},{title:"ConcurrentFS — Crash-Safe File System in C++",slug:"concurrentfs",categories:["Systems"],desc:"A file system written from scratch in C++17 that lives inside one ordinary file, with its own inodes, free-space bitmaps, directories, block cache and write-ahead log. Many threads can use it at once, and it survives being killed in the middle of a write.",subdesc:"Built stage by stage from OSTEP: per-inode reader/writer locks with hand-over-hand path lookup, a sharded LRU block cache, and redo-only crash recovery with group commit. Killed at 500 points in crash tests with fsck clean every time, and 16 concurrent threads run with zero ThreadSanitizer reports.",href:"https://github.com/cherie-dips/FileSystem",website:"https://cherie-dips.github.io/FileSystem/",websiteLabel:"Docs",spotlight:"/assets/projects/ConcurrentFS.png",thumbnail:"/assets/projects/ConcurrentFS-1600.png",tags:[{id:1,name:"C++17",path:"/assets/react.svg"},{id:2,name:"Concurrency",path:"assets/tailwindcss.png"},{id:3,name:"Write-Ahead Log",path:"/assets/typescript.png"},{id:4,name:"Crash Recovery",path:"/assets/framer.png"}]},{title:"Interview.ai — SDE Prep with an AI Study Assistant",slug:"interview-ai",categories:["Full-stack","AI / ML"],desc:"An interview-prep platform with a 265-topic SDE roadmap (DSA, System Design, OS, CN, DBMS and more) paced into a personal calendar, plus course notes with an Ask AI tutor. Its Study AI tab answers questions from your own uploaded notes, including handwritten photos, citing the exact file and page.",subdesc:"A LlamaIndex RAG pipeline reads notes with Sarvam Vision OCR, runs hybrid keyword and vector search in Neon Postgres (pgvector), reranks with a cross-encoder, and has Gemini write grounded answers in English or 10 Indian languages. It also generates flashcards, quizzes and exam revision plans with spaced repetition.",href:"https://github.com/cherie-dips/Interview.ai",website:"https://cherie-dips.github.io/Interview.ai/",spotlight:"/assets/projects/interview-ai.png",tags:[{id:1,name:"React",path:"/assets/react.svg"},{id:2,name:"FastAPI",path:"assets/tailwindcss.png"},{id:3,name:"LlamaIndex",path:"/assets/typescript.png"},{id:4,name:"pgvector",path:"/assets/framer.png"}]},{title:"Grippers for Underwater Manipulation",slug:"underwater-grippers",categories:["Robotics"],desc:"Designed and prototyped a general-purpose underwater gripper capable of grasping spherical, rigid, delicate, and slippery objects — addressing key challenges like water drag, surface slippage, and buoyancy.",subdesc:"Uses the fin-ray effect (inspired by ray-finned fish bone structure) for passive, load-distributing grasps. Designed and 3D printed in TPU/SLA, exploring worm-follower and rack-and-pinion actuation mechanisms for improved range and precision.",award:"3rd place, SP Dutt Award for Innovation and Impact",href:"https://github.com/cherie-dips/gripping-underwater",spotlight:"https://www.youtube.com/watch?v=HWLXG5a1gso",thumbnail:"https://i.ytimg.com/vi/HWLXG5a1gso/maxresdefault.jpg",website:"https://cherie-dips.github.io/gripping-underwater/",websiteLabel:"Project site",tags:[{id:1,name:"3D Design",path:"/assets/react.svg"},{id:2,name:"Soft Robotics",path:"assets/tailwindcss.png"},{id:3,name:"Electronics",path:"/assets/typescript.png"}]},{title:"Mobile-Hi-SAM — Lightweight Text Segmentation",slug:"mobile-hi-sam",categories:["AI / ML"],desc:"A parameter-efficient hierarchical text segmentation model designed for edge deployment. Integrates MobileSAM's TinyViT encoder and Hi-SAM pipeline with a custom hierarchical decoder for word, line, and paragraph segmentation on the HierText dataset.",subdesc:"Achieved ~62% of Hi-SAM's Panoptic Quality (PQ) using only 12.6M parameters — an ≈98% reduction in model size — making it viable for on-device inference. Built with Python and PyTorch under Prof. Anupam Sobti.",href:"https://github.com/cherie-dips/DL_Project",texture:"/assets/projects/mobile-hi-sam.mp4",thumbnail:"/assets/projects/mobile-hi-sam.png",tags:[{id:1,name:"Python",path:"/assets/react.svg"},{id:2,name:"PyTorch",path:"assets/tailwindcss.png"}]},{title:"Flagzen — 3D Custom Merch Store",slug:"flagzen",categories:["Full-stack"],desc:"A full-stack store for custom-branded merchandise: shoppers rotate products in 3D, design them in a browser studio with logos, text and layers, and see the design projected onto the 3D model before ordering. Sellers upload glTF models, mark print spots, and get print-ready 300 DPI files with every order.",subdesc:"Built with React Three Fiber and Konva on a Node/Express and MongoDB backend, with Razorpay checkout (signature-verified webhooks, automatic refunds), Google sign-in, and optional Claude-powered design ideas. Deployed on Railway behind CI-gated deploys.",href:"https://github.com/cherie-dips/eCommerceSite",website:"https://ecommercesite-production-2842.up.railway.app",spotlight:"/assets/projects/flagzen.png",tags:[{id:1,name:"React",path:"/assets/react.svg"},{id:2,name:"Three.js",path:"assets/tailwindcss.png"},{id:3,name:"Node.js",path:"/assets/typescript.png"},{id:4,name:"MongoDB",path:"/assets/framer.png"}]},{title:"Chronic Wound Status Assessment using AI",slug:"chronic-wound",categories:["AI / ML"],desc:"An AI-based chronic wound monitoring system that uses microscopic images of pH-sensitive hydrogels to enable real-time, non-invasive pH estimation for chronic wound assessment.",subdesc:"Developed under Prof. Siddharth and Prof. Rucha Joshi, the pipeline implements ResNet-18 feature extraction combined with Random Forest classification to ensure robustness against imaging variability — enabling accessible, label-free wound diagnostics.",href:"https://github.com/cherie-dips/MLPR_Project",spotlight:"/assets/projects/chronic-wound.png",tags:[{id:1,name:"Python",path:"/assets/react.svg"},{id:2,name:"OpenCV",path:"assets/tailwindcss.png"},{id:3,name:"PyTorch",path:"/assets/typescript.png"}]}],NE="/diptidhawade/",fa=r=>r?/^https?:\/\//i.test(r)?r:NE+r.replace(/^\//,""):"",OE="dd-theme",au="/diptidhawade/",PE=()=>{const r=au.replace(/\/$/,"");return window.location.pathname===r||window.location.pathname===r+"/"},zE=()=>document.getElementById("hero")?.scrollIntoView({behavior:"smooth",block:"start"});function x_({onNavigate:r}){const[e,i,...s]=TE,l=({id:c,hash:f,name:d})=>ae.jsx("a",{href:`${au}#${f}`,onClick:r,children:d},c);return ae.jsxs(ae.Fragment,{children:[[e,i].filter(Boolean).map(l),ae.jsxs("a",{href:j0,target:"_blank",rel:"noopener noreferrer",onClick:r,children:["Notes ",ae.jsx("span",{"aria-hidden":"true",children:"↗"})]}),s.map(l)]})}function IE(){const[r,e]=ue.useState(!1),[i,s]=ue.useState(()=>document.documentElement.dataset.theme==="dark"),l=()=>e(!1),c=()=>{const f=!i;s(f),f?document.documentElement.dataset.theme="dark":delete document.documentElement.dataset.theme;try{localStorage.setItem(OE,f?"dark":"light")}catch{}};return ue.useEffect(()=>{if(!r)return;const f=p=>p.key==="Escape"&&e(!1),d=window.matchMedia("(min-width: 721px)"),m=()=>d.matches&&e(!1);return document.addEventListener("keydown",f),d.addEventListener("change",m),()=>{document.removeEventListener("keydown",f),d.removeEventListener("change",m)}},[r]),ae.jsxs("header",{className:"nav",children:[ae.jsxs("div",{className:"wrap nav-inner",children:[ae.jsx("a",{href:au,className:"nav-brand",onClick:f=>{PE()&&(f.preventDefault(),window.history.replaceState(null,"",au),zE()),l()},children:"Dipti Dhawade"}),ae.jsx("nav",{className:"nav-links","aria-label":"Sections",children:ae.jsx(x_,{})}),ae.jsxs("div",{className:"nav-end",children:[ae.jsx("a",{className:"pill pill-sm",href:fa(op),target:"_blank",rel:"noopener noreferrer",children:"Résumé"}),ae.jsx("button",{type:"button",className:"nav-icon",onClick:c,"aria-label":i?"Switch to light theme":"Switch to dark theme",title:i?"Light theme":"Dark theme",children:i?ae.jsx(EE,{"aria-hidden":!0}):ae.jsx(yE,{"aria-hidden":!0})}),ae.jsx("button",{type:"button",className:"nav-icon nav-menu-btn",onClick:()=>e(f=>!f),"aria-label":r?"Close menu":"Open menu","aria-expanded":r,"aria-controls":"nav-sheet",children:r?ae.jsx(bE,{"aria-hidden":!0}):ae.jsx(_E,{"aria-hidden":!0})})]})]}),ae.jsx("nav",{id:"nav-sheet",className:"nav-sheet","aria-label":"Menu",hidden:!r,children:ae.jsx("div",{className:"wrap nav-sheet-links",children:ae.jsx(x_,{onNavigate:l})})})]})}const BE="https://github.com/cherie-dips/FileSystem",y_=Ds.links.find(r=>r.icon==="linkedin")?.href,Uh=({href:r,children:e})=>ae.jsx("a",{className:"mark",href:r,target:"_blank",rel:"noopener noreferrer",children:e});function FE(){return ae.jsx("section",{className:"hero","aria-label":"Intro",children:ae.jsxs("div",{className:"wrap grid12",children:[ae.jsxs("p",{className:"hero-status",children:[ae.jsx("span",{className:"hero-dot","aria-hidden":"true"}),AE]}),ae.jsxs("h1",{className:"hero-name",children:[ae.jsx("span",{children:"Dipti"})," ",ae.jsx("span",{className:"hero-name-2",children:"Dhawade"})]}),ae.jsxs("p",{className:"hero-statement",children:[ae.jsx("span",{className:"hero-long",children:"Computer Science"}),ae.jsx("span",{className:"hero-short",children:"CS"})," & AI student at Plaksha University."]}),ae.jsx("div",{className:"hero-photo-wrap",children:ae.jsx("img",{className:"hero-photo",src:fa("/assets/Photo.jpeg"),alt:"Dipti Dhawade",width:"381",height:"405"})}),ae.jsxs("div",{className:"hero-intro-col",children:[ae.jsxs("p",{className:"hero-intro",children:["I like problems at the intersection of theory and product. Lately that means"," ",ae.jsx(Uh,{href:RE,children:"NavBot"}),", an AI chatbot any website can add with one script tag, and ",ae.jsx(Uh,{href:BE,children:"ConcurrentFS"}),", a crash-safe file system in C++. I share what I learn in my ",ae.jsx(Uh,{href:j0,children:"notes"}),"."]}),ae.jsxs("div",{className:"actions hero-actions",children:[ae.jsxs("a",{className:"pill",href:fa(op),target:"_blank",rel:"noopener noreferrer",children:[ae.jsx(vE,{"aria-hidden":!0}),"Résumé ",ae.jsx("small",{children:"PDF"})]}),ae.jsx("a",{className:"tlink",href:DE,target:"_blank",rel:"noopener noreferrer",children:"GitHub ↗"}),y_&&ae.jsx("a",{className:"tlink",href:y_,target:"_blank",rel:"noopener noreferrer",children:"LinkedIn ↗"}),ae.jsx("a",{className:"tlink",href:`mailto:${Ds.email}`,children:"Email ↗"})]})]}),ae.jsxs("dl",{className:"hero-facts",children:[ae.jsxs("div",{children:[ae.jsx("dt",{className:"label",children:"Now"}),ae.jsx("dd",{className:"hero-fact-nowrap",children:"Building Mini-Borg in C++"})]}),ae.jsxs("div",{children:[ae.jsx("dt",{className:"label",children:"Focus"}),ae.jsxs("dd",{children:[ae.jsx("span",{className:"hero-focus-line",children:"OS, Networks, DSA"})," ",ae.jsx("span",{className:"hero-focus-line",children:"ML & AI, Backend"})]})]}),ae.jsxs("div",{children:[ae.jsx("dt",{className:"label",children:"Also on"}),ae.jsxs("dd",{children:[ae.jsx("a",{href:CE,target:"_blank",rel:"noopener noreferrer",children:"LeetCode"}),","," ",ae.jsx("a",{href:wE,target:"_blank",rel:"noopener noreferrer",children:"CodeChef"})]})]})]})]})})}function HE(r){return va({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"},child:[]}]})(r)}function hu(r){if(!r||typeof r!="string")return null;try{const e=new URL(r.trim()),i=e.hostname.replace(/^www\./,"");if(i==="youtu.be"){const s=e.pathname.split("/").filter(Boolean)[0];return s?`https://www.youtube.com/embed/${s}`:null}if(i==="youtube.com"||i==="m.youtube.com"){if(e.pathname.startsWith("/watch")){const s=e.searchParams.get("v");return s?`https://www.youtube.com/embed/${s}`:null}if(e.pathname.startsWith("/embed/"))return r.trim();if(e.pathname.startsWith("/shorts/")){const s=e.pathname.split("/").filter(Boolean)[1];return s?`https://www.youtube.com/embed/${s}`:null}}}catch{return null}return null}function GE(r){const e=hu(r);if(!e)return null;const i=new URL(e).pathname.split("/").filter(Boolean).pop();return i?`https://i.ytimg.com/vi/${i}/hqdefault.jpg`:null}const VE=r=>!!(r.texture||hu(r.spotlight));function kE(r){return r.thumbnail?r.thumbnail:r.spotlight&&!hu(r.spotlight)?r.spotlight:GE(r.spotlight)}const XE="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";function WE({project:r,name:e,onExpandImage:i}){const[s,l]=ue.useState(!1),[c,f]=ue.useState(null),d=kE(r),m=VE(r),p={aspectRatio:c??(m?16/9:16/10)};if(m&&(s||!d)){const v=hu(r.spotlight);return ae.jsx("div",{className:"project-media project-media--playing",style:p,children:r.texture?ae.jsx("video",{src:fa(r.texture),poster:d?fa(d):void 0,controls:!0,autoPlay:s,muted:!0,loop:!0,playsInline:!0,preload:"metadata"}):ae.jsx("iframe",{src:`${v}?autoplay=1&rel=0`,title:`${e} — project video`,allow:XE,allowFullScreen:!0})})}return d?ae.jsxs("button",{type:"button",className:"project-media",style:p,onClick:()=>m?l(!0):i(r.spotlight||d),"aria-label":m?`Play the ${e} video`:`Enlarge the ${e} image`,children:[ae.jsx("img",{src:fa(d),alt:"",loading:"lazy",onLoad:v=>f(v.currentTarget.naturalWidth/v.currentTarget.naturalHeight)}),m&&ae.jsx("span",{className:"project-play","aria-hidden":!0,children:ae.jsx(HE,{})})]}):null}function qE({project:r,slot:e,onExpandImage:i}){const[s,l]=r.title.split(" — "),c=[...r.categories??[],r.award].filter(Boolean).join(" · ");return ae.jsxs("article",{className:`project project--${e}`,children:[ae.jsx(WE,{project:r,name:s,onExpandImage:i}),c&&ae.jsx("p",{className:"project-kicker",children:c}),ae.jsx("h3",{className:"project-title",children:s}),l&&ae.jsx("p",{className:"project-sub",children:l}),ae.jsx("p",{className:"project-desc",children:r.desc}),r.subdesc&&ae.jsx("p",{className:"project-desc",children:r.subdesc}),ae.jsxs("div",{className:"actions project-actions",children:[r.website&&ae.jsxs("a",{className:"tlink",href:r.website,target:"_blank",rel:"noopener noreferrer",children:[r.websiteLabel??"Live"," ↗",ae.jsxs("span",{className:"sr-only",children:[" (",s,")"]})]}),r.href&&ae.jsxs("a",{className:"tlink",href:r.href,target:"_blank",rel:"noopener noreferrer",children:["Code ↗",ae.jsxs("span",{className:"sr-only",children:[" for ",s]})]})]}),r.tags?.length>0&&ae.jsx("p",{className:"stack project-stack",children:r.tags.map(f=>f.name).join(" · ")})]})}const Lh="All";function jE(r,e){if(r===0)return"big";if(r===1)return"side";const i=r-2;return i%2===0&&r===e-1?"solo":`${Math.floor(i/2)%2===0?"a":"b"}${i%2+1}`}function YE(){const[r,e]=ue.useState(Lh),[i,s]=ue.useState(null);ue.useEffect(()=>{if(!i)return;const c=f=>f.key==="Escape"&&s(null);return document.addEventListener("keydown",c),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",c),document.body.style.overflow=""}},[i]);const l=r===Lh?__:__.filter(c=>c.categories?.includes(r));return ae.jsxs("section",{className:"projects","aria-labelledby":"projects-title",children:[ae.jsxs("div",{className:"wrap grid12 projects-head",children:[ae.jsx("h2",{className:"h-section projects-title",id:"projects-title",children:"Projects"}),ae.jsx("div",{className:"projects-side",children:ae.jsx("div",{className:"projects-tabs",role:"group","aria-label":"Filter projects",children:[Lh,...LE].map(c=>ae.jsx("button",{type:"button",className:"projects-tab","aria-pressed":r===c,onClick:()=>e(c),children:c},c))})})]}),ae.jsx("div",{className:"wrap grid12 projects-list",children:l.map((c,f)=>ae.jsx(qE,{project:c,slot:jE(f,l.length),onExpandImage:s},c.slug))}),i&&ae.jsxs("div",{className:"lightbox",onClick:()=>s(null),role:"dialog","aria-modal":"true","aria-label":"Expanded image",children:[ae.jsx("button",{type:"button",className:"lightbox-close",onClick:()=>s(null),"aria-label":"Close",children:"×"}),ae.jsx("img",{src:fa(i),alt:"",className:"lightbox-img",onClick:c=>c.stopPropagation()})]})]})}function ZE(r){const e=r.match(/^(\w+)\s+(\d{4})\s*[–-]\s*(\w+)\s+(\d{4})$/);if(!e)return r;const[,i,s,l,c]=e,f=d=>d.slice(0,3);return s===c?`${f(i)} – ${f(l)} ${c}`:`${f(i)} ${s} – ${f(l)} ${c}`}function KE(){return ae.jsx("section",{className:"experience","aria-labelledby":"experience-title",children:ae.jsxs("div",{className:"wrap grid12",children:[ae.jsx("h2",{className:"h-section experience-title",id:"experience-title",children:"Experience"}),ae.jsx("ol",{className:"experience-list",children:UE.map(r=>ae.jsxs("li",{children:[ae.jsx("p",{className:"experience-when",children:ZE(r.duration)}),ae.jsxs("div",{children:[ae.jsx("h3",{className:"experience-role",children:r.role}),ae.jsx("p",{className:"experience-org",children:r.organization}),ae.jsx("p",{className:"experience-desc",children:r.description}),r.tags?.length>0&&ae.jsx("p",{className:"stack experience-stack",children:r.tags.join(" · ")})]})]},`${r.organization}-${r.duration}`))})]})})}const lp="180",QE=0,S_=1,JE=2,Y0=1,$E=2,sa=3,Qa=0,kn=1,oa=2,Za=0,Ns=1,M_=2,E_=3,b_=4,eb=5,Ar=100,tb=101,nb=102,ib=103,ab=104,rb=200,sb=201,ob=202,lb=203,hd=204,dd=205,cb=206,ub=207,fb=208,hb=209,db=210,pb=211,mb=212,gb=213,vb=214,pd=0,md=1,gd=2,Ps=3,vd=4,_d=5,xd=6,yd=7,Z0=0,_b=1,xb=2,Ka=0,yb=1,Sb=2,Mb=3,Eb=4,bb=5,Tb=6,Ab=7,K0=300,zs=301,Is=302,Sd=303,Md=304,du=306,Ed=1e3,Cr=1001,bd=1002,Ei=1003,Rb=1004,Ec=1005,Ni=1006,Nh=1007,wr=1008,pa=1009,Q0=1010,J0=1011,Jo=1012,cp=1013,Ur=1014,la=1015,ol=1016,up=1017,fp=1018,$o=1020,$0=35902,ex=35899,tx=1021,nx=1022,Mi=1023,el=1026,tl=1027,ix=1028,hp=1029,ax=1030,dp=1031,pp=1033,Kc=33776,Qc=33777,Jc=33778,$c=33779,Td=35840,Ad=35841,Rd=35842,Cd=35843,wd=36196,Dd=37492,Ud=37496,Ld=37808,Nd=37809,Od=37810,Pd=37811,zd=37812,Id=37813,Bd=37814,Fd=37815,Hd=37816,Gd=37817,Vd=37818,kd=37819,Xd=37820,Wd=37821,qd=36492,jd=36494,Yd=36495,Zd=36283,Kd=36284,Qd=36285,Jd=36286,Cb=3200,wb=3201,Db=0,Ub=1,Ya="",hi="srgb",Bs="srgb-linear",ru="linear",Ht="srgb",ms=7680,T_=519,Lb=512,Nb=513,Ob=514,rx=515,Pb=516,zb=517,Ib=518,Bb=519,A_=35044,R_="300 es",Oi=2e3,su=2001;class Vs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let C_=1234567;const Yo=Math.PI/180,nl=180/Math.PI;function ks(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[i&63|128]+Rn[i>>8&255]+"-"+Rn[i>>16&255]+Rn[i>>24&255]+Rn[s&255]+Rn[s>>8&255]+Rn[s>>16&255]+Rn[s>>24&255]).toLowerCase()}function St(r,e,i){return Math.max(e,Math.min(i,r))}function mp(r,e){return(r%e+e)%e}function Fb(r,e,i,s,l){return s+(r-e)*(l-s)/(i-e)}function Hb(r,e,i){return r!==e?(i-r)/(e-r):0}function Zo(r,e,i){return(1-i)*r+i*e}function Gb(r,e,i,s){return Zo(r,e,1-Math.exp(-i*s))}function Vb(r,e=1){return e-Math.abs(mp(r,e*2)-e)}function kb(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*(3-2*r))}function Xb(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*r*(r*(r*6-15)+10))}function Wb(r,e){return r+Math.floor(Math.random()*(e-r+1))}function qb(r,e){return r+Math.random()*(e-r)}function jb(r){return r*(.5-Math.random())}function Yb(r){r!==void 0&&(C_=r);let e=C_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Zb(r){return r*Yo}function Kb(r){return r*nl}function Qb(r){return(r&r-1)===0&&r!==0}function Jb(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function $b(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function eT(r,e,i,s,l){const c=Math.cos,f=Math.sin,d=c(i/2),m=f(i/2),p=c((e+s)/2),v=f((e+s)/2),g=c((e-s)/2),x=f((e-s)/2),M=c((s-e)/2),E=f((s-e)/2);switch(l){case"XYX":r.set(d*v,m*g,m*x,d*p);break;case"YZY":r.set(m*x,d*v,m*g,d*p);break;case"ZXZ":r.set(m*g,m*x,d*v,d*p);break;case"XZX":r.set(d*v,m*E,m*M,d*p);break;case"YXY":r.set(m*M,d*v,m*E,d*p);break;case"ZYZ":r.set(m*E,m*M,d*v,d*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function ws(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ln(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Us={DEG2RAD:Yo,RAD2DEG:nl,generateUUID:ks,clamp:St,euclideanModulo:mp,mapLinear:Fb,inverseLerp:Hb,lerp:Zo,damp:Gb,pingpong:Vb,smoothstep:kb,smootherstep:Xb,randInt:Wb,randFloat:qb,randFloatSpread:jb,seededRandom:Yb,degToRad:Zb,radToDeg:Kb,isPowerOfTwo:Qb,ceilPowerOfTwo:Jb,floorPowerOfTwo:$b,setQuaternionFromProperEuler:eT,normalize:Ln,denormalize:ws};class Gt{constructor(e=0,i=0){Gt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(St(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*s-f*l+e.x,this.y=c*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ll{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,f,d){let m=s[l+0],p=s[l+1],v=s[l+2],g=s[l+3];const x=c[f+0],M=c[f+1],E=c[f+2],T=c[f+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=v,e[i+3]=g;return}if(d===1){e[i+0]=x,e[i+1]=M,e[i+2]=E,e[i+3]=T;return}if(g!==T||m!==x||p!==M||v!==E){let S=1-d;const _=m*x+p*M+v*E+g*T,U=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const H=Math.sqrt(L),F=Math.atan2(H,_*U);S=Math.sin(S*F)/H,d=Math.sin(d*F)/H}const D=d*U;if(m=m*S+x*D,p=p*S+M*D,v=v*S+E*D,g=g*S+T*D,S===1-d){const H=1/Math.sqrt(m*m+p*p+v*v+g*g);m*=H,p*=H,v*=H,g*=H}}e[i]=m,e[i+1]=p,e[i+2]=v,e[i+3]=g}static multiplyQuaternionsFlat(e,i,s,l,c,f){const d=s[l],m=s[l+1],p=s[l+2],v=s[l+3],g=c[f],x=c[f+1],M=c[f+2],E=c[f+3];return e[i]=d*E+v*g+m*M-p*x,e[i+1]=m*E+v*x+p*g-d*M,e[i+2]=p*E+v*M+d*x-m*g,e[i+3]=v*E-d*g-m*x-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,f=e._order,d=Math.cos,m=Math.sin,p=d(s/2),v=d(l/2),g=d(c/2),x=m(s/2),M=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=x*v*g+p*M*E,this._y=p*M*g-x*v*E,this._z=p*v*E+x*M*g,this._w=p*v*g-x*M*E;break;case"YXZ":this._x=x*v*g+p*M*E,this._y=p*M*g-x*v*E,this._z=p*v*E-x*M*g,this._w=p*v*g+x*M*E;break;case"ZXY":this._x=x*v*g-p*M*E,this._y=p*M*g+x*v*E,this._z=p*v*E+x*M*g,this._w=p*v*g-x*M*E;break;case"ZYX":this._x=x*v*g-p*M*E,this._y=p*M*g+x*v*E,this._z=p*v*E-x*M*g,this._w=p*v*g+x*M*E;break;case"YZX":this._x=x*v*g+p*M*E,this._y=p*M*g+x*v*E,this._z=p*v*E-x*M*g,this._w=p*v*g-x*M*E;break;case"XZY":this._x=x*v*g-p*M*E,this._y=p*M*g-x*v*E,this._z=p*v*E+x*M*g,this._w=p*v*g+x*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],f=i[1],d=i[5],m=i[9],p=i[2],v=i[6],g=i[10],x=s+d+g;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(v-m)*M,this._y=(c-p)*M,this._z=(f-l)*M}else if(s>d&&s>g){const M=2*Math.sqrt(1+s-d-g);this._w=(v-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+p)/M}else if(d>g){const M=2*Math.sqrt(1+d-s-g);this._w=(c-p)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+g-s-d);this._w=(f-l)/M,this._x=(c+p)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,f=e._w,d=i._x,m=i._y,p=i._z,v=i._w;return this._x=s*v+f*d+l*p-c*m,this._y=l*v+f*m+c*d-s*p,this._z=c*v+f*p+s*m-l*d,this._w=f*v-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,c=this._z,f=this._w;let d=f*e._w+s*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=s,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*f+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),v=Math.atan2(p,d),g=Math.sin((1-i)*v)/p,x=Math.sin(i*v)/p;return this._w=f*g+this._w*x,this._x=s*g+this._x*x,this._y=l*g+this._y*x,this._z=c*g+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class se{constructor(e=0,i=0,s=0){se.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(w_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(w_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,f=e.y,d=e.z,m=e.w,p=2*(f*l-d*s),v=2*(d*i-c*l),g=2*(c*s-f*i);return this.x=i+m*p+f*g-d*v,this.y=s+m*v+d*p-c*g,this.z=l+m*g+c*v-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this.z=St(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this.z=St(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*f-s*m,this.z=s*d-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Oh.copy(this).projectOnVector(e),this.sub(Oh)}reflect(e){return this.sub(Oh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(St(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Oh=new se,w_=new ll;class ht{constructor(e,i,s,l,c,f,d,m,p){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,d,m,p)}set(e,i,s,l,c,f,d,m,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=d,v[3]=i,v[4]=c,v[5]=m,v[6]=s,v[7]=f,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],d=s[3],m=s[6],p=s[1],v=s[4],g=s[7],x=s[2],M=s[5],E=s[8],T=l[0],S=l[3],_=l[6],U=l[1],L=l[4],D=l[7],H=l[2],F=l[5],z=l[8];return c[0]=f*T+d*U+m*H,c[3]=f*S+d*L+m*F,c[6]=f*_+d*D+m*z,c[1]=p*T+v*U+g*H,c[4]=p*S+v*L+g*F,c[7]=p*_+v*D+g*z,c[2]=x*T+M*U+E*H,c[5]=x*S+M*L+E*F,c[8]=x*_+M*D+E*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],d=e[5],m=e[6],p=e[7],v=e[8];return i*f*v-i*d*p-s*c*v+s*d*m+l*c*p-l*f*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],d=e[5],m=e[6],p=e[7],v=e[8],g=v*f-d*p,x=d*m-v*c,M=p*c-f*m,E=i*g+s*x+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=g*T,e[1]=(l*p-v*s)*T,e[2]=(d*s-l*f)*T,e[3]=x*T,e[4]=(v*i-l*m)*T,e[5]=(l*c-d*i)*T,e[6]=M*T,e[7]=(s*m-p*i)*T,e[8]=(f*i-s*c)*T,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,f,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*d)+f+e,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Ph.makeScale(e,i)),this}rotate(e){return this.premultiply(Ph.makeRotation(-e)),this}translate(e,i){return this.premultiply(Ph.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ph=new ht;function sx(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ou(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function tT(){const r=ou("canvas");return r.style.display="block",r}const D_={};function il(r){r in D_||(D_[r]=!0,console.warn(r))}function nT(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const U_=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),L_=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function iT(){const r={enabled:!0,workingColorSpace:Bs,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ht&&(l.r=ha(l.r),l.g=ha(l.g),l.b=ha(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ht&&(l.r=Os(l.r),l.g=Os(l.g),l.b=Os(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ya?ru:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return il("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return il("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Bs]:{primaries:e,whitePoint:s,transfer:ru,toXYZ:U_,fromXYZ:L_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:e,whitePoint:s,transfer:Ht,toXYZ:U_,fromXYZ:L_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),r}const wt=iT();function ha(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Os(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let gs;class aT{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{gs===void 0&&(gs=ou("canvas")),gs.width=e.width,gs.height=e.height;const l=gs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=gs}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=ou("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ha(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ha(i[s]/255)*255):i[s]=ha(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rT=0;class gp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rT++}),this.uuid=ks(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(zh(l[f].image)):c.push(zh(l[f]))}else c=zh(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function zh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?aT.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sT=0;const Ih=new se;class Xn extends Vs{constructor(e=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,s=Cr,l=Cr,c=Ni,f=wr,d=Mi,m=pa,p=Xn.DEFAULT_ANISOTROPY,v=Ya){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sT++}),this.uuid=ks(),this.name="",this.source=new gp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ih).x}get height(){return this.source.getSize(Ih).y}get depth(){return this.source.getSize(Ih).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==K0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ed:e.x=e.x-Math.floor(e.x);break;case Cr:e.x=e.x<0?0:1;break;case bd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ed:e.y=e.y-Math.floor(e.y);break;case Cr:e.y=e.y<0?0:1;break;case bd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=K0;Xn.DEFAULT_ANISOTROPY=1;class an{constructor(e=0,i=0,s=0,l=1){an.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,p=m[0],v=m[4],g=m[8],x=m[1],M=m[5],E=m[9],T=m[2],S=m[6],_=m[10];if(Math.abs(v-x)<.01&&Math.abs(g-T)<.01&&Math.abs(E-S)<.01){if(Math.abs(v+x)<.1&&Math.abs(g+T)<.1&&Math.abs(E+S)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,D=(M+1)/2,H=(_+1)/2,F=(v+x)/4,z=(g+T)/4,Q=(E+S)/4;return L>D&&L>H?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=F/s,c=z/s):D>H?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=F/l,c=Q/l):H<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),s=z/c,l=Q/c),this.set(s,l,c,i),this}let U=Math.sqrt((S-E)*(S-E)+(g-T)*(g-T)+(x-v)*(x-v));return Math.abs(U)<.001&&(U=1),this.x=(S-E)/U,this.y=(g-T)/U,this.z=(x-v)/U,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this.z=St(this.z,e.z,i.z),this.w=St(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this.z=St(this.z,e,i),this.w=St(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class oT extends Vs{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new an(0,0,e,i),this.scissorTest=!1,this.viewport=new an(0,0,e,i);const l={width:e,height:i,depth:s.depth},c=new Xn(l);this.textures=[];const f=s.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Ni,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new gp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lr extends oT{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class ox extends Xn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lT extends Xn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cl{constructor(e=new se(1/0,1/0,1/0),i=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(_i.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(_i.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=_i.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,_i):_i.fromBufferAttribute(c,f),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),bc.copy(s.boundingBox)),bc.applyMatrix4(e.matrixWorld),this.union(bc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ho),Tc.subVectors(this.max,Ho),vs.subVectors(e.a,Ho),_s.subVectors(e.b,Ho),xs.subVectors(e.c,Ho),Va.subVectors(_s,vs),ka.subVectors(xs,_s),_r.subVectors(vs,xs);let i=[0,-Va.z,Va.y,0,-ka.z,ka.y,0,-_r.z,_r.y,Va.z,0,-Va.x,ka.z,0,-ka.x,_r.z,0,-_r.x,-Va.y,Va.x,0,-ka.y,ka.x,0,-_r.y,_r.x,0];return!Bh(i,vs,_s,xs,Tc)||(i=[1,0,0,0,1,0,0,0,1],!Bh(i,vs,_s,xs,Tc))?!1:(Ac.crossVectors(Va,ka),i=[Ac.x,Ac.y,Ac.z],Bh(i,vs,_s,xs,Tc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ta[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ta[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ta[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ta[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ta[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ta[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ta[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ta[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ta),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ta=[new se,new se,new se,new se,new se,new se,new se,new se],_i=new se,bc=new cl,vs=new se,_s=new se,xs=new se,Va=new se,ka=new se,_r=new se,Ho=new se,Tc=new se,Ac=new se,xr=new se;function Bh(r,e,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){xr.fromArray(r,c);const d=l.x*Math.abs(xr.x)+l.y*Math.abs(xr.y)+l.z*Math.abs(xr.z),m=e.dot(xr),p=i.dot(xr),v=s.dot(xr);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const cT=new cl,Go=new se,Fh=new se;class ul{constructor(e=new se,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):cT.setFromPoints(e).getCenter(s);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Go.subVectors(e,this.center);const i=Go.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Go,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Go.copy(e.center).add(Fh)),this.expandByPoint(Go.copy(e.center).sub(Fh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const na=new se,Hh=new se,Rc=new se,Xa=new se,Gh=new se,Cc=new se,Vh=new se;class vp{constructor(e=new se,i=new se(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,na)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=na.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(na.copy(this.origin).addScaledVector(this.direction,i),na.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Hh.copy(e).add(i).multiplyScalar(.5),Rc.copy(i).sub(e).normalize(),Xa.copy(this.origin).sub(Hh);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Rc),d=Xa.dot(this.direction),m=-Xa.dot(Rc),p=Xa.lengthSq(),v=Math.abs(1-f*f);let g,x,M,E;if(v>0)if(g=f*m-d,x=f*d-m,E=c*v,g>=0)if(x>=-E)if(x<=E){const T=1/v;g*=T,x*=T,M=g*(g+f*x+2*d)+x*(f*g+x+2*m)+p}else x=c,g=Math.max(0,-(f*x+d)),M=-g*g+x*(x+2*m)+p;else x=-c,g=Math.max(0,-(f*x+d)),M=-g*g+x*(x+2*m)+p;else x<=-E?(g=Math.max(0,-(-f*c+d)),x=g>0?-c:Math.min(Math.max(-c,-m),c),M=-g*g+x*(x+2*m)+p):x<=E?(g=0,x=Math.min(Math.max(-c,-m),c),M=x*(x+2*m)+p):(g=Math.max(0,-(f*c+d)),x=g>0?c:Math.min(Math.max(-c,-m),c),M=-g*g+x*(x+2*m)+p);else x=f>0?-c:c,g=Math.max(0,-(f*x+d)),M=-g*g+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Hh).addScaledVector(Rc,x),M}intersectSphere(e,i){na.subVectors(e.center,this.origin);const s=na.dot(this.direction),l=na.dot(na)-s*s,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=s-f,m=s+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,f,d,m;const p=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(s=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(s=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),v>=0?(c=(e.min.y-x.y)*v,f=(e.max.y-x.y)*v):(c=(e.max.y-x.y)*v,f=(e.min.y-x.y)*v),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),g>=0?(d=(e.min.z-x.z)*g,m=(e.max.z-x.z)*g):(d=(e.max.z-x.z)*g,m=(e.min.z-x.z)*g),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,na)!==null}intersectTriangle(e,i,s,l,c){Gh.subVectors(i,e),Cc.subVectors(s,e),Vh.crossVectors(Gh,Cc);let f=this.direction.dot(Vh),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;Xa.subVectors(this.origin,e);const m=d*this.direction.dot(Cc.crossVectors(Xa,Cc));if(m<0)return null;const p=d*this.direction.dot(Gh.cross(Xa));if(p<0||m+p>f)return null;const v=-d*Xa.dot(Vh);return v<0?null:this.at(v/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rn{constructor(e,i,s,l,c,f,d,m,p,v,g,x,M,E,T,S){rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,d,m,p,v,g,x,M,E,T,S)}set(e,i,s,l,c,f,d,m,p,v,g,x,M,E,T,S){const _=this.elements;return _[0]=e,_[4]=i,_[8]=s,_[12]=l,_[1]=c,_[5]=f,_[9]=d,_[13]=m,_[2]=p,_[6]=v,_[10]=g,_[14]=x,_[3]=M,_[7]=E,_[11]=T,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/ys.setFromMatrixColumn(e,0).length(),c=1/ys.setFromMatrixColumn(e,1).length(),f=1/ys.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,f=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const x=f*v,M=f*g,E=d*v,T=d*g;i[0]=m*v,i[4]=-m*g,i[8]=p,i[1]=M+E*p,i[5]=x-T*p,i[9]=-d*m,i[2]=T-x*p,i[6]=E+M*p,i[10]=f*m}else if(e.order==="YXZ"){const x=m*v,M=m*g,E=p*v,T=p*g;i[0]=x+T*d,i[4]=E*d-M,i[8]=f*p,i[1]=f*g,i[5]=f*v,i[9]=-d,i[2]=M*d-E,i[6]=T+x*d,i[10]=f*m}else if(e.order==="ZXY"){const x=m*v,M=m*g,E=p*v,T=p*g;i[0]=x-T*d,i[4]=-f*g,i[8]=E+M*d,i[1]=M+E*d,i[5]=f*v,i[9]=T-x*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(e.order==="ZYX"){const x=f*v,M=f*g,E=d*v,T=d*g;i[0]=m*v,i[4]=E*p-M,i[8]=x*p+T,i[1]=m*g,i[5]=T*p+x,i[9]=M*p-E,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(e.order==="YZX"){const x=f*m,M=f*p,E=d*m,T=d*p;i[0]=m*v,i[4]=T-x*g,i[8]=E*g+M,i[1]=g,i[5]=f*v,i[9]=-d*v,i[2]=-p*v,i[6]=M*g+E,i[10]=x-T*g}else if(e.order==="XZY"){const x=f*m,M=f*p,E=d*m,T=d*p;i[0]=m*v,i[4]=-g,i[8]=p*v,i[1]=x*g+T,i[5]=f*v,i[9]=M*g-E,i[2]=E*g-M,i[6]=d*v,i[10]=T*g+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uT,e,fT)}lookAt(e,i,s){const l=this.elements;return $n.subVectors(e,i),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Wa.crossVectors(s,$n),Wa.lengthSq()===0&&(Math.abs(s.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Wa.crossVectors(s,$n)),Wa.normalize(),wc.crossVectors($n,Wa),l[0]=Wa.x,l[4]=wc.x,l[8]=$n.x,l[1]=Wa.y,l[5]=wc.y,l[9]=$n.y,l[2]=Wa.z,l[6]=wc.z,l[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],d=s[4],m=s[8],p=s[12],v=s[1],g=s[5],x=s[9],M=s[13],E=s[2],T=s[6],S=s[10],_=s[14],U=s[3],L=s[7],D=s[11],H=s[15],F=l[0],z=l[4],Q=l[8],w=l[12],C=l[1],G=l[5],ne=l[9],he=l[13],_e=l[2],pe=l[6],P=l[10],K=l[14],q=l[3],Ee=l[7],X=l[11],O=l[15];return c[0]=f*F+d*C+m*_e+p*q,c[4]=f*z+d*G+m*pe+p*Ee,c[8]=f*Q+d*ne+m*P+p*X,c[12]=f*w+d*he+m*K+p*O,c[1]=v*F+g*C+x*_e+M*q,c[5]=v*z+g*G+x*pe+M*Ee,c[9]=v*Q+g*ne+x*P+M*X,c[13]=v*w+g*he+x*K+M*O,c[2]=E*F+T*C+S*_e+_*q,c[6]=E*z+T*G+S*pe+_*Ee,c[10]=E*Q+T*ne+S*P+_*X,c[14]=E*w+T*he+S*K+_*O,c[3]=U*F+L*C+D*_e+H*q,c[7]=U*z+L*G+D*pe+H*Ee,c[11]=U*Q+L*ne+D*P+H*X,c[15]=U*w+L*he+D*K+H*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],f=e[1],d=e[5],m=e[9],p=e[13],v=e[2],g=e[6],x=e[10],M=e[14],E=e[3],T=e[7],S=e[11],_=e[15];return E*(+c*m*g-l*p*g-c*d*x+s*p*x+l*d*M-s*m*M)+T*(+i*m*M-i*p*x+c*f*x-l*f*M+l*p*v-c*m*v)+S*(+i*p*g-i*d*M-c*f*g+s*f*M+c*d*v-s*p*v)+_*(-l*d*v-i*m*g+i*d*x+l*f*g-s*f*x+s*m*v)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],d=e[5],m=e[6],p=e[7],v=e[8],g=e[9],x=e[10],M=e[11],E=e[12],T=e[13],S=e[14],_=e[15],U=g*S*p-T*x*p+T*m*M-d*S*M-g*m*_+d*x*_,L=E*x*p-v*S*p-E*m*M+f*S*M+v*m*_-f*x*_,D=v*T*p-E*g*p+E*d*M-f*T*M-v*d*_+f*g*_,H=E*g*m-v*T*m-E*d*x+f*T*x+v*d*S-f*g*S,F=i*U+s*L+l*D+c*H;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/F;return e[0]=U*z,e[1]=(T*x*c-g*S*c-T*l*M+s*S*M+g*l*_-s*x*_)*z,e[2]=(d*S*c-T*m*c+T*l*p-s*S*p-d*l*_+s*m*_)*z,e[3]=(g*m*c-d*x*c-g*l*p+s*x*p+d*l*M-s*m*M)*z,e[4]=L*z,e[5]=(v*S*c-E*x*c+E*l*M-i*S*M-v*l*_+i*x*_)*z,e[6]=(E*m*c-f*S*c-E*l*p+i*S*p+f*l*_-i*m*_)*z,e[7]=(f*x*c-v*m*c+v*l*p-i*x*p-f*l*M+i*m*M)*z,e[8]=D*z,e[9]=(E*g*c-v*T*c-E*s*M+i*T*M+v*s*_-i*g*_)*z,e[10]=(f*T*c-E*d*c+E*s*p-i*T*p-f*s*_+i*d*_)*z,e[11]=(v*d*c-f*g*c-v*s*p+i*g*p+f*s*M-i*d*M)*z,e[12]=H*z,e[13]=(v*T*l-E*g*l+E*s*x-i*T*x-v*s*S+i*g*S)*z,e[14]=(E*d*l-f*T*l-E*s*m+i*T*m+f*s*S-i*d*S)*z,e[15]=(f*g*l-v*d*l+v*s*m-i*g*m-f*s*x+i*d*x)*z,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=e.x,d=e.y,m=e.z,p=c*f,v=c*d;return this.set(p*f+s,p*d-l*m,p*m+l*d,0,p*d+l*m,v*d+s,v*m-l*f,0,p*m-l*d,v*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,f){return this.set(1,s,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,f=i._y,d=i._z,m=i._w,p=c+c,v=f+f,g=d+d,x=c*p,M=c*v,E=c*g,T=f*v,S=f*g,_=d*g,U=m*p,L=m*v,D=m*g,H=s.x,F=s.y,z=s.z;return l[0]=(1-(T+_))*H,l[1]=(M+D)*H,l[2]=(E-L)*H,l[3]=0,l[4]=(M-D)*F,l[5]=(1-(x+_))*F,l[6]=(S+U)*F,l[7]=0,l[8]=(E+L)*z,l[9]=(S-U)*z,l[10]=(1-(x+T))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let c=ys.set(l[0],l[1],l[2]).length();const f=ys.set(l[4],l[5],l[6]).length(),d=ys.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],xi.copy(this);const p=1/c,v=1/f,g=1/d;return xi.elements[0]*=p,xi.elements[1]*=p,xi.elements[2]*=p,xi.elements[4]*=v,xi.elements[5]*=v,xi.elements[6]*=v,xi.elements[8]*=g,xi.elements[9]*=g,xi.elements[10]*=g,i.setFromRotationMatrix(xi),s.x=c,s.y=f,s.z=d,this}makePerspective(e,i,s,l,c,f,d=Oi,m=!1){const p=this.elements,v=2*c/(i-e),g=2*c/(s-l),x=(i+e)/(i-e),M=(s+l)/(s-l);let E,T;if(m)E=c/(f-c),T=f*c/(f-c);else if(d===Oi)E=-(f+c)/(f-c),T=-2*f*c/(f-c);else if(d===su)E=-f/(f-c),T=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,f,d=Oi,m=!1){const p=this.elements,v=2/(i-e),g=2/(s-l),x=-(i+e)/(i-e),M=-(s+l)/(s-l);let E,T;if(m)E=1/(f-c),T=f/(f-c);else if(d===Oi)E=-2/(f-c),T=-(f+c)/(f-c);else if(d===su)E=-1/(f-c),T=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=g,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const ys=new se,xi=new rn,uT=new se(0,0,0),fT=new se(1,1,1),Wa=new se,wc=new se,$n=new se,N_=new rn,O_=new ll;class ma{constructor(e=0,i=0,s=0,l=ma.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],f=l[4],d=l[8],m=l[1],p=l[5],v=l[9],g=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-St(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(St(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-St(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(St(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-St(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return N_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(N_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return O_.setFromEuler(this),this.setFromQuaternion(O_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ma.DEFAULT_ORDER="XYZ";class lx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hT=0;const P_=new se,Ss=new ll,ia=new rn,Dc=new se,Vo=new se,dT=new se,pT=new ll,z_=new se(1,0,0),I_=new se(0,1,0),B_=new se(0,0,1),F_={type:"added"},mT={type:"removed"},Ms={type:"childadded",child:null},kh={type:"childremoved",child:null};class Pn extends Vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hT++}),this.uuid=ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DEFAULT_UP.clone();const e=new se,i=new ma,s=new ll,l=new se(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new rn},normalMatrix:{value:new ht}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=Pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ss.setFromAxisAngle(e,i),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,i){return Ss.setFromAxisAngle(e,i),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(z_,e)}rotateY(e){return this.rotateOnAxis(I_,e)}rotateZ(e){return this.rotateOnAxis(B_,e)}translateOnAxis(e,i){return P_.copy(e).applyQuaternion(this.quaternion),this.position.add(P_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(z_,e)}translateY(e){return this.translateOnAxis(I_,e)}translateZ(e){return this.translateOnAxis(B_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ia.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Dc.copy(e):Dc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ia.lookAt(Vo,Dc,this.up):ia.lookAt(Dc,Vo,this.up),this.quaternion.setFromRotationMatrix(ia),l&&(ia.extractRotation(l.matrixWorld),Ss.setFromRotationMatrix(ia),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(F_),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(mT),kh.child=e,this.dispatchEvent(kh),kh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ia.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ia.multiply(e.parent.matrixWorld)),e.applyMatrix4(ia),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(F_),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,e,dT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,pT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const g=m[p];c(e.shapes,g)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=f(e.geometries),m=f(e.materials),p=f(e.textures),v=f(e.images),g=f(e.shapes),x=f(e.skeletons),M=f(e.animations),E=f(e.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),g.length>0&&(s.shapes=g),x.length>0&&(s.skeletons=x),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Pn.DEFAULT_UP=new se(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new se,aa=new se,Xh=new se,ra=new se,Es=new se,bs=new se,H_=new se,Wh=new se,qh=new se,jh=new se,Yh=new an,Zh=new an,Kh=new an;class Si{constructor(e=new se,i=new se,s=new se){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),yi.subVectors(e,i),l.cross(yi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){yi.subVectors(l,i),aa.subVectors(s,i),Xh.subVectors(e,i);const f=yi.dot(yi),d=yi.dot(aa),m=yi.dot(Xh),p=aa.dot(aa),v=aa.dot(Xh),g=f*p-d*d;if(g===0)return c.set(0,0,0),null;const x=1/g,M=(p*m-d*v)*x,E=(f*v-d*m)*x;return c.set(1-M-E,E,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,ra)===null?!1:ra.x>=0&&ra.y>=0&&ra.x+ra.y<=1}static getInterpolation(e,i,s,l,c,f,d,m){return this.getBarycoord(e,i,s,l,ra)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ra.x),m.addScaledVector(f,ra.y),m.addScaledVector(d,ra.z),m)}static getInterpolatedAttribute(e,i,s,l,c,f){return Yh.setScalar(0),Zh.setScalar(0),Kh.setScalar(0),Yh.fromBufferAttribute(e,i),Zh.fromBufferAttribute(e,s),Kh.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Yh,c.x),f.addScaledVector(Zh,c.y),f.addScaledVector(Kh,c.z),f}static isFrontFacing(e,i,s,l){return yi.subVectors(s,i),aa.subVectors(e,i),yi.cross(aa).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),aa.subVectors(this.a,this.b),yi.cross(aa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Si.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Si.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let f,d;Es.subVectors(l,s),bs.subVectors(c,s),Wh.subVectors(e,s);const m=Es.dot(Wh),p=bs.dot(Wh);if(m<=0&&p<=0)return i.copy(s);qh.subVectors(e,l);const v=Es.dot(qh),g=bs.dot(qh);if(v>=0&&g<=v)return i.copy(l);const x=m*g-v*p;if(x<=0&&m>=0&&v<=0)return f=m/(m-v),i.copy(s).addScaledVector(Es,f);jh.subVectors(e,c);const M=Es.dot(jh),E=bs.dot(jh);if(E>=0&&M<=E)return i.copy(c);const T=M*p-m*E;if(T<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(s).addScaledVector(bs,d);const S=v*E-M*g;if(S<=0&&g-v>=0&&M-E>=0)return H_.subVectors(c,l),d=(g-v)/(g-v+(M-E)),i.copy(l).addScaledVector(H_,d);const _=1/(S+T+x);return f=T*_,d=x*_,i.copy(s).addScaledVector(Es,f).addScaledVector(bs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const cx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qa={h:0,s:0,l:0},Uc={h:0,s:0,l:0};function Qh(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class bt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=wt.workingColorSpace){return this.r=e,this.g=i,this.b=s,wt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=wt.workingColorSpace){if(e=mp(e,1),i=St(i,0,1),s=St(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Qh(f,c,e+1/3),this.g=Qh(f,c,e),this.b=Qh(f,c,e-1/3)}return wt.colorSpaceToWorking(this,l),this}setStyle(e,i=hi){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=hi){const s=cx[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ha(e.r),this.g=ha(e.g),this.b=ha(e.b),this}copyLinearToSRGB(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hi){return wt.workingToColorSpace(Cn.copy(this),e),Math.round(St(Cn.r*255,0,255))*65536+Math.round(St(Cn.g*255,0,255))*256+Math.round(St(Cn.b*255,0,255))}getHexString(e=hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=wt.workingColorSpace){wt.workingToColorSpace(Cn.copy(this),i);const s=Cn.r,l=Cn.g,c=Cn.b,f=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const v=(d+f)/2;if(d===f)m=0,p=0;else{const g=f-d;switch(p=v<=.5?g/(f+d):g/(2-f-d),f){case s:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-s)/g+2;break;case c:m=(s-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,i=wt.workingColorSpace){return wt.workingToColorSpace(Cn.copy(this),i),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=hi){wt.workingToColorSpace(Cn.copy(this),e);const i=Cn.r,s=Cn.g,l=Cn.b;return e!==hi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(qa),this.setHSL(qa.h+e,qa.s+i,qa.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(qa),e.getHSL(Uc);const s=Zo(qa.h,Uc.h,i),l=Zo(qa.s,Uc.s,i),c=Zo(qa.l,Uc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new bt;bt.NAMES=cx;let gT=0;class Xs extends Vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gT++}),this.uuid=ks(),this.name="",this.type="Material",this.blending=Ns,this.side=Qa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hd,this.blendDst=dd,this.blendEquation=Ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=T_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(s.blending=this.blending),this.side!==Qa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==hd&&(s.blendSrc=this.blendSrc),this.blendDst!==dd&&(s.blendDst=this.blendDst),this.blendEquation!==Ar&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ps&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==T_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ux extends Xs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ma,this.combine=Z0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fn=new se,Lc=new Gt;let vT=0;class On{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vT++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=A_,this.updateRanges=[],this.gpuType=la,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Lc.fromBufferAttribute(this,i),Lc.applyMatrix3(e),this.setXY(i,Lc.x,Lc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=ws(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Ln(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=ws(i,this.array)),i}setX(e,i){return this.normalized&&(i=Ln(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=ws(i,this.array)),i}setY(e,i){return this.normalized&&(i=Ln(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=ws(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Ln(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=ws(i,this.array)),i}setW(e,i){return this.normalized&&(i=Ln(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Ln(i,this.array),s=Ln(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Ln(i,this.array),s=Ln(s,this.array),l=Ln(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Ln(i,this.array),s=Ln(s,this.array),l=Ln(l,this.array),c=Ln(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==A_&&(e.usage=this.usage),e}}class fx extends On{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class hx extends On{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class bi extends On{constructor(e,i,s){super(new Float32Array(e),i,s)}}let _T=0;const fi=new rn,Jh=new Pn,Ts=new se,ei=new cl,ko=new cl,_n=new se;class ti extends Vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_T++}),this.uuid=ks(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sx(e)?hx:fx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ht().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,i,s){return fi.makeTranslation(e,i,s),this.applyMatrix4(fi),this}scale(e,i,s){return fi.makeScale(e,i,s),this.applyMatrix4(fi),this}lookAt(e){return Jh.lookAt(e),Jh.updateMatrix(),this.applyMatrix4(Jh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new bi(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ei.setFromBufferAttribute(c),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ul);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new se,1/0);return}if(e){const s=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];ko.setFromBufferAttribute(d),this.morphTargetsRelative?(_n.addVectors(ei.min,ko.min),ei.expandByPoint(_n),_n.addVectors(ei.max,ko.max),ei.expandByPoint(_n)):(ei.expandByPoint(ko.min),ei.expandByPoint(ko.max))}ei.getCenter(s);let l=0;for(let c=0,f=e.count;c<f;c++)_n.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(_n));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)_n.fromBufferAttribute(d,p),m&&(Ts.fromBufferAttribute(e,p),_n.add(Ts)),l=Math.max(l,s.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new On(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let Q=0;Q<s.count;Q++)d[Q]=new se,m[Q]=new se;const p=new se,v=new se,g=new se,x=new Gt,M=new Gt,E=new Gt,T=new se,S=new se;function _(Q,w,C){p.fromBufferAttribute(s,Q),v.fromBufferAttribute(s,w),g.fromBufferAttribute(s,C),x.fromBufferAttribute(c,Q),M.fromBufferAttribute(c,w),E.fromBufferAttribute(c,C),v.sub(p),g.sub(p),M.sub(x),E.sub(x);const G=1/(M.x*E.y-E.x*M.y);isFinite(G)&&(T.copy(v).multiplyScalar(E.y).addScaledVector(g,-M.y).multiplyScalar(G),S.copy(g).multiplyScalar(M.x).addScaledVector(v,-E.x).multiplyScalar(G),d[Q].add(T),d[w].add(T),d[C].add(T),m[Q].add(S),m[w].add(S),m[C].add(S))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let Q=0,w=U.length;Q<w;++Q){const C=U[Q],G=C.start,ne=C.count;for(let he=G,_e=G+ne;he<_e;he+=3)_(e.getX(he+0),e.getX(he+1),e.getX(he+2))}const L=new se,D=new se,H=new se,F=new se;function z(Q){H.fromBufferAttribute(l,Q),F.copy(H);const w=d[Q];L.copy(w),L.sub(H.multiplyScalar(H.dot(w))).normalize(),D.crossVectors(F,w);const G=D.dot(m[Q])<0?-1:1;f.setXYZW(Q,L.x,L.y,L.z,G)}for(let Q=0,w=U.length;Q<w;++Q){const C=U[Q],G=C.start,ne=C.count;for(let he=G,_e=G+ne;he<_e;he+=3)z(e.getX(he+0)),z(e.getX(he+1)),z(e.getX(he+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new On(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,M=s.count;x<M;x++)s.setXYZ(x,0,0,0);const l=new se,c=new se,f=new se,d=new se,m=new se,p=new se,v=new se,g=new se;if(e)for(let x=0,M=e.count;x<M;x+=3){const E=e.getX(x+0),T=e.getX(x+1),S=e.getX(x+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,S),v.subVectors(f,c),g.subVectors(l,c),v.cross(g),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,T),p.fromBufferAttribute(s,S),d.add(v),m.add(v),p.add(v),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(T,m.x,m.y,m.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),v.subVectors(f,c),g.subVectors(l,c),v.cross(g),s.setXYZ(x+0,v.x,v.y,v.z),s.setXYZ(x+1,v.x,v.y,v.z),s.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)_n.fromBufferAttribute(e,i),_n.normalize(),e.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function e(d,m){const p=d.array,v=d.itemSize,g=d.normalized,x=new p.constructor(m.length*v);let M=0,E=0;for(let T=0,S=m.length;T<S;T++){d.isInterleavedBufferAttribute?M=m[T]*d.data.stride+d.offset:M=m[T]*v;for(let _=0;_<v;_++)x[E++]=p[M++]}return new On(x,v,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ti,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let v=0,g=p.length;v<g;v++){const x=p[v],M=e(x,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let g=0,x=p.length;g<x;g++){const M=p[g];v.push(M.toJSON(e.data))}v.length>0&&(l[m]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=e.morphAttributes;for(const p in c){const v=[],g=c[p];for(let x=0,M=g.length;x<M;x++)v.push(g[x].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,v=f.length;p<v;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const G_=new rn,yr=new vp,Nc=new ul,V_=new se,Oc=new se,Pc=new se,zc=new se,$h=new se,Ic=new se,k_=new se,Bc=new se;class Pi extends Pn{constructor(e=new ti,i=new ux){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){Ic.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=d[m],g=c[m];v!==0&&($h.fromBufferAttribute(g,e),f?Ic.addScaledVector($h,v):Ic.addScaledVector($h.sub(i),v))}i.add(Ic)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Nc.copy(s.boundingSphere),Nc.applyMatrix4(c),yr.copy(e.ray).recast(e.near),!(Nc.containsPoint(yr.origin)===!1&&(yr.intersectSphere(Nc,V_)===null||yr.origin.distanceToSquared(V_)>(e.far-e.near)**2))&&(G_.copy(c).invert(),yr.copy(e.ray).applyMatrix4(G_),!(s.boundingBox!==null&&yr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,yr)))}_computeIntersections(e,i,s){let l;const c=this.geometry,f=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,g=c.attributes.normal,x=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,T=x.length;E<T;E++){const S=x[E],_=f[S.materialIndex],U=Math.max(S.start,M.start),L=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let D=U,H=L;D<H;D+=3){const F=d.getX(D),z=d.getX(D+1),Q=d.getX(D+2);l=Fc(this,_,e,s,p,v,g,F,z,Q),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),T=Math.min(d.count,M.start+M.count);for(let S=E,_=T;S<_;S+=3){const U=d.getX(S),L=d.getX(S+1),D=d.getX(S+2);l=Fc(this,f,e,s,p,v,g,U,L,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,T=x.length;E<T;E++){const S=x[E],_=f[S.materialIndex],U=Math.max(S.start,M.start),L=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let D=U,H=L;D<H;D+=3){const F=D,z=D+1,Q=D+2;l=Fc(this,_,e,s,p,v,g,F,z,Q),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),T=Math.min(m.count,M.start+M.count);for(let S=E,_=T;S<_;S+=3){const U=S,L=S+1,D=S+2;l=Fc(this,f,e,s,p,v,g,U,L,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function xT(r,e,i,s,l,c,f,d){let m;if(e.side===kn?m=s.intersectTriangle(f,c,l,!0,d):m=s.intersectTriangle(l,c,f,e.side===Qa,d),m===null)return null;Bc.copy(d),Bc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Bc);return p<i.near||p>i.far?null:{distance:p,point:Bc.clone(),object:r}}function Fc(r,e,i,s,l,c,f,d,m,p){r.getVertexPosition(d,Oc),r.getVertexPosition(m,Pc),r.getVertexPosition(p,zc);const v=xT(r,e,i,s,Oc,Pc,zc,k_);if(v){const g=new se;Si.getBarycoord(k_,Oc,Pc,zc,g),l&&(v.uv=Si.getInterpolatedAttribute(l,d,m,p,g,new Gt)),c&&(v.uv1=Si.getInterpolatedAttribute(c,d,m,p,g,new Gt)),f&&(v.normal=Si.getInterpolatedAttribute(f,d,m,p,g,new se),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new se,materialIndex:0};Si.getNormal(Oc,Pc,zc,x.normal),v.face=x,v.barycoord=g}return v}class fl extends ti{constructor(e=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],v=[],g=[];let x=0,M=0;E("z","y","x",-1,-1,s,i,e,f,c,0),E("z","y","x",1,-1,s,i,-e,f,c,1),E("x","z","y",1,1,e,s,i,l,f,2),E("x","z","y",1,-1,e,s,-i,l,f,3),E("x","y","z",1,-1,e,i,s,l,c,4),E("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new bi(p,3)),this.setAttribute("normal",new bi(v,3)),this.setAttribute("uv",new bi(g,2));function E(T,S,_,U,L,D,H,F,z,Q,w){const C=D/z,G=H/Q,ne=D/2,he=H/2,_e=F/2,pe=z+1,P=Q+1;let K=0,q=0;const Ee=new se;for(let X=0;X<P;X++){const O=X*G-he;for(let te=0;te<pe;te++){const Ae=te*C-ne;Ee[T]=Ae*U,Ee[S]=O*L,Ee[_]=_e,p.push(Ee.x,Ee.y,Ee.z),Ee[T]=0,Ee[S]=0,Ee[_]=F>0?1:-1,v.push(Ee.x,Ee.y,Ee.z),g.push(te/z),g.push(1-X/Q),K+=1}}for(let X=0;X<Q;X++)for(let O=0;O<z;O++){const te=x+O+pe*X,Ae=x+O+pe*(X+1),De=x+(O+1)+pe*(X+1),ze=x+(O+1)+pe*X;m.push(te,Ae,ze),m.push(Ae,De,ze),q+=6}d.addGroup(M,q,w),M+=q,x+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fs(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Nn(r){const e={};for(let i=0;i<r.length;i++){const s=Fs(r[i]);for(const l in s)e[l]=s[l]}return e}function yT(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function dx(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const ST={clone:Fs,merge:Nn};var MT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ET=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pi extends Xs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=MT,this.fragmentShader=ET,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=yT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class px extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ja=new se,X_=new Gt,W_=new Gt;class di extends px{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=nl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nl*2*Math.atan(Math.tan(Yo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){ja.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ja.x,ja.y).multiplyScalar(-e/ja.z),ja.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ja.x,ja.y).multiplyScalar(-e/ja.z)}getViewSize(e,i){return this.getViewBounds(e,X_,W_),i.subVectors(W_,X_)}setViewOffset(e,i,s,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Yo*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const As=-90,Rs=1;class bT extends Pn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new di(As,Rs,e,i);l.layers=this.layers,this.add(l);const c=new di(As,Rs,e,i);c.layers=this.layers,this.add(c);const f=new di(As,Rs,e,i);f.layers=this.layers,this.add(f);const d=new di(As,Rs,e,i);d.layers=this.layers,this.add(d);const m=new di(As,Rs,e,i);m.layers=this.layers,this.add(m);const p=new di(As,Rs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,d,m]=i;for(const p of i)this.remove(p);if(e===Oi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===su)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,m,p,v]=this.children,g=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,c),e.setRenderTarget(s,1,l),e.render(i,f),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=T,e.setRenderTarget(s,5,l),e.render(i,v),e.setRenderTarget(g,x,M),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class mx extends Xn{constructor(e=[],i=zs,s,l,c,f,d,m,p,v){super(e,i,s,l,c,f,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class TT extends Lr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new mx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new fl(5,5,5),c=new pi({name:"CubemapFromEquirect",uniforms:Fs(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:kn,blending:Za});c.uniforms.tEquirect.value=i;const f=new Pi(l,c),d=i.minFilter;return i.minFilter===wr&&(i.minFilter=Ni),new bT(1,10,this).update(e,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,s,l);e.setRenderTarget(c)}}class qo extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AT={type:"move"};class ed{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const T of e.hand.values()){const S=i.getJointPose(T,s),_=this._getHandJoint(p,T);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const v=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=v.position.distanceTo(g.position),M=.02,E=.005;p.inputState.pinching&&x>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(AT)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new qo;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class RT extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ma,this.environmentIntensity=1,this.environmentRotation=new ma,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const td=new se,CT=new se,wT=new ht;class br{constructor(e=new se(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=td.subVectors(s,i).cross(CT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(td),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||wT.getNormalMatrix(e),l=this.coplanarPoint(td).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Sr=new ul,DT=new Gt(.5,.5),Hc=new se;class gx{constructor(e=new br,i=new br,s=new br,l=new br,c=new br,f=new br){this.planes=[e,i,s,l,c,f]}set(e,i,s,l,c,f){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Oi,s=!1){const l=this.planes,c=e.elements,f=c[0],d=c[1],m=c[2],p=c[3],v=c[4],g=c[5],x=c[6],M=c[7],E=c[8],T=c[9],S=c[10],_=c[11],U=c[12],L=c[13],D=c[14],H=c[15];if(l[0].setComponents(p-f,M-v,_-E,H-U).normalize(),l[1].setComponents(p+f,M+v,_+E,H+U).normalize(),l[2].setComponents(p+d,M+g,_+T,H+L).normalize(),l[3].setComponents(p-d,M-g,_-T,H-L).normalize(),s)l[4].setComponents(m,x,S,D).normalize(),l[5].setComponents(p-m,M-x,_-S,H-D).normalize();else if(l[4].setComponents(p-m,M-x,_-S,H-D).normalize(),i===Oi)l[5].setComponents(p+m,M+x,_+S,H+D).normalize();else if(i===su)l[5].setComponents(m,x,S,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Sr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Sr)}intersectsSprite(e){Sr.center.set(0,0,0);const i=DT.distanceTo(e.center);return Sr.radius=.7071067811865476+i,Sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Hc.x=l.normal.x>0?e.max.x:e.min.x,Hc.y=l.normal.y>0?e.max.y:e.min.y,Hc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Hc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class UT extends Xs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const lu=new se,cu=new se,q_=new rn,Xo=new vp,Gc=new ul,nd=new se,j_=new se;class LT extends Pn{constructor(e=new ti,i=new UT){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)lu.fromBufferAttribute(i,l-1),cu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=lu.distanceTo(cu);e.setAttribute("lineDistance",new bi(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Gc.copy(s.boundingSphere),Gc.applyMatrix4(l),Gc.radius+=c,e.ray.intersectsSphere(Gc)===!1)return;q_.copy(l).invert(),Xo.copy(e.ray).applyMatrix4(q_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,v=s.index,x=s.attributes.position;if(v!==null){const M=Math.max(0,f.start),E=Math.min(v.count,f.start+f.count);for(let T=M,S=E-1;T<S;T+=p){const _=v.getX(T),U=v.getX(T+1),L=Vc(this,e,Xo,m,_,U,T);L&&i.push(L)}if(this.isLineLoop){const T=v.getX(E-1),S=v.getX(M),_=Vc(this,e,Xo,m,T,S,E-1);_&&i.push(_)}}else{const M=Math.max(0,f.start),E=Math.min(x.count,f.start+f.count);for(let T=M,S=E-1;T<S;T+=p){const _=Vc(this,e,Xo,m,T,T+1,T);_&&i.push(_)}if(this.isLineLoop){const T=Vc(this,e,Xo,m,E-1,M,E-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Vc(r,e,i,s,l,c,f){const d=r.geometry.attributes.position;if(lu.fromBufferAttribute(d,l),cu.fromBufferAttribute(d,c),i.distanceSqToSegment(lu,cu,nd,j_)>s)return;nd.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(nd);if(!(p<e.near||p>e.far))return{distance:p,point:j_.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}class NT extends Xs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Y_=new rn,$d=new vp,kc=new ul,Xc=new se;class Z_ extends Pn{constructor(e=new ti,i=new NT){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),kc.copy(s.boundingSphere),kc.applyMatrix4(l),kc.radius+=c,e.ray.intersectsSphere(kc)===!1)return;Y_.copy(l).invert(),$d.copy(e.ray).applyMatrix4(Y_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,g=s.attributes.position;if(p!==null){const x=Math.max(0,f.start),M=Math.min(p.count,f.start+f.count);for(let E=x,T=M;E<T;E++){const S=p.getX(E);Xc.fromBufferAttribute(g,S),K_(Xc,S,m,l,e,i,this)}}else{const x=Math.max(0,f.start),M=Math.min(g.count,f.start+f.count);for(let E=x,T=M;E<T;E++)Xc.fromBufferAttribute(g,E),K_(Xc,E,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function K_(r,e,i,s,l,c,f){const d=$d.distanceSqToPoint(r);if(d<i){const m=new se;$d.closestPointToPoint(r,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class vx extends Xn{constructor(e,i,s=Ur,l,c,f,d=Ei,m=Ei,p,v=el,g=1){if(v!==el&&v!==tl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:g};super(x,l,c,f,d,m,v,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class _x extends Xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class pu extends ti{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,f=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,v=m+1,g=e/d,x=i/m,M=[],E=[],T=[],S=[];for(let _=0;_<v;_++){const U=_*x-f;for(let L=0;L<p;L++){const D=L*g-c;E.push(D,-U,0),T.push(0,0,1),S.push(L/d),S.push(1-_/m)}}for(let _=0;_<m;_++)for(let U=0;U<d;U++){const L=U+p*_,D=U+p*(_+1),H=U+1+p*(_+1),F=U+1+p*_;M.push(L,D,F),M.push(D,H,F)}this.setIndex(M),this.setAttribute("position",new bi(E,3)),this.setAttribute("normal",new bi(T,3)),this.setAttribute("uv",new bi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pu(e.width,e.height,e.widthSegments,e.heightSegments)}}class _p extends ti{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(f+d,Math.PI);let p=0;const v=[],g=new se,x=new se,M=[],E=[],T=[],S=[];for(let _=0;_<=s;_++){const U=[],L=_/s;let D=0;_===0&&f===0?D=.5/i:_===s&&m===Math.PI&&(D=-.5/i);for(let H=0;H<=i;H++){const F=H/i;g.x=-e*Math.cos(l+F*c)*Math.sin(f+L*d),g.y=e*Math.cos(f+L*d),g.z=e*Math.sin(l+F*c)*Math.sin(f+L*d),E.push(g.x,g.y,g.z),x.copy(g).normalize(),T.push(x.x,x.y,x.z),S.push(F+D,1-L),U.push(p++)}v.push(U)}for(let _=0;_<s;_++)for(let U=0;U<i;U++){const L=v[_][U+1],D=v[_][U],H=v[_+1][U],F=v[_+1][U+1];(_!==0||f>0)&&M.push(L,D,F),(_!==s-1||m<Math.PI)&&M.push(D,H,F)}this.setIndex(M),this.setAttribute("position",new bi(E,3)),this.setAttribute("normal",new bi(T,3)),this.setAttribute("uv",new bi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _p(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class OT extends Xs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class PT extends Xs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class zT extends px{constructor(e=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,f=s+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class IT extends di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Q_(r,e,i,s){const l=BT(s);switch(i){case tx:return r*e;case ix:return r*e/l.components*l.byteLength;case hp:return r*e/l.components*l.byteLength;case ax:return r*e*2/l.components*l.byteLength;case dp:return r*e*2/l.components*l.byteLength;case nx:return r*e*3/l.components*l.byteLength;case Mi:return r*e*4/l.components*l.byteLength;case pp:return r*e*4/l.components*l.byteLength;case Kc:case Qc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Jc:case $c:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ad:case Cd:return Math.max(r,16)*Math.max(e,8)/4;case Td:case Rd:return Math.max(r,8)*Math.max(e,8)/2;case wd:case Dd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ud:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ld:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Nd:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Od:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case zd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Id:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Fd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Hd:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Gd:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Vd:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case kd:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Xd:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Wd:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case qd:case jd:case Yd:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Zd:case Kd:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Qd:case Jd:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function BT(r){switch(r){case pa:case Q0:return{byteLength:1,components:1};case Jo:case J0:case ol:return{byteLength:2,components:1};case up:case fp:return{byteLength:2,components:4};case Ur:case cp:case la:return{byteLength:4,components:1};case $0:case ex:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lp);function xx(){let r=null,e=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function FT(r){const e=new WeakMap;function i(d,m){const p=d.array,v=d.usage,g=p.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,p,v),d.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,m,p){const v=m.array,g=m.updateRanges;if(r.bindBuffer(p,d),g.length===0)r.bufferSubData(p,0,v);else{g.sort((M,E)=>M.start-E.start);let x=0;for(let M=1;M<g.length;M++){const E=g[x],T=g[M];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++x,g[x]=T)}g.length=x+1;for(let M=0,E=g.length;M<E;M++){const T=g[M];r.bufferSubData(p,T.start*v.BYTES_PER_ELEMENT,v,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(r.deleteBuffer(m.buffer),e.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:f}}var HT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,GT=`#ifdef USE_ALPHAHASH
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
#endif`,VT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,WT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qT=`#ifdef USE_AOMAP
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
#endif`,jT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,YT=`#ifdef USE_BATCHING
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
#endif`,ZT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,KT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,QT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,JT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$T=`#ifdef USE_IRIDESCENCE
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
#endif`,eA=`#ifdef USE_BUMPMAP
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
#endif`,tA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,oA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lA=`#if defined( USE_COLOR_ALPHA )
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
#endif`,cA=`#define PI 3.141592653589793
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
} // validated`,uA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fA=`vec3 transformedNormal = objectNormal;
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
#endif`,hA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gA="gl_FragColor = linearToOutputTexel( gl_FragColor );",vA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_A=`#ifdef USE_ENVMAP
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
#endif`,xA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yA=`#ifdef USE_ENVMAP
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
#endif`,SA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,MA=`#ifdef USE_ENVMAP
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
#endif`,EA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,AA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,RA=`#ifdef USE_GRADIENTMAP
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
}`,CA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,DA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,UA=`uniform bool receiveShadow;
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
#endif`,LA=`#ifdef USE_ENVMAP
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
#endif`,NA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,OA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,PA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,IA=`PhysicalMaterial material;
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
#endif`,BA=`struct PhysicalMaterial {
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
}`,FA=`
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
#endif`,HA=`#if defined( RE_IndirectDiffuse )
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
#endif`,GA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,VA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,YA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ZA=`#if defined( USE_POINTS_UV )
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
#endif`,KA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,QA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,JA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$A=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,e1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t1=`#ifdef USE_MORPHTARGETS
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
#endif`,n1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,a1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,r1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,l1=`#ifdef USE_NORMALMAP
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
#endif`,c1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,u1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,f1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,h1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,d1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,p1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,m1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,g1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,v1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,x1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,y1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,S1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,M1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,E1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,b1=`float getShadowMask() {
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
}`,T1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,A1=`#ifdef USE_SKINNING
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
#endif`,R1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,C1=`#ifdef USE_SKINNING
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
#endif`,w1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,D1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,U1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,L1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,N1=`#ifdef USE_TRANSMISSION
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
#endif`,O1=`#ifdef USE_TRANSMISSION
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
#endif`,P1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const F1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,H1=`uniform sampler2D t2D;
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
}`,G1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,k1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W1=`#include <common>
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
}`,q1=`#if DEPTH_PACKING == 3200
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
}`,j1=`#define DISTANCE
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
}`,Y1=`#define DISTANCE
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
}`,Z1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,K1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q1=`uniform float scale;
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
}`,J1=`uniform vec3 diffuse;
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
}`,$1=`#include <common>
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
}`,eR=`uniform vec3 diffuse;
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
}`,tR=`#define LAMBERT
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
}`,nR=`#define LAMBERT
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
}`,iR=`#define MATCAP
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
}`,aR=`#define MATCAP
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
}`,rR=`#define NORMAL
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
}`,sR=`#define NORMAL
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
}`,oR=`#define PHONG
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
}`,lR=`#define PHONG
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
}`,cR=`#define STANDARD
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
}`,uR=`#define STANDARD
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
}`,fR=`#define TOON
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
}`,hR=`#define TOON
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
}`,dR=`uniform float size;
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
}`,pR=`uniform vec3 diffuse;
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
}`,mR=`#include <common>
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
}`,gR=`uniform vec3 color;
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
}`,vR=`uniform float rotation;
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
}`,_R=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:HT,alphahash_pars_fragment:GT,alphamap_fragment:VT,alphamap_pars_fragment:kT,alphatest_fragment:XT,alphatest_pars_fragment:WT,aomap_fragment:qT,aomap_pars_fragment:jT,batching_pars_vertex:YT,batching_vertex:ZT,begin_vertex:KT,beginnormal_vertex:QT,bsdfs:JT,iridescence_fragment:$T,bumpmap_pars_fragment:eA,clipping_planes_fragment:tA,clipping_planes_pars_fragment:nA,clipping_planes_pars_vertex:iA,clipping_planes_vertex:aA,color_fragment:rA,color_pars_fragment:sA,color_pars_vertex:oA,color_vertex:lA,common:cA,cube_uv_reflection_fragment:uA,defaultnormal_vertex:fA,displacementmap_pars_vertex:hA,displacementmap_vertex:dA,emissivemap_fragment:pA,emissivemap_pars_fragment:mA,colorspace_fragment:gA,colorspace_pars_fragment:vA,envmap_fragment:_A,envmap_common_pars_fragment:xA,envmap_pars_fragment:yA,envmap_pars_vertex:SA,envmap_physical_pars_fragment:LA,envmap_vertex:MA,fog_vertex:EA,fog_pars_vertex:bA,fog_fragment:TA,fog_pars_fragment:AA,gradientmap_pars_fragment:RA,lightmap_pars_fragment:CA,lights_lambert_fragment:wA,lights_lambert_pars_fragment:DA,lights_pars_begin:UA,lights_toon_fragment:NA,lights_toon_pars_fragment:OA,lights_phong_fragment:PA,lights_phong_pars_fragment:zA,lights_physical_fragment:IA,lights_physical_pars_fragment:BA,lights_fragment_begin:FA,lights_fragment_maps:HA,lights_fragment_end:GA,logdepthbuf_fragment:VA,logdepthbuf_pars_fragment:kA,logdepthbuf_pars_vertex:XA,logdepthbuf_vertex:WA,map_fragment:qA,map_pars_fragment:jA,map_particle_fragment:YA,map_particle_pars_fragment:ZA,metalnessmap_fragment:KA,metalnessmap_pars_fragment:QA,morphinstance_vertex:JA,morphcolor_vertex:$A,morphnormal_vertex:e1,morphtarget_pars_vertex:t1,morphtarget_vertex:n1,normal_fragment_begin:i1,normal_fragment_maps:a1,normal_pars_fragment:r1,normal_pars_vertex:s1,normal_vertex:o1,normalmap_pars_fragment:l1,clearcoat_normal_fragment_begin:c1,clearcoat_normal_fragment_maps:u1,clearcoat_pars_fragment:f1,iridescence_pars_fragment:h1,opaque_fragment:d1,packing:p1,premultiplied_alpha_fragment:m1,project_vertex:g1,dithering_fragment:v1,dithering_pars_fragment:_1,roughnessmap_fragment:x1,roughnessmap_pars_fragment:y1,shadowmap_pars_fragment:S1,shadowmap_pars_vertex:M1,shadowmap_vertex:E1,shadowmask_pars_fragment:b1,skinbase_vertex:T1,skinning_pars_vertex:A1,skinning_vertex:R1,skinnormal_vertex:C1,specularmap_fragment:w1,specularmap_pars_fragment:D1,tonemapping_fragment:U1,tonemapping_pars_fragment:L1,transmission_fragment:N1,transmission_pars_fragment:O1,uv_pars_fragment:P1,uv_pars_vertex:z1,uv_vertex:I1,worldpos_vertex:B1,background_vert:F1,background_frag:H1,backgroundCube_vert:G1,backgroundCube_frag:V1,cube_vert:k1,cube_frag:X1,depth_vert:W1,depth_frag:q1,distanceRGBA_vert:j1,distanceRGBA_frag:Y1,equirect_vert:Z1,equirect_frag:K1,linedashed_vert:Q1,linedashed_frag:J1,meshbasic_vert:$1,meshbasic_frag:eR,meshlambert_vert:tR,meshlambert_frag:nR,meshmatcap_vert:iR,meshmatcap_frag:aR,meshnormal_vert:rR,meshnormal_frag:sR,meshphong_vert:oR,meshphong_frag:lR,meshphysical_vert:cR,meshphysical_frag:uR,meshtoon_vert:fR,meshtoon_frag:hR,points_vert:dR,points_frag:pR,shadow_vert:mR,shadow_frag:gR,sprite_vert:vR,sprite_frag:_R},Be={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Li={basic:{uniforms:Nn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Nn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new bt(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Nn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Nn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Nn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new bt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Nn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Nn([Be.points,Be.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Nn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Nn([Be.common,Be.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Nn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Nn([Be.sprite,Be.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:Nn([Be.common,Be.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:Nn([Be.lights,Be.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Li.physical={uniforms:Nn([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Wc={r:0,b:0,g:0},Mr=new ma,xR=new rn;function yR(r,e,i,s,l,c,f){const d=new bt(0);let m=c===!0?0:1,p,v,g=null,x=0,M=null;function E(L){let D=L.isScene===!0?L.background:null;return D&&D.isTexture&&(D=(L.backgroundBlurriness>0?i:e).get(D)),D}function T(L){let D=!1;const H=E(L);H===null?_(d,m):H&&H.isColor&&(_(H,1),D=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?s.buffers.color.setClear(0,0,0,1,f):F==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(L,D){const H=E(D);H&&(H.isCubeTexture||H.mapping===du)?(v===void 0&&(v=new Pi(new fl(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:Fs(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(F,z,Q){this.matrixWorld.copyPosition(Q.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Mr.copy(D.backgroundRotation),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),v.material.uniforms.envMap.value=H,v.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(xR.makeRotationFromEuler(Mr)),v.material.toneMapped=wt.getTransfer(H.colorSpace)!==Ht,(g!==H||x!==H.version||M!==r.toneMapping)&&(v.material.needsUpdate=!0,g=H,x=H.version,M=r.toneMapping),v.layers.enableAll(),L.unshift(v,v.geometry,v.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new Pi(new pu(2,2),new pi({name:"BackgroundMaterial",uniforms:Fs(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:Qa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=wt.getTransfer(H.colorSpace)!==Ht,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(g!==H||x!==H.version||M!==r.toneMapping)&&(p.material.needsUpdate=!0,g=H,x=H.version,M=r.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function _(L,D){L.getRGB(Wc,dx(r)),s.buffers.color.setClear(Wc.r,Wc.g,Wc.b,D,f)}function U(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,D=1){d.set(L),m=D,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,_(d,m)},render:T,addToRenderList:S,dispose:U}}function SR(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,f=!1;function d(C,G,ne,he,_e){let pe=!1;const P=g(he,ne,G);c!==P&&(c=P,p(c.object)),pe=M(C,he,ne,_e),pe&&E(C,he,ne,_e),_e!==null&&e.update(_e,r.ELEMENT_ARRAY_BUFFER),(pe||f)&&(f=!1,D(C,G,ne,he),_e!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(_e).buffer))}function m(){return r.createVertexArray()}function p(C){return r.bindVertexArray(C)}function v(C){return r.deleteVertexArray(C)}function g(C,G,ne){const he=ne.wireframe===!0;let _e=s[C.id];_e===void 0&&(_e={},s[C.id]=_e);let pe=_e[G.id];pe===void 0&&(pe={},_e[G.id]=pe);let P=pe[he];return P===void 0&&(P=x(m()),pe[he]=P),P}function x(C){const G=[],ne=[],he=[];for(let _e=0;_e<i;_e++)G[_e]=0,ne[_e]=0,he[_e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:ne,attributeDivisors:he,object:C,attributes:{},index:null}}function M(C,G,ne,he){const _e=c.attributes,pe=G.attributes;let P=0;const K=ne.getAttributes();for(const q in K)if(K[q].location>=0){const X=_e[q];let O=pe[q];if(O===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(O=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(O=C.instanceColor)),X===void 0||X.attribute!==O||O&&X.data!==O.data)return!0;P++}return c.attributesNum!==P||c.index!==he}function E(C,G,ne,he){const _e={},pe=G.attributes;let P=0;const K=ne.getAttributes();for(const q in K)if(K[q].location>=0){let X=pe[q];X===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(X=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(X=C.instanceColor));const O={};O.attribute=X,X&&X.data&&(O.data=X.data),_e[q]=O,P++}c.attributes=_e,c.attributesNum=P,c.index=he}function T(){const C=c.newAttributes;for(let G=0,ne=C.length;G<ne;G++)C[G]=0}function S(C){_(C,0)}function _(C,G){const ne=c.newAttributes,he=c.enabledAttributes,_e=c.attributeDivisors;ne[C]=1,he[C]===0&&(r.enableVertexAttribArray(C),he[C]=1),_e[C]!==G&&(r.vertexAttribDivisor(C,G),_e[C]=G)}function U(){const C=c.newAttributes,G=c.enabledAttributes;for(let ne=0,he=G.length;ne<he;ne++)G[ne]!==C[ne]&&(r.disableVertexAttribArray(ne),G[ne]=0)}function L(C,G,ne,he,_e,pe,P){P===!0?r.vertexAttribIPointer(C,G,ne,_e,pe):r.vertexAttribPointer(C,G,ne,he,_e,pe)}function D(C,G,ne,he){T();const _e=he.attributes,pe=ne.getAttributes(),P=G.defaultAttributeValues;for(const K in pe){const q=pe[K];if(q.location>=0){let Ee=_e[K];if(Ee===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(Ee=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(Ee=C.instanceColor)),Ee!==void 0){const X=Ee.normalized,O=Ee.itemSize,te=e.get(Ee);if(te===void 0)continue;const Ae=te.buffer,De=te.type,ze=te.bytesPerElement,re=De===r.INT||De===r.UNSIGNED_INT||Ee.gpuType===cp;if(Ee.isInterleavedBufferAttribute){const fe=Ee.data,Oe=fe.stride,He=Ee.offset;if(fe.isInstancedInterleavedBuffer){for(let qe=0;qe<q.locationSize;qe++)_(q.location+qe,fe.meshPerAttribute);C.isInstancedMesh!==!0&&he._maxInstanceCount===void 0&&(he._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let qe=0;qe<q.locationSize;qe++)S(q.location+qe);r.bindBuffer(r.ARRAY_BUFFER,Ae);for(let qe=0;qe<q.locationSize;qe++)L(q.location+qe,O/q.locationSize,De,X,Oe*ze,(He+O/q.locationSize*qe)*ze,re)}else{if(Ee.isInstancedBufferAttribute){for(let fe=0;fe<q.locationSize;fe++)_(q.location+fe,Ee.meshPerAttribute);C.isInstancedMesh!==!0&&he._maxInstanceCount===void 0&&(he._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let fe=0;fe<q.locationSize;fe++)S(q.location+fe);r.bindBuffer(r.ARRAY_BUFFER,Ae);for(let fe=0;fe<q.locationSize;fe++)L(q.location+fe,O/q.locationSize,De,X,O*ze,O/q.locationSize*fe*ze,re)}}else if(P!==void 0){const X=P[K];if(X!==void 0)switch(X.length){case 2:r.vertexAttrib2fv(q.location,X);break;case 3:r.vertexAttrib3fv(q.location,X);break;case 4:r.vertexAttrib4fv(q.location,X);break;default:r.vertexAttrib1fv(q.location,X)}}}}U()}function H(){Q();for(const C in s){const G=s[C];for(const ne in G){const he=G[ne];for(const _e in he)v(he[_e].object),delete he[_e];delete G[ne]}delete s[C]}}function F(C){if(s[C.id]===void 0)return;const G=s[C.id];for(const ne in G){const he=G[ne];for(const _e in he)v(he[_e].object),delete he[_e];delete G[ne]}delete s[C.id]}function z(C){for(const G in s){const ne=s[G];if(ne[C.id]===void 0)continue;const he=ne[C.id];for(const _e in he)v(he[_e].object),delete he[_e];delete ne[C.id]}}function Q(){w(),f=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Q,resetDefaultState:w,dispose:H,releaseStatesOfGeometry:F,releaseStatesOfProgram:z,initAttributes:T,enableAttribute:S,disableUnusedAttributes:U}}function MR(r,e,i){let s;function l(p){s=p}function c(p,v){r.drawArrays(s,p,v),i.update(v,s,1)}function f(p,v,g){g!==0&&(r.drawArraysInstanced(s,p,v,g),i.update(v,s,g))}function d(p,v,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,v,0,g);let M=0;for(let E=0;E<g;E++)M+=v[E];i.update(M,s,1)}function m(p,v,g,x){if(g===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)f(p[E],v[E],x[E]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,v,0,x,0,g);let E=0;for(let T=0;T<g;T++)E+=v[T]*x[T];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function ER(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(z){return!(z!==Mi&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const Q=z===ol&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==pa&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==la&&!Q)}function m(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const g=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),U=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),H=E>0,F=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:U,maxVaryings:L,maxFragmentUniforms:D,vertexTextures:H,maxSamples:F}}function bR(r){const e=this;let i=null,s=0,l=!1,c=!1;const f=new br,d=new ht,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const M=g.length!==0||x||s!==0||l;return l=x,s=g.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,x){i=v(g,x,0)},this.setState=function(g,x,M){const E=g.clippingPlanes,T=g.clipIntersection,S=g.clipShadows,_=r.get(g);if(!l||E===null||E.length===0||c&&!S)c?v(null):p();else{const U=c?0:s,L=U*4;let D=_.clippingState||null;m.value=D,D=v(E,x,L,M);for(let H=0;H!==L;++H)D[H]=i[H];_.clippingState=D,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=U}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(g,x,M,E){const T=g!==null?g.length:0;let S=null;if(T!==0){if(S=m.value,E!==!0||S===null){const _=M+T*4,U=x.matrixWorldInverse;d.getNormalMatrix(U),(S===null||S.length<_)&&(S=new Float32Array(_));for(let L=0,D=M;L!==T;++L,D+=4)f.copy(g[L]).applyMatrix4(U,d),f.normal.toArray(S,D),S[D+3]=f.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function TR(r){let e=new WeakMap;function i(f,d){return d===Sd?f.mapping=zs:d===Md&&(f.mapping=Is),f}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===Sd||d===Md)if(e.has(f)){const m=e.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new TT(m.height);return p.fromEquirectangularTexture(r,f),e.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}const Ls=4,J_=[.125,.215,.35,.446,.526,.582],Rr=20,id=new zT,$_=new bt;let ad=null,rd=0,sd=0,od=!1;const Tr=(1+Math.sqrt(5))/2,Cs=1/Tr,e0=[new se(-Tr,Cs,0),new se(Tr,Cs,0),new se(-Cs,0,Tr),new se(Cs,0,Tr),new se(0,Tr,-Cs),new se(0,Tr,Cs),new se(-1,1,-1),new se(1,1,-1),new se(-1,1,1),new se(1,1,1)],AR=new se;class t0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100,c={}){const{size:f=256,position:d=AR}=c;ad=this._renderer.getRenderTarget(),rd=this._renderer.getActiveCubeFace(),sd=this._renderer.getActiveMipmapLevel(),od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=a0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=i0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ad,rd,sd),this._renderer.xr.enabled=od,e.scissorTest=!1,qc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===zs||e.mapping===Is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ad=this._renderer.getRenderTarget(),rd=this._renderer.getActiveCubeFace(),sd=this._renderer.getActiveMipmapLevel(),od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Ni,minFilter:Ni,generateMipmaps:!1,type:ol,format:Mi,colorSpace:Bs,depthBuffer:!1},l=n0(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=n0(e,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=RR(c)),this._blurMaterial=CR(c,e,i)}return l}_compileMaterial(e){const i=new Pi(this._lodPlanes[0],e);this._renderer.compile(i,id)}_sceneToCubeUV(e,i,s,l,c){const m=new di(90,1,i,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,M=g.toneMapping;g.getClearColor($_),g.toneMapping=Ka,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null));const T=new ux({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),S=new Pi(new fl,T);let _=!1;const U=e.background;U?U.isColor&&(T.color.copy(U),e.background=null,_=!0):(T.color.copy($_),_=!0);for(let L=0;L<6;L++){const D=L%3;D===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[L],c.y,c.z)):D===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[L]));const H=this._cubeSize;qc(l,D*H,L>2?H:0,H,H),g.setRenderTarget(l),_&&g.render(S,m),g.render(e,m)}S.geometry.dispose(),S.material.dispose(),g.toneMapping=M,g.autoClear=x,e.background=U}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===zs||e.mapping===Is;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=a0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=i0());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new Pi(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;qc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,id)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=e0[(l-c-1)%e0.length];this._blur(e,c-1,c,f,d)}i.autoClear=s}_blur(e,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,s,l,"latitudinal",c),this._halfBlur(f,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,g=new Pi(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Rr-1),T=c/E,S=isFinite(c)?1+Math.floor(v*T):Rr;S>Rr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Rr}`);const _=[];let U=0;for(let z=0;z<Rr;++z){const Q=z/T,w=Math.exp(-Q*Q/2);_.push(w),z===0?U+=w:z<S&&(U+=2*w)}for(let z=0;z<_.length;z++)_[z]=_[z]/U;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=_,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=E,x.mipInt.value=L-s;const D=this._sizeLods[l],H=3*D*(l>L-Ls?l-L+Ls:0),F=4*(this._cubeSize-D);qc(i,H,F,3*D,2*D),m.setRenderTarget(i),m.render(g,id)}}function RR(r){const e=[],i=[],s=[];let l=r;const c=r-Ls+1+J_.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);i.push(d);let m=1/d;f>r-Ls?m=J_[f-r+Ls-1]:f===0&&(m=0),s.push(m);const p=1/(d-2),v=-p,g=1+p,x=[v,v,g,v,g,g,v,v,g,g,v,g],M=6,E=6,T=3,S=2,_=1,U=new Float32Array(T*E*M),L=new Float32Array(S*E*M),D=new Float32Array(_*E*M);for(let F=0;F<M;F++){const z=F%3*2/3-1,Q=F>2?0:-1,w=[z,Q,0,z+2/3,Q,0,z+2/3,Q+1,0,z,Q,0,z+2/3,Q+1,0,z,Q+1,0];U.set(w,T*E*F),L.set(x,S*E*F);const C=[F,F,F,F,F,F];D.set(C,_*E*F)}const H=new ti;H.setAttribute("position",new On(U,T)),H.setAttribute("uv",new On(L,S)),H.setAttribute("faceIndex",new On(D,_)),e.push(H),l>Ls&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function n0(r,e,i){const s=new Lr(r,e,i);return s.texture.mapping=du,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function qc(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function CR(r,e,i){const s=new Float32Array(Rr),l=new se(0,1,0);return new pi({name:"SphericalGaussianBlur",defines:{n:Rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:xp(),fragmentShader:`

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
		`,blending:Za,depthTest:!1,depthWrite:!1})}function i0(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xp(),fragmentShader:`

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
		`,blending:Za,depthTest:!1,depthWrite:!1})}function a0(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Za,depthTest:!1,depthWrite:!1})}function xp(){return`

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
	`}function wR(r){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Sd||m===Md,v=m===zs||m===Is;if(p||v){let g=e.get(d);const x=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new t0(r)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const M=d.image;return p&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new t0(r)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function DR(r){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&il("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function UR(r,e,i,s){const l={},c=new WeakMap;function f(g){const x=g.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);x.removeEventListener("dispose",f),delete l[x.id];const M=c.get(x);M&&(e.remove(M),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(g,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function m(g){const x=g.attributes;for(const M in x)e.update(x[M],r.ARRAY_BUFFER)}function p(g){const x=[],M=g.index,E=g.attributes.position;let T=0;if(M!==null){const U=M.array;T=M.version;for(let L=0,D=U.length;L<D;L+=3){const H=U[L+0],F=U[L+1],z=U[L+2];x.push(H,F,F,z,z,H)}}else if(E!==void 0){const U=E.array;T=E.version;for(let L=0,D=U.length/3-1;L<D;L+=3){const H=L+0,F=L+1,z=L+2;x.push(H,F,F,z,z,H)}}else return;const S=new(sx(x)?hx:fx)(x,1);S.version=T;const _=c.get(g);_&&e.remove(_),c.set(g,S)}function v(g){const x=c.get(g);if(x){const M=g.index;M!==null&&x.version<M.version&&p(g)}else p(g);return c.get(g)}return{get:d,update:m,getWireframeAttribute:v}}function LR(r,e,i){let s;function l(x){s=x}let c,f;function d(x){c=x.type,f=x.bytesPerElement}function m(x,M){r.drawElements(s,M,c,x*f),i.update(M,s,1)}function p(x,M,E){E!==0&&(r.drawElementsInstanced(s,M,c,x*f,E),i.update(M,s,E))}function v(x,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,x,0,E);let S=0;for(let _=0;_<E;_++)S+=M[_];i.update(S,s,1)}function g(x,M,E,T){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<x.length;_++)p(x[_]/f,M[_],T[_]);else{S.multiDrawElementsInstancedWEBGL(s,M,0,c,x,0,T,0,E);let _=0;for(let U=0;U<E;U++)_+=M[U]*T[U];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function NR(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,d){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function OR(r,e,i){const s=new WeakMap,l=new an;function c(f,d,m){const p=f.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=v!==void 0?v.length:0;let x=s.get(d);if(x===void 0||x.count!==g){let C=function(){Q.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var M=C;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],U=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let D=0;E===!0&&(D=1),T===!0&&(D=2),S===!0&&(D=3);let H=d.attributes.position.count*D,F=1;H>e.maxTextureSize&&(F=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const z=new Float32Array(H*F*4*g),Q=new ox(z,H,F,g);Q.type=la,Q.needsUpdate=!0;const w=D*4;for(let G=0;G<g;G++){const ne=_[G],he=U[G],_e=L[G],pe=H*F*4*G;for(let P=0;P<ne.count;P++){const K=P*w;E===!0&&(l.fromBufferAttribute(ne,P),z[pe+K+0]=l.x,z[pe+K+1]=l.y,z[pe+K+2]=l.z,z[pe+K+3]=0),T===!0&&(l.fromBufferAttribute(he,P),z[pe+K+4]=l.x,z[pe+K+5]=l.y,z[pe+K+6]=l.z,z[pe+K+7]=0),S===!0&&(l.fromBufferAttribute(_e,P),z[pe+K+8]=l.x,z[pe+K+9]=l.y,z[pe+K+10]=l.z,z[pe+K+11]=_e.itemSize===4?l.w:1)}}x={count:g,texture:Q,size:new Gt(H,F)},s.set(d,x),d.addEventListener("dispose",C)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const T=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",T),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function PR(r,e,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,v=m.geometry,g=e.get(m,v);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return g}function f(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const yx=new Xn,r0=new vx(1,1),Sx=new ox,Mx=new lT,Ex=new mx,s0=[],o0=[],l0=new Float32Array(16),c0=new Float32Array(9),u0=new Float32Array(4);function Ws(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=s0[l];if(c===void 0&&(c=new Float32Array(l),s0[l]=c),e!==0){s.toArray(c,0);for(let f=1,d=0;f!==e;++f)d+=i,r[f].toArray(c,d)}return c}function pn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function mn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function mu(r,e){let i=o0[e];i===void 0&&(i=new Int32Array(e),o0[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function zR(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function IR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;r.uniform2fv(this.addr,e),mn(i,e)}}function BR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(pn(i,e))return;r.uniform3fv(this.addr,e),mn(i,e)}}function FR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;r.uniform4fv(this.addr,e),mn(i,e)}}function HR(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(pn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,s))return;u0.set(s),r.uniformMatrix2fv(this.addr,!1,u0),mn(i,s)}}function GR(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(pn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,s))return;c0.set(s),r.uniformMatrix3fv(this.addr,!1,c0),mn(i,s)}}function VR(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(pn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,s))return;l0.set(s),r.uniformMatrix4fv(this.addr,!1,l0),mn(i,s)}}function kR(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function XR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;r.uniform2iv(this.addr,e),mn(i,e)}}function WR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(pn(i,e))return;r.uniform3iv(this.addr,e),mn(i,e)}}function qR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;r.uniform4iv(this.addr,e),mn(i,e)}}function jR(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function YR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;r.uniform2uiv(this.addr,e),mn(i,e)}}function ZR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(pn(i,e))return;r.uniform3uiv(this.addr,e),mn(i,e)}}function KR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;r.uniform4uiv(this.addr,e),mn(i,e)}}function QR(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(r0.compareFunction=rx,c=r0):c=yx,i.setTexture2D(e||c,l)}function JR(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Mx,l)}function $R(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Ex,l)}function eC(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Sx,l)}function tC(r){switch(r){case 5126:return zR;case 35664:return IR;case 35665:return BR;case 35666:return FR;case 35674:return HR;case 35675:return GR;case 35676:return VR;case 5124:case 35670:return kR;case 35667:case 35671:return XR;case 35668:case 35672:return WR;case 35669:case 35673:return qR;case 5125:return jR;case 36294:return YR;case 36295:return ZR;case 36296:return KR;case 35678:case 36198:case 36298:case 36306:case 35682:return QR;case 35679:case 36299:case 36307:return JR;case 35680:case 36300:case 36308:case 36293:return $R;case 36289:case 36303:case 36311:case 36292:return eC}}function nC(r,e){r.uniform1fv(this.addr,e)}function iC(r,e){const i=Ws(e,this.size,2);r.uniform2fv(this.addr,i)}function aC(r,e){const i=Ws(e,this.size,3);r.uniform3fv(this.addr,i)}function rC(r,e){const i=Ws(e,this.size,4);r.uniform4fv(this.addr,i)}function sC(r,e){const i=Ws(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function oC(r,e){const i=Ws(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function lC(r,e){const i=Ws(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function cC(r,e){r.uniform1iv(this.addr,e)}function uC(r,e){r.uniform2iv(this.addr,e)}function fC(r,e){r.uniform3iv(this.addr,e)}function hC(r,e){r.uniform4iv(this.addr,e)}function dC(r,e){r.uniform1uiv(this.addr,e)}function pC(r,e){r.uniform2uiv(this.addr,e)}function mC(r,e){r.uniform3uiv(this.addr,e)}function gC(r,e){r.uniform4uiv(this.addr,e)}function vC(r,e,i){const s=this.cache,l=e.length,c=mu(i,l);pn(s,c)||(r.uniform1iv(this.addr,c),mn(s,c));for(let f=0;f!==l;++f)i.setTexture2D(e[f]||yx,c[f])}function _C(r,e,i){const s=this.cache,l=e.length,c=mu(i,l);pn(s,c)||(r.uniform1iv(this.addr,c),mn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||Mx,c[f])}function xC(r,e,i){const s=this.cache,l=e.length,c=mu(i,l);pn(s,c)||(r.uniform1iv(this.addr,c),mn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||Ex,c[f])}function yC(r,e,i){const s=this.cache,l=e.length,c=mu(i,l);pn(s,c)||(r.uniform1iv(this.addr,c),mn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||Sx,c[f])}function SC(r){switch(r){case 5126:return nC;case 35664:return iC;case 35665:return aC;case 35666:return rC;case 35674:return sC;case 35675:return oC;case 35676:return lC;case 5124:case 35670:return cC;case 35667:case 35671:return uC;case 35668:case 35672:return fC;case 35669:case 35673:return hC;case 5125:return dC;case 36294:return pC;case 36295:return mC;case 36296:return gC;case 35678:case 36198:case 36298:case 36306:case 35682:return vC;case 35679:case 36299:case 36307:return _C;case 35680:case 36300:case 36308:case 36293:return xC;case 36289:case 36303:case 36311:case 36292:return yC}}class MC{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=tC(i.type)}}class EC{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=SC(i.type)}}class bC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(e,i[d.id],s)}}}const ld=/(\w+)(\])?(\[|\.)?/g;function f0(r,e){r.seq.push(e),r.map[e.id]=e}function TC(r,e,i){const s=r.name,l=s.length;for(ld.lastIndex=0;;){const c=ld.exec(s),f=ld.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){f0(i,p===void 0?new MC(d,r,e):new EC(d,r,e));break}else{let g=i.map[d];g===void 0&&(g=new bC(d),f0(i,g)),i=g}}}class eu{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=e.getActiveUniform(i,l),f=e.getUniformLocation(i,c.name);TC(c,f,this)}}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&s.push(f)}return s}}function h0(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const AC=37297;let RC=0;function CC(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const d=f+1;s.push(`${d===e?">":" "} ${d}: ${i[f]}`)}return s.join(`
`)}const d0=new ht;function wC(r){wt._getMatrix(d0,wt.workingColorSpace,r);const e=`mat3( ${d0.elements.map(i=>i.toFixed(4))} )`;switch(wt.getTransfer(r)){case ru:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function p0(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+CC(r.getShaderSource(e),d)}else return c}function DC(r,e){const i=wC(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function UC(r,e){let i;switch(e){case yb:i="Linear";break;case Sb:i="Reinhard";break;case Mb:i="Cineon";break;case Eb:i="ACESFilmic";break;case Tb:i="AgX";break;case Ab:i="Neutral";break;case bb:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const jc=new se;function LC(){wt.getLuminanceCoefficients(jc);const r=jc.x.toFixed(4),e=jc.y.toFixed(4),i=jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function NC(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jo).join(`
`)}function OC(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function PC(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),f=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:r.getAttribLocation(e,f),locationSize:d}}return i}function jo(r){return r!==""}function m0(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function g0(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zC=/^[ \t]*#include +<([\w\d./]+)>/gm;function ep(r){return r.replace(zC,BC)}const IC=new Map;function BC(r,e){let i=dt[e];if(i===void 0){const s=IC.get(e);if(s!==void 0)i=dt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return ep(i)}const FC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function v0(r){return r.replace(FC,HC)}function HC(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function _0(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function GC(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Y0?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===$E?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===sa&&(e="SHADOWMAP_TYPE_VSM"),e}function VC(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case zs:case Is:e="ENVMAP_TYPE_CUBE";break;case du:e="ENVMAP_TYPE_CUBE_UV";break}return e}function kC(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Is:e="ENVMAP_MODE_REFRACTION";break}return e}function XC(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Z0:e="ENVMAP_BLENDING_MULTIPLY";break;case _b:e="ENVMAP_BLENDING_MIX";break;case xb:e="ENVMAP_BLENDING_ADD";break}return e}function WC(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function qC(r,e,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=GC(i),p=VC(i),v=kC(i),g=XC(i),x=WC(i),M=NC(i),E=OC(c),T=l.createProgram();let S,_,U=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(jo).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(jo).join(`
`),_.length>0&&(_+=`
`)):(S=[_0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jo).join(`
`),_=[_0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ka?"#define TONE_MAPPING":"",i.toneMapping!==Ka?dt.tonemapping_pars_fragment:"",i.toneMapping!==Ka?UC("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,DC("linearToOutputTexel",i.outputColorSpace),LC(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(jo).join(`
`)),f=ep(f),f=m0(f,i),f=g0(f,i),d=ep(d),d=m0(d,i),d=g0(d,i),f=v0(f),d=v0(d),i.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===R_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===R_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=U+S+f,D=U+_+d,H=h0(l,l.VERTEX_SHADER,L),F=h0(l,l.FRAGMENT_SHADER,D);l.attachShader(T,H),l.attachShader(T,F),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function z(G){if(r.debug.checkShaderErrors){const ne=l.getProgramInfoLog(T)||"",he=l.getShaderInfoLog(H)||"",_e=l.getShaderInfoLog(F)||"",pe=ne.trim(),P=he.trim(),K=_e.trim();let q=!0,Ee=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,T,H,F);else{const X=p0(l,H,"vertex"),O=p0(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+pe+`
`+X+`
`+O)}else pe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",pe):(P===""||K==="")&&(Ee=!1);Ee&&(G.diagnostics={runnable:q,programLog:pe,vertexShader:{log:P,prefix:S},fragmentShader:{log:K,prefix:_}})}l.deleteShader(H),l.deleteShader(F),Q=new eu(l,T),w=PC(l,T)}let Q;this.getUniforms=function(){return Q===void 0&&z(this),Q};let w;this.getAttributes=function(){return w===void 0&&z(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(T,AC)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=RC++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=H,this.fragmentShader=F,this}let jC=0;class YC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new ZC(e),i.set(e,s)),s}}class ZC{constructor(e){this.id=jC++,this.code=e,this.usedTimes=0}}function KC(r,e,i,s,l,c,f){const d=new lx,m=new YC,p=new Set,v=[],g=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(w){return p.add(w),w===0?"uv":`uv${w}`}function S(w,C,G,ne,he){const _e=ne.fog,pe=he.geometry,P=w.isMeshStandardMaterial?ne.environment:null,K=(w.isMeshStandardMaterial?i:e).get(w.envMap||P),q=K&&K.mapping===du?K.image.height:null,Ee=E[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const X=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,O=X!==void 0?X.length:0;let te=0;pe.morphAttributes.position!==void 0&&(te=1),pe.morphAttributes.normal!==void 0&&(te=2),pe.morphAttributes.color!==void 0&&(te=3);let Ae,De,ze,re;if(Ee){const Tt=Li[Ee];Ae=Tt.vertexShader,De=Tt.fragmentShader}else Ae=w.vertexShader,De=w.fragmentShader,m.update(w),ze=m.getVertexShaderID(w),re=m.getFragmentShaderID(w);const fe=r.getRenderTarget(),Oe=r.state.buffers.depth.getReversed(),He=he.isInstancedMesh===!0,qe=he.isBatchedMesh===!0,ct=!!w.map,Kt=!!w.matcap,B=!!K,Mt=!!w.aoMap,it=!!w.lightMap,tt=!!w.bumpMap,je=!!w.normalMap,Ut=!!w.displacementMap,Ge=!!w.emissiveMap,rt=!!w.metalnessMap,Wt=!!w.roughnessMap,Vt=w.anisotropy>0,N=w.clearcoat>0,b=w.dispersion>0,J=w.iridescence>0,ge=w.sheen>0,Te=w.transmission>0,de=Vt&&!!w.anisotropyMap,Ke=N&&!!w.clearcoatMap,Y=N&&!!w.clearcoatNormalMap,be=N&&!!w.clearcoatRoughnessMap,Le=J&&!!w.iridescenceMap,Me=J&&!!w.iridescenceThicknessMap,Ce=ge&&!!w.sheenColorMap,ke=ge&&!!w.sheenRoughnessMap,Ue=!!w.specularMap,Pe=!!w.specularColorMap,st=!!w.specularIntensityMap,k=Te&&!!w.transmissionMap,we=Te&&!!w.thicknessMap,Ne=!!w.gradientMap,Ve=!!w.alphaMap,Re=w.alphaTest>0,ye=!!w.alphaHash,Xe=!!w.extensions;let ot=Ka;w.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(ot=r.toneMapping);const Ot={shaderID:Ee,shaderType:w.type,shaderName:w.name,vertexShader:Ae,fragmentShader:De,defines:w.defines,customVertexShaderID:ze,customFragmentShaderID:re,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:qe,batchingColor:qe&&he._colorsTexture!==null,instancing:He,instancingColor:He&&he.instanceColor!==null,instancingMorph:He&&he.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:fe===null?r.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Bs,alphaToCoverage:!!w.alphaToCoverage,map:ct,matcap:Kt,envMap:B,envMapMode:B&&K.mapping,envMapCubeUVHeight:q,aoMap:Mt,lightMap:it,bumpMap:tt,normalMap:je,displacementMap:x&&Ut,emissiveMap:Ge,normalMapObjectSpace:je&&w.normalMapType===Ub,normalMapTangentSpace:je&&w.normalMapType===Db,metalnessMap:rt,roughnessMap:Wt,anisotropy:Vt,anisotropyMap:de,clearcoat:N,clearcoatMap:Ke,clearcoatNormalMap:Y,clearcoatRoughnessMap:be,dispersion:b,iridescence:J,iridescenceMap:Le,iridescenceThicknessMap:Me,sheen:ge,sheenColorMap:Ce,sheenRoughnessMap:ke,specularMap:Ue,specularColorMap:Pe,specularIntensityMap:st,transmission:Te,transmissionMap:k,thicknessMap:we,gradientMap:Ne,opaque:w.transparent===!1&&w.blending===Ns&&w.alphaToCoverage===!1,alphaMap:Ve,alphaTest:Re,alphaHash:ye,combine:w.combine,mapUv:ct&&T(w.map.channel),aoMapUv:Mt&&T(w.aoMap.channel),lightMapUv:it&&T(w.lightMap.channel),bumpMapUv:tt&&T(w.bumpMap.channel),normalMapUv:je&&T(w.normalMap.channel),displacementMapUv:Ut&&T(w.displacementMap.channel),emissiveMapUv:Ge&&T(w.emissiveMap.channel),metalnessMapUv:rt&&T(w.metalnessMap.channel),roughnessMapUv:Wt&&T(w.roughnessMap.channel),anisotropyMapUv:de&&T(w.anisotropyMap.channel),clearcoatMapUv:Ke&&T(w.clearcoatMap.channel),clearcoatNormalMapUv:Y&&T(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&T(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&T(w.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&T(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&T(w.sheenColorMap.channel),sheenRoughnessMapUv:ke&&T(w.sheenRoughnessMap.channel),specularMapUv:Ue&&T(w.specularMap.channel),specularColorMapUv:Pe&&T(w.specularColorMap.channel),specularIntensityMapUv:st&&T(w.specularIntensityMap.channel),transmissionMapUv:k&&T(w.transmissionMap.channel),thicknessMapUv:we&&T(w.thicknessMap.channel),alphaMapUv:Ve&&T(w.alphaMap.channel),vertexTangents:!!pe.attributes.tangent&&(je||Vt),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pointsUvs:he.isPoints===!0&&!!pe.attributes.uv&&(ct||Ve),fog:!!_e,useFog:w.fog===!0,fogExp2:!!_e&&_e.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Oe,skinning:he.isSkinnedMesh===!0,morphTargets:pe.morphAttributes.position!==void 0,morphNormals:pe.morphAttributes.normal!==void 0,morphColors:pe.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:te,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:ot,decodeVideoTexture:ct&&w.map.isVideoTexture===!0&&wt.getTransfer(w.map.colorSpace)===Ht,decodeVideoTextureEmissive:Ge&&w.emissiveMap.isVideoTexture===!0&&wt.getTransfer(w.emissiveMap.colorSpace)===Ht,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===oa,flipSided:w.side===kn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Xe&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&w.extensions.multiDraw===!0||qe)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ot.vertexUv1s=p.has(1),Ot.vertexUv2s=p.has(2),Ot.vertexUv3s=p.has(3),p.clear(),Ot}function _(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const G in w.defines)C.push(G),C.push(w.defines[G]);return w.isRawShaderMaterial===!1&&(U(C,w),L(C,w),C.push(r.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function U(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function L(w,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),w.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),w.push(d.mask)}function D(w){const C=E[w.type];let G;if(C){const ne=Li[C];G=ST.clone(ne.uniforms)}else G=w.uniforms;return G}function H(w,C){let G;for(let ne=0,he=v.length;ne<he;ne++){const _e=v[ne];if(_e.cacheKey===C){G=_e,++G.usedTimes;break}}return G===void 0&&(G=new qC(r,C,w,c),v.push(G)),G}function F(w){if(--w.usedTimes===0){const C=v.indexOf(w);v[C]=v[v.length-1],v.pop(),w.destroy()}}function z(w){m.remove(w)}function Q(){m.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:D,acquireProgram:H,releaseProgram:F,releaseShaderCache:z,programs:v,dispose:Q}}function QC(){let r=new WeakMap;function e(f){return r.has(f)}function i(f){let d=r.get(f);return d===void 0&&(d={},r.set(f,d)),d}function s(f){r.delete(f)}function l(f,d,m){r.get(f)[d]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function JC(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function x0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function y0(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function f(g,x,M,E,T,S){let _=r[e];return _===void 0?(_={id:g.id,object:g,geometry:x,material:M,groupOrder:E,renderOrder:g.renderOrder,z:T,group:S},r[e]=_):(_.id=g.id,_.object=g,_.geometry=x,_.material=M,_.groupOrder=E,_.renderOrder=g.renderOrder,_.z=T,_.group=S),e++,_}function d(g,x,M,E,T,S){const _=f(g,x,M,E,T,S);M.transmission>0?s.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(g,x,M,E,T,S){const _=f(g,x,M,E,T,S);M.transmission>0?s.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(g,x){i.length>1&&i.sort(g||JC),s.length>1&&s.sort(x||x0),l.length>1&&l.sort(x||x0)}function v(){for(let g=e,x=r.length;g<x;g++){const M=r[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:v,sort:p}}function $C(){let r=new WeakMap;function e(s,l){const c=r.get(s);let f;return c===void 0?(f=new y0,r.set(s,[f])):l>=c.length?(f=new y0,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:e,dispose:i}}function ew(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new se,color:new bt};break;case"SpotLight":i={position:new se,direction:new se,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new se,color:new bt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new se,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":i={color:new bt,position:new se,halfWidth:new se,halfHeight:new se};break}return r[e.id]=i,i}}}function tw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let nw=0;function iw(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function aw(r){const e=new ew,i=tw(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new se);const l=new se,c=new rn,f=new rn;function d(p){let v=0,g=0,x=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let M=0,E=0,T=0,S=0,_=0,U=0,L=0,D=0,H=0,F=0,z=0;p.sort(iw);for(let w=0,C=p.length;w<C;w++){const G=p[w],ne=G.color,he=G.intensity,_e=G.distance,pe=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)v+=ne.r*he,g+=ne.g*he,x+=ne.b*he;else if(G.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(G.sh.coefficients[P],he);z++}else if(G.isDirectionalLight){const P=e.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const K=G.shadow,q=i.get(G);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,s.directionalShadow[M]=q,s.directionalShadowMap[M]=pe,s.directionalShadowMatrix[M]=G.shadow.matrix,U++}s.directional[M]=P,M++}else if(G.isSpotLight){const P=e.get(G);P.position.setFromMatrixPosition(G.matrixWorld),P.color.copy(ne).multiplyScalar(he),P.distance=_e,P.coneCos=Math.cos(G.angle),P.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),P.decay=G.decay,s.spot[T]=P;const K=G.shadow;if(G.map&&(s.spotLightMap[H]=G.map,H++,K.updateMatrices(G),G.castShadow&&F++),s.spotLightMatrix[T]=K.matrix,G.castShadow){const q=i.get(G);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,s.spotShadow[T]=q,s.spotShadowMap[T]=pe,D++}T++}else if(G.isRectAreaLight){const P=e.get(G);P.color.copy(ne).multiplyScalar(he),P.halfWidth.set(G.width*.5,0,0),P.halfHeight.set(0,G.height*.5,0),s.rectArea[S]=P,S++}else if(G.isPointLight){const P=e.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),P.distance=G.distance,P.decay=G.decay,G.castShadow){const K=G.shadow,q=i.get(G);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,q.shadowCameraNear=K.camera.near,q.shadowCameraFar=K.camera.far,s.pointShadow[E]=q,s.pointShadowMap[E]=pe,s.pointShadowMatrix[E]=G.shadow.matrix,L++}s.point[E]=P,E++}else if(G.isHemisphereLight){const P=e.get(G);P.skyColor.copy(G.color).multiplyScalar(he),P.groundColor.copy(G.groundColor).multiplyScalar(he),s.hemi[_]=P,_++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Be.LTC_FLOAT_1,s.rectAreaLTC2=Be.LTC_FLOAT_2):(s.rectAreaLTC1=Be.LTC_HALF_1,s.rectAreaLTC2=Be.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=g,s.ambient[2]=x;const Q=s.hash;(Q.directionalLength!==M||Q.pointLength!==E||Q.spotLength!==T||Q.rectAreaLength!==S||Q.hemiLength!==_||Q.numDirectionalShadows!==U||Q.numPointShadows!==L||Q.numSpotShadows!==D||Q.numSpotMaps!==H||Q.numLightProbes!==z)&&(s.directional.length=M,s.spot.length=T,s.rectArea.length=S,s.point.length=E,s.hemi.length=_,s.directionalShadow.length=U,s.directionalShadowMap.length=U,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=U,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=D+H-F,s.spotLightMap.length=H,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=z,Q.directionalLength=M,Q.pointLength=E,Q.spotLength=T,Q.rectAreaLength=S,Q.hemiLength=_,Q.numDirectionalShadows=U,Q.numPointShadows=L,Q.numSpotShadows=D,Q.numSpotMaps=H,Q.numLightProbes=z,s.version=nw++)}function m(p,v){let g=0,x=0,M=0,E=0,T=0;const S=v.matrixWorldInverse;for(let _=0,U=p.length;_<U;_++){const L=p[_];if(L.isDirectionalLight){const D=s.directional[g];D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),g++}else if(L.isSpotLight){const D=s.spot[M];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(S),D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),M++}else if(L.isRectAreaLight){const D=s.rectArea[E];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(S),f.identity(),c.copy(L.matrixWorld),c.premultiply(S),f.extractRotation(c),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),E++}else if(L.isPointLight){const D=s.point[x];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(S),x++}else if(L.isHemisphereLight){const D=s.hemi[T];D.direction.setFromMatrixPosition(L.matrixWorld),D.direction.transformDirection(S),T++}}}return{setup:d,setupView:m,state:s}}function S0(r){const e=new aw(r),i=[],s=[];function l(v){p.camera=v,i.length=0,s.length=0}function c(v){i.push(v)}function f(v){s.push(v)}function d(){e.setup(i)}function m(v){e.setupView(i,v)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:f}}function rw(r){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let d;return f===void 0?(d=new S0(r),e.set(l,[d])):c>=f.length?(d=new S0(r),f.push(d)):d=f[c],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const sw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ow=`uniform sampler2D shadow_pass;
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
}`;function lw(r,e,i){let s=new gx;const l=new Gt,c=new Gt,f=new an,d=new OT({depthPacking:wb}),m=new PT,p={},v=i.maxTextureSize,g={[Qa]:kn,[kn]:Qa,[oa]:oa},x=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:sw,fragmentShader:ow}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const E=new ti;E.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Pi(E,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Y0;let _=this.type;this.render=function(F,z,Q){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||F.length===0)return;const w=r.getRenderTarget(),C=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),ne=r.state;ne.setBlending(Za),ne.buffers.depth.getReversed()===!0?ne.buffers.color.setClear(0,0,0,0):ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const he=_!==sa&&this.type===sa,_e=_===sa&&this.type!==sa;for(let pe=0,P=F.length;pe<P;pe++){const K=F[pe],q=K.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const Ee=q.getFrameExtents();if(l.multiply(Ee),c.copy(q.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/Ee.x),l.x=c.x*Ee.x,q.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/Ee.y),l.y=c.y*Ee.y,q.mapSize.y=c.y)),q.map===null||he===!0||_e===!0){const O=this.type!==sa?{minFilter:Ei,magFilter:Ei}:{};q.map!==null&&q.map.dispose(),q.map=new Lr(l.x,l.y,O),q.map.texture.name=K.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();const X=q.getViewportCount();for(let O=0;O<X;O++){const te=q.getViewport(O);f.set(c.x*te.x,c.y*te.y,c.x*te.z,c.y*te.w),ne.viewport(f),q.updateMatrices(K,O),s=q.getFrustum(),D(z,Q,q.camera,K,this.type)}q.isPointLightShadow!==!0&&this.type===sa&&U(q,Q),q.needsUpdate=!1}_=this.type,S.needsUpdate=!1,r.setRenderTarget(w,C,G)};function U(F,z){const Q=e.update(T);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Lr(l.x,l.y)),x.uniforms.shadow_pass.value=F.map.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,r.setRenderTarget(F.mapPass),r.clear(),r.renderBufferDirect(z,null,Q,x,T,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,r.setRenderTarget(F.map),r.clear(),r.renderBufferDirect(z,null,Q,M,T,null)}function L(F,z,Q,w){let C=null;const G=Q.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(G!==void 0)C=G;else if(C=Q.isPointLight===!0?m:d,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const ne=C.uuid,he=z.uuid;let _e=p[ne];_e===void 0&&(_e={},p[ne]=_e);let pe=_e[he];pe===void 0&&(pe=C.clone(),_e[he]=pe,z.addEventListener("dispose",H)),C=pe}if(C.visible=z.visible,C.wireframe=z.wireframe,w===sa?C.side=z.shadowSide!==null?z.shadowSide:z.side:C.side=z.shadowSide!==null?z.shadowSide:g[z.side],C.alphaMap=z.alphaMap,C.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,C.map=z.map,C.clipShadows=z.clipShadows,C.clippingPlanes=z.clippingPlanes,C.clipIntersection=z.clipIntersection,C.displacementMap=z.displacementMap,C.displacementScale=z.displacementScale,C.displacementBias=z.displacementBias,C.wireframeLinewidth=z.wireframeLinewidth,C.linewidth=z.linewidth,Q.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ne=r.properties.get(C);ne.light=Q}return C}function D(F,z,Q,w,C){if(F.visible===!1)return;if(F.layers.test(z.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&C===sa)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,F.matrixWorld);const he=e.update(F),_e=F.material;if(Array.isArray(_e)){const pe=he.groups;for(let P=0,K=pe.length;P<K;P++){const q=pe[P],Ee=_e[q.materialIndex];if(Ee&&Ee.visible){const X=L(F,Ee,w,C);F.onBeforeShadow(r,F,z,Q,he,X,q),r.renderBufferDirect(Q,null,he,X,F,q),F.onAfterShadow(r,F,z,Q,he,X,q)}}}else if(_e.visible){const pe=L(F,_e,w,C);F.onBeforeShadow(r,F,z,Q,he,pe,null),r.renderBufferDirect(Q,null,he,pe,F,null),F.onAfterShadow(r,F,z,Q,he,pe,null)}}const ne=F.children;for(let he=0,_e=ne.length;he<_e;he++)D(ne[he],z,Q,w,C)}function H(F){F.target.removeEventListener("dispose",H);for(const Q in p){const w=p[Q],C=F.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const cw={[pd]:md,[gd]:xd,[vd]:yd,[Ps]:_d,[md]:pd,[xd]:gd,[yd]:vd,[_d]:Ps};function uw(r,e){function i(){let k=!1;const we=new an;let Ne=null;const Ve=new an(0,0,0,0);return{setMask:function(Re){Ne!==Re&&!k&&(r.colorMask(Re,Re,Re,Re),Ne=Re)},setLocked:function(Re){k=Re},setClear:function(Re,ye,Xe,ot,Ot){Ot===!0&&(Re*=ot,ye*=ot,Xe*=ot),we.set(Re,ye,Xe,ot),Ve.equals(we)===!1&&(r.clearColor(Re,ye,Xe,ot),Ve.copy(we))},reset:function(){k=!1,Ne=null,Ve.set(-1,0,0,0)}}}function s(){let k=!1,we=!1,Ne=null,Ve=null,Re=null;return{setReversed:function(ye){if(we!==ye){const Xe=e.get("EXT_clip_control");ye?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),we=ye;const ot=Re;Re=null,this.setClear(ot)}},getReversed:function(){return we},setTest:function(ye){ye?fe(r.DEPTH_TEST):Oe(r.DEPTH_TEST)},setMask:function(ye){Ne!==ye&&!k&&(r.depthMask(ye),Ne=ye)},setFunc:function(ye){if(we&&(ye=cw[ye]),Ve!==ye){switch(ye){case pd:r.depthFunc(r.NEVER);break;case md:r.depthFunc(r.ALWAYS);break;case gd:r.depthFunc(r.LESS);break;case Ps:r.depthFunc(r.LEQUAL);break;case vd:r.depthFunc(r.EQUAL);break;case _d:r.depthFunc(r.GEQUAL);break;case xd:r.depthFunc(r.GREATER);break;case yd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ve=ye}},setLocked:function(ye){k=ye},setClear:function(ye){Re!==ye&&(we&&(ye=1-ye),r.clearDepth(ye),Re=ye)},reset:function(){k=!1,Ne=null,Ve=null,Re=null,we=!1}}}function l(){let k=!1,we=null,Ne=null,Ve=null,Re=null,ye=null,Xe=null,ot=null,Ot=null;return{setTest:function(Tt){k||(Tt?fe(r.STENCIL_TEST):Oe(r.STENCIL_TEST))},setMask:function(Tt){we!==Tt&&!k&&(r.stencilMask(Tt),we=Tt)},setFunc:function(Tt,wn,ni){(Ne!==Tt||Ve!==wn||Re!==ni)&&(r.stencilFunc(Tt,wn,ni),Ne=Tt,Ve=wn,Re=ni)},setOp:function(Tt,wn,ni){(ye!==Tt||Xe!==wn||ot!==ni)&&(r.stencilOp(Tt,wn,ni),ye=Tt,Xe=wn,ot=ni)},setLocked:function(Tt){k=Tt},setClear:function(Tt){Ot!==Tt&&(r.clearStencil(Tt),Ot=Tt)},reset:function(){k=!1,we=null,Ne=null,Ve=null,Re=null,ye=null,Xe=null,ot=null,Ot=null}}}const c=new i,f=new s,d=new l,m=new WeakMap,p=new WeakMap;let v={},g={},x=new WeakMap,M=[],E=null,T=!1,S=null,_=null,U=null,L=null,D=null,H=null,F=null,z=new bt(0,0,0),Q=0,w=!1,C=null,G=null,ne=null,he=null,_e=null;const pe=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,K=0;const q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(q)[1]),P=K>=1):q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),P=K>=2);let Ee=null,X={};const O=r.getParameter(r.SCISSOR_BOX),te=r.getParameter(r.VIEWPORT),Ae=new an().fromArray(O),De=new an().fromArray(te);function ze(k,we,Ne,Ve){const Re=new Uint8Array(4),ye=r.createTexture();r.bindTexture(k,ye),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Xe=0;Xe<Ne;Xe++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(we,0,r.RGBA,1,1,Ve,0,r.RGBA,r.UNSIGNED_BYTE,Re):r.texImage2D(we+Xe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Re);return ye}const re={};re[r.TEXTURE_2D]=ze(r.TEXTURE_2D,r.TEXTURE_2D,1),re[r.TEXTURE_CUBE_MAP]=ze(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[r.TEXTURE_2D_ARRAY]=ze(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),re[r.TEXTURE_3D]=ze(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),fe(r.DEPTH_TEST),f.setFunc(Ps),tt(!1),je(S_),fe(r.CULL_FACE),Mt(Za);function fe(k){v[k]!==!0&&(r.enable(k),v[k]=!0)}function Oe(k){v[k]!==!1&&(r.disable(k),v[k]=!1)}function He(k,we){return g[k]!==we?(r.bindFramebuffer(k,we),g[k]=we,k===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=we),k===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=we),!0):!1}function qe(k,we){let Ne=M,Ve=!1;if(k){Ne=x.get(we),Ne===void 0&&(Ne=[],x.set(we,Ne));const Re=k.textures;if(Ne.length!==Re.length||Ne[0]!==r.COLOR_ATTACHMENT0){for(let ye=0,Xe=Re.length;ye<Xe;ye++)Ne[ye]=r.COLOR_ATTACHMENT0+ye;Ne.length=Re.length,Ve=!0}}else Ne[0]!==r.BACK&&(Ne[0]=r.BACK,Ve=!0);Ve&&r.drawBuffers(Ne)}function ct(k){return E!==k?(r.useProgram(k),E=k,!0):!1}const Kt={[Ar]:r.FUNC_ADD,[tb]:r.FUNC_SUBTRACT,[nb]:r.FUNC_REVERSE_SUBTRACT};Kt[ib]=r.MIN,Kt[ab]=r.MAX;const B={[rb]:r.ZERO,[sb]:r.ONE,[ob]:r.SRC_COLOR,[hd]:r.SRC_ALPHA,[db]:r.SRC_ALPHA_SATURATE,[fb]:r.DST_COLOR,[cb]:r.DST_ALPHA,[lb]:r.ONE_MINUS_SRC_COLOR,[dd]:r.ONE_MINUS_SRC_ALPHA,[hb]:r.ONE_MINUS_DST_COLOR,[ub]:r.ONE_MINUS_DST_ALPHA,[pb]:r.CONSTANT_COLOR,[mb]:r.ONE_MINUS_CONSTANT_COLOR,[gb]:r.CONSTANT_ALPHA,[vb]:r.ONE_MINUS_CONSTANT_ALPHA};function Mt(k,we,Ne,Ve,Re,ye,Xe,ot,Ot,Tt){if(k===Za){T===!0&&(Oe(r.BLEND),T=!1);return}if(T===!1&&(fe(r.BLEND),T=!0),k!==eb){if(k!==S||Tt!==w){if((_!==Ar||D!==Ar)&&(r.blendEquation(r.FUNC_ADD),_=Ar,D=Ar),Tt)switch(k){case Ns:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case M_:r.blendFunc(r.ONE,r.ONE);break;case E_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case b_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ns:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case M_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case E_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case b_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}U=null,L=null,H=null,F=null,z.set(0,0,0),Q=0,S=k,w=Tt}return}Re=Re||we,ye=ye||Ne,Xe=Xe||Ve,(we!==_||Re!==D)&&(r.blendEquationSeparate(Kt[we],Kt[Re]),_=we,D=Re),(Ne!==U||Ve!==L||ye!==H||Xe!==F)&&(r.blendFuncSeparate(B[Ne],B[Ve],B[ye],B[Xe]),U=Ne,L=Ve,H=ye,F=Xe),(ot.equals(z)===!1||Ot!==Q)&&(r.blendColor(ot.r,ot.g,ot.b,Ot),z.copy(ot),Q=Ot),S=k,w=!1}function it(k,we){k.side===oa?Oe(r.CULL_FACE):fe(r.CULL_FACE);let Ne=k.side===kn;we&&(Ne=!Ne),tt(Ne),k.blending===Ns&&k.transparent===!1?Mt(Za):Mt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),f.setFunc(k.depthFunc),f.setTest(k.depthTest),f.setMask(k.depthWrite),c.setMask(k.colorWrite);const Ve=k.stencilWrite;d.setTest(Ve),Ve&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ge(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?fe(r.SAMPLE_ALPHA_TO_COVERAGE):Oe(r.SAMPLE_ALPHA_TO_COVERAGE)}function tt(k){C!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),C=k)}function je(k){k!==QE?(fe(r.CULL_FACE),k!==G&&(k===S_?r.cullFace(r.BACK):k===JE?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Oe(r.CULL_FACE),G=k}function Ut(k){k!==ne&&(P&&r.lineWidth(k),ne=k)}function Ge(k,we,Ne){k?(fe(r.POLYGON_OFFSET_FILL),(he!==we||_e!==Ne)&&(r.polygonOffset(we,Ne),he=we,_e=Ne)):Oe(r.POLYGON_OFFSET_FILL)}function rt(k){k?fe(r.SCISSOR_TEST):Oe(r.SCISSOR_TEST)}function Wt(k){k===void 0&&(k=r.TEXTURE0+pe-1),Ee!==k&&(r.activeTexture(k),Ee=k)}function Vt(k,we,Ne){Ne===void 0&&(Ee===null?Ne=r.TEXTURE0+pe-1:Ne=Ee);let Ve=X[Ne];Ve===void 0&&(Ve={type:void 0,texture:void 0},X[Ne]=Ve),(Ve.type!==k||Ve.texture!==we)&&(Ee!==Ne&&(r.activeTexture(Ne),Ee=Ne),r.bindTexture(k,we||re[k]),Ve.type=k,Ve.texture=we)}function N(){const k=X[Ee];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function J(){try{r.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(){try{r.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Te(){try{r.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function de(){try{r.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ke(){try{r.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Y(){try{r.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function be(){try{r.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Le(){try{r.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Me(){try{r.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ce(k){Ae.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),Ae.copy(k))}function ke(k){De.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),De.copy(k))}function Ue(k,we){let Ne=p.get(we);Ne===void 0&&(Ne=new WeakMap,p.set(we,Ne));let Ve=Ne.get(k);Ve===void 0&&(Ve=r.getUniformBlockIndex(we,k.name),Ne.set(k,Ve))}function Pe(k,we){const Ve=p.get(we).get(k);m.get(we)!==Ve&&(r.uniformBlockBinding(we,Ve,k.__bindingPointIndex),m.set(we,Ve))}function st(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},Ee=null,X={},g={},x=new WeakMap,M=[],E=null,T=!1,S=null,_=null,U=null,L=null,D=null,H=null,F=null,z=new bt(0,0,0),Q=0,w=!1,C=null,G=null,ne=null,he=null,_e=null,Ae.set(0,0,r.canvas.width,r.canvas.height),De.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:fe,disable:Oe,bindFramebuffer:He,drawBuffers:qe,useProgram:ct,setBlending:Mt,setMaterial:it,setFlipSided:tt,setCullFace:je,setLineWidth:Ut,setPolygonOffset:Ge,setScissorTest:rt,activeTexture:Wt,bindTexture:Vt,unbindTexture:N,compressedTexImage2D:b,compressedTexImage3D:J,texImage2D:Le,texImage3D:Me,updateUBOMapping:Ue,uniformBlockBinding:Pe,texStorage2D:Y,texStorage3D:be,texSubImage2D:ge,texSubImage3D:Te,compressedTexSubImage2D:de,compressedTexSubImage3D:Ke,scissor:Ce,viewport:ke,reset:st}}function fw(r,e,i,s,l,c,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Gt,v=new WeakMap;let g;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,b){return M?new OffscreenCanvas(N,b):ou("canvas")}function T(N,b,J){let ge=1;const Te=Vt(N);if((Te.width>J||Te.height>J)&&(ge=J/Math.max(Te.width,Te.height)),ge<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const de=Math.floor(ge*Te.width),Ke=Math.floor(ge*Te.height);g===void 0&&(g=E(de,Ke));const Y=b?E(de,Ke):g;return Y.width=de,Y.height=Ke,Y.getContext("2d").drawImage(N,0,0,de,Ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Te.width+"x"+Te.height+") to ("+de+"x"+Ke+")."),Y}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Te.width+"x"+Te.height+")."),N;return N}function S(N){return N.generateMipmaps}function _(N){r.generateMipmap(N)}function U(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(N,b,J,ge,Te=!1){if(N!==null){if(r[N]!==void 0)return r[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let de=b;if(b===r.RED&&(J===r.FLOAT&&(de=r.R32F),J===r.HALF_FLOAT&&(de=r.R16F),J===r.UNSIGNED_BYTE&&(de=r.R8)),b===r.RED_INTEGER&&(J===r.UNSIGNED_BYTE&&(de=r.R8UI),J===r.UNSIGNED_SHORT&&(de=r.R16UI),J===r.UNSIGNED_INT&&(de=r.R32UI),J===r.BYTE&&(de=r.R8I),J===r.SHORT&&(de=r.R16I),J===r.INT&&(de=r.R32I)),b===r.RG&&(J===r.FLOAT&&(de=r.RG32F),J===r.HALF_FLOAT&&(de=r.RG16F),J===r.UNSIGNED_BYTE&&(de=r.RG8)),b===r.RG_INTEGER&&(J===r.UNSIGNED_BYTE&&(de=r.RG8UI),J===r.UNSIGNED_SHORT&&(de=r.RG16UI),J===r.UNSIGNED_INT&&(de=r.RG32UI),J===r.BYTE&&(de=r.RG8I),J===r.SHORT&&(de=r.RG16I),J===r.INT&&(de=r.RG32I)),b===r.RGB_INTEGER&&(J===r.UNSIGNED_BYTE&&(de=r.RGB8UI),J===r.UNSIGNED_SHORT&&(de=r.RGB16UI),J===r.UNSIGNED_INT&&(de=r.RGB32UI),J===r.BYTE&&(de=r.RGB8I),J===r.SHORT&&(de=r.RGB16I),J===r.INT&&(de=r.RGB32I)),b===r.RGBA_INTEGER&&(J===r.UNSIGNED_BYTE&&(de=r.RGBA8UI),J===r.UNSIGNED_SHORT&&(de=r.RGBA16UI),J===r.UNSIGNED_INT&&(de=r.RGBA32UI),J===r.BYTE&&(de=r.RGBA8I),J===r.SHORT&&(de=r.RGBA16I),J===r.INT&&(de=r.RGBA32I)),b===r.RGB&&(J===r.UNSIGNED_INT_5_9_9_9_REV&&(de=r.RGB9_E5),J===r.UNSIGNED_INT_10F_11F_11F_REV&&(de=r.R11F_G11F_B10F)),b===r.RGBA){const Ke=Te?ru:wt.getTransfer(ge);J===r.FLOAT&&(de=r.RGBA32F),J===r.HALF_FLOAT&&(de=r.RGBA16F),J===r.UNSIGNED_BYTE&&(de=Ke===Ht?r.SRGB8_ALPHA8:r.RGBA8),J===r.UNSIGNED_SHORT_4_4_4_4&&(de=r.RGBA4),J===r.UNSIGNED_SHORT_5_5_5_1&&(de=r.RGB5_A1)}return(de===r.R16F||de===r.R32F||de===r.RG16F||de===r.RG32F||de===r.RGBA16F||de===r.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function D(N,b){let J;return N?b===null||b===Ur||b===$o?J=r.DEPTH24_STENCIL8:b===la?J=r.DEPTH32F_STENCIL8:b===Jo&&(J=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ur||b===$o?J=r.DEPTH_COMPONENT24:b===la?J=r.DEPTH_COMPONENT32F:b===Jo&&(J=r.DEPTH_COMPONENT16),J}function H(N,b){return S(N)===!0||N.isFramebufferTexture&&N.minFilter!==Ei&&N.minFilter!==Ni?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function F(N){const b=N.target;b.removeEventListener("dispose",F),Q(b),b.isVideoTexture&&v.delete(b)}function z(N){const b=N.target;b.removeEventListener("dispose",z),C(b)}function Q(N){const b=s.get(N);if(b.__webglInit===void 0)return;const J=N.source,ge=x.get(J);if(ge){const Te=ge[b.__cacheKey];Te.usedTimes--,Te.usedTimes===0&&w(N),Object.keys(ge).length===0&&x.delete(J)}s.remove(N)}function w(N){const b=s.get(N);r.deleteTexture(b.__webglTexture);const J=N.source,ge=x.get(J);delete ge[b.__cacheKey],f.memory.textures--}function C(N){const b=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(b.__webglFramebuffer[ge]))for(let Te=0;Te<b.__webglFramebuffer[ge].length;Te++)r.deleteFramebuffer(b.__webglFramebuffer[ge][Te]);else r.deleteFramebuffer(b.__webglFramebuffer[ge]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[ge])}else{if(Array.isArray(b.__webglFramebuffer))for(let ge=0;ge<b.__webglFramebuffer.length;ge++)r.deleteFramebuffer(b.__webglFramebuffer[ge]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ge=0;ge<b.__webglColorRenderbuffer.length;ge++)b.__webglColorRenderbuffer[ge]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[ge]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const J=N.textures;for(let ge=0,Te=J.length;ge<Te;ge++){const de=s.get(J[ge]);de.__webglTexture&&(r.deleteTexture(de.__webglTexture),f.memory.textures--),s.remove(J[ge])}s.remove(N)}let G=0;function ne(){G=0}function he(){const N=G;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),G+=1,N}function _e(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function pe(N,b){const J=s.get(N);if(N.isVideoTexture&&rt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&J.__version!==N.version){const ge=N.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(J,N,b);return}}else N.isExternalTexture&&(J.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,J.__webglTexture,r.TEXTURE0+b)}function P(N,b){const J=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&J.__version!==N.version){re(J,N,b);return}i.bindTexture(r.TEXTURE_2D_ARRAY,J.__webglTexture,r.TEXTURE0+b)}function K(N,b){const J=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&J.__version!==N.version){re(J,N,b);return}i.bindTexture(r.TEXTURE_3D,J.__webglTexture,r.TEXTURE0+b)}function q(N,b){const J=s.get(N);if(N.version>0&&J.__version!==N.version){fe(J,N,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture,r.TEXTURE0+b)}const Ee={[Ed]:r.REPEAT,[Cr]:r.CLAMP_TO_EDGE,[bd]:r.MIRRORED_REPEAT},X={[Ei]:r.NEAREST,[Rb]:r.NEAREST_MIPMAP_NEAREST,[Ec]:r.NEAREST_MIPMAP_LINEAR,[Ni]:r.LINEAR,[Nh]:r.LINEAR_MIPMAP_NEAREST,[wr]:r.LINEAR_MIPMAP_LINEAR},O={[Lb]:r.NEVER,[Bb]:r.ALWAYS,[Nb]:r.LESS,[rx]:r.LEQUAL,[Ob]:r.EQUAL,[Ib]:r.GEQUAL,[Pb]:r.GREATER,[zb]:r.NOTEQUAL};function te(N,b){if(b.type===la&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Ni||b.magFilter===Nh||b.magFilter===Ec||b.magFilter===wr||b.minFilter===Ni||b.minFilter===Nh||b.minFilter===Ec||b.minFilter===wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,Ee[b.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,Ee[b.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,Ee[b.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,X[b.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,X[b.minFilter]),b.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,O[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ei||b.minFilter!==Ec&&b.minFilter!==wr||b.type===la&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");r.texParameterf(N,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function Ae(N,b){let J=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",F));const ge=b.source;let Te=x.get(ge);Te===void 0&&(Te={},x.set(ge,Te));const de=_e(b);if(de!==N.__cacheKey){Te[de]===void 0&&(Te[de]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,J=!0),Te[de].usedTimes++;const Ke=Te[N.__cacheKey];Ke!==void 0&&(Te[N.__cacheKey].usedTimes--,Ke.usedTimes===0&&w(b)),N.__cacheKey=de,N.__webglTexture=Te[de].texture}return J}function De(N,b,J){return Math.floor(Math.floor(N/J)/b)}function ze(N,b,J,ge){const de=N.updateRanges;if(de.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,J,ge,b.data);else{de.sort((Me,Ce)=>Me.start-Ce.start);let Ke=0;for(let Me=1;Me<de.length;Me++){const Ce=de[Ke],ke=de[Me],Ue=Ce.start+Ce.count,Pe=De(ke.start,b.width,4),st=De(Ce.start,b.width,4);ke.start<=Ue+1&&Pe===st&&De(ke.start+ke.count-1,b.width,4)===Pe?Ce.count=Math.max(Ce.count,ke.start+ke.count-Ce.start):(++Ke,de[Ke]=ke)}de.length=Ke+1;const Y=r.getParameter(r.UNPACK_ROW_LENGTH),be=r.getParameter(r.UNPACK_SKIP_PIXELS),Le=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let Me=0,Ce=de.length;Me<Ce;Me++){const ke=de[Me],Ue=Math.floor(ke.start/4),Pe=Math.ceil(ke.count/4),st=Ue%b.width,k=Math.floor(Ue/b.width),we=Pe,Ne=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,st),r.pixelStorei(r.UNPACK_SKIP_ROWS,k),i.texSubImage2D(r.TEXTURE_2D,0,st,k,we,Ne,J,ge,b.data)}N.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Y),r.pixelStorei(r.UNPACK_SKIP_PIXELS,be),r.pixelStorei(r.UNPACK_SKIP_ROWS,Le)}}function re(N,b,J){let ge=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ge=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ge=r.TEXTURE_3D);const Te=Ae(N,b),de=b.source;i.bindTexture(ge,N.__webglTexture,r.TEXTURE0+J);const Ke=s.get(de);if(de.version!==Ke.__version||Te===!0){i.activeTexture(r.TEXTURE0+J);const Y=wt.getPrimaries(wt.workingColorSpace),be=b.colorSpace===Ya?null:wt.getPrimaries(b.colorSpace),Le=b.colorSpace===Ya||Y===be?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let Me=T(b.image,!1,l.maxTextureSize);Me=Wt(b,Me);const Ce=c.convert(b.format,b.colorSpace),ke=c.convert(b.type);let Ue=L(b.internalFormat,Ce,ke,b.colorSpace,b.isVideoTexture);te(ge,b);let Pe;const st=b.mipmaps,k=b.isVideoTexture!==!0,we=Ke.__version===void 0||Te===!0,Ne=de.dataReady,Ve=H(b,Me);if(b.isDepthTexture)Ue=D(b.format===tl,b.type),we&&(k?i.texStorage2D(r.TEXTURE_2D,1,Ue,Me.width,Me.height):i.texImage2D(r.TEXTURE_2D,0,Ue,Me.width,Me.height,0,Ce,ke,null));else if(b.isDataTexture)if(st.length>0){k&&we&&i.texStorage2D(r.TEXTURE_2D,Ve,Ue,st[0].width,st[0].height);for(let Re=0,ye=st.length;Re<ye;Re++)Pe=st[Re],k?Ne&&i.texSubImage2D(r.TEXTURE_2D,Re,0,0,Pe.width,Pe.height,Ce,ke,Pe.data):i.texImage2D(r.TEXTURE_2D,Re,Ue,Pe.width,Pe.height,0,Ce,ke,Pe.data);b.generateMipmaps=!1}else k?(we&&i.texStorage2D(r.TEXTURE_2D,Ve,Ue,Me.width,Me.height),Ne&&ze(b,Me,Ce,ke)):i.texImage2D(r.TEXTURE_2D,0,Ue,Me.width,Me.height,0,Ce,ke,Me.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){k&&we&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ve,Ue,st[0].width,st[0].height,Me.depth);for(let Re=0,ye=st.length;Re<ye;Re++)if(Pe=st[Re],b.format!==Mi)if(Ce!==null)if(k){if(Ne)if(b.layerUpdates.size>0){const Xe=Q_(Pe.width,Pe.height,b.format,b.type);for(const ot of b.layerUpdates){const Ot=Pe.data.subarray(ot*Xe/Pe.data.BYTES_PER_ELEMENT,(ot+1)*Xe/Pe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Re,0,0,ot,Pe.width,Pe.height,1,Ce,Ot)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Re,0,0,0,Pe.width,Pe.height,Me.depth,Ce,Pe.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Re,Ue,Pe.width,Pe.height,Me.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Ne&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Re,0,0,0,Pe.width,Pe.height,Me.depth,Ce,ke,Pe.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Re,Ue,Pe.width,Pe.height,Me.depth,0,Ce,ke,Pe.data)}else{k&&we&&i.texStorage2D(r.TEXTURE_2D,Ve,Ue,st[0].width,st[0].height);for(let Re=0,ye=st.length;Re<ye;Re++)Pe=st[Re],b.format!==Mi?Ce!==null?k?Ne&&i.compressedTexSubImage2D(r.TEXTURE_2D,Re,0,0,Pe.width,Pe.height,Ce,Pe.data):i.compressedTexImage2D(r.TEXTURE_2D,Re,Ue,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Ne&&i.texSubImage2D(r.TEXTURE_2D,Re,0,0,Pe.width,Pe.height,Ce,ke,Pe.data):i.texImage2D(r.TEXTURE_2D,Re,Ue,Pe.width,Pe.height,0,Ce,ke,Pe.data)}else if(b.isDataArrayTexture)if(k){if(we&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ve,Ue,Me.width,Me.height,Me.depth),Ne)if(b.layerUpdates.size>0){const Re=Q_(Me.width,Me.height,b.format,b.type);for(const ye of b.layerUpdates){const Xe=Me.data.subarray(ye*Re/Me.data.BYTES_PER_ELEMENT,(ye+1)*Re/Me.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ye,Me.width,Me.height,1,Ce,ke,Xe)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Ce,ke,Me.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Ue,Me.width,Me.height,Me.depth,0,Ce,ke,Me.data);else if(b.isData3DTexture)k?(we&&i.texStorage3D(r.TEXTURE_3D,Ve,Ue,Me.width,Me.height,Me.depth),Ne&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Ce,ke,Me.data)):i.texImage3D(r.TEXTURE_3D,0,Ue,Me.width,Me.height,Me.depth,0,Ce,ke,Me.data);else if(b.isFramebufferTexture){if(we)if(k)i.texStorage2D(r.TEXTURE_2D,Ve,Ue,Me.width,Me.height);else{let Re=Me.width,ye=Me.height;for(let Xe=0;Xe<Ve;Xe++)i.texImage2D(r.TEXTURE_2D,Xe,Ue,Re,ye,0,Ce,ke,null),Re>>=1,ye>>=1}}else if(st.length>0){if(k&&we){const Re=Vt(st[0]);i.texStorage2D(r.TEXTURE_2D,Ve,Ue,Re.width,Re.height)}for(let Re=0,ye=st.length;Re<ye;Re++)Pe=st[Re],k?Ne&&i.texSubImage2D(r.TEXTURE_2D,Re,0,0,Ce,ke,Pe):i.texImage2D(r.TEXTURE_2D,Re,Ue,Ce,ke,Pe);b.generateMipmaps=!1}else if(k){if(we){const Re=Vt(Me);i.texStorage2D(r.TEXTURE_2D,Ve,Ue,Re.width,Re.height)}Ne&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ce,ke,Me)}else i.texImage2D(r.TEXTURE_2D,0,Ue,Ce,ke,Me);S(b)&&_(ge),Ke.__version=de.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function fe(N,b,J){if(b.image.length!==6)return;const ge=Ae(N,b),Te=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+J);const de=s.get(Te);if(Te.version!==de.__version||ge===!0){i.activeTexture(r.TEXTURE0+J);const Ke=wt.getPrimaries(wt.workingColorSpace),Y=b.colorSpace===Ya?null:wt.getPrimaries(b.colorSpace),be=b.colorSpace===Ya||Ke===Y?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Le=b.isCompressedTexture||b.image[0].isCompressedTexture,Me=b.image[0]&&b.image[0].isDataTexture,Ce=[];for(let ye=0;ye<6;ye++)!Le&&!Me?Ce[ye]=T(b.image[ye],!0,l.maxCubemapSize):Ce[ye]=Me?b.image[ye].image:b.image[ye],Ce[ye]=Wt(b,Ce[ye]);const ke=Ce[0],Ue=c.convert(b.format,b.colorSpace),Pe=c.convert(b.type),st=L(b.internalFormat,Ue,Pe,b.colorSpace),k=b.isVideoTexture!==!0,we=de.__version===void 0||ge===!0,Ne=Te.dataReady;let Ve=H(b,ke);te(r.TEXTURE_CUBE_MAP,b);let Re;if(Le){k&&we&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ve,st,ke.width,ke.height);for(let ye=0;ye<6;ye++){Re=Ce[ye].mipmaps;for(let Xe=0;Xe<Re.length;Xe++){const ot=Re[Xe];b.format!==Mi?Ue!==null?k?Ne&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Xe,0,0,ot.width,ot.height,Ue,ot.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Xe,st,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Ne&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Xe,0,0,ot.width,ot.height,Ue,Pe,ot.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Xe,st,ot.width,ot.height,0,Ue,Pe,ot.data)}}}else{if(Re=b.mipmaps,k&&we){Re.length>0&&Ve++;const ye=Vt(Ce[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ve,st,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Me){k?Ne&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ce[ye].width,Ce[ye].height,Ue,Pe,Ce[ye].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,st,Ce[ye].width,Ce[ye].height,0,Ue,Pe,Ce[ye].data);for(let Xe=0;Xe<Re.length;Xe++){const Ot=Re[Xe].image[ye].image;k?Ne&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Xe+1,0,0,Ot.width,Ot.height,Ue,Pe,Ot.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Xe+1,st,Ot.width,Ot.height,0,Ue,Pe,Ot.data)}}else{k?Ne&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ue,Pe,Ce[ye]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,st,Ue,Pe,Ce[ye]);for(let Xe=0;Xe<Re.length;Xe++){const ot=Re[Xe];k?Ne&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Xe+1,0,0,Ue,Pe,ot.image[ye]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Xe+1,st,Ue,Pe,ot.image[ye])}}}S(b)&&_(r.TEXTURE_CUBE_MAP),de.__version=Te.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function Oe(N,b,J,ge,Te,de){const Ke=c.convert(J.format,J.colorSpace),Y=c.convert(J.type),be=L(J.internalFormat,Ke,Y,J.colorSpace),Le=s.get(b),Me=s.get(J);if(Me.__renderTarget=b,!Le.__hasExternalTextures){const Ce=Math.max(1,b.width>>de),ke=Math.max(1,b.height>>de);Te===r.TEXTURE_3D||Te===r.TEXTURE_2D_ARRAY?i.texImage3D(Te,de,be,Ce,ke,b.depth,0,Ke,Y,null):i.texImage2D(Te,de,be,Ce,ke,0,Ke,Y,null)}i.bindFramebuffer(r.FRAMEBUFFER,N),Ge(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ge,Te,Me.__webglTexture,0,Ut(b)):(Te===r.TEXTURE_2D||Te>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Te<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ge,Te,Me.__webglTexture,de),i.bindFramebuffer(r.FRAMEBUFFER,null)}function He(N,b,J){if(r.bindRenderbuffer(r.RENDERBUFFER,N),b.depthBuffer){const ge=b.depthTexture,Te=ge&&ge.isDepthTexture?ge.type:null,de=D(b.stencilBuffer,Te),Ke=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=Ut(b);Ge(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Y,de,b.width,b.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,Y,de,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,de,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ke,r.RENDERBUFFER,N)}else{const ge=b.textures;for(let Te=0;Te<ge.length;Te++){const de=ge[Te],Ke=c.convert(de.format,de.colorSpace),Y=c.convert(de.type),be=L(de.internalFormat,Ke,Y,de.colorSpace),Le=Ut(b);J&&Ge(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Le,be,b.width,b.height):Ge(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Le,be,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,be,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function qe(N,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=s.get(b.depthTexture);ge.__renderTarget=b,(!ge.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),pe(b.depthTexture,0);const Te=ge.__webglTexture,de=Ut(b);if(b.depthTexture.format===el)Ge(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Te,0,de):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Te,0);else if(b.depthTexture.format===tl)Ge(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Te,0,de):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Te,0);else throw new Error("Unknown depthTexture format")}function ct(N){const b=s.get(N),J=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const ge=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ge){const Te=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ge.removeEventListener("dispose",Te)};ge.addEventListener("dispose",Te),b.__depthDisposeCallback=Te}b.__boundDepthTexture=ge}if(N.depthTexture&&!b.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");const ge=N.texture.mipmaps;ge&&ge.length>0?qe(b.__webglFramebuffer[0],N):qe(b.__webglFramebuffer,N)}else if(J){b.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[ge]),b.__webglDepthbuffer[ge]===void 0)b.__webglDepthbuffer[ge]=r.createRenderbuffer(),He(b.__webglDepthbuffer[ge],N,!1);else{const Te=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=b.__webglDepthbuffer[ge];r.bindRenderbuffer(r.RENDERBUFFER,de),r.framebufferRenderbuffer(r.FRAMEBUFFER,Te,r.RENDERBUFFER,de)}}else{const ge=N.texture.mipmaps;if(ge&&ge.length>0?i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),He(b.__webglDepthbuffer,N,!1);else{const Te=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,de),r.framebufferRenderbuffer(r.FRAMEBUFFER,Te,r.RENDERBUFFER,de)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Kt(N,b,J){const ge=s.get(N);b!==void 0&&Oe(ge.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),J!==void 0&&ct(N)}function B(N){const b=N.texture,J=s.get(N),ge=s.get(b);N.addEventListener("dispose",z);const Te=N.textures,de=N.isWebGLCubeRenderTarget===!0,Ke=Te.length>1;if(Ke||(ge.__webglTexture===void 0&&(ge.__webglTexture=r.createTexture()),ge.__version=b.version,f.memory.textures++),de){J.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer[Y]=[];for(let be=0;be<b.mipmaps.length;be++)J.__webglFramebuffer[Y][be]=r.createFramebuffer()}else J.__webglFramebuffer[Y]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer=[];for(let Y=0;Y<b.mipmaps.length;Y++)J.__webglFramebuffer[Y]=r.createFramebuffer()}else J.__webglFramebuffer=r.createFramebuffer();if(Ke)for(let Y=0,be=Te.length;Y<be;Y++){const Le=s.get(Te[Y]);Le.__webglTexture===void 0&&(Le.__webglTexture=r.createTexture(),f.memory.textures++)}if(N.samples>0&&Ge(N)===!1){J.__webglMultisampledFramebuffer=r.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Y=0;Y<Te.length;Y++){const be=Te[Y];J.__webglColorRenderbuffer[Y]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,J.__webglColorRenderbuffer[Y]);const Le=c.convert(be.format,be.colorSpace),Me=c.convert(be.type),Ce=L(be.internalFormat,Le,Me,be.colorSpace,N.isXRRenderTarget===!0),ke=Ut(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,ke,Ce,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Y,r.RENDERBUFFER,J.__webglColorRenderbuffer[Y])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(J.__webglDepthRenderbuffer=r.createRenderbuffer(),He(J.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(de){i.bindTexture(r.TEXTURE_CUBE_MAP,ge.__webglTexture),te(r.TEXTURE_CUBE_MAP,b);for(let Y=0;Y<6;Y++)if(b.mipmaps&&b.mipmaps.length>0)for(let be=0;be<b.mipmaps.length;be++)Oe(J.__webglFramebuffer[Y][be],N,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,be);else Oe(J.__webglFramebuffer[Y],N,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);S(b)&&_(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ke){for(let Y=0,be=Te.length;Y<be;Y++){const Le=Te[Y],Me=s.get(Le);let Ce=r.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ce=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ce,Me.__webglTexture),te(Ce,Le),Oe(J.__webglFramebuffer,N,Le,r.COLOR_ATTACHMENT0+Y,Ce,0),S(Le)&&_(Ce)}i.unbindTexture()}else{let Y=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Y=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Y,ge.__webglTexture),te(Y,b),b.mipmaps&&b.mipmaps.length>0)for(let be=0;be<b.mipmaps.length;be++)Oe(J.__webglFramebuffer[be],N,b,r.COLOR_ATTACHMENT0,Y,be);else Oe(J.__webglFramebuffer,N,b,r.COLOR_ATTACHMENT0,Y,0);S(b)&&_(Y),i.unbindTexture()}N.depthBuffer&&ct(N)}function Mt(N){const b=N.textures;for(let J=0,ge=b.length;J<ge;J++){const Te=b[J];if(S(Te)){const de=U(N),Ke=s.get(Te).__webglTexture;i.bindTexture(de,Ke),_(de),i.unbindTexture()}}}const it=[],tt=[];function je(N){if(N.samples>0){if(Ge(N)===!1){const b=N.textures,J=N.width,ge=N.height;let Te=r.COLOR_BUFFER_BIT;const de=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ke=s.get(N),Y=b.length>1;if(Y)for(let Le=0;Le<b.length;Le++)i.bindFramebuffer(r.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Ke.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer);const be=N.texture.mipmaps;be&&be.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let Le=0;Le<b.length;Le++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Te|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Te|=r.STENCIL_BUFFER_BIT)),Y){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ke.__webglColorRenderbuffer[Le]);const Me=s.get(b[Le]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Me,0)}r.blitFramebuffer(0,0,J,ge,0,0,J,ge,Te,r.NEAREST),m===!0&&(it.length=0,tt.length=0,it.push(r.COLOR_ATTACHMENT0+Le),N.depthBuffer&&N.resolveDepthBuffer===!1&&(it.push(de),tt.push(de),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,tt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,it))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Y)for(let Le=0;Le<b.length;Le++){i.bindFramebuffer(r.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.RENDERBUFFER,Ke.__webglColorRenderbuffer[Le]);const Me=s.get(b[Le]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Ke.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.TEXTURE_2D,Me,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const b=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function Ut(N){return Math.min(l.maxSamples,N.samples)}function Ge(N){const b=s.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function rt(N){const b=f.render.frame;v.get(N)!==b&&(v.set(N,b),N.update())}function Wt(N,b){const J=N.colorSpace,ge=N.format,Te=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||J!==Bs&&J!==Ya&&(wt.getTransfer(J)===Ht?(ge!==Mi||Te!==pa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),b}function Vt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=he,this.resetTextureUnits=ne,this.setTexture2D=pe,this.setTexture2DArray=P,this.setTexture3D=K,this.setTextureCube=q,this.rebindTextures=Kt,this.setupRenderTarget=B,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=Ge}function hw(r,e){function i(s,l=Ya){let c;const f=wt.getTransfer(l);if(s===pa)return r.UNSIGNED_BYTE;if(s===up)return r.UNSIGNED_SHORT_4_4_4_4;if(s===fp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===$0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===ex)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Q0)return r.BYTE;if(s===J0)return r.SHORT;if(s===Jo)return r.UNSIGNED_SHORT;if(s===cp)return r.INT;if(s===Ur)return r.UNSIGNED_INT;if(s===la)return r.FLOAT;if(s===ol)return r.HALF_FLOAT;if(s===tx)return r.ALPHA;if(s===nx)return r.RGB;if(s===Mi)return r.RGBA;if(s===el)return r.DEPTH_COMPONENT;if(s===tl)return r.DEPTH_STENCIL;if(s===ix)return r.RED;if(s===hp)return r.RED_INTEGER;if(s===ax)return r.RG;if(s===dp)return r.RG_INTEGER;if(s===pp)return r.RGBA_INTEGER;if(s===Kc||s===Qc||s===Jc||s===$c)if(f===Ht)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Kc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Kc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Qc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Jc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===$c)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Td||s===Ad||s===Rd||s===Cd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Td)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ad)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Rd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Cd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===wd||s===Dd||s===Ud)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===wd||s===Dd)return f===Ht?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Ud)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ld||s===Nd||s===Od||s===Pd||s===zd||s===Id||s===Bd||s===Fd||s===Hd||s===Gd||s===Vd||s===kd||s===Xd||s===Wd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Ld)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Nd)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Od)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Pd)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===zd)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Id)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Bd)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Fd)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Hd)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Gd)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Vd)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===kd)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Xd)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Wd)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===qd||s===jd||s===Yd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===qd)return f===Ht?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===jd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Yd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Zd||s===Kd||s===Qd||s===Jd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Zd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Kd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Qd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Jd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===$o?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const dw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pw=`
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

}`;class mw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new _x(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new pi({vertexShader:dw,fragmentShader:pw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Pi(new pu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gw extends Vs{constructor(e,i){super();const s=this;let l=null,c=1,f=null,d="local-floor",m=1,p=null,v=null,g=null,x=null,M=null,E=null;const T=typeof XRWebGLBinding<"u",S=new mw,_={},U=i.getContextAttributes();let L=null,D=null;const H=[],F=[],z=new Gt;let Q=null;const w=new di;w.viewport=new an;const C=new di;C.viewport=new an;const G=[w,C],ne=new IT;let he=null,_e=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let fe=H[re];return fe===void 0&&(fe=new ed,H[re]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(re){let fe=H[re];return fe===void 0&&(fe=new ed,H[re]=fe),fe.getGripSpace()},this.getHand=function(re){let fe=H[re];return fe===void 0&&(fe=new ed,H[re]=fe),fe.getHandSpace()};function pe(re){const fe=F.indexOf(re.inputSource);if(fe===-1)return;const Oe=H[fe];Oe!==void 0&&(Oe.update(re.inputSource,re.frame,p||f),Oe.dispatchEvent({type:re.type,data:re.inputSource}))}function P(){l.removeEventListener("select",pe),l.removeEventListener("selectstart",pe),l.removeEventListener("selectend",pe),l.removeEventListener("squeeze",pe),l.removeEventListener("squeezestart",pe),l.removeEventListener("squeezeend",pe),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",K);for(let re=0;re<H.length;re++){const fe=F[re];fe!==null&&(F[re]=null,H[re].disconnect(fe))}he=null,_e=null,S.reset();for(const re in _)delete _[re];e.setRenderTarget(L),M=null,x=null,g=null,l=null,D=null,ze.stop(),s.isPresenting=!1,e.setPixelRatio(Q),e.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){c=re,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){d=re,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(re){p=re},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return g===null&&T&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(re){if(l=re,l!==null){if(L=e.getRenderTarget(),l.addEventListener("select",pe),l.addEventListener("selectstart",pe),l.addEventListener("selectend",pe),l.addEventListener("squeeze",pe),l.addEventListener("squeezestart",pe),l.addEventListener("squeezeend",pe),l.addEventListener("end",P),l.addEventListener("inputsourceschange",K),U.xrCompatible!==!0&&await i.makeXRCompatible(),Q=e.getPixelRatio(),e.getSize(z),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Oe=null,He=null,qe=null;U.depth&&(qe=U.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Oe=U.stencil?tl:el,He=U.stencil?$o:Ur);const ct={colorFormat:i.RGBA8,depthFormat:qe,scaleFactor:c};g=this.getBinding(),x=g.createProjectionLayer(ct),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),D=new Lr(x.textureWidth,x.textureHeight,{format:Mi,type:pa,depthTexture:new vx(x.textureWidth,x.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,Oe),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Oe={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Oe),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new Lr(M.framebufferWidth,M.framebufferHeight,{format:Mi,type:pa,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),ze.setContext(l),ze.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function K(re){for(let fe=0;fe<re.removed.length;fe++){const Oe=re.removed[fe],He=F.indexOf(Oe);He>=0&&(F[He]=null,H[He].disconnect(Oe))}for(let fe=0;fe<re.added.length;fe++){const Oe=re.added[fe];let He=F.indexOf(Oe);if(He===-1){for(let ct=0;ct<H.length;ct++)if(ct>=F.length){F.push(Oe),He=ct;break}else if(F[ct]===null){F[ct]=Oe,He=ct;break}if(He===-1)break}const qe=H[He];qe&&qe.connect(Oe)}}const q=new se,Ee=new se;function X(re,fe,Oe){q.setFromMatrixPosition(fe.matrixWorld),Ee.setFromMatrixPosition(Oe.matrixWorld);const He=q.distanceTo(Ee),qe=fe.projectionMatrix.elements,ct=Oe.projectionMatrix.elements,Kt=qe[14]/(qe[10]-1),B=qe[14]/(qe[10]+1),Mt=(qe[9]+1)/qe[5],it=(qe[9]-1)/qe[5],tt=(qe[8]-1)/qe[0],je=(ct[8]+1)/ct[0],Ut=Kt*tt,Ge=Kt*je,rt=He/(-tt+je),Wt=rt*-tt;if(fe.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(Wt),re.translateZ(rt),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),qe[10]===-1)re.projectionMatrix.copy(fe.projectionMatrix),re.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Vt=Kt+rt,N=B+rt,b=Ut-Wt,J=Ge+(He-Wt),ge=Mt*B/N*Vt,Te=it*B/N*Vt;re.projectionMatrix.makePerspective(b,J,ge,Te,Vt,N),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function O(re,fe){fe===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(fe.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(l===null)return;let fe=re.near,Oe=re.far;S.texture!==null&&(S.depthNear>0&&(fe=S.depthNear),S.depthFar>0&&(Oe=S.depthFar)),ne.near=C.near=w.near=fe,ne.far=C.far=w.far=Oe,(he!==ne.near||_e!==ne.far)&&(l.updateRenderState({depthNear:ne.near,depthFar:ne.far}),he=ne.near,_e=ne.far),ne.layers.mask=re.layers.mask|6,w.layers.mask=ne.layers.mask&3,C.layers.mask=ne.layers.mask&5;const He=re.parent,qe=ne.cameras;O(ne,He);for(let ct=0;ct<qe.length;ct++)O(qe[ct],He);qe.length===2?X(ne,w,C):ne.projectionMatrix.copy(w.projectionMatrix),te(re,ne,He)};function te(re,fe,Oe){Oe===null?re.matrix.copy(fe.matrixWorld):(re.matrix.copy(Oe.matrixWorld),re.matrix.invert(),re.matrix.multiply(fe.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(fe.projectionMatrix),re.projectionMatrixInverse.copy(fe.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=nl*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return ne},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(re){m=re,x!==null&&(x.fixedFoveation=re),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=re)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(ne)},this.getCameraTexture=function(re){return _[re]};let Ae=null;function De(re,fe){if(v=fe.getViewerPose(p||f),E=fe,v!==null){const Oe=v.views;M!==null&&(e.setRenderTargetFramebuffer(D,M.framebuffer),e.setRenderTarget(D));let He=!1;Oe.length!==ne.cameras.length&&(ne.cameras.length=0,He=!0);for(let B=0;B<Oe.length;B++){const Mt=Oe[B];let it=null;if(M!==null)it=M.getViewport(Mt);else{const je=g.getViewSubImage(x,Mt);it=je.viewport,B===0&&(e.setRenderTargetTextures(D,je.colorTexture,je.depthStencilTexture),e.setRenderTarget(D))}let tt=G[B];tt===void 0&&(tt=new di,tt.layers.enable(B),tt.viewport=new an,G[B]=tt),tt.matrix.fromArray(Mt.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(Mt.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(it.x,it.y,it.width,it.height),B===0&&(ne.matrix.copy(tt.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale)),He===!0&&ne.cameras.push(tt)}const qe=l.enabledFeatures;if(qe&&qe.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){g=s.getBinding();const B=g.getDepthInformation(Oe[0]);B&&B.isValid&&B.texture&&S.init(B,l.renderState)}if(qe&&qe.includes("camera-access")&&T){e.state.unbindTexture(),g=s.getBinding();for(let B=0;B<Oe.length;B++){const Mt=Oe[B].camera;if(Mt){let it=_[Mt];it||(it=new _x,_[Mt]=it);const tt=g.getCameraImage(Mt);it.sourceTexture=tt}}}}for(let Oe=0;Oe<H.length;Oe++){const He=F[Oe],qe=H[Oe];He!==null&&qe!==void 0&&qe.update(He,fe,p||f)}Ae&&Ae(re,fe),fe.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:fe}),E=null}const ze=new xx;ze.setAnimationLoop(De),this.setAnimationLoop=function(re){Ae=re},this.dispose=function(){}}}const Er=new ma,vw=new rn;function _w(r,e){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function s(S,_){_.color.getRGB(S.fogColor.value,dx(r)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,U,L,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(S,_):_.isMeshToonMaterial?(c(S,_),g(S,_)):_.isMeshPhongMaterial?(c(S,_),v(S,_)):_.isMeshStandardMaterial?(c(S,_),x(S,_),_.isMeshPhysicalMaterial&&M(S,_,D)):_.isMeshMatcapMaterial?(c(S,_),E(S,_)):_.isMeshDepthMaterial?c(S,_):_.isMeshDistanceMaterial?(c(S,_),T(S,_)):_.isMeshNormalMaterial?c(S,_):_.isLineBasicMaterial?(f(S,_),_.isLineDashedMaterial&&d(S,_)):_.isPointsMaterial?m(S,_,U,L):_.isSpriteMaterial?p(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===kn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===kn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const U=e.get(_),L=U.envMap,D=U.envMapRotation;L&&(S.envMap.value=L,Er.copy(D),Er.x*=-1,Er.y*=-1,Er.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),S.envMapRotation.value.setFromMatrix4(vw.makeRotationFromEuler(Er)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function f(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function d(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function m(S,_,U,L){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*U,S.scale.value=L*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function v(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function g(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function x(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function M(S,_,U){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===kn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=U.texture,S.transmissionSamplerSize.value.set(U.width,U.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,_){_.matcap&&(S.matcap.value=_.matcap)}function T(S,_){const U=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(U.matrixWorld),S.nearDistance.value=U.shadow.camera.near,S.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function xw(r,e,i,s){let l={},c={},f=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(U,L){const D=L.program;s.uniformBlockBinding(U,D)}function p(U,L){let D=l[U.id];D===void 0&&(E(U),D=v(U),l[U.id]=D,U.addEventListener("dispose",S));const H=L.program;s.updateUBOMapping(U,H);const F=e.render.frame;c[U.id]!==F&&(x(U),c[U.id]=F)}function v(U){const L=g();U.__bindingPointIndex=L;const D=r.createBuffer(),H=U.__size,F=U.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,H,F),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,D),D}function g(){for(let U=0;U<d;U++)if(f.indexOf(U)===-1)return f.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(U){const L=l[U.id],D=U.uniforms,H=U.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let F=0,z=D.length;F<z;F++){const Q=Array.isArray(D[F])?D[F]:[D[F]];for(let w=0,C=Q.length;w<C;w++){const G=Q[w];if(M(G,F,w,H)===!0){const ne=G.__offset,he=Array.isArray(G.value)?G.value:[G.value];let _e=0;for(let pe=0;pe<he.length;pe++){const P=he[pe],K=T(P);typeof P=="number"||typeof P=="boolean"?(G.__data[0]=P,r.bufferSubData(r.UNIFORM_BUFFER,ne+_e,G.__data)):P.isMatrix3?(G.__data[0]=P.elements[0],G.__data[1]=P.elements[1],G.__data[2]=P.elements[2],G.__data[3]=0,G.__data[4]=P.elements[3],G.__data[5]=P.elements[4],G.__data[6]=P.elements[5],G.__data[7]=0,G.__data[8]=P.elements[6],G.__data[9]=P.elements[7],G.__data[10]=P.elements[8],G.__data[11]=0):(P.toArray(G.__data,_e),_e+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ne,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(U,L,D,H){const F=U.value,z=L+"_"+D;if(H[z]===void 0)return typeof F=="number"||typeof F=="boolean"?H[z]=F:H[z]=F.clone(),!0;{const Q=H[z];if(typeof F=="number"||typeof F=="boolean"){if(Q!==F)return H[z]=F,!0}else if(Q.equals(F)===!1)return Q.copy(F),!0}return!1}function E(U){const L=U.uniforms;let D=0;const H=16;for(let z=0,Q=L.length;z<Q;z++){const w=Array.isArray(L[z])?L[z]:[L[z]];for(let C=0,G=w.length;C<G;C++){const ne=w[C],he=Array.isArray(ne.value)?ne.value:[ne.value];for(let _e=0,pe=he.length;_e<pe;_e++){const P=he[_e],K=T(P),q=D%H,Ee=q%K.boundary,X=q+Ee;D+=Ee,X!==0&&H-X<K.storage&&(D+=H-X),ne.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=D,D+=K.storage}}}const F=D%H;return F>0&&(D+=H-F),U.__size=D,U.__cache={},this}function T(U){const L={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(L.boundary=4,L.storage=4):U.isVector2?(L.boundary=8,L.storage=8):U.isVector3||U.isColor?(L.boundary=16,L.storage=12):U.isVector4?(L.boundary=16,L.storage=16):U.isMatrix3?(L.boundary=48,L.storage=48):U.isMatrix4?(L.boundary=64,L.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),L}function S(U){const L=U.target;L.removeEventListener("dispose",S);const D=f.indexOf(L.__bindingPointIndex);f.splice(D,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function _(){for(const U in l)r.deleteBuffer(l[U]);f=[],l={},c={}}return{bind:m,update:p,dispose:_}}class yw{constructor(e={}){const{canvas:i=tT(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=f;const E=new Uint32Array(4),T=new Int32Array(4);let S=null,_=null;const U=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ka,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let H=!1;this._outputColorSpace=hi;let F=0,z=0,Q=null,w=-1,C=null;const G=new an,ne=new an;let he=null;const _e=new bt(0);let pe=0,P=i.width,K=i.height,q=1,Ee=null,X=null;const O=new an(0,0,P,K),te=new an(0,0,P,K);let Ae=!1;const De=new gx;let ze=!1,re=!1;const fe=new rn,Oe=new se,He=new an,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function Kt(){return Q===null?q:1}let B=s;function Mt(R,W){return i.getContext(R,W)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${lp}`),i.addEventListener("webglcontextlost",Ne,!1),i.addEventListener("webglcontextrestored",Ve,!1),i.addEventListener("webglcontextcreationerror",Re,!1),B===null){const W="webgl2";if(B=Mt(W,R),B===null)throw Mt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let it,tt,je,Ut,Ge,rt,Wt,Vt,N,b,J,ge,Te,de,Ke,Y,be,Le,Me,Ce,ke,Ue,Pe,st;function k(){it=new DR(B),it.init(),Ue=new hw(B,it),tt=new ER(B,it,e,Ue),je=new uw(B,it),tt.reversedDepthBuffer&&x&&je.buffers.depth.setReversed(!0),Ut=new NR(B),Ge=new QC,rt=new fw(B,it,je,Ge,tt,Ue,Ut),Wt=new TR(D),Vt=new wR(D),N=new FT(B),Pe=new SR(B,N),b=new UR(B,N,Ut,Pe),J=new PR(B,b,N,Ut),Me=new OR(B,tt,rt),Y=new bR(Ge),ge=new KC(D,Wt,Vt,it,tt,Pe,Y),Te=new _w(D,Ge),de=new $C,Ke=new rw(it),Le=new yR(D,Wt,Vt,je,J,M,m),be=new lw(D,J,tt),st=new xw(B,Ut,tt,je),Ce=new MR(B,it,Ut),ke=new LR(B,it,Ut),Ut.programs=ge.programs,D.capabilities=tt,D.extensions=it,D.properties=Ge,D.renderLists=de,D.shadowMap=be,D.state=je,D.info=Ut}k();const we=new gw(D,B);this.xr=we,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const R=it.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=it.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(R){R!==void 0&&(q=R,this.setSize(P,K,!1))},this.getSize=function(R){return R.set(P,K)},this.setSize=function(R,W,oe=!0){if(we.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=R,K=W,i.width=Math.floor(R*q),i.height=Math.floor(W*q),oe===!0&&(i.style.width=R+"px",i.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(P*q,K*q).floor()},this.setDrawingBufferSize=function(R,W,oe){P=R,K=W,q=oe,i.width=Math.floor(R*oe),i.height=Math.floor(W*oe),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(G)},this.getViewport=function(R){return R.copy(O)},this.setViewport=function(R,W,oe,le){R.isVector4?O.set(R.x,R.y,R.z,R.w):O.set(R,W,oe,le),je.viewport(G.copy(O).multiplyScalar(q).round())},this.getScissor=function(R){return R.copy(te)},this.setScissor=function(R,W,oe,le){R.isVector4?te.set(R.x,R.y,R.z,R.w):te.set(R,W,oe,le),je.scissor(ne.copy(te).multiplyScalar(q).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(R){je.setScissorTest(Ae=R)},this.setOpaqueSort=function(R){Ee=R},this.setTransparentSort=function(R){X=R},this.getClearColor=function(R){return R.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,oe=!0){let le=0;if(R){let Z=!1;if(Q!==null){const Se=Q.texture.format;Z=Se===pp||Se===dp||Se===hp}if(Z){const Se=Q.texture.type,Ie=Se===pa||Se===Ur||Se===Jo||Se===$o||Se===up||Se===fp,Ye=Le.getClearColor(),Fe=Le.getClearAlpha(),Je=Ye.r,at=Ye.g,$e=Ye.b;Ie?(E[0]=Je,E[1]=at,E[2]=$e,E[3]=Fe,B.clearBufferuiv(B.COLOR,0,E)):(T[0]=Je,T[1]=at,T[2]=$e,T[3]=Fe,B.clearBufferiv(B.COLOR,0,T))}else le|=B.COLOR_BUFFER_BIT}W&&(le|=B.DEPTH_BUFFER_BIT),oe&&(le|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ne,!1),i.removeEventListener("webglcontextrestored",Ve,!1),i.removeEventListener("webglcontextcreationerror",Re,!1),Le.dispose(),de.dispose(),Ke.dispose(),Ge.dispose(),Wt.dispose(),Vt.dispose(),J.dispose(),Pe.dispose(),st.dispose(),ge.dispose(),we.dispose(),we.removeEventListener("sessionstart",ni),we.removeEventListener("sessionend",qs),Ai.stop()};function Ne(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function Ve(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const R=Ut.autoReset,W=be.enabled,oe=be.autoUpdate,le=be.needsUpdate,Z=be.type;k(),Ut.autoReset=R,be.enabled=W,be.autoUpdate=oe,be.needsUpdate=le,be.type=Z}function Re(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ye(R){const W=R.target;W.removeEventListener("dispose",ye),Xe(W)}function Xe(R){ot(R),Ge.remove(R)}function ot(R){const W=Ge.get(R).programs;W!==void 0&&(W.forEach(function(oe){ge.releaseProgram(oe)}),R.isShaderMaterial&&ge.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,oe,le,Z,Se){W===null&&(W=qe);const Ie=Z.isMesh&&Z.matrixWorld.determinant()<0,Ye=_a(R,W,oe,le,Z);je.setMaterial(le,Ie);let Fe=oe.index,Je=1;if(le.wireframe===!0){if(Fe=b.getWireframeAttribute(oe),Fe===void 0)return;Je=2}const at=oe.drawRange,$e=oe.attributes.position;let pt=at.start*Je,Lt=(at.start+at.count)*Je;Se!==null&&(pt=Math.max(pt,Se.start*Je),Lt=Math.min(Lt,(Se.start+Se.count)*Je)),Fe!==null?(pt=Math.max(pt,0),Lt=Math.min(Lt,Fe.count)):$e!=null&&(pt=Math.max(pt,0),Lt=Math.min(Lt,$e.count));const kt=Lt-pt;if(kt<0||kt===1/0)return;Pe.setup(Z,le,Ye,oe,Fe);let Nt,mt=Ce;if(Fe!==null&&(Nt=N.get(Fe),mt=ke,mt.setIndex(Nt)),Z.isMesh)le.wireframe===!0?(je.setLineWidth(le.wireframeLinewidth*Kt()),mt.setMode(B.LINES)):mt.setMode(B.TRIANGLES);else if(Z.isLine){let Ze=le.linewidth;Ze===void 0&&(Ze=1),je.setLineWidth(Ze*Kt()),Z.isLineSegments?mt.setMode(B.LINES):Z.isLineLoop?mt.setMode(B.LINE_LOOP):mt.setMode(B.LINE_STRIP)}else Z.isPoints?mt.setMode(B.POINTS):Z.isSprite&&mt.setMode(B.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)il("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),mt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))mt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Ze=Z._multiDrawStarts,qt=Z._multiDrawCounts,At=Z._multiDrawCount,yn=Fe?N.get(Fe).bytesPerElement:1,Ii=Ge.get(le).currentProgram.getUniforms();for(let gn=0;gn<At;gn++)Ii.setValue(B,"_gl_DrawID",gn),mt.render(Ze[gn]/yn,qt[gn])}else if(Z.isInstancedMesh)mt.renderInstances(pt,kt,Z.count);else if(oe.isInstancedBufferGeometry){const Ze=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,qt=Math.min(oe.instanceCount,Ze);mt.renderInstances(pt,kt,qt)}else mt.render(pt,kt)};function Ot(R,W,oe){R.transparent===!0&&R.side===oa&&R.forceSinglePass===!1?(R.side=kn,R.needsUpdate=!0,Wn(R,W,oe),R.side=Qa,R.needsUpdate=!0,Wn(R,W,oe),R.side=oa):Wn(R,W,oe)}this.compile=function(R,W,oe=null){oe===null&&(oe=R),_=Ke.get(oe),_.init(W),L.push(_),oe.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),R!==oe&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),_.setupLights();const le=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Se=Z.material;if(Se)if(Array.isArray(Se))for(let Ie=0;Ie<Se.length;Ie++){const Ye=Se[Ie];Ot(Ye,oe,Z),le.add(Ye)}else Ot(Se,oe,Z),le.add(Se)}),_=L.pop(),le},this.compileAsync=function(R,W,oe=null){const le=this.compile(R,W,oe);return new Promise(Z=>{function Se(){if(le.forEach(function(Ie){Ge.get(Ie).currentProgram.isReady()&&le.delete(Ie)}),le.size===0){Z(R);return}setTimeout(Se,10)}it.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Tt=null;function wn(R){Tt&&Tt(R)}function ni(){Ai.stop()}function qs(){Ai.start()}const Ai=new xx;Ai.setAnimationLoop(wn),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(R){Tt=R,we.setAnimationLoop(R),R===null?Ai.stop():Ai.start()},we.addEventListener("sessionstart",ni),we.addEventListener("sessionend",qs),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(W),W=we.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,W,Q),_=Ke.get(R,L.length),_.init(W),L.push(_),fe.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),De.setFromProjectionMatrix(fe,Oi,W.reversedDepth),re=this.localClippingEnabled,ze=Y.init(this.clippingPlanes,re),S=de.get(R,U.length),S.init(),U.push(S),we.enabled===!0&&we.isPresenting===!0){const Se=D.xr.getDepthSensingMesh();Se!==null&&Nr(Se,W,-1/0,D.sortObjects)}Nr(R,W,0,D.sortObjects),S.finish(),D.sortObjects===!0&&S.sort(Ee,X),ct=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,ct&&Le.addToRenderList(S,R),this.info.render.frame++,ze===!0&&Y.beginShadows();const oe=_.state.shadowsArray;be.render(oe,R,W),ze===!0&&Y.endShadows(),this.info.autoReset===!0&&this.info.reset();const le=S.opaque,Z=S.transmissive;if(_.setupLights(),W.isArrayCamera){const Se=W.cameras;if(Z.length>0)for(let Ie=0,Ye=Se.length;Ie<Ye;Ie++){const Fe=Se[Ie];Pr(le,Z,R,Fe)}ct&&Le.render(R);for(let Ie=0,Ye=Se.length;Ie<Ye;Ie++){const Fe=Se[Ie];Or(S,R,Fe,Fe.viewport)}}else Z.length>0&&Pr(le,Z,R,W),ct&&Le.render(R),Or(S,R,W);Q!==null&&z===0&&(rt.updateMultisampleRenderTarget(Q),rt.updateRenderTargetMipmap(Q)),R.isScene===!0&&R.onAfterRender(D,R,W),Pe.resetDefaultState(),w=-1,C=null,L.pop(),L.length>0?(_=L[L.length-1],ze===!0&&Y.setGlobalState(D.clippingPlanes,_.state.camera)):_=null,U.pop(),U.length>0?S=U[U.length-1]:S=null};function Nr(R,W,oe,le){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)oe=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||De.intersectsSprite(R)){le&&He.setFromMatrixPosition(R.matrixWorld).applyMatrix4(fe);const Ie=J.update(R),Ye=R.material;Ye.visible&&S.push(R,Ie,Ye,oe,He.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||De.intersectsObject(R))){const Ie=J.update(R),Ye=R.material;if(le&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),He.copy(R.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),He.copy(Ie.boundingSphere.center)),He.applyMatrix4(R.matrixWorld).applyMatrix4(fe)),Array.isArray(Ye)){const Fe=Ie.groups;for(let Je=0,at=Fe.length;Je<at;Je++){const $e=Fe[Je],pt=Ye[$e.materialIndex];pt&&pt.visible&&S.push(R,Ie,pt,oe,He.z,$e)}}else Ye.visible&&S.push(R,Ie,Ye,oe,He.z,null)}}const Se=R.children;for(let Ie=0,Ye=Se.length;Ie<Ye;Ie++)Nr(Se[Ie],W,oe,le)}function Or(R,W,oe,le){const Z=R.opaque,Se=R.transmissive,Ie=R.transparent;_.setupLightsView(oe),ze===!0&&Y.setGlobalState(D.clippingPlanes,oe),le&&je.viewport(G.copy(le)),Z.length>0&&$a(Z,W,oe),Se.length>0&&$a(Se,W,oe),Ie.length>0&&$a(Ie,W,oe),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function Pr(R,W,oe,le){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[le.id]===void 0&&(_.state.transmissionRenderTarget[le.id]=new Lr(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?ol:pa,minFilter:wr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const Se=_.state.transmissionRenderTarget[le.id],Ie=le.viewport||G;Se.setSize(Ie.z*D.transmissionResolutionScale,Ie.w*D.transmissionResolutionScale);const Ye=D.getRenderTarget(),Fe=D.getActiveCubeFace(),Je=D.getActiveMipmapLevel();D.setRenderTarget(Se),D.getClearColor(_e),pe=D.getClearAlpha(),pe<1&&D.setClearColor(16777215,.5),D.clear(),ct&&Le.render(oe);const at=D.toneMapping;D.toneMapping=Ka;const $e=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),_.setupLightsView(le),ze===!0&&Y.setGlobalState(D.clippingPlanes,le),$a(R,oe,le),rt.updateMultisampleRenderTarget(Se),rt.updateRenderTargetMipmap(Se),it.has("WEBGL_multisampled_render_to_texture")===!1){let pt=!1;for(let Lt=0,kt=W.length;Lt<kt;Lt++){const Nt=W[Lt],mt=Nt.object,Ze=Nt.geometry,qt=Nt.material,At=Nt.group;if(qt.side===oa&&mt.layers.test(le.layers)){const yn=qt.side;qt.side=kn,qt.needsUpdate=!0,js(mt,oe,le,Ze,qt,At),qt.side=yn,qt.needsUpdate=!0,pt=!0}}pt===!0&&(rt.updateMultisampleRenderTarget(Se),rt.updateRenderTargetMipmap(Se))}D.setRenderTarget(Ye,Fe,Je),D.setClearColor(_e,pe),$e!==void 0&&(le.viewport=$e),D.toneMapping=at}function $a(R,W,oe){const le=W.isScene===!0?W.overrideMaterial:null;for(let Z=0,Se=R.length;Z<Se;Z++){const Ie=R[Z],Ye=Ie.object,Fe=Ie.geometry,Je=Ie.group;let at=Ie.material;at.allowOverride===!0&&le!==null&&(at=le),Ye.layers.test(oe.layers)&&js(Ye,W,oe,Fe,at,Je)}}function js(R,W,oe,le,Z,Se){R.onBeforeRender(D,W,oe,le,Z,Se),R.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(D,W,oe,le,R,Se),Z.transparent===!0&&Z.side===oa&&Z.forceSinglePass===!1?(Z.side=kn,Z.needsUpdate=!0,D.renderBufferDirect(oe,W,le,Z,R,Se),Z.side=Qa,Z.needsUpdate=!0,D.renderBufferDirect(oe,W,le,Z,R,Se),Z.side=oa):D.renderBufferDirect(oe,W,le,Z,R,Se),R.onAfterRender(D,W,oe,le,Z,Se)}function Wn(R,W,oe){W.isScene!==!0&&(W=qe);const le=Ge.get(R),Z=_.state.lights,Se=_.state.shadowsArray,Ie=Z.state.version,Ye=ge.getParameters(R,Z.state,Se,W,oe),Fe=ge.getProgramCacheKey(Ye);let Je=le.programs;le.environment=R.isMeshStandardMaterial?W.environment:null,le.fog=W.fog,le.envMap=(R.isMeshStandardMaterial?Vt:Wt).get(R.envMap||le.environment),le.envMapRotation=le.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,Je===void 0&&(R.addEventListener("dispose",ye),Je=new Map,le.programs=Je);let at=Je.get(Fe);if(at!==void 0){if(le.currentProgram===at&&le.lightsStateVersion===Ie)return xn(R,Ye),at}else Ye.uniforms=ge.getUniforms(R),R.onBeforeCompile(Ye,D),at=ge.acquireProgram(Ye,Fe),Je.set(Fe,at),le.uniforms=Ye.uniforms;const $e=le.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&($e.clippingPlanes=Y.uniform),xn(R,Ye),le.needsLights=gu(R),le.lightsStateVersion=Ie,le.needsLights&&($e.ambientLightColor.value=Z.state.ambient,$e.lightProbe.value=Z.state.probe,$e.directionalLights.value=Z.state.directional,$e.directionalLightShadows.value=Z.state.directionalShadow,$e.spotLights.value=Z.state.spot,$e.spotLightShadows.value=Z.state.spotShadow,$e.rectAreaLights.value=Z.state.rectArea,$e.ltc_1.value=Z.state.rectAreaLTC1,$e.ltc_2.value=Z.state.rectAreaLTC2,$e.pointLights.value=Z.state.point,$e.pointLightShadows.value=Z.state.pointShadow,$e.hemisphereLights.value=Z.state.hemi,$e.directionalShadowMap.value=Z.state.directionalShadowMap,$e.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,$e.spotShadowMap.value=Z.state.spotShadowMap,$e.spotLightMatrix.value=Z.state.spotLightMatrix,$e.spotLightMap.value=Z.state.spotLightMap,$e.pointShadowMap.value=Z.state.pointShadowMap,$e.pointShadowMatrix.value=Z.state.pointShadowMatrix),le.currentProgram=at,le.uniformsList=null,at}function sn(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=eu.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function xn(R,W){const oe=Ge.get(R);oe.outputColorSpace=W.outputColorSpace,oe.batching=W.batching,oe.batchingColor=W.batchingColor,oe.instancing=W.instancing,oe.instancingColor=W.instancingColor,oe.instancingMorph=W.instancingMorph,oe.skinning=W.skinning,oe.morphTargets=W.morphTargets,oe.morphNormals=W.morphNormals,oe.morphColors=W.morphColors,oe.morphTargetsCount=W.morphTargetsCount,oe.numClippingPlanes=W.numClippingPlanes,oe.numIntersection=W.numClipIntersection,oe.vertexAlphas=W.vertexAlphas,oe.vertexTangents=W.vertexTangents,oe.toneMapping=W.toneMapping}function _a(R,W,oe,le,Z){W.isScene!==!0&&(W=qe),rt.resetTextureUnits();const Se=W.fog,Ie=le.isMeshStandardMaterial?W.environment:null,Ye=Q===null?D.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Bs,Fe=(le.isMeshStandardMaterial?Vt:Wt).get(le.envMap||Ie),Je=le.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,at=!!oe.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),$e=!!oe.morphAttributes.position,pt=!!oe.morphAttributes.normal,Lt=!!oe.morphAttributes.color;let kt=Ka;le.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(kt=D.toneMapping);const Nt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,mt=Nt!==void 0?Nt.length:0,Ze=Ge.get(le),qt=_.state.lights;if(ze===!0&&(re===!0||R!==C)){const hn=R===C&&le.id===w;Y.setState(le,R,hn)}let At=!1;le.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==qt.state.version||Ze.outputColorSpace!==Ye||Z.isBatchedMesh&&Ze.batching===!1||!Z.isBatchedMesh&&Ze.batching===!0||Z.isBatchedMesh&&Ze.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Ze.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Ze.instancing===!1||!Z.isInstancedMesh&&Ze.instancing===!0||Z.isSkinnedMesh&&Ze.skinning===!1||!Z.isSkinnedMesh&&Ze.skinning===!0||Z.isInstancedMesh&&Ze.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ze.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ze.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ze.instancingMorph===!1&&Z.morphTexture!==null||Ze.envMap!==Fe||le.fog===!0&&Ze.fog!==Se||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Y.numPlanes||Ze.numIntersection!==Y.numIntersection)||Ze.vertexAlphas!==Je||Ze.vertexTangents!==at||Ze.morphTargets!==$e||Ze.morphNormals!==pt||Ze.morphColors!==Lt||Ze.toneMapping!==kt||Ze.morphTargetsCount!==mt)&&(At=!0):(At=!0,Ze.__version=le.version);let yn=Ze.currentProgram;At===!0&&(yn=Wn(le,W,Z));let Ii=!1,gn=!1,tr=!1;const _t=yn.getUniforms(),Tn=Ze.uniforms;if(je.useProgram(yn.program)&&(Ii=!0,gn=!0,tr=!0),le.id!==w&&(w=le.id,gn=!0),Ii||C!==R){je.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),_t.setValue(B,"projectionMatrix",R.projectionMatrix),_t.setValue(B,"viewMatrix",R.matrixWorldInverse);const en=_t.map.cameraPosition;en!==void 0&&en.setValue(B,Oe.setFromMatrixPosition(R.matrixWorld)),tt.logarithmicDepthBuffer&&_t.setValue(B,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&_t.setValue(B,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,gn=!0,tr=!0)}if(Z.isSkinnedMesh){_t.setOptional(B,Z,"bindMatrix"),_t.setOptional(B,Z,"bindMatrixInverse");const hn=Z.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),_t.setValue(B,"boneTexture",hn.boneTexture,rt))}Z.isBatchedMesh&&(_t.setOptional(B,Z,"batchingTexture"),_t.setValue(B,"batchingTexture",Z._matricesTexture,rt),_t.setOptional(B,Z,"batchingIdTexture"),_t.setValue(B,"batchingIdTexture",Z._indirectTexture,rt),_t.setOptional(B,Z,"batchingColorTexture"),Z._colorsTexture!==null&&_t.setValue(B,"batchingColorTexture",Z._colorsTexture,rt));const Dn=oe.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&Me.update(Z,oe,yn),(gn||Ze.receiveShadow!==Z.receiveShadow)&&(Ze.receiveShadow=Z.receiveShadow,_t.setValue(B,"receiveShadow",Z.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(Tn.envMap.value=Fe,Tn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),le.isMeshStandardMaterial&&le.envMap===null&&W.environment!==null&&(Tn.envMapIntensity.value=W.environmentIntensity),gn&&(_t.setValue(B,"toneMappingExposure",D.toneMappingExposure),Ze.needsLights&&Ys(Tn,tr),Se&&le.fog===!0&&Te.refreshFogUniforms(Tn,Se),Te.refreshMaterialUniforms(Tn,le,q,K,_.state.transmissionRenderTarget[R.id]),eu.upload(B,sn(Ze),Tn,rt)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(eu.upload(B,sn(Ze),Tn,rt),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&_t.setValue(B,"center",Z.center),_t.setValue(B,"modelViewMatrix",Z.modelViewMatrix),_t.setValue(B,"normalMatrix",Z.normalMatrix),_t.setValue(B,"modelMatrix",Z.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const hn=le.uniformsGroups;for(let en=0,zr=hn.length;en<zr;en++){const Ri=hn[en];st.update(Ri,yn),st.bind(Ri,yn)}}return yn}function Ys(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function gu(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(R,W,oe){const le=Ge.get(R);le.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),Ge.get(R.texture).__webglTexture=W,Ge.get(R.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:oe,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){const oe=Ge.get(R);oe.__webglFramebuffer=W,oe.__useDefaultFramebuffer=W===void 0};const vu=B.createFramebuffer();this.setRenderTarget=function(R,W=0,oe=0){Q=R,F=W,z=oe;let le=!0,Z=null,Se=!1,Ie=!1;if(R){const Fe=Ge.get(R);if(Fe.__useDefaultFramebuffer!==void 0)je.bindFramebuffer(B.FRAMEBUFFER,null),le=!1;else if(Fe.__webglFramebuffer===void 0)rt.setupRenderTarget(R);else if(Fe.__hasExternalTextures)rt.rebindTextures(R,Ge.get(R.texture).__webglTexture,Ge.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const $e=R.depthTexture;if(Fe.__boundDepthTexture!==$e){if($e!==null&&Ge.has($e)&&(R.width!==$e.image.width||R.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(R)}}const Je=R.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Ie=!0);const at=Ge.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(at[W])?Z=at[W][oe]:Z=at[W],Se=!0):R.samples>0&&rt.useMultisampledRTT(R)===!1?Z=Ge.get(R).__webglMultisampledFramebuffer:Array.isArray(at)?Z=at[oe]:Z=at,G.copy(R.viewport),ne.copy(R.scissor),he=R.scissorTest}else G.copy(O).multiplyScalar(q).floor(),ne.copy(te).multiplyScalar(q).floor(),he=Ae;if(oe!==0&&(Z=vu),je.bindFramebuffer(B.FRAMEBUFFER,Z)&&le&&je.drawBuffers(R,Z),je.viewport(G),je.scissor(ne),je.setScissorTest(he),Se){const Fe=Ge.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+W,Fe.__webglTexture,oe)}else if(Ie){const Fe=W;for(let Je=0;Je<R.textures.length;Je++){const at=Ge.get(R.textures[Je]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Je,at.__webglTexture,oe,Fe)}}else if(R!==null&&oe!==0){const Fe=Ge.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Fe.__webglTexture,oe)}w=-1},this.readRenderTargetPixels=function(R,W,oe,le,Z,Se,Ie,Ye=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Ge.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ie!==void 0&&(Fe=Fe[Ie]),Fe){je.bindFramebuffer(B.FRAMEBUFFER,Fe);try{const Je=R.textures[Ye],at=Je.format,$e=Je.type;if(!tt.textureFormatReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-le&&oe>=0&&oe<=R.height-Z&&(R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ye),B.readPixels(W,oe,le,Z,Ue.convert(at),Ue.convert($e),Se))}finally{const Je=Q!==null?Ge.get(Q).__webglFramebuffer:null;je.bindFramebuffer(B.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(R,W,oe,le,Z,Se,Ie,Ye=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=Ge.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ie!==void 0&&(Fe=Fe[Ie]),Fe)if(W>=0&&W<=R.width-le&&oe>=0&&oe<=R.height-Z){je.bindFramebuffer(B.FRAMEBUFFER,Fe);const Je=R.textures[Ye],at=Je.format,$e=Je.type;if(!tt.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,pt),B.bufferData(B.PIXEL_PACK_BUFFER,Se.byteLength,B.STREAM_READ),R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ye),B.readPixels(W,oe,le,Z,Ue.convert(at),Ue.convert($e),0);const Lt=Q!==null?Ge.get(Q).__webglFramebuffer:null;je.bindFramebuffer(B.FRAMEBUFFER,Lt);const kt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await nT(B,kt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,pt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Se),B.deleteBuffer(pt),B.deleteSync(kt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,oe=0){const le=Math.pow(2,-oe),Z=Math.floor(R.image.width*le),Se=Math.floor(R.image.height*le),Ie=W!==null?W.x:0,Ye=W!==null?W.y:0;rt.setTexture2D(R,0),B.copyTexSubImage2D(B.TEXTURE_2D,oe,0,0,Ie,Ye,Z,Se),je.unbindTexture()};const hl=B.createFramebuffer(),er=B.createFramebuffer();this.copyTextureToTexture=function(R,W,oe=null,le=null,Z=0,Se=null){Se===null&&(Z!==0?(il("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=Z,Z=0):Se=0);let Ie,Ye,Fe,Je,at,$e,pt,Lt,kt;const Nt=R.isCompressedTexture?R.mipmaps[Se]:R.image;if(oe!==null)Ie=oe.max.x-oe.min.x,Ye=oe.max.y-oe.min.y,Fe=oe.isBox3?oe.max.z-oe.min.z:1,Je=oe.min.x,at=oe.min.y,$e=oe.isBox3?oe.min.z:0;else{const Dn=Math.pow(2,-Z);Ie=Math.floor(Nt.width*Dn),Ye=Math.floor(Nt.height*Dn),R.isDataArrayTexture?Fe=Nt.depth:R.isData3DTexture?Fe=Math.floor(Nt.depth*Dn):Fe=1,Je=0,at=0,$e=0}le!==null?(pt=le.x,Lt=le.y,kt=le.z):(pt=0,Lt=0,kt=0);const mt=Ue.convert(W.format),Ze=Ue.convert(W.type);let qt;W.isData3DTexture?(rt.setTexture3D(W,0),qt=B.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(rt.setTexture2DArray(W,0),qt=B.TEXTURE_2D_ARRAY):(rt.setTexture2D(W,0),qt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);const At=B.getParameter(B.UNPACK_ROW_LENGTH),yn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Ii=B.getParameter(B.UNPACK_SKIP_PIXELS),gn=B.getParameter(B.UNPACK_SKIP_ROWS),tr=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Nt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Nt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Je),B.pixelStorei(B.UNPACK_SKIP_ROWS,at),B.pixelStorei(B.UNPACK_SKIP_IMAGES,$e);const _t=R.isDataArrayTexture||R.isData3DTexture,Tn=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const Dn=Ge.get(R),hn=Ge.get(W),en=Ge.get(Dn.__renderTarget),zr=Ge.get(hn.__renderTarget);je.bindFramebuffer(B.READ_FRAMEBUFFER,en.__webglFramebuffer),je.bindFramebuffer(B.DRAW_FRAMEBUFFER,zr.__webglFramebuffer);for(let Ri=0;Ri<Fe;Ri++)_t&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ge.get(R).__webglTexture,Z,$e+Ri),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ge.get(W).__webglTexture,Se,kt+Ri)),B.blitFramebuffer(Je,at,Ie,Ye,pt,Lt,Ie,Ye,B.DEPTH_BUFFER_BIT,B.NEAREST);je.bindFramebuffer(B.READ_FRAMEBUFFER,null),je.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||Ge.has(R)){const Dn=Ge.get(R),hn=Ge.get(W);je.bindFramebuffer(B.READ_FRAMEBUFFER,hl),je.bindFramebuffer(B.DRAW_FRAMEBUFFER,er);for(let en=0;en<Fe;en++)_t?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Dn.__webglTexture,Z,$e+en):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Dn.__webglTexture,Z),Tn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,hn.__webglTexture,Se,kt+en):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,hn.__webglTexture,Se),Z!==0?B.blitFramebuffer(Je,at,Ie,Ye,pt,Lt,Ie,Ye,B.COLOR_BUFFER_BIT,B.NEAREST):Tn?B.copyTexSubImage3D(qt,Se,pt,Lt,kt+en,Je,at,Ie,Ye):B.copyTexSubImage2D(qt,Se,pt,Lt,Je,at,Ie,Ye);je.bindFramebuffer(B.READ_FRAMEBUFFER,null),je.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Tn?R.isDataTexture||R.isData3DTexture?B.texSubImage3D(qt,Se,pt,Lt,kt,Ie,Ye,Fe,mt,Ze,Nt.data):W.isCompressedArrayTexture?B.compressedTexSubImage3D(qt,Se,pt,Lt,kt,Ie,Ye,Fe,mt,Nt.data):B.texSubImage3D(qt,Se,pt,Lt,kt,Ie,Ye,Fe,mt,Ze,Nt):R.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Se,pt,Lt,Ie,Ye,mt,Ze,Nt.data):R.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Se,pt,Lt,Nt.width,Nt.height,mt,Nt.data):B.texSubImage2D(B.TEXTURE_2D,Se,pt,Lt,Ie,Ye,mt,Ze,Nt);B.pixelStorei(B.UNPACK_ROW_LENGTH,At),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,yn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ii),B.pixelStorei(B.UNPACK_SKIP_ROWS,gn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,tr),Se===0&&W.generateMipmaps&&B.generateMipmap(qt),je.unbindTexture()},this.initRenderTarget=function(R){Ge.get(R).__webglFramebuffer===void 0&&rt.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?rt.setTextureCube(R,0):R.isData3DTexture?rt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?rt.setTexture2DArray(R,0):rt.setTexture2D(R,0),je.unbindTexture()},this.resetState=function(){F=0,z=0,Q=null,je.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),i.unpackColorSpace=wt._getUnpackColorSpace()}}const M0=40,Wo=3.6,Sw=2.9,Mw=1.45,Ew=5,E0=1.2,b0={lat:32,lng:40},bw=1.1,Tw=4e3,Aw=9e-5,cd={mouse:16,touch:26},Rw=5;function Ko(r,e,i=1){const s=(90-r)*(Math.PI/180),l=(e+180)*(Math.PI/180);return new se(-i*Math.sin(s)*Math.cos(l),i*Math.cos(s),i*Math.sin(s)*Math.sin(l))}function T0(r,e){const i=Ko(r,e);return{x:Us.degToRad(r),y:Math.atan2(-i.x,i.z)}}function Cw(r,e){return r+Math.atan2(Math.sin(e-r),Math.cos(e-r))}function ww(r,e,i=64){const s=Math.min(.32,r.angleTo(e)*.42)+.004,l=[];for(let c=0;c<=i;c++){const f=c/i,d=new se().lerpVectors(r,e,f);d.normalize().multiplyScalar(1.006+Math.sin(Math.PI*f)*s),l.push(d)}return l}function Dw(r,e){const i=document.createElement("canvas");i.width=r.width,i.height=r.height;const s=i.getContext("2d",{willReadFrequently:!0});s.drawImage(r,0,0);const{data:l,width:c,height:f}=s.getImageData(0,0,i.width,i.height),d=[];for(let m=-90+e/2;m<90;m+=e){const p=Math.max(1,Math.floor(360*Math.cos(Us.degToRad(m))/e)),v=Math.min(f-1,Math.floor((90-m)/180*f));for(let g=0;g<p;g++){const x=-180+(g+.5)*360/p,M=Math.min(c-1,Math.floor((x+180)/360*c));if(l[(v*c+M)*4]>127){const E=Ko(m,x,1.003);d.push(E.x,E.y,E.z)}}}return new Float32Array(d)}function Uw(r){const e=getComputedStyle(r),i=s=>e.getPropertyValue(s).trim();return{sphere:i("--globe-sphere"),rim:i("--globe-rim"),land:i("--globe-land"),landOpacity:parseFloat(i("--globe-land-opacity"))||.6,pin:i("--globe-pin"),arc:i("--globe-arc")}}const Lw=`
  varying vec3 vNormal;
  varying vec3 vViewDir;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vNormal = normalize(normalMatrix * normal);
    vViewDir = normalize(-mv.xyz);
    gl_Position = projectionMatrix * mv;
  }
`,Nw=`
  uniform vec3 uColor;
  uniform vec3 uRim;
  varying vec3 vNormal;
  varying vec3 vViewDir;
  void main() {
    float light = dot(vNormal, normalize(vec3(-0.35, 0.55, 0.75))) * 0.5 + 0.5;
    vec3 color = uColor * mix(0.82, 1.08, light);
    float rim = pow(1.0 - max(dot(vNormal, vViewDir), 0.0), 3.0);
    gl_FragColor = vec4(mix(color, uRim, rim * 0.85), 1.0);
    #include <colorspace_fragment>
  }
`,Ow=`
  uniform float uSize;
  uniform float uPixelRatio;
  uniform float uRefDepth;
  varying float vFacing;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vec3 n = normalize(normalMatrix * normalize(position));
    vFacing = dot(n, normalize(-mv.xyz));
    // Grow dots a little slower than the zoom so close-ups stay delicate.
    gl_PointSize = uSize * uPixelRatio * pow(uRefDepth / -mv.z, 0.7);
    gl_Position = projectionMatrix * mv;
  }
`,Pw=`
  uniform vec3 uColor;
  uniform float uOpacity;
  varying float vFacing;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    float alpha = smoothstep(0.5, 0.3, d) * smoothstep(0.0, 0.45, vFacing) * uOpacity;
    gl_FragColor = vec4(uColor, alpha);
    #include <colorspace_fragment>
  }
`,zw=`
  attribute float aState;
  attribute float aPhase;
  uniform float uSize;
  uniform float uPixelRatio;
  varying float vState;
  varying float vPhase;
  varying float vFacing;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vec3 n = normalize(normalMatrix * normalize(position));
    vFacing = dot(n, normalize(-mv.xyz));
    vState = aState;
    vPhase = aPhase;
    gl_PointSize = uSize * uPixelRatio;
    gl_Position = projectionMatrix * mv;
  }
`,Iw=`
  uniform vec3 uColor;
  uniform float uTime;
  varying float vState; // 0 idle, 1 hovered, 2 selected
  varying float vPhase;
  varying float vFacing;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    if (d > 1.0) discard;
    float lit = step(0.5, vState);
    float coreR = mix(0.17, 0.25, lit);
    float core = 1.0 - smoothstep(coreR - 0.05, coreR, d);
    float centre = (1.0 - smoothstep(0.06, 0.1, d)) * step(1.5, vState);
    float halo = exp(-d * d * 9.0) * mix(0.35, 0.55, lit);
    float t = fract(uTime * 0.45 + vPhase);
    float ringR = coreR + t * (0.95 - coreR);
    float ring = (1.0 - smoothstep(0.0, 0.07, abs(d - ringR))) * (1.0 - t) * mix(0.55, 0.9, lit);
    float alpha = max(max(core, halo), ring) * smoothstep(0.0, 0.25, vFacing);
    vec3 color = mix(uColor, vec3(1.0), centre);
    gl_FragColor = vec4(color, alpha);
    #include <colorspace_fragment>
  }
`,Bw=`
  attribute float aT;
  attribute float aOffset;
  varying float vT;
  varying float vOffset;
  void main() {
    vT = aT;
    vOffset = aOffset;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Fw=`
  uniform vec3 uColor;
  uniform float uTime;
  varying float vT;
  varying float vOffset;
  void main() {
    // A light pulse travels along each arc, leaving a short trail.
    float head = fract(uTime * 0.2 + vOffset) * 1.5 - 0.25;
    float behind = head - vT;
    float trail = behind >= 0.0 ? exp(-behind * 6.0) : 0.0;
    gl_FragColor = vec4(uColor, 0.35 + trail * 0.65);
    #include <colorspace_fragment>
  }
`;function Hw(){const r=ue.useRef(null),e=ue.useRef(null),i=ue.useRef(null),s=ue.useRef(null),[l,c]=ue.useState(null),[f,d]=ue.useState(null);ue.useEffect(()=>{const v=r.current,g=e.current,x=i.current;if(!v||!g||!x)return;const M=window.matchMedia("(prefers-reduced-motion: reduce)").matches,E=new yw({antialias:!0,alpha:!0});E.setPixelRatio(Math.min(window.devicePixelRatio,2)),E.setClearColor(0,0);const T=E.domElement;g.appendChild(T);const S=new RT,_=new di(M0,1,.1,100),U=new qo;S.add(U);const L={value:0},D={value:E.getPixelRatio()},H=new pi({uniforms:{uColor:{value:new bt},uRim:{value:new bt}},vertexShader:Lw,fragmentShader:Nw});U.add(new Pi(new _p(1,96,64),H));const F=new pi({uniforms:{uColor:{value:new bt},uOpacity:{value:0},uSize:{value:2.3},uPixelRatio:D,uRefDepth:{value:Wo-1}},vertexShader:Ow,fragmentShader:Pw,transparent:!0,depthWrite:!1}),z=new ti;let Q=0,w=!1;const C=new Image;C.onload=()=>{w||(z.setAttribute("position",new On(Dw(C,bw),3)),U.add(new Z_(z,F)))},C.src=fa("/assets/land-mask.png");const G=Vn.map(Y=>Ko(Y.lat,Y.lng,1.012)),ne=new pi({uniforms:{uColor:{value:new bt},uTime:L},vertexShader:Bw,fragmentShader:Fw,transparent:!0,depthWrite:!1});for(let Y=0;Y<Vn.length-1;Y++){const be=ww(Ko(Vn[Y].lat,Vn[Y].lng),Ko(Vn[Y+1].lat,Vn[Y+1].lng)),Le=new ti().setFromPoints(be);Le.setAttribute("aT",new On(new Float32Array(be.map((Me,Ce)=>Ce/(be.length-1))),1)),Le.setAttribute("aOffset",new On(new Float32Array(be.length).fill(Y*.29%1),1)),U.add(new LT(Le,ne))}const he=new ti().setFromPoints(G),_e=new On(new Float32Array(Vn.length),1);he.setAttribute("aState",_e),he.setAttribute("aPhase",new On(new Float32Array(Vn.map((Y,be)=>be*.37%1)),1));const pe=new pi({uniforms:{uColor:{value:new bt},uTime:L,uSize:{value:30},uPixelRatio:D},vertexShader:zw,fragmentShader:Iw,transparent:!0,depthWrite:!1}),P=new Z_(he,pe);P.renderOrder=2,U.add(P);const K=()=>{const Y=Uw(v);H.uniforms.uColor.value.set(Y.sphere),H.uniforms.uRim.value.set(Y.rim),F.uniforms.uColor.value.set(Y.land),Q=Y.landOpacity,pe.uniforms.uColor.value.set(Y.pin),ne.uniforms.uColor.value.set(Y.arc)};K();const q=new MutationObserver(K);q.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});const Ee=T0(b0.lat,b0.lng),X={rot:{...Ee},target:null,vel:{x:0,y:0},zoom:Wo,zoomTarget:Wo,drag:null,pointer:null,lastInteraction:performance.now(),hovered:null,selected:null,appliedPins:"",screen:Vn.map(()=>({x:0,y:0,visible:!1})),size:{w:1,h:1}},O=Y=>Us.clamp(Y,-E0,E0),te=Y=>{X.zoomTarget=Us.clamp(Y,Mw,Ew),X.lastInteraction=performance.now()},Ae=(Y,be)=>{X.target={x:O(Y.x),y:Cw(X.rot.y,Y.y)},X.vel.x=X.vel.y=0,te(be)},De=Y=>{if(X.selected=Y,c(Y),Y===null)return;const be=T0(Vn[Y].lat,Vn[Y].lng);Ae(be,Math.min(X.zoomTarget,Sw))},ze=Y=>{X.hovered!==Y&&(X.hovered=Y,d(Y))};s.current={select:De,zoomBy:Y=>te(X.zoomTarget*Y),reset:()=>{De(null),Ae(Ee,Wo)}};const re=()=>(X.zoom-1)*Math.tan(Us.degToRad(M0/2))/(X.size.h/2),fe=Y=>{const be=T.getBoundingClientRect();return{x:Y.clientX-be.left,y:Y.clientY-be.top}},Oe=(Y,be)=>{let Le=null,Me=be*be;return X.screen.forEach((Ce,ke)=>{if(!Ce.visible)return;const Ue=(Ce.x-Y.x)**2+(Ce.y-Y.y)**2;Ue<Me&&(Me=Ue,Le=ke)}),Le},He=Y=>{if(Y.pointerType==="mouse"&&Y.button!==0||X.drag)return;const be=fe(Y);X.drag={id:Y.pointerId,x:be.x,y:be.y,startX:be.x,startY:be.y,t:Y.timeStamp,moved:!1},X.target=null,X.vel.x=X.vel.y=0,X.lastInteraction=performance.now(),T.setPointerCapture(Y.pointerId)},qe=Y=>{const be=fe(Y);X.pointer={...be,type:Y.pointerType};const Le=X.drag;if(!Le||Le.id!==Y.pointerId)return;if(!Le.moved){if(Math.hypot(be.x-Le.startX,be.y-Le.startY)<Rw)return;Le.moved=!0,g.classList.add("is-dragging")}const Me=re(),Ce=(be.x-Le.x)*Me,ke=(be.y-Le.y)*Me;X.rot.y+=Ce,X.rot.x=O(X.rot.x+ke);const Ue=Math.max(1,Y.timeStamp-Le.t);X.vel.y=X.vel.y*.5+Ce/Ue*.5,X.vel.x=X.vel.x*.5+ke/Ue*.5,Le.x=be.x,Le.y=be.y,Le.t=Y.timeStamp,X.lastInteraction=performance.now()},ct=(Y,be)=>{const Le=X.drag;if(!Le||Le.id!==Y.pointerId||(X.drag=null,g.classList.remove("is-dragging"),T.hasPointerCapture(Y.pointerId)&&T.releasePointerCapture(Y.pointerId),X.lastInteraction=performance.now(),Le.moved&&Y.timeStamp-Le.t<80)||(X.vel.x=X.vel.y=0,Le.moved||be))return;const Me=Oe(fe(Y),Y.pointerType==="mouse"?cd.mouse:cd.touch);Me!==null?De(Me):X.selected!==null&&De(null)},Kt=Y=>ct(Y,!1),B=Y=>ct(Y,!0),Mt=()=>{X.drag||(X.pointer=null,ze(null))},it=Y=>{Y.ctrlKey&&(Y.preventDefault(),te(X.zoomTarget*Math.exp(Us.clamp(Y.deltaY,-25,25)*.01)))};let tt=Wo;const je=Y=>{Y.preventDefault(),tt=X.zoomTarget},Ut=Y=>{Y.preventDefault(),te(tt/Y.scale)};T.addEventListener("pointerdown",He),T.addEventListener("pointermove",qe),T.addEventListener("pointerup",Kt),T.addEventListener("pointercancel",B),T.addEventListener("pointerleave",Mt),T.addEventListener("wheel",it,{passive:!1}),T.addEventListener("gesturestart",je),T.addEventListener("gesturechange",Ut);const Ge=new se,rt=new se;let Wt=0,Vt=performance.now(),N=!1;const b=Y=>{Wt=requestAnimationFrame(b);const be=Math.min(64,Y-Vt);if(Vt=Y,M||(L.value+=be/1e3),!X.drag)if(X.target){const Ue=1-Math.exp(-be/160);X.rot.x+=(X.target.x-X.rot.x)*Ue,X.rot.y+=(X.target.y-X.rot.y)*Ue,Math.abs(X.target.x-X.rot.x)+Math.abs(X.target.y-X.rot.y)<1e-4&&(X.target=null)}else if(Math.abs(X.vel.x)+Math.abs(X.vel.y)>1e-6){X.rot.y+=X.vel.y*be,X.rot.x=O(X.rot.x+X.vel.x*be);const Ue=Math.exp(-be/320);X.vel.x*=Ue,X.vel.y*=Ue}else!M&&X.selected===null&&!X.pointer&&Y-X.lastInteraction>Tw&&(X.rot.y+=Aw*be);X.zoom+=(X.zoomTarget-X.zoom)*(1-Math.exp(-be/140)),U.rotation.set(X.rot.x,X.rot.y,0),_.position.set(0,0,X.zoom),U.updateMatrixWorld(),_.updateMatrixWorld();const Le=F.uniforms.uOpacity;Le.value+=(Q-Le.value)*(1-Math.exp(-be/300)),G.forEach((Ue,Pe)=>{Ge.copy(Ue).applyMatrix4(U.matrixWorld);const st=Ge.dot(rt.copy(_.position).sub(Ge))>.02;Ge.project(_);const k=X.screen[Pe];k.x=(Ge.x+1)/2*X.size.w,k.y=(1-Ge.y)/2*X.size.h,k.visible=st}),X.pointer&&X.pointer.type==="mouse"&&!X.drag&&ze(Oe(X.pointer,cd.mouse)),g.classList.toggle("is-over-pin",X.hovered!==null&&!X.drag);const Me=`${X.hovered}|${X.selected}`;if(Me!==X.appliedPins){X.appliedPins=Me;for(let Ue=0;Ue<Vn.length;Ue++)_e.array[Ue]=Ue===X.selected?2:Ue===X.hovered?1:0;_e.needsUpdate=!0}const Ce=X.hovered!==null?X.hovered:X.selected,ke=Ce!==null?X.screen[Ce]:null;ke&&ke.visible?(x.style.transform=`translate3d(${ke.x}px, ${ke.y}px, 0)`,x.classList.add("is-visible")):x.classList.remove("is-visible"),E.render(S,_)},J=()=>{N||(N=!0,Vt=performance.now(),Wt=requestAnimationFrame(b))},ge=()=>{N=!1,cancelAnimationFrame(Wt)},Te=new IntersectionObserver(([Y])=>Y.isIntersecting?J():ge(),{rootMargin:"100px"});Te.observe(g);const de=()=>{const Y=g.clientWidth,be=g.clientHeight;!Y||!be||(X.size={w:Y,h:be},E.setSize(Y,be,!1),_.aspect=Y/be,_.updateProjectionMatrix(),D.value=E.getPixelRatio())},Ke=new ResizeObserver(de);return Ke.observe(g),de(),()=>{w=!0,ge(),Te.disconnect(),Ke.disconnect(),q.disconnect(),T.removeEventListener("pointerdown",He),T.removeEventListener("pointermove",qe),T.removeEventListener("pointerup",Kt),T.removeEventListener("pointercancel",B),T.removeEventListener("pointerleave",Mt),T.removeEventListener("wheel",it),T.removeEventListener("gesturestart",je),T.removeEventListener("gesturechange",Ut),C.onload=null,s.current=null,S.traverse(Y=>Y.geometry?.dispose()),z.dispose(),[H,F,ne,pe].forEach(Y=>Y.dispose()),E.dispose(),T.remove()}},[]),ue.useEffect(()=>{if(l===null)return;const v=g=>{g.key==="Escape"&&s.current?.select(null)};return window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)},[l]);const m=f??l,p=m===null?null:Vn[m];return ae.jsxs("section",{ref:r,id:"travel",className:"travelglobe","aria-label":"Places I've been",children:[ae.jsxs("div",{className:"travelglobe-frame",children:[ae.jsx("div",{ref:e,className:"travelglobe-canvas",role:"img","aria-label":`Interactive globe marking ${Vn.length} places I've been`}),ae.jsx("div",{ref:i,className:"travelglobe-label","aria-hidden":"true",children:p&&ae.jsxs("span",{children:[p.name,ae.jsx("small",{children:p.country})]})}),ae.jsxs("div",{className:"travelglobe-controls",children:[ae.jsx("button",{type:"button",className:"travelglobe-control",onClick:()=>s.current?.zoomBy(.8),"aria-label":"Zoom in",title:"Zoom in",children:ae.jsx(SE,{"aria-hidden":"true"})}),ae.jsx("button",{type:"button",className:"travelglobe-control",onClick:()=>s.current?.zoomBy(1.25),"aria-label":"Zoom out",title:"Zoom out",children:ae.jsx(xE,{"aria-hidden":"true"})}),ae.jsx("button",{type:"button",className:"travelglobe-control",onClick:()=>s.current?.reset(),"aria-label":"Reset view",title:"Reset view",children:ae.jsx(ME,{"aria-hidden":"true"})})]})]}),ae.jsx("p",{className:"travelglobe-footer",children:"Drag to spin · click a pin"})]})}function Gw(){const[r,e]=ue.useState(!1),i=async()=>{try{await navigator.clipboard.writeText(Ds.email),e(!0),setTimeout(()=>e(!1),1800)}catch{}};return ae.jsxs("section",{className:"contact","aria-labelledby":"contact-title",children:[ae.jsxs("div",{className:"wrap grid12 contact-grid",children:[ae.jsxs("h2",{className:"contact-talk",id:"contact-title",children:["Let’s ",ae.jsx("em",{children:"talk"}),"."]}),ae.jsx("p",{className:"contact-text",children:"I’m open to software and AI roles. Email is the quickest way to reach me."}),ae.jsxs("div",{className:"contact-email-row",children:[ae.jsx("a",{className:"contact-email",href:`mailto:${Ds.email}`,children:Ds.email}),ae.jsx("button",{type:"button",className:"contact-copy",onClick:i,"aria-live":"polite",children:r?"Copied":"Copy"})]}),ae.jsxs("div",{className:"actions contact-links",children:[Ds.links.map(s=>ae.jsxs("a",{className:"tlink",href:s.href,target:"_blank",rel:"noopener noreferrer",children:[s.label," ↗"]},s.href)),ae.jsx("a",{className:"tlink",href:fa(op),target:"_blank",rel:"noopener noreferrer",children:"Résumé ↓"})]})]}),ae.jsx("div",{className:"contact-globe",children:ae.jsx(Hw,{})}),ae.jsxs("footer",{className:"wrap footer",children:[ae.jsxs("span",{children:["© ",new Date().getFullYear()," Dipti Dhawade"]}),ae.jsx("span",{children:"Built with React and three.js"})]})]})}const ca="/diptidhawade/",A0=["hero","projects","experience","contact"];function Vw(r){const e=document.getElementById(r);if(!e)return;const i=e.getBoundingClientRect(),s=window.innerHeight;i.top>=0&&i.top<=s*.4||e.scrollIntoView({behavior:"smooth",block:"start"})}function kw(){const{pathname:r,hash:e}=Ja(),i=e==="#about"?"#hero":e;return ue.useEffect(()=>{if(r!=="/")return;i==="#hero"&&window.history.replaceState(null,"",ca);const s=i?i.slice(1):"hero",l=document.getElementById(s);l&&requestAnimationFrame(()=>{l.scrollIntoView({behavior:"smooth",block:"start"})})},[r,i]),ue.useEffect(()=>{const s=ca.replace(/\/$/,""),l=()=>{if(!(window.location.pathname===s||window.location.pathname===s+"/"))return;const f=window.location.hash==="#about"?"hero":window.location.hash.slice(1);Vw(f||"hero")};return window.addEventListener("hashchange",l),()=>window.removeEventListener("hashchange",l)},[]),ue.useEffect(()=>{const s=ca.replace(/\/$/,"");(window.location.pathname===s||window.location.pathname===s+"/")&&window.location.hash==="#hero"&&window.history.replaceState(null,"",ca)},[]),null}function Xw(){const r=ue.useRef(!1);return ue.useEffect(()=>{const e=new IntersectionObserver(i=>{if(!r.current)for(const s of i){if(!s.isIntersecting)continue;const l=s.target.id;if(A0.includes(l)&&s.intersectionRatio>=.2){const c=window.location.hash.slice(1),f=l==="hero"?ca:`${ca}#${l}`;(c==="hero"||!c?ca:`${ca}#${c}`)!==f&&(r.current=!0,window.history.replaceState(null,"",f),r.current=!1);break}}},{root:null,rootMargin:"-20% 0px -60% 0px",threshold:[0,.2,.5]});return A0.forEach(i=>{const s=document.getElementById(i);s&&e.observe(s)}),()=>e.disconnect()},[]),null}function Ww(){return ae.jsxs(ae.Fragment,{children:[ae.jsx(kw,{}),ae.jsx(Xw,{}),ae.jsx("div",{id:"hero",children:ae.jsx(FE,{})}),ae.jsx("div",{id:"projects",children:ae.jsx(YE,{})}),ae.jsx("div",{id:"experience",children:ae.jsx(KE,{})}),ae.jsx("div",{id:"contact",children:ae.jsx(Gw,{})})]})}const qw=()=>ae.jsxs(eE,{basename:ca.replace(/\/$/,""),children:[ae.jsx(IE,{}),ae.jsx("main",{children:ae.jsx(UM,{children:ae.jsx(B0,{path:"/",element:ae.jsx(Ww,{})})})})]});FS.createRoot(document.getElementById("root")).render(ae.jsx(ue.StrictMode,{children:ae.jsx(qw,{})}));
