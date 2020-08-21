import React, { Component } from 'react';
import TableCard from './MedicineTypeCards/TableCard/tableCardMedType';
import InputCard from './MedicineTypeCards/InputFiledCard/inputFieldCard';

class medicineType extends Component {
state={

}

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row mt-5">
                        <div className="col-12">
                            <InputCard/>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12">
                            <TableCard 
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


export default medicineType;