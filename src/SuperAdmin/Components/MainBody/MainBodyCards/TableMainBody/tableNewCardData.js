import React, { Component } from 'react';
class tableNewCardData extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row mt-4">
                        <div className="col-12">
                            <div class="card ml-5" style={{width:"30rem"}}>
                                <div class="card-body">
                                        <h6 style={{fontFamily:"Alegreys Sans",fontSize:"18px",lineHeight:"26px",color:"#374767"}}>
                                            Todays Report
                                            <hr/>
                                        </h6>
                                        <table class="table table-bordered">
                                        <thead class="thead-light">
                                            <tr>
                                            <th scope="col" style={{fontFamily:"Alegreys Sans",fontSize:"18px",lineHeight:"26px",color:"#374767"}}><b>Todays Report</b></th>
                                            <th scope="col" style={{fontFamily:"Alegreys Sans",fontSize:"18px",lineHeight:"26px",color:"#374767"}}><b>Ammount</b></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <td><b>Total Sales</b></td>
                                            <td>$ 0.00</td>
                                            </tr>
                                            <tr>
                                            <td><b>Total Purchase</b></td>
                                            <td>$ 0.00</td>
                                            </tr>
                                        </tbody>
                                        </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


export default tableNewCardData;