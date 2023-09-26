import React from "react";
import { useParams } from "react-router-dom";

const ItemsInfo = () => {
  const { id } = useParams();
  console.log(id);
  return <div>ItemsInfo</div>;
};

export default ItemsInfo;
