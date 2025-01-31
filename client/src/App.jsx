import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import OneAccount from './components/OneAccount';
import Visa from './components/Visa';
import Fiat from './components/Fiat';
import Phones from './components/Phones';

function App() {
  const lst = {photo:"VISA CARD PIC", 
                sentence:"Be it for convenience or for privacy, the MELD debit card is a powerful tool.",
                para:"For those who want to spend and not worry about being blocked or frozen out of your account.",
                info1_t:"16 Currencies",
                info2_t:"Low FX Fees",
                info1:"Send and receive EUR, USD, GBP, JPY, CHF, AUD, SDG, CAD, SEK, DKK, PLN, RON, HUF, HKD and AED.",
                info2:"Convert between different fiat currencies and between fiat and crypto for as low as 0.5%.",
                info1Pic:"Cash Pic",
                info2Pic:"Coint Pic"
              }
  const man = {photo:"GUY PIC", 
    sentence:"Own your share of the crypto world and earn passive income.",
    para:"You can stake your crypto and earn up to 8%* APY in passive income. Make your crypto work for you.",
    info1_t:"Token Staking",
    info2_t:"Earn up to 8.4%* APY",
    info1:"Make the most out of your tokens and stake them to earn a yield on them while in your wallet.",
    info2:"Each token has a different yielding amount based on many factors. We support staking on many chains.",
    info1Pic:"Cash Pic",
    info2Pic:"Coint Pic"
              }
  return (
    <div className="App">
      <Header/>
      <LandingPage/>
      <OneAccount/>
      <Visa photo={lst.photo} sentence={lst.sentence} para={lst.para} info1_t={lst.info1_t} info2_t={lst.info2_t} info1={lst.info1} info2={lst.info2} info1Pic={lst.info1Pic} info2Pic={lst.info2Pic}/>
      <Phones/>
      <Visa photo={man.photo} sentence={man.sentence} para={man.para} info1_t={man.info1_t} info2_t={man.info2_t} info1={man.info1} info2={man.info2} info1Pic={man.info1Pic} info2Pic={man.info2Pic}/>
      <Fiat />
    </div>
  );
}

export default App;
