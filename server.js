const http = require('http'),
    express = require('express'),
    app = express();

app.get("/", (request, response) => {
    console.log(Date.now() + " пинг получен");
    response.sendStatus(200);
});

app.listen(process.env.PORT);
setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const { Discord, RichEmbed, Client} = require('discord.js')
const fs = require('fs')
const bot = new Client()
const time = require('./time.json')
const commands = new Map();
const env = require('dotenv').config();
const { host, user, password, database } = process.env;
const mysql = require('mysql2')
const con = mysql.createConnection({ host, user, password, database});
fs.readdirSync('./cmds/').filter(file => file.endsWith('.js')).forEach(file => {
    let props = require(`./cmds/${file}`);
    commands.set(require(`./cmds/${file}`).command.name, require(`./cmds/${file}`));
    console.log(`[COMMANDS] Загружен ${file}!`);
})
bot.on('message', async message => {
    let messageArray = message.content.split(" ");
    let command = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);
    if (!message.content.startsWith("/")) return;
    let cmd = commands.get(command.slice("/".length));
    if (cmd) cmd.run(bot, message, args);
    bot.rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    bot.uId = message.author.id;
});
bot.on('ready', async () => {
    console.log(`StarOS BOT | v1.0`);
    console.info(`Подключён к аккаунту ${bot.user.tag} | ${bot.user.id}`)
    bot.generateInvite(["ADMINISTRATOR"]).then(link => {
        console.log(`Ссылка для приглашения бота: ${link}`);
    });
   bot.setInterval(() => {
      var os = require('os');

      function ostype() {
          var sysName = os.type();
          return (sysName === "Linux") ? "Linux" :
              (sysName === "Darwin") ? "macOS" :
                  (sysName === "Windows_NT") ? "Windows" :
                      `Неизвестная (${os.platform()})`;
      }

      function formatSize(length) {
          var i = 0, type = ['б', 'Кб', 'Мб', 'Гб', 'Тб', 'Пб'];
          while ((length / 1000 | 0) && i < type.length - 1) {
              length /= 1024;
              i++;
          }
          return length.toFixed(2) + ' ' + type[i];
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

      var normalDay = `${Math.floor(hour / 24)} ${getNormalCount(Math.floor(hour / 24), "день", "дня", "дней")}`;
      var normalHour = `${Math.floor(hour % 24)} ${getNormalCount(Math.floor(hour % 24), "час", "часа", "часов")}`;
      var normalMinutes = `${Math.floor(min % 60)} ${getNormalCount(Math.floor(min % 60), "минута", "минуты", "минут")}`;
      var normalSeconds = `${Math.floor(sec % 60)} ${getNormalCount(Math.floor(sec % 60), "секунда", "секунды", "секунд")}`;
      var sysuptime = `${normalDay}, ${normalHour}, ${normalMinutes}, ${normalSeconds}`;

      module.exports.getOSType = ostype();
      module.exports.getOSArch = os.arch();
      module.exports.getOSHostName = os.hostname();
      module.exports.getOSMem = `${formatSize(os.totalmem() - os.freemem())}/${formatSize(os.totalmem())} (Свободно: ${formatSize(os.freemem())})`;
      module.exports.getOSUptime = sysuptime;
      var Сообщений = time.message
      const verifilv = ['Отсутствует.', 'Низкая.', 'Средняя.', 'Высокая.', 'Очень высокая.']
      bot.guilds.get(`578530834806734849`).members.forEach(member => {
          let fsd = parseInt(Date.now() + (60 * 1000))
          let time2 = time.status
          if (Date.now() >= time2) {
            time.status = fsd
            fs.writeFile('./time.json', JSON.stringify(time), (err) => {
                if (err) console.log(err);
            });
              let embed = new RichEmbed()
                  .setColor("RANDOM")
                  .setAuthor(`📺 | Монитор`)
                  .addField(`👥 | **Статус участников**`, `> Ботов: **${member.guild.members.filter(mem => mem.user.bot === true).size}**\n> В сети: **${member.guild.presences.size}**\n> Не в сети: **${member.guild.memberCount - member.guild.presences.size}**\n> Не активен: **${member.guild.members.filter(member => member.presence.status === 'idle').size}**\n> Не беспокоить: **${member.guild.members.filter(member => member.presence.status === 'dnd').size}**\n> Общее количество: **${member.guild.memberCount}**`)
                  .addField('🌟 | **Ролей**', member.guild.roles.size, true)
                  .addField('🎉 | **Эмоджи**', member.guild.emojis.size, true)
                  .addField('🔰 | **Защита**', verifilv[member.guild.verificationLevel], true)
                  .addField('<:love:615151311796830208> | **Статус каналов**', `> Голосовой онлайн: **${member.guild.members.filter(m => m.voiceChannel).size}**\n> Сообщений: **${Сообщений}**\n> Текстовых: **${member.guild.channels.filter(c => c.type == 'text').size}**\n> Голосовых: **${member.guild.channels.filter(c => c.type == 'voice').size}**`)
                  .addField('📺 | **Монитор Бота**', `User: ${os.hostname()}\nСистема: ${ostype()}\nЗадержка API: \`${Math.round(bot.ping)} мс\`\nАрхитектура системы: ${os.arch()}\nОЗУ: ${formatSize(os.totalmem() - os.freemem())}/${formatSize(os.totalmem())} (Свободно: ${formatSize(os.freemem())})\nАптайм системы: ${sysuptime}.`)
                  .setFooter('Статус обновиться через минуту...')
              bot.channels.get("578535881145843717").fetchMessage('615891758441693194').then(m => m.edit(embed))
          }
    }, 5000)
  })
})
bot.on('message', async message => {
  if(message.content === '!test') {
    if(message.author.id !== '517331770656686080') return
    let fsd = parseInt(Date.now() + (60 * 1000))
    time.status = fsd
    time.message = '???'
    fs.writeFile('./time.json', JSON.stringify(time), (err) => {
        if (err) console.log(err);
    });
  }
  let mesage = time.message
  time.message = mesage + 1
  fs.writeFile('./time.json', JSON.stringify(time), (err) => {
      if (err) console.log(err);
  });
})
bot.on('guildMemberAdd', async member => {
  member.send('Нажмите ❤ если вы Русский.\nPress 💛 if you are English.').then(msg => {
      msg.react('❤').then(r => {
        msg.react('💛')
        const a = (reaction, user) => reaction.emoji.name === '❤' && user.id === member.id;
        const b = (reaction, user) => reaction.emoji.name === '💛' && user.id === member.id;
        const d = msg.createReactionCollector(a);
        const z = msg.createReactionCollector(b);
        d.on('collect', r => {
          bot.channels.get('615891476446183456').send(`${member} Пришёл 😃`)
            let roleS = member.guild.roles.find(r => r.id === '615518783620251670');
            if (!member.roles.has(roleS.id)) {
                member.addRole(roleS);
            }
            msg.edit('❤ | Вы успешно указали свой язык!').then(msg => {
              msg.reactions.forEach(e => e.remove(bot.user.id))
                d.stop()
                z.stop()
            })
               })
        z.on('collect', r => {
          bot.channels.get('615891476446183456').send(`${member} Has come 😃`)
            let roleS = member.guild.roles.find(r => r.id === '615867385328697349');
            if (!member.roles.has(roleS.id)) {
                member.addRole(roleS);
            }
            msg.edit("💛 | You have successfully entered your language!").then(msg => {
                msg.reactions.forEach(e => e.remove(bot.user.id))
                d.stop()
                z.stop()
            })
            })
      })
    })
})

bot.on('message', async message => {
  if(message.channel.id === '615595315524796436') {
    await message.react('615151311796830208')
    await message.react('615151421117169664')
  } else return
})
bot.on("message", async message => {
    if (message.author.bot) return
    if (message.channel.type == "dm") return; 
      if(message.author.id !== '517331770656686080' && message.author.id !== '550276764463792129' && message.author.id !== '571672504721211392' && message.author.id !== '601265391519662080' && message.author.id !== '599187428145627147' && message.author.id !== '575013947258699787' && message.author.id !== '344834720401719296') return
  if(['621725124567236658', '621725124567236658', '621725124567236658', '621725124567236658', '617417681657659436'].includes(message.channel.id)) return;
    con.query(`SELECT * FROM Levels WHERE ID = ${message.author.id}`, function (err, result) {
        if (result.length) return;
        con.query("INSERT INTO Levels (ID, Level, Xp, Maxs) VALUES  (?,?,?,?)", [message.author.id, 0, 0, 700], function (err, result) {
            if (err) {
                console.log(err);
            }
        });
    })
    con.query(`SELECT * FROM Levels WHERE ID = ${message.author.id}`, function (err, results) {
        if (err) console.log(err);
        const users = results;
        for (let i = 0; i < users.length; i++) {
            let level = users[i].Maxs
            let CurrentLevel = users[i].Level
            let CurrentXp = users[i].Xp
            if(CurrentLevel === 65) return
            if(CurrentLevel > 65) return
            con.query(`UPDATE Levels SET Xp = ${parseInt(CurrentXp) + parseInt(4)} WHERE ID = ${message.author.id}`, function (err, rows) {
                if (err) return console.log(err);
            });
            if(`${CurrentLevel + 1}` > 5) {
              let roleS = message.guild.roles.find(r => r.id === '621704078057013278');
              if(!message.member.roles.has(roleS.id)) {
                message.member.addRole(roleS)
              }
            }
            if(`${CurrentLevel + 1}` > 10) {
              let roleS = message.guild.roles.find(r => r.id === '621706860650823701');
              if(!message.member.roles.has(roleS.id)) {
                message.member.addRole(roleS)
              }
            }
            if(`${CurrentLevel + 1}` > 15) {
              let roleS = message.guild.roles.find(r => r.id === '621707244509069313');
              if(!message.member.roles.has(roleS.id)){
                message.member.addRole(roleS)
              }
            }
            if(`${CurrentLevel + 1}` > 20) {
              let roleS = message.guild.roles.find(r => r.id === '621707424801357825');
              if(!message.member.roles.has(roleS.id)){
                message.member.addRole(roleS)
              }
            }
            if(`${CurrentLevel + 1}` > 25) {
              let roleS = message.guild.roles.find(r => r.id === '621707728284286984');
              if(!message.member.roles.has(roleS.id)){
                message.member.addRole(roleS)
              }
            }
            if(`${CurrentLevel + 1}` > 30) {
              let roleS = message.guild.roles.find(r => r.id === '621707979896651809');
              if(!message.member.roles.has(roleS.id)){
                message.member.addRole(roleS)
              }
            }
            if(`${CurrentLevel + 1}` > 35) {
              let roleS = message.guild.roles.find(r => r.id === '603629259080335391');
              if(!message.member.roles.has(roleS.id)){
                message.member.addRole(roleS)
              }
            }
            if(`${CurrentLevel + 1}` > 40) {
              let roleS = message.guild.roles.find(r => r.id === '621714396955017236');
              if(!message.member.roles.has(roleS.id)) {
                message.member.addRole(roleS)
              }
            }
            if(`${CurrentLevel + 1}` > 50) {
              let roleS = message.guild.roles.find(r => r.id === '621714949567414302');
              if(!message.member.roles.has(roleS.id)) {
                message.member.addRole(roleS)
              }
            }
            if (level < CurrentXp) {
                              con.query(`UPDATE Levels SET Level = ${parseInt(CurrentLevel) + parseInt(1)}, Xp = 0 WHERE ID = ${message.author.id}`, function (err, rows) {
                    if (err) return console.log(err);
                });
              if(CurrentLevel === 25) {
                if(level === 900) return
                con.query(`UPDATE Levels SET Maxs = 900 WHERE ID = ${message.author.id}`, function (err, rows) {
                    if (err) return console.log(err);
                });
              }
              if(CurrentLevel === 40) {
                if(level === 1250) return
                con.query(`UPDATE Levels SET Maxs = 1250 WHERE ID = ${message.author.id}`, function (err, rows) {
                      if (err) return console.log(err);
                });
              }
                if(`${CurrentLevel + 1}` === 5) {
                  let roleS = message.guild.roles.find(r => r.id === '621704078057013278');
                  if(message.member.roles.has(roleS.id)) return
                    message.member.addRole(roleS)
                }
                if(`${CurrentLevel + 1}` == 10) {
                  let roleS = message.guild.roles.find(r => r.id === '621706860650823701');
                  if(!message.member.roles.has(roleS.id)) {
                   message.member.addRole(roleS)
                  }
                }
                if(`${CurrentLevel + 1}` == 15) {
                  let roleS = message.guild.roles.find(r => r.id === '621707244509069313');
                  if(!message.member.roles.has(roleS.id)){
                    message.member.addRole(roleS)
                  }
                }
                if(`${CurrentLevel + 1}` == 20) {
                  let roleS = message.guild.roles.find(r => r.id === '621707424801357825');
                  if(!message.member.roles.has(roleS.id)) {
                    message.member.addRole(roleS)
                  }
                }
                if(`${CurrentLevel + 1}` == 25) {
                  let roleS = message.guild.roles.find(r => r.id === '621707728284286984');
                  if(!message.member.roles.has(roleS.id)) {
                    message.member.addRole(roleS)
                  }
                }
                if(`${CurrentLevel + 1}` == 30) {
                  let roleS = message.guild.roles.find(r => r.id === '621707979896651809');
                  if(!message.member.roles.has(roleS.id)) {
                    message.member.addRole(roleS)
                  }
                }
                if(`${CurrentLevel + 1}` == 35) {
                  let roleS = message.guild.roles.find(r => r.id === '603629259080335391');
                  if(!message.member.roles.has(roleS.id)) {
                    message.member.addRole(roleS)
                  }
                }
                if(`${CurrentLevel + 1}` == 40) {
                  let roleS = message.guild.roles.find(r => r.id === '621714396955017236');
                  if(!message.member.roles.has(roleS.id)) {
                    message.member.addRole(roleS)
                  }
                }
                if(`${CurrentLevel + 1}` == 50) {
                  let roleS = message.guild.roles.find(r => r.id === '621714949567414302');
                  if(!message.member.roles.has(roleS.id)) {
                    message.member.addRole(roleS)
                  }
                }
                if(`${CurrentLevel + 1}` == 65) {
                  let roleS = message.guild.roles.find(r => r.id === '621732521566273546');
                  if(!message.member.roles.has(roleS.id)) {
                    message.member.addRole(roleS)
                  }
                }
              let languageRU = message.guild.roles.find(r => r.id === '615518783620251670');
                let languageEN = message.guild.roles.find(r => r.id === '615867385328697349');
                if(!message.member.roles.has(languageRU.id)) {
                  if(!message.member.roles.has(languageEN.id)) {
                    bot.channels.get("621724743992868908").send(`:flag_bg: | **${message.author} получил ${CurrentLevel + 1} уровень!**\n:flag_um: | **${message.author} got ${CurrentLevel + 1} level!**`)
                    return
                  }
                  bot.channels.get("621724743992868908").send(`**${message.author} got ${CurrentLevel + 1} level!**`)
                  return
                }
                if(!message.member.roles.has(languageEN.id)) {
                  if(!message.member.roles.has(languageRU.id)) {
                    bot.channels.get("621724743992868908").send(`:flag_bg: | **${message.author} получил ${CurrentLevel + 1} уровень!**\n:flag_um: | **${message.author} got ${CurrentLevel + 1} level!**`)
                    return
                  }
                  bot.channels.get("621724743992868908").send(`**${message.author} получил ${CurrentLevel + 1} уровень!**`)
                  return
                }
              if(message.member.roles.has(languageRU.id)) {
                if(message.member.roles.has(languageEN.id)) {
                  bot.channels.get("621724743992868908").send(`:flag_bg: | **${message.author} получил ${CurrentLevel + 1} уровень!**\n:flag_um: | **${message.author} got ${CurrentLevel + 1} level!**`)
                  return
                }
                      bot.channels.get("621724743992868908").send(`**${message.author} получил ${CurrentLevel + 1} уровень!**`)
                return
              }
              if(message.member.roles.has(languageEN.id)) {
                if(message.member.roles.has(languageRU.id)) {
                bot.channels.get("621724743992868908").send(`:flag_bg: | **${message.author} получил ${CurrentLevel + 1} уровень!**\n:flag_um: | **${message.author} got ${CurrentLevel + 1} level!**`)
                  return
                }
                                  bot.channels.get("621724743992868908").send(`**${message.author} got ${CurrentLevel + 1} level!**`)
                return
              }
            }
        }
    })
})
bot.on('message', async message => {
    if (message.author.bot) return
    if (message.channel.type == "dm") return; 
  if(['517331770656686080', '550276764463792129', '571672504721211392', '601265391519662080', '599187428145627147', '575013947258699787', '344834720401719296'].includes(message.author.id)) return;
  if(['621725124567236658', '621725124567236658', '621725124567236658', '621725124567236658', '617417681657659436'].includes(message.channel.id)) return;
    let addxp = Math.floor(Math.random() * 3) + 1
    con.query(`SELECT * FROM Levels WHERE ID = ${message.author.id}`, function (err, result) {
        if (result.length) return;
        con.query("INSERT INTO Levels (ID, Level, Xp, Maxs) VALUES  (?,?,?,?)", [message.author.id, 0, 0, 700], function (err, result) {
            if (err) {
                console.log(err);
            }
        });
    })
    con.query(`SELECT * FROM Levels WHERE ID = ${message.author.id}`, function (err, results) {
        if (err) console.log(err);
        const users = results;
        for (let i = 0; i < users.length; i++) {
            let level = users[i].Maxs
            let CurrentLevel = users[i].Level
            let CurrentXp = users[i].Xp
            if(CurrentLevel === 65) return
            if(CurrentLevel > 65) return
            con.query(`UPDATE Levels SET Xp = ${parseInt(CurrentXp) + parseInt(addxp)} WHERE ID = ${message.author.id}`, function (err, rows) {
                if (err) return console.log(err);
            });
            if(`${CurrentLevel + 1}` > 5) {
              let roleS = message.guild.roles.find(r => r.id === '621704078057013278');
              if(!message.member.roles.has(roleS.id)) {
                message.member.addRole(roleS)
              }
            }
            if(`${CurrentLevel + 1}` > 10) {
              let roleS = message.guild.roles.find(r => r.id === '621706860650823701');
              if(!message.member.roles.has(roleS.id)) {
                message.member.addRole(roleS)
              }
            }
            if(`${CurrentLevel + 1}` > 15) {
              let roleS = message.guild.roles.find(r => r.id === '621707244509069313');
              if(!message.member.roles.has(roleS.id)){
                message.member.addRole(roleS)
              }
            }
            if(`${CurrentLevel + 1}` > 20) {
              let roleS = message.guild.roles.find(r => r.id === '621707424801357825');
              if(!message.member.roles.has(roleS.id)){
                message.member.addRole(roleS)
              }
            }
            if(`${CurrentLevel + 1}` > 25) {
              let roleS = message.guild.roles.find(r => r.id === '621707728284286984');
              if(!message.member.roles.has(roleS.id)){
                message.member.addRole(roleS)
              }
            }
            if(`${CurrentLevel + 1}` > 30) {
              let roleS = message.guild.roles.find(r => r.id === '621707979896651809');
              if(!message.member.roles.has(roleS.id)){
                message.member.addRole(roleS)
              }
            }
            if(`${CurrentLevel + 1}` > 35) {
              let roleS = message.guild.roles.find(r => r.id === '603629259080335391');
              if(!message.member.roles.has(roleS.id)){
                message.member.addRole(roleS)
              }
            }
            if(`${CurrentLevel + 1}` > 40) {
              let roleS = message.guild.roles.find(r => r.id === '621714396955017236');
              if(!message.member.roles.has(roleS.id)) {
                message.member.addRole(roleS)
              }
            }
            if(`${CurrentLevel + 1}` > 50) {
              let roleS = message.guild.roles.find(r => r.id === '621714949567414302');
              if(!message.member.roles.has(roleS.id)) {
                message.member.addRole(roleS)
              }
            }
            if (level < CurrentXp) {
                        
              if(CurrentLevel === 25) {
                if(level === 900) return
                con.query(`UPDATE Levels SET Maxs = 900 WHERE ID = ${message.author.id}`, function (err, rows) {
                    if (err) return console.log(err);
                });
              }
              if(CurrentLevel === 40) {
                if(level === 1250) return
                con.query(`UPDATE Levels SET Maxs = 1250 WHERE ID = ${message.author.id}`, function (err, rows) {
                      if (err) return console.log(err);
                });
              }
                con.query(`UPDATE Levels SET Level = ${parseInt(CurrentLevel) + parseInt(1)}, Xp = 0 WHERE ID = ${message.author.id}`, function (err, rows) {
                    if (err) return console.log(err);
                });
                if(`${CurrentLevel + 1}` === 5) {
                  let roleS = message.guild.roles.find(r => r.id === '621704078057013278');
                  if(message.member.roles.has(roleS.id)) return
                    message.member.addRole(roleS)
                }
                if(`${CurrentLevel + 1}` == 10) {
                  let roleS = message.guild.roles.find(r => r.id === '621706860650823701');
                  if(!message.member.roles.has(roleS.id)) {
                   message.member.addRole(roleS)
                  }
                }
                if(`${CurrentLevel + 1}` == 15) {
                  let roleS = message.guild.roles.find(r => r.id === '621707244509069313');
                  if(!message.member.roles.has(roleS.id)){
                    message.member.addRole(roleS)
                  }
                }
                if(`${CurrentLevel + 1}` == 20) {
                  let roleS = message.guild.roles.find(r => r.id === '621707424801357825');
                  if(!message.member.roles.has(roleS.id)) {
                    message.member.addRole(roleS)
                  }
                }
                if(`${CurrentLevel + 1}` == 25) {
                  let roleS = message.guild.roles.find(r => r.id === '621707728284286984');
                  if(!message.member.roles.has(roleS.id)) {
                    message.member.addRole(roleS)
                  }
                }
                if(`${CurrentLevel + 1}` == 30) {
                  let roleS = message.guild.roles.find(r => r.id === '621707979896651809');
                  if(!message.member.roles.has(roleS.id)) {
                    message.member.addRole(roleS)
                  }
                }
                if(`${CurrentLevel + 1}` == 35) {
                  let roleS = message.guild.roles.find(r => r.id === '603629259080335391');
                  if(!message.member.roles.has(roleS.id)) {
                    message.member.addRole(roleS)
                  }
                }
                if(`${CurrentLevel + 1}` == 40) {
                  let roleS = message.guild.roles.find(r => r.id === '621714396955017236');
                  if(!message.member.roles.has(roleS.id)) {
                    message.member.addRole(roleS)
                  }
                }
                if(`${CurrentLevel + 1}` == 50) {
                  let roleS = message.guild.roles.find(r => r.id === '621714949567414302');
                  if(!message.member.roles.has(roleS.id)) {
                    message.member.addRole(roleS)
                  }
                }
                if(`${CurrentLevel + 1}` == 65) {
                  let roleS = message.guild.roles.find(r => r.id === '621732521566273546');
                  if(!message.member.roles.has(roleS.id)) {
                    message.member.addRole(roleS)
                  }
                }
              let languageRU = message.guild.roles.find(r => r.id === '615518783620251670');
                let languageEN = message.guild.roles.find(r => r.id === '615867385328697349');
                if(!message.member.roles.has(languageRU.id)) {
                  if(!message.member.roles.has(languageEN.id)) {
                    bot.channels.get("621724743992868908").send(`:flag_bg: | **${message.author} получил ${CurrentLevel + 1} уровень!**\n:flag_um: | **${message.author} got ${CurrentLevel + 1} level!**`)
                    return
                  }
                  bot.channels.get("621724743992868908").send(`**${message.author} got ${CurrentLevel + 1} level!**`)
                  return
                }
                if(!message.member.roles.has(languageEN.id)) {
                  if(!message.member.roles.has(languageRU.id)) {
                    bot.channels.get("621724743992868908").send(`:flag_bg: | **${message.author} получил ${CurrentLevel + 1} уровень!**\n:flag_um: | **${message.author} got ${CurrentLevel + 1} level!**`)
                    return
                  }
                  bot.channels.get("621724743992868908").send(`**${message.author} получил ${CurrentLevel + 1} уровень!**`)
                  return
                }
              if(message.member.roles.has(languageRU.id)) {
                if(message.member.roles.has(languageEN.id)) {
                  bot.channels.get("621724743992868908").send(`:flag_bg: | **${message.author} получил ${CurrentLevel + 1} уровень!**\n:flag_um: | **${message.author} got ${CurrentLevel + 1} level!**`)
                  return
                }
                      bot.channels.get("621724743992868908").send(`**${message.author} получил ${CurrentLevel + 1} уровень!**`)
                return
              }
              if(message.member.roles.has(languageEN.id)) {
                if(message.member.roles.has(languageRU.id)) {
                bot.channels.get("621724743992868908").send(`:flag_bg: | **${message.author} получил ${CurrentLevel + 1} уровень!**\n:flag_um: | **${message.author} got ${CurrentLevel + 1} level!**`)
                  return
                }
                                  bot.channels.get("621724743992868908").send(`**${message.author} got ${CurrentLevel + 1} level!**`)
              }
            }
        }
    })
})
bot.login(process.env.TOKEN);
