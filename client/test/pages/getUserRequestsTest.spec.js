import React from 'react';
// import { expect as e } from 'chai';
import { shallow } from 'enzyme';
import { AllRequests } from '../../pages/AllRequests';


describe('<AllRequest />', () => {
  let wrapper;
  let props = {
    allRequestAction: () => {},
    requests: [
      {
        id: 1,
        user_id: 1,
        title: 'repair computer',
        department: 'technology',
        equipment: 'computer',
        requeststatus: 'pending',
        description: 'repair laptop',
        serialnumber: 111111111,
      },
      {
        id: 2,
        user_id: 2,
        title: 'repair computer',
        department: 'technology',
        equipment: 'computer',
        requeststatus: 'pending',
        description: 'repair laptop',
        serialnumber: 111111111,
      },
    ],
    history: {
      push: jest.fn(),
    },
  };

  it('stores a snapshot of the component', () => {
    wrapper = shallow(<AllRequests {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
  it('Should handle logout method', () => {
    wrapper = shallow(<AllRequests {...props} />);
    expect(wrapper.instance().logout()).toBe(true);
  });
  it('Should display request title when request loads and it exists', () => {
    props = {
      allRequestAction: () => {},
      requests: [
        {
          id: 1,
          user_id: 1,
          title: 'repair computer',
          department: 'technology',
          equipment: 'computer',
          requeststatus: 'pending',
          description: 'repair laptop',
          serialnumber: 111111111,
        },
        {
          id: 2,
          user_id: 2,
          title: 'repair computer',
          department: 'technology',
          equipment: 'computer',
          requeststatus: 'pending',
          description: 'repair laptop',
          serialnumber: 111111111,
        },
      ],
    };

    wrapper = shallow(<AllRequests {...props} />);
    expect(wrapper.find('label').exists()).toBe(true);
  });
  it('Should display request title when request loads and it exists', () => {
    props = {
      allRequestAction: () => {},
      requests: [],
    };

    wrapper = shallow(<AllRequests {...props} />);
    expect(wrapper.find('label').exists()).toBe(false);
  });
  it('Should display request title when request loads and it exists', () => {
    props = {
      allRequestAction: () => {},
      requests: [
        { requeststatus: 'pending' },
      ],
    };

    wrapper = shallow(<AllRequests {...props} />);
    expect(wrapper.find('.yellow').exists()).toBe(true);
  });
  it('Should display request title when request loads and it exists', () => {
    props = {
      allRequestAction: () => {},
      requests: [
        { requeststatus: 'approved' },
      ],
    };

    wrapper = shallow(<AllRequests {...props} />);
    expect(wrapper.find('.green').exists()).toBe(true);
  });
  it('Should display request title when request loads and it exists', () => {
    props = {
      allRequestAction: () => {},
      requests: [
        { requeststatus: 'disapproved' },
      ],
    };

    wrapper = shallow(<AllRequests {...props} />);
    expect(wrapper.find('.red').exists()).toBe(true);
  });
  it('Should display request title when request loads and it exists', () => {
    props = {
      allRequestAction: () => {},
      requests: [
        { requeststatus: 'resolved' },
      ],
    };

    wrapper = shallow(<AllRequests {...props} />);
    expect(wrapper.find('.green').exists()).toBe(true);
  });
});
