import React from 'react';
import Header from './components/Header'
import './App.css';
import { Routes } from './routes'
import {ProductMenu} from './components/ProductMenu'
import {Breadcrumb} from './components/Breadcrumb'

const App=()=> {
  // console.log(Breadcrumb())
  return (
  <div className="App">
    <Header />
    <Breadcrumb />
    <ProductMenu />
    <Routes />
  </div>
  );
}

export default App;
