import { Link } from "react-router";

const EquipmentRow = ({equip})=>{
    return (
        <tr>
            <td>{equip.name}</td>
            <td>{equip.assetTag}</td>
            <td>{equip.status}</td>
            <td>{equip.department}</td>
            <td>{equip.room}</td>
            <td>{equip.mobile ? "Mobile Equipment" : "Fixed Equipment"}</td>
            <td>
                <Link to={`/equipment/details/${equip.id}`}>
                    View Details
                </Link>

            </td>
        </tr>
    );
}

export default EquipmentRow;