
import { useParams, useNavigate } from "react-router"
import ErrorPage from '../ErrorPage'
import GoBack from '../../common/GoBack'
import LoadingPage from '../LoadingPage'

import EquipmentAddedForm from './EquipmentAddedForm.jsx'

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
            <>
                <h1>Add page</h1>
                <EquipmentAddedForm />
            </>
        )
    }
}

export default EquipmentAddPage;