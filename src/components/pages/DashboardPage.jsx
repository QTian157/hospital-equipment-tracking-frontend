import DashboardCard from "../common/DashboardCard";

const DashboardPage = ({equipmentList}) =>{
    const totalEquip = equipmentList.length;
    const availableEquip = equipmentList.filter((e) => e.status === "AVAILABLE").length;
    const inUseEquip = equipmentList.filter((e) => e.status === "IN USE").length;
    const maintenanceEquip = equipmentList.filter((e) => e.status === "UNDER MAINTENANCE").length;
    
    return (
        <div>
            <h1>Dashboard</h1>

            <p>Total: {totalEquip}</p>
            <p>Available: {availableEquip}</p>
            <p>In Use: {inUseEquip}</p>
            <p>Under Maintenance: {maintenanceEquip}</p>
            <DashboardCard />
        </div>
    )
}

export default DashboardPage;