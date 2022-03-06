import React, {useEffect, useState} from 'react';
import NavbarCilent from '../../components/Navbar/NavbarCilent';
import Pheduyetdondkclient from '../Pheduyet/Pheduyetdondkclient';
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BiMoney } from "react-icons/bi";
import { GiPayMoney } from "react-icons/gi";


const LichSuKh = () => {

  const [dondks, setDondks] = useState([])

  const [tientrongthang, setTien] = useState(0)
    

  const getDondks = async() => {
    try {
        const id_kh = parseInt(localStorage.getItem("id_kh"));
        const response = await fetch(`http://localhost:5000/getdondkfromkh/${id_kh}`);
        const jsonData = await response.json()

        setDondks(jsonData)
        
        console.log('dondks (Khách hàng):', jsonData);
    } catch (error) {
        console.error(error.message);
    }
}
const getDondksngaythue = async() => {
  try {
      const id_kh = parseInt(localStorage.getItem("id_kh"));
      const response = await fetch(`http://localhost:5000/getdondkfromkhngaythue/${id_kh}`);
      const jsonData = await response.json()

      setDondks(jsonData)
      
      console.log('dondks (Khách hàng):', jsonData);
  } catch (error) {
      console.error(error.message);
  }
}
const getDondkstongtien = async() => {
  try {
      const id_kh = parseInt(localStorage.getItem("id_kh"));
      const response = await fetch(`http://localhost:5000/getdondkfromkhtongtien/${id_kh}`);
      const jsonData = await response.json()

      setDondks(jsonData)
      
      console.log('dondks (Khách hàng):', jsonData);
  } catch (error) {
      console.error(error.message);
  }
}
const getDondkstientrongthangcuakhachhang = async() => {
  try {
      const id_kh = parseInt(localStorage.getItem("id_kh"));
      const response = await fetch(`http://localhost:5000/gettongtientukhtrongthang/${id_kh}`);
      const jsonData = await response.json()

      setTien(jsonData)
      
      console.log('dondks (Khách hàng):', jsonData);
  } catch (error) {
      console.error(error.message);
  }
}
  useEffect(()=>{
    getDondks();
  },[])
  return <div>
      <NavbarCilent/>
      <div class="home-titlecsvc-div">
        <span class="home-titlecsvc h1">LỊCH SỬ ĐẶT HÀNG</span>
    </div>
    <div class="btn-group ml-5" role="group" aria-label="Basic example">
                <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="bottom" title="Tìm kiếm thông minh"
                    onClick={getDondksngaythue}><BsFillCalendarDateFill/></button>
                <button type="button" class="btn btn-outline-dark" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom"
                    onClick={getDondkstongtien}>
                    <BiMoney/>
                </button>
                <button type="button" class="btn btn-outline-dark" data-toggle="modal" data-target="#exampleModal"
                    onClick={getDondkstientrongthangcuakhachhang}>
                   <GiPayMoney/>
                </button>
            </div>


  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Số tiền bạn tiêu trong tháng này</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h1 class="text-center text-warning">{tientrongthang.sum} đ</h1>
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
                        return   <Pheduyetdondkclient dondk={dondk}/>
                    })}
                    
                </div>
            
    </container>
  </div>;
};

export default LichSuKh;
