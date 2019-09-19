const Discord = require('discord.js')
const env = require('dotenv').config();
const { host, user, password, database } = process.env;
const mysql = require('mysql2')
const con = mysql.createConnection({ host, user, password, database});
module.exports.run = async (bot, message, args) => {
    let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]) || message.guild.member(message.author))
    con.query(`SELECT * FROM Levels WHERE ID = ${member.id}`, function (err, result) {
        if (result.length) return;
        con.query("INSERT INTO Levels (ID, level, xp, Maxs) VALUES  (?,?,?,?)", [member.id, 0, 0, 700], function (err, result) {
            if (err) {
                console.log(err);
            }
        });
    })
    const sql = `SELECT * FROM Levels WHERE ID = ${member.id}`;
    con.query(sql, function (err, results) {
        if (err) console.log(err);
        const users = results;
        for (let i = 0; i < users.length; i++) {
            let level = users[i].Maxs
            let CurrentLevel = users[i].Level
            let CurrentXp = users[i].Xp
    var embed = new Discord.RichEmbed()
    .setAuthor(`${member.user.username}`, member.user.avatarURL)
    .addField('Опыт', `${CurrentXp}/${level}`, true)
    .addField('Уровень', CurrentLevel, true)
    .setColor('RANDOM')
    .setTimestamp()
    .setFooter(`Опыта до следующего уровня: ${level - CurrentXp}`)
    message.channel.send(embed)
        }
    })
};
module.exports.command = {
    name: "rank"
};