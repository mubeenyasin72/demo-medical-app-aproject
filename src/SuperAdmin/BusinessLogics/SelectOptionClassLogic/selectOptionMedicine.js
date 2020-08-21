class SelectMEDCLass {
  constructor(med, key) {
    this.year = med._id;
    this.name = med.medicineName;
    this.name2 = med.salt;
    this.image = med.medicineImgURL;
    this.key = key + 1;
  }
}
export default SelectMEDCLass;
