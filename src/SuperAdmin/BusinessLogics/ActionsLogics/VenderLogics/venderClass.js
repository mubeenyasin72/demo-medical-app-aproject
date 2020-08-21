class VenderClass{
    constructor() {
        this._id = "";
        this.vendorName="";
        this.contactNumber="";
        this.setvendorName = (object) =>{
            this._id = object._id;
            this.vendorName=object.vendorName;
            this.contactNumber=object.contactNumber;
            return this;
        }
    }
}
export default VenderClass;