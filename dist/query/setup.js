"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFullUrl = createFullUrl;
//wrapper function to check required params
function validateParam(param, name) {
    if (param == null || param === "") {
        return new Error(`${name} cannot be empty`);
    }
    return null;
}
function createFullUrl(orgName, repoName) {
    const orgNameError = validateParam(orgName, "orgName");
    if (orgNameError)
        throw orgNameError;
    const repoNameError = validateParam(repoName, "repoName");
    if (repoNameError)
        throw repoNameError;
    return `https://api.github.com/repos/${orgName}/${repoName}/tags`;
}
