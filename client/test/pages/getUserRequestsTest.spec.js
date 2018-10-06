import React from 'react';
import { shallow } from 'enzyme';
import { AllRequests } from '../../pages/AllRequests';


describe('<AllRequest />', () => {
  let wrapper;
  let props = {
    allRequest: () => {},
    logout: () => {},
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
  it('Should display request card when request loads and it exists', () => {
    props = {
      allRequest: () => {},
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
  it('Should not display request card when request does not exists', () => {
    props = {
      allRequest: () => {},
      requests: [],
    };

    wrapper = shallow(<AllRequests {...props} />);
    expect(wrapper.find('label').exists()).toBe(false);
  });
  it('Should handle logout method', () => {
    props = {
      allRequest: () => {},
      logout: () => {},
      history: {
        push: jest.fn(),
      },
    };
    wrapper = shallow(<AllRequests {...props} />);
    expect(wrapper.instance().logout()).toBe(true);
  });
  it('Should display request label as yellow when status is pending', () => {
    props = {
      allRequest: () => {},
      requests: [
        { requeststatus: 'pending' },
      ],
    };

    wrapper = shallow(<AllRequests {...props} />);
    expect(wrapper.find('.yellow').exists()).toBe(true);
  });
  it('Should display request label as green when status is approved', () => {
    props = {
      allRequest: () => {},
      requests: [
        { requeststatus: 'approved' },
      ],
    };

    wrapper = shallow(<AllRequests {...props} />);
    expect(wrapper.find('.green').exists()).toBe(true);
  });
  it('Should display request label as red when status is disapproved', () => {
    props = {
      allRequest: () => {},
      requests: [
        { requeststatus: 'disapproved' },
      ],
    };

    wrapper = shallow(<AllRequests {...props} />);
    expect(wrapper.find('.red').exists()).toBe(true);
  });
  it('Should display request label as green when status is resolved', () => {
    props = {
      allRequest: () => {},
      requests: [
        { requeststatus: 'resolved' },
      ],
    };

    wrapper = shallow(<AllRequests {...props} />);
    expect(wrapper.find('.green').exists()).toBe(true);
  });
});
