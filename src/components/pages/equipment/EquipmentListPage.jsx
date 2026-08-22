import ErrorPage from "../ErrorPage";
import LoadingPage from "../LoadingPage";
import EquipmentTable from './EquipmentTable.jsx';
import { useNavigate, useParams } from 'react-router';
import GoBack from '../../common/GoBack';

const EquipmentListPage = ({equipmentList, isLoading, equipListError}) =>{
    // console.log(equipmentList);
    const navigate = useNavigate();
    const handleGoToEquipmentAddPage = () =>{
        navigate('/equipment/add')
    }

    if (isLoading) {
        return (<LoadingPage dataName={'equipmentList'}/>)
    }else if (equipListError) {
        return (
        <ErrorPage>
            {equipListError}
        </ErrorPage>
        )
    }
    return (
        <div>
            <h1>
                EquipmentListPage
            </h1>
            <div>
                <GoBack text={'Add Equipment'} handleClick={handleGoToEquipmentAddPage} />
            </div>
            <EquipmentTable equipmentList={equipmentList}/>
        </div>
    )
}

export default EquipmentListPage;