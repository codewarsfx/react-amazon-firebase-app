import React, { useContext } from "react";
import "./Product.css";
import { StateContext } from "./../../Context/StateProvider";

function Product({ id, title, image, price, rating, alt }) {
  const state = useContext(StateContext);

  const dispatch = state();
  // console.log("This is the basket >>> ", basket);
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        alt: alt,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>

        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>꙳</p>
            ))}
        </div>
      </div>
      <img src={image} alt={alt} />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
