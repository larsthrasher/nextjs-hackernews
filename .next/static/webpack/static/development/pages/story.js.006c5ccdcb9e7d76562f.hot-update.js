webpackHotUpdate("static/development/pages/story.js",{

/***/ "./components/Comment.js":
/*!*******************************!*\
  !*** ./components/Comment.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/larsthrasher/Desktop/hacker-news/components/Comment.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var Comment = function Comment(_ref) {
  var comment = _ref.comment;
  return __jsx("div", {
    className: "jsx-2825457607" + " " + "comment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2825457607" + " " + "comment-user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, comment.user), __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: comment.content
    },
    className: "jsx-2825457607" + " " + "comment-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), comment.comments && __jsx("div", {
    className: "jsx-2825457607" + " " + "nested-comments",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, comment.comments.map(function (nestedComment) {
    return __jsx(Comment, {
      key: nestedComment.id,
      comment: nestedComment,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    });
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2825457607",
    __self: this
  }, ".comment.jsx-2825457607{margin-bottom:1.5em;}.comment-user.jsx-2825457607{font-size:0.9rem;font-weight:bold;margin-bottom:0.5em;}.comment-content.jsx-2825457607{font-size:0.9rem;}.comment-content.jsx-2825457607 p{margin:0;margin-bottom:0.5em;word-wrap:break-word;}.comment-content.jsx-2825457607 a{color:#f60;-webkit-text-decoration:underline;text-decoration:underline;}.comment-content.jsx-2825457607 pre{max-width:100%;overflow:scroll;}.nested-comments.jsx-2825457607{margin-top:1em;border-left:1px solid rgba(0,0,0,0.1);padding-left:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sYXJzdGhyYXNoZXIvRGVza3RvcC9oYWNrZXItbmV3cy9jb21wb25lbnRzL0NvbW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZWdCLEFBRzZCLEFBR0gsQUFLQSxBQUdSLEFBS0UsQUFJSSxBQUlBLFNBWkssRUFLTSxJQUlWLEFBSXlCLEVBckJ4QixBQUtuQixHQVJBLFNBWXVCLEVBU3ZCLEdBakJzQixnQkFTdEIsR0FZbUIsQ0FwQm5CLGdCQXFCQSxDQVRBIiwiZmlsZSI6Ii9Vc2Vycy9sYXJzdGhyYXNoZXIvRGVza3RvcC9oYWNrZXItbmV3cy9jb21wb25lbnRzL0NvbW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDb21tZW50ID0gKHsgY29tbWVudCB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudC11c2VyXCI+e2NvbW1lbnQudXNlcn08L2Rpdj5cbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJjb21tZW50LWNvbnRlbnRcIlxuICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBjb21tZW50LmNvbnRlbnQgfX1cbiAgICAvPlxuICAgIHtjb21tZW50LmNvbW1lbnRzICYmIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmVzdGVkLWNvbW1lbnRzXCI+XG4gICAgICAgIHtjb21tZW50LmNvbW1lbnRzLm1hcChuZXN0ZWRDb21tZW50ID0+IChcbiAgICAgICAgICA8Q29tbWVudCBrZXk9e25lc3RlZENvbW1lbnQuaWR9IGNvbW1lbnQ9e25lc3RlZENvbW1lbnR9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgKX1cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5jb21tZW50IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41ZW07XG4gICAgICB9XG4gICAgICAuY29tbWVudC11c2VyIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgICAgIH1cbiAgICAgIC5jb21tZW50LWNvbnRlbnQge1xuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgIH1cbiAgICAgIC5jb21tZW50LWNvbnRlbnQgOmdsb2JhbChwKSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgIH1cbiAgICAgIC5jb21tZW50LWNvbnRlbnQgOmdsb2JhbChhKSB7XG4gICAgICAgIGNvbG9yOiAjZjYwO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cbiAgICAgIC5jb21tZW50LWNvbnRlbnQgOmdsb2JhbChwcmUpIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgICAgfVxuICAgICAgLm5lc3RlZC1jb21tZW50cyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMWVtO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50O1xuIl19 */\n/*@ sourceURL=/Users/larsthrasher/Desktop/hacker-news/components/Comment.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Comment);

/***/ })

})
//# sourceMappingURL=story.js.006c5ccdcb9e7d76562f.hot-update.js.map