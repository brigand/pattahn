(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{wgOm:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return u}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk"),n("mXGw");var a=n("/FXl"),o=n("TjRS"),r=n("7JDl");n("aD51");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/cond/MatchObject.mdx"}});var i={_frontmatter:s},p=o.a;function u(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(p,c({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(r.a,{mdxType:"CondType"},"MatchObject(shape: Object)"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"MatchObject")," condition is more complex than other matchers, but also very\npowerful. It uses the ",Object(a.b)("a",c({parentName:"p"},{href:"/into-condition"}),"IntoCondition")," transform for values, so you can mix ",Object(a.b)("inlineCode",{parentName:"p"},"Condition"),"\ninstances and primitives, or even nest objects."),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-js"}),"import match from 'pattahn';\nimport MatchObject from 'pattahn/cond/MatchObject';\n\nconst USER = {\n  type: 'user',\n  data: { name: 'John Doe' },\n};\nconst POST = {\n  type: 'post',\n  data: { title: 'A study of placeholder names' },\n};\n\nconst USER_PATTERN = MatchObject({\n  type: 'user',\n  // This property will be added to the arguments of the pattern branch handler\n  data: MatchObject.Output(),\n});\n\nconst POST_PATTERN = MatchObject({\n  type: 'post',\n  data: MatchObject.Output(),\n});\n\nconst results = [USER, POST].map((value) =>\n  match(value)\n    .with(USER_PATTERN, (obj, user) => `user: ${user.name}`)\n    .with(POST_PATTERN, (obj, post) => `post: ${post.title}`)\n    .exec(),\n);\n\nexpect(results).toEqual(['user: John Doe', 'post: A study of placeholder names']);\n")))}u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/cond/MatchObject.mdx"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-cond-match-object-mdx-14380c6e0073a012b45e.js.map