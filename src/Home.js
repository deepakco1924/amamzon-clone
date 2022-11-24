import React from "react";
import "./Home.css";
import Product from "./Product.js";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://amazon-clone-with-stripe-payment.netlify.app/images/banner.jpg"
          alt="image loading"
          className="home__image"
        />
        <div className="home__row">
          <Product
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically"
            price={19.2}
            image="https://m.media-amazon.com/images/I/51T-sMqSMiL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
            rating={5}
            id={1}
          />
          <Product
            title="Kenwood Kitchen Machine, 1000 Watts, 4.3L Bowl, 5 Main Attachments, Silver - OWKHC29.W0SI, Large (111534)"
            price={239}
            image="https://m.media-amazon.com/images/I/41SFgvtkPmL.jpg"
            rating={5}
            id={2}
          />
        </div>
        <div className="home__row">
          <Product
            title={`MI Smart Band 5- India's No. 1 Fitness Band, 1.1" (2.8 cm) AMOLED Color Display, 2 Weeks Battery Life, Personal Activity Intelligence (PAI),`}
            price={199.2}
            image="https://m.media-amazon.com/images/I/71X8NdnCsvL._SL1500_.jpg"
            rating={5}
            id={3}
          />

          <Product
            title="Echo Studio- Our best-sounding smart speaker ever - With Dolby Atmos, spatial audio processing technology, and Alexa (Black)"
            price={98.99}
            image="https://m.media-amazon.com/images/I/41kCNGqQbXL.jpg"
            rating={5}
            id={4}
          />

          <Product
            title="2021 Apple iPad Pro with Apple M1 chip (11-inch/27.96 cm, Wi-Fi, 128GB) - Space Grey (3rd Generation)"
            price={159.2}
            image="https://m.media-amazon.com/images/I/81Y5WuARqpS._SL1500_.jpg"
            rating={5}
            id={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
            price={1934.2}
            image="https://m.media-amazon.com/images/I/71MlcO29QOL._SL1500_.jpg"
            rating={5}
            id={6}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
