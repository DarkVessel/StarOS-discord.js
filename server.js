const http = require("http"),
  express = require("express"),
  app = express();

app.get("/", (request, response) => {
  console.log(Date.now() + " пинг получен");
  response.sendStatus(200);
});

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

global.bot = new (require("discord.js")).Client();
global.fs = require("fs");
const { Core, Mongo } = require("discore.js");
global.env = require("dotenv").config(); //Модуль для работы с .env файлом.
global.MongoDB = new Mongo(process.env.MongodbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
global.config = require("./botconfig.json");
global.fs = require("fs");
global.Discord = require("discord.js");
global.serverID = config.serverID;
global.colors = config.colors;
global.commands = new Map();
global.DefaultPrefix = config.DefaultPrefix;
global.ChannelLevelID = config.ChannelLevelID
global.strftime = require("strftime")
const BotData = {
  id: { type: Mongo.Types.Number, default: undefined },
  TimeStatus: { type: Mongo.Types.String, default: undefined }
};
global.MongoDB.addModel("bot", BotData);
const LevelData = {
  UserId: { type: Mongo.Types.String, default: undefined },
  level: { type: Mongo.Types.Number, default: 0 },
  xp: { type: Mongo.Types.Number, default: 0 },
  maxs: { type: Mongo.Types.Number, default: 700 }
};
global.MongoDB.addModel("levels", LevelData);
const MessageData = {
  GuildId: { type: Mongo.Types.String, default: undefined },
  message: { type: Mongo.Types.Number, default: 0 }
}
global.MongoDB.addModel("message", MessageData)
const CoinsData = {
  UserId: { type: Mongo.Types.String, default: undefined },
  coins: { type: Mongo.Types.Number, default: 0 }
};
global.MongoDB.addModel("coins", CoinsData);
try {
  require("fs")
    .readdirSync("./bot/")
    .filter(file => file.endsWith(".js"))
    .map(i => require("./bot/" + i));
} catch (e) {
  console.error(e.stack);
}