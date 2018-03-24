import React, { Component } from 'react';
import { queryBuilder } from '../queryBuilder.js';
import '../Css/Results.css';

import laptop from '../Images/Flat-laptop-icon.jpg';

class Results extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        };
        //this.products = [];
    }

    componentDidMount() {
        fetch(queryBuilder.createQuery())
            .then(response => response.json())
            .then(json => {
                this.setState({
                    products: json.products
                });

                // Testing
                console.log('product data', this.state.products);
                console.log(typeof this.state.products);
            });

    }

    render() {
        if (this.state.products.length == 0) {
            return null;
        }

        return (
            <div className="components-body" id="results-body">
                <div className="results-filter">
                    <div className="statement results-header">Results</div>
                    <div className="results-filter-header">Filter</div>
                    <div className="results-filter-list">
                        <ul>
                            <li>Laptops</li>
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
