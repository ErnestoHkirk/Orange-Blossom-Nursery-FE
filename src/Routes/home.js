import React from 'react';
import MasterHeader from '../components/MasterHeader/masterHeader';
import ObServices from '../components/obServices/obServices';
import Team from '../components/Team/team';
function Home () {
    return(
        <React.Fragment>
            <MasterHeader/>
            <ObServices/>
            <Team/>
        </React.Fragment>
    )
}

export default Home;