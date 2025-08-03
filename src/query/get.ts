import { RequestModel } from "../models/request";
import { AllTags } from "../models/response";

//add header + user agent if available
function appendHeaders(requestModel: RequestModel): Record<string, string> {
  const headers: Record<string, string> = {};

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

export async function fetchReleaseTags(
  requestModel: RequestModel,
): Promise<AllTags> {
  const headers: Record<string, string> = appendHeaders(requestModel);

  const response = await fetch(requestModel.apiEndpoint, {
    headers,
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  return await response.json();
}

export function getLatestSHA(allTags: AllTags): string {
  if (allTags[0]) {
    return allTags[0].commit.sha;
  }

  throw new Error("Response json has length 0");
}
