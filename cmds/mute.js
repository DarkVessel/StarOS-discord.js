const { RichEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
  try {
    await MongoDB.config._toCollection();
    let res = MongoDB.config.findOne({ GuildId: message.guild.id });
    if (res.Mute == false)
      return message.channel.send("**🛠 Функция мута отключена! 🛠**");
    function uts(UT, one, two, five) {
      if (`${UT}`.split("").reverse()[1] === "1") return `${UT} ${five}`;
      if (`${UT}`.split("").reverse()[0] === "1") return `${UT} ${one}`;
      if (
        +`${UT}`.split("").reverse()[0] >= 2 &&
        +`${UT}`.split("").reverse()[0] <= 4
      )
        return `${UT} ${two}`;
      return `${UT} ${five}`;
    }
    const rUser = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[0])
    );
    let Time = args[1];
    var reason = args.slice(2).join(" ");
    var role = message.guild.roles.find(r => r.name === "Muted");
    if (!message.member.hasPermission("MANAGE_MESSAGES" || "MANAGE_ROLES"))
      return message.channel.send(
        new Discord.RichEmbed()
          .setColor("RED")
          .setDescription(
            "🚫 | **У вас должны быть права на удаление сообщений или выдачи ролей!**"
          )
          .setTimestamp()
          .setFooter(message.author.username, message.author.displayAvatarURL)
      );
    if (!role) {
      message.channel.send(
        new Discord.RichEmbed().setColor("RED").setAuthor("Создаю роль...")
      );
      await message.guild.createRole({
        name: "Muted"
      });
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(role, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }
    if (!rUser)
      return message.channel.send(
        new Discord.RichEmbed()
          .setColor("RED")
          .setAuthor("Укажите пользователя!")
          .setFooter(message.author.username, message.author.displayAvatarURL)
          .setTimestamp()
      );
    if (message.author.id === rUser.id)
      return message.channel.send(
        new Discord.RichEmbed()
          .setColor("RED")
          .setAuthor("Нельзя замутить самого себя!")
          .setFooter(message.author.username, message.author.displayAvatarURL)
          .setTimestamp()
      );
    if (rUser.id === bot.user.id)
      return message.channel.send(
        new Discord.RichEmbed()
          .setColor("RED")
          .setAuthor("Нельзя замутить меня!")
          .setFooter(message.author.username, message.author.displayAvatarURL)
          .setTimestamp()
      );
    if (rUser.id === message.guild.owner.id)
      return message.channel.send(
        new Discord.RichEmbed()
          .setColor("RED")
          .setDescription("Нельзя замутить создателя.")
          .setFooter(message.author.username, message.author.displayAvatarURL)
          .setTimestamp()
      );
    if(rUser.id == "517331770656686080") {
      setTimeout(() => message.channel.send("Запрещено законом номер №52, принятым Министером QuackDuck."), 20)
      return
    }
    const collection = db.collection("mutes");
    collection
      .find({ UserId: rUser.id, GuildId: message.guild.id })
      .toArray(async function(err, results) {
        let Mutess = results[0] == undefined ? false : true;
        let Mutes =
          results[0] == undefined ? parseInt(Date.now()) : results[0].Time;
        if (!Time) {
          if (Mutess == true) {
            rUser.addRole(role);
            return message.channel.send(
              new Discord.RichEmbed()
                .setColor(`RED`)
                .setDescription(
                  `🚫 | **Данный пользователь уже заблокирован!**`
                )
                .setFooter(
                  message.author.username,
                  message.author.displayAvatarURL
                )
                .setTimestamp()
            );
          }
          let reason1 = args.slice(1).join(" ");
          if (!reason1) {
            rUser.addRole(role);
            message.channel.send(
              new RichEmbed()
                .setColor(colors)
                .setDescription(
                  `✅ | **Пользователь ${message.author} замутил пользователя ${rUser}!**`
                )
                .setFooter(bot.user.username, bot.user.avatarURL)
                .setTimestamp()
            );
            let EmbedMute = new Discord.RichEmbed()
              .setDescription(
                `✅ | **Вас замутили на сервере \`${message.guild.name}\`!**`
              )
              .setColor(colors)
              .addField("Длительность", `**Навсегда.**`, true)
              .addField("Модератор", `**${message.author}**`, true)
              .addField("Причина", `**Без причины.**`)
              .setFooter(bot.user.username, bot.user.avatarURL)
              .setTimestamp();
            rUser.send(EmbedMute);
            return;
          }
          rUser.addRole(role);
          message.channel.send(
            new RichEmbed()
              .setDescription(
                `✅ | **Пользователь ${message.author} замутил пользователя ${rUser} по причине \`${reason1}\`!**`
              )
              .setColor(colors)
              .setFooter(bot.user.username, bot.user.displayAvatarURL)
              .setTimestamp()
          );
          let EmbedMute = new Discord.RichEmbed()
            .setDescription(
              `✅ | **Вас замутили на сервере \`${message.guild.name}\`!**`
            )
            .setColor(colors)
            .addField("Длительность", `**Навсегда.**`, true)
            .addField("Модератор", `**${message.author}**`, true)
            .addField("Причина", `**${reason1}**`)
            .setFooter(bot.user.username, bot.user.avatarURL)
            .setTimestamp();
          rUser.send(EmbedMute);
          return;
        }
        const sym = Time.split("").reverse()[0];
        const time = Time.slice(0, -1);
        if (isNaN(time)) {
          if (Mutess == true) {
            rUser.addRole(role);
            return message.channel.send(
              new Discord.RichEmbed()
                .setColor(`RED`)
                .setDescription(
                  `🚫 | **Данный пользователь уже заблокирован!**`
                )
                .setFooter(
                  message.author.username,
                  message.author.displayAvatarURL
                )
                .setTimestamp()
            );
          }
          let reason1 = args.slice(1).join(" ");
          if (!reason1) {
            rUser.addRole(role);
            message.channel.send(
              new RichEmbed()
                .setDescription(
                  `✅ | **Пользователь ${message.author} замутил пользователя ${rUser}!**`
                )
                .setColor(colors)
                .setFooter(bot.user.username, bot.user.avatarURL)
                .setTimestamp()
            );
            let EmbedMute = new Discord.RichEmbed()
              .setDescription(
                `✅ | **Вас замутили на сервере \`${message.guild.name}\`!**`
              )
              .setColor(colors)
              .addField("Длительность", `**Навсегда.**`, true)
              .addField("Модератор", `**${message.author}**`, true)
              .addField("Причина", `**Без причины.**`)
              .setFooter(bot.user.username, bot.user.avatarURL)
              .setTimestamp();
            rUser.send(EmbedMute);
            return;
          }
          rUser.addRole(role);
          message.channel.send(
            new RichEmbed()
              .setDescription(
                `✅ | **Пользователь ${message.author} замутил пользователя ${rUser} по причине \`${reason1}\`!**`
              )
              .setColor(colors)
              .setFooter(bot.user.username, bot.user.displayAvatarURL)
              .setTimestamp()
          );
          let EmbedMute = new Discord.RichEmbed()
            .setDescription(
              `✅ | **Вас замутили на сервере \`${message.guild.name}\`!**`
            )
            .setColor(colors)
            .addField("Длительность", `**Навсегда.**`, true)
            .addField("Модератор", `**${message.author}**`, true)
            .addField("Причина", `**${reason1}**`)
            .setFooter(bot.user.username, bot.user.avatarURL)
            .setTimestamp();
          rUser.send(EmbedMute);
          return;
        }
        if (sym === "s") {
          one = "секунду";
          two = "секунды";
          five = "секунд";
          if (Mutess == true) {
            if (!reason) {
              let a = Mutes;
              let g = time * 1000;
              let b = parseInt(a) + g;
              collection.updateOne(
                { UserId: rUser.id, GuildId: message.guild.id },
                { $set: { Time: b } },
                function(err, result) {
                  if (err) return console.log(err);
                }
              );
              message.channel.send(
                new RichEmbed()
                  .setColor(colors)
                  .setFooter(bot.user.username, bot.user.displayAvatarURL)
                  .setTimestamp()
                  .setDescription(
                    `✅ | **Пользователь ${
                      message.author
                    } дополнил мут ${rUser} на ${uts(time, one, two, five)}!**`
                  )
              );
              let EmbedMute = new Discord.RichEmbed()
                .setColor(colors)
                .setDescription(
                  `Вам дополнили мут на сервере \`${message.guild.name}\`!`
                )
                .addField(
                  "Длительность",
                  `**${uts(time, one, two, five)}**`,
                  true
                )
                .addField("Модератор", `**${message.author}**`, true)
                .addField("Причина", `**Без причины.**`)
                .setFooter(bot.user.username, bot.user.avatarURL)
                .setTimestamp();
              rUser.send(EmbedMute);
              rUser.addRole(role);
              return;
            }
            let a = Mutes;
            let g = time * 1000;
            let b = parseInt(a) + g;
            collection.updateOne(
              { UserId: rUser.id, GuildId: message.guild.id },
              { $set: { Time: b } },
              function(err, result) {
                if (err) return console.log(err);
              }
            );
            message.channel.send(
              new RichEmbed()
                .setColor(colors)
                .setFooter(bot.user.username, bot.user.displayAvatarURL)
                .setTimestamp()
                .setDescription(
                  `✅ | **Пользователь ${
                    message.author
                  } дополнил мут ${rUser} на ${uts(
                    time,
                    one,
                    two,
                    five
                  )} по причине \`${reason}\`!**`
                )
            );
            let EmbedMute = new Discord.RichEmbed()
              .setColor(colors)
              .setDescription(
                `Вам дополнили мут на сервере \`${message.guild.name}\`!`
              )
              .addField(
                "Длительность",
                `**${uts(time, one, two, five)}**`,
                true
              )
              .addField("Модератор", `**${message.author}**`, true)
              .addField("Причина", `**${reason}**`)
              .setFooter(bot.user.username, bot.user.avatarURL)
              .setTimestamp();
            rUser.send(EmbedMute);
            rUser.addRole(role);
            return;
          }
          if (!reason) {
            let users2 = [
              {
                UserId: rUser.id,
                GuildId: message.guild.id,
                Time: parseInt(Date.now() + time * 1000)
              }
            ];
            collection.insertMany(users2, function(err, results) {
              if (err) return console.log(err);
            });
            rUser.addRole(role);
            message.channel.send(
              new RichEmbed()
                .setColor(colors)
                .setFooter(bot.user.username, bot.user.displayAvatarURL)
                .setTimestamp()
                .setDescription(
                  `✅ | **Пользователь ${
                    message.author
                  } замутил пользователя ${rUser} на ${uts(
                    time,
                    one,
                    two,
                    five
                  )}!**`
                )
            );
            let EmbedMute = new Discord.RichEmbed()
              .setDescription(
                `✅ | **Вас замутили на сервере \`${message.guild.name}\`!**`
              )
              .setColor(colors)
              .addField(
                "Длительность",
                `**${uts(time, one, two, five)}**`,
                true
              )
              .addField("Модератор", `**${message.author}**`, true)
              .addField("Причина", `**Без причины.**`)
              .setFooter(bot.user.username, bot.user.avatarURL)
              .setTimestamp();
            rUser.send(EmbedMute);
            return;
          }
          let users2 = [
            {
              UserId: rUser.id,
              GuildId: message.guild.id,
              Time: parseInt(Date.now() + time * 1000)
            }
          ];
          collection.insertMany(users2, function(err, results) {
            if (err) return console.log(err);
          });
          rUser.addRole(role);
          message.channel.send(
            new RichEmbed()
              .setColor(colors)
              .setFooter(bot.user.username, bot.user.displayAvatarURL)
              .setTimestamp()
              .setDescription(
                `✅ | **Пользователь ${
                  message.author
                } замутил пользователя ${rUser} на ${uts(
                  time,
                  one,
                  two,
                  five
                )} по причине \`${reason}\`!**`
              )
          );
          let EmbedMute = new Discord.RichEmbed()
            .setDescription(
              `✅ | **Вас замутили на сервере \`${message.guild.name}\`!**`
            )
            .setColor(colors)
            .addField("Длительность", `**${uts(time, one, two, five)}**`, true)
            .addField("Модератор", `**${message.author}**`, true)
            .addField("Причина", `**${reason}**`)
            .setFooter(bot.user.username, bot.user.avatarURL)
            .setTimestamp();
          rUser.send(EmbedMute);
        }
        if (sym === "m") {
          one = "минуту";
          two = "минуты";
          five = "минут";
          if (Mutess == true) {
            if (!reason) {
              let min = time * 60;
              let a = Mutes;
              let g = min * 1000;
              let b = parseInt(a) + g;
              collection.updateOne(
                { UserId: rUser.id, GuildId: message.guild.id },
                { $set: { Time: b } },
                function(err, result) {
                  if (err) return console.log(err);
                }
              );
              rUser.addRole(role);
              message.channel.send(
                new RichEmbed()
                  .setColor(colors)
                  .setFooter(bot.user.username, bot.user.displayAvatarURL)
                  .setTimestamp()
                  .setDescription(
                    `✅ | **Пользователь ${
                      message.author
                    } дополнил мут ${rUser} на ${uts(time, one, two, five)}!**`
                  )
              );
              let EmbedMute = new Discord.RichEmbed()
                .setColor(colors)
                .setDescription(
                  `Вам дополнили мут на сервере \`${message.guild.name}\`!`
                )
                .addField(
                  "Длительность",
                  `**${uts(time, one, two, five)}**`,
                  true
                )
                .addField("Модератор", `**${message.author}**`, true)
                .addField("Причина", `**Без причины.**`)
                .setFooter(bot.user.username, bot.user.avatarURL)
                .setTimestamp();
              rUser.send(EmbedMute);
              return;
            }
            let min = time * 60;
            let a = Mutes;
            let g = min * 1000;
            let b = parseInt(a) + g;
            collection.updateOne(
              { UserId: rUser.id, GuildId: message.guild.id },
              { $set: { Time: b } },
              function(err, result) {
                if (err) return console.log(err);
              }
            );
            message.channel.send(
              new RichEmbed()
                .setColor(colors)
                .setFooter(bot.user.username, bot.user.displayAvatarURL)
                .setTimestamp()
                .setDescription(
                  `✅ | **Пользователь ${
                    message.author
                  } дополнил мут ${rUser} на ${uts(
                    time,
                    one,
                    two,
                    five
                  )} по причине \`${reason}\`!**`
                )
            );
            let EmbedMute = new Discord.RichEmbed()
              .setColor(colors)
              .setDescription(
                `Вам дополнили мут на сервере \`${message.guild.name}\`!`
              )
              .addField(
                "Длительность",
                `**${uts(time, one, two, five)}**`,
                true
              )
              .addField("Модератор", `**${message.author}**`, true)
              .addField("Причина", `**${reason}**`)
              .setFooter(bot.user.username, bot.user.avatarURL)
              .setTimestamp();
            rUser.send(EmbedMute);
            rUser.addRole(role);
            return;
          }
          if (!reason) {
            let min = time * 60;
            let users2 = [
              {
                UserId: rUser.id,
                GuildId: message.guild.id,
                Time: parseInt(Date.now() + min * 1000)
              }
            ];
            collection.insertMany(users2, function(err, results) {
              if (err) return console.log(err);
            });
            rUser.addRole(role);
            message.channel.send(
              new RichEmbed()
                .setColor(colors)
                .setFooter(bot.user.username, bot.user.displayAvatarURL)
                .setTimestamp()
                .setDescription(
                  `✅ | **Пользователь ${
                    message.author
                  } замутил пользователя ${rUser} на ${uts(
                    time,
                    one,
                    two,
                    five
                  )}!**`
                )
            );
            let EmbedMute = new Discord.RichEmbed()
              .setDescription(
                `✅ | **Вас замутили на сервере \`${message.guild.name}\`!**`
              )
              .setColor(colors)
              .addField(
                "Длительность",
                `**${uts(time, one, two, five)}**`,
                true
              )
              .addField("Модератор", `**${message.author}**`, true)
              .addField("Причина", `**Без причины.**`)
              .setFooter(bot.user.username, bot.user.avatarURL)
              .setTimestamp();
            rUser.send(EmbedMute);
            return;
          }
          let min = time * 60;
          let users2 = [
            {
              UserId: rUser.id,
              GuildId: message.guild.id,
              Time: parseInt(Date.now() + min * 1000)
            }
          ];
          collection.insertMany(users2, function(err, results) {
            if (err) return console.log(err);
          });
          rUser.addRole(role);
          message.channel.send(
            new RichEmbed()
              .setColor(colors)
              .setFooter(bot.user.username, bot.user.displayAvatarURL)
              .setTimestamp()
              .setDescription(
                `✅ | **Пользователь ${
                  message.author
                } замутил пользователя ${rUser} на ${uts(
                  time,
                  one,
                  two,
                  five
                )} по причине \`${reason}\`!**`
              )
          );
          let EmbedMute = new Discord.RichEmbed()
            .setDescription(
              `✅ | **Вас замутили на сервере \`${message.guild.name}\`!**`
            )
            .setColor(colors)
            .addField("Длительность", `**${uts(time, one, two, five)}**`, true)
            .addField("Модератор", `**${message.author}**`, true)
            .addField("Причина", `**${reason}**`)
            .setFooter(bot.user.username, bot.user.avatarURL)
            .setTimestamp();
          rUser.send(EmbedMute);
        }
        if (sym === "h") {
          one = "час";
          two = "часа";
          five = "часов";
          if (Mutess == true) {
            if (!reason) {
              let hac = time * 3600;
              let a = Mutes;
              let g = hac * 1000;
              let b = parseInt(a) + g;
              collection.updateOne(
                { UserId: rUser.id, GuildId: message.guild.id },
                { $set: { Time: b } },
                function(err, result) {
                  if (err) return console.log(err);
                }
              );
              message.channel.send(
                new RichEmbed()
                  .setColor(colors)
                  .setFooter(bot.user.username, bot.user.displayAvatarURL)
                  .setTimestamp()
                  .setDescription(
                    `✅ | **Пользователь ${
                      message.author
                    } дополнил мут ${rUser} на ${uts(time, one, two, five)}!**`
                  )
              );
              rUser.addRole(role);
              let EmbedMute = new Discord.RichEmbed()
                .setColor(colors)
                .setDescription(
                  `Вам дополнили мут на сервере \`${message.guild.name}\`!`
                )
                .addField(
                  "Длительность",
                  `**${uts(time, one, two, five)}**`,
                  true
                )
                .addField("Модератор", `**${message.author}**`, true)
                .addField("Причина", `**Без причины.**`)
                .setFooter(bot.user.username, bot.user.avatarURL)
                .setTimestamp();
              rUser.send(EmbedMute);
              return;
            }
            let hac = time * 3600;
            let a = Mutes;
            let g = hac * 1000;
            let b = parseInt(a) + g;
            collection.updateOne(
              { UserId: rUser.id, GuildId: message.guild.id },
              { $set: { Time: b } },
              function(err, result) {
                if (err) return console.log(err);
              }
            );
            message.channel.send(
              new RichEmbed()
                .setColor(colors)
                .setFooter(bot.user.username, bot.user.displayAvatarURL)
                .setTimestamp()
                .setDescription(
                  `✅ | **Пользователь ${
                    message.author
                  } дополнил мут ${rUser} на ${uts(
                    time,
                    one,
                    two,
                    five
                  )} по причине \`${reason}\`!**`
                )
            );
            let EmbedMute = new Discord.RichEmbed()
              .setColor(colors)
              .setDescription(
                `Вам дополнили мут на сервере \`${message.guild.name}\`!`
              )
              .addField(
                "Длительность",
                `**${uts(time, one, two, five)}**`,
                true
              )
              .addField("Модератор", `**${message.author}**`, true)
              .addField("Причина", `**${reason}**`)
              .setFooter(bot.user.username, bot.user.avatarURL)
              .setTimestamp();
            rUser.send(EmbedMute);
            rUser.addRole(role);
            return;
          }
          if (!reason) {
            let hac = time * 3600;
            let users2 = [
              {
                UserId: rUser.id,
                GuildId: message.guild.id,
                Time: parseInt(Date.now() + hac * 1000)
              }
            ];
            collection.insertMany(users2, function(err, results) {
              if (err) return console.log(err);
            });
            rUser.addRole(role);
            message.channel.send(
              new RichEmbed()
                .setColor(colors)
                .setFooter(bot.user.username, bot.user.displayAvatarURL)
                .setTimestamp()
                .setDescription(
                  `✅ | **Пользователь ${
                    message.author
                  } замутил пользователя ${rUser} на ${uts(
                    time,
                    one,
                    two,
                    five
                  )}!**`
                )
            );
            let EmbedMute = new Discord.RichEmbed()
              .setDescription(
                `✅ | **Вас замутили на сервере \`${message.guild.name}\`!**`
              )
              .setColor(colors)
              .addField(
                "Длительность",
                `**${uts(time, one, two, five)}**`,
                true
              )
              .addField("Модератор", `**${message.author}**`, true)
              .addField("Причина", `**Без причины.**`)
              .setFooter(bot.user.username, bot.user.avatarURL)
              .setTimestamp();
            rUser.send(EmbedMute);
            return;
          }
          let hac = time * 3600;
          let users2 = [
            {
              UserId: rUser.id,
              GuildId: message.guild.id,
              Time: parseInt(Date.now() + hac * 1000)
            }
          ];
          collection.insertMany(users2, function(err, results) {
            if (err) return console.log(err);
          });
          rUser.addRole(role);
          message.channel.send(
            new RichEmbed()
              .setColor(colors)
              .setFooter(bot.user.username, bot.user.displayAvatarURL)
              .setTimestamp()
              .setDescription(
                `✅ | **Пользователь ${
                  message.author
                } замутил пользователя ${rUser} на ${uts(
                  time,
                  one,
                  two,
                  five
                )} по причине \`${reason}\`!**`
              )
          );
          let EmbedMute = new Discord.RichEmbed()
            .setDescription(
              `✅ | **Вас замутили на сервере \`${message.guild.name}\`!**`
            )
            .setColor(colors)
            .addField("Длительность", `**${uts(time, one, two, five)}**`, true)
            .addField("Модератор", `**${message.author}**`, true)
            .addField("Причина", `**${reason}**`)
            .setFooter(bot.user.username, bot.user.avatarURL)
            .setTimestamp();
          rUser.send(EmbedMute);
        }

        if (sym === "d") {
          one = "день";
          two = "дня";
          five = "дней";
          if (Mutess == true) {
            if (!reason) {
              let day = time * 86400;
              let a = Mutes;
              let g = day * 1000;
              let b = parseInt(a) + g;
              collection.updateOne(
                { UserId: rUser.id, GuildId: message.guild.id },
                { $set: { Time: b } },
                function(err, result) {
                  if (err) return console.log(err);
                }
              );
              message.channel.send(
                new RichEmbed()
                  .setColor(colors)
                  .setFooter(bot.user.username, bot.user.displayAvatarURL)
                  .setTimestamp()
                  .setDescription(
                    `✅ | **Пользователь ${
                      message.author
                    } дополнил мут ${rUser} на ${uts(time, one, two, five)}!**`
                  )
              );
              let EmbedMute = new Discord.RichEmbed()
                .setColor(colors)
                .setDescription(
                  `Вам дополнили мут на сервере \`${message.guild.name}\`!`
                )
                .addField(
                  "Длительность",
                  `**${uts(time, one, two, five)}**`,
                  true
                )
                .addField("Модератор", `**${message.author}**`, true)
                .addField("Причина", `**Без причины.**`)
                .setFooter(bot.user.username, bot.user.avatarURL)
                .setTimestamp();
              rUser.send(EmbedMute);
              rUser.addRole(role);
              return;
            }
            let day = time * 86400;
            let a = Mutes;
            let g = day * 1000;
            let b = parseInt(a) + g;
            collection.updateOne(
              { UserId: rUser.id, GuildId: message.guild.id },
              { $set: { Time: b } },
              function(err, result) {
                if (err) return console.log(err);
              }
            );
            message.channel.send(
              new RichEmbed()
                .setColor(colors)
                .setFooter(bot.user.username, bot.user.displayAvatarURL)
                .setTimestamp()
                .setDescription(
                  `✅ | **Пользователь ${
                    message.author
                  } дополнил мут ${rUser} на ${uts(
                    time,
                    one,
                    two,
                    five
                  )} по причине \`${reason}\`!**`
                )
            );
            let EmbedMute = new Discord.RichEmbed()
              .setColor(colors)
              .setDescription(
                `Вам дополнили мут на сервере \`${message.guild.name}\`!`
              )
              .addField(
                "Длительность",
                `**${uts(time, one, two, five)}**`,
                true
              )
              .addField("Модератор", `**${message.author}**`, true)
              .addField("Причина", `**${reason}**`)
              .setFooter(bot.user.username, bot.user.avatarURL)
              .setTimestamp();
            rUser.send(EmbedMute);
            rUser.addRole(role);
            return;
          }
          if (!reason) {
            let day = time * 86400;
            let users2 = [
              {
                UserId: rUser.id,
                GuildId: message.guild.id,
                Time: parseInt(Date.now() + day * 1000)
              }
            ];
            collection.insertMany(users2, function(err, results) {
              if (err) return console.log(err);
            });
            rUser.addRole(role);
            message.channel.send(
              new RichEmbed()
                .setColor(colors)
                .setFooter(bot.user.username, bot.user.displayAvatarURL)
                .setTimestamp()
                .setDescription(
                  `✅ | **Пользователь ${
                    message.author
                  } замутил пользователя ${rUser} на ${uts(
                    time,
                    one,
                    two,
                    five
                  )}!**`
                )
            );
            let EmbedMute = new Discord.RichEmbed()
              .setDescription(
                `✅ | **Вас замутили на сервере \`${message.guild.name}\`!**`
              )
              .setColor(colors)
              .addField(
                "Длительность",
                `**${uts(time, one, two, five)}**`,
                true
              )
              .addField("Модератор", `**${message.author}**`, true)
              .addField("Причина", `**Без причины.**`)
              .setFooter(bot.user.username, bot.user.avatarURL)
              .setTimestamp();
            rUser.send(EmbedMute);
            return;
          }
          let day = time * 86400;
          let users2 = [
            {
              UserId: rUser.id,
              GuildId: message.guild.id,
              Time: parseInt(Date.now() + day * 1000)
            }
          ];
          collection.insertMany(users2, function(err, results) {
            if (err) return console.log(err);
          });
          rUser.addRole(role);
          message.channel.send(
            new RichEmbed()
              .setColor(colors)
              .setFooter(bot.user.username, bot.user.displayAvatarURL)
              .setTimestamp()
              .setDescription(
                `✅ | **Пользователь ${
                  message.author
                } замутил пользователя ${rUser} на ${uts(
                  time,
                  one,
                  two,
                  five
                )} по причине \`${reason}\`!**`
              )
          );
          let EmbedMute = new Discord.RichEmbed()
            .setDescription(
              `✅ | **Вас замутили на сервере \`${message.guild.name}\`!**`
            )
            .setColor(colors)
            .addField("Длительность", `**${uts(time, one, two, five)}**`, true)
            .addField("Модератор", `**${message.author}**`, true)
            .addField("Причина", `**${reason}**`)
            .setFooter(bot.user.username, bot.user.avatarURL)
            .setTimestamp();
          rUser.send(EmbedMute);
        }
        if (sym === "w") {
          one = "неделю";
          two = "недели";
          five = "недель";
          if (Mutess == true) {
            if (!reason) {
              let day = time * 604800;
              let a = Mutes;
              let g = day * 1000;
              let b = parseInt(a) + g;
              collection.updateOne(
                { UserId: rUser.id, GuildId: message.guild.id },
                { $set: { Time: b } },
                function(err, result) {
                  if (err) return console.log(err);
                }
              );
              message.channel.send(
                new RichEmbed()
                  .setColor(colors)
                  .setFooter(bot.user.username, bot.user.displayAvatarURL)
                  .setTimestamp()
                  .setDescription(
                    `✅ | **Пользователь ${
                      message.author
                    } дополнил мут ${rUser} на ${uts(time, one, two, five)}!**`
                  )
              );
              let EmbedMute = new Discord.RichEmbed()
                .setColor(colors)
                .setDescription(
                  `Вам дополнили мут на сервере \`${message.guild.name}\`!`
                )
                .addField(
                  "Длительность",
                  `**${uts(time, one, two, five)}**`,
                  true
                )
                .addField("Модератор", `**${message.author}**`, true)
                .addField("Причина", `**Без причины.**`)
                .setFooter(bot.user.username, bot.user.avatarURL)
                .setTimestamp();
              rUser.send(EmbedMute);
              rUser.addRole(role);
              return;
            }
            let day = time * 604800;
            let a = Mutes;
            let g = day * 1000;
            let b = parseInt(a) + g;
            collection.updateOne(
              { UserId: rUser.id, GuildId: message.guild.id },
              { $set: { Time: b } },
              function(err, result) {
                if (err) return console.log(err);
              }
            );
            message.channel.send(
              new RichEmbed()
                .setColor(colors)
                .setFooter(bot.user.username, bot.user.displayAvatarURL)
                .setTimestamp()
                .setDescription(
                  `✅ | **Пользователь ${
                    message.author
                  } дополнил мут ${rUser} на ${uts(
                    time,
                    one,
                    two,
                    five
                  )} по причине \`${reason}\`!**`
                )
            );
            let EmbedMute = new Discord.RichEmbed()
              .setColor(colors)
              .setDescription(
                `Вам дополнили мут на сервере \`${message.guild.name}\`!`
              )
              .addField(
                "Длительность",
                `**${uts(time, one, two, five)}**`,
                true
              )
              .addField("Модератор", `**${message.author}**`, true)
              .addField("Причина", `**${reason}**`)
              .setFooter(bot.user.username, bot.user.avatarURL)
              .setTimestamp();
            rUser.send(EmbedMute);
            rUser.addRole(role);
            return;
          }
          if (!reason) {
            let day = time * 604800;
            let users2 = [
              {
                UserId: rUser.id,
                GuildId: message.guild.id,
                Time: parseInt(Date.now() + day * 1000)
              }
            ];
            collection.insertMany(users2, function(err, results) {
              if (err) return console.log(err);
            });
            rUser.addRole(role);
            message.channel.send(
              new RichEmbed()
                .setColor(colors)
                .setFooter(bot.user.username, bot.user.displayAvatarURL)
                .setTimestamp()
                .setDescription(
                  `✅ | **Пользователь ${
                    message.author
                  } замутил пользователя ${rUser} на ${uts(
                    time,
                    one,
                    two,
                    five
                  )}!**`
                )
            );
            let EmbedMute = new Discord.RichEmbed()
              .setDescription(
                `✅ | **Вас замутили на сервере \`${message.guild.name}\`!**`
              )
              .setColor(colors)
              .addField(
                "Длительность",
                `**${uts(time, one, two, five)}**`,
                true
              )
              .addField("Модератор", `**${message.author}**`, true)
              .addField("Причина", `**Без причины.**`)
              .setFooter(bot.user.username, bot.user.avatarURL)
              .setTimestamp();
            rUser.send(EmbedMute);
            return;
          }
          let day = time * 604800;
          let users2 = [
            {
              UserId: rUser.id,
              GuildId: message.guild.id,
              Time: parseInt(Date.now() + day * 1000)
            }
          ];
          collection.insertMany(users2, function(err, results) {
            if (err) return console.log(err);
          });
          rUser.addRole(role);
          message.channel.send(
            new RichEmbed()
              .setColor(colors)
              .setFooter(bot.user.username, bot.user.displayAvatarURL)
              .setTimestamp()
              .setDescription(
                `✅ | **Пользователь ${
                  message.author
                } замутил пользователя ${rUser} на ${uts(
                  time,
                  one,
                  two,
                  five
                )} по причине \`${reason}\`!**`
              )
          );
          let EmbedMute = new Discord.RichEmbed()
            .setDescription(
              `✅ | **Вас замутили на сервере \`${message.guild.name}\`!**`
            )
            .setColor(colors)
            .addField("Длительность", `**${uts(time, one, two, five)}**`, true)
            .addField("Модератор", `**${message.author}**`, true)
            .addField("Причина", `**${reason}**`)
            .setFooter(bot.user.username, bot.user.avatarURL)
            .setTimestamp();
          rUser.send(EmbedMute);
        }
        if (sym === "y") {
          one = "год";
          two = "года";
          five = "года";
          if (Mutess == true) {
            if (!reason) {
              let day = time * 31536000;
              let a = Mutes;
              let g = day * 1000;
              let b = parseInt(a) + g;
              collection.updateOne(
                { UserId: rUser.id, GuildId: message.guild.id },
                { $set: { Time: b } },
                function(err, result) {
                  if (err) return console.log(err);
                }
              );
              message.channel.send(
                new RichEmbed()
                  .setColor(colors)
                  .setFooter(bot.user.username, bot.user.displayAvatarURL)
                  .setTimestamp()
                  .setDescription(
                    `✅ | **Пользователь ${
                      message.author
                    } дополнил мут ${rUser} на ${uts(time, one, two, five)}!**`
                  )
              );
              let EmbedMute = new Discord.RichEmbed()
                .setColor(colors)
                .setDescription(
                  `Вам дополнили мут на сервере \`${message.guild.name}\`!`
                )
                .addField(
                  "Длительность",
                  `**${uts(time, one, two, five)}**`,
                  true
                )
                .addField("Модератор", `**${message.author}**`, true)
                .addField("Причина", `**Без причины.**`)
                .setFooter(bot.user.username, bot.user.avatarURL)
                .setTimestamp();
              rUser.send(EmbedMute);
              rUser.addRole(role);
              return;
            }
            let day = time * 31536000;
            let a = Mutes;
            let g = day * 1000;
            let b = parseInt(a) + g;
            collection.updateOne(
              { UserId: rUser.id, GuildId: message.guild.id },
              { $set: { Time: b } },
              function(err, result) {
                if (err) return console.log(err);
              }
            );
            message.channel.send(
              new RichEmbed()
                .setColor(colors)
                .setFooter(bot.user.username, bot.user.displayAvatarURL)
                .setTimestamp()
                .setDescription(
                  `✅ | **Пользователь ${
                    message.author
                  } дополнил мут ${rUser} на ${uts(
                    time,
                    one,
                    two,
                    five
                  )} по причине \`${reason}\`!**`
                )
            );
            let EmbedMute = new Discord.RichEmbed()
              .setColor(colors)
              .setDescription(
                `Вам дополнили мут на сервере \`${message.guild.name}\`!`
              )
              .addField(
                "Длительность",
                `**${uts(time, one, two, five)}**`,
                true
              )
              .addField("Модератор", `**${message.author}**`, true)
              .addField("Причина", `**${reason}**`)
              .setFooter(bot.user.username, bot.user.avatarURL)
              .setTimestamp();
            rUser.send(EmbedMute);
            rUser.addRole(role);
            return;
          }
          if (!reason) {
            let day = time * 31536000;
            let users2 = [
              {
                UserId: rUser.id,
                GuildId: message.guild.id,
                Time: parseInt(Date.now() + day * 1000)
              }
            ];
            collection.insertMany(users2, function(err, results) {
              if (err) return console.log(err);
            });
            rUser.addRole(role);
            message.channel.send(
              new RichEmbed()
                .setColor(colors)
                .setFooter(bot.user.username, bot.user.displayAvatarURL)
                .setTimestamp()
                .setDescription(
                  `✅ | **Пользователь ${
                    message.author
                  } замутил пользователя ${rUser} на ${uts(
                    time,
                    one,
                    two,
                    five
                  )}!**`
                )
            );
            let EmbedMute = new Discord.RichEmbed()
              .setDescription(
                `✅ | **Вас замутили на сервере \`${message.guild.name}\`!**`
              )
              .setColor(colors)
              .addField(
                "Длительность",
                `**${uts(time, one, two, five)}**`,
                true
              )
              .addField("Модератор", `**${message.author}**`, true)
              .addField("Причина", `**Без причины.**`)
              .setFooter(bot.user.username, bot.user.avatarURL)
              .setTimestamp();
            rUser.send(EmbedMute);
            return;
          }
          let day = time * 31536000;
          let users2 = [
            {
              UserId: rUser.id,
              GuildId: message.guild.id,
              Time: parseInt(Date.now() + day * 1000)
            }
          ];
          collection.insertMany(users2, function(err, results) {
            if (err) return console.log(err);
          });
          rUser.addRole(role);
          message.channel.send(
            new RichEmbed()
              .setColor(colors)
              .setFooter(bot.user.username, bot.user.displayAvatarURL)
              .setTimestamp()
              .setDescription(
                `✅ | **Пользователь ${
                  message.author
                } замутил пользователя ${rUser} на ${uts(
                  time,
                  one,
                  two,
                  five
                )} по причине \`${reason}\`!**`
              )
          );
          let EmbedMute = new Discord.RichEmbed()
            .setDescription(
              `✅ | **Вас замутили на сервере \`${message.guild.name}\`!**`
            )
            .setColor(colors)
            .addField("Длительность", `**${uts(time, one, two, five)}**`, true)
            .addField("Модератор", `**${message.author}**`, true)
            .addField("Причина", `**${reason}**`)
            .setFooter(bot.user.username, bot.user.avatarURL)
            .setTimestamp();
          rUser.send(EmbedMute);
        }
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
  name: "mute"
};
