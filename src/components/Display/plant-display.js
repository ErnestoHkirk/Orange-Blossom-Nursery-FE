import React from 'react'

export default function plantDisplay(props) {
    const plant = props.data;
    return (
        <div class="row border mb-2">
            <h3 className="col-12">Plant: {plant.plant_name}</h3>
            <p className="col-6"><span className="font-weight-bold">Price:</span> {plant.plant_price}</p>
            {props.quantity && <p className="col-6"><span className="font-weight-bold">Quantity:</span> {props.quantity}</p>}
            <p className="col-6"><span className="font-weight-bold">Plant Time:</span> {plant.plant_time}</p>
            <p className="col-12"><span className="font-weight-bold">Description:</span> {plant.plant_desc}</p> 
        </div>
    )
}
