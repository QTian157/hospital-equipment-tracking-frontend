import LoadingPage from "../LoadingPage";

const EquipmentListPage = ({equipmentList, isLoading}) =>{
    console.log(equipmentList);
    if (isLoading) {
        return (<LoadingPage dataName={'equipment'}/>)
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