import React from 'react';
import { shallow } from 'enzyme';
import { AdminSingleRequest } from '../../pages/AdminGetSingleRequest';


describe('<AdminSingleRequest />', () => {
  let wrapper;
  const match = {
    params: {
      id: '1',
    },
  };
  let props = {
    adminSingleRequest: () => {},
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
      adminSingleRequest: () => {},
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

    wrapper = shallow(<AdminSingleRequest {...props} match={match} />);
    expect(wrapper.find('label').exists()).toBe(true);
  });
  it('Should handle logout method', () => {
    props = {
      adminSingleRequest: () => {},
      logout: () => {},
      history: {
        push: jest.fn(),
      },
    };
    wrapper = shallow(<AdminSingleRequest {...props} match={match} />);
    expect(wrapper.instance().logout()).toBe(true);
  });
  it('Should handle updateRequest method', () => {
    const oneRequest = {
      id: 2,
    };
    const status = 'pending';
    props = {
      adminSingleRequest: () => {},


    };
    const updateRequest = () => {};
    const update = () => {};
    wrapper = shallow(<AdminSingleRequest
      {...props}
      update={update}
      match={match}
      oneRequest={oneRequest}
      updateRequest={updateRequest(oneRequest, status)}
    />);
    expect(wrapper.instance().updateRequest({ target: { id: 2 } })).toBe(true);
  });
  it('Should display request label as yellow when status is pending', () => {
    props = {
      adminSingleRequest: () => {},
      oneRequest:
        { requeststatus: 'pending' },
    };

    wrapper = shallow(<AdminSingleRequest {...props} match={match} />);
    expect(wrapper.find('.yellow').exists()).toBe(true);
  });
  it('Should display request label as green when status is approve', () => {
    props = {
      adminSingleRequest: () => {},
      oneRequest:
        { requeststatus: 'approved' },
    };

    wrapper = shallow(<AdminSingleRequest {...props} match={match} />);
    expect(wrapper.find('.green').exists()).toBe(true);
  });
  it('Should display request label as red when status is dissapproved', () => {
    props = {
      adminSingleRequest: () => {},
      oneRequest:
        { requeststatus: 'disapproved' },
    };

    wrapper = shallow(<AdminSingleRequest {...props} match={match} />);
    expect(wrapper.find('.red').exists()).toBe(true);
  });
  it('Should display request label as green when status is resolved', () => {
    props = {
      adminSingleRequest: () => {},
      oneRequest:
        { requeststatus: 'resolved' },
    };

    wrapper = shallow(<AdminSingleRequest {...props} match={match} />);
    expect(wrapper.find('.green').exists()).toBe(true);
  });
});
