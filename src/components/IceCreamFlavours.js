/**
 * Copyright (c) 2017 The Hyve B.V.
 * This code is licensed under the GNU General Public License,
 * version 3, or (at your option) any later version.
 */

import * as React from "react";
import {CheckedSelect} from 'react-select-checked';

const FLAVOURS_1 = [
    {label: 'Chocolate', value: 'chocolate', disabled: true},
    {label: 'Vanilla', value: 'vanilla'},
    {label: 'Strawberry', value: 'strawberry'},
    {label: 'Caramel', value: 'caramel'},
];

const FLAVOURS_2 = [
    {label: 'Cookies and Cream', value: 'cookiescream'},
    {label: 'Peppermint', value: 'peppermint'},
    {label: 'Coconut', value: 'coconut',},
];

let MY_FAV_FLAV = [
    {label: 'Caramel', value: 'caramel'},
    {label: 'Cookies and Cream', value: 'cookiescream'},
    {label: 'Chocolate', value: 'chocolate'},
];

const IceCreamFlavour = React.createClass({

    getInitialState() {
        return {
            options: FLAVOURS_2,
            value: [],
        };
    },

    handleFlavourOne() {
        this.setState(
            {options: FLAVOURS_1}
        );
    },

    handleFlavourTwo() {
        this.setState(
            {options: FLAVOURS_2}
        );
    },

    handleLogChange(value) {
        console.log('Selected value: ', value);
        this.setState({
            value: value
        });
    },

    render() {
        const {options, value} = this.state;
        return (
            <div>
                <h1> My favorite ice cream flavours </h1>
                <CheckedSelect
                    onChange={this.handleLogChange}
                    options={options}
                    placeholder="Select your favourite(s)"
                    value={value}
                />
                <br/>
                <button onClick={this.handleFlavourOne}>Show Flavour 1</button>
                <button onClick={this.handleFlavourTwo}>Show Flavour 2</button>
            </div>
        );
    }
});

export default IceCreamFlavour;


