/**
 * Created by cathyleung on 2018-03-23.
 */
// Handles calling API each time new filter data is added

export class InputData {
    constructor() {
        this.filters = {
            type: "", // "desktop", "laptop"
            customized: "", // "prebuilt", "custom"
            purpose: "", // "gaming", "design", "work", "casual"
            spec1: "", // first choice from specifications
            spec2: "", // second choice from specifications
            spec3: "" // third choice from specifications
        }
    }

    add(key, value) {
        this.filters[key] = value;

        // Testing
        console.log('filters', this.filters);
    }
}

export let inputData = new InputData();