(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"2ZDC":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return s}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk"),n("mXGw");var a=n("/FXl"),r=n("TjRS");n("aD51");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/cond/RegexMatchAll.mdx"}});var l={_frontmatter:o},i=r.a;function s(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(i,c({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"regexmatchall-condition"},"RegexMatchAll (condition)"),Object(a.b)("p",null,"This condition matches when the input is a string/number, even if the total number of\nmatches is 0. The resulting value will be the result of ",Object(a.b)("inlineCode",{parentName:"p"},"string.matchAll(regex)")," (",Object(a.b)("a",c({parentName:"p"},{href:"https://github.com/ljharb/String.prototype.matchAll"}),"a\nshim")," is included for now)."),Object(a.b)("p",null,"See the ",Object(a.b)("a",c({parentName:"p"},{href:"/cond/RegexBase"}),"RegexBase")," docs for different ways to construct a ",Object(a.b)("inlineCode",{parentName:"p"},"RegexMatchAll"),"."),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-js"}),"import RegexMatchAll from 'pattahn/cond/RegexMatchAll';\n\nconst matches = RegexMatchAll(/\\d+/g)\n  .exec('7 a 32 b 49')\n  .shift()\n  .map((match) => match[0]);\n\nexpect(matches).toEqual(['7', '32', '49']);\n")))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/cond/RegexMatchAll.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-cond-regex-match-all-mdx-e0d8fcbdb8358513a49e.js.map