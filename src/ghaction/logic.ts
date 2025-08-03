import * as core from "@actions/core";
import { queryWrapper } from "../wrapper";

export async function parseActionParams() {
  try {
    const org: string = core.getInput("org");
    const repo: string = core.getInput("repo");

    const latestSHA: string | undefined = await queryWrapper(org, repo);
    exportResult(latestSHA);
  } catch (error) {
    handleActionError(error, "Failed to parse release tags response");
  }
}

function exportResult(latestSHA: string | undefined) {
  if (latestSHA) {
    core.setOutput("latest-sha", latestSHA); //pass to following steps
    console.log("Latest SHA:", latestSHA);
  } else {
    core.setFailed("Latest commit SHA not found.");
  }
}

function handleActionError(error: unknown, contextMessage: string) {
  const message =
    error instanceof Error
      ? error.message
      : typeof error === "string"
        ? error
        : JSON.stringify(error);

  core.setFailed(`${contextMessage}: ${message}`);
}
