import { useNavigate, useParams } from 'react-router';
import ErrorPage from '../ErrorPage';
import GoBack from '../../common/GoBack';
import LoadingPage from '../LoadingPage';


const EquipmentDetailPage = ({equipmentList, isLoading, equipListError})=>{
    const {id} = useParams();

    const navigate = useNavigate();

    const handleGoToDashboardPage = () => {
        navigate('/');
    };

    const handleGoToEquipmentListPage = () => {
        navigate('/equipmentList');
    };

    const handleGoToEquipmentEditPage = ()=>{
        navigate(`/equipment/details/${id}/edit`)
    }



    if (isLoading){
        return (<LoadingPage dataName={'equipmentDetail'}/>)
    }else if(equipListError){
        // all equipment list error -> go back to dashboard page
        return (
            <ErrorPage>
                {equipListError}
                <GoBack text={'Return Dashboard'} handleClick={handleGoToDashboardPage} />
            </ErrorPage>
        )
    } else {
        const equip = equipmentList.find((equip)=> String(equip.id) === id);
        if (!equip) {
            // equipment not found -> go back to equipment List page
            return(
                <ErrorPage>
                    <p>Sorry, that equipment does not exist!</p>
                    <GoBack text={'View All Equipments'} handleClick={handleGoToEquipmentListPage} />
                </ErrorPage>
            );
        } else {
            return(
                <div>
                    <h1>
                        detail page
                    </h1>
                    <p> NAME: {equip.name}</p>
                    <p> ASSETTAG: {equip.assetTag}</p>
                    <p> STATUS: {equip.status}</p>
                    <h3>EUIPMENT DETAIL INFORMATION</h3>
                    <p> TYPE: {equip.type}</p>
                    <p> CATEGORY: {equip.category}</p>
                    <p> SERIAL NUMBER: {equip.serialNumber}</p>
                    <p> MOBILE: {equip.mobile}</p>
                    <h3>LOCATION</h3>
                    <p> DEPARTMENT: {equip.department}</p>
                    <p> ROOM: {equip.room}</p>
                    <GoBack text={'Back to Equipment List'} handleClick={handleGoToEquipmentListPage} />
                    <GoBack text={'Edit Equipment'} handleClick={handleGoToEquipmentEditPage} />
                    <GoBack text={'Delete Equipment'} handleClick={handleGoToEquipmentDeletePage} />
                    
                </div>
            )
        }
    }
}

export default EquipmentDetailPage;