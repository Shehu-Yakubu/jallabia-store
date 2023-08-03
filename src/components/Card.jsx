const Card = (props) => {
    return (
        <div className="card">
            <div className="card--list">
                <img 
                    src={new URL(`../assets/images/${props.db.jallababImg}`, import.meta.url).href} 
                    className="card--image"
                />
                <div className="card--details">
                    <h3 className="card-title">{props.db.name}</h3>
                    <p>{props.db.description}</p>
                    <p>{props.db.price}</p>
                </div>
            </div>
        </div>
    )
}

export default Card