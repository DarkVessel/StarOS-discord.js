try {
  const { RichEmbed } = require("discord.js")
  var os = require("os");
  bot.on("ready", async () => {
    bot.setInterval(async () => {
      function ostype() {
        var sysName = os.type();
        return sysName === "Linux"
          ? "Linux"
          : sysName === "Darwin"
          ? "macOS"
          : sysName === "Windows_NT"
          ? "Windows"
          : `Неизвестная (${os.platform()})`;
      }
      function formatSize(length) {
        var i = 0,
          type = ["б", "Кб", "Мб", "Гб", "Тб", "Пб"];
        while ((length / 1000) | 0 && i < type.length - 1) {
          length /= 1024;
          i++;
        }
        return length.toFixed(2) + " " + type[i];
      }
      function getNormalCount(number, one, two, five) {
        number = Math.abs(number);
        number %= 100;
        if (number >= 5 && number <= 20) {
          return five;
        }
        number %= 10;
        if (number == 1) {
          return one;
        }
        if (number >= 2 && number <= 4) {
          return two;
        }
        return five;
      }
      var sec = os.uptime();
      var min = sec / 60;
      var hour = min / 60;

      var normalDay = `${Math.floor(hour / 24)} ${getNormalCount(
        Math.floor(hour / 24),
        "день",
        "дня",
        "дней"
      )}`;
      var normalHour = `${Math.floor(hour % 24)} ${getNormalCount(
        Math.floor(hour % 24),
        "час",
        "часа",
        "часов"
      )}`;
      var normalMinutes = `${Math.floor(min % 60)} ${getNormalCount(
        Math.floor(min % 60),
        "минута",
        "минуты",
        "минут"
      )}`;
      var normalSeconds = `${Math.floor(sec % 60)} ${getNormalCount(
        Math.floor(sec % 60),
        "секунда",
        "секунды",
        "секунд"
      )}`;
      var sysuptime = `${normalDay}, ${normalHour}, ${normalMinutes}, ${normalSeconds}`;

      module.exports.getOSType = ostype();
      module.exports.getOSArch = os.arch();
      module.exports.getOSHostName = os.hostname();
      module.exports.getOSMem = `${formatSize(
        os.totalmem() - os.freemem()
      )}/${formatSize(os.totalmem())} (Свободно: ${formatSize(os.freemem())})`;
      module.exports.getOSUptime = sysuptime;
      const verifilv = [
        "Отсутствует.",
        "Низкая.",
        "Средняя.",
        "Высокая.",
        "Очень высокая."
      ];
      let embed = new RichEmbed()
        .setColor(colors)
        .setAuthor(`📺 | Монитор`)
        .addField(
          `👥 | **Статус участников**`,
          `> Ботов: **${
            bot.guilds
              .get(serverID)
              .members.filter(mem => mem.user.bot === true).size
          }**\n> В сети: **${
            bot.guilds.get(serverID).presences.size
          }**\n> Не в сети: **${bot.guilds.get(serverID).memberCount -
            bot.guilds.get(serverID).presences.size}**\n> Не активен: **${
            bot.guilds
              .get(serverID)
              .members.filter(member => member.presence.status === "idle").size
          }**\n> Не беспокоить: **${
            bot.guilds
              .get(serverID)
              .members.filter(member => member.presence.status === "dnd").size
          }**\n> Общее количество: **${bot.guilds.get(serverID).memberCount}**`
        )
        .addField("🌟 | **Ролей**", bot.guilds.get(serverID).roles.size, true)
        .addField("🎉 | **Эмоджи**", bot.guilds.get(serverID).emojis.size, true)
        .addField(
          "🔰 | **Защита**",
          verifilv[bot.guilds.get(serverID).verificationLevel],
          true
        )
        .addField(
          "<:love:615151311796830208> | **Статус каналов**",
          `> Голосовой онлайн: **${
            bot.guilds.get(serverID).members.filter(m => m.voiceChannel).size
          }**\n> Текстовых: **${
            bot.guilds.get(serverID).channels.filter(c => c.type == "text").size
          }**\n> Голосовых: **${
            bot.guilds.get(serverID).channels.filter(c => c.type == "voice")
              .size
          }**`
        )
        .addField(
          "📺 | **Монитор Бота**",
          `User: ${os.hostname()}\nСистема: ${ostype()}\nЗадержка API: \`${Math.round(
            bot.ping
          )} мс\`\nАрхитектура системы: ${os.arch()}\nОЗУ: ${formatSize(
            os.totalmem() - os.freemem()
          )}/${formatSize(os.totalmem())} (Свободно: ${formatSize(
            os.freemem()
          )})\nАптайм системы: ${sysuptime}.`
        )
        .setFooter("Статус обновиться через минуту...");
      bot.channels
        .get(config.ChannelStatusID)
        .fetchMessage(config.MessageStatusID)
        .then(m => m.edit(embed));
    }, 30000);
  });
} catch (err) {
  console.log(err.stack);
}
