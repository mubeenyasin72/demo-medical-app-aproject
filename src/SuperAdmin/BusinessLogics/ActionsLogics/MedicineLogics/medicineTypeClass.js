class MedicineType{
    constructor() {
        this._id = "";
        this.medicineTypeName = "";
        this.setMedicineType = (object) =>{
            this._id = object._id;
            this.medicineTypeName = object.medicineTypeName;
            return this;
        }
    }
}
export default MedicineType;