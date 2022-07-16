/*! For license information please see 9.376a0367.chunk.js.LICENSE.txt */
(this["webpackJsonpmantis-free-react-admin-template"]=this["webpackJsonpmantis-free-react-admin-template"]||[]).push([[9],{651:function(t,e,n){"use strict";var r=n(10),a=n(0),i=n(43),o=n(5),c=n(2),s=n(7),u=n(60),l=n(159);n(4);function h(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function f(t){return parseFloat(t)}var d=n(525),p=n(6),v=n(9),m=n(101),g=n(123);function y(t){return Object(m.a)("MuiSkeleton",t)}Object(g.a)("MuiSkeleton",["root","text","rectangular","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var b,j,w,O,x,E,L,S,k=n(1),_=["animation","className","component","height","style","variant","width"],C=Object(u.c)(x||(x=b||(b=Object(i.a)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),A=Object(u.c)(E||(E=j||(j=Object(i.a)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),G=Object(p.a)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(t,e){var n=t.ownerState;return[e.root,e[n.variant],!1!==n.animation&&e[n.animation],n.hasChildren&&e.withChildren,n.hasChildren&&!n.width&&e.fitContent,n.hasChildren&&!n.height&&e.heightAuto]}})((function(t){var e=t.theme,n=t.ownerState,r=h(e.shape.borderRadius)||"px",a=f(e.shape.borderRadius);return Object(c.a)({display:"block",backgroundColor:Object(d.a)(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em"},"text"===n.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(a).concat(r,"/").concat(Math.round(a/.6*10)/10).concat(r),"&:empty:before":{content:'"\\00a0"'}},"circular"===n.variant&&{borderRadius:"50%"},n.hasChildren&&{"& > *":{visibility:"hidden"}},n.hasChildren&&!n.width&&{maxWidth:"fit-content"},n.hasChildren&&!n.height&&{height:"auto"})}),(function(t){return"pulse"===t.ownerState.animation&&Object(u.b)(L||(L=w||(w=Object(i.a)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),C)}),(function(t){var e=t.ownerState,n=t.theme;return"wave"===e.animation&&Object(u.b)(S||(S=O||(O=Object(i.a)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(90deg, transparent, ",", transparent);\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),A,n.palette.action.hover)})),T=a.forwardRef((function(t,e){var n=Object(v.a)({props:t,name:"MuiSkeleton"}),r=n.animation,a=void 0===r?"pulse":r,i=n.className,u=n.component,h=void 0===u?"span":u,f=n.height,d=n.style,p=n.variant,m=void 0===p?"text":p,g=n.width,b=Object(o.a)(n,_),j=Object(c.a)({},n,{animation:a,component:h,variant:m,hasChildren:Boolean(b.children)}),w=function(t){var e=t.classes,n=t.variant,r=t.animation,a=t.hasChildren,i=t.width,o=t.height,c={root:["root",n,r,a&&"withChildren",a&&!i&&"fitContent",a&&!o&&"heightAuto"]};return Object(l.a)(c,y,e)}(j);return Object(k.jsx)(G,Object(c.a)({as:h,ref:e,className:Object(s.a)(w.root,i),ownerState:j},b,{style:Object(c.a)({width:g,height:f},d)}))})),N=n(566),R=n(593),F=n(57);e.a=function(t){var e=t.children,n=Object(a.useState)(!0),i=Object(r.a)(n,2),o=i[0],c=i[1];Object(a.useEffect)((function(){c(!1)}),[]);var s=Object(k.jsx)(F.a,{title:Object(k.jsx)(T,{sx:{width:{xs:120,md:180}}}),secondary:Object(k.jsx)(T,{animation:"wave",variant:"circular",width:24,height:24}),children:Object(k.jsxs)(N.a,{spacing:1,children:[Object(k.jsx)(T,{}),Object(k.jsx)(T,{sx:{height:64},animation:"wave",variant:"rectangular"}),Object(k.jsx)(T,{}),Object(k.jsx)(T,{})]})});return Object(k.jsxs)(k.Fragment,{children:[o&&Object(k.jsxs)(R.a,{container:!0,spacing:3,children:[Object(k.jsx)(R.a,{item:!0,xs:12,md:6,children:s}),Object(k.jsx)(R.a,{item:!0,xs:12,md:6,children:s}),Object(k.jsx)(R.a,{item:!0,xs:12,md:6,children:s}),Object(k.jsx)(R.a,{item:!0,xs:12,md:6,children:s})]}),!o&&e]})}},653:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var r="http://localhost:3001",a=function(t){return"http://localhost:3001/public/".concat(t)}},657:function(t,e,n){"use strict";var r=n(679),a=n.n(r),i=n(653),o=n(167),c=n(18),s=window.localStorage.getItem("token"),u=a.a.create({baseURL:i.a,headers:{Authorization:s?"Bearer ".concat(s):""}});u.interceptors.request.use((function(t){var e=o.a.getState().auth;return e.token&&(t.headers.Authorization="Bearer ".concat(e.token)),t})),u.interceptors.response.use((function(t){return t}),(function(t){console.log(t.response);var e=(t.response?t.response.status:500).status;return e&&500===e&&(localStorage.clear(),o.a.dispatch({type:c.a.LOGOUT_SUCCESS})),Promise.reject(t)})),e.a=u},877:function(t,e,n){"use strict";n.r(e);var r=n(104),a=n(600),i=n(604),o=n(603),c=n(124),s=n(597),u=n(590),l=n(653),h=n(13),f=n.n(h),d=n(1),p=function(t){var e=t.item,n=e.card,r=e.image,h=e.label,f=e.value;return Object(d.jsx)("div",{style:{display:"inline-block",marginBottom:"20px",width:"14%"},children:Object(d.jsxs)(a.a,{className:n,style:{width:"95%"},children:[Object(d.jsx)(i.a,{component:"img",height:"100",image:r&&Object(l.b)(r.slice(9)),alt:"green iguana",style:{objectFit:"cover"}}),Object(d.jsx)(o.a,{children:Object(d.jsx)(c.a,{className:h,color:"textPrimary",children:h})}),Object(d.jsxs)(s.a,{children:[Object(d.jsx)(u.a,{size:"small",variant:"contained",children:"Chi ti\u1ebft"}),Object(d.jsx)(u.a,{size:"small",variant:"contained",color:"error",onClick:function(){return function(t){console.log(t)}(f)},children:"Xo\xe1"})]})]})})};p.PropTypes={item:f.a.object,card:f.a.string,image:f.a.string,label:f.a.string};var v=p,m=n(0),g=n(50),y=n(163),b=n(657),j=n(18);function w(){w=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",o=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(k){c=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var a=e&&e.prototype instanceof h?e:h,i=Object.create(a.prototype),o=new E(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(a,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw i;return S()}for(n.method=a,n.arg=i;;){var o=n.delegate;if(o){var c=j(o,n);if(c){if(c===l)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=u(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===l)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(t,n,o),i}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(k){return{type:"throw",arg:k}}}t.wrap=s;var l={};function h(){}function f(){}function d(){}var p={};c(p,a,(function(){return this}));var v=Object.getPrototypeOf,m=v&&v(v(L([])));m&&m!==e&&n.call(m,a)&&(p=m);var g=d.prototype=h.prototype=Object.create(p);function y(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function r(a,i,o,c){var s=u(t[a],t,i);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,o,c)}),(function(t){r("throw",t,o,c)})):e.resolve(h).then((function(t){l.value=t,o(l)}),(function(t){return r("throw",t,o,c)}))}c(s.arg)}var a;this._invoke=function(t,n){function i(){return new e((function(e,a){r(t,n,e,a)}))}return a=a?a.then(i,i):i()}}function j(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=u(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,l;var a=r.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function L(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:S}}function S(){return{value:void 0,done:!0}}return f.prototype=d,c(g,"constructor",d),c(d,"constructor",f),f.displayName=c(d,o,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,o,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},y(b.prototype),c(b.prototype,i,(function(){return this})),t.AsyncIterator=b,t.async=function(e,n,r,a,i){void 0===i&&(i=Promise);var o=new b(s(e,n,r,a),i);return t.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},y(g),c(g,o,"Generator"),c(g,a,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=L,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return o.type="throw",o.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;x(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:L(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},t}var O=function(){return function(){var t=Object(y.a)(w().mark((function t(e){var n,r;return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:j.b.GET_ALL_CATEGORIES_REQUEST}),t.next=3,b.a.get("category/getcategory");case 3:200===(n=t.sent).status?(r=n.data.categoryList,e({type:j.b.GET_ALL_CATEGORIES_SUCCESS,payload:{categories:r}})):e({type:j.b.GET_ALL_CATEGORIES_FAILURE,payload:{error:n.data.error}});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=n(651);e.default=function(){var t=Object(g.b)(),e=Object(g.c)((function(t){return t.category}));Object(m.useEffect)((function(){t(O())}),[t]);return Object(d.jsx)(x.a,{children:Object(d.jsx)("div",{style:{display:"inline-block"},children:e.categories&&function t(e){var n,a=[],i=Object(r.a)(e);try{for(i.s();!(n=i.n()).done;){var o=n.value;a.push({label:o.name,value:o._id,image:o.image,children:o.children.length>0&&t(o.children)})}}catch(c){i.e(c)}finally{i.f()}return a}(e.categories).map((function(t){return Object(d.jsx)(v,{item:t})}))})})}}}]);
//# sourceMappingURL=9.376a0367.chunk.js.map