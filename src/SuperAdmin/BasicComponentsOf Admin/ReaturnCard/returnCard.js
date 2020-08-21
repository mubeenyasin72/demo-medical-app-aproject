import React, { Component } from 'react';

class returnCard extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="card" style={{width:"100%",height:"100%"}}>
                        {/* <div class="card-body"> */}
                            {this.props.children? this.props.children : "USMAN"}
                        {/* <h6 style={{fontSize:"15px"}}>{this.children.H6?this.children.H6 :""}</h6> */}
                        {/* </div> */}
                </div>
            </React.Fragment>
        );
    }
}
export default returnCard;