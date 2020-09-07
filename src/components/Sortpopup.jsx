import React from 'react';
import PropTypes from 'prop-types';

const Sortpopup = React.memo(function Sortpopup({ sortItems, activeSort, onClickSort }) {
   const [visiblePopup, setVisiblePopup] = React.useState(false);

   const linkToSort = React.useRef();
   const activeLabel = sortItems.find((obj) => obj.type === activeSort).name;

   const toggleVisiblePopup = () => {
      setVisiblePopup(!visiblePopup);
   };

   const onSelectItem = (index) => {
      onClickSort(index);
      setVisiblePopup(false);
   };

   const nonPopupClick = (event) => {
      const path = event.path || (event.composedPath && event.composedPath());
      if (!path.includes(linkToSort.current)) {
         setVisiblePopup(false);
      }
   };

   React.useEffect(() => {
      document.body.addEventListener('click', nonPopupClick);
   }, []);

   return (
      <div className="sort" ref={linkToSort}>
         <div className="sort__label" onClick={toggleVisiblePopup}>
            <b>Sort By:</b>
            <span>{activeLabel}</span>
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
            <div className="sort__popup">
               <ul>
                  {sortItems &&
                     sortItems.map((obj, index) => (
                        <li onClick={() => onSelectItem(obj)} key={index} className={activeSort === obj.type ? 'active' : ''}>
                           {obj.name}
                        </li>
                     ))}
               </ul>
            </div>
         )}
      </div>
   );
});

Sortpopup.propTypes = {
   sortItems: PropTypes.array.isRequired,
};

Sortpopup.defaultProps = {
   sortItems: [],
};

export default Sortpopup;
