const Discord = require ('discord.js')
module.exports.run = async (bot, message, args) => {
  
if(message.author.id !== '517331770656686080' && message.author.id !== '344834720401719296') return message.channel.send(`Выполнять данную команду может только создатель бота!`)
  message.channel.send('Выполняется...').then(msg => msg.edit(require('child_process').execSync(args.join(' ')).toString('utf8') + ''))
}
module.exports.command = {
  name: 'console'
}