import React from 'react';
import Iframe from 'react-iframe';
const HomeThongTinAdmin = (info) => {
  return (    
<div class="">
  <div class="">
      <div class="row">
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
                              <td>{info.info.diachi}</td>
                          </tr>
                          <tr>
                              <th scope="row">DIỆN TÍCH</th>
                              <td>{info.info.dientich} m<sup>2</sup>
                              </td>
                          </tr>
                          <tr>
                              <th scope="row">DIỆN TÍCH NHÀ</th>
                              <td>{info.info.dientichnha} m<sup>2</sup>
                              </td>
                          </tr>
                          <tr>
                              <th scope="row">SÂN</th>
                              <td>{info.info.dientichsan} m<sup>2</sup>
                              </td>
                          </tr>
                          <tr>
                              <th scope="row">NHÀ KHO - NHÀ PHỤ</th>
                              <td>{info.info.dientichkho} m<sup>2</sup>
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

export default HomeThongTinAdmin;
