/*! For license information please see 7.1c9274f1.chunk.js.LICENSE.txt */
(this["webpackJsonpmantis-free-react-admin-template"]=this["webpackJsonpmantis-free-react-admin-template"]||[]).push([[7],{651:function(t,e,n){"use strict";var r=n(10),o=n(0),a=n(43),i=n(5),c=n(2),s=n(7),u=n(60),h=n(159);n(4);function l(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function f(t){return parseFloat(t)}var d=n(525),p=n(6),v=n(9),m=n(101),g=n(123);function y(t){return Object(m.a)("MuiSkeleton",t)}Object(g.a)("MuiSkeleton",["root","text","rectangular","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var b,j,w,O,x,L,E,S,k=n(1),_=["animation","className","component","height","style","variant","width"],C=Object(u.c)(x||(x=b||(b=Object(a.a)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),T=Object(u.c)(L||(L=j||(j=Object(a.a)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),R=Object(p.a)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(t,e){var n=t.ownerState;return[e.root,e[n.variant],!1!==n.animation&&e[n.animation],n.hasChildren&&e.withChildren,n.hasChildren&&!n.width&&e.fitContent,n.hasChildren&&!n.height&&e.heightAuto]}})((function(t){var e=t.theme,n=t.ownerState,r=l(e.shape.borderRadius)||"px",o=f(e.shape.borderRadius);return Object(c.a)({display:"block",backgroundColor:Object(d.a)(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em"},"text"===n.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(o).concat(r,"/").concat(Math.round(o/.6*10)/10).concat(r),"&:empty:before":{content:'"\\00a0"'}},"circular"===n.variant&&{borderRadius:"50%"},n.hasChildren&&{"& > *":{visibility:"hidden"}},n.hasChildren&&!n.width&&{maxWidth:"fit-content"},n.hasChildren&&!n.height&&{height:"auto"})}),(function(t){return"pulse"===t.ownerState.animation&&Object(u.b)(E||(E=w||(w=Object(a.a)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),C)}),(function(t){var e=t.ownerState,n=t.theme;return"wave"===e.animation&&Object(u.b)(S||(S=O||(O=Object(a.a)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(90deg, transparent, ",", transparent);\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),T,n.palette.action.hover)})),A=o.forwardRef((function(t,e){var n=Object(v.a)({props:t,name:"MuiSkeleton"}),r=n.animation,o=void 0===r?"pulse":r,a=n.className,u=n.component,l=void 0===u?"span":u,f=n.height,d=n.style,p=n.variant,m=void 0===p?"text":p,g=n.width,b=Object(i.a)(n,_),j=Object(c.a)({},n,{animation:o,component:l,variant:m,hasChildren:Boolean(b.children)}),w=function(t){var e=t.classes,n=t.variant,r=t.animation,o=t.hasChildren,a=t.width,i=t.height,c={root:["root",n,r,o&&"withChildren",o&&!a&&"fitContent",o&&!i&&"heightAuto"]};return Object(h.a)(c,y,e)}(j);return Object(k.jsx)(R,Object(c.a)({as:l,ref:e,className:Object(s.a)(w.root,a),ownerState:j},b,{style:Object(c.a)({width:g,height:f},d)}))})),G=n(566),N=n(593),P=n(57);e.a=function(t){var e=t.children,n=Object(o.useState)(!0),a=Object(r.a)(n,2),i=a[0],c=a[1];Object(o.useEffect)((function(){c(!1)}),[]);var s=Object(k.jsx)(P.a,{title:Object(k.jsx)(A,{sx:{width:{xs:120,md:180}}}),secondary:Object(k.jsx)(A,{animation:"wave",variant:"circular",width:24,height:24}),children:Object(k.jsxs)(G.a,{spacing:1,children:[Object(k.jsx)(A,{}),Object(k.jsx)(A,{sx:{height:64},animation:"wave",variant:"rectangular"}),Object(k.jsx)(A,{}),Object(k.jsx)(A,{})]})});return Object(k.jsxs)(k.Fragment,{children:[i&&Object(k.jsxs)(N.a,{container:!0,spacing:3,children:[Object(k.jsx)(N.a,{item:!0,xs:12,md:6,children:s}),Object(k.jsx)(N.a,{item:!0,xs:12,md:6,children:s}),Object(k.jsx)(N.a,{item:!0,xs:12,md:6,children:s}),Object(k.jsx)(N.a,{item:!0,xs:12,md:6,children:s})]}),!i&&e]})}},653:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r="http://localhost:3001",o=function(t){return"http://localhost:3001/public/".concat(t)}},657:function(t,e,n){"use strict";var r=n(679),o=n.n(r),a=n(653),i=n(167),c=n(18),s=window.localStorage.getItem("token"),u=o.a.create({baseURL:a.a,headers:{Authorization:s?"Bearer ".concat(s):""}});u.interceptors.request.use((function(t){var e=i.a.getState().auth;return e.token&&(t.headers.Authorization="Bearer ".concat(e.token)),t})),u.interceptors.response.use((function(t){return t}),(function(t){console.log(t.response);var e=(t.response?t.response.status:500).status;return e&&500===e&&(localStorage.clear(),i.a.dispatch({type:c.a.LOGOUT_SUCCESS})),Promise.reject(t)})),e.a=u},678:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(163),o=n(657),a=n(18);function i(){i=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(k){s=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),i=new L(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return S()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=w(i,n);if(c){if(c===l)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=h(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===l)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(t,n,i),a}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(k){return{type:"throw",arg:k}}}t.wrap=u;var l={};function f(){}function d(){}function p(){}var v={};s(v,o,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(E([])));g&&g!==e&&n.call(g,o)&&(v=g);var y=p.prototype=f.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(o,a,i,c){var s=h(t[o],t,a);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(l).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function w(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=h(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,l;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function E(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:S}}function S(){return{value:void 0,done:!0}}return d.prototype=p,s(y,"constructor",p),s(p,"constructor",d),d.displayName=s(p,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,s(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},b(j.prototype),s(j.prototype,a,(function(){return this})),t.AsyncIterator=j,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new j(u(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(y),s(y,c,"Generator"),s(y,o,(function(){return this})),s(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=E,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:E(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},t}var c=function(){return function(){var t=Object(r.a)(i().mark((function t(e){var n,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e({type:a.e.GET_ALL_PRODUCT_REQUEST}),t.next=4,o.a.post("product/getProducts");case 4:n=t.sent,console.log(n),200===n.status?(r=n.data.products,e({type:a.e.GET_ALL_PRODUCT_SUCCESS,payload:{products:r}})):e({type:a.e.GET_ALL_PRODUCT_FAILURE}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}},869:function(t,e,n){"use strict";n.r(e);n(600),n(596);var r=n(593),o=(n(566),n(124),n(57)),a=n(651),i=n(50),c=n(0),s=n(678),u=n(1);e.default=function(){var t=Object(i.b)(),e=Object(i.c)((function(t){return t.product}));return Object(c.useEffect)((function(){t(Object(s.a)())}),[t]),Object(u.jsx)(a.a,{children:Object(u.jsx)(r.a,{container:!0,spacing:3,children:e.products.map((function(t){return Object(u.jsx)(r.a,{item:!0,xs:12,sm:6,md:4,children:Object(u.jsx)(o.a,{title:t.name,codeHighlight:!0,children:Object(u.jsx)("h2",{children:"haha"})})})}))})})}}}]);
//# sourceMappingURL=7.1c9274f1.chunk.js.map