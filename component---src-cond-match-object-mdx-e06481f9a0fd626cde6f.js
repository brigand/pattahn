(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{wgOm:function(t,e,n){"use strict";n.r(e),n.d(e,"_frontmatter",(function(){return c})),n.d(e,"default",(function(){return p}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk"),n("mXGw");var o=n("/FXl"),a=n("TjRS");n("aD51");function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/cond/MatchObject.mdx"}});var s={_frontmatter:c},i=a.a;function p(t){var e=t.components,n=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,["components"]);return Object(o.b)(i,r({},s,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"matchobject-condition"},"MatchObject (condition)"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"MatchObject")," condition is more complex than other matchers, but also very\npowerful. It uses the ",Object(o.b)("a",r({parentName:"p"},{href:"/into-condition"}),"IntoCondition")," transform for values, so you can mix ",Object(o.b)("inlineCode",{parentName:"p"},"Condition"),"\ninstances and primitives, or even nest objects."),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-js"}),"import match from 'pattahn';\nimport MatchObject from 'pattahn/cond/MatchObject';\n\nconst USER = {\n  type: 'user',\n  data: { name: 'John Doe' },\n};\nconst POST = {\n  type: 'post',\n  data: { title: 'A study of placeholder names' },\n};\n\nconst USER_PATTERN = MatchObject({\n  type: 'user',\n  // This property will be added to the arguments of the pattern branch handler\n  data: MatchObject.Output(),\n});\n\nconst POST_PATTERN = MatchObject({\n  type: 'post',\n  data: MatchObject.Output(),\n});\n\nconst results = [USER, POST].map((value) =>\n  match(value)\n    .with(USER_PATTERN, (obj, user) => `user: ${user.name}`)\n    .with(POST_PATTERN, (obj, post) => `post: ${post.title}`)\n    .exec(),\n);\n\nexpect(results).toEqual(['user: John Doe', 'post: A study of placeholder names']);\n")))}p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/cond/MatchObject.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-cond-match-object-mdx-e06481f9a0fd626cde6f.js.map