import React, {useState, useEffect} from 'react';
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BsFillXCircleFill } from "react-icons/bs";

const AdminMuonLienKetsmall = (props) => {
    const{adminlk} = props;
    // const [root, setRoot] = useState(0)
    const onEdity = async()=>{
        try {
        //    const id_nvh = parseInt(localStorage.getItem("id_nvh"));
        //    id_nvh, ten_csvc, giatri, giathue_csvc, mieuta, soluong, anhcsvc
        const root=1;
           const body = {root};
           const response = await fetch(`http://localhost:5000/pheduyetadminlienket/${adminlk.id_nvh}/${adminlk.id_admin}`,{
               method: "PUT",
               headers: {"Content-Type": "application/json"},
               body: JSON.stringify(body) 
           }) 

           console.log('Phe duyet admin lien ket:', body);
        //    window.location = "http://localhost:3000/admin/services";
        } catch (error) {
            console.error(error.message);
        }
    }
    const onEditn = async()=>{
        try {
        //    const id_nvh = parseInt(localStorage.getItem("id_nvh"));
        //    id_nvh, ten_csvc, giatri, giathue_csvc, mieuta, soluong, anhcsvc
          const root=0;
           const body = {root};
           const response = await fetch(`http://localhost:5000/pheduyetadminlienket/${adminlk.id_admin}/${adminlk.id_nvh}`,{
               method: "PUT",
               headers: {"Content-Type": "application/json"},
               body: JSON.stringify(body) 
           }) 

           console.log('Phe duyet admin lien ket:', body);
        //    window.location = "http://localhost:3000/admin/services";
        } catch (error) {
            console.error(error.message);
        }
    }
    const onDeleteYeuCau = async () => {
        try {
            const xoaYeucau = await fetch(`http://localhost:5000/deleteyeucaulienket/${adminlk.id_admin}/${adminlk.id_nvh}`, {
                method: "DELETE"
            });

            // setCSVC(csvcs.filter( (csvc) =>{
            //     return csvc.id_csvc  !== id_csvc
            // }))

        } catch (error) {
            console.error(error.message)
        }
    }

  return <div>
        <h6 class="dropdown-item mb-2">
      <span class="h6 font-weight-bold">{adminlk.hotendem} {adminlk.ten}</span> muốn liên kết tài khoản với nhà này.
      <div class="btn-group marginbottom-6px" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-success ml-1 "
            onClick={onEdity}><BsFillCheckCircleFill class="mb-1"/></button>
        <button type="button" class="btn btn-danger"
            onClick={onDeleteYeuCau}><BsFillXCircleFill class="mb-1"/></button>
    </div>
  </h6>
  </div>;
};

export default AdminMuonLienKetsmall;
