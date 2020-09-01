import React from 'react';

function Sortpopup({ sortItems }) {
   const [visiblePopup, setVisiblePopup] = React.useState(false);
   const [activeItem, setActiveItem] = React.useState(0);

   const linkToSort = React.useRef();

   const toggleVisiblePopup = () => {
      setVisiblePopup(!visiblePopup);
   };

   const onSelectItem = (index) => {
      setActiveItem(index);
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

   const activeLabel = sortItems[activeItem];

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
                     sortItems.map((name, index) => (
                        <li onClick={() => onSelectItem(index)} key={index} className={activeItem === index ? 'active' : ''}>
                           {name}
                        </li>
                     ))}
               </ul>
            </div>
         )}
      </div>
   );
}

export default Sortpopup;
