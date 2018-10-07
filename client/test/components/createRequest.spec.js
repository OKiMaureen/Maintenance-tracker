import React from 'react';
import { shallow } from 'enzyme';
import CreateRequest from '../../components/Request';


describe('Create request component test', () => {
  const props = {
    handleChange: () => {},
    handleSubmit: () => {},
    title: 'title',
    description: 'description',
    equipment: 'equipment',
    logout: () => {},


  };
  let requestDetail = {
    error: 'error',
  };
  let userDetail = {
    checkStatus: {
      isLoading: 'isloading',
    },
  };
  let errors = {
    department: [],
    equipment: [],
    title: [],
    description: [],
  };
  it('Should render properly', () => {
    const wrapper = shallow(<CreateRequest
      props={props}
      requestDetail={requestDetail}
      userDetail={userDetail}
      errors={errors}
    />);
    expect(wrapper.find('article').length).toEqual(1);
  });
  it('Should show errors for department', () => {
    errors = {
      department: ['department error'],
      equipment: ['equipment error'],
      title: ['title error'],
      description: ['description error'],
    };
    const wrapper = shallow(<CreateRequest
      props={props}
      requestDetail={requestDetail}
      userDetail={userDetail}
      errors={errors}
    />);
    expect(wrapper.find('.validation-error').length).toEqual(5);
  });
  it('Should not show errors for department', () => {
    errors = {};
    const wrapper = shallow(<CreateRequest
      props={props}
      requestDetail={requestDetail}
      userDetail={userDetail}
      errors={errors}
    />);
    expect(wrapper.find('.validation-error').length).toEqual(1);
  });
  it('Should show loader when loading', () => {
    userDetail = {
      checkStatus: {
        isLoading: true,
      },
    };
    const wrapper = shallow(<CreateRequest
      props={props}
      requestDetail={requestDetail}
      userDetail={userDetail}
      errors={errors}
    />);
    expect(wrapper.find('.loader').length).toEqual(1);
  });
  it('Should not show loader when not loading', () => {
    userDetail = {
      checkStatus: {
        isLoading: false,
      },
    };
    const wrapper = shallow(<CreateRequest
      props={props}
      requestDetail={requestDetail}
      userDetail={userDetail}
      errors={errors}
    />);
    expect(wrapper.find('.loader').length).toEqual(0);
  });
  it('Should  show error when no request is available', () => {
    requestDetail = {

      error: true,

    };
    const wrapper = shallow(<CreateRequest
      props={props}
      requestDetail={requestDetail}
      userDetail={userDetail}
      errors={errors}
    />);
    expect(wrapper.find('.validation-error').length).toEqual(1);
  });
  it('Should not show error when  request is available', () => {
    requestDetail = {

      error: false,

    };
    const wrapper = shallow(<CreateRequest
      props={props}
      requestDetail={requestDetail}
      userDetail={userDetail}
      errors={errors}
    />);
    expect(wrapper.find('.validation-error').length).toEqual(0);
  });
});
