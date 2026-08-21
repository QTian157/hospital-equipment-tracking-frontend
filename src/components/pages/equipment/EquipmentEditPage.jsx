import { useParams, useNavigate } from "react-router"
import ErrorPage from '../ErrorPage'
import GoBack from '../../common/GoBack'
import LoadingPage from '../LoadingPage'

import EquipmentForm from './EquipmentForm'

const EquipmentEditPage = ({equipmentList, isLoading, equipListError, setEquipmentList})=>{
    const {id} = useParams();
    const navigate = useNavigate();

    const handleGoToEquipmentListPage = () => {
        navigate('/equipmentList');
    };

    if (isLoading) {
        return (<LoadingPage dataName={'equipmentEdit'}/>)
    } else if (equipListError) {
        return(
            <ErrorPage>
                {equipListError}
            </ErrorPage>
        )
    } else {
        // Edit and DetailPage are separate routes. 
        // If I refresh the edit page or go directly to the edit URL, I still need the page to work.
        const equip = equipmentList.find((e) => String(e.id) === id);
        if (!equip) {
            return(
                <ErrorPage>
                    <p>Sorry, that equipment does not exist!</p>
                    <GoBack text={'View All Equipments'} handleClick={handleGoToEquipmentListPage} />
                </ErrorPage>
            )
        }else {
            return(
                <>
                    Edit Page: {equip.name}
                    <EquipmentForm equip={equip} equipmentList={equipmentList} setEquipmentList={setEquipmentList} mode="edit"/>
                </>
            )
        }
    }
}

export default EquipmentEditPage;
