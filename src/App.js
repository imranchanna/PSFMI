import React from 'react'

import Signin from './component/Signin';
import Navbar from './component/Navbar';
import Signup from './component/Signup';
import Login from './component/Login';
import Forget from './component/Forget'
import Profile from './component/Profile';
import Company from './component/Company';
import Firearms from './component/Firearms';
import Motor from './component/Motor';
import Incident from './component/Incidentreport';
import Registration from './component/Registration';
import ID from "./component/ID";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/Navbar' element={<Navbar />} />
      <Route path='/Signin' element={<Signin />} />
      <Route path='/' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/Forget' element={<Forget />} />
      <Route path='/Personalprofile' element={<Profile />} />
      <Route path='/Company' element={<Company />} />
      <Route path='/Firearms' element={<Firearms />} />
      <Route path='/Motor' element={<Motor />} />
      <Route path='/Incident' element={<Incident />} />
      <Route path='/Registration' element={<Registration />} />
      <Route path='/ID' element={<ID />} />
      </Routes>
    </Router>
  )
}

export default App
