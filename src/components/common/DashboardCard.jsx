import StatusBadge from "../statusBadge/StatusBadge.jsx"

const DashboardCard = ({title, number, clickable, handleClick})=>{
    return (
        <div 
            className= {`card ${clickable ? 'clickable-card' : ''}`}
            onClick={clickable ? handleClick : undefined}
        >
            <h3>{title &&<StatusBadge status={title}/>}</h3>
            <p className="card-number">{number}</p>
        </div>
    )
}

export default DashboardCard;