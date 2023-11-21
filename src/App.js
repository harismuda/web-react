import './App.css';
import Home from './Component/Home'
import Navbar from './Component/Navbar'
import About from './Component/About'
import Contact from './Component/Contact'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
