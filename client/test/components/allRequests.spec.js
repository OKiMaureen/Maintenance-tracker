import React from 'react';
import { shallow } from 'enzyme';
import AllRequests from '../../components/AllRequests';


describe('Create  all requests component test', () => {
  let props = {
    requests: [
      {
        description: 'description',
        title: 'title',

      },
      {
        description: 'description',
        title: 'title',

      },
    ],
    logout: () => {},


  };
  it('Should render properly', () => {
    const wrapper = shallow(<AllRequests
      props={props}
    />);
    expect(wrapper.find('.allrequests').length).toEqual(1);
  });
  it('Should display request card when request loads and it exists', () => {
    props = {
      logout: () => {},

    };

    const requests = [
      {
        description: 'description',
        title: 'title',

      },
      {
        description: 'description',
        title: 'title',

      },
    ];

    const wrapper = shallow(<AllRequests props={props} requests={requests} />);

    expect(wrapper.find('.message-centered').length).toEqual(0);
  });
  it('Should not display request card when request loads and it does not exists', () => {
    props = {
      logout: () => {},
      requests: {
        length: 0,
      },
    };
    const wrapper = shallow(<AllRequests props={props} />);

    expect(wrapper.find('.message-centered').length).toEqual(1);
  });
  it('Should display request label as yellow when status is pending', () => {
    props = {
      allRequest: () => {},
      requests: [
        { requeststatus: 'pending' },
      ],
    };

    const wrapper = shallow(<AllRequests {...props} />);
    expect(wrapper.find('.yellow').exists()).toBe(true);
  });
  it('Should display request label as green when status is approved', () => {
    props = {
      allRequest: () => {},
      requests: [
        { requeststatus: 'approved' },
      ],
    };

    const wrapper = shallow(<AllRequests {...props} />);
    expect(wrapper.find('.green').exists()).toBe(true);
  });
  it('Should display request label as red when status is disapproved', () => {
    props = {
      allRequest: () => {},
      requests: [
        { requeststatus: 'disapproved' },
      ],
    };

    const wrapper = shallow(<AllRequests {...props} />);
    expect(wrapper.find('.red').exists()).toBe(true);
  });
  it('Should display request label as green when status is resolved', () => {
    props = {
      allRequest: () => {},
      requests: [
        { requeststatus: 'resolved' },
      ],
    };

    const wrapper = shallow(<AllRequests {...props} />);
    expect(wrapper.find('.green').exists()).toBe(true);
  });
});
