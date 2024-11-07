import Svg from "../layout/Svg/Svg";

import { MouseEventHandler, useState } from "react";
import { IProduct } from "../../models/IProduct";
import { formatNumber } from "../../utils/formatNumber";

type Props = IProduct;

const infoTextFontClass = "text-[8px] xs:text-[10px] font-light";

const ProductCard = (props: Props) => {
  const [isSaved, setIsSaved] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const onToggleSave: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    setIsSaved((prevState) => !prevState);
  };

  const onMouseDown = (
    event: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>
  ) => {
    if (
      (event.target as HTMLElement).classList.contains("saveBtn") ||
      (event.target as HTMLElement).tagName === "path" ||
      (event.target as HTMLElement).classList.contains("saveIcon")
    )
      return;
    setIsPressed(true);
  };

  const onMouseUp = () => {
    setIsPressed(false);
  };

  return (
    <div
      onTouchStart={onMouseDown}
      onTouchEnd={onMouseUp}
      onTouchCancel={onMouseUp}
      className={`w-full h-full rounded-[10px] p-[2px] bg-[#1F2024]  overflow-hidden relative ${
        isPressed ? "scale-95" : ""
      } transition-all cursor-pointer`}
    >
      <img
        className="w-full aspect-[3/3.4] object-cover rounded-tl-[8px] rounded-tr-[8px] "
        src={props.img}
        alt={"model" in props ? props.model : props.title}
      />
      <div className=" py-[8px] px-[5px]">
        <div className="flex justify-between gap-2 mb-[1px]">
          <span className="text-[12px] font-light text-white">
            {"model" in props
              ? `${props.model}${
                  "year" in props && props.year ? `, ${props.year}` : ""
                }`
              : props.title}
          </span>
          <button
            onClick={onToggleSave}
            className={`saveBtn bg-transparent transition-all border-none cursor-pointer `}
          >
            <Svg
              id={"saved"}
              className={`saveIcon w-[15px] h-[13px] ${
                !isSaved ? "fill-[#D2D2D2]" : "fill-[#FF0000]"
              }`}
            />
          </button>
        </div>

        {
          <p
            className={`${
              "place" in props ? "justify-end" : "justify-between"
            } text-white flex items-center text-[8px] font-light mb-[7px]`}
          >
            {"place" in props
              ? `📍 ${props.place}`
              : "description" in props
              ? props.description
              : ""}
          </p>
        }
        <div className="flex flex-col gap-[6px] mb-[8px] text-white font-light">
          {"seats" in props && (
            <div className="w-full flex justify-between items-center gap-2">
              <span className={infoTextFontClass}>посадочных мест</span>
              <span className={infoTextFontClass}>{props.seats}</span>
            </div>
          )}
          {"priceForDay" in props && props.priceForDay && (
            <div className="w-full flex justify-between items-center gap-2">
              <span className={infoTextFontClass}>день</span>
              <span className={infoTextFontClass}>
                {formatNumber(props.priceForDay)} IDR
              </span>
            </div>
          )}
          {"priceForWeek" in props && props.priceForWeek && (
            <div className="w-full flex justify-between items-center gap-2">
              <span className={infoTextFontClass}>неделя</span>
              <span className={infoTextFontClass}>
                {formatNumber(props.priceForWeek)} IDR
              </span>
            </div>
          )}
          {"priceForMonth" in props && props.priceForMonth && (
            <div className="w-full flex justify-between items-center gap-2">
              <span className={infoTextFontClass}>месяц</span>
              <span className={infoTextFontClass}>
                {formatNumber(props.priceForMonth)} IDR
              </span>
            </div>
          )}
          {"travelTime" in props && props.travelTime && (
            <div className="w-full flex justify-between items-center gap-2">
              <span className={infoTextFontClass}>время в пути</span>
              <span className={infoTextFontClass}>{props.travelTime}</span>
            </div>
          )}
          {"price" in props && props.price && (
            <div className="w-full flex justify-between items-center gap-2">
              <span className={infoTextFontClass}>цена</span>
              <span className={infoTextFontClass}>{props.price}</span>
            </div>
          )}
          {"length" in props && (
            <div className="flex justify-between items-center gap-[4px] flex-row">
              {"length" in props && props.length && (
                <div className="w-fit flex items-center gap-[4px] justify-start">
                  <span className={infoTextFontClass}>длинна</span>
                  <span className={infoTextFontClass}>{props.length} м</span>
                </div>
              )}
              {"guestCount" in props && props.guestCount && (
                <div className="w-fit flex items-center gap-[4px] justify-start">
                  <span className={infoTextFontClass}>макс. гостей</span>
                  <span className={infoTextFontClass}>{props.guestCount}</span>
                </div>
              )}
            </div>
          )}

          {"minRent" in props && props.minRent && (
            <div className="w-full flex justify-between items-center gap-2">
              <span className={infoTextFontClass}>мин. аренда</span>
              <span className={infoTextFontClass}>
                {formatNumber(props.minRent)}
              </span>
            </div>
          )}
          {"priceForHour" in props && props.priceForHour && (
            <div className="w-full flex justify-between items-center gap-2">
              <span className={infoTextFontClass}>час</span>
              <span className={infoTextFontClass}>
                {formatNumber(props.priceForHour)} IDR
              </span>
            </div>
          )}
          {"halfDay" in props && props.halfDay && (
            <div className="w-full flex justify-between items-center gap-2">
              <span className={infoTextFontClass}>12 часов</span>
              <span className={infoTextFontClass}>
                {formatNumber(props.halfDay)} IDR
              </span>
            </div>
          )}
        </div>
        {"updatedAt" in props && props.updatedAt && (
          <p className="text-[8px] font-light text-white flex gap-1 justify-end">
            <span>обновлено {props.updatedAt}</span>{" "}
            <Svg id={"seen"} className="w-[12px]" />
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
