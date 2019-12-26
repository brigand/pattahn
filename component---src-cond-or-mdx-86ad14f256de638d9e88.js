(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"g+Yn":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return a})),n.d(t,"default",(function(){return l}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk"),n("mXGw");var r=n("/FXl"),o=n("TjRS");n("aD51");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var a={};void 0!==a&&a&&a===Object(a)&&Object.isExtensible(a)&&!a.hasOwnProperty("__filemeta")&&Object.defineProperty(a,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/cond/Or.mdx"}});var i={_frontmatter:a},s=o.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(r.b)(s,c({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"or-condition"},"Or (condition)"),Object(r.b)("p",null,"Matches when either condition matches. Prefers returning the first condition's result,\nand won't execute the second condition if the first matches."),Object(r.b)("pre",null,Object(r.b)("code",c({parentName:"pre"},{className:"language-js"}),"import match from 'matchany';\nimport Or from 'matchany/cond/Or';\nimport Eq from 'matchany/cond/Eq';\n\nconst VALUE = 2;\n\nconst result = match()\n  .with(Or(Eq(1), Eq(2)), 'matches')\n  .exec(VALUE);\n\nexpect(result).toBe('matches');\n")),Object(r.b)("p",null,"It's also available as ",Object(r.b)("inlineCode",{parentName:"p"},"Condition#or")),Object(r.b)("pre",null,Object(r.b)("code",c({parentName:"pre"},{className:"language-js"}),"const VALUE = 2;\n\nconst result = match()\n  .with(Eq(1).or(Eq(2)), 'matches')\n  .exec(VALUE);\n\nexpect(result).toBe('matches');\n")))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/cond/Or.mdx"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-cond-or-mdx-86ad14f256de638d9e88.js.map