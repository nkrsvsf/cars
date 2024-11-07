import { Swiper, SwiperSlide } from "swiper/react";

import { products } from "../../../assets/data/products";
import ProductCard from "../../global/ProductCard";

const HomePopulars = () => {
  return (
    <div className="mb-4">
      <h3 className="titleH3B container mb-[20px]">Популярное</h3>
      <div className="container">
        {products.map((item, index) => (
          <div className="mb-3" key={index}>
            <h4 className="text-white text-[15px] font-light mb-[10px] mt-[30px]">
              {item.name}
            </h4>
            <Swiper spaceBetween={10} slidesPerView={2.2}>
              {item.data.map((product, productIndex) => (
                <SwiperSlide
                  key={`${index}-${productIndex}`}
                  className="h-auto"
                >
                  <ProductCard {...product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePopulars;
