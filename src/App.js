import logo from './logo.svg';
import './App.css';
import Intro from './components/intro/intro';
import Landing from './components/landing/landing';
import Skindisease from './components/skindisease/skindisease';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Skinmonitoring from './components/skinmonitoring/skinmonitoring';
import Skinopedia from './components/skinopedia/skinopedia';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Intro/>}/>
          <Route exact path='/landing' element={<Landing/>}/>
          <Route exact path='/skindisease' element={<Skindisease/>}/>
          <Route exact path='/skinmonitoring' element={<Skinmonitoring/>}/>
          <Route exact path='/skinopedia' element={<Skinopedia/>}/>
        </Routes>
      </div>
    </Router>
   
  );
}

export default App;
