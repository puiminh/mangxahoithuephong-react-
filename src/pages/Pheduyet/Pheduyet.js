import React, {useState, useEffect} from 'react';
import './Pheduyet.css';

import Navbar from '../../components/Navbar/Navbar';
import KhachHangInfo from './KhachHangInfo';
import CSVCyeucauDonHang from './CSVCyeucauDonHang';
import Pheduyetdondk from './Pheduyetdondk';
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BiMoney } from "react-icons/bi";
import { GiPayMoney } from "react-icons/gi";


const Pheduyet = () => {

    const [dondks, setDondks] = useState([]);
    
    const [tien, setTien] = useState(0);

    const getDondks = async() => {
      try {
          const id_nvh = parseInt(localStorage.getItem("id_nvh"));
          const response = await fetch(`http://localhost:5000/getdondkfromnvh/${id_nvh}`);
          const jsonData = await response.json()
  
          setDondks(jsonData)
          
          console.log('dondks:', jsonData);
      } catch (error) {
          console.error(error.message);
      }
  }
  const getDondksngaythue = async() => {
    try {
        const id_nvh = parseInt(localStorage.getItem("id_nvh"));
        const response = await fetch(`http://localhost:5000/getdondkfromnvhngaythue/${id_nvh}`);
        const jsonData = await response.json()

        setDondks(jsonData)
        
        console.log('dondks:', jsonData);
    } catch (error) {
        console.error(error.message);
    }
}

  const getTien = async() => {
    try {
        const id_nvh = parseInt(localStorage.getItem("id_nvh"));
        const response = await fetch(`http://localhost:5000/gettongtienduocdat/${id_nvh}`);
        const jsonData = await response.json()

        setTien(jsonData)
        
        console.log('dondks:', jsonData);
    } catch (error) {
        console.error(error.message);
    }
}
    useEffect(()=>{
      getDondks();
    },[])
  return <div>
            <Navbar/>
            <div class="home-titlecsvc-div">
                <span class="home-titlecsvc h1">PHÊ DUYỆT</span>
            </div>
            <div class="btn-group ml-5" role="group" aria-label="Basic example">
                <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="bottom" title="Tìm kiếm thông minh"
                    onClick={getDondksngaythue}><BsFillCalendarDateFill/></button>
                <button type="button" class="btn btn-outline-dark" data-toggle="modal" data-target="#exampleModal"
                    onClick={getTien}>
                   <BiMoney/>
                </button>
            </div>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Số tiền nhà văn hóa thu trong tháng này</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h1 class="text-center text-warning">{tien.sum} đ</h1>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
            <container class="container pheduyet-container">
                <div class="row row-cols-2 m-0">
                    {dondks.map((dondk)=>{
                        return   <Pheduyetdondk dondk={dondk}/>
                    })}
                    
                </div>

            </container>
  </div>;
};

export default Pheduyet;
