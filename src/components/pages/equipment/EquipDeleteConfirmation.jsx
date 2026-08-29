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
                <p> <strong>NAME:</strong> {equip.name}</p>
                <p> <strong>ASSET TAG:</strong> {equip.assetTag}</p>
                <p> <strong>STATUS:</strong> {equip.status}</p>
                <h3>EQUIPMENT DETAIL INFORMATION</h3>
                <p> <strong>TYPE:</strong> {equip.type}</p>
                <p> <strong>CATEGORY:</strong> {equip.category}</p>
                <p> <strong>SERIAL NUMBER:</strong> {equip.serialNumber}</p>
                <p><strong>MOBILE:</strong> {equip.mobile ? "Mobile Equipment" : "Fixed Equipment"}</p>
                <h3>LOCATION</h3>
                <p> <strong>DEPARTMENT:</strong> {equip.department}</p>
                <p> <strong>ROOM</strong>: {equip.room}</p>

                <p className="delete-warning">
                    Are you sure you want to delete this equipment?

                </p>
                <div className="modal-buttons">
                    <Button id="confirm-cancle" label={'Cancel'} handleClick={handleClose} />
                    <Button id="confirm-delete" label={'Delete'} handleClick={handleDeleteToEquipmentListPage} />
                </div>

            </div>

        </div>
    )

}

export default EquipDeleteConfirmation;