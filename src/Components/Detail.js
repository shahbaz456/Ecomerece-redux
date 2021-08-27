import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import currencyFormatter from "currency-formatter";
import { useDispatch, useSelector } from "react-redux";
import { BiMinus, BsPlus } from "react-icons/all";
import { toast } from "react-toastify";

export default function Detail() {
  const [quantity, setquantity] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.ProductsReducer);
  useEffect(() => {
    dispatch({ type: "PRODUCT", id });
  }, [id]);

  const decQuantity = () => {
    if (quantity > 1) {
      setquantity(quantity - 1);
    }
  };

  return (
    <div className="conatainer mt-100">
      <div className="row">
        <div className="col-6">
          <div className="details__image">
            <img src={`/images/${product.image}`} alt="name" />
          </div>
        </div>
        <div className="col-6">
          <div className="details__name">{product.name}</div>

          <div className="details__prices">
            <span className="details__actaul">
              {currencyFormatter.format(product.price, { code: "USD" })}
            </span>
            <span className="details__discount">
              {currencyFormatter.format(product.discountPrice, { code: "USD" })}
            </span>
          </div>

          <div className="details__info">
            <div className="details__incDec">
              <span className="dec" onClick={decQuantity}>
                <BiMinus />
              </span>
              <span className="quantity">{quantity}</span>
              <span className="inc" onClick={() => setquantity(quantity + 1)}>
                <BsPlus />
              </span>
              <button
                className="btn-default"
                onClick={() => {
                  dispatch({
                    type: "ADD TO CART",
                    payload: { product, quantity },
                  });
                  toast.success("successfully added to cart");
                }}
              >
                Add to cart
              </button>
            </div>
            <div className="details__p">
              <h4> Details About The Product :</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
