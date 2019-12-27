(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"g+Yn":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return l}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk"),n("mXGw");var r=n("/FXl"),o=n("TjRS");n("aD51");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/cond/Or.mdx"}});var i={_frontmatter:c},s=o.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(r.b)(s,a({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"or-condition"},"Or (condition)"),Object(r.b)("p",null,"Matches when either condition matches. Prefers returning the first condition's result,\nand won't execute the second condition if the first matches."),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),"import match from 'pattahn';\nimport Or from 'pattahn/cond/Or';\nimport Eq from 'pattahn/cond/Eq';\n\nconst VALUE = 2;\n\nconst result = match()\n  .with(Or(Eq(1), Eq(2)), 'matches')\n  .exec(VALUE);\n\nexpect(result).toBe('matches');\n")),Object(r.b)("p",null,"It's also available as ",Object(r.b)("inlineCode",{parentName:"p"},"Condition#or")),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),"const VALUE = 2;\n\nconst result = match()\n  .with(Eq(1).or(Eq(2)), 'matches')\n  .exec(VALUE);\n\nexpect(result).toBe('matches');\n")))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/cond/Or.mdx"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-cond-or-mdx-c15a4bb45cc8d2098ba8.js.map