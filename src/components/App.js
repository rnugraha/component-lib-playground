import React from 'react';
import PropTypes from 'prop-types';

import '../assets/stylesheets/base.scss';
import IceCreamFlavours from "./IceCreamFlavours";
import IceCreamFlavoursAsync from "./IceCreamFlavoursAsync";

const App = ({name}) => {
    const containerStyle = {
        width: '500px',
    };
    return (
        <div>
            <div style={containerStyle}>
                <IceCreamFlavours />
                <IceCreamFlavoursAsync />
            </div>
        </div>
    );
};

App.propTypes = {
    name: PropTypes.string,
};

export default App;
