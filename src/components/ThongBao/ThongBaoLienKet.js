import React, {useState, useEffect} from 'react';
import { FaBell } from "react-icons/fa";
const ThongBaoLienKet = (props) => {

    const {id_nvh} = props;
    const [thongbao, setThongbao] = useState({})
    const getThongBaoLienKet = async() => {
        try {

            const response = await fetch(`http://localhost:5000/getthongbaolienket/${id_nvh}`);
            const jsonData = await response.json()

            
            console.log('Thongbao:', jsonData);
            setThongbao(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(()=>{
        getThongBaoLienKet();
    },[])

  return <div>
                                          
                                        {(thongbao.thongbao!=0)&&<span class="badge badge-primary badge-pill BN-nocicon">{thongbao.thongbao}</span>}
                                    
  </div>;
};

export default ThongBaoLienKet;
