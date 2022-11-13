import React, { useEffect } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './container/Home';
import { gapi } from 'gapi-script';

const clientId= '165867305812-p00l21fejqjem8s0ponn73etgt8r1sle.apps.googleusercontent.com';
const App = () => {
  const navigate = useNavigate();


useEffect(() => {
  function start(){
    gapi.auth2.init({ 
    clientId:clientId,
    scope:''
  })
};
  gapi.load('client:auth2', start);
});

  useEffect(() => {
    const User = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

    if (!User) navigate('/login');
  }, []);

  return (
    <GoogleOAuthProvider clientId= 'clientId'>
    <Routes>
      <Route path='login' element={<Login />} />  
      <Route path='/*' element={<Home />} />
    </Routes>
    </GoogleOAuthProvider>
  )
}

export default App;
