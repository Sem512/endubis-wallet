import VerticalDiv from "./VerticalDiv"

export default function LandingPage(){
    return(
        <div className='landing-page'>
            <VerticalDiv title={"Your"} para={"Become independent. A Neobank for Digital Money"} photo={"wallet"}/>
            <VerticalDiv title={"Money"} para={"making fiat and crypto simple and accessible"} photo={"Phone"}/>
            <VerticalDiv title={"Your"} para={"Financial freedom built on a non-custodial crypto wallet"} photo={"chart"}/>
            <VerticalDiv title={"Way"} para={"It's your money, take control"} photo={"coin"}/>
        </div>
    )
}