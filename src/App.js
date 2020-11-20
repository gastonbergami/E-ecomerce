import React from 'react';
import './App.scss';
import NavBar from './componets/Navbar/Navbar';
import ItemCounter from './componets/Button/counter';
import Items from './componets/Items/items';
import Home from './container/home/home';
import ItemList from './componets/itemList/itemList';


function App() {
  return (
    <>
    <NavBar/>
    <ItemCounter init="0" min="0" max="20" onAdd={() => console.log("onAdd")} />
    <Items/>
    <Home/>
    <ItemList/>
    </>
  );
}

export default App;
