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

class IceCreamFlavourAsync extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleLogChange = this.handleLogChange.bind(this);
        this.getAjaxFlavourOne = this.getAjaxFlavourOne.bind(this);
        this.getAjaxFlavourTwo = this.getAjaxFlavourTwo.bind(this);

        this.state = {
            value: [],
        };
    }

    handleLogChange(value) {
        console.log('Selected value: ', value);
        this.setState({
            value: value
        });
    }

    getAjaxFlavourOne(input) {
        return fetch(`./flavors_one.json`)
            .then((response) => {
                return response.json();
            }).then((json) => {
                return { options: json };
            });
    }

    getAjaxFlavourTwo(input) {
        return fetch(`./flavors_one.json`)
            .then((response) => {
                return response.json();
            }).then((json) => {
                return { options: json };
            });
    }

    /**
     * get options async
     */
    getGitHubUsers(input) {
        return fetch(
            'https://api.github.com/search/repositories?q=stars:%3E1+language:javascript&sort=stars&order=desc&type=Repositories'
        )
            .then(response => {
                return response.json();
            })
            .then(json => {
                let githubUsers = json.items.map(user => {
                    return {
                        label: user.full_name,
                        value: user.name
                    };
                });
                return { options: githubUsers };
            });
    }

    render() {

        const {value} = this.state;

        return (
            <div>
                <h1> My favorite ice cream flavours in Async call </h1>
                <CheckedSelect
                    async
                    loadOptions={this.getGitHubUsers}
                    onChange={this.handleLogChange}
                    placeholder="Select your favourite(s)"
                    value={value}
                />
                <br/>
            </div>
        );
    }
}

export default IceCreamFlavourAsync;


