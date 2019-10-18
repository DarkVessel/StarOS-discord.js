module.exports.run = async (bot, message, args) => {
  if (message.author.id !== config.botOwnerID)
    return message.channel.send(
      `Выполнять данную команду может только создатель бота!`
    );
  message.channel.send("Выполняется...").then(msg =>
    msg.edit(
      require("child_process")
        .execSync(args.join(" "))
        .toString("utf8") + ""
    )
  );
};
module.exports.command = {
  name: "console"
};
