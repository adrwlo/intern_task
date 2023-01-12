import React from 'react';
import ItemsTable from './components/ItemsTable';
import SearchInput from './components/SearchInput';
import {ItemProvider} from './ItemContext';

const App = () => {
  return (
    <div className="App">
      <ItemProvider>
        <SearchInput/>
        <ItemsTable/>
      </ItemProvider>
    </div>
  );
}

export default App;
