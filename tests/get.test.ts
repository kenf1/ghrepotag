import test from "node:test";
import assert from "assert";
import { appendHeaders } from "../src/query/get";

const testApiEndpoint: string = "test.endpoint";

test("appendHeaders with valid header and userAgent", () => {
  const headers = appendHeaders({
    header: "Authorization: Bearer token123",
    userAgent: "MyAgent/1.0",
    apiEndpoint: testApiEndpoint,
  });

  assert.strictEqual(headers["Authorization"], "Bearer token123");
  assert.strictEqual(headers["User-Agent"], "MyAgent/1.0");
});

test("appendHeaders with header missing colon", () => {
  const headers = appendHeaders({
    header: "InvalidHeader",
    apiEndpoint: testApiEndpoint,
  });

  assert.deepStrictEqual(headers, {});
});

test("appendHeaders with only userAgent", () => {
  const headers = appendHeaders({
    userAgent: "TestAgent",
    apiEndpoint: testApiEndpoint,
  });

  assert.deepStrictEqual(headers, { "User-Agent": "TestAgent" });
});

test("appendHeaders with empty RequestModel", () => {
  const headers = appendHeaders({ apiEndpoint: testApiEndpoint });

  assert.deepStrictEqual(headers, {});
});
