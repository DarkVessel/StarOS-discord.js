try {
  module.exports.run = async (bot, message, args) => {
    const member = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[0])
    );
    let rUser = message.guild.member(
      message.mentions.users.first() ||
        message.guild.members.get(args[0]) ||
        message.author
    );
    if (!member)
      return message.channel.send(
        new Discord.RichEmbed()
          .setColor("RED")
          .setAuthor("Укажите пользователя!")
          .setFooter(message.author.username, message.author.displayAvatarURL)
          .setTimestamp()
      );
    if (member.id == message.author.id)
      return message.channel.send(
        new Discord.RichEmbed()
          .setColor("RED")
          .setAuthor("Нельзя перекинуть деньги самому себе!")
          .setFooter(message.author.username, message.author.displayAvatarURL)
          .setTimestamp()
      );
    let Message = [
      ",-,",
      ",_,",
      "<_<",
      ";-;",
      ";_;",
      ":D",
      "D:",
      ":<",
      ":>",
      "ツ",
      ">_>",
      ";d",
      ":/",
      " ( ͡° ͜ʖ ͡°)",
      " ( ͠° ͟ʖ ͡°)",
      "( ͡~ ͜ʖ ͡°)",
      "( ͡ʘ ͜ʖ ͡ʘ)",
      "(° ͜ʖ °)",
      "( ‾ʖ̫‾)",
      "( ಠ ͜ʖ ಠ)",
      "凸༼ຈل͜ຈ༽凸",
      "(ᗒᗣᗕ)՞",
      "( ͡° ʖ̯ ͡°)",
      "( ͡ಥ ͜ʖ ͡ಥ)",
      "༼  ͡° ͜ʖ ͡°  ༽",
      "(▀̿Ĺ̯▀̿ ̿)",
      "( ✧≖ ͜ʖ≖)",
      "(ง ͠° ͟ل͜ ͡°)ง",
      "(͡ ͡° ͜ つ ͡͡°)",
      "[̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅]",
      "(✿❦ ͜ʖ ❦)",
      "ᕦ( ͡° ͜ʖ ͡°)ᕤ",
      "( ͡° ͜ʖ ͡°)╭∩╮",
      "(╯ ͠° ͟ʖ ͡°)╯",
      "ツ",
      "(ಠಠ)",
      "ʕ ͡° ʖ̯ ͡°ʔ",
      "(☞ ͡° ͜ʖ ͡°)☞",
      "(‡▼益▼)",
      "(‡▼益▼)",
      "ᕕ( ͡° ͜ʖ ͡°)ᕗ",
      "◕‿↼",
      "(ó﹏ò｡)",
      "٩(^ᴗ^)۶",
      "ↀᴥↀ",
      "(ﾉ◕ヮ◕)ﾉ:･ﾟ✧",
      " (^-^) /",
      "ᕦ(òóˇ)ᕤ",
      "Низя!",
      "Ты Китикет?",
      "Я люблю Китикет!",
      "Шо?",
      "!",
      "Я забаню Кролега.",
      '" "',
      "Wo",
      "ААА",
      "В чём секрет кота Бориса?",
      "Ну ну.",
      "Kavo",
      "Всё ясно это ловушка.",
      "Sorry.",
      "RANDOOOOOOOOOOOOOM"
    ];
    await MongoDB.config._toCollection();
    let res3 = MongoDB.config.findOne({ GuildId: message.guild.id });
    let random = Math.floor(Math.random() * Message.length);
    if (rUser.user.bot)
      return message.channel.send(
        res.UU == false ? "Нельзя ботам кидать деньги" : Message[random]
      );
    await MongoDB.coins._toCollection();
    let res = MongoDB.coins.findOne({ UserId: message.author.id });
    let res2 = MongoDB.coins.findOne({ UserId: member.id });
    let embed = new Discord.RichEmbed()
      .setColor("RED")
      .setAuthor("У вас 0 монет!")
      .setFooter(message.author.username, message.author.displayAvatarURL)
      .setTimestamp();
    if (res.UserId == undefined) return message.channel.send(embed);
    if (res.coins == 0) return message.channel.send(embed);
    if (!args[1])
      return message.channel.send(
        new Discord.RichEmbed()
          .setColor("RED")
          .setAuthor("Укажи сумму!")
          .setFooter(message.author.username, message.author.displayAvatarURL)
          .setTimestamp()
      );
    if (isNaN(args[1]))
      return message.channel.send(
        new Discord.RichEmbed()
          .setColor("RED")
          .setAuthor("Укажи валидное число!")
          .setFooter(message.author.username, message.author.displayAvatarURL)
          .setTimestamp()
      );
    if (res.coins < args[1])
      return message.channel.send(
        new Discord.RichEmbed()
          .setColor("RED")
          .setAuthor("У вас недостаточно средств!")
          .setFooter(message.author.username, message.author.displayAvatarURL)
          .setTimestamp()
      );
    message.channel.send(
      new Discord.RichEmbed()
        .setColor(colors)
        .setDescription(
          `Вы успешно передали ${args[1]} монет игроку ${member}!`
        )
        .setFooter(message.author.username, message.author.displayAvatarURL)
        .setTimestamp()
    );

    if (res2.UserId == undefined) {
      MongoDB.coins.insertOne({
        UserId: member.id,
        coins: args[1]
      });
    }
    if (res2.UserId != undefined) {
      await MongoDB.coins.updateOne(
        { UserId: member.id },
        { coins: parseInt(res2.coins) + parseInt(args[1]) }
      );
    }
    await MongoDB.coins.updateOne(
      { UserId: message.author.id },
      { coins: res.coins - args[1] }
    );
  };
  module.exports.command = {
    name: "pay"
  };
} catch (err) {
  console.log(err.stack);
}
