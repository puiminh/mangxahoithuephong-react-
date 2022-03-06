import React, {useState, useEffect} from 'react';
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BsFillXCircleFill } from "react-icons/bs";
import AdminMuonLienKetsmall from './AdminMuonLienKetsmall';
const AdminMuonLienKet = (props) => {

    const {id_nvh} = props;
    const [adminlks, setAdminlks] = useState([])
    const getAdminmuonlks = async() => {
        try {

            const response = await fetch(`http://localhost:5000/getadminmuonlienket/${id_nvh}`);
            const jsonData = await response.json()
            console.log('Admin muon lien ket:', jsonData);
            setAdminlks(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(()=>{
        getAdminmuonlks();
    },[])
    
  return <div>
        {(adminlks.length===0)&&<h6>Không có thông báo mới nào</h6>}
        {adminlks.map((adminlk)=>{
            return <AdminMuonLienKetsmall adminlk={adminlk}/>
        })}
  
  </div>;

};

export default AdminMuonLienKet;
