"use strict";(self.webpackChunkwords_to_kick_your_teeth_out=self.webpackChunkwords_to_kick_your_teeth_out||[]).push([[665],{3875:function(e,t,n){n.r(t),n.d(t,{Head:function(){return E},default:function(){return f}});var a=n(1151),l=n(7294);function r(e){const t=Object.assign({p:"p",a:"a",strong:"strong",h2:"h2",pre:"pre",code:"code",del:"del",em:"em",ul:"ul",li:"li"},(0,a.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.p,null,"Common poetry markup is inaccessible, unsemantic and doesn't display\nwell. I am not skilled in accessibility and I don't have good\nsolutions.  See ",l.createElement(t.a,{href:"#try-it"},l.createElement("cite",null,"Try It"))," if you want to try out a screen\nreader yourself."),"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Special thanks to the kind people who helped edit this post.")),"\n",l.createElement(t.h2,{id:"accessibility"},"Accessibility"),"\n",l.createElement(t.p,null,"The art of the spoken word is not accessible to the visually impaired.\nMost markup navigates awkwardly, does not insert appropriate pauses\nfor breath, and mispronounces stress and sounds.  Consider\n",l.createElement(t.a,{href:"#markupa"},l.createElement("cite",null,"Markup A"))," and ",l.createElement(t.a,{href:"#markupb"},l.createElement("cite",null,"Markup\nB")),".  In ",l.createElement(t.a,{href:"#markupa"},l.createElement("cite",null,"Markup A"))," a poem is\nan ordered list of stanzas and stanzas are ordered lists of verses.\nIn ",l.createElement(t.a,{href:"#markupb"},l.createElement("cite",null,"Markup B"))," poems are sequences of stanzas,\nstanzas are paragraphs and lines in a paragraph are separated by line\nbreak elements."),"\n",l.createElement("figure",{id:"markupa"},l.createElement("figcaption",null,"Markup A"),l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html"},'<ol class="poem">\n<li>\n    <ol>\n        <li>Roses are red</li>\n        <li>Violets are blue,</li>\n        <li>Sugar is sweet</li>\n        <li>And so are you.</li>\n    </ol>\n</li>\n</ol>\n'))),"\n",l.createElement("figure",{id:"markupb"},l.createElement("figcaption",null,"Markup B"),l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html"},'<p class="stanza">Roses are red<br>\nViolets are blue,<br>\nSugar is sweet<br>\nAnd so are you.</p>\n'))),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"#markupa"},l.createElement("cite",null,"Markup A"))," is hard to navigate as each line in\nan ordered list must be manually tracked through.  As well ",l.createElement("q",null,"line\n",l.createElement("var",null,"m")," of ",l.createElement("var",null,"n"))," is repeated for every line of\n",l.createElement(t.a,{href:"#markupa"},l.createElement("cite",null,"Markup A")),".  You can use the ",l.createElement(t.code,null,"presentation"),"\nARIA role as in ",l.createElement(t.a,{href:"#markupa2"},l.createElement("cite",null,"Markup A"))," and ",l.createElement(t.a,{href:"#markupa3"},l.createElement("cite",null,"Markup\nA3"))," to ameliorate the problem.  By the spec using\nthe ",l.createElement(t.code,null,"presentation")," role in a list item for a list already marked with\na ",l.createElement(t.code,null,"presentation")," role doesn't do much, but such markup can reduce\ncruft in Firefox's accessibility inspector."),"\n",l.createElement("figure",{id:"markupa2"},l.createElement("figcaption",null,"Markup A2"),l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html"},'<ol class="poem">\n<li>\n    <ol role="presentation">\n        <li role="presentation">Roses are red</li>\n        <li role="presentation">Violets are blue,</li>\n        <li role="presentation">Sugar is sweet</li>\n        <li role="presentation">And so are you.</li>\n    </ol>\n</li>\n</ol>\n'))),"\n",l.createElement("figure",{id:"markupa3"},l.createElement("figcaption",null,"Markup A3"),l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html"},'<ol class="poem" role="presentation">\n<li>\n    <ol role="presentation">\n        <li role="presentation">Roses are red</li>\n        <li role="presentation">Violets are blue,</li>\n        <li role="presentation">Sugar is sweet</li>\n        <li role="presentation">And so are you.</li>\n    </ol>\n</li>\n</ol>\n'))),"\n",l.createElement(t.p,null,"As a ",l.createElement("i",null,"nuclear")," solution you can markup the text for graphical\ndisplay using the ",l.createElement(t.code,null,"graphic")," role as in ",l.createElement(t.a,{href:"#markupn"},l.createElement("cite",null,"Markup\nN")),".  I advise use of the ",l.createElement(t.del,null,l.createElement(t.code,null,"aria-labelledby")),"\n",l.createElement(t.code,null,"aria-details")," (2022-11-28) attribute instead of the ",l.createElement(t.code,null,"aria-label"),"\nattribute here. ",l.createElement(t.code,null,"aria-label")," has a tendency to work poorly with\nnewlines in text, is not usually translated by automated tools and\ndoesn't let you embed more markup as appropriate."),"\n",l.createElement("figure",{id:"markupn"},l.createElement("figcaption",null,"Markup N"),l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html"},'<figure>\n<div role="img" aria-details="transcript">\n<ol class="poem">\n<li>\n    <ol>\n        <li>Roses are red</li>\n        <li>Violets are blue,</li>\n        <li>Sugar is sweet</li>\n        <li>And so are you.</li>\n    </ol>\n</li>\n</ol>\n</div>\n<figcaption id="transcript">\n<p>Transcript for text to speech:</p>\n<p>Roses are red ;\n   Violets are blue,\n   Sugar is sweet ;\n   And so are you.</p>\n</figcaption>\n</figure>\n'))),"\n",l.createElement(t.p,null,"In some setups ",l.createElement(t.a,{href:"#markupb"},l.createElement("cite",null,"Markup B"))," sounds yucky.  Ending\nand starting words in separate lines like ",l.createElement("i",null,"red")," and\n",l.createElement("i",null,"Violets")," run together.  You might include extra punctuation\nannotated with a screen-reader-only class as with ",l.createElement(t.a,{href:"#markupb2"},l.createElement("cite",null,"Markup\nB HTML"))," and ",l.createElement(t.a,{href:"#markupb3"},l.createElement("cite",null,"Markup B CSS"))," to work around this issue.\nHowever, on Firefox this hack breaks up lines into separate areas to\ntrack through."),"\n",l.createElement("figure",{id:"markupb2"},l.createElement("figcaption",null,"Markup B HTML"),l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html"},'<p>Roses are red<span class="sr-only">; </span><br>\nViolets are blue,<br>\nSugar is sweet<span class="sr-only">; </span><br>\nAnd so are you.</p>\n'))),"\n",l.createElement("figure",{id:"markupb3"},l.createElement("figcaption",null,"Markup B CSS"),l.createElement(t.pre,null,l.createElement(t.code,{className:"language-css"},".sr-only {\n   display: inline-block ;\n   user-select: none ;\n   font-size: 1px ;\n   line-height: 1px ;\n   color: transparent ;\n}\n"))),"\n",l.createElement(t.p,null,"No revisions of ",l.createElement(t.a,{href:"#markupa"},l.createElement("cite",null,"Markup A"))," or ",l.createElement(t.a,{href:"#markupb"},l.createElement("cite",null,"Markup B"))," ensure\nproper pronunciation of stress and sounds.  Only American English is\nlikely to be pronounced correctly. To help, you can set the language\nattribute for documents and poems as appropriate.  However, this is\nnot a complete solution."),"\n",l.createElement(t.p,null,"As an anglophone Canadian author I set the language attribute for my\ndocuments and poems to ",l.createElement(t.code,null,"en-CA"),". However, this only helps with English\nwords and not with imports from other languages.  I don't know how to\nhelp screen readers pronounce names of mythical figures.  You could\nmarkup individual phrases like ",l.createElement(t.code,null,'<i lang="non">Sleipnir</i>')," (old\nNorse) and ",l.createElement(t.code,null,'<i lang="gem">Wotan</i>')," (Germanic languages group) but\nthis particular markup doesn't help."),"\n",l.createElement(t.p,null,"Semantically you might markup stress with emphasis with the ",l.createElement(t.code,null,"em"),"\nelement.  However, such markup is verbose and many screen readers\nignore elements like ",l.createElement(t.code,null,"em")," because of the heavy unsemantic abuse of\nsuch elements in the wider internet for presenting bold text."),"\n",l.createElement(t.p,null,"Perhaps there might be some obscure Unicode diacritics for better\nmarking up the prosody but I have not explored this option.  I worry\nthat such glyphs might be pronounced in common screen readers as\nsomething like ",l.createElement("q",null,"Unicode character 591"),"."),"\n",l.createElement(t.h2,{id:"presentation"},"Presentation"),"\n",l.createElement(t.p,null,"Laying out poetry on small formats is awkward.  In print the standard\nlayout for overlong lines is to align the first line ragged right and\nall other lines ragged left."),"\n",l.createElement(t.p,null,"You can approximate a poetry layout with a hanging indent layout\nsomething like ",l.createElement(t.a,{href:"#indentcss"},l.createElement("cite",null,"Indent CSS")),".  However, a\nhanging indent layout is not really correct."),"\n",l.createElement("figure",{id:"indentcss"},l.createElement("figcaption",null,"Indent CSS"),l.createElement(t.pre,null,l.createElement(t.code,{className:"language-css"},".line {\n   text-indent: -4ch ;\n   margin-left: 4ch ;\n}\n"))),"\n",l.createElement(t.p,null,"You can approximate a poetry layout on the web by aligning every line\nblock to the left but aligning the last line of the text ",l.createElement(t.em,null,"within")," the\nline block to the right.  Something like ",l.createElement(t.a,{href:"#alignlastcss"},l.createElement("cite",null,"Align Last\nCSS"))," almost works for a poetry layout.  However,\neven this layout fails when you overflow multiple lines."),"\n",l.createElement("figure",{id:"alignlastcss"},l.createElement("figcaption",null,"Align Last CSS"),l.createElement(t.pre,null,l.createElement(t.code,{className:"language-css"},".stanza {\n   display: flex ;\n   flex-direction: column ;\n   align-items: start ;\n}\n.line {\n   display: block ;\n   text-align-last: end ;\n}\n"))),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"#examplecode"},l.createElement("cite",null,"Example Code"))," is similar to the current\ncompromise I use on this site."),"\n",l.createElement("figure",{id:"examplecode"},l.createElement("figcaption",null,"Example Code"),l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html"},'<style>\n#scope p {\n   text-indent: 0 ;\n   padding: 0 ;\n}\n#scope p > span {\n   display: inline-block ;\n   text-align-last: end ;\n}\n</style>\n<div id="scope" lang="en-CA">\n<p>\n  <span>Roses are red</span><br>\n  <span>Violets are blue</span><br>\n  <span>Sugar is sweet</span><br>\n  <span>aaaaaaaaaaaaaaaa.</span>\n</p>\n</div>\n'))),"\n",l.createElement(t.h2,{id:"conclusion"},"Conclusion"),"\n",l.createElement(t.p,null,"You should use the ",l.createElement(t.code,null,"audio")," element to markup poetry."),"\n",l.createElement(t.h2,{id:"try-it"},"Try It"),"\n",l.createElement(t.p,null,"Personally I found Android TalkBack to be the easiest screen reader to\nget started with. ",l.createElement(t.a,{href:"https://www.a11yproject.com"},"The helpful ",l.createElement("cite",null,"A11y Project"),"\nblog")," has a number of guides on getting\nstarted with screen readers but they might be a little old."),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://www.a11yproject.com/posts/getting-started-with-orca"},l.createElement("cite",null,"Getting Started with Orca screen reader on Gnome desktop environment on Ubuntu 20.04 LTS"))),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://www.a11yproject.com/posts/getting-started-with-voiceover-ios"},l.createElement("cite",null,"Getting Started with VoiceOver on iOS"))),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://www.a11yproject.com/posts/getting-started-with-nvda"},l.createElement("cite",null,"Getting Started with NVDA"))),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://www.a11yproject.com/posts/getting-started-with-voiceover"},l.createElement("cite",null,"Getting Started with MacOS VoiceOver"))),"\n"),"\n",l.createElement(t.h2,{id:"and-one-more-thing"},"And One More Thing"),"\n",l.createElement(t.p,null,"As of this blog post, the ",l.createElement(t.a,{href:"https://www.w3.org/TR/css-speech-1/"},l.createElement("cite",null,"CSS Speech\nModule"))," has never really\ngone anywhere.  Perhaps in the future the ",l.createElement(t.code,null,"voice-stress"),",\n",l.createElement(t.code,null,"voice-duration")," (for long syllables), ",l.createElement(t.code,null,"voice-pitch")," (for pitch\naccent) and ",l.createElement(t.code,null,"pause")," properties would solve these sort of accessibility\nproblems."),"\n",l.createElement(t.p,null,"*[HTML]: HyperText Markup Language"),"\n",l.createElement(t.p,null,"*[CSS]: Cascading Style Sheets"),"\n",l.createElement(t.p,null,"*[ARIA]: Accessible Rich Internet Applications"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)},i=n(3293),c=n(4588),s=n(116),m=n(7561),u=n(8766),p=n(7585),d=n(6262);const h=e=>{let{content:t,children:n,previous:a,next:r,metadata:o}=e;const i=t.__typename;switch(i){case"MdxContent":return n;case"PoemContent":return l.createElement(c.Z,{previous:a,next:r,metadata:o,poem:t.body});default:throw new Error("unknown type: "+i)}},g={name:"Molossus Spondee",url:"/about/"},E=e=>{let{location:{pathname:t},data:{post:{metadata:n}}}=e;const{description:a,title:r,dateXml:o,category:c,tags:m,places:h,people:E}=n,y=(0,d.L)(t);return[l.createElement(i.Z),l.createElement(p.Z,null,r),l.createElement(s.Z,{description:a,title:r,url:y}),l.createElement(u.Z,{title:r,date:o,author:g,category:c,tags:m,people:E,places:h})]},y=e=>{let{children:t,data:{post:n}}=e;const{previous:a,next:r,content:o,metadata:i}=n,{category:c,dateXml:s,title:u,tags:p,places:d,people:E}=i;return l.createElement(l.Fragment,null,l.createElement(h,{content:o,previous:null==a?void 0:a.metadata,next:null==r?void 0:r.metadata,metadata:i},t),l.createElement(m.Z,{title:u,date:s,author:g,category:c,tags:p,people:E,places:d}))};function f(e){return l.createElement(y,e,l.createElement(o,e))}},3293:function(e,t,n){var a=n(7294),l=n(6138);const r=a.memo((()=>a.createElement(a.Fragment,null,a.createElement("link",{rel:"icon",href:l.Z}),a.createElement("meta",{name:"color-scheme",content:"light dark"}),a.createElement("meta",{name:"theme-color",content:"#6000A0"}))));t.Z=r},7311:function(e,t,n){var a=n(7294),l=n(1883);t.Z=e=>{let{srcdoc:t}=e;const n=JSON.stringify(t);return a.createElement(l.Xf,{type:"application/ld+json"},n)}},4588:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7294),l=n(7020),r=n(7122),o=n(4472),i=n(1045);var c=e=>{let{children:t}=e;return a.createElement(a.Fragment,null,t)};const s=e=>a.Children.map(e,(e=>e)),m=e=>{let{line:t}=e;return s(t.map(((e,t)=>[t>0&&a.createElement(r.Z,null),a.createElement(c,null,e)])))},u=e=>{let{stanza:t}=e;return s(t.map((e=>a.createElement(o.Z,null,a.createElement(m,{line:e})))))};var p=e=>{let{poem:t}=e;return s(t.map((e=>a.createElement(i.Z,null,a.createElement(u,{stanza:e})))))};var d=e=>{let{poem:t,next:n,previous:r,metadata:o}=e;return a.createElement(l.Z,{previous:r,next:n,metadata:o},a.createElement(p,{poem:t}))}},116:function(e,t,n){var a=n(7294),l=n(9622),r=n(6138);t.Z=e=>{var t;let{description:n,url:o,title:i}=e;const c=(0,l.$)();return null!==(t=n)&&void 0!==t||(n=c.description),a.createElement(a.Fragment,null,a.createElement("link",{rel:"canonical",href:o}),a.createElement("meta",{name:"description",content:n}),a.createElement("meta",{name:"og:site_name",content:c.title}),a.createElement("meta",{property:"og:title",content:i}),a.createElement("meta",{property:"og:image",content:r.Z}),a.createElement("meta",{property:"og:url",content:o}),a.createElement("meta",{property:"og:description",content:n}))}},7561:function(e,t,n){var a=n(7294),l=n(7311),r=n(8472);const o=e=>{let{title:t,date:n,author:a,category:l,tags:r,people:o,places:i}=e;return{"@context":"https://schema.org","@type":"BlogPosting",headline:t,datePublished:n,author:[{"@type":"Person",name:a.name,url:a.url}],articleSection:l,keywords:r,character:o,contentLocation:i}},i=e=>{let{title:t,category:n,slug:a}=e;return{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"/"},{"@type":"ListItem",position:2,name:n,item:(0,r.y)(["category",n])},{"@type":"ListItem",position:3,name:t,item:a}]}};t.Z=e=>[a.createElement(l.Z,{srcdoc:i(e)}),a.createElement(l.Z,{srcdoc:o(e)})]},8766:function(e,t,n){var a=n(7294);const l=e=>{let{tags:t}=e;return t.map((e=>a.createElement("meta",{key:e,property:"og:article:tag",content:e})))};t.Z=e=>{let{author:t,date:n,category:r,tags:o,people:i,places:c}=e;return[a.createElement("link",{rel:"author",href:t.url}),a.createElement("meta",{name:"author",content:t.name}),a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"og:article:author",content:t.name}),a.createElement("meta",{property:"og:article:published_time",content:n}),a.createElement("meta",{property:"og:article:section",content:r}),a.createElement("meta",{property:"og:profile",content:t.name}),a.createElement("meta",{property:"og:profile:username",content:t.name}),a.createElement(l,{tags:i}),a.createElement(l,{tags:o}),a.createElement(l,{tags:c})]}},7585:function(e,t,n){var a=n(7294),l=n(9622);t.Z=e=>{let{children:t}=e;const n=(e=>{const t=(0,l.$)().title;return null===e||""===e?t:e+" — "+t})(t);return a.createElement("title",null,n)}},6262:function(e,t,n){n.d(t,{L:function(){return l}});var a=n(1883);const l=e=>{const t=(0,a.K2)("1271460761").site.siteMetadata;return new URL(e,t.siteUrl).toString()}},9622:function(e,t,n){n.d(t,{$:function(){return l}});var a=n(1883);const l=()=>(0,a.K2)("3000541721").site.siteMetadata},6138:function(e,t){t.Z="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxzdHlsZT4KICAgIHRleHQgewogICAgICBmb250OiA0MDAgNDJweCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICJTZWdvZSBVSSIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgIkFwcGxlIENvbG9yIEVtb2ppIiwgIlNlZ29lIFVJIEVtb2ppIiwgIlNlZ29lIFVJIFN5bWJvbCIgOwogICAgfQogIDwvc3R5bGU+CgogIDxjaXJjbGUgcj0iNTAiIGN4PSI1MCIgY3k9IjUwIiBmaWxsPSIjNjBhIi8+CiAgPHRleHQgeD0iNTAiIHk9IjYyIiBmb250LXNpemU9IjQyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSI+bXNnPC90ZXh0Pgo8L3N2Zz4K"}}]);
//# sourceMappingURL=component---src-templates-post-jsx-content-file-path-home-molly-documents-repos-mstewartgallus-github-io-blog-web-2022-11-25-marking-up-poetry-md-619de29d0a011d1001b9.js.map