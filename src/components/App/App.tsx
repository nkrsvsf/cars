import { useEffect } from "react";
import { useTelegram } from "../../hooks/useTelegram";

import AppRouter from "../../router/AppRouter";
import CategoriesSlider from "../global/CategoriesSlider";
import Header from "../global/Header";
import Filter from "../Filter/Filter";

export const App = () => {
  const tg = useTelegram();

  useEffect(() => {
    if (!tg) return;
    // open fullscreen
    tg.expand();

    // disable scroll on mobile
    tg.setHeaderColor("#15161A");
    const overflow = 100;
    document.body.style.overflowY = "hidden";
    document.body.style.marginTop = `${overflow}px`;
    document.body.style.height = window.innerHeight + overflow + "px";
    document.body.style.paddingBottom = `${overflow}px`;
    window.scrollTo(0, overflow);
    tg.disableVerticalSwipes();

    tg.ready();

    if (!tg.initDataUnsafe?.user) return;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={"h-full w-full overflow-hidden"}>
        <div className=" md:max-w-[600px] max-w-[400px] w-full my-0 mx-auto flex flex-col h-full z-1 relative ">
          <>
            <div className="w-full h-screen">
              <div className="scroll-wrapper">
                <Header />
                <CategoriesSlider />
                <AppRouter />
                <Filter />
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  );
};
