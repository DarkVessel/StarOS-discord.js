exports.run = (bot, message, args) => {
  const { botOwnerID } = config;
  if (message.author.id !== botOwnerID)
    return message.channel.send(
      `Выполнять данную команду может только создатель бота!`
    );
  function clean(text) {
    if (typeof text === "string")
      return text
        .replace(/`/g, "`" + String.fromCharCode(8302))
        .replace(/@/g, "@" + String.fromCharCode(8203));
    else return text;
  }
  try {
    var input = args.join(" ");
    let evalcode = eval(input);
    if (typeof evalcode !== "string")
      evalcode = require("util").inspect(evalcode);
    message.channel.send(
      new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField(`Команда`, `\`\`\`js\n${input}\`\`\``)
        .addField(`Данные`, `\`\`\`js\n${clean(evalcode)}\`\`\``)
        .addField(`Тип`, `\`\`\`\n${typeof evalcode}\`\`\``)
        .setColor(colors)
    );
  } catch (e) {
    message.channel.send(
      new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField(`Ошибка`, `\`\`\`js\n${clean(e)}\`\`\``)
    );
  }
};
exports.command = {
  name: "eval"
};
