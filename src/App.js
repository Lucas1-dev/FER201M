import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Players from './components/Player/Players';
import Main from './components/Main';

function App() {
  return (
    <div className="App">

    <Navigation/>
    <Main/>
    <Footer/>

    </div>
  );
}

export default App;
