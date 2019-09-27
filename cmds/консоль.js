const Discord = require ('discord.js')
const config = require('../botconfig.json') //Путь к файлу "botconfig.json"
const { botOwnerID } = config
module.exports.run = async (bot, message, args) => {
  
if(message.author.id !== botOwnerID) return message.channel.send(`Выполнять данную команду может только создатель бота!`)
  message.channel.send('Выполняется...').then(msg => msg.edit(require('child_process').execSync(args.join(' ')).toString('utf8') + ''))
}
module.exports.command = {
  name: 'console'
}