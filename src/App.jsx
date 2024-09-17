import { useState } from 'react';
import './App.scss';

import Main from './pages/main/Main';
import { Route, Routes } from 'react-router-dom';
import Territory from './pages/territory/Territory';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route caseSensitive path='/' element={<Main/>} />
        <Route caseSensitive path='/territory/:state' element={<Territory />} />
      </Routes>
    </>
  )
}

export default App
