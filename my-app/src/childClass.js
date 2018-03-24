/**
 * Created by cathyleung on 2018-03-23.
 */
// Tester class IGNOREEEEE

import { inputData } from "./inputData.js";

export class ChildClass {

    constructor(name) {
        this.name = name;

        inputData.add('yolo from ' + this.name)
    }

}