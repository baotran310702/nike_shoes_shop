import React from "react";
import Title from "./utils/Title";
import Items from "./utils/Items";

const Sales = ({ ifPopular, endpoint: { title, items } }) => {
  return (
    <>
      <div className="nike-container">
        <Title title={title} />
        <div
          className={`grid items-center justify-items-center ${
            ifPopular
              ? "grid-cols-3 xl:grid-cols-2 md:grid-cols-1 "
              : "grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 "
          } gap-7 lg:gap-5 mt-7`}
        >
          {items?.map((item, i) => (
            <Items {...item} key={i} ifPopular={ifPopular} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sales;
