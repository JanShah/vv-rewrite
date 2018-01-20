import React from 'react';
import Header from './components/Header'
import './App.css';
import { Routes } from './routes'
import {ProductMenu} from './components/ProductMenu'

const MainRoutes =()=><Routes />

const App=()=> {
  return (
  <div className="App">
    <Header />
    <ProductMenu />
    <MainRoutes />
  </div>
  );
}

export default App;
