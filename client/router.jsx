import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Header from './components/Header';
import Footer from './components/Footer';
import AllRequests from './pages/allrequests';
import CreateRequest from './pages/CreateRequest';
import EditRequest from './pages/editrequest';
import AdminRequests from './pages/adminrequests';
import UserDetails from './pages/userdetails';


const Routes = () => ((
  <BrowserRouter>
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route path="/allrequests" component={AllRequests} />
      <Route path="/createrequest" component={CreateRequest} />
      <Route path="/editrequest" component={EditRequest} />
      <Route path="/adminrequests" component={AdminRequests} />
      <Route path="/userdetails" component={UserDetails} />
    </React.Fragment>
  </BrowserRouter>
));

export default Routes;
