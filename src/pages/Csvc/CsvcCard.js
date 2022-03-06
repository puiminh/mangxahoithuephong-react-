import React from 'react';
import { AiFillDelete, AiFillEdit} from "react-icons/ai";
import EditCsvc from './EditCsvc.js';
const CsvcCard = (csvc) => {
  return <div class="CSVC-card-bigdiv">
      <div class="card mb-3 CSVC-card-div">
          <div class="row no-gutters">
              <div class="col-md-3 CSVC-card-img-div">
                  <img
                      class="CSVC-img"
                      src={csvc.csvc.anhcsvc}
                      alt="..."/>
              </div>
              <div class="col-md-8 CSVC-card-table-bigdiv">
                  <div class="CSVC-card-table-div">
                      <table class="CSVC-card-table table table-hover table-sm">
                          <tbody>
                              <tr>
                                  <th scope="row">Tên</th>
                                  <td>{csvc.csvc.ten_csvc}</td>
                              </tr>
                              <tr>
                                  <th scope="row">Giá trị</th>
                                  <td>{csvc.csvc.giatri}
                                  </td>
                              </tr>
                              <tr>
                                  <th scope="row">Giá thuê</th>
                                  <td>{csvc.csvc.giathue_csvc}
                                  </td>
                              </tr>
                              <tr>
                                  <th scope="row">Miêu tả</th>
                                  <td><p class="textnhieu">{csvc.csvc.mieuta}</p>
                                  </td>
                              </tr>
                              <tr>
                                  <th scope="row">Số lượng</th>
                                  <td>{csvc.csvc.soluong}
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
              <div class="col-md-1 CSVC-card-2nutbam">
                  <div class="btn-group-vertical CSVC-2nutbam">
                      <EditCsvc
                                key = {csvc.id_csvc}
                            id = {csvc.id_csvc} 
                          csvc = {csvc}
                      />
                      <button 
                            type="button" 
                            class="CSVC-button btn btn-outline-danger"
                            onClick={()=>{
                                csvc.deleteFunc(csvc.csvc.id_csvc)
                                console.log("Clicked")
                            }}><AiFillDelete/></button>
                  </div>
              </div>
          </div>
      </div>
  </div>;
};

export default CsvcCard;
