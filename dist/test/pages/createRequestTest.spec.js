'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chai = require('chai');

var _enzyme = require('enzyme');

var _createrequest = require('../../pages/createrequest');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<CreateRequest />', function () {
  var wrapper = void 0;
  var props = {
    createRequestAction: function createRequestAction() {},
    logout: function logout() {},
    requestDetail: {
      checkStatus: {
        isLoading: false,
        success: false,
        error: false
      }
    },
    userDetail: {
      checkStatus: {
        isLoading: false,
        success: false,
        error: false
      }
    },
    history: {
      push: jest.fn()
    },
    error: ''
  };
  it('stores a snapshot of the component', function () {
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_createrequest.CreateRequest, props));

    expect(wrapper).toMatchSnapshot();
  });
  it('Should check if the wrapper contains instance of CreateRequest page', function () {
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_createrequest.CreateRequest, props));
    (0, _chai.expect)(wrapper.instance()).to.be.instanceof(_createrequest.CreateRequest);
  });

  it('the validator function should return true when validation is successfull', function () {
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_createrequest.CreateRequest, props));
    wrapper.setState({
      department: 'Technical',
      equipment: 'computer',
      serialnumber: '12345678',
      title: 'Repair computer',
      description: 'the computer fell and broke'
    });

    var _wrapper$instance = wrapper.instance(),
        validate = _wrapper$instance.validate;

    var result = validate();

    expect(result).toBe(true);
  });
  it('should check that the handlechange function should clear the errors  when valid input is written', function () {
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_createrequest.CreateRequest, props));
    wrapper.setState({
      department: 'Technical',
      equipment: 'computer',
      serialnumber: '12345678',
      title: 'Repair computer',
      description: 'the computer fell and broke',
      errors: {
        department: ['the department is required.']
      }
    });

    var _wrapper$instance2 = wrapper.instance(),
        handleChange = _wrapper$instance2.handleChange;

    handleChange({
      target: {
        value: 'Technical',
        name: 'department'
      }
    });

    expect(wrapper.state().errors.department).toBe('');
  });
  it('Should check if department is supplied on successful CreateRequest', function () {
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_createrequest.CreateRequest, props));
    var initialState = wrapper.state();
    wrapper.setState(_extends({}, initialState, { department: 'technical' }));
    (0, _chai.expect)(wrapper.state().department).to.be.equal('technical');
  });
  it('Should check if equipment is supplied on successful CreateRequest', function () {
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_createrequest.CreateRequest, props));
    var initialState = wrapper.state();
    wrapper.setState(_extends({}, initialState, { equipment: 'computer' }));
    (0, _chai.expect)(wrapper.state().equipment).to.be.equal('computer');
  });
  it('Should check if equipment is supplied on successful CreateRequest', function () {
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_createrequest.CreateRequest, props));
    var initialState = wrapper.state();
    wrapper.setState(_extends({}, initialState, { serialnumber: '1111' }));
    (0, _chai.expect)(wrapper.state().serialnumber).to.be.equal('1111');
  });
  it('Should check if equipment is supplied on successful CreateRequest', function () {
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_createrequest.CreateRequest, props));
    var initialState = wrapper.state();
    wrapper.setState(_extends({}, initialState, { title: 'Repair computer' }));
    (0, _chai.expect)(wrapper.state().title).to.be.equal('Repair computer');
  });
  it('Should check if equipment is supplied on successful CreateRequest', function () {
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_createrequest.CreateRequest, props));
    var initialState = wrapper.state();
    wrapper.setState(_extends({}, initialState, { description: 'the computer fell and broke' }));
    (0, _chai.expect)(wrapper.state().description).to.be.equal('the computer fell and broke');
  });
  it('Should handle and store user details', function () {
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_createrequest.CreateRequest, props));
    (0, _chai.expect)(wrapper.instance().handleChange({ target: { value: 'title' } })).to.be.equal(true);
  });
  it('Should handle and store user details', function () {
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_createrequest.CreateRequest, props));
    (0, _chai.expect)(wrapper.instance().handleChange({ target: { value: 'description' } })).to.be.equal(true);
  });
  it('Should handle and store user details', function () {
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_createrequest.CreateRequest, props));
    (0, _chai.expect)(wrapper.instance().handleChange({ target: { value: 'serialnumber' } })).to.be.equal(true);
  });
  it('Should handle and store user details', function () {
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_createrequest.CreateRequest, props));
    (0, _chai.expect)(wrapper.instance().handleChange({ target: { value: 'department' } })).to.be.equal(true);
  });
  it('Should handle and store user details', function () {
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_createrequest.CreateRequest, props));
    (0, _chai.expect)(wrapper.instance().handleChange({ target: { value: 'equipment' } })).to.be.equal(true);
  });
  it('Should handle user details validation', function () {
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_createrequest.CreateRequest, props));
    (0, _chai.expect)(wrapper.instance().validate()).to.be.equal(false);
  });

  it('Should handle submitting a Request of a user', function () {
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_createrequest.CreateRequest, props));
    (0, _chai.expect)(wrapper.instance().handleSubmit({ preventDefault: function preventDefault() {} })).to.be.equal(true);
  });
  it('Should handle loading on success or error', function () {
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_createrequest.CreateRequest, _extends({}, props, {
      requestDetail: {
        checkStatus: {
          isLoading: false
        }
      }
    })));
    expect(wrapper.find('.loader').length).toBe(0);
  });
  it('Should handle submit method', function () {
    var actual = wrapper.instance().handleSubmit({ preventDefault: function preventDefault() {} });
    expect(actual).toBeDefined();
  });
  it('Should handle logout method', function () {
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_createrequest.CreateRequest, props));
    expect(wrapper.instance().logout()).toBe(true);
  });
  it('Should handle submit', function () {
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_createrequest.CreateRequest, props));
    var event = {
      preventDefault: function preventDefault() {}
    };
    expect(wrapper.instance().handleSubmit(event)).toBe(true);
  });
});