/**
 * Created by cathyleung on 2018-03-24.
 *
 * Builds the query to be sent for Best Buy API.
 */
import { inputData } from "./inputData";

var baseUrl = "https://api.bestbuy.com/v1/products";
var apiKey = "?apiKey=qunSuq0NntN63fGiOKHWaykd";
var responseFormat = "&format=json";

export class QueryBuilder {

    constructor() {
        /*this.baseUrl = "https://api.bestbuy.com/v1/products";
        this.apiKey = "?apiKey=qunSuq0NntN63fGiOKHWaykd";
        this.responseFormat = "&format=json";*/
    }

    createQuery() {
        var urlString = baseUrl;
        if (inputData.filters.urlParameters.length > 0) {
            urlString = urlString + '(';

            inputData.filters.urlParameters.map(function(object) {
                urlString = urlString + object.value + "&";
            });

            urlString = urlString.replace(/.$/,")") + apiKey + responseFormat;
        }

        return urlString;
    }
}

export let queryBuilder = new QueryBuilder();

/*
 Desktops
 {
 "id": "abcat0501000",
 "name": "Desktop & All-in-One Computers"
 }

 Laptops
 {
 "id": "abcat0502000",
 "name": "Laptops"
 }

 */