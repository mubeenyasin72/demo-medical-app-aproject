import React, { Component } from 'react';
import Pics1 from "..//Assets/Imagess/photo-1488181665079-6c7f3b399bf4.jpg";
import {Link} from "react-router-dom";
class newnavbar extends Component {
    state = { 
        underlines:false
        
     }
     showunderline=()=>{
         this.setState({underlines:!this.state.underlines})
     }
    render() { 
        return ( 
            <React.Fragment>
                <div className="container" style={{marginTop:"100px",padding:"20px"}}>
                    
                            <div className="card" style={{border:"none"}}>
                           <Link to="ProductView"> <img  className="card-img-top " src={this.props.Image1?this.props.Image1:require("..//Assets/Imagess/photo-1488181665079-6c7f3b399bf4.jpg")} width="100%"  height="500px"/></Link>
                            <div className="card-text" style={{textAlign:"left",marginTop:"25px"}} >
                                <h1 style={{fontSize:"38px"}}>{this.props.H1?this.props.H1 :"Low Light Subscription"}</h1>
                                <p>{this.props.P1?this.props.P1: "The gift that keeps on giving! Keep it low key and low maintenance with our monthly subscription box of low light tolerant plants."}</p>
                    <p style={{color:"#00AB84",fontWeight:"bolder",pointerEvents:"unset"}} class="underline4">Shop Now <i class="fas fa-arrow-right"></i></p>
                        </div>
                       
                    </div>
                </div>



            </React.Fragment>

         );
    }
}
 
export default newnavbar;