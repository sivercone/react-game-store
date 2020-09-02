import React from 'react';

function GameBlock({ imageUrl, title, devname, price }) {
   return (
      <div className="game_block">
         <div>
            <img src={imageUrl} alt="" />
            <button className="button to_cart" href="#">
               <p className="to_cart__text">Add To Cart</p>
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
