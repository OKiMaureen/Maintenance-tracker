import React from 'react';

const UserDetails = () => ((
  <div>
    <section className="details-requests">
    
        <div className="detailsrequest-card">
          <div className="status">
            <button className="green">Approve</button>
            <button className="red">Disapprove</button>
            <button className="green">Resolve</button>
          </div>
          <p>
            <label>Title:</label>Repair Computer
          </p>
          <br />
          <p><label>Department:</label>Technical</p>
          <br />
          <p><label>Equipment: </label>HP computer</p>
          <br />
          <p><label>S/N: </label>HP000001</p>
          <br />
          <p><label>Description: </label>Battery is faulty, and It fell down, and sice I fixed it, I have not been able to use it.
            Battery is faulty, and It fell down, and sice I fixed it, I have not been able to use it.
          </p>
          <br />
          <div className="status">
            <label className="green">Resolved</label>
          </div>
        </div>
     

    </section>

  </div>
));
export default UserDetails;
