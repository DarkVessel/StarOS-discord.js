try {
  bot.on("ready", async () => {
    await MongoDB.config._toCollection();
    let res = MongoDB.config.findOne({ GuildId: config.serverID });
    if (res.Mute == false) return;
    bot.setInterval(() => {
      const collection = db.collection("mutes");
      collection.find().toArray(function(err, results) {
        if (results[0] == undefined) return;
        results.forEach(e => {
          let time = e.Time;
          let guildid = e.GuildId;
          let userid = e.UserId;
          let guild = bot.guilds.get(guildid);
          let member = guild.members.get(userid);
          let muteRole = bot.guilds
            .get(guildid)
            .roles.find(r => r.name === config.MuteRoleName);
          if (!muteRole) return;
          if (!guild) return;
          if (!member) return;
          if (Date.now() >= time) {
            member.removeRole(muteRole);
            db.collection("mutes").deleteOne(
              { UserId: userid, GuildId: guildid },
              function(err, result) {
                if (err) return console.log(err);
              }
            );
          }
        });
      });
    }, 5000);
  });
} catch (err) {
  console.log(err.stack);
}
