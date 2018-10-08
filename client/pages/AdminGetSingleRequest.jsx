import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import i from 'short-id';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import adminGetSingleRequestAction, { updateReq, disapproveRequest, resolveRequest } from '../actions/adminSingleRequestAction';
import logoutAction from '../actions/logoutAction';
import Header from '../components/Header';
import Footer from '../components/Footer';

export class AdminSingleRequest extends Component {
  componentDidMount() {
    const { adminSingleRequest, match } = this.props;
    adminSingleRequest(match.params.id);
  }
  logout = () => {
    const { history, logout } = this.props;
    logout();
    localStorage.clear();
    history.push('/');
    return true;
  }
  updateRequest = (e) => {
    const status = e.target.id;
    const { update, oneRequest } = this.props;
    update(oneRequest.id, status);
    return true;
  }

  render() {
    const {
      oneRequest,
    } = this.props;
    return (
      <div>
        <Header>
          <Link to="/">Home</Link>
          <Link to="/createrequest">Create Request</Link>
          <Link to="/adminrequests">All requests</Link>
          <li><button className="header-btn" onClick={this.logout}>Logout</button></li>
        </Header>

        <section className="allrequests">
          {oneRequest ?
            <div className="detailsrequest-card" key={i.generate()}>
              <div className="status">
                {oneRequest.requeststatus === 'approved' || oneRequest.requeststatus === 'resolved' ?
                  <button id="approve" className="disabled" disabled onClick={this.updateRequest}>Approve</button> :
                  <button className="green" id="approve" onClick={this.updateRequest}>Approve</button>}
                {oneRequest.requeststatus === 'disapproved' || oneRequest.requeststatus === 'resolved' ?
                  <button id="disapprove" className="disabled" disabled onClick={this.updateRequest}>Disapprove</button> :
                  <button className="red" id="disapprove" onClick={this.updateRequest}>Disapprove</button>}
                {oneRequest.requeststatus === 'disapproved' || oneRequest.requeststatus === 'resolved' || oneRequest.requeststatus === 'pending' ?
                  <button id="resolved" className="disabled" disabled onClick={this.updateRequest}>Resolve</button> :
                  <button className="green" id="resolve" onClick={this.updateRequest}>Resolve</button>}
              </div>
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
              </div>
            </div> : '' }

        </section>
        <Footer />
      </div>

    );
  }
}

const mapStateToProps = state => ({
  oneRequest: state.adminSingleRequest.request,
  userDetail: state.authUser,
  logout: logoutAction,

});
const mapDispatchToProps = dispatch => bindActionCreators({
  adminSingleRequest: adminGetSingleRequestAction,
  update: updateReq,
  disapprove: disapproveRequest,
  resolve: resolveRequest,

}, dispatch);

AdminSingleRequest.propTypes = {
  oneRequest: PropTypes.shape({
    checkStatus: PropTypes.object,
    error: PropTypes.string,
  }).isRequired,
  adminSingleRequest: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  match: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(AdminSingleRequest);
