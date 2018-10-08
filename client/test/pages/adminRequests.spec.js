import React from 'react';
import { shallow } from 'enzyme';
import { AdminRequests } from '../../pages/adminrequests';


describe('<Admin Requests />', () => {
  let wrapper;
  let props = {
    adminRequests: () => {},
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
    wrapper = shallow(<AdminRequests {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
  it('Should not display request card when request does not exists', () => {
    props = {
      adminRequests: () => {},
      requests: [],
    };

    wrapper = shallow(<AdminRequests {...props} />);
    expect(wrapper.find('label').exists()).toBe(false);
  });
  it('Should handle logout method', () => {
    props = {
      adminRequests: () => {},
      logout: () => {},
      history: {
        push: jest.fn(),
      },
    };
    wrapper = shallow(<AdminRequests {...props} />);
    expect(wrapper.instance().logout()).toBe(true);
  });
});
