import React, { useState, useEffect } from 'react'



const SNListitem = (props) => {

    const [id_nvh, setIdNvh]=useState();


    const OnSendingRequest = async(e)=>{
        e.preventDefault();

        props.alert();

        try {
            //id_admin, a, chucvu, root
           const id_admin = parseInt(localStorage.getItem("id_admin")); 
           const chucvu = "";
           const root = "0";
           const body = {id_admin, id_nvh, chucvu, root};
           console.log('body:', body);
           const req = await fetch("http://localhost:5000/addquanly",{
               method: "POST",
               headers: {"Content-Type": "application/json"},
               body: JSON.stringify(body) 
           })
            
        } catch (error) {
            console.error(error.message);
        }
    }

    const ChangeIdNvh = ()=>{
        setIdNvh(props.id);
        console.log('props.id :', props.id);

        console.log('id_nvh:', id_nvh);
        console.log('tennvh :',props.tennvh );
    }

    // const onSendingRequest = async(e)=>{
    //     e.preventDefault();

    //     props.alert();
    //     setIdNvh(props.id);
    //     console.log('props.id :', props.id);
    //     console.log(' :',props.tennvh );

    //     try {
    //         //id_admin, id_nvh, chucvu, root
    //        const id_admin = 1;
    //        const id_nvh = 9;
    //        const chucvu = "";
    //        const root = "0";
    //        const body = {id_admin, id_nvh, chucvu, root};
    //        console.log('body:', body);
    //        const response = await fetch("http://localhost:5000/addquanly",{
    //            method: "POST",
    //            headers: {"Content-Type": "application/json"},
    //            body: JSON.stringify(body) 
    //        })
    //     //    return response.status;
    //     } catch (error) {
    //         console.error(error.message);
    //     }
    // }

    return (
        <div onClick={ChangeIdNvh}>
        <li onClick={props.function} class="SN-liitem list-group-item d-flex justify-content-between align-items-center list-group-item-action">
            <img class="shadow SN-card-roundimg rounded-circle" 
            src={props.imgsrc} alt="..."/>
            <div class="SN-namedc-div">
            <h5>{props.tennvh}</h5>
            <h8>{props.diachi}</h8>
                
            </div>
            <span class="badge badge-primary badge-pill">{props.tinmoi}</span>
            {(props.timthay)?<button type="button" class="SN-li-muiten btn btn-danger" data-toggle="modal" data-target={`#id${props.id}`}>
            ➔
            </button>:null}
        </li>
            
            <div class="modal fade" id={`id${props.id}`} tabindex="-1" role="dialog" aria-labelledby="{`id${props.id}`}" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="{`id${props.id}`}">Xác nhận gửi yêu cầu</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    Bạn sẽ gửi yêu cầu phê duyệt tới quản lý chính của <b>{props.tennvh}</b>
                    <br/>
                    Sau khi được chấp nhận, bạn sẽ được quản lý khu vực này.   
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Thôi</button>
                    <button 
                        data-dismiss="modal"
                        type="button" 
                        class="btn btn-primary"
                        onClick={OnSendingRequest}>Đồng Ý</button>
                </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default SNListitem
