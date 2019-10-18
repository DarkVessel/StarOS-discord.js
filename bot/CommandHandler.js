try {
  bot.on("message", async message => {
    if(message.channel.type == 'dm') return 
    if(message.author.bot) return
    if(message.guild.id !== config.serverID) return
    let prefix = config.prefix;
    let args = message.content
      .slice(prefix.length)
      .trim()
      .split(" ");
    let command = args.shift().toLowerCase();
    if (!message.content.startsWith(prefix)) return;
    let cmd = commands.get(command);
    if (cmd) cmd.run(bot, message, args);
  });
} catch (err) {
  console.log(err.stack);
}
