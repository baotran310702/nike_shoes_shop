import React from "react";

const FeatureItems = ({
  ifPopular,
  endpoint: { title, heading, text, img, url, btn },
}) => {
  return (
    <>
      <div
        className={`relative flex ${
          ifPopular ? "flex-row-reverse" : "flex-row"
        } items-center justify-between sm:flex-col sm:justify-center nike-container`}
      >
        <div className="max w-sm sm:max-w-none w-full sm:text-center">
          <h1 className="text-4xl md:text-3xl font-bold text-gradient ">
            {heading}
          </h1>
          <h1 className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold text-slate-900 filter drop-shadow-xl">
            {title}
          </h1>
          <p className="xl:text-sm my-4 text-slate-900">{text}</p>
          <a href={url} className="flex items-center " target={"_blank"}>
            <button
              type="button"
              className="button-theme bg-slate-900 shadow-slate-900 text-slate-100 py-1.5"
            >
              {btn}
            </button>
          </a>
        </div>
        <div className="flex items-center justify-center max-w-xl relative lg:max-w-none w-full mx-2">
          <img
            src={img}
            alt={`img/${heading}`}
            className={`w-auto object-fill transitions-theme hover:-rotate-12
            ${
              ifPopular
                ? "h-60 lg:h-56 md:h-52 sm:h-44 sxm:h-36 rotate-6 hover:-rotate-12 "
                : "h-72 lg:h-64 sm:h-48 sxm:h-40 rotate-[19deg] hover:rotate-12"
            }
            `}
          ></img>
        </div>
      </div>
    </>
  );
};

export default FeatureItems;
