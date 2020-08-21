import React, { Component } from 'react'

class updateMedicineForm extends Component {
        state={
        medicineName:"",
        salt:"",
        noOfSachet:"",
        noOfTabletsPerSachet:"",
        noOfTablets:"",
        medicineUnitID:"",
        medicineUnitValue:"",
        isUnboxAllowed:false,
        companyID:"",
        employeeID:"",
        medicineTypeID:"",            
        selectedFile: null,
        fileArray:[],
        loading:false,
        ID:null

    }
    render() {
        return (
            <React.Fragment>
                 <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div class="row">
                                <div class="col">
                                <div className="row">                                    
                                <div className="col">
                                    <label>
                                        Medicine Name
                                    </label>
                                </div>
                                </div>
                                <input type="text" class="form-control" placeholder="Medicine Name"
                                onChange={(e)=>this.setState({medicineName:e.target.value})}
                                disabled={this.state.loading}
                                />
                                </div>
                                <div class="col">
                                <div className="row">                                    
                                <div className="col">
                                    <label>
                                        Salt Name
                                    </label>
                                </div>
                                </div>
                                <input type="text" class="form-control" placeholder="Salt name" 
                                 onChange={(e)=>this.setState({salt:e.target.value})}
                                 disabled={this.state.loading}
                                />
                                </div>
                            </div> <div class="row">
                                <div class="col">
                                <div className="row">                                    
                                <div className="col">
                                    <label>
                                        No Of Sachet
                                    </label>
                                </div>
                                </div>
                                <input type="number" class="form-control" placeholder="No Of Sachet" 
                                 onChange={(e)=>this.setState({noOfSachet:e.target.value})}
                                 disabled={this.state.loading}
                                />
                                </div>
                                <div class="col">
                                <div className="row">                                    
                                <div className="col">
                                    <label>
                                        No Of Tablets Per Sachet
                                    </label>
                                </div>
                                </div>
                                <input type="number" class="form-control" placeholder="No Of Tablets Per Sachet" 
                                    onChange={(e)=>this.setState({noOfTabletsPerSachet:e.target.value})}
                                    disabled={this.state.loading}
                                />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                <div className="row">                                    
                                <div className="col">
                                    <label>
                                        No Of Tablets
                                    </label>
                                </div>
                                </div>
                                <input type="number" class="form-control" placeholder="No Of Tablets" 
                                    onChange={(e)=>this.setState({noOfTablets:e.target.value})}
                                    disabled={this.state.loading}
                                />
                                </div>
                                <div class="col">
                                <div className="row">                                    
                                <div className="col">
                                    <label>
                                        Unit
                                    </label>
                                </div>
                                </div>
                                <div class="form-group">
                                     <select class="form-control" id="sel1"
                                      onChange={(e)=>this.setState({medicineUnitID:e.target.value})}
                                     disabled={this.state.loading}
                                    >
                                        <option selected>Select Unit</option>
                                        {/* {this.props.addUnit.length>0?
                                        this.props.addUnit.map(unitList=>(

                                        <option value={unitList._id}>
                                            {unitList.medicineUnitName?unitList.medicineUnitName:""}
                                        </option>
                                        
                                        )):""} */}
                                    </select>
                                </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                <div className="row">                                    
                                <div className="col">
                                    <label>
                                        Medicine Unit Value
                                    </label>
                                </div>
                                </div>
                                <div class="form-group">
                                    <input type="number" class="form-control" placeholder="Medicine Unit Value" 
                                        onChange={(e)=>this.setState({medicineUnitValue:e.target.value})}
                                        disabled={this.state.loading}
                                    />
                                </div>
                                </div>
                                <div class="col">
                                <div className="row">                                    
                                <div className="col">
                                    <label>
                                        Is Unbox Allowed
                                    </label>
                                </div>
                                </div>
                                <div class="form-group">
                                <select class="form-control" id="sel1"
                                     disabled={this.state.loading}
                                    >
                                        <option selected>Select Status</option>
                                        <option onClick={()=>{
                                            this.setState({isUnboxAllowed:true});
                                        }}>True</option>
                                        <option onClick={()=>{
                                            this.setState({isUnboxAllowed:false})
                                        }}>False</option>
                                    </select>
                                </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                <div className="row">                                    
                                <div className="col">
                                    <label>
                                        Company Name
                                    </label>
                                </div>
                                </div>
                                <div class="form-group">
                                <select class="form-control" id="sel1"
                                        onChange={(e)=>this.setState({companyID:e.currentTarget.value})}
                                        disabled={this.state.loading}
                                    >
                                        <option>Select Compnay Name</option>
                                        {/* {this.props.company.length>0?
                                        this.props.company.map(companyData=>(

                                        <option value={companyData._id}>
                                            {companyData.companyName?companyData.companyName:""}
                                        </option>
                                        
                                        )):""} */}
                                    </select>
                                </div>
                                </div>
                                <div className="col">
                                <div className="row">                                    
                                <div className="col">
                                    <label>
                                        Employee Name
                                    </label>
                                </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                    <select class="form-control" id="sel1" 
                                        onChange={(e)=>this.setState({employeeID:e.currentTarget.value})}
                                        disabled={this.state.loading}
                                    >
                                        <option>Select Employee Name</option>
                                        {/* {this.props.employee.length>0?
                                        this.props.employee.map(employeeList=>(
                                        <option value={employeeList._id}>{employeeList.userName?employeeList.userName:""}</option>
                                        )):""} */}
                                    </select>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="row">                                    
                                    <div className="col">
                                        <label>
                                            Medicine Type Name
                                        </label>
                                    </div>
                                    </div>
                                    <div className="row">
                                    <div className="col">
                                    <select class="form-control" id="sel1"
                                        onChange={(e)=>this.setState({medicineTypeID:e.currentTarget.value})}
                                        disabled={this.state.loading}
                                    >
                                        <option>Select Medicine ID </option>
                                        {/* {this.props.medicineTypeName.length>0?
                                        this.props.medicineTypeName.map(medicineType=>(
                                        <option value={medicineType._id}>{medicineType.medicineTypeName?medicineType.medicineTypeName:""}</option>

                                        )):""} */}
                                    </select>
                                    </div>
                                </div>
                                </div>
                                <div className="col">
                                <div className="row">                                    
                                    <div className="col">
                                        <label>
                                            Medicine Image
                                        </label>
                                    </div>
                                    </div>
                                    <div className="row">
                                    <div className="col">
                                    <input type="file" class="form-control-file" id="exampleFormControlFile1"
                                        onChange={(e)=>this.setState({fileArray:e.target.files})}
                                        disabled={this.state.loading}
                                    />
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-4 mb-3">
                            <button className="btn new-med-save-1 ml-3" style={{backgroundColor:"#3A95E4",color:"white",width:"100%"}}
                        //      onClick = {()=>
                        //         {
                        //                     if (!this.state.loading) {
                        //                     this.setState(
                        //                     {
                        //                         loading: true
                        //                     },
                        //                     () => {
                        //                     this.timer = setTimeout(() => {}, this.state.loading === false);
                        //                     this.props.addMedicineAction(
                        //                     new AddMedicineClass(
                        //                         this.state.medicineName,
                        //                         this.state.salt,
                        //                         this.state.noOfSachet,
                        //                         this.state.noOfTabletsPerSachet,
                        //                         this.state.noOfTablets,
                        //                         this.state.medicineUnitID,
                        //                         this.state.medicineUnitValue,
                        //                         this.state.isUnboxAllowed,
                        //                         this.state.companyID,
                        //                         this.state.employeeID,
                        //                         this.state.medicineTypeID
                        //                     ),
                        //                     this.state.fileArray,
                        //                     this
                        //                     );
                        //                 }
                        //             );
                        //         }
                                                                
                        //     }
                                                                
                        // }
                        // class="btn btn-block"
                        // disabled={this.state.loading}
                        >
                                {/* {this.state.loading && (
                                <i class="spinner-border text-dark spinner-border-sm" role="status" />
                                )}
                                {this.state.loading && <span>Adding Medicine</span>}
                                {!this.state.loading && <span>Add Medicine</span>} */}
                                Update Medicine
                            </button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default updateMedicineForm;