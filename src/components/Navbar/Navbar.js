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
import AdminInfoFix from './AdminInfoFix';
import PushNocScreen from '../PushNoc/PushNocScreen';
const Navbar = () => {

    const [thanhcong, setThanhCong] = useState(0)
    
    const[adminInfo, setAdminInfo] = useState({
        ten: "",
        id_nvh: "",
        ten_nvh: "",
        src: ""
    })
    const id_admin = parseInt(localStorage.getItem("id_admin"));
    const id_nvh = parseInt(localStorage.getItem("id_nvh"));

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
    const getInfoAdmin = async() => {
        try {

            const response = await fetch(`http://localhost:5000/getnvhfromadmin/${id_admin}/${id_nvh}`);
            const jsonData = await response.json()

            
            console.log(' :', jsonData);
            setAdminInfo(jsonData[0]);
        } catch (error) {
            console.error(error.message);
        }
    }
    
    useEffect(()=>{
        getInfoAdmin();
    },[])

    return (
            <>
                {/*
                <Nav>
                <NavLink to="/admin">
                <img class="rounded-circle" src="/dark.png" alt="" width="72" height="72"/>
                </NavLink>
                <Bars />
                <NavMenu>
                <NavLink to="/admin/about" activeStyle>
                About="About"
                <NavLink to="/admin/services" activeStyle>
                Services="Services"
                <NavLink to="/admin/contact-us" activeStyle>
                Contact="Contact"
                Us="Us"
                <NavLink to="/admin/sign-up" activeStyle>
                Sign="Sign"
                Up="Up"
                </NavMenu>
                <NavBtn>
                <NavBtnLink to="/" onClick={()=>
                localStorage.setItem("accessToken", false)="localStorage.setItem("accessToken", false)"
                }}="}}"{ >Đăng Xuất</NavBtnLink>
            </NavBtn>
            </Nav>
            */}
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark NB-navdiv">
            <div class="container NB-smallnavdiv">
            <a class="navbar-brand" href="http://localhost:3000/admin"><img class="rounded-circle" src="/modern.png" alt="" width="42" height="42"/></a>
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

            <div
                class="collapse navbar-collapse justify-content-md-center collapse NB-2icon-div"
                id="navbarsExample07">
                <ul class="navbar-nav">
                    <li class="nav-item active NB-nav-liitem">
                        <a class="nav-link" href="http://localhost:3000/admin">
                            <FaHome class="SN-nav-homeicon"/>
                            <span class="sr-only">aaaa</span>
                        </a>
                        {/* <div class="blueline">
                        </div> */}
                    </li>

                    <li class="nav-item active NB-nav-liitem">
                        <a class="nav-link" href="http://localhost:3000/admin/about">
                            <HiDocumentText class="SN-nav-homeicon"/>
                            <span class="sr-only">(current)</span>
                        </a>
                    </li>

                    <li class="nav-item active NB-nav-liitem">
                        <a class="nav-link" href="http://localhost:3000/admin/services">
                            <SiAirtable class="SN-nav-toolicon"/>
                            <span class="sr-only">(current)</span>
                        </a>
                    </li>

                    <li class="nav-item active NB-nav-liitem">
                        <a class="nav-link" href="http://localhost:3000/admin/pheduyet">
                            <SiFormstack class="SN-nav-homeicon"/>
                            <span class="sr-only">(current)</span>
                        </a>
                        <div class="BN-bell-div" onClick={Ccheckthongbaodon}>                                        
                                {(checkthongbaodon===0)&&<ThongBaoDon id_nvh={id_nvh} checkthongbaodon={checkthongbaodon}/>}
                        </div>
                    </li>
                    {/* <li class="nav-item">
                        <a class="nav-link" href="http://localhost:3000/admin/services">Cơ sở vật chất</a>
                    </li> */}
                    {/* <li class="nav-item">
                        <a class="nav-link disabled">Disabled</a>
                    </li> */}

                </ul>
                {/*
                <form class="form-inline my-2 my-md-0">
                    <input
                        class="form-control"
                        type="text"
                        placeholder="Search"
                        aria-label="Search"/>
                </form>
                */}
            </div>
            <div class="NB-info-div-div">
                <div class="NB-info-div">
                    <div class="NB-info-smalldiv">
                        <img class="NB-avatarimg rounded-circle" src={adminInfo.avatar} alt="" width="30" height="30"/>
                        <div class="nav-item dropdown NB-tennvh">
                            <a
                                class="nav-link NB-info-dropdownbtn"
                                href="#"
                                id="dropdown07"
                                data-toggle="dropdown"
                                aria-expanded="false">{adminInfo.ten_nvh}</a>
                            <div class="dropdown-menu NB-info-dropmenu" aria-labelledby="dropdown07">
                                <a class="dropdown-item"
                                                type="button"
                                                data-toggle="modal"
                                                data-target="#caidattaikhoan">Cài đặt tài khoản</a>
                                {/* <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a> */}
                            </div>
                        </div>   
                    </div>
                    
                    <div class="NB-icon-div">
                            <div class="nav-item dropdown">
                                <a
                                    class="nav-link NB-icon-dropdownbtn"
                                    href="#"
                                    id="dropdown07"
                                    data-toggle="dropdown"
                                    aria-expanded="false">
                                    <div class="BN-bell-div" onClick={Ccheckthongbaolienket}>                                        
                                        <FaBell class="NB-exiticon"
                                        />
                                        {(checkthongbaolienket===0)&&<ThongBaoLienKet id_nvh={id_nvh}/>}
                                    </div>
                                    
                                </a>
                                <div class="dropdown-menu NB-bell-dropmenu" aria-labelledby="dropdown07">
                                    <AdminMuonLienKet id_nvh={id_nvh}/>
                                </div>
                            </div>   
                        
                    </div>
                    <div class="NB-icon-div">
                        <a href='http://localhost:3000' onClick={()=>{
                                localStorage.setItem("accessToken", false);
                            }}>
                        <ImExit 
                            class="NB-exiticon"
                            />
                        </a>
                    </div>

                </div>
            </div>
            </div>
            </nav>
            <div class="modal fade"
                    id="caidattaikhoan"
                    data-backdrop="static"
                    data-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="caidattaikhoanLabel"
                    aria-hidden="true">
                    <AdminInfoFix id_admin={id_admin} setThanhCong={setThanhCong}/>

                </div>
                {(thanhcong==1)&&<PushNocScreen mess="Đổi thông tin thành công"/>}           
            </>
    )
}

export default Navbar;
