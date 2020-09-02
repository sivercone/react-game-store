import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Sortpopup, Genrepopup, GameBlock, LoadingBlock } from '../components/index';
import { setGenre, setSortBy } from '../redux/actions/filters';
import { fetchGames } from '../redux/actions/games';

const genreNames = ['All games', 'Action', 'Adventure', 'Racing', 'RPG', 'Shooter', 'Survival'];
const sortNames = [
   { name: 'Release Date', type: 'date', order: 'asc' },
   { name: 'Top Sellers', type: 'rating', order: 'desc' },
   { name: 'Alphabetical', type: 'title', order: 'asc' },
   { name: 'Price', type: 'price', order: 'asc' },
];

function Catalog() {
   const dispatch = useDispatch();
   const items = useSelector(({ games }) => games.items);
   const isLoaded = useSelector(({ games }) => games.isLoaded);
   const { genre, sortBy } = useSelector(({ filters }) => filters);

   React.useEffect(() => {
      dispatch(fetchGames(genre, sortBy)); // запрос бд
   }, [genre, sortBy]);

   const onSelectGenre = React.useCallback((index) => {
      dispatch(setGenre(index));
   }, []);

   const onSelectSort = React.useCallback((type) => {
      dispatch(setSortBy(type));
   }, []);

   return (
      <div className="catalog">
         <div className="container">
            <div className="catalog__top">
               <h2>Catalog</h2>

               <Sortpopup sortItems={sortNames} onClickSort={onSelectSort} activeSort={sortBy.type} />
            </div>

            <Genrepopup genreItems={genreNames} onClickGenre={onSelectGenre} activeGenre={genre} />

            <div className="catalog__content">
               {isLoaded
                  ? items.map((obj) => <GameBlock key={obj.id} {...obj} />)
                  : Array(8)
                       .fill(0)
                       .map((_, index) => <LoadingBlock key={index} />)}
            </div>
         </div>
      </div>
   );
}

export default Catalog;
