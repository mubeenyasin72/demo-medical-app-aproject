class AddGstDataClass {
  constructor() {
    this._id = "";
    this.discount = null;
    this.gst = null;
    this.noOfMonths = null;
    this.setGstData = object => {
      this._id = object._id;
      this.discount = object.discount;
      this.gst = object.gst;
      this.noOfMonths = object.noOfMonths;
      return this;
    };
  }
}
export default AddGstDataClass;
