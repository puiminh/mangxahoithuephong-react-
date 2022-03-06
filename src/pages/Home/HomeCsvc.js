import React, {useState, useEffect} from 'react';

const HomeCsvc = (props) => {

    const {id_phong} = props;
    const [csvcs, setCSVC] = useState([]);

    const getCSVC = async() => {
        try {
            // const id_phong = parseInt(localStorage.getItem("id_phong"));
            const response = await fetch(`http://localhost:5000/getcsvcfromnvh/${id_phong}`);
            const jsonData = await response.json()

            setCSVC(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(()=>{
        getCSVC();
    },[id_phong])

  return (<div>

    <div class="home-card-deck-div">
    {(csvcs.length===0)&&<h1 class="text-center text-dark">Phòng này chưa có cơ sở vật chất</h1>}
        <div class="row row-cols-1 row-cols-md-6">
    {csvcs.map((csvc)=>{
        return (
            <div class="home-card-smalldiv col mb-4">
                <div class="card h-100">
                    <div class="home-card-cardheader">
                    <img
                        src={csvc.anhcsvc}
                        class="card-img-top home-card-deck-img"
                        alt="..."/>
                    </div>
                    <div class="home-card-cardbody card-body">
                        <h5 class="home-card-cardtitle card-title">{csvc.ten_csvc}</h5>
                        <p class="home-card-carddes card-text">{csvc.mieuta}</p>
                    </div>
                </div>
            </div>
        )
    })}
   

            {/* <div class="home-card-smalldiv col mb-4">
                <div class="card h-100">
                    <div class="home-card-cardheader">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPH7dOVp2z36F7dYJ8l2tRALMZGA6jnoYYcw&usqp=CAU"
                        class="card-img-top home-card-deck-img"
                        alt="..."/>
                    </div>
                    <div class="home-card-cardbody card-body">
                        <h5 class="home-card-cardtitle card-title">Card title</h5>
                        <p class="home-card-carddes card-text">This is a short card.</p>
                    </div>
                </div>
            </div>
            <div class="home-card-smalldiv col mb-4">
                <div class="card h-100">
                    <div class="home-card-cardheader">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH7s4ysofS8s295cZiBzQ2I--g2BG_Ay-1XA&usqp=CAU"
                        class="card-img-top home-card-deck-img"
                        alt="..."/>
                    </div>
                    <div class="home-card-cardbody card-body">
                        <h5 class="home-card-cardtitle card-title">Card title</h5>
                        <p class="home-card-carddes card-text">This is a longer card with supporting text below as a
                            natural lead-in to additional content.</p>
                    </div>
                </div>
            </div>
            <div class="home-card-smalldiv col mb-4">
                <div class="card h-100">
                    <div class="home-card-cardheader">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJSGy6uHEj_Zxi5R0K_qQIng569PLjxPyTDw&usqp=CAU"
                        class="card-img-top home-card-deck-img"
                        alt="..."/>
                    </div>
                    <div class="home-card-cardbody card-body">
                        <h5 class="home-card-cardtitle card-title">Card title</h5>
                        <p class="home-card-carddes card-text">This is a longer card with supporting text below as a
                            natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
            <div class="home-card-smalldiv col mb-4">
                <div class="card h-100">
                    <div class="home-card-cardheader">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJSGy6uHEj_Zxi5R0K_qQIng569PLjxPyTDw&usqp=CAU"
                        class="card-img-top home-card-deck-img"
                        alt="..."/>
                    </div>
                    <div class="home-card-cardbody card-body">
                        <h5 class="home-card-cardtitle card-title">Card title</h5>
                        <p class="home-card-carddes card-text">This is a longer card with supporting text below as a
                            natural lead-in to additional content. This content is a little bit longer.asdasd asdas das dasd as das das d asdasd  asd asd a</p>
                    </div>
                </div>
            </div>
            <div class="home-card-smalldiv col mb-4">
                <div class="card h-100">
                    <div class="home-card-cardheader">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPH7dOVp2z36F7dYJ8l2tRALMZGA6jnoYYcw&usqp=CAU"
                        class="card-img-top home-card-deck-img"
                        alt="..."/>
                    </div>
                    <div class="home-card-cardbody card-body">
                        <h5 class="home-card-cardtitle card-title">Card title</h5>
                        <p class="home-card-carddes card-text">This is a short card.</p>
                    </div>
                </div>
            </div>
            <div class="home-card-smalldiv col mb-4">
                <div class="card h-100">
                    <div class="home-card-cardheader">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH7s4ysofS8s295cZiBzQ2I--g2BG_Ay-1XA&usqp=CAU"
                        class="card-img-top home-card-deck-img"
                        alt="..."/>
                    </div>
                    <div class="home-card-cardbody card-body">
                        <h5 class="home-card-cardtitle card-title">Card title</h5>
                        <p class="home-card-carddes card-text">This is a longer card with supporting text below as a
                            natural lead-in to additional content.</p>
                    </div>
                </div>
            </div>
            <div class="home-card-smalldiv col mb-4">
                <div class="card h-100">
                    <div class="home-card-cardheader">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJSGy6uHEj_Zxi5R0K_qQIng569PLjxPyTDw&usqp=CAU"
                        class="card-img-top home-card-deck-img"
                        alt="..."/>
                    </div>
                    <div class="home-card-cardbody card-body">
                        <h5 class="home-card-cardtitle card-title">Card title</h5>
                        <p class="home-card-carddes card-text">This is a longer card with supporting text below as a
                            natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
  </div>);
};

export default HomeCsvc;
