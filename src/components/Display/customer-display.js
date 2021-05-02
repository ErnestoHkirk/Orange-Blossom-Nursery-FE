import React from 'react';

export default function customerDisplay(props) {
    const customer = props.data;
    return (
        <div className="row border mb-2">
            <h3 className="col-12"><span>Client:</span> {customer.client_name}</h3>
            <p className="col-6"><span className="font-weight-bold">Contact:</span> {customer.client_contact}</p>
            <p className="col-6"><span className="font-weight-bold">Manager:</span> {customer.client_account_manager}</p>
            <p className="col-6"><span className="font-weight-bold">Email:</span> {customer.email_address}</p>
            <p className="col-6"><span className="font-weight-bold">Phone:</span> {customer.client_phone}</p>
            <p className="col-6"><span className="font-weight-bold">Address:</span> {customer.client_address}</p>
            <p className="col-6"><span className="font-weight-bold">City:</span> {customer.client_city}</p>
            <p className="col-6"><span className="font-weight-bold">State:</span> {customer.client_state}</p>
            <p className="col-6"><span className="font-weight-bold">ZIP:</span> {customer.client_zip}</p>                            
        </div>
    )
}
