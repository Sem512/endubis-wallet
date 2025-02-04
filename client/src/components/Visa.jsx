import '../styles/Visa.css'
import { Parallax } from 'react-scroll-parallax';

export default function Visa({photo, sentence, para, info1_t, info2_t, info1, info2, info1Pic, info2Pic}){

    return (
        <div className='visa'>
            <div className='pic'>
                
            </div>
            <div className='info'>
                <h2>{sentence}</h2>
                <span>{para}</span>
                <ul>
                    <li id="res">
                        <div>
                            <img src={info1Pic} alt="" />
                        </div>
                        <div>
                            <span>{info1_t}</span>
                            <p>{info1}</p>
                            </div>
                    </li>
                    <li id="res">
                        <div>
                            <img src={info2Pic} alt="" />
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
