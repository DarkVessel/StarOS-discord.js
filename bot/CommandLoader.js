try {
  fs.readdirSync("./cmds/")
    .filter(file => file.endsWith(".js"))
    .forEach(file => {
      //Загрузчик команд.
      commands.set(
        require(`../cmds/${file}`).command.name,
        require(`../cmds/${file}`)
      );
      console.log(`[COMMANDS] Загружен ${file}!`);
    });
} catch (err) {
  console.log(err.stack);
}
