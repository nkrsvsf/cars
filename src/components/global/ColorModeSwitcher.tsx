import { useState } from "react";

const ColorModeSwitcher = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  return (
    <button
      onClick={() => setIsLightMode((prevState) => !prevState)}
      className={`cursor-pointer transition-ease  ${
        isLightMode ? "bg-yellow-300" : "bg-white"
      } border-none relative  rounded-full w-[24px] h-[24px]`}
    >
      <div
        className={`w-full h-full transition-ease bg-blackBg rounded-full absolute  ${
          !isLightMode ? "left-[5px] bottom-[5px]" : "left-[25px] bottom-[25px]"
        }`}
      ></div>
    </button>
  );
};

export default ColorModeSwitcher;
