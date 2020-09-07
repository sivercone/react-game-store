import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { removeCartItem } from '../redux/actions/cart';
import { CartItem } from '../components/index';

function Cart() {
   const dispatch = useDispatch();
   const { items, totalPrice, totalCount } = useSelector(({ cart }) => cart);

   const gamesInCart = Object.keys(items).map((key) => {
      return items[key].items[0];
   });

   const onRemoveCartItem = (id) => {
      dispatch(removeCartItem(id));
   };

   return (
      <div className="content">
         <div className="container">
            <div className="container container--cart">
               {totalCount ? (
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
                        {gamesInCart.map((obj) => (
                           <CartItem
                              key={obj.id}
                              id={obj.id}
                              imageUrl={obj.imageUrl}
                              title={obj.title}
                              price={obj.price}
                              genre={obj.genre}
                              onRemove={onRemoveCartItem}
                           />
                        ))}
                     </div>
                     <div className="cart__total">
                        <p>Total: ${totalPrice}</p>
                     </div>
                     <div className="cart__buttons">
                        {/* <button className="button button--incart">Continue Shopping</button> */}
                        <button className="button button--incart">Buy</button>
                     </div>
                  </div>
               ) : (
                  <div className="cart cart--empty">
                     <h1 className="cart__maintitle">Your shopping cart is empty</h1>
                     <p className="cart__txtEmpty">Please add some game to continue</p>
                     <Link to="/">
                        <button className="button button--incart">Continue Shopping</button>
                     </Link>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
}

export default Cart;
