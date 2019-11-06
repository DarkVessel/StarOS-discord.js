const { RichEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
  try {
    const member = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[0])
    );
    const member2 = message.guild.member(
      message.mentions.users.first() ||
        message.guild.members.get(args[0]) ||
        message.author
    );
    let rUser = message.guild.member(
      message.mentions.users.first() ||
        message.guild.members.get(args[0]) ||
        message.author
    );
    await MongoDB.config._toCollection();
    let res = MongoDB.config.findOne({ GuildId: message.guild.id });
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
    let random = Math.floor(Math.random() * Message.length);
    if (rUser.user.bot) {
      if (res.UU == false) return message.channel.send("У ботов нет монет.");
      message.channel.send(Message[random]);
      return;
    }
    const collection = db.collection("coins");
    collection.find({ UserId: member2.id }).toArray(function(err, results) {
      if (results[0] == undefined) {
        let Message2 = [
          "Вы бомж!",
          "У вас 0 OScoins!",
          "У тебя 0 монет, иди работай!",
          "Поешь Китикет D:",
          "Ты бомж!",
          "Бомжара",
          "00",
          "~~**Даа, ты очень богатый!**~~",
          "Батя не дал денег, Сорри.",
          "Нету денягг",
          "Диняг нит",
          "Твой баланс скатывается на минус.",
          "У тебя кошелька даже нет.",
          "Накрути себе деньги, неважно как.",
          "Опять потратил все деньги на роли?",
          "Куда ты дел деньги?",
          "Ацтань, у тебя 0.",
          "Нооль.",
          "У тебя монет: 00000000000000000000000000000000000000000000000",
          "0 ,_,",
          "Ноль монееет!",
          "~~У тебя минусовой баланс.~~",
          "Ацтань, у тебя 0 монет.",
          "Зачем тебе деньги?",
          "Я съел твои деньги.",
          "Ты никогда не увидишь своих денег.",
          "Я не дам тебе денег, даже не проси!",
          "Пенсию возьми.",
          "ПЕНСИОННЫЙ ФОНД РОССИИИ.",
          "Бедняга, у тебя нет монет."
        ];
        let random = Math.floor(Math.random() * Message2.length);
        if (!member)
          return message.channel.send(
            new RichEmbed()
              .setColor("RED")
              .setFooter(bot.user.username, bot.user.avatarURL)
              .setTimestamp()
              .setDescription(
                `<:OSkoin:629323315168673802> | ${
                  res.UU == false ? "У вас 0 монет." : Message2[random]
                }`
              )
          );
        let Message3 = [
          "Оно бомж!",
          "Поешь Китикет D:",
          "Атайди от него, у него нет деняг!",
          "00",
          "~~**Даа, оно очень богатое!**~~",
          "Батя не дал денег, Сорри.",
          "Диняг нит",
          "Накрути деньги, неважно как.",
          "Оно наверное опять потратило деньги на роли.",
          "Куда оно дел деньги?",
          "Ацтань, у ниго 0.",
          "Нооль.",
          "У ниго монет: 00000000000000000000000000000000000000000000000",
          "0 ,_,",
          "Ноль монееет!",
          "~~У ниго минусовой баланс.~~",
          "Ацтань, у ниго 0 монет.",
          "Зачем тебе знать сколько у ниго деняг?",
          "Я съел его деньги.",
          "Пенсию пускай возьмёт.",
          "ПЕНСИОННЫЙ ФОНД РОССИИИ.",
          "Бедняга, у него нет монет.",
          "Шо тебе надо, не буду я показывать.",
          "Ацтаааань, у ниго 0",
          `У ${member} 0 монет!`
        ];
        let random2 = Math.floor(Math.random() * Message3.length);
        message.channel.send(
          new RichEmbed()
            .setColor("RED")
            .setFooter(bot.user.username, bot.user.avatarURL)
            .setTimestamp()
            .setDescription(
              `<:OSkoin:629323315168673802> | ${
                res.UU == false ? `У ${member} 0 монет!` : Message3[random]
              }`
            )
        );
        return;
      }
      if (!member)
        return message.channel.send(
          new RichEmbed()
            .setColor(colors)
            .setFooter(bot.user.username, bot.user.avatarURL)
            .setTimestamp()
            .setDescription(
              `<:OSkoin:629323315168673802> | У вас ${results[0].coins} OScoins.`
            )
        );
      message.channel.send(
        new RichEmbed()
          .setColor(colors)
          .setFooter(bot.user.username, bot.user.avatarURL)
          .setTimestamp()
          .setDescription(
            `<:OSkoin:629323315168673802> | У ${member} ${results[0].coins} OScoins!`
          )
      );
    });
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
  name: "coins"
};
