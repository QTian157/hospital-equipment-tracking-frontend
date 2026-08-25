import FormItem from "../../forms/FormItem.jsx"
import { useEffect, useRef, useState} from 'react';

import Button from '../../forms/inputs/Button.jsx'
import Input from '../../forms/inputs/Input.jsx'


import Select from '../../forms/inputs/Select.jsx'
import GoBack from '../../common/GoBack.jsx'

const maintenanceTypeList = [
    "Preventive Maintenance",
    "Corrective Maintenance",
    "Inspection",
    "Calibration"
];

const MaintenanceForm = ({maintenanceData, setMaintenanceData, handleSubmit})=>{

    const handleMaintenanceChange = (domEvent)=>{
        const {id, value} = domEvent.target;
        setMaintenanceData((prevData)=>({
            ...prevData,
            [id]: value
        }))
    }
    return (
        <div>
            <h3>MAINTENANCE INFORMATION</h3>
            <form>
                <formItem>
                    <Select
                        id="maintenanceType"
                        label="Maintenance Type:"
                        value={maintenanceData.maintenanceType}
                        handleSelected={handleMaintenanceChange}
                        selectList={maintenanceTypeList}
                    />
                </formItem>
                <FormItem>
                    <Input
                        id="scheduledDate"
                        label="Scheduled Date:"
                        type="date"
                        value={maintenanceData.scheduledDate}
                        handleChange={handleMaintenanceChange}
                    />
                </FormItem>

                <FormItem>
                    <Input
                        id="performedBy"
                        label="Performed By:"
                        value={maintenanceData.performedBy}
                        handleChange={handleMaintenanceChange}
                    />
                </FormItem>

                <FormItem>
                    <Input
                        id="description"
                        label="Description:"
                        value={maintenanceData.description}
                        handleChange={handleMaintenanceChange}
                    />
                </FormItem>
            </form>
        </div>
        )
}

export default MaintenanceForm;