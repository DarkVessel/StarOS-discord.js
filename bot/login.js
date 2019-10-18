try {
  const MongoClient = require("mongodb").MongoClient;
  const mongoClient = new MongoClient(process.env.MongodbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  bot.on("ready", async () => {
    console.log(`StarOS BOT | v1.0`);
    console.info(`Подключён к аккаунту ${bot.user.tag} | ${bot.user.id}`);
    bot.generateInvite(["ADMINISTRATOR"]).then(link => {
      console.log(`Ссылка для приглашения бота: ${link}`);
    });
    await MongoDB.open();
    mongoClient.connect(function(err, client) {
      bot.client = client;
      global.db = bot.client.db("StarOS");
      return db;
    });
  });
  bot.login(process.env.TOKEN);
} catch (err) {
  console.log(err.stack);
}
