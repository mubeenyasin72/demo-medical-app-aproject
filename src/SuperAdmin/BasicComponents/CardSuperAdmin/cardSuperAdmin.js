import React, { Component } from 'react';
// import './cardadmin.css';
class cardSuperAdmin extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container" id="box">
                    <div class="card">
                        <div class="card-body">
                        <img  className="card-img-top " src={this.props.Image1?this.props.Image1:"" } />
                        <a style={{fontSize:"38px"}}>{this.props.H1?this.props.H1 :""}</a>
                           <button
                             class="btn form-btn-primary w-100"
                             onClick={this.props.onClick ? this.props.onClick : () => false}
                             style={{ width: this.props.width ? this.props.width : "100%" }}
                           >
                            {this.props.children ? this.props.children : "Button"}
                           </button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default cardSuperAdmin;