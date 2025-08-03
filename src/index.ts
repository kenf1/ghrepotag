import { parseActionParams } from "./ghaction/logic";

parseActionParams().catch((error) => {
  console.error(error);
  process.exit(1);
});
