import React, {useState, useEffect} from 'react';
import { AiFillDelete, AiFillEdit} from "react-icons/ai";
import { IoAddCircle } from "react-icons/io5";

const EditCsvc = ({csvc}) => {

    const [infoCSVC, setInfoCSVC] = useState(csvc.csvc);

    const onEdit = async(e)=>{
        e.preventDefault();
        try {
        //    const id_nvh = parseInt(localStorage.getItem("id_nvh"));
        //    id_nvh, ten_csvc, giatri, giathue_csvc, mieuta, soluong, anhcsvc
           const body = {...infoCSVC};
           const response = await fetch(`http://localhost:5000/updatecsvc/${infoCSVC.id_csvc}`,{
               method: "PUT",
               headers: {"Content-Type": "application/json"},
               body: JSON.stringify(body) 
           }) 

           console.log(' body:', body);
           window.location = "http://localhost:3000/admin/services";
        } catch (error) {
            console.error(error.message);
        }
    }


    function handleChange(event) {
        const { name, value } = event.target;
    
        setInfoCSVC(prevValue => {
          return {
            ...prevValue,
            [name]: value
          };
        });
      }

 console.log(infoCSVC);

  return <>
        <button type="button" class="CSVC-button btn btn-outline-warning" data-toggle="modal" data-target={`#id${infoCSVC.id_csvc}`}>
        <AiFillEdit/>
        </button>

        <div class="modal fade" id={`id${infoCSVC.id_csvc}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalCenterTitle">Update Cơ Sở Vật Chất {infoCSVC.id_csvc}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
            <div class="CSVC-form-edit-div">
                        <form class="needs-validation">
                            <div class="CSVC-card-bigdiv">
                                <div class="card mb-3 CSVC-card-div">
                                    <div class="row no-gutters">
                                        <div class="col-md-3 CSVC-card-img-div">
                                            <img
                                                class="CSVC-img "
                                                src={infoCSVC.anhcsvc}
                                                alt="..."/>
                                            <input
                                                                type="text"
                                                                class="form-control CSVC-img-input"
                                                                id="anhcsvc"
                                                                name="anhcsvc"
                                                                value={infoCSVC.anhcsvc}
                                                                placeholder="Nhập link ảnh"
                                                                onChange={handleChange}
                                                                />
                                        </div>
                                        <div class="col-md-9 CSVC-card-table-bigdiv">
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
                                    </div>
                                </div>
                            </div>
                            
                        </form>
                    </div>
            </div>
            <div class="modal-footer">
                <button 
                    type="button" 
                    class="btn btn-secondary" 
                    data-dismiss="modal"
                    onClick={()=>{
                        setInfoCSVC(csvc.csvc)
                    }}>Close</button>
                <button 
                    type="button" 
                    class="btn btn-primary"
                    onClick={onEdit}>Save changes</button>
            </div>
            </div>
        </div>
        </div>
      
  </>;
};

export default EditCsvc;
