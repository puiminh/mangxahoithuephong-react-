import React from 'react';
import Iframe from 'react-iframe';
const HomeThongTin = (info) => {
  return (    
<div class="">
  <div class="">
      <div class="row border-bottom">
          <div class="col-md-5">
              <div class="home-titlecsvc-div">
                  <span class="home-titlecsvc h2">BẢN ĐỒ</span>
              </div>
              <div class="home-ggmap-div">
                {(info.info.bando!='...')?<Iframe
                    src={info.info.bando}
                    width="400"
                    height="300"
                    allowfullscreen=""
                    loading="lazy"></Iframe>:<span class="text-muted">Khu vực này chưa có bản đồ</span>}
              </div>
          </div>

          <div class="col-md-7">
              <div class="home-titlecsvc-div">
                  <span class="home-titlecsvc h2">THÔNG TIN CHUNG</span>
              </div>
              <div class="home-table-div">
                  <table class="home-table table table-hover table-sm">
                      <tbody>
                          <tr>
                              <th scope="row">ĐỊA CHỈ</th>
                              <td>{info.info.diachi} {info.info.xa_phuong} {info.info.quan_huyen} {info.info.tinh_tp}</td>
                          </tr>
                          <tr>
                              <th scope="row">DIỆN TÍCH</th>
                              <td>{info.info.dientich} m<sup>2</sup>
                              </td>
                          </tr>
                          <tr>
                              <th scope="row">SỐ PHÒNG</th>
                              <td>{info.info.so_phong}
                              </td>
                          </tr>
                          <tr>
                              <th scope="row">ĐÁNH GIÁ</th>
                              <td>{info.info.so_sao_tb}/5
                              </td>
                          </tr>
                          <tr>
                              <th scope="row">SỐ ĐƠN ĐÃ ĐẶT</th>
                              <td>{info.info.tong_don}
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>

      </div>
  </div>
</div>);
};

export default HomeThongTin;
