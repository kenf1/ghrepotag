import { createFullUrl } from "./query/setup.ts";

function main() {
  const res: string | Error = createFullUrl("neovim", "neovim");
  console.log(res);
}

main();
