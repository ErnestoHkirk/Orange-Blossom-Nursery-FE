import React from 'react';
import MasterHeader from '../components/MasterHeader/masterHeader';
import ObServices from '../components/obServices/obServices';

function Home () {
    return(
        <React.Fragment>
            <MasterHeader/>
            <ObServices/>
        </React.Fragment>
    )
}

export default Home;