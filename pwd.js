const pwdProcess = () => {
  process.stdout.write("prompt > ");

  process.stdin.on("data", (data) => {
    const fileName = data.toString().trim();
    const directory = process.cwd(fileName);
    process.stdout.write(directory);
    process.stdout.write("\nprompt > ");
  });
};

module.exports = pwdProcess;
