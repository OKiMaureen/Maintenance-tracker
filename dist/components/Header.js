'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

var _shortId = require('short-id');

var _shortId2 = _interopRequireDefault(_shortId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      toggleNav: false
    }, _this.toggleNavbar = function () {
      var toggleNav = _this.state.toggleNav;

      _this.setState({ toggleNav: !toggleNav });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var toggleNav = this.state.toggleNav;

      return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
          'nav',
          null,
          _react2.default.createElement(
            'div',
            { className: 'nav-container' },
            _react2.default.createElement(
              'a',
              { className: 'btn', onClick: this.toggleNavbar },
              _react2.default.createElement('div', { className: 'bar' }),
              _react2.default.createElement('div', { className: 'bar' }),
              _react2.default.createElement('div', { className: 'bar' })
            )
          ),
          _react2.default.createElement(
            'ul',
            { id: 'toggle', className: toggleNav ? 'show' : '' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/' },
              'Maintenance Tracker'
            ),
            children.map(function (link) {
              return _react2.default.createElement(
                'li',
                { key: _shortId2.default.generate() },
                link
              );
            })
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

Header.propTypes = {
  children: _propTypes2.default.objectOf(_propTypes2.default.object).isRequired
};

exports.default = Header;