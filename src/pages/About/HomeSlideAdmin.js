import React, {useEffect, useState} from 'react';

const HomeSlideAdmin = () => {

    const [imgs, setImgs] = useState([]);
    var first = true;
    const getSlides = async() => {
        try {
            const id_nvh = parseInt(localStorage.getItem("id_nvh"));
            const response = await fetch(`http://localhost:5000/getnvh&anhnvh/${id_nvh}`);
            const jsonData = await response.json()

            setImgs(jsonData);
            

            console.log(' :',jsonData);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(()=>{
        getSlides();
    },[])

    

  return (
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    {(!imgs.length)?<div class="carousel-inner">         
        {imgs.map((img)=>{
            if (first) { 
            first = false;
            return  <div class="home-sl-imgdiv carousel-item active">
                <img
                    src={img.src}
                    class="home-sl-img d-block w-100"
                    alt="..."/>
            </div>
            }
            else {
               return <div class="home-sl-imgdiv carousel-item">
                <img
                    src={img.src}
                    class="home-sl-img d-block w-100"
                    alt="..."/>
            </div>
            }           
        })}
    </div>:<h5 class="text-center text-muted font-italic"> (chưa có ảnh nào) </h5>}
    <button
        class="carousel-control-prev"
        type="button"
        data-target="#carouselExampleControls"
        data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </button>
    <button
        class="carousel-control-next"
        type="button"
        data-target="#carouselExampleControls"
        data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </button>
</div>
  );
};

export default HomeSlideAdmin;
