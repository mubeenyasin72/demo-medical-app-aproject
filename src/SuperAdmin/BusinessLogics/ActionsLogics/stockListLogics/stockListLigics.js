import { relativeTimeThreshold } from "moment";

class StockListClass {
  constructor() {
    this._id = "";
    this.inDate = "";
    this.target = false;
    this.expiryDate = "";
    this.vender = "";
    this.medicine = "";
    this.purchasePricePerBox = 0;
    this.salePricePerBox = 0;
    this.noOfBoxes = 0;
    this.noOfExtraTabs = 0;
    this.TotalTabsInThisStock = 0;
    this.TotalTabsInAllStocks = 0;
    this.stockStatus = "";
    this.setStockType = object => {
      this._id = object._id;
      this.inDate = object.inDate;
      this.target = object.target;
      this.expiryDate = object.expiryDate;
      this.vender = object.vender;
      this.medicine = object.medicine;
      this.purchasePricePerBox = object.purchasePricePerBox;
      this.salePricePerBox = object.salePricePerBox;
      this.noOfBoxes = object.noOfBoxes;
      this.noOfExtraTabs = object.noOfExtraTabs;
      this.TotalTabsInAllStocks = object.TotalTabsInAllStocks;
      this.TotalTabsInAllStocks = object.TotalTabsInAllStocks;
      this.stockStatus = object.stockStatus;
      return this;
    };
  }
}
export default StockListClass;
