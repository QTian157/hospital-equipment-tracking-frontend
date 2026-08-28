import ErrorPage from "../ErrorPage";
import LoadingPage from "../LoadingPage";
import EquipmentTable from './EquipmentTable.jsx';
import { useNavigate} from 'react-router';
import GoBack from '../../common/GoBack';
import { useState} from 'react'
import Input from '../../forms/inputs/Input.jsx'
import Select from '../../forms/inputs/Select.jsx'

import { departments, statusList} from '../../../mockData/equipmentOptions.js'
import Button from "../../forms/inputs/Button.jsx";

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
        <main >
            <div className="main-content">
                <h1>
                    Equipment
                </h1>
                <div className="equipment-layout">

                    <div className="equipment-filters">
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
                            label="status"
                            value={data.status}
                            required={false}
                            disabled={false}
                            handleSelected={handleDataChange}
                            selectList={statusList}
                        />
                        <Select 
                            id="department"
                            label="department"
                            value={data.department}
                            required={false}
                            disabled={false}
                            handleSelected={handleDataChange}
                            selectList={departmentList}
                        />
                        <Button label={'Search'} handleClick={handleSubmit} classes={'primary-button'} />
                        {/* Clear Filters / Reset Search */}
                        <Button label={'Clear Filters'} handleClick={handleClear} classes={'secondary-button'}/>
                    </div>
                    <div>
                        <Button label={'Add Equipment'} handleClick={handleGoToEquipmentAddPage} classes={'primary-button'}/>
                    </div>
                </div>

                {filteredEquipmentList.length === 0 ? (
                    <div>
                        <p>No equipment found. Try another keyword.</p>
                        
                        
                    </div>
                ) : (
                    <EquipmentTable equipmentList={filteredEquipmentList}/>
                )}
            </div>
        </main>
    )
}

export default EquipmentListPage;