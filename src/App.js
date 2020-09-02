import React from 'react';
import { Route } from 'react-router-dom';

import './scss/index.scss';
import { Header } from './components/index';
import { Catalog, Cart } from './pages/index';

function App() {
   return (
      <div>
         <Header />
         <Route path="/" component={Catalog} exact />
         <Route path="/cart" component={Cart} exact />
      </div>
   );
}

export default App;
