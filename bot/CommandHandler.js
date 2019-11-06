try {
  bot.on("message", async message => {
    if(message.channel.type == 'dm') return 
    if(message.author.bot) return
    let prefix = config.prefix;
    let args = message.content
      .slice(prefix.length)
      .trim()
      .split(" ");
    let command = args.shift().toLowerCase();
    if (!message.content.startsWith(prefix)) return;
    let cmd = commands.get(command);
    await MongoDB.config._toCollection();
    let res = MongoDB.config.findOne({ GuildId: message.guild.id });
    if(res.Commands == false) {
      let roleStaff = message.guild.roles.find(
      r => r.id === "614716288345964548"
    );
      if (message.member.roles.has(roleStaff.id)) {
        if (cmd) cmd.run(bot, message, args);
        return
      }
      message.channel.send("**🛠 Функция отключена вам отвечать на команду. 🛠**")
      return
    }
    
    if (cmd) {
      cmd.run(bot, message, args); 
    }
  });
} catch (err) {
  console.log(err.stack);
}
