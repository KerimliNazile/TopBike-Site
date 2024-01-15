

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import './index.scss'


import { Navigation } from 'swiper/modules';

export default function Header() {
  return (
    <>
      <Swiper navigation={true}
        slidesPerView={1}
        spaceBetween={30}
        modules={[Navigation]}
        className="mySwiper">
        <SwiperSlide>
          <div className="HeaderArea">
            <img src="https://topbike-store-demo.myshopify.com/cdn/shop/files/slideshow_4.jpg?v=1613575294" alt="" />
            <div className="HeaderText">
              <h1>Off Road Bicycle</h1>
              <h6>Here to bring your life style to the next level.</h6>
              <button className='HeadBtn'>Shop Now</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="HeaderArea">
            <img src="https://topbike-store-demo.myshopify.com/cdn/shop/files/slideshow_3.jpg?v=1613575289" alt="" />
            <div className="HeaderText">
              <h1>Off Road Bicycle</h1>
              <h6>Here to bring your life style to the next level.</h6>
              <button className='HeadBtn'>Shop Now</button>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
