import React, { Component } from 'react';
import './CombineSideNav.css';
import Sidebar from '../SideBar/SideBarumar/sidebar';
import Navebar from '../NavBar/Navbarr';
import NewInvoice from '../../Views/InvoiceView/NewInvoice/invoiceView';
class CompleteNewInvoice extends Component {
    state = {
        umar:false,   
     }   
toggleSidebar=()=> {
    document.getElementById("sidebar").classList.toggle('active');
    {
    this.state.umar===true?
    this.setState({umar:false}):this.setState({umar:true})
    } 
}


    render() { 
        console.log(this.state.umar);
        return ( 
            <React.Fragment>
                        <div id="example2" style={{transition: "all 700ms" }} className={this.state.umar===false? "classes.headerAndBodyContainer" :  "headerAndBodyContainerClose"}>
                                <Sidebar toggleSidebar={this.toggleSidebar}
                               
                                /> 
                        <div style={{marginLeft:"80px" , }}>
                            <Navebar/>
                        </div>
                        </div>
                 <div style={{transition: "all 700ms"}} className={this.state.umar===true? "headerAndBodyContainerClose" : "classes.headerAndBodyContainer"}>
                        <div class="scroll">
                        <NewInvoice/>
                        </div>
                        </div> 
                        <div>
                            
                        </div>
 
            </React.Fragment>
         );
    }
}
 
export default CompleteNewInvoice;