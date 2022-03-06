import React, {useState, useEffect} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Csvc.css';
import { IoAddCircle } from "react-icons/io5";
import ListCsvcCard from './ListCsvcCard.js';

const Csvc = (props) => {

    const {id_phong} = props;
    const [infoCSVC, setInfoCSVC] = useState({
        ten_csvc: '', 
        giatri: '', 
        giathue_csvc: '', 
        mieuta: '', 
        soluong: '', 
        anhcsvc: ''
    });

    function handleChange(event) {
        const { name, value } = event.target;
    
        setInfoCSVC(prevValue => {
          return {
            ...prevValue,
            [name]: value
          };
        });
      }

    const onSubmitForm = async(e)=>{
        e.preventDefault();
        try {
        //    const id_phong = parseInt(localStorage.getItem("id_phong"));
        //    id_phong, ten_csvc, giatri, giathue_csvc, mieuta, soluong, anhcsvc
            if (infoCSVC.anhcsvc ==="") infoCSVC.anhcsvc = "https://moodle.mtithrissur.ac.in/pluginfile.php/1/theme_moove/marketing3icon/1633675706/depositphotos_309341342-stock-illustration-house-maintenance-service-different-tools.jpg";
           const body = {id_phong, ...infoCSVC};
           const response = await fetch("http://localhost:5000/addcsvc",{
               method: "POST",
               headers: {"Content-Type": "application/json"},
               body: JSON.stringify(body) 
           }) 

           console.log('Csvc gui di:', body);
        //    window.location = "http://localhost:3000/admin/services";
        setInfoCSVC({
            ten_csvc: '', 
            giatri: '', 
            giathue_csvc: '', 
            mieuta: '', 
            soluong: '', 
            anhcsvc: ''
        });
        } catch (error) {
            console.error(error.message);
        }
    }


    return (
            <div>
                
                <div class="CSVC-bigestdiv">
                    <div class="home-titlecsvc-div">
                        {/* <span class="home-titlecsvc h1">CƠ SỞ VẬT CHẤT</span> */}
                    </div>

                    {/* <div class="home-titlecsvc-div">
                        <span class="home-titlecsvc h1">KHO</span>
                    </div> */}
                    <ListCsvcCard id_phong={id_phong}/>

                    <div class="CSVC-form-div">
                        <form class="needs-validation" onSubmit={onSubmitForm}>
                            <div class="CSVC-card-bigdiv">
                                <div class="card mb-3 CSVC-card-div">
                                    <div class="row no-gutters">
                                        <div class="col-md-3 CSVC-card-img-div">
                                            <img
                                                class="CSVC-img "
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoLPVirIw3TUKS-7KZ4iChynpwQCe61R-xtQ&usqp=CAU"
                                                alt="..."/>
                                            <input
                                                                type="text"
                                                                class="form-control CSVC-img-input"
                                                                id="anhcsvc"
                                                                name="anhcsvc"
                                                                value={infoCSVC.anhcsvc}
                                                                placeholder='Nhập link ảnh'
                                                                onChange={handleChange}
                                                                />
                                        </div>
                                        <div class="col-md-8 CSVC-card-table-bigdiv">
                                            <div class="CSVC-card-table-div">
                                                <table class="CSVC-card-table table table-hover table-sm">
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">Tên</th>
                                                            <td><input
                                                                type="text"
                                                                class="form-control"
                                                                id="ten_csvc"
                                                                name="ten_csvc"
                                                                value={infoCSVC.ten_csvc}
                                                                placeholder='Tên cơ sở vật chất'
                                                                onChange={handleChange}
                                                                required="required"/></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Giá trị</th>
                                                            <td><input
                                                                type="number"
                                                                class="form-control"
                                                                id="giatri"
                                                                name="giatri"
                                                                value={infoCSVC.giatri}
                                                                placeholder='Giá tiền cơ sở vật chất'
                                                                onChange={handleChange}
                                                                required="required"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Giá thuê</th>
                                                            <td><input
                                                                type="number"
                                                                class="form-control"
                                                                id="giathue_csvc"
                                                                name="giathue_csvc"
                                                                value={infoCSVC.giathue_csvc}
                                                                placeholder='Giá cho thuê cơ sở vật chất'
                                                                onChange={handleChange}
                                                                required="required"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Miêu tả</th>
                                                            <td><input
                                                                type="text"
                                                                class="form-control"
                                                                id="mieuta"
                                                                name="mieuta"
                                                                value={infoCSVC.mieuta}
                                                                placeholder='Miêu tả về cơ sở vật chất'
                                                                onChange={handleChange}
                                                                required="required"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Số lượng</th>
                                                            <td><input
                                                                type="number"
                                                                class="form-control"
                                                                id="soluong"
                                                                name="soluong"
                                                                value={infoCSVC.soluong}
                                                                placeholder='Số lượng'
                                                                onChange={handleChange}
                                                                required="required"/>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="col-md-1 CSVC-card-2nutbam">
                                            <div class="btn-group-vertical CSVC-2nutbam">
                                                <button class="btn btn-outline-success CSVC-formbutton" type="submit"><IoAddCircle class="CSVC-button-add"/></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
    )
}

export default Csvc;
