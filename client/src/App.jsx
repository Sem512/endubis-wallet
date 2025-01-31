import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Visa from './components/Visa';

function App() {
  return (
    <div className="App">
      <Header/>
      <LandingPage/>
      <Visa />
    </div>
  );
}

export default App;
