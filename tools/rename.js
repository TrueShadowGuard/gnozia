const fs = require("fs");
const path = require("path");

const dir = path.resolve("src", "static", "kolok4");
console.log(dir);

const files = fs.readdirSync(dir)

for (let i = 0; i <= files.length; i++) {
  const file = files[i];
  fs.renameSync(path.join(dir, file), path.join(dir, i + ".jpg"));
}