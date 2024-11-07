import { useState } from "react";
import { IProduct } from "../../../models/IProduct";
import { formatNumber } from "../../../utils/formatNumber";
import Svg from "../../layout/Svg/Svg";

type Props = IProduct & {};

const SearchResultProductCard = (props: Props) => {
  const [isSaved, setIsSaved] = useState(false);
  return (
    <div className="px-[15px]">
      <img
        src={props.img}
        alt={"model" in props ? props.model : props.title}
        className="w-full rounded-[10px] mb-[12px] aspect-[4.5/3] object-cover"
      />
      <div className="flex justify-between items-center mb-[10px]">
        <h4 className="text-white text-14px font-medium">
          {"model" in props
            ? `${props.model}${
                "year" in props && props.year ? `, ${props.year}` : ""
              }`
            : props.title}
        </h4>
        <div className="flex gap-3 items-center ">
          <h4 className="text-white text-14px font-medium">
            {"place" in props
              ? `📍 ${props.place}`
              : "description" in props
              ? props.description
              : ""}
          </h4>
          <button
            className="cursor-pointer bg-transparent border-none "
            onClick={() => setIsSaved((prevState) => !prevState)}
          >
            <Svg
              id={"saved2"}
              className={"w-[17px] h-[18px]"}
              pathClass={`transition-all stroke-white ${
                isSaved ? "fill-white" : "fill-transparent"
              }`}
            />
          </button>
        </div>
      </div>
      <div className="mb-[10px]">
        <div className="flex flex-col gap-[6px] mb-[15px]">
          {"seats" in props && (
            <p className="text-14px font-regular flex justify-between items-center w-full">
              <span className="text-[#ffffff99]">посадочных мест: </span>
              <span className="text-[#ffffffcc]">{props.seats}</span>
            </p>
          )}
          {"priceForDay" in props && props.priceForDay && (
            <p className="text-14px font-regular flex justify-between items-center w-full">
              <span className="text-[#ffffff99]">день </span>
              <span className="text-[#ffffffcc]">
                {formatNumber(props.priceForDay)} IDR
              </span>
            </p>
          )}
          {"priceForWeek" in props && props.priceForWeek && (
            <p className="text-14px font-regular flex justify-between items-center w-full">
              <span className="text-[#ffffff99]">неделя </span>
              <span className="text-[#ffffffcc]">
                {formatNumber(props.priceForWeek)} IDR
              </span>
            </p>
          )}
          {"priceForMonth" in props && props.priceForMonth && (
            <p className="text-14px font-regular flex justify-between items-center w-full">
              <span className="text-[#ffffff99]">месяц </span>
              <span className="text-[#ffffffcc]">
                {formatNumber(props.priceForMonth)} IDR
              </span>
            </p>
          )}
          {"travelTime" in props && props.travelTime && (
            <p className="text-14px font-regular flex justify-between items-center w-full">
              <span className="text-[#ffffff99]">время в пути </span>
              <span className="text-[#ffffffcc]">{props.travelTime}</span>
            </p>
          )}
          {"price" in props && props.price && (
            <p className="text-14px font-regular flex justify-between items-center w-full">
              <span className="text-[#ffffff99]">цена </span>
              <span className="text-[#ffffffcc]">{props.price}</span>
            </p>
          )}
          <div className="flex justify-between items-center">
            {"length" in props && props.length && (
              <p className="text-14px font-regular flex gap-[6px] items-center ">
                <span className="text-[#ffffff99]">длина </span>
                <span className="text-[#ffffffcc]">{props.length} м</span>
              </p>
            )}
            {"guestCount" in props && props.guestCount && (
              <p className="text-14px font-regular flex gap-[6px] items-center ">
                <span className="text-[#ffffff99]">макс. гостей </span>
                <span className="text-[#ffffffcc]">{props.guestCount}</span>
              </p>
            )}
          </div>

          {"minRent" in props && props.minRent && (
            <p className="text-14px font-regular flex justify-between items-center w-full">
              <span className="text-[#ffffff99]">мин. аренда </span>
              <span className="text-[#ffffffcc]">
                {formatNumber(props.minRent)}
              </span>
            </p>
          )}
          {"priceForHour" in props && props.priceForHour && (
            <p className="text-14px font-regular flex justify-between items-center w-full">
              <span className="text-[#ffffff99]">час </span>
              <span className="text-[#ffffffcc]">
                {formatNumber(props.priceForHour)} IDR
              </span>
            </p>
          )}
          {"halfDay" in props && props.halfDay && (
            <p className="text-14px font-regular flex justify-between items-center w-full">
              <span className="text-[#ffffff99]">12 часов </span>
              <span className="text-[#ffffffcc]">
                {formatNumber(props.halfDay)} IDR
              </span>
            </p>
          )}
        </div>
      </div>
      <button className="bg-greyDark rounded-[10px] w-full text-center p-[10px] cursor-pointer border-none text-white text-[15px] font-medium">
        ЗАКАЗАТЬ
      </button>
    </div>
  );
};

export default SearchResultProductCard;
