import React, { useState, useEffect } from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import HomeSlide from './HomeSlide'
import HomeGioiThieu from './HomeGioiThieu'
import HomeThongTin from './HomeThongTin'
import HomeCsvc from './HomeCsvc'
import { IoLocationSharp } from "react-icons/io5";
import { BiArea } from "react-icons/bi";
import { TiGroup } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';
import Room from './Room'



const Home = () => {
    
    const [nvhInfo, setNvhInfo] = useState({

    });

    const [phongs, setPhongs] = useState([])

    const getPhong = async() => {
      try {
          const id_nvh = parseInt(localStorage.getItem("id_nvh"));
          const response = await fetch(`http://localhost:5000/getallphong/${id_nvh}`);
          const jsonData = await response.json()
  
          setPhongs(jsonData)
          
          console.log('Phong:', phongs);
      } catch (error) {
          console.error(error.message);
      }
  }

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

    useEffect(()=>{
        getNvhInfo();
        getPhong();
    },[])


    return (
    
<div>
<Navbar/>
<div class="home-sl-bigdiv">

    <div class="home-titlecsvc-div">
        <span class="home-titlecsvc h1">{nvhInfo.ten_nvh}</span>
    </div>

    {/*
    <nav class="navbar navbar-light bg-light">
        <span class="navbar-brand mb-0 mx-auto home-titlecsvc h1">Nhà Văn Hóa Xóm 8</span>
    </nav>
    */}
    <HomeSlide id_nvh = {nvhInfo.id_nvh}
    />
    <HomeGioiThieu
        info = {nvhInfo}
    />
    <HomeThongTin
        info = {nvhInfo}
    />




    <div class="home-titlecsvc-div">
        <span class="home-titlecsvc h1">PHÒNG THUÊ</span>
    </div>


    <div class="home-phong-part">
    {
        phongs.map((phong)=>{
            return <div> 
            <Room id_phong={phong.id_phong} ten_nvh={nvhInfo.ten_nvh} id_nvh={nvhInfo.id_nvh} tinh_tp={nvhInfo.tinh_tp} quan_huyen={nvhInfo.quan_huyen} xa_phuong={nvhInfo.xa_phuong}/>
            </div>
        })
    }
        
    </div>

    

    

    {/* <div class="home-bookbutton-div">
        <button class="home-bookbutton">ĐẶT NGAY ➜</button>
    </div> */}


<div class="container">
  <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
    </ul>
    <p class="text-center text-muted">© 2022 NVH</p>
  </footer>
</div>


</div>
</div>
    )
}

export default Home


// src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPH7dOVp2z36F7dYJ8l2tRALMZGA6jnoYYcw&usqp=CAU"
// src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH7s4ysofS8s295cZiBzQ2I--g2BG_Ay-1XA&usqp=CAU"
// src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJSGy6uHEj_Zxi5R0K_qQIng569PLjxPyTDw&usqp=CAU"
// src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPH7dOVp2z36F7dYJ8l2tRALMZGA6jnoYYcw&usqp=CAU"