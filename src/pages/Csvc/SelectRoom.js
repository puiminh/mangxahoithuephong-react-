import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Csvc from './csvc';
import EditRoom from './EditRoom';
import './SelectRoom.css'

const SelectRoom = () => {

  const onTaoPhong = async(e)=>{
    e.preventDefault();
    try {
       
    //    id_nvh, ten_csvc, giatri, giathue_csvc, mieuta, soluong, anhcsvc
    const id_nvh = parseInt(localStorage.getItem("id_nvh"));
       const response = await fetch(`http://localhost:5000/addphongtrong/${id_nvh}`,{
           method: "POST",
           headers: {"Content-Type": "application/json"},
       }) 
      //  console.log('response :', response.status);
      //  if (response.status===200){
      //      setGuidk(1)
      //  }
       window.location = "http://localhost:3000/admin/services";
    } catch (error) {
        console.error(error.message);
    }
}

  const [id_phong, setId_phong] = useState(-1);
  const [phongs, setPhongs] = useState([])
  var firstPhong = -1;
  const getPhong = async() => {
    try {
        const id_nvh = parseInt(localStorage.getItem("id_nvh"));
        const response = await fetch(`http://localhost:5000/getallphong/${id_nvh}`);
        const jsonData = await response.json()

        setPhongs(jsonData)
        firstPhong=jsonData[0].id_phong;
        setId_phong(firstPhong)
        console.log('Phong:', phongs);
    } catch (error) {
        console.error(error.message);
    }
}
  useEffect(()=>{
    getPhong();
  },[])
  return <div>
  <Navbar/>


    <div class="home-titlecsvc-div">
        <span class="home-titlecsvc h1">CHỈNH SỬA PHÒNG</span>
    </div>

    <div class="SR-select-div">
        <select class="SR-select form-control form-control-lg bg-white text-uppercase w-25 text-center"
          onChange={(e)=>{
              
              console.log('Room:', e.target.value);
              setId_phong(e.target.value)
          }}>
        {/* <option class="SR-option text-muted">Chọn phòng</option>   */}
          {phongs.map((phong)=>{
            return <option class="SR-option" value={phong.id_phong}>{`${phong.loai_phong}`}</option>
          })}
        {/* <option class="SR-option bg-success text-white">TẠO PHÒNG MỚI </option> */}
        
        </select>
        
    </div>
          <EditRoom id_phong={id_phong}/>
    {/* {
      phongs.map((phong)=>{
        return <EditRoom id_phong={phong.id_phong}/>
      })
      } */}
  
  {/* <nav class="SR-nav">
     <h2>Drop Down Menu</h2>
      <input class="SR-input" id="toggle" type="checkbox"/>
   <ul>
     <li><a href="#">Section 01</a></li>
     <li><a href="#">Section 02</a></li>
     <li><a href="#">Section 03</a></li>
     <li><a href="#">Section 04</a></li>
   </ul>
</nav> */}
<div class="text-center pb-3">Cần một phòng mới?{' '} 
  <a href="http://localhost:3000/admin/services" class="text-success"
    onClick={onTaoPhong}>Tạo ngay</a>
  </div>

  </div>;
};

export default SelectRoom;
