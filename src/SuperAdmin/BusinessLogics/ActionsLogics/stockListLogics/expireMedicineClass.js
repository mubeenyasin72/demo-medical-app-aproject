class expiredMedicine {
  constructor() {
    this.inDate = "";
    this._id = "";
    this.expiryDate = "";
    this.medicine = {};
    this.purchasePricePerBox = 0;
    this.salePricePerBox = 0;
    this.noOfBoxes = 0;
    this.noOfExtraTabs = 0;
    this.TotalTabsInThisStock = 0;
    this.TotalTabsInAllStocks = 0;
    this.stockStatus = "";
    this.returnDate = "";

    this.setExpireMedidicineType = object => {
      this.inDate = object.inDate;
      this._id = object._id;
      this.expiryDate = object.expiryDate;
      this.medicine = object.medicine;
      this.purchasePricePerBox = object.purchasePricePerBox;
      this.salePricePerBox = object.salePricePerBox;
      this.noOfBoxes = object.noOfBoxes;
      this.noOfExtraTabs = object.noOfExtraTabs;
      this.TotalTabsInThisStock = object.TotalTabsInThisStock;
      this.TotalTabsInAllStocks = object.TotalTabsInAllStocks;
      this.stockStatus = object.stockStatus;
      this.returnDate = object.returnDate;
      return this;
    };
  }
}
export default expiredMedicine;
