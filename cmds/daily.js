const { RichEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
  try {
    const collection = db.collection("daily");
    collection
      .find({ UserId: message.author.id })
      .toArray(function(err, results) {
        if (results[0] == undefined) {
          let users = [{ UserId: message.author.id, daliy: true }];
          collection.insertMany(users, function(err, results) {
            if (err) return console.log(err);
          });
          const collection2 = db.collection("coins");
          collection2
            .find({ UserId: message.author.id })
            .toArray(function(err, results) {
              if (results[0] == undefined) {
                let users2 = [{ UserId: message.author.id, coins: 1000 }];
                collection2.insertMany(users2, function(err, results) {
                  if (err) return console.log(err);
                });
                message.channel.send(
                  new RichEmbed()
                    .setColor(colors)
                    .setFooter(`Количество монет: 1000`)
                    .setTimestamp()
                    .setDescription(
                      `Вы успешно получили свой ежедневный бонус в размете 1000 OScoins!`
                    )
                );
                return;
              }
              let coins = results[0].coins;
              collection2.updateOne(
                { UserId: message.author.id },
                { $set: { coins: parseInt(coins) + parseInt(1000) } },
                function(err, result) {
                  if (err) return console.log(err);
                }
              );
              message.channel.send(
                new RichEmbed()
                  .setColor(colors)
                  .setFooter(
                    `Количество монет: ${parseInt(coins) + parseInt(1000)}`
                  )
                  .setTimestamp()
                  .setDescription(
                    `Вы успешно получили свой ежедневный бонус в размете 1000 OScoins!`
                  )
              );
            });
          return;
        }
        message.channel.send(
          new RichEmbed()
            .setColor("RED")
            .setFooter(message.author.username, message.author.displayAvatarURL)
            .setTimestamp()
            .setDescription(`Вы уже брали сегодня бонус, возвращайтесь завтра!`)
        );
      });
    /*mongoClient.connect(function(err, client) {
    const db = client.db("StarOS");
    const collection = db.collection("daily");
    if (err) return console.log(err);
      collection.find({ UserId: message.author.id }).toArray(function(err, results) {
        console.log(results)
        console.log(results[0])
        if(results[0] == undefined) {
          let users = [{UserId: message.author.id, daliy: true}];
          collection.insertMany(users, function(err, results){
        client.close();
          })
          return
        }
        mongoClient.connect(function(err, client) {
    const db = client.db("StarOS");
  const collection2 = db.collection("coins");
    if(err) return console.log(err);
collection2.find({UserId: message.author.id}).toArray(function(err, results){     
  console.log(results)
        if(results[0] == undefined) {  
          let users2 = [{UserId: message.author.id, coins: 1000}]
          collection2.insertMany(users2, function(err, results){
        client.close();
    });
          message.channel.send(
          new RichEmbed()
          .setColor(colors)
          .setFooter(`Количество монет: 1000`)
          .setTimestamp()
          .setDescription(`Вы успешно получили свой ежедневный бонус в размете 1000 OScoins!`)
          )
          return
        }
        let coins = results[0].coins
        collection2.updateOne(
        {UserId: message.author.id}, 
        { $set: {coins: parseInt(coins) + parseInt(1000)}},
        function(err, result){
            client.close();
        }
    );
        message.channel.send(
          new RichEmbed()
          .setColor(colors)
          .setFooter(`Количество монет: ${parseInt(coins) + parseInt(1000)}`)
          .setTimestamp()
          .setDescription(`Вы успешно получили свой ежедневный бонус в размете 1000 OScoins!`)
          )
        client.close();
})
            return
  })
      })
  })*/
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
  name: "daily"
};
