import React, { Component } from 'react';
import Header from './components/Header'
import './App.css';
import { Routes } from './routes'
import {ProductMenu} from './components/ProductMenu'
import {Breadcrumb} from './components/Breadcrumb'
import Footer from './components/Footer'
class App extends Component {
 render() {
   return (
   <div className="App">
     <Header />
     <Breadcrumb />
     <ProductMenu />
     <Routes />
     <Footer />
   </div>
   );
 } 
}

export default App;
