import React, { Fragment } from 'react'
import { useNavigate } from "react-router-dom";
import SignInForm from '../components/SignInForm';
import Signin from '../components/SignInForm/Signin';


const Login = () => {

    const history = useNavigate();
    const LoginIn = ()=> {
        localStorage.setItem("accessToken", 'true');
            history("/selectnvh");
            window.location.reload();
                
    }
    const LoginInCl = ()=> {
        localStorage.setItem("accessTokenClient", 'true');
            history("/client");
            window.location.reload();
                
    }

    

    return (
        <Signin loginIn = {LoginIn} loginInCl = {LoginInCl}/>
    )
}

export default Login;
