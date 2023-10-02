import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setItems } from "../../app/ItemsSlice";

const ItemResult = ({ item: { id, title, text, img, price, rating } }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const item = { id, title, text, img, price, rating };

  const handleDispatch = () => {
    dispatch(setItems({ Item: item }));
    navigate("/itemsInfor");
  };

  return (
    <>
      <div className="items-search" onClick={handleDispatch}>
        <img src={img} className="w-auto h-12"></img>
        <div>
          <h1 className="text-sm font-semibold">{title}</h1>
          <p className="text-base font-sans">${price}</p>
        </div>
      </div>
    </>
  );
};

export default ItemResult;
