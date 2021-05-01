import React from 'react'

export default function plantDisplay(props) {
    const plant = props.data;
    return (
        <div class="plant">
            <h3>Plant: {plant.plant_name}</h3>
            <p>Price: {plant.plant_price}</p>
            <p>Quantity: {plant.quantity}</p>
            <p>Plant Time: {plant.plant_time}</p>
            <p>Description: {plant.plant_desc}</p> 
        </div>
    )
}
