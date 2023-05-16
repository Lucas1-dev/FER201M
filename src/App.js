import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Players from './components/Player/Players';

function App() {
  return (
    <div className="App">

    <Navigation/>
    <Players/>
    <Footer/>

    </div>
  );
}

export default App;
