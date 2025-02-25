

import Slider from "react-slick";
import CountdownTimer from "./CountdownTimer";

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
  const targetDate = new Date(2025, 2, 28, 0, 0, 0).getTime(); // YYYY, MM-1, DD, HH, MM, SS
  return (
    <div className="container pt-5 pb-5">

    <div className="row d-flex justify-content-between b-parent">

    
      <div className="category ">
      <ul className="list-group list-group-flush badge">
        <li className="list-group-item border border-white"><a href="#box">Box</a></li>
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

     <div className="container pt-5 pb-5">
       <div className="title_">
        <h6>Todays</h6>
       </div>
       
      <h1 className="text-3xl font-bold mb-4">Flesh Sale</h1>
      <CountdownTimer targetDate={targetDate} />
    
      
     </div>
  
      </div>
      
  
  )
}

export default home