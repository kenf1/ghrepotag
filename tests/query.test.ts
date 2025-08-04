import test from "node:test";
import assert from "assert";
import { createFullUrl } from "../src/query/setup";

function throwsError(fn: () => any, expectedMessage: string) {
  try {
    fn();
    assert.fail("Expected error was not thrown");
  } catch (err) {
    assert.strictEqual(err.message, expectedMessage);
  }
}

test("createFullUrl throws error if orgName is null or empty", () => {
  throwsError(() => createFullUrl(null, "repo"), "orgName cannot be empty");
  throwsError(() => createFullUrl("", "repo"), "orgName cannot be empty");
});

test("createFullUrl throws error if repoName is null or empty", () => {
  throwsError(() => createFullUrl("org", null), "repoName cannot be empty");
  throwsError(() => createFullUrl("org", ""), "repoName cannot be empty");
});

test("createFullUrl returns correct URL for valid inputs", () => {
  const url = createFullUrl("org", "repo");
  assert.strictEqual(url, "https://api.github.com/repos/org/repo/tags");
});
