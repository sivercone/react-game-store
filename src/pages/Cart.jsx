import React from 'react';
import Header from '../components/Header';
import imgStatic from '../assets/superhot_mindControlDelete.jpg';

function Cart() {
   return (
      <div>
         <Header />
         <div className="content">
            <div className="container">
               <div className="container container--cart">
                  <div className="cart">
                     <h1 className="cart__maintitle">Your Cart</h1>
                     <div className="cart__top">
                        <span className="cart__product">
                           <h3>Product</h3>
                        </span>
                        <span className="cart__title">
                           <h3>Title</h3>
                        </span>
                        <span className="cart__genre">
                           <h3>Genre</h3>
                        </span>
                        <span className="cart__amount">
                           <h3>Amount</h3>
                        </span>
                        <span className="cart__delete">
                           <h3>Delete</h3>
                        </span>
                     </div>
                     <div className="content__items">
                        <div className="cart__item">
                           <img src={imgStatic} alt="" />
                           <span className="cart__title">SUPERHOT: Mind Control Delete</span>
                           <span className="cart__genre">Action</span>
                           <span className="cart__amount">12,99 $</span>
                           <svg
                              className="cart__delete"
                              xmlns="http://www.w3.org/2000/svg"
                              height="24"
                              viewBox="0 0 24 24"
                              width="24">
                              <path d="M0 0h24v24H0z" fill="none" />
                              <path
                                 d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                                 fill="#111"
                              />
                           </svg>
                        </div>
                        <div className="cart__item">
                           <img src={imgStatic} alt="" />
                           <span className="cart__title">SUPERHOT: Mind Control Delete</span>
                           <span className="cart__genre">Action</span>
                           <span className="cart__amount">12,99 $</span>
                           <svg
                              className="cart__delete"
                              xmlns="http://www.w3.org/2000/svg"
                              height="24"
                              viewBox="0 0 24 24"
                              width="24">
                              <path d="M0 0h24v24H0z" fill="none" />
                              <path
                                 d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                                 fill="#111"
                              />
                           </svg>
                        </div>
                        <div className="cart__item">
                           <img src={imgStatic} alt="" />
                           <span className="cart__title">SUPERHOT: Mind Control Delete</span>
                           <span className="cart__genre">Action</span>
                           <span className="cart__amount">12,99 $</span>
                           <svg
                              className="cart__delete"
                              xmlns="http://www.w3.org/2000/svg"
                              height="24"
                              viewBox="0 0 24 24"
                              width="24">
                              <path d="M0 0h24v24H0z" fill="none" />
                              <path
                                 d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                                 fill="#111"
                              />
                           </svg>
                        </div>
                     </div>
                     <div className="cart__total">
                        <p>Total: $71,80</p>
                     </div>
                     <div className="cart__buttons">
                        {/* <!-- <button className="button button--incart">Continue Shopping</button> --> */}
                        <button className="button button--incart">Buy</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Cart;
