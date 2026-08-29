
import { useParams, useNavigate } from "react-router"
import ErrorPage from '../ErrorPage'
import GoBack from '../../common/GoBack'
import LoadingPage from '../LoadingPage'

import EquipmentForm from './equipmentForm.jsx'


const EquipmentAddPage = ({equipmentList, isLoading,equipListError, setEquipmentList}) =>{
    if (isLoading) {
        return (<LoadingPage dataName="add equipment"/>)
    } else if(equipListError) {
        return (
            <ErrorPage>
                {equipListError}
            </ErrorPage>
        )
    } else {
        return (
            <main className="main-content" >
                <h1>Add page</h1>
                <EquipmentForm equipmentList={equipmentList} setEquipmentList={setEquipmentList} mode="add" />
            </main>
        )
    }
}

export default EquipmentAddPage;