import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        value={2456981}
        displayType={"text"}
        decimalScale={2}
        thousandSeparator={true}
        prefix={"$"}
        renderText={(value) => {
          return (
            <>
              <p>
                Subtotal (0 items): <strong>{value}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" />
                <span>This order contains a gift</span>
              </small>
            </>
          );
        }}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
