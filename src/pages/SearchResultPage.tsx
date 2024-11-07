import SearchResultProductList from "../components/SearchResultPage/SearchResultProductList/SearchResultProductList";
import SearchResultSortTabBar from "../components/SearchResultPage/SearchResultSortTabBar";
import SearchResultTitle from "../components/SearchResultPage/SearchResultTitle";

const SearchResultPage = () => {
  return (
    <div>
      <SearchResultTitle />
      <SearchResultSortTabBar />
      <SearchResultProductList />
    </div>
  );
};

export default SearchResultPage;
