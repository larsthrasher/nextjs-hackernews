webpackHotUpdate("static/development/pages/story.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/larsthrasher/Desktop/hacker-news/components/Layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Layout = function Layout(_ref) {
  var children = _ref.children,
      title = _ref.title,
      description = _ref.description,
      backButton = _ref.backButton;
  return __jsx("div", {
    className: "jsx-2402006926",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-2402006926",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, title), __jsx("meta", {
    name: "description",
    className: "jsx-2402006926",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  })), __jsx("div", {
    content: description,
    className: "jsx-2402006926" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("nav", {
    className: "jsx-2402006926",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, backButton && __jsx("span", {
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.back();
    },
    className: "jsx-2402006926" + " " + "back-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "\u2B05"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-2402006926",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2402006926" + " " + "main-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Hacker Next")))), children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3786611331",
    __self: this
  }, ".container.jsx-2402006926{max-width:800px;margin:0 auto;background:#f6f6ef;}nav.jsx-2402006926{background:#f60;padding:1em;}nav.jsx-2402006926>*.jsx-2402006926{display:inline-block;color:black;}nav.jsx-2402006926 a.jsx-2402006926{-webkit-text-decoration:none;text-decoration:none;}nav.jsx-2402006926 .main-title.jsx-2402006926{font-weight:bold;}nav.jsx-2402006926 .back-button.jsx-2402006926{font-size:0.9rem;padding-right:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sYXJzdGhyYXNoZXIvRGVza3RvcC9oYWNrZXItbmV3cy9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQmdCLEFBR3lCLEFBS0EsQUFJSyxBQUlBLEFBR0osQUFHQSxnQkFsQkgsQUFLRixDQVdkLEFBR29CLElBVk4sT0FIZCxFQUxxQixHQVNyQixFQVdBLGNBbkJBLENBV0EiLCJmaWxlIjoiL1VzZXJzL2xhcnN0aHJhc2hlci9EZXNrdG9wL2hhY2tlci1uZXdzL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIHRpdGxlLCBkZXNjcmlwdGlvbiwgYmFja0J1dHRvbiAgfSkgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgLz5cbiAgICA8L0hlYWQ+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBjb250ZW50PXtkZXNjcmlwdGlvbn0+XG4gICAgICA8bmF2PlxuICAgICAgICB7YmFja0J1dHRvbiAmJiA8c3BhbiBvbkNsaWNrPXsoKT0+Um91dGVyLmJhY2soKX0gY2xhc3NOYW1lPVwiYmFjay1idXR0b25cIj4mI3gyYjA1Ozwvc3Bhbj59XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGE+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYWluLXRpdGxlXCI+SGFja2VyIE5leHQ8L3NwYW4+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L25hdj5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGJhY2tncm91bmQ6ICNmNmY2ZWY7XG4gICAgICB9XG4gICAgICBuYXYge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjYwO1xuICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICB9XG4gICAgICBuYXYgPiAqIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICB9XG4gICAgICBuYXYgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICAgIG5hdiAubWFpbi10aXRsZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgICAgbmF2IC5iYWNrLWJ1dHRvbntcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcblxuICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgc2Fucy1zZXJpZjtcblxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXX0= */\n/*@ sourceURL=/Users/larsthrasher/Desktop/hacker-news/components/Layout.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4209999268",
    __self: this
  }, "body{background:white;font-family:Verdana,Geneva,sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sYXJzdGhyYXNoZXIvRGVza3RvcC9oYWNrZXItbmV3cy9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQ3lCLEFBRzRCLGlCQUN1QixzQ0FFMUMiLCJmaWxlIjoiL1VzZXJzL2xhcnN0aHJhc2hlci9EZXNrdG9wL2hhY2tlci1uZXdzL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIHRpdGxlLCBkZXNjcmlwdGlvbiwgYmFja0J1dHRvbiAgfSkgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgLz5cbiAgICA8L0hlYWQ+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBjb250ZW50PXtkZXNjcmlwdGlvbn0+XG4gICAgICA8bmF2PlxuICAgICAgICB7YmFja0J1dHRvbiAmJiA8c3BhbiBvbkNsaWNrPXsoKT0+Um91dGVyLmJhY2soKX0gY2xhc3NOYW1lPVwiYmFjay1idXR0b25cIj4mI3gyYjA1Ozwvc3Bhbj59XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGE+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYWluLXRpdGxlXCI+SGFja2VyIE5leHQ8L3NwYW4+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L25hdj5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGJhY2tncm91bmQ6ICNmNmY2ZWY7XG4gICAgICB9XG4gICAgICBuYXYge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjYwO1xuICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICB9XG4gICAgICBuYXYgPiAqIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICB9XG4gICAgICBuYXYgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICAgIG5hdiAubWFpbi10aXRsZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgICAgbmF2IC5iYWNrLWJ1dHRvbntcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcblxuICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgc2Fucy1zZXJpZjtcblxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXX0= */\n/*@ sourceURL=/Users/larsthrasher/Desktop/hacker-news/components/Layout.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=story.js.4d5a5853ab904c96b11c.hot-update.js.map