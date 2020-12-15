(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{156:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),c=(n(0),n(552)),l={},i={unversionedId:"api/modules/_packages_utils_src_getargumentvalues_",id:"api/modules/_packages_utils_src_getargumentvalues_",isDocsHomePage:!1,title:"_packages_utils_src_getargumentvalues_",description:"@graphql-tools/utils",source:"@site/docs/api/modules/_packages_utils_src_getargumentvalues_.md",slug:"/api/modules/_packages_utils_src_getargumentvalues_",permalink:"/docs/api/modules/_packages_utils_src_getargumentvalues_",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/api/modules/_packages_utils_src_getargumentvalues_.md",version:"current"},u=[{value:"Index",id:"index",children:[{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"getArgumentValues",id:"getargumentvalues",children:[]}]}],o={toc:u};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("a",Object(a.a)({parentName:"strong"},{href:"../README"}),"@graphql-tools/utils"))),Object(c.b)("h1",{id:"module-packagesutilssrcgetargumentvalues"},'Module: "packages/utils/src/getArgumentValues"'),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"functions"},"Functions"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api/modules/_packages_utils_src_getargumentvalues_#getargumentvalues"}),"getArgumentValues"))),Object(c.b)("h2",{id:"functions-1"},"Functions"),Object(c.b)("h3",{id:"getargumentvalues"},"getArgumentValues"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"getArgumentValues"),"(",Object(c.b)("inlineCode",{parentName:"p"},"def"),": GraphQLField","<","any, any\\",">"," ","|"," GraphQLDirective, ",Object(c.b)("inlineCode",{parentName:"p"},"node"),": FieldNode ","|"," DirectiveNode, ",Object(c.b)("inlineCode",{parentName:"p"},"variableValues?"),": Record","<","string, any\\",">","): Record","<","string, any\\",">"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/getArgumentValues.ts#L24"}),"packages/utils/src/getArgumentValues.ts:24"))),Object(c.b)("p",null,"Prepares an object map of argument values given a list of argument\ndefinitions and list of argument AST nodes."),Object(c.b)("p",null,"Note: The returned value is a plain Object with a prototype, since it is\nexposed to user code. Care should be taken to not pull values from the\nObject prototype."),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default value"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"def")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"GraphQLField","<","any, any\\",">"," ","|"," GraphQLDirective"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"node")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"FieldNode ","|"," DirectiveNode"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"variableValues")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Record","<","string, any\\",">"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"{}")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," Record","<","string, any\\",">"))}b.isMDXComponent=!0},552:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),b=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),s=b(n),d=a,m=s["".concat(l,".").concat(d)]||s[d]||p[d]||c;return n?r.a.createElement(m,i(i({ref:t},o),{},{components:n})):r.a.createElement(m,i({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var o=2;o<c;o++)l[o]=n[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);