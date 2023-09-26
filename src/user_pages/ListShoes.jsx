import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setHiddenFooter } from "../app/FooterSlice";
import { setHiddenNav, setStateNav } from "../app/NavbarSlice";
import Sidebar from "../components/Sidebar";
import { Sales } from "../components";
import { topratesales } from "../data/data";
import Items from "../components/utils/Items";

const ListShoes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setHiddenFooter({
        isHidden: true,
      })
    );
    dispatch(
      setHiddenNav({
        isHidden: true,
      })
    );
    dispatch(
      setStateNav({
        navState: true,
      })
    );
  }, []);
  console.log(topratesales);

  const ifPopular = false;

  return (
    <>
      <div className="relative flex flex-row bg-white">
        <div className="absolute sidebar w-1/5 h-auto">
          <Sidebar />
        </div>
        <div className="absolute w-4/5 bg-blue-400 h-screen top-20 right-0 gap-0">
          <div>Category</div>
          <div className="items">
            <div className="nike-container">
              <div
                className={`grid items-center justify-items-center ${
                  ifPopular
                    ? "grid-cols-3 xl:grid-cols-2 md:grid-cols-1 "
                    : "grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 "
                } gap-7 lg:gap-5 mt-7`}
              >
                {topratesales.items?.map((item, i) => (
                  <Items {...item} key={i} ifPopular={ifPopular} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListShoes;
