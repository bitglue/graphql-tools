(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{141:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(7),o=(t(0),t(207)),i={id:"generate-schema",title:"Executable schemas",description:"Generate a GraphQL schema from the concise type definition language."},s={unversionedId:"generate-schema",id:"generate-schema",isDocsHomePage:!1,title:"Executable schemas",description:"Generate a GraphQL schema from the concise type definition language.",source:"@site/docs/generate-schema.md",slug:"/generate-schema",permalink:"/docs/generate-schema",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/generate-schema.md",version:"current",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/docs/introduction"},next:{title:"Resolvers",permalink:"/docs/resolvers"}},l=[{value:"Example",id:"example",children:[]},{value:"Extending Types",id:"extending-types",children:[]},{value:"Learning the GraphQL schema language",id:"learning-the-graphql-schema-language",children:[]},{value:"Descriptions &amp; Deprecations",id:"descriptions--deprecations",children:[]},{value:"API",id:"api",children:[{value:"makeExecutableSchema(options)",id:"makeexecutableschemaoptions",children:[]}]}],c={rightToc:l};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The graphql-tools package allows you to create a GraphQL.js GraphQLSchema instance from GraphQL schema language using the function ",Object(o.b)("inlineCode",{parentName:"p"},"makeExecutableSchema"),"."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"When using ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-tools"),", you describe the schema as a GraphQL type language string:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const typeDefs = `\n  type Author {\n    id: Int!\n    firstName: String\n    lastName: String\n    """\n    the list of Posts by this author\n    """\n    posts: [Post]\n  }\n\n  type Post {\n    id: Int!\n    title: String\n    author: Author\n    votes: Int\n  }\n\n  # the schema allows the following query:\n  type Query {\n    posts: [Post]\n    author(id: Int!): Author\n  }\n\n  # this schema allows the following mutation:\n  type Mutation {\n    upvotePost (\n      postId: Int!\n    ): Post\n  }\n`;\n')),Object(o.b)("p",null,"Then you define resolvers as a nested object that maps type and field names to resolver functions:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { find, filter } from 'lodash';\n\n// example data\nconst authors = [\n  { id: 1, firstName: 'Tom', lastName: 'Coleman' },\n  { id: 2, firstName: 'Sashko', lastName: 'Stubailo' },\n  { id: 3, firstName: 'Mikhail', lastName: 'Novikov' },\n];\n\nconst posts = [\n  { id: 1, authorId: 1, title: 'Introduction to GraphQL', votes: 2 },\n  { id: 2, authorId: 2, title: 'Welcome to Meteor', votes: 3 },\n  { id: 3, authorId: 2, title: 'Advanced GraphQL', votes: 1 },\n  { id: 4, authorId: 3, title: 'Launchpad is Cool', votes: 7 },\n];\n\nconst resolvers = {\n  Query: {\n    posts: () => posts,\n    author: (_, { id }) => find(authors, { id }),\n  },\n\n  Mutation: {\n    upvotePost: (_, { postId }) => {\n      const post = find(posts, { id: postId });\n      if (!post) {\n        throw new Error(`Couldn't find post with id ${postId}`);\n      }\n      post.votes += 1;\n      return post;\n    },\n  },\n\n  Author: {\n    posts: author => filter(posts, { authorId: author.id }),\n  },\n\n  Post: {\n    author: post => find(authors, { id: post.authorId }),\n  },\n};\n")),Object(o.b)("p",null,"At the end, the schema and resolvers are combined using ",Object(o.b)("inlineCode",{parentName:"p"},"makeExecutableSchema"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { makeExecutableSchema } from '@graphql-tools/schema';\n\nexport const schema = makeExecutableSchema({\n  typeDefs,\n  resolvers,\n});\n")),Object(o.b)("p",null,"This example has the entire type definition in one string and all resolvers in one object, but you can combine types and resolvers from multiple files, as documented in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#extending-types"}),"extending types")," section below."),Object(o.b)("h2",{id:"extending-types"},"Extending Types"),Object(o.b)("p",null,"It's easy to add additional fields to existing types using the ",Object(o.b)("inlineCode",{parentName:"p"},"extend")," keyword.  Using ",Object(o.b)("inlineCode",{parentName:"p"},"extend")," is particularly useful in avoiding a large list of fields on root Queries and Mutations.  You can use it like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const typeDefs = [`\n  schema {\n    query: Query\n  }\n\n  type Query {\n    bars: [Bar]!\n  }\n\n  type Bar {\n    id\n  }\n  `, `\n  type Foo {\n    id: String!\n  }\n\n  extend type Query {\n    foos: [Foo]!\n  }\n`]\n")),Object(o.b)("p",null,"If one of the types extended needs a resolver you can use ",Object(o.b)("inlineCode",{parentName:"p"},"makeExecutableSchema")," like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const barsResolver = {\n  Query: {\n    bars(parent, args, context, info) {\n      // ...\n    }\n  }\n};\n\nconst foosResolver = {\n  Query: {\n    foos(parent, args, context, info) {\n      // ...\n    }\n  }\n}\n\nconst schema = makeExecutableSchema({\n  typeDefs,\n  resolvers: [barsResolver, foosResolver]\n})\n")),Object(o.b)("h2",{id:"learning-the-graphql-schema-language"},"Learning the GraphQL schema language"),Object(o.b)("p",null,"The official documentation on graphql.org now has ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://graphql.org/learn/schema/"}),"a section about GraphQL schemas")," which explains all of the different schema features and how to use them with the schema language."),Object(o.b)("p",null,"The type definitions must define a query type, which means a minimal schema would look something like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const typeDefs = [`\n  schema {\n    query: RootQuery\n  }\n\n  type RootQuery {\n    aNumber: Int\n  }\n`];\n")),Object(o.b)("h2",{id:"descriptions--deprecations"},"Descriptions & Deprecations"),Object(o.b)("p",null,"GraphiQL has built-in support for displaying docstrings with markdown syntax. You can easily add docstrings to types, fields and arguments like below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'"""\nDescription for the type\n"""\ntype MyObjectType {\n  """\n  Description for field\n  Supports multi-line description\n  """\n  myField: String!\n\n  otherField(\n    """\n    Description for argument\n    """\n    arg: Int\n  )\n\n  oldField(\n    """\n    Description for argument\n    """\n    arg: Int\n  ) @deprecated(reason: "Use otherField instead.")\n}\n')),Object(o.b)("p",null,"This ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://raw.githubusercontent.com/sogko/graphql-shorthand-notation-cheat-sheet/master/graphql-shorthand-notation-cheat-sheet.png"}),"GraphQL schema language cheat sheet")," by Hafiz Ismail is an excellent reference for all the features of the GraphQL schema language."),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)("h3",{id:"makeexecutableschemaoptions"},"makeExecutableSchema(options)"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"makeExecutableSchema")," takes a single argument: an object of options. Only the ",Object(o.b)("inlineCode",{parentName:"p"},"typeDefs")," option is required. It returns a new schema, modified as specified."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"import { makeExecutableSchema } from '@graphql-tools/schema';\n\nconst jsSchema = makeExecutableSchema({\n  typeDefs,\n  resolvers, // optional\n  logger, // optional\n  allowUndefinedInResolve: false, // optional\n  resolverValidationOptions: {}, // optional\n  directiveResolvers: null, // optional\n  schemaDirectives: null,  // optional\n  schemaTransforms: [],  // optional\n  parseOptions: {},  // optional\n  inheritResolversFromInterfaces: false  // optional\n});\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"typeDefs")," is a required argument and should be an GraphQL schema language string or array of GraphQL schema language strings or a function that takes no arguments and returns an array of GraphQL schema language strings. The order of the strings in the array is not important, but it must include a schema definition.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"resolvers")," is an optional argument ",Object(o.b)("em",{parentName:"p"},"(empty object by default)")," and should be an object or an array of objects that follow the pattern explained in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/resolvers/"}),"article on resolvers"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"logger")," is an optional argument, which can be used to print errors to the server console that are usually swallowed by GraphQL. The ",Object(o.b)("inlineCode",{parentName:"p"},"logger")," argument should be an object with a ",Object(o.b)("inlineCode",{parentName:"p"},"log")," function, eg. ",Object(o.b)("inlineCode",{parentName:"p"},"const logger = { log: e => console.log(e) }"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"parseOptions")," is an optional argument which allows customization of parse when specifying ",Object(o.b)("inlineCode",{parentName:"p"},"typeDefs")," as a string.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"allowUndefinedInResolve")," is an optional argument, which is ",Object(o.b)("inlineCode",{parentName:"p"},"true")," by default. When set to ",Object(o.b)("inlineCode",{parentName:"p"},"false"),", causes your resolver to throw errors if they return undefined, which can help make debugging easier.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"resolverValidationOptions")," is an optional argument with the following properties, each of which can be set to ",Object(o.b)("inlineCode",{parentName:"p"},"error"),", ",Object(o.b)("inlineCode",{parentName:"p"},"warn"),", or ",Object(o.b)("inlineCode",{parentName:"p"},"ignore"),":"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"requireResolversForArgs")," will cause ",Object(o.b)("inlineCode",{parentName:"p"},"makeExecutableSchema")," to throw an error (",Object(o.b)("inlineCode",{parentName:"p"},"error"),") or issue a warning (",Object(o.b)("inlineCode",{parentName:"p"},"warn"),")unless a resolver is defined for every field with arguments. The default is ",Object(o.b)("inlineCode",{parentName:"p"},"ignore"),", causing this validator to be skipped.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"requireResolversForNonScalar")," require a resolver for every non-scalar field. Default is ",Object(o.b)("inlineCode",{parentName:"p"},"ignore"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"requireResolversForAllFields")," asserts that ",Object(o.b)("em",{parentName:"p"},"all")," fields have valid resolvers. This option cannot be set in combination with the previous two validators. Default is ",Object(o.b)("inlineCode",{parentName:"p"},"ignore"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"requireResolversForResolveType")," will require a ",Object(o.b)("inlineCode",{parentName:"p"},"resolveType()")," method for Interface and Union types. This can be passed in with the field resolvers as ",Object(o.b)("inlineCode",{parentName:"p"},"__resolveType()"),". Default is ",Object(o.b)("inlineCode",{parentName:"p"},"ignore"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"requireResolversToMatchSchema")," requires every resolver within the resolver map to correspond to a GraphQL entity within the schema. Defaults to ",Object(o.b)("inlineCode",{parentName:"p"},"error"),", to help catch common errors.")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"inheritResolversFromInterfaces")," GraphQL Objects that implement interfaces will inherit missing resolvers from their interface types defined in the ",Object(o.b)("inlineCode",{parentName:"p"},"resolvers")," object.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"schemaTransforms")," is an optional argument ",Object(o.b)("em",{parentName:"p"},"(empty array by default)")," and should be an array of schema transformation functions, essentially designed to enable the use of ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/schema-directives/"}),"directive-based functional schema transformation"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"schemaDirectives")," is an optional argument ",Object(o.b)("em",{parentName:"p"},"(empty object by default)")," and can be used to specify the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/legacy-schema-directives/"}),"earlier class-based implementation of schema directives")))))}p.isMDXComponent=!0},207:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),p=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},b=function(e){var n=p(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(t),u=a,d=b["".concat(i,".").concat(u)]||b[u]||m[u]||o;return t?r.a.createElement(d,s(s({ref:n},c),{},{components:t})):r.a.createElement(d,s({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);