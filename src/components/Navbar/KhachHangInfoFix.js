import React,{useEffect, useState} from 'react';
import PushNocScreen from '../PushNoc/PushNocScreen';

const KhachHangInfoFix = (props) => {

    const {id_kh} = props;
    const [khInfo, setKhInfo] = useState({})
    
    function handleChange(event) {
        const { name, value } = event.target;
    
        setKhInfo(prevValue => {
          return {
            ...prevValue,
            [name]: value
          };

          
        });

        console.log('Thong tin khach hang:', khInfo);
      }
      const onEdit = async(e)=>{
        e.preventDefault();
        try {
        //    const id_nvh = parseInt(localStorage.getItem("id_nvh"));
        //    id_nvh, ten_csvc, giatri, giathue_csvc, mieuta, soluong, anhcsvc
           const body = {...khInfo};
           const response = await fetch(`http://localhost:5000/updatekh/${id_kh}`,{
               method: "PUT",
               headers: {"Content-Type": "application/json"},
               body: JSON.stringify(body) 
           }) 
           if (response.status===200) {
               props.setThanhCong(1);
               setTimeout(() => {props.setThanhCong(0)}, 3000);
           }
           console.log('Khách hàng thay đổi:', body);
        //    window.location = "http://localhost:3000/admin/services";
        } catch (error) {
            console.error(error.message);
        }
    }
    const getKhInfo = async() => {
        try {
            // const id_kh = parseInt(localStorage.getItem("id_kh"));
            const response = await fetch(`
                http://localhost:5000/getkh/${id_kh}`);
            const jsonData = await response.json()
            setKhInfo(jsonData)
            
            console.log('khInfo:', jsonData);
        } catch (error) {
            console.error(error.message);
        }
    }
    useEffect(()=>{
        getKhInfo();
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
                                <div class="col-4 p-3 d-flex">
                                    <img
                                        src={khInfo.avatarkh}
                                        width="160"
                                        height="160"
                                        class="rounded-circle mx-auto"></img>
                                    {/* <input onChange={handleChange} name="avatarkh" type="text" value={khInfo.avatarkh} aria-label="Last name" class="form-control input-img"/> */}
                                    <div class="input-group input-img">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text text-dark font-weight-bold">Ảnh đại diện: </span>
                                        </div>
                                        <input onChange={handleChange} name="avatarkh" type="text" value={khInfo.avatarkh} aria-label="Last name" class="form-control"/>
                                        
                                        </div>
                                </div>
                                <div class="col-6">
                                    <div class="pheduyet-khinfo p-3">
                                        
                                        {/* <span class="h6">Họ và tên: </span>
                                        <span class="text-uppercase">{`${khInfo.hotendem} ${khInfo.ten}`}</span> */}
                                        <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text bg-white text-dark input-no-border font-weight-bold">Họ và tên: </span>
                                        </div>
                                        <input onChange={handleChange} name="hotendem" type="text" value={khInfo.hotendem} aria-label="First name" class="input-no-border  form-control"/>
                                        <input onChange={handleChange} name="ten" type="text" value={khInfo.ten} aria-label="Last name" class="input-no-border  form-control"/>
                                        </div>
                                        <hr class="m-0"/>
                                        <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text bg-white text-dark input-no-border font-weight-bold">Số điện thoại: </span>
                                        </div>
                                        <input onChange={handleChange} name="sdt" type="text" value={khInfo.sdt} aria-label="First name" class="input-no-border  form-control"/>
                                        
                                        </div>
                                        <hr class="m-0"/>
                                        <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text bg-white text-dark input-no-border font-weight-bold">Địa chỉ: </span>
                                        </div>
                                        <input onChange={handleChange} name="tinh_tp" type="text" value={khInfo.tinh_tp} aria-label="First name" class="input-no-border  form-control"/>
                                        <input onChange={handleChange} name="quan_huyen" type="text" value={khInfo.quan_huyen} aria-label="Last name" class="input-no-border  form-control"/>
                                        <input onChange={handleChange} name="xa_phuong" type="text" value={khInfo.xa_phuong} aria-label="Last name" class="input-no-border  form-control"/>
                                        </div>
                                        <hr class="m-0"/>
                                        <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text bg-white text-dark input-no-border font-weight-bold">Mật khẩu </span>
                                        </div>
                                        <input onChange={handleChange} name="password" type="password" value={khInfo.password} aria-label="First name" class="input-no-border  form-control"/>
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

export default KhachHangInfoFix;
