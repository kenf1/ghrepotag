import { RequestModel } from "./models/request.ts";
import { AllTags } from "./models/response.ts";
import { fetchReleaseTags, getLatestSHA } from "./query/get.ts";
import { createFullUrl } from "./query/setup.ts";

export async function mainWrapper(orgName: string, repoName: string) {
  try {
    const res: string = createFullUrl(orgName, repoName);

    const requestModel: RequestModel = {
      apiEndpoint: res,
    };

    const releaseTagsJson: AllTags = await fetchReleaseTags(requestModel);
    const latestSHA: string = getLatestSHA(releaseTagsJson);

    console.log(latestSHA);
  } catch (error) {
    console.error("Error:", error);
  }
}
