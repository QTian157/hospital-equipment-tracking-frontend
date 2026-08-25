const DashboardCard = ({title, number, children})=>{
    return (
        <div>
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    )
}

export default DashboardCard;