import EquipmentRow from './EquipmentRow.jsx'
const EquipmentTable = ({equipmentList})=>{

    return (
        <table className="equipment-table">
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>ASSET TAG</th>
                    <th>STATUS</th>
                    <th>DEPARTMENT</th>
                    <th>ROOM</th>
                    <th>MOBILE</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>

                {equipmentList.map((e)=><EquipmentRow key={e.id} equip={e}/>)}
            </tbody>
        </table>
    )
}

export default EquipmentTable;