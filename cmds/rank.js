const { RichEmbed } = require("discord.js");
const {
  RoleLevel5ID,
  RoleLevel10ID,
  RoleLevel15ID,
  RoleLevel20ID,
  RoleLevel25ID,
  RoleLevel30ID,
  RoleLevel35ID,
  RoleLevel40ID,
  RoleLevel50ID,
  RoleLevel65ID
} = config;
module.exports.run = async (bot, message, args) => {
  try {
    await MongoDB.config._toCollection();
    let resConfig = MongoDB.config.findOne({ GuildId: message.guild.id });
    if (resConfig.Rank == false)
      return message.channel.send("**🛠 Функция рангов отключена! 🛠**");
    const member = message.guild.member(
      message.mentions.users.first() ||
        message.guild.members.get(args[0]) ||
        message.author
    );
    let rUser = message.guild.member(
      message.mentions.users.first() ||
        message.guild.members.get(args[0]) ||
        message.author
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
    let res = MongoDB.config.findOne({ GuildId: message.guild.id });
    let random = Math.floor(Math.random() * Message.length);
    if (rUser.user.bot) {
      message.channel.send(
        res.UU == false ? "У ботов нет уровней." : Message[random]
      );
      return;
    }
    const collection = db.collection("levels");
    collection.find({ UserId: member.id }).toArray(function(err, results) {
      function Rank(XP, Maxs, Level, ID) {
        message.channel.send(
          new RichEmbed()
            .setAuthor(member.user.username, member.user.avatarURL)
            .addField("Опыт", `${XP}/${Maxs}`, true)
            .addField("Уровень", Level, true)
            .addField(`Звание`, `<@&${ID}>`, true)
            .setColor(colors)
            .setTimestamp()
            .setFooter(`Опыта до следующего уровня: ${Maxs - XP}`)
        );
      }
      let level = results[0] == undefined ? 700 : results[0].maxs;
      let CurrentLevel = results[0] == undefined ? 0 : results[0].level;
      let CurrentXp = results[0] == undefined ? 0 : results[0].xp;
      if (rUser.roles.has(RoleLevel65ID))
        return Rank(CurrentXp, level, CurrentLevel, RoleLevel65ID);
      if (rUser.roles.has(RoleLevel50ID))
        return Rank(CurrentXp, level, CurrentLevel, RoleLevel50ID);
      if (rUser.roles.has(RoleLevel40ID))
        return Rank(CurrentXp, level, CurrentLevel, RoleLevel40ID);
      if (rUser.roles.has(RoleLevel35ID))
        return Rank(CurrentXp, level, CurrentLevel, RoleLevel35ID);
      if (rUser.roles.has(RoleLevel30ID))
        return Rank(CurrentXp, level, CurrentLevel, RoleLevel30ID);
      if (rUser.roles.has(RoleLevel25ID))
        return Rank(CurrentXp, level, CurrentLevel, RoleLevel25ID);
      if (rUser.roles.has(RoleLevel20ID))
        return Rank(CurrentXp, level, CurrentLevel, RoleLevel20ID);
      if (rUser.roles.has(RoleLevel15ID))
        return Rank(CurrentXp, level, CurrentLevel, RoleLevel15ID);
      if (rUser.roles.has(RoleLevel10ID))
        return Rank(CurrentXp, level, CurrentLevel, RoleLevel10ID);
      if (rUser.roles.has(RoleLevel5ID))
        return Rank(CurrentXp, level, CurrentLevel, RoleLevel5ID);
      message.channel.send(
        new RichEmbed()
          .setAuthor(member.user.username, member.user.avatarURL)
          .addField("Опыт", `${CurrentXp}/${level}`, true)
          .addField("Уровень", CurrentLevel, true)
          .addField(
            `Звание`,
            `Отсутствует. ${res.UU == true ? "D:" : ""}`,
            true
          )
          .setColor(colors)
          .setTimestamp()
          .setFooter(`Опыта до следующего уровня: ${level - CurrentXp}`)
      );
      return;
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
  name: "rank"
};
