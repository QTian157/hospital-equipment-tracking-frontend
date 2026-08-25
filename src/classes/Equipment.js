export default class Equipment{
    constructor(id, name, assetTag, serialNumber, type, category, status, department, room, mobile ) {
        this.id = id;
        this.name = name;
        this.assetTag = assetTag;
        this.serialNumber = serialNumber;
        this.type = type;
        this.category = category;
        this.status = status;
        this.department = department;
        this.room = room;
        this.mobile = mobile;
    }
}