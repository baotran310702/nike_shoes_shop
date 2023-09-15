import React from "react";
import Title from "./utils/Title";

const TopStories = ({ endpoint: { title, news } }) => {
  return (
    <>
      <div className="nike-container mb-11">
        <Title title={title} />
        <div></div>
      </div>
    </>
  );
};

export default TopStories;
