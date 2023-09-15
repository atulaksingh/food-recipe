import React from "react";
// Import Swiper React components
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
function Owl() {
  return (
    <>
      {/* <div className="flex justify-between align-middle items-center"> */}

      <div className="relative py-5 sm:py-10">
        <Swiper
          // navigation={true}
          slidesPerView={1.2}
          spaceBetween={8}
          centeredSlides={true}
          //   lazyPreloadPrevNext={true}
          navigation={{
            prevEl: "#mtprev",
            nextEl: "#mtnext",
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          lazyPreloaderClass="true"
          loop={true}
          speed={1700}
          keyboard={{
            enabled: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1.3,
              spaceBetween: 8,
            },
            768: {
              slidesPerView: 1.4,
              spaceBetween: 9,
            },
            1024: {
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
            1500: {
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
          }}
        >
          <SwiperSlide>
            <div>
              <div className="relative">
                <img
                  className="bg-[rgba(40,41,43,.5)] h-60 sm:h-fit sm:w-fit mx-auto rounded-md"
                  alt=""
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693551790/homemade-chicken-tikka-masala-AW6RTJ7-1200x600_twfrea.jpg"
                />
                <div className="absolute w-full h-full bg-[rgba(40,41,43,.5)] top-0  rounded-md"></div>
                <div className="absolute w-full h-full  top-20 md:top-24 lg:top-40 xl:top-56 text-center  sm:px-10 ">
                  <div>
                    <h1 className="text-white text-[30px] md:text-[45px] lg:text-[60px] font-bold">
                      Chicken Tikka Masala
                    </h1>
                    <p className="text-[12px] md:text-[18px] lg:text-[20px] text-[rgba(255,255,255,.9)] font-medium w-[85%] mx-auto">
                      A handful of simple ingredients typify the fresh, vibrant
                      flavors of Greek cooking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="relative">
                <img
                  className="bg-[rgba(40,41,43,.5)] h-60 sm:h-fit sm:w-fit mx-auto rounded-md"
                  alt=""
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693567558/raspberry-tartlet-dessert-with-almond-flakes-34Z9TYK-1200x600_ng0xe6.jpg"
                />
                <div className="absolute w-full h-full bg-[rgba(40,41,43,.5)] top-0 rounded-md"></div>
                <div className="absolute w-full h-full top-20 md:top-24 lg:top-40 xl:top-56 text-center  sm:px-10 ">
                  <div className="flex flex-col align-middle items-center">
                    <h1 className="text-white text-[30px] md:text-[45px] lg:text-[60px] font-bold">
                      Raspberry Tartlet
                    </h1>
                    <p className="text-[12px] md:text-[18px] lg:text-[20px] text-[rgba(255,255,255,.9)] font-medium w-[85%] mx-auto">
                      A handful of simple ingredients typify the fresh, vibrant
                      flavors of Greek cooking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="relative">
                <img
                  className="bg-[rgba(40,41,43,.5)] h-60 sm:h-fit sm:w-fit mx-auto rounded-md"
                  alt=""
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693567561/baked-chicken-breast-9C4F43W-1200x600_ditr2e.jpg"
                />
                <div className="absolute w-full h-full bg-[rgba(40,41,43,.5)] top-0 rounded-md"></div>
                <div className="absolute w-full h-full top-20 md:top-24 lg:top-40 xl:top-56 text-center  sm:px-10 ">
                  <div>
                    <h1 className="text-white text-[30px] md:text-[45px] lg:text-[60px] font-bold">
                      Baked Chicken Breast
                    </h1>
                    <p className="text-[12px] md:text-[18px] lg:text-[20px] text-[rgba(255,255,255,.9)] font-medium w-[85%] mx-auto">
                      A handful of simple ingredients typify the fresh, vibrant
                      flavors of Greek cooking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="relative">
                <img
                  className="bg-[rgba(40,41,43,.5)] h-60 sm:h-fit sm:w-fit mx-auto rounded-md "
                  alt=""
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693567564/meat-burger-with-salad-cheese-tomato-and-ketchup-KRH2A48-1200x600_xr007l.jpg"
                />
                <div className="absolute w-full h-full bg-[rgba(40,41,43,.5)] top-0 rounded-md"></div>
                <div className="absolute w-full h-full  top-20 md:top-24 lg:top-40 xl:top-56 text-center  sm:px-10 ">
                  <div>
                    <h1 className="text-white text-[30px] md:text-[45px] lg:text-[60px] font-bold">
                      Cheese Burger
                    </h1>
                    <p className="text-[12px] md:text-[18px] lg:text-[20px] text-[rgba(255,255,255,.9)] font-medium w-[85%] mx-auto">
                      A handful of simple ingredients typify the fresh, vibrant
                      flavors of Greek cooking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="absolute  z-10 w-64  md:w-7/12 left-[20%] top-[43%] md:top-[50%] h-10 flex justify-between">
          <div
            className="bg-[rgba(255,255,255,.5)] hidden sm:block w-fit p-2 rounded-full cursor-pointer hover:bg-gray-200"
            id="mtprev"
          >
            <BsArrowLeft id="#mtprev" size={20} className="" />
          </div>
          <div
            className="bg-[rgba(255,255,255,.5)] w-fit p-2 hidden sm:block rounded-full cursor-pointer hover:bg-gray-200"
            id="mtnext"
          >
            <BsArrowRight size={20} />
          </div>
        </div>
      </div>

      {/* </div> */}
    </>
  );
}

export default Owl;
