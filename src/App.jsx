import { useState } from 'react';
import './App.scss';

import Main from './pages/main/Main';
import Header from './components/header/Header';
import TodayRegister from './components/todayRegister/TodayRegister';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App
