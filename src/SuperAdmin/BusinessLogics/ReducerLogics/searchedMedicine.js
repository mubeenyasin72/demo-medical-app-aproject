class SearchClass {
  constructor() {
    this._id = "";
    this.medicineImgURL = [];
    this.isUnboxAllowed = false;
    this.medicineName = "";
    this.salt = "";
    this.noOfSachet = "";
    this.noOfTabletsPerSachet = "";
    this.noOfTablets = "";
    this.medicineUnit = {};
    this.medicineUnitValue = "";
    this.company = {};
    this.employee = {};
    this.medicineType = {};
    this.selectedQuantity = 0;
    this.totalPrice = 0;
    this.setMedicineByName = object => {
      this._id = object._id;
      this.medicineImgURL = object.medicineImgURL;
      this.isUnboxAllowed = object.isUnboxAllowed;
      this.medicineName = object.medicineName;
      this.salt = object.salt;
      this.noOfSachet = object.noOfSachet;
      this.noOfTabletsPerSachet = object.noOfTabletsPerSachet;
      this.noOfTablets = object.noOfTablets;
      this.medicineUnit = object.medicineUnit;
      this.medicineUnitValue = object.medicineUnitValue;
      this.company = object.company;
      this.employee = object.employee;
      this.medicineType = object.medicineType;
      this.selectedQuantity = 0;
      this.totalPrice = 0;
      return this;
    };
    this.clone = object => {
      this._id = object._id;
      this.medicineImgURL = object.medicineImgURL;
      this.isUnboxAllowed = object.isUnboxAllowed;
      this.medicineName = object.medicineName;
      this.salt = object.salt;
      this.noOfSachet = object.noOfSachet;
      this.noOfTabletsPerSachet = object.noOfTabletsPerSachet;
      this.noOfTablets = object.noOfTablets;
      this.medicineUnit = object.medicineUnit;
      this.medicineUnitValue = object.medicineUnitValue;
      this.company = object.company;
      this.employee = object.employee;
      this.medicineType = object.medicineType;
      if (object.selectedQuantity > 0) {
        this.selectedQuantity = object.selectedQuantity;
      } else {
        this.selectedQuantity = 0;
      }
      if (object.totalPrice > 0) {
        this.totalPrice = object.totalPrice;
      } else {
        this.totalPrice = 0;
      }

      return this;
    };
    this.setQuantity = Ouantity => {
      this.selectedQuantity = Ouantity;
      return this;
    };
    this.setTotalPrice = TotalPrice => {
      this.totalPrice = TotalPrice;
      return this;
    };
  }
}
export default SearchClass;
