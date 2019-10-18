try {
  const {
    RoleRuID,
    RoleEnID,
    MaxLevel,
    ChannelLevelID,
    RoleLevel5ID,
    RoleLevel10ID,
    RoleLevel15ID,
    RoleLevel20ID,
    RoleLevel25ID,
    RoleLevel30ID,
    RoleLevel35ID,
    RoleLevel40ID,
    RoleLevel50ID,
    RoleLevel65ID,
    RoleУкID
  } = config;
  bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type == "dm") return;
    if (message.guild.id !== serverID) return;
    if (
      message.author.id !== "517331770656686080" &&
      message.author.id !== "550276764463792129" &&
      message.author.id !== "571672504721211392" &&
      message.author.id !== "601265391519662080" &&
      message.author.id !== "599187428145627147" &&
      message.author.id !== "575013947258699787" &&
      message.author.id !== "344834720401719296"
    )
      return;
    if (
      !["617417681657659436", "617417581434765363"].includes(message.channel.id)
    )
      return;
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
    if (CurrentLevel >= MaxLevel) return;
    await MongoDB.levels.updateOne(
      { UserId: message.author.id },
      { xp: parseInt(CurrentXp) + parseInt(4) }
    );
    if (`${CurrentLevel + 1}` >= 5) {
      let roleS = message.guild.roles.find(r => r.id === RoleLevel5ID);
      if (!message.member.roles.has(roleS.id)) {
        message.member.addRole(roleS);
      }
    }
    if (`${CurrentLevel + 1}` >= 10) {
      let roleS = message.guild.roles.find(r => r.id === RoleLevel10ID);
      if (!message.member.roles.has(roleS.id)) {
        message.member.addRole(roleS);
      }
    }
    if (`${CurrentLevel + 1}` >= 15) {
      let roleS = message.guild.roles.find(r => r.id === RoleLevel15ID);
      if (!message.member.roles.has(roleS.id)) {
        message.member.addRole(roleS);
      }
    }
    if (`${CurrentLevel + 1}` >= 20) {
      let roleS = message.guild.roles.find(r => r.id === RoleLevel20ID);
      if (!message.member.roles.has(roleS.id)) {
        message.member.addRole(roleS);
      }
    }
    if (`${CurrentLevel + 1}` >= 25) {
      let roleS = message.guild.roles.find(r => r.id === RoleLevel25ID);
      if (!message.member.roles.has(roleS.id)) {
        message.member.addRole(roleS);
      }
    }
    if (`${CurrentLevel + 1}` >= 30) {
      let roleS = message.guild.roles.find(r => r.id === RoleLevel30ID);
      if (!message.member.roles.has(roleS.id)) {
        message.member.addRole(roleS);
      }
    }
    if (`${CurrentLevel + 1}` >= 35) {
      let roleS = message.guild.roles.find(r => r.id === RoleLevel35ID);
      if (!message.member.roles.has(roleS.id)) {
        message.member.addRole(roleS);
      }
    }
    if (`${CurrentLevel + 1}` >= 40) {
      let roleS = message.guild.roles.find(r => r.id === RoleLevel40ID);
      if (!message.member.roles.has(roleS.id)) {
        message.member.addRole(roleS);
      }
    }
    if (`${CurrentLevel + 1}` >= 50) {
      let roleS = message.guild.roles.find(r => r.id === RoleLevel50ID);
      if (!message.member.roles.has(roleS.id)) {
        message.member.addRole(roleS);
      }
    }
    if (CurrentXp >= level) {
      await MongoDB.levels.updateOne(
        { UserId: message.author.id },
        { level: parseInt(CurrentLevel) + parseInt(1), xp: 0 }
      );
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
      if (`${CurrentLevel + 1}` >= 5) {
        let roleS = message.guild.roles.find(r => r.id === RoleLevel5ID);
        if (message.member.roles.has(roleS.id)) return;
        message.member.addRole(roleS);
      }
      if (`${CurrentLevel + 1}` >= 10) {
        let roleS = message.guild.roles.find(r => r.id === RoleLevel10ID);
        if (!message.member.roles.has(roleS.id)) {
          message.member.addRole(roleS);
        }
      }
      if (`${CurrentLevel + 1}` >= 15) {
        let roleS = message.guild.roles.find(r => r.id === RoleLevel15ID);
        if (!message.member.roles.has(roleS.id)) {
          message.member.addRole(roleS);
        }
      }
      if (`${CurrentLevel + 1}` >= 20) {
        let roleS = message.guild.roles.find(r => r.id === RoleLevel20ID);
        if (!message.member.roles.has(roleS.id)) {
          message.member.addRole(roleS);
        }
      }
      if (`${CurrentLevel + 1}` >= 25) {
        let roleS = message.guild.roles.find(r => r.id === RoleLevel25ID);
        if (!message.member.roles.has(roleS.id)) {
          message.member.addRole(roleS);
        }
      }
      if (`${CurrentLevel + 1}` >= 30) {
        let roleS = message.guild.roles.find(r => r.id === RoleLevel30ID);
        if (!message.member.roles.has(roleS.id)) {
          message.member.addRole(roleS);
        }
      }
      if (`${CurrentLevel + 1}` >= 35) {
        let roleS = message.guild.roles.find(r => r.id === RoleLevel35ID);
        if (!message.member.roles.has(roleS.id)) {
          message.member.addRole(roleS);
        }
      }
      if (`${CurrentLevel + 1}` >= 40) {
        let roleS = message.guild.roles.find(r => r.id === RoleLevel40ID);
        if (!message.member.roles.has(roleS.id)) {
          message.member.addRole(roleS);
        }
      }
      if (`${CurrentLevel + 1}` >= 50) {
        let roleS = message.guild.roles.find(r => r.id === RoleLevel50ID);
        if (!message.member.roles.has(roleS.id)) {
          message.member.addRole(roleS);
        }
      }
      if (`${CurrentLevel + 1}` >= 65) {
        let roleS = message.guild.roles.find(r => r.id === RoleLevel65ID);
        if (!message.member.roles.has(roleS.id)) {
          message.member.addRole(roleS);
        }
      }
      let languageRU = message.guild.roles.find(r => r.id === RoleRuID);
      let languageEN = message.guild.roles.find(r => r.id === RoleEnID);
      let languageУК = message.guild.roles.find(r => r.id === RoleУкID);
      if (message.member.roles.has(RoleУкID.id)) {
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
    }
  });
} catch (err) {
  console.log(err.stack);
}
