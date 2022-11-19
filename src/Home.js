import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className=" home">
      <div className="home__container">
        <img
          src="https://amazon-clone-with-stripe-payment.netlify.app/images/banner.jpg"
          alt="image loading"
          className="home__image"
        />
        <div className="home__row"></div>
        <div className="home__row"></div>
        <div className="home__row"></div>
      </div>
    </div>
  );
}

export default Home;
