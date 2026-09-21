import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import HomePage from './pages/HomePage';
import SearchLocation from './pages/SearchLocation';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<HomePage />}>
      </Route>
      <Route path='/search' element = {<SearchLocation />}>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
