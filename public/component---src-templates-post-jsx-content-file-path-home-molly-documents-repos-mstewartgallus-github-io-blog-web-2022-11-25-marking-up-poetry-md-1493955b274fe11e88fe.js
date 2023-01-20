"use strict";(self.webpackChunkwords_to_kick_your_teeth_out=self.webpackChunkwords_to_kick_your_teeth_out||[]).push([[665],{3875:function(e,t,n){n.r(t),n.d(t,{Head:function(){return C},default:function(){return B}});var a=n(1151),l=n(7294);function r(e){const t=Object.assign({p:"p",a:"a",strong:"strong",h2:"h2",pre:"pre",code:"code",del:"del",em:"em",ul:"ul",li:"li"},(0,a.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.p,null,"Common poetry markup is inaccessible, unsemantic and doesn't display\nwell. I am not skilled in accessibility and I don't have good\nsolutions.  See ",l.createElement(t.a,{href:"#try-it"},l.createElement("cite",null,"Try It"))," if you want to try out a screen\nreader yourself."),"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Special thanks to the kind people who helped edit this post.")),"\n",l.createElement(t.h2,{id:"accessibility"},"Accessibility"),"\n",l.createElement(t.p,null,"The art of the spoken word is not accessible to the visually impaired.\nMost markup navigates awkwardly, does not insert appropriate pauses\nfor breath, and mispronounces stress and sounds.  Consider\n",l.createElement(t.a,{href:"#markupa"},l.createElement("cite",null,"Markup A"))," and ",l.createElement(t.a,{href:"#markupb"},l.createElement("cite",null,"Markup\nB")),".  In ",l.createElement(t.a,{href:"#markupa"},l.createElement("cite",null,"Markup A"))," a poem is\nan ordered list of stanzas and stanzas are ordered lists of verses.\nIn ",l.createElement(t.a,{href:"#markupb"},l.createElement("cite",null,"Markup B"))," poems are sequences of stanzas,\nstanzas are paragraphs and lines in a paragraph are separated by line\nbreak elements."),"\n",l.createElement("figure",{id:"markupa"},l.createElement("figcaption",null,"Markup A"),l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html"},'<ol class="poem">\n<li>\n    <ol>\n        <li>Roses are red</li>\n        <li>Violets are blue,</li>\n        <li>Sugar is sweet</li>\n        <li>And so are you.</li>\n    </ol>\n</li>\n</ol>\n'))),"\n",l.createElement("figure",{id:"markupb"},l.createElement("figcaption",null,"Markup B"),l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html"},'<p class="stanza">Roses are red<br>\nViolets are blue,<br>\nSugar is sweet<br>\nAnd so are you.</p>\n'))),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"#markupa"},l.createElement("cite",null,"Markup A"))," is hard to navigate as each line in\nan ordered list must be manually tracked through.  As well ",l.createElement("q",null,"line\n",l.createElement("var",null,"m")," of ",l.createElement("var",null,"n"))," is repeated for every line of\n",l.createElement(t.a,{href:"#markupa"},l.createElement("cite",null,"Markup A")),".  You can use the ",l.createElement(t.code,null,"presentation"),"\nARIA role as in ",l.createElement(t.a,{href:"#markupa2"},l.createElement("cite",null,"Markup A"))," and ",l.createElement(t.a,{href:"#markupa3"},l.createElement("cite",null,"Markup\nA3"))," to ameliorate the problem.  By the spec using\nthe ",l.createElement(t.code,null,"presentation")," role in a list item for a list already marked with\na ",l.createElement(t.code,null,"presentation")," role doesn't do much, but such markup can reduce\ncruft in Firefox's accessibility inspector."),"\n",l.createElement("figure",{id:"markupa2"},l.createElement("figcaption",null,"Markup A2"),l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html"},'<ol class="poem">\n<li>\n    <ol role="presentation">\n        <li role="presentation">Roses are red</li>\n        <li role="presentation">Violets are blue,</li>\n        <li role="presentation">Sugar is sweet</li>\n        <li role="presentation">And so are you.</li>\n    </ol>\n</li>\n</ol>\n'))),"\n",l.createElement("figure",{id:"markupa3"},l.createElement("figcaption",null,"Markup A3"),l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html"},'<ol class="poem" role="presentation">\n<li>\n    <ol role="presentation">\n        <li role="presentation">Roses are red</li>\n        <li role="presentation">Violets are blue,</li>\n        <li role="presentation">Sugar is sweet</li>\n        <li role="presentation">And so are you.</li>\n    </ol>\n</li>\n</ol>\n'))),"\n",l.createElement(t.p,null,"As a ",l.createElement("i",null,"nuclear")," solution you can markup the text for graphical\ndisplay using the ",l.createElement(t.code,null,"graphic")," role as in ",l.createElement(t.a,{href:"#markupn"},l.createElement("cite",null,"Markup\nN")),".  I advise use of the ",l.createElement(t.del,null,l.createElement(t.code,null,"aria-labelledby")),"\n",l.createElement(t.code,null,"aria-details")," (2022-11-28) attribute instead of the ",l.createElement(t.code,null,"aria-label"),"\nattribute here. ",l.createElement(t.code,null,"aria-label")," has a tendency to work poorly with\nnewlines in text, is not usually translated by automated tools and\ndoesn't let you embed more markup as appropriate."),"\n",l.createElement("figure",{id:"markupn"},l.createElement("figcaption",null,"Markup N"),l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html"},'<figure>\n<div role="img" aria-details="transcript">\n<ol class="poem">\n<li>\n    <ol>\n        <li>Roses are red</li>\n        <li>Violets are blue,</li>\n        <li>Sugar is sweet</li>\n        <li>And so are you.</li>\n    </ol>\n</li>\n</ol>\n</div>\n<figcaption id="transcript">\n<p>Transcript for text to speech:</p>\n<p>Roses are red ;\n   Violets are blue,\n   Sugar is sweet ;\n   And so are you.</p>\n</figcaption>\n</figure>\n'))),"\n",l.createElement(t.p,null,"In some setups ",l.createElement(t.a,{href:"#markupb"},l.createElement("cite",null,"Markup B"))," sounds yucky.  Ending\nand starting words in separate lines like ",l.createElement("i",null,"red")," and\n",l.createElement("i",null,"Violets")," run together.  You might include extra punctuation\nannotated with a screen-reader-only class as with ",l.createElement(t.a,{href:"#markupb2"},l.createElement("cite",null,"Markup\nB HTML"))," and ",l.createElement(t.a,{href:"#markupb3"},l.createElement("cite",null,"Markup B CSS"))," to work around this issue.\nHowever, on Firefox this hack breaks up lines into separate areas to\ntrack through."),"\n",l.createElement("figure",{id:"markupb2"},l.createElement("figcaption",null,"Markup B HTML"),l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html"},'<p>Roses are red<span class="sr-only">; </span><br>\nViolets are blue,<br>\nSugar is sweet<span class="sr-only">; </span><br>\nAnd so are you.</p>\n'))),"\n",l.createElement("figure",{id:"markupb3"},l.createElement("figcaption",null,"Markup B CSS"),l.createElement(t.pre,null,l.createElement(t.code,{className:"language-css"},".sr-only {\n   display: inline-block ;\n   user-select: none ;\n   font-size: 1px ;\n   line-height: 1px ;\n   color: transparent ;\n}\n"))),"\n",l.createElement(t.p,null,"No revisions of ",l.createElement(t.a,{href:"#markupa"},l.createElement("cite",null,"Markup A"))," or ",l.createElement(t.a,{href:"#markupb"},l.createElement("cite",null,"Markup B"))," ensure\nproper pronunciation of stress and sounds.  Only American English is\nlikely to be pronounced correctly. To help, you can set the language\nattribute for documents and poems as appropriate.  However, this is\nnot a complete solution."),"\n",l.createElement(t.p,null,"As an anglophone Canadian author I set the language attribute for my\ndocuments and poems to ",l.createElement(t.code,null,"en-CA"),". However, this only helps with English\nwords and not with imports from other languages.  I don't know how to\nhelp screen readers pronounce names of mythical figures.  You could\nmarkup individual phrases like ",l.createElement(t.code,null,'<i lang="non">Sleipnir</i>')," (old\nNorse) and ",l.createElement(t.code,null,'<i lang="gem">Wotan</i>')," (Germanic languages group) but\nthis particular markup doesn't help."),"\n",l.createElement(t.p,null,"Semantically you might markup stress with emphasis with the ",l.createElement(t.code,null,"em"),"\nelement.  However, such markup is verbose and many screen readers\nignore elements like ",l.createElement(t.code,null,"em")," because of the heavy unsemantic abuse of\nsuch elements in the wider internet for presenting bold text."),"\n",l.createElement(t.p,null,"Perhaps there might be some obscure Unicode diacritics for better\nmarking up the prosody but I have not explored this option.  I worry\nthat such glyphs might be pronounced in common screen readers as\nsomething like ",l.createElement("q",null,"Unicode character 591"),"."),"\n",l.createElement(t.h2,{id:"presentation"},"Presentation"),"\n",l.createElement(t.p,null,"Laying out poetry on small formats is awkward.  In print the standard\nlayout for overlong lines is to align the first line ragged right and\nall other lines ragged left."),"\n",l.createElement(t.p,null,"You can approximate a poetry layout with a hanging indent layout\nsomething like ",l.createElement(t.a,{href:"#indentcss"},l.createElement("cite",null,"Indent CSS")),".  However, a\nhanging indent layout is not really correct."),"\n",l.createElement("figure",{id:"indentcss"},l.createElement("figcaption",null,"Indent CSS"),l.createElement(t.pre,null,l.createElement(t.code,{className:"language-css"},".line {\n   text-indent: -4ch ;\n   margin-left: 4ch ;\n}\n"))),"\n",l.createElement(t.p,null,"You can approximate a poetry layout on the web by aligning every line\nblock to the left but aligning the last line of the text ",l.createElement(t.em,null,"within")," the\nline block to the right.  Something like ",l.createElement(t.a,{href:"#alignlastcss"},l.createElement("cite",null,"Align Last\nCSS"))," almost works for a poetry layout.  However,\neven this layout fails when you overflow multiple lines."),"\n",l.createElement("figure",{id:"alignlastcss"},l.createElement("figcaption",null,"Align Last CSS"),l.createElement(t.pre,null,l.createElement(t.code,{className:"language-css"},".stanza {\n   display: flex ;\n   flex-direction: column ;\n   align-items: start ;\n}\n.line {\n   display: block ;\n   text-align-last: end ;\n}\n"))),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"#examplecode"},l.createElement("cite",null,"Example Code"))," is similar to the current\ncompromise I use on this site."),"\n",l.createElement("figure",{id:"examplecode"},l.createElement("figcaption",null,"Example Code"),l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html"},'<style>\n#scope p {\n   text-indent: 0 ;\n   padding: 0 ;\n}\n#scope p > span {\n   display: inline-block ;\n   text-align-last: end ;\n}\n</style>\n<div id="scope" lang="en-CA">\n<p>\n  <span>Roses are red</span><br>\n  <span>Violets are blue</span><br>\n  <span>Sugar is sweet</span><br>\n  <span>aaaaaaaaaaaaaaaa.</span>\n</p>\n</div>\n'))),"\n",l.createElement(t.h2,{id:"conclusion"},"Conclusion"),"\n",l.createElement(t.p,null,"You should use the ",l.createElement(t.code,null,"audio")," element to markup poetry."),"\n",l.createElement(t.h2,{id:"try-it"},"Try It"),"\n",l.createElement(t.p,null,"Personally I found Android TalkBack to be the easiest screen reader to\nget started with. ",l.createElement(t.a,{href:"https://www.a11yproject.com"},"The helpful ",l.createElement("cite",null,"A11y Project"),"\nblog")," has a number of guides on getting\nstarted with screen readers but they might be a little old."),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://www.a11yproject.com/posts/getting-started-with-orca"},l.createElement("cite",null,"Getting Started with Orca screen reader on Gnome desktop environment on Ubuntu 20.04 LTS"))),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://www.a11yproject.com/posts/getting-started-with-voiceover-ios"},l.createElement("cite",null,"Getting Started with VoiceOver on iOS"))),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://www.a11yproject.com/posts/getting-started-with-nvda"},l.createElement("cite",null,"Getting Started with NVDA"))),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://www.a11yproject.com/posts/getting-started-with-voiceover"},l.createElement("cite",null,"Getting Started with MacOS VoiceOver"))),"\n"),"\n",l.createElement(t.h2,{id:"and-one-more-thing"},"And One More Thing"),"\n",l.createElement(t.p,null,"As of this blog post, the ",l.createElement(t.a,{href:"https://www.w3.org/TR/css-speech-1/"},l.createElement("cite",null,"CSS Speech\nModule"))," has never really\ngone anywhere.  Perhaps in the future the ",l.createElement(t.code,null,"voice-stress"),",\n",l.createElement(t.code,null,"voice-duration")," (for long syllables), ",l.createElement(t.code,null,"voice-pitch")," (for pitch\naccent) and ",l.createElement(t.code,null,"pause")," properties would solve these sort of accessibility\nproblems."),"\n",l.createElement(t.p,null,"*[HTML]: HyperText Markup Language"),"\n",l.createElement(t.p,null,"*[CSS]: Cascading Style Sheets"),"\n",l.createElement(t.p,null,"*[ARIA]: Accessible Rich Internet Applications"))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)},o=n(1883),i=n(5238),s=n(7122),u=n(8749),m=n(7827),d=n(4472),p=n(1045),h=n(8691),E=n(8660),g=n(8306),f=n(6793),y=n(7561),b=n(8766),v=n(3615),k=n(7585),w=n(8472);const I=e=>{let{category:t}=e;const n=(0,w.search)(["category",t]);return l.createElement(o.rU,{to:n,rel:"tag","data-pagefind-filter":"category"},t)},S=e=>{let{notice:t}=e;return t&&t.length>0&&l.createElement("dl",null,l.createElement("div",null,l.createElement("dt",null,"Notice"),t.map((e=>l.createElement("dd",{key:e},e)))))},Z={Lg:p.Z,L:d.Z,Caesura:s.F,H1:u.H1,H2:u.H2,H3:u.H3,H4:u.H4,H5:u.H5,H6:u.H6},A={ul:p.Z,li:d.Z},H={...Z,...{h1:u.H1,h2:u.H2,h3:u.H3,h4:u.H4,h5:u.H5,h6:u.H6}},x={Poem:{...H,...A},Prose:H,Web:H},N=e=>{let{category:t,content:n,children:r}=e;const c=n.__typename;switch(c){case"MdxContent":return l.createElement(a.Zo,{components:x[t]},r);case"PoemContent":return l.createElement(f.Z,{poem:n.body});default:throw new Error("unknown type: "+c)}},M={name:"Molly Stewart-Gallus",url:"/about/"},C=e=>{let{location:{pathname:t},data:{post:n}}=e;const{title:a,dateXml:r,category:c,tags:o,places:i,people:s}=n.metadata;return l.createElement(l.Fragment,null,l.createElement(m.Z,{pathname:t}),l.createElement(k.Z,null,a),l.createElement(b.Z,{title:a,date:r,author:M,category:c,tags:o,people:s,places:i}))},P=e=>{var t,n,a,r;let{children:c,data:{post:{previous:s,next:u,content:m,metadata:{category:d,dateXml:p,dateDisplay:f,title:b,subtitle:k,notice:w,tags:Z,places:A,people:H}}}}=e;const x=l.useId();return l.createElement(l.Fragment,null,l.createElement(E.Z,null,l.createElement("main",{"data-pagefind-body":!0,"aria-describedby":x},l.createElement("header",null,l.createElement("hgroup",null,l.createElement("h1",{id:x},b),k&&l.createElement("p",null,k)),l.createElement(S,{notice:w})),l.createElement(N,{category:d,content:m},c)),l.createElement(v.Z,null,l.createElement(g.Z,{previous:null==s||null===(t=s.metadata)||void 0===t?void 0:t.title,next:null==u||null===(n=u.metadata)||void 0===n?void 0:n.title,phref:null==s||null===(a=s.metadata)||void 0===a?void 0:a.slug,nhref:null==u||null===(r=u.metadata)||void 0===r?void 0:r.slug}),l.createElement(h.Z,{author:M,dateDisplay:f,dateXml:p,tags:Z,places:A,people:H}),l.createElement(i.Z,null,l.createElement("li",null,l.createElement(o.rU,{to:"/"},"Home")),l.createElement("li",null,l.createElement(I,{category:d})),l.createElement("li",{"aria-current":"page"},l.createElement("cite",null,b))))),l.createElement(y.Z,{title:b,date:p,author:M,category:d,tags:Z,people:H,places:A}))};function B(e){return l.createElement(P,e,l.createElement(c,e))}},5238:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294);var l=e=>{let{children:t}=e;const n=a.useId();return a.createElement("nav",{className:"breadcrumbs-module--breadcrumbs--e2995","aria-labelledby":n},a.createElement("header",{className:"sr-only"},a.createElement("hgroup",null,a.createElement("h2",{id:n},"Breadcrumbs"))),a.createElement("ol",{className:"breadcrumbs-module--breadcrumb--6b8cf"},t))}},7122:function(e,t,n){n.d(t,{F:function(){return a}});const a=()=>" — ";t.Z=a},7827:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7294),l=n(9622),r="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxzdHlsZT4KICAgIHRleHQgewogICAgICBmb250OiA0MDAgNDJweCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICJTZWdvZSBVSSIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgIkFwcGxlIENvbG9yIEVtb2ppIiwgIlNlZ29lIFVJIEVtb2ppIiwgIlNlZ29lIFVJIFN5bWJvbCIgOwogICAgfQogIDwvc3R5bGU+CgogIDxjaXJjbGUgcj0iNTAiIGN4PSI1MCIgY3k9IjUwIiBmaWxsPSIjNjBhIi8+CiAgPHRleHQgeD0iNTAiIHk9IjYyIiBmb250LXNpemU9IjQyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSI+bXNnPC90ZXh0Pgo8L3N2Zz4K";const c="Molly Stewart-Gallus",o="/about";var i=e=>{let{url:t}=e;const n=(0,l.$)();return a.createElement(a.Fragment,null,a.createElement("link",{rel:"canonical",href:t}),a.createElement("meta",{name:"description",content:n.description}),a.createElement("meta",{name:"og:site_name",content:n.title}),a.createElement("meta",{property:"og:image",content:r}),a.createElement("meta",{property:"og:url",content:t}),a.createElement("meta",{property:"og:description",content:n.description}),a.createElement("link",{rel:"author",href:o}),a.createElement("meta",{name:"author",content:c}),a.createElement("meta",{property:"og:profile",content:c}),a.createElement("meta",{property:"og:profile:username",content:c}))},s=n(6262);var u=e=>{let{pathname:t}=e;const n=(0,s.L)(t);return a.createElement(a.Fragment,null,a.createElement("link",{rel:"icon",href:r}),a.createElement("meta",{name:"color-scheme",content:"light dark"}),a.createElement("meta",{name:"theme-color",content:"#6000A0"}),a.createElement(i,{url:n}))}},8749:function(e,t,n){n.d(t,{H1:function(){return o},H2:function(){return i},H3:function(){return s},H4:function(){return u},H5:function(){return m},H6:function(){return d}});var a=n(7294),l=n(1883);const r=e=>{const t=e.level;switch(t){case 1:return a.createElement("h1",e,e.children);case 2:return a.createElement("h2",e,e.children);case 3:return a.createElement("h3",e,e.children);case 4:return a.createElement("h4",e,e.children);case 5:return a.createElement("h5",e,e.children);case 6:return a.createElement("h6",e,e.children);default:throw new Error("level > 6 "+t)}},c=e=>{const t=a.useId(),{id:n,children:c}=e;return n?a.createElement(r,e,a.createElement("span",{role:"presentation",id:t},c)," ",a.createElement(l.rU,{to:"#"+n,"aria-describedby":t},"#")):a.createElement(r,e,c)},o=e=>a.createElement(c,Object.assign({},e,{level:1}),e.children),i=e=>a.createElement(c,Object.assign({},e,{level:2}),e.children),s=e=>a.createElement(c,Object.assign({},e,{level:3}),e.children),u=e=>a.createElement(c,Object.assign({},e,{level:4}),e.children),m=e=>a.createElement(c,Object.assign({},e,{level:5}),e.children),d=e=>a.createElement(c,Object.assign({},e,{level:6}),e.children)},7311:function(e,t,n){var a=n(7294),l=n(1883);t.Z=e=>{let{srcdoc:t}=e;const n=JSON.stringify(t);return a.createElement(l.Xf,{type:"application/ld+json"},n)}},4472:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294);var l=e=>{let{children:t}=e;return a.createElement(a.Fragment,null,a.createElement("span",{role:"presentation",className:"l-module--l--9f372"},t),a.createElement("br",null))}},1045:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294);var l=e=>{let{children:t}=e;return a.createElement("p",{className:"lg-module--lg--87b8f"},t)}},8691:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7294),l=n(1883),r=n(8472);const c=e=>{let{place:t}=e;const n=(0,r.search)(["place",t]);return a.createElement(l.rU,{to:n,rel:"tag","data-pagefind-filter":"place"},t)},o=e=>{let{places:t}=e;return t&&t.length>0&&a.createElement("div",null,a.createElement("dt",null,"Place"),t.map((e=>a.createElement("dd",{key:e},a.createElement(c,{place:e})))))},i=e=>{let{tag:t}=e;const n=(0,r.search)(["tag",t]);return a.createElement(l.rU,{to:n,rel:"tag","data-pagefind-filter":"tag"},t)},s=e=>{let{tags:t}=e;return t&&t.length>0&&a.createElement("div",null,a.createElement("dt",null,"Tag"),t.map((e=>a.createElement("dd",{key:e},a.createElement(i,{tag:e})))))},u=e=>{let{person:t}=e;const n=(0,r.search)(["person",t]);return a.createElement(l.rU,{to:n,rel:"tag","data-pagefind-filter":"person"},t)},m=e=>{let{people:t}=e;return t&&t.length>0&&a.createElement("div",null,a.createElement("dt",null,"People"),t.map((e=>a.createElement("dd",{key:e},a.createElement(u,{person:e})))))};var d=e=>{let{dateDisplay:t,dateXml:n,author:r,places:c,tags:i,people:u}=e;const d=a.useId();return a.createElement("footer",{className:"metadata-module--metadata--eee65","aria-describedby":d},a.createElement("hgroup",{className:"sr-only"},a.createElement("h2",{id:d},"Metadata")),a.createElement("dl",null,a.createElement("div",null,a.createElement("dt",null,"Post Date"),a.createElement("dd",null,a.createElement("time",{"data-pagefind-filter":"date[datetime]","data-pagefind-sort":"date[datetime]",dateTime:n},t))),a.createElement("div",null,a.createElement("dt",null,a.createElement(l.rU,{rel:"author",to:r.url},"Author")),a.createElement("dd",null,r.name)),a.createElement(o,{places:c}),a.createElement(s,{tags:i}),a.createElement(m,{people:u})))}},8660:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294);var l=e=>{let{children:t}=e;return a.createElement("div",{className:"page-module--page--acc67"},t)}},8306:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),l=n(1883);const r=e=>{let{children:t,href:n}=e;return n&&a.createElement("div",null,a.createElement("dt",null,a.createElement(l.rU,{to:n},"Previous")),a.createElement("dd",null,t))},c=e=>{let{children:t,href:n}=e;return n&&a.createElement("div",null,a.createElement("dt",null,a.createElement(l.rU,{to:n},"Next")),a.createElement("dd",null,t))};var o=e=>{let{previous:t,next:n,phref:l,nhref:o}=e;const i=a.useId();return a.createElement("nav",{className:"paging-module--paging--da478","aria-labelledby":i},a.createElement("header",{className:"sr-only"},a.createElement("hgroup",null,a.createElement("h2",{id:i},"Paging"))),a.createElement("dl",null,a.createElement(r,{href:l},a.createElement("cite",null,t)),a.createElement(c,{href:o},a.createElement("cite",null,n))))}},6793:function(e,t,n){var a=n(7294),l=n(7122),r=n(4472),c=n(1045);t.Z=e=>{let{poem:t}=e;return t.map(((e,t)=>a.createElement(c.Z,{key:t},e.map(((e,n)=>a.createElement(r.Z,{key:t+"-"+n},e.map(((e,r)=>a.createElement(a.Fragment,{key:t+"-"+n+"-"+r},r>0&&a.createElement(l.Z,null),e)))))))))}},7561:function(e,t,n){var a=n(7294),l=n(7311);const r=e=>{let{title:t,date:n,author:a,category:l,tags:r,people:c,places:o}=e;return{"@context":"https://schema.org","@type":"BlogPosting",headline:t,datePublished:n,author:[{"@type":"Person",name:a.name,url:a.url}],articleSection:l,keywords:r,character:c,contentLocation:o}},c=e=>{let{title:t,category:n,slug:a}=e;return{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"/"},{"@type":"ListItem",position:2,name:n,item:"/search/?category="+encodeURIComponent(n)},{"@type":"ListItem",position:3,name:t,item:a}]}};t.Z=e=>a.createElement(a.Fragment,null,a.createElement(l.Z,{srcdoc:c(e)}),a.createElement(l.Z,{srcdoc:r(e)}))},8766:function(e,t,n){var a=n(5785),l=n(7294);t.Z=e=>{let{date:t,category:n,tags:r,people:c,places:o}=e;return l.createElement(l.Fragment,null,l.createElement("meta",{property:"og:type",content:"article"}),l.createElement("meta",{property:"og:article:published_time",content:t}),[n].concat((0,a.Z)(c),(0,a.Z)(r),(0,a.Z)(o)).map((e=>l.createElement("meta",{key:e,property:"og:article:tag",content:e}))))}},3615:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294);var l=e=>{let{children:t}=e;return a.createElement("div",{className:"sidebar-module--sidebar--ac64c"},t)}},7585:function(e,t,n){var a=n(7294),l=n(9622);t.Z=e=>{let{children:t}=e,n=(0,l.$)().title;return null!==t&&(n=t+" — "+n),a.createElement(a.Fragment,null,a.createElement("title",null,n),a.createElement("meta",{property:"og:title",content:n}))}},6262:function(e,t,n){n.d(t,{L:function(){return l}});var a=n(1883);const l=e=>{const t=(0,a.K2)("1271460761").site.siteMetadata;return new URL(e,t.siteUrl).toString()}},9622:function(e,t,n){n.d(t,{$:function(){return l}});var a=n(1883);const l=()=>(0,a.K2)("3000541721").site.siteMetadata},8472:function(e,t,n){n.r(t),n.d(t,{search:function(){return a}});const a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const a=new URLSearchParams(t);return"/search?"+a}},1151:function(e,t,n){n.d(t,{Zo:function(){return o},ah:function(){return r}});var a=n(7294);const l=a.createContext({});function r(e){const t=a.useContext(l);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function o({components:e,children:t,disableParentContext:n}){let o=r(e);return n&&(o=e||c),a.createElement(l.Provider,{value:o},t)}}}]);
//# sourceMappingURL=component---src-templates-post-jsx-content-file-path-home-molly-documents-repos-mstewartgallus-github-io-blog-web-2022-11-25-marking-up-poetry-md-1493955b274fe11e88fe.js.map