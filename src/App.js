import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import { Fragment, useState } from 'react';
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Csvc/csvc';
import Contact from './pages/Contact';
import Sign_Up from './pages/SignUp';
import Sign_In from './pages/SignIn';
import Login from './pages/Login';
import SelectNVH from './pages/SelectNVH/SelectNVH';
import Client from './pages/Client/Client';
import SignUp from './components/SignUp/SignUp';
import SignUpAdmin from './components/SignUp/SignUpAdmin';
import Booking from './pages/Booking/Booking';
import SelectRoom from './pages/Csvc/SelectRoom';
import Pheduyet from './pages/Pheduyet/Pheduyet';
import LichSuKh from './pages/LichSuKh/LichSuKh';
function App() {

  return (
    <Router>
      <Routes>
        <Route path = "/" exact element={<Login/>} />
    
        {/* <Route path = "/admin" exact element={<Navbar />} /> */}
        {localStorage.getItem("accessToken")==='true' ? (<Route path = "/selectnvh" exact element = {<SelectNVH/>} />) : <Route path = "/selectnvh" exact element={<Login/>} />}
        {localStorage.getItem("accessToken")==='true' ? 
          (<Route path = "/admin" exact element = 
            {<Home/>} />) : 
          <Route path = "/admin" exact element={<Login/>} />}
        
        {localStorage.getItem("accessToken")==='true' ? (<Route path = "/admin/about" exact element={<><About/></>} />) : <Route path = "/admin/about" exact element={<Login/>} />}
        {localStorage.getItem("accessToken")==='true' ? (<Route path = "/admin/services" exact element={<><SelectRoom /></>} />) : <Route path = "/admin/services" exact element={<Login/>} />}
        {localStorage.getItem("accessToken")==='true' ? (<Route path = "/admin/contact-us" exact element={<><Contact/></>} />) : <Route path = "/admin/contact-us" exact element={<Login/>} />}
        {localStorage.getItem("accessToken")==='true' ? (<Route path = "/admin/sign-up" exact element={<><Sign_Up/></>} />) : <Route path = "/admin/sign-up" exact element={<Login/>} />}
        {localStorage.getItem("accessToken")==='true' ? (<Route path = "/admin/sign-in" exact element={<><Sign_In/></>} />) : <Route path = "/admin/sign-in" exact element={<Login/>} />}
        {localStorage.getItem("accessToken")==='true' ? (<Route path = "/admin/pheduyet" exact element={<><Pheduyet/></>} />) : <Route path = "/admin/pheduyet" exact element={<Login/>} />}

        {localStorage.getItem("accessTokenClient")==='true' ? (<Route path = "/client" exact element={<><Client/></>} />) : <Route path = "/client" exact element={<Login/>} />}
        {localStorage.getItem("accessTokenClient")==='true' ? (<Route path = "/client/history" exact element={<><LichSuKh/></>} />) : <Route path = "/client/history" exact element={<LichSuKh/>} />}
        
        <Route path = "/signup" exact element={<><SignUp/></>} />
        <Route path = "/signupadmin" exact element={<><SignUpAdmin/></>} />
        {localStorage.getItem("accessTokenClient")==='true' ? (<Route path = "/booking" exact element={<><Booking/></>} />) : <Route path = "/booking" exact element={<Login/>} />}

      </Routes>
   </Router>
  );
}

export default App;

// <Navbar />
// <Routes>

// </Routes>