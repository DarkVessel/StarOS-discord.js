try{
  module.exports.run = async (bot, message, args) => {
    let roleCreator = message.guild.roles.find(
      r => r.id === "603629611452203058"
    );
    let roleIvent = message.guild.roles.find(r => r.id === "620338373822775296")
    await MongoDB.config._toCollection();
    let res = MongoDB.config.findOne({ GuildId: message.guild.id });
    let Message2 = [
      "Аташёл!",
      "Цыц!",
      "Не трогай эту команду!",
      "Отойди!",
      "У тебя нет прав!",
      "Иди работай!",
      "Ацтань!",
      "У меня нет денег!",
      "Мне ещё пенсию не выдали!",
      "Выйди от сюда розбiйник!",
      "Я щас позову Китикета...",
      "АТАШЁЛ! Или съем!",
      "Съем! Я ведь не шучу...",
      "Не связывайся со мной.",
      "Что тебе от меня надо?",
      "Ну харе.",
      "Что ты хочешь от меня услышать?",
      "...",
      "Я твои деньги щас съем!",
      "Я твой баланс щас обнулю!",
      "Съем.",
      "Только создатели сервера могут использовать эту команду....отойди.",
      "Ты не создатель сервера!",
      "=/",
      "Шо це надо?",
      "Ты думаешь я дам тебе доступ?....нет!",
      "Где деньги взять? Давно известно! **8-800-555-35-35**, проще позвонить чем у кого-то занимать!",
      "Я в долг деньги не даю!",
      "Возьми кредит!",
      "Я могу дать тебе только бан, прости.",
      "Что?",
      "Я банкрот.",
      "Не дам я тебе денег, ацтань.",
      "Шо це надо тебе?",
      ";-;",
      "kavo",
      "Чо",
      "Ты Cloud?",
      "В чём секрет кота Бориса?",
      "У меня есть Китикет, а у тебя нет!",
      "Смешно.",
      "Ha-Ha",
      "Не дам доступ.",
      "Это команда удалена.",
      "Я те отвечаю она удалена.",
      ":0",
      "Ты всё ещё тут?",
      "Я ведь могу в ЧС кинуть.",
      "У меня нет денег!",
      "Мне даже 1 годика нет и ты выпрашиваешь у меня денег?!",
      "Я просто помолчу...нет.",
      "Что ты ещё хочешь услышать?",
      "Бабла нет, кыш.",
      "Кыш говорю!",
      "Кыш!",
      "Ацтань.",
      "Кыыш!",
      "Сбербанк - мы превращаем ваши деньги в рубли.",
      "Зачем тебе деньги? Это же просто циферки."
    ]
    let random2 = Math.floor(Math.random() * Message2.length)
    async function code() {
      const member = message.guild.member(
      message.mentions.users.first() ||
        message.guild.members.get(args[0])
    );
    let rUser = message.guild.member(
      message.mentions.users.first() ||
        message.guild.members.get(args[0]) ||
        message.author
    );
    if(!member) return message.channel.send(
        new Discord.RichEmbed()
          .setColor("RED")
          .setAuthor("Укажите пользователя!")
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
      "\" \"",
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
    if (rUser.user.bot) return message.channel.send((res.UU == false) ? "Нельзя ботам накручивать деньги." : Message[random]);
    await MongoDB.coins._toCollection();
  let res2 = MongoDB.coins.findOne({ UserId: member.id });
    if(!args[1]) return message.channel.send(
      new Discord.RichEmbed()
        .setColor("RED")
        .setAuthor("Укажи сумму для накрутки!")
        .setFooter(message.author.username, message.author.displayAvatarURL)
        .setTimestamp()
    )
    if(isNaN(args[1])) return message.channel.send(
      new Discord.RichEmbed()
        .setColor("RED")
        .setAuthor("Укажи валидное число!")
        .setFooter(message.author.username, message.author.displayAvatarURL)
        .setTimestamp()
    )
    message.channel.send(
      new Discord.RichEmbed()
        .setColor(colors)
        .setDescription(`Вы успешно накрутили ${args[1]} монет игроку ${member}!`)
        .setFooter(message.author.username, message.author.displayAvatarURL)
        .setTimestamp()
    )
    bot.users.get("517331770656686080").send(`${message.author.tag} накрутил ${member.user.tag} ${args[1]} монет!`)
    if(res2.UserId == undefined) {
      MongoDB.coins.insertOne({
        UserId: member.id,
        coins: args[1]
      });
    }
    if(res2.UserId != undefined) {
      await MongoDB.coins.updateOne(
          { UserId: member.id },
          { coins: parseInt(res2.coins) + parseInt(args[1]) }
        );
    }
    }
    if (message.member.roles.has(roleCreator.id)) return code()
    if (message.member.roles.has(roleIvent.id)) return code()
    message.channel.send((res.UU == false) ? "У вас недостаточно прав для выполнения этой команды." : Message2[random2])
  }
  module.exports.command = {
    name: "give"
  }
} catch (err) {
  console.log(err.stack);
}
