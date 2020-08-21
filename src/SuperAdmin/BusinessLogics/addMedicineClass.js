class AddMedicineClass{
    constructor(medicineName,salt,noOfSachet,noOfTabletsPerSachet,noOfTablets,medicineUnitID,medicineUnitValue,isUnboxAllowed,companyID,employeeID,medicineTypeID){
        this.medicineName=medicineName;
        this.salt=salt;
        this.noOfSachet=noOfSachet;
        this.noOfTabletsPerSachet=noOfTabletsPerSachet;
        this.noOfTablets=noOfTablets;
        this.medicineUnitID=medicineUnitID;
        this.medicineUnitValue=medicineUnitValue;
        this.isUnboxAllowed=isUnboxAllowed;
        this.companyID=companyID;
        this.employeeID=employeeID;
        this.medicineTypeID=medicineTypeID;
    }
}
export default AddMedicineClass;