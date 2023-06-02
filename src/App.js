
import './App.css';
import Footer from './components/Footer/Footer';
import Detail from './components/Header/Detail';
import Navigation from './components/Navigation/Navigation';
import { Routes, Route  } from 'react-router-dom';
import Players from './components/Player/Players';

function App() {
  return (
    <>
    
    <Navigation/>
<Routes>
  <Route path='/' element={<Players/>}></Route>
    <Route path='/detail/:id' element={<Detail/>}></Route>
  

</Routes>
<Footer/>
    </>
  );
}

export default App;
