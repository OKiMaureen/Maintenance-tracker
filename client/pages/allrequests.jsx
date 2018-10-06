import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import id from 'short-id';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import allRequestAction from '../actions/allRequestAction';
import logoutAction from '../actions/logoutAction';
import Header from '../components/Header';
import Footer from '../components/Footer';

export class AllRequests extends Component {
  componentDidMount() {
    const { allRequest } = this.props;
    allRequest();
  }
  logout = () => {
    const { history, logout } = this.props;
    if (logout()) {
      localStorage.clear();
      history.push('/');
    }
    return true;
  }
  render() {
    const { requests = [] } = this.props;
    return (
      <div>
        <Header>
          <Link to="/">Home</Link>
          <Link to="/createrequest">Create Request</Link>
          <Link to="/allrequests" className="current">My requests</Link>
          <button className="header-btn" onClick={this.logout}>Logout</button>
        </Header>

        <section className="allrequests">
          {requests && requests.length !== 0 ? requests.map(request =>

          (
            <div className="requests-card" key={id.generate}>
              <p>
                <label>Title:</label>{request.title}
              </p>
              <p>
                <label>Equipment: </label>{request.equipment}
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
              You do not have any requests yet!!! Go ahead and create a request.
            </p>
          </div>
          }

        </section>
        <Footer />
      </div>

    );
  }
}

const mapStateToProps = state => ({
  requests: state.requests.requests,
  error: state.requests.error,
  userDetail: state.authUser,

});


const mapDispatchToProps = dispatch => bindActionCreators({
  allRequest: allRequestAction,
  logout: logoutAction,
}, dispatch);

AllRequests.propTypes = {
  requests: PropTypes.shape({
    checkStatus: PropTypes.object,
    error: PropTypes.string,
  }).isRequired,
  allRequest: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(AllRequests);
