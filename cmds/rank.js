const { RichEmbed, Discord } = require("discord.js");
const env = require("dotenv").config();
const config = require("../botconfig.json");
const {
  colors,
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
const MongoClient = require("mongodb").MongoClient;
const mongoClient = new MongoClient(process.env.MongodbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
module.exports.run = async (bot, message, args) => {
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
    "<:Trolleng:625210321698553856>",
    ":<",
    ":>",
    "ツ",
    "¯_(ツ)_/¯",
    "¯\\_(ツ)_/¯",
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
    "У нас нет уровней"
  ];
  let random = Math.floor(Math.random() * Message.length);
  if (rUser.user.bot) {
    message.channel.send(Message[random]);
    return;
  }
  mongoClient.connect(function(err, client) {
    const db = client.db("StarOS");
    const collection = db.collection("levels");
    if (err) return console.log(err);
    collection.find({ UserId: member.id }).toArray(function(err, results) {
      if (results[0] == undefined) {
        if (message.member.roles.has(RoleLevel65ID)) {
          message.channel.send(
            new RichEmbed()
              .setAuthor(member.user.username, member.user.avatarURL)
              .addField("Опыт", `0/700`, true)
              .addField("Уровень", 0, true)
              .addField(`Звание`, `<@&${RoleLevel65ID}>`, true)
              .setColor("RED")
              .setTimestamp()
              .setFooter(`Опыта до следующего уровня: 700`)
          );
          client.close();
          return;
        }
        if (message.member.roles.has(RoleLevel50ID)) {
          message.channel.send(
            new RichEmbed()
              .setAuthor(member.user.username, member.user.avatarURL)
              .addField("Опыт", `0/700`, true)
              .addField("Уровень", 0, true)
              .addField(`Звание`, `<@&${RoleLevel50ID}>`, true)
              .setColor("RED")
              .setTimestamp()
              .setFooter(`Опыта до следующего уровня: 700`)
          );
          client.close();
          return;
        }
        if (message.member.roles.has(RoleLevel40ID)) {
          message.channel.send(
            new RichEmbed()
              .setAuthor(member.user.username, member.user.avatarURL)
              .addField("Опыт", `0/700`, true)
              .addField("Уровень", 0, true)
              .addField(`Звание`, `<@&${RoleLevel40ID}>`, true)
              .setColor("RED")
              .setTimestamp()
              .setFooter(`Опыта до следующего уровня: 700`)
          );
          client.close();
          return;
        }
        if (message.member.roles.has(RoleLevel35ID)) {
          message.channel.send(
            new RichEmbed()
              .setAuthor(member.user.username, member.user.avatarURL)
              .addField("Опыт", `0/700`, true)
              .addField("Уровень", 0, true)
              .addField(`Звание`, `<@&${RoleLevel35ID}>`, true)
              .setColor("RED")
              .setTimestamp()
              .setFooter(`Опыта до следующего уровня: 700`)
          );
          client.close();
          return;
        }
        if (message.member.roles.has(RoleLevel30ID)) {
          message.channel.send(
            new RichEmbed()
              .setAuthor(member.user.username, member.user.avatarURL)
              .addField("Опыт", `0/700`, true)
              .addField("Уровень", 0, true)
              .addField(`Звание`, `<@&${RoleLevel30ID}>`, true)
              .setColor("RED")
              .setTimestamp()
              .setFooter(`Опыта до следующего уровня: 700`)
          );
          client.close();
          return;
        }
        if (message.member.roles.has(RoleLevel25ID)) {
          message.channel.send(
            new RichEmbed()
              .setAuthor(member.user.username, member.user.avatarURL)
              .addField("Опыт", `0/700`, true)
              .addField("Уровень", 0, true)
              .addField(`Звание`, `<@&${RoleLevel25ID}>`, true)
              .setColor("RED")
              .setTimestamp()
              .setFooter(`Опыта до следующего уровня: 700`)
          );
          client.close();
          return;
        }
        if (message.member.roles.has(RoleLevel20ID)) {
          message.channel.send(
            new RichEmbed()
              .setAuthor(member.user.username, member.user.avatarURL)
              .addField("Опыт", `0/700`, true)
              .addField("Уровень", 0, true)
              .addField(`Звание`, `<@&${RoleLevel20ID}>`, true)
              .setColor("RED")
              .setTimestamp()
              .setFooter(`Опыта до следующего уровня: 700`)
          );
          client.close();
          return;
        }
        if (message.member.roles.has(RoleLevel15ID)) {
          message.channel.send(
            new RichEmbed()
              .setAuthor(member.user.username, member.user.avatarURL)
              .addField("Опыт", `0/700`, true)
              .addField("Уровень", 0, true)
              .addField(`Звание`, `<@&${RoleLevel15ID}>`, true)
              .setColor("RED")
              .setTimestamp()
              .setFooter(`Опыта до следующего уровня: 700`)
          );
          client.close();
          return;
        }
        if (message.member.roles.has(RoleLevel10ID)) {
          message.channel.send(
            new RichEmbed()
              .setAuthor(member.user.username, member.user.avatarURL)
              .addField("Опыт", `0/700`, true)
              .addField("Уровень", 0, true)
              .addField(`Звание`, `<@&${RoleLevel10ID}>`, true)
              .setColor("RED")
              .setTimestamp()
              .setFooter(`Опыта до следующего уровня: 700`)
          );
          client.close();
          return;
        }
        if (message.member.roles.has(RoleLevel5ID)) {
          message.channel.send(
            new RichEmbed()
              .setAuthor(member.user.username, member.user.avatarURL)
              .addField("Опыт", `0/700`, true)
              .addField("Уровень", 0, true)
              .addField(`Звание`, `<@&${RoleLevel5ID}>`, true)
              .setColor("RED")
              .setTimestamp()
              .setFooter(`Опыта до следующего уровня: 700`)
          );
          client.close();
          return;
        }
        message.channel.send(
          new RichEmbed()
            .setAuthor(member.user.username, member.user.avatarURL)
            .addField("Опыт", `0/700`, true)
            .addField("Уровень", 0, true)
            .addField(`Звание`, `Отсутствует.`, true)
            .setColor("RED")
            .setTimestamp()
            .setFooter(`Опыта до следующего уровня: 700`)
        );
        client.close();
        return;
      }
      let level = results[0].maxs;
      let CurrentLevel = results[0].level;
      let CurrentXp = results[0].xp;
      if (message.member.roles.has(RoleLevel65ID)) {
        message.channel.send(
          new RichEmbed()
            .setAuthor(member.user.username, member.user.avatarURL)
            .addField("Опыт", `${CurrentXp}/${level}`, true)
            .addField("Уровень", CurrentLevel, true)
            .addField(`Звание`, `<@&${RoleLevel65ID}>`, true)
            .setColor(colors)
            .setTimestamp()
            .setFooter(`Опыта до следующего уровня: ${level - CurrentXp}`)
        );
        client.close();
        return;
      }
      if (message.member.roles.has(RoleLevel50ID)) {
        message.channel.send(
          new RichEmbed()
            .setAuthor(member.user.username, member.user.avatarURL)
            .addField("Опыт", `${CurrentXp}/${level}`, true)
            .addField("Уровень", CurrentLevel, true)
            .addField(`Звание`, `<@&${RoleLevel50ID}>`, true)
            .setColor(colors)
            .setTimestamp()
            .setFooter(`Опыта до следующего уровня: ${level - CurrentXp}`)
        );
        client.close();
        return;
      }
      if (message.member.roles.has(RoleLevel40ID)) {
        message.channel.send(
          new RichEmbed()
            .setAuthor(member.user.username, member.user.avatarURL)
            .addField("Опыт", `${CurrentXp}/${level}`, true)
            .addField("Уровень", CurrentLevel, true)
            .addField(`Звание`, `<@&${RoleLevel40ID}>`, true)
            .setColor(colors)
            .setTimestamp()
            .setFooter(`Опыта до следующего уровня: ${level - CurrentXp}`)
        );
        client.close();
        return;
      }
      if (message.member.roles.has(RoleLevel35ID)) {
        message.channel.send(
          new RichEmbed()
            .setAuthor(member.user.username, member.user.avatarURL)
            .addField("Опыт", `${CurrentXp}/${level}`, true)
            .addField("Уровень", CurrentLevel, true)
            .addField(`Звание`, `<@&${RoleLevel35ID}>`, true)
            .setColor(colors)
            .setTimestamp()
            .setFooter(`Опыта до следующего уровня: ${level - CurrentXp}`)
        );
        client.close();
        return;
      }
      if (message.member.roles.has(RoleLevel30ID)) {
        message.channel.send(
          new RichEmbed()
            .setAuthor(member.user.username, member.user.avatarURL)
            .addField("Опыт", `${CurrentXp}/${level}`, true)
            .addField("Уровень", CurrentLevel, true)
            .addField(`Звание`, `<@&${RoleLevel30ID}>`, true)
            .setColor(colors)
            .setTimestamp()
            .setFooter(`Опыта до следующего уровня: ${level - CurrentXp}`)
        );
        client.close();
        return;
      }
      if (message.member.roles.has(RoleLevel25ID)) {
        message.channel.send(
          new RichEmbed()
            .setAuthor(member.user.username, member.user.avatarURL)
            .addField("Опыт", `${CurrentXp}/${level}`, true)
            .addField("Уровень", CurrentLevel, true)
            .addField(`Звание`, `<@&${RoleLevel25ID}>`, true)
            .setColor(colors)
            .setTimestamp()
            .setFooter(`Опыта до следующего уровня: ${level - CurrentXp}`)
        );
        client.close();
        return;
      }
      if (message.member.roles.has(RoleLevel20ID)) {
        message.channel.send(
          new RichEmbed()
            .setAuthor(member.user.username, member.user.avatarURL)
            .addField("Опыт", `${CurrentXp}/${level}`, true)
            .addField("Уровень", CurrentLevel, true)
            .addField(`Звание`, `<@&${RoleLevel20ID}>`, true)
            .setColor(colors)
            .setTimestamp()
            .setFooter(`Опыта до следующего уровня: ${level - CurrentXp}`)
        );
        client.close();
        return;
      }
      if (message.member.roles.has(RoleLevel15ID)) {
        message.channel.send(
          new RichEmbed()
            .setAuthor(member.user.username, member.user.avatarURL)
            .addField("Опыт", `${CurrentXp}/${level}`, true)
            .addField("Уровень", CurrentLevel, true)
            .addField(`Звание`, `<@&${RoleLevel15ID}>`, true)
            .setColor(colors)
            .setTimestamp()
            .setFooter(`Опыта до следующего уровня: ${level - CurrentXp}`)
        );
        client.close();
        return;
      }
      if (message.member.roles.has(RoleLevel10ID)) {
        message.channel.send(
          new RichEmbed()
            .setAuthor(member.user.username, member.user.avatarURL)
            .addField("Опыт", `${CurrentXp}/${level}`, true)
            .addField("Уровень", CurrentLevel, true)
            .addField(`Звание`, `<@&${RoleLevel10ID}>`, true)
            .setColor(colors)
            .setTimestamp()
            .setFooter(`Опыта до следующего уровня: ${level - CurrentXp}`)
        );
        client.close();
        return;
      }
      if (message.member.roles.has(RoleLevel5ID)) {
        message.channel.send(
          new RichEmbed()
            .setAuthor(member.user.username, member.user.avatarURL)
            .addField("Опыт", `${CurrentXp}/${level}`, true)
            .addField("Уровень", CurrentLevel, true)
            .addField(`Звание`, `<@&${RoleLevel5ID}>`, true)
            .setColor(colors)
            .setTimestamp()
            .setFooter(`Опыта до следующего уровня: ${level - CurrentXp}`)
        );
        client.close();
        return;
      }
      message.channel.send(
        new RichEmbed()
          .setAuthor(member.user.username, member.user.avatarURL)
          .addField("Опыт", `${CurrentXp}/${level}`, true)
          .addField("Уровень", CurrentLevel, true)
          .addField(`Звание`, `Отсутствует.`, true)
          .setColor(colors)
          .setTimestamp()
          .setFooter(`Опыта до следующего уровня: ${level - CurrentXp}`)
      );
      client.close();
      return;
    });
  });
};
module.exports.command = {
  name: "rank"
};
