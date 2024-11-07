import { useLocation, useNavigate } from "react-router-dom";
import { avatarImage, avatarWebpImage } from "../../assets/images";
import { homePagePath, searchResultPagePath } from "../../router/path";
import ImageWebp from "../layout/ImageWebp/ImageWebp";
import ColorModeSwitcher from "./ColorModeSwitcher";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <header className="flex pt-[34px] pb-[29px] justify-between px-[28px] items-center">
      <div className="flex-1 flex">
        <div className="flex flex-col gap-[4px] items-center ">
          {location.pathname !== searchResultPagePath && (
            <ImageWebp
              srcSet={avatarWebpImage}
              src={avatarImage}
              alt="avatar"
              className="rounded-full w-[40px] h-[40px] object-cover"
            />
          )}
        </div>
      </div>
      <h1
        onClick={() => navigate(homePagePath)}
        className="text-white text-[16px] font-extralight text-center"
      >
        BaliOneRent
      </h1>
      <div className="flex-1 justify-end flex">
        <ColorModeSwitcher />
      </div>
    </header>
  );
};

export default Header;
