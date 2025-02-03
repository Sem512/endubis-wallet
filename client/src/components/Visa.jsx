import '../styles/Visa.css'

export default function Visa({photo, sentence, para, info1_t, info2_t, info1, info2, info1Pic, info2Pic}){

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
                            <img src={info1Pic} alt="" />
                        </div>
                        <div>
                            <span>{info1_t}</span>
                            <p>{info1}</p>
                            </div>
                    </li>
                    <li>
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
