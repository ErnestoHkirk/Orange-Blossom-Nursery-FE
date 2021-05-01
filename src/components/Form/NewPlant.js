import React, { Component } from 'react'

export class NewPlant extends Component {
    render() {
        return (
            <form className="plantForm" onSubmit={this.handleAddPlantSubmit}>
            <div class="plantForm__header">
                <h2 class="plantForm__headerText">Please enter the new plant information:</h2>
            </div>
            <div className="plantForm__name">
                <label htmlFor="name">Plant Name: </label>
                <input type="text" name="name" className="name" required/>
            </div>
            <div className="PlantForm__time">
                <label htmlFor="time">Grow Time: </label>
                <input
                    type="text"
                    name="time"
                    className="time"
                    required
                />
            </div>
            <div className="plantDescription">
                <label htmlFor="description">Description: </label>
                <input
                    type="text"
                    name="description"
                    className="description"
                    required
                />
            </div>
            <div className="plantPrice">
                <label htmlFor="price">Price: </label>
                <input
                    type="text"
                    name="price"
                    className="price"
                    required
                />
            </div>
            <button
                className="handleAddPlantSubmit"
                type="submit"
                name="submit">
                Add Plant
            </button>
            <p><br></br></p>
        </form>
        )
    }
}

export default NewPlant
