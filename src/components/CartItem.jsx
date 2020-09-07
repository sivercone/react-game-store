import React from 'react';
import { ModalWindow } from './index';

function CartItem({ id, imageUrl, title, price, genre, onRemove }) {
   const [displayModal, setDisplayModal] = React.useState(false);

   const toggleModal = () => {
      setDisplayModal(!displayModal);
   };

   return (
      <div className="cart__item">
         {displayModal ? <ModalWindow id={id} onRemove={onRemove} toggle={toggleModal} /> : ''}
         <img className={displayModal ? 'active' : ''} src={imageUrl} alt="" />
         <div className="cart__titles--mobile">
            <span className="cart__title--mobile">{title}</span>
            <span className="cart__genre--mobile">{genre}</span>
         </div>
         <span className="cart__title">{title}</span>
         <span className="cart__genre">{genre}</span>
         <span className="cart__amount">{price} $</span>
         <svg
            onClick={toggleModal}
            className="cart__delete --svg"
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
   );
}

export default CartItem;
