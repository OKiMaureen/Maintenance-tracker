import React from 'react';
import { shallow } from 'enzyme';
import { SingleRequest } from '../../pages/SingleRequest';


describe('<SingleRequest />', () => {
  let wrapper;
  const match = {
    params: {
      id: '1',
    },
  };
  let props = {
    aRequest: () => {},
    logout: () => {},
    oneRequest:
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
    history: {
      push: jest.fn(),
    },

  };
  it('Should display request card when request loads and it exists', () => {
    props = {
      aRequest: () => {},
      oneRequest: {
        id: 1,
        user_id: 1,
        title: 'repair computer',
        department: 'technology',
        equipment: 'computer',
        requeststatus: 'pending',
        description: 'repair laptop',
        serialnumber: 111111111,
      },
    };

    wrapper = shallow(<SingleRequest {...props} match={match} />);
    expect(wrapper.find('label').exists()).toBe(true);
  });
  it('Should handle logout method', () => {
    props = {
      aRequest: () => {},
      logout: () => {},
      history: {
        push: jest.fn(),
      },
    };
    wrapper = shallow(<SingleRequest {...props} match={match} />);
    expect(wrapper.instance().logout()).toBe(true);
  });
  it('Should display request label as yellow when status is pending', () => {
    props = {
      aRequest: () => {},
      oneRequest:
        { requeststatus: 'pending' },
    };

    wrapper = shallow(<SingleRequest {...props} match={match} />);
    expect(wrapper.find('.yellow').exists()).toBe(true);
  });
  it('Should display request label as green when status is approve', () => {
    props = {
      aRequest: () => {},
      oneRequest:
        { requeststatus: 'approved' },
    };

    wrapper = shallow(<SingleRequest {...props} match={match} />);
    expect(wrapper.find('.green').exists()).toBe(true);
  });
  it('Should display request label as red when status is dissapproved', () => {
    props = {
      aRequest: () => {},
      oneRequest:
        { requeststatus: 'disapproved' },
    };

    wrapper = shallow(<SingleRequest {...props} match={match} />);
    expect(wrapper.find('.red').exists()).toBe(true);
  });
  it('Should display request label as green when status is resolved', () => {
    props = {
      aRequest: () => {},
      oneRequest:
        { requeststatus: 'resolved' },
    };

    wrapper = shallow(<SingleRequest {...props} match={match} />);
    expect(wrapper.find('.green').exists()).toBe(true);
  });
});
