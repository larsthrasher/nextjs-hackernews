webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_StoryList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/StoryList */ "./components/StoryList.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");







var _jsxFileName = "/Users/larsthrasher/Desktop/hacker-news/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;






var Index = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Index, _React$Component);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          stories = _this$props.stories,
          page = _this$props.page;

      if (stories.length === 0) {
        return __jsx(next_error__WEBPACK_IMPORTED_MODULE_10___default.a, {
          statusCode: 503,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        });
      }

      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_13__["default"], {
        title: "Hacker Next",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, __jsx(_components_StoryList__WEBPACK_IMPORTED_MODULE_12__["default"], {
        stories: stories,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), __jsx("footer", {
        className: "jsx-2581509140",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/?page=".concat(page + 1),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-2581509140",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "Next page (", page + 1, ")"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2581509140",
        __self: this
      }, "footer.jsx-2581509140{padding:1em;}footer.jsx-2581509140 a.jsx-2581509140{font-weight:bold;color:black;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sYXJzdGhyYXNoZXIvRGVza3RvcC9oYWNrZXItbmV3cy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ29CLEFBRzJCLEFBR0ssWUFGbkIsS0FHYyxZQUNTLGtEQUN2QiIsImZpbGUiOiIvVXNlcnMvbGFyc3RocmFzaGVyL0Rlc2t0b3AvaGFja2VyLW5ld3MvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XG5pbXBvcnQgRXJyb3IgZnJvbSAnbmV4dC9lcnJvcic7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFN0b3J5TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1N0b3J5TGlzdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcblxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxLCByZXMsIHF1ZXJ5IH0pIHtcbiAgICAgIGxldCBzdG9yaWVzO1xuICAgICAgbGV0IHBhZ2U7XG4gICAgICB0cnkge1xuICAgICAgICBwYWdlID0gTnVtYmVyKHF1ZXJ5LnBhZ2UpIHx8IDE7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vbm9kZS1obmFwaS5oZXJva3VhcHAuY29tL25ld3M/cGFnZT0ke3BhZ2V9YCk7XG4gICAgICAgIHN0b3JpZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgc3RvcmllcyA9IFtdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4geyBwYWdlLCBzdG9yaWVzIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzdG9yaWVzLCBwYWdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmKHN0b3JpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gPEVycm9yIHN0YXR1c0NvZGU9ezUwM30vPlxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dCB0aXRsZT1cIkhhY2tlciBOZXh0XCI+XG4gICAgICAgIDxTdG9yeUxpc3Qgc3Rvcmllcz17c3Rvcmllc30vPlxuICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvP3BhZ2U9JHtwYWdlICsgMX1gfT5cbiAgICAgICAgICAgIDxhPk5leHQgcGFnZSAoe3BhZ2UgKyAxfSk8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgZm9vdGVyIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9vdGVyIGEge1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=/Users/larsthrasher/Desktop/hacker-news/pages/index.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var req, res, query, stories, page, response;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = _ref.req, res = _ref.res, query = _ref.query;
              _context.prev = 1;
              page = Number(query.page) || 1;
              _context.next = 5;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9___default()("https://node-hnapi.herokuapp.com/news?page=".concat(page)));

            case 5:
              response = _context.sent;
              _context.next = 8;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(response.json());

            case 8:
              stories = _context.sent;
              _context.next = 15;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);
              stories = [];

            case 15:
              return _context.abrupt("return", {
                page: page,
                stories: stories
              });

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[1, 11]], _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a);
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.fbbdba1145992eb4e140.hot-update.js.map