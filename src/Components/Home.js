import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import currencyFormatter from "currency-formatter";
import { Link } from "react-router-dom";
const Home = () => {
  const { products } = useSelector((state) => state.ProductsReducer);
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          {products.map((element) => {
            return (
              <div className="col-3" key={element.id}>
                <div className="product">
                  <div className="product__img">
                    <Link to={`/details/${element.id}`}>
                      <img src={`/images/${element.image}`} alt="name" />
                    </Link>
                  </div>
                  <div className="product__name">{element.name}</div>
                  <div className="row">
                    <div className="col-6">
                      <div className="product__price">
                        <span className="actualPrice">
                          {currencyFormatter.format(element.price, {
                            code: "USD",
                          })}
                          ;
                        </span>
                        {/* <span className="discount">{element.discount}%</span> */}
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="product__discount__price">
                        {currencyFormatter.format(element.discountPrice, {
                          code: "USD",
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
