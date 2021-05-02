import React, { Component } from 'react';
import PlantContext from '../../context/PlantContext';
import PlantDisplay from './plant-display';


export class PlantOrderDisplay extends Component {
    static contextType = PlantContext

    render() {
        const {order} = this.context;
        return (
            <div className="row border-top mt-4"> 
                <h2 className="btn-secondary btn-lg btn-block">Current Order</h2>
                {order.map(plant => {
                    return(
                        <React.Fragment>
                            <PlantDisplay data={plant} quantity={plant.quantity}/>
                        </React.Fragment>
                    )
                })}
               
            </div>
        )
    }
}

export default PlantOrderDisplay;
