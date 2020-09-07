import React from 'react';

const Genrepopup = React.memo(function Genrepopup({ genreItems, onClickGenre, activeGenre }) {
   const [visiblePopup, setVisiblePopup] = React.useState(false);

   const linkToPopup = React.useRef();

   const toggleVisiblePopup = () => {
      setVisiblePopup(!visiblePopup);
   };

   const onSelectItem = (index) => {
      onClickGenre(index);
      setVisiblePopup(false);
   };

   const nonPopupClick = (event) => {
      const path = event.path || (event.composedPath && event.composedPath());
      if (!path.includes(linkToPopup.current)) {
         setVisiblePopup(false);
      }
   };

   React.useEffect(() => {
      document.body.addEventListener('click', nonPopupClick);
   }, []);

   const activeLabel = genreItems[activeGenre];

   return (
      <div ref={linkToPopup}>
         <div className="catalog__top --genre" onClick={toggleVisiblePopup}>
            <h2>{activeLabel}</h2>

            <svg
               className={visiblePopup ? 'rotated' : ''}
               xmlns="http://www.w3.org/2000/svg"
               height="24"
               viewBox="0 0 24 24"
               width="24">
               <path d="M0 0h24v24H0z" fill="none" />
               <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" fill="#7e70ff" />
            </svg>
         </div>
         {visiblePopup && (
            <div className="genre__popup">
               <ul>
                  {genreItems &&
                     genreItems.map((name, index) => (
                        <li key={index} onClick={() => onSelectItem(index)} className={activeGenre === index ? 'active' : ''}>
                           {name}
                        </li>
                     ))}
               </ul>
            </div>
         )}
      </div>
   );
});

export default Genrepopup;
