module.exports.run = async (bot, message, args) => {
  if (!args[0]) return message.reply(`Укажите число!`);
  if (isNaN(args[0])) return message.reply(`Укажите валидное число!`);
  message.channel.send(`RANDOM: ${Math.floor(Math.random() * args[0] + 1)}`);
};
module.exports.command = {
  name: "random"
};
