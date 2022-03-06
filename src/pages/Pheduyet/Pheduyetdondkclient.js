import React,{useState, useEffect} from 'react';
import CSVCyeucauDonHang from './CSVCyeucauDonHang';
import KhachHangInfo from './KhachHangInfo';
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BsFillXCircleFill } from "react-icons/bs";


const Pheduyetdondkclient = (props) => {

    const{dondk} = props;

    const [dondkinfo, setDondkinfo] = useState(dondk);
    const [pheduyethaykhong, setpheduyethaykhong] = useState(0);
    // setDondkinfo(dondk);

    const onEdit = async(e)=>{
        e.preventDefault();
        try {
        //    const id_nvh = parseInt(localStorage.getItem("id_nvh"));
        //    id_nvh, ten_csvc, giatri, giathue_csvc, mieuta, soluong, anhcsvc
           const body = {...dondkinfo};
           const response = await fetch(`http://localhost:5000/updatedondkpheduyet&hoidap/${dondkinfo.id_dondk}`,{
               method: "PUT",
               headers: {"Content-Type": "application/json"},
               body: JSON.stringify(body) 
           }) 

           console.log(' Pheduyet:', body);
        //    window.location = "http://localhost:3000/admin/services";
        } catch (error) {
            console.error(error.message);
        }
    }
    
    function handleChange(event) {
        const { name, value } = event.target;
    
        setDondkinfo(prevValue => {
          return {
            ...prevValue,
            [name]: value
          };
        });
      }
      function dateToEpoch2(thedate) {
        return thedate.setHours(0,0,0,0);
     }

  return <div class="col">
  <div class="card pheduyet-card m-3 border border-secondary">
      <KhachHangInfo id_kh={dondk.id_kh}/>
      <hr class="border m-1"/>
      <div class="row">
          <div class="col-6 pt-3">
              <h5 class="text-center">ĐƠN HÀNG</h5>
              <div class="pheduyet-dhinfo pr-3 pl-3 pb-3 pt-0">

                  <span class="h6">Phòng thuê: </span>
                  <span>{dondk.loai_phong}</span>
                  <hr class="m-1"/>
                  <span class="h6">Ngày thuê: </span>
                  <span>{(dondk.ngaythue).slice(0,10)}</span>
                  <hr class="m-1"/>
                  <span class="h6">Thời gian: </span>
                  <span>{dondk.time_start} - </span>
                  <span>{dondk.time_finish}</span>
                  <hr class="m-1"/>
                  <span class="h6">Yêu cầu khác: </span>
                  <span>{dondk.loinhan}</span>
                  
              </div>
          </div>
          <div class="col-6 pt-3">
              <h5 class="text-center">CƠ SỞ VẬT CHẤT</h5>
              <CSVCyeucauDonHang id_dondk={dondk.id_dondk}/>
          </div>
          
      </div>
      <h3 class="mt-3 text-warning text-center">HÓA ĐƠN: {dondk.tongtien}đ</h3>
      {(dondk.pheduyet==1||pheduyethaykhong=="success")&&<div class="border border-success p-1 pheduyet-pheduyetdivest">
          <div class="border border-success pheduyet-pheduyetdiv p-1">
              <h3 class="h4 text-success">ĐÃ PHÊ DUYỆT</h3>
          </div>
      </div>}
      {(dondk.pheduyet==2||pheduyethaykhong=="danger")&&<div class="border border-danger p-1 pheduyet-pheduyetdivest">
          <div class="border border-danger pheduyet-pheduyetdiv p-1">
              <h3 class="h4 text-danger">ĐÃ TỪ CHỐI</h3>
          </div>
      </div>}
  </div>

</div>;
};

export default Pheduyetdondkclient;
