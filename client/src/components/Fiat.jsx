import '../styles/Fiat.css'
import FiatComponents from './FiatComponents'

export default function Fiat(){
    return(
        <div className="Fiat">
            <div className='con'>
                <FiatComponents icon={"https://meld.fi/_next/static/media/security.41c34b7e.svg"} description={"MELD fiat services operate in regulated markets. All crypto services are provided by MELD Foundation."}/>
                <FiatComponents icon={"https://meld.fi/_next/static/media/bank.a701f22d.svg"} description={"Fiat funds are stored as per regulation with all money safeguarded by the Central Bank of Lithuania."}/>
                <FiatComponents icon={"https://meld.fi/_next/static/media/lock.1e4f65ee.svg"} description={"All crypto assets are held in user managed non-custodial wallets."}/>
            </div>

            <div className='con-deets'>
                <h1>Fiat Licensed & Regulated. </h1>
                <p>Easily move between fiat and crypto at the touch of a button.</p>

            </div>
        </div>
    )
}