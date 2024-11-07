import { Swiper, SwiperSlide } from "swiper/react";

import SecondaryBtn from "../layout/SecondaryBtn";

import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { CategoryKeys } from "../../constants/categories";
import { searchResultPagePath } from "../../router/path";

const texts = [
  {
    name: "Байки",
    key: CategoryKeys.bikes,
  },
  {
    name: "Авто",
    key: CategoryKeys.cars,
  },
  {
    name: "Трансфер",
    key: CategoryKeys.transfer,
  },
  {
    name: "Лодки",
    key: CategoryKeys.boats,
  },
  {
    name: "Билеты",
    key: CategoryKeys.tickets,
  },
  {
    name: "Байки",
    key: CategoryKeys.bikes,
  },
  {
    name: "Авто",
    key: CategoryKeys.cars,
  },
  {
    name: "Трансфер",
    key: CategoryKeys.transfer,
  },
  {
    name: "Лодки",
    key: CategoryKeys.boats,
  },
  {
    name: "Билеты",
    key: CategoryKeys.tickets,
  },
];

const HomeSearch = () => {
  const navigate = useNavigate();
  return (
    <div className="mb-[20px]">
      <h3 className="titleH3B mb-[10px] px-[7px]">Поиск</h3>
      <Swiper
        spaceBetween={6}
        slidesPerView={4.5}
        slidesOffsetBefore={7}
        slidesOffsetAfter={7}
        centeredSlides={false}
      >
        {texts.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center gap-4 flex-col active:scale-90 transition-all">
              <SecondaryBtn
                className="w-full"
                onClick={() =>
                  navigate(searchResultPagePath, { state: { query: item.key } })
                }
              >
                {item.name}
              </SecondaryBtn>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSearch;
