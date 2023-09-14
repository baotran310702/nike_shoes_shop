import React from "react";
import Title from "./utils/Title";
import Items from "./utils/items";

const Sales = ({ endpoint: { title, items } }) => {
  return (
    <>
      <div>
        <Title title={title} />
        <div>
          {items?.map((item, i) => (
            <Items {...item} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sales;
