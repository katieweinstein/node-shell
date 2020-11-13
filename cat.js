const fs = require("fs");

const catProcess = () => {
  process.stdout.write("prompt > ");
  process.stdin.on("data", (data) => {
    const commands = data.toString().trim().split(" ");
    const fileName = commands[1];
    fs.readFile(fileName, "utf8", (err, fileName) => {
      if (err) {
        throw err;
      } else {
        process.stdout.write(fileName);
        process.stdout.write("\n");
        process.stdout.write("prompt > ");
      }
    });
  });
};

catProcess();
