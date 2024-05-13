"use client";
import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
register();
const DemoSlider = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      EffectFade: {
        effect: "fade",
      },
      //add this
      injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
            background: rgba(0, 0, 0, 0.5);
            background-position: center;
            background-size: 10px;
            background-repeat: no-repeat;
           padding:10px 10px;
            border-radius: 100%;
            color: white;
            height:20px;
            width:20px;
          
          
          }  
          .swiper-button-next:hover,
          .swiper-button-prev:hover{
            background-color:#6548cb; 
          }
      `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <div className="shadow-lg bg-white rounded p-4">
      <swiper-container ref={swiperRef} init="false">
        <swiper-slide>
          <img src="img/slider1.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="img/slider1.png" />
        </swiper-slide>
      </swiper-container>
    </div>
  );
};

export default DemoSlider;
