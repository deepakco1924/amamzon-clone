import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { db } from "./Firebase";
import { useStateValue } from "./StateProvider";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import Order from "./Order";
import "./Orders.css";

import { HashLoader } from "react-spinners";
import { lightGreen } from "@mui/material/colors";
function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);
  const [count, setCount] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, "users", user?.uid, "orders")
        );
        setOrders(
          querySnapshot.docs
            .map((doc) => {
              return {
                id: doc.id,
                data: doc.data(),
              };
            })
            .sort((a, b) => b.data.created - a.data.created)
        );
        setCount(true);
      } catch (err) {
        console.log("we have erros is there");
        console.log(err);
      }
    };
    if (user) {
      getData();
    } else {
      setOrders([]);
    }
  }, [user]);
  console.log("our orders are here", orders);
  if (count === false) {
    return (
      <div className="orders__spinner">
        <HashLoader
          color={"#27b480"}
          loading={true}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        <h2 className="orders__loading">Loading</h2>
      </div>
    );
  } else {
    return (
      <div className="orders">
        <h1>Your Orders are here</h1>
        <div className="orders__order">
          {orders?.map((order) => (
            <Order order={order} />
          ))}
        </div>
      </div>
    );
  }
}

export default Orders;
