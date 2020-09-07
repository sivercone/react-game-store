// сделать кнопку когда при нажатии купить отобразитмся убрать из корзины
// приплести редакс плюс минус при нажатии на кнопку добавить в корзину и убрать

import React from 'react';

function GameBlock({ id, imageUrl, title, devname, price, gameToCart, onRemove, genreItems, itemGenre }) {
   const [displayCartBtn, setDisplayCartBtn] = React.useState(false);

   const RemoveFromCart = () => {
      onRemove(id);
   };

   const onAddToCart = () => {
      const obj = { id, imageUrl, title, price, genre: genreItems[itemGenre] };
      if (!displayCartBtn) {
         setDisplayCartBtn(!displayCartBtn);
         gameToCart(obj);
      } else {
         gameToCart(obj);
         setDisplayCartBtn(!displayCartBtn);
         RemoveFromCart();
      }
   };

   return (
      <div className="game_block">
         <div>
            <img src={imageUrl} alt="" />
            <button onClick={onAddToCart} className="button to_cart" href="#">
               <p className={!displayCartBtn ? 'to_cart__text' : 'to_cart__text --remove'}>
                  {!displayCartBtn ? 'Add To Cart' : 'Remove'}
               </p>
            </button>
         </div>
         <div className="game_block__title">
            <h3>{title}</h3>
            <p>{devname}</p>
            <span>{price} $</span>
         </div>
      </div>
   );
}

export default GameBlock;
