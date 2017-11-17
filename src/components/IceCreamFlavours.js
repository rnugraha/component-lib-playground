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
    {label: 'Coconut', value: 'coconut'},
];

let MY_FAV_FLAV = [
    {label: 'Cookies and Cream', value: 'cookiescream'},
    {label: 'Coconut', value: 'coconut'},
];

let MY_FAV_FLAV_2 = [
    {label: 'Peppermint', value: 'peppermint'},
];

class IceCreamFlavour extends React.Component {

    constructor(props, context) {
        super(props, context)

        this.handleLogChange = this.handleLogChange.bind(this);
        this.handleFlavourOne = this.handleFlavourOne.bind(this);
        this.handleFlavourTwo = this.handleFlavourTwo.bind(this);
        this.handleMyFlavourA = this.handleMyFlavourA.bind(this);
        this.handleMyFlavourB = this.handleMyFlavourB.bind(this);

        this.state = {
            options: FLAVOURS_2,
            value: MY_FAV_FLAV,
        };
    }

    handleFlavourOne() {
        this.setState(
            {
                options: FLAVOURS_1,
            }
        );
    }

    handleFlavourTwo() {
        this.setState(
            {
                options: FLAVOURS_2,
            }
        );
    }

    handleMyFlavourA() {
        this.setState({
                value: MY_FAV_FLAV,
            }
        );
    }

    handleMyFlavourB() {
        this.setState({
                value: MY_FAV_FLAV_2,
            }
        );
    }

    handleLogChange(value) {
        console.log('Selected value: ', value);
        this.setState({
            value: value
        });
    }

    render() {
        const {options, value} = this.state;

        return (
            <div>

                <h1> My favorite ice cream flavours </h1>

                {
                    value.map(flav => {
                        return <span key={flav.value}> {flav.label} </span>;
                    })
                }

                <br/>

                <CheckedSelect
                    onChange={this.handleLogChange}
                    options={options}
                    placeholder="Select your favourite(s)"
                    value={value}
                />
                <br/>
                <button onClick={this.handleFlavourOne}>Show FlavourI (4)</button>
                <button onClick={this.handleFlavourTwo}>Show FlavourII (3)</button>
                <br/>
                <button onClick={this.handleMyFlavourA}>Change values to Coconut and Choco Cream</button>
                <button onClick={this.handleMyFlavourB}>Change values constructor Pepermint</button>

            </div>
        );
    }
}

export default IceCreamFlavour;


