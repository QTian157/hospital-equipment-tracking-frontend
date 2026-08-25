export default class MaintenanceRecord {
    constructor(
        id,
        equipmentId,
        maintenanceType,
        status,
        scheduledDate,
        completedDate,
        performedBy,
        description,
        notes
    ) {
        this.id = id;
        this.equipmentId = equipmentId;
        this.maintenanceType = maintenanceType;
        this.status = status;
        this.scheduledDate = scheduledDate;
        this.completedDate = completedDate;
        this.performedBy = performedBy;
        this.description = description;
        this.notes = notes;
    }
}