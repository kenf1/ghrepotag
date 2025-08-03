"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseActionParams = parseActionParams;
const core = __importStar(require("@actions/core"));
const wrapper_1 = require("../wrapper");
async function parseActionParams() {
    try {
        const org = core.getInput("org");
        const repo = core.getInput("repo");
        const latestSHA = await (0, wrapper_1.queryWrapper)(org, repo);
        exportResult(latestSHA);
    }
    catch (error) {
        handleActionError(error, "Failed to parse release tags response");
    }
}
function exportResult(latestSHA) {
    if (latestSHA) {
        core.setOutput("latest-sha", latestSHA); //pass to following steps
        console.log("Latest SHA:", latestSHA);
    }
    else {
        core.setFailed("Latest commit SHA not found.");
    }
}
function handleActionError(error, contextMessage) {
    const message = error instanceof Error
        ? error.message
        : typeof error === "string"
            ? error
            : JSON.stringify(error);
    core.setFailed(`${contextMessage}: ${message}`);
}
