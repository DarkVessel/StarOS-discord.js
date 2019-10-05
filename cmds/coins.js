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
    const collection = db.collection("coins");
    if (err) return console.log(err);
    collection.find({ UserId: member2.id }).toArray(function(err, results) {
      if (results[0] == undefined) {
        if (!member)
          return message.channel.send(
            new RichEmbed()
              .setColor("RED")
              .setFooter(bot.user.username, bot.user.avatarURL)
              .setTimestamp()
              .setDescription(`<:OSkoin:629323315168673802> | У вас 0 OScoins!`)
          );
        message.channel.send(
          new RichEmbed()
            .setColor("RED")
            .setFooter(bot.user.username, bot.user.avatarURL)
            .setTimestamp()
            .setDescription(
              `<:OSkoin:629323315168673802> | У ${member} 0 OScoins!`
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
  });
};
module.exports.command = {
  name: "coins"
};
