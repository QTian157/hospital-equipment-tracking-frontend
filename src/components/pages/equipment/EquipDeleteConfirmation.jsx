import { useNavigate} from 'react-router';
import GoBack from '../../common/GoBack';


const EquipDeleteConfirmation = ({equip, equipmentList, setEquipmentList}) =>{
    const nevigate = useNavigate();
    const handleCancleToEquipmentListPage = ()=>{
        nevigate('/equipmentList');
    };
    
    const handleDeleteToEquipmentListPage = ()=>{
        // delete equip
        const updateEquipmentList = equipmentList.filter((e) => e.id !== equip.id);
        setEquipmentList(updateEquipmentList);
        nevigate('/equipmentList');
    };


    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Delete Equipment?</h2>
                <p> NAME: {equip.name}</p>
                <p> ASSETTAG: {equip.assetTag}</p>
                <p> STATUS: {equip.status}</p>
                <h3>EUIPMENT DETAIL INFORMATION</h3>
                <p> TYPE: {equip.type}</p>
                <p> CATEGORY: {equip.category}</p>
                <p> SERIAL NUMBER: {equip.serialNumber}</p>
                <p> MOBILE: {equip.mobile}</p>
                <h3>LOCATION</h3>
                <p> DEPARTMENT: {equip.department}</p>
                <p> ROOM: {equip.room}</p>

                <p>Are you sure you want to delete this equipment?</p>

                <GoBack text={'Cancle'} handleClick={handleCancleToEquipmentListPage } />
                <GoBack text={'Delete'} handleClick={handleDeleteToEquipmentListPage} />


            </div>

        </div>
    )

}

export default EquipDeleteConfirmation;