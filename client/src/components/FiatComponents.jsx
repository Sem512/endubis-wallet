export default function FiatComponents({icon,description}){
    return(
        <div className="FiatComponents">
            <span>{icon}</span>
            <p>{description}</p>
        </div>
    )
}