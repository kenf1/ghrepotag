import { RequestModel } from "./models/request";
import { AllTags } from "./models/response";
import { fetchReleaseTags, getLatestSHA } from "./query/get";
import { createFullUrl } from "./query/setup";

export async function queryWrapper(
  orgName: string,
  repoName: string,
): Promise<string | undefined> {
  try {
    const fullUrl: string = createFullUrl(orgName, repoName);

    const requestModel: RequestModel = {
      apiEndpoint: fullUrl,
    };

    const releaseTagsJson: AllTags = await fetchReleaseTags(requestModel);
    return getLatestSHA(releaseTagsJson);
  } catch (error) {
    console.error("Error:", error);
    return undefined;
  }
}
