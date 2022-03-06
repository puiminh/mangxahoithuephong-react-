import React, {useState, useEffect} from 'react';
import './Client.css';
import { IoLocationSharp } from "react-icons/io5";
import NavbarClient from '../../components/Navbar/NavbarCilent';
import { ImSearch } from "react-icons/im";
import { FaCalendarAlt } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";

// import {DatePickerComponent} from "@syncfusion/ej2-react-calendars";
// import {TimePickerComponent} from "@syncfusion/ej2-react-calendars";
import { BiArea } from "react-icons/bi";
import { AiFillDollarCircle } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { TiGroup } from "react-icons/ti";
import { RiMore2Fill } from "react-icons/ri";
import { FaComments } from "react-icons/fa";
import { GiFallingStar } from "react-icons/gi";
import { BiArrowToTop } from "react-icons/bi";

import { BsFillEmojiSmileFill } from "react-icons/bs";



import Room from '../Home/Room';

const Client = () => {

    const id_kh = parseInt(localStorage.getItem("id_kh"));
    
    const truycap = 1;

    const[dieukien, setDieuKien]=useState({
        cost1: 0,
        cost2: 9999999999,
        people1: 0,
        people2: 9999999,
        star1: 0,
        star2: 6,
        tinh: "%%",
        huyen: "%%",
        xa: "%%",
        keyword: "%%"
    })

    const[nvhphongs, setNvhphongs] = useState([])

    const[khInfo, setKhInfo] = useState({
        ten: "",
        id_nvh: "",
        ten_nvh: "",
        src: ""
    })

    const handleChange = (e)=>{
        const { name, value } = e.target;
    
        setDieuKien(prevValue => {
          return {
            ...prevValue,
            [name]: `%${value}%`
          };
        });
        
        console.log('dieukien:', dieukien);
    }

    const getallNvhvaPhong = async() => {
        try {

            const response = await fetch(`http://localhost:5000/getallnvhvaphong`);
            const jsonData = await response.json()            
            console.log('All du lieu:', jsonData);
            setNvhphongs(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    }
    const getallNvhvaPhongVoidk = async() => {
        try {
            const body = {...dieukien};
            const response = await fetch(`http://localhost:5000/getallnvhvaphongvoidieukien`,{
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body) 
            });
            const jsonData = await response.json()            
            console.log('All du lieu voi dieukien:', jsonData);
            setNvhphongs(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    }
    const getallNvhvaPhongKhachHang = async() => {
        try {
            // const body = {...dieukien};
            const response = await fetch(`http://localhost:5000/getallnvhvaphongtheokhachhang/${id_kh}`,{
                method: "GET",
                headers: {"Content-Type": "application/json"},
            });
            const jsonData = await response.json()            
            console.log('Du kien theo tỉnh:', jsonData);
            setNvhphongs(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    }
    const getallNvhvaPhongBinhLuan = async() => {
        try {
            // const body = {...dieukien};
            const response = await fetch(`http://localhost:5000/getallnvhvaphongtheosobinhluan`,{
                method: "GET",
                headers: {"Content-Type": "application/json"},
            });
            const jsonData = await response.json()            
            console.log('Du kien theo tỉnh:', jsonData);
            setNvhphongs(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    }
    const getallNvhvaPhongSoSao = async() => {
        try {
            // const body = {...dieukien};
            const response = await fetch(`http://localhost:5000/getallnvhvaphongtheososao`,{
                method: "GET",
                headers: {"Content-Type": "application/json"},
            });
            const jsonData = await response.json()            
            console.log('Du kien theo tỉnh:', jsonData);
            setNvhphongs(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    }
    const getallNvhvaPhongDonDat = async() => {
        try {
            // const body = {...dieukien};
            const response = await fetch(`http://localhost:5000/getallnvhvaphongtheodondat`,{
                method: "GET",
                headers: {"Content-Type": "application/json"},
            });
            const jsonData = await response.json()            
            console.log('Du kien theo tỉnh:', jsonData);
            setNvhphongs(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    }

    const getInfoKh = async() => {
        try {

            const response = await fetch(`http://localhost:5000/getkh/${id_kh}`);
            const jsonData = await response.json()

            
            // console.log(' :', jsonData)
            setKhInfo(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(()=>{
        getallNvhvaPhongVoidk();
        getInfoKh();
    },[])

  return <div class="client-biggestdiv">
<section class = "">
    <NavbarClient/>
</section>
<section class = "client-search">
    <div class="container client-sreach-container">
    <div class="row">
        <div class="col-3 client-input-col">
            <div class="client-search-box">
                <div class="client-input-icon"><ImSearch/></div>
                <input name="keyword" onChange={handleChange} class="form-control mr-sm-2 client-input-input" type="search" placeholder="Search" aria-label="Search" data-toggle="tooltip" data-placement="bottom" title="Tìm kiếm theo tên nhà"></input>
            </div>
        </div>
        <div class="col-2">
            <div class="row">
            <div class="input-group client-money">
                    <button class="btn btn-outline-success prepend1-div client-money-button">
                        <AiFillDollarCircle class="aaa" data-toggle="tooltip" data-placement="bottom" title="Tìm kiếm theo giá thuê phòng"></AiFillDollarCircle>
                    </button>
                    <div class="form-group client-form-group">
                        <select name="cost1" 
                            onChange={(e)=>{
                                const { name, value } = e.target;
                                
                                if (value==5)
                                {
                                    setDieuKien(prevValue => {
                                        return {
                                            ...prevValue,
                                            cost1: 3000000,
                                            cost2: 100000000000                                                   
                                        };
                                        });
                                }
                                if (value==4)
                                {
                                    setDieuKien(prevValue => {
                                        return {
                                            ...prevValue,
                                            cost1: 0,
                                            cost2: 2000000                                                   
                                        };
                                        });
                                }
                                if (value==3)
                                {
                                    setDieuKien(prevValue => {
                                        return {
                                            ...prevValue,
                                            cost1: 0,
                                            cost2: 1000000                                                   
                                        };
                                        });
                                }
                                if (value==2)
                                {
                                    setDieuKien(prevValue => {
                                        return {
                                            ...prevValue,
                                            cost1: 0,
                                            cost2: 5000000                                                   
                                        };
                                        });
                                }
                                if (value==1)
                                {
                                    setDieuKien(prevValue => {
                                        return {
                                            ...prevValue,
                                            cost1: 0,
                                            cost2: 300000                                                   
                                        };
                                        });
                                }
                                if (value==0)
                                {
                                    setDieuKien(prevValue => {
                                        return {
                                            ...prevValue,
                                            cost1: 0,
                                            cost2: 100000000000                                                   
                                        };
                                        });
                                }

        
                                console.log('dieukien:', dieukien);
                            }} 
                            class="form-control prepend2-div" id="exampleFormControlSelect1">
                        <option value="0">Tất cả</option>
                        <option value="1">{'<'}300k </option>
                        <option value="2">{'<'}500k  </option>
                        <option value="3">{'<'}1tr  </option>
                        <option value="4">{'<'}2tr  </option>
                        <option value="5">{'>'}3tr  </option>
                        </select>
                    </div>
            </div>

            </div>
        </div>

        <div class="col-2">
            <div class="row">
            <div class="input-group client-money">
                    <button class="btn btn-outline-success prepend1-div client-money-button">
                        <TiGroup class="aaa" data-toggle="tooltip" data-placement="bottom" title="Tìm kiếm theo số người"></TiGroup>
                    </button>
                    <div class="form-group client-form-group">
                        <select name="people1" onChange={
                            (e)=>{
                                const { name, value } = e.target;
                                
                                if (value==5)
                                {
                                    setDieuKien(prevValue => {
                                        return {
                                            ...prevValue,
                                            people1: 200,
                                            people2: 9999999999                                                   
                                        };
                                        });
                                }
                                if (value==4)
                                {
                                    setDieuKien(prevValue => {
                                        return {
                                            ...prevValue,
                                            people1: 0,
                                            people2: 200                                                   
                                        };
                                        });
                                }
                                if (value==3)
                                {
                                    setDieuKien(prevValue => {
                                        return {
                                            ...prevValue,
                                            people1: 0,
                                            people2: 100                                                   
                                        };
                                        });
                                }
                                if (value==2)
                                {
                                    setDieuKien(prevValue => {
                                        return {
                                            ...prevValue,
                                            people1: 0,
                                            people2: 50                                                   
                                        };
                                        });
                                }
                                if (value==1)
                                {
                                    setDieuKien(prevValue => {
                                        return {
                                            ...prevValue,
                                            people1: 0,
                                            people2: 20                                                   
                                        };
                                        });
                                }
                                if (value==0)
                                {
                                    setDieuKien(prevValue => {
                                        return {
                                            ...prevValue,
                                            people1: 0,
                                            people2: 999999999                                                   
                                        };
                                        });
                                }

        
                                console.log('dieukien:', dieukien);
                            }
                        } class="form-control prepend2-div" id="exampleFormControlSelect1">
                        <option value="0">Tất cả</option>
                        <option value="1">{'<'}20</option>
                        <option value="2">{'<'}50</option>
                        <option value="3">{'<'}100</option>
                        <option value="4">{'<'}200</option>
                        <option value="5">{'>'}200</option>
                        </select>
                    </div>
            </div>

            </div>
        </div>

        <div class="col-3">
            <div class="row">
            <div class="input-group client-money">
                    <button class="btn btn-outline-success prepend1-div client-money-button">
                        <AiFillStar class="aaa"></AiFillStar>
                    </button>
                    <div class="form-group client-form-group">
                        <select name="star1" onChange={
                                                        (e)=>{
                                const { name, value } = e.target;
                                
                                if (value==5)
                                {
                                    setDieuKien(prevValue => {
                                        return {
                                            ...prevValue,
                                            star1: 1,
                                            star2: 6
                                        };
                                        });
                                }
                                if (value==4)
                                {
                                    setDieuKien(prevValue => {
                                        return {
                                            ...prevValue,
                                            star1: 2,
                                            star2: 6                                                   
                                        };
                                        });
                                }
                                if (value==3)
                                {
                                    setDieuKien(prevValue => {
                                        return {
                                            ...prevValue,
                                            star1: 3,
                                            star2: 6                                                   
                                        };
                                        });
                                }
                                if (value==2)
                                {
                                    setDieuKien(prevValue => {
                                        return {
                                            ...prevValue,
                                            star1: 4,
                                            star2: 6                                                   
                                        };
                                        });
                                }
                                if (value==1)
                                {
                                    setDieuKien(prevValue => {
                                        return {
                                            ...prevValue,
                                            star1: 5,
                                            star2: 6                                                   
                                        };
                                        });
                                }
                                if (value==0)
                                {
                                    setDieuKien(prevValue => {
                                        return {
                                            ...prevValue,
                                            star1: 0,
                                            star2: 6                                                   
                                        };
                                        });
                                }

        
                                console.log('dieukien:', dieukien);
                            }
                        } class="form-control prepend2-div" id="exampleFormControlSelect1">
                        <option value="0">Tất cả</option>
                        <option value="1">⭐⭐⭐⭐⭐ </option>
                        <option value="2">⭐⭐⭐⭐ </option>
                        <option value="3">⭐⭐⭐ </option>
                        <option value="4">⭐⭐ </option>
                        <option value="5">⭐ </option>
                        </select>
                    </div>
            </div>

            </div>
        </div>

        <div class="col-2">
            <div class="row">
    <div class="btn-group" role="group" aria-label="Basic example">
    <button onClick={()=>{
            
            console.log('dieukientimkiem:', dieukien);
            getallNvhvaPhongVoidk();
        }} class="btn btn-success">Tìm Kiếm</button>
    <button type="button" class="btn btn-light"><RiMore2Fill/></button>

    </div>
        

            </div>
        </div>

        
    </div>
    </div>
    <div class="container client-sreach-container">
        <div class="row">
            <div class="col-3">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="">Tỉnh/T.Phố</span>
                    </div>
                    <input name="tinh" onChange={handleChange} type="text" class="form-control"/>
                </div>
            </div>
            <div class="col-3">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="">Quận/Huyện</span>
                    </div>
                    <input name="huyen" onChange={handleChange} type="text" class="form-control"/>
                </div>
            </div>
            <div class="col-3">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="">Phường/Xã</span>
                    </div>
                    <input name="xa" onChange={handleChange} type="text" class="form-control"/>
                </div>
            </div>
            <div class="col-3">
            <div class="btn-group" role="group" aria-label="Basic example">
                <button class="btn btn-outline-warning" data-toggle="tooltip" data-placement="bottom" title="Tìm kiếm thông minh"
                    onClick={getallNvhvaPhongKhachHang}><HiLightBulb/></button>
                <button type="button" class="btn btn-outline-warning" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom"
                    onClick={getallNvhvaPhongDonDat}>
                    <BiArrowToTop />
                </button>
                <button type="button" class="btn btn-outline-warning" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom"
                    onClick={getallNvhvaPhongBinhLuan}>
                    <FaComments/>
                </button>
                <button type="button" class="btn btn-outline-warning" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom"
                    onClick={getallNvhvaPhongSoSao}>
                    <BsFillEmojiSmileFill 
                    />
                </button>
            </div>
            </div>

        </div>
    </div>
</section>

  <section class = "client-cardsection" > 

  {nvhphongs.map((nvhphong)=>{
        return <div><Room id_phong={nvhphong.id_phong} ten_nvh={nvhphong.ten_nvh} id_nvh={nvhphong.id_nvh} tinh_tp={nvhphong.tinh_tp} quan_huyen={nvhphong.quan_huyen} xa_phuong={nvhphong.xa_phuong} id_kh={id_kh} quyen_binh_luan={khInfo.quyen_binh_luan} truycap={truycap}/>
        </div>
  })}
  {/* <div class="card mb-3 client-card">
    <div class="row client-row">
        <div class="col-md-3 client-img-div">
            <img
                class="client-img"
                src="https://i.ibb.co/6g37BTM/IMG-20220117-123759.jpg"
                alt="..."/>
        </div>
        <div class="col-md-5 client-info-part">
            <div class="card-body client-card-info">
                <h5 class="card-title client-card-title">Hội Trường Xóm 8</h5>
                <p class="card-text">
                    <small class="text-muted">Hội Trường</small>
                </p>

                <div class="">
                  <table class="client-table table table-hover table-sm">
                      <tbody>
                          <tr>
                              <th scope="row client-map"><p class="client-map-text"><IoLocationSharp class="client-svg"/> Bản đồ</p></th>
                              <td></td>
                          </tr>
                          <tr>
                              <th scope="row client-map"><p class="client-comment-text"><span class="badge client-comment-badge badge-pill">8.2</span>  Tốt</p></th>
                              <td></td>
                          </tr>
                      </tbody>
                  </table>
              </div>


            </div>
        </div>
        <div class="col-md-4 client-go-part">
                <div class="box client-box">
                    <div class="card text-right client-go-card">
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn client-go-button">Xem chi tiết ➧</a>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</div> */}

</section>
</div>
};


export default Client;
