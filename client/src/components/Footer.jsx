import '../styles/Footer.css'

export default function Footer(){
    return(
        <footer>
            <div className='Endubis'>
                <img src={require("../images/Endubis - Vertical Logo - Black.png")} alt="Endubis" />
                <div>
                    <p><strong>Legal</strong></p>
                    <p><a href=""><strong className='link'>Terms</strong></a></p>
                </div>

                <div>
                    <p><strong>Contact Us</strong></p>
                    <p>info@meld.com</p>
                </div>
            </div>
            <div className='trademarks'>
                <div className='rights'>
                    <p><span>&copy;</span>  MELD Finance 2023. All rights reserved.</p>
                    <p>MELD non-custodial cryptocurrency wallet and associated blockchain protocols are provided by MELD Ltd. (“MELD Foundation”). UAB MELD Finance, trading under the name “MELD.Fi” is a company incorporated and registered in Lithuania with company number 306236494 with a registered office at Girulių g. 10-201, LT-12112 Vilnius, Lithuania. MELD X UAB, through a partnership with a virtual asset service provider incorporated and registered in Lithuania will provide services of virtual currency exchange, purchase and/or sale for remuneration and services of management of custodian virtual currency wallets.</p>
                    <p>Figures are not indicative of past performance or future prices; subject to applicable terms and conditions. ¹ The percentage displayed on this website is subject to market conditions and may change without prior notice.</p>
                    </div>
                <div className='purpose'>
                    <p>The purpose of this website is solely to display information regarding the products and services available on the MELD App. It is not intended to offer access to any of such products and services. You may obtain access to such products and services on the MELD App as and when they are available. The contents of this website and/or any other written materials shall not constitute an offer to sell or the solicitation of an offer to buy nor shall there be any sale of any financial or investment products in any jurisdiction in which such offer, solicitation or sale would be unlawful prior to registration or qualification under the financial or securities laws of any such jurisdiction. No person should treat the contents of this website and/or any other written materials as advice relating to legal, tax or investment matters and are advised to consult their own professional advisers before signing up on the MELD.Fi website.</p>
                </div>
            </div>
        </footer>
    )
}