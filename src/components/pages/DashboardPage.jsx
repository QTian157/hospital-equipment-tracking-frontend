import DashboardCard from "../common/DashboardCard";
import ErrorPage from "./ErrorPage";
import LoadingPage from "./LoadingPage";
import { useNavigate } from "react-router";

const DashboardPage = ({equipmentList, isLoading, equipListError}) =>{
    const navigate = useNavigate();
    
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

    const handleGoToEquipmentList = ()=>{
        navigate('/equipmentList');
    }

    
    return (
        <main>

            <div className="main-content">
                <h1>Dashboard</h1>
                <div className="dashboard-cards">
                    <DashboardCard 
                        title="Total" 
                        number={totalEquip}
                        clickable={true}
                        handleClick={handleGoToEquipmentList}
                    />
                    <DashboardCard 
                        title="Available" 
                        number={availableEquip}
                        clickable={true}
                        handleClick={handleGoToEquipmentList}
                    />
                    <DashboardCard 
                        title="In Use" 
                        number={inUseEquip}
                        clickable={true}
                        handleClick={handleGoToEquipmentList}
                    
                    />
                    <DashboardCard 
                        title="Under Maintenance" 
                        number={maintenanceEquip}
                        clickable={true}
                        handleClick={handleGoToEquipmentList}
                    />
                </div>
            </div>
        </main>
    )
}

export default DashboardPage;