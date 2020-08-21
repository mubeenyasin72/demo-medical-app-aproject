class CompanyClass{
    constructor() {
        this._id = "";
        this.date = "";
        this.companyName=""
        this.setCompnayName = (object) =>{
            this._id = object._id;
            this.date = object.date;
            this.companyName=object.companyName;
            return this;
        }
    }
}
export default CompanyClass;