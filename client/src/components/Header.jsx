import '../styles/header.css'

export default function Header(){
    return(
        <header>
            <div id="logo">
               <img src={require('../images/Endubis - Horizontal Logo - White.png')} alt="fd" />
            </div>
        
        <ul>
        <li><a href="crash"><span className='link'>FIAT</span></a></li>
        <li><a href="crash"><span className='link'>CRYPTO</span></a></li>
        </ul>
        </header>
    )
}