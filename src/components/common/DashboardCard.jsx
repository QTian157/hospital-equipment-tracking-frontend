const DashboardCard = ({title, number, clickable, handleClick})=>{
    return (
        <div 
            className= {`card ${clickable ? 'clickable-card' : ''}`}
            onClick={clickable ? handleClick : undefined}
        >
            <h3>{title}</h3>
            <p className="card-number">{number}</p>
        </div>
    )
}

export default DashboardCard;