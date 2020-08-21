class SelectCLass {
  constructor(obj, key) {
    this.year = obj._id;
    this.name = obj.salt;
    this.name2 = obj.medicineName;
    this.image = obj.medicineImgURL;
    this.key = key + 1;
  }
}
export default SelectCLass;
