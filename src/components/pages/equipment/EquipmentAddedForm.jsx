import FormItem from "../../forms/FormItem.jsx"
import { useEffect, useRef, useState} from 'react';
import InputErrorMessage from '../../forms/inputs/InputErrorMessage.jsx'
import Button from '../../forms/inputs/Button.jsx'
import Input from '../../forms/inputs/Input.jsx'
import { useNavigate } from "react-router";

import Select from '../../forms/inputs/Select.jsx'
import GoBack from '../../common/GoBack.jsx'



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
    AssetTagRequired: 'Equipment Asset Tag is required.',
    SerialNumberRequired: 'Equipment Serial Number is required.',
}


const EquipmentAddedForm = ({equip, equipmentList, setEquipmentList})=>{
    const [data, setData] = useState({...initialData});
    const [hassError, setHasError] = useState(null);
    const inputRef = useRef(null);
    const navigate = useNavigate()

    // useEffect(()=>{
    //     inputRef.current.focus();
    // },[])

    const isValid = () => {
        return (
            data.name.trim() !== '' &&
            data.assetTag.trim() !== '' &&
            data.serialNumber.trim() !== '' 

        );
    };

    const handleDataChange = ((domEvent)=>{
        const { id, value } = domEvent.target;
        setData((prevData)=> ({
            ...prevData,
            [id]: value,
        }))

    })

    const handleSubmit = (domEvent) => {
        domEvent.preventDefault();
        if (!isValid()) {
            setHasError(true);
        } else {
            // add equipment
            // const updatedEquipmentList = [...equipmentList].push(data);
            const idList = equipmentList.map((e)=> e.id);
            const newId = Math.max(...idList) + 1;
            const newEquipment = {
                ...data,
                id: newId,
            };

            const updatedEquipmentList = [
                ...equipmentList,
                newEquipment 
            ];

            setEquipmentList(updatedEquipmentList);
            navigate("/equipmentList")
        }
    }

    return (
        <>
            equipment add form
        
        </>
    )
}

export default EquipmentAddedForm;