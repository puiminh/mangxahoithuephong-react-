import React, {Fragment, useState} from 'react'
// import { BigDiv, FormSignin, CheckBoxDiv, InputPassword, InputUser } from './SignIn'; 
import './SignIn.css'

const SignInForm = (props) => {

      const [logininfor, setLoginInfor] = useState({
        username: "",
        password: ""
      });

      const [logintf, setlogintf] = useState(0);
      
      const onSubmitForm = async(e)=>{
         e.preventDefault();
        try {
          const username = logininfor.username; 
          const password = logininfor.password;
          const body = {username, password};
          const response = await fetch("http://localhost:5000/finduserpassadmin",{
              method: "POST",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify(body) 
          }) 
          
          const jsonData = await response.json()
          if (jsonData) { 
            props.loginIn()
            setlogintf(1)
            console.log(jsonData)
            localStorage.setItem("id_admin",parseInt(jsonData));
          } else setlogintf(2);

          console.log(jsonData);
          // window.location = "/";
        } catch (error) {
            console.error(error.message);
        }
    }

    const handleChange= (event)=>{
      const {name,value} = event.target;
      setLoginInfor((prev)=>{
        return {
          ...prev,
          [name]: value
        }
      })
      
    }

    return (
        <div class="text-center submitdiv">
    
        <form class="form-signin" onSubmit={onSubmitForm}>
          <img class="mb-4 rounded-circle" src="/dark.png" alt="" width="72" height="72"/>
          <h1 class="h3 mb-3 font-weight-normal">Đăng Nhập</h1>
          <label for="inputUsername" class="sr-only">Tên Đăng Nhập</label>
          <input 
            class="form-control"
            name="username" 
            type="text" 
            id="inputUsername" 
             
            placeholder="Tên đăng nhập" 
            onChange={handleChange}
            value={logininfor.username}
            required autoFocus/>
          <label for="inputPassword" class="sr-only">Mật Khẩu</label>
          <input 
            class="form-control"
            name="password" 
            type="password" 
            id="inputPassword" 
             
            placeholder="Mật khẩu" 
            onChange={handleChange}
            value={logininfor.password}
            required/>
          <button 
            class="btn btn-lg btn-primary btn-block" 
            type="submit"
            // onClick={props.loginIn}
            >
            Sign in
          </button>
          {logintf==2 ? <p class="text-danger falselogin mt-2">Tên đăng nhập hoặc tài khoản không đúng</p> : null}
          {/* <p class="mt-5 mb-3 text-muted">&copy;</p> */}
        </form>
          </div>
    )
}

export default SignInForm;
