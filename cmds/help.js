const { Discord, RichEmbed } = require('discord.js');
const { colors, ChannelStatusID } = require('../botconfig.json')
module.exports.run = async (bot, message, args) => {
    try{
    let page = 1;
    let Страниц = 8
    const embed = new RichEmbed()
        .setColor(colors)
        .setFooter(`Страница ${page} из ${Страниц}`)
        .setDescription(`Добро пожаловать в справочник.\nИспользуйте ⏪ ⏩ для переключения по страницам.`)
        .setTimestamp()
    message.channel.send(embed).then(msg => {
        msg.react('⏪').then(r => {
            msg.react('⏩')
            const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
            const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id;
            const backwards = msg.createReactionCollector(backwardsFilter);
            const forwards = msg.createReactionCollector(forwardsFilter);
            backwards.on('collect', r => {
              msg.reactions.forEach(e => e.remove(message.author.id))
                if (page === 1) return;
                page--;
                if (page == 1) {
                    let a = 'Добро пожаловать в справочник.\nИспользуйте ⏪ ⏩ для переключения по страницам.'
                    embed.setDescription(a);
                    embed.setFooter(`Страница ${page} из ${Страниц}`)
                    msg.edit(embed).then(msg => {
                        msg.react('⏪')
                        msg.react('⏩')
                        return
                    })
                }
                if (page == 2) {
                    let a = `Вступление
                    - Язык программирования: \`Node.JS\`
                    - База: \`MySQL\`, \`JSON\`.
                    - Модули: \`discord.js\`, \`dotenv\`, \`mysql2\`
                    - Команды: \`/console\`, \`/eval\`, \`/rank\`
                    - Стандартный префикс: \`/\`
                    - Специально для хостинга \`glitch.com\`
                    - Есть статистика сервера и бота в одном сообщении. (обновляется каждую минуту)
                    - Уровни за общение.`
                    embed.setDescription(a);
                    embed.setFooter(`Страница ${page} из ${Страниц}`)
                    msg.edit(embed).then(msg => {
                        msg.react('⏪')
                        msg.react('⏩')
                        return
                    })
                }
                if (page == 3) {
                    let b = `GitHub:
                    https://github.com/DarkVessel/StarOS-discord.js
                    Хост:
                    https://glitch.com/~staros-bot`
                    embed.setDescription(b);
                    embed.setFooter(`Страница ${page} из ${Страниц}`)
                    msg.edit(embed).then(msg => {
                        msg.react('⏪')
                        msg.react('⏩')
                        return
                    })
                }
                if (page == 4) {
                    let a = `Команда \`/console\`
                    Позволяет писать в консоль напрямую из Дискорда.
                    Доступна только создателю бота.`
                    embed.setDescription(a);
                    embed.setFooter(`Страница ${page} из ${Страниц}`)
                    msg.edit(embed).then(msg => {
                        msg.react('⏪')
                        msg.react('⏩')
                        return
                    })
                }
                if (page == 5) {
                    let a = `Команда \`/eval\`
                    Позволяет выполнить JavaScript код напрямую из канала. Доступна только создателю бота.`
                    embed.setDescription(a);
                    embed.setFooter(`Страница ${page} из ${Страниц}`)
                    msg.edit(embed).then(msg => {
                        msg.react('⏪')
                        msg.react('⏩')
                        return
                    })
                }
                if (page == 6) {
                    let a = `Команда \`/rank\`
                    Позволяет просмотреть ранг у себя или у участника.
                    Пример: \`/rank @Участник\``
                    embed.setDescription(a);
                    embed.setFooter(`Страница ${page} из ${Страниц}`)
                    msg.edit(embed).then(msg => {
                        msg.react('⏪')
                        msg.react('⏩')
                        return
                    })
                }
            if(page == 7) {
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
                Пример: \`/mute @УчастникИлиID 20m\` - Замутит участника на 20 минут.`
                embed.setDescription(a);
                    embed.setFooter(`Страница ${page} из ${Страниц}`)
                    msg.edit(embed).then(msg => {
                        msg.react('⏪')
                        msg.react('⏩')
                        return
                })
            }
                              if (page == 8) {
                    let a = `Статистика сервера и бота.
                    В канале <#${ChannelStatusID}> есть она.`
                    embed.setDescription(a);
                    embed.setFooter(`Страница ${page} из ${Страниц}`)
                    msg.edit(embed).then(msg => {
                        msg.react('⏪')
                        msg.react('⏩')
                        return
                })
            }
            })
            forwards.on('collect', r => {
              msg.reactions.forEach(e => e.remove(message.author.id))
                if (page === Страниц) return;
                page++;
                if (page == 1) {
                    let a = 'Добро пожаловать в справочник.\nИспользуйте ⏪ ⏩ для переключения по страницам.'
                    embed.setDescription(a);
                    embed.setFooter(`Страница ${page} из ${Страниц}`)
                    msg.edit(embed).then(msg => {
                        msg.react('⏪')
                        msg.react('⏩')
                        return
                    })
                }
                if (page == 2) {
                    let a = `Вступление
                    - Язык программирования: \`Node.JS\`
                    - База: \`MySQL\`, \`JSON\`.
                    - Модули: \`discord.js\`, \`dotenv\`, \`mysql2\`
                    - Команды: \`/console\`, \`/eval\`, \`/rank\`
                    - Стандартный префикс: \`/\`
                    - Специально для хостинга \`glitch.com\`
                    - Есть статистика сервера и бота в одном сообщении. (обновляется каждую минуту)
                    - Уровни за общение.`
                    embed.setDescription(a);
                    embed.setFooter(`Страница ${page} из ${Страниц}`)
                    msg.edit(embed).then(msg => {
                        msg.react('⏪')
                        msg.react('⏩')
                        return
                    })
                }
                if (page == 3) {
                    let b = `GitHub:
                    https://github.com/DarkVessel/StarOS-discord.js
                    Хост:
                    https://glitch.com/~staros-bot`
                    embed.setDescription(b);
                    embed.setFooter(`Страница ${page} из ${Страниц}`)
                    msg.edit(embed).then(msg => {
                        msg.react('⏪')
                        msg.react('⏩')
                        return
                    })
                }
                if (page == 4) {
                    let a = `Команда \`/console\`
                    Позволяет писать в консоль напрямую из Дискорда.
                    Доступна только создателю бота.`
                    embed.setDescription(a);
                    embed.setFooter(`Страница ${page} из ${Страниц}`)
                    msg.edit(embed).then(msg => {
                        msg.react('⏪')
                        msg.react('⏩')
                        return
                    })
                }
                if (page == 5) {
                    let a = `Команда \`/eval\`
                    Позволяет выполнить JavaScript код напрямую из канала. Доступна только создателю бота.`
                    embed.setDescription(a);
                    embed.setFooter(`Страница ${page} из ${Страниц}`)
                    msg.edit(embed).then(msg => {
                        msg.react('⏪')
                        msg.react('⏩')
                        return
                    })
                }
                if (page == 6) {
                    let a = `Команда \`/rank\`
                    Позволяет просмотреть ранг у себя или у участника.
                    Пример: \`/rank @Участник\``
                    embed.setDescription(a);
                    embed.setFooter(`Страница ${page} из ${Страниц}`)
                    msg.edit(embed).then(msg => {
                        msg.react('⏪')
                        msg.react('⏩')
                        return
                    })
                }
            if(page == 7) {
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
                Пример: \`/mute @УчастникИлиID 20m\` - Замутит участника на 20 минут.`
                embed.setDescription(a);
                    embed.setFooter(`Страница ${page} из ${Страниц}`)
                    msg.edit(embed).then(msg => {
                        msg.react('⏪')
                        msg.react('⏩')
                        return
                })
            }
                              if (page == 8) {
                    let a = `Статистика сервера и бота.
                    В канале <#${ChannelStatusID}> есть она.`
                    embed.setDescription(a);
                    embed.setFooter(`Страница ${page} из ${Страниц}`)
                    msg.edit(embed).then(msg => {
                        msg.react('⏪')
                        msg.react('⏩')
                        return
                })
            }
            })
        })
    })
}catch(err) {
    message.channel.send(
        new Discord.RichEmbed()
        .setColor('RED')
        .setAuthor(err.message)
        .setDescription(err.stack)
        .setFooter(err.name)
        .setTimestamp()
    )
    console.log(err.stack)
}
}
module.exports.command = {
    name: "help",
    aliases: []
};