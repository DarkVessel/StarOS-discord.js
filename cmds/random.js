module.exports.run = async (bot, message, args) => {
  try {
    if (!args[0]) return message.reply(`Укажите число!`);
    if (isNaN(args[0])) return message.reply(`Укажите валидное число!`);
    message.channel.send(`RANDOM: ${Math.floor(Math.random() * args[0] + 1)}`);
  } catch (err) {
    message.channel.send(
      new Discord.RichEmbed()
        .setColor("RED")
        .addField("Произошла ошибка.", err.message)
        .setFooter(bot.user.username, bot.user.displayAvatarURL)
        .setTimestamp()
    );
  }
};
module.exports.command = {
  name: "random"
};
