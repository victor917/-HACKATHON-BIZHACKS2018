/**
 * Created by cathyleung on 2018-03-23.
 */
// Handles calling API each time new filter data is added
import { queryBuilder } from "./queryBuilder";


export class InputData {
    constructor() {
        this.state = {
            filters: {
                urlParameters: [],
                type: "",
                customized: "",
                purpose: ""
            }
        };
        this.filters = {
            urlParameters: [],
            type: "",
            customized: "",
            purpose: ""
            /*type: "", // "desktop", "laptop"
            customized: "", // "prebuilt", "custom"
            purpose: "", // "gaming", "design", "work", "casual"
            spec1: "", // first choice from specifications
            spec2: "", // second choice from specifications
            spec3: "" // third choice from specifications*/
        }

        this.getFilters = this.getFilters.bind(this);
        this.add = this.add.bind(this);
        this.addUrlParameter = this.addUrlParameter.bind(this);
    }

    add(key, value) {
        this.filters[key] = value;
        this.state.filters[key] = value;

        // Testing
        console.log('filters state', this.state.filters);
        console.log(queryBuilder.createQuery());
    }

    addUrlParameter(key, value) {
        this.filters.urlParameters.push({key, value});
        this.state.filters.urlParameters.push({key, value});

        console.log('filters state', this.state.filters);
        console.log("value", value);
        console.log(queryBuilder.createQuery());
    }

    getFilters() {
        var arr = [];

        Object.keys(this.state.filters).forEach(function(key) {
            arr.push(this.state.filters[key]);
        });
    }
}

export let inputData = new InputData();

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