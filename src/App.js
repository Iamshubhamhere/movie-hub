import Header from './components/Header';
import './styles/index.css';
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import New from './components/New'
import Movies from './components/Movies'
import Info from './components/Info'
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (<>
    <Header />
  <main className='container'>
  <Routes>
          <Route exact path="/movie-hub"  element= {<Movies />} />
          <Route exact path="/movie/:selectedMovie" element= {<Info />} />
          <Route exact path="/New" element= {<New />} />
          <Route path="*" element={<NotFound />} />
  </Routes>
  </main>
  <Footer />
  </>
  );
}

export default App;
