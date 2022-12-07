const fs = require("fs");
const path = require("path");

const dir = path.join("гнозия", "сапонины");

const files = fs.readdirSync(dir)

for(let i = 0; i <= files.length; i++) {
  const file = files[i];
  fs.renameSync(path.join(dir, file), path.join(dir, i + ".jpg"));
}