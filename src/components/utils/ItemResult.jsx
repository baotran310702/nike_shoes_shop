import React from "react";
import { useNavigate } from "react-router-dom";

const ItemResult = ({ img, title, price }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="items-search"
        onClick={() => {
          console.log("items clicked");
        }}
      >
        <img src={img} className="w-auto h-12"></img>
        <div>
          <h1 className="text-sm font-semibold">{title}</h1>
          <p className="text-base font-sans">{price}</p>
        </div>
      </div>
    </>
  );
};

export default ItemResult;
