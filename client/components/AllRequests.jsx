import React from 'react';
import { Link } from 'react-router-dom';
import id from 'short-id';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';


const AllRequestsComponent = ({
  requests,


}) => (
  <div>
    <section className="allrequests">
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
                    { <Link to={`/singlerequest/${request.id}`}> More</Link>}

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
};

export default AllRequestsComponent;
