import OneAccountFeatures from "./OneAccountFeatures"
import "../styles/OneAccount.css"

export default function OneAccount(){
    return(
        <div className="OneAccount">
            <div>
                <h1>One Account.</h1>
            </div>

            <div>
                <OneAccountFeatures icon={"First"} title={"Fiat"} description={"Your fiat multi-currency account allows you to hold, transfer & exchange any of the 16 currencies MELD supports."}/>
                <OneAccountFeatures icon={"First"} title={"Crypto"} description={"You can send, receive, transfer and bridge more than 200 crypto currencies on leading blockchains from your crypto wallet."}/>
                <OneAccountFeatures icon={"First"} title={"Buy/Sell"} description={"Buy, sell and exchange crypto with fiat safely 24 hours a day."}/>
                <OneAccountFeatures icon={"First"} title={"Exchange"} description={"Exchange, swap and convert both fiat and crypto in the same app with attractive rates."}/>
                <OneAccountFeatures icon={"First"} title={"Earn"} description={"Put your crypto to work by staking it to earn a yield of up to 8%*."}/>
                <OneAccountFeatures icon={"First"} title={"Spend"} description={"Never worry about your card being rejected or frozen. The MELD card will let you manage your spending."}/>
            </div>
        </div>
    )
} 