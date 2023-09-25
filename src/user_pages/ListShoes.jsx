import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setHiddenFooter } from "../app/FooterSlice";
import { setHiddenNav, setStateNav } from "../app/NavbarSlice";
import Sidebar from "../components/Sidebar";

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

  return (
    <>
      <div className="relative h-[120vh] bg-white">
        <Sidebar />
      </div>
    </>
  );
};

export default ListShoes;
