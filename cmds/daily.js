const { RichEmbed } = require("discord.js");
const env = require("dotenv").config();
const config = require("../botconfig.json");
const { colors } = config;
const MongoClient = require("mongodb").MongoClient;
const mongoClient = new MongoClient(process.env.MongodbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
module.exports.run = async (bot, message, args) => {
  mongoClient.connect(function(err, client) {
    const db = client.db("StarOS");
    const collection = db.collection("daily");
    if (err) return console.log(err);
    collection
      .find({ UserId: message.author.id })
      .toArray(function(err, results) {
        if (results[0] == undefined) {
          let users = [{ UserId: message.author.id, daliy: true }];
          collection.insertMany(users, function(err, results) {
            client.close();
          });
          mongoClient.connect(function(err, client) {
            const db = client.db("StarOS");
            const collection2 = db.collection("coins");
            collection2
              .find({ UserId: message.author.id })
              .toArray(function(err, results) {
                if (results[0] == undefined) {
                  let users2 = [{ UserId: message.author.id, coins: 1000 }];
                  collection2.insertMany(users2, function(err, results) {
                    client.close();
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
                    client.close();
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
};
module.exports.command = {
  name: "daily"
};
