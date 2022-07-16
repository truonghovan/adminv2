(this["webpackJsonpmantis-free-react-admin-template"]=this["webpackJsonpmantis-free-react-admin-template"]||[]).push([[13],{651:function(t,n,e){"use strict";var a=e(10),i=e(0),r=e(43),o=e(5),c=e(2),s=e(7),h=e(60),d=e(159);e(4);function l(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function b(t){return parseFloat(t)}var u=e(525),j=e(6),m=e(9),f=e(101),p=e(123);function O(t){return Object(f.a)("MuiSkeleton",t)}Object(p.a)("MuiSkeleton",["root","text","rectangular","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var g,v,x,w,C,k,y,S,R=e(1),A=["animation","className","component","height","style","variant","width"],M=Object(h.c)(C||(C=g||(g=Object(r.a)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),X=Object(h.c)(k||(k=v||(v=Object(r.a)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),F=Object(j.a)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(t,n){var e=t.ownerState;return[n.root,n[e.variant],!1!==e.animation&&n[e.animation],e.hasChildren&&n.withChildren,e.hasChildren&&!e.width&&n.fitContent,e.hasChildren&&!e.height&&n.heightAuto]}})((function(t){var n=t.theme,e=t.ownerState,a=l(n.shape.borderRadius)||"px",i=b(n.shape.borderRadius);return Object(c.a)({display:"block",backgroundColor:Object(u.a)(n.palette.text.primary,"light"===n.palette.mode?.11:.13),height:"1.2em"},"text"===e.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(i).concat(a,"/").concat(Math.round(i/.6*10)/10).concat(a),"&:empty:before":{content:'"\\00a0"'}},"circular"===e.variant&&{borderRadius:"50%"},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})}),(function(t){return"pulse"===t.ownerState.animation&&Object(h.b)(y||(y=x||(x=Object(r.a)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),M)}),(function(t){var n=t.ownerState,e=t.theme;return"wave"===n.animation&&Object(h.b)(S||(S=w||(w=Object(r.a)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(90deg, transparent, ",", transparent);\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),X,e.palette.action.hover)})),N=i.forwardRef((function(t,n){var e=Object(m.a)({props:t,name:"MuiSkeleton"}),a=e.animation,i=void 0===a?"pulse":a,r=e.className,h=e.component,l=void 0===h?"span":h,b=e.height,u=e.style,j=e.variant,f=void 0===j?"text":j,p=e.width,g=Object(o.a)(e,A),v=Object(c.a)({},e,{animation:i,component:l,variant:f,hasChildren:Boolean(g.children)}),x=function(t){var n=t.classes,e=t.variant,a=t.animation,i=t.hasChildren,r=t.width,o=t.height,c={root:["root",e,a,i&&"withChildren",i&&!r&&"fitContent",i&&!o&&"heightAuto"]};return Object(d.a)(c,O,n)}(v);return Object(R.jsx)(F,Object(c.a)({as:l,ref:n,className:Object(s.a)(x.root,r),ownerState:v},g,{style:Object(c.a)({width:p,height:b},u)}))})),B=e(566),I=e(593),J=e(57);n.a=function(t){var n=t.children,e=Object(i.useState)(!0),r=Object(a.a)(e,2),o=r[0],c=r[1];Object(i.useEffect)((function(){c(!1)}),[]);var s=Object(R.jsx)(J.a,{title:Object(R.jsx)(N,{sx:{width:{xs:120,md:180}}}),secondary:Object(R.jsx)(N,{animation:"wave",variant:"circular",width:24,height:24}),children:Object(R.jsxs)(B.a,{spacing:1,children:[Object(R.jsx)(N,{}),Object(R.jsx)(N,{sx:{height:64},animation:"wave",variant:"rectangular"}),Object(R.jsx)(N,{}),Object(R.jsx)(N,{})]})});return Object(R.jsxs)(R.Fragment,{children:[o&&Object(R.jsxs)(I.a,{container:!0,spacing:3,children:[Object(R.jsx)(I.a,{item:!0,xs:12,md:6,children:s}),Object(R.jsx)(I.a,{item:!0,xs:12,md:6,children:s}),Object(R.jsx)(I.a,{item:!0,xs:12,md:6,children:s}),Object(R.jsx)(I.a,{item:!0,xs:12,md:6,children:s})]}),!o&&n]})}},871:function(t,n,e){"use strict";e.r(n);var a=e(6),i=e(651),r=e(57),o=e(1),c=Object(a.a)("iframe")((function(){return{height:"calc(100vh - 210px)",border:"none"}}));n.default=function(){return Object(o.jsx)(i.a,{children:Object(o.jsx)(r.a,{title:"Ant Icons",children:Object(o.jsx)(c,{title:"Ant Icon",width:"100%",src:"https://ant.design/components/icon/"})})})}}}]);
//# sourceMappingURL=13.922f55ba.chunk.js.map