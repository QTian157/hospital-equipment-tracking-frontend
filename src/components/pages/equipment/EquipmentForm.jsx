import FormItem from "../../forms/FormItem.jsx"
import { useEffect, useRef, useState} from 'react';
import InputErrorMessage from '../../forms/inputs/InputErrorMessage.jsx'
import Button from '../../forms/inputs/Button.jsx'
import Input from '../../forms/inputs/Input.jsx'
import { useNavigate } from "react-router";


const errorMessage ={
    equipmentNameRequired: 'Equipment Name is required.',
    AssetTagRequired: 'Equipment Asset Tag is required.',
    SerialNumberRequired: 'Equipment Serial Number is required.',
}
    

const EquipmentForm = ({equip, equipmentList, setEquipmentList})=> {
    console.log(equip)
    const [data, setData] = useState({...equip})
    const [hasErrors, setHasErrors] = useState(false)

    const inputRef = useRef(null);
    const navigate = useNavigate();

    // useEffect(()=> {
    //     inputRef.current.focus();
    // }, []);
    useEffect(() => {
        inputRef.current?.focus();
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
                        handleChange={handleDataChange}
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
                        handleChange={handleDataChange}
                    />
                    <InputErrorMessage
                        hasError={hasErrors && data.assetTag ===''}
                        msg={errorMessage['AssetTagRequired']}
                    />

                </FormItem>
                
                <FormItem>
                    <Input 
                        id="serialNumber"
                        label="Serial Number"
                        value={data.serialNumber}
                        required={true}
                        handleChange={handleDataChange}
                    />
                    <InputErrorMessage
                        hasError={hasErrors && data.serialNumber ===''}
                        msg={errorMessage['SerialNumberRequired']}
                    />

                </FormItem>
 
                <Button type="submit" label="Edit Equipment" />

            </form>
            hahahh
        </>
    )
}


export default EquipmentForm;