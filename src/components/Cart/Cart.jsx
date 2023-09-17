import React from "react";
import CartCount from "./CartCount";
import CartEmpty from "./CartEmpty";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import {
  currentCartItems,
  currentState,
  setCloseCart,
} from "../../app/CartSlice";

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
            <CartEmpty />
          ) : (
            <div>
              {listCart?.map((item, i) => (
                <CartItem key={i} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
