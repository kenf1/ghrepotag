import { RequestModel } from "../models/request";
import { AllTags } from "../models/response";
export declare function fetchReleaseTags(requestModel: RequestModel): Promise<AllTags>;
export declare function getLatestSHA(allTags: AllTags): string;
