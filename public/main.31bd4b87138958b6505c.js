(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "6nve":
/*!***********************************!*\
  !*** ./src/jsx/Helping/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "Nc6R");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);





var Helping = function Helping(props) {
  var left = props.left,
      isClearable = props.isClearable,
      handleClick = props.handleClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Helping"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "".concat(left, " item left")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    exact: true,
    to: "/"
  }, "All")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    exact: true,
    to: "/active"
  }, "Active")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    exact: true,
    to: "completed"
  }, "Completed")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "removeComplete"
  }, function (det) {
    if (det) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        title: "Clear completed",
        type: "button",
        style: {
          display: isClearable ? 'block' : 'none'
        },
        onClick: handleClick
      }, "Clear completed");
    }
  }(isClearable)));
};

Helping.propTypes = {
  left: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  isClearable: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  handleClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Helping);

/***/ }),

/***/ "8ykL":
/*!**********************************!*\
  !*** ./src/jsx/Footer/index.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "iiGG");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);



var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Double-click to edit a todo", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "by jhoijune")));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "9/PA":
/*!*******************************!*\
  !*** ./src/jsx/App/style.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "Nc6R":
/*!***********************************!*\
  !*** ./src/jsx/Helping/style.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "PN5m":
/*!**********************************!*\
  !*** ./src/jsx/Header/index.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "ZbdK");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);



var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "To do list")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "YGUm":
/*!************************************!*\
  !*** ./src/jsx/ItemList/style.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ZbdK":
/*!**********************************!*\
  !*** ./src/jsx/Header/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "bVG3":
/*!********************************!*\
  !*** ./src/jsx/Post/style.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "iiGG":
/*!**********************************!*\
  !*** ./src/jsx/Footer/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "mMwD":
/*!********************************!*\
  !*** ./src/jsx/Item/style.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "myL6":
/*!********************************!*\
  !*** ./src/jsx/Post/index.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "bVG3");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);




var Post = function Post(props) {
  var handleClick = props.handleClick,
      handleChange = props.handleChange,
      handleEnter = props.handleEnter,
      inputValue = props.inputValue,
      isAllCompleted = props.isAllCompleted,
      isClickable = props.isClickable;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Post"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "stateChange"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: handleClick,
    id: "PostButton"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "PostButton",
    className: "fas fa-chevron-down",
    style: {
      color: isAllCompleted ? '#000' : '#e6e6e6',
      opacity: isClickable ? 1 : 0
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "postToDo"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: "What needs to be done",
    maxLength: "200",
    onChange: handleChange,
    onKeyPress: handleEnter,
    value: inputValue
  })));
};

Post.propTypes = {
  handleClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleEnter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  inputValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  isAllCompleted: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool]).isRequired,
  isClickable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "u4JH":
/*!********************************!*\
  !*** ./src/jsx/Item/index.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "mMwD");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);




var Item = function Item(props) {
  var changeable = props.changeable,
      deletable = props.deletable,
      order = props.order,
      itemId = props.itemId,
      name = props.name,
      isCompleted = props.isCompleted,
      handleDoubleClick = props.handleDoubleClick,
      handleChange = props.handleChange,
      handleOnBlur = props.handleOnBlur,
      handleEnter = props.handleEnter,
      handleStateChange = props.handleStateChange,
      handleDelete = props.handleDelete,
      handleMouseOver = props.handleMouseOver,
      handleMouseOut = props.handleMouseOut;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "Item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "stateChange"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    id: "item-".concat(order, "-State"),
    onClick: handleStateChange(itemId)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "item-".concat(order, "-State"),
    className: "far ".concat(isCompleted ? 'fa-check-circle' : 'fa-circle')
  })), function (isInputable) {
    if (isInputable) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "itemChange"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        maxLength: "200",
        value: name,
        onChange: handleChange(itemId),
        onBlur: handleOnBlur(itemId),
        onKeyPress: handleEnter(itemId),
        autoFocus: true
      }));
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "itemChange",
      onMouseOver: handleMouseOver(itemId),
      onMouseOut: handleMouseOut,
      onDoubleClick: handleDoubleClick(itemId)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: isCompleted ? 'itemName completed' : 'itemName'
    }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "deleteButton"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      id: "item-".concat(order, "-Delete"),
      onClick: handleDelete(itemId),
      style: {
        display: 'none'
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "item-".concat(order, "-Delete"),
      className: "fas fa-times",
      style: {
        display: deletable ? 'inline' : 'none'
      }
    })));
  }(changeable));
};

Item.propTypes = {
  changeable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  deletable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  order: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  itemId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  isCompleted: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  handleDoubleClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleOnBlur: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleEnter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleStateChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleDelete: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleMouseOver: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleMouseOut: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ }),

/***/ "wsSd":
/*!**********************************!*\
  !*** ./src/jsx/App/app-hook.jsx ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "i8i4");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "Ty5D");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "9/PA");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Header */ "PN5m");
/* harmony import */ var _ItemList_hook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ItemList/hook */ "xihP");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Footer */ "8ykL");








react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
  path: "/",
  component: Object(react_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(_ItemList_hook__WEBPACK_IMPORTED_MODULE_6__["default"])
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], null)), document.getElementById('content'));

/***/ }),

/***/ "xihP":
/*!***********************************!*\
  !*** ./src/jsx/ItemList/hook.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "YGUm");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Item */ "u4JH");
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Post */ "myL6");
/* harmony import */ var _Helping__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Helping */ "6nve");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var ItemList = function ItemList(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      items = _useState2[0],
      setItems = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState4 = _slicedToArray(_useState3, 2),
      itemCount = _useState4[0],
      setItemCount = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState6 = _slicedToArray(_useState5, 2),
      activeCount = _useState6[0],
      setActiveCount = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState8 = _slicedToArray(_useState7, 2),
      postInputValue = _useState8[0],
      setPostInputValue = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/all').then(function (_ref) {
      var data = _ref.data;
      var items = data.items,
          itemCount = data.size;
      var activeCount = items.filter(function (value) {
        return value.completeFlag === 0;
      }).length;
      var modifiedItems = items.map(function (value) {
        return _objectSpread({}, value, {
          changeable: false,
          deletable: false
        });
      });
      setItemCount(itemCount);
      setActiveCount(activeCount);
      setItems(modifiedItems);
    });
  }, []);

  var handlePostClick = function handlePostClick() {
    var isAllCompleted = itemCount && !activeCount;
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/".concat(isAllCompleted ? 'completed' : 'active', "/all")).then(function (_ref2) {
      var status = _ref2.status;

      if (status === 204) {
        var obj = items.map(function (value) {
          return _objectSpread({}, value, {
            completeFlag: isAllCompleted ? 0 : 1
          });
        });
        setItems(obj);
        setActiveCount(isAllCompleted ? itemCount : 0);
      }
    });
  };

  var handlePostChange = function handlePostChange(_ref3) {
    var target = _ref3.target;
    setPostInputValue(target.value);
  };

  var handlePostEnter = function handlePostEnter(_ref4) {
    var key = _ref4.key;

    if (key === 'Enter') {
      // 할일 등록 요청
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/active', {
        name: postInputValue
      }).then(function (response) {
        var data = response.data,
            status = response.status;

        if (status === 413) {
          return;
        }

        var modifiedData = {
          itemId: data.itemId,
          name: data.name,
          completeFlag: data.completeFlag,
          changeable: false,
          deletable: false
        };
        setItems([].concat(_toConsumableArray(items), [modifiedData]));
        setPostInputValue('');
        setItemCount(itemCount + 1);
        setActiveCount(activeCount + 1);
      });
    }
  };

  var handleHelpingClick = function handleHelpingClick() {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]('/api/completed/all').then(function (_ref5) {
      var status = _ref5.status;

      if (status === 204) {
        var activeItems = items.filter(function (value) {
          return value.completeFlag === 0;
        });
        var _itemCount = activeItems.length;
        setItemCount(_itemCount);
        setItems(activeItems);
      }
    });
  };

  var handleDoubleClick = function handleDoubleClick(itemId) {
    return function () {
      // itemId에 맞는 index 찾아서 changeable을 true로
      var modifiedItems = items.map(function (value) {
        var changeable = value.itemId === itemId;
        return _objectSpread({}, value, {
          changeable: changeable,
          deletable: false
        });
      });
      setItems(modifiedItems);
    };
  };

  var handleItemChange = function handleItemChange(itemId) {
    return function (_ref6) {
      var target = _ref6.target;
      // itemId같은 것을 찾아 name을 target.value로 바꿈
      var modifiedItems = items.map(function (value) {
        var name = value.itemId === itemId ? target.value : value.name;
        return _objectSpread({}, value, {
          name: name
        });
      });
      setItems(modifiedItems);
    };
  };

  var submitModifiedName = function submitModifiedName(itemId) {
    var index = items.findIndex(function (value) {
      return value.itemId === itemId;
    });
    var item = items[index];
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/".concat(item.completeFlag ? 'completed' : 'active', "/").concat(itemId), {
      name: item.name
    }).then(function (_ref7) {
      var status = _ref7.status;

      if (status === 413) {
        return;
      }

      if (status === 201) {
        var _modifiedItems = _toConsumableArray(items);

        _modifiedItems[index].changeable = false;
        setItems(_modifiedItems);
      }
    });
  };

  var handleOnBlur = function handleOnBlur(itemId) {
    return function () {
      submitModifiedName(itemId);
    };
  };

  var handleItemEnter = function handleItemEnter(itemId) {
    return function (_ref8) {
      var key = _ref8.key;

      if (key === 'Enter') {
        submitModifiedName(itemId);
      }
    };
  };

  var handleItemStateChange = function handleItemStateChange(itemId) {
    return function () {
      // itemId에 맞는 index 찾아서 completeFlag반전
      var index = items.findIndex(function (value) {
        return value.itemId === itemId;
      });

      var modifiedItems = _toConsumableArray(items);

      var isCompleted = modifiedItems[index].completeFlag;
      modifiedItems[index].completeFlag = isCompleted ? 0 : 1;
      var requestURI = "/api/".concat(isCompleted ? 'completed' : 'active', "/").concat(itemId);
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.put(requestURI).then(function (_ref9) {
        var status = _ref9.status;

        if (status === 201) {
          setItems(modifiedItems);
          setActiveCount(isCompleted ? activeCount + 1 : activeCount - 1);
        }
      });
    };
  };

  var handleItemDelete = function handleItemDelete(itemId) {
    return function () {
      // itemId에 맞는 index 찾아서 제거한 뒤 api 요청
      var index = items.findIndex(function (value) {
        return value.itemId === itemId;
      });
      var isCompleted = items[index].completeFlag;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]("/api/".concat(isCompleted ? 'completed' : 'active', "/").concat(itemId)).then(function (_ref10) {
        var status = _ref10.status;

        if (status === 201) {
          var _modifiedItems2 = items.filter(function (value) {
            return value.itemId !== itemId;
          });

          setItems(_modifiedItems2);
          setItemCount(itemCount - 1);
          setActiveCount(isCompleted ? activeCount : activeCount - 1);
        }
      });
    };
  };

  var handleMouseOver = function handleMouseOver(itemId) {
    return function () {
      // itemId에 맞는 index 찾아서 deletable을 true로
      var modifiedItems = items.map(function (value) {
        var deletable = value.itemId === itemId;
        return _objectSpread({}, value, {
          deletable: deletable
        });
      });
      setItems(modifiedItems);
    };
  };

  var handleMouseOut = function handleMouseOut() {
    var modifiedItems = items.map(function (value) {
      return _objectSpread({}, value, {
        deletable: false
      });
    });
    setItems(modifiedItems);
  };

  var pathname = props.location.pathname;
  var modifiedItems = items.filter(function (value) {
    if (pathname === '/' || pathname === '/all') {
      return true;
    }

    if (pathname === '/active' && value.completeFlag === 0) {
      return true;
    }

    if (pathname === '/completed' && value.completeFlag === 1) {
      return true;
    }

    return false;
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ItemList"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Post__WEBPACK_IMPORTED_MODULE_5__["default"], {
    inputValue: postInputValue,
    handleClick: handlePostClick,
    handleChange: handlePostChange,
    handleEnter: handlePostEnter,
    isClickable: itemCount,
    isAllCompleted: itemCount && !activeCount
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, modifiedItems.map(function (value, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Item__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: value.itemId,
      changeable: value.changeable,
      deletable: value.deletable,
      order: index + 1,
      itemId: value.itemId,
      name: value.name,
      isCompleted: value.completeFlag,
      handleDoubleClick: handleDoubleClick,
      handleChange: handleItemChange,
      handleOnBlur: handleOnBlur,
      handleEnter: handleItemEnter,
      handleStateChange: handleItemStateChange,
      handleDelete: handleItemDelete,
      handleMouseOver: handleMouseOver,
      handleMouseOut: handleMouseOut
    });
  })), function (isHelpingShowing) {
    if (isHelpingShowing) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Helping__WEBPACK_IMPORTED_MODULE_6__["default"], {
        handleClick: handleHelpingClick,
        left: activeCount,
        isClearable: itemCount && itemCount - activeCount
      });
    }
  }(itemCount)));
};

ItemList.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ItemList);

/***/ })

},[["wsSd","runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanN4L0hlbHBpbmcvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvRm9vdGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L0FwcC9zdHlsZS5jc3M/MTIxNyIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L0hlbHBpbmcvc3R5bGUuY3NzPzE4Y2EiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9IZWFkZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvSXRlbUxpc3Qvc3R5bGUuY3NzP2EzNTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9IZWFkZXIvc3R5bGUuY3NzPzZjYjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9Qb3N0L3N0eWxlLmNzcz82NjJjIiwid2VicGFjazovLy8uL3NyYy9qc3gvRm9vdGVyL3N0eWxlLmNzcz9hMDNlIiwid2VicGFjazovLy8uL3NyYy9qc3gvSXRlbS9zdHlsZS5jc3M/OWMxYiIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1Bvc3QvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvSXRlbS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9BcHAvYXBwLWhvb2suanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvSXRlbUxpc3QvaG9vay5qc3giXSwibmFtZXMiOlsiSGVscGluZyIsInByb3BzIiwibGVmdCIsImlzQ2xlYXJhYmxlIiwiaGFuZGxlQ2xpY2siLCJkZXQiLCJkaXNwbGF5IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJGb290ZXIiLCJIZWFkZXIiLCJQb3N0IiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlRW50ZXIiLCJpbnB1dFZhbHVlIiwiaXNBbGxDb21wbGV0ZWQiLCJpc0NsaWNrYWJsZSIsImNvbG9yIiwib3BhY2l0eSIsInN0cmluZyIsIm9uZU9mVHlwZSIsImJvb2wiLCJJdGVtIiwiY2hhbmdlYWJsZSIsImRlbGV0YWJsZSIsIm9yZGVyIiwiaXRlbUlkIiwibmFtZSIsImlzQ29tcGxldGVkIiwiaGFuZGxlRG91YmxlQ2xpY2siLCJoYW5kbGVPbkJsdXIiLCJoYW5kbGVTdGF0ZUNoYW5nZSIsImhhbmRsZURlbGV0ZSIsImhhbmRsZU1vdXNlT3ZlciIsImhhbmRsZU1vdXNlT3V0IiwiaXNJbnB1dGFibGUiLCJSZWFjdERPTSIsInJlbmRlciIsIndpdGhSb3V0ZXIiLCJJdGVtTGlzdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ1c2VTdGF0ZSIsIml0ZW1zIiwic2V0SXRlbXMiLCJpdGVtQ291bnQiLCJzZXRJdGVtQ291bnQiLCJhY3RpdmVDb3VudCIsInNldEFjdGl2ZUNvdW50IiwicG9zdElucHV0VmFsdWUiLCJzZXRQb3N0SW5wdXRWYWx1ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsImRhdGEiLCJzaXplIiwiZmlsdGVyIiwidmFsdWUiLCJjb21wbGV0ZUZsYWciLCJsZW5ndGgiLCJtb2RpZmllZEl0ZW1zIiwibWFwIiwiaGFuZGxlUG9zdENsaWNrIiwicHV0Iiwic3RhdHVzIiwib2JqIiwiaGFuZGxlUG9zdENoYW5nZSIsInRhcmdldCIsImhhbmRsZVBvc3RFbnRlciIsImtleSIsInBvc3QiLCJyZXNwb25zZSIsIm1vZGlmaWVkRGF0YSIsImhhbmRsZUhlbHBpbmdDbGljayIsImFjdGl2ZUl0ZW1zIiwiaGFuZGxlSXRlbUNoYW5nZSIsInN1Ym1pdE1vZGlmaWVkTmFtZSIsImluZGV4IiwiZmluZEluZGV4IiwiaXRlbSIsImhhbmRsZUl0ZW1FbnRlciIsImhhbmRsZUl0ZW1TdGF0ZUNoYW5nZSIsInJlcXVlc3RVUkkiLCJoYW5kbGVJdGVtRGVsZXRlIiwicGF0aG5hbWUiLCJsb2NhdGlvbiIsImlzSGVscGluZ1Nob3dpbmciLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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RSxnQkFBVSxFQUFFZ0MsS0FBSyxDQUFDbkMsVUFGcEI7QUFHRSxlQUFTLEVBQUVtQyxLQUFLLENBQUNsQyxTQUhuQjtBQUlFLFdBQUssRUFBRXNELEtBQUssR0FBRyxDQUpqQjtBQUtFLFlBQU0sRUFBRXBCLEtBQUssQ0FBQ2hDLE1BTGhCO0FBTUUsVUFBSSxFQUFFZ0MsS0FBSyxDQUFDL0IsSUFOZDtBQU9FLGlCQUFXLEVBQUUrQixLQUFLLENBQUNDLFlBUHJCO0FBUUUsdUJBQWlCLEVBQUU5QixpQkFSckI7QUFTRSxrQkFBWSxFQUFFK0MsZ0JBVGhCO0FBVUUsa0JBQVksRUFBRTlDLFlBVmhCO0FBV0UsaUJBQVcsRUFBRW1ELGVBWGY7QUFZRSx1QkFBaUIsRUFBRUMscUJBWnJCO0FBYUUsa0JBQVksRUFBRUUsZ0JBYmhCO0FBY0UscUJBQWUsRUFBRW5ELGVBZG5CO0FBZUUsb0JBQWMsRUFBRUM7QUFmbEIsTUFERjtBQW1CRCxHQXBCQSxDQURILENBVEYsRUFnQ0ksVUFBQXFELGdCQUFnQixFQUFJO0FBQ3BCLFFBQUlBLGdCQUFKLEVBQXNCO0FBQ3BCLGFBQ0UsMkRBQUMsZ0RBQUQ7QUFDRSxtQkFBVyxFQUFFYixrQkFEZjtBQUVFLFlBQUksRUFBRTNCLFdBRlI7QUFHRSxtQkFBVyxFQUFFRixTQUFTLElBQUlBLFNBQVMsR0FBR0U7QUFIeEMsUUFERjtBQU9EO0FBQ0YsR0FWQSxDQVVFRixTQVZGLENBaENILENBREYsQ0FERjtBQWdERCxDQXhQRDs7QUEwUEFOLFFBQVEsQ0FBQ25DLFNBQVQsR0FBcUI7QUFDbkJrRixVQUFRLEVBQUVqRixpREFBUyxDQUFDbUYsTUFBVixDQUFpQmpGO0FBRFIsQ0FBckI7QUFJZWdDLHVFQUFmLEUiLCJmaWxlIjoibWFpbi4zMWJkNGI4NzEzODk1OGI2NTA1Yy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNvbnN0IEhlbHBpbmcgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgbGVmdCwgaXNDbGVhcmFibGUsIGhhbmRsZUNsaWNrIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlbHBpbmdcIj5cbiAgICAgIDxwPntgJHtsZWZ0fSBpdGVtIGxlZnRgfTwvcD5cbiAgICAgIDxuYXY+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TmF2TGluayBleGFjdCB0bz1cIi9cIj5cbiAgICAgICAgICAgICAgQWxsXG4gICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TmF2TGluayBleGFjdCB0bz1cIi9hY3RpdmVcIj5cbiAgICAgICAgICAgICAgQWN0aXZlXG4gICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TmF2TGluayBleGFjdCB0bz1cImNvbXBsZXRlZFwiPlxuICAgICAgICAgICAgICBDb21wbGV0ZWRcbiAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9uYXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbW92ZUNvbXBsZXRlXCI+XG4gICAgICAgIHsoZGV0ID0+IHtcbiAgICAgICAgICBpZiAoZGV0KSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJDbGVhciBjb21wbGV0ZWRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGlzQ2xlYXJhYmxlID8gJ2Jsb2NrJyA6ICdub25lJyB9fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2xlYXIgY29tcGxldGVkXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pKGlzQ2xlYXJhYmxlKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuSGVscGluZy5wcm9wVHlwZXMgPSB7XG4gIGxlZnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgaXNDbGVhcmFibGU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgaGFuZGxlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWxwaW5nO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb290ZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgyPlxyXG4gICAgICAgICAgRG91YmxlLWNsaWNrIHRvIGVkaXQgYSB0b2RvXHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIGJ5IGpob2lqdW5lXHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvb3Rlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8aDE+VG8gZG8gbGlzdDwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY29uc3QgUG9zdCA9IHByb3BzID0+IHtcbiAgY29uc3Qge1xuICAgIGhhbmRsZUNsaWNrLFxuICAgIGhhbmRsZUNoYW5nZSxcbiAgICBoYW5kbGVFbnRlcixcbiAgICBpbnB1dFZhbHVlLFxuICAgIGlzQWxsQ29tcGxldGVkLFxuICAgIGlzQ2xpY2thYmxlLFxuICB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJQb3N0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRlQ2hhbmdlXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBpZD1cIlBvc3RCdXR0b25cIiAvPlxuICAgICAgICA8bGFiZWxcbiAgICAgICAgICBodG1sRm9yPVwiUG9zdEJ1dHRvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tZG93blwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGNvbG9yOiBpc0FsbENvbXBsZXRlZCA/ICcjMDAwJyA6ICcjZTZlNmU2JyxcbiAgICAgICAgICAgIG9wYWNpdHk6IGlzQ2xpY2thYmxlID8gMSA6IDAsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0VG9Eb1wiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IG5lZWRzIHRvIGJlIGRvbmVcIlxuICAgICAgICAgIG1heExlbmd0aD1cIjIwMFwiXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICBvbktleVByZXNzPXtoYW5kbGVFbnRlcn1cbiAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuUG9zdC5wcm9wVHlwZXMgPSB7XG4gIGhhbmRsZUNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBoYW5kbGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGhhbmRsZUVudGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBpbnB1dFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGlzQWxsQ29tcGxldGVkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuYm9vbF0pXG4gICAgLmlzUmVxdWlyZWQsXG4gIGlzQ2xpY2thYmxlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY29uc3QgSXRlbSA9IHByb3BzID0+IHtcbiAgY29uc3Qge1xuICAgIGNoYW5nZWFibGUsXG4gICAgZGVsZXRhYmxlLFxuICAgIG9yZGVyLFxuICAgIGl0ZW1JZCxcbiAgICBuYW1lLFxuICAgIGlzQ29tcGxldGVkLFxuICAgIGhhbmRsZURvdWJsZUNsaWNrLFxuICAgIGhhbmRsZUNoYW5nZSxcbiAgICBoYW5kbGVPbkJsdXIsXG4gICAgaGFuZGxlRW50ZXIsXG4gICAgaGFuZGxlU3RhdGVDaGFuZ2UsXG4gICAgaGFuZGxlRGVsZXRlLFxuICAgIGhhbmRsZU1vdXNlT3ZlcixcbiAgICBoYW5kbGVNb3VzZU91dCxcbiAgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9XCJJdGVtXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRlQ2hhbmdlXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgaWQ9e2BpdGVtLSR7b3JkZXJ9LVN0YXRlYH1cbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdGF0ZUNoYW5nZShpdGVtSWQpfVxuICAgICAgICAvPlxuICAgICAgICA8bGFiZWxcbiAgICAgICAgICBodG1sRm9yPXtgaXRlbS0ke29yZGVyfS1TdGF0ZWB9XG4gICAgICAgICAgY2xhc3NOYW1lPXtgZmFyICR7aXNDb21wbGV0ZWQgPyAnZmEtY2hlY2stY2lyY2xlJyA6ICdmYS1jaXJjbGUnfWB9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsoaXNJbnB1dGFibGUgPT4ge1xuICAgICAgICBpZiAoaXNJbnB1dGFibGUpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtQ2hhbmdlXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBtYXhMZW5ndGg9XCIyMDBcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoaXRlbUlkKX1cbiAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZU9uQmx1cihpdGVtSWQpfVxuICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9e2hhbmRsZUVudGVyKGl0ZW1JZCl9XG4gICAgICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbUNoYW5nZVwiXG4gICAgICAgICAgICBvbk1vdXNlT3Zlcj17aGFuZGxlTW91c2VPdmVyKGl0ZW1JZCl9XG4gICAgICAgICAgICBvbk1vdXNlT3V0PXtoYW5kbGVNb3VzZU91dH1cbiAgICAgICAgICAgIG9uRG91YmxlQ2xpY2s9e2hhbmRsZURvdWJsZUNsaWNrKGl0ZW1JZCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtpc0NvbXBsZXRlZCA/ICdpdGVtTmFtZSBjb21wbGV0ZWQnIDogJ2l0ZW1OYW1lJ30+XG4gICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVsZXRlQnV0dG9uXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBpZD17YGl0ZW0tJHtvcmRlcn0tRGVsZXRlYH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEZWxldGUoaXRlbUlkKX1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgaHRtbEZvcj17YGl0ZW0tJHtvcmRlcn0tRGVsZXRlYH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYXMgZmEtdGltZXNcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGRlbGV0YWJsZSA/ICdpbmxpbmUnIDogJ25vbmUnIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9KShjaGFuZ2VhYmxlKX1cbiAgICA8L2xpPlxuICApO1xufTtcblxuSXRlbS5wcm9wVHlwZXMgPSB7XG4gIGNoYW5nZWFibGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGRlbGV0YWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgb3JkZXI6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgaXRlbUlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaXNDb21wbGV0ZWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgaGFuZGxlRG91YmxlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGhhbmRsZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaGFuZGxlT25CbHVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBoYW5kbGVFbnRlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaGFuZGxlU3RhdGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGhhbmRsZURlbGV0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaGFuZGxlTW91c2VPdmVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBoYW5kbGVNb3VzZU91dDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFN3aXRjaCwgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL0hlYWRlcic7XHJcbmltcG9ydCBJdGVtTGlzdCBmcm9tICcuLi9JdGVtTGlzdC9ob29rJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9Gb290ZXInO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gIDxCcm93c2VyUm91dGVyPlxyXG4gICAgPEhlYWRlciAvPlxyXG4gICAgPFN3aXRjaD5cclxuICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXt3aXRoUm91dGVyKEl0ZW1MaXN0KX0gLz5cclxuICAgIDwvU3dpdGNoPlxyXG4gICAgPEZvb3RlciAvPlxyXG4gIDwvQnJvd3NlclJvdXRlcj4sXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKSxcclxuKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IEl0ZW0gZnJvbSAnLi4vSXRlbSc7XHJcbmltcG9ydCBQb3N0IGZyb20gJy4uL1Bvc3QnO1xyXG5pbXBvcnQgSGVscGluZyBmcm9tICcuLi9IZWxwaW5nJztcclxuXHJcbmNvbnN0IEl0ZW1MaXN0ID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpdGVtQ291bnQsIHNldEl0ZW1Db3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbYWN0aXZlQ291bnQsIHNldEFjdGl2ZUNvdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtwb3N0SW5wdXRWYWx1ZSwgc2V0UG9zdElucHV0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3MuZ2V0KCcvYXBpL2FsbCcpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgaXRlbXMsIHNpemU6IGl0ZW1Db3VudCB9ID0gZGF0YTtcclxuICAgICAgY29uc3QgYWN0aXZlQ291bnQgPSBpdGVtcy5maWx0ZXIodmFsdWUgPT4gdmFsdWUuY29tcGxldGVGbGFnID09PSAwKVxyXG4gICAgICAgIC5sZW5ndGg7XHJcbiAgICAgIGNvbnN0IG1vZGlmaWVkSXRlbXMgPSBpdGVtcy5tYXAodmFsdWUgPT4ge1xyXG4gICAgICAgIHJldHVybiB7IC4uLnZhbHVlLCBjaGFuZ2VhYmxlOiBmYWxzZSwgZGVsZXRhYmxlOiBmYWxzZSB9O1xyXG4gICAgICB9KTtcclxuICAgICAgc2V0SXRlbUNvdW50KGl0ZW1Db3VudCk7XHJcbiAgICAgIHNldEFjdGl2ZUNvdW50KGFjdGl2ZUNvdW50KTtcclxuICAgICAgc2V0SXRlbXMobW9kaWZpZWRJdGVtcyk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVBvc3RDbGljayA9ICgpID0+IHtcclxuICAgIGNvbnN0IGlzQWxsQ29tcGxldGVkID0gaXRlbUNvdW50ICYmICFhY3RpdmVDb3VudDtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5wdXQoYC9hcGkvJHtpc0FsbENvbXBsZXRlZCA/ICdjb21wbGV0ZWQnIDogJ2FjdGl2ZSd9L2FsbGApXHJcbiAgICAgIC50aGVuKCh7IHN0YXR1cyB9KSA9PiB7XHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjA0KSB7XHJcbiAgICAgICAgICBjb25zdCBvYmogPSBpdGVtcy5tYXAodmFsdWUgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4geyAuLi52YWx1ZSwgY29tcGxldGVGbGFnOiBpc0FsbENvbXBsZXRlZCA/IDAgOiAxIH07XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHNldEl0ZW1zKG9iaik7XHJcbiAgICAgICAgICBzZXRBY3RpdmVDb3VudChpc0FsbENvbXBsZXRlZCA/IGl0ZW1Db3VudCA6IDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUG9zdENoYW5nZSA9ICh7IHRhcmdldCB9KSA9PiB7XHJcbiAgICBzZXRQb3N0SW5wdXRWYWx1ZSh0YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVBvc3RFbnRlciA9ICh7IGtleSB9KSA9PiB7XHJcbiAgICBpZiAoa2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgIC8vIO2VoOydvCDrk7HroZ0g7JqU7LKtXHJcbiAgICAgIGF4aW9zLnBvc3QoJy9hcGkvYWN0aXZlJywgeyBuYW1lOiBwb3N0SW5wdXRWYWx1ZSB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVzcG9uc2U7XHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gNDEzKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG1vZGlmaWVkRGF0YSA9IHtcclxuICAgICAgICAgIGl0ZW1JZDogZGF0YS5pdGVtSWQsXHJcbiAgICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXHJcbiAgICAgICAgICBjb21wbGV0ZUZsYWc6IGRhdGEuY29tcGxldGVGbGFnLFxyXG4gICAgICAgICAgY2hhbmdlYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBkZWxldGFibGU6IGZhbHNlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2V0SXRlbXMoWy4uLml0ZW1zLCBtb2RpZmllZERhdGFdKTtcclxuICAgICAgICBzZXRQb3N0SW5wdXRWYWx1ZSgnJyk7XHJcbiAgICAgICAgc2V0SXRlbUNvdW50KGl0ZW1Db3VudCArIDEpO1xyXG4gICAgICAgIHNldEFjdGl2ZUNvdW50KGFjdGl2ZUNvdW50ICsgMSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUhlbHBpbmdDbGljayA9ICgpID0+IHtcclxuICAgIGF4aW9zLmRlbGV0ZSgnL2FwaS9jb21wbGV0ZWQvYWxsJykudGhlbigoeyBzdGF0dXMgfSkgPT4ge1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDQpIHtcclxuICAgICAgICBjb25zdCBhY3RpdmVJdGVtcyA9IGl0ZW1zLmZpbHRlcih2YWx1ZSA9PiB2YWx1ZS5jb21wbGV0ZUZsYWcgPT09IDApO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1Db3VudCA9IGFjdGl2ZUl0ZW1zLmxlbmd0aDtcclxuICAgICAgICBzZXRJdGVtQ291bnQoaXRlbUNvdW50KTtcclxuICAgICAgICBzZXRJdGVtcyhhY3RpdmVJdGVtcyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURvdWJsZUNsaWNrID0gaXRlbUlkID0+IHtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIC8vIGl0ZW1JZOyXkCDrp57ripQgaW5kZXgg7LC+7JWE7IScIGNoYW5nZWFibGXsnYQgdHJ1ZeuhnFxyXG4gICAgICBjb25zdCBtb2RpZmllZEl0ZW1zID0gaXRlbXMubWFwKHZhbHVlID0+IHtcclxuICAgICAgICBjb25zdCBjaGFuZ2VhYmxlID0gdmFsdWUuaXRlbUlkID09PSBpdGVtSWQ7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4udmFsdWUsIGNoYW5nZWFibGUsIGRlbGV0YWJsZTogZmFsc2UgfTtcclxuICAgICAgfSk7XHJcbiAgICAgIHNldEl0ZW1zKG1vZGlmaWVkSXRlbXMpO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVJdGVtQ2hhbmdlID0gaXRlbUlkID0+IHtcclxuICAgIHJldHVybiAoeyB0YXJnZXQgfSkgPT4ge1xyXG4gICAgICAvLyBpdGVtSWTqsJnsnYAg6rKD7J2EIOywvuyVhCBuYW1l7J2EIHRhcmdldC52YWx1ZeuhnCDrsJTqv4hcclxuICAgICAgY29uc3QgbW9kaWZpZWRJdGVtcyA9IGl0ZW1zLm1hcCh2YWx1ZSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IHZhbHVlLml0ZW1JZCA9PT0gaXRlbUlkID8gdGFyZ2V0LnZhbHVlIDogdmFsdWUubmFtZTtcclxuICAgICAgICByZXR1cm4geyAuLi52YWx1ZSwgbmFtZSB9O1xyXG4gICAgICB9KTtcclxuICAgICAgc2V0SXRlbXMobW9kaWZpZWRJdGVtcyk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN1Ym1pdE1vZGlmaWVkTmFtZSA9IGl0ZW1JZCA9PiB7XHJcbiAgICBjb25zdCBpbmRleCA9IGl0ZW1zLmZpbmRJbmRleCh2YWx1ZSA9PiB2YWx1ZS5pdGVtSWQgPT09IGl0ZW1JZCk7XHJcbiAgICBjb25zdCBpdGVtID0gaXRlbXNbaW5kZXhdO1xyXG4gICAgYXhpb3NcclxuICAgICAgLnB1dChgL2FwaS8ke2l0ZW0uY29tcGxldGVGbGFnID8gJ2NvbXBsZXRlZCcgOiAnYWN0aXZlJ30vJHtpdGVtSWR9YCwge1xyXG4gICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHsgc3RhdHVzIH0pID0+IHtcclxuICAgICAgICBpZiAoc3RhdHVzID09PSA0MTMpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgICBjb25zdCBtb2RpZmllZEl0ZW1zID0gWy4uLml0ZW1zXTtcclxuICAgICAgICAgIG1vZGlmaWVkSXRlbXNbaW5kZXhdLmNoYW5nZWFibGUgPSBmYWxzZTtcclxuICAgICAgICAgIHNldEl0ZW1zKG1vZGlmaWVkSXRlbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT25CbHVyID0gaXRlbUlkID0+IHtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHN1Ym1pdE1vZGlmaWVkTmFtZShpdGVtSWQpO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVJdGVtRW50ZXIgPSBpdGVtSWQgPT4ge1xyXG4gICAgcmV0dXJuICh7IGtleSB9KSA9PiB7XHJcbiAgICAgIGlmIChrZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICBzdWJtaXRNb2RpZmllZE5hbWUoaXRlbUlkKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVJdGVtU3RhdGVDaGFuZ2UgPSBpdGVtSWQgPT4ge1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgLy8gaXRlbUlk7JeQIOunnuuKlCBpbmRleCDssL7slYTshJwgY29tcGxldGVGbGFn67CY7KCEXHJcbiAgICAgIGNvbnN0IGluZGV4ID0gaXRlbXMuZmluZEluZGV4KHZhbHVlID0+IHZhbHVlLml0ZW1JZCA9PT0gaXRlbUlkKTtcclxuICAgICAgY29uc3QgbW9kaWZpZWRJdGVtcyA9IFsuLi5pdGVtc107XHJcbiAgICAgIGNvbnN0IGlzQ29tcGxldGVkID0gbW9kaWZpZWRJdGVtc1tpbmRleF0uY29tcGxldGVGbGFnO1xyXG4gICAgICBtb2RpZmllZEl0ZW1zW2luZGV4XS5jb21wbGV0ZUZsYWcgPSBpc0NvbXBsZXRlZCA/IDAgOiAxO1xyXG4gICAgICBjb25zdCByZXF1ZXN0VVJJID0gYC9hcGkvJHtcclxuICAgICAgICBpc0NvbXBsZXRlZCA/ICdjb21wbGV0ZWQnIDogJ2FjdGl2ZSdcclxuICAgICAgfS8ke2l0ZW1JZH1gO1xyXG4gICAgICBheGlvcy5wdXQocmVxdWVzdFVSSSkudGhlbigoeyBzdGF0dXMgfSkgPT4ge1xyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgICAgc2V0SXRlbXMobW9kaWZpZWRJdGVtcyk7XHJcbiAgICAgICAgICBzZXRBY3RpdmVDb3VudChpc0NvbXBsZXRlZCA/IGFjdGl2ZUNvdW50ICsgMSA6IGFjdGl2ZUNvdW50IC0gMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlSXRlbURlbGV0ZSA9IGl0ZW1JZCA9PiB7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAvLyBpdGVtSWTsl5Ag66ee64qUIGluZGV4IOywvuyVhOyEnCDsoJzqsbDtlZwg65KkIGFwaSDsmpTssq1cclxuICAgICAgY29uc3QgaW5kZXggPSBpdGVtcy5maW5kSW5kZXgodmFsdWUgPT4gdmFsdWUuaXRlbUlkID09PSBpdGVtSWQpO1xyXG4gICAgICBjb25zdCBpc0NvbXBsZXRlZCA9IGl0ZW1zW2luZGV4XS5jb21wbGV0ZUZsYWc7XHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLmRlbGV0ZShgL2FwaS8ke2lzQ29tcGxldGVkID8gJ2NvbXBsZXRlZCcgOiAnYWN0aXZlJ30vJHtpdGVtSWR9YClcclxuICAgICAgICAudGhlbigoeyBzdGF0dXMgfSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vZGlmaWVkSXRlbXMgPSBpdGVtcy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgdmFsdWUgPT4gdmFsdWUuaXRlbUlkICE9PSBpdGVtSWQsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHNldEl0ZW1zKG1vZGlmaWVkSXRlbXMpO1xyXG4gICAgICAgICAgICBzZXRJdGVtQ291bnQoaXRlbUNvdW50IC0gMSk7XHJcbiAgICAgICAgICAgIHNldEFjdGl2ZUNvdW50KGlzQ29tcGxldGVkID8gYWN0aXZlQ291bnQgOiBhY3RpdmVDb3VudCAtIDEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVNb3VzZU92ZXIgPSBpdGVtSWQgPT4ge1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgLy8gaXRlbUlk7JeQIOunnuuKlCBpbmRleCDssL7slYTshJwgZGVsZXRhYmxl7J2EIHRydWXroZxcclxuICAgICAgY29uc3QgbW9kaWZpZWRJdGVtcyA9IGl0ZW1zLm1hcCh2YWx1ZSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGVsZXRhYmxlID0gdmFsdWUuaXRlbUlkID09PSBpdGVtSWQ7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4udmFsdWUsIGRlbGV0YWJsZSB9O1xyXG4gICAgICB9KTtcclxuICAgICAgc2V0SXRlbXMobW9kaWZpZWRJdGVtcyk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vdXNlT3V0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbW9kaWZpZWRJdGVtcyA9IGl0ZW1zLm1hcCh2YWx1ZSA9PiB7XHJcbiAgICAgIHJldHVybiB7IC4uLnZhbHVlLCBkZWxldGFibGU6IGZhbHNlIH07XHJcbiAgICB9KTtcclxuICAgIHNldEl0ZW1zKG1vZGlmaWVkSXRlbXMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHtcclxuICAgIGxvY2F0aW9uOiB7IHBhdGhuYW1lIH0sXHJcbiAgfSA9IHByb3BzO1xyXG4gIGNvbnN0IG1vZGlmaWVkSXRlbXMgPSBpdGVtcy5maWx0ZXIodmFsdWUgPT4ge1xyXG4gICAgaWYgKHBhdGhuYW1lID09PSAnLycgfHwgcGF0aG5hbWUgPT09ICcvYWxsJykge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChwYXRobmFtZSA9PT0gJy9hY3RpdmUnICYmIHZhbHVlLmNvbXBsZXRlRmxhZyA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChwYXRobmFtZSA9PT0gJy9jb21wbGV0ZWQnICYmIHZhbHVlLmNvbXBsZXRlRmxhZyA9PT0gMSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJJdGVtTGlzdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxQb3N0XHJcbiAgICAgICAgICBpbnB1dFZhbHVlPXtwb3N0SW5wdXRWYWx1ZX1cclxuICAgICAgICAgIGhhbmRsZUNsaWNrPXtoYW5kbGVQb3N0Q2xpY2t9XHJcbiAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZVBvc3RDaGFuZ2V9XHJcbiAgICAgICAgICBoYW5kbGVFbnRlcj17aGFuZGxlUG9zdEVudGVyfVxyXG4gICAgICAgICAgaXNDbGlja2FibGU9e2l0ZW1Db3VudH1cclxuICAgICAgICAgIGlzQWxsQ29tcGxldGVkPXtpdGVtQ291bnQgJiYgIWFjdGl2ZUNvdW50fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAge21vZGlmaWVkSXRlbXMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8SXRlbVxyXG4gICAgICAgICAgICAgICAga2V5PXt2YWx1ZS5pdGVtSWR9XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VhYmxlPXt2YWx1ZS5jaGFuZ2VhYmxlfVxyXG4gICAgICAgICAgICAgICAgZGVsZXRhYmxlPXt2YWx1ZS5kZWxldGFibGV9XHJcbiAgICAgICAgICAgICAgICBvcmRlcj17aW5kZXggKyAxfVxyXG4gICAgICAgICAgICAgICAgaXRlbUlkPXt2YWx1ZS5pdGVtSWR9XHJcbiAgICAgICAgICAgICAgICBuYW1lPXt2YWx1ZS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgaXNDb21wbGV0ZWQ9e3ZhbHVlLmNvbXBsZXRlRmxhZ31cclxuICAgICAgICAgICAgICAgIGhhbmRsZURvdWJsZUNsaWNrPXtoYW5kbGVEb3VibGVDbGlja31cclxuICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlSXRlbUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIGhhbmRsZU9uQmx1cj17aGFuZGxlT25CbHVyfVxyXG4gICAgICAgICAgICAgICAgaGFuZGxlRW50ZXI9e2hhbmRsZUl0ZW1FbnRlcn1cclxuICAgICAgICAgICAgICAgIGhhbmRsZVN0YXRlQ2hhbmdlPXtoYW5kbGVJdGVtU3RhdGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVEZWxldGU9e2hhbmRsZUl0ZW1EZWxldGV9XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVNb3VzZU92ZXI9e2hhbmRsZU1vdXNlT3Zlcn1cclxuICAgICAgICAgICAgICAgIGhhbmRsZU1vdXNlT3V0PXtoYW5kbGVNb3VzZU91dH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICB7KGlzSGVscGluZ1Nob3dpbmcgPT4ge1xyXG4gICAgICAgICAgaWYgKGlzSGVscGluZ1Nob3dpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8SGVscGluZ1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlQ2xpY2s9e2hhbmRsZUhlbHBpbmdDbGlja31cclxuICAgICAgICAgICAgICAgIGxlZnQ9e2FjdGl2ZUNvdW50fVxyXG4gICAgICAgICAgICAgICAgaXNDbGVhcmFibGU9e2l0ZW1Db3VudCAmJiBpdGVtQ291bnQgLSBhY3RpdmVDb3VudH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pKGl0ZW1Db3VudCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbkl0ZW1MaXN0LnByb3BUeXBlcyA9IHtcclxuICBsb2NhdGlvbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSXRlbUxpc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=