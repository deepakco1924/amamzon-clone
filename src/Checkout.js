import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/Diwali17/Friday3/ART_wave1_HDFC_1500x200.jpg"
          alt="image loading"
          className="checkout__ad"
        />
        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal total={100} />
      </div>
    </div>
  );
}

export default Checkout;
