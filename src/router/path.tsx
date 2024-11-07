import { ReactElement } from "react";

import HomePage from "../pages/HomePage";
import SearchResultPage from "../pages/SearchResultPage";

export const homePagePath = "/";
export const searchResultPagePath = "/search";

interface IRoute {
  path: string;
  component: ReactElement<any, any>;
  children?: Omit<IRoute, "children">[];
}

export const routes: IRoute[] = [
  {
    path: homePagePath,
    component: <HomePage />,
  },
  {
    path: searchResultPagePath,
    component: <SearchResultPage />,
  },
];
