import React from 'react';
import './App.scss';
import NavBar from './componets/Navbar/Navbar';
import ItemCounter from './componets/Button/counter';


function App() {
  return (
    <>
    <NavBar/>
    <ItemCounter init="0" min="0" max="20" onAdd={() => console.log("onAdd")} />
    </>
  );
}

export default App;
