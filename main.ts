import fs from "node:fs";

const entry =
  "I am sorry I gave the dog 3 millilitres of the cat's heart medicine because I read only the first three letters on two identical white bottles.\n" +
  "I learned to read the full label and match the name on the bottle to the name on the feeding bowl before I open anything.\n";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", entry, "utf8");
