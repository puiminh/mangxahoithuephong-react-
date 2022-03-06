import React, {useState, useEffect} from 'react';
import {Alert} from 'reactstrap';
import { useNavigate } from "react-router-dom";
import './SelectNVH.css';
import SNListitem from './SNListitem';
import { FaQuestionCircle } from "react-icons/fa";
const SelectNVH = () => {

    const [liitems, setLiitems] = useState([]);
    const [timthay, setTimThay] = useState(true);
    const [liitemfs, setLiitemfs] = useState([]);
    const [alert, setAlert] = useState(false);


    const onTaoNvhTrong = async(e)=>{
        e.preventDefault();
        try {
          const id_admin = parseInt(localStorage.getItem("id_admin"));
        //    id_nvh, ten_csvc, giatri, giathue_csvc, mieuta, soluong, anhcsvc
           const body = {id_admin};
           const response = await fetch("http://localhost:5000/addnvhtrong",{
           
               method: "POST",
               headers: {"Content-Type": "application/json"},
               body: JSON.stringify(body) 
           }) 

           console.log(' body:', body);
           console.log('response :', response.status);
           window.location = "http://localhost:3000/selectnvh";
        } catch (error) {
            console.error(error.message);
        }
    }

    const getNVHfromAdmin = async() => {
        try {
            const response = await fetch(`http://localhost:5000/getnvh&anhnvhfromadmin/${localStorage.getItem("id_admin")}`);
            const jsonData = await response.json()

            setLiitems(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    }

    const getNVHmakhongdcadminquanly = async() => {
        try { 
            const response = await fetch(`http://localhost:5000/getelsenvh&anhnvhfromadmin/${localStorage.getItem("id_admin")}`);
            const jsonData = await response.json()
            setLiitemfs(jsonData);
            console.log('full: ',jsonData);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(()=>{
        getNVHfromAdmin();
        getNVHmakhongdcadminquanly();
    },[])

    console.log("List: ", liitems);

    const history = useNavigate();

    const SetIdNVH = (id_nvh)=>{
        localStorage.setItem("id_nvh", id_nvh);
        
        history("/admin");
        window.location.reload();
    }

    const selectNVH = (e)=>{
        
        console.log('id:', e);
        SetIdNVH(e);
    }
    const selectNVHf = (e)=>{
        
        console.log('id:', e);
        localStorage.setItem("id_nvh", e);
    }
    
    const settingAlert = () =>{
        setAlert(true);
        setTimeout(()=>{
            setAlert(false)
        },3000)
    }

    return (
<div class="SN-bigbigdiv">

    
    <div class="SN-bigdiv">
    {(timthay)?<h2 class="SN-title">HIỆN BẠN ĐANG QUẢN LÝ: </h2>:null}
    <ul class="list-group">
    
    {(timthay) ? liitems.map((liitem)=>{
        return     <SNListitem
        key = {liitem.id_nvh}
        id = {liitem.id_nvh}
        imgsrc = {liitem.avatar}
        tennvh = {liitem.ten_nvh}
        tinmoi = "14"
        function = {()=>{selectNVH(liitem.id_nvh)}}
    />
    }): null}

    {(liitems.length==0)?<span class='text-muted'>Bạn chưa liên kết với nhà nào <FaQuestionCircle/> </span>:null}

    <button 
        type="button" 
        class="SN-where-button btn btn-danger btn-lg btn-block"
        onClick={()=>{
            setTimThay(false);
            console.log("Clicked!")
        }}>Tôi muốn liên kết với nhà đã có</button>
    
    {(!timthay) ? liitemfs.map((liitem)=>{
        return     <SNListitem
        key = {liitem.id_nvh}
        id = {liitem.id_nvh}
        imgsrc = {liitem.avatar}
        tennvh = {liitem.ten_nvh}
        diachi = {liitem.diachi}
        timthay = {!timthay}
        alert = {()=>{settingAlert()}}
        function = {()=>{selectNVHf(liitem.id_nvh)}}
    />
    }): null}
    {(!timthay) ? <button 
        type="button"
        class="btn btn-sm btn-outline-secondary"
        onClick={()=>{
            setTimThay(true);
        }}>Quay lại</button>: null}
    <button 
        type="button" 
        class="SN-where-button btn btn-success btn-lg btn-block"
        onClick={onTaoNvhTrong}>Tôi muốn tạo một nhà mới để quản lý</button>
    {/* <li class="SN-liitem list-group-item d-flex justify-content-between align-items-center list-group-item-action">
        <img class="shadow SN-card-roundimg rounded-circle" 
        src="https://suongtuyet.com/media/product/328_phong_man_hoi_truong_1.jpg" alt="..."/>
        <span class="h5">HỘI TRƯỜNG XÓM 5</span>
        <span class="badge badge-primary badge-pill">2</span>
    </li>
    <li class="SN-liitem list-group-item d-flex justify-content-between align-items-center list-group-item-action">
        <img class="shadow SN-card-roundimg rounded-circle" 
        src="https://cuoihoivip.vn/wp-content/uploads/2018/02/mau-rap-cuoi-dep-mau-hong.jpg" alt="..."/>
        <span class="h5">RẠP CƯỚI ĐỨC HẠNH</span>
        <span class="badge badge-primary badge-pill">1</span>
    </li> */}
    </ul>
    {alert&&<div class="alert alert-success SN-alert-success" role="alert">
        Đã gửi yêu cầu
    </div>}
    </div>
</div>
    )
}

export default SelectNVH

//<span class="badge badge-primary badge-pill">1</span>