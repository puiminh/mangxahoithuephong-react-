import React,{useEffect, useState} from 'react';

const KhachHangInfo = (props) => {

    const {id_kh} = props;
    const [khInfo, setKhInfo] = useState({})
    const getKhInfo = async() => {
        try {
            // const id_kh = parseInt(localStorage.getItem("id_kh"));
            const response = await fetch(`
                http://localhost:5000/getkh/${id_kh}`);
            const jsonData = await response.json()
            setKhInfo(jsonData)
            
            console.log('khInfo:', jsonData);
        } catch (error) {
            console.error(error.message);
        }
    }
    useEffect(()=>{
        getKhInfo();
    },[])
  return <div>
                                  <div class="row">
                                <div class="col-4 p-3 d-flex">
                                    <img
                                        src="https://www.w3schools.com/howto/img_avatar.png"
                                        width="160"
                                        height="160"
                                        class="rounded-circle mx-auto"></img>
                                </div>
                                <div class="col-8">
                                    <div class="pheduyet-khinfo p-3">
                                        <h4 class="text-center mb-2">THÔNG TIN KHÁCH HÀNG</h4>
                                        <span class="h6">Họ và tên: </span>
                                        <span class="text-uppercase">{`${khInfo.hotendem} ${khInfo.ten}`}</span>
                                        <hr class="m-1"/>
                                        <span class="h6">Số điện thoại: </span>
                                        <span>{khInfo.sdt}</span>
                                        <hr class="m-1"/>
                                        <span class="h6">Địa chỉ: </span>
                                        <span>{`${khInfo.xa_phuong} ${khInfo.quan_huyen} ${khInfo.tinh_tp}`}</span>
                                    </div>
                                </div>
                            </div>
  </div>;
};

export default KhachHangInfo;
