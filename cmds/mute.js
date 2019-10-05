const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const fs = require("fs");
const { colors } = require("../botconfig.json");
const mutes = require("../mutes.json");
module.exports.run = async (bot, message, args) => {
  try {
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
    if (!message.member.hasPermission("MANAGE_MESSAGES" || "MANAGE_ROLES")) {
      message.channel.send(
        new Discord.RichEmbed()
          .setColor("RED")
          .setDescription(
            "🚫 | **У вас должны быть права на удаление сообщений или выдачи ролей!**"
          )
          .setTimestamp()
          .setFooter(message.author.username, message.author.displayAvatarURL)
      );
      return;
    }
    if (!role) {
      let embed = new Discord.RichEmbed()
        .setColor("RED")
        .setAuthor("Повторите попытку ещё раз...");
      message.channel.send(embed);
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
    if (!rUser) {
      message.channel.send(
        new Discord.RichEmbed()
          .setColor("RED")
          .setAuthor("Укажите пользователя!")
          .setFooter(message.author.username, message.author.displayAvatarURL)
          .setTimestamp()
      );
      return;
    }
    if (message.author.id === rUser.id) {
      message.channel.send(
        new Discord.RichEmbed()
          .setColor("RED")
          .setAuthor("Нельзя замутить самого себя!")
          .setFooter(message.author.username, message.author.displayAvatarURL)
          .setTimestamp()
      );
      return;
    }
    if (rUser.id === bot.user.id) {
      message.channel.send(
        new Discord.RichEmbed()
          .setColor("RED")
          .setAuthor("Нельзя замутить меня!")
          .setFooter(message.author.username, message.author.displayAvatarURL)
          .setTimestamp()
      );
      return;
    }
    if (rUser.id === message.guild.owner.id) {
      message.channel.send(
        new Discord.RichEmbed()
          .setColor("RED")
          .setDescription("Нельзя замутить создателя.")
          .setFooter(message.author.username, message.author.displayAvatarURL)
          .setTimestamp()
      );
      return;
    }
    if (rUser.hasPermission("ADMINISTRATOR")) {
      let embed = new Discord.RichEmbed()
        .setColor("RED")
        .setTimestamp()
        .setAuthor("Нельзя замутить Администратора!")
        .setFooter(message.author.username, message.author.displayAvatarURL);
      return message.channel.send(embed);
    }
    if (!Time) {
      if (mutes[rUser.id]) {
        let embed = new Discord.RichEmbed()
          .setColor(`RED`)
          .setDescription(`🚫 | **Данный пользователь уже заблокирован!**`)
          .setFooter(
            `${message.author.username}`,
            message.author.displayAvatarURL
          )
          .setTimestamp();
        return message.channel.send(embed);
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
      if (mutes[rUser.id]) {
        let embed = new Discord.RichEmbed()
          .setColor(`RED`)
          .setDescription(`🚫 | **Данный пользователь уже заблокирован!**`)
          .setFooter(
            `${message.author.username}`,
            message.author.displayAvatarURL
          )
          .setTimestamp();
        return message.channel.send(embed);
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
      if (mutes[rUser.id]) {
        if (!reason) {
          let a = mutes[rUser.id].time;
          let g = parseInt(Date.now() + time * 1000);
          let b = parseInt(a) + g;
          mutes[rUser.id] = {
            guild: message.guild.id,
            time: b
          };
          fs.writeFile("./mutes.json", JSON.stringify(mutes), err => {
            if (err) console.error(err);
          });
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
            .addField("Длительность", `**${uts(time, one, two, five)}**`, true)
            .addField("Модератор", `**${message.author}**`, true)
            .addField("Причина", `**Без причины.**`)
            .setFooter(bot.user.username, bot.user.avatarURL)
            .setTimestamp();
          rUser.send(EmbedMute);
          rUser.addRole(role);
          return;
        }
        let a = mutes[rUser.id].time;
        let g = parseInt(Date.now() + time * 1000);
        let b = parseInt(a) + g;
        mutes[rUser.id] = {
          guild: message.guild.id,
          time: b
        };
        fs.writeFile("./mutes.json", JSON.stringify(mutes), err => {
          if (err) console.error(err);
        });
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
          .addField("Длительность", `**${uts(time, one, two, five)}**`, true)
          .addField("Модератор", `**${message.author}**`, true)
          .addField("Причина", `**${reason}**`)
          .setFooter(bot.user.username, bot.user.avatarURL)
          .setTimestamp();
        rUser.send(EmbedMute);
        rUser.addRole(role);
        return;
      }
      if (!reason) {
        mutes[rUser.id] = {
          guild: message.guild.id,
          time: parseInt(Date.now() + time * 1000)
        };
        fs.writeFile("./mutes.json", JSON.stringify(mutes), err => {
          if (err) console.error(err);
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
          .addField("Длительность", `**${uts(time, one, two, five)}**`, true)
          .addField("Модератор", `**${message.author}**`, true)
          .addField("Причина", `**Без причины.**`)
          .setFooter(bot.user.username, bot.user.avatarURL)
          .setTimestamp();
        rUser.send(EmbedMute);
        return;
      }
      mutes[rUser.id] = {
        guild: message.guild.id,
        time: parseInt(Date.now() + time * 1000)
      };
      fs.writeFile("./mutes.json", JSON.stringify(mutes), err => {
        if (err) console.error(err);
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
      if (mutes[rUser.id]) {
        if (!reason) {
          let min = time * 60;
          let a = mutes[rUser.id].time;
          let g = parseInt(Date.now() + min * 1000);
          let b = parseInt(a) + g;
          mutes[rUser.id] = {
            guild: message.guild.id,
            time: b
          };
          fs.writeFile("./mutes.json", JSON.stringify(mutes), err => {
            if (err) console.error(err);
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
                } дополнил мут ${rUser} на ${uts(time, one, two, five)}!**`
              )
          );
          let EmbedMute = new Discord.RichEmbed()
            .setColor(colors)
            .setDescription(
              `Вам дополнили мут на сервере \`${message.guild.name}\`!`
            )
            .addField("Длительность", `**${uts(time, one, two, five)}**`, true)
            .addField("Модератор", `**${message.author}**`, true)
            .addField("Причина", `**Без причины.**`)
            .setFooter(bot.user.username, bot.user.avatarURL)
            .setTimestamp();
          rUser.send(EmbedMute);
          return;
        }
        let min = time * 60;
        let a = mutes[rUser.id].time;
        let g = parseInt(Date.now() + min * 1000);
        let b = parseInt(a) + g;
        mutes[rUser.id] = {
          guild: message.guild.id,
          time: b
        };
        fs.writeFile("./mutes.json", JSON.stringify(mutes), err => {
          if (err) console.error(err);
        });
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
          .addField("Длительность", `**${uts(time, one, two, five)}**`, true)
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
        mutes[rUser.id] = {
          guild: message.guild.id,
          time: parseInt(Date.now() + min * 1000)
        };
        fs.writeFile("./mutes.json", JSON.stringify(mutes), err => {
          if (err) console.error(err);
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
          .addField("Длительность", `**${uts(time, one, two, five)}**`, true)
          .addField("Модератор", `**${message.author}**`, true)
          .addField("Причина", `**Без причины.**`)
          .setFooter(bot.user.username, bot.user.avatarURL)
          .setTimestamp();
        rUser.send(EmbedMute);
        return;
      }
      let min = time * 60;
      mutes[rUser.id] = {
        guild: message.guild.id,
        time: parseInt(Date.now() + min * 1000)
      };
      fs.writeFile("./mutes.json", JSON.stringify(mutes), err => {
        if (err) console.error(err);
      });
      rUser.addRole(role);
      message.channel.send(
        new RichEmbed()
          .setColor(colors)
          .setFooter(bot.user.username, bot.uer.displayAvatarURL)
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
      if (mutes[rUser.id]) {
        if (!reason) {
          let hac = time * 3600;
          let a = mutes[rUser.id].time;
          let g = parseInt(Date.now() + hac * 1000);
          let b = parseInt(a) + g;
          mutes[rUser.id] = {
            guild: message.guild.id,
            time: b
          };
          fs.writeFile("./mutes.json", JSON.stringify(mutes), err => {
            if (err) console.error(err);
          });
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
            .addField("Длительность", `**${uts(time, one, two, five)}**`, true)
            .addField("Модератор", `**${message.author}**`, true)
            .addField("Причина", `**Без причины.**`)
            .setFooter(bot.user.username, bot.user.avatarURL)
            .setTimestamp();
          rUser.send(EmbedMute);
          return;
        }
        let hac = time * 3600;
        let a = mutes[rUser.id].time;
        let g = parseInt(Date.now() + hac * 1000);
        let b = parseInt(a) + g;
        mutes[rUser.id] = {
          guild: message.guild.id,
          time: b
        };
        fs.writeFile("./mutes.json", JSON.stringify(mutes), err => {
          if (err) console.error(err);
        });
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
          .addField("Длительность", `**${uts(time, one, two, five)}**`, true)
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
        mutes[rUser.id] = {
          guild: message.guild.id,
          time: parseInt(Date.now() + hac * 1000)
        };
        fs.writeFile("./mutes.json", JSON.stringify(mutes), err => {
          if (err) console.error(err);
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
          .addField("Длительность", `**${uts(time, one, two, five)}**`, true)
          .addField("Модератор", `**${message.author}**`, true)
          .addField("Причина", `**Без причины.**`)
          .setFooter(bot.user.username, bot.user.avatarURL)
          .setTimestamp();
        rUser.send(EmbedMute);
        return;
      }
      let hac = time * 3600;
      mutes[rUser.id] = {
        guild: message.guild.id,
        time: parseInt(Date.now() + hac * 1000)
      };
      fs.writeFile("./mutes.json", JSON.stringify(mutes), err => {
        if (err) console.error(err);
      });
      rUser.addRole(role);
      message.channel.send(
        new RichEmbed()
          .setColor(colors)
          .setFooter(bot.user.username, bot.uer.displayAvatarURL)
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
      if (mutes[rUser.id]) {
        if (!reason) {
          let day = time * 86400;
          let a = mutes[rUser.id].time;
          let g = parseInt(Date.now() + day * 1000);
          let b = parseInt(a) + g;
          mutes[rUser.id] = {
            guild: message.guild.id,
            time: b
          };
          fs.writeFile("./mutes.json", JSON.stringify(mutes), err => {
            if (err) console.error(err);
          });
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
            .addField("Длительность", `**${uts(time, one, two, five)}**`, true)
            .addField("Модератор", `**${message.author}**`, true)
            .addField("Причина", `**Без причины.**`)
            .setFooter(bot.user.username, bot.user.avatarURL)
            .setTimestamp();
          rUser.send(EmbedMute);
          rUser.addRole(role);
          return;
        }
        let day = time * 86400;
        let a = mutes[rUser.id].time;
        let g = parseInt(Date.now() + day * 1000);
        let b = parseInt(a) + g;
        mutes[rUser.id] = {
          guild: message.guild.id,
          time: b
        };
        fs.writeFile("./mutes.json", JSON.stringify(mutes), err => {
          if (err) console.error(err);
        });
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
          .addField("Длительность", `**${uts(time, one, two, five)}**`, true)
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
        mutes[rUser.id] = {
          guild: message.guild.id,
          time: parseInt(Date.now() + day * 1000)
        };
        fs.writeFile("./mutes.json", JSON.stringify(mutes), err => {
          if (err) console.error(err);
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
          .addField("Длительность", `**${uts(time, one, two, five)}**`, true)
          .addField("Модератор", `**${message.author}**`, true)
          .addField("Причина", `**Без причины.**`)
          .setFooter(bot.user.username, bot.user.avatarURL)
          .setTimestamp();
        rUser.send(EmbedMute);
        return;
      }
      let day = time * 86400;
      mutes[rUser.id] = {
        guild: message.guild.id,
        time: parseInt(Date.now() + day * 1000)
      };
      fs.writeFile("./mutes.json", JSON.stringify(mutes), err => {
        if (err) console.error(err);
      });
      rUser.addRole(role);
      message.channel.send(
        new RichEmbed()
          .setColor(colors)
          .setFooter(bot.user.username, bot.uer.displayAvatarURL)
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
      if (mutes[rUser.id]) {
        if (!reason) {
          let day = time * 604800;
          let a = mutes[rUser.id].time;
          let g = parseInt(Date.now() + day * 1000);
          let b = parseInt(a) + g;
          mutes[rUser.id] = {
            guild: message.guild.id,
            time: b
          };
          fs.writeFile("./mutes.json", JSON.stringify(mutes), err => {
            if (err) console.error(err);
          });
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
            .addField("Длительность", `**${uts(time, one, two, five)}**`, true)
            .addField("Модератор", `**${message.author}**`, true)
            .addField("Причина", `**Без причины.**`)
            .setFooter(bot.user.username, bot.user.avatarURL)
            .setTimestamp();
          rUser.send(EmbedMute);
          rUser.addRole(role);
          return;
        }
        let day = time * 604800;
        let a = mutes[rUser.id].time;
        let g = parseInt(Date.now() + day * 1000);
        let b = parseInt(a) + g;
        mutes[rUser.id] = {
          guild: message.guild.id,
          time: b
        };
        fs.writeFile("./mutes.json", JSON.stringify(mutes), err => {
          if (err) console.error(err);
        });
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
          .addField("Длительность", `**${uts(time, one, two, five)}**`, true)
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
        mutes[rUser.id] = {
          guild: message.guild.id,
          time: parseInt(Date.now() + day * 1000)
        };
        fs.writeFile("./mutes.json", JSON.stringify(mutes), err => {
          if (err) console.error(err);
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
          .addField("Длительность", `**${uts(time, one, two, five)}**`, true)
          .addField("Модератор", `**${message.author}**`, true)
          .addField("Причина", `**Без причины.**`)
          .setFooter(bot.user.username, bot.user.avatarURL)
          .setTimestamp();
        rUser.send(EmbedMute);
        return;
      }
      let day = time * 604800;
      mutes[rUser.id] = {
        guild: message.guild.id,
        time: parseInt(Date.now() + day * 1000)
      };
      fs.writeFile("./mutes.json", JSON.stringify(mutes), err => {
        if (err) console.error(err);
      });
      rUser.addRole(role);
      message.channel.send(
        new RichEmbed()
          .setColor(colors)
          .setFooter(bot.user.username, bot.uer.displayAvatarURL)
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
      if (mutes[rUser.id]) {
        if (!reason) {
          let day = time * 31536000;
          let a = mutes[rUser.id].time;
          let g = parseInt(Date.now() + day * 1000);
          let b = parseInt(a) + g;
          mutes[rUser.id] = {
            guild: message.guild.id,
            time: b
          };
          fs.writeFile("./mutes.json", JSON.stringify(mutes), err => {
            if (err) console.error(err);
          });
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
            .addField("Длительность", `**${uts(time, one, two, five)}**`, true)
            .addField("Модератор", `**${message.author}**`, true)
            .addField("Причина", `**Без причины.**`)
            .setFooter(bot.user.username, bot.user.avatarURL)
            .setTimestamp();
          rUser.send(EmbedMute);
          rUser.addRole(role);
          return;
        }
        let day = time * 31536000;
        let a = mutes[rUser.id].time;
        let g = parseInt(Date.now() + day * 1000);
        let b = parseInt(a) + g;
        mutes[rUser.id] = {
          guild: message.guild.id,
          time: b
        };
        fs.writeFile("./mutes.json", JSON.stringify(mutes), err => {
          if (err) console.error(err);
        });
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
          .addField("Длительность", `**${uts(time, one, two, five)}**`, true)
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
        mutes[rUser.id] = {
          guild: message.guild.id,
          time: parseInt(Date.now() + day * 1000)
        };
        fs.writeFile("./mutes.json", JSON.stringify(mutes), err => {
          if (err) console.error(err);
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
          .addField("Длительность", `**${uts(time, one, two, five)}**`, true)
          .addField("Модератор", `**${message.author}**`, true)
          .addField("Причина", `**Без причины.**`)
          .setFooter(bot.user.username, bot.user.avatarURL)
          .setTimestamp();
        rUser.send(EmbedMute);
        return;
      }
      let day = time * 31536000;
      mutes[rUser.id] = {
        guild: message.guild.id,
        time: parseInt(Date.now() + day * 1000)
      };
      fs.writeFile("./mutes.json", JSON.stringify(mutes), err => {
        if (err) console.error(err);
      });
      rUser.addRole(role);
      message.channel.send(
        new RichEmbed()
          .setColor(colors)
          .setFooter(bot.user.username, bot.uer.displayAvatarURL)
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
  } catch (err) {
    message.channel.send(
      new Discord.RichEmbed()
        .setColor("RED")
        .setAuthor(err.message)
        .setDescription(`${err.stack}`)
        .setFooter(`${err.name}`)
        .setTimestamp()
    );
    console.log(err.stack);
  }
};
module.exports.command = {
  name: "mute"
};
