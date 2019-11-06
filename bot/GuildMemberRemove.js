try {
  bot.on("guildMemberRemove", async member => {
    await MongoDB.config._toCollection();
    let res = MongoDB.config.findOne({ GuildId: member.guild.id });
    if(res.UU == false) return bot.channels.get(config.ChannelWelcomeID).send(`${member} Присоединился к серверу.`);
    let Message = [
      `${member.user.tag} ушёл.`,
      `${member.user.tag} свалился с земли.`,
      `${member.user.tag} умер из-за жестоких правил сервера.`,
      `${member.user.tag} сдох.`,
      `${member.user.tag} перепил.`,
      `${member.user.tag} куда-то свалил`,
      `${member.user.tag} выпал из мира.`,
      `${member.user.tag} А?`,
      `${member.user.tag} уехал.`,
      `${member.user.tag} заблудился`,
      `${member.user.tag} тихо вышел.`,
      `${member.user.tag} умер.`
    ];
    let random = Math.floor(Math.random() * Message.length)
    bot.channels.get(config.ChannelWelcomeID).send(Message[random]);
  });
} catch (err) {
  console.log(err.stack);
}
