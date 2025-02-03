import OneAccountFeatures from "./OneAccountFeatures"
import "../styles/OneAccount.css"

export default function OneAccount(){
    return(
        <div className="OneAccount">
            <div>
                <h1>One Account.</h1>
            </div>

            <div>
                <OneAccountFeatures icon={"https://meld.fi/_next/static/media/fiat_red.2d322b23.svg"} title={"Fiat"} description={"Your fiat multi-currency account allows you to hold, transfer & exchange any of the 16 currencies MELD supports."}/>
                <OneAccountFeatures icon={"https://meld.fi/_next/static/media/crypto_red.56f4418a.svg"} title={"Crypto"} description={"You can send, receive, transfer and bridge more than 200 crypto currencies on leading blockchains from your crypto wallet."}/>
                <OneAccountFeatures icon={"https://meld.fi/_next/static/media/buy_sell.82359e89.svg"} title={"Buy/Sell"} description={"Buy, sell and exchange crypto with fiat safely 24 hours a day."}/>
                <OneAccountFeatures icon={"https://meld.fi/_next/static/media/exchange_red.8ecfca3c.svg"} title={"Exchange"} description={"Exchange, swap and convert both fiat and crypto in the same app with attractive rates."}/>
                <OneAccountFeatures icon={"https://meld.fi/_next/static/media/earn_red.050a8fd9.svg"} title={"Earn"} description={"Put your crypto to work by staking it to earn a yield of up to 8%*."}/>
                <OneAccountFeatures icon={"https://meld.fi/_next/static/media/card_red.280b602b.svg"} title={"Spend"} description={"Never worry about your card being rejected or frozen. The MELD card will let you manage your spending."}/>
            </div>
        </div>
    )
} 