try {
  module.exports.run = async (bot, message, args) => {
    let roleProgrammer = message.guild.roles.find(
      r => r.id === "615590686741233666"
    );
    let roleCreator = message.guild.roles.find(
      r => r.id === "603629611452203058"
    );
    let roleVice_Creator = message.guild.roles.find(
      r => r.id === "613385774334869511"
    );
    var args1 = message.content.toLowerCase().split(/ +/g);
    async function Code() {
      if (args1[1] == "staros") {
        if (args[2] == "<#620339247424995358>") {
          message.channel.send("**🛠 Отправлено в <#620339247424995358>! 🛠 **");
          bot.channels
            .get("620339247424995358")
            .send("Внимание! Проводится ивент по...");
          return;
        }
        return;
      }
      await MongoDB.config._toCollection();
      let res = MongoDB.config.findOne({ GuildId: message.guild.id });
      let Да = ["true", "yes", "да", "включить", "+", "on"];
      let Нет = ["false", "no", "нет", "отключить", "-", "off"];
      if (args1[1] == "function") {
        if (args1[2] == 1) {
          if (!args1[3])
            return message.channel.send(
              "**🛠 Укажите включить или отключить параметр! 🛠**"
            );
          if (args1.some(a => Да.find(word => word == a))) {
            message.channel.send(`**🛠 Отлично! Функция включена! 🛠**`);
            if (res.GuildId == undefined) {
              MongoDB.config.insertOne({
                GuildId: message.guild.id,
                Rank: true,
                StatusBot: true,
                Mute: true,
                Commands: true,
                Reaction: true
              });
            }
            if (res.GuildId != undefined) {
              await MongoDB.config.updateOne(
                { GuildId: message.guild.id },
                { Rank: true }
              );
            }
            return;
          }
          if (args1.some(a => Нет.find(word => word == a))) {
            message.channel.send(
              `**🛠 ${res.UU == true ? "Отлично!" : ""} Функция отключена! 🛠**`
            );
            if (res.GuildId == undefined) {
              MongoDB.config.insertOne({
                GuildId: message.guild.id,
                Rank: false,
                StatusBot: true,
                Mute: true,
                Commands: true,
                Reaction: true,
                UU: true
              });
            }
            if (res.GuildId != undefined) {
              await MongoDB.config.updateOne(
                { GuildId: message.guild.id },
                { Rank: false }
              );
            }
            return;
          }
          return;
        }
        if (args1[2] == 2) {
          if (!args1[3])
            return message.channel.send(
              "**🛠 Укажите включить или отключить параметр! 🛠**"
            );
          if (args1.some(a => Да.find(word => word == a))) {
            await message.channel.send(
              `**🛠 ${res.UU == true ? "Отлично!" : ""} Функция включена! 🛠**`
            );
            if (res.GuildId == undefined) {
              MongoDB.config.insertOne({
                GuildId: message.guild.id,
                Rank: true,
                StatusBot: true,
                Mute: true,
                Commands: true,
                Reaction: true,
                UU: true
              });
            }
            if (res.GuildId != undefined) {
              await MongoDB.config.updateOne(
                { GuildId: message.guild.id },
                { StatusBot: true, UU: true }
              );
            }
            await message.channel.send(
              `**🛠 Выполняется перезагрузка бота... 🛠**`
            );
            await process.exit(1);
            return;
          }
          if (args1.some(a => Нет.find(word => word == a))) {
            message.channel.send(
              `**🛠 ${res.UU == true ? "Отлично!" : ""} Функция отключена! 🛠**`
            );
            if (res.GuildId == undefined) {
              MongoDB.config.insertOne({
                GuildId: message.guild.id,
                Rank: true,
                StatusBot: false,
                Mute: true,
                Commands: true,
                Reaction: true,
                UU: true
              });
            }
            if (res.GuildId != undefined) {
              await MongoDB.config.updateOne(
                { GuildId: message.guild.id },
                { StatusBot: false }
              );
            }
            await message.channel.send(
              `**🛠 Выполняется перезагрузка бота... 🛠**`
            );
            await process.exit(1);
            return;
          }
          return;
        }
        if (args1[2] == 3) {
          if (!args1[3])
            return message.channel.send(
              "**🛠 Укажите включить или отключить параметр! 🛠**"
            );
          if (args1.some(a => Да.find(word => word == a))) {
            message.channel.send(
              `**🛠 ${res.UU == true ? "Отлично!" : ""} Функция включена! 🛠**`
            );
            if (res.GuildId == undefined) {
              MongoDB.config.insertOne({
                GuildId: message.guild.id,
                Rank: true,
                StatusBot: true,
                Mute: true,
                Commands: true,
                Reaction: true,
                UU: true
              });
            }
            if (res.GuildId != undefined) {
              await MongoDB.config.updateOne(
                { GuildId: message.guild.id },
                { Mute: true }
              );
            }
            return;
          }
          if (args1.some(a => Нет.find(word => word == a))) {
            message.channel.send(
              `**🛠 ${res.UU == true ? "Отлично!" : ""} Функция отключена! 🛠**`
            );
            if (res.GuildId == undefined) {
              MongoDB.config.insertOne({
                GuildId: message.guild.id,
                Rank: true,
                StatusBot: true,
                Mute: false,
                Commands: true,
                Reaction: true,
                UU: true
              });
            }
            if (res.GuildId != undefined) {
              await MongoDB.config.updateOne(
                { GuildId: message.guild.id },
                { Mute: true }
              );
            }
            return;
          }
          return;
        }
        if (args1[2] == 4) {
          if (!args1[3])
            return message.channel.send(
              "**🛠 Укажите включить или отключить параметр! 🛠**"
            );
          if (args1.some(a => Да.find(word => word == a))) {
            message.channel.send(
              `**🛠 ${res.UU == true ? "Отлично!" : ""} Функция включена! 🛠**`
            );
            if (res.GuildId == undefined) {
              MongoDB.config.insertOne({
                GuildId: message.guild.id,
                Rank: true,
                StatusBot: true,
                Mute: true,
                Commands: true,
                Reaction: true,
                UU: true
              });
            }
            if (res.GuildId != undefined) {
              await MongoDB.config.updateOne(
                { GuildId: message.guild.id },
                { Commands: true }
              );
            }
            return;
          }
          if (args1.some(a => Нет.find(word => word == a))) {
            message.channel.send(
              `**🛠 ${res.UU == true ? "Отлично!" : ""} Функция отключена! 🛠**`
            );
            if (res.GuildId == undefined) {
              MongoDB.config.insertOne({
                GuildId: message.guild.id,
                Rank: true,
                StatusBot: true,
                Mute: true,
                Commands: false,
                Reaction: true,
                UU: true
              });
            }
            if (res.GuildId != undefined) {
              await MongoDB.config.updateOne(
                { GuildId: message.guild.id },
                { Commands: false }
              );
            }
            return;
          }
          return;
        }
        if (args1[2] == 5) {
          if (!args1[3])
            return message.channel.send(
              "**🛠 Укажите включить или отключить параметр! 🛠**"
            );
          if (args1.some(a => Да.find(word => word == a))) {
            message.channel.send(
              `**🛠 ${res.UU == true ? "Отлично!" : ""} Функция включена! 🛠**`
            );
            if (res.GuildId == undefined) {
              MongoDB.config.insertOne({
                GuildId: message.guild.id,
                Rank: true,
                StatusBot: true,
                Mute: true,
                Commands: true,
                Reaction: true,
                UU: true
              });
            }
            if (res.GuildId != undefined) {
              await MongoDB.config.updateOne(
                { GuildId: message.guild.id },
                { Reaction: true }
              );
            }
            return;
          }
          if (args1.some(a => Нет.find(word => word == a))) {
            message.channel.send(
              `**🛠 ${res.UU == true ? "Отлично!" : ""} Функция отключена! 🛠**`
            );
            if (res.GuildId == undefined) {
              MongoDB.config.insertOne({
                GuildId: message.guild.id,
                Rank: true,
                StatusBot: true,
                Mute: true,
                Commands: true,
                Reaction: false,
                UU: true
              });
            }
            if (res.GuildId != undefined) {
              await MongoDB.config.updateOne(
                { GuildId: message.guild.id },
                { Reaction: false }
              );
            }
            return;
          }
          return;
        }
        if (args1[2] == 6) {
          if (!args1[3])
            return message.channel.send(
              "**🛠 Укажите включить или отключить параметр! 🛠**"
            );
          if (args1.some(a => Да.find(word => word == a))) {
            message.channel.send(
              `**🛠 ${res.UU == true ? "Отлично!" : ""} Функция включена! 🛠**`
            );
            if (res.GuildId == undefined) {
              MongoDB.config.insertOne({
                GuildId: message.guild.id,
                Rank: true,
                StatusBot: true,
                Mute: true,
                Commands: true,
                Reaction: true,
                UU: true
              });
            }
            if (res.GuildId != undefined) {
              await MongoDB.config.updateOne(
                { GuildId: message.guild.id },
                { UU: true }
              );
            }
            return;
          }
          if (args1.some(a => Нет.find(word => word == a))) {
            message.channel.send(`**🛠 Функция отключена... 🛠**`);
            if (res.GuildId == undefined) {
              MongoDB.config.insertOne({
                GuildId: message.guild.id,
                Rank: true,
                StatusBot: false,
                Mute: true,
                Commands: true,
                Reaction: true,
                UU: false
              });
            }
            if (res.GuildId != undefined) {
              await MongoDB.config.updateOne(
                { GuildId: message.guild.id },
                { UU: false }
              );
            }
            if (res.GuildId != undefined) {
              await MongoDB.config.updateOne(
                { GuildId: message.guild.id },
                { StatusBot: false }
              );
            }
            await message.channel.send(
              `**🛠 Выполняется перезагрузка бота... 🛠**`
            );
            await process.exit(1);
            return;
          }
          return;
        }
        message.channel.send(`1.Функция рангов (${
          res.Rank == true ? "on" : res.Rank == false ? "off" : "???"
        })
2.Функция "Играет", "Смотрит" (${
          res.StatusBot == true ? "on" : res.StatusBot == false ? "off" : "???"
        })
3.Функция мутов (${res.Mute == true ? "on" : res.Mute == false ? "off" : "???"})
4.Функция отвечать на команды обычных участников (${
          res.Commands == true ? "on" : res.Commands == false ? "off" : "???"
        })
5. Вставка реакций в <#${config.ChannelReactionID}> (${
          res.Reaction == true ? "on" : res.Reaction == false ? "off" : "???"
        })
6. Искусственный Интелект (${
          res.UU == true ? "on" : res.UU == false ? "off" : "???"
        })`);
        return;
      }
      message.channel.send("**🛠 Укажите команду! 🛠**");
    }
    if (message.member.roles.has(roleProgrammer.id)) return Code();
    if (message.member.roles.has(roleCreator.id)) return Code();
    if (message.member.roles.has(roleVice_Creator.id)) return Code();
    message.channel.send("Цыц!");
  };
  module.exports.command = {
    name: "admin"
  };
} catch (err) {
  console.log(err.stack);
}
