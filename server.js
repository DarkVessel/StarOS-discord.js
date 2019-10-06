const http = require("http"),
  express = require("express"),
  app = express();

app.get("/", (request, response) => {
  console.log(Date.now() + " пинг получен");
  response.sendStatus(200);
});

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const { Discord, RichEmbed, Client } = require("discord.js"); //Модуль для работы с API дискорда.
const fs = require("fs"); //Файловая Система.
const bot = new Client(); //Наш бот.
const commands = new Map(); //Команды.
const strftime = require("strftime");
const env = require("dotenv").config(); //Модуль для работы с .env файлами.
const MongoClient = require("mongodb").MongoClient;
const mongoClient = new MongoClient(process.env.MongodbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const config = require("./botconfig.json"); //Путь к файлу "botconfig.json"
const {
  prefix,
  serverID,
  botOwnerID,
  ChannelWelcomeID,
  ChannelReactionID,
  react1,
  react2,
  RoleRuID,
  RoleEnID,
  MaxLevel,
  ChannelLevelID,
  RoleLevel5ID,
  RoleLevel10ID,
  RoleLevel15ID,
  RoleLevel20ID,
  RoleLevel25ID,
  RoleLevel30ID,
  RoleLevel35ID,
  RoleLevel40ID,
  RoleLevel50ID,
  RoleLevel65ID,
  ChannelStatusID,
  MessageStatusID,
  RoleУкID
} = config; //Вытаскиваем значения из "botconfig.json"
const mutes = require("./mutes.json");
const { Core, Mongo } = require("discore.js");
const MongoDB = new Mongo(process.env.MongodbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const BotData = {
  id: { type: Mongo.Types.Number, default: undefined },
  TimeStatus: { type: Mongo.Types.String, default: undefined }
};
MongoDB.addModel("bot", BotData);
const LevelData = {
  UserId: { type: Mongo.Types.String, default: undefined },
  level: { type: Mongo.Types.Number, default: 0 },
  xp: { type: Mongo.Types.Number, default: 0 },
  maxs: { type: Mongo.Types.Number, default: 700 }
};
MongoDB.addModel("levels", LevelData);

fs.readdirSync("./cmds/")
  .filter(file => file.endsWith(".js"))
  .forEach(file => {
    //Загрузчик команд.
    let props = require(`./cmds/${file}`);
    commands.set(
      require(`./cmds/${file}`).command.name,
      require(`./cmds/${file}`)
    );
    console.log(`[COMMANDS] Загружен ${file}!`);
  });
bot.on("message", async message => {
  //Обработчик команд.
  let messageArray = message.content.split(" ");
  let command = messageArray[0].toLowerCase();
  let args = messageArray.slice(1);
  if (!message.content.startsWith(prefix)) return;
  let cmd = commands.get(command.slice(prefix.length));
  if (cmd) cmd.run(bot, message, args);
});
bot.on("ready", async () => {
  console.log(`StarOS BOT | v1.0`);
  console.info(`Подключён к аккаунту ${bot.user.tag} | ${bot.user.id}`);
  bot.generateInvite(["ADMINISTRATOR"]).then(link => {
    console.log(`Ссылка для приглашения бота: ${link}`);
  });
  bot.setInterval(async () => {
    var os = require("os");
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
        let Status = [
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
          "во что-то",
          "xD",
          "ленни",
          "ботов",
          "шо",
          "/help",
          "жорика"
        ];
        let random = Math.floor(Math.random() * Status.length);
        let random2 = Math.floor(Math.random() * 4);
        bot.user.setPresence({ game: { name: Status[random], type: random2 } });
        let embed = new RichEmbed()
          .setColor("RANDOM")
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
                .members.filter(member => member.presence.status === "idle")
                .size
            }**\n> Не беспокоить: **${
              bot.guilds
                .get(serverID)
                .members.filter(member => member.presence.status === "dnd").size
            }**\n> Общее количество: **${
              bot.guilds.get(serverID).memberCount
            }**`
          )
          .addField("🌟 | **Ролей**", bot.guilds.get(serverID).roles.size, true)
          .addField(
            "🎉 | **Эмоджи**",
            bot.guilds.get(serverID).emojis.size,
            true
          )
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
              bot.guilds.get(serverID).channels.filter(c => c.type == "text")
                .size
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
          .get(ChannelStatusID)
          .fetchMessage(MessageStatusID)
          .then(m => m.edit(embed));
  }, 60000);
  bot.setInterval(() => {
    for (let i in mutes) {
      let time = mutes[i].time;
      let guildid = mutes[i].guild;
      let guild = bot.guilds.get(guildid);
      let member = guild.members.get(i);
      let muteRole = member.guild.roles.find(r => r.name === "Muted");
      if (!muteRole) continue;
      if (!guildid) continue;
      if (!guild) continue;
      if (!member) continue;
      if (Date.now() >= time) {
        member.removeRole(muteRole);
        delete mutes[i];
        fs.writeFile("./mutes.json", JSON.stringify(mutes), err => {
          if (err) console.log(err);
        });
      }
    }
  }, 5000);
  bot.setInterval(() => {
    let vremya = strftime.timezone(180);
    if (`${vremya("%H:%M", new Date())}` == `00:00`) {
      mongoClient.connect(function(err, client) {
        if (err) return console.log(err);
        const db = client.db("StarOS");
        db.collection("daily").deleteMany({ daliy: true }, function(
          err,
          result
        ) {
          console.log(result);
          client.close();
        });
      });
    }
  }, 5000);
  /*const streamOptions = { seek: 0, volume: 1 };
const broadcast = bot.createVoiceBroadcast();
bot.channels.get("578530835242811406").join()
  .then(connection => { 
    const stream = ytdl('https://www.youtube.com/watch?v=Gh6y3wUzKGQ', { filter : 'audioonly' });
    broadcast.playStream(stream);
//broadcast.playStream(stream, { volume: 0.200 });
    const dispatcher = connection.playBroadcast(broadcast);
  })
  .catch(console.error);*/
});
bot.on("guildMemberAdd", async member => {
  //При входе участника на сервер.
  member
    .send(
      "Нажмите ❤ если вы Русский.\nPress 💛 if you are English.\nНатисніть 💚 якщо ви Українець."
    )
    .then(msg => {
      //Ставим реакции на это сообщение.
      msg.react("❤").then(r => {
        msg.react("💛");
        msg.react("💚");
        const a = (reaction, user) =>
          reaction.emoji.name === "❤" && user.id === member.id;
        const b = (reaction, user) =>
          reaction.emoji.name === "💛" && user.id === member.id;
        const g = (reaction, user) =>
          reaction.emoji.name === "💚" && user.id === member.id;
        const d = msg.createReactionCollector(a); //Создаём коллектор.
        const z = msg.createReactionCollector(b);
        const l = msg.createReactionCollector(g);
        d.on("collect", r => {
          bot.channels.get(ChannelWelcomeID).send(`${member} Пришёл 😃`);
          let roleS = member.guild.roles.find(r => r.id === RoleRuID);
          if (!member.roles.has(roleS.id)) {
            member.addRole(roleS);
          }
          msg.edit("❤ | Вы успешно указали свой язык!").then(msg => {
            msg.reactions.forEach(e => e.remove(bot.user.id));
            d.stop();
            z.stop(); //Останавливаем коллекторы.
          });
        });
        z.on("collect", r => {
          bot.channels.get(ChannelWelcomeID).send(`${member} Has come 😃`);
          let roleS = member.guild.roles.find(r => r.id === RoleEnID);
          if (!member.roles.has(roleS.id)) {
            member.addRole(roleS); //Выдаём роль.
          }
          msg
            .edit("💛 | You have successfully entered your language!")
            .then(msg => {
              msg.reactions.forEach(e => e.remove(bot.user.id)); //Убираем реакции у бота.
              d.stop();
              z.stop();
            });
        });
        l.on("collect", r => {
          bot.channels.get(ChannelWelcomeID).send(`${member} Прийшов 😃`);
          let roleS = member.guild.roles.find(r => r.id === RoleУкID);
          if (!member.roles.has(roleS.id)) {
            member.addRole(roleS); //Выдаём роль.
          }
          msg.edit(`💚 | Ви успішно вказали свою мову!`).then(msg => {
            msg.reactions.forEach(e => e.remove(bot.user.id)); //Убираем реакции у бота.
            d.stop();
            z.stop();
          });
        });
      });
    });
});

bot.on("message", async message => {
  if (message.channel.id === ChannelReactionID) {
    await message.react(react1); //Ставим реакции.
    await message.react(react2);
  } else return;
});
bot.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type == "dm") return;
  if (message.guild.id !== serverID) return;
  if (
    message.author.id !== "517331770656686080" &&
    message.author.id !== "550276764463792129" &&
    message.author.id !== "571672504721211392" &&
    message.author.id !== "601265391519662080" &&
    message.author.id !== "599187428145627147" &&
    message.author.id !== "575013947258699787" &&
    message.author.id !== "344834720401719296"
  )
    return;
  if (!["617417681657659436", "617417581434765363"].includes(message.channel.id))
    return;
  await MongoDB.open();
  new Promise(async resolve => {
    await MongoDB.levels._toCollection();
    let res = MongoDB.levels.findOne({ UserId: message.author.id });
    if (res.UserId == undefined) {
      MongoDB.levels.insertOne({
        UserId: message.author.id,
        level: 0,
        xp: 0,
        maxs: 700
      });
      return;
    }
    let level = res.maxs;
    let CurrentLevel = res.level;
    let CurrentXp = res.xp;
    if (CurrentLevel >= MaxLevel) return;
    await MongoDB.levels.updateOne(
      { UserId: message.author.id },
      { xp: parseInt(CurrentXp) + parseInt(4) }
    );
    if (`${CurrentLevel + 1}` >= 5) {
      let roleS = message.guild.roles.find(r => r.id === RoleLevel5ID);
      if (!message.member.roles.has(roleS.id)) {
        message.member.addRole(roleS);
      }
    }
    if (`${CurrentLevel + 1}` >= 10) {
      let roleS = message.guild.roles.find(r => r.id === RoleLevel10ID);
      if (!message.member.roles.has(roleS.id)) {
        message.member.addRole(roleS);
      }
    }
    if (`${CurrentLevel + 1}` >= 15) {
      let roleS = message.guild.roles.find(r => r.id === RoleLevel15ID);
      if (!message.member.roles.has(roleS.id)) {
        message.member.addRole(roleS);
      }
    }
    if (`${CurrentLevel + 1}` >= 20) {
      let roleS = message.guild.roles.find(r => r.id === RoleLevel20ID);
      if (!message.member.roles.has(roleS.id)) {
        message.member.addRole(roleS);
      }
    }
    if (`${CurrentLevel + 1}` >= 25) {
      let roleS = message.guild.roles.find(r => r.id === RoleLevel25ID);
      if (!message.member.roles.has(roleS.id)) {
        message.member.addRole(roleS);
      }
    }
    if (`${CurrentLevel + 1}` >= 30) {
      let roleS = message.guild.roles.find(r => r.id === RoleLevel30ID);
      if (!message.member.roles.has(roleS.id)) {
        message.member.addRole(roleS);
      }
    }
    if (`${CurrentLevel + 1}` >= 35) {
      let roleS = message.guild.roles.find(r => r.id === RoleLevel35ID);
      if (!message.member.roles.has(roleS.id)) {
        message.member.addRole(roleS);
      }
    }
    if (`${CurrentLevel + 1}` >= 40) {
      let roleS = message.guild.roles.find(r => r.id === RoleLevel40ID);
      if (!message.member.roles.has(roleS.id)) {
        message.member.addRole(roleS);
      }
    }
    if (`${CurrentLevel + 1}` >= 50) {
      let roleS = message.guild.roles.find(r => r.id === RoleLevel50ID);
      if (!message.member.roles.has(roleS.id)) {
        message.member.addRole(roleS);
      }
    }
    if (CurrentXp >= level) {
      await MongoDB.levels.updateOne(
        { UserId: message.author.id },
        { level: parseInt(CurrentLevel) + parseInt(1), xp: 0 }
      );
      if (CurrentLevel >= 25) {
        if (level === 900) return;
        await MongoDB.levels.updateOne(
          { UserId: message.author.id },
          { maxs: 900 }
        );
      }
      if (CurrentLevel === 40) {
        if (level === 1250) return;
        await MongoDB.levels.updateOne(
          { UserId: message.author.id },
          { maxs: 1250 }
        );
      }
      if (`${CurrentLevel + 1}` >= 5) {
        let roleS = message.guild.roles.find(r => r.id === RoleLevel5ID);
        if (message.member.roles.has(roleS.id)) return;
        message.member.addRole(roleS);
      }
      if (`${CurrentLevel + 1}` >= 10) {
        let roleS = message.guild.roles.find(r => r.id === RoleLevel10ID);
        if (!message.member.roles.has(roleS.id)) {
          message.member.addRole(roleS);
        }
      }
      if (`${CurrentLevel + 1}` >= 15) {
        let roleS = message.guild.roles.find(r => r.id === RoleLevel15ID);
        if (!message.member.roles.has(roleS.id)) {
          message.member.addRole(roleS);
        }
      }
      if (`${CurrentLevel + 1}` >= 20) {
        let roleS = message.guild.roles.find(r => r.id === RoleLevel20ID);
        if (!message.member.roles.has(roleS.id)) {
          message.member.addRole(roleS);
        }
      }
      if (`${CurrentLevel + 1}` >= 25) {
        let roleS = message.guild.roles.find(r => r.id === RoleLevel25ID);
        if (!message.member.roles.has(roleS.id)) {
          message.member.addRole(roleS);
        }
      }
      if (`${CurrentLevel + 1}` >= 30) {
        let roleS = message.guild.roles.find(r => r.id === RoleLevel30ID);
        if (!message.member.roles.has(roleS.id)) {
          message.member.addRole(roleS);
        }
      }
      if (`${CurrentLevel + 1}` >= 35) {
        let roleS = message.guild.roles.find(r => r.id === RoleLevel35ID);
        if (!message.member.roles.has(roleS.id)) {
          message.member.addRole(roleS);
        }
      }
      if (`${CurrentLevel + 1}` >= 40) {
        let roleS = message.guild.roles.find(r => r.id === RoleLevel40ID);
        if (!message.member.roles.has(roleS.id)) {
          message.member.addRole(roleS);
        }
      }
      if (`${CurrentLevel + 1}` >= 50) {
        let roleS = message.guild.roles.find(r => r.id === RoleLevel50ID);
        if (!message.member.roles.has(roleS.id)) {
          message.member.addRole(roleS);
        }
      }
      if (`${CurrentLevel + 1}` >= 65) {
        let roleS = message.guild.roles.find(r => r.id === RoleLevel65ID);
        if (!message.member.roles.has(roleS.id)) {
          message.member.addRole(roleS);
        }
      }
      let languageRU = message.guild.roles.find(r => r.id === RoleRuID);
      let languageEN = message.guild.roles.find(r => r.id === RoleEnID);
      let languageУК = message.guild.roles.find(r => r.id === RoleУкID);
      if (message.member.roles.has(RoleУкID.id)) {
        bot.channels
          .get(ChannelLevelID)
          .send(`**${message.author} отримав ${CurrentLevel + 1} рівень!**`);
        return;
      }
      if (message.member.roles.has(languageRU.id)) {
        bot.channels
          .get(ChannelLevelID)
          .send(`**${message.author} получил ${CurrentLevel + 1} уровень!**`);
        return;
      }
      if (message.member.roles.has(languageEN.id)) {
        bot.channels
          .get(ChannelLevelID)
          .send(`**${message.author} got ${CurrentLevel + 1} level!**`);
        return;
      }
    }
    resolve();
  }).then(() => MongoDB.close());
});
bot.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type == "dm") return;
  if (message.guild.id !== serverID) return;
  if (
    [
      "517331770656686080",
      "550276764463792129",
      "571672504721211392",
      "601265391519662080",
      "599187428145627147",
      "575013947258699787",
      "344834720401719296"
    ].includes(message.author.id)
  )
    return;
  if (
    [
      "621725124567236658",
      "621725124567236658",
      "621725124567236658",
      "621725124567236658",
      "617417681657659436",
      "617417581434765363"
    ].includes(message.channel.id)
  )
    return;
  let addxp = Math.floor(Math.random() * 3) + 1;
  await MongoDB.open();
  new Promise(async resolve => {
    await MongoDB.levels._toCollection();
    let res = MongoDB.levels.findOne({ UserId: message.author.id });
    if (res.UserId == undefined) {
      MongoDB.levels.insertOne({
        UserId: message.author.id,
        level: 0,
        xp: 0,
        maxs: 700
      });
      return;
    }
    let level = res.maxs;
    let CurrentLevel = res.level;
    let CurrentXp = res.xp;
    if (CurrentLevel >= 65) return;
    await MongoDB.levels.updateOne(
      { UserId: message.author.id },
      { xp: parseInt(CurrentXp) + parseInt(addxp) }
    );
    if (`${CurrentLevel + 1}` >= 5) {
      let roleS = message.guild.roles.find(r => r.id === RoleLevel5ID);
      if (message.member.roles.has(roleS.id)) return;
      message.member.addRole(roleS);
    }
    if (`${CurrentLevel + 1}` >= 10) {
      let roleS = message.guild.roles.find(r => r.id === RoleLevel10ID);
      if (!message.member.roles.has(roleS.id)) {
        message.member.addRole(roleS);
      }
    }
    if (`${CurrentLevel + 1}` >= 15) {
      let roleS = message.guild.roles.find(r => r.id === RoleLevel15ID);
      if (!message.member.roles.has(roleS.id)) {
        message.member.addRole(roleS);
      }
    }
    if (`${CurrentLevel + 1}` >= 20) {
      let roleS = message.guild.roles.find(r => r.id === RoleLevel20ID);
      if (!message.member.roles.has(roleS.id)) {
        message.member.addRole(roleS);
      }
    }
    if (`${CurrentLevel + 1}` >= 25) {
      let roleS = message.guild.roles.find(r => r.id === RoleLevel25ID);
      if (!message.member.roles.has(roleS.id)) {
        message.member.addRole(roleS);
      }
    }
    if (`${CurrentLevel + 1}` >= 30) {
      let roleS = message.guild.roles.find(r => r.id === RoleLevel30ID);
      if (!message.member.roles.has(roleS.id)) {
        message.member.addRole(roleS);
      }
    }
    if (`${CurrentLevel + 1}` >= 35) {
      let roleS = message.guild.roles.find(r => r.id === RoleLevel35ID);
      if (!message.member.roles.has(roleS.id)) {
        message.member.addRole(roleS);
      }
    }
    if (`${CurrentLevel + 1}` >= 40) {
      let roleS = message.guild.roles.find(r => r.id === RoleLevel40ID);
      if (!message.member.roles.has(roleS.id)) {
        message.member.addRole(roleS);
      }
    }
    if (`${CurrentLevel + 1}` >= 50) {
      let roleS = message.guild.roles.find(r => r.id === RoleLevel50ID);
      if (!message.member.roles.has(roleS.id)) {
        message.member.addRole(roleS);
      }
    }
    if (`${CurrentLevel + 1}` >= 65) {
      let roleS = message.guild.roles.find(r => r.id === RoleLevel65ID);
      if (!message.member.roles.has(roleS.id)) {
        message.member.addRole(roleS);
      }
    }
    if (CurrentXp >= level) {
      await MongoDB.levels.updateOne(
        { UserId: message.author.id },
        { level: parseInt(CurrentLevel) + parseInt(1), xp: 0 }
      );
      if (CurrentLevel >= 25) {
        if (level === 900) return;
        await MongoDB.levels.updateOne(
          { UserId: message.author.id },
          { maxs: 900 }
        );
      }
      if (CurrentLevel === 40) {
        if (level === 1250) return;
        await MongoDB.levels.updateOne(
          { UserId: message.author.id },
          { maxs: 1250 }
        );
      }
      if (`${CurrentLevel + 1}` >= 5) {
        let roleS = message.guild.roles.find(r => r.id === RoleLevel5ID);
        if (message.member.roles.has(roleS.id)) return;
        message.member.addRole(roleS);
      }
      if (`${CurrentLevel + 1}` >= 10) {
        let roleS = message.guild.roles.find(r => r.id === RoleLevel10ID);
        if (!message.member.roles.has(roleS.id)) {
          message.member.addRole(roleS);
        }
      }
      if (`${CurrentLevel + 1}` >= 15) {
        let roleS = message.guild.roles.find(r => r.id === RoleLevel15ID);
        if (!message.member.roles.has(roleS.id)) {
          message.member.addRole(roleS);
        }
      }
      if (`${CurrentLevel + 1}` >= 20) {
        let roleS = message.guild.roles.find(r => r.id === RoleLevel20ID);
        if (!message.member.roles.has(roleS.id)) {
          message.member.addRole(roleS);
        }
      }
      if (`${CurrentLevel + 1}` >= 25) {
        let roleS = message.guild.roles.find(r => r.id === RoleLevel25ID);
        if (!message.member.roles.has(roleS.id)) {
          message.member.addRole(roleS);
        }
      }
      if (`${CurrentLevel + 1}` >= 30) {
        let roleS = message.guild.roles.find(r => r.id === RoleLevel30ID);
        if (!message.member.roles.has(roleS.id)) {
          message.member.addRole(roleS);
        }
      }
      if (`${CurrentLevel + 1}` >= 35) {
        let roleS = message.guild.roles.find(r => r.id === RoleLevel35ID);
        if (!message.member.roles.has(roleS.id)) {
          message.member.addRole(roleS);
        }
      }
      if (`${CurrentLevel + 1}` >= 40) {
        let roleS = message.guild.roles.find(r => r.id === RoleLevel40ID);
        if (!message.member.roles.has(roleS.id)) {
          message.member.addRole(roleS);
        }
      }
      if (`${CurrentLevel + 1}` >= 50) {
        let roleS = message.guild.roles.find(r => r.id === RoleLevel50ID);
        if (!message.member.roles.has(roleS.id)) {
          message.member.addRole(roleS);
        }
      }
      if (`${CurrentLevel + 1}` >= 65) {
        let roleS = message.guild.roles.find(r => r.id === RoleLevel65ID);
        if (!message.member.roles.has(roleS.id)) {
          message.member.addRole(roleS);
        }
      }
      let languageRU = message.guild.roles.find(r => r.id === RoleRuID);
      let languageEN = message.guild.roles.find(r => r.id === RoleEnID);
      let languageУК = message.guild.roles.find(r => r.id === RoleУкID);
      if (message.member.roles.has(RoleУкID.id)) {
        bot.channels
          .get(ChannelLevelID)
          .send(`**${message.author} отримав ${CurrentLevel + 1} рівень!**`);
        return;
      }
      if (message.member.roles.has(languageRU.id)) {
        bot.channels
          .get(ChannelLevelID)
          .send(`**${message.author} получил ${CurrentLevel + 1} уровень!**`);
        return;
      }
      if (message.member.roles.has(languageEN.id)) {
        bot.channels
          .get(ChannelLevelID)
          .send(`**${message.author} got ${CurrentLevel + 1} level!**`);
        return;
      }
    }
    resolve();
  }).then(() => MongoDB.close());
});
bot.login(process.env.TOKEN);
