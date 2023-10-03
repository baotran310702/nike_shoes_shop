import {
  ArrowRightOnRectangleIcon,
  IdentificationIcon,
} from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";

const UserTippy = ({ userState }) => {
  const onMoveProfiles = () => {};
  return (
    <>
      {userState && (
        <div
          className={`grid grid-cols-1 grid-rows-2 p-1 mx-2 justify-items-start bg-slate-50 bg-opacity-100 rounded-lg shadow-lg shadow-slate-800`}
        >
          <Link to="/profile">
            <div
              className={`flex col-span-1 text-black hover:bg-slate-200 row-span-1 w-full rounded-md py-2 px-2  cursor-pointer`}
              onClick={onMoveProfiles}
            >
              <IdentificationIcon className={`icon-style text-black`} />
              <p className="ml-2 text-sm">Your Profile</p>
            </div>
          </Link>

          {/* The reason for not using Link to navigate is that I have to remove all state before login, old state confuse UI & UX */}
          <Link className="w-full">
            <div
              className={`flex col-span-1text-black hover:bg-slate-200 row-span-1 w-full rounded-md py-2 px-2  cursor-pointer`}
              onClick={() => {
                localStorage.removeItem("token");
                window.location.href = "/login";
              }}
            >
              <ArrowRightOnRectangleIcon className={`icon-style text-black`} />
              <p className="ml-2 text-sm">Log out</p>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default UserTippy;
