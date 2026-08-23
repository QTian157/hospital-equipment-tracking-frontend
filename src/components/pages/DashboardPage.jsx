import DashboardCard from "../common/DashboardCard";
import ErrorPage from "./ErrorPage";
import LoadingPage from "./LoadingPage";

const DashboardPage = ({equipmentList, isLoading, equipListError}) =>{
    
    if (isLoading) {
        return (<LoadingPage dataName={'equipmentList'}/>)
    }else if (equipListError) {
        return (
        <ErrorPage>
            {equipListError}
        </ErrorPage>
        )
    }
    // console.log(equipmentList);
    const totalEquip = equipmentList.length;
    const availableEquip = equipmentList.filter((e) => e.status === "AVAILABLE").length;
    const inUseEquip = equipmentList.filter((e) => e.status === "IN USE").length;
    const maintenanceEquip = equipmentList.filter((e) => e.status === "UNDER MAINTENANCE").length;

    
    return (
        <div>
            <h1>Dashboard</h1>
            <DashboardCard title="Total: " number={totalEquip}/>
            <DashboardCard title="Available: " number={availableEquip}/>
            <DashboardCard title="In Use: " number={inUseEquip}/>
            <DashboardCard title="Under Maintenance: " number={maintenanceEquip}/>
        </div>
    )
}

export default DashboardPage;