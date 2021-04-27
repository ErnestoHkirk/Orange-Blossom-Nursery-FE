import React from 'react';
import {Link} from 'react-router-dom';
//import VenderService from '../../../ob332be/src/routes/vendor/vender-service';
import { PlantProvider } from '../context/PlantContext';
import { VendorProvider } from '../context/VendorContext';

export default function dashboard() {
    return (
        <VendorProvider>
            <PlantProvider>
                <Link to="/">New Order</Link>
                <Link to="/">Vendor Order</Link>
                <Link to="/">Delivery Form</Link>
                <Link to="/">Pending Order</Link>
                <Link to="/">Statement</Link>
            </PlantProvider>
        </VendorProvider>
    )
}
