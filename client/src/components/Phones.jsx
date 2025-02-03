import { Parallax } from 'react-scroll-parallax';
import '../styles/phones.css';

export default function Phones() {
    return (
        <div className='phones'>
            
            <div className='pic-holder'>
                
                    <img 
                        src="https://meld.fi/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmobile_preview.bf6c3cea.png&w=1920&q=75"
                        alt="Phones"
                    />
                
            </div>
            <div className="phones-info">
                <h2> one account for money and crypto at your fingertips.</h2>
                <p>With the MELD mobile app you can safely manage your fiat payments, debit cards and crypto wallet, all in one place.</p>
            </div>
           
        </div>
    );
}
