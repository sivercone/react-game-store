import React from 'react';

import Header from '../components/Header';
import GameBlock from '../components/GameBlock';
import Sortpopup from '../components/Sortpopup';

const genreNames = ['All games', 'Action', 'Adventure', 'Racing', 'RPG', 'Shooter', 'Survival'];

function Catalog({ items }) {
   const [activeItem, setActiveItem] = React.useState(0);
   const [visiblePopup, setVisiblePopup] = React.useState(false);

   const linkToPopup = React.useRef();

   const toggleVisiblePopup = () => {
      setVisiblePopup(!visiblePopup);
   };

   const onSelectItem = (index) => {
      setActiveItem(index);
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

   const activeLabel = genreNames[activeItem];

   return (
      <div>
         <Header />

         <div className="catalog">
            <div className="container">
               <div className="catalog__top">
                  <h2>Catalog</h2>

                  {/* 'genre' */}
                  <div className="genre">
                     <ul>
                        {genreNames &&
                           genreNames.map((name, index) => (
                              <li
                                 className={activeItem === index ? 'active' : ''}
                                 onClick={() => onSelectItem(index)}
                                 key={index}>
                                 {name}
                              </li>
                           ))}
                     </ul>
                  </div>
                  <Sortpopup sortItems={['Release Date', 'Top Sellers', 'Alphabetical']} />
               </div>

               {/* 'genre --mobile' */}
               <div ref={linkToPopup}>
                  <div className="catalog__top --mobile" onClick={toggleVisiblePopup}>
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
                           {genreNames &&
                              genreNames.map((name, index) => (
                                 <li
                                    key={index}
                                    onClick={() => onSelectItem(index)}
                                    className={activeItem === index ? 'active' : ''}>
                                    {name}
                                 </li>
                              ))}
                        </ul>
                     </div>
                  )}
               </div>

               <div className="catalog__content">
                  {items.map((obj) => (
                     <GameBlock key={obj.id} {...obj} />
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}

export default Catalog;
///
