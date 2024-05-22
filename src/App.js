
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home'
import Contact from './Contact'
import About from './About'
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/about' element={<About/>}></Route>
    </Routes>
    </>
  );
}

export default App;
