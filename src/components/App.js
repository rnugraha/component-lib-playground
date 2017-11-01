import React from 'react';
import PropTypes from 'prop-types';
import { CheckedSelect } from 'react-select-checked';

import '../assets/stylesheets/base.scss';


const FLAVOURS = [
    {label: 'Chocolate', value: 'chocolate', disabled: true},
    {label: 'Vanilla', value: 'vanilla'},
    {label: 'Strawberry', value: 'strawberry', isSelected: true},
    {label: 'Caramel', value: 'caramel', isSelected: true},
    {label: 'Cookies and Cream', value: 'cookiescream'},
    {label: 'Peppermint', value: 'peppermint'},
    {label: 'Coconut', value: 'coconut',},
];

function logChange(val) {
    console.log('Selected value: ', val);
}

const App = ({name}) => {
    const containerStyle = {
        width: '400px',
    };
    return (
        <div>
            <h1>Hello, {name}!</h1>
            <div style={containerStyle}>
                <CheckedSelect
                    onChange={logChange}
                    options={FLAVOURS}
                    placeholder="Select your favourite(s)"
                />
            </div>
        </div>
    );
};

App.propTypes = {
    name: PropTypes.string,
};

export default App;
