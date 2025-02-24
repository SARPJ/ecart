
// import React from "react";
import Slider from "react-slick";

function home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="container pt-5 pb-5">

    <div className="row d-flex justify-content-between b-parent">

    
      <div className="category ">
      <ul className="list-group list-group-flush badge">
        <li className="list-group-item border border-white">An item</li>
        <li className="list-group-item border border-white">A second item</li>
        <li className="list-group-item border border-white">A third item</li>
        <li className="list-group-item border border-white">A fourth item</li>
        <li className="list-group-item border border-white">And a fifth one</li>
        <li className="list-group-item border border-white">A third item</li>
        <li className="list-group-item border border-white">A fourth item</li>
        <li className="list-group-item border border-white">And a fifth one</li>
        <li className="list-group-item border border-white">A third item</li>
   
      </ul>
      </div>
    
      <div className="banner ">
      <Slider {...settings} className="slider" >
      <div>
        <img src="https://cdn.pixabay.com/photo/2021/11/26/20/45/lantern-6826697_960_720.jpg" alt="" />
      </div>
      <div>
      <img src="https://cdn.pixabay.com/photo/2021/11/15/05/25/boutique-6796399_1280.jpg" alt="" />
      </div>
      <div>
      <img src="https://cdn.pixabay.com/photo/2018/10/11/13/37/clothing-3739798_1280.jpg" alt="" />
      </div>
     </Slider>
     </div>
     </div>
      </div>
      
  
  )
}

export default home