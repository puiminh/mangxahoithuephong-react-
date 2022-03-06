// import React from 'react';
// import './NavbarClient.css';
// const NavbarClient = () => {
//   return <div>
//       <nav class="navbar navbar-expand navbar-light client-navbar">
//   <a class="navbar-brand" href="#">  <img
//                 class="rounded-circle navclient-logo"
//                 src="/modernlight.png"
//                 alt="..."/></a>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>

//   <div class="client-info-div">
//   <div class="collapse navbar-collapse" id="navbarsExample02">
//   </div>
//   <img
//                 class="navclient-avatar"
//                 src="https://allimages.sgp1.digitaloceanspaces.com/wikilaptopcom/2021/01/1610802039_Tuyen-tap-avatar-anh-dai-dien-dep-doc-dao-da.jpg"
//                 alt="..."/>
//     <span>Bùi Minh</span>
//   </div>
// </nav>
//   </div>;
// };

// export default NavbarClient;

import React, {useEffect, useState} from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElement';
import './Navbar.css';
import { ImExit } from "react-icons/im";
import { FaBell } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { SiAirtable, SiFormstack } from "react-icons/si";
import { FaTools, FaHome } from "react-icons/fa";
import ThongBaoLienKet from '../ThongBao/ThongBaoLienKet';
import ThongBaoDon from '../ThongBao/ThongBaoDon';
import AdminMuonLienKet from '../ThongBao/AdminMuonLienKet';
import './NavbarClient.css';
import KhachHangInfoFix from './KhachHangInfoFix';
import PushNocScreen from '../PushNoc/PushNocScreen';

const NavbarCilent = () => {

    const [thanhcong, setThanhCong] = useState(0)
    
    const[khInfo, setKhInfo] = useState({
        ten: "",
        id_nvh: "",
        ten_nvh: "",
        src: ""
    })
    const id_kh = parseInt(localStorage.getItem("id_kh"));
    // const id_nvh = parseInt(localStorage.getItem("id_nvh"));

    const[checkthongbaolienket, setCheckthongbaolienket] = useState(0);
    const[checkthongbaodon, setCheckthongbaodon] = useState(0);

    function Ccheckthongbaolienket(){
        setCheckthongbaolienket(1);

        console.log('Click!:', checkthongbaolienket);
    }
    
    function Ccheckthongbaodon(){
        setCheckthongbaodon(1);

        console.log('Click!:', checkthongbaodon);
    }

    function get2LastWord(words) {
        let n1 = words.lastIndexOf(" ");
        let n1w = words.substring(n1);
        words = words.replace(n1w, "")
        let n2 = words.lastIndexOf(" ");
        let n2w = words.substring(n2);
        n2w = n2w.replace(" ","");
        return n2w+n1w;
    }
    ///getnvhfromadmin/:id_admin/:id_nvh
    const getInfoKh = async() => {
        try {

            const response = await fetch(`http://localhost:5000/getkh/${id_kh}`);
            const jsonData = await response.json()

            
            console.log(' :', jsonData);
            setKhInfo(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(()=>{
        getInfoKh();
    },[])

    return (
            <div>
                <nav class="navbar navbar-expand navbar-light client-navbar">
                    <div class="container NB-smallnavdiv">
                        <a class="navbar-brand" href="http://localhost:3000/client"><img
                            class="rounded-circle"
                            src="/modernlight.png"
                            alt=""
                            width="42"
                            height="42"/></a>
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarsExample07"
                            aria-controls="navbarsExample07"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        {/* style={{width: "80px;"}}
                        */}
                        <div class="NB-info-div-div">
                            <div class="NB-info-div" style={{top: "15px"} }>
                                <div class="NB-info-smalldiv NBcl-info-smalldiv">
                                    <img
                                        class="NB-avatarimg rounded-circle"
                                        src={khInfo.avatarkh}
                                        alt=""
                                        width="30"
                                        height="30"/>
                                    <div class="nav-item dropdown NB-tennvh">
                                        <a
                                            class="nav-link NB-info-dropdownbtn text-dark font-weight-bold"
                                            href="#"
                                            id="dropdown07"
                                            data-toggle="dropdown"
                                            aria-expanded="false">{khInfo.hotendem} {khInfo.ten}</a>
                                        <div class="dropdown-menu NB-info-dropmenu" aria-labelledby="dropdown07">
                                            <a
                                                class="dropdown-item"
                                                type="button"
                                                data-toggle="modal"
                                                data-target="#caidattaikhoan">Cài đặt tài khoản</a>
                                            <a class="dropdown-item" href="http://localhost:3000/client/history">Lịch sử đặt đơn</a>
                                            <a class="dropdown-item" href="http://localhost:3000"
                                                onClick={()=>{
                                                    localStorage.setItem("accessTokenClient", 'false');
                                                }}>Đăng xuất</a>
                                        </div>
                                    </div>
                                </div>

                                {/*
                                <div class="NB-icon-div">
                                    <div class="nav-item dropdown">
                                        <a
                                            class="nav-link NB-icon-dropdownbtn"
                                            href="#"
                                            id="dropdown07"
                                            data-toggle="dropdown"
                                            aria-expanded="false">
                                            <div class="BN-bell-div" onClick={Ccheckthongbaolienket}>
                                                <FaBell class="NB-exiticon"/>
                                                {(checkthongbaolienket===0)&&<ThongBaoLienKet id_nvh={id_nvh}/>}
                                            </div>

                                        </a>
                                        <div class="dropdown-menu NB-bell-dropmenu" aria-labelledby="dropdown07">
                                            <AdminMuonLienKet id_nvh={id_nvh}/>
                                        </div>
                                    </div>

                                </div>
                                <div class="NB-icon-div">
                                    <a
                                        href='http://localhost:3000'
                                        onClick={()=>{
                                                localStorage.setItem("accessToken", false);
                                            }
                                        }="}">
                                        <ImExit class="NB-exiticon"/>
                                    </a>
                                </div>
                                */}

                            </div>
                        </div>
                    </div>
                </nav>
                <div
                    class="modal fade"
                    id="caidattaikhoan"
                    data-backdrop="static"
                    data-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="caidattaikhoanLabel"
                    aria-hidden="true">
                    <KhachHangInfoFix id_kh={id_kh} setThanhCong={setThanhCong}/>

                </div>
                {(thanhcong==1)&&<PushNocScreen mess="Đổi thông tin thành công"/>}           
            </div>
    )
}

export default NavbarCilent;
