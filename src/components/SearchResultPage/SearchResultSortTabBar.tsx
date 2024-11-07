import { useState } from "react";

type Props = {};

type SortType = "new" | "price" | "mil";

const tabs: {
  name: string;
  key: SortType;
}[] = [
  {
    name: "сначала новые",
    key: "new",
  },
  {
    name: "цена по возрастанию",
    key: "price",
  },
  {
    name: "по пробегу",
    key: "mil",
  },
];

const SearchResultSortTabBar = (props: Props) => {
  const [activeTab, setActiveTab] = useState<SortType>("new");

  return (
    <div className="container">
      <div className=" rounded-[10px] border-[2px] border-[#ffffff0d] bg-blackBg mb-[22px] flex">
        {tabs.map(({ name, key }) => (
          <button
            key={key}
            className={`${
              key === "price" ? "flex-[1.5]" : "flex-1"
            } transition-all text-center px-[2px] text-white text-[14px] font-extralight cursor-pointer rounded-[10px] py-[6px] ${
              activeTab === key ? "bg-[#ffffff0d]" : "bg-transparent"
            }`}
            onClick={() => setActiveTab(key)}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchResultSortTabBar;
