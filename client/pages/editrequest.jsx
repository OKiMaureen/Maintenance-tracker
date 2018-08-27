import React from 'react';



const EditRequest = () => ((
    <div>
        <section className="request">
        <article className="request-card">
          <form className="request-form">
            <h3>Edit Request</h3>
            <p>Fill the form below to indicate equipments in need of repair or maintenance</p>
            <br />
            <select>
              <option value="department">Department</option>
              <option value="finance">Finance Department</option>
              <option value="technical">Technical Department</option>
              <option value="human resource">Human Resource Department</option>
            </select>
            <br />
            <select>
              <option value="equipment">Equipment</option>
              <option value="computer">Computer</option>
              <option value="furniture">Furniture</option>
              <option value="electricity">Electricity</option>
            </select>
            <br />
            <input type="text" id="serialNumber" placeholder="Serial Number" required />
            <br />
            <input type="text" id="requestTitle" placeholder="Request Title" required />
            <br />
            <textarea name="requestDescription" cols={20} rows={5} placeholder="Request Description" required defaultValue={""} />
            <br />
            <a className="button">Submit</a>
          </form>
        </article>
      </section>
    </div>
));
export default EditRequest;