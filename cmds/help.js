const { RichEmbed } = require("discord.js");
const {
  ChannelStatusID,
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
  Page,
  ChannelLevelID
} = require("../botconfig.json");
module.exports.run = async (bot, message, args) => {
  try {
    let page = 1;
    let Страниц = Page;
    const embed = new RichEmbed()
      .setColor(colors)
      .setFooter(`Страница ${page} из ${Страниц}`)
      .setDescription(
        `Добро пожаловать в справочник.\nИспользуйте ⏪ ⏩ для переключения по страницам.`
      )
      .setTimestamp();
    message.channel.send(embed).then(msg => {
      msg.react("⏪").then(r => {
        msg.react("⏩");
        const backwardsFilter = (reaction, user) =>
          reaction.emoji.name === "⏪" && user.id === message.author.id;
        const forwardsFilter = (reaction, user) =>
          reaction.emoji.name === "⏩" && user.id === message.author.id;
        const backwards = msg.createReactionCollector(backwardsFilter);
        const forwards = msg.createReactionCollector(forwardsFilter);
        backwards.on("collect", r => {
          msg.reactions.forEach(e => e.remove(message.author.id));
          if (page === 1) return;
          page--;
          if (page == 1) {
            let a =
              "Добро пожаловать в справочник.\nИспользуйте ⏪ ⏩ для переключения по страницам.";
            embed.setDescription(a);
            embed.setFooter(`Страница ${page} из ${Страниц}`);
            msg.edit(embed).then(msg => {
              msg.react("⏪");
              msg.react("⏩");
              return;
            });
          }
          if (page == 2) {
            let a = `Вступление
                    - Язык программирования: \`Node.JS\`
                    - База: \`MongoDB\`, \`JSON\`.
                    - Модули: \`discord.js\`, \`dotenv\`, \`discore.js\`, \`mongodb\`, \`discore.js\`
                    - Команды: \`/console\`, \`/eval\`, \`/rank\`, \`/coins\`, \`/daily\`, \`/mute\`, \`/random\`, \`/shop\`
                    - Стандартный префикс: \`/\`
                    - Специально для хостинга \`glitch.com\`
                    - Есть статистика сервера и бота в одном сообщении. (обновляется каждую минуту)
                    - Уровни за общение.`;
            embed.setDescription(a);
            embed.setFooter(`Страница ${page} из ${Страниц}`);
            msg.edit(embed).then(msg => {
              msg.react("⏪");
              msg.react("⏩");
              return;
            });
          }
          if (page == 3) {
            let b = `GitHub:
                    https://github.com/DarkVessel/StarOS-discord.js
                    Хост:
                    https://glitch.com/~staros-bot`;
            embed.setDescription(b);
            embed.setFooter(`Страница ${page} из ${Страниц}`);
            msg.edit(embed).then(msg => {
              msg.react("⏪");
              msg.react("⏩");
              return;
            });
          }
          if (page == 4) {
            let a = `Команда \`/console\`
                    Позволяет писать в консоль напрямую из Дискорда.
                    Доступна только создателю бота.`;
            embed.setDescription(a);
            embed.setFooter(`Страница ${page} из ${Страниц}`);
            msg.edit(embed).then(msg => {
              msg.react("⏪");
              msg.react("⏩");
              return;
            });
          }
          if (page == 5) {
            let a = `Команда \`/eval\`
                    Позволяет выполнить JavaScript код напрямую из канала. Доступна только создателю бота.`;
            embed.setDescription(a);
            embed.setFooter(`Страница ${page} из ${Страниц}`);
            msg.edit(embed).then(msg => {
              msg.react("⏪");
              msg.react("⏩");
              return;
            });
          }
          if (page == 6) {
            let a = `Команда \`/rank\`
                    Позволяет просмотреть ранг общения и звание у себя или у участника.
                    Пример: \`/rank @Участник\``;
            embed.setDescription(a);
            embed.setFooter(`Страница ${page} из ${Страниц}`);
            msg.edit(embed).then(msg => {
              msg.react("⏪");
              msg.react("⏩");
              return;
            });
          }
          if (page == 7) {
            let a = `Команда \`/mute\`
                Позволяет "заморозить" участника в канале путём выдачи специальной роли.
                Команда доступна только тем у кого есть права на удаление сообщений или выдачи ролей.
                Использование команды: \`/mute @УчастникИлиID Время Причина\`
                Время или причину не обязательно указывать.
                Времена:
                \`1s\` - Секунды.
                \`1m\` - Минуты.
                \`1h\` - Часы.
                \`1d\` - Дни.
                \`1w\` - Недели.
                \`1y\` - Годы.
                Пример: \`/mute @УчастникИлиID 20m\` - Замутит участника на 20 минут.`;
            embed.setDescription(a);
            embed.setFooter(`Страница ${page} из ${Страниц}`);
            msg.edit(embed).then(msg => {
              msg.react("⏪");
              msg.react("⏩");
              return;
            });
          }
          if (page == 8) {
            let a = `Статистика сервера и бота.
                    В канале <#${ChannelStatusID}> есть она.`;
            embed.setDescription(a);
            embed.setFooter(`Страница ${page} из ${Страниц}`);
            msg.edit(embed).then(msg => {
              msg.react("⏪");
              msg.react("⏩");
              return;
            });
          }
          if (page == 9) {
            let a = `Команда \`/coins\`
Позволяет просмотреть <:OSkoin:629323315168673802> у себя или у участника.`;
            embed.setDescription(a);
            embed.setFooter(`Страница ${page} из ${Страниц}`);
            msg.edit(embed).then(msg => {
              msg.react("⏪");
              msg.react("⏩");
              return;
            });
          }
          if (page == 10) {
            let a = `Команда \`/daily\`
Позволяет получить ежедневный бонус в размере 1000 OScoins.`;
            embed.setDescription(a);
            embed.setFooter(`Страница ${page} из ${Страниц}`);
            msg.edit(embed).then(msg => {
              msg.react("⏪");
              msg.react("⏩");
              return;
            });
          }
          if (page == 11) {
            let a = `Команда \`/random\`
Получить рандом число от 0 до указанного числа.
Использование команды: \`/random 15\` - Рандом число до 15.`;
            embed.setDescription(a);
            embed.setFooter(`Страница ${page} из ${Страниц}`);
            msg.edit(embed).then(msg => {
              msg.react("⏪");
              msg.react("⏩");
              return;
            });
          }
          if (page == 12) {
            let a = `Команда \`/shop\`
Магазин званий которые вы можете получить при получении уровней.
Для покупки вам нужно иметь OScoins <:OSkoin:629323315168673802>
Использование команды:
\`/shop\` - Просмотреть звания и их цену.
\`/shop Товар\` - Купить звание.`;
            embed.setDescription(a);
            embed.setFooter(`Страница ${page} из ${Страниц}`);
            msg.edit(embed).then(msg => {
              msg.react("⏪");
              msg.react("⏩");
              return;
            });
          }
          if (page == 13) {
            let a = `Уровни за общение.
Когда вы общаетесь, вы получаете XP.
Когда набираете достаточное количество XP, вы получаете уровень
А когда набираете достаточный уровень, вы получаете звание-роль.
Боты не могут иметь уровень.
Участники <@517331770656686080>, <@550276764463792129>, <@571672504721211392>, <@601265391519662080>, <@599187428145627147>, <@575013947258699787>, <@344834720401719296> получают по 4 XP за сообщение, остальные по 1-3.
Для предотвращения фарма, в каналах <#617417681657659436> и <#617417581434765363> нельзя получить уровень.
Для получения уровня надо иметь 700 XP, после 25 уровня 900, а после 40 уровня 1250 XP.
После получения уровня вы получите оповещение в канал <#${ChannelLevelID}>, оповещение будет на том языке, на котором у вас стоит роль.`;
            embed.setDescription(a);
            embed.setFooter(`Страница ${page} из ${Страниц}`);
            msg.edit(embed).then(msg => {
              msg.react("⏪");
              msg.react("⏩");
              return;
            });
          }
          if (page == 14) {
            let a = `Звания за уровни.
Когда вы получаете определённый уровень, вы получаете звание.
Званий всего 10.
<@&${RoleLevel5ID}> - За 5 уровень.
<@&${RoleLevel10ID}> - За 10 уровень.
<@&${RoleLevel15ID}> - За 15 уровень.
<@&${RoleLevel20ID}> - За 20 уровень.
<@&${RoleLevel25ID}> - За 25 уровень.
<@&${RoleLevel30ID}> - За 30 уровень.
<@&${RoleLevel35ID}> - За 35 уровень.
<@&${RoleLevel40ID}> - За 40 уровень.
<@&${RoleLevel50ID}> - За 50 уровень.
<@&${RoleLevel65ID}> - За 65 уровень.`;
            embed.setDescription(a);
            embed.setFooter(`Страница ${page} из ${Страниц}`);
            msg.edit(embed).then(msg => {
              msg.react("⏪");
              msg.react("⏩");
              return;
            });
          }
        });
        forwards.on("collect", r => {
          msg.reactions.forEach(e => e.remove(message.author.id));
          if (page === Страниц) return;
          page++;
          if (page == 1) {
            let a =
              "Добро пожаловать в справочник.\nИспользуйте ⏪ ⏩ для переключения по страницам.";
            embed.setDescription(a);
            embed.setFooter(`Страница ${page} из ${Страниц}`);
            msg.edit(embed).then(msg => {
              msg.react("⏪");
              msg.react("⏩");
              return;
            });
          }
          if (page == 2) {
            let a = `Вступление
                    - Язык программирования: \`Node.JS\`
                    - База: \`MongoDB\`, \`JSON\`.
                    - Модули: \`discord.js\`, \`dotenv\`, \`discore.js\`, \`mongodb\`, \`discore.js\`
                    - Команды: \`/console\`, \`/eval\`, \`/rank\`, \`/coins\`, \`/daily\`, \`/mute\`, \`/random\`, \`/shop\`
                    - Стандартный префикс: \`/\`
                    - Специально для хостинга \`glitch.com\`
                    - Есть статистика сервера и бота в одном сообщении. (обновляется каждую минуту)
                    - Уровни за общение.`;
            embed.setDescription(a);
            embed.setFooter(`Страница ${page} из ${Страниц}`);
            msg.edit(embed).then(msg => {
              msg.react("⏪");
              msg.react("⏩");
              return;
            });
          }
          if (page == 3) {
            let b = `GitHub:
                    https://github.com/DarkVessel/StarOS-discord.js
                    Хост:
                    https://glitch.com/~staros-bot`;
            embed.setDescription(b);
            embed.setFooter(`Страница ${page} из ${Страниц}`);
            msg.edit(embed).then(msg => {
              msg.react("⏪");
              msg.react("⏩");
              return;
            });
          }
          if (page == 4) {
            let a = `Команда \`/console\`
                    Позволяет писать в консоль напрямую из Дискорда.
                    Доступна только создателю бота.`;
            embed.setDescription(a);
            embed.setFooter(`Страница ${page} из ${Страниц}`);
            msg.edit(embed).then(msg => {
              msg.react("⏪");
              msg.react("⏩");
              return;
            });
          }
          if (page == 5) {
            let a = `Команда \`/eval\`
                    Позволяет выполнить JavaScript код напрямую из канала. Доступна только создателю бота.`;
            embed.setDescription(a);
            embed.setFooter(`Страница ${page} из ${Страниц}`);
            msg.edit(embed).then(msg => {
              msg.react("⏪");
              msg.react("⏩");
              return;
            });
          }
          if (page == 6) {
            let a = `Команда \`/rank\`
                    Позволяет просмотреть ранг общения и звание у себя или у участника.
                    Пример: \`/rank @Участник\``;
            embed.setDescription(a);
            embed.setFooter(`Страница ${page} из ${Страниц}`);
            msg.edit(embed).then(msg => {
              msg.react("⏪");
              msg.react("⏩");
              return;
            });
          }
          if (page == 7) {
            let a = `Команда \`/mute\`
                Позволяет "заморозить" участника в канале путём выдачи специальной роли.
                Команда доступна только тем у кого есть права на удаление сообщений или выдачи ролей.
                Использование команды: \`/mute @УчастникИлиID Время Причина\`
                Время или причину не обязательно указывать.
                Времена:
                \`1s\` - Секунды.
                \`1m\` - Минуты.
                \`1h\` - Часы.
                \`1d\` - Дни.
                \`1w\` - Недели.
                \`1y\` - Годы.
                Пример: \`/mute @УчастникИлиID 20m\` - Замутит участника на 20 минут.`;
            embed.setDescription(a);
            embed.setFooter(`Страница ${page} из ${Страниц}`);
            msg.edit(embed).then(msg => {
              msg.react("⏪");
              msg.react("⏩");
              return;
            });
          }
          if (page == 8) {
            let a = `Статистика сервера и бота.
                    В канале <#${ChannelStatusID}> есть она.`;
            embed.setDescription(a);
            embed.setFooter(`Страница ${page} из ${Страниц}`);
            msg.edit(embed).then(msg => {
              msg.react("⏪");
              msg.react("⏩");
              return;
            });
          }
          if (page == 9) {
            let a = `Команда \`/coins\`
Позволяет просмотреть <:OSkoin:629323315168673802> у себя или у участника.`;
            embed.setDescription(a);
            embed.setFooter(`Страница ${page} из ${Страниц}`);
            msg.edit(embed).then(msg => {
              msg.react("⏪");
              msg.react("⏩");
              return;
            });
          }
          if (page == 10) {
            let a = `Команда \`/daily\`
Позволяет получить ежедневный бонус в размере 1000 OScoins.`;
            embed.setDescription(a);
            embed.setFooter(`Страница ${page} из ${Страниц}`);
            msg.edit(embed).then(msg => {
              msg.react("⏪");
              msg.react("⏩");
              return;
            });
          }
          if (page == 11) {
            let a = `Команда \`/random\`
Получить рандом число от 0 до указанного числа.
Использование команды: \`/random 15\` - Рандом число до 15.`;
            embed.setDescription(a);
            embed.setFooter(`Страница ${page} из ${Страниц}`);
            msg.edit(embed).then(msg => {
              msg.react("⏪");
              msg.react("⏩");
              return;
            });
          }
          if (page == 12) {
            let a = `Команда \`/shop\`
Магазин званий которые вы можете получить при получении уровней.
Для покупки вам нужно иметь OScoins <:OSkoin:629323315168673802>
Использование команды:
\`/shop\` - Просмотреть звания и их цену.
\`/shop Товар\` - Купить звание.`;
            embed.setDescription(a);
            embed.setFooter(`Страница ${page} из ${Страниц}`);
            msg.edit(embed).then(msg => {
              msg.react("⏪");
              msg.react("⏩");
              return;
            });
          }
          if (page == 13) {
            let a = `Уровни за общение.
Когда вы общаетесь, вы получаете XP.
Когда набираете достаточное количество XP, вы получаете уровень
А когда набираете достаточный уровень, вы получаете звание-роль.
Боты не могут иметь уровень.
Участники <@517331770656686080>, <@550276764463792129>, <@571672504721211392>, <@601265391519662080>, <@599187428145627147>, <@575013947258699787>, <@344834720401719296> получают по 4 XP за сообщение, остальные по 1-3.
Для предотвращения фарма, в каналах <#617417681657659436> и <#617417581434765363> нельзя получить уровень.
Для получения уровня надо иметь 700 XP, после 25 уровня 900, а после 40 уровня 1250 XP.
После получения уровня вы получите оповещение в канал <#${ChannelLevelID}>, оповещение будет на том языке, на котором у вас стоит роль.`;
            embed.setDescription(a);
            embed.setFooter(`Страница ${page} из ${Страниц}`);
            msg.edit(embed).then(msg => {
              msg.react("⏪");
              msg.react("⏩");
              return;
            });
          }
          if (page == 14) {
            let a = `Звания за уровни.
Когда вы получаете определённый уровень, вы получаете звание.
Званий всего 10.
<@&${RoleLevel5ID}> - За 5 уровень.
<@&${RoleLevel10ID}> - За 10 уровень.
<@&${RoleLevel15ID}> - За 15 уровень.
<@&${RoleLevel20ID}> - За 20 уровень.
<@&${RoleLevel25ID}> - За 25 уровень.
<@&${RoleLevel30ID}> - За 30 уровень.
<@&${RoleLevel35ID}> - За 35 уровень.
<@&${RoleLevel40ID}> - За 40 уровень.
<@&${RoleLevel50ID}> - За 50 уровень.
<@&${RoleLevel65ID}> - За 65 уровень.`;
            embed.setDescription(a);
            embed.setFooter(`Страница ${page} из ${Страниц}`);
            msg.edit(embed).then(msg => {
              msg.react("⏪");
              msg.react("⏩");
              return;
            });
          }
        });
      });
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
  name: "help",
  aliases: []
};
