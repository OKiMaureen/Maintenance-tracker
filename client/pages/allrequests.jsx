import React from 'react';
import { Link } from 'react-router-dom';


const AllRequests = () => ((
  <section className="allrequests">
    <div className="requests-card">
      <p>
        <label>Title:</label>Repair Computer
      </p>
      <p>
        <label>Department:</label>Technical
      </p>
      <p>
        <label>Equipment: </label>HP computer
      </p>
      <p>
        <label>S/N: </label>HP000001
      </p>
      <div className="status">
        <label className="green">Resolved</label>
      </div>
    </div>
    <div className="requests-card">
      <p>
        <label>Title:</label>Repair Computer
      </p>
      <p>
        <label>Department:</label>Technical
      </p>
      <p>
        <label>Equipment: </label>HP computer
      </p>
      <p>
        <label>S/N: </label>HP000001
      </p>
      <div className="status">
        <label className="green">Resolved</label>
      </div>
    </div>
    <div className="requests-card">
      <p>
        <label>Title:</label>Repair Computer
      </p>
      <p>
        <label>Department:</label>Technical
      </p>
      <p>
        <label>Equipment: </label>HP computer
      </p>
      <p>
        <label>S/N: </label>HP000001
      </p>
      <div className="status">
        <label className="green">Resolved</label>
      </div>
    </div>
    <div className="requests-card">
      <p>
        <label>Title:</label>Repair Computer
      </p>
      <p>
        <label>Department:</label>Technical
      </p>
      <p>
        <label>Equipment: </label>HP computer
      </p>
      <p>
        <label>S/N: </label>HP000001
      </p>
      <div className="status">
        <label className="yellow">Pending</label>
      </div>
      <div className="status">
        <p>
        <Link to="/editrequest">Edit Request</Link>
      </p>
      </div>
    </div>
    <div className="requests-card">
      <p>
        <label>Title:</label>Repair Computer
      </p>
      <p>
        <label>Department:</label>Technical
      </p>
      <p>
        <label>Equipment: </label>HP computer
      </p>
      <p>
        <label>S/N: </label>HP000001
      </p>
      <div className="status">
        <label className="green">Resolved</label>
      </div>
    </div>
    <div className="requests-card">
      <p>
        <label>Title:</label>Repair Computer
      </p>
      <p>
        <label>Department:</label>Technical
      </p>
      <p>
        <label>Equipment: </label>HP computer
      </p>
      <p>
        <label>S/N: </label>HP000001
      </p>
      <div className="status">
        <label className="yellow">pending</label>
      </div>
      <div className="status">
        <p>
        <Link to="/editrequest">Edit Request</Link>
      </p>
      </div>
    </div>
    <div className="requests-card">
      <p>
        <label>Title:</label>Repair Computer
      </p>
      <p>
        <label>Department:</label>Technical
      </p>
      <p>
        <label>Equipment: </label>HP computer
      </p>
      <p>
        <label>S/N: </label>HP000001
      </p>
      <div className="status">
        <label className="red">Disapproved</label>
      </div>
    </div>
    <div className="requests-card">
      <p>
        <label>Title:</label>Repair Computer
      </p>
      <p>
        <label>Department:</label>Technical
      </p>
      <p>
        <label>Equipment: </label>HP computer
      </p>
      <p>
        <label>S/N: </label>HP000001
      </p>
      <div className="status">
        <label className="green">Resolved</label>
      </div>
    </div>
    <div className="requests-card">
      <p>
        <label>Title:</label>Repair Computer
      </p>
      <p>
        <label>Department:</label>Technical
      </p>
      <p>
        <label>Equipment: </label>HP computer
      </p>
      <p>
        <label>S/N: </label>HP000001
      </p>
      <div className="status">
        <label className="yellow">In Progress</label>
      </div>
    </div>
  </section>

));
export default AllRequests;
