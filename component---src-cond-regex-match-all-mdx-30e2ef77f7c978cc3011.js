(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"2ZDC":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return p}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk"),n("mXGw");var a=n("/FXl"),r=n("TjRS"),c=n("7JDl");n("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/cond/RegexMatchAll.mdx"}});var i={_frontmatter:l},s=r.a;function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(s,o({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(c.a,{mdxType:"CondType"},"RegexMatchAll(key: string | RegExp)"),Object(a.b)("p",null,"This condition matches when the input is a string/number, even if the total number of\nmatches is 0. The resulting value will be the result of ",Object(a.b)("inlineCode",{parentName:"p"},"string.matchAll(regex)")," (",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/ljharb/String.prototype.matchAll"}),"a\nshim")," is included for now)."),Object(a.b)("p",null,"See the ",Object(a.b)("a",o({parentName:"p"},{href:"/cond/RegexBase"}),"RegexBase")," docs for different ways to construct a ",Object(a.b)("inlineCode",{parentName:"p"},"RegexMatchAll"),"."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-js"}),"import RegexMatchAll from 'pattahn/cond/RegexMatchAll';\n\nconst matches = RegexMatchAll(/\\d+/g)\n  .exec('7 a 32 b 49')\n  .shift()\n  .map((match) => match[0]);\n\nexpect(matches).toEqual(['7', '32', '49']);\n")))}p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/cond/RegexMatchAll.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-cond-regex-match-all-mdx-30e2ef77f7c978cc3011.js.map