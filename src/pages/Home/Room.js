// import Room from '../Home/Room';
import React, { useState, useEffect } from 'react'
import { BiArea } from "react-icons/bi";
import { TiGroup } from "react-icons/ti";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

import { useNavigate } from 'react-router-dom';
import Csvc from '../Csvc/csvc';
import HomeCsvc from '../Home/HomeCsvc';
import HomeKhac from './HomeKhac';

const Room = (props) => {

    const{id_phong, tinh_tp, xa_phuong, quan_huyen, id_nvh, truycap, quyen_binh_luan, id_kh}= props;
    const history = useNavigate();

	const datHang = ()=>{
        localStorage.setItem("id_phong", id_phong);
        history("/booking");
        // window.location.reload();
    }
  
    const [danhgia, setDanhgia] = useState({
        danh_gia_sao: 5,
        binh_luan: ""
    })

  const [binhluans, setBinhluans] = useState([]);
  const [infophong, setInfoPhong] = useState({
  });
  const [sao, setSao] = useState({
  });
  const [anhs, setAnh] = useState([])

  const [linkanhthem, setLink] = useState("...")

  const getBinhLuan = async() => {
      try {
          const response = await fetch(`
              http://localhost:5000/getbinhluanphong/${id_phong}`);
          const jsonData = await response.json()

          setBinhluans(jsonData);
          console.log('jsonData :', jsonData);

      } catch (error) {
          console.error(error.message);
      }
  }
  const getPhong = async() => {
    try {
        const response = await fetch(`
            http://localhost:5000/getphong/${id_phong}`);
        const jsonData = await response.json()

        setInfoPhong(jsonData);
        console.log('jsonData :', jsonData);

    } catch (error) {
        console.error(error.message);
    }
}
const getSao = async() => {
  try {
      const response = await fetch(`
          http://localhost:5000/getsaophong/${id_phong}`);
      const jsonData = await response.json()

      setSao(jsonData);
      console.log('jsonData :', jsonData);

  } catch (error) {
      console.error(error.message);
  }
}
const getAnh = async() => {
  try {
      const response = await fetch(`
          http://localhost:5000/getanhphong/${id_phong}`);
      const jsonData = await response.json()

      setAnh(jsonData);
      console.log('jsonData :', jsonData);

  } catch (error) {
      console.error(error.message);
  }
}

// const guiAnh = async()=>{
//   try {
//     const id_nvh = parseInt(localStorage.getItem("id_nvh"));
//     const src = linkanhthem
//     const body = {id_phong, src, id_nvh};
//     const response = await fetch("http://localhost:5000/addanhnvh",{
//         method: "POST",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify(body) 
//     }) 

//     console.log(' Anh gui di:', body);
//     // window.location = "http://localhost:3000/admin/services";
//   } catch (error) {
//     console.error(error.message);
//   }
// }

function handleChange(event) {
  const { name, value } = event.target;

  setInfoPhong(prevValue => {
    return {
      ...prevValue,
      [name]: value
    };
  });
  
  console.log('infophong:', infophong);
}


// const onEdit = async(e)=>{
//   e.preventDefault();
//   try {
//   //    const id_nvh = parseInt(localStorage.getItem("id_nvh"));
//   //    id_nvh, ten_csvc, giatri, giathue_csvc, mieuta, soluong, anhcsvc
//   const id_nvh = parseInt(localStorage.getItem("id_nvh"));
//      const body = {id_nvh, ...infophong};
//      const response = await fetch(`http://localhost:5000/updatephong/${id_phong}`,{
//          method: "PUT",
//          headers: {"Content-Type": "application/json"},
//          body: JSON.stringify(body) 
//      }) 

//      console.log('infoUpdatePhong:', body);
//     //  window.location = "http://localhost:3000/admin/about";
//   } catch (error) {
//       console.error(error.message);
//   }
// }
 const onBinhLuan = async(e)=>{
    e.preventDefault();
    try {
       
    //    id_nvh, ten_csvc, giatri, giathue_csvc, mieuta, soluong, anhcsvc
       const body = {...danhgia};
       const response = await fetch(`http://localhost:5000/addbinhluan/${id_phong}/${id_kh}`,{
           method: "POST",
           headers: {"Content-Type": "application/json"},
           body: JSON.stringify(body) 
       }) 

       console.log('Binh luan gui di:', body);
    //    window.location = "http://localhost:3000/admin/services";
    } catch (error) {
        console.error(error.message);
    }
}
  useEffect(()=>{
      getBinhLuan();
      getPhong();
      getSao();
      getAnh();
  },[id_phong])

  const moneyInputStyle = {
    fontSize: "50px",
    border: "none"
  };

  if (id_phong==-1) return <h1 class="h5 text-center">Chọn phòng bạn muốn quản lý</h1>

  return <div>

    <div class="home-phong-part">
    <div class="home-phong-card shadow-sm">
            <div class="card mb-3 client-card">
                <div class="row client-row">
                    <div class="col-md-3 client-img-div">
                        <img
                            class="client-img"
                            src={infophong.avatarphong}
                            alt="..."
                            type="button"
                            data-toggle="collapse"
                            data-target={`#nvh${props.id_nvh}phong${id_phong}`}
                            aria-expanded="false"
                            aria-controls={`nvh${props.id_nvh}phong${id_phong}`}/>
                    </div>
                    <div class="col-md-5 client-info-part">
                        <div class="card-body client-card-info">
                            <a class="card-title client-card-title h5 text-dark" data-toggle="modal" data-target={`#nvh${id_nvh}model${id_phong}`}>{props.ten_nvh}</a>
                                
                                <div class="modal fade" id={`nvh${id_nvh}model${id_phong}`} tabindex="-1" aria-labelledby={`nvh${id_nvh}model${id_phong}Label`} aria-hidden="true">
                                <div class="modal-dialog modal-xl">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id={`nvhm${id_nvh}odel${id_phong}Label`}>{props.ten_nvh}</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <HomeKhac id_nvh={id_nvh} id_phong={id_phong}/>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        
                                    </div>
                                    </div>
                                </div>
                                </div>
                            <p class="card-text mt-0">
                                <small class="text-muted">
                                {xa_phuong} {quan_huyen} {tinh_tp}  
                                </small>
                            </p>
                            <p class="card-text">
                                <h6 class="text-muted text-uppercase">
                                    {infophong.loai_phong} <a href="#0" class="badge badge-warning">{infophong.so_sao_tb}/5</a>
                                </h6>
                            </p>

                            <div class="">
                                <table class="client-table table table-hover table-sm">
                                    <tbody>
                                        <tr>
                                            <th scope="row client-map">
                                                <p class="client-map-text"><BiArea class="client-svg"/>
                                                    Diện tích</p>
                                            </th>
                                            <td>
                                            {infophong.dien_tich} m<sup>2</sup>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row client-map">
                                                <p class="client-map-text"><TiGroup class="client-svg"/>
                                                    Sức chứa</p>
                                            </th>
                                            <td>
                                            {infophong.so_nguoi}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                    <div class="col-md-4 client-go-part">
                        <div class="box client-box">
                            <div class="card client-go-card">
                                <div class="card-body">
                                    <p class="card-text no-margin-bottom">Chỉ từ</p>
                                    <span class="card-title h1">
                                    {infophong.gia}
                                    </span>
                                    <span>đ/giờ</span>
                                    <p class="text-muted font-italic">(Giá cả có thể chênh lệch trong thực tế)</p>
                                    <div class=" client-go-button-div">
                                        {/*
                                        <a href="#" class="btn client-go-button">Đặt ngay ➧</a>
                                        */}

                                        <div class="home-bookbutton-div">
                                            <button class="home-bookbutton" onClick={datHang}>ĐẶT NGAY ➜</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="collapse" id={`nvh${props.id_nvh}phong${id_phong}`}>

                <div class="accordion" id={`nvh${props.id_nvh}phong${id_phong}a`}>
                    <div class="mini-navmenu " id="mini-navmenu">
                        <div class="topnav">
                            <a
                                data-toggle="collapse"
                                href={`#nvh${props.id_nvh}phong${id_phong}img`}
                                role="button"
                                aria-expanded="false"
                                aria-controls={`nvh${props.id_nvh}phong${id_phong}img`}
                                id={`nvh${props.id_nvh}phong${id_phong}imgl`}>ẢNH</a>
                            <a
                                data-toggle="collapse"
                                href={`#nvh${props.id_nvh}phong${id_phong}csvc`}
                                role="button"
                                aria-expanded="false"
                                aria-controls={`nvh${props.id_nvh}phong${id_phong}csvc`}
                                id={`nvh${props.id_nvh}phong${id_phong}csvcl`}>CƠ SỞ VẬT CHẤT</a>
                            <a
                                data-toggle="collapse"
                                href={`#nvh${props.id_nvh}phong${id_phong}comment`}
                                role="button"
                                aria-expanded="false"
                                aria-controls={`nvh${props.id_nvh}phong${id_phong}comment`}
                                id={`nvh${props.id_nvh}phong${id_phong}commentl`}>ĐÁNH GIÁ</a>
                            <a
                                data-toggle="collapse"
                                href={`#nvh${props.id_nvh}phong${id_phong}mieuta`}
                                role="button"
                                aria-expanded="false"
                                aria-controls={`nvh${props.id_nvh}phong${id_phong}mieuta`}
                                id={`#nvh${props.id_nvh}phong${id_phong}mieutal`}>MIÊU TẢ</a>
                        </div>
                    </div>
                    <div
                        class="card shadow-sm collapse bg-dark show"
                        id={`nvh${props.id_nvh}phong${id_phong}img`}
                        data-parent={`#nvh${props.id_nvh}phong${id_phong}a`}
                        aria-labelledby={`#nvh${props.id_nvh}phong${id_phong}imgl`}
                        >

                        {/* <div id="nvh1phong1imgslide" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img
                                        src="https://i.pinimg.com/564x/c8/c0/3d/c8c03dc7d1bf870b60b0d998b74ed8b1.jpg"
                                        class="d-block home-phong-cardimg"
                                        alt="..."/>
                                </div>
                                <div class="carousel-item">
                                    <img
                                        src="https://i.pinimg.com/474x/d1/37/a3/d137a3451bfe9ba8ae47f64f865e8253.jpg"
                                        class="d-block home-phong-cardimg"
                                        alt="..."/>
                                </div>
                                <div class="carousel-item">
                                    <img
                                        src="https://i.pinimg.com/474x/5f/c9/f4/5fc9f416b0d74f0a741b9198f2f1f556.jpg"
                                        class="d-block home-phong-cardimg"
                                        alt="..."/>
                                </div>
                            </div>
                            <button
                                class="carousel-control-prev"
                                type="button"
                                data-target="#nvh1phong1imgslide"
                                data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </button>
                            <button
                                class="carousel-control-next"
                                type="button"
                                data-target="#nvh1phong1imgslide"
                                data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </button>
                        </div> */}

                        <div id={`nvh${props.id_nvh}phong${id_phong}imgslide`}>
                        <div class="container">
                        {
                                (anhs.length===0) && <h1 class="text-center text-white"> Phòng này chưa có ảnh </h1>
                            }
                          <div class="row row-cols-4">

                            {anhs.map((anh)=>{
                              return (<div class="col">
                                <img class="d-block home-phong-cardimg p-2" src={anh.src} />
                              </div>)
                            })}
                            {/* <div class="col">
                            <input class="form-control m-3" type="text" placeholder='Thêm ảnh' value={linkanhthem} onChange={(e)=>{
                                setLink(e.target.value)
                            }}></input>
                            <button class="btn btn-success ml-3" 
                              onClick={guiAnh}>+</button>
                            </div> */}
                          </div>
                        </div>
                        </div>

                    </div>

                    <div
                        class="collapse"
                        id={`nvh${props.id_nvh}phong${id_phong}csvc`}
                        data-parent={`#nvh${props.id_nvh}phong${id_phong}a`}
                        aria-labelledby={`#nvh${props.id_nvh}phong${id_phong}csvcl`}
                        >

                        <div class="card homecsvc-div">
                            <HomeCsvc id_phong={id_phong}/>
                        </div>
                    </div>

                    <div
                        class="collapse card shadow-sm bg-light"
                        id={`nvh${props.id_nvh}phong${id_phong}comment`}
                        data-parent={`#nvh${props.id_nvh}phong${id_phong}a`}
                        aria-labelledby={`nvh${props.id_nvh}phong${id_phong}commentl`}
                        >

                        <div class="home-comment-div container">

                            <div class="home-comment-danhgiachung-div">

                                <span class="home-comment-danhgiachung-heading ml-3">Đánh giá từ {sao.tong_sao_danh_gia} khách hàng đã thuê phòng</span>
                                <h3 class="h3 ml-3">{infophong.so_sao_tb}/5⭐</h3>
                              
                                {(sao.tong_sao_danh_gia)?<div class="home-comment-danhgiachung-row">
                                    <div class="home-comment-danhgiachung-side">
                                        <div>5 star</div>
                                    </div>
                                    <div class="home-comment-danhgiachung-middle">
                                        <div class="home-comment-danhgiachung-bar-container">
                                            <div class="home-comment-danhgiachung-bar-5" style={{width: `${100*sao.nam_sao/sao.tong_sao_danh_gia}%` }}></div>
                                        </div>
                                    </div>
                                    <div class="home-comment-danhgiachung-side home-comment-danhgiachung-right">
                                        <div>{sao.nam_sao}</div>
                                    </div>
                                    <div class="home-comment-danhgiachung-side">
                                        <div>4 star</div>
                                    </div>
                                    <div class="home-comment-danhgiachung-middle">
                                        <div class="home-comment-danhgiachung-bar-container">
                                            <div class="home-comment-danhgiachung-bar-4" style={{width: `${100*sao.bon_sao/sao.tong_sao_danh_gia}%` }} ></div>
                                        </div>
                                    </div>
                                    <div class="home-comment-danhgiachung-side home-comment-danhgiachung-right">
                                        <div>{sao.bon_sao}</div>
                                    </div>
                                    <div class="home-comment-danhgiachung-side">
                                        <div>3 star</div>
                                    </div>
                                    <div class="home-comment-danhgiachung-middle">
                                        <div class="home-comment-danhgiachung-bar-container">
                                            <div class="home-comment-danhgiachung-bar-3" style={{width: `${100*sao.ba_sao/sao.tong_sao_danh_gia}%` }}></div>
                                        </div>
                                    </div>
                                    <div class="home-comment-danhgiachung-side home-comment-danhgiachung-right">
                                        <div>{sao.ba_sao}</div>
                                    </div>
                                    <div class="home-comment-danhgiachung-side">
                                        <div>2 star</div>
                                    </div>
                                    <div class="home-comment-danhgiachung-middle">
                                        <div class="home-comment-danhgiachung-bar-container">
                                            <div class="home-comment-danhgiachung-bar-2" style={{width: `${100*sao.hai_sao/sao.tong_sao_danh_gia}%` }}></div>
                                        </div>
                                    </div>
                                    <div class="home-comment-danhgiachung-side home-comment-danhgiachung-right">
                                        <div>{sao.hai_sao}</div>
                                    </div>
                                    <div class="home-comment-danhgiachung-side">
                                        <div>1 star</div>
                                    </div>
                                    <div class="home-comment-danhgiachung-middle">
                                        <div class="home-comment-danhgiachung-bar-container">
                                            <div class="home-comment-danhgiachung-bar-1" style={{width: `${100*sao.mot_sao/sao.tong_sao_danh_gia}%` }}></div>
                                        </div>
                                    </div>
                                    <div class="home-comment-danhgiachung-side home-comment-danhgiachung-right">
                                        <div>{sao.mot_sao}</div>
                                    </div>
                                </div> : <h3 class="text-center">Phòng này chưa có đánh giá nào</h3>}

                            </div>
                            <div class="row row-cols-2">

                            {binhluans.map((binhluan)=>{
                              return <div>
                                  <div class="home-comment col">
                                        <div class="card">
                                            <div class="card-body">
                                                <img
                                                    class="navclient-avatar"
                                                    src={binhluan.avatarkh}></img>

                                                <span class="h5 no-margin-bottom home-comment-customer-name">{` ${binhluan.hotendem} ${binhluan.ten}`}</span>
                                                {
                                                  (binhluan.danh_gia_sao==5) && <h5 class="card-title">⭐⭐⭐⭐⭐</h5>
                                                }
                                                {  
                                                  (binhluan.danh_gia_sao==4) && <h5 class="card-title">⭐⭐⭐⭐</h5>
                                                }
                                                {
                                                  (binhluan.danh_gia_sao==3) && <h5 class="card-title">⭐⭐⭐</h5>
                                                }
                                                {  
                                                  (binhluan.danh_gia_sao==2) && <h5 class="card-title">⭐⭐</h5>
                                                }
                                                {  
                                                  (binhluan.danh_gia_sao==1) && <h5 class="card-title">⭐</h5>
                                                }
                                                {
                                                  (binhluan.danh_gia_sao==0) && <h5 class="card-title"></h5>
                                                }
                                                
                                                <p class="card-text">{binhluan.binh_luan}</p>

                                            </div>
                                        </div>
                                    </div>
                              </div>
                            })}

                            

                            
                            </div>
                            {(truycap==1 && quyen_binh_luan==1 )?<div class="input-group mb-3 pl-5">
                            <input type="text" class="form-control" placeholder="Gửi bình luận của bạn: " aria-label="Recipient's username" aria-describedby="button-addon2"
                                name="binh_luan" value={danhgia.binh_luan} onChange={(e)=>{
                                const { name, value } = e.target;
                                    setDanhgia(prevValue => {
                                        return {
                                            ...prevValue,
                                            [name]: value                                                 
                                        };
                                        });
        
                                console.log('Danh gia:', danhgia);
                            }} 
                            />
                                                        <div class="input-group-append">
                            <select name="danh_gia_sao" 
                            onChange={(e)=>{
                                const { name, value } = e.target;
                                    setDanhgia(prevValue => {
                                        return {
                                            ...prevValue,
                                            [name]: value                                                 
                                        };
                                        });
        
                                console.log('Danh gia:', danhgia);
                            }} 
                            class="form-control prepend2-div" id="exampleFormControlSelect1">
                        <option value={5}>⭐⭐⭐⭐⭐ </option>
                        <option value={4}>⭐⭐⭐⭐ </option>
                        <option value={3}>⭐⭐⭐ </option>
                        <option value={2}>⭐⭐ </option>
                        <option value={1}>⭐ </option>
                        </select> 
                            </div>
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary" type="button" id="button-addon2"
                                onClick={onBinhLuan}>Gửi</button>
                            </div>

                            </div> : <h5 class="text-muted text-center">Bạn chưa có quyền bình luận</h5>}
                        </div>

                    </div>
                    
                    <div class="collapse"
                        id={`nvh${props.id_nvh}phong${id_phong}mieuta`}
                        data-parent={`#nvh${props.id_nvh}phong${id_phong}a`}
                        aria-labelledby={`nvh${props.id_nvh}phong${id_phong}mieutal`}
                        >
                        {/* <div class="card" style={{width: "18rem;"}}>
                        <div class="card-body">
                            <p class="card-text text-center">{infophong.mieu_ta}</p>
                        </div>
                        </div> */}
                        <div class="card mb-3">
                            <div class="row no-gutters">
                                
                                <div class="card-body">
                                    <h4 class="card-title ml-3">GIỚI THIỆU</h4>
                                    <p class="card-text text-center h5"><RiDoubleQuotesL class="pb-1"/>

                                    <span class="mb-3 h4 font-weight-normal">{infophong.mieu_ta}</span>

                                    <RiDoubleQuotesR class="pb-1"/></p>
                                    
                                </div>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>;
};

export default Room;
