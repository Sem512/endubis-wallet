import '../styles/VerticalDiv.css'

export default function VerticalDiv({title, para, photo}){
    return(
        <div>
            <span  id="hero">{title}</span>
            <p id="deets">{para}</p>
            <img id="img" src={photo} alt={photo} />
        </div>
    )
}

