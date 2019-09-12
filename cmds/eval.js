exports.run = (bot, message, args) => {
    const Discord = require('discord.js')
    const fs = require('fs')
    if(message.author.id !== '517331770656686080') return message.channel.send(`Выполнять данную команду может только создатель бота!`)
    function clean(text) {
        if(typeof(text) === 'string')
        return text.replace(/`/g, "`" + String.fromCharCode(8302)).replace(/@/g, "@" + String.fromCharCode(8203))
        else
        return text;
    }
    try {
        var input = args.join(' ')
        let evalcode = eval(input)
        if(typeof evalcode !== 'string')
        evalcode = require('util').inspect(evalcode);
        var embed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField(`Команда`, `\`\`\`js\n${input}\`\`\``)
        .addField(`Данные`, `\`\`\`js\n${clean(evalcode)}\`\`\``)
        .addField(`Тип`, `\`\`\`\n${typeof evalcode}\`\`\``)
        .setColor("RANDOM")
        message.channel.send(embed)
} catch (e) {
    var embed1 = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(`Ошибка`, `\`\`\`js\n${clean(e)}\`\`\``)
    message.channel.send(embed1)
}
}
exports.help = {
    name: 'eval'
}