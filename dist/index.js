"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logic_1 = require("./ghaction/logic");
(0, logic_1.parseActionParams)().catch((error) => {
    console.error(error);
    process.exit(1);
});
