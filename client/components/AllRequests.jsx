import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import id from 'short-id';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';


class AllRequestsComponent extends Component {
  state = {
    filteredRequest: [],
  }

filterRequest = (event) => {
  const { requests } = this.props;
  let request = [];
  if (event.target.value === 'all') {
    return this.setState({ filteredRequest: requests });
  }
  request = requests.filter(req => req.requeststatus === event.target.value);
  return this.setState({ filteredRequest: request });
}

render() {
  const { route, requests: allRequests } = this.props;
  const { filteredRequest } = this.state;
  const requests = filteredRequest.length === 0 ? allRequests : filteredRequest;
  return (
    <div>
      <section className="allrequests">
        {}
        <div className="dropdown">
          <select className="dropbtn" id="filter" onChange={this.filterRequest}>
            <option value>Filter By:</option>
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="disapproved">Disapproved</option>
            <option value="resolved">Resolved</option>
          </select>
        </div>
        {requests && requests.length !== 0 ? requests.map(request =>

          (
            <div className="requests-card" key={id.generate}>
              <p>
                <label>Title:</label>{request.title}
              </p>
              <p>
                <label>Description: </label>{request.description}
              </p>
              <div className="container">
                <div className="status fixed">
                  {request.requeststatus === 'pending' ? <label className="yellow">{request.requeststatus}</label> : ''}
                  {request.requeststatus === 'approved' ? <label className="green">{request.requeststatus}</label> : ''}
                  {request.requeststatus === 'disapproved' ? <label className="red">{request.requeststatus}</label> : ''}
                  {request.requeststatus === 'resolved' ? <label className="green">{request.requeststatus}</label> : ''}
                </div>
                <div className="status flex-item ">
                  <p>
                    {request && request.id ? <Link to={`${route}${request.id}`}> More</Link> :
                    <Link to={`${route}${request.requestid}`}> More</Link>}

                  </p>
                </div>
              </div>
            </div>)) :
        <div className="requests-card no-request" >
          <p className="message-centered">
              You do not have any requests to yet!!!
          </p>
        </div>
          }
      </section>

      <Footer />
    </div>
  );
}
}

AllRequestsComponent.propTypes = {
  requests: PropTypes.shape([
    {
      title: PropTypes.string,
      description: PropTypes.string,
      requeststatus: PropTypes.bool,
    },
    {
      title: PropTypes.string,
      description: PropTypes.string,
      requeststatus: PropTypes.bool,
    },
  ]).isRequired,
  route: PropTypes.string.isRequired,
};

export default AllRequestsComponent;
