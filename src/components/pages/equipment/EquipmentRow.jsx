
const EquipmentRow = ({equip})=>{
    return (
        <tr>
            <td>{equip.name}</td>
            <td>{equip.assetTag}</td>
            <td>{equip.status}</td>
            <td>{equip.department}</td>
            <td>{equip.room}</td>
            <td>View Details</td>
        </tr>
    );
}

export default EquipmentRow;