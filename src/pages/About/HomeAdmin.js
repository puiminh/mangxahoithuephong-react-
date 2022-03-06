import React, { useState, useEffect } from 'react'
import './HomeAdmin.css'
import Navbar from '../../components/Navbar/Navbar'
import HomeSlideAdmin from './HomeSlideAdmin'
import HomeGioiThieuAdmin from './HomeGioiThieuAdmin'
import HomeThongTinAdmin from './HomeThongTinAdmin'
import { AiFillDelete, AiFillEdit} from "react-icons/ai";
import Iframe from 'react-iframe';


const HomeAdmin = () => {
    
    const [nvhInfo, setNvhInfo] = useState({

    });

    const getNvhInfo = async() => {
        try {
            const id_admin = parseInt(localStorage.getItem("id_admin"));
            const id_nvh = parseInt(localStorage.getItem("id_nvh"));
            const response = await fetch(`
                http://localhost:5000/getnvhfromadmin/${id_admin}/${id_nvh}`);
            const jsonData = await response.json()

            setNvhInfo(jsonData[0]);
        } catch (error) {
            console.error(error.message);
        }
    }

    function handleChange(event) {
        const { name, value } = event.target;
    
        setNvhInfo(prevValue => {
          return {
            ...prevValue,
            [name]: value
          };
        });
        
        console.log('nvhInfo:', nvhInfo);
      }


    useEffect(()=>{
        getNvhInfo();
    },[])

    const onEdit = async(e)=>{
        e.preventDefault();
        try {
        //    const id_nvh = parseInt(localStorage.getItem("id_nvh"));
        //    id_nvh, ten_csvc, giatri, giathue_csvc, mieuta, soluong, anhcsvc
           const body = {...nvhInfo};
           const id_nvh = parseInt(localStorage.getItem("id_nvh"));
           const response = await fetch(`http://localhost:5000/updatenvh/${id_nvh}`,{
               method: "PUT",
               headers: {"Content-Type": "application/json"},
               body: JSON.stringify(body) 
           }) 

           console.log(' body:', body);
           window.location = "http://localhost:3000/admin/about";
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
    
            <div>
                <div class="home-admin-sl-bigdiv">

                <button class="button-62" role="button"
                    onClick={onEdit}><AiFillEdit/></button>

                    <div class="home-admin-titlecsvc-div">
                        {/*
                        <span class="home-admin-titlecsvc h1">{nvhInfo.ten_nvh}</span>
                        */}
                        <div class="input-group mb-3">
                            <input
                                type="text"
                                class="form-control text-center h3important text-dark"
                                name="ten_nvh"
                                id="ten_nvh"
                                placeholder="Tên nhà văn hóa"
                                value={nvhInfo.ten_nvh}
                                onChange={handleChange}/>
                        </div>
                    </div>

                    {/*
                    <nav class="navbar navbar-light bg-light">
                        <span class="navbar-brand mb-0 mx-auto home-titlecsvc h1">Nhà Văn Hóa Xóm 8</span>
                    </nav>
                    */}
                    <HomeSlideAdmin/>
                    <div class="home-admin-titlecsvc-div">
                        <span class="home-admin-titlecsvc h1">GIỚI THIỆU</span>
                    </div>
                    <div class="home-admin-card-bigdiv">
                        <div class="home-admin-card-subbigdiv">
                            <div class="row">
                                <div class="home-admin-card-text col-md-6">
                                    <h2 class="card-title m-5 mx-auto">{nvhInfo.ten_nvh}</h2>
                                    <div class="input-group mb-3">
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="gioithieu"
                                            id="gioithieu"
                                            placeholder="Giới thiệu về nhà văn hóa"
                                            value={nvhInfo.gioithieu}
                                            onChange={handleChange}/>
                                    </div>
                                </div>
                                <div class="col-md-6 home-card-roundimgdiv">

                                    <div class="input-group mb-3 home-admin-img-input">
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="avatar"
                                            id="avatar"
                                            placeholder="Ảnh đại diện cho nhà của bạn"
                                            value={nvhInfo.avatar}
                                            onChange={handleChange}/>
                                        <div class="input-group-append">
                                        </div>
                                    </div>

                                    <img src={nvhInfo.avatar} class="home-admin-card-roundimg rounded-circle"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <div class="row">
                            <div class="col-md-5">
                                <div class="home-admin-titlecsvc-div">
                                    <span class="home-admin-titlecsvc h2">BẢN ĐỒ</span>
                                </div>
                                <div class="input-group mb-3 home-admin-img-input">
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="bando"
                                        id="bando"
                                        placeholder="Thêm đường dẫn bản đồ vào đây"
                                        value={nvhInfo.bando}
                                        onChange={handleChange}/>
                                </div>
                                <div class="home-admin-ggmap-div">
                                    {(nvhInfo.bando!='...')?<Iframe
                                        src={nvhInfo.bando}
                                        width="400"
                                        height="300"
                                        allowfullscreen=""
                                        loading="lazy"></Iframe>:<span class="text-muted">Khu vực này chưa có bản đồ</span>}
                                </div>
                            </div>

                            <div class="col-md-7">
                                <div class="home-admin-titlecsvc-div">
                                    <span class="home-admin-titlecsvc h2">THÔNG TIN CHUNG</span>
                                </div>
                                <div class="home-admin-table-div">
                                    <table class="home-admin-table table table-hover table-sm">
                                        <tbody>
                                            <tr>
                                                <th scope="row">ĐỊA CHỈ</th>
                                                <td>
                                                    {/* <div class="input-group mb-3">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            name="diachi"
                                                            id="diachi"
                                                            placeholder="Địa chỉ"
                                                            value={nvhInfo.diachi}
                                                            onChange={handleChange}/>
                                                        <div class="input-group-append">
                                                            <button
                                                                class="btn btn-outline-warning"
                                                                type="button"
                                                                id="button-addon2"
                                                                onClick={onEdit}><AiFillEdit/></button>
                                                        </div>
                                                    </div> */}
                                        <div class="input-group pt-2">
                                        <input onChange={handleChange} placeholder="Địa chỉ" name="diachi" type="text" value={nvhInfo.diachi} aria-label="First name" class="form-control"/>
                                        <input onChange={handleChange} placeholder="Xã/Phường" name="xa_phuong" type="text" value={nvhInfo.xa_phuong} aria-label="Last name" class="form-control"/>
                                        <input onChange={handleChange} placeholder="Quận/Huyện" name="quan_huyen" type="text" value={nvhInfo.quan_huyen} aria-label="Last name" class="form-control"/>
                                        <input onChange={handleChange} placeholder="Tỉnh/T.Phố" name="tinh_tp" type="text" value={nvhInfo.tinh_tp} aria-label="First name" class="form-control"/>
                                        </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">DIỆN TÍCH</th>
                                                <td>
                                                    <div class="input-group mb-3 pt-2">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            name="dientich"
                                                            id="dientich"
                                                            placeholder="Diện tích"
                                                            value={nvhInfo.dientich}
                                                            onChange={handleChange}/>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">SỐ PHÒNG</th>
                                                <td>
                                                {nvhInfo.so_phong}
                                                    
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">ĐÁNH GIÁ</th>
                                                <td>
                                                    {`${nvhInfo.so_sao_tb}/5`}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">SỐ ĐƠN ĐÃ ĐẶT</th>
                                                <td>
                                                    {nvhInfo.tong_don}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
    )
}

export default HomeAdmin


// src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPH7dOVp2z36F7dYJ8l2tRALMZGA6jnoYYcw&usqp=CAU"
// src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH7s4ysofS8s295cZiBzQ2I--g2BG_Ay-1XA&usqp=CAU"
// src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJSGy6uHEj_Zxi5R0K_qQIng569PLjxPyTDw&usqp=CAU"
// src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPH7dOVp2z36F7dYJ8l2tRALMZGA6jnoYYcw&usqp=CAU"