import React from 'react';

function ModalWindow({ id, onRemove, toggle }) {
   const clickRemove = () => {
      onRemove(id);
   };
   return (
      <div className="modal_bg">
         <div className="modal_window">
            <div className="modal_window__content">
               <div className="modal_window__txt">Are you sure to delete this game from your cart?</div>
               <div className="modal_window__buttons">
                  <button onClick={clickRemove} className="button button--modalwindow">
                     Yes
                  </button>
                  <button onClick={toggle} className="button button--modalwindow">
                     Cancel
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ModalWindow;
