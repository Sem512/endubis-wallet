

export default function OneAccountFeatures({icon,title,description}){
return(
    <div className="OneAccountFeatures">
        <img id="icon" src={icon}/>
        <p>{title}</p>
        <p>{description}</p>
    </div>
)
}