try {
  const { RoleRuID, RoleEnID, MaxLevel, ChannelLevelID, RoleУкID } = config;
  bot.on("message", async message => {
    let resConfig = MongoDB.config.findOne({ GuildId: message.guild.id });
    if (resConfig.Rank == false) return;
    if (message.author.bot) return;
    if (message.channel.type == "dm") return;
    if (message.guild.id !== serverID) return;
    if (
      [
        "621725124567236658",
        "617417681657659436",
        "617417581434765363"
      ].includes(message.channel.id)
    )
      return;
    let addxp = Math.floor(Math.random() * 3) + 1;
    await MongoDB.levels._toCollection();
    let res = MongoDB.levels.findOne({ UserId: message.author.id });
    if (res.UserId == undefined) {
      MongoDB.levels.insertOne({
        UserId: message.author.id,
        level: 0,
        xp: 0,
        maxs: 700
      });
      return;
    }
    let level = res.maxs;
    let CurrentLevel = res.level;
    let CurrentXp = res.xp;
    if (CurrentLevel >= 65) return;
    if (CurrentXp >= level) {
      await MongoDB.levels.updateOne(
        { UserId: message.author.id },
        { level: parseInt(CurrentLevel) + parseInt(1), xp: 0 }
      );
      let languageRU = message.guild.roles.find(r => r.id === RoleRuID);
      let languageEN = message.guild.roles.find(r => r.id === RoleEnID);
      let languageУК = message.guild.roles.find(r => r.id === RoleУкID);
      if (message.member.roles.has(languageУК.id)) {
        bot.channels
          .get(ChannelLevelID)
          .send(`**${message.author} отримав ${CurrentLevel + 1} рівень!**`);
        return;
      }
      if (message.member.roles.has(languageRU.id)) {
        bot.channels
          .get(ChannelLevelID)
          .send(`**${message.author} получил ${CurrentLevel + 1} уровень!**`);
        return;
      }
      if (message.member.roles.has(languageEN.id)) {
        bot.channels
          .get(ChannelLevelID)
          .send(`**${message.author} got ${CurrentLevel + 1} level!**`);
        return;
      }
      if (CurrentLevel >= 25) {
        if (level === 900) return;
        await MongoDB.levels.updateOne(
          { UserId: message.author.id },
          { maxs: 900 }
        );
      }
      if (CurrentLevel === 40) {
        if (level === 1250) return;
        await MongoDB.levels.updateOne(
          { UserId: message.author.id },
          { maxs: 1250 }
        );
      }
      return;
    }
    async function AddXP(Num) {
      await MongoDB.levels.updateOne(
        { UserId: message.author.id },
        { xp: parseInt(CurrentXp) + parseInt(Num) }
      );
    }
    if (
      [
        "517331770656686080",
        "550276764463792129",
        "571672504721211392",
        "601265391519662080",
        "599187428145627147",
        "575013947258699787",
        "344834720401719296"
      ].includes(message.author.id)
    )
      AddXP(4);
    if (
      message.author.id !== "517331770656686080" &&
      message.author.id !== "550276764463792129" &&
      message.author.id !== "571672504721211392" &&
      message.author.id !== "601265391519662080" &&
      message.author.id !== "599187428145627147" &&
      message.author.id !== "575013947258699787" &&
      message.author.id !== "344834720401719296"
    )
      AddXP(addxp);
  });
} catch (err) {
  console.log(err.stack);
}
