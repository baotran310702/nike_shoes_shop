import React from "react";
import CartCount from "./CartCount";
import CartEmpty from "./CartEmpty";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import {
  currentCartItems,
  currentState,
  setCloseCart,
} from "../../app/CartSlice.js";

const Cart = () => {
  const dispatch = useDispatch();
  const currentStatus = useSelector(currentState);
  const listCart = useSelector(currentCartItems);

  console.log(listCart);

  const onClickBack = () => {
    dispatch(
      setCloseCart({
        cartState: false,
      })
    );
  };
  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme w-full h-screen z-[200]
         ${
           currentStatus
             ? "opacity-100 visible translate-x-0 transition-all duration-200"
             : "opacity-0 invisible translate-x-5 transition-all duration-200"
         }`}
      >
        <div className="blur-effect-theme h-screen max-w-xl w-full absolute right-0">
          <CartCount onCartToggle={onClickBack} />
          {listCart.length == 0 ? (
            <CartEmpty onCartToggle={onClickBack} />
          ) : (
            <div className="flex flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll items-start justify-start h-[81vh] scroll-hidden scroll-smooth">
              {listCart?.map((item, i) => (
                <CartItem key={i} item={item} />
              ))}
            </div>
          )}

          {listCart.length > 0 ? (
            <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center py-3">
              <div className="flex items-center justify-between">
                <h1 className="text-base font-semibold uppercase">SubTotal</h1>
                <h1 className="text-sm rounded bg-theme-cart text-slate-200 px-1 py-0.5">
                  $000
                </h1>
              </div>
              <div className="grid items-center justify-items-center gap-2">
                <p className="text-sm font-medium text-center text-slate-900">
                  Taxes and Shipping Will Be Calculated At Shipping
                </p>
                <button
                  type="button"
                  className="button-theme text-white w-full bg-black"
                >
                  Check Out
                </button>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
