try {
  bot.on("message", async message => {
    await MongoDB.config._toCollection();
    let res = MongoDB.config.findOne({ GuildId: message.guild.id });
    if (res.Reaction == false) return;
    if (message.channel.id == config.ChannelReactionID) {
      await message.react(config.react1); //Ставим реакции.
      await message.react(config.react2);
    } else return;
  });
} catch (err) {
  console.log(err.stack);
}
