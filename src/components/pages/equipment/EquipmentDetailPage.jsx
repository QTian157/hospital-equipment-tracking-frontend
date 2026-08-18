import { useNavigate, useParams } from 'react-router';
import ErrorPage from '../ErrorPage';
// import GoBack from '../../common/GoBack';
import LoadingPage from '../LoadingPage';


const EquipmentDetailPage = ({equipmentList, isLoading, equipListError})=>{
    const {id} = useParams();

    const equip = equipmentList.find((equip)=> String(equip.id) === id);
    return(
        <div>
            <h1>
                detail page
            </h1>
            <p> {equip.name}</p>
        </div>
    )
}

export default EquipmentDetailPage;