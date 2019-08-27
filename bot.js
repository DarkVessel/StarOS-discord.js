const { Discord, RichEmbed, Client} = require('discord.js')
const fs = require('fs')
const bot = new Client()
const env = require('dotenv').config();
const lang = require('./lang.json')
const time = require('./time.json')
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
            if(!lang[member.id]) lang[member.id] = { ru: false }
            if(!lang[member.id]) lang[member.id] = { en: false }
            fs.writeFile('./lang.json', JSON.stringify(lang), (err) => {
                if (err) console.log(err);
              });
            lang[member.id].ru = true
            lang[member.id].en = false
            fs.writeFile('./lang.json', JSON.stringify(lang), (err) => {
                if (err) console.log(err);
              });
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
            if(!lang[member.id]) lang[member.id] = { ru: false }
            if(!lang[member.id]) lang[member.id] = { en: false }
            fs.writeFile('./lang.json', JSON.stringify(lang), (err) => {
                if (err) console.log(err);
              });
            lang[member.id].ru = false
            lang[member.id].en = true
            fs.writeFile('./lang.json', JSON.stringify(lang), (err) => {
                if (err) console.log(err);
              });
            })
      })
    })
})
bot.on('guildMemberRemove', async member => {
  if(!lang[member.id]) return
delete lang[member.id]
fs.writeFile('./lang.json', JSON.stringify(lang), (err) => {
    if (err) console.log(err);
  });
})
bot.on('message', async message => {
  if(message.channel.id === '615595315524796436') {
    await message.react('615151311796830208')
    await message.react('615151421117169664')
  } else return
})
bot.login(process.env.TOKEN)
