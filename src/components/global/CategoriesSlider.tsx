import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { categories } from "../../constants/categories";
import ImageWebp from "../layout/ImageWebp/ImageWebp";

const CategoriesSlider = () => {
  return (
    <div className="mb-3">
      <Swiper
        spaceBetween={6}
        slidesPerView={4.5}
        slidesOffsetBefore={7}
        slidesOffsetAfter={7}
      >
        {categories.map(({ name, img, imgWebp, key }, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center gap-[6px] flex-col">
              <div className="border-red-400 border-[1px] p-[2px] rounded-[15px] active:scale-90 transition-all cursor-pointer">
                <ImageWebp
                  srcSet={imgWebp}
                  src={img}
                  alt={name}
                  className="w-full aspect-square rounded-[13px] object-cover "
                />
              </div>
              <p className="text-[10px] font-light text-white">{name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategoriesSlider;
