import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css";
function Subtotal() {
  const [state, disptach] = useStateValue();
  const total = parseFloat(getBasketTotal(state.basket));
  return (
    <div className="subtotal">
      <CurrencyFormat
        value={total}
        displayType={"text"}
        decimalScale={2}
        thousandSeparator={true}
        prefix={"$"}
        renderText={(value) => {
          return (
            <>
              <p>
                Subtotal ({state.basket.length} items): <strong>{value}</strong>
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
