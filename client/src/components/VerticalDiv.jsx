import '../styles/VerticalDiv.css'

export default function VerticalDiv({title, para, photo}){
    return(
        <div>
            <h1  id="hero">{title}</h1>
            <p id="deets">{para}</p>
            <img id="img" src={photo} alt={photo} />
        </div>
    )
}

