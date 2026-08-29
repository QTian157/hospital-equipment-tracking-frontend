import { useNavigate, useParams } from 'react-router';
import ErrorPage from '../ErrorPage';
import GoBack from '../../common/GoBack';
import LoadingPage from '../LoadingPage';
import { useState } from "react";
import EquipDeleteConfirmation from './EquipDeleteConfirmation.jsx'
import MaintenanceRecord from '../../../classes/MaintenanceRecord.js';
import Button from '../../forms/inputs/Button.jsx'


const EquipmentDetailPage = ({equipmentList, isLoading, equipListError, setEquipmentList, maintenanceRecords,maintenanceError})=>{
    // console.log(equipmentList);
    // console.log(maintenanceRecords);

    const {id} = useParams();

    const navigate = useNavigate();

    const handleGoToDashboardPage = () => {
        navigate('/');
    };

    const handleGoToEquipmentListPage = () => {
        navigate('/equipmentList');
    };

    const handleGoToEquipmentEditPage = ()=>{
        navigate(`/equipment/details/${id}/edit`)
    }
    const handleShowDeleteModal = ()=> {
        setShowDeleteModal(true)
    }

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    

    if (isLoading){
        return (<LoadingPage dataName={'equipmentDetail'}/>)
    }else if(equipListError){
        // all equipment list error -> go back to dashboard page
        return (
            <ErrorPage>
                {equipListError}
                <GoBack text={'Return Dashboard'} handleClick={handleGoToDashboardPage} />
            </ErrorPage>
        )
    } else if (maintenanceError) {
        return (
            <ErrorPage>
                {maintenanceError}
                <GoBack text={'Return Dashboard'} handleClick={handleGoToDashboardPage} />
            </ErrorPage>
        )
    }else {
        const equip = equipmentList.find((equip)=> String(equip.id) === id);
        if (!equip) {
            // equipment not found -> go back to equipment List page
            return(
                <ErrorPage>
                    <p>Sorry, that equipment does not exist!</p>
                    <GoBack text={'View All Equipments'} handleClick={handleGoToEquipmentListPage} />
                </ErrorPage>
            );
        } else {
            const equipMaintenanceRecords = maintenanceRecords.filter((record) => record.equipmentId === equip.id);
            if (!equipMaintenanceRecords){
                return (
                    <div>
                        <h2>No Records show up.</h2>
                    </div>
                )
            }
            return(
                <main>
                    <div className="main-content">
                        <h1>
                            detail page
                        </h1>
                        <div className="detail-info">
                            <p> NAME: {equip.name}</p>
                            <p> ASSET TAG: {equip.assetTag}</p>
                            <p> STATUS: {equip.status}</p>
                            <h3>EQUIPMENT DETAIL INFORMATION</h3>
                            <p> TYPE: {equip.type}</p>
                            <p> CATEGORY: {equip.category}</p>
                            <p> SERIAL NUMBER: {equip.serialNumber}</p>
                            <p> MOBILE: {equip.mobile ? "Mobile Equipment" : "Fixed Equipment"}</p>
                            <h3>LOCATION</h3>
                            <p> DEPARTMENT: {equip.department}</p>
                            <p> ROOM: {equip.room}</p>
                        </div>
                        <div className="detail-buttons">
                            <GoBack text={'Back to Equipment List'} handleClick={handleGoToEquipmentListPage} />
                            <Button label={'Edit Equipment'} handleClick={handleGoToEquipmentEditPage} />
                            <Button label={'Delete Equipment'} handleClick={handleShowDeleteModal} />
                        </div>

                        {showDeleteModal && 
                            <EquipDeleteConfirmation 
                                equip={equip} 
                                equipmentList={equipmentList} 
                                setEquipmentList={setEquipmentList}
                                setShowDeleteModal={setShowDeleteModal}
                            
                            />
                        }
                        <div className="maintenance-history">
                            <h2>Maintenance Histoty</h2>
                            {equipMaintenanceRecords.length === 0 ?(
                                <p>No maintenance records found.</p>
                            ):(
                                equipMaintenanceRecords.map((record)=>(

                                <div className="maintenance-record" key={record.id}>
                                    <p>Maintenance Type: {record.maintenanceType}</p>
                                    <p>Status: {record.status}</p>
                                    {record.status === "SCHEDULED" && (
                                        <p>Scheduled:{record.scheduledDate}
                                        </p>
                                    )}
                                    {record.status === "COMPLETED" && (
                                        <p>Completed: {record.completedDate}</p>
                                    )}
                                    <p>Performance By: {record.performedBy}</p>
                                    <p>Description: {record.description}</p>
                                </div>
                            ))
                        )}
                        </div>
                    </div>
                </main>
            )
        }
    }
}

export default EquipmentDetailPage;