const EquipmentListPage = ({equipmentList}) =>{
    console.log(equipmentList);
    return (
        <div>
            EquipmentListPage
            <ul>
                {equipmentList.map((e)=> <li>{e.name}</li>)}
            </ul>

        </div>
    )
}

export default EquipmentListPage;