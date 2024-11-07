import { useLocation } from "react-router-dom";
import { products } from "../../../assets/data/products";
import { CategoryKeys } from "../../../constants/categories";
import SearchResultProductCard from "./SearchResultProductCard";

type Props = {};

const SearchResultProductList = (props: Props) => {
  const location = useLocation();
  const state = location.state as { query?: CategoryKeys };

  if (!state.query) return null;

  const data = products.find((item) => item.key === state.query)?.data;

  return (
    <div className="container flex flex-col gap-[40px] mb-3">
      {data &&
        data.map((item, index) => (
          <SearchResultProductCard {...item} key={index} />
        ))}
    </div>
  );
};

export default SearchResultProductList;
