import React from 'react';
import { expect as e } from 'chai';
import { shallow } from 'enzyme';
import { Signin } from '../../pages/Signin';


describe('<SignIn />', () => {
  let wrapper;
  const props = {
    signInAction: () => {},
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
    history: {},
    error: '',
  };
  it('Should return number of input field on Signin page', () => {
    wrapper = shallow(<Signin {...props} />);
    e(wrapper.find('input')).to.have.length(2);
  });
  it('stores a snapshot of the component', () => {
    wrapper = shallow(<Signin {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
  it('Should return number of button on Signin page', () => {
    wrapper = shallow(<Signin {...props} />);
    e(wrapper.find('button')).to.have.length(1);
  });
  it('Should check if the wrapper contains instance of Signin page', () => {
    wrapper = shallow(<Signin {...props} />);
    e(wrapper.instance()).to.be.instanceof(Signin);
  });

  it('the validator function should return true when validation is successfull', () => {
    wrapper = shallow(<Signin {...props} />);
    wrapper.setState({
      email: 'maureen@mail.ru',
      password: 'password',
    });
    const { validate } = wrapper.instance();

    const result = validate();

    expect(result).toBe(true);
  });
  it('the handlechange function should clear the errors  when valid input is written', () => {
    wrapper = shallow(<Signin {...props} />);
    wrapper.setState({
      email: 'maureen@mail.com',
      password: 'password',
      errors: {
        password: '',
      },
    });
    const { handleChange } = wrapper.instance();
    handleChange({
      target: {
        value: 'password',
        name: 'password',
      },
    });

    expect(wrapper.state().errors.password).toBe('');
  });
  it('Should check if email is supplied on successful Signin', () => {
    wrapper = shallow(<Signin {...props} />);
    const initialState = wrapper.state();
    wrapper.setState({ ...initialState, email: 'maureen@gmail.com' });
    e(wrapper.state().email).to.be.equal('maureen@gmail.com');
  });
  it('Should check if password is supplied on successful Signin', () => {
    wrapper = shallow(<Signin {...props} />);
    const initialState = wrapper.state();
    wrapper.setState({ ...initialState, password: 'maureen' });
    e(wrapper.state().password).to.be.equal('maureen');
  });
  it('Should handle and store user details', () => {
    wrapper = shallow(<Signin {...props} />);
    e(wrapper.instance().handleChange({ target: { value: 'email' } })).to.be.equal(true);
  });
  it('Should handle and store user details', () => {
    wrapper = shallow(<Signin {...props} />);
    e(wrapper.instance().handleChange({ target: { value: 'password' } })).to.be.equal(true);
  });

  it('Should handle user details validation', () => {
    wrapper = shallow(<Signin {...props} />);
    e(wrapper.instance().validate()).to.be.equal(false);
  });

  it('Should handle signing in a user', () => {
    wrapper = shallow(<Signin {...props} />);
    e(wrapper.instance().handleSubmit({ preventDefault: () => {} })).to.be.equal(true);
  });
  it('Should handle loading a loader', () => {
    wrapper = shallow(<Signin
      {...props}
      userDetail={{
      checkStatus: {
        isLoading: true,
      },
    }}
    />);
    expect(wrapper.find('.loader').length).toBe(1);
  });
  it('Should handle loading a not loading on success or error', () => {
    wrapper = shallow(<Signin
      {...props}
      userDetail={{
      checkStatus: {
        isLoading: false,
      },
    }}
    />);
    expect(wrapper.find('.loader').length).toBe(0);
  });
  it('Should handle loading the error message', () => {
    wrapper = shallow(<Signin
      {...props}
      userDetail={{
        checkStatus: {
          isLoading: false,
      },

      error: 'Email already exists',
    }}
    />);
    expect(wrapper.find('.validation-error').length).toBe(1);
  });
  it('Should handle  not loading the error message on success or loading', () => {
    wrapper = shallow(<Signin
      {...props}
      userDetail={{
        checkStatus: {
          isLoading: false,
      },

      error: '',
    }}
    />);
    expect(wrapper.find('.validation-error').length).toBe(0);
  });
  it('Should handle submit method', () => {
    const actual = wrapper.instance().handleSubmit({ preventDefault: () => {} });
    expect(actual).toBeDefined();
  });
  it('Should handle submit', () => {
    wrapper = shallow(<Signin {...props} />);
    const event = {
      preventDefault: () => {},
    };
    expect(wrapper.instance().handleSubmit(event)).toBe(true);
  });
});
