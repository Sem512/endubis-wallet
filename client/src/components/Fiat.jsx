import '../styles/Fiat.css'
import FiatComponents from './FiatComponents'

export default function Fiat(){
    return(
        <div className="Fiat">
            <div className='con'>
                <FiatComponents icon={"First"} description={"MELD fiat services operate in regulated markets. All crypto services are provided by MELD Foundation."}/>
                <FiatComponents icon={"First"} description={"Fiat funds are stored as per regulation with all money safeguarded by the Central Bank of Lithuania."}/>
                <FiatComponents icon={"First"} description={"All crypto assets are held in user managed non-custodial wallets."}/>
            </div>

            <div>
                <h1>Fiat Licensed & Regulated. </h1>
                <p>Easily move between fiat and crypto at the touch of a button.</p>

            </div>
        </div>
    )
}