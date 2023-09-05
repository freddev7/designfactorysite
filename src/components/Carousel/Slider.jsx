import React from "react"
import Slider from 'react-slick'

import medias1 from "../../assets/medias1.jpg";
import medias2 from "../../assets/medias2.jpg";
import medias3 from "../../assets/medias3.jpg";
import medias4 from "../../assets/medias4.jpg";
import medias5 from "../../assets/medias5.jpg";
import medias6 from "../../assets/medias6.jpg";
import medias7 from "../../assets/medias7.jpg";
import medias8 from "../../assets/medias8.jpg";
import medias9 from "../../assets/medias9.jpg";
import medias10 from "../../assets/medias10.jpg";
import medias11 from "../../assets/medias11.jpg";


const SliderComp = () => {
        var settings = {
          dots: false,
          infinite: true,
          speed: 1000,
          autoplay: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
    return (
        <Slider {...settings}>
            <img src={medias1}/>
            <img src={medias2}/>
            <img src={medias3}/>
            <img src={medias4}/>
            <img src={medias5}/>
            <img src={medias6}/>
            <img src={medias7}/>
            <img src={medias8}/>
            <img src={medias9}/>
            <img src={medias10}/>
            <img src={medias11}/>
        </Slider>
    )
}

export default SliderComp;

