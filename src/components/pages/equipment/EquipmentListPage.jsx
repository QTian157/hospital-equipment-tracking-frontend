import ErrorPage from "../ErrorPage";
import LoadingPage from "../LoadingPage";
import EquipmentTable from './EquipmentTable.jsx';
import { useNavigate} from 'react-router';
import GoBack from '../../common/GoBack';
import { useState} from 'react'
import Input from '../../forms/inputs/Input.jsx'


const EquipmentListPage = ({equipmentList, isLoading, equipListError}) =>{
    // console.log(equipmentList);
    const navigate = useNavigate();
    const handleGoToEquipmentAddPage = () =>{
        navigate('/equipment/add')
    }

    const [keyWord, setKeyWord] = useState("");
    const [searchKeyWord, setSearchKeyWord] = useState("");

    const handleSearch = (domEvent) =>{
        setKeyWord(domEvent.target.value);
    }

    const handleSubmit = (domEvent)=>{
        domEvent.preventDefault();
        setSearchKeyWord(keyWord)
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
    const filteredEquipmentList = equipmentList.filter(
        (e) =>
            e.name
                .toLowerCase()
                .includes(searchKeyWord.toLowerCase())
    );

    const handleClear = ()=>{
        setSearchKeyWord("");
        setKeyWord("");
    }

    return (
        <div>
            <h1>
                EquipmentListPage
            </h1>
            <Input 
                id="search"
                label="Search Equipment"
                value={keyWord}
                // ref={isAdded ? inputRef : null}
                required={true}
                handleChange={handleSearch}
            />
            <GoBack text={'Search'} handleClick={handleSubmit} />
                
            <div>
                <GoBack text={'Add Equipment'} handleClick={handleGoToEquipmentAddPage} />
            </div>
            {filteredEquipmentList.length === 0 ? (
                <div>
                    <p>No equipment found. Try another keyword.</p>
                    <GoBack text={'Go Back To Equipment List'} handleClick={handleClear} />
                    
                </div>
            ) : (
                <EquipmentTable equipmentList={filteredEquipmentList}/>
            )}

        </div>
    )
}

export default EquipmentListPage;