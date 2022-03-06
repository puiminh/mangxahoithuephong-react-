import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './Signinz.css'
const Signin = (props) => {

	const [logininforAd, setLoginInforAd] = useState({
        username: "",
        password: ""
      });
	  const [logininfor, setLoginInfor] = useState({
        username: "",
        password: ""
      });

      const [logintf, setlogintf] = useState(0);
	  const [loginkh, setloginkh] = useState(0);
      
      const onSubmitFormAd = async(e)=>{
         e.preventDefault();
        try {
          const username = logininforAd.username; 
          const password = logininforAd.password;
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
	const onSubmitForm = async(e)=>{
		e.preventDefault();
	   try {
		 const username = logininfor.username; 
		 const password = logininfor.password;
		 const body = {username, password};
		 const response = await fetch("http://localhost:5000/finduserpassclient",{
			 method: "POST",
			 headers: {"Content-Type": "application/json"},
			 body: JSON.stringify(body) 
		 }) 
		 
		 const jsonData = await response.json()
		 if (jsonData) { 
		   props.loginInCl()
		   setloginkh(1)
		   console.log(jsonData)
		   localStorage.setItem("id_kh",parseInt(jsonData));
		 } else setloginkh(2);

		 console.log(jsonData);
		 // window.location = "/";
	   } catch (error) {
		   console.error(error.message);
	   }
   }
	const history = useNavigate();
	const taoTK = ()=>{
        history("/signup");
        // window.location.reload();
    }
	const taoTKadmin = ()=>{
        history("/signupadmin");
        // window.location.reload();
    }

    const handleChange= (event)=>{
      const {name,value} = event.target;
      setLoginInforAd((prev)=>{
        return {
          ...prev,
          [name]: value
        }
      })
      
    }
	const handleChangecl= (event)=>{
		const {name,value} = event.target;
		setLoginInfor((prev)=>{
		  return {
			...prev,
			[name]: value
		  }
		})
		
	  }

  return <div class='sign-bigestdiv'>
			<div class="sign-main">
				<input class="sign-input" type="checkbox" id="chk" aria-hidden="true"/>

				<div class="signup">
					<form>
						<label class='sign-label' for="chk" aria-hidden="true">Đăng Nhập</label>
						<input
							class="sign-input"
							type="text"
							name="username"
							placeholder="Tên đăng nhập"
							onChange={handleChangecl}
							value={logininfor.username}
							required=""/>
						<input
							class="sign-input"
							type="password"
							name="password"
							placeholder="Mật khẩu"
							onChange={handleChangecl}
							value={logininfor.password}
							required=""/>
						
						{loginkh==2 ? <p class="text-danger sign-falselogin">Tên đăng nhập hoặc tài khoản không đúng</p> : null}
						<button class='sign-button'
							onClick={onSubmitForm}>Đăng Nhập</button>
						<button 
							class='sign-button'
							onClick={()=>{
								taoTK();
							}}>Tạo tài khoản</button>
					</form>
				</div>

				<div class="sign-admin">
					<form onSubmit={onSubmitFormAd}>
						<label class='sign-label-admin' for="chk" aria-hidden="true">Admin</label>
						<input
							class="sign-input"
							name="username"
							type="text"
							id="inputUsername"
							placeholder="Tên đăng nhập"
							onChange={handleChange}
							value={logininforAd.username}
							required=""/>
						<input
							class="sign-input"
							name="password"
							type="password"
							id="inputPassword"
							placeholder="Mật khẩu"
							onChange={handleChange}
							value={logininforAd.password}
							required=""/>

						{logintf==2 ? <p class="text-danger sign-falselogin">Tên đăng nhập hoặc tài khoản không đúng</p> : null}

						<button 
							class='sign-button'
							type="submit">Đăng Nhập</button>
						<button class='sign-button'
							onClick={taoTKadmin}>Tạo tài khoản</button>
						

					</form>
				</div>
			</div>
  </div>;
};

export default Signin;
