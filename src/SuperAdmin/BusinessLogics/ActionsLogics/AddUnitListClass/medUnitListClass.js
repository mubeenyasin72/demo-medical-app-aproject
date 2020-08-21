class UnitListClass{
    constructor() {
        this._id = "";
        this.medicineUnitName = "";
        this.setUnitList = (object) =>{
            this._id = object._id;
            this.medicineUnitName = object.medicineUnitName;
            return this;
        }
    }
}
export default UnitListClass;