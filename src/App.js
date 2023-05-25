import Header from './components/Header';
import './styles/index.css';
import Footer from './components/Footer'
// import NotFound from './components/NotFound'
// import New from './components/New'

import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (<>
    <Header />
  <main className='container'>
   {/* <NotFound /> */}
   {/* <New /> */}
  </main>
  <Footer />
  </>
  );
}

export default App;
