import React, { Component } from 'react';
import { inputData } from '../inputData.js';
import { queryBuilder } from '../queryBuilder.js';
import '../Css/Results.css';

import laptop from '../Images/Flat-laptop-icon.jpg';

class Results extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
            listOptions: []
        };
    }

    componentDidMount() {
        fetch(queryBuilder.createQuery())
            .then(response => response.json())
            .then(json => {
                var options = [];
                Object.keys(inputData.filters).map(function (key) {
                    if (key === 'type' || key === 'customized' || key === 'purpose') {
                        options.push(inputData.filters[key]);
                    }
                });

                this.setState({
                    products: json.products,
                    listOptions: options
                });

                // Testing
                console.log('product data', this.state.products);
            });
    }

    render() {
        if (this.state.products.length == 0) {
            return null;
        }

        var list = this.state.listOptions.map(function (str) {
            return <li>{str}</li>
        });

        return (
            <div className="components-body" id="results-body">
                <div className="results-filter">
                    <div className="statement results-header">Results</div>
                    <div className="results-filter-header">Filter</div>
                    <div className="results-filter-list">
                        <ul>
                            {list}
                        </ul>
                    </div>
                </div>
                <div className="results-tbl">
                    <table>
                        <thead>
                            <tr>
                                <th width="15%">Image</th>
                                <th>Product Name</th>
                                <th width="15%">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.products.map(function(object, i){
                                return <tr className={"row"} key={i}>
                                    <td className="results-tbl-td" key={"results-tbl-td-img-" + i}>
                                        {/*<Image source={{uri: object.images[0].href}} />*/}
                                        <img src={laptop}/>
                                    </td>
                                    <td className="results-tbl-td" key={"results-tbl-td-name-" + i}>
                                        <strong>{object.name}</strong>
                                    </td>
                                    <td className="results-tbl-td" key={"results-tbl-td-price-" + i}>
                                        ${object.regularPrice}
                                    </td>
                                </tr>;
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

        );
    }
}

export default Results;
