export default function FiatComponents({icon,description}){
    return(
        <div className="FiatComponents">
            <img src={icon} alt="" />
            <p>{description}</p>
        </div>
    )
}