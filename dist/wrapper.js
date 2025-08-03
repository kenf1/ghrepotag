"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryWrapper = queryWrapper;
const get_1 = require("./query/get");
const setup_1 = require("./query/setup");
async function queryWrapper(orgName, repoName) {
    try {
        const fullUrl = (0, setup_1.createFullUrl)(orgName, repoName);
        const requestModel = {
            apiEndpoint: fullUrl,
        };
        const releaseTagsJson = await (0, get_1.fetchReleaseTags)(requestModel);
        return (0, get_1.getLatestSHA)(releaseTagsJson);
    }
    catch (error) {
        console.error("Error:", error);
        return undefined;
    }
}
