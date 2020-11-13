const fs = require("fs");

const lsProcess = () => {
  process.stdout.write("prompt > ");
  process.stdin.on("data", (data) => {
    fs.readdir("./", "utf8", (err, files) => {
      if (err) {
        throw err;
      } else {
        process.stdout.write(files.join("\n"));
        process.stdout.write("\n");
        process.stdout.write("prompt > ");
      }
    });
  });
};

lsProcess();
