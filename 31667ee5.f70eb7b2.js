(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{168:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(552)),i={id:"directive-resolvers",title:"Directive resolvers",description:"A set of utilities to build your JavaScript GraphQL schema in a concise and powerful way."},c={unversionedId:"directive-resolvers",id:"directive-resolvers",isDocsHomePage:!1,title:"Directive resolvers",description:"A set of utilities to build your JavaScript GraphQL schema in a concise and powerful way.",source:"@site/docs/directive-resolvers.md",slug:"/directive-resolvers",permalink:"/docs/directive-resolvers",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/directive-resolvers.md",version:"current",sidebar:"someSidebar",previous:{title:"Schema directives",permalink:"/docs/schema-directives"},next:{title:"Schema delegation",permalink:"/docs/schema-delegation"}},s=[{value:"Directive example",id:"directive-example",children:[]},{value:"Multi-Directives example",id:"multi-directives-example",children:[]},{value:"API",id:"api",children:[{value:"directiveResolvers option",id:"directiveresolvers-option",children:[]},{value:"attachDirectiveResolvers",id:"attachdirectiveresolvers",children:[]}]}],l={toc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"directive-example"},"Directive example"),Object(o.b)("p",null,"Let's take a look at how we can create ",Object(o.b)("inlineCode",{parentName:"p"},"@upper")," Directive to upper-case a string returned from resolve on Field"),Object(o.b)("p",null,"To start, let's grab the schema definition string from the ",Object(o.b)("inlineCode",{parentName:"p"},"makeExecutableSchema")," example ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/generate-schema/#example"}),'in the "Generating a schema" article'),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { makeExecutableSchema } from '@graphql-tools/schema';\nimport { graphql } from 'graphql';\n\n// Construct a schema, using GraphQL schema language\nconst typeDefs = `\n  directive @upper on FIELD_DEFINITION\n\n  type Query {\n    hello: String @upper\n  }\n`;\n\n// Implement resolvers for out custom Directive\nconst directiveResolvers = {\n  upper(\n    next,\n    src,\n    args,\n    context,\n  ) {\n    return next().then((str) => {\n      if (typeof(str) === 'string') {\n        return str.toUpperCase();\n      }\n      return str;\n    });\n  },\n}\n\n// Provide resolver functions for your schema fields\nconst resolvers = {\n  Query: {\n    hello: (root, args, context) => {\n      return 'Hello world!';\n    },\n  },\n};\n\nexport const schema = makeExecutableSchema({\n  typeDefs,\n  resolvers,\n  directiveResolvers,\n});\n\nconst query = `\nquery UPPER_HELLO {\n  hello\n}\n`;\n\ngraphql(schema, query).then((result) => console.log('Got result', result));\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: next() always return a Promise for consistency, resolved with original resolver value or rejected with an error.")),Object(o.b)("h2",{id:"multi-directives-example"},"Multi-Directives example"),Object(o.b)("p",null,"Multi-Directives on a field will be apply with LTR order."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// graphql-tools combines a schema string with resolvers.\nimport { makeExecutableSchema } from '@graphql-tools/schema';\n\n// Construct a schema, using GraphQL schema language\nconst typeDefs = `\n  directive @upper on FIELD_DEFINITION\n  directive @concat(value: String!) on FIELD_DEFINITION\n\n  type Query {\n    foo: String @concat(value: \"@gmail.com\") @upper\n  }\n`;\n\n// Customs directives, check https://github.com/ardatan/graphql-tools/pull/518\n// for more examples\nconst directiveResolvers = {\n  upper(\n    next,\n    src,\n    args,\n    context,\n  ) {\n    return next().then((str) => {\n      if (typeof(str) === 'string') {\n        return str.toUpperCase();\n      }\n      return str;\n    });\n  },\n  concat(\n    next,\n    src,\n    args,\n    context,\n  ) {\n    return next().then((str) => {\n      if (typeof(str) !== 'undefined') {\n        return `${str}${args.value}`;\n      }\n      return str;\n    });\n  },\n}\n\n// Provide resolver functions for your schema fields\nconst resolvers = {\n  Query: {\n    foo: (root, args, context) => {\n      return 'foo';\n    },\n  },\n};\n\n// Required: Export the GraphQL.js schema object as \"schema\"\nexport const schema = makeExecutableSchema({\n  typeDefs,\n  resolvers,\n  directiveResolvers,\n});\n")),Object(o.b)("p",null,"The result with query ",Object(o.b)("inlineCode",{parentName:"p"},"{foo}")," will be:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "foo": "FOO@GMAIL.COM"\n  }\n}\n')),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)("h3",{id:"directiveresolvers-option"},"directiveResolvers option"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { makeExecutableSchema } from '@graphql-tools/schema';\n\nconst directiveResolvers = {\n  // directive resolvers implement\n};\n\nconst schema = makeExecutableSchema({\n  // ... other options\n  directiveResolvers,\n})\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"makeExecutableSchema")," has new option field is ",Object(o.b)("inlineCode",{parentName:"p"},"directiveResolvers"),", a map object for custom Directive's resolvers."),Object(o.b)("h3",{id:"attachdirectiveresolvers"},"attachDirectiveResolvers"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { attachDirectiveResolvers } from '@graphql-tools/schema';\n\nconst directiveResolvers = {\n  // directive resolvers implement\n};\n\nschemaWithDirectiveResolvers = attachDirectiveResolvers(\n  schema,\n  directiveResolvers,\n);\n")),Object(o.b)("p",null,"Given an instance of GraphQLSchema and a ",Object(o.b)("inlineCode",{parentName:"p"},"directiveResolvers")," map object, ",Object(o.b)("inlineCode",{parentName:"p"},"attachDirectiveResolvers")," returns a new schema in which all fields' resolver have been wrapped with directive resolvers."))}p.isMDXComponent=!0},552:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},v=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),v=n,d=u["".concat(i,".").concat(v)]||u[v]||m[v]||o;return r?a.a.createElement(d,c(c({ref:t},l),{},{components:r})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=v;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}v.displayName="MDXCreateElement"}}]);