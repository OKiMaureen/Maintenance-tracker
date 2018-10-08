'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'header',
      { className: 'header' },
      _react2.default.createElement(
        _Header2.default,
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/' },
          'Home'
        ),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: 'signin' },
          'Sign in'
        ),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: 'signup' },
          'Sign Up'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'banner' },
        _react2.default.createElement(
          'div',
          { className: 'banner-center' },
          _react2.default.createElement(
            'h1',
            null,
            'Maintenance Tracker'
          ),
          _react2.default.createElement(
            'h3',
            null,
            'Repairing one day at a time'
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/signin', className: 'button' },
              'Sign in'
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/signup', className: 'button' },
              'Sign up'
            )
          )
        )
      )
    ),
    _react2.default.createElement(
      'section',
      { className: 'about', id: 'about-section' },
      _react2.default.createElement(
        'div',
        { className: 'about-center' },
        _react2.default.createElement(
          'div',
          { className: 'about-heading' },
          _react2.default.createElement(
            'h2',
            null,
            'About'
          )
        ),
        _react2.default.createElement(
          'article',
          { className: 'about-article' },
          _react2.default.createElement(
            'div',
            { className: 'about-icon' },
            _react2.default.createElement('i', { className: 'fas fa-wrench' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'about-text' },
            _react2.default.createElement(
              'h3',
              null,
              'Quick Maintenance'
            ),
            _react2.default.createElement(
              'p',
              null,
              ' Report to us to provide quick maintainance for appliances and equipment that are deteriorating or in bad shape.'
            )
          )
        ),
        _react2.default.createElement(
          'article',
          { className: 'about-article' },
          _react2.default.createElement(
            'div',
            { className: 'about-icon' },
            _react2.default.createElement('i', { className: 'fas fa-cog' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'about-text' },
            _react2.default.createElement(
              'h3',
              null,
              'Durable Repairs'
            ),
            _react2.default.createElement(
              'p',
              null,
              ' Report to us for Repairs that will last long and are completely durable. We are the one stop for all office repairs.'
            )
          )
        ),
        _react2.default.createElement(
          'article',
          { className: 'about-article' },
          _react2.default.createElement(
            'div',
            { className: 'about-icon' },
            _react2.default.createElement('i', { className: 'fas fa-wrench' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'about-text' },
            _react2.default.createElement(
              'h3',
              null,
              'Effective'
            ),
            _react2.default.createElement(
              'p',
              null,
              ' Report to us for the most effective and efficient means of carrying out repairs to all office appliances.'
            )
          )
        )
      )
    )
  );
};

exports.default = Home;