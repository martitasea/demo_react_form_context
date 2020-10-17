import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import {MyProvider} from './components/myContext';

function App() {

  const [dish, changeDish]=useState("Que quieres comer:")
  const [address, changeAddress]=useState("Dónde estás:")
  const [dist, changeDist]=useState("A que distancia estás:")
  const [price, changePrice]=useState("De que rango de precio")

  return (
    <MyProvider value={{dish, changeDish, address, changeAddress, dist, changeDist,price, changePrice}}>
    <div className="App">
        <Header/>
        <Form/>
    </div>
    </MyProvider>
  );
}

export default App;
