import React, { useContext } from "react";
import "./Cartitem.css";
import { shopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

export default function Cartitems() {
  const { all_product, cartItems, removeFromcart, getTotalCartAmount } =
    useContext(shopContext);

  return (
    <>
      <h1 className="head">Shopping Cart</h1>
      <div className="cartitems">
        <div className="cartitems-format-main">
          <p>Product</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
        <hr />
        {all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div>
                <div className="cartitems-format cartitems-format-main {">
                  <img src={e.image} alt="" className="carticon-product-icon" />
                  <p>{e.name}</p>
                  <p> Rs. {e.new_price}</p>
                  <button className="cartitems-quantity">
                    {cartItems[e.id]}
                  </button>
                  <p>Rs. {e.new_price * cartItems[e.id]}</p>

                  <img
                    className="cartitems-remove-icon"
                    src={remove_icon}
                    onClick={() => {
                      removeFromcart(e.id);
                    }}
                    alt="Remove"
                    title="Remove The Item"
                  />
                </div>
              </div>
            );
          }
          return null;
        })}

        <div className="cartitems-down">
          <div className="cartitems-total">
            <h1>cart Totals</h1>
            <div>
              <div className="cartitems-total-item">
                <p>Subtotal</p>
                <p>Rs. {getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <h3>Total</h3>
                <h3>Rs.{getTotalCartAmount()}</h3>
              </div>
            </div>
            <button>Proceed To Checkout</button>
          </div>
          <div className="cartitems-promocode">
            <p>If you have a promo code , Enter it here</p>
            <div className="cartitems-promobox">
              <input type="text" placeholder="Coupon Code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
