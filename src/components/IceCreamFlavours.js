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
];

const IceCreamFlavour = React.createClass({

    getInitialState() {
        return {
            isOptionsChanged: false,
            options: FLAVOURS_2,
            value: MY_FAV_FLAV,
        };
    },

    handleFlavourOne() {
        this.setState(
            {
                options: FLAVOURS_1,
                isOptionsChanged: true,
            }
        );
    },

    handleFlavourTwo() {
        this.setState(
            {
                options: FLAVOURS_2,
                isOptionsChanged: true,
            }
        );
    },

    handleLogChange(value) {
        console.log('Selected value: ', value);
        this.setState({
            value: value
        });
    },

    handleOptionsChange(oldOptions, newOptions) {
        console.log('handleOptionsChange..', oldOptions, newOptions);
        this.setState(
            {isOptionsChanged: false}
        );
    },

    render() {
        const {isOptionsChanged, options, value} = this.state;
        return (
            <div>
                <h1> My favorite ice cream flavours </h1>
                <CheckedSelect
                    isOptionsChanged={isOptionsChanged}
                    onChange={this.handleLogChange}
                    onOptionsChange={this.handleOptionsChange}
                    options={options}
                    placeholder="Select your favourite(s)"
                    value={value}
                />
                <br/>
                <button onClick={this.handleFlavourOne}>Show FlavourI (4)</button>
                <button onClick={this.handleFlavourTwo}>Show FlavourII (3)</button>
            </div>
        );
    }
});

export default IceCreamFlavour;


