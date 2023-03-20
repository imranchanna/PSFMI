import React from 'react'

import Signin from "./component/Pages/Signin/Signin";
import Navbar from './component/Pages/Navbar/Navbar';
import Signup from './component/Pages/Signup/Signup';
import Login from './component/Pages/Login/Login';
import Forget from './component/Pages/Forget/Forget'
import Profile from './component/Pages/Profile/Profile';
import Company from './component/Pages/Company/Company';
import Firearms from './component/Pages/Firearms/Firearms';
import Motor from './component/Pages/Motor/Motor';
import Incident from './component/Pages/Incident/Incidentreport';
import Registration from './component/Pages/Registration/Registration';
import ID from "./component/Pages/ID/ID";
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
