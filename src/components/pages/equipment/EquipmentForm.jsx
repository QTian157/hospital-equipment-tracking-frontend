import FormItem from "../../forms/FormItem.jsx"
import { useEffect, useRef, useState} from 'react';
import InputErrorMessage from '../../forms/inputs/InputErrorMessage.jsx'
import Button from '../../forms/inputs/Button.jsx'
import Input from '../../forms/inputs/Input.jsx'
import { useNavigate } from "react-router";

import Select from '../../forms/inputs/Select.jsx'
import GoBack from '../../common/GoBack.jsx'

import { departments, statusList } from '../../../mockData/equipmentOptions.js'


const errorMessage ={
    equipmentNameRequired: 'Equipment Name is required.',
    AssetTagRequired: 'Equipment Asset Tag is required.',
    SerialNumberRequired: 'Equipment Serial Number is required.',
}

const departmentList = departments.map((d)=> d.name);
// const rooms = departments.find((department)=> department.name==="ICU").rooms

const EquipmentForm = ({equip, equipmentList, setEquipmentList})=> {
    // console.log(departmentLists)
    // console.log(rooms)
    // console.log(equip)
    const [data, setData] = useState({...equip})
    const [hasErrors, setHasErrors] = useState(false)

    const inputRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const isValid = () => {
        return (
            data.name.trim() !== '' &&
            data.assetTag.trim() !== '' &&
            data.serialNumber.trim() !== '' 

        );
    };

   const handleDataChange = (domEvent) => {
        const { id, value } = domEvent.target;
        setData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit =  (domEvent) => {
        domEvent.preventDefault();
        if (!isValid()) {
            setHasErrors(true);
        } else {
            // add equipment
            const updatedEquipmentList=[...equipmentList].map((e) => e.id === data.id ?data : e);
            setEquipmentList( updatedEquipmentList);

            navigate('/equipmentList');
        }

    }

    const handleGoToEquipmentListPage = (()=> {
        navigate("/equipmentList")
    })

    const selectedDepartment = departments.find(
    (department) => department.name === data.department
    );

    console.log("data.department:", data.department);
    console.log("selectedDepartment:", selectedDepartment);

    const roomList = selectedDepartment ? selectedDepartment.rooms : [];

    return (
        <>
            <h2>Edit Equipment</h2>
            <h3>Enter equipment information and current location</h3>
            
            <h3> BASIC INFORMATION</h3>
            <form onSubmit={handleSubmit}>
                <FormItem>
                    <Input 
                        id="name"
                        label="Equipment Name"
                        value={data.name}
                        ref={inputRef}
                        required={true}
                        disabled={true}
                    />
                    <InputErrorMessage
                        hasError={hasErrors && data.name ===''}
                        msg={errorMessage['equipmentNameRequired']}
                    />

                </FormItem>

                <FormItem>
                    <Input 
                        id="assetTag"
                        label="Asset Tag"
                        value={data.assetTag}
                        required={true}
                        disabled={true}
                    />
                </FormItem>
                
                <FormItem>
                    <Input 
                        id="serialNumber"
                        label="Serial Number"
                        value={data.serialNumber}
                        required={true}
                        disabled={true}
                    />
                </FormItem>
                <FormItem>
                    <Input 
                        id="type"
                        label="Type"
                        value={data.type}
                        required={true}
                        disabled={true}
                    />
                </FormItem>
                <FormItem>
                    <Input 
                        id="mobile"
                        label="Mobile Equipment"
                        value={data.type}
                        required={true}
                        disabled={true}
                        type="checkbox"
                    />
                </FormItem>
                <h3>CURRENT LOCATION</h3>
                <FormItem>
                    <Select 
                        id="department"
                        label="Department"
                        handleSelected={handleDataChange}
                        value={data.department}
                        selectList={departmentList}
                    />
                </FormItem>

                <FormItem>
                    <Select 
                        id="room"
                        label="Room"
                        handleSelected={handleDataChange}
                        value={data.room}
                        selectList={roomList}
                    />
                </FormItem>
                <FormItem>
                    <Select 
                        id="status"
                        label="Status"
                        handleSelected={handleDataChange}
                        value={data.status}
                        selectList={statusList}
                    />
                </FormItem>

                <Button type="submit" label="Save Changes" />
                <GoBack text="Cancle Changes" handleClick={handleGoToEquipmentListPage} />
                <h3> CURRENT STATUS </h3>
            </form>


        </>
    )
}


export default EquipmentForm;