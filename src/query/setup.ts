//wrapper function to check required params
function validateParam(
  param: string | null | undefined,
  name: string,
): Error | null {
  if (param == null || param === "") {
    return new Error(`${name} cannot be empty`);
  }

  return null;
}

export function createFullUrl(
  orgName: string | null | undefined,
  repoName: string | null | undefined,
): string {
  const orgNameError = validateParam(orgName, "orgName");
  if (orgNameError) throw orgNameError;

  const repoNameError = validateParam(repoName, "repoName");
  if (repoNameError) throw repoNameError;

  return `https://api.github.com/repos/${orgName}/${repoName}/tags`;
}
