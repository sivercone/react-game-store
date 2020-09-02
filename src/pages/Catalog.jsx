import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Sortpopup, Genrepopup, GameBlock } from '../components/index';
import { setGenre } from '../redux/actions/filters';

const genreNames = ['All games', 'Action', 'Adventure', 'Racing', 'RPG', 'Shooter', 'Survival'];
const sortNames = [
   { name: 'Release Date', type: 'date' },
   { name: 'Top Sellers', type: 'popular' },
   { name: 'Alphabetical', type: 'asc' },
];

function Catalog() {
   const dispatch = useDispatch();
   const items = useSelector(({ games }) => games.items);

   const onSelectGenre = React.useCallback((index) => {
      dispatch(setGenre(index));
   }, []);

   return (
      <div className="catalog">
         <div className="container">
            <div className="catalog__top">
               <h2>Catalog</h2>

               <Sortpopup sortItems={sortNames} />
            </div>

            <Genrepopup genreItems={genreNames} onClickItem={onSelectGenre} />

            <div className="catalog__content">{items && items.map((obj) => <GameBlock key={obj.id} {...obj} />)}</div>
         </div>
      </div>
   );
}

export default Catalog;
///
