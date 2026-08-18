import ErrorPage from "../ErrorPage";
import LoadingPage from "../LoadingPage";
import EquipmentTable from './EquipmentTable.jsx';

const EquipmentListPage = ({equipmentList, isLoading, equipListError}) =>{
    // console.log(equipmentList);
    if (isLoading) {
        return (<LoadingPage dataName={'equipment'}/>)
    }else if (equipListError) {
        return (
        <ErrorPage>
            {equipListError}
        </ErrorPage>
        )
    }
    return (
        <div>
            EquipmentListPage
            <ul>
                {equipmentList.map((e)=> <li key={e.id}>{e.name}</li>)}
            </ul>
            <EquipmentTable equipmentList={equipmentList}/>

        </div>
    )
}

export default EquipmentListPage;