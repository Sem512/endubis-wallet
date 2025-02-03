import VerticalDiv from "./VerticalDiv"
import "../styles/LandingPage.css"

export default function LandingPage(){
    return(
        <div className='landing-page'>
            <VerticalDiv title={"Your"} para={"Become independent. A Neobank for Digital Money"} photo={"https://meld.fi/_next/static/media/card.88bb1030.svg"}/>
            <VerticalDiv title={"Money"} para={"Making fiat and crypto simple and accessible"} photo={"https://meld.fi/_next/static/media/mobile.eaea3505.svg"}/>
            <VerticalDiv title={"Your"} para={"Financial freedom built on a non-custodial crypto wallet"} photo={"https://meld.fi/_next/static/media/chart.11cdf537.svg"}/>
            <VerticalDiv title={"Way."} para={"It's your money, take control"} photo={"https://meld.fi/_next/static/media/currency.6dfb868f.svg"}/>
        </div>
    )
}