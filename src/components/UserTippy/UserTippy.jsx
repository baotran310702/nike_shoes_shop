import {
  ArrowRightOnRectangleIcon,
  IdentificationIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";

const UserTippy = ({ userState }) => {
  return (
    <>
      {userState && (
        <div
          className={`grid grid-cols-1 grid-rows-2 p-1 mx-2 justify-items-start bg-slate-50 bg-opacity-100 rounded-lg shadow-lg shadow-slate-800`}
        >
          <div
            className={`flex col-span-1 text-black hover:bg-slate-200 row-span-1 w-full rounded-md py-2 px-2  cursor-pointer`}
          >
            <IdentificationIcon className={`icon-style text-black`} />
            <p className="ml-2">User Information</p>
          </div>
          <div
            className={`flex col-span-1text-black hover:bg-slate-200 hover:bg-slate-700"
        } row-span-1 w-full rounded-md py-2 px-2  cursor-pointer`}
          >
            <ArrowRightOnRectangleIcon className={`icon-style text-black`} />
            <p className="ml-2">Log out</p>
          </div>
        </div>
      )}
    </>
  );
};

export default UserTippy;
