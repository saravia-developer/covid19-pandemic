import './App.scss';

import Main from './pages/main/Main';
import { Route, Routes } from 'react-router-dom';
import Territory from './pages/territory/Territory';
import PageNotFound from './pages/not-found/NotFound';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className='container-app'>
        <Routes>
          <Route caseSensitive path='/' element={<Main/>} />
          <Route caseSensitive path='/territory/:state' element={<Territory />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
