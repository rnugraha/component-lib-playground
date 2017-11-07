/**
 * Copyright (c) 2017 The Hyve B.V.
 * This code is licensed under the GNU General Public License,
 * version 3, or (at your option) any later version.
 */

import * as React from "react";
import {CheckedSelect} from 'react-select-checked';

let MY_FAV_FLAV = [
    {label: 'Caramel', value: 'caramel'},
    {label: 'Cookies and Cream', value: 'cookiescream'},
];

const IceCreamFlavourAsync = React.createClass({

    getInitialState() {
        return {
            value: MY_FAV_FLAV,
        };
    },

    handleLogChange(value) {
        console.log('Selected value: ', value);
        this.setState({
            value: value
        });
    },

    getAjaxFlavourOne(input) {
        return fetch(`./flavors_one.json`)
            .then((response) => {
                return response.json();
            }).then((json) => {
                return { options: json };
            });
    },

    getAjaxFlavourTwo(input) {
        return fetch(`./flavors_one.json`)
            .then((response) => {
                return response.json();
            }).then((json) => {
                return { options: json };
            });
    },

    render() {

        const {value} = this.state;

        return (
            <div>
                <h1> My favorite ice cream flavours in Async call </h1>
                <CheckedSelect
                    async
                    loadOptions={this.getAjaxFlavourOne}
                    onChange={this.handleLogChange}
                    placeholder="Select your favourite(s)"
                    value={value}
                />
                <br/>
            </div>
        );
    }
});

export default IceCreamFlavourAsync;


