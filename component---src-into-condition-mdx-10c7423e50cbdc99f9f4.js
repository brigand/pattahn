(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"71MO":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return c})),t.d(n,"default",(function(){return l}));t("5hJT"),t("W1QL"),t("K/PF"),t("t91x"),t("75LO"),t("PJhk"),t("mXGw");var o=t("/FXl"),i=t("TjRS");t("aD51");function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/IntoCondition.mdx"}});var r={_frontmatter:c},b=i.a;function l(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["components"]);return Object(o.b)(b,a({},r,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"intocondition"},"IntoCondition"),Object(o.b)("p",null,"Some APIs will convert non-Condition values to a Condition using some simple logic."),Object(o.b)("p",null,"Functions that perform this conversion are documented as taking a value of type\n",Object(o.b)("inlineCode",{parentName:"p"},"IntoCondition"),"."),Object(o.b)("p",null,"You can explicitly invoke this behavior with ",Object(o.b)("inlineCode",{parentName:"p"},"Condition.from(value)"),"."),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-js"}),"import { Condition } from 'pattahn/core';\n\nexpect(Condition.from(7).test(7)).toBe(true);\n")),Object(o.b)("p",null,'The "Case" sections are in order of preference (if one doesn\'t match, then the next is\ntried).'),Object(o.b)("h2",{id:"case-condition"},"Case: Condition"),Object(o.b)("p",null,"If the value is a ",Object(o.b)("inlineCode",{parentName:"p"},"Condition")," instance, then it's returned immediately and unmodified."),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-js"}),"import Eq from 'pattahn/cond/Eq';\n\nconst arg = Eq(7);\nconst condition = Condition.from(arg);\nexpect(arg).toBe(condition);\n")),Object(o.b)("h2",{id:"case-function"},"Case: Function"),Object(o.b)("p",null,"The function will be wrapped in ",Object(o.b)("inlineCode",{parentName:"p"},"Test"),"."),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-js"}),"const arg = (x) => x > 10;\nconst condition = Condition.from(arg);\n\nexpect(condition.exec(20)).toEqual([20]);\nexpect(condition.exec(5)).toBe(null);\n")),Object(o.b)("h2",{id:"case-regexp"},"Case: RegExp"),Object(o.b)("p",null,"The regex will be wrapped in ",Object(o.b)("inlineCode",{parentName:"p"},"RegexTest"),"."),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-js"}),"const arg = /^ba.$/;\nconst condition = Condition.from(arg);\n\nexpect(condition.exec('bar')).toEqual(['bar']);\nexpect(condition.exec('baz')).toEqual(['baz']);\nexpect(condition.exec('foo')).toBe(null);\n")),Object(o.b)("h2",{id:"case-other-object"},"Case: Other Object"),Object(o.b)("p",null,"The object will be used as a ",Object(o.b)("inlineCode",{parentName:"p"},"MatchObject"),". This can be nested as ",Object(o.b)("inlineCode",{parentName:"p"},"MatchObject")," uses\n",Object(o.b)("inlineCode",{parentName:"p"},"intoCondition")," on the properties."),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-js"}),"const arg = { a: 'foo', b: { c: Eq('bar').or(Eq('baz')) } };\nconst condition = Condition.from(arg);\n\nconst good = {\n  a: 'foo',\n  b: {\n    c: 'baz',\n  },\n};\n\nconst bad = {\n  a: 'foo',\n  b: {\n    c: 'quux',\n  },\n};\n\nexpect(condition.exec(good)).toEqual([good]);\nexpect(condition.exec(bad)).toBe(null);\n")),Object(o.b)("h2",{id:"case-primitive"},"Case: Primitive"),Object(o.b)("p",null,"The final case is where it's a primitive, and we simply wrap it in ",Object(o.b)("inlineCode",{parentName:"p"},"Eq"),"."),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-js"}),"for (const value of [7, 'foo', null, undefined, true, false]) {\n  const condition = Condition.from(value);\n  expect(condition.exec(value)).toEqual([value]);\n}\n")))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/IntoCondition.mdx"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-into-condition-mdx-10c7423e50cbdc99f9f4.js.map