import FormItem from "../../forms/FormItem.jsx"
import InputErrorMessage from '../../forms/inputs/InputErrorMessage.jsx'

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

const MaintenanceForm = ({maintenanceData, setMaintenanceData, action, hasErrors})=>{

    const handleMaintenanceChange = (domEvent)=>{
        const {id, value} = domEvent.target;
        setMaintenanceData((prevData)=>({
            ...prevData,
            [id]: value
        }))
    }

    const isStart = action === "start"
    const isEnd = action === "end"
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
                <InputErrorMessage 
                    hasError={isStart && hasErrors && maintenanceData.maintenanceType === ""}
                    msg={maintenanceErrorMessage['maintenanceTypeRequired']}
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
                <InputErrorMessage 
                    hasError={isStart && hasErrors && maintenanceData.scheduledDate === ""}
                    msg={maintenanceErrorMessage['scheduledDateRequired']}
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
                <InputErrorMessage 
                    hasError={isEnd && hasErrors && maintenanceData.completedDate === ""}
                    msg={maintenanceErrorMessage['completedDateRequired']}
                />
            </FormItem>

            <FormItem>
                <Input
                    id="performedBy"
                    label="Performed By:"
                    value={maintenanceData.performedBy}
                    handleChange={handleMaintenanceChange}
                />
                <InputErrorMessage 
                    hasError={hasErrors && maintenanceData.performedBy.trim() === ""}
                    msg={maintenanceErrorMessage['performedByRequired']}
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