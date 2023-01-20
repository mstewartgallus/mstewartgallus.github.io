"use strict";
(self["webpackChunkwords_to_kick_your_teeth_out"] = self["webpackChunkwords_to_kick_your_teeth_out"] || []).push([[665],{

/***/ 3875:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Head": function() { return /* binding */ Head; },
  "default": function() { return /* binding */ GatsbyMDXWrapper; }
});

// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(1151);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./blog/web/2022-11-25-marking-up-poetry.md
/*@jsxRuntime classic @jsx React.createElement @jsxFrag React.Fragment*/function _createMdxContent(props){const _components=Object.assign({p:"p",a:"a",strong:"strong",h2:"h2",pre:"pre",code:"code",del:"del",em:"em",ul:"ul",li:"li"},(0,lib/* useMDXComponents */.ah)(),props.components);return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(_components.p,null,"Common poetry markup is inaccessible, unsemantic and doesn't display\nwell. I am not skilled in accessibility and I don't have good\nsolutions.  See ",/*#__PURE__*/react.createElement(_components.a,{href:"#try-it"},/*#__PURE__*/react.createElement("cite",null,"Try It"))," if you want to try out a screen\nreader yourself."),"\n",/*#__PURE__*/react.createElement(_components.p,null,/*#__PURE__*/react.createElement(_components.strong,null,"Special thanks to the kind people who helped edit this post.")),"\n",/*#__PURE__*/react.createElement(_components.h2,{id:"accessibility"},"Accessibility"),"\n",/*#__PURE__*/react.createElement(_components.p,null,"The art of the spoken word is not accessible to the visually impaired.\nMost markup navigates awkwardly, does not insert appropriate pauses\nfor breath, and mispronounces stress and sounds.  Consider\n",/*#__PURE__*/react.createElement(_components.a,{href:"#markupa"},/*#__PURE__*/react.createElement("cite",null,"Markup A"))," and ",/*#__PURE__*/react.createElement(_components.a,{href:"#markupb"},/*#__PURE__*/react.createElement("cite",null,"Markup\nB")),".  In ",/*#__PURE__*/react.createElement(_components.a,{href:"#markupa"},/*#__PURE__*/react.createElement("cite",null,"Markup A"))," a poem is\nan ordered list of stanzas and stanzas are ordered lists of verses.\nIn ",/*#__PURE__*/react.createElement(_components.a,{href:"#markupb"},/*#__PURE__*/react.createElement("cite",null,"Markup B"))," poems are sequences of stanzas,\nstanzas are paragraphs and lines in a paragraph are separated by line\nbreak elements."),"\n",/*#__PURE__*/react.createElement("figure",{id:"markupa"},/*#__PURE__*/react.createElement("figcaption",null,"Markup A"),/*#__PURE__*/react.createElement(_components.pre,null,/*#__PURE__*/react.createElement(_components.code,{className:"language-html"},"<ol class=\"poem\">\n<li>\n    <ol>\n        <li>Roses are red</li>\n        <li>Violets are blue,</li>\n        <li>Sugar is sweet</li>\n        <li>And so are you.</li>\n    </ol>\n</li>\n</ol>\n"))),"\n",/*#__PURE__*/react.createElement("figure",{id:"markupb"},/*#__PURE__*/react.createElement("figcaption",null,"Markup B"),/*#__PURE__*/react.createElement(_components.pre,null,/*#__PURE__*/react.createElement(_components.code,{className:"language-html"},"<p class=\"stanza\">Roses are red<br>\nViolets are blue,<br>\nSugar is sweet<br>\nAnd so are you.</p>\n"))),"\n",/*#__PURE__*/react.createElement(_components.p,null,/*#__PURE__*/react.createElement(_components.a,{href:"#markupa"},/*#__PURE__*/react.createElement("cite",null,"Markup A"))," is hard to navigate as each line in\nan ordered list must be manually tracked through.  As well ",/*#__PURE__*/react.createElement("q",null,"line\n",/*#__PURE__*/react.createElement("var",null,"m")," of ",/*#__PURE__*/react.createElement("var",null,"n"))," is repeated for every line of\n",/*#__PURE__*/react.createElement(_components.a,{href:"#markupa"},/*#__PURE__*/react.createElement("cite",null,"Markup A")),".  You can use the ",/*#__PURE__*/react.createElement(_components.code,null,"presentation"),"\nARIA role as in ",/*#__PURE__*/react.createElement(_components.a,{href:"#markupa2"},/*#__PURE__*/react.createElement("cite",null,"Markup A"))," and ",/*#__PURE__*/react.createElement(_components.a,{href:"#markupa3"},/*#__PURE__*/react.createElement("cite",null,"Markup\nA3"))," to ameliorate the problem.  By the spec using\nthe ",/*#__PURE__*/react.createElement(_components.code,null,"presentation")," role in a list item for a list already marked with\na ",/*#__PURE__*/react.createElement(_components.code,null,"presentation")," role doesn't do much, but such markup can reduce\ncruft in Firefox's accessibility inspector."),"\n",/*#__PURE__*/react.createElement("figure",{id:"markupa2"},/*#__PURE__*/react.createElement("figcaption",null,"Markup A2"),/*#__PURE__*/react.createElement(_components.pre,null,/*#__PURE__*/react.createElement(_components.code,{className:"language-html"},"<ol class=\"poem\">\n<li>\n    <ol role=\"presentation\">\n        <li role=\"presentation\">Roses are red</li>\n        <li role=\"presentation\">Violets are blue,</li>\n        <li role=\"presentation\">Sugar is sweet</li>\n        <li role=\"presentation\">And so are you.</li>\n    </ol>\n</li>\n</ol>\n"))),"\n",/*#__PURE__*/react.createElement("figure",{id:"markupa3"},/*#__PURE__*/react.createElement("figcaption",null,"Markup A3"),/*#__PURE__*/react.createElement(_components.pre,null,/*#__PURE__*/react.createElement(_components.code,{className:"language-html"},"<ol class=\"poem\" role=\"presentation\">\n<li>\n    <ol role=\"presentation\">\n        <li role=\"presentation\">Roses are red</li>\n        <li role=\"presentation\">Violets are blue,</li>\n        <li role=\"presentation\">Sugar is sweet</li>\n        <li role=\"presentation\">And so are you.</li>\n    </ol>\n</li>\n</ol>\n"))),"\n",/*#__PURE__*/react.createElement(_components.p,null,"As a ",/*#__PURE__*/react.createElement("i",null,"nuclear")," solution you can markup the text for graphical\ndisplay using the ",/*#__PURE__*/react.createElement(_components.code,null,"graphic")," role as in ",/*#__PURE__*/react.createElement(_components.a,{href:"#markupn"},/*#__PURE__*/react.createElement("cite",null,"Markup\nN")),".  I advise use of the ",/*#__PURE__*/react.createElement(_components.del,null,/*#__PURE__*/react.createElement(_components.code,null,"aria-labelledby")),"\n",/*#__PURE__*/react.createElement(_components.code,null,"aria-details")," (2022-11-28) attribute instead of the ",/*#__PURE__*/react.createElement(_components.code,null,"aria-label"),"\nattribute here. ",/*#__PURE__*/react.createElement(_components.code,null,"aria-label")," has a tendency to work poorly with\nnewlines in text, is not usually translated by automated tools and\ndoesn't let you embed more markup as appropriate."),"\n",/*#__PURE__*/react.createElement("figure",{id:"markupn"},/*#__PURE__*/react.createElement("figcaption",null,"Markup N"),/*#__PURE__*/react.createElement(_components.pre,null,/*#__PURE__*/react.createElement(_components.code,{className:"language-html"},"<figure>\n<div role=\"img\" aria-details=\"transcript\">\n<ol class=\"poem\">\n<li>\n    <ol>\n        <li>Roses are red</li>\n        <li>Violets are blue,</li>\n        <li>Sugar is sweet</li>\n        <li>And so are you.</li>\n    </ol>\n</li>\n</ol>\n</div>\n<figcaption id=\"transcript\">\n<p>Transcript for text to speech:</p>\n<p>Roses are red ;\n   Violets are blue,\n   Sugar is sweet ;\n   And so are you.</p>\n</figcaption>\n</figure>\n"))),"\n",/*#__PURE__*/react.createElement(_components.p,null,"In some setups ",/*#__PURE__*/react.createElement(_components.a,{href:"#markupb"},/*#__PURE__*/react.createElement("cite",null,"Markup B"))," sounds yucky.  Ending\nand starting words in separate lines like ",/*#__PURE__*/react.createElement("i",null,"red")," and\n",/*#__PURE__*/react.createElement("i",null,"Violets")," run together.  You might include extra punctuation\nannotated with a screen-reader-only class as with ",/*#__PURE__*/react.createElement(_components.a,{href:"#markupb2"},/*#__PURE__*/react.createElement("cite",null,"Markup\nB HTML"))," and ",/*#__PURE__*/react.createElement(_components.a,{href:"#markupb3"},/*#__PURE__*/react.createElement("cite",null,"Markup B CSS"))," to work around this issue.\nHowever, on Firefox this hack breaks up lines into separate areas to\ntrack through."),"\n",/*#__PURE__*/react.createElement("figure",{id:"markupb2"},/*#__PURE__*/react.createElement("figcaption",null,"Markup B HTML"),/*#__PURE__*/react.createElement(_components.pre,null,/*#__PURE__*/react.createElement(_components.code,{className:"language-html"},"<p>Roses are red<span class=\"sr-only\">; </span><br>\nViolets are blue,<br>\nSugar is sweet<span class=\"sr-only\">; </span><br>\nAnd so are you.</p>\n"))),"\n",/*#__PURE__*/react.createElement("figure",{id:"markupb3"},/*#__PURE__*/react.createElement("figcaption",null,"Markup B CSS"),/*#__PURE__*/react.createElement(_components.pre,null,/*#__PURE__*/react.createElement(_components.code,{className:"language-css"},".sr-only {\n   display: inline-block ;\n   user-select: none ;\n   font-size: 1px ;\n   line-height: 1px ;\n   color: transparent ;\n}\n"))),"\n",/*#__PURE__*/react.createElement(_components.p,null,"No revisions of ",/*#__PURE__*/react.createElement(_components.a,{href:"#markupa"},/*#__PURE__*/react.createElement("cite",null,"Markup A"))," or ",/*#__PURE__*/react.createElement(_components.a,{href:"#markupb"},/*#__PURE__*/react.createElement("cite",null,"Markup B"))," ensure\nproper pronunciation of stress and sounds.  Only American English is\nlikely to be pronounced correctly. To help, you can set the language\nattribute for documents and poems as appropriate.  However, this is\nnot a complete solution."),"\n",/*#__PURE__*/react.createElement(_components.p,null,"As an anglophone Canadian author I set the language attribute for my\ndocuments and poems to ",/*#__PURE__*/react.createElement(_components.code,null,"en-CA"),". However, this only helps with English\nwords and not with imports from other languages.  I don't know how to\nhelp screen readers pronounce names of mythical figures.  You could\nmarkup individual phrases like ",/*#__PURE__*/react.createElement(_components.code,null,"<i lang=\"non\">Sleipnir</i>")," (old\nNorse) and ",/*#__PURE__*/react.createElement(_components.code,null,"<i lang=\"gem\">Wotan</i>")," (Germanic languages group) but\nthis particular markup doesn't help."),"\n",/*#__PURE__*/react.createElement(_components.p,null,"Semantically you might markup stress with emphasis with the ",/*#__PURE__*/react.createElement(_components.code,null,"em"),"\nelement.  However, such markup is verbose and many screen readers\nignore elements like ",/*#__PURE__*/react.createElement(_components.code,null,"em")," because of the heavy unsemantic abuse of\nsuch elements in the wider internet for presenting bold text."),"\n",/*#__PURE__*/react.createElement(_components.p,null,"Perhaps there might be some obscure Unicode diacritics for better\nmarking up the prosody but I have not explored this option.  I worry\nthat such glyphs might be pronounced in common screen readers as\nsomething like ",/*#__PURE__*/react.createElement("q",null,"Unicode character 591"),"."),"\n",/*#__PURE__*/react.createElement(_components.h2,{id:"presentation"},"Presentation"),"\n",/*#__PURE__*/react.createElement(_components.p,null,"Laying out poetry on small formats is awkward.  In print the standard\nlayout for overlong lines is to align the first line ragged right and\nall other lines ragged left."),"\n",/*#__PURE__*/react.createElement(_components.p,null,"You can approximate a poetry layout with a hanging indent layout\nsomething like ",/*#__PURE__*/react.createElement(_components.a,{href:"#indentcss"},/*#__PURE__*/react.createElement("cite",null,"Indent CSS")),".  However, a\nhanging indent layout is not really correct."),"\n",/*#__PURE__*/react.createElement("figure",{id:"indentcss"},/*#__PURE__*/react.createElement("figcaption",null,"Indent CSS"),/*#__PURE__*/react.createElement(_components.pre,null,/*#__PURE__*/react.createElement(_components.code,{className:"language-css"},".line {\n   text-indent: -4ch ;\n   margin-left: 4ch ;\n}\n"))),"\n",/*#__PURE__*/react.createElement(_components.p,null,"You can approximate a poetry layout on the web by aligning every line\nblock to the left but aligning the last line of the text ",/*#__PURE__*/react.createElement(_components.em,null,"within")," the\nline block to the right.  Something like ",/*#__PURE__*/react.createElement(_components.a,{href:"#alignlastcss"},/*#__PURE__*/react.createElement("cite",null,"Align Last\nCSS"))," almost works for a poetry layout.  However,\neven this layout fails when you overflow multiple lines."),"\n",/*#__PURE__*/react.createElement("figure",{id:"alignlastcss"},/*#__PURE__*/react.createElement("figcaption",null,"Align Last CSS"),/*#__PURE__*/react.createElement(_components.pre,null,/*#__PURE__*/react.createElement(_components.code,{className:"language-css"},".stanza {\n   display: flex ;\n   flex-direction: column ;\n   align-items: start ;\n}\n.line {\n   display: block ;\n   text-align-last: end ;\n}\n"))),"\n",/*#__PURE__*/react.createElement(_components.p,null,/*#__PURE__*/react.createElement(_components.a,{href:"#examplecode"},/*#__PURE__*/react.createElement("cite",null,"Example Code"))," is similar to the current\ncompromise I use on this site."),"\n",/*#__PURE__*/react.createElement("figure",{id:"examplecode"},/*#__PURE__*/react.createElement("figcaption",null,"Example Code"),/*#__PURE__*/react.createElement(_components.pre,null,/*#__PURE__*/react.createElement(_components.code,{className:"language-html"},"<style>\n#scope p {\n   text-indent: 0 ;\n   padding: 0 ;\n}\n#scope p > span {\n   display: inline-block ;\n   text-align-last: end ;\n}\n</style>\n<div id=\"scope\" lang=\"en-CA\">\n<p>\n  <span>Roses are red</span><br>\n  <span>Violets are blue</span><br>\n  <span>Sugar is sweet</span><br>\n  <span>aaaaaaaaaaaaaaaa.</span>\n</p>\n</div>\n"))),"\n",/*#__PURE__*/react.createElement(_components.h2,{id:"conclusion"},"Conclusion"),"\n",/*#__PURE__*/react.createElement(_components.p,null,"You should use the ",/*#__PURE__*/react.createElement(_components.code,null,"audio")," element to markup poetry."),"\n",/*#__PURE__*/react.createElement(_components.h2,{id:"try-it"},"Try It"),"\n",/*#__PURE__*/react.createElement(_components.p,null,"Personally I found Android TalkBack to be the easiest screen reader to\nget started with. ",/*#__PURE__*/react.createElement(_components.a,{href:"https://www.a11yproject.com"},"The helpful ",/*#__PURE__*/react.createElement("cite",null,"A11y Project"),"\nblog")," has a number of guides on getting\nstarted with screen readers but they might be a little old."),"\n",/*#__PURE__*/react.createElement(_components.ul,null,"\n",/*#__PURE__*/react.createElement(_components.li,null,/*#__PURE__*/react.createElement(_components.a,{href:"https://www.a11yproject.com/posts/getting-started-with-orca"},/*#__PURE__*/react.createElement("cite",null,"Getting Started with Orca screen reader on Gnome desktop environment on Ubuntu 20.04 LTS"))),"\n",/*#__PURE__*/react.createElement(_components.li,null,/*#__PURE__*/react.createElement(_components.a,{href:"https://www.a11yproject.com/posts/getting-started-with-voiceover-ios"},/*#__PURE__*/react.createElement("cite",null,"Getting Started with VoiceOver on iOS"))),"\n",/*#__PURE__*/react.createElement(_components.li,null,/*#__PURE__*/react.createElement(_components.a,{href:"https://www.a11yproject.com/posts/getting-started-with-nvda"},/*#__PURE__*/react.createElement("cite",null,"Getting Started with NVDA"))),"\n",/*#__PURE__*/react.createElement(_components.li,null,/*#__PURE__*/react.createElement(_components.a,{href:"https://www.a11yproject.com/posts/getting-started-with-voiceover"},/*#__PURE__*/react.createElement("cite",null,"Getting Started with MacOS VoiceOver"))),"\n"),"\n",/*#__PURE__*/react.createElement(_components.h2,{id:"and-one-more-thing"},"And One More Thing"),"\n",/*#__PURE__*/react.createElement(_components.p,null,"As of this blog post, the ",/*#__PURE__*/react.createElement(_components.a,{href:"https://www.w3.org/TR/css-speech-1/"},/*#__PURE__*/react.createElement("cite",null,"CSS Speech\nModule"))," has never really\ngone anywhere.  Perhaps in the future the ",/*#__PURE__*/react.createElement(_components.code,null,"voice-stress"),",\n",/*#__PURE__*/react.createElement(_components.code,null,"voice-duration")," (for long syllables), ",/*#__PURE__*/react.createElement(_components.code,null,"voice-pitch")," (for pitch\naccent) and ",/*#__PURE__*/react.createElement(_components.code,null,"pause")," properties would solve these sort of accessibility\nproblems."),"\n",/*#__PURE__*/react.createElement(_components.p,null,"*[HTML]: HyperText Markup Language"),"\n",/*#__PURE__*/react.createElement(_components.p,null,"*[CSS]: Cascading Style Sheets"),"\n",/*#__PURE__*/react.createElement(_components.p,null,"*[ARIA]: Accessible Rich Internet Applications"));}function MDXContent(props){if(props===void 0){props={};}const{wrapper:MDXLayout}=Object.assign({},(0,lib/* useMDXComponents */.ah)(),props.components);return MDXLayout?/*#__PURE__*/react.createElement(MDXLayout,props,/*#__PURE__*/react.createElement(_createMdxContent,props)):_createMdxContent(props);}/* harmony default export */ var _2022_11_25_marking_up_poetry = (MDXContent);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 10 modules
var gatsby_browser_entry = __webpack_require__(1883);
// EXTERNAL MODULE: ./src/components/breadcrumbs.jsx + 1 modules
var breadcrumbs = __webpack_require__(5238);
// EXTERNAL MODULE: ./src/components/caesura.jsx
var caesura = __webpack_require__(7122);
// EXTERNAL MODULE: ./src/components/heading.jsx
var heading = __webpack_require__(8749);
// EXTERNAL MODULE: ./src/components/head-basic.jsx + 2 modules
var head_basic = __webpack_require__(4222);
// EXTERNAL MODULE: ./src/components/l.jsx + 1 modules
var l = __webpack_require__(4472);
// EXTERNAL MODULE: ./src/components/lg.jsx + 1 modules
var lg = __webpack_require__(1045);
// EXTERNAL MODULE: ./src/components/metadata.jsx + 1 modules
var metadata = __webpack_require__(8691);
// EXTERNAL MODULE: ./src/components/page.jsx + 1 modules
var page = __webpack_require__(8660);
// EXTERNAL MODULE: ./src/components/paging.jsx + 1 modules
var paging = __webpack_require__(8306);
// EXTERNAL MODULE: ./src/components/poem.jsx
var poem = __webpack_require__(6793);
// EXTERNAL MODULE: ./src/components/seo-post.jsx
var seo_post = __webpack_require__(1884);
// EXTERNAL MODULE: ./src/components/sidebar.jsx + 1 modules
var sidebar = __webpack_require__(3615);
// EXTERNAL MODULE: ./src/components/title.jsx
var components_title = __webpack_require__(7585);
// EXTERNAL MODULE: ./src/utils/search.js
var search = __webpack_require__(8472);
;// CONCATENATED MODULE: ./src/templates/post.jsx?__contentFilePath=/home/molly/Documents/repos/mstewartgallus.github.io/blog/web/2022-11-25-marking-up-poetry.md


















const Category = _ref => {
  let {
    category
  } = _ref;
  const to = (0,search.search)(['category', category]);
  return /*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU, {
    to: to,
    rel: "tag",
    "data-pagefind-filter": "category"
  }, category);
};
const Notice = _ref2 => {
  let {
    notice
  } = _ref2;
  return notice && notice.length > 0 && /*#__PURE__*/react.createElement("dl", null, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("dt", null, "Notice"), notice.map(n => /*#__PURE__*/react.createElement("dd", {
    key: n
  }, n))));
};
const shortcodes = {
  Lg: lg/* default */.Z,
  L: l/* default */.Z,
  Caesura: caesura/* Caesura */.F,
  H1: heading.H1,
  H2: heading.H2,
  H3: heading.H3,
  H4: heading.H4,
  H5: heading.H5,
  H6: heading.H6
};
const _2022_11_25_marking_up_poetry_poem = {
  ul: lg/* default */.Z,
  li: l/* default */.Z
};
const autolinkHeadings = {
  h1: heading.H1,
  h2: heading.H2,
  h3: heading.H3,
  h4: heading.H4,
  h5: heading.H5,
  h6: heading.H6
};
const defaultComponents = {
  ...shortcodes,
  ...autolinkHeadings
};
const components = {
  "Poem": {
    ...defaultComponents,
    ..._2022_11_25_marking_up_poetry_poem
  },
  "Prose": defaultComponents,
  "Web": defaultComponents
};
const Content = _ref3 => {
  let {
    category,
    content,
    children
  } = _ref3;
  const type = content.__typename;
  switch (type) {
    case 'MdxContent':
      return /*#__PURE__*/react.createElement(lib/* MDXProvider */.Zo, {
        components: components[category]
      }, children);
    case 'PoemContent':
      return /*#__PURE__*/react.createElement(poem/* default */.Z, {
        poem: content.body
      });
    default:
      throw new Error("unknown type: " + type);
  }
};
const author = {
  name: "Molly Stewart-Gallus",
  url: "/about/"
};
const Head = _ref4 => {
  let {
    location: {
      pathname
    },
    data: {
      post
    }
  } = _ref4;
  const {
    title,
    dateXml,
    category,
    tags,
    places,
    people
  } = post.metadata;
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(head_basic/* default */.Z, {
    pathname: pathname
  }), /*#__PURE__*/react.createElement(components_title/* default */.Z, null, title), /*#__PURE__*/react.createElement(seo_post/* default */.Z, {
    title: title,
    date: dateXml,
    author: author,
    category: category,
    tags: tags,
    people: people,
    places: places
  }));
};
const BlogPost = _ref5 => {
  var _previous$metadata, _next$metadata, _previous$metadata2, _next$metadata2;
  let {
    children,
    data: {
      post: {
        previous,
        next,
        content,
        metadata: {
          category,
          dateXml,
          dateDisplay,
          title,
          subtitle,
          notice,
          tags,
          places,
          people
        }
      }
    }
  } = _ref5;
  const id = react.useId();
  return /*#__PURE__*/react.createElement(page/* default */.Z, null, /*#__PURE__*/react.createElement("main", {
    "data-pagefind-body": true,
    "aria-describedby": id
  }, /*#__PURE__*/react.createElement("header", null, /*#__PURE__*/react.createElement("hgroup", null, /*#__PURE__*/react.createElement("h1", {
    id: id
  }, title), subtitle && /*#__PURE__*/react.createElement("p", null, subtitle)), /*#__PURE__*/react.createElement(Notice, {
    notice: notice
  })), /*#__PURE__*/react.createElement(Content, {
    category: category,
    content: content
  }, children)), /*#__PURE__*/react.createElement(sidebar/* default */.Z, null, /*#__PURE__*/react.createElement(paging/* default */.Z, {
    previous: previous === null || previous === void 0 ? void 0 : (_previous$metadata = previous.metadata) === null || _previous$metadata === void 0 ? void 0 : _previous$metadata.title,
    next: next === null || next === void 0 ? void 0 : (_next$metadata = next.metadata) === null || _next$metadata === void 0 ? void 0 : _next$metadata.title,
    phref: previous === null || previous === void 0 ? void 0 : (_previous$metadata2 = previous.metadata) === null || _previous$metadata2 === void 0 ? void 0 : _previous$metadata2.slug,
    nhref: next === null || next === void 0 ? void 0 : (_next$metadata2 = next.metadata) === null || _next$metadata2 === void 0 ? void 0 : _next$metadata2.slug
  }), /*#__PURE__*/react.createElement(metadata/* default */.Z, {
    author: author,
    dateDisplay: dateDisplay,
    dateXml: dateXml,
    tags: tags,
    places: places,
    people: people
  }), /*#__PURE__*/react.createElement(breadcrumbs/* default */.Z, null, /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU, {
    to: "/"
  }, "Home")), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement(Category, {
    category: category
  })), /*#__PURE__*/react.createElement("li", {
    "aria-current": "page"
  }, /*#__PURE__*/react.createElement("cite", null, title)))));
};
BlogPost;
function GatsbyMDXWrapper(props) {
  return /*#__PURE__*/react.createElement(BlogPost, props, /*#__PURE__*/react.createElement(_2022_11_25_marking_up_poetry, props));
}
const pageQuery = "3271620454";

/***/ }),

/***/ 5238:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_breadcrumbs; }
});

// UNUSED EXPORTS: Breadcrumbs

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./src/components/breadcrumbs.module.css
// extracted by mini-css-extract-plugin
var breadcrumb = "breadcrumbs-module--breadcrumb--6b8cf";
var breadcrumbs = "breadcrumbs-module--breadcrumbs--e2995";
;// CONCATENATED MODULE: ./src/components/breadcrumbs.jsx
const Breadcrumbs=_ref=>{let{children}=_ref;const id=react.useId();return/*#__PURE__*/react.createElement("nav",{className:breadcrumbs,"aria-labelledby":id},/*#__PURE__*/react.createElement("header",{className:"sr-only"},/*#__PURE__*/react.createElement("hgroup",null,/*#__PURE__*/react.createElement("h2",{id:id},"Breadcrumbs"))),/*#__PURE__*/react.createElement("ol",{className:breadcrumb},children));};/* harmony default export */ var components_breadcrumbs = (Breadcrumbs);

/***/ }),

/***/ 7122:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": function() { return /* binding */ Caesura; }
/* harmony export */ });
const Caesura=()=>'\u2009\u2014\u2009';/* harmony default export */ __webpack_exports__["Z"] = (Caesura);

/***/ }),

/***/ 4222:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ head_basic; }
});

// UNUSED EXPORTS: HeadBasic

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/hooks/use-site-metadata.js
var use_site_metadata = __webpack_require__(9622);
;// CONCATENATED MODULE: ./src/assets/favicon.svg
/* harmony default export */ var favicon = ("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxzdHlsZT4KICAgIHRleHQgewogICAgICBmb250OiA0MDAgNDJweCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICJTZWdvZSBVSSIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgIkFwcGxlIENvbG9yIEVtb2ppIiwgIlNlZ29lIFVJIEVtb2ppIiwgIlNlZ29lIFVJIFN5bWJvbCIgOwogICAgfQogIDwvc3R5bGU+CgogIDxjaXJjbGUgcj0iNTAiIGN4PSI1MCIgY3k9IjUwIiBmaWxsPSIjNjBhIi8+CiAgPHRleHQgeD0iNTAiIHk9IjYyIiBmb250LXNpemU9IjQyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSI+bXNnPC90ZXh0Pgo8L3N2Zz4K");
;// CONCATENATED MODULE: ./src/components/seo-basic.jsx
const author={name:"Molly Stewart-Gallus",url:"/about"};const SeoBasic=_ref=>{let{url}=_ref;const site=(0,use_site_metadata/* useSiteMetadata */.$)();return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement("link",{rel:"canonical",href:url}),/*#__PURE__*/react.createElement("meta",{name:"description",content:site.description}),/*#__PURE__*/react.createElement("meta",{name:"og:site_name",content:site.title}),/*#__PURE__*/react.createElement("meta",{property:"og:image",content:favicon}),/*#__PURE__*/react.createElement("meta",{property:"og:url",content:url}),/*#__PURE__*/react.createElement("meta",{property:"og:description",content:site.description}),/*#__PURE__*/react.createElement("link",{rel:"author",href:author.url}),/*#__PURE__*/react.createElement("meta",{name:"author",content:author.name}),/*#__PURE__*/react.createElement("meta",{property:"og:profile",content:author.name}),/*#__PURE__*/react.createElement("meta",{property:"og:profile:username",content:author.name}));};/* harmony default export */ var seo_basic = (SeoBasic);
// EXTERNAL MODULE: ./src/hooks/use-absolute.js
var use_absolute = __webpack_require__(6262);
;// CONCATENATED MODULE: ./src/components/head-basic.jsx
const HeadBasic=_ref=>{let{pathname}=_ref;const url=(0,use_absolute/* useAbsolute */.L)(pathname);return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement("link",{rel:"icon",href:favicon}),/*#__PURE__*/react.createElement("meta",{name:"color-scheme",content:"light dark"}),/*#__PURE__*/react.createElement("meta",{name:"theme-color",content:"#6000A0"}),/*#__PURE__*/react.createElement(seo_basic,{url:url}));};/* harmony default export */ var head_basic = (HeadBasic);

/***/ }),

/***/ 8749:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H1": function() { return /* binding */ H1; },
/* harmony export */   "H2": function() { return /* binding */ H2; },
/* harmony export */   "H3": function() { return /* binding */ H3; },
/* harmony export */   "H4": function() { return /* binding */ H4; },
/* harmony export */   "H5": function() { return /* binding */ H5; },
/* harmony export */   "H6": function() { return /* binding */ H6; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1883);
const Hn=props=>{const level=props.level;switch(level){case 1:return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",props,props.children);case 2:return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2",props,props.children);case 3:return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3",props,props.children);case 4:return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4",props,props.children);case 5:return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5",props,props.children);case 6:return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6",props,props.children);default:throw new Error("level > 6 "+level);};};const HnAutolink=props=>{const textId=react__WEBPACK_IMPORTED_MODULE_0__.useId();const{id,children}=props;if(!id){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Hn,props,children);}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Hn,props,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{role:"presentation",id:textId},children),"\u2003",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__/* .Link */ .rU,{to:"#"+id,"aria-describedby":textId},"#"));};const H1=props=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(HnAutolink,Object.assign({},props,{level:1}),props.children);const H2=props=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(HnAutolink,Object.assign({},props,{level:2}),props.children);const H3=props=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(HnAutolink,Object.assign({},props,{level:3}),props.children);const H4=props=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(HnAutolink,Object.assign({},props,{level:4}),props.children);const H5=props=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(HnAutolink,Object.assign({},props,{level:5}),props.children);const H6=props=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(HnAutolink,Object.assign({},props,{level:6}),props.children);

/***/ }),

/***/ 7311:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export JsonLd */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1883);
const JsonLd=_ref=>{let{srcdoc}=_ref;const json=JSON.stringify(srcdoc);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__/* .Script */ .Xf,{type:"application/ld+json"},json);};/* harmony default export */ __webpack_exports__["Z"] = (JsonLd);

/***/ }),

/***/ 4472:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_l; }
});

// UNUSED EXPORTS: L

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./src/components/l.module.css
// extracted by mini-css-extract-plugin
var l = "l-module--l--9f372";
;// CONCATENATED MODULE: ./src/components/l.jsx
// FIXME rm last break
const L=_ref=>{let{children}=_ref;return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement("span",{role:"presentation",className:l},children),/*#__PURE__*/react.createElement("br",null));};/* harmony default export */ var components_l = (L);

/***/ }),

/***/ 1045:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_lg; }
});

// UNUSED EXPORTS: Lg

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./src/components/lg.module.css
// extracted by mini-css-extract-plugin
var lg = "lg-module--lg--87b8f";
;// CONCATENATED MODULE: ./src/components/lg.jsx
const Lg=_ref=>{let{children}=_ref;return/*#__PURE__*/react.createElement("p",{className:lg},children);};/* harmony default export */ var components_lg = (Lg);

/***/ }),

/***/ 8691:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_metadata; }
});

// UNUSED EXPORTS: Metadata

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 10 modules
var gatsby_browser_entry = __webpack_require__(1883);
// EXTERNAL MODULE: ./src/utils/search.js
var search = __webpack_require__(8472);
;// CONCATENATED MODULE: ./src/components/metadata.module.css
// extracted by mini-css-extract-plugin
var metadata = "metadata-module--metadata--eee65";
;// CONCATENATED MODULE: ./src/components/metadata.jsx
const Place=_ref=>{let{place}=_ref;const to=(0,search.search)(['place',place]);return/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:to,rel:"tag","data-pagefind-filter":"place"},place);};const PlaceList=_ref2=>{let{places}=_ref2;return places&&places.length>0&&/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement("dt",null,"Place"),places.map(p=>/*#__PURE__*/react.createElement("dd",{key:p},/*#__PURE__*/react.createElement(Place,{place:p}))));};const Tag=_ref3=>{let{tag}=_ref3;const to=(0,search.search)(['tag',tag]);return/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:to,rel:"tag","data-pagefind-filter":"tag"},tag);};const TagList=_ref4=>{let{tags}=_ref4;return tags&&tags.length>0&&/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement("dt",null,"Tag"),tags.map(t=>/*#__PURE__*/react.createElement("dd",{key:t},/*#__PURE__*/react.createElement(Tag,{tag:t}))));};const Person=_ref5=>{let{person}=_ref5;const to=(0,search.search)(['person',person]);return/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:to,rel:"tag","data-pagefind-filter":"person"},person);};const PeopleList=_ref6=>{let{people}=_ref6;return people&&people.length>0&&/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement("dt",null,"People"),people.map(p=>/*#__PURE__*/react.createElement("dd",{key:p},/*#__PURE__*/react.createElement(Person,{person:p}))));};const Metadata=_ref7=>{let{dateDisplay,dateXml,author,places,tags,people}=_ref7;const id=react.useId();return/*#__PURE__*/react.createElement("footer",{className:metadata,"aria-describedby":id},/*#__PURE__*/react.createElement("hgroup",{className:"sr-only"},/*#__PURE__*/react.createElement("h2",{id:id},"Metadata")),/*#__PURE__*/react.createElement("dl",null,/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement("dt",null,"Post Date"),/*#__PURE__*/react.createElement("dd",null,/*#__PURE__*/react.createElement("time",{"data-pagefind-filter":"date[datetime]","data-pagefind-sort":"date[datetime]",dateTime:dateXml},dateDisplay))),/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement("dt",null,/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{rel:"author",to:author.url},"Author")),/*#__PURE__*/react.createElement("dd",null,author.name)),/*#__PURE__*/react.createElement(PlaceList,{places:places}),/*#__PURE__*/react.createElement(TagList,{tags:tags}),/*#__PURE__*/react.createElement(PeopleList,{people:people})));};/* harmony default export */ var components_metadata = (Metadata);

/***/ }),

/***/ 8660:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_page; }
});

// UNUSED EXPORTS: Page

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./src/components/page.module.css
// extracted by mini-css-extract-plugin
var page = "page-module--page--acc67";
;// CONCATENATED MODULE: ./src/components/page.jsx
const Page=_ref=>{let{children}=_ref;return/*#__PURE__*/react.createElement("div",{className:page},children);};/* harmony default export */ var components_page = (Page);

/***/ }),

/***/ 8306:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_paging; }
});

// UNUSED EXPORTS: Paging

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 10 modules
var gatsby_browser_entry = __webpack_require__(1883);
;// CONCATENATED MODULE: ./src/components/paging.module.css
// extracted by mini-css-extract-plugin
var paging = "paging-module--paging--da478";
;// CONCATENATED MODULE: ./src/components/paging.jsx
const Prev=_ref=>{let{children,href}=_ref;return href&&/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement("dt",null,/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:href},"Previous")),/*#__PURE__*/react.createElement("dd",null,children));};const Next=_ref2=>{let{children,href}=_ref2;return href&&/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement("dt",null,/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:href},"Next")),/*#__PURE__*/react.createElement("dd",null,children));};const Paging=_ref3=>{let{previous,next,phref,nhref}=_ref3;const id=react.useId();return/*#__PURE__*/react.createElement("nav",{className:paging,"aria-labelledby":id},/*#__PURE__*/react.createElement("header",{className:"sr-only"},/*#__PURE__*/react.createElement("hgroup",null,/*#__PURE__*/react.createElement("h2",{id:id},"Paging"))),/*#__PURE__*/react.createElement("dl",null,/*#__PURE__*/react.createElement(Prev,{href:phref},/*#__PURE__*/react.createElement("cite",null,previous)),/*#__PURE__*/react.createElement(Next,{href:nhref},/*#__PURE__*/react.createElement("cite",null,next))));};/* harmony default export */ var components_paging = (Paging);

/***/ }),

/***/ 6793:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export Poem */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _caesura_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7122);
/* harmony import */ var _l_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4472);
/* harmony import */ var _lg_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1045);
// FIXME haz to be a better method of keying
const Poem=_ref=>{let{poem}=_ref;return poem.map((stanza,stanzano)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lg_jsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{key:stanzano},stanza.map((line,lineno)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_l_jsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{key:stanzano+"-"+lineno},line.map((segment,segno)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{key:stanzano+"-"+lineno+"-"+segno},segno>0&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_caesura_jsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,null),segment))))));};/* harmony default export */ __webpack_exports__["Z"] = (Poem);

/***/ }),

/***/ 1884:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export SeoPost */
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5785);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _json_ld_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7311);
const blogPosting=_ref=>{let{title,date,author,category,tags,people,places}=_ref;return{"@context":"https://schema.org","@type":"BlogPosting","headline":title,"datePublished":date,"author":[{"@type":"Person","name":author.name,"url":author.url}],"articleSection":category,"keywords":tags,"character":people,"contentLocation":places};};const breadcrumbs=_ref2=>{let{title,category,slug}=_ref2;const uricat=encodeURIComponent(category);return{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"/"},{"@type":"ListItem","position":2,"name":category,"item":"/search/?category="+uricat},{"@type":"ListItem","position":3,"name":title,"item":slug}]};};const SeoPost=props=>{const{date,category,tags,people,places}=props;// {{ page.date | date: "%Y-%m-%d" }}"
// <meta property="og:article:author" content="{{ author.name | escape }}" />
const allTags=[category].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(people),(0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(tags),(0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(places));return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:type",content:"article"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:article:published_time",content:date}),allTags.map(tag=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:article:tag",content:tag})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_json_ld_jsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{srcdoc:breadcrumbs(props)}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_json_ld_jsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{srcdoc:blogPosting(props)}));};/* harmony default export */ __webpack_exports__["Z"] = (SeoPost);

/***/ }),

/***/ 3615:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_sidebar; }
});

// UNUSED EXPORTS: Sidebar

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./src/components/sidebar.module.css
// extracted by mini-css-extract-plugin
var sidebar = "sidebar-module--sidebar--ac64c";
;// CONCATENATED MODULE: ./src/components/sidebar.jsx
const Sidebar=_ref=>{let{children}=_ref;return/*#__PURE__*/react.createElement("div",{className:sidebar},children);};/* harmony default export */ var components_sidebar = (Sidebar);

/***/ }),

/***/ 7585:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export Title */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _hooks_use_site_metadata_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9622);
const Title=_ref=>{let{children}=_ref;let title=(0,_hooks_use_site_metadata_js__WEBPACK_IMPORTED_MODULE_1__/* .useSiteMetadata */ .$)().title;if(children!==null){title=children+"\u2009\u2014\u2009"+title;}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",null,title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:title",content:title}));};/* harmony default export */ __webpack_exports__["Z"] = (Title);

/***/ }),

/***/ 6262:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": function() { return /* binding */ useAbsolute; }
/* harmony export */ });
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1883);
const useMetadata=()=>(0,gatsby__WEBPACK_IMPORTED_MODULE_0__/* .useStaticQuery */ .K2)("1271460761").site.siteMetadata;const useAbsolute=pathname=>{const site=useMetadata();return new URL(pathname,site.siteUrl).toString();};

/***/ }),

/***/ 9622:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": function() { return /* binding */ useSiteMetadata; }
/* harmony export */ });
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1883);
const useSiteMetadata=()=>(0,gatsby__WEBPACK_IMPORTED_MODULE_0__/* .useStaticQuery */ .K2)("3000541721").site.siteMetadata;

/***/ }),

/***/ 8472:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "search": function() { return /* binding */ search; }
/* harmony export */ });
const search=function(){for(var _len=arguments.length,xs=new Array(_len),_key=0;_key<_len;_key++){xs[_key]=arguments[_key];}const p=new URLSearchParams(xs);return"/search?"+p;};

/***/ }),

/***/ 1151:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Zo": function() { return /* binding */ MDXProvider; },
/* harmony export */   "ah": function() { return /* binding */ useMDXComponents; }
/* harmony export */ });
/* unused harmony exports MDXContext, withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/**
 * @typedef {import('react').ReactNode} ReactNode
 * @typedef {import('mdx/types').MDXComponents} Components
 *
 * @typedef Props
 *   Configuration.
 * @property {Components} [components]
 *   Mapping of names for JSX components to React components.
 * @property {boolean} [disableParentContext=false]
 *   Turn off outer component context.
 * @property {ReactNode} [children]
 *   Children.
 *
 * @callback MergeComponents
 * @param {Components} currentComponents
 *   Current components from the context.
 * @returns {Components}
 *   Merged components.
 */



/**
 * @type {import('react').Context<Components>}
 * @deprecated
 *   This export is marked as a legacy feature.
 *   That means it’s no longer recommended for use as it might be removed
 *   in a future major release.
 *
 *   Please use `useMDXComponents` to get context based components and
 *   `MDXProvider` to set context based components instead.
 */
const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({})

/**
 * @param {import('react').ComponentType<any>} Component
 * @deprecated
 *   This export is marked as a legacy feature.
 *   That means it’s no longer recommended for use as it might be removed
 *   in a future major release.
 *
 *   Please use `useMDXComponents` to get context based components instead.
 */
function withMDXComponents(Component) {
  return boundMDXComponent

  /**
   * @param {Record<string, unknown> & {components?: Components}} props
   * @returns {JSX.Element}
   */
  function boundMDXComponent(props) {
    const allComponents = useMDXComponents(props.components)
    return React.createElement(Component, {...props, allComponents})
  }
}

/**
 * Get current components from the MDX Context.
 *
 * @param {Components|MergeComponents} [components]
 *   Additional components to use or a function that takes the current
 *   components and filters/merges/changes them.
 * @returns {Components}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)
  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    // Custom merge via a function prop
    if (typeof components === 'function') {
      return components(contextComponents)
    }

    return {...contextComponents, ...components}
  }, [contextComponents, components])
}

/** @type {Components} */
const emptyObject = {}

/**
 * Provider for MDX context
 *
 * @param {Props} props
 * @returns {JSX.Element}
 */
function MDXProvider({components, children, disableParentContext}) {
  let allComponents = useMDXComponents(components)

  if (disableParentContext) {
    allComponents = components || emptyObject
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    children
  )
}


/***/ })

}]);
//# sourceMappingURL=component---src-templates-post-jsx-content-file-path-home-molly-documents-repos-mstewartgallus-github-io-blog-web-2022-11-25-marking-up-poetry-md-5e91668c3dffc468b138.js.map