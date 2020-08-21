class EmployeeClass{
    constructor() {
        this._id = "";
        this.userName = "";
        this.isBlocked="";
        this.password="";
        this.setEmployeeList = (object) =>{
            this._id = object._id;
            this.userName = object.userName;
            this.isBlocked=object.isBlocked;
            this.password=object.password;
            return this;
        }
    }
}
export default EmployeeClass;