import React, { Component } from 'react';
import UnitCard from './UnitCard/addUnitCard';
class addunitMed extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row mt-5">
                        <div className="col-12">
                            <UnitCard/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


export default addunitMed;