import React, { useState } from 'react';
import PushNocScreen from '../PushNoc/PushNocScreen';
import './SignUp.css'
const SignUpAdmin = () => {
    const [kiemtra, setKiemtra] = useState(0)
    const [guidk, setGuidk] = useState(0)
    const [adminInfo, setAdminInfo] = useState({
        username: "",
        password: "",
        tinh_tp: "",
        quan_huyen: "",
        xa_phuong: "",
        sdt: ""
    })

    const onDangKy = async(e)=>{
        e.preventDefault();
        try {
           
        //    id_nvh, ten_csvc, giatri, giathue_csvc, mieuta, soluong, anhcsvc
           const body = {...adminInfo};
           const response = await fetch("http://localhost:5000/addadmin",{
               method: "POST",
               headers: {"Content-Type": "application/json"},
               body: JSON.stringify(body) 
           }) 

           console.log(' body:', body);
           if (response.status===200){
               setGuidk(1)
           }
        //    window.location = "http://localhost:3000/admin/services";
        } catch (error) {
            console.error(error.message);
        }
    }

    const onKiemtra = async(e)=>{
        e.preventDefault();
       try {
         const username = adminInfo.username; 
         
         const body = {username};
         const response = await fetch("http://localhost:5000/finduseradmin",{
             method: "POST",
             headers: {"Content-Type": "application/json"},
             body: JSON.stringify(body) 
         }) 
         
         const jsonData = await response.json()
         if (jsonData) { 
           setKiemtra(2)
           console.log(jsonData)
         } else setKiemtra(1);

         console.log(jsonData);
         // window.location = "/";
       } catch (error) {
           console.error(error.message);
       }
   }



   const handleChange= (event)=>{
    const {name,value} = event.target;
    setAdminInfo((prev)=>{
      return {
        ...prev,
        [name]: value
      }
    })
    
  }

  return <div class="SU-body">
<div class="SU-signup-form">
    <form>
		<h2>ĐĂNG KÝ</h2>
		<p class="SU-hint-text">Tạo một tài khoản để quản lý hội trường ngay và luôn.</p>
        <div class="SU-form-group">
        	<input type="username" class="form-control" name="username" placeholder="Tên đăng nhập" required="required"
                onChange={handleChange} value={adminInfo.username}
            />
        </div>

		<div class="SU-form-group">
            <input type="password" class="form-control" name="password" placeholder="Mật khẩu" required="required"
                onChange={handleChange} value={adminInfo.password}
            />
        </div>

        { (kiemtra==2) && <p class="text-danger text-center">Tên đăng nhập này đã tồn tại</p>}
        
        {(kiemtra!=1)&&<div class="SU-form-group">
            <button 
                type="submit" 
                class="btn btn-success btn-lg btn-block"
                onClick={onKiemtra}>Kiểm tra</button>
        </div>}

        
        

        {(kiemtra==1) && <div>
            <h5 class="text-center mb-3">Vui lòng nhập thêm thông tin</h5>
        <div class="SU-form-group">
			<div class="row">
				<div class="col">
                    <input type="text" class="form-control" name="hotendem" placeholder="Họ tên đệm" required="required"
                        onChange={handleChange} value={adminInfo.hotendem}
                    /></div>
				<div class="col"><input type="text" class="form-control" name="ten" placeholder="Tên" required="required"
                    onChange={handleChange} value={adminInfo.ten}
                /></div>
			</div>        	
        </div>
        <div class="SU-form-group">
            <input type="text" class="form-control" name="sdt" placeholder="Số điện thoại" required="required"
                onChange={handleChange} value={adminInfo.sdt}
            />
        </div>

        <div class="SU-form-group">
            <input type="email" class="form-control" name="email" placeholder="Email" required="required"
                onChange={handleChange} value={adminInfo.email}
            />
        </div>

        <div class="SU-form-group">
            <input type="text" class="form-control" name="facebook" placeholder="Đường dẫn tới link Facebook" required="required"
                onChange={handleChange} value={adminInfo.facebook}
            />
        </div>

        <div class="SU-form-group">
            <button type="submit" class="btn btn-success btn-lg btn-block"
                onClick={onDangKy}>ĐĂNG KÝ</button>
        </div>
        </div>}
        

    </form>
	<div class="text-center">Đã có tài khoản? <a href="http://localhost:3000">Đăng nhập ngay</a></div>
</div>
{(kiemtra==1)&&<PushNocScreen mess="Tên đăng nhập thỏa mãn"/>}
{(guidk==1)&&<PushNocScreen mess="Đăng ký thành công, bạn có thể quay về đăng nhập"/>}
</div>;
};

export default SignUpAdmin;
