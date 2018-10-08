import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import i from 'short-id';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getARequestAction from '../actions/singleRequestAction';
import logoutAction from '../actions/logoutAction';
import Header from '../components/Header';
import Footer from '../components/Footer';

export class SingleRequest extends Component {
  componentDidMount() {
    const { aRequest, match } = this.props;
    aRequest(match.params.id);
  }
  logout = () => {
    const { history, logout } = this.props;
    logout();
    localStorage.clear();
    history.push('/');
    return true;
  }
  render() {
    const { oneRequest } = this.props;
    return (
      <div>
        <Header>
          <Link to="/">Home</Link>
          <Link to="/createrequest">Create Request</Link>
          <Link to="/allrequests">My request</Link>
          <li><button className="header-btn" onClick={this.logout}>Logout</button></li>
        </Header>

        <section className="allrequests">


          {oneRequest ?
            <div className="detailsrequest-card" key={i.generate()}>
              <p>
                <label>Title:</label>{oneRequest.title}
              </p>
              <p>
                <label>Department:</label>{oneRequest.department}
              </p>
              <p>
                <label>Equipment: </label>{oneRequest.equipment}
              </p>
              <p>
                <label>Description: </label>{oneRequest.description}
              </p>
              <div className="container">
                <div className="status fixed">
                  {oneRequest.requeststatus === 'pending' ? <label className="yellow">{oneRequest.requeststatus}</label> : ''}
                  {oneRequest.requeststatus === 'approved' ? <label className="green">{oneRequest.requeststatus}</label> : ''}
                  {oneRequest.requeststatus === 'disapproved' ? <label className="red">{oneRequest.requeststatus}</label> : ''}
                  {oneRequest.requeststatus === 'resolved' ? <label className="green">{oneRequest.requeststatus}</label> : ''}
                </div>
                <div className="status fixed ">
                  <p>
                    {oneRequest.requeststatus === 'pending' ? <Link to={`/editrequest/${oneRequest.id}`}>Edit</Link> : ''}

                  </p>
                </div>
              </div>
            </div> :
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
  oneRequest: state.singleRequest.request,
  userDetail: state.authUser,
  logout: logoutAction,

});
const mapDispatchToProps = dispatch => bindActionCreators({
  aRequest: getARequestAction,
}, dispatch);

SingleRequest.propTypes = {
  oneRequest: PropTypes.shape({
    checkStatus: PropTypes.object,
    error: PropTypes.string,
  }).isRequired,
  aRequest: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  match: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(SingleRequest);
