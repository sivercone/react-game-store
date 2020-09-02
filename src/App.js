import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import './scss/index.scss';
import { Header } from './components/index';
import { Catalog, Cart } from './pages/index';
import { setGames } from './redux/actions/games';

function App() {
   const dispatch = useDispatch();

   React.useEffect(() => {
      axios.get('http://localhost:3001/games').then(({ data }) => {
         dispatch(setGames(data));
      });
   }, []);

   return (
      <div>
         <Header />
         <Route path="/" component={Catalog} exact />
         <Route path="/cart" component={Cart} exact />
      </div>
   );
}

export default App;
