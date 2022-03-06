import React, { useState } from 'react';
import PushNocScreen from '../PushNoc/PushNocScreen';
import './SignUp.css'
const SignUp = () => {

    const [kiemtra, setKiemtra] = useState(0)
    const [guidk, setGuidk] = useState(0)


    const [clientInfo, setClientInfo] = useState({
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
           const body = {...clientInfo};
           const response = await fetch("http://localhost:5000/addkhachhang",{
           
               method: "POST",
               headers: {"Content-Type": "application/json"},
               body: JSON.stringify(body) 
           }) 

           console.log(' body:', body);
           console.log('response :', response.status);
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
         const username = clientInfo.username; 
         
         const body = {username};
         const response = await fetch("http://localhost:5000/finduserclient",{
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
    setClientInfo((prev)=>{
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
		<p class="SU-hint-text">Tạo một tài khoản để thuê hội trường ngay và luôn.</p>
        <div class="SU-form-group">
        	<input type="username" class="form-control" name="username" placeholder="Tên đăng nhập" required="required"
                onChange={handleChange} value={clientInfo.username}
            />
        </div>

		<div class="SU-form-group">
            <input type="password" class="form-control" name="password" placeholder="Mật khẩu" required="required"
                onChange={handleChange} value={clientInfo.password}
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
                        onChange={handleChange} value={clientInfo.hotendem}
                    /></div>
				<div class="col"><input type="text" class="form-control" name="ten" placeholder="Tên" required="required"
                    onChange={handleChange} value={clientInfo.ten}
                /></div>
			</div>        	
        </div>

        <div class="SU-form-group">
			<div class="row">
				<div class="col"><input type="text" class="form-control" name="tinh_tp" placeholder="Tỉnh/T.Phố" required="required"
                    onChange={handleChange} value={clientInfo.tinh_tp}
                /></div>
				<div class="col"><input type="text" class="form-control" name="quan_huyen" placeholder="Quận/Huyện" required="required"
                    onChange={handleChange} value={clientInfo.quan_huyen}
                /></div>
                <div class="col"><input type="text" class="form-control" name="xa_phuong" placeholder="Phường/Xã" required="required"
                    onChange={handleChange} value={clientInfo.xa_phuong}
                /></div>
			</div>        	
        </div>
        <div class="SU-form-group">
            <input type="text" class="form-control" name="sdt" placeholder="Số điện thoại" required="required"
                onChange={handleChange} value={clientInfo.sdt} maxlength="10"
            />
        </div>

        <div class="SU-form-group">
            <button type="submit" class="btn btn-success btn-lg btn-block"
                onClick={onDangKy}>ĐĂNG KÝ</button>
        </div>
        </div>}
        

    </form>
	<div class="text-center">Bạn đã có tài khoản? <a href="http://localhost:3000">Đăng nhập ngay</a></div>
</div>
{(kiemtra==1)&&<PushNocScreen mess="Tên đăng nhập thỏa mãn"/>}
{(guidk==1)&&<PushNocScreen mess="Đăng ký thành công, bạn có thể quay về đăng nhập"/>}

</div>;
};

export default SignUp;
