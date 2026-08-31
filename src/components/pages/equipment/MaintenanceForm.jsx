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

const maintenanceErrorMessage = {
    maintenanceTypeRequired: "Maintenance Type is required.",
    scheduledDateRequired: "Scheduled Date is required.",
    completedDateRequired: "Completed Date is required.",
    performedByRequired: "Performed By is required.",
};

const MaintenanceForm = ({maintenanceData, setMaintenanceData, action})=>{

    const handleMaintenanceChange = (domEvent)=>{
        const {id, value} = domEvent.target;
        setMaintenanceData((prevData)=>({
            ...prevData,
            [id]: value
        }))
    }

    const isStart = action === "start"
    return (
        <div className="maintenance-form">
            <h3>MAINTENANCE INFORMATION</h3>
            <FormItem>
                <Select
                    id="maintenanceType"
                    label="Maintenance Type:"
                    value={maintenanceData.maintenanceType}
                    handleSelected={handleMaintenanceChange}
                    disabled={isStart ? false : true}
                    selectList={maintenanceTypeList}
                />
            </FormItem>
            <FormItem>
                <Input
                    id="scheduledDate"
                    label="Scheduled Date:"
                    type="date"
                    disabled={isStart ? false : true}
                    value={maintenanceData.scheduledDate}
                    handleChange={handleMaintenanceChange}
                />
            </FormItem>
            <FormItem>
                <Input
                    id="completedDate"
                    label="Completed Date:"
                    type="date"
                    disabled={isStart ? true : false}
                    value={maintenanceData.completedDate}
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
        </div>

        )
}

export default MaintenanceForm;