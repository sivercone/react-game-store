import React from 'react';
import { Route } from 'react-router-dom';

import './scss/index.scss';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';

function App() {
   const [games, setGames] = React.useState([]);

   React.useEffect(() => {
      fetch('http://localhost:3000/db.json')
         .then((resp) => resp.json())
         .then((json) => {
            setGames(json.games);
         });
   }, []);

   return (
      <div>
         {/* <Route path="/" component={Catalog} exact /> */}
         <Route path="/" render={() => <Catalog items={games} />} exact />
         <Route path="/cart" component={Cart} exact />
      </div>
   );
}

export default App;
