import React from 'react';
import { expect as e } from 'chai';
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
    history: {},
    error: '',
  };


  it('Should return number of input field on Signup page', () => {
    wrapper = shallow(<Signup {...props} />);
    e(wrapper.find('input')).to.have.length(4);
  });
  it('stores a snapshot of the component', () => {
    wrapper = shallow(<Signup {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
  it('Should return number of button on Signup page', () => {
    wrapper = shallow(<Signup {...props} />);
    e(wrapper.find('button')).to.have.length(1);
  });
  it('Should check if the wrapper contains instance of Signup page', () => {
    wrapper = shallow(<Signup {...props} />);
    e(wrapper.instance()).to.be.instanceof(Signup);
  });

  it('Should check if name is supplied on successful signup', () => {
    wrapper = shallow(<Signup {...props} />);
    const initialState = wrapper.state();
    wrapper.setState({ ...initialState, name: 'maureen' });
    e(wrapper.state().name).to.be.equal('maureen');
  });

  it('the validator function should return true when validation is successfull', () => {
    wrapper = shallow(<Signup {...props} />);
    wrapper.setState({
      name: 'maureen',
      email: 'maureen@mail.ru',
      password: 'password',
      password_confirmation: 'password',
    });
    const { validate } = wrapper.instance();

    const result = validate();

    expect(result).toBe(true);
  });
  it('should check that the handlechange function should clear the errors  when valid input is written', () => {
    wrapper = shallow(<Signup {...props} />);
    wrapper.setState({
      name: 'maureen',
      email: 'maureen@mail.com',
      password: 'password',
      password_confirmation: 'password',
      errors: {
        name: ['the name is required.'],
      },
    });
    const { handleChange } = wrapper.instance();
    handleChange({
      target: {
        value: 'maureen',
        name: 'name',
      },
    });

    expect(wrapper.state().errors.name).toBe('');
  });

  it('the handlesubmit function should return error if password and password confirmation do not match', () => {
    wrapper = shallow(<Signup {...props} />);
    wrapper.setState({
      name: 'maureen',
      email: 'maureen@mail.com',
      password: 'password',
      password_confirmation: 'Notpassword',
      errors: {
        password_confirmation: ['Password and password confirmation must be the same'],
      },
    });
    const { handleSubmit } = wrapper.instance();
    handleSubmit({ preventDefault: () => {} });

    expect(wrapper.state().errors.password_confirmation).toEqual(['Password and password confirmation must be the same']);
  });

  it('Should check if email is supplied on successful signup', () => {
    wrapper = shallow(<Signup {...props} />);
    const initialState = wrapper.state();
    wrapper.setState({ ...initialState, email: 'maureen@gmail.com' });
    e(wrapper.state().email).to.be.equal('maureen@gmail.com');
  });
  it('Should check if password is supplied on successful signup', () => {
    wrapper = shallow(<Signup {...props} />);
    const initialState = wrapper.state();
    wrapper.setState({ ...initialState, password: 'maureen' });
    e(wrapper.state().password).to.be.equal('maureen');
  });
  it('Should check if password_confirmation is supplied on the Signup page', () => {
    wrapper = shallow(<Signup {...props} />);
    const initialState = wrapper.state();
    wrapper.setState({ ...initialState, password_confirmation: 'maureen' });
    e(wrapper.state().password_confirmation).to.be.equal('maureen');
  });
  it('Should check if password_confirmation is supplied on the Signup page', () => {
    wrapper = shallow(<Signup {...props} />);
    const initialState = wrapper.state();
    wrapper.setState({ ...initialState, errors: '{}' });
    e(wrapper.state().errors).to.be.equal('{}');
  });

  it('should set user name to state when user types', () => {
    wrapper = shallow(<Signup {...props} />);
    const input = wrapper.find('input[name="name"]');
    input.simulate('change', {
      target: {
        value: 'maureen',
        name: 'name',
      },
    });

    e(wrapper.state().name).to.equal('maureen');
  });

  it('Should handle and store user details', () => {
    wrapper = shallow(<Signup {...props} />);
    e(wrapper.instance().handleChange({ target: { value: 'name' } })).to.be.equal(true);
  });

  it('Should handle and store user details', () => {
    wrapper = shallow(<Signup {...props} />);
    e(wrapper.instance().handleChange({ target: { value: 'email' } })).to.be.equal(true);
  });
  it('Should handle and store user details', () => {
    wrapper = shallow(<Signup {...props} />);
    e(wrapper.instance().handleChange({ target: { value: 'password' } })).to.be.equal(true);
  });

  it('Should handle user details validation', () => {
    wrapper = shallow(<Signup {...props} />);
    e(wrapper.instance().validate()).to.be.equal(false);
  });

  it('Should handle signing up new user', () => {
    wrapper = shallow(<Signup {...props} />);
    e(wrapper.instance().handleSubmit({ preventDefault: () => {} })).to.be.equal(true);
  });
  it('Should handle loading a loader', () => {
    wrapper = shallow(<Signup
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
    wrapper = shallow(<Signup
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
    wrapper = shallow(<Signup
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
    wrapper = shallow(<Signup
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
});
