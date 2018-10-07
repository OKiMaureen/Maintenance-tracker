import PropTypes from 'prop-types';
import React from 'react';
import loader from '../assets/images/spinloader.gif';
import Footer from './Footer';

const CreateRequest = ({
  handleChange,
  handleSubmit,
  title,
  description,
  department,
  equipment,
  requestDetail,
  userDetail,
  errors,
  titleText,
  buttonText,
  editRequest,
}) => (
  <div>
    <section className="request">
      <article className="request-card">
        <form className="request-form">
          <h3>{titleText}</h3>
          <br />

          <p>Fill the form below to indicate equipments in need of repair or maintenance</p>
          <br />
          {editRequest.error ? <span className="validation-error">{editRequest.error}</span> : ''}
          {requestDetail.error ? <span className="validation-error">{requestDetail.error}</span> : ''}
          {userDetail.checkStatus.isLoading ? (<span className="loader"><img src={loader} alt="loader" /></span>) : ''}
          <input type="text" name="department" value={department} id="department" placeholder="Department" onChange={handleChange} />
          {errors.department ? errors.department.map(error => <span className="validation-error" key={error}>{error}</span>) : ''}
          <p className="message" id="departmentE" />
          <br />
          <input type="text" name="equipment" value={equipment} id="equipment" placeholder="Equipment" onChange={handleChange} />
          {errors.equipment ? errors.equipment.map(error => <span className="validation-error" key={error}>{error}</span>) : ''}
          <p className="message" id="equipmentE" />
          <br />
          <input type="text" name="title" value={title} id="requestTitle" placeholder="Request Title" onChange={handleChange} />
          {errors.title ? errors.title.map(error => <span className="validation-error" key={error}>{error}</span>) : ''}
          <p className="message" id="titleE" />
          <br />
          <textarea name="description" value={description} id="requestDescription" cols="20" rows="5" placeholder="Request Description" onChange={handleChange} />
          {errors.description ? errors.description.map(error => <span className="validation-error" key={error}>{error}</span>) : ''}
          <p className="message" id="descriptionE" />
          <br />
          <button type="submit" className="button" id="createRequest" onClick={handleSubmit}>{buttonText}</button>
        </form>
      </article>
    </section>
    <Footer />
  </div>);

CreateRequest.propTypes = {
  requestDetail: PropTypes.shape({
    checkStatus: PropTypes.object,
    error: PropTypes.string,
  }).isRequired,
  userDetail: PropTypes.shape({
    checkStatus: PropTypes.object,
    error: PropTypes.string,
  }).isRequired,
  editRequest: PropTypes.shape({
    checkStatus: PropTypes.object,
    error: PropTypes.string,
  }),
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.shape({}).isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  department: PropTypes.string,
  equipment: PropTypes.string,
  titleText: PropTypes.string,
  buttonText: PropTypes.string,
};

CreateRequest.defaultProps = {
  title: '',
  description: '',
  department: '',
  equipment: '',
  titleText: '',
  buttonText: '',
  editRequest: PropTypes.shape({
    checkStatus: PropTypes.object,
    error: PropTypes.string,
  }),
};


export default CreateRequest;

