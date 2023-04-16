"use strict";(self.webpackChunkwords_to_kick_your_teeth_out=self.webpackChunkwords_to_kick_your_teeth_out||[]).push([[518],{3897:function(e,n,r){r.d(n,{Zo:function(){return l},ah:function(){return i}});var s=r(7294);const t=s.createContext({});function i(e){const n=s.useContext(t);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function l(e){let n,{components:r,children:l,disableParentContext:o}=e;return n=o?"function"==typeof r?r({}):r||a:i(r),s.createElement(t.Provider,{value:n},l)}},3197:function(e,n,r){r.r(n),r.d(n,{Head:function(){return u},default:function(){return m}});var s=r(7294),t=r(5893),i=r(3897),a=r(1554);function l(e){const n=Object.assign({p:"p",a:"a",strong:"strong",h2:"h2",pre:"pre",code:"code",del:"del",em:"em",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Common poetry markup is inaccessible, unsemantic and doesn't display\nwell. I am not skilled in accessibility and I don't have good\nsolutions.  See ",(0,t.jsx)(n.a,{href:"#try-it",children:(0,t.jsx)(a.l,{children:"Try It"})})," if you want to try out a screen\nreader yourself."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Special thanks to the kind people who helped edit this post."})}),"\n",(0,t.jsx)(n.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsxs)(n.p,{children:["The art of the spoken word is not accessible to the visually impaired.\nMost markup navigates awkwardly, does not insert appropriate pauses\nfor breath, and mispronounces stress and sounds.  Consider\n",(0,t.jsx)(n.a,{href:"#markupa",children:(0,t.jsx)(a.l,{children:"Markup A"})})," and ",(0,t.jsx)(n.a,{href:"#markupb",children:(0,t.jsx)(a.l,{children:"Markup\nB"})}),".  In ",(0,t.jsx)(n.a,{href:"#markupa",children:(0,t.jsx)(a.l,{children:"Markup A"})})," a poem is\nan ordered list of stanzas and stanzas are ordered lists of verses.\nIn ",(0,t.jsx)(n.a,{href:"#markupb",children:(0,t.jsx)(a.l,{children:"Markup B"})})," poems are sequences of stanzas,\nstanzas are paragraphs and lines in a paragraph are separated by line\nbreak elements."]}),"\n",(0,t.jsx)(n.pre,{id:"markupa",title:"Markup A",children:(0,t.jsx)(n.code,{className:"language-html",children:'<ol class="poem">\n<li>\n    <ol>\n        <li>Roses are red</li>\n        <li>Violets are blue,</li>\n        <li>Sugar is sweet</li>\n        <li>And so are you.</li>\n    </ol>\n</li>\n</ol>\n'})}),"\n",(0,t.jsx)(n.pre,{id:"markupb",title:"Markup B",children:(0,t.jsx)(n.code,{className:"language-html",children:'<p class="stanza">Roses are red<br>\nViolets are blue,<br>\nSugar is sweet<br>\nAnd so are you.</p>\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"#markupa",children:(0,t.jsx)(a.l,{children:"Markup A"})})," is hard to navigate as each line in\nan ordered list must be manually tracked through.  As well ",(0,t.jsxs)("q",{children:["line\n",(0,t.jsx)("var",{children:"m"})," of ",(0,t.jsx)("var",{children:"n"})]})," is repeated for every line of\n",(0,t.jsx)(n.a,{href:"#markupa",children:(0,t.jsx)(a.l,{children:"Markup A"})}),".  You can use the ",(0,t.jsx)(n.code,{children:"presentation"}),"\nARIA role as in ",(0,t.jsx)(n.a,{href:"#markupa2",children:(0,t.jsx)(a.l,{children:"Markup A"})})," and ",(0,t.jsx)(n.a,{href:"#markupa3",children:(0,t.jsx)(a.l,{children:"Markup\nA3"})})," to ameliorate the problem.  By the spec using\nthe ",(0,t.jsx)(n.code,{children:"presentation"})," role in a list item for a list already marked with\na ",(0,t.jsx)(n.code,{children:"presentation"})," role doesn't do much, but such markup can reduce\ncruft in Firefox's accessibility inspector."]}),"\n",(0,t.jsx)(n.pre,{id:"markupa2",title:"Markup A2",children:(0,t.jsx)(n.code,{className:"language-html",children:'<ol class="poem">\n<li>\n    <ol role="presentation">\n        <li role="presentation">Roses are red</li>\n        <li role="presentation">Violets are blue,</li>\n        <li role="presentation">Sugar is sweet</li>\n        <li role="presentation">And so are you.</li>\n    </ol>\n</li>\n</ol>\n'})}),"\n",(0,t.jsx)(n.pre,{id:"markupa3",title:"Markup A3",children:(0,t.jsx)(n.code,{className:"language-html",children:'<ol class="poem" role="presentation">\n<li>\n    <ol role="presentation">\n        <li role="presentation">Roses are red</li>\n        <li role="presentation">Violets are blue,</li>\n        <li role="presentation">Sugar is sweet</li>\n        <li role="presentation">And so are you.</li>\n    </ol>\n</li>\n</ol>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["As a ",(0,t.jsx)("i",{children:"nuclear"})," solution you can markup the text for graphical\ndisplay using the ",(0,t.jsx)(n.code,{children:"graphic"})," role as in ",(0,t.jsx)(n.a,{href:"#markupn",children:(0,t.jsx)(a.l,{children:"Markup\nN"})}),".  I advise use of the ",(0,t.jsx)(n.del,{children:(0,t.jsx)(n.code,{children:"aria-labelledby"})}),"\n",(0,t.jsx)(n.code,{children:"aria-details"})," (2022-11-28) attribute instead of the ",(0,t.jsx)(n.code,{children:"aria-label"}),"\nattribute here. ",(0,t.jsx)(n.code,{children:"aria-label"})," has a tendency to work poorly with\nnewlines in text, is not usually translated by automated tools and\ndoesn't let you embed more markup as appropriate."]}),"\n",(0,t.jsx)(n.pre,{id:"markupn",title:"Markup N",children:(0,t.jsx)(n.code,{className:"language-html",children:'<figure>\n<div role="img" aria-details="transcript">\n<ol class="poem">\n<li>\n    <ol>\n        <li>Roses are red</li>\n        <li>Violets are blue,</li>\n        <li>Sugar is sweet</li>\n        <li>And so are you.</li>\n    </ol>\n</li>\n</ol>\n</div>\n<figcaption id="transcript">\n<p>Transcript for text to speech:</p>\n<p>Roses are red ;\n   Violets are blue,\n   Sugar is sweet ;\n   And so are you.</p>\n</figcaption>\n</figure>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In some setups ",(0,t.jsx)(n.a,{href:"#markupb",children:(0,t.jsx)(a.l,{children:"Markup B"})})," sounds yucky.  Ending\nand starting words in separate lines like ",(0,t.jsx)("i",{children:"red"})," and\n",(0,t.jsx)("i",{children:"Violets"})," run together.  You might include extra punctuation\nannotated with a screen-reader-only class as with ",(0,t.jsx)(n.a,{href:"#markupb2",children:(0,t.jsx)(a.l,{children:"Markup\nB HTML"})})," and ",(0,t.jsx)(n.a,{href:"#markupb3",children:(0,t.jsx)(a.l,{children:"Markup B CSS"})})," to work around this issue.\nHowever, on Firefox this hack breaks up lines into separate areas to\ntrack through."]}),"\n",(0,t.jsx)(n.pre,{id:"markupb2",title:"Markup B HTML",children:(0,t.jsx)(n.code,{className:"language-html",children:'<p>Roses are red<span class="sr-only">; </span><br>\nViolets are blue,<br>\nSugar is sweet<span class="sr-only">; </span><br>\nAnd so are you.</p>\n'})}),"\n",(0,t.jsx)(n.pre,{id:"markupb3",title:"Markup B CSS",children:(0,t.jsx)(n.code,{className:"language-css",children:".sr-only {\n   display: inline-block ;\n   user-select: none ;\n   font-size: 1px ;\n   line-height: 1px ;\n   color: transparent ;\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["No revisions of ",(0,t.jsx)(n.a,{href:"#markupa",children:(0,t.jsx)(a.l,{children:"Markup A"})})," or ",(0,t.jsx)(n.a,{href:"#markupb",children:(0,t.jsx)(a.l,{children:"Markup B"})})," ensure\nproper pronunciation of stress and sounds.  Only American English is\nlikely to be pronounced correctly. To help, you can set the language\nattribute for documents and poems as appropriate.  However, this is\nnot a complete solution."]}),"\n",(0,t.jsxs)(n.p,{children:["As an anglophone Canadian author I set the language attribute for my\ndocuments and poems to ",(0,t.jsx)(n.code,{children:"en-CA"}),". However, this only helps with English\nwords and not with imports from other languages.  I don't know how to\nhelp screen readers pronounce names of mythical figures.  You could\nmarkup individual phrases like ",(0,t.jsx)(n.code,{children:'<i lang="non">Sleipnir</i>'})," (old\nNorse) and ",(0,t.jsx)(n.code,{children:'<i lang="gem">Wotan</i>'})," (Germanic languages group) but\nthis particular markup doesn't help."]}),"\n",(0,t.jsxs)(n.p,{children:["Semantically you might markup stress with emphasis with the ",(0,t.jsx)(n.code,{children:"em"}),"\nelement.  However, such markup is verbose and many screen readers\nignore elements like ",(0,t.jsx)(n.code,{children:"em"})," because of the heavy unsemantic abuse of\nsuch elements in the wider internet for presenting bold text."]}),"\n",(0,t.jsxs)(n.p,{children:["Perhaps there might be some obscure Unicode diacritics for better\nmarking up the prosody but I have not explored this option.  I worry\nthat such glyphs might be pronounced in common screen readers as\nsomething like ",(0,t.jsx)("q",{children:"Unicode character 591"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"presentation",children:"Presentation"}),"\n",(0,t.jsx)(n.p,{children:"Laying out poetry on small formats is awkward.  In print the standard\nlayout for overlong lines is to align the first line ragged right and\nall other lines ragged left."}),"\n",(0,t.jsxs)(n.p,{children:["You can approximate a poetry layout with a hanging indent layout\nsomething like ",(0,t.jsx)(n.a,{href:"#indentcss",children:(0,t.jsx)(a.l,{children:"Indent CSS"})}),".  However, a\nhanging indent layout is not really correct."]}),"\n",(0,t.jsx)(n.pre,{id:"indentcss",title:"Indent CSS",children:(0,t.jsx)(n.code,{className:"language-css",children:".line {\n   text-indent: -4ch ;\n   margin-left: 4ch ;\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can approximate a poetry layout on the web by aligning every line\nblock to the left but aligning the last line of the text ",(0,t.jsx)(n.em,{children:"within"})," the\nline block to the right.  Something like ",(0,t.jsx)(n.a,{href:"#alignlastcss",children:(0,t.jsx)(a.l,{children:"Align Last\nCSS"})})," almost works for a poetry layout.  However,\neven this layout fails when you overflow multiple lines."]}),"\n",(0,t.jsx)(n.pre,{id:"alignlastcss",title:"Align Last CSS",children:(0,t.jsx)(n.code,{className:"language-css",children:".stanza {\n   display: flex ;\n   flex-direction: column ;\n   align-items: start ;\n}\n.line {\n   display: block ;\n   text-align-last: end ;\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"#examplecode",children:(0,t.jsx)(a.l,{children:"Example Code"})})," is similar to the current\ncompromise I use on this site."]}),"\n",(0,t.jsx)(n.pre,{id:"examplecode",title:"Example Code",children:(0,t.jsx)(n.code,{className:"language-html",children:'<style>\n#scope p {\n   text-indent: 0 ;\n   padding: 0 ;\n}\n#scope p > span {\n   display: inline-block ;\n   text-align-last: end ;\n}\n</style>\n<div id="scope" lang="en-CA">\n<p>\n  <span>Roses are red</span><br>\n  <span>Violets are blue</span><br>\n  <span>Sugar is sweet</span><br>\n  <span>aaaaaaaaaaaaaaaa.</span>\n</p>\n</div>\n'})}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsxs)(n.p,{children:["You should use the ",(0,t.jsx)(n.code,{children:"audio"})," element to markup poetry."]}),"\n",(0,t.jsx)(n.h2,{id:"try-it",children:"Try It"}),"\n",(0,t.jsxs)(n.p,{children:["Personally I found Android TalkBack to be the easiest screen reader to\nget started with. ",(0,t.jsxs)(n.a,{href:"https://www.a11yproject.com",children:["The helpful ",(0,t.jsx)(a.l,{children:"A11y Project"}),"\nblog"]})," has a number of guides on getting\nstarted with screen readers but they might be a little old."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.a11yproject.com/posts/getting-started-with-orca",children:(0,t.jsx)(a.l,{children:"Getting Started with Orca screen reader on Gnome desktop environment on Ubuntu 20.04 LTS"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.a11yproject.com/posts/getting-started-with-voiceover-ios",children:(0,t.jsx)(a.l,{children:"Getting Started with VoiceOver on iOS"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.a11yproject.com/posts/getting-started-with-nvda",children:(0,t.jsx)(a.l,{children:"Getting Started with NVDA"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.a11yproject.com/posts/getting-started-with-voiceover",children:(0,t.jsx)(a.l,{children:"Getting Started with MacOS VoiceOver"})})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"and-one-more-thing",children:"And One More Thing"}),"\n",(0,t.jsxs)(n.p,{children:["As of this blog post, the ",(0,t.jsx)(n.a,{href:"https://www.w3.org/TR/css-speech-1/",children:(0,t.jsx)(a.l,{children:"CSS Speech\nModule"})})," has never really\ngone anywhere.  Perhaps in the future the ",(0,t.jsx)(n.code,{children:"voice-stress"}),",\n",(0,t.jsx)(n.code,{children:"voice-duration"})," (for long syllables), ",(0,t.jsx)(n.code,{children:"voice-pitch"})," (for pitch\naccent) and ",(0,t.jsx)(n.code,{children:"pause"})," properties would solve these sort of accessibility\nproblems."]}),"\n",(0,t.jsx)(n.p,{children:"*[HTML]: HyperText Markup Language"}),"\n",(0,t.jsx)(n.p,{children:"*[CSS]: Cascading Style Sheets"}),"\n",(0,t.jsx)(n.p,{children:"*[ARIA]: Accessible Rich Internet Applications"})]})}var o=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)},c=r(6474),d=r(3398),h=r(2036);const u=e=>{let{data:{postMdx:{post:n}}}=e;return s.createElement(c.Y,{post:n})},p=e=>{let{children:n,data:{postMdx:r}}=e;const{post:t,mdx:i}=r;return s.createElement(d.s,{post:t,headings:i.tableOfContents.items},s.createElement(h.S,r,n))};function m(e){return s.createElement(p,e,s.createElement(o,e))}},3805:function(e,n,r){r.d(n,{r:function(){return v}});var s=r(637),t=r(359),i=r(6054),a=r(5893);const l=e=>(0,a.jsx)("blockquote",{className:"blockquote-module--blockquote--714d2",...e});const o=e=>(0,a.jsx)("code",{className:"code-module--code--44ad3",...e});const c=e=>(0,a.jsx)("hr",{className:"hr-module--hr--793bf",...e});var d=r(6205),h=r(7831);const u=e=>{const n=e.displayName||e.name||"Component",r=n=>{let{id:r,children:s,tabIndex:t="-1",...l}=n;const o=r&&`#${r}`;return(0,a.jsxs)("header",{className:"heading-module--heading--888aa",children:[(0,a.jsx)(d.h,{children:(0,a.jsx)(e,{...l,id:r,tabIndex:t,children:s})}),o&&(0,a.jsx)(i.A,{className:"heading-module--autolink--16bd8",href:o,"aria-describedby":r,children:"#"})]})};return r.displayName=`createAutoLink(${n})`,r},p=h.H1,m=u(h.H2),x=u(h.H3),j=u(h.H4),g=u(h.H5),f=u(h.H6);var y=r(7294),k="pre-module--pre--1612a";const b=e=>{var n;const r=[k,null!==(n=e.className)&&void 0!==n?n:""].join(" ");return(0,a.jsx)("pre",{...e,className:r})};const w=e=>{let{children:n,id:r,title:s}=e;const t=(0,y.useRef)(),l=(0,y.useId)(),o=`${l}-caption`,c=`${l}-focus`;return(0,a.jsxs)("figure",{id:r,ref:t,className:"pre-module--figure--43fd3",children:[(0,a.jsx)("figcaption",{id:o,className:"pre-module--figcaption--b1a13",children:(0,a.jsx)("span",{className:"pre-module--title--46c65",children:s})}),(0,a.jsx)(i.A,{id:c,className:"pre-module--autolink--08ec9",href:`#${r}`,"aria-describedby":o,children:"Focus"}),(0,a.jsx)(b,{children:n})]})};const v={...{h1:p,h2:m,h3:x,h4:j,h5:g,h6:f},...{ul:s.Ul,ol:s.Ol,menu:s.v,li:s.Li,p:t.P,a:i.A,blockquote:l,code:o,pre:w,hr:c}}},2036:function(e,n,r){r.d(n,{S:function(){return h}});var s=r(3897),t=r(3805),i=r(4950),a=r(3063),l=r(3370);const o={...t.r,ul:i.Lg,li:a.L,Caesura:l.F},c=e=>{switch(e){case"Poem":return o;case"Prose":case"Web":return t.r;default:throw new Error(`Unrecognized category ${e}`)}};var d=r(5893);const h=e=>{let{children:n,post:{category:r}}=e;const t=c(r);return(0,d.jsx)(s.Zo,{components:t,children:n})}},637:function(e,n,r){r.d(n,{Li:function(){return d},v:function(){return c},Ol:function(){return l},Ul:function(){return o}});var s=r(7294),t="list-module--unorderedList--1a29f",i=r(5893);const a=(0,s.createContext)(null),l=(0,s.forwardRef)((function(e,n){let{children:r,...s}=e;return(0,i.jsx)("ol",{role:"list",className:"list-module--orderedList--d8f82",...s,ref:n,children:(0,i.jsx)(a.Provider,{value:s.reversed?"rol":"ol",children:r})})})),o=(0,s.forwardRef)((function(e,n){let{children:r,...s}=e;return(0,i.jsx)("ul",{role:"list",className:t,...s,ref:n,children:(0,i.jsx)(a.Provider,{value:"ul",children:r})})})),c=(0,s.forwardRef)((function(e,n){let{children:r,...s}=e;return(0,i.jsx)("menu",{role:"list",className:t,...s,ref:n,children:(0,i.jsx)(a.Provider,{value:"ul",children:r})})})),d=e=>{let{children:n,...r}=e;const t={ul:"list-module--uitem--63afd",ol:"list-module--oitem--9c6ac",rol:"list-module--roitem--a048a"}[(0,s.useContext)(a)];return(0,i.jsx)("li",{role:"listitem",className:t,...r,children:(0,i.jsx)("div",{className:"list-module--content--5f318",children:n})})}},359:function(e,n,r){r.d(n,{P:function(){return t}});var s=r(5893);const t=e=>(0,s.jsx)("p",{className:"p-module--p--1f3a4",...e})}}]);
//# sourceMappingURL=component---src-templates-post-mdx-jsx-content-file-path-content-blog-web-2022-11-25-marking-up-poetry-mdx-ea4a78b1715a17e0279a.js.map