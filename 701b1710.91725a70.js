(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{278:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return i}));var a=r(3),n=r(7),c=(r(0),r(552)),s={},o={unversionedId:"api/modules/_packages_utils_src_get_user_types_from_schema_",id:"api/modules/_packages_utils_src_get_user_types_from_schema_",isDocsHomePage:!1,title:"_packages_utils_src_get_user_types_from_schema_",description:"@graphql-tools/utils",source:"@site/docs/api/modules/_packages_utils_src_get_user_types_from_schema_.md",slug:"/api/modules/_packages_utils_src_get_user_types_from_schema_",permalink:"/docs/api/modules/_packages_utils_src_get_user_types_from_schema_",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/api/modules/_packages_utils_src_get_user_types_from_schema_.md",version:"current"},p=[{value:"Index",id:"index",children:[{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"getUserTypesFromSchema",id:"getusertypesfromschema",children:[]}]}],l={toc:p};function i(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("a",Object(a.a)({parentName:"strong"},{href:"../README"}),"@graphql-tools/utils"))),Object(c.b)("h1",{id:"module-packagesutilssrcget-user-types-from-schema"},'Module: "packages/utils/src/get-user-types-from-schema"'),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"functions"},"Functions"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api/modules/_packages_utils_src_get_user_types_from_schema_#getusertypesfromschema"}),"getUserTypesFromSchema"))),Object(c.b)("h2",{id:"functions-1"},"Functions"),Object(c.b)("h3",{id:"getusertypesfromschema"},"getUserTypesFromSchema"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"getUserTypesFromSchema"),"(",Object(c.b)("inlineCode",{parentName:"p"},"schema"),": GraphQLSchema): GraphQLObjectType[]"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/get-user-types-from-schema.ts#L11"}),"packages/utils/src/get-user-types-from-schema.ts:11"))),Object(c.b)("p",null,"Get all GraphQL types from schema without:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Query, Mutation, Subscription objects"),Object(c.b)("li",{parentName:"ul"},"Internal scalars added by parser")),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"schema")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"GraphQLSchema"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," GraphQLObjectType[]"))}i.isMDXComponent=!0},552:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),i=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=i(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=i(r),m=a,d=u["".concat(s,".").concat(m)]||u[m]||b[m]||c;return r?n.a.createElement(d,o(o({ref:t},l),{},{components:r})):n.a.createElement(d,o({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,s=new Array(c);s[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<c;l++)s[l]=r[l];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);