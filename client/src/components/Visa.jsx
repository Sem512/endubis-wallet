import '../styles/Visa.css'

export default function Visa(){
    const photo = "VISA CARD PIC"
    const sentence = "Be it for convenience or for privacy, the MELD debit card is a powerful tool."
    const para = "For those who want to spend and not worry about being blocked or frozen out of your account."
    const info1_t = "16 Currencies"
    const info2_t = "Low FX Fees"
    const info1 = "Send and receive EUR, USD, GBP, JPY, CHF, AUD, SDG, CAD, SEK, DKK, PLN, RON, HUF, HKD and AED."
    const info2 = "Convert between different fiat currencies and between fiat and crypto for as low as 0.5%."
    const info1Pic = "Cash Pic"
    const info2Pic = "Coint Pic"
    return (
        <div className='visa'>
            <div className='pic'>
                <h1>{photo}</h1>
            </div>
            <div className='info'>
                <h2>{sentence}</h2>
                <span>{para}</span>
                <ul>
                    <li>
                        <div>
                            <p>{info1Pic}</p>
                        </div>
                        <div>
                            <span>{info1_t}</span>
                            <p>{info1}</p>
                            </div>
                    </li>
                    <li>
                        <div>
                            <p>{info2Pic}</p>
                        </div>
                        <div>
                            <span>{info2_t}</span>
                            <p>{info2}</p>
                    </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
