try {
  bot.on("message", async message => {
    if (message.channel.id === config.ChannelReactionID) {
      await message.react(config.react1); //Ставим реакции.
      await message.react(config.react2);
    } else return;
  });
} catch (err) {
  console.log(err.stack);
}
