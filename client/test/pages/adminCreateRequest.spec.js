import React from 'react';
import { expect as e } from 'chai';
import { shallow } from 'enzyme';
import { AdminCreateRequest } from '../../pages/AdminCreateRequest';

describe('<AdminCreateRequest />', () => {
  let wrapper;
  const props = {
    createRequestAction: () => {},
    logout: () => {},
    requestDetail: {
      checkStatus: {
        isLoading: false,
        success: false,
        error: false,
      },
    },
    userDetail: {
      checkStatus: {
        isLoading: false,
        success: false,
        error: false,
      },
    },
    history: {
      push: jest.fn(),
    },
    error: '',
  };
  it('stores a snapshot of the component', () => {
    wrapper = shallow(<AdminCreateRequest {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
  it('Should check if the wrapper contains instance of AdminCreateRequest page', () => {
    wrapper = shallow(<AdminCreateRequest {...props} />);
    e(wrapper.instance()).to.be.instanceof(AdminCreateRequest);
  });

  it('the validator function should return true when validation is successfull', () => {
    wrapper = shallow(<AdminCreateRequest {...props} />);
    wrapper.setState({
      department: 'Technical',
      equipment: 'computer',
      serialnumber: '12345678',
      title: 'Repair computer',
      description: 'the computer fell and broke',
    });
    const { validate } = wrapper.instance();

    const result = validate();

    expect(result).toBe(true);
  });
  it('should check that the handlechange function should clear the errors  when valid input is written', () => {
    wrapper = shallow(<AdminCreateRequest {...props} />);
    wrapper.setState({
      department: 'Technical',
      equipment: 'computer',
      serialnumber: '12345678',
      title: 'Repair computer',
      description: 'the computer fell and broke',
      errors: {
        department: ['the department is required.'],
      },
    });
    const { handleChange } = wrapper.instance();
    handleChange({
      target: {
        value: 'Technical',
        name: 'department',
      },
    });

    expect(wrapper.state().errors.department).toBe('');
  });
  it('Should check if department is supplied on successful AdminCreateRequest', () => {
    wrapper = shallow(<AdminCreateRequest {...props} />);
    const initialState = wrapper.state();
    wrapper.setState({ ...initialState, department: 'technical' });
    e(wrapper.state().department).to.be.equal('technical');
  });
  it('Should check if equipment is supplied on successful AdminCreateRequest', () => {
    wrapper = shallow(<AdminCreateRequest {...props} />);
    const initialState = wrapper.state();
    wrapper.setState({ ...initialState, equipment: 'computer' });
    e(wrapper.state().equipment).to.be.equal('computer');
  });
  it('Should check if equipment is supplied on successful AdminCreateRequest', () => {
    wrapper = shallow(<AdminCreateRequest {...props} />);
    const initialState = wrapper.state();
    wrapper.setState({ ...initialState, serialnumber: '1111' });
    e(wrapper.state().serialnumber).to.be.equal('1111');
  });
  it('Should check if equipment is supplied on successful AdminCreateRequest', () => {
    wrapper = shallow(<AdminCreateRequest {...props} />);
    const initialState = wrapper.state();
    wrapper.setState({ ...initialState, title: 'Repair computer' });
    e(wrapper.state().title).to.be.equal('Repair computer');
  });
  it('Should check if equipment is supplied on successful AdminCreateRequest', () => {
    wrapper = shallow(<AdminCreateRequest {...props} />);
    const initialState = wrapper.state();
    wrapper.setState({ ...initialState, description: 'the computer fell and broke' });
    e(wrapper.state().description).to.be.equal('the computer fell and broke');
  });
  it('Should handle and store user details', () => {
    wrapper = shallow(<AdminCreateRequest {...props} />);
    e(wrapper.instance().handleChange({ target: { value: 'title' } })).to.be.equal(true);
  });
  it('Should handle and store user details', () => {
    wrapper = shallow(<AdminCreateRequest {...props} />);
    e(wrapper.instance().handleChange({ target: { value: 'description' } })).to.be.equal(true);
  });
  it('Should handle and store user details', () => {
    wrapper = shallow(<AdminCreateRequest {...props} />);
    e(wrapper.instance().handleChange({ target: { value: 'serialnumber' } })).to.be.equal(true);
  });
  it('Should handle and store user details', () => {
    wrapper = shallow(<AdminCreateRequest {...props} />);
    e(wrapper.instance().handleChange({ target: { value: 'department' } })).to.be.equal(true);
  });
  it('Should handle and store user details', () => {
    wrapper = shallow(<AdminCreateRequest {...props} />);
    e(wrapper.instance().handleChange({ target: { value: 'equipment' } })).to.be.equal(true);
  });
  it('Should handle user details validation', () => {
    wrapper = shallow(<AdminCreateRequest {...props} />);
    e(wrapper.instance().validate()).to.be.equal(false);
  });

  it('Should handle submitting a Request of a user', () => {
    wrapper = shallow(<AdminCreateRequest {...props} />);
    e(wrapper.instance().handleSubmit({ preventDefault: () => {} })).to.be.equal(true);
  });
  it('Should handle loading on success or error', () => {
    wrapper = shallow(<AdminCreateRequest
      {...props}
      requestDetail={{
      checkStatus: {
        isLoading: false,
      },
    }}
    />);
    expect(wrapper.find('.loader').length).toBe(0);
  });
  it('Should handle submit method', () => {
    const actual = wrapper.instance().handleSubmit({ preventDefault: () => {} });
    expect(actual).toBeDefined();
  });
  it('Should handle logout method', () => {
    wrapper = shallow(<AdminCreateRequest {...props} />);
    expect(wrapper.instance().logout()).toBe(true);
  });
  it('Should handle submit', () => {
    wrapper = shallow(<AdminCreateRequest {...props} />);
    const event = {
      preventDefault: () => {},
    };
    expect(wrapper.instance().handleSubmit(event)).toBe(true);
  });
});
