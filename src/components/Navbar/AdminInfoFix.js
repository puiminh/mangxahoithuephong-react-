import React,{useEffect, useState} from 'react';
import PushNocScreen from '../PushNoc/PushNocScreen';

const AdminInfoFix = (props) => {

    const {id_admin} = props;
    const [adminInfo, setAdminInfo] = useState({})
    
    function handleChange(event) {
        const { name, value } = event.target;
    
        setAdminInfo(prevValue => {
          return {
            ...prevValue,
            [name]: value
          };

          
        });

        console.log('Thong tin admin:', adminInfo);
      }
      const onEdit = async(e)=>{
        e.preventDefault();
        try {
        //    const id_nvh = parseInt(localStorage.getItem("id_nvh"));
        //    id_nvh, ten_csvc, giatri, giathue_csvc, mieuta, soluong, anhcsvc
           const body = {...adminInfo};
           const response = await fetch(`http://localhost:5000/updateadmin/${id_admin}`,{
               method: "PUT",
               headers: {"Content-Type": "application/json"},
               body: JSON.stringify(body) 
           }) 
           if (response.status===200) {
               props.setThanhCong(1);
               setTimeout(() => {props.setThanhCong(0)}, 3000);
           }
           console.log('Admin thay đổi:', body);
        //    window.location = "http://localhost:3000/admin/services";
        } catch (error) {
            console.error(error.message);
        }
    }
    const getAdminInfo = async() => {
        try {
            // const id_kh = parseInt(localStorage.getItem("id_kh"));
            const response = await fetch(`
                http://localhost:5000/getadmin/${id_admin}`);
            const jsonData = await response.json()
            setAdminInfo(jsonData)
            
            console.log('adInfo:', jsonData);
        } catch (error) {
            console.error(error.message);
        }
    }
    useEffect(()=>{
        getAdminInfo();
    },[])
  return <div>
<div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="caidattaikhoanLabel">Chỉnh sửa thông tin tài khoản</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                
                            <div class="row">
                                <div class="col">
                                    <div class="pheduyet-khinfo p-3">
                                        
                                        {/* <span class="h6">Họ và tên: </span>
                                        <span class="text-uppercase">{`${khInfo.hotendem} ${khInfo.ten}`}</span> */}
                                        <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text bg-white text-dark input-no-border font-weight-bold">Họ và tên: </span>
                                        </div>
                                        <input onChange={handleChange} name="hotendem" type="text" value={adminInfo.hotendem} aria-label="First name" class="input-no-border  form-control"/>
                                        <input onChange={handleChange} name="ten" type="text" value={adminInfo.ten} aria-label="Last name" class="input-no-border  form-control"/>
                                        </div>
                                        <hr class="m-0"/>
                                        <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text bg-white text-dark input-no-border font-weight-bold">Số điện thoại: </span>
                                        </div>
                                        <input onChange={handleChange} name="sdt" type="text" value={adminInfo.sdt} aria-label="First name" class="input-no-border  form-control"/>
                                        
                                        </div>
                                        <hr class="m-0"/>
                                        <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text bg-white text-dark input-no-border font-weight-bold">Email: </span>
                                        </div>
                                        <input onChange={handleChange} name="email" type="text" value={adminInfo.email} aria-label="First name" placeholder='Email' class="input-no-border  form-control"/>
                                        
                                        </div>
                                        <hr class="m-0"/>
                                        <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text bg-white text-dark input-no-border font-weight-bold">Facebook: </span>
                                        </div>
                                        <input onChange={handleChange} name="facebook" type="text" value={adminInfo.facebook} aria-label="First name" placeholder='Facebook'  class="input-no-border  form-control"/>
                                        
                                        </div>
                                        <hr class="m-0"/>
                                        <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text bg-white text-dark input-no-border font-weight-bold">Mật khẩu </span>
                                        </div>
                                        <input onChange={handleChange} name="password" type="password" value={adminInfo.password} aria-label="First name" class="input-no-border  form-control"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                                <button type="button" class="btn btn-success" data-dismiss="modal"
                                    onClick={onEdit}>Lưu</button>
                            </div>
                        </div>
                    </div>

         
  </div>;
};

export default AdminInfoFix;
