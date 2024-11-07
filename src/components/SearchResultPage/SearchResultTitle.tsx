import Svg from "../layout/Svg/Svg";

type Props = {};

const SearchResultTitle = (props: Props) => {
  return (
    <div className="container flex justify-between items-center mt-[3px] mb-[21px]">
      <h3 className="titleH3B opacity-80">вот что мы нашли</h3>
      <button className="cursor-pointer bg-transparent border-none opacity-80">
        <Svg id={"settings"} className="w-[30px] h-[30px] fill-white" />
      </button>
    </div>
  );
};

export default SearchResultTitle;
