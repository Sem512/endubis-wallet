import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import OneAccount from './components/OneAccount';

function App() {
  return (
    <div className="App">
      <Header/>
      <LandingPage/>
      <OneAccount/>
    </div>
  );
}

export default App;
