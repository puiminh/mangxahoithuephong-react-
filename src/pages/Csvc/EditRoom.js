import Room from '../Home/Room';
import React, { useState, useEffect } from 'react'
import { BiArea } from "react-icons/bi";
import { TiGroup } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';
import HomeCsvc from '../Home/HomeCsvc';
import Csvc from './csvc';

const EditRoom = (props) => {

  const{id_phong}= props;

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

const guiAnh = async()=>{
  try {
    const id_nvh = parseInt(localStorage.getItem("id_nvh"));
    const src = linkanhthem
    const body = {id_phong, src, id_nvh};
    const response = await fetch("http://localhost:5000/addanhnvh",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body) 
    }) 

    console.log(' Anh gui di:', body);
    // window.location = "http://localhost:3000/admin/services";
  } catch (error) {
    console.error(error.message);
  }
}

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


const onEdit = async(e)=>{
  e.preventDefault();
  try {
  //    const id_nvh = parseInt(localStorage.getItem("id_nvh"));
  //    id_nvh, ten_csvc, giatri, giathue_csvc, mieuta, soluong, anhcsvc
  const id_nvh = parseInt(localStorage.getItem("id_nvh"));
     const body = {id_nvh, ...infophong};
     const response = await fetch(`http://localhost:5000/updatephong/${id_phong}`,{
         method: "PUT",
         headers: {"Content-Type": "application/json"},
         body: JSON.stringify(body) 
     }) 

     console.log('infoUpdatePhong:', body);
    //  window.location = "http://localhost:3000/admin/about";
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

    <div class="home-phong-part" style={{minHeight: "500px"}}>
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
                            data-target="#nvh1phong1"
                            aria-expanded="false"
                            aria-controls="nvh1phong1"/>
                        <input 
                           name="avatarphong" type="text" class="form-control input-img" placeholder="Miêu tả về căn phòng này..." aria-label="Recipient's username" aria-describedby="button-addon2" style={{ border: 'none'}}
                            value={infophong.avatarphong}
                            onChange={handleChange}
                          />
                    </div>
                    <div class="col-md-5 client-info-part">
                        <div class="card-body client-card-info">
                            <h5 class="card-title client-card-title"></h5>
                            <p class="card-text">
                                <small class="text-muted">
                                <div class="input-group">
                        <input 
                           name="loai_phong" type="text" class="form-control text-dark h3 h3important" placeholder="Miêu tả về căn phòng này..." aria-label="Recipient's username" aria-describedby="button-addon2" style={{ border: 'none'}}
                            value={infophong.loai_phong}
                            onChange={handleChange}
                          />
                        <div class="input-group-append">
                          <button class="btn btn-success" type="button" id="button-addon2"
                            onClick={onEdit}>➲</button>
                        </div>
                      </div>
                                </small>
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
                                            <div class="input-group">
                        <input 
                          name="dien_tich" type="text" class="form-control" placeholder="Miêu tả về căn phòng này..." aria-label="Recipient's username" aria-describedby="button-addon2" style={{ border: 'none'}}
                            value={infophong.dien_tich}
                            onChange={handleChange}
                          />
                        <div class="input-group-append">
                          <button class="btn btn-success" type="button" id="button-addon2"
                            onClick={onEdit}>➲</button>
                        </div>
                      </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row client-map">
                                                <p class="client-map-text"><TiGroup class="client-svg"/>
                                                    Sức chứa</p>
                                            </th>
                                            <td>
                                            <div class="input-group">
                        <input 
                          name="so_nguoi" type="text" class="form-control" placeholder="Miêu tả về căn phòng này..." aria-label="Recipient's username" aria-describedby="button-addon2" style={{ border: 'none'}}
                            value={infophong.so_nguoi}
                            onChange={handleChange}
                          />
                        <div class="input-group-append">
                          <button class="btn btn-success" type="button" id="button-addon2"
                            onClick={onEdit}>➲</button>
                        </div>
                      </div>
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
                                    <div class="input-group">
                        <input 
                          name="gia" type="text" class="h1 form-control" placeholder="Miêu tả về căn phòng này..." aria-label="Recipient's username" aria-describedby="button-addon2" style={moneyInputStyle}
                            value={infophong.gia}
                            onChange={handleChange}
                          />
                        <div class="input-group-append">
                          <button class="btn btn-success" type="button" id="button-addon2"
                            onClick={onEdit}>➲</button>
                        </div>
                      </div>
                                    </span>
                                    <span>/giờ</span>
                                    <p class="text-muted font-italic">(Giá cả có thể chênh lệch trong thực tế)</p>
                                    <div class=" client-go-button-div">
                                        {/*
                                        <a href="#" class="btn client-go-button">Đặt ngay ➧</a>
                                        */}

                                        {/* <div class="home-bookbutton-div">
                                            <button class="home-bookbutton" onClick={props.datHang}>ĐẶT NGAY ➜</button>
                                        </div> */}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="collapse show" id="nvh1phong1">

                <div class="accordion" id="nvh1phong1a">
                    <div class="mini-navmenu " id="mini-navmenu">
                        <div class="topnav">
                            <a
                                data-toggle="collapse"
                                href="#nvh1phong1img"
                                role="button"
                                aria-expanded="false"
                                aria-controls="nvh1phong1img"
                                id="nvh1phong1imgl">ẢNH</a>
                            <a
                                data-toggle="collapse"
                                href="#nvh1phong1csvc"
                                role="button"
                                aria-expanded="false"
                                aria-controls="nvh1phong1csvc"
                                id="nvh1phong1csvcl">CƠ SỞ VẬT CHẤT</a>
                            <a
                                data-toggle="collapse"
                                href="#nvh1phong1comment"
                                role="button"
                                aria-expanded="false"
                                aria-controls="nvh1phong1comment"
                                id="nvh1phong1commentl">ĐÁNH GIÁ</a>
                            <a
                                data-toggle="collapse"
                                href="#nvh1phong1mieuta"
                                role="button"
                                aria-expanded="false"
                                aria-controls="nvh1phong1mieuta"
                                id="nvh1phong1mieutal">MIÊU TẢ</a>
                        </div>
                    </div>
                    <div
                        class="card shadow-sm collapse bg-dark show"
                        id="nvh1phong1img"
                        data-parent="#nvh1phong1a"
                        aria-labelledby="nvh1phong1imgl">

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

                        <div id="nvh1phong1imgslide">
                        <div class="container">
                          <div class="row row-cols-4">
                            {anhs.map((anh)=>{
                              return (<div class="col">
                                <img class="d-block home-phong-cardimg p-3" src={anh.src} />
                              </div>)
                            })}
                            <div class="col">
                            <input class="form-control m-3" type="text" placeholder='Thêm ảnh' value={linkanhthem} onChange={(e)=>{
                                setLink(e.target.value)
                            }}></input>
                            <button class="btn btn-success ml-3" 
                              onClick={guiAnh}>+</button>
                            </div>
                          </div>
                        </div>
                        </div>

                    </div>

                    <div
                        class="collapse"
                        id="nvh1phong1csvc"
                        data-parent="#nvh1phong1a"
                        aria-labelledby="nvh1phong1csvcl">

                        <div class="card homecsvc-div">
                            <Csvc id_phong={id_phong}/>
                        </div>
                    </div>

                    <div
                        class="collapse card shadow-sm bg-light"
                        id="nvh1phong1comment"
                        data-parent="#nvh1phong1a"
                        aria-labelledby="nvh1phong1commentl">

                        <div class="home-comment-div container">

                            <div class="home-comment-danhgiachung-div">

                                <span class="home-comment-danhgiachung-heading">Đánh giá từ {sao.tong_sao_danh_gia} khách hàng đã thuê phòng</span>
                                <h3 class="h3">{infophong.so_sao_tb}/5⭐</h3>
                              
                                <div class="home-comment-danhgiachung-row">
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
                                </div>

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
                        </div>

                    </div>
                    
                    <div class="collapse"
                        id="nvh1phong1mieuta"
                        data-parent="#nvh1phong1a">

                      <div class="input-group mt-2 ml-5 pb-5 w-75">
                        <input 
                          name="mieu_ta" type="text" class="form-control" placeholder="Miêu tả về căn phòng này..." aria-label="Recipient's username" aria-describedby="button-addon2"
                            value={infophong.mieu_ta}
                            onChange={handleChange}
                          />
                        <div class="input-group-append">
                          <button class="btn btn-success" type="button" id="button-addon2"
                            onClick={onEdit}>➲</button>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>;
};

export default EditRoom;
