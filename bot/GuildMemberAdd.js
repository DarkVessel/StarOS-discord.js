try {
  bot.on("guildMemberAdd", async member => {
    await MongoDB.config._toCollection();
    let res = MongoDB.config.findOne({ GuildId: member.guild.id });
    if(res.UU == false) return bot.channels.get(config.ChannelWelcomeID).send(`${member} Зашёл на сервер.`)
    let Message = [
      `${member} Пришёл 😃`,
      `${member} Пришёл :0`,
      `${member} Пришёл :>`,
      `${member} Пришёл :)`,
      `${member} Пришёл, подержите его пиво.`,
      `${member} Приехал.`,
      `${member} Оставь своё оружие у двери`,
      `Опа, а вот и ${member}.`,
      `Привет, ${member}, прочитай правила или съем!`,
      `${member} Добро пожаловать.`,
      `${member} Пришёль 😃`,
      `Привет, ${member}, ты принёс хлебушек?`,
      `${member} Приземляется на сервер :0`,
      `${member} уже здесь.`,
      `${member} присоединяется...наверное.`,
      `А вот и ${member} пришёл.`
    ];
    let random = Math.floor(Math.random() * Message.length);
    bot.channels.get(config.ChannelWelcomeID).send(Message[random]);
  });
} catch (err) {
  console.log(err.stack);
}
