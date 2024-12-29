import { readFile, writeFile } from "../../helpers/file-helpers";

const DATABASE_PATH = "/src/database.json";

/*
`readFile` takes 1 argument:
• the path to the file:

readFile('/path/to/file');

`writeFile` takes 2 arguments:
• The path to the file
• The new contents for the file

writeFile(
  '/path/to/file',
  '{ "hello": "world" }'
);
*/

export function Hits() {
  const { hits } = JSON.parse(readFile(DATABASE_PATH));
  const newCount = hits + 1;

  writeFile(DATABASE_PATH, JSON.stringify({ hits: newCount }));

  return newCount;
}