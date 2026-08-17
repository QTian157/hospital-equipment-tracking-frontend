const EquipmentListPage = ({equipmentList}) =>{
    console.log(equipmentList);
    if (equipmentList === null) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            EquipmentListPage
            <ul>
                {equipmentList.map((e)=> <li key={e.id}>{e.name}</li>)}
            </ul>

        </div>
    )
}

export default EquipmentListPage;