import React from "react";

const CartItem = ({
  item: { id, title, text, img, color, shadow, price, cartQuantity },
}) => {
  return (
    <>
      <div>
        <div>
          <div>
            <img src={img} alt={title}></img>
          </div>
          <div>
            <div>
              <h1>{title}</h1>
              <p>{text}</p>
            </div>
            <div></div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default CartItem;
