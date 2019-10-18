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
      "У нас нет монет."
    ];
    let random = Math.floor(Math.random() * Message.length);
    if (rUser.user.bot) {
      message.channel.send(Message[random]);
      return;
    }
    const collection = db.collection("coins");
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
