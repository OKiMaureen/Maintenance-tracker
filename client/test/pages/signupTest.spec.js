import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { Signup } from '../../pages/Signup';


describe('<SignUp />', () => {
  let wrapper;
  const props = {
    signUpAction: () => {},
    userDetail: {
      authUser: {
        id: 1,
        name: 'maureen',
        email: 'ccureen.eloho@gmail.com',
        role: 'user',
      },
      checkStatus: {
        isLoading: false,
        success: false,
        error: false,
      },
    },

  };


  it('Should return number of input field on Signup page', () => {
    wrapper = shallow(<Signup {...props} />);
    expect(wrapper.find('input')).to.have.length(4);
  });
  it('Should return number of button on Signup page', () => {
    wrapper = shallow(<Signup {...props} />);
    expect(wrapper.find('button')).to.have.length(1);
  });
  it('Should check if the wrapper contains instance of Signup page', () => {
    wrapper = shallow(<Signup {...props} />);
    expect(wrapper.instance()).to.be.instanceof(Signup);
  });

  it('Should check if name is supplied on successful signup', () => {
    wrapper = shallow(<Signup {...props} />);
    const initialState = wrapper.state();
    wrapper.setState({ ...initialState, name: 'maureen' });
    expect(wrapper.state().name).to.be.equal('maureen');
  });

  it('Should check if email is supplied on successful signup', () => {
    wrapper = shallow(<Signup {...props} />);
    const initialState = wrapper.state();
    wrapper.setState({ ...initialState, email: 'maureen@gmail.com' });
    expect(wrapper.state().email).to.be.equal('maureen@gmail.com');
  });
  it('Should check if password is supplied on successful signup', () => {
    wrapper = shallow(<Signup {...props} />);
    const initialState = wrapper.state();
    wrapper.setState({ ...initialState, password: 'maureen' });
    expect(wrapper.state().password).to.be.equal('maureen');
  });
  it('Should check if password_confirmation is supplied on the Signup page', () => {
    wrapper = shallow(<Signup {...props} />);
    const initialState = wrapper.state();
    wrapper.setState({ ...initialState, password_confirmation: 'maureen' });
    expect(wrapper.state().password_confirmation).to.be.equal('maureen');
  });
  it('Should check if password_confirmation is supplied on the Signup page', () => {
    wrapper = shallow(<Signup {...props} />);
    const initialState = wrapper.state();
    wrapper.setState({ ...initialState, errors: '{}' });
    expect(wrapper.state().errors).to.be.equal('{}');
  });

  it('Should handle and store user details', () => {
    wrapper = shallow(<Signup {...props} />);
    expect(wrapper.instance().handleChange({ target: { value: 'name' } })).to.be.equal(true);
  });

  it('Should handle and store user details', () => {
    wrapper = shallow(<Signup {...props} />);
    expect(wrapper.instance().handleChange({ target: { value: 'email' } })).to.be.equal(true);
  });
  it('Should handle and store user details', () => {
    wrapper = shallow(<Signup {...props} />);
    expect(wrapper.instance().handleChange({ target: { value: 'password' } })).to.be.equal(true);
  });

  it('Should handle user details validation', () => {
    wrapper = shallow(<Signup {...props} />);
    expect(wrapper.instance().validate()).to.be.equal(false);
  });

  it('Should handle signing up new user', () => {
    wrapper = shallow(<Signup {...props} />);
    expect(wrapper.instance().handleSubmit({ preventDefault: () => {} })).to.be.equal(true);
  });

  // it('Should check password and confirm password field contains the value', () => {
  //   wrapper = shallow(<Signup { ...props } />);
  //   const OldState = wrapper.state().signUpDetails;
  //   wrapper.setState({ signUpDetails: Object.assign(OldState, { password: 'admin', confirmPassword: 'admin' }) });
  //   wrapper.instance().handleSignUpNewUser({ preventDefault: () => {} });
  //   expect(wrapper.state().checkAdminStatus).to.be.equal(false);
  // });

  // it('Should return the number of .container class ', () => {
  //   wrapper = shallow(<Signup { ...props } />);
  //   expect(wrapper.find('.container')).to.have.length(1);
  // });

  // it('Should return the number of form on signup page ', () => {
  //   wrapper = shallow(<Signup { ...props } />);
  //   expect(wrapper.find('form')).to.have.length(1);
  // });

  // it('Should return the number of form-group on signup page ', () => {
  //   wrapper = shallow(<Signup { ...props } />);
  //   expect(wrapper.find('.form-group')).to.have.length(5);
  // });

  // it('Should return the number of section-signUp class on signup page ', () => {
  //   wrapper = shallow(<Signup { ...props } />);
  //   expect(wrapper.find('.section-signUp')).to.have.length(1);
  // });

  // it('Should return the number of cover-section-signup on signup page ', () => {
  //   wrapper = shallow(<Signup { ...props } />);
  //   expect(wrapper.find('.cover-section-signup')).to.have.length(1);
  // });

  // it('Should return true when it spy on on handlelocation on signup component', () => {
  //   const spy = sinon.spy(Signup.prototype, 'handleSignUpNewUser');
  //   wrapper = shallow(<Signup {...props} />);
  //   wrapper.setState({
  //     signUpDetails: {
  //       firstName: 'First nane',
  //       lastName: 'last name',
  //       email: 'you@example.com',
  //       password: '12345',
  //       confirmPassword: '12345',
  //       isAdmin: false,
  //     },
  //   });
  //   wrapper.find('.sigUpinnersection').simulate('submit', { preventDefault: () => {} });
  //   expect(spy.called).to.be.equal(true);
  //   spy.restore();
  // });

  // it('Should return true when it spy on on handlelocation on signuop component', () => {
  //   const spy = sinon.spy(Signup.prototype, 'handleSignUpNewUser');
  //   wrapper = shallow(<Signup {...props} />);
  //   wrapper.setState({
  //     signUpDetails: {
  //       firstName: 'First nane',
  //       lastName: 'last name',
  //       email: 'you@example.com',
  //       password: '12345',
  //       confirmPassword: '123456',
  //       isAdmin: false,
  //     },
  //   });
  //   wrapper.find('.sigUpinnersection').simulate('submit', { preventDefault: () => {} });
  //   expect(spy.called).to.be.equal(true);
  //   spy.restore();
  // });
});
