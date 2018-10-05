import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import id from 'short-id';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import allRequestAction from '../actions/allRequestAction';
import Header from '../components/Header';
import Footer from '../components/Footer';

export class AllRequests extends Component {
  componentDidMount() {
    const { allRequestAction } = this.props;
    allRequestAction();
  }
  logout = () => {
    localStorage.clear();
    this.props.history.push('/');
    return true;
  }
  render() {
    const { requests } = this.props;
    return (
      <div>
        <Header>
          <Link to="/">Home</Link>
          <Link to="/createrequest">Create Request</Link>
          <Link to="/allrequests">My request</Link>
          <button className="header-btn" onClick={this.logout}>Logout</button>
        </Header>

        <section className="allrequests">


          {requests !== [] ? requests.map(request =>

          (
            <div className="requests-card" key={id.generate()}>
              <p>
                <label>Title:</label>{request.title}
              </p>
              <p>
                <label>Department:</label>{request.department}
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
                <div className="status fixed ">
                  <p>
                    <Link to="/requestdetails"> More</Link>

                  </p>
                </div>
                <div className="status flex-item ">
                  <p>
                    {request.requeststatus === 'pending' ? <Link to="/editrequest">Edit</Link> : ''}

                  </p>
                </div>
              </div>
            </div>)) :
          <div className="requests-card no-request" >
            <p>
                 NO REQUESTS YET!!!
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
  requests: state.requests,
  userDetail: state.authUser,

});


const mapDispatchToProps = dispatch => bindActionCreators({
  allRequestAction,
}, dispatch);

AllRequests.propTypes = {
  requests: PropTypes.shape({
    checkStatus: PropTypes.object,
    error: PropTypes.string,
  }).isRequired,
  allRequestAction: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(AllRequests);
