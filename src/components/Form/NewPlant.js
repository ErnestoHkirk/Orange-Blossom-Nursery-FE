import React, { Component } from 'react';
import ApiService from '../../services/api-service';
import './modal.css';

export class NewPlant extends Component {
    static defaultProps = {
        onPlantAddSuccess: () => {},
        closePlantModal: () => {}
    }
    state = { error: null }
    handlePlantSubmit = e => {
        e.preventDefault();
        const data = {
            plant_name: e.target.plant_name.value, 
            plant_time: e.target.plant_time.value, 
            plant_desc: e.target.plant_desc.value, 
            plant_price: e.target.plant_price.value
        };
        
        this.setState({ error: null});
        ApiService.postPlant(data).then(res => {
            this.props.onPlantAddSuccess(data);
        }).catch(res => {
            this.setState({error: res.error})
        })
    }
    closeModal = e => {
        e.preventDefault();
        this.props.closePlantModal();
    }
    render() {
        const {error} = this.state
        return (
            <React.Fragment>
                <form className="updateModal" onSubmit={this.handlePlantSubmit}>
                <button class="btn--close-modal" onClick={this.closeModal}>&times;</button>
                    <div role="alert">
                        {error && <p className="red">{error}</p>}
                    </div>
                    <div class="plantForm__header">
                        <h2 class="plantForm__headerText">Please enter the new plant information:</h2>
                    </div>
                    <div className="plantForm__name">
                        <label htmlFor="name">Plant Name: </label>
                        <input type="text" name="plant_name" className="name" required/>
                    </div>
                    <div className="PlantForm__time">
                        <label htmlFor="time">Grow Time: </label>
                        <input type="text" name="plant_time" className="time" required />
                    </div>
                    <div className="plantDescription">
                        <label htmlFor="description">Description: </label>
                        <input type="text" name="plant_desc" className="description" required/>
                    </div>
                    <div className="plantPrice">
                        <label htmlFor="price">Price: </label>
                        <input type="text" name="plant_price" className="price" required/>
                    </div>
                    <button className="btn btn-primary"type="submit"name="submit"> Add Plant </button>
                </form>
                <div class="overlay" onClick={this.closeModal}></div>
        </React.Fragment>
        )
    }
}

export default NewPlant
