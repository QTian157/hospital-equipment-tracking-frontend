
import ErrorPage from '../ErrorPage'

import LoadingPage from '../LoadingPage'

import EquipmentForm from './EquipmentForm.jsx'


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
                <EquipmentForm equipmentList={equipmentList} setEquipmentList={setEquipmentList} mode="add" />
            </main>
        )
    }
}

export default EquipmentAddPage;