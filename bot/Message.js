try {
  bot.on("message", async message => {
    if (message.channel.type == "dm") return;
    if (message.guild.id != serverID) return;
    await MongoDB.message._toCollection();
    let res = MongoDB.message.findOne({ GuildId: message.guild.id });
    if (res.GuildId == undefined) {
      MongoDB.message.insertOne({
        GuildId: message.guild.id,
        message: 1
      });
      return;
    }
    await MongoDB.message.updateOne(
      { GuildId: message.guild.id },
      { message: parseInt(res.message) + 1 }
    );
  });
} catch (err) {
  console.log(err.stack);
}
