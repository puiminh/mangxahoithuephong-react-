import React from 'react';

const HomeGioiThieuAdmin = (info) => {
  return (
    <div>
    <div class="home-titlecsvc-div">
        <span class="home-titlecsvc h1">GIỚI THIỆU</span>
    </div>
    <div class="home-card-bigdiv">
        <div class="home-card-subbigdiv">
            <div class="row">
                <div class="home-card-text col-md-6">
                    <h2 class="card-title m-5 mx-auto">{info.info.ten_nvh}</h2>
                    <p></p>
                </div>
                <div class="col-md-6 home-card-roundimgdiv">
                    <img
                        src={info.info.avatar}
                        class="home-card-roundimg rounded-circle"/>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
};

export default HomeGioiThieuAdmin;
