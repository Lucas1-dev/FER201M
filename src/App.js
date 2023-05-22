import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Main from './components/Player/Main';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

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
