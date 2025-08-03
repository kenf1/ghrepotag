"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchReleaseTags = fetchReleaseTags;
exports.getLatestSHA = getLatestSHA;
//add header + user agent if available
function appendHeaders(requestModel) {
    const headers = {};
    if (requestModel.header) {
        const [key, ...rest] = requestModel.header.split(":");
        if (key && rest.length > 0) {
            headers[key.trim()] = rest.join(":").trim();
        }
    }
    if (requestModel.userAgent) {
        headers["User-Agent"] = requestModel.userAgent;
    }
    return headers;
}
async function fetchReleaseTags(requestModel) {
    const headers = appendHeaders(requestModel);
    const response = await fetch(requestModel.apiEndpoint, {
        headers,
    });
    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
}
function getLatestSHA(allTags) {
    if (allTags[0]) {
        return allTags[0].commit.sha;
    }
    throw new Error("Response json has length 0");
}
