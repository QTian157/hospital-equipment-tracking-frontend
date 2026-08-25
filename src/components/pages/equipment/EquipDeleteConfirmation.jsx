import { useNavigate} from 'react-router';
import GoBack from '../../common/GoBack';
import Button from '../../forms/inputs/Button.jsx'

const EquipDeleteConfirmation = ({equip, equipmentList, setEquipmentList, setShowDeleteModal}) =>{
    const navigate = useNavigate();

    const handleClose = ()=>{
        setShowDeleteModal(false);
    }

    const handleDeleteToEquipmentListPage = ()=>{
        // delete equip
        const updatedEquipmentList = equipmentList.filter((e) => e.id !== equip.id);
        setEquipmentList(updatedEquipmentList);
        navigate('/equipmentList');
    };



    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Delete Equipment?</h2>
                <p> NAME: {equip.name}</p>
                <p> ASSET TAG: {equip.assetTag}</p>
                <p> STATUS: {equip.status}</p>
                <h3>EQUIPMENT DETAIL INFORMATION</h3>
                <p> TYPE: {equip.type}</p>
                <p> CATEGORY: {equip.category}</p>
                <p> SERIAL NUMBER: {equip.serialNumber}</p>
                <p>MOBILE: {equip.mobile ? "Mobile Equipment" : "Fixed Equipment"}</p>
                <h3>LOCATION</h3>
                <p> DEPARTMENT: {equip.department}</p>
                <p> ROOM: {equip.room}</p>

                <p>Are you sure you want to delete this equipment?</p>

                <Button label={'Cancel'} handleClick={handleClose} />
                <GoBack text={'Delete'} handleClick={handleDeleteToEquipmentListPage} />


            </div>

        </div>
    )

}

export default EquipDeleteConfirmation;