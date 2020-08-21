class AddStockClass {
  constructor(
    expiryDate,
    venderID,
    medicineID,
    purchasePricePerBox,
    salePricePerBox,
    noOfBoxes,
    noOfExtraTabs
  ) {
    this.expiryDate = expiryDate;
    this.venderID = venderID;
    this.medicineID = medicineID;
    this.purchasePricePerBox = purchasePricePerBox;
    this.salePricePerBox = salePricePerBox;
    this.noOfBoxes = noOfBoxes;
    this.noOfExtraTabs = noOfExtraTabs;
  }
}
export default AddStockClass;
