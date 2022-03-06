import React, {useState, useEffect} from 'react';
import { FaBell } from "react-icons/fa";
const ThongBaoDon = (props) => {

    const {id_nvh, checkthongbaodon} = props;
    const [thongbao, setThongbao] = useState({})
    const getThongBaoDon = async() => {
        try {

            const response = await fetch(`http://localhost:5000/getthongbaodon/${id_nvh}`);
            const jsonData = await response.json()

            
            console.log('Thongbao:', jsonData);
            setThongbao(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    }

    // useEffect(()=>{
    //     getThongBaoDon();
    // },[])

    useEffect(() => {
        const interval = setInterval(() => {
            getThongBaoDon();
          console.log('This will run every second!');
        }, 5000);
        return () => clearInterval(interval);
      }, []);

  return <div>
                                          
                    {(thongbao.thongbao!=0)&&<span class="badge badge-primary badge-pill BN-nocicon" style={{top: "-15px"}}>{thongbao.thongbao}</span>}
                                    
  </div>;
};

export default ThongBaoDon;
