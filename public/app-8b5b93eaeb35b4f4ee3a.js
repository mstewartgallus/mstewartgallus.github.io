(self["webpackChunkwords_to_kick_your_teeth_out"] = self["webpackChunkwords_to_kick_your_teeth_out"] || []).push([[143],{

/***/ 4506:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = true;
exports.H = void 0;
const applyTrailingSlashOption = (input, option = `always`) => {
  const hasHtmlSuffix = input.endsWith(`.html`);
  const hasXmlSuffix = input.endsWith(`.xml`);
  const hasPdfSuffix = input.endsWith(`.pdf`);
  if (input === `/`) return input;
  if (hasHtmlSuffix || hasXmlSuffix || hasPdfSuffix) {
    option = `never`;
  }
  if (option === `always`) {
    return input.endsWith(`/`) ? input : `${input}/`;
  }
  if (option === `never`) {
    return input.endsWith(`/`) ? input.slice(0, -1) : input;
  }
  return input;
};
exports.H = applyTrailingSlashOption;

/***/ }),

/***/ 9679:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = true;
__webpack_unused_export__ = exports.$C = void 0;
var _scrollHandler = __webpack_require__(1432);
exports.$C = _scrollHandler.ScrollHandler;
var _useScrollRestoration = __webpack_require__(4855);
__webpack_unused_export__ = _useScrollRestoration.useScrollRestoration;

/***/ }),

/***/ 1432:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
exports.__esModule = true;
exports.ScrollHandler = exports.ScrollContext = void 0;
var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(6115));
var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(7867));
var React = _interopRequireWildcard(__webpack_require__(7294));
var _propTypes = _interopRequireDefault(__webpack_require__(5697));
var _sessionStorage = __webpack_require__(1142);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var ScrollContext = /*#__PURE__*/React.createContext(new _sessionStorage.SessionStorage());
exports.ScrollContext = ScrollContext;
ScrollContext.displayName = "GatsbyScrollContext";
var ScrollHandler = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2.default)(ScrollHandler, _React$Component);
  function ScrollHandler() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this._stateStorage = new _sessionStorage.SessionStorage();
    _this._isTicking = false;
    _this._latestKnownScrollY = 0;
    _this.scrollListener = function () {
      _this._latestKnownScrollY = window.scrollY;
      if (!_this._isTicking) {
        _this._isTicking = true;
        requestAnimationFrame(_this._saveScroll.bind((0, _assertThisInitialized2.default)(_this)));
      }
    };
    _this.windowScroll = function (position, prevProps) {
      if (_this.shouldUpdateScroll(prevProps, _this.props)) {
        window.scrollTo(0, position);
      }
    };
    _this.scrollToHash = function (hash, prevProps) {
      var node = document.getElementById(hash.substring(1));
      if (node && _this.shouldUpdateScroll(prevProps, _this.props)) {
        node.scrollIntoView();
      }
    };
    _this.shouldUpdateScroll = function (prevRouterProps, routerProps) {
      var shouldUpdateScroll = _this.props.shouldUpdateScroll;
      if (!shouldUpdateScroll) {
        return true;
      }

      // Hack to allow accessing this._stateStorage.
      return shouldUpdateScroll.call((0, _assertThisInitialized2.default)(_this), prevRouterProps, routerProps);
    };
    return _this;
  }
  var _proto = ScrollHandler.prototype;
  _proto._saveScroll = function _saveScroll() {
    var key = this.props.location.key || null;
    if (key) {
      this._stateStorage.save(this.props.location, key, this._latestKnownScrollY);
    }
    this._isTicking = false;
  };
  _proto.componentDidMount = function componentDidMount() {
    window.addEventListener("scroll", this.scrollListener);
    var scrollPosition;
    var _this$props$location = this.props.location,
      key = _this$props$location.key,
      hash = _this$props$location.hash;
    if (key) {
      scrollPosition = this._stateStorage.read(this.props.location, key);
    }
    if (scrollPosition) {
      this.windowScroll(scrollPosition, undefined);
    } else if (hash) {
      this.scrollToHash(decodeURI(hash), undefined);
    }
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollListener);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this$props$location2 = this.props.location,
      hash = _this$props$location2.hash,
      key = _this$props$location2.key;
    var scrollPosition;
    if (key) {
      scrollPosition = this._stateStorage.read(this.props.location, key);
    }

    /**  There are two pieces of state: the browser url and
     * history state which keeps track of scroll position
     * Native behaviour prescribes that we ought to restore scroll position
     * when a user navigates back in their browser (this is the `POP` action)
     * Currently, reach router has a bug that prevents this at https://github.com/reach/router/issues/228
     * So we _always_ stick to the url as a source of truth — if the url
     * contains a hash, we scroll to it
     */

    if (hash) {
      this.scrollToHash(decodeURI(hash), prevProps);
    } else {
      this.windowScroll(scrollPosition, prevProps);
    }
  };
  _proto.render = function render() {
    return /*#__PURE__*/React.createElement(ScrollContext.Provider, {
      value: this._stateStorage
    }, this.props.children);
  };
  return ScrollHandler;
}(React.Component);
exports.ScrollHandler = ScrollHandler;
ScrollHandler.propTypes = {
  shouldUpdateScroll: _propTypes.default.func,
  children: _propTypes.default.element.isRequired,
  location: _propTypes.default.object.isRequired
};

/***/ }),

/***/ 1142:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.SessionStorage = void 0;
var STATE_KEY_PREFIX = "@@scroll|";
var GATSBY_ROUTER_SCROLL_STATE = "___GATSBY_REACT_ROUTER_SCROLL";
var SessionStorage = /*#__PURE__*/function () {
  function SessionStorage() {}
  var _proto = SessionStorage.prototype;
  _proto.read = function read(location, key) {
    var stateKey = this.getStateKey(location, key);
    try {
      var value = window.sessionStorage.getItem(stateKey);
      return value ? JSON.parse(value) : 0;
    } catch (e) {
      if (false) {}
      if (window && window[GATSBY_ROUTER_SCROLL_STATE] && window[GATSBY_ROUTER_SCROLL_STATE][stateKey]) {
        return window[GATSBY_ROUTER_SCROLL_STATE][stateKey];
      }
      return 0;
    }
  };
  _proto.save = function save(location, key, value) {
    var stateKey = this.getStateKey(location, key);
    var storedValue = JSON.stringify(value);
    try {
      window.sessionStorage.setItem(stateKey, storedValue);
    } catch (e) {
      if (window && window[GATSBY_ROUTER_SCROLL_STATE]) {
        window[GATSBY_ROUTER_SCROLL_STATE][stateKey] = JSON.parse(storedValue);
      } else {
        window[GATSBY_ROUTER_SCROLL_STATE] = {};
        window[GATSBY_ROUTER_SCROLL_STATE][stateKey] = JSON.parse(storedValue);
      }
      if (false) {}
    }
  };
  _proto.getStateKey = function getStateKey(location, key) {
    var stateKeyBase = "" + STATE_KEY_PREFIX + location.pathname;
    return key === null || typeof key === "undefined" ? stateKeyBase : stateKeyBase + "|" + key;
  };
  return SessionStorage;
}();
exports.SessionStorage = SessionStorage;

/***/ }),

/***/ 4855:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useScrollRestoration = useScrollRestoration;
var _scrollHandler = __webpack_require__(1432);
var _react = __webpack_require__(7294);
var _reachRouter = __webpack_require__(7896);
function useScrollRestoration(identifier) {
  var location = (0, _reachRouter.useLocation)();
  var state = (0, _react.useContext)(_scrollHandler.ScrollContext);
  var ref = (0, _react.useRef)(null);
  (0, _react.useLayoutEffect)(function () {
    if (ref.current) {
      var position = state.read(location, identifier);
      ref.current.scrollTo(0, position || 0);
    }
  }, [location.key]);
  return {
    ref: ref,
    onScroll: function onScroll() {
      if (ref.current) {
        state.save(location, identifier, ref.current.scrollTop);
      }
    }
  };
}

/***/ }),

/***/ 4094:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.onInitialClientRender = void 0;
var _gatsbyScript = __webpack_require__(3521);
var _injectPartytownSnippet = __webpack_require__(2731);
// Makes sure off-main-thread scripts are loaded in `gatsby develop`
const onInitialClientRender = () => {
  if (true) {
    return;
  }
  (0, _injectPartytownSnippet.injectPartytownSnippet)(_gatsbyScript.collectedScriptsByPage.get(window.location.pathname));

  // Clear scripts after we've used them to avoid leaky behavior
  _gatsbyScript.collectedScriptsByPage.delete(window.location.pathname);
};

// Client-side navigation (CSR, e.g. Gatsby Link navigations) are broken upstream in Partytown.
// We need an official API from Partytown for handling re-configuration and on-demand script loading.
// Until then, `off-main-thread` scripts load only on server-side navigation (SSR).
// See https://github.com/BuilderIO/partytown/issues/74 for more details.
exports.onInitialClientRender = onInitialClientRender;
//# sourceMappingURL=gatsby-browser.js.map

/***/ }),

/***/ 7730:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getForwards = getForwards;
function getForwards(collectedScripts) {
  return collectedScripts === null || collectedScripts === void 0 ? void 0 : collectedScripts.flatMap(script => (script === null || script === void 0 ? void 0 : script.forward) || []);
}
//# sourceMappingURL=get-forwards.js.map

/***/ }),

/***/ 2731:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.injectPartytownSnippet = injectPartytownSnippet;
var _integration = __webpack_require__(2911);
var _getForwards = __webpack_require__(7730);
// Adapted from https://github.com/BuilderIO/partytown/blob/main/src/react/snippet.tsx to only include CSR logic
function injectPartytownSnippet(collectedScripts) {
  if (!collectedScripts.length) {
    return;
  }
  const existingSnippet = document.querySelector(`script[data-partytown]`);
  const existingSandbox = document.querySelector(`iframe[src*="~partytown/partytown-sandbox-sw"]`);
  if (existingSnippet) {
    existingSnippet.remove();
  }
  if (existingSandbox) {
    existingSandbox.remove();
  }
  const forwards = (0, _getForwards.getForwards)(collectedScripts);
  const snippet = document.createElement(`script`);
  snippet.dataset.partytown = ``;
  snippet.innerHTML = (0, _integration.partytownSnippet)({
    forward: forwards
  });
  document.head.appendChild(snippet);
}
//# sourceMappingURL=inject-partytown-snippet.js.map

/***/ }),

/***/ 5418:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

exports.components={"component---src-pages-404-jsx":()=>Promise.all(/* import() | component---src-pages-404-jsx */[__webpack_require__.e(532), __webpack_require__.e(256)]).then(__webpack_require__.bind(__webpack_require__, 7291)),"component---src-pages-about-jsx":()=>Promise.all(/* import() | component---src-pages-about-jsx */[__webpack_require__.e(532), __webpack_require__.e(354)]).then(__webpack_require__.bind(__webpack_require__, 2700)),"component---src-pages-index-jsx":()=>Promise.all(/* import() | component---src-pages-index-jsx */[__webpack_require__.e(532), __webpack_require__.e(230)]).then(__webpack_require__.bind(__webpack_require__, 6819)),"component---src-pages-search-jsx":()=>Promise.all(/* import() | component---src-pages-search-jsx */[__webpack_require__.e(532), __webpack_require__.e(995)]).then(__webpack_require__.bind(__webpack_require__, 6878)),"component---src-templates-post-jsx":()=>Promise.all(/* import() | component---src-templates-post-jsx */[__webpack_require__.e(532), __webpack_require__.e(400)]).then(__webpack_require__.bind(__webpack_require__, 4373)),"component---src-templates-post-jsx-content-file-path-home-molly-documents-repos-mstewartgallus-github-io-blog-poem-2022-10-19-the-night-ghost-md":()=>Promise.all(/* import() | component---src-templates-post-jsx-content-file-path-home-molly-documents-repos-mstewartgallus-github-io-blog-poem-2022-10-19-the-night-ghost-md */[__webpack_require__.e(532), __webpack_require__.e(367)]).then(__webpack_require__.bind(__webpack_require__, 4095)),"component---src-templates-post-jsx-content-file-path-home-molly-documents-repos-mstewartgallus-github-io-blog-poem-2022-10-22-i-know-a-secret-md":()=>Promise.all(/* import() | component---src-templates-post-jsx-content-file-path-home-molly-documents-repos-mstewartgallus-github-io-blog-poem-2022-10-22-i-know-a-secret-md */[__webpack_require__.e(532), __webpack_require__.e(531)]).then(__webpack_require__.bind(__webpack_require__, 9295)),"component---src-templates-post-jsx-content-file-path-home-molly-documents-repos-mstewartgallus-github-io-blog-poem-2022-11-11-grounding-md":()=>Promise.all(/* import() | component---src-templates-post-jsx-content-file-path-home-molly-documents-repos-mstewartgallus-github-io-blog-poem-2022-11-11-grounding-md */[__webpack_require__.e(532), __webpack_require__.e(982)]).then(__webpack_require__.bind(__webpack_require__, 3493)),"component---src-templates-post-jsx-content-file-path-home-molly-documents-repos-mstewartgallus-github-io-blog-poem-2022-12-05-tbh-md":()=>Promise.all(/* import() | component---src-templates-post-jsx-content-file-path-home-molly-documents-repos-mstewartgallus-github-io-blog-poem-2022-12-05-tbh-md */[__webpack_require__.e(532), __webpack_require__.e(126)]).then(__webpack_require__.bind(__webpack_require__, 3788)),"component---src-templates-post-jsx-content-file-path-home-molly-documents-repos-mstewartgallus-github-io-blog-poem-2022-12-06-little-thing-md":()=>Promise.all(/* import() | component---src-templates-post-jsx-content-file-path-home-molly-documents-repos-mstewartgallus-github-io-blog-poem-2022-12-06-little-thing-md */[__webpack_require__.e(532), __webpack_require__.e(121)]).then(__webpack_require__.bind(__webpack_require__, 9932)),"component---src-templates-post-jsx-content-file-path-home-molly-documents-repos-mstewartgallus-github-io-blog-prose-2022-10-19-emotion-exercise-md":()=>Promise.all(/* import() | component---src-templates-post-jsx-content-file-path-home-molly-documents-repos-mstewartgallus-github-io-blog-prose-2022-10-19-emotion-exercise-md */[__webpack_require__.e(532), __webpack_require__.e(753)]).then(__webpack_require__.bind(__webpack_require__, 690)),"component---src-templates-post-jsx-content-file-path-home-molly-documents-repos-mstewartgallus-github-io-blog-prose-2022-10-20-good-boy-md":()=>Promise.all(/* import() | component---src-templates-post-jsx-content-file-path-home-molly-documents-repos-mstewartgallus-github-io-blog-prose-2022-10-20-good-boy-md */[__webpack_require__.e(532), __webpack_require__.e(61)]).then(__webpack_require__.bind(__webpack_require__, 709)),"component---src-templates-post-jsx-content-file-path-home-molly-documents-repos-mstewartgallus-github-io-blog-prose-2022-10-21-coffee-md":()=>Promise.all(/* import() | component---src-templates-post-jsx-content-file-path-home-molly-documents-repos-mstewartgallus-github-io-blog-prose-2022-10-21-coffee-md */[__webpack_require__.e(532), __webpack_require__.e(261)]).then(__webpack_require__.bind(__webpack_require__, 6524)),"component---src-templates-post-jsx-content-file-path-home-molly-documents-repos-mstewartgallus-github-io-blog-prose-2022-10-21-night-walk-md":()=>Promise.all(/* import() | component---src-templates-post-jsx-content-file-path-home-molly-documents-repos-mstewartgallus-github-io-blog-prose-2022-10-21-night-walk-md */[__webpack_require__.e(532), __webpack_require__.e(843)]).then(__webpack_require__.bind(__webpack_require__, 4355)),"component---src-templates-post-jsx-content-file-path-home-molly-documents-repos-mstewartgallus-github-io-blog-prose-2022-10-22-gacc-gock-md":()=>Promise.all(/* import() | component---src-templates-post-jsx-content-file-path-home-molly-documents-repos-mstewartgallus-github-io-blog-prose-2022-10-22-gacc-gock-md */[__webpack_require__.e(532), __webpack_require__.e(889)]).then(__webpack_require__.bind(__webpack_require__, 1852)),"component---src-templates-post-jsx-content-file-path-home-molly-documents-repos-mstewartgallus-github-io-blog-prose-2022-10-28-if-she-breathes-shes-a-thot-md":()=>Promise.all(/* import() | component---src-templates-post-jsx-content-file-path-home-molly-documents-repos-mstewartgallus-github-io-blog-prose-2022-10-28-if-she-breathes-shes-a-thot-md */[__webpack_require__.e(532), __webpack_require__.e(107)]).then(__webpack_require__.bind(__webpack_require__, 9855)),"component---src-templates-post-jsx-content-file-path-home-molly-documents-repos-mstewartgallus-github-io-blog-prose-2022-10-31-the-best-coffee-md":()=>Promise.all(/* import() | component---src-templates-post-jsx-content-file-path-home-molly-documents-repos-mstewartgallus-github-io-blog-prose-2022-10-31-the-best-coffee-md */[__webpack_require__.e(532), __webpack_require__.e(483)]).then(__webpack_require__.bind(__webpack_require__, 3463)),"component---src-templates-post-jsx-content-file-path-home-molly-documents-repos-mstewartgallus-github-io-blog-prose-2022-11-15-my-owners-lover-md":()=>Promise.all(/* import() | component---src-templates-post-jsx-content-file-path-home-molly-documents-repos-mstewartgallus-github-io-blog-prose-2022-11-15-my-owners-lover-md */[__webpack_require__.e(532), __webpack_require__.e(315)]).then(__webpack_require__.bind(__webpack_require__, 1334)),"component---src-templates-post-jsx-content-file-path-home-molly-documents-repos-mstewartgallus-github-io-blog-prose-2022-11-26-dentist-md":()=>Promise.all(/* import() | component---src-templates-post-jsx-content-file-path-home-molly-documents-repos-mstewartgallus-github-io-blog-prose-2022-11-26-dentist-md */[__webpack_require__.e(532), __webpack_require__.e(797)]).then(__webpack_require__.bind(__webpack_require__, 1156)),"component---src-templates-post-jsx-content-file-path-home-molly-documents-repos-mstewartgallus-github-io-blog-prose-2022-12-17-nevertheless-md":()=>Promise.all(/* import() | component---src-templates-post-jsx-content-file-path-home-molly-documents-repos-mstewartgallus-github-io-blog-prose-2022-12-17-nevertheless-md */[__webpack_require__.e(532), __webpack_require__.e(711)]).then(__webpack_require__.bind(__webpack_require__, 8439)),"component---src-templates-post-jsx-content-file-path-home-molly-documents-repos-mstewartgallus-github-io-blog-prose-2022-12-27-cleanup-md":()=>Promise.all(/* import() | component---src-templates-post-jsx-content-file-path-home-molly-documents-repos-mstewartgallus-github-io-blog-prose-2022-12-27-cleanup-md */[__webpack_require__.e(532), __webpack_require__.e(511)]).then(__webpack_require__.bind(__webpack_require__, 8400)),"component---src-templates-post-jsx-content-file-path-home-molly-documents-repos-mstewartgallus-github-io-blog-web-2022-11-25-marking-up-poetry-md":()=>Promise.all(/* import() | component---src-templates-post-jsx-content-file-path-home-molly-documents-repos-mstewartgallus-github-io-blog-web-2022-11-25-marking-up-poetry-md */[__webpack_require__.e(532), __webpack_require__.e(665)]).then(__webpack_require__.bind(__webpack_require__, 3875))};

/***/ }),

/***/ 4741:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports=[{plugin:__webpack_require__(8561),options:{"plugins":[]}},{plugin:__webpack_require__(4094),options:{"plugins":[]}}];

/***/ }),

/***/ 3092:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

const plugins=__webpack_require__(4741);const{getResourceURLsForPathname,loadPage,loadPageSync}=(__webpack_require__(1975)/* .publicLoader */ .jN);exports.h=function(api,args,defaultReturn,argTransform){if(args===void 0){args={};}// Hooks for gatsby-cypress's API handler
if(false){}let results=plugins.map(plugin=>{if(!plugin.plugin[api]){return undefined;}args.getResourceURLsForPathname=getResourceURLsForPathname;args.loadPage=loadPage;args.loadPageSync=loadPageSync;const result=plugin.plugin[api](args,plugin.options);if(result&&argTransform){args=argTransform({args,result,plugin});}return result;});// Filter out undefined results.
results=results.filter(result=>typeof result!=="undefined");if(results.length>0){return results;}else if(defaultReturn){return[defaultReturn];}else{return[];}};exports.I=(api,args,defaultReturn)=>plugins.reduce((previous,next)=>next.plugin[api]?previous.then(()=>next.plugin[api](args,next.options)):previous,Promise.resolve());

/***/ }),

/***/ 4004:
/***/ (function(__unused_webpack_module, exports) {

var __webpack_unused_export__;
__webpack_unused_export__=()=>"";

/***/ }),

/***/ 8299:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ _cache_emitter; }
});

;// CONCATENATED MODULE: ./node_modules/mitt/dist/mitt.es.js
//      
// An event handler can take an optional event argument
// and should not return a value
                                          
                                                               

// An array of all currently registered event handlers for a type
                                            
                                                            
// A map of event types and their corresponding event handlers.
                        
                                 
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberOf mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).slice().map(function (handler) { handler(evt); });
			(all['*'] || []).slice().map(function (handler) { handler(type, evt); });
		}
	};
}

/* harmony default export */ var mitt_es = (mitt);
//# sourceMappingURL=mitt.es.js.map

;// CONCATENATED MODULE: ./.cache/emitter.js
const emitter=mitt_es();/* harmony default export */ var _cache_emitter = (emitter);

/***/ }),

/***/ 7802:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "UD": function() { return /* binding */ findMatchPath; },
  "Cj": function() { return /* binding */ findPath; },
  "GA": function() { return /* binding */ grabMatchParams; },
  "DS": function() { return /* binding */ setMatchPaths; }
});

// UNUSED EXPORTS: cleanPath

// EXTERNAL MODULE: ./node_modules/@gatsbyjs/reach-router/dist/index.modern.mjs
var index_modern = __webpack_require__(7896);
// EXTERNAL MODULE: ./.cache/strip-prefix.js
var strip_prefix = __webpack_require__(1505);
;// CONCATENATED MODULE: ./.cache/normalize-page-path.js
/* harmony default export */ var normalize_page_path = (pathAndSearch=>{if(pathAndSearch===undefined){return pathAndSearch;}let[path,search=""]=pathAndSearch.split("?");if(search){search="?"+search;}if(path==="/"){return"/"+search;}if(path.charAt(path.length-1)==="/"){return path.slice(0,-1)+search;}return path+search;});
// EXTERNAL MODULE: ./.cache/redirect-utils.js + 1 modules
var redirect_utils = __webpack_require__(6073);
;// CONCATENATED MODULE: ./.cache/find-path.js
const pathCache=new Map();let matchPaths=[];const trimPathname=rawPathname=>{let newRawPathname=rawPathname;const queryIndex=rawPathname.indexOf("?");if(queryIndex!==-1){const[path,qs]=rawPathname.split("?");newRawPathname=path+"?"+encodeURIComponent(qs);}const pathname=decodeURIComponent(newRawPathname);// Remove the pathPrefix from the pathname.
const trimmedPathname=(0,strip_prefix/* default */.Z)(pathname,decodeURIComponent(""))// Remove any hashfragment
.split("#")[0];return trimmedPathname;};function absolutify(path){// If it's already absolute, return as-is
if(path.startsWith("/")||path.startsWith("https://")||path.startsWith("http://")){return path;}// Calculate path relative to current location, adding a trailing slash to
// match behavior of @reach/router
return new URL(path,window.location.href+(window.location.href.endsWith("/")?"":"/")).pathname;}/**
 * Set list of matchPaths
 *
 * @param {Array<{path: string, matchPath: string}>} value collection of matchPaths
 */const setMatchPaths=value=>{matchPaths=value;};/**
 * Return a matchpath url
 * if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
 * `/foo?bar=far` => `/page1`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string|null}
 */const findMatchPath=rawPathname=>{const trimmedPathname=cleanPath(rawPathname);const pickPaths=matchPaths.map(_ref=>{let{path,matchPath}=_ref;return{path:matchPath,originalPath:path};});const path=(0,index_modern.pick)(pickPaths,trimmedPathname);if(path){return normalize_page_path(path.route.originalPath);}return null;};/**
 * Return a matchpath params from reach/router rules
 * if `match-paths.json` contains `{ ":bar/*foo" }`, and the path is /baz/zaz/zoo
 * then it returns
 *  { bar: baz, foo: zaz/zoo }
 *
 * @param {string} rawPathname A raw pathname
 * @return {object}
 */const grabMatchParams=rawPathname=>{const trimmedPathname=cleanPath(rawPathname);const pickPaths=matchPaths.map(_ref2=>{let{path,matchPath}=_ref2;return{path:matchPath,originalPath:path};});const path=(0,index_modern.pick)(pickPaths,trimmedPathname);if(path){return path.params;}return{};};// Given a raw URL path, returns the cleaned version of it (trim off
// `#` and query params), or if it matches an entry in
// `match-paths.json`, its matched path is returned
//
// E.g. `/foo?bar=far` => `/foo`
//
// Or if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
// `/foo?bar=far` => `/page1`
const findPath=rawPathname=>{const trimmedPathname=trimPathname(absolutify(rawPathname));if(pathCache.has(trimmedPathname)){return pathCache.get(trimmedPathname);}const redirect=(0,redirect_utils/* maybeGetBrowserRedirect */.J)(rawPathname);if(redirect){return findPath(redirect.toPath);}let foundPath=findMatchPath(trimmedPathname);if(!foundPath){foundPath=cleanPath(rawPathname);}pathCache.set(trimmedPathname,foundPath);return foundPath;};/**
 * Clean a url and converts /index.html => /
 * E.g. `/foo?bar=far` => `/foo`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string}
 */const cleanPath=rawPathname=>{const trimmedPathname=trimPathname(absolutify(rawPathname));let foundPath=trimmedPathname;if(foundPath==="/index.html"){foundPath="/";}foundPath=normalize_page_path(foundPath);return foundPath;};

/***/ }),

/***/ 1883:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "rU": function() { return /* reexport */ index_modern/* Link */.rU; },
  "Xf": function() { return /* reexport */ dist_index_modern.Script; },
  "B9": function() { return /* reexport */ static_query/* StaticQueryContext */.B9; },
  "c4": function() { return /* reexport */ index_modern/* navigate */.c4; },
  "K2": function() { return /* reexport */ static_query/* useStaticQuery */.K2; }
});

// UNUSED EXPORTS: PageRenderer, ScriptStrategy, Slice, StaticQuery, collectedScriptsByPage, graphql, parsePath, prefetchPathname, scriptCache, scriptCallbackCache, useScrollRestoration, withAssetPrefix, withPrefix

// EXTERNAL MODULE: ./.cache/loader.js + 1 modules
var loader = __webpack_require__(1975);
// EXTERNAL MODULE: ./.cache/public-page-renderer.js
var public_page_renderer = __webpack_require__(2743);
// EXTERNAL MODULE: ./node_modules/gatsby-react-router-scroll/index.js
var gatsby_react_router_scroll = __webpack_require__(9679);
// EXTERNAL MODULE: ./node_modules/gatsby-link/dist/index.modern.mjs
var index_modern = __webpack_require__(1562);
// EXTERNAL MODULE: ./.cache/static-query.js + 1 modules
var static_query = __webpack_require__(1757);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(4578);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
var setPrototypeOf = __webpack_require__(9611);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/construct.js


function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) (0,setPrototypeOf/* default */.Z)(instance, Class.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js




function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return (0,setPrototypeOf/* default */.Z)(Wrapper, Class);
  };
  return _wrapNativeSuper(Class);
}
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./.cache/create-content-digest-browser-shim.js
var create_content_digest_browser_shim = __webpack_require__(4004);
// EXTERNAL MODULE: ./.cache/slice/context.js
var context = __webpack_require__(8995);
;// CONCATENATED MODULE: ./.cache/slice/server-slice-renderer.js
const server_slice_renderer_ServerSliceRenderer=_ref=>{let{sliceId,children}=_ref;const contents=[/*#__PURE__*/React.createElement("slice-start",{id:sliceId+"-1"}),/*#__PURE__*/React.createElement("slice-end",{id:sliceId+"-1"})];if(children){// if children exist, we split the slice into a before and after piece
// see renderSlices in render-html
contents.push(children);contents.push(/*#__PURE__*/React.createElement("slice-start",{id:sliceId+"-2"}),/*#__PURE__*/React.createElement("slice-end",{id:sliceId+"-2"}));}return contents;};
;// CONCATENATED MODULE: ./.cache/slice/server-slice.js
const getSliceId=(sliceName,sliceProps)=>{if(!Object.keys(sliceProps).length){return sliceName;}const propsString=createContentDigest(sliceProps);return sliceName+"-"+propsString;};const server_slice_ServerSlice=_ref=>{let{sliceName,allowEmpty,children,...sliceProps}=_ref;const slicesMap=useContext(SlicesMapContext);const slicesProps=useContext(SlicesPropsContext);const concreteSliceName=slicesMap[sliceName];if(!concreteSliceName){if(allowEmpty){return null;}else{throw new Error("Slice \""+concreteSliceName+"\" for \""+sliceName+"\" slot not found");}}const sliceId=getSliceId(concreteSliceName,sliceProps);// set props on context object for static-entry to return
let sliceUsage=slicesProps[sliceId];if(!sliceUsage){slicesProps[sliceId]=sliceUsage={props:sliceProps,sliceName:concreteSliceName,hasChildren:!!children};}else{if(children){sliceUsage.hasChildren=true;}}return/*#__PURE__*/React.createElement(ServerSliceRenderer,{sliceId:sliceId},children);};
;// CONCATENATED MODULE: ./.cache/slice/inline-slice.js
const inline_slice_InlineSlice=_ref=>{let{sliceName,allowEmpty,children,...sliceProps}=_ref;const slicesMap=useContext(SlicesMapContext);const slicesResultsMap=useContext(SlicesResultsContext);const concreteSliceName=slicesMap[sliceName];const slice=slicesResultsMap.get(concreteSliceName);if(!slice){if(allowEmpty){return null;}else{throw new Error("Slice \""+concreteSliceName+"\" for \""+sliceName+"\" slot not found");}}return/*#__PURE__*/React.createElement(slice.component,Object.assign({sliceContext:slice.sliceContext,data:slice.data},sliceProps),children);};
;// CONCATENATED MODULE: ./.cache/slice.js
"use client";function Slice(props){if(true){// we use sliceName internally, so remap alias to sliceName
const internalProps={...props,sliceName:props.alias};delete internalProps.alias;delete internalProps.__renderedByLocation;const slicesContext=useContext(SlicesContext);// validate props
const propErrors=validateSliceProps(props);if(Object.keys(propErrors).length){throw new SlicePropsError(slicesContext.renderEnvironment==="browser",internalProps.sliceName,propErrors,props.__renderedByLocation);}if(slicesContext.renderEnvironment==="server"){return/*#__PURE__*/React.createElement(ServerSlice,internalProps);}else if(slicesContext.renderEnvironment==="browser"){// in the browser, we'll just render the component as is
return/*#__PURE__*/React.createElement(InlineSlice,internalProps);}else if(slicesContext.renderEnvironment==="engines"){// if we're in SSR, we'll just render the component as is
return/*#__PURE__*/React.createElement(InlineSlice,internalProps);}else if(slicesContext.renderEnvironment==="slices"){// we are not yet supporting nested slices
let additionalContextMessage="";// just in case generating additional contextual information fails, we still want the base message to show
// and not show another cryptic error message
try{additionalContextMessage="\n\nSlice component \""+slicesContext.sliceRoot.name+"\" ("+slicesContext.sliceRoot.componentPath+") tried to render <Slice alias=\""+props.alias+"\"/>";}catch{// don't need to handle it, we will just skip the additional context message if we fail to generate it
}throw new Error("Nested slices are not supported."+additionalContextMessage+"\n\nSee https://gatsbyjs.com/docs/reference/built-in-components/gatsby-slice#nested-slices");}else{throw new Error("Slice context \""+slicesContext.renderEnvironment+"\" is not supported.");}}else{}}let SlicePropsError=/*#__PURE__*/function(_Error){(0,inheritsLoose/* default */.Z)(SlicePropsError,_Error);function SlicePropsError(inBrowser,sliceName,propErrors,renderedByLocation){var _this;const errors=Object.entries(propErrors).map(_ref=>{let[key,value]=_ref;return"not serializable \""+value+"\" type passed to \""+key+"\" prop";}).join(", ");const name="SlicePropsError";let stack="";let message="";if(inBrowser){// They're just (kinda) kidding, I promise... You can still work here <3
//   https://www.gatsbyjs.com/careers/
const fullStack=react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactDebugCurrentFrame.getCurrentStack();// remove the first line of the stack trace
const stackLines=fullStack.trim().split("\n").slice(1);stackLines[0]=stackLines[0].trim();stack="\n"+stackLines.join("\n");message="Slice \""+sliceName+"\" was passed props that are not serializable ("+errors+").";}else{// we can't really grab any extra info outside of the browser, so just print what we can
message=name+": Slice \""+sliceName+"\" was passed props that are not serializable ("+errors+").";const stackLines=new Error().stack.trim().split("\n").slice(2);stack=message+"\n"+stackLines.join("\n");}_this=_Error.call(this,message)||this;_this.name=name;if(stack){_this.stack=stack;}else{Error.captureStackTrace(_assertThisInitialized(_this),SlicePropsError);}if(renderedByLocation){_this.forcedLocation={...renderedByLocation,functionName:"Slice"};}return _this;}return SlicePropsError;}(/*#__PURE__*/_wrapNativeSuper(Error));const validateSliceProps=function(props,errors,seenObjects,path){if(errors===void 0){errors={};}if(seenObjects===void 0){seenObjects=[];}if(path===void 0){path=null;}// recursively validate all props
for(const[name,value]of Object.entries(props)){if(value===undefined||value===null||!path&&name==="children"){continue;}const propPath=path?path+"."+name:name;if(typeof value==="function"){errors[propPath]=typeof value;}else if(typeof value==="object"&&seenObjects.indexOf(value)<=0){seenObjects.push(value);validateSliceProps(value,errors,seenObjects,propPath);}}return errors;};
// EXTERNAL MODULE: ./node_modules/gatsby-script/dist/index.modern.mjs
var dist_index_modern = __webpack_require__(3521);
;// CONCATENATED MODULE: ./.cache/gatsby-browser-entry.js
const prefetchPathname=loader/* default.enqueue */.ZP.enqueue;function graphql(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls "+"are supposed to only be evaluated at compile time, and then compiled away. "+"Unfortunately, something went wrong and the query was left in the compiled code.\n\n"+"Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.");}

/***/ }),

/***/ 1975:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "uQ": function() { return /* binding */ PageResourceStatus; },
  "kL": function() { return /* binding */ ProdLoader; },
  "ZP": function() { return /* binding */ loader; },
  "Nt": function() { return /* binding */ getSliceResults; },
  "hs": function() { return /* binding */ getStaticQueryResults; },
  "jN": function() { return /* binding */ publicLoader; },
  "N1": function() { return /* binding */ setLoader; }
});

// UNUSED EXPORTS: BaseLoader

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(4578);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 5 modules
var toConsumableArray = __webpack_require__(5785);
// EXTERNAL MODULE: ./node_modules/react-server-dom-webpack/index.js
var react_server_dom_webpack = __webpack_require__(904);
;// CONCATENATED MODULE: ./.cache/prefetch.js
const support=function(feature){if(typeof document==="undefined"){return false;}const fakeLink=document.createElement("link");try{if(fakeLink.relList&&typeof fakeLink.relList.supports==="function"){return fakeLink.relList.supports(feature);}}catch(err){return false;}return false;};const linkPrefetchStrategy=function(url,options){return new Promise((resolve,reject)=>{if(typeof document==="undefined"){reject();return;}const link=document.createElement("link");link.setAttribute("rel","prefetch");link.setAttribute("href",url);Object.keys(options).forEach(key=>{link.setAttribute(key,options[key]);});link.onload=resolve;link.onerror=reject;const parentElement=document.getElementsByTagName("head")[0]||document.getElementsByName("script")[0].parentNode;parentElement.appendChild(link);});};const xhrPrefetchStrategy=function(url){return new Promise((resolve,reject)=>{const req=new XMLHttpRequest();req.open("GET",url,true);req.onload=()=>{if(req.status===200){resolve();}else{reject();}};req.send(null);});};const supportedPrefetchStrategy=support("prefetch")?linkPrefetchStrategy:xhrPrefetchStrategy;const preFetched={};const prefetch=function(url,options){return new Promise(resolve=>{if(preFetched[url]){resolve();return;}supportedPrefetchStrategy(url,options).then(()=>{resolve();preFetched[url]=true;}).catch(()=>{});// 404s are logged to the console anyway
});};/* harmony default export */ var _cache_prefetch = (prefetch);
// EXTERNAL MODULE: ./.cache/emitter.js + 1 modules
var emitter = __webpack_require__(8299);
// EXTERNAL MODULE: ./.cache/find-path.js + 1 modules
var find_path = __webpack_require__(7802);
;// CONCATENATED MODULE: ./.cache/loader.js
/**
 * Available resource loading statuses
 */const PageResourceStatus={/**
   * At least one of critical resources failed to load
   */Error:"error",/**
   * Resources loaded successfully
   */Success:"success"};const preferDefault=m=>m&&m.default||m;const stripSurroundingSlashes=s=>{s=s[0]==="/"?s.slice(1):s;s=s.endsWith("/")?s.slice(0,-1):s;return s;};const createPageDataUrl=rawPath=>{const[path,maybeSearch]=rawPath.split("?");const fixedPath=path==="/"?"index":stripSurroundingSlashes(path);return ""+"/page-data/"+fixedPath+"/page-data.json"+(maybeSearch?"?"+maybeSearch:"");};function doFetch(url,method){if(method===void 0){method="GET";}return new Promise(resolve=>{const req=new XMLHttpRequest();req.open(method,url,true);req.onreadystatechange=()=>{if(req.readyState==4){resolve(req);}};req.send(null);});}const doesConnectionSupportPrefetch=()=>{if("connection"in navigator&&typeof navigator.connection!=="undefined"){if((navigator.connection.effectiveType||"").includes("2g")){return false;}if(navigator.connection.saveData){return false;}}return true;};// Regex that matches common search crawlers
const BOT_REGEX=/bot|crawler|spider|crawling/i;const toPageResources=function(pageData,component,head){var _pageData$slicesMap;if(component===void 0){component=null;}const page={componentChunkName:pageData.componentChunkName,path:pageData.path,webpackCompilationHash:pageData.webpackCompilationHash,matchPath:pageData.matchPath,staticQueryHashes:pageData.staticQueryHashes,getServerDataError:pageData.getServerDataError,slicesMap:(_pageData$slicesMap=pageData.slicesMap)!==null&&_pageData$slicesMap!==void 0?_pageData$slicesMap:{}};return{component,head,json:pageData.result,page};};function waitForResponse(response){return new Promise(resolve=>{try{const result=response.readRoot();resolve(result);}catch(err){if(Object.hasOwnProperty.call(err,"_response")&&Object.hasOwnProperty.call(err,"_status")){setTimeout(()=>{waitForResponse(response).then(resolve);},200);}else{throw err;}}});}let BaseLoader=/*#__PURE__*/function(){function BaseLoader(loadComponent,matchPaths){this.inFlightNetworkRequests=new Map();// Map of pagePath -> Page. Where Page is an object with: {
//   status: PageResourceStatus.Success || PageResourceStatus.Error,
//   payload: PageResources, // undefined if PageResourceStatus.Error
// }
// PageResources is {
//   component,
//   json: pageData.result,
//   page: {
//     componentChunkName,
//     path,
//     webpackCompilationHash,
//     staticQueryHashes
//   },
//   staticQueryResults
// }
this.pageDb=new Map();this.inFlightDb=new Map();this.staticQueryDb={};this.pageDataDb=new Map();this.partialHydrationDb=new Map();this.slicesDataDb=new Map();this.sliceInflightDb=new Map();this.slicesDb=new Map();this.isPrefetchQueueRunning=false;this.prefetchQueued=[];this.prefetchTriggered=new Set();this.prefetchCompleted=new Set();this.loadComponent=loadComponent;(0,find_path/* setMatchPaths */.DS)(matchPaths);}var _proto=BaseLoader.prototype;_proto.memoizedGet=function memoizedGet(url){let inFlightPromise=this.inFlightNetworkRequests.get(url);if(!inFlightPromise){inFlightPromise=doFetch(url,"GET");this.inFlightNetworkRequests.set(url,inFlightPromise);}// Prefer duplication with then + catch over .finally to prevent problems in ie11 + firefox
return inFlightPromise.then(response=>{this.inFlightNetworkRequests.delete(url);return response;}).catch(err=>{this.inFlightNetworkRequests.delete(url);throw err;});};_proto.setApiRunner=function setApiRunner(apiRunner){this.apiRunner=apiRunner;this.prefetchDisabled=apiRunner("disableCorePrefetching").some(a=>a);};_proto.fetchPageDataJson=function fetchPageDataJson(loadObj){const{pagePath,retries=0}=loadObj;const url=createPageDataUrl(pagePath);return this.memoizedGet(url).then(req=>{const{status,responseText}=req;// Handle 200
if(status===200){try{const jsonPayload=JSON.parse(responseText);if(jsonPayload.path===undefined){throw new Error("not a valid pageData response");}const maybeSearch=pagePath.split("?")[1];if(maybeSearch&&!jsonPayload.path.includes(maybeSearch)){jsonPayload.path+="?"+maybeSearch;}return Object.assign(loadObj,{status:PageResourceStatus.Success,payload:jsonPayload});}catch(err){// continue regardless of error
}}// Handle 404
if(status===404||status===200){// If the request was for a 404/500 page and it doesn't exist, we're done
if(pagePath==="/404.html"||pagePath==="/500.html"){return Object.assign(loadObj,{status:PageResourceStatus.Error});}// Need some code here to cache the 404 request. In case
// multiple loadPageDataJsons result in 404s
return this.fetchPageDataJson(Object.assign(loadObj,{pagePath:"/404.html",notFound:true}));}// handle 500 response (Unrecoverable)
if(status===500){return this.fetchPageDataJson(Object.assign(loadObj,{pagePath:"/500.html",internalServerError:true}));}// Handle everything else, including status === 0, and 503s. Should retry
if(retries<3){return this.fetchPageDataJson(Object.assign(loadObj,{retries:retries+1}));}// Retried 3 times already, result is an error.
return Object.assign(loadObj,{status:PageResourceStatus.Error});});};_proto.fetchPartialHydrationJson=function fetchPartialHydrationJson(loadObj){const{pagePath,retries=0}=loadObj;const url=createPageDataUrl(pagePath).replace(".json","-rsc.json");return this.memoizedGet(url).then(req=>{const{status,responseText}=req;// Handle 200
if(status===200){try{return Object.assign(loadObj,{status:PageResourceStatus.Success,payload:responseText});}catch(err){// continue regardless of error
}}// Handle 404
if(status===404||status===200){// If the request was for a 404/500 page and it doesn't exist, we're done
if(pagePath==="/404.html"||pagePath==="/500.html"){return Object.assign(loadObj,{status:PageResourceStatus.Error});}// Need some code here to cache the 404 request. In case
// multiple loadPageDataJsons result in 404s
return this.fetchPartialHydrationJson(Object.assign(loadObj,{pagePath:"/404.html",notFound:true}));}// handle 500 response (Unrecoverable)
if(status===500){return this.fetchPartialHydrationJson(Object.assign(loadObj,{pagePath:"/500.html",internalServerError:true}));}// Handle everything else, including status === 0, and 503s. Should retry
if(retries<3){return this.fetchPartialHydrationJson(Object.assign(loadObj,{retries:retries+1}));}// Retried 3 times already, result is an error.
return Object.assign(loadObj,{status:PageResourceStatus.Error});});};_proto.loadPageDataJson=function loadPageDataJson(rawPath){const pagePath=(0,find_path/* findPath */.Cj)(rawPath);if(this.pageDataDb.has(pagePath)){const pageData=this.pageDataDb.get(pagePath);if(true){return Promise.resolve(pageData);}}return this.fetchPageDataJson({pagePath}).then(pageData=>{this.pageDataDb.set(pagePath,pageData);return pageData;});};_proto.loadPartialHydrationJson=function loadPartialHydrationJson(rawPath){const pagePath=(0,find_path/* findPath */.Cj)(rawPath);if(this.partialHydrationDb.has(pagePath)){const pageData=this.partialHydrationDb.get(pagePath);if(true){return Promise.resolve(pageData);}}return this.fetchPartialHydrationJson({pagePath}).then(pageData=>{this.partialHydrationDb.set(pagePath,pageData);return pageData;});};_proto.loadSliceDataJson=function loadSliceDataJson(sliceName){if(this.slicesDataDb.has(sliceName)){const jsonPayload=this.slicesDataDb.get(sliceName);return Promise.resolve({sliceName,jsonPayload});}const url=""+"/slice-data/"+sliceName+".json";return doFetch(url,"GET").then(res=>{const jsonPayload=JSON.parse(res.responseText);this.slicesDataDb.set(sliceName,jsonPayload);return{sliceName,jsonPayload};});};_proto.findMatchPath=function findMatchPath(rawPath){return (0,find_path/* findMatchPath */.UD)(rawPath);}// TODO check all uses of this and whether they use undefined for page resources not exist
;_proto.loadPage=function loadPage(rawPath){const pagePath=(0,find_path/* findPath */.Cj)(rawPath);if(this.pageDb.has(pagePath)){const page=this.pageDb.get(pagePath);if(true){if(page.error){return{error:page.error,status:page.status};}return Promise.resolve(page.payload);}}if(this.inFlightDb.has(pagePath)){return this.inFlightDb.get(pagePath);}const loadDataPromises=[this.loadAppData(),this.loadPageDataJson(pagePath)];if(false){}const inFlightPromise=Promise.all(loadDataPromises).then(allData=>{const[appDataResponse,pageDataResponse,rscDataResponse]=allData;if(pageDataResponse.status===PageResourceStatus.Error||(rscDataResponse===null||rscDataResponse===void 0?void 0:rscDataResponse.status)===PageResourceStatus.Error){return{status:PageResourceStatus.Error};}let pageData=pageDataResponse.payload;const{componentChunkName,staticQueryHashes:pageStaticQueryHashes=[],slicesMap={}}=pageData;const finalResult={};const dedupedSliceNames=Array.from(new Set(Object.values(slicesMap)));const loadSlice=slice=>{if(this.slicesDb.has(slice.name)){return this.slicesDb.get(slice.name);}else if(this.sliceInflightDb.has(slice.name)){return this.sliceInflightDb.get(slice.name);}const inFlight=this.loadComponent(slice.componentChunkName).then(component=>{return{component:preferDefault(component),sliceContext:slice.result.sliceContext,data:slice.result.data};});this.sliceInflightDb.set(slice.name,inFlight);inFlight.then(results=>{this.slicesDb.set(slice.name,results);this.sliceInflightDb.delete(slice.name);});return inFlight;};return Promise.all(dedupedSliceNames.map(sliceName=>this.loadSliceDataJson(sliceName))).then(slicesData=>{const slices=[];const dedupedStaticQueryHashes=(0,toConsumableArray/* default */.Z)(pageStaticQueryHashes);for(const{jsonPayload,sliceName}of Object.values(slicesData)){slices.push({name:sliceName,...jsonPayload});for(const staticQueryHash of jsonPayload.staticQueryHashes){if(!dedupedStaticQueryHashes.includes(staticQueryHash)){dedupedStaticQueryHashes.push(staticQueryHash);}}}const loadChunkPromises=[Promise.all(slices.map(loadSlice)),this.loadComponent(componentChunkName,"head")];if(true){loadChunkPromises.push(this.loadComponent(componentChunkName));}// In develop we have separate chunks for template and Head components
// to enable HMR (fast refresh requires single exports).
// In production we have shared chunk with both exports. Double loadComponent here
// will be deduped by webpack runtime resulting in single request and single module
// being loaded for both `component` and `head`.
// get list of components to get
const componentChunkPromises=Promise.all(loadChunkPromises).then(components=>{const[sliceComponents,headComponent,pageComponent]=components;finalResult.createdAt=new Date();for(const sliceComponent of sliceComponents){if(!sliceComponent||sliceComponent instanceof Error){finalResult.status=PageResourceStatus.Error;finalResult.error=sliceComponent;}}if( true&&(!pageComponent||pageComponent instanceof Error)){finalResult.status=PageResourceStatus.Error;finalResult.error=pageComponent;}let pageResources;if(finalResult.status!==PageResourceStatus.Error){finalResult.status=PageResourceStatus.Success;if(pageDataResponse.notFound===true||(rscDataResponse===null||rscDataResponse===void 0?void 0:rscDataResponse.notFound)===true){finalResult.notFound=true;}pageData=Object.assign(pageData,{webpackCompilationHash:appDataResponse?appDataResponse.webpackCompilationHash:""});if(typeof(rscDataResponse===null||rscDataResponse===void 0?void 0:rscDataResponse.payload)==="string"){pageResources=toPageResources(pageData,null,headComponent);pageResources.partialHydration=rscDataResponse.payload;const readableStream=new ReadableStream({start(controller){const te=new TextEncoder();controller.enqueue(te.encode(rscDataResponse.payload));},pull(controller){// close on next read when queue is empty
controller.close();},cancel(){}});return waitForResponse((0,react_server_dom_webpack.createFromReadableStream)(readableStream)).then(result=>{pageResources.partialHydration=result;return pageResources;});}else{pageResources=toPageResources(pageData,pageComponent,headComponent);}}// undefined if final result is an error
return pageResources;});// get list of static queries to get
const staticQueryBatchPromise=Promise.all(dedupedStaticQueryHashes.map(staticQueryHash=>{// Check for cache in case this static query result has already been loaded
if(this.staticQueryDb[staticQueryHash]){const jsonPayload=this.staticQueryDb[staticQueryHash];return{staticQueryHash,jsonPayload};}return this.memoizedGet(""+"/page-data/sq/d/"+staticQueryHash+".json").then(req=>{const jsonPayload=JSON.parse(req.responseText);return{staticQueryHash,jsonPayload};}).catch(()=>{throw new Error("We couldn't load \""+""+"/page-data/sq/d/"+staticQueryHash+".json\"");});})).then(staticQueryResults=>{const staticQueryResultsMap={};staticQueryResults.forEach(_ref=>{let{staticQueryHash,jsonPayload}=_ref;staticQueryResultsMap[staticQueryHash]=jsonPayload;this.staticQueryDb[staticQueryHash]=jsonPayload;});return staticQueryResultsMap;});return Promise.all([componentChunkPromises,staticQueryBatchPromise]).then(_ref2=>{let[pageResources,staticQueryResults]=_ref2;let payload;if(pageResources){payload={...pageResources,staticQueryResults};finalResult.payload=payload;emitter/* default.emit */.Z.emit("onPostLoadPageResources",{page:payload,pageResources:payload});}this.pageDb.set(pagePath,finalResult);if(finalResult.error){return{error:finalResult.error,status:finalResult.status};}return payload;})// when static-query fail to load we throw a better error
.catch(err=>{return{error:err,status:PageResourceStatus.Error};});});});inFlightPromise.then(()=>{this.inFlightDb.delete(pagePath);}).catch(error=>{this.inFlightDb.delete(pagePath);throw error;});this.inFlightDb.set(pagePath,inFlightPromise);return inFlightPromise;}// returns undefined if the page does not exists in cache
;_proto.loadPageSync=function loadPageSync(rawPath,options){if(options===void 0){options={};}const pagePath=(0,find_path/* findPath */.Cj)(rawPath);if(this.pageDb.has(pagePath)){var _options;const pageData=this.pageDb.get(pagePath);if(pageData.payload){return pageData.payload;}if((_options=options)!==null&&_options!==void 0&&_options.withErrorDetails){return{error:pageData.error,status:pageData.status};}}return undefined;};_proto.shouldPrefetch=function shouldPrefetch(pagePath){// Skip prefetching if we know user is on slow or constrained connection
if(!doesConnectionSupportPrefetch()){return false;}// Don't prefetch if this is a crawler bot
if(navigator.userAgent&&BOT_REGEX.test(navigator.userAgent)){return false;}// Check if the page exists.
if(this.pageDb.has(pagePath)){return false;}return true;};_proto.prefetch=function prefetch(pagePath){if(!this.shouldPrefetch(pagePath)){return{then:resolve=>resolve(false),abort:()=>{}};}if(this.prefetchTriggered.has(pagePath)){return{then:resolve=>resolve(true),abort:()=>{}};}const defer={resolve:null,reject:null,promise:null};defer.promise=new Promise((resolve,reject)=>{defer.resolve=resolve;defer.reject=reject;});this.prefetchQueued.push([pagePath,defer]);const abortC=new AbortController();abortC.signal.addEventListener("abort",()=>{const index=this.prefetchQueued.findIndex(_ref3=>{let[p]=_ref3;return p===pagePath;});// remove from the queue
if(index!==-1){this.prefetchQueued.splice(index,1);}});if(!this.isPrefetchQueueRunning){this.isPrefetchQueueRunning=true;setTimeout(()=>{this._processNextPrefetchBatch();},3000);}return{then:(resolve,reject)=>defer.promise.then(resolve,reject),abort:abortC.abort.bind(abortC)};};_proto._processNextPrefetchBatch=function _processNextPrefetchBatch(){const idleCallback=window.requestIdleCallback||(cb=>setTimeout(cb,0));idleCallback(()=>{const toPrefetch=this.prefetchQueued.splice(0,4);const prefetches=Promise.all(toPrefetch.map(_ref4=>{let[pagePath,dPromise]=_ref4;// Tell plugins with custom prefetching logic that they should start
// prefetching this path.
if(!this.prefetchTriggered.has(pagePath)){this.apiRunner("onPrefetchPathname",{pathname:pagePath});this.prefetchTriggered.add(pagePath);}// If a plugin has disabled core prefetching, stop now.
if(this.prefetchDisabled){return dPromise.resolve(false);}return this.doPrefetch((0,find_path/* findPath */.Cj)(pagePath)).then(()=>{if(!this.prefetchCompleted.has(pagePath)){this.apiRunner("onPostPrefetchPathname",{pathname:pagePath});this.prefetchCompleted.add(pagePath);}dPromise.resolve(true);});}));if(this.prefetchQueued.length){prefetches.then(()=>{setTimeout(()=>{this._processNextPrefetchBatch();},3000);});}else{this.isPrefetchQueueRunning=false;}});};_proto.doPrefetch=function doPrefetch(pagePath){const pageDataUrl=createPageDataUrl(pagePath);if(false){}else{return _cache_prefetch(pageDataUrl,{crossOrigin:"anonymous",as:"fetch"}).then(()=>// This was just prefetched, so will return a response from
// the cache instead of making another request to the server
this.loadPageDataJson(pagePath));}};_proto.hovering=function hovering(rawPath){this.loadPage(rawPath);};_proto.getResourceURLsForPathname=function getResourceURLsForPathname(rawPath){const pagePath=(0,find_path/* findPath */.Cj)(rawPath);const page=this.pageDataDb.get(pagePath);if(page){const pageResources=toPageResources(page.payload);return[].concat((0,toConsumableArray/* default */.Z)(createComponentUrls(pageResources.page.componentChunkName)),[createPageDataUrl(pagePath)]);}else{return null;}};_proto.isPageNotFound=function isPageNotFound(rawPath){const pagePath=(0,find_path/* findPath */.Cj)(rawPath);const page=this.pageDb.get(pagePath);return!page||page.notFound;};_proto.loadAppData=function loadAppData(retries){if(retries===void 0){retries=0;}return this.memoizedGet(""+"/page-data/app-data.json").then(req=>{const{status,responseText}=req;let appData;if(status!==200&&retries<3){// Retry 3 times incase of non-200 responses
return this.loadAppData(retries+1);}// Handle 200
if(status===200){try{const jsonPayload=JSON.parse(responseText);if(jsonPayload.webpackCompilationHash===undefined){throw new Error("not a valid app-data response");}appData=jsonPayload;}catch(err){// continue regardless of error
}}return appData;});};return BaseLoader;}();const createComponentUrls=componentChunkName=>(window.___chunkMapping[componentChunkName]||[]).map(chunk=>""+chunk);let ProdLoader=/*#__PURE__*/function(_BaseLoader){(0,inheritsLoose/* default */.Z)(ProdLoader,_BaseLoader);function ProdLoader(asyncRequires,matchPaths,pageData){var _this;const loadComponent=function(chunkName,exportType){if(exportType===void 0){exportType="components";}if(true){exportType="components";}if(!asyncRequires[exportType][chunkName]){throw new Error("We couldn't find the correct component chunk with the name \""+chunkName+"\"");}return asyncRequires[exportType][chunkName]()// loader will handle the case when component is error
.catch(err=>err);};_this=_BaseLoader.call(this,loadComponent,matchPaths)||this;if(pageData){_this.pageDataDb.set((0,find_path/* findPath */.Cj)(pageData.path),{pagePath:pageData.path,payload:pageData,status:"success"});}return _this;}var _proto2=ProdLoader.prototype;_proto2.doPrefetch=function doPrefetch(pagePath){return _BaseLoader.prototype.doPrefetch.call(this,pagePath).then(result=>{if(result.status!==PageResourceStatus.Success){return Promise.resolve();}const pageData=result.payload;const chunkName=pageData.componentChunkName;const componentUrls=createComponentUrls(chunkName);return Promise.all(componentUrls.map(_cache_prefetch)).then(()=>pageData);});};_proto2.loadPageDataJson=function loadPageDataJson(rawPath){return _BaseLoader.prototype.loadPageDataJson.call(this,rawPath).then(data=>{if(data.notFound){// check if html file exist using HEAD request:
// if it does we should navigate to it instead of showing 404
return doFetch(rawPath,"HEAD").then(req=>{if(req.status===200){// page (.html file) actually exist (or we asked for 404 )
// returning page resources status as errored to trigger
// regular browser navigation to given page
return{status:PageResourceStatus.Error};}// if HEAD request wasn't 200, return notFound result
// and show 404 page
return data;});}return data;});};_proto2.loadPartialHydrationJson=function loadPartialHydrationJson(rawPath){return _BaseLoader.prototype.loadPartialHydrationJson.call(this,rawPath).then(data=>{if(data.notFound){// check if html file exist using HEAD request:
// if it does we should navigate to it instead of showing 404
return doFetch(rawPath,"HEAD").then(req=>{if(req.status===200){// page (.html file) actually exist (or we asked for 404 )
// returning page resources status as errored to trigger
// regular browser navigation to given page
return{status:PageResourceStatus.Error};}// if HEAD request wasn't 200, return notFound result
// and show 404 page
return data;});}return data;});};return ProdLoader;}(BaseLoader);let instance;const setLoader=_loader=>{instance=_loader;};const publicLoader={enqueue:rawPath=>instance.prefetch(rawPath),// Real methods
getResourceURLsForPathname:rawPath=>instance.getResourceURLsForPathname(rawPath),loadPage:rawPath=>instance.loadPage(rawPath),// TODO add deprecation to v4 so people use withErrorDetails and then we can remove in v5 and change default behaviour
loadPageSync:function(rawPath,options){if(options===void 0){options={};}return instance.loadPageSync(rawPath,options);},prefetch:rawPath=>instance.prefetch(rawPath),isPageNotFound:rawPath=>instance.isPageNotFound(rawPath),hovering:rawPath=>instance.hovering(rawPath),loadAppData:()=>instance.loadAppData()};/* harmony default export */ var loader = (publicLoader);function getStaticQueryResults(){if(instance){return instance.staticQueryDb;}else{return{};}}function getSliceResults(){if(instance){return instance.slicesDb;}else{return{};}}

/***/ }),

/***/ 4779:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ page_renderer; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./.cache/api-runner-browser.js
var api_runner_browser = __webpack_require__(3092);
// EXTERNAL MODULE: ./.cache/find-path.js + 1 modules
var find_path = __webpack_require__(7802);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 10 modules
var gatsby_browser_entry = __webpack_require__(1883);
// EXTERNAL MODULE: ./node_modules/@gatsbyjs/reach-router/dist/index.modern.mjs
var index_modern = __webpack_require__(7896);
// EXTERNAL MODULE: ./.cache/react-dom-utils.js
var react_dom_utils = __webpack_require__(4941);
;// CONCATENATED MODULE: ./.cache/head/components/fire-callback-in-effect.js
/*
 * Calls callback in an effect and renders children
 */function FireCallbackInEffect(_ref){let{children,callback}=_ref;(0,react.useEffect)(()=>{callback();});return children;}
;// CONCATENATED MODULE: ./.cache/head/constants.js
const VALID_NODE_NAMES=["link","meta","style","title","base","noscript","script"];
;// CONCATENATED MODULE: ./.cache/head/utils.js
/**
 * Filter the props coming from a page down to just the ones that are relevant for head.
 * This e.g. filters out properties that are undefined during SSR.
 */function filterHeadProps(input){return{location:{pathname:input.location.pathname},params:input.params,data:input.data||{},pageContext:input.pageContext};}/**
 * Throw error if Head export is not a valid
 */function headExportValidator(head){if(typeof head!=="function")throw new Error("Expected \"Head\" export to be a function got \""+typeof head+"\".");}/**
 * Warn once for same messsage
 */let warnOnce=_=>{};if(false){}/**
 * Warn for invalid tags in head.
 * @param {string} tagName
 */function warnForInvalidTags(tagName){if(false){}}/**
 * When a `nonce` is present on an element, browsers such as Chrome and Firefox strip it out of the
 * actual HTML attributes for security reasons *when the element is added to the document*. Thus,
 * given two equivalent elements that have nonces, `Element,isEqualNode()` will return false if one
 * of those elements gets added to the document. Although the `element.nonce` property will be the
 * same for both elements, the one that was added to the document will return an empty string for
 * its nonce HTML attribute value.
 *
 * This custom `isEqualNode()` function therefore removes the nonce value from the `newTag` before
 * comparing it to `oldTag`, restoring it afterwards.
 *
 * For more information, see:
 * https://bugs.chromium.org/p/chromium/issues/detail?id=1211471#c12
 */function isEqualNode(oldTag,newTag){if(oldTag instanceof HTMLElement&&newTag instanceof HTMLElement){const nonce=newTag.getAttribute("nonce");// Only strip the nonce if `oldTag` has had it stripped. An element's nonce attribute will not
// be stripped if there is no content security policy response header that includes a nonce.
if(nonce&&!oldTag.getAttribute("nonce")){const cloneTag=newTag.cloneNode(true);cloneTag.setAttribute("nonce","");cloneTag.nonce=nonce;return nonce===oldTag.nonce&&oldTag.isEqualNode(cloneTag);}}return oldTag.isEqualNode(newTag);}function diffNodes(_ref){let{oldNodes,newNodes,onStale,onNew}=_ref;for(const existingHeadElement of oldNodes){const indexInNewNodes=newNodes.findIndex(e=>isEqualNode(e,existingHeadElement));if(indexInNewNodes===-1){onStale(existingHeadElement);}else{// this node is re-created as-is, so we keep old node, and remove it from list of new nodes (as we handled it already here)
newNodes.splice(indexInNewNodes,1);}}// remaing new nodes didn't have matching old node, so need to be added
for(const newNode of newNodes){onNew(newNode);}}
;// CONCATENATED MODULE: ./.cache/head/head-export-handler-for-browser.js
const hiddenRoot=document.createElement("div");const removePrevHeadElements=()=>{const prevHeadNodes=document.querySelectorAll("[data-gatsby-head]");for(const node of prevHeadNodes){node.parentNode.removeChild(node);}};const onHeadRendered=()=>{var _document$head2;const validHeadNodes=[];const seenIds=new Map();for(const node of hiddenRoot.childNodes){var _node$attributes,_node$attributes$id;const nodeName=node.nodeName.toLowerCase();const id=(_node$attributes=node.attributes)===null||_node$attributes===void 0?void 0:(_node$attributes$id=_node$attributes.id)===null||_node$attributes$id===void 0?void 0:_node$attributes$id.value;if(!VALID_NODE_NAMES.includes(nodeName)){warnForInvalidTags(nodeName);}else{let clonedNode=node.cloneNode(true);clonedNode.setAttribute("data-gatsby-head",true);// Create an element for scripts to make script work
if(clonedNode.nodeName.toLowerCase()==="script"){const script=document.createElement("script");for(const attr of clonedNode.attributes){script.setAttribute(attr.name,attr.value);}script.innerHTML=clonedNode.innerHTML;clonedNode=script;}if(id){if(!seenIds.has(id)){validHeadNodes.push(clonedNode);seenIds.set(id,validHeadNodes.length-1);}else{var _validHeadNodes$index;const indexOfPreviouslyInsertedNode=seenIds.get(id);(_validHeadNodes$index=validHeadNodes[indexOfPreviouslyInsertedNode].parentNode)===null||_validHeadNodes$index===void 0?void 0:_validHeadNodes$index.removeChild(validHeadNodes[indexOfPreviouslyInsertedNode]);validHeadNodes[indexOfPreviouslyInsertedNode]=clonedNode;}}else{validHeadNodes.push(clonedNode);}}}const existingHeadElements=document.querySelectorAll("[data-gatsby-head]");if(existingHeadElements.length===0){var _document$head;(_document$head=document.head).append.apply(_document$head,validHeadNodes);return;}const newHeadNodes=[];diffNodes({oldNodes:existingHeadElements,newNodes:validHeadNodes,onStale:node=>node.parentNode.removeChild(node),onNew:node=>newHeadNodes.push(node)});(_document$head2=document.head).append.apply(_document$head2,newHeadNodes);};if(false){}function headHandlerForBrowser(_ref){let{pageComponent,staticQueryResults,pageComponentProps}=_ref;(0,react.useEffect)(()=>{if(pageComponent!==null&&pageComponent!==void 0&&pageComponent.Head){headExportValidator(pageComponent.Head);const{render}=(0,react_dom_utils/* reactDOMUtils */.U)();const Head=pageComponent.Head;render(/*#__PURE__*/ // just a hack to call the callback after react has done first render
// Note: In dev, we call onHeadRendered twice( in FireCallbackInEffect and after mutualution observer dectects initail render into hiddenRoot) this is for hot reloading
// In Prod we only call onHeadRendered in FireCallbackInEffect to render to head
react.createElement(FireCallbackInEffect,{callback:onHeadRendered},/*#__PURE__*/react.createElement(gatsby_browser_entry/* StaticQueryContext.Provider */.B9.Provider,{value:staticQueryResults},/*#__PURE__*/react.createElement(index_modern.LocationProvider,null,/*#__PURE__*/react.createElement(Head,filterHeadProps(pageComponentProps))))),hiddenRoot);}return()=>{removePrevHeadElements();};});}
;// CONCATENATED MODULE: ./.cache/page-renderer.js
// Renders page
function PageRenderer(props){const pageComponentProps={...props,params:{...(0,find_path/* grabMatchParams */.GA)(props.location.pathname),...props.pageResources.json.pageContext.__params}};const preferDefault=m=>m&&m.default||m;let pageElement;if(props.pageResources.partialHydration){pageElement=props.pageResources.partialHydration;}else{pageElement=/*#__PURE__*/(0,react.createElement)(preferDefault(props.pageResources.component),{...pageComponentProps,key:props.path||props.pageResources.page.path});}const pageComponent=props.pageResources.head;headHandlerForBrowser({pageComponent,staticQueryResults:props.pageResources.staticQueryResults,pageComponentProps});const wrappedPage=(0,api_runner_browser/* apiRunner */.h)("wrapPageElement",{element:pageElement,props:pageComponentProps},pageElement,_ref=>{let{result}=_ref;return{element:result,props:pageComponentProps};}).pop();return wrappedPage;}PageRenderer.propTypes={location:(prop_types_default()).object.isRequired,pageResources:(prop_types_default()).object.isRequired,data:(prop_types_default()).object,pageContext:(prop_types_default()).object.isRequired};/* harmony default export */ var page_renderer = (PageRenderer);

/***/ }),

/***/ 5824:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(4578);
// EXTERNAL MODULE: ./.cache/api-runner-browser.js
var api_runner_browser = __webpack_require__(3092);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@gatsbyjs/reach-router/dist/index.modern.mjs
var index_modern = __webpack_require__(7896);
// EXTERNAL MODULE: ./node_modules/gatsby-react-router-scroll/index.js
var gatsby_react_router_scroll = __webpack_require__(9679);
// EXTERNAL MODULE: ./.cache/static-query.js + 1 modules
var static_query = __webpack_require__(1757);
// EXTERNAL MODULE: ./.cache/slice/context.js
var context = __webpack_require__(8995);
// EXTERNAL MODULE: ./.cache/loader.js + 1 modules
var loader = __webpack_require__(1975);
// EXTERNAL MODULE: ./.cache/redirect-utils.js + 1 modules
var redirect_utils = __webpack_require__(6073);
// EXTERNAL MODULE: ./.cache/emitter.js + 1 modules
var emitter = __webpack_require__(8299);
;// CONCATENATED MODULE: ./.cache/route-announcer-props.js
// This is extracted to separate module because it's shared
// between browser and SSR code
const RouteAnnouncerProps={id:"gatsby-announcer",style:{position:"absolute",top:0,width:1,height:1,padding:0,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},"aria-live":"assertive","aria-atomic":"true"};
// EXTERNAL MODULE: ./node_modules/gatsby-link/dist/index.modern.mjs
var dist_index_modern = __webpack_require__(1562);
;// CONCATENATED MODULE: ./.cache/navigation.js
function maybeRedirect(pathname){const redirect=(0,redirect_utils/* maybeGetBrowserRedirect */.J)(pathname);const{hash,search}=window.location;if(redirect!=null){window.___replace(redirect.toPath+search+hash);return true;}else{return false;}}// Catch unhandled chunk loading errors and force a restart of the app.
let nextRoute="";window.addEventListener("unhandledrejection",event=>{if(/loading chunk \d* failed./i.test(event.reason)){if(nextRoute){window.location.pathname=nextRoute;}}});const onPreRouteUpdate=(location,prevLocation)=>{if(!maybeRedirect(location.pathname)){nextRoute=location.pathname;(0,api_runner_browser/* apiRunner */.h)("onPreRouteUpdate",{location,prevLocation});}};const onRouteUpdate=(location,prevLocation)=>{if(!maybeRedirect(location.pathname)){(0,api_runner_browser/* apiRunner */.h)("onRouteUpdate",{location,prevLocation});if(false){}}};const navigation_navigate=function(to,options){if(options===void 0){options={};}// Support forward/backward navigation with numbers
// navigate(-2) (jumps back 2 history steps)
// navigate(2)  (jumps forward 2 history steps)
if(typeof to==="number"){index_modern.globalHistory.navigate(to);return;}const{pathname,search,hash}=(0,dist_index_modern/* parsePath */.cP)(to);const redirect=(0,redirect_utils/* maybeGetBrowserRedirect */.J)(pathname);// If we're redirecting, just replace the passed in pathname
// to the one we want to redirect to.
if(redirect){to=redirect.toPath+search+hash;}// If we had a service worker update, no matter the path, reload window and
// reset the pathname whitelist
if(window.___swUpdated){window.location=pathname+search+hash;return;}// Start a timer to wait for a second before transitioning and showing a
// loader in case resources aren't around yet.
const timeoutId=setTimeout(()=>{emitter/* default.emit */.Z.emit("onDelayedLoadPageResources",{pathname});(0,api_runner_browser/* apiRunner */.h)("onRouteUpdateDelayed",{location:window.location});},1000);loader/* default.loadPage */.ZP.loadPage(pathname+search).then(pageResources=>{// If no page resources, then refresh the page
// Do this, rather than simply `window.location.reload()`, so that
// pressing the back/forward buttons work - otherwise when pressing
// back, the browser will just change the URL and expect JS to handle
// the change, which won't always work since it might not be a Gatsby
// page.
if(!pageResources||pageResources.status===loader/* PageResourceStatus.Error */.uQ.Error){window.history.replaceState({},"",location.href);window.location=pathname;clearTimeout(timeoutId);return;}// If the loaded page has a different compilation hash to the
// window, then a rebuild has occurred on the server. Reload.
if( true&&pageResources){if(pageResources.page.webpackCompilationHash!==window.___webpackCompilationHash){// Purge plugin-offline cache
if("serviceWorker"in navigator&&navigator.serviceWorker.controller!==null&&navigator.serviceWorker.controller.state==="activated"){navigator.serviceWorker.controller.postMessage({gatsbyApi:"clearPathResources"});}window.location=pathname+search+hash;}}(0,index_modern.navigate)(to,options);clearTimeout(timeoutId);});};function shouldUpdateScroll(prevRouterProps,_ref){let{location}=_ref;const{pathname,hash}=location;const results=(0,api_runner_browser/* apiRunner */.h)("shouldUpdateScroll",{prevRouterProps,// `pathname` for backwards compatibility
pathname,routerProps:{location},getSavedScrollPosition:args=>[0,// FIXME this is actually a big code smell, we should fix this
// eslint-disable-next-line @babel/no-invalid-this
this._stateStorage.read(args,args.key)]});if(results.length>0){// Use the latest registered shouldUpdateScroll result, this allows users to override plugin's configuration
// @see https://github.com/gatsbyjs/gatsby/issues/12038
return results[results.length-1];}if(prevRouterProps){const{location:{pathname:oldPathname}}=prevRouterProps;if(oldPathname===pathname){// Scroll to element if it exists, if it doesn't, or no hash is provided,
// scroll to top.
return hash?decodeURI(hash.slice(1)):[0,0];}}return true;}function init(){// The "scroll-behavior" package expects the "action" to be on the location
// object so let's copy it over.
index_modern.globalHistory.listen(args=>{args.location.action=args.action;});window.___push=to=>navigation_navigate(to,{replace:false});window.___replace=to=>navigation_navigate(to,{replace:true});window.___navigate=(to,options)=>navigation_navigate(to,options);}let RouteAnnouncer=/*#__PURE__*/function(_React$Component){(0,inheritsLoose/* default */.Z)(RouteAnnouncer,_React$Component);function RouteAnnouncer(props){var _this;_this=_React$Component.call(this,props)||this;_this.announcementRef=/*#__PURE__*/react.createRef();return _this;}var _proto=RouteAnnouncer.prototype;_proto.componentDidUpdate=function componentDidUpdate(prevProps,nextProps){requestAnimationFrame(()=>{let pageName="new page at "+this.props.location.pathname;if(document.title){pageName=document.title;}const pageHeadings=document.querySelectorAll("#gatsby-focus-wrapper h1");if(pageHeadings&&pageHeadings.length){pageName=pageHeadings[0].textContent;}const newAnnouncement="Navigated to "+pageName;if(this.announcementRef.current){const oldAnnouncement=this.announcementRef.current.innerText;if(oldAnnouncement!==newAnnouncement){this.announcementRef.current.innerText=newAnnouncement;}}});};_proto.render=function render(){return/*#__PURE__*/react.createElement("div",Object.assign({},RouteAnnouncerProps,{ref:this.announcementRef}));};return RouteAnnouncer;}(react.Component);const compareLocationProps=(prevLocation,nextLocation)=>{var _prevLocation$state,_nextLocation$state;if(prevLocation.href!==nextLocation.href){return true;}if((prevLocation===null||prevLocation===void 0?void 0:(_prevLocation$state=prevLocation.state)===null||_prevLocation$state===void 0?void 0:_prevLocation$state.key)!==(nextLocation===null||nextLocation===void 0?void 0:(_nextLocation$state=nextLocation.state)===null||_nextLocation$state===void 0?void 0:_nextLocation$state.key)){return true;}return false;};// Fire on(Pre)RouteUpdate APIs
let RouteUpdates=/*#__PURE__*/function(_React$Component2){(0,inheritsLoose/* default */.Z)(RouteUpdates,_React$Component2);function RouteUpdates(props){var _this2;_this2=_React$Component2.call(this,props)||this;onPreRouteUpdate(props.location,null);return _this2;}var _proto2=RouteUpdates.prototype;_proto2.componentDidMount=function componentDidMount(){onRouteUpdate(this.props.location,null);};_proto2.shouldComponentUpdate=function shouldComponentUpdate(prevProps){if(compareLocationProps(prevProps.location,this.props.location)){onPreRouteUpdate(this.props.location,prevProps.location);return true;}return false;};_proto2.componentDidUpdate=function componentDidUpdate(prevProps){if(compareLocationProps(prevProps.location,this.props.location)){onRouteUpdate(this.props.location,prevProps.location);}};_proto2.render=function render(){return/*#__PURE__*/react.createElement(react.Fragment,null,this.props.children,/*#__PURE__*/react.createElement(RouteAnnouncer,{location:location}));};return RouteUpdates;}(react.Component);
// EXTERNAL MODULE: ./.cache/page-renderer.js + 4 modules
var page_renderer = __webpack_require__(4779);
// EXTERNAL MODULE: ./.cache/_this_is_virtual_fs_path_/$virtual/async-requires.js
var async_requires = __webpack_require__(5418);
;// CONCATENATED MODULE: ./node_modules/shallow-compare/es/index.js
// Pulled from react-compat
// https://github.com/developit/preact-compat/blob/7c5de00e7c85e2ffd011bf3af02899b63f699d3a/src/index.js#L349
function shallowDiffers(a, b) {
  for (var i in a) {
    if (!(i in b)) return true;
  }for (var _i in b) {
    if (a[_i] !== b[_i]) return true;
  }return false;
}

/* harmony default export */ var es = (function (instance, nextProps, nextState) {
  return shallowDiffers(instance.props, nextProps) || shallowDiffers(instance.state, nextState);
});
;// CONCATENATED MODULE: ./.cache/ensure-resources.js
let EnsureResources=/*#__PURE__*/function(_React$Component){(0,inheritsLoose/* default */.Z)(EnsureResources,_React$Component);function EnsureResources(props){var _this;_this=_React$Component.call(this)||this;const{location,pageResources}=props;_this.state={location:{...location},pageResources:pageResources||loader/* default.loadPageSync */.ZP.loadPageSync(location.pathname+location.search,{withErrorDetails:true})};return _this;}EnsureResources.getDerivedStateFromProps=function getDerivedStateFromProps(_ref,prevState){let{location}=_ref;if(prevState.location.href!==location.href){const pageResources=loader/* default.loadPageSync */.ZP.loadPageSync(location.pathname+location.search,{withErrorDetails:true});return{pageResources,location:{...location}};}return{location:{...location}};};var _proto=EnsureResources.prototype;_proto.loadResources=function loadResources(rawPath){loader/* default.loadPage */.ZP.loadPage(rawPath).then(pageResources=>{if(pageResources&&pageResources.status!==loader/* PageResourceStatus.Error */.uQ.Error){this.setState({location:{...window.location},pageResources});}else{window.history.replaceState({},"",location.href);window.location=rawPath;}});};_proto.shouldComponentUpdate=function shouldComponentUpdate(nextProps,nextState){// Always return false if we're missing resources.
if(!nextState.pageResources){this.loadResources(nextProps.location.pathname+nextProps.location.search);return false;}if(false){}// Check if the component or json have changed.
if(this.state.pageResources!==nextState.pageResources){return true;}if(this.state.pageResources.component!==nextState.pageResources.component){return true;}if(this.state.pageResources.json!==nextState.pageResources.json){return true;}// Check if location has changed on a page using internal routing
// via matchPath configuration.
if(this.state.location.key!==nextState.location.key&&nextState.pageResources.page&&(nextState.pageResources.page.matchPath||nextState.pageResources.page.path)){return true;}return es(this,nextProps,nextState);};_proto.render=function render(){if(false){ var _this$state$pageResou; }return this.props.children(this.state);};return EnsureResources;}(react.Component);/* harmony default export */ var ensure_resources = (EnsureResources);
// EXTERNAL MODULE: ./.cache/strip-prefix.js
var strip_prefix = __webpack_require__(1505);
;// CONCATENATED MODULE: ./.cache/_this_is_virtual_fs_path_/$virtual/match-paths.json
var match_paths_namespaceObject = [];
// EXTERNAL MODULE: ./.cache/react-dom-utils.js
var react_dom_utils = __webpack_require__(4941);
;// CONCATENATED MODULE: ./.cache/production-app.js
// Generated during bootstrap
const production_app_loader=new loader/* ProdLoader */.kL(async_requires,match_paths_namespaceObject,window.pageData);(0,loader/* setLoader */.N1)(production_app_loader);production_app_loader.setApiRunner(api_runner_browser/* apiRunner */.h);const{render,hydrate}=(0,react_dom_utils/* reactDOMUtils */.U)();window.asyncRequires=async_requires;window.___emitter=emitter/* default */.Z;window.___loader=loader/* publicLoader */.jN;init();const reloadStorageKey="gatsby-reload-compilation-hash-match";(0,api_runner_browser/* apiRunnerAsync */.I)("onClientEntry").then(()=>{// Let plugins register a service worker. The plugin just needs
// to return true.
if((0,api_runner_browser/* apiRunner */.h)("registerServiceWorker").filter(Boolean).length>0){__webpack_require__(9939);}// In gatsby v2 if Router is used in page using matchPaths
// paths need to contain full path.
// For example:
//   - page have `/app/*` matchPath
//   - inside template user needs to use `/app/xyz` as path
// Resetting `basepath`/`baseuri` keeps current behaviour
// to not introduce breaking change.
// Remove this in v3
const RouteHandler=props=>/*#__PURE__*/react.createElement(index_modern.BaseContext.Provider,{value:{baseuri:"/",basepath:"/"}},/*#__PURE__*/react.createElement(page_renderer/* default */.Z,props));const DataContext=/*#__PURE__*/react.createContext({});const slicesContext={renderEnvironment:"browser"};let GatsbyRoot=/*#__PURE__*/function(_React$Component){(0,inheritsLoose/* default */.Z)(GatsbyRoot,_React$Component);function GatsbyRoot(){return _React$Component.apply(this,arguments)||this;}var _proto=GatsbyRoot.prototype;_proto.render=function render(){const{children}=this.props;return/*#__PURE__*/react.createElement(index_modern.Location,null,_ref=>{let{location}=_ref;return/*#__PURE__*/react.createElement(ensure_resources,{location:location},_ref2=>{let{pageResources,location}=_ref2;const staticQueryResults=(0,loader/* getStaticQueryResults */.hs)();const sliceResults=(0,loader/* getSliceResults */.Nt)();return/*#__PURE__*/react.createElement(static_query/* StaticQueryContext.Provider */.B9.Provider,{value:staticQueryResults},/*#__PURE__*/react.createElement(context/* SlicesContext.Provider */.Bs.Provider,{value:slicesContext},/*#__PURE__*/react.createElement(context/* SlicesResultsContext.Provider */.m3.Provider,{value:sliceResults},/*#__PURE__*/react.createElement(context/* SlicesMapContext.Provider */.u0.Provider,{value:pageResources.page.slicesMap},/*#__PURE__*/react.createElement(DataContext.Provider,{value:{pageResources,location}},children)))));});});};return GatsbyRoot;}(react.Component);let LocationHandler=/*#__PURE__*/function(_React$Component2){(0,inheritsLoose/* default */.Z)(LocationHandler,_React$Component2);function LocationHandler(){return _React$Component2.apply(this,arguments)||this;}var _proto2=LocationHandler.prototype;_proto2.render=function render(){return/*#__PURE__*/react.createElement(DataContext.Consumer,null,_ref3=>{let{pageResources,location}=_ref3;return/*#__PURE__*/react.createElement(RouteUpdates,{location:location},/*#__PURE__*/react.createElement(gatsby_react_router_scroll/* ScrollContext */.$C,{location:location,shouldUpdateScroll:shouldUpdateScroll},/*#__PURE__*/react.createElement(index_modern.Router,{basepath:"",location:location,id:"gatsby-focus-wrapper"},/*#__PURE__*/react.createElement(RouteHandler,Object.assign({path:pageResources.page.path==="/404.html"||pageResources.page.path==="/500.html"?(0,strip_prefix/* default */.Z)(location.pathname,""):encodeURI((pageResources.page.matchPath||pageResources.page.path).split("?")[0])},this.props,{location:location,pageResources:pageResources},pageResources.json)))));});};return LocationHandler;}(react.Component);const{pagePath,location:browserLoc}=window;// Explicitly call navigate if the canonical path (window.pagePath)
// is different to the browser path (window.location.pathname). SSR
// page paths might include search params, while SSG and DSG won't.
// If page path include search params we also compare query params.
// But only if NONE of the following conditions hold:
//
// - The url matches a client side route (page.matchPath)
// - it's a 404 page
// - it's the offline plugin shell (/offline-plugin-app-shell-fallback/)
if(pagePath&&""+pagePath!==browserLoc.pathname+(pagePath.includes("?")?browserLoc.search:"")&&!(production_app_loader.findMatchPath((0,strip_prefix/* default */.Z)(browserLoc.pathname,""))||pagePath.match(/^\/(404|500)(\/?|.html)$/)||pagePath.match(/^\/offline-plugin-app-shell-fallback\/?$/))){(0,index_modern.navigate)(""+pagePath+(!pagePath.includes("?")?browserLoc.search:"")+browserLoc.hash,{replace:true});}// It's possible that sessionStorage can throw an exception if access is not granted, see https://github.com/gatsbyjs/gatsby/issues/34512
const getSessionStorage=()=>{try{return sessionStorage;}catch{return null;}};loader/* publicLoader.loadPage */.jN.loadPage(browserLoc.pathname+browserLoc.search).then(page=>{var _page$page;const sessionStorage=getSessionStorage();if(page!==null&&page!==void 0&&(_page$page=page.page)!==null&&_page$page!==void 0&&_page$page.webpackCompilationHash&&page.page.webpackCompilationHash!==window.___webpackCompilationHash){// Purge plugin-offline cache
if("serviceWorker"in navigator&&navigator.serviceWorker.controller!==null&&navigator.serviceWorker.controller.state==="activated"){navigator.serviceWorker.controller.postMessage({gatsbyApi:"clearPathResources"});}// We have not matching html + js (inlined `window.___webpackCompilationHash`)
// with our data (coming from `app-data.json` file). This can cause issues such as
// errors trying to load static queries (as list of static queries is inside `page-data`
// which might not match to currently loaded `.js` scripts).
// We are making attempt to reload if hashes don't match, but we also have to handle case
// when reload doesn't fix it (possibly broken deploy) so we don't end up in infinite reload loop
if(sessionStorage){const isReloaded=sessionStorage.getItem(reloadStorageKey)==="1";if(!isReloaded){sessionStorage.setItem(reloadStorageKey,"1");window.location.reload(true);return;}}}if(sessionStorage){sessionStorage.removeItem(reloadStorageKey);}if(!page||page.status===loader/* PageResourceStatus.Error */.uQ.Error){const message="page resources for "+browserLoc.pathname+" not found. Not rendering React";// if the chunk throws an error we want to capture the real error
// This should help with https://github.com/gatsbyjs/gatsby/issues/19618
if(page&&page.error){console.error(message);throw page.error;}throw new Error(message);}const SiteRoot=(0,api_runner_browser/* apiRunner */.h)("wrapRootElement",{element:/*#__PURE__*/react.createElement(LocationHandler,null)},/*#__PURE__*/react.createElement(LocationHandler,null),_ref4=>{let{result}=_ref4;return{element:result};}).pop();const App=function App(){const onClientEntryRanRef=react.useRef(false);react.useEffect(()=>{if(!onClientEntryRanRef.current){onClientEntryRanRef.current=true;if(performance.mark){performance.mark("onInitialClientRender");}(0,api_runner_browser/* apiRunner */.h)("onInitialClientRender");}},[]);return/*#__PURE__*/react.createElement(GatsbyRoot,null,SiteRoot);};const focusEl=document.getElementById("gatsby-focus-wrapper");// Client only pages have any empty body so we just do a normal
// render to avoid React complaining about hydration mis-matches.
let defaultRenderer=render;if(focusEl&&focusEl.children.length){defaultRenderer=hydrate;}const renderer=(0,api_runner_browser/* apiRunner */.h)("replaceHydrateFunction",undefined,defaultRenderer)[0];function runRender(){const rootElement=typeof window!=="undefined"?document.getElementById("___gatsby"):null;renderer(/*#__PURE__*/react.createElement(App,null),rootElement);}// https://github.com/madrobby/zepto/blob/b5ed8d607f67724788ec9ff492be297f64d47dfc/src/zepto.js#L439-L450
// TODO remove IE 10 support
const doc=document;if(doc.readyState==="complete"||doc.readyState!=="loading"&&!doc.documentElement.doScroll){setTimeout(function(){runRender();},0);}else{const handler=function(){doc.removeEventListener("DOMContentLoaded",handler,false);window.removeEventListener("load",handler,false);runRender();};doc.addEventListener("DOMContentLoaded",handler,false);window.addEventListener("load",handler,false);}return;});});

/***/ }),

/***/ 224:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1975);
/* harmony import */ var _page_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4779);
const ProdPageRenderer=_ref=>{let{location}=_ref;const pageResources=_loader__WEBPACK_IMPORTED_MODULE_1__/* ["default"].loadPageSync */ .ZP.loadPageSync(location.pathname);if(!pageResources){return null;}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_page_renderer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{location,pageResources,...pageResources.json});};/* harmony default export */ __webpack_exports__["default"] = (ProdPageRenderer);

/***/ }),

/***/ 2743:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const preferDefault=m=>m&&m.default||m;if(false){}else if(true){module.exports=preferDefault(__webpack_require__(224));}else{}

/***/ }),

/***/ 4941:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": function() { return /* binding */ reactDOMUtils; }
/* harmony export */ });
const map=new WeakMap();function reactDOMUtils(){const reactDomClient=__webpack_require__(745);const render=(Component,el)=>{let root=map.get(el);if(!root){map.set(el,root=reactDomClient.createRoot(el));}root.render(Component);};const hydrate=(Component,el)=>reactDomClient.hydrateRoot(el,Component);return{render,hydrate};}

/***/ }),

/***/ 6073:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": function() { return /* binding */ maybeGetBrowserRedirect; }
});

;// CONCATENATED MODULE: ./.cache/redirects.json
var redirects_namespaceObject = [];
;// CONCATENATED MODULE: ./.cache/redirect-utils.js
// Convert to a map for faster lookup in maybeRedirect()
const redirectMap=new Map();const redirectIgnoreCaseMap=new Map();redirects_namespaceObject.forEach(redirect=>{if(redirect.ignoreCase){redirectIgnoreCaseMap.set(redirect.fromPath,redirect);}else{redirectMap.set(redirect.fromPath,redirect);}});function maybeGetBrowserRedirect(pathname){let redirect=redirectMap.get(pathname);if(!redirect){redirect=redirectIgnoreCaseMap.get(pathname.toLowerCase());}return redirect;}

/***/ }),

/***/ 9939:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_runner_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3092);
if(window.location.protocol!=="https:"&&window.location.hostname!=="localhost"){console.error("Service workers can only be used over HTTPS, or on localhost for development");}else if("serviceWorker"in navigator){navigator.serviceWorker.register(""+"/sw.js").then(function(reg){reg.addEventListener("updatefound",()=>{(0,_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__/* .apiRunner */ .h)("onServiceWorkerUpdateFound",{serviceWorker:reg});// The updatefound event implies that reg.installing is set; see
// https://w3c.github.io/ServiceWorker/#service-worker-registration-updatefound-event
const installingWorker=reg.installing;console.log("installingWorker",installingWorker);installingWorker.addEventListener("statechange",()=>{switch(installingWorker.state){case"installed":if(navigator.serviceWorker.controller){// At this point, the old content will have been purged and the fresh content will
// have been added to the cache.
// We set a flag so Gatsby Link knows to refresh the page on next navigation attempt
window.___swUpdated=true;// We call the onServiceWorkerUpdateReady API so users can show update prompts.
(0,_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__/* .apiRunner */ .h)("onServiceWorkerUpdateReady",{serviceWorker:reg});// If resources failed for the current page, reload.
if(window.___failedResources){console.log("resources failed, SW updated - reloading");window.location.reload();}}else{// At this point, everything has been precached.
// It's the perfect time to display a "Content is cached for offline use." message.
console.log("Content is now available offline!");// Post to service worker that install is complete.
// Delay to allow time for the event listener to be added --
// otherwise fetch is called too soon and resources aren't cached.
(0,_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__/* .apiRunner */ .h)("onServiceWorkerInstalled",{serviceWorker:reg});}break;case"redundant":console.error("The installing service worker became redundant.");(0,_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__/* .apiRunner */ .h)("onServiceWorkerRedundant",{serviceWorker:reg});break;case"activated":(0,_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__/* .apiRunner */ .h)("onServiceWorkerActive",{serviceWorker:reg});break;}});});}).catch(function(e){console.error("Error during service worker registration:",e);});}

/***/ }),

/***/ 8995:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bs": function() { return /* binding */ SlicesContext; },
/* harmony export */   "m3": function() { return /* binding */ SlicesResultsContext; },
/* harmony export */   "u0": function() { return /* binding */ SlicesMapContext; }
/* harmony export */ });
/* unused harmony export SlicesPropsContext */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
const SlicesResultsContext=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});const SlicesContext=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});const SlicesMapContext=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});const SlicesPropsContext=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});

/***/ }),

/***/ 1757:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "B9": function() { return /* binding */ StaticQueryContext; },
  "K2": function() { return /* binding */ useStaticQuery; }
});

// UNUSED EXPORTS: StaticQuery

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./.cache/context-utils.js
// Ensure serverContext is not created more than once as React will throw when creating it more than once
// https://github.com/facebook/react/blob/dd2d6522754f52c70d02c51db25eb7cbd5d1c8eb/packages/react/src/ReactServerContext.js#L101
const createServerContext=function(name,defaultValue){if(defaultValue===void 0){defaultValue=null;}/* eslint-disable no-undef */if(!globalThis.__SERVER_CONTEXT){globalThis.__SERVER_CONTEXT={};}if(!globalThis.__SERVER_CONTEXT[name]){globalThis.__SERVER_CONTEXT[name]=react.createServerContext(name,defaultValue);}return globalThis.__SERVER_CONTEXT[name];};function createServerOrClientContext(name,defaultValue){if(react.createServerContext){return createServerContext(name,defaultValue);}return/*#__PURE__*/react.createContext(defaultValue);}
;// CONCATENATED MODULE: ./.cache/static-query.js
const StaticQueryContext=createServerOrClientContext("StaticQuery",{});function StaticQueryDataRenderer(_ref){let{staticQueryData,data,query,render}=_ref;const finalData=data?data.data:staticQueryData[query]&&staticQueryData[query].data;return/*#__PURE__*/React.createElement(React.Fragment,null,finalData&&render(finalData),!finalData&&/*#__PURE__*/React.createElement("div",null,"Loading (StaticQuery)"));}let warnedAboutStaticQuery=false;// TODO(v6): Remove completely
const StaticQuery=props=>{const{data,query,render,children}=props;if(false){}return/*#__PURE__*/React.createElement(StaticQueryContext.Consumer,null,staticQueryData=>/*#__PURE__*/React.createElement(StaticQueryDataRenderer,{data:data,query:query,render:render||children,staticQueryData:staticQueryData}));};const useStaticQuery=query=>{var _context$query;if(typeof react.useContext!=="function"&&"production"==="development"){}const context=react.useContext(StaticQueryContext);// query is a stringified number like `3303882` when wrapped with graphql, If a user forgets
// to wrap the query in a grqphql, then casting it to a Number results in `NaN` allowing us to
// catch the misuse of the API and give proper direction
if(isNaN(Number(query))){throw new Error("useStaticQuery was called with a string but expects to be called using `graphql`. Try this:\n\nimport { useStaticQuery, graphql } from 'gatsby';\n\nuseStaticQuery(graphql`"+query+"`);\n");}if((_context$query=context[query])!==null&&_context$query!==void 0&&_context$query.data){return context[query].data;}else{throw new Error("The result of this StaticQuery could not be fetched.\n\n"+"This is likely a bug in Gatsby and if refreshing the page does not fix it, "+"please open an issue in https://github.com/gatsbyjs/gatsby/issues");}};

/***/ }),

/***/ 1505:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ stripPrefix; }
/* harmony export */ });
/**
 * Remove a prefix from a string. Return the input string if the given prefix
 * isn't found.
 */function stripPrefix(str,prefix){if(prefix===void 0){prefix="";}if(!prefix){return str;}if(str===prefix){return"/";}if(str.startsWith(prefix+"/")){return str.slice(prefix.length);}return str;}

/***/ }),

/***/ 8561:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "wrapPageElement": function() { return /* reexport */ wrapPageElement; },
  "wrapRootElement": function() { return /* reexport */ wrapRootElement; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./src/components/layout.module.css
// extracted by mini-css-extract-plugin
var layout = "layout-module--layout--6bf3d";
;// CONCATENATED MODULE: ./src/components/layout.jsx
const Layout=_ref=>{let{children}=_ref;return/*#__PURE__*/react.createElement("div",{className:layout},children);};/* harmony default export */ var components_layout = (Layout);
// EXTERNAL MODULE: ./node_modules/use-sync-external-store/shim/index.js
var shim = __webpack_require__(1688);
// EXTERNAL MODULE: ./node_modules/use-sync-external-store/shim/with-selector.js
var with_selector = __webpack_require__(2798);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
;// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/reactBatchedUpdates.js

;// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/batch.js
// Default to a dummy "batch" implementation that just runs the callback
function defaultNoopBatch(callback) {
  callback();
}

let batch = defaultNoopBatch; // Allow injecting another batching function later

const setBatch = newBatch => batch = newBatch; // Supply a getter just to skip dealing with ESM bindings

const getBatch = () => batch;
;// CONCATENATED MODULE: ./node_modules/react-redux/es/components/Context.js

const Context_ReactReduxContext = /*#__PURE__*/(0,react.createContext)(null);

if (false) {}

/* harmony default export */ var Context = ((/* unused pure expression or super */ null && (Context_ReactReduxContext)));
;// CONCATENATED MODULE: ./node_modules/react-redux/es/hooks/useReduxContext.js



/**
 * A hook to access the value of the `ReactReduxContext`. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @returns {any} the value of the `ReactReduxContext`
 *
 * @example
 *
 * import React from 'react'
 * import { useReduxContext } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const { store } = useReduxContext()
 *   return <div>{store.getState()}</div>
 * }
 */
function useReduxContext() {
  const contextValue = useContext(ReactReduxContext);

  if (false) {}

  return contextValue;
}
;// CONCATENATED MODULE: ./node_modules/react-redux/es/hooks/useSelector.js




let useSyncExternalStoreWithSelector = (/* unused pure expression or super */ null && (notInitialized));
const initializeUseSelector = fn => {
  useSyncExternalStoreWithSelector = fn;
};

const refEquality = (a, b) => a === b;
/**
 * Hook factory, which creates a `useSelector` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useSelector` hook bound to the specified context.
 */


function createSelectorHook(context = ReactReduxContext) {
  const useReduxContext = context === ReactReduxContext ? useDefaultReduxContext : () => useContext(context);
  return function useSelector(selector, equalityFn = refEquality) {
    if (false) {}

    const {
      store,
      subscription,
      getServerState
    } = useReduxContext();
    const selectedState = useSyncExternalStoreWithSelector(subscription.addNestedSub, store.getState, getServerState || store.getState, selector, equalityFn);
    useDebugValue(selectedState);
    return selectedState;
  };
}
/**
 * A hook to access the redux store's state. This hook takes a selector function
 * as an argument. The selector is called with the store state.
 *
 * This hook takes an optional equality comparison function as the second parameter
 * that allows you to customize the way the selected state is compared to determine
 * whether the component needs to be re-rendered.
 *
 * @param {Function} selector the selector function
 * @param {Function=} equalityFn the function that will be used to determine equality
 *
 * @returns {any} the selected state
 *
 * @example
 *
 * import React from 'react'
 * import { useSelector } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const counter = useSelector(state => state.counter)
 *   return <div>{counter}</div>
 * }
 */

const useSelector = /*#__PURE__*/(/* unused pure expression or super */ null && (createSelectorHook()));
// EXTERNAL MODULE: ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(8679);
// EXTERNAL MODULE: ./node_modules/react-redux/node_modules/react-is/index.js
var react_is = __webpack_require__(2973);
;// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/Subscription.js
 // encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

function createListenerCollection() {
  const batch = getBatch();
  let first = null;
  let last = null;
  return {
    clear() {
      first = null;
      last = null;
    },

    notify() {
      batch(() => {
        let listener = first;

        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },

    get() {
      let listeners = [];
      let listener = first;

      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }

      return listeners;
    },

    subscribe(callback) {
      let isSubscribed = true;
      let listener = last = {
        callback,
        next: null,
        prev: last
      };

      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }

      return function unsubscribe() {
        if (!isSubscribed || first === null) return;
        isSubscribed = false;

        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }

        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }

  };
}

const nullListeners = {
  notify() {},

  get: () => []
};
function Subscription_createSubscription(store, parentSub) {
  let unsubscribe;
  let listeners = nullListeners;

  function addNestedSub(listener) {
    trySubscribe();
    return listeners.subscribe(listener);
  }

  function notifyNestedSubs() {
    listeners.notify();
  }

  function handleChangeWrapper() {
    if (subscription.onStateChange) {
      subscription.onStateChange();
    }
  }

  function isSubscribed() {
    return Boolean(unsubscribe);
  }

  function trySubscribe() {
    if (!unsubscribe) {
      unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
      listeners = createListenerCollection();
    }
  }

  function tryUnsubscribe() {
    if (unsubscribe) {
      unsubscribe();
      unsubscribe = undefined;
      listeners.clear();
      listeners = nullListeners;
    }
  }

  const subscription = {
    addNestedSub,
    notifyNestedSubs,
    handleChangeWrapper,
    isSubscribed,
    trySubscribe,
    tryUnsubscribe,
    getListeners: () => listeners
  };
  return subscription;
}
;// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js
 // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
// subscription callback always has the selector from the latest render commit
// available, otherwise a store update may happen between render and the effect,
// which may cause missed updates; we also must ensure the store subscription
// is created synchronously, otherwise a store update may occur before the
// subscription is created and an inconsistent state may be observed
// Matches logic in React's `shared/ExecutionEnvironment` file

const canUseDOM = !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined');
const useIsomorphicLayoutEffect_useIsomorphicLayoutEffect = canUseDOM ? react.useLayoutEffect : react.useEffect;
;// CONCATENATED MODULE: ./node_modules/react-redux/es/components/connect.js


const _excluded = (/* unused pure expression or super */ null && (["reactReduxForwardedRef"]));

/* eslint-disable valid-jsdoc, @typescript-eslint/no-unused-vars */













let useSyncExternalStore = (/* unused pure expression or super */ null && (notInitialized));
const initializeConnect = fn => {
  useSyncExternalStore = fn;
}; // Define some constant arrays just to avoid re-creating these

const EMPTY_ARRAY = (/* unused pure expression or super */ null && ([null, 0]));
const NO_SUBSCRIPTION_ARRAY = (/* unused pure expression or super */ null && ([null, null])); // Attempts to stringify whatever not-really-a-component value we were given
// for logging in an error message

const stringifyComponent = Comp => {
  try {
    return JSON.stringify(Comp);
  } catch (err) {
    return String(Comp);
  }
};

// This is "just" a `useLayoutEffect`, but with two modifications:
// - we need to fall back to `useEffect` in SSR to avoid annoying warnings
// - we extract this to a separate function to avoid closing over values
//   and causing memory leaks
function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
  useIsomorphicLayoutEffect(() => effectFunc(...effectArgs), dependencies);
} // Effect callback, extracted: assign the latest props values to refs for later usage


function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, // actualChildProps: unknown,
childPropsFromStoreUpdate, notifyNestedSubs) {
  // We want to capture the wrapper props and child props we used for later comparisons
  lastWrapperProps.current = wrapperProps;
  renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update

  if (childPropsFromStoreUpdate.current) {
    childPropsFromStoreUpdate.current = null;
    notifyNestedSubs();
  }
} // Effect callback, extracted: subscribe to the Redux store or nearest connected ancestor,
// check for updates after dispatched actions, and trigger re-renders.


function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, isMounted, childPropsFromStoreUpdate, notifyNestedSubs, // forceComponentUpdateDispatch: React.Dispatch<any>,
additionalSubscribeListener) {
  // If we're not subscribed to the store, nothing to do here
  if (!shouldHandleStateChanges) return () => {}; // Capture values for checking if and when this component unmounts

  let didUnsubscribe = false;
  let lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component

  const checkForUpdates = () => {
    if (didUnsubscribe || !isMounted.current) {
      // Don't run stale listeners.
      // Redux doesn't guarantee unsubscriptions happen until next dispatch.
      return;
    } // TODO We're currently calling getState ourselves here, rather than letting `uSES` do it


    const latestStoreState = store.getState();
    let newChildProps, error;

    try {
      // Actually run the selector with the most recent store state and wrapper props
      // to determine what the child props should be
      newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
    } catch (e) {
      error = e;
      lastThrownError = e;
    }

    if (!error) {
      lastThrownError = null;
    } // If the child props haven't changed, nothing to do here - cascade the subscription update


    if (newChildProps === lastChildProps.current) {
      if (!renderIsScheduled.current) {
        notifyNestedSubs();
      }
    } else {
      // Save references to the new child props.  Note that we track the "child props from store update"
      // as a ref instead of a useState/useReducer because we need a way to determine if that value has
      // been processed.  If this went into useState/useReducer, we couldn't clear out the value without
      // forcing another re-render, which we don't want.
      lastChildProps.current = newChildProps;
      childPropsFromStoreUpdate.current = newChildProps;
      renderIsScheduled.current = true; // TODO This is hacky and not how `uSES` is meant to be used
      // Trigger the React `useSyncExternalStore` subscriber

      additionalSubscribeListener();
    }
  }; // Actually subscribe to the nearest connected ancestor (or store)


  subscription.onStateChange = checkForUpdates;
  subscription.trySubscribe(); // Pull data from the store after first render in case the store has
  // changed since we began.

  checkForUpdates();

  const unsubscribeWrapper = () => {
    didUnsubscribe = true;
    subscription.tryUnsubscribe();
    subscription.onStateChange = null;

    if (lastThrownError) {
      // It's possible that we caught an error due to a bad mapState function, but the
      // parent re-rendered without this component and we're about to unmount.
      // This shouldn't happen as long as we do top-down subscriptions correctly, but
      // if we ever do those wrong, this throw will surface the error in our tests.
      // In that case, throw the error from here so it doesn't get lost.
      throw lastThrownError;
    }
  };

  return unsubscribeWrapper;
} // Reducer initial state creation for our update reducer


const initStateUpdates = () => EMPTY_ARRAY;

function strictEqual(a, b) {
  return a === b;
}
/**
 * Infers the type of props that a connector will inject into a component.
 */


let hasWarnedAboutDeprecatedPureOption = false;
/**
 * Connects a React component to a Redux store.
 *
 * - Without arguments, just wraps the component, without changing the behavior / props
 *
 * - If 2 params are passed (3rd param, mergeProps, is skipped), default behavior
 * is to override ownProps (as stated in the docs), so what remains is everything that's
 * not a state or dispatch prop
 *
 * - When 3rd param is passed, we don't know if ownProps propagate and whether they
 * should be valid component props, because it depends on mergeProps implementation.
 * As such, it is the user's responsibility to extend ownProps interface from state or
 * dispatch props or both when applicable
 *
 * @param mapStateToProps A function that extracts values from state
 * @param mapDispatchToProps Setup for dispatching actions
 * @param mergeProps Optional callback to merge state and dispatch props together
 * @param options Options for configuring the connection
 *
 */

function connect(mapStateToProps, mapDispatchToProps, mergeProps, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure,
  areStatesEqual = strictEqual,
  areOwnPropsEqual = shallowEqual,
  areStatePropsEqual = shallowEqual,
  areMergedPropsEqual = shallowEqual,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef = false,
  // the context consumer to use
  context = ReactReduxContext
} = {}) {
  if (false) {}

  const Context = context;
  const initMapStateToProps = mapStateToPropsFactory(mapStateToProps);
  const initMapDispatchToProps = mapDispatchToPropsFactory(mapDispatchToProps);
  const initMergeProps = mergePropsFactory(mergeProps);
  const shouldHandleStateChanges = Boolean(mapStateToProps);

  const wrapWithConnect = WrappedComponent => {
    if (false) {}

    const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    const displayName = `Connect(${wrappedComponentName})`;
    const selectorFactoryOptions = {
      shouldHandleStateChanges,
      displayName,
      wrappedComponentName,
      WrappedComponent,
      // @ts-ignore
      initMapStateToProps,
      // @ts-ignore
      initMapDispatchToProps,
      initMergeProps,
      areStatesEqual,
      areStatePropsEqual,
      areOwnPropsEqual,
      areMergedPropsEqual
    };

    function ConnectFunction(props) {
      const [propsContext, reactReduxForwardedRef, wrapperProps] = useMemo(() => {
        // Distinguish between actual "data" props that were passed to the wrapper component,
        // and values needed to control behavior (forwarded refs, alternate context instances).
        // To maintain the wrapperProps object reference, memoize this destructuring.
        const {
          reactReduxForwardedRef
        } = props,
              wrapperProps = _objectWithoutPropertiesLoose(props, _excluded);

        return [props.context, reactReduxForwardedRef, wrapperProps];
      }, [props]);
      const ContextToUse = useMemo(() => {
        // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.
        // Memoize the check that determines which context instance we should use.
        return propsContext && propsContext.Consumer && // @ts-ignore
        isContextConsumer( /*#__PURE__*/React.createElement(propsContext.Consumer, null)) ? propsContext : Context;
      }, [propsContext, Context]); // Retrieve the store and ancestor subscription via context, if available

      const contextValue = useContext(ContextToUse); // The store _must_ exist as either a prop or in context.
      // We'll check to see if it _looks_ like a Redux store first.
      // This allows us to pass through a `store` prop that is just a plain value.

      const didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
      const didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);

      if (false) {} // Based on the previous check, one of these must be true


      const store = didStoreComeFromProps ? props.store : contextValue.store;
      const getServerState = didStoreComeFromContext ? contextValue.getServerState : store.getState;
      const childPropsSelector = useMemo(() => {
        // The child props selector needs the store reference as an input.
        // Re-create this selector whenever the store changes.
        return defaultSelectorFactory(store.dispatch, selectorFactoryOptions);
      }, [store]);
      const [subscription, notifyNestedSubs] = useMemo(() => {
        if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.

        const subscription = createSubscription(store, didStoreComeFromProps ? undefined : contextValue.subscription); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `subscription` will then be null. This can
        // probably be avoided if Subscription's listeners logic is changed to not call listeners
        // that have been unsubscribed in the  middle of the notification loop.

        const notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);
        return [subscription, notifyNestedSubs];
      }, [store, didStoreComeFromProps, contextValue]); // Determine what {store, subscription} value should be put into nested context, if necessary,
      // and memoize that value to avoid unnecessary context updates.

      const overriddenContextValue = useMemo(() => {
        if (didStoreComeFromProps) {
          // This component is directly subscribed to a store from props.
          // We don't want descendants reading from this store - pass down whatever
          // the existing context value is from the nearest connected ancestor.
          return contextValue;
        } // Otherwise, put this component's subscription instance into context, so that
        // connected descendants won't update until after this component is done


        return _extends({}, contextValue, {
          subscription
        });
      }, [didStoreComeFromProps, contextValue, subscription]); // Set up refs to coordinate values between the subscription effect and the render logic

      const lastChildProps = useRef();
      const lastWrapperProps = useRef(wrapperProps);
      const childPropsFromStoreUpdate = useRef();
      const renderIsScheduled = useRef(false);
      const isProcessingDispatch = useRef(false);
      const isMounted = useRef(false);
      const latestSubscriptionCallbackError = useRef();
      useIsomorphicLayoutEffect(() => {
        isMounted.current = true;
        return () => {
          isMounted.current = false;
        };
      }, []);
      const actualChildPropsSelector = useMemo(() => {
        const selector = () => {
          // Tricky logic here:
          // - This render may have been triggered by a Redux store update that produced new child props
          // - However, we may have gotten new wrapper props after that
          // If we have new child props, and the same wrapper props, we know we should use the new child props as-is.
          // But, if we have new wrapper props, those might change the child props, so we have to recalculate things.
          // So, we'll use the child props from store update only if the wrapper props are the same as last time.
          if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
            return childPropsFromStoreUpdate.current;
          } // TODO We're reading the store directly in render() here. Bad idea?
          // This will likely cause Bad Things (TM) to happen in Concurrent Mode.
          // Note that we do this because on renders _not_ caused by store updates, we need the latest store state
          // to determine what the child props should be.


          return childPropsSelector(store.getState(), wrapperProps);
        };

        return selector;
      }, [store, wrapperProps]); // We need this to execute synchronously every time we re-render. However, React warns
      // about useLayoutEffect in SSR, so we try to detect environment and fall back to
      // just useEffect instead to avoid the warning, since neither will run anyway.

      const subscribeForReact = useMemo(() => {
        const subscribe = reactListener => {
          if (!subscription) {
            return () => {};
          }

          return subscribeUpdates(shouldHandleStateChanges, store, subscription, // @ts-ignore
          childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, isMounted, childPropsFromStoreUpdate, notifyNestedSubs, reactListener);
        };

        return subscribe;
      }, [subscription]);
      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, childPropsFromStoreUpdate, notifyNestedSubs]);
      let actualChildProps;

      try {
        actualChildProps = useSyncExternalStore( // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
        subscribeForReact, // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
        // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
        actualChildPropsSelector, getServerState ? () => childPropsSelector(getServerState(), wrapperProps) : actualChildPropsSelector);
      } catch (err) {
        if (latestSubscriptionCallbackError.current) {
          ;
          err.message += `\nThe error may be correlated with this previous error:\n${latestSubscriptionCallbackError.current.stack}\n\n`;
        }

        throw err;
      }

      useIsomorphicLayoutEffect(() => {
        latestSubscriptionCallbackError.current = undefined;
        childPropsFromStoreUpdate.current = undefined;
        lastChildProps.current = actualChildProps;
      }); // Now that all that's done, we can finally try to actually render the child component.
      // We memoize the elements for the rendered child component as an optimization.

      const renderedWrappedComponent = useMemo(() => {
        return (
          /*#__PURE__*/
          // @ts-ignore
          React.createElement(WrappedComponent, _extends({}, actualChildProps, {
            ref: reactReduxForwardedRef
          }))
        );
      }, [reactReduxForwardedRef, WrappedComponent, actualChildProps]); // If React sees the exact same element reference as last time, it bails out of re-rendering
      // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.

      const renderedChild = useMemo(() => {
        if (shouldHandleStateChanges) {
          // If this component is subscribed to store updates, we need to pass its own
          // subscription instance down to our descendants. That means rendering the same
          // Context instance, and putting a different value into the context.
          return /*#__PURE__*/React.createElement(ContextToUse.Provider, {
            value: overriddenContextValue
          }, renderedWrappedComponent);
        }

        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    }

    const _Connect = React.memo(ConnectFunction);

    // Add a hacky cast to get the right output type
    const Connect = _Connect;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = ConnectFunction.displayName = displayName;

    if (forwardRef) {
      const _forwarded = React.forwardRef(function forwardConnectRef(props, ref) {
        // @ts-ignore
        return /*#__PURE__*/React.createElement(Connect, _extends({}, props, {
          reactReduxForwardedRef: ref
        }));
      });

      const forwarded = _forwarded;
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return hoistStatics(forwarded, WrappedComponent);
    }

    return hoistStatics(Connect, WrappedComponent);
  };

  return wrapWithConnect;
}

/* harmony default export */ var components_connect = ((/* unused pure expression or super */ null && (connect)));
;// CONCATENATED MODULE: ./node_modules/react-redux/es/components/Provider.js





function Provider({
  store,
  context,
  children,
  serverState
}) {
  const contextValue = (0,react.useMemo)(() => {
    const subscription = Subscription_createSubscription(store);
    return {
      store,
      subscription,
      getServerState: serverState ? () => serverState : undefined
    };
  }, [store, serverState]);
  const previousState = (0,react.useMemo)(() => store.getState(), [store]);
  useIsomorphicLayoutEffect_useIsomorphicLayoutEffect(() => {
    const {
      subscription
    } = contextValue;
    subscription.onStateChange = subscription.notifyNestedSubs;
    subscription.trySubscribe();

    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }

    return () => {
      subscription.tryUnsubscribe();
      subscription.onStateChange = undefined;
    };
  }, [contextValue, previousState]);
  const Context = context || Context_ReactReduxContext; // @ts-ignore 'AnyAction' is assignable to the constraint of type 'A', but 'A' could be instantiated with a different subtype

  return /*#__PURE__*/react.createElement(Context.Provider, {
    value: contextValue
  }, children);
}

/* harmony default export */ var components_Provider = (Provider);
;// CONCATENATED MODULE: ./node_modules/react-redux/es/hooks/useStore.js



/**
 * Hook factory, which creates a `useStore` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useStore` hook bound to the specified context.
 */

function useStore_createStoreHook(context = ReactReduxContext) {
  const useReduxContext = // @ts-ignore
  context === ReactReduxContext ? useDefaultReduxContext : () => useContext(context);
  return function useStore() {
    const {
      store
    } = useReduxContext(); // @ts-ignore

    return store;
  };
}
/**
 * A hook to access the redux store.
 *
 * @returns {any} the redux store
 *
 * @example
 *
 * import React from 'react'
 * import { useStore } from 'react-redux'
 *
 * export const ExampleComponent = () => {
 *   const store = useStore()
 *   return <div>{store.getState()}</div>
 * }
 */

const useStore = /*#__PURE__*/(/* unused pure expression or super */ null && (useStore_createStoreHook()));
;// CONCATENATED MODULE: ./node_modules/react-redux/es/hooks/useDispatch.js


/**
 * Hook factory, which creates a `useDispatch` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useDispatch` hook bound to the specified context.
 */

function createDispatchHook(context = ReactReduxContext) {
  const useStore = // @ts-ignore
  context === ReactReduxContext ? useDefaultStore : createStoreHook(context);
  return function useDispatch() {
    const store = useStore(); // @ts-ignore

    return store.dispatch;
  };
}
/**
 * A hook to access the redux `dispatch` function.
 *
 * @returns {any|function} redux store's `dispatch` function
 *
 * @example
 *
 * import React, { useCallback } from 'react'
 * import { useDispatch } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const dispatch = useDispatch()
 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
 *   return (
 *     <div>
 *       <span>{value}</span>
 *       <button onClick={increaseCounter}>Increase counter</button>
 *     </div>
 *   )
 * }
 */

const useDispatch = /*#__PURE__*/(/* unused pure expression or super */ null && (createDispatchHook()));
;// CONCATENATED MODULE: ./node_modules/react-redux/es/exports.js









;// CONCATENATED MODULE: ./node_modules/react-redux/es/index.js
// The primary entry point assumes we're working with standard ReactDOM/RN, but
// older versions that do not include `useSyncExternalStore` (React 16.9 - 17.x).
// Because of that, the useSyncExternalStore compat shim is needed.






initializeUseSelector(with_selector.useSyncExternalStoreWithSelector);
initializeConnect(shim.useSyncExternalStore); // Enable batched updates in our subscriptions for use
// with standard React renderers (ReactDOM, React Native)

setBatch(react_dom.unstable_batchedUpdates);


;// CONCATENATED MODULE: ./node_modules/redux/es/redux.js


/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
}

// Inlined version of the `symbol-observable` polyfill
var $$observable = (function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
})();

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

// Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
function miniKindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';
  var type = typeof val;

  switch (type) {
    case 'boolean':
    case 'string':
    case 'number':
    case 'symbol':
    case 'function':
      {
        return type;
      }
  }

  if (Array.isArray(val)) return 'array';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  var constructorName = ctorName(val);

  switch (constructorName) {
    case 'Symbol':
    case 'Promise':
    case 'WeakMap':
    case 'WeakSet':
    case 'Map':
    case 'Set':
      return constructorName;
  } // other


  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
}

function ctorName(val) {
  return typeof val.constructor === 'function' ? val.constructor.name : null;
}

function isError(val) {
  return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
}

function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
}

function kindOf(val) {
  var typeOfVal = typeof val;

  if (false) {}

  return typeOfVal;
}

/**
 * @deprecated
 *
 * **We recommend using the `configureStore` method
 * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
 *
 * Redux Toolkit is our recommended approach for writing Redux logic today,
 * including store setup, reducers, data fetching, and more.
 *
 * **For more details, please read this Redux docs page:**
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * `configureStore` from Redux Toolkit is an improved version of `createStore` that
 * simplifies setup and helps avoid common bugs.
 *
 * You should not be using the `redux` core package by itself today, except for learning purposes.
 * The `createStore` method from the core `redux` package will not be removed, but we encourage
 * all users to migrate to using Redux Toolkit for all Redux code.
 *
 * If you want to use `createStore` without this visual deprecation warning, use
 * the `legacy_createStore` import instead:
 *
 * `import { legacy_createStore as createStore} from 'redux'`
 *
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error( true ? formatProdErrorMessage(0) : 0);
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error( true ? formatProdErrorMessage(1) : 0);
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error( true ? formatProdErrorMessage(2) : 0);
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(3) : 0);
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error( true ? formatProdErrorMessage(4) : 0);
    }

    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(5) : 0);
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error( true ? formatProdErrorMessage(6) : 0);
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error( true ? formatProdErrorMessage(7) : 0);
    }

    if (typeof action.type === 'undefined') {
      throw new Error( true ? formatProdErrorMessage(8) : 0);
    }

    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(9) : 0);
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error( true ? formatProdErrorMessage(10) : 0);
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new Error( true ? formatProdErrorMessage(11) : 0);
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[$$observable] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}
/**
 * Creates a Redux store that holds the state tree.
 *
 * **We recommend using `configureStore` from the
 * `@reduxjs/toolkit` package**, which replaces `createStore`:
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

var legacy_createStore = (/* unused pure expression or super */ null && (createStore));

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + kindOf(inputState) + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error( true ? formatProdErrorMessage(12) : 0);
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error( true ? formatProdErrorMessage(13) : 0);
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {}

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (false) {}

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) { var warningMessage; }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var actionType = action && action.type;
        throw new Error( true ? formatProdErrorMessage(14) : 0);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error( true ? formatProdErrorMessage(16) : 0);
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error( true ? formatProdErrorMessage(15) : 0);
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread(_objectSpread({}, store), {}, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if (false) {}



;// CONCATENATED MODULE: ./src/components/root.jsx
const initialState={};const reducer=function(state,action){if(state===void 0){state=initialState;}switch(action.type){default:return state;}};const store=createStore(reducer);const Root=_ref=>{let{children}=_ref;return/*#__PURE__*/react.createElement(components_Provider,{store:store},children);};/* harmony default export */ var root = (Root);
;// CONCATENATED MODULE: ./plugins/render/layout.jsx
const wrapRootElement=_ref=>{let{element}=_ref;return/*#__PURE__*/react.createElement(root,null,element);};const wrapPageElement=_ref2=>{let{element,props}=_ref2;return/*#__PURE__*/react.createElement(components_layout,props,element);};
;// CONCATENATED MODULE: ./plugins/render/gatsby-browser.js


/***/ }),

/***/ 8679:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(9864);

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ 1143:
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {}

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ 9921:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;
exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k};exports.isContextProvider=function(a){return z(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return z(a)===n};exports.isFragment=function(a){return z(a)===e};exports.isLazy=function(a){return z(a)===t};
exports.isMemo=function(a){return z(a)===r};exports.isPortal=function(a){return z(a)===d};exports.isProfiler=function(a){return z(a)===g};exports.isStrictMode=function(a){return z(a)===f};exports.isSuspense=function(a){return z(a)===p};
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};exports.typeOf=z;


/***/ }),

/***/ 9864:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(9921);
} else {}


/***/ }),

/***/ 8359:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b=Symbol.for("react.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),e=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),h=Symbol.for("react.context"),k=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),n=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),t=Symbol.for("react.offscreen"),u;u=Symbol.for("react.module.reference");
function v(a){if("object"===typeof a&&null!==a){var r=a.$$typeof;switch(r){case b:switch(a=a.type,a){case d:case f:case e:case m:case n:return a;default:switch(a=a&&a.$$typeof,a){case k:case h:case l:case q:case p:case g:return a;default:return r}}case c:return r}}}__webpack_unused_export__=h;__webpack_unused_export__=g;__webpack_unused_export__=b;__webpack_unused_export__=l;__webpack_unused_export__=d;__webpack_unused_export__=q;__webpack_unused_export__=p;__webpack_unused_export__=c;__webpack_unused_export__=f;__webpack_unused_export__=e;__webpack_unused_export__=m;
__webpack_unused_export__=n;__webpack_unused_export__=function(){return!1};__webpack_unused_export__=function(){return!1};__webpack_unused_export__=function(a){return v(a)===h};__webpack_unused_export__=function(a){return v(a)===g};__webpack_unused_export__=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===b};__webpack_unused_export__=function(a){return v(a)===l};__webpack_unused_export__=function(a){return v(a)===d};__webpack_unused_export__=function(a){return v(a)===q};__webpack_unused_export__=function(a){return v(a)===p};
__webpack_unused_export__=function(a){return v(a)===c};__webpack_unused_export__=function(a){return v(a)===f};__webpack_unused_export__=function(a){return v(a)===e};__webpack_unused_export__=function(a){return v(a)===m};__webpack_unused_export__=function(a){return v(a)===n};
__webpack_unused_export__=function(a){return"string"===typeof a||"function"===typeof a||a===d||a===f||a===e||a===m||a===n||a===t||"object"===typeof a&&null!==a&&(a.$$typeof===q||a.$$typeof===p||a.$$typeof===g||a.$$typeof===h||a.$$typeof===l||a.$$typeof===u||void 0!==a.getModuleId)?!0:!1};__webpack_unused_export__=v;


/***/ }),

/***/ 2973:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  /* unused reexport */ __webpack_require__(8359);
} else {}


/***/ }),

/***/ 9730:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;
/**
 * @license React
 * react-server-dom-webpack.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var k=__webpack_require__(7294),l={stream:!0},n=new Map,p=Symbol.for("react.element"),q=Symbol.for("react.lazy"),r=Symbol.for("react.default_value"),t=k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ContextRegistry;function u(a){t[a]||(t[a]=k.createServerContext(a,r));return t[a]}function v(a,b,c){this._status=a;this._value=b;this._response=c}v.prototype.then=function(a){0===this._status?(null===this._value&&(this._value=[]),this._value.push(a)):a()};
function w(a){switch(a._status){case 3:return a._value;case 1:var b=JSON.parse(a._value,a._response._fromJSON);a._status=3;return a._value=b;case 2:b=a._value;for(var c=b.chunks,d=0;d<c.length;d++){var e=n.get(c[d]);if(null!==e)throw e;}c=__webpack_require__(b.id);b="*"===b.name?c:""===b.name?c.__esModule?c.default:c:c[b.name];a._status=3;return a._value=b;case 0:throw a;default:throw a._value;}}function x(){var a=y(this,0);return w(a)}function z(a,b){return new v(3,b,a)}
function A(a){if(null!==a)for(var b=0;b<a.length;b++)(0,a[b])()}function C(a,b){if(0===a._status){var c=a._value;a._status=4;a._value=b;A(c)}}function D(a,b){a._chunks.forEach(function(a){C(a,b)})}function y(a,b){var c=a._chunks,d=c.get(b);d||(d=new v(0,null,a),c.set(b,d));return d}
function E(a,b,c){switch(c[0]){case "$":if("$"===c)return p;if("$"===c[1]||"@"===c[1])return c.substring(1);b=parseInt(c.substring(1),16);a=y(a,b);return w(a);case "@":return b=parseInt(c.substring(1),16),a=y(a,b),{$$typeof:q,_payload:a,_init:w}}return c}function F(a){D(a,Error("Connection closed."))}
function G(a,b){if(""!==b){var c=b[0],d=b.indexOf(":",1),e=parseInt(b.substring(1,d),16);d=b.substring(d+1);switch(c){case "J":b=a._chunks;(c=b.get(e))?0===c._status&&(a=c._value,c._status=1,c._value=d,A(a)):b.set(e,new v(1,d,a));break;case "M":b=a._chunks;c=b.get(e);d=JSON.parse(d,a._fromJSON);var f=a._bundlerConfig;d=f?f[d.id][d.name]:d;f=d.chunks;for(var h=0;h<f.length;h++){var g=f[h];if(void 0===n.get(g)){var B=__webpack_require__.e(g),m=n.set.bind(n,g,null),J=n.set.bind(n,g);B.then(m,J);n.set(g,
B)}}c?0===c._status&&(a=c._value,c._status=2,c._value=d,A(a)):b.set(e,new v(2,d,a));break;case "P":a._chunks.set(e,z(a,u(d).Provider));break;case "S":c=JSON.parse(d);a._chunks.set(e,z(a,Symbol.for(c)));break;case "E":b=JSON.parse(d);c=Error(b.message);c.stack=b.stack;b=a._chunks;(d=b.get(e))?C(d,c):b.set(e,new v(4,c,a));break;default:throw Error("Error parsing the data. It's probably an error code or network corruption.");}}}
function H(a){return function(b,c){return"string"===typeof c?E(a,this,c):"object"===typeof c&&null!==c?(b=c[0]===p?{$$typeof:p,type:c[1],key:c[2],ref:null,props:c[3],_owner:null}:c,b):c}}function I(a){var b=new TextDecoder,c=new Map;a={_bundlerConfig:a,_chunks:c,readRoot:x,_partialRow:"",_stringDecoder:b};a._fromJSON=H(a);return a}
function K(a,b){function c(b){var h=b.value;if(b.done)F(a);else{b=h;h=a._stringDecoder;for(var g=b.indexOf(10);-1<g;){var f=a._partialRow;var m=b.subarray(0,g);m=h.decode(m);G(a,f+m);a._partialRow="";b=b.subarray(g+1);g=b.indexOf(10)}a._partialRow+=h.decode(b,l);return e.read().then(c,d)}}function d(b){D(a,b)}var e=b.getReader();e.read().then(c,d)}__webpack_unused_export__=function(a,b){var c=I(b&&b.moduleMap?b.moduleMap:null);a.then(function(a){K(c,a.body)},function(a){D(c,a)});return c};
exports.createFromReadableStream=function(a,b){b=I(b&&b.moduleMap?b.moduleMap:null);K(b,a);return b};
__webpack_unused_export__=function(a,b){function c(){for(var b=a.responseText,c=f,d=b.indexOf("\n",c);-1<d;)c=e._partialRow+b.substring(c,d),G(e,c),e._partialRow="",c=d+1,d=b.indexOf("\n",c);e._partialRow+=b.substring(c);f=b.length}function d(){D(e,new TypeError("Network error"))}var e=I(b&&b.moduleMap?b.moduleMap:null),f=0;a.addEventListener("progress",c);a.addEventListener("load",function(){c();F(e)});a.addEventListener("error",d);a.addEventListener("abort",d);a.addEventListener("timeout",d);return e};


/***/ }),

/***/ 904:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(9730);
} else {}


/***/ }),

/***/ 3250:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e=__webpack_require__(7294);function h(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var k="function"===typeof Object.is?Object.is:h,l=e.useState,m=e.useEffect,n=e.useLayoutEffect,p=e.useDebugValue;function q(a,b){var d=b(),f=l({inst:{value:d,getSnapshot:b}}),c=f[0].inst,g=f[1];n(function(){c.value=d;c.getSnapshot=b;r(c)&&g({inst:c})},[a,d,b]);m(function(){r(c)&&g({inst:c});return a(function(){r(c)&&g({inst:c})})},[a]);p(d);return d}
function r(a){var b=a.getSnapshot;a=a.value;try{var d=b();return!k(a,d)}catch(f){return!0}}function t(a,b){return b()}var u="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?t:q;exports.useSyncExternalStore=void 0!==e.useSyncExternalStore?e.useSyncExternalStore:u;


/***/ }),

/***/ 139:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var h=__webpack_require__(7294),n=__webpack_require__(1688);function p(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var q="function"===typeof Object.is?Object.is:p,r=n.useSyncExternalStore,t=h.useRef,u=h.useEffect,v=h.useMemo,w=h.useDebugValue;
exports.useSyncExternalStoreWithSelector=function(a,b,e,l,g){var c=t(null);if(null===c.current){var f={hasValue:!1,value:null};c.current=f}else f=c.current;c=v(function(){function a(a){if(!c){c=!0;d=a;a=l(a);if(void 0!==g&&f.hasValue){var b=f.value;if(g(b,a))return k=b}return k=a}b=k;if(q(d,a))return b;var e=l(a);if(void 0!==g&&g(b,e))return b;d=a;return k=e}var c=!1,d,k,m=void 0===e?null:e;return[function(){return a(b())},null===m?void 0:function(){return a(m())}]},[b,e,l,g]);var d=r(a,c[0],c[1]);
u(function(){f.hasValue=!0;f.value=d},[d]);w(d);return d};


/***/ }),

/***/ 1688:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(3250);
} else {}


/***/ }),

/***/ 2798:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(139);
} else {}


/***/ }),

/***/ 6115:
/***/ (function(module) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 7867:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(6015);
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  setPrototypeOf(subClass, superClass);
}
module.exports = _inheritsLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 4836:
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 6015:
/***/ (function(module) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 2911:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

const PartytownSnippet = "/* Partytown 0.5.4 - MIT builder.io */\n!function(t,e,n,i,r,o,a,d,s,c,p,l){function u(){l||(l=1,\"/\"==(a=(o.lib||\"/~partytown/\")+(o.debug?\"debug/\":\"\"))[0]&&(s=e.querySelectorAll('script[type=\"text/partytown\"]'),i!=t?i.dispatchEvent(new CustomEvent(\"pt1\",{detail:t})):(d=setTimeout(w,1e4),e.addEventListener(\"pt0\",f),r?h(1):n.serviceWorker?n.serviceWorker.register(a+(o.swPath||\"partytown-sw.js\"),{scope:a}).then((function(t){t.active?h():t.installing&&t.installing.addEventListener(\"statechange\",(function(t){\"activated\"==t.target.state&&h()}))}),console.error):w())))}function h(t){c=e.createElement(t?\"script\":\"iframe\"),t||(c.setAttribute(\"style\",\"display:block;width:0;height:0;border:0;visibility:hidden\"),c.setAttribute(\"aria-hidden\",!0)),c.src=a+\"partytown-\"+(t?\"atomics.js?v=0.5.4\":\"sandbox-sw.html?\"+Date.now()),e.body.appendChild(c)}function w(t,n){for(f(),t=0;t<s.length;t++)(n=e.createElement(\"script\")).innerHTML=s[t].innerHTML,e.head.appendChild(n);c&&c.parentNode.removeChild(c)}function f(){clearTimeout(d)}o=t.partytown||{},i==t&&(o.forward||[]).map((function(e){p=t,e.split(\".\").map((function(e,n,i){p=p[i[n]]=n+1<i.length?\"push\"==i[n+1]?[]:p[i[n]]||{}:function(){(t._ptf=t._ptf||[]).push(i,arguments)}}))})),\"complete\"==e.readyState?u():(t.addEventListener(\"DOMContentLoaded\",u),t.addEventListener(\"load\",u))}(window,document,navigator,top,window.crossOriginIsolated);";

const createSnippet = (config, snippetCode) => {
    const { forward = [], ...filteredConfig } = config || {};
    const configStr = JSON.stringify(filteredConfig, (k, v) => {
        if (typeof v === 'function') {
            v = String(v);
            if (v.startsWith(k + '(')) {
                v = 'function ' + v;
            }
        }
        return v;
    });
    return [
        `!(function(w,p,f,c){`,
        Object.keys(filteredConfig).length > 0
            ? `c=w[p]=Object.assign(w[p]||{},${configStr});`
            : `c=w[p]=w[p]||{};`,
        `c[f]=(c[f]||[])`,
        forward.length > 0 ? `.concat(${JSON.stringify(forward)})` : ``,
        `})(window,'partytown','forward');`,
        snippetCode,
    ].join('');
};

/**
 * The `type` attribute for Partytown scripts, which does two things:
 *
 * 1. Prevents the `<script>` from executing on the main thread.
 * 2. Is used as a selector so the Partytown library can find all scripts to execute in a web worker.
 *
 * @public
 */
const SCRIPT_TYPE = `text/partytown`;

/**
 * Function that returns the Partytown snippet as a string, which can be
 * used as the innerHTML of the inlined Partytown script in the head.
 *
 * @public
 */
const partytownSnippet = (config) => createSnippet(config, PartytownSnippet);

exports.SCRIPT_TYPE = SCRIPT_TYPE;
exports.partytownSnippet = partytownSnippet;


/***/ }),

/***/ 4578:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _inheritsLoose; }
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9611);

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(subClass, superClass);
}

/***/ }),

/***/ 9611:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _setPrototypeOf; }
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ 5785:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ _toConsumableArray; }
});

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

/***/ }),

/***/ 7896:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseContext": function() { return /* binding */ m; },
/* harmony export */   "Link": function() { return /* binding */ A; },
/* harmony export */   "Location": function() { return /* binding */ G; },
/* harmony export */   "LocationContext": function() { return /* binding */ d; },
/* harmony export */   "LocationProvider": function() { return /* binding */ z; },
/* harmony export */   "Match": function() { return /* binding */ Q; },
/* harmony export */   "Redirect": function() { return /* binding */ R; },
/* harmony export */   "Router": function() { return /* binding */ oe; },
/* harmony export */   "ServerLocation": function() { return /* binding */ J; },
/* harmony export */   "createHistory": function() { return /* binding */ i; },
/* harmony export */   "createMemorySource": function() { return /* binding */ c; },
/* harmony export */   "globalHistory": function() { return /* binding */ l; },
/* harmony export */   "insertParams": function() { return /* binding */ P; },
/* harmony export */   "isRedirect": function() { return /* binding */ g; },
/* harmony export */   "match": function() { return /* binding */ x; },
/* harmony export */   "navigate": function() { return /* binding */ p; },
/* harmony export */   "pick": function() { return /* binding */ w; },
/* harmony export */   "redirectTo": function() { return /* binding */ v; },
/* harmony export */   "resolve": function() { return /* binding */ k; },
/* harmony export */   "shallowCompare": function() { return /* binding */ D; },
/* harmony export */   "startsWith": function() { return /* binding */ C; },
/* harmony export */   "useBaseContext": function() { return /* binding */ f; },
/* harmony export */   "useLocation": function() { return /* binding */ se; },
/* harmony export */   "useLocationContext": function() { return /* binding */ y; },
/* harmony export */   "useMatch": function() { return /* binding */ ue; },
/* harmony export */   "useNavigate": function() { return /* binding */ ie; },
/* harmony export */   "useParams": function() { return /* binding */ ce; },
/* harmony export */   "validateRedirect": function() { return /* binding */ T; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5697);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1143);
function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t.indexOf(r=a[n])>=0||(o[r]=e[r]);return o}const s=e=>{const{search:t,hash:r,href:n,origin:o,protocol:a,host:s,hostname:i,port:c}=e.location;let{pathname:l}=e.location;return!l&&n&&u&&(l=new URL(n).pathname),{pathname:encodeURI(decodeURI(l)),search:t,hash:r,href:n,origin:o,protocol:a,host:s,hostname:i,port:c,state:e.history.state,key:e.history.state&&e.history.state.key||"initial"}},i=(e,t)=>{let r=[],n=s(e),a=!1,i=()=>{};return{get location(){return n},get transitioning(){return a},_onTransitionComplete(){a=!1,i()},listen(t){r.push(t);const o=()=>{n=s(e),t({location:n,action:"POP"})};return e.addEventListener("popstate",o),()=>{e.removeEventListener("popstate",o),r=r.filter(e=>e!==t)}},navigate(t,{state:c,replace:u=!1}={}){if("number"==typeof t)e.history.go(t);else{c=o({},c,{key:Date.now()+""});try{a||u?e.history.replaceState(c,null,t):e.history.pushState(c,null,t)}catch(r){e.location[u?"replace":"assign"](t)}}n=s(e),a=!0;const l=new Promise(e=>i=e);return r.forEach(e=>e({location:n,action:"PUSH"})),l}}},c=(e="/")=>{const t=e.indexOf("?"),r={pathname:t>-1?e.substr(0,t):e,search:t>-1?e.substr(t):""};let n=0;const o=[r],a=[null];return{get location(){return o[n]},addEventListener(e,t){},removeEventListener(e,t){},history:{get entries(){return o},get index(){return n},get state(){return a[n]},pushState(e,t,r){const[s,i=""]=r.split("?");n++,o.push({pathname:s,search:i.length?`?${i}`:i}),a.push(e)},replaceState(e,t,r){const[s,i=""]=r.split("?");o[n]={pathname:s,search:i},a[n]=e},go(e){const t=n+e;t<0||t>a.length-1||(n=t)}}}},u=!("undefined"==typeof window||!window.document||!window.document.createElement),l=i(u?window:c()),{navigate:p}=l;function h(e,r){return react__WEBPACK_IMPORTED_MODULE_0__.createServerContext?((e,r=null)=>(globalThis.__SERVER_CONTEXT||(globalThis.__SERVER_CONTEXT={}),globalThis.__SERVER_CONTEXT[e]||(globalThis.__SERVER_CONTEXT[e]=react__WEBPACK_IMPORTED_MODULE_0__.createServerContext(e,r)),globalThis.__SERVER_CONTEXT[e]))(e,r):react__WEBPACK_IMPORTED_MODULE_0__.createContext(r)}const m=h("Base",{baseuri:"/",basepath:"/"}),d=h("Location"),f=()=>react__WEBPACK_IMPORTED_MODULE_0__.useContext(m),y=()=>react__WEBPACK_IMPORTED_MODULE_0__.useContext(d);function E(e){this.uri=e}const g=e=>e instanceof E,v=e=>{throw new E(e)};function b(t){const{to:r,replace:n=!0,state:o,noThrow:a,baseuri:s}=t;react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{Promise.resolve().then(()=>{const e=k(r,s);p(P(e,t),{replace:n,state:o})})},[]);const i=k(r,s);return a||v(P(i,t)),null}const R=t=>{const r=y(),{baseuri:n}=f();/*#__PURE__*/return react__WEBPACK_IMPORTED_MODULE_0__.createElement(b,o({},r,{baseuri:n},t))};R.propTypes={from:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,to:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired};const C=(e,t)=>e.substr(0,t.length)===t,w=(e,t)=>{let r,o;const[a]=t.split("?"),s=N(a),i=""===s[0],c=j(e);for(let e=0,a=c.length;e<a;e++){let a=!1;const u=c[e].route;if(u.default){o={route:u,params:{},uri:t};continue}const l=N(u.path),p={},h=Math.max(s.length,l.length);let m=0;for(;m<h;m++){const e=l[m],t=s[m];if($(e)){p[e.slice(1)||"*"]=s.slice(m).map(decodeURIComponent).join("/");break}if(void 0===t){a=!0;break}const r=O.exec(e);if(r&&!i){const e=-1===U.indexOf(r[1]);invariant__WEBPACK_IMPORTED_MODULE_1__(e,`<Router> dynamic segment "${r[1]}" is a reserved name. Please use a different name in path "${u.path}".`);const o=decodeURIComponent(t);p[r[1]]=o}else if(e!==t){a=!0;break}}if(!a){r={route:u,params:p,uri:"/"+s.slice(0,m).join("/")};break}}return r||o||null},x=(e,t)=>w([{path:e}],t),k=(e,t)=>{if(C(e,"/"))return e;const[r,n]=e.split("?"),[o]=t.split("?"),a=N(r),s=N(o);if(""===a[0])return L(o,n);if(!C(a[0],".")){const e=s.concat(a).join("/");return L(("/"===o?"":"/")+e,n)}const i=s.concat(a),c=[];for(let e=0,t=i.length;e<t;e++){const t=i[e];".."===t?c.pop():"."!==t&&c.push(t)}return L("/"+c.join("/"),n)},P=(e,t)=>{const[r,n=""]=e.split("?");let o="/"+N(r).map(e=>{const r=O.exec(e);return r?t[r[1]]:e}).join("/");const{location:{search:a=""}={}}=t,s=a.split("?")[1]||"";return o=L(o,n,s),o},T=(e,t)=>{const r=e=>_(e);return N(e).filter(r).sort().join("/")===N(t).filter(r).sort().join("/")},O=/^:(.+)/,_=e=>O.test(e),$=e=>e&&"*"===e[0],S=(e,t)=>({route:e,score:e.default?0:N(e.path).reduce((e,t)=>(e+=4,(e=>""===e)(t)?e+=1:_(t)?e+=2:$(t)?e-=5:e+=3,e),0),index:t}),j=e=>e.map(S).sort((e,t)=>e.score<t.score?1:e.score>t.score?-1:e.index-t.index),N=e=>e.replace(/(^\/+|\/+$)/g,"").split("/"),L=(e,...t)=>e+((t=t.filter(e=>e&&e.length>0))&&t.length>0?`?${t.join("&")}`:""),U=["uri","path"],D=(e,t)=>{const r=Object.keys(e);return r.length===Object.keys(t).length&&r.every(r=>t.hasOwnProperty(r)&&e[r]===t[r])},M=e=>e.replace(/(^\/+|\/+$)/g,""),I=t=>r=>{if(!r)return null;if(r.type===react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&r.props.children)return react__WEBPACK_IMPORTED_MODULE_0__.Children.map(r.props.children,I(t));if(invariant__WEBPACK_IMPORTED_MODULE_1__(r.props.path||r.props.default||r.type===R,`<Router>: Children of <Router> must have a \`path\` or \`default\` prop, or be a \`<Redirect>\`. None found on element type \`${r.type}\``),invariant__WEBPACK_IMPORTED_MODULE_1__(!!(r.type!==R||r.props.from&&r.props.to),`<Redirect from="${r.props.from}" to="${r.props.to}"/> requires both "from" and "to" props when inside a <Router>.`),invariant__WEBPACK_IMPORTED_MODULE_1__(!(r.type===R&&!T(r.props.from,r.props.to)),`<Redirect from="${r.props.from} to="${r.props.to}"/> has mismatched dynamic segments, ensure both paths have the exact same dynamic segments.`),r.props.default)return{value:r,default:!0};const o=r.type===R?r.props.from:r.props.path,a="/"===o?t:`${M(t)}/${M(o)}`;return{value:r,default:r.props.default,path:r.props.children?`${M(a)}/*`:a}},V=["innerRef"],q=["to","state","replace","getProps"],X=["key"];let{forwardRef:B}=/*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2)));void 0===B&&(B=e=>e);const K=()=>{},A=B((t,r)=>{let{innerRef:n}=t,s=a(t,V);const{baseuri:i}=f(),{location:c}=y(),{to:u,state:l,replace:h,getProps:m=K}=s,d=a(s,q),E=k(u,i),g=encodeURI(E),v=c.pathname===g,b=C(c.pathname,g);/*#__PURE__*/return react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",o({ref:r||n,"aria-current":v?"page":void 0},d,m({isCurrent:v,isPartiallyCurrent:b,href:E,location:c}),{href:E,onClick:e=>{if(d.onClick&&d.onClick(e),(e=>!e.defaultPrevented&&0===e.button&&!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey))(e)){e.preventDefault();let t=h;if("boolean"!=typeof h&&v){const e=a(o({},c.state),X);t=D(o({},l),e)}p(E,{state:l,replace:t})}}}))});A.displayName="Link",A.propTypes={to:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired};class F extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(...e){super(...e),this.displayName="ReactUseErrorBoundary"}componentDidCatch(...e){this.setState({}),this.props.onError(...e)}render(){return this.props.children}}const W=react__WEBPACK_IMPORTED_MODULE_0__.createContext({componentDidCatch:{current:void 0},error:void 0,setError:()=>!1});function H({children:t}){const[r,n]=react__WEBPACK_IMPORTED_MODULE_0__.useState(),o=react__WEBPACK_IMPORTED_MODULE_0__.useRef(),a=react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>({componentDidCatch:o,error:r,setError:n}),[r]);/*#__PURE__*/return react__WEBPACK_IMPORTED_MODULE_0__.createElement(W.Provider,{value:a},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(F,{error:r,onError:(e,t)=>{n(e),null==o.current||o.current(e,t)}},t))}H.displayName="ReactUseErrorBoundaryContext";const z=function(t){var r,n;function a(r){/*#__PURE__*/return react__WEBPACK_IMPORTED_MODULE_0__.createElement(H,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(t,o({key:"WrappedComponent"},r)))}return a.displayName=`WithErrorBoundary(${null!=(r=null!=(n=t.displayName)?n:t.name)?r:"Component"})`,a}(({history:t=l,children:r})=>{const{location:n}=t,[o,a]=react__WEBPACK_IMPORTED_MODULE_0__.useState({location:n}),[s]=function(t){const r=react__WEBPACK_IMPORTED_MODULE_0__.useContext(W);r.componentDidCatch.current=void 0;const n=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(()=>{r.setError(void 0)},[]);return[r.error,n]}();if(react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{t._onTransitionComplete()},[o.location]),react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{let e=!1;const r=t.listen(({location:t})=>{Promise.resolve().then(()=>{requestAnimationFrame(()=>{e||a({location:t})})})});return()=>{e=!0,r()}},[]),s){if(!g(s))throw s;p(s.uri,{replace:!0})}/*#__PURE__*/return react__WEBPACK_IMPORTED_MODULE_0__.createElement(d.Provider,{value:o},"function"==typeof r?r(o):r||null)}),G=({children:t})=>{const r=y();return r?t(r):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(z,null,t)},J=({url:t,children:r})=>{const n=t.indexOf("?");let o,a="";return n>-1?(o=t.substring(0,n),a=t.substring(n)):o=t,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(d.Provider,{value:{location:{pathname:o,search:a,hash:""}}},r)},Q=({path:e,children:t})=>{const{baseuri:r}=f(),{location:n}=y(),a=k(e,r),s=x(a,n.pathname);return t({location:n,match:s?o({},s.params,{uri:s.uri,path:e}):null})},Y=["uri","location","component"],Z=["children","style","component","uri","location"],ee=t=>{let{uri:r,location:n,component:s}=t,i=a(t,Y);/*#__PURE__*/return react__WEBPACK_IMPORTED_MODULE_0__.createElement(re,o({},i,{component:s,uri:r,location:n}))};let te=0;const re=t=>{let{children:r,style:n,component:s="div",uri:i,location:c}=t,u=a(t,Z);const l=react__WEBPACK_IMPORTED_MODULE_0__.useRef(),p=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!0),h=react__WEBPACK_IMPORTED_MODULE_0__.useRef(i),m=react__WEBPACK_IMPORTED_MODULE_0__.useRef(c.pathname),d=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1);react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>(te++,f(),()=>{te--,0===te&&(p.current=!0)}),[]),react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{let e=!1,t=!1;i!==h.current&&(h.current=i,e=!0),c.pathname!==m.current&&(m.current=c.pathname,t=!0),d.current=e||t&&c.pathname===i,d.current&&f()},[i,c]);const f=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(()=>{var e; true&&(p.current?p.current=!1:(e=l.current,d.current&&e&&e.focus()))},[]);/*#__PURE__*/return react__WEBPACK_IMPORTED_MODULE_0__.createElement(s,o({style:o({outline:"none"},n),tabIndex:"-1",ref:l},u),r)},ne=["location","primary","children","basepath","baseuri","component"],oe=t=>{const r=f(),n=y();/*#__PURE__*/return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ae,o({},r,n,t))};function ae(t){const{location:r,primary:n=!0,children:s,basepath:i,component:c="div"}=t,u=a(t,ne),l=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(s).reduce((e,t)=>{const r=I(i)(t);return e.concat(r)},[]),{pathname:p}=r,h=w(l,p);if(h){const{params:t,uri:a,route:s,route:{value:l}}=h,p=s.default?i:s.path.replace(/\*$/,""),d=o({},t,{uri:a,location:r}),f=react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(l,d,l.props.children?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(oe,{location:r,primary:n},l.props.children):void 0),y=n?ee:c,E=n?o({uri:a,location:r,component:c},u):u;/*#__PURE__*/return react__WEBPACK_IMPORTED_MODULE_0__.createElement(m.Provider,{value:{baseuri:a,basepath:p}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(y,E,f))}return null}const se=()=>{const e=y();if(!e)throw new Error("useLocation hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");return e.location},ie=()=>{throw new Error("useNavigate is removed. Use import { navigate } from 'gatsby' instead")},ce=()=>{const e=f();if(!e)throw new Error("useParams hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");const t=se(),r=x(e.basepath,t.pathname);return r?r.params:null},ue=e=>{if(!e)throw new Error("useMatch(path: string) requires an argument of a string to match against");const t=f();if(!t)throw new Error("useMatch hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");const r=se(),n=k(e,t.baseuri),a=x(n,r.pathname);return a?o({},a.params,{uri:a.uri,path:e}):null};
//# sourceMappingURL=index.modern.mjs.map


/***/ }),

/***/ 1562:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c4": function() { return /* binding */ E; },
/* harmony export */   "cP": function() { return /* binding */ a; },
/* harmony export */   "rU": function() { return /* binding */ P; }
/* harmony export */ });
/* unused harmony exports withAssetPrefix, withPrefix */
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5697);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7896);
/* harmony import */ var gatsby_page_utils_apply_trailing_slash_option__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4506);
"use client"
;function i(){return i=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i.apply(this,arguments)}function a(t){let e=t||"/",n="",r="";const o=e.indexOf("#");-1!==o&&(r=e.slice(o),e=e.slice(0,o));const s=e.indexOf("?");return-1!==s&&(n=e.slice(s),e=e.slice(0,s)),{pathname:e,search:"?"===n?"":n,hash:"#"===r?"":r}}const c=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=t=>{if("string"==typeof t)return!(t=>c.test(t))(t)},p=()=> false?0:"";function h(t,e=(()=> false?0:"")()){var n;if(!l(t))return t;if(t.startsWith("./")||t.startsWith("../"))return t;const r=null!=(n=null!=e?e:p())?n:"/";return`${null!=r&&r.endsWith("/")?r.slice(0,-1):r}${t.startsWith("/")?t:`/${t}`}`}const f=t=>null==t?void 0:t.startsWith("/"),u=()=> true?"always":0;function _(t,e){const{pathname:n,search:r,hash:o}=a(t);return`${(0,gatsby_page_utils_apply_trailing_slash_option__WEBPACK_IMPORTED_MODULE_2__/* .applyTrailingSlashOption */ .H)(n,e)}${r}${o}`}const d=(t,e)=>"number"==typeof t?t:l(t)?f(t)?function(t){const e=h(t),n=u();return"always"===n||"never"===n?_(e,n):e}(t):function(t,e){if(f(t))return t;const r=u(),o=(0,_gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_1__.resolve)(t,e);return"always"===r||"never"===r?_(o,r):o}(t,e):t,m=["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","partiallyActive","state","replace","_location"];function y(t){return h(t,p())}const v={activeClassName:prop_types__WEBPACK_IMPORTED_MODULE_3__.string,activeStyle:prop_types__WEBPACK_IMPORTED_MODULE_3__.object,partiallyActive:prop_types__WEBPACK_IMPORTED_MODULE_3__.bool};function b(t){/*#__PURE__*/return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_1__.Location,null,({location:n})=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(w,i({},t,{_location:n})))}class w extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(t){super(t),this.defaultGetProps=({isPartiallyCurrent:t,isCurrent:e})=>(this.props.partiallyActive?t:e)?{className:[this.props.className,this.props.activeClassName].filter(Boolean).join(" "),style:i({},this.props.style,this.props.activeStyle)}:null;let e=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(e=!0),this.state={IOSupported:e},this.abortPrefetch=null,this.handleRef=this.handleRef.bind(this)}_prefetch(){let t=window.location.pathname+window.location.search;this.props._location&&this.props._location.pathname&&(t=this.props._location.pathname+this.props._location.search);const e=a(d(this.props.to,t)),n=e.pathname+e.search;if(t!==n)return ___loader.enqueue(n)}componentWillUnmount(){if(!this.io)return;const{instance:t,el:e}=this.io;this.abortPrefetch&&this.abortPrefetch.abort(),t.unobserve(e),t.disconnect()}handleRef(t){this.props.innerRef&&Object.prototype.hasOwnProperty.call(this.props.innerRef,"current")?this.props.innerRef.current=t:this.props.innerRef&&this.props.innerRef(t),this.state.IOSupported&&t&&(this.io=((t,e)=>{const n=new window.IntersectionObserver(n=>{n.forEach(n=>{t===n.target&&e(n.isIntersecting||n.intersectionRatio>0)})});return n.observe(t),{instance:n,el:t}})(t,t=>{t?this.abortPrefetch=this._prefetch():this.abortPrefetch&&this.abortPrefetch.abort()}))}render(){const t=this.props,{to:n,getProps:r=this.defaultGetProps,onClick:s,onMouseEnter:c,state:p,replace:h,_location:f}=t,u=function(t,e){if(null==t)return{};var n,r,o={},s=Object.keys(t);for(r=0;r<s.length;r++)e.indexOf(n=s[r])>=0||(o[n]=t[n]);return o}(t,m); true||0;const _=d(n,f.pathname);return l(_)?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_1__.Link,i({to:_,state:p,getProps:r,innerRef:this.handleRef,onMouseEnter:t=>{c&&c(t);const e=a(_);___loader.hovering(e.pathname+e.search)},onClick:t=>{if(s&&s(t),!(0!==t.button||this.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){t.preventDefault();let e=h;const n=encodeURI(_)===f.pathname;"boolean"!=typeof h&&n&&(e=!0),window.___navigate(_,{state:p,replace:e})}return!0}},u)):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",i({href:_},u))}}w.propTypes=i({},v,{onClick:prop_types__WEBPACK_IMPORTED_MODULE_3__.func,to:prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,replace:prop_types__WEBPACK_IMPORTED_MODULE_3__.bool,state:prop_types__WEBPACK_IMPORTED_MODULE_3__.object});const P=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((t,n)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(b,i({innerRef:n},t))),E=(t,e)=>{window.___navigate(d(t,window.location.pathname),e)};
//# sourceMappingURL=index.modern.mjs.map


/***/ }),

/***/ 3521:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Script": function() { return /* binding */ f; },
/* harmony export */   "ScriptStrategy": function() { return /* binding */ c; },
/* harmony export */   "collectedScriptsByPage": function() { return /* binding */ l; },
/* harmony export */   "scriptCache": function() { return /* binding */ u; },
/* harmony export */   "scriptCallbackCache": function() { return /* binding */ d; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7896);
"use client"
;function o(){return o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}const a=new Map,l={get:t=>a.get(t)||[],set(t,e){const n=a.get(t)||[];n.push(e),a.set(t,n)},delete(t){a.delete(t)}},s="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(t){const e=Date.now();return setTimeout(function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})},1)};var c;!function(t){t.postHydrate="post-hydrate",t.idle="idle",t.offMainThread="off-main-thread"}(c||(c={}));const i=new Set(["src","strategy","dangerouslySetInnerHTML","children","onLoad","onError"]),u=new Set,d=new Map;function f(e){/*#__PURE__*/return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_1__.Location,null,()=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(p,e))}function p(n){const{src:a,strategy:i=c.postHydrate}=n||{},{pathname:u}=(0,_gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_1__.useLocation)();if((0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{let t;switch(i){case c.postHydrate:t=y(n);break;case c.idle:s(()=>{t=y(n)});break;case c.offMainThread:{const t=b(n);l.set(u,t)}}return()=>{const{script:e,loadCallback:n,errorCallback:r}=t||{};n&&(null==e||e.removeEventListener("load",n)),r&&(null==e||e.removeEventListener("error",r)),null==e||e.remove()}},[]),i===c.offMainThread){const e=m(n),r=b(n);return"undefined"==typeof window&&l.set(u,r),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("script",e?o({type:"text/partytown","data-strategy":i,crossOrigin:"anonymous"},r,{dangerouslySetInnerHTML:{__html:m(n)}}):o({type:"text/partytown",src:h(a),"data-strategy":i,crossOrigin:"anonymous"},r))}return null}function y(t){const{id:e,src:n,strategy:r=c.postHydrate,onLoad:a,onError:l}=t||{},s=e||n,i=["load","error"],f={load:a,error:l};if(s){for(const t of i)if(null!=f&&f[t]){var p;const e=d.get(s)||{},{callbacks:n=[]}=(null==e?void 0:e[t])||{};var y,h;n.push(null==f?void 0:f[t]),null!=e&&null!=(p=e[t])&&p.event?null==f||null==(y=f[t])||y.call(f,null==e||null==(h=e[t])?void 0:h.event):d.set(s,o({},e,{[t]:{callbacks:n}}))}if(u.has(s))return null}const v=m(t),k=b(t),w=document.createElement("script");e&&(w.id=e),w.dataset.strategy=r;for(const[t,e]of Object.entries(k))w.setAttribute(t,e);v&&(w.textContent=v),n&&(w.src=n);const C={};if(s){for(const t of i){const e=e=>g(e,s,t);w.addEventListener(t,e),C[`${t}Callback`]=e}u.add(s)}return document.body.appendChild(w),{script:w,loadCallback:C.loadCallback,errorCallback:C.errorCallback}}function m(t){const{dangerouslySetInnerHTML:e,children:n=""}=t||{},{__html:r=""}=e||{};return r||n}function b(t){const e={};for(const[n,r]of Object.entries(t))i.has(n)||(e[n]=r);return e}function h(t){if(t)return`/__third-party-proxy?url=${encodeURIComponent(t)}`}function g(t,e,n){const r=d.get(e)||{};for(const e of(null==r||null==(o=r[n])?void 0:o.callbacks)||[]){var o;e(t)}d.set(e,{[n]:{event:t}})}
//# sourceMappingURL=index.modern.mjs.map


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [532,774], function() { return __webpack_exec__(5824); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=app-8b5b93eaeb35b4f4ee3a.js.map