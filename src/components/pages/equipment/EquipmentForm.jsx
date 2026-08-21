import FormItem from "../../forms/FormItem.jsx"
import { useEffect, useRef, useState} from 'react';
import InputErrorMessage from '../../forms/inputs/InputErrorMessage.jsx'
import Button from '../../forms/inputs/Button.jsx'
import Input from '../../forms/inputs/Input.jsx'
import { useNavigate } from "react-router";

import Select from '../../forms/inputs/Select.jsx'
import GoBack from '../../common/GoBack.jsx'

import { departments, statusList } from '../../../mockData/equipmentOptions.js'

const initialData = {
    name: '',
    assetTag: '',
    serialNumber: '',
    type: '',
    category: '',
    department: '',
    room: '',
    status: '',
    mobile: false,
};


const errorMessage ={
    equipmentNameRequired: 'Equipment Name is required.',
    assetTagRequired: 'Equipment Asset Tag is required.',
    serialNumberRequired: 'Equipment Serial Number is required.',
    typeRequired: 'Equipment type is required.',
    categoryRequired: 'Equipment Category is required.',
    departmentRequired: 'Equipment Department is required.',
    roomRequired: 'Equipment Room is required.',
    statusRequired: 'Equipment Status is required.',
}

const departmentList = departments.map((d)=> d.name);
// const rooms = departments.find((department)=> department.name==="ICU").rooms

const EquipmentForm = ({equip, equipmentList, setEquipmentList, mode})=> {
    // console.log(departmentLists)
    // console.log(rooms)
    // console.log(equip)

    // check for edit form or add form
    const isEditable = mode === "edit";
    const isAdded = mode === "add";

    let equipData = {};
    if (isEditable){
        equipData = {...equip};
        // console.log(equipData);
    }
    if (isAdded) {
        equipData = {...initialData};
    }
    const [data, setData] = useState({...equipData})
    const [hasErrors, setHasErrors] = useState(false)

    const inputRef = useRef(null);
    const navigate = useNavigate();


    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const isValidForAdd = () => {
        return (
            data.name.trim() !== '' &&
            data.assetTag.trim() !== '' &&
            data.serialNumber.trim() !== '' &&
            data.type.trim() != ''&&
            data.category.trim() != ''&&
            data.department !=''&&
            data.room != ''&&
            data.status != ''

        );
    };

    
    const isValidForEdit = () => {
        return (
            data.department !=''&&
            data.room != ''&&
            data.status != ''
        );
    };
    


   const handleDataChange = (domEvent) => {
        const { id, value } = domEvent.target;
        setData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };
    const handleDataCheckboxChange = (domEvent) => {
        const { id, checked } = domEvent.target;
        setData((prevData) => ({
            ...prevData,
            [id]:checked,
        }));
    };

    const handleSubmit =  (domEvent) => {
        domEvent.preventDefault();
        if (isEditable) {
            if (!isValidForEdit()) {
                setHasErrors(true);
            } else {
                // edit equipment
                const updatedEquipmentList=[...equipmentList].map((e) => e.id === data.id ?data : e);
                setEquipmentList( updatedEquipmentList);
                navigate('/equipmentList');
            }
        }else {
            if (!isValidForAdd()) {
                setHasErrors(true);
            } else {
                // add equipment
                const idList = [...equipmentList].map((e)=> e.id);
                const newId = Math.max(...idList) + 1;
                const newEquipment = {
                    ...data,
                    id: newId
                }
                const updatedEquipmentList = [
                    ...equipmentList,
                    newEquipment 
                ];
                setEquipmentList(updatedEquipmentList);
                navigate('/equipmentList');
            }
        }

    }

    const handleGoToEquipmentListPage = (()=> {
        navigate("/equipmentList")
    })

    const selectedDepartment = departments.find(
    (department) => department.name === data.department
    );

    // console.log("data.department:", data.department);
    // console.log("selectedDepartment:", selectedDepartment);

    const roomList = selectedDepartment ? selectedDepartment.rooms : [];

    return (
        <>
            <h2>{mode === "edit" ? "Edit Equipment" : "Add Equipment"}</h2>
            <h3>Enter equipment information and current location</h3>
            
            <h3> BASIC INFORMATION</h3>
            <form onSubmit={handleSubmit}>
                <FormItem>
                    <Input 
                        id="name"
                        label="Equipment Name:"
                        value={data.name}
                        ref={isAdded ? inputRef : null}
                        required={isEditable ? false : true}
                        disabled={isEditable}
                        handleChange={handleDataChange}
                    />
                    <InputErrorMessage
                        hasError={mode ==="add" && hasErrors && data.name ===''}
                        msg={errorMessage['equipmentNameRequired']}
                    />

                </FormItem>

                <FormItem>
                    <Input 
                        id="assetTag"
                        label="Asset Tag:"
                        value={data.assetTag}
                        required={isEditable ? false : true}
                        disabled={isEditable}
                        handleChange={handleDataChange}
                    />
                    <InputErrorMessage
                        hasError={mode ==="add" && hasErrors && data.assetTag ===''}
                        msg={errorMessage['assetTagRequired']}
                    />
                </FormItem>
                
                <FormItem>
                    <Input 
                        id="serialNumber"
                        label="Serial Number:"
                        value={data.serialNumber}
                        required={isEditable ? false : true}
                        disabled={isEditable}
                        handleChange={handleDataChange}
                    />
                    <InputErrorMessage
                        hasError={mode ==="add" && hasErrors && data.serialNumber ===''}
                        msg={errorMessage['serialNumberRequired']}
                    />
                </FormItem>
                <FormItem>
                    <Input 
                        id="type"
                        label="Type:"
                        value={data.type}
                        required={isEditable ? false : true}
                        disabled={isEditable}
                        handleChange={handleDataChange}
                    />
                    <InputErrorMessage
                        hasError={mode ==="add" && hasErrors && data.type ===''}
                        msg={errorMessage['typeRequired']}
                    />
                </FormItem>
                <FormItem>
                    <Input 
                        id="category"
                        label="Category:"
                        value={data.category}
                        required={isEditable ? false : true}
                        disabled={isEditable}
                        handleChange={handleDataChange}
                    />
                    <InputErrorMessage
                        hasError={mode ==="add" && hasErrors && data.category ===''}
                        msg={errorMessage['categoryRequired']}
                    />
                </FormItem>

                <FormItem>
                    {isEditable ? (
                        <>
                            <label>Mobility: </label>
                            <p>{data.mobile ? "Mobile" : "Fixed"}</p>
                        </>
                    ) : (
                        <Input
                            id="mobile"
                            label="Mobile Equipment"
                            checked={data.mobile}
                            type="checkbox"
                            handleChange={handleDataCheckboxChange}
                        />
                    )}
                </FormItem>

                <h3>CURRENT LOCATION</h3>
                <FormItem>
                    <Select 
                        id="department"
                        label="Department:"
                        ref={isEditable ? inputRef : null}
                        required={true}
                        handleSelected={handleDataChange}
                        value={data.department}
                        selectList={departmentList}
                    />
                    <InputErrorMessage
                        hasError={hasErrors && data.department ===''}
                        msg={errorMessage['departmentRequired']}
                    />
                </FormItem>

                <FormItem>
                    <Select 
                        id="room"
                        label="Room:"
                        required={true}
                        handleSelected={handleDataChange}
                        value={data.room}
                        selectList={roomList}
                    />
                    <InputErrorMessage
                        hasError={hasErrors && data.room ===''}
                        msg={errorMessage['roomRequired']}
                    />
                </FormItem>
                <FormItem>
                    <Select 
                        id="status"
                        label="Status"
                        required={true}
                        handleSelected={handleDataChange}
                        value={data.status}
                        selectList={statusList}
                    />
                    <InputErrorMessage
                        hasError={hasErrors && data.status===''}
                        msg={errorMessage['statusRequired']}
                    />
                </FormItem>

                <Button type="submit" label={isEditable ? "Save changes" : "Add Equipment"}/>
                <GoBack text="Cancle Changes" handleClick={handleGoToEquipmentListPage} />
                <h3> CURRENT STATUS </h3>
            </form>


        </>
    )
}


export default EquipmentForm;