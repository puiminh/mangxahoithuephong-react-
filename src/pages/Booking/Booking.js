import React, {useEffect, useState} from 'react';
import ButtonBuy from '../../components/Button/ButtonBuy';
import './Booking.css'
import BookingCart from './BookingCart';
import './BookingCart.css';
const Booking = (props) => {


 	const{id_phong} = props;
	// const{tongtien, setTongtien} = useState(0)
	const[dhInfo, setDhInfo] = useState({
		hotendem: "",
		ten: "",
		sdt: "",
		time_start: "00:00",
		time_finish: "06:00",
		time: 0
	})

	const[roomInfo, setroomInfo] = useState({
	})

	var cartItems = [];


	const[dondkInfo, setDondkInfo] = useState({

	})
	
	var id_dondk;
	var cartItem = {};
	
	const onSubmitCsvcyc = async(e)=>{
        try {
           const body = {id_dondk, ...cartItem};
           const response = await fetch("http://localhost:5000/addcsvcyeucau",{
               method: "POST",
               headers: {"Content-Type": "application/json"},
               body: JSON.stringify(body) 
           }) 
		   const jsonData = await response.json()
           console.log('Cơ sở vật chất gửi đi:', body);
        //    window.location = "http://localhost:3000/booking";

        } catch (error) {
            console.error(error.message);
        }
    }

    const onSubmitForm = async(e)=>{
        e.preventDefault();

		// let tongtien = e.target.value;

        try {
           const id_phong = parseInt(localStorage.getItem("id_phong"));
		   const id_kh = parseInt(localStorage.getItem("id_kh"));
		   const pheduyet = 0;
           const body = {...dhInfo, id_phong, id_kh, pheduyet};
           const response = await fetch("http://localhost:5000/adddondk",{
               method: "POST",
               headers: {"Content-Type": "application/json"},
               body: JSON.stringify(body) 
           }) 
		   const jsonData = await response.json()
		   console.log('Guidondk data:', jsonData.id_dondk);
		   id_dondk = jsonData.id_dondk;
           console.log('Guidondk data body:', body);
        //    window.location = "http://localhost:3000/booking";
		   if (cartItems.length!=0)
		   cartItems.forEach(e => {
			   cartItem = e;
      			
				onSubmitCsvcyc()
		   })

		//    window.location = "http://localhost:3000/client/history";
        } catch (error) {
            console.error(error.message);
        }
    }


	

	const getKH = async() => {
		try {
			const response = await fetch(`http://localhost:5000/getkh/${localStorage.getItem("id_kh")}`);
			const jsonData = await response.json()
			
   			console.log('r:', response);
			setDhInfo(jsonData);
		} catch (error) {
			console.error(error.message);
		}
	}

	const getPhong = async() => {
		try {
			const response = await fetch(`http://localhost:5000/getphong/${localStorage.getItem("id_phong")}`);
			const jsonData = await response.json()
			
   			console.log('r:', response);
			setroomInfo(jsonData);
		} catch (error) {
			console.error(error.message);
		}
	}



	useEffect(()=>{
		getKH();
		getPhong();
		
    },[])

	// useEffect(()=>{
	// 	setDhInfo(prevValue => {

   	// 		console.log('Tongtienthaydoi');
	// 		return {
	// 		  ...prevValue,
	// 		  tongtien: tongtien,
	// 		};
	// 	  });
	// },[tongtien])


	function handleChange(event) {
        const { name, value } = event.target;
		
		
        setDhInfo(prevValue => {

		//   if ((name=='time_start')||(name=='time_finish')) return {
		// 	  ...prevValue,
		// 	  [name]: `${value}:00`
		//   }	
          return {
            ...prevValue,
            [name]: value,
          };
        });

		// setKhInfo(prevValue => {
		// 	return {
		// 	  ...prevValue,
		// 	  time: (cTime(dhInfo.time_finish) - cTime(dhInfo.time_start))
		// 	};
		//   });
        console.log('dhInfo:', dhInfo);
		// console.log('roomInfo:', roomInfo);
      }
	
	function cTime(timme){
		if (typeof timme === 'undefined') return 0; 
		let time = timme.split ( ":" );
		let hour = parseInt( time[0].trim() );
		if (isNaN(hour)) return 0; 
		else return hour;
	}

	function getItems(c){

  		cartItems = c;

    console.log('CartItems(Booking):', cartItems);
	}




  return <div class="booking-bigestdiv">
	<div id="booking" class="booking-section">
		<div class="booking-section-center">
		<div class="booking-form-header">
							<h1 class="booking-title">ĐẶT PHÒNG</h1>
						</div>
			<div class="container">
				<div class="row">
					<div class="col-6">
					<div class="booking-form">


													
						<form>
							<div class="row">
								<div class="col-sm-6">
									<div class="form-group">
										<span class="form-label">Họ tên đệm</span>
										<input class="form-control no-input" type="text" placeholder="" value={dhInfo.hotendem} readOnly/>
									</div>
								</div>
								<div class="col-sm-6">
									<div class="form-group">
										<span class="form-label">Tên</span>
										<input class="form-control no-input" type="text" placeholder="" value={dhInfo.ten} readOnly/>
									</div>
								</div>
							</div>
							<div class="form-group">
								<span class="form-label">Số điện thoại</span>
								<input class="form-control no-input" type="tel" placeholder="" value={dhInfo.sdt} readOnly/>
							</div>
							<div class="form-group">
								<span class="form-label">Địa chỉ</span>
								<input class="form-control no-input" type="text" placeholder="" value={`${dhInfo.thon_xom} ${dhInfo.xa_phuong} ${dhInfo.quan_huyen} ${dhInfo.tinh_tp}`}/>
							</div>
							<div class="row">
								<div class="col-sm-5">
									<div class="form-group">
										<span class="form-label">Ngày đặt phòng</span>
										<input class="form-control" type="date" required=""
											name="ngaythue" value={dhInfo.ngaythue} onChange={handleChange}
										/>
									</div>
								</div>
								<div class="col-sm-7">
									<div class="row">
										<div class="col-sm-6">
											<div class="form-group">
												<span class="form-label">Giờ bắt đầu</span>
												<input class="booking-timeinput" type="time" id="appt1"
       											min="00:00" max="23:59" required
												   name="time_start" value={`${dhInfo.time_start}`} onChange={handleChange}
												   />
											</div>
										
										</div>
										<div class="col-sm-6">
											<div class="form-group">
												<span class="form-label">Giờ kết thúc</span>
												<input class="booking-timeinput" type="time" id="appt2"
       											min={dhInfo.time_start} max="23:59" required
												   name="time_finish" value={`${dhInfo.time_finish}`} onChange={handleChange}
												   />
											</div>
										
										</div>
										{/* <div class="col-sm-4">
											<div class="form-group">
												<span class="form-label">Hour</span>
												<select class="form-control">
												<option>0</option>
												<option>1</option>
													<option>2</option>
													<option>3</option>
													<option>4</option>
													<option>5</option>
													<option>6</option>
													<option>7</option>
													<option>8</option>
													<option>9</option>
													<option>10</option>
													<option>11</option>
													<option>12</option>
													<option>13</option>
													<option>14</option>
													<option>15</option>
													<option>16</option>
													<option>17</option>
													<option>18</option>
													<option>19</option>
													<option>20</option>
													<option>21</option>
													<option>22</option>
													<option>23</option>
													
												</select>
												<span class="select-arrow"></span>
											</div>
										</div>
										<div class="col-sm-4">
											<div class="form-group">
												<span class="form-label">Min</span>
												<select class="form-control">
													<option>05</option>
													<option>10</option>
													<option>15</option>
													<option>20</option>
													<option>25</option>
													<option>30</option>
													<option>35</option>
													<option>40</option>
													<option>45</option>
													<option>50</option>
													<option>55</option>
												</select>
												<span class="select-arrow"></span>
											</div>
										</div> */}
									</div>
									{((cTime(dhInfo.time_start) - cTime(dhInfo.time_finish))!=0)?(<div>
										<div class="booking-timecost">
												<span class="h5 colorffc001">GIÁ THUÊ:</span>
										</div>
										<div class="booking-timecostm">
										<span class="h5 colorffc001"> {(cTime(dhInfo.time_finish) - cTime(dhInfo.time_start)) * roomInfo.gia} đ</span>
										</div>
									</div>):null}
								</div>
							</div>
							

							<div class="form-group">
								<span class="form-label">Lời nhắn</span>
								<input class="form-control" type="text" placeholder="Gửi lời nhắn của bạn tới người quản lý"
									name="loinhan" value={dhInfo.loinhan} onChange={handleChange}
								/>
							</div>
							{/* <div class="form-btn">
								<button class="submit-btn">ĐẶT NGAY</button>
							</div> */}
						</form>
					</div>
					</div>
					<div class="col-6">
						<BookingCart tienthue={(cTime(dhInfo.time_finish) - cTime(dhInfo.time_start)) * roomInfo.gia} getItems={getItems}/>
					</div>
				</div>
			</div>
		</div>
	</div>
	<ButtonBuy function={onSubmitForm}/>
  </div>;
};

export default Booking;
