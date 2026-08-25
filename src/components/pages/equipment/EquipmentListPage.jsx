import ErrorPage from "../ErrorPage";
import LoadingPage from "../LoadingPage";
import EquipmentTable from './EquipmentTable.jsx';
import { useNavigate} from 'react-router';
import GoBack from '../../common/GoBack';
import { useState} from 'react'
import Input from '../../forms/inputs/Input.jsx'
import Select from '../../forms/inputs/Select.jsx'

import { departments, statusList} from '../../../mockData/equipmentOptions.js'

const initalData = {
    department:"",
    status: "",
}
const departmentList = departments.map((d)=>d.name)

const EquipmentListPage = ({equipmentList, isLoading, equipListError}) =>{
    // console.log(equipmentList);
    const navigate = useNavigate();
    const handleGoToEquipmentAddPage = () =>{
        navigate('/equipment/add')
    }

    const [keyWord, setKeyWord] = useState("");
    const [searchKeyWord, setSearchKeyWord] = useState("");

    // const [departmentSelect, setDepartmentSelect] = useStatus("");
    // const [statusSelect, setStatusSelect] = useStatus("");

    const [data, setData] = useState({...initalData});

    const handleDataChange = (domEvent)=>{
        const {id, value} = domEvent.target;
        setData((prevData)=> ({
            ...prevData,
            [id]: value,
        }));
    }
    
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
            (
            e.name.toLowerCase().includes(searchKeyWord.toLowerCase()) ||
            e.assetTag.toLowerCase().includes(searchKeyWord.toLowerCase()) ||
            e.serialNumber.toLowerCase().includes(searchKeyWord.toLowerCase())
            ) &&
            String(e.department).includes(String(data.department)) &&
            String(e.status).includes(String(data.status))
    );

    const handleClear = ()=>{
        setSearchKeyWord("");
        setKeyWord("");
        setData({...initalData});
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
            <Select 
                id="status"
                label="status:"
                value={data.status}
                required={false}
                disabled={false}
                handleSelected={handleDataChange}
                selectList={statusList}
            />
            <Select 
                id="department"
                label="department:"
                value={data.department}
                required={false}
                disabled={false}
                handleSelected={handleDataChange}
                selectList={departmentList}
            />
            <GoBack text={'Search'} handleClick={handleSubmit} />
                
            <div>
                <GoBack text={'Add Equipment'} handleClick={handleGoToEquipmentAddPage} />
            </div>
            {filteredEquipmentList.length === 0 ? (
                <div>
                    <p>No equipment found. Try another keyword.</p>
                    
                    
                </div>
            ) : (
                <EquipmentTable equipmentList={filteredEquipmentList}/>
            )}
            <GoBack text={'Go Back To Equipment List'} handleClick={handleClear} />

        </div>
    )
}

export default EquipmentListPage;