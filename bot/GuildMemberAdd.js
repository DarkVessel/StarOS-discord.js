try {
  bot.on("guildMemberAdd", async member => {
    //При входе участника на сервер.
    member
      .send(
        "Нажмите ❤ если вы Русский.\nPress 💛 if you are English.\nНатисніть 💚 якщо ви Українець."
      )
      .then(msg => {
        //Ставим реакции на это сообщение.
        msg.react("❤").then(r => {
          msg.react("💛");
          msg.react("💚");
          const a = (reaction, user) =>
            reaction.emoji.name === "❤" && user.id === member.id;
          const b = (reaction, user) =>
            reaction.emoji.name === "💛" && user.id === member.id;
          const g = (reaction, user) =>
            reaction.emoji.name === "💚" && user.id === member.id;
          const d = msg.createReactionCollector(a); //Создаём коллектор.
          const z = msg.createReactionCollector(b);
          const l = msg.createReactionCollector(g);
          d.on("collect", r => {
            bot.channels
              .get(config.ChannelWelcomeID)
              .send(`${member} Пришёл 😃`);
            let roleS = member.guild.roles.find(r => r.id === config.RoleRuID);
            if (!member.roles.has(roleS.id)) {
              member.addRole(roleS);
            }
            msg.edit("❤ | Вы успешно указали свой язык!").then(msg => {
              msg.reactions.forEach(e => e.remove(bot.user.id));
              d.stop();
              z.stop(); //Останавливаем коллекторы.
            });
          });
          z.on("collect", r => {
            bot.channels
              .get(config.ChannelWelcomeID)
              .send(`${member} Has come 😃`);
            let roleS = member.guild.roles.find(r => r.id === config.RoleEnID);
            if (!member.roles.has(roleS.id)) {
              member.addRole(roleS); //Выдаём роль.
            }
            msg
              .edit("💛 | You have successfully entered your language!")
              .then(msg => {
                msg.reactions.forEach(e => e.remove(bot.user.id)); //Убираем реакции у бота.
                d.stop();
                z.stop();
              });
          });
          l.on("collect", r => {
            bot.channels
              .get(config.ChannelWelcomeID)
              .send(`${member} Прийшов 😃`);
            let roleS = member.guild.roles.find(r => r.id === config.RoleУкID);
            if (!member.roles.has(roleS.id)) {
              member.addRole(roleS); //Выдаём роль.
            }
            msg.edit(`💚 | Ви успішно вказали свою мову!`).then(msg => {
              msg.reactions.forEach(e => e.remove(bot.user.id)); //Убираем реакции у бота.
              d.stop();
              z.stop();
            });
          });
        });
      });
  });
} catch (err) {
  console.log(err.stack);
}
