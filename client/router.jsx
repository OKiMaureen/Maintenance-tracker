import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from 'pages/home';
import Signin from 'pages/signin';
import Signup from 'pages/signup';
import Header from 'components/Header';
import Footer from 'components/Footer';
import AllRequests from 'pages/allrequests';
import CreateRequest from 'pages/createrequest';
import EditRequest from 'pages/editrequest';
import AdminRequests from 'pages/adminrequests';
import UserDetails from 'pages/userdetails';


const Routes = () => ((
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Route path="/home" component={Home} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route path="/allrequests" component={AllRequests} />
      <Route path="/createrequest" component={CreateRequest} />
      <Route path="/editrequest" component={EditRequest} />
      <Route path="/adminrequests" component={AdminRequests} />
      <Route path="/userdetails" component={UserDetails} />
      <Footer />
    </React.Fragment>
  </BrowserRouter>
));

export default Routes;
