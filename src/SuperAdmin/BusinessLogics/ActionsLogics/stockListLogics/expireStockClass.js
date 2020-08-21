class expiredStock {
  constructor() {
    this._id = "";
    this.medicine = {};

    this.setExpireStock = object => {
      this._id = object._id;
      this.medicine = object.medicine;
      return this;
    };
  }
}
export default expiredStock;
