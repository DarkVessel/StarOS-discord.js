const { RichEmbed } = require("discord.js");
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
const { Core, Mongo } = require("discore.js");
const MongoDB = new Mongo(process.env.MongodbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const CoinsData = {
  UserId: { type: Mongo.Types.String, default: undefined },
  coins: { type: Mongo.Types.Number, default: 0 }
};
MongoDB.addModel("coins", CoinsData);
module.exports.run = async (bot, message, args) => {
  await MongoDB.open();
  new Promise(async resolve => {
    await MongoDB.coins._toCollection();
    let res = MongoDB.coins.findOne({ UserId: message.author.id });
    let embed = new RichEmbed()
      .setColor("RED")
      .setFooter(message.author.username, message.author.displayAvatarURL)
      .setTimestamp()
      .setDescription(`У вас 0 OScoins!`);
    let embed2 = new RichEmbed()
      .setColor("RED")
      .setDescription(`У вас есть уже такое звание!`)
      .setFooter(`Купите другую роль!`)
      .setTimestamp();
    if (res.coins == undefined) {
      message.channel.send(embed);
      return;
    }
    if (res.coins == 0) {
      message.channel.send(embed);
      return;
    }
    var args1 = message.content.toLowerCase().split(/ +/g);
    let Старейшина = ["старейшина", "@старейшина", RoleLevel5ID];
    if (args1.some(a => Старейшина.find(word => word == a))) {
      let roleS = message.guild.roles.find(r => r.id == RoleLevel5ID);
      if (message.member.roles.has(roleS.id))
        return message.channel.send(embed2);
      if (3000 > res.coins)
        return message.channel.send(
          new RichEmbed()
            .setColor("RED")
            .setTimestamp()
            .setFooter(
              `Сколько осталось монет для покупки: ${3000 - res.coins}`
            )
            .setDescription(`У вас не достаточно средств для покупки роли.`)
        );
      message.channel.send(
        new RichEmbed()
          .setColor(colors)
          .setDescription(`Вы успешно купили звание <@&${roleS.id}>`)
          .setFooter(`Остаток монет: ${res.coins - 3000}`)
          .setTimestamp()
      );
      MongoDB.coins.updateOne(
        { UserId: message.author.id },
        { coins: res.coins - 3000 }
      );
      message.member.addRole(roleS);
      return;
    }
    let Защитник = ["защитник", "@защитник", RoleLevel10ID];
    if (args1.some(a => Защитник.find(word => word == a))) {
      let roleS = message.guild.roles.find(r => r.id == RoleLevel10ID);
      if (message.member.roles.has(roleS.id))
        return message.channel.send(embed2);
      if (5000 > res.coins)
        return message.channel.send(
          new RichEmbed()
            .setColor("RED")
            .setTimestamp()
            .setFooter(
              `Сколько осталось монет для покупки: ${5000 - res.coins}`
            )
            .setDescription(`У вас не достаточно средств для покупки роли.`)
        );
      message.channel.send(
        new RichEmbed()
          .setColor(colors)
          .setDescription(`Вы успешно купили звание <@&${roleS.id}>`)
          .setFooter(`Остаток монет: ${res.coins - 5000}`)
          .setTimestamp()
      );
      MongoDB.coins.updateOne(
        { UserId: message.author.id },
        { coins: res.coins - 5000 }
      );
      message.member.addRole(roleS);
      return;
    }
    let Капитан = ["капитан", "@капитан", RoleLevel15ID];
    if (args1.some(a => Капитан.find(word => word == a))) {
      let roleS = message.guild.roles.find(r => r.id == RoleLevel15ID);
      if (message.member.roles.has(roleS.id))
        return message.channel.send(embed2);
      if (10000 > res.coins)
        return message.channel.send(
          new RichEmbed()
            .setColor("RED")
            .setTimestamp()
            .setFooter(
              `Сколько осталось монет для покупки: ${10000 - res.coins}`
            )
            .setDescription(`У вас не достаточно средств для покупки роли.`)
        );
      message.channel.send(
        new RichEmbed()
          .setColor(colors)
          .setDescription(`Вы успешно купили звание <@&${roleS.id}>`)
          .setFooter(`Остаток монет: ${res.coins - 10000}`)
          .setTimestamp()
      );
      MongoDB.coins.updateOne(
        { UserId: message.author.id },
        { coins: res.coins - 10000 }
      );
      message.member.addRole(roleS);
      return;
    }
    let Коллекционер = ["коллекционер", "@коллекционер", RoleLevel20ID];
    if (args1.some(a => Коллекционер.find(word => word == a))) {
      let roleS = message.guild.roles.find(r => r.id == RoleLevel20ID);
      if (message.member.roles.has(roleS.id))
        return message.channel.send(embed2);
      if (13000 > res.coins)
        return message.channel.send(
          new RichEmbed()
            .setColor("RED")
            .setTimestamp()
            .setFooter(
              `Сколько осталось монет для покупки: ${13000 - res.coins}`
            )
            .setDescription(`У вас не достаточно средств для покупки роли.`)
        );
      message.channel.send(
        new RichEmbed()
          .setColor(colors)
          .setDescription(`Вы успешно купили звание <@&${roleS.id}>`)
          .setFooter(`Остаток монет: ${res.coins - 13000}`)
          .setTimestamp()
      );
      MongoDB.coins.updateOne(
        { UserId: message.author.id },
        { coins: res.coins - 13000 }
      );
      message.member.addRole(roleS);
      return;
    }
    let Легенда = ["легенда", "@легенда", RoleLevel25ID];
    if (args1.some(a => Легенда.find(word => word == a))) {
      let roleS = message.guild.roles.find(r => r.id == RoleLevel25ID);
      if (message.member.roles.has(roleS.id))
        return message.channel.send(embed2);
      if (17000 > res.coins)
        return message.channel.send(
          new RichEmbed()
            .setColor("RED")
            .setTimestamp()
            .setFooter(
              `Сколько осталось монет для покупки: ${17000 - res.coins}`
            )
            .setDescription(`У вас не достаточно средств для покупки роли.`)
        );
      message.channel.send(
        new RichEmbed()
          .setColor(colors)
          .setDescription(`Вы успешно купили звание <@&${roleS.id}>`)
          .setFooter(`Остаток монет: ${res.coins - 17000}`)
          .setTimestamp()
      );
      MongoDB.coins.updateOne(
        { UserId: message.author.id },
        { coins: res.coins - 17000 }
      );
      message.member.addRole(roleS);
      return;
    }
    let Жнец = ["жнец", "@жнец", RoleLevel30ID];
    if (args1.some(a => Жнец.find(word => word == a))) {
      let roleS = message.guild.roles.find(r => r.id == RoleLevel30ID);
      if (message.member.roles.has(roleS.id))
        return message.channel.send(embed2);
      if (20000 > res.coins)
        return message.channel.send(
          new RichEmbed()
            .setColor("RED")
            .setTimestamp()
            .setFooter(
              `Сколько осталось монет для покупки: ${20000 - res.coins}`
            )
            .setDescription(`У вас не достаточно средств для покупки роли.`)
        );
      message.channel.send(
        new RichEmbed()
          .setColor(colors)
          .setDescription(`Вы успешно купили звание <@&${roleS.id}>`)
          .setFooter(`Остаток монет: ${res.coins - 20000}`)
          .setTimestamp()
      );
      MongoDB.coins.updateOne(
        { UserId: message.author.id },
        { coins: res.coins - 20000 }
      );
      message.member.addRole(roleS);
      return;
    }
    let Братан = ["братан", "@братан", RoleLevel35ID];
    if (args1.some(a => Братан.find(word => word == a))) {
      let roleS = message.guild.roles.find(r => r.id == RoleLevel35ID);
      if (message.member.roles.has(roleS.id))
        return message.channel.send(embed2);
      if (24000 > res.coins)
        return message.channel.send(
          new RichEmbed()
            .setColor("RED")
            .setTimestamp()
            .setFooter(
              `Сколько осталось монет для покупки: ${24000 - res.coins}`
            )
            .setDescription(`У вас не достаточно средств для покупки роли.`)
        );
      message.channel.send(
        new RichEmbed()
          .setColor(colors)
          .setDescription(`Вы успешно купили звание <@&${roleS.id}>`)
          .setFooter(`Остаток монет: ${res.coins - 24000}`)
          .setTimestamp()
      );
      MongoDB.coins.updateOne(
        { UserId: message.author.id },
        { coins: res.coins - 24000 }
      );
      message.member.addRole(roleS);
      return;
    }
    let Разрушитель = ["разрушитель", "@разрушитель", RoleLevel40ID];
    if (args1.some(a => Разрушитель.find(word => word == a))) {
      let roleS = message.guild.roles.find(r => r.id == RoleLevel40ID);
      if (message.member.roles.has(roleS.id))
        return message.channel.send(embed2);
      if (26000 > res.coins)
        return message.channel.send(
          new RichEmbed()
            .setColor("RED")
            .setTimestamp()
            .setFooter(
              `Сколько осталось монет для покупки: ${26000 - res.coins}`
            )
            .setDescription(`У вас не достаточно средств для покупки роли.`)
        );
      message.channel.send(
        new RichEmbed()
          .setColor(colors)
          .setDescription(`Вы успешно купили звание <@&${roleS.id}>`)
          .setFooter(`Остаток монет: ${res.coins - 26000}`)
          .setTimestamp()
      );
      MongoDB.coins.updateOne(
        { UserId: message.author.id },
        { coins: res.coins - 26000 }
      );
      message.member.addRole(roleS);
      return;
    }
    let Титан = ["титан", "@титан", RoleLevel50ID];
    if (args1.some(a => Титан.find(word => word == a))) {
      let roleS = message.guild.roles.find(r => r.id == RoleLevel50ID);
      if (message.member.roles.has(roleS.id))
        return message.channel.send(embed2);
      if (35000 > res.coins)
        return message.channel.send(
          new RichEmbed()
            .setColor("RED")
            .setTimestamp()
            .setFooter(
              `Сколько осталось монет для покупки: ${35000 - res.coins}`
            )
            .setDescription(`У вас не достаточно средств для покупки роли.`)
        );
      message.channel.send(
        new RichEmbed()
          .setColor(colors)
          .setDescription(`Вы успешно купили звание <@&${roleS.id}>`)
          .setFooter(`Остаток монет: ${res.coins - 35000}`)
          .setTimestamp()
      );
      MongoDB.coins.updateOne(
        { UserId: message.author.id },
        { coins: res.coins - 35000 }
      );
      message.member.addRole(roleS);
      return;
    }
    if (!args[0]) {
      message.channel.send(
        new RichEmbed()
          .setColor("RANDOM")
          .setDescription(`Магазин званий`)
          .setTimestamp()
          .setFooter(`Покупка ролей: /shop Роль(без пинга)`)
          .addField(`3000 OScoins`, `<@&${RoleLevel5ID}>`, true)
          .addField(`5000 OScoins`, `<@&${RoleLevel10ID}>`, true)
          .addField(`10000 OScoins`, `<@&${RoleLevel15ID}>`, true)
          .addField(`13000 OScoins`, `<@&${RoleLevel20ID}>`, true)
          .addField(`17000 OScoins`, `<@&${RoleLevel25ID}>`, true)
          .addField(`20000 OScoins`, `<@&${RoleLevel30ID}>`, true)
          .addField(`24000 OScoins`, `<@&${RoleLevel35ID}>`, true)
          .addField(`26000 OScoins`, `<@&${RoleLevel40ID}>`, true)
          .addField(`35000 OScoins`, `<@&${RoleLevel50ID}>`, true)
      );
      return;
    }
    message.channel.send(
      new RichEmbed()
        .setColor("RED")
        .setFooter(message.author.username, message.author.displayAvatarURL)
        .setTimestamp()
        .setDescription(`Такого звания нет.`)
    );
    resolve();
  }).then(() => MongoDB.close());
};
module.exports.command = {
  name: "shop"
};
