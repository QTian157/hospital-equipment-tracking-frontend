const StatusBadge = ({status})=>{
    const currensStatus = status.toLowerCase().replaceAll(" ","-");
    return (
        <span className={`status-badge ${currensStatus}`}>
            {status}
        </span>
    )
}

export default StatusBadge;