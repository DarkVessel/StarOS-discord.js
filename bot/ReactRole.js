try {
  bot.on("raw", async event => {
    var events = {
      MESSAGE_REACTION_ADD: "messageReactionAdd",
      MESSAGE_REACTION_REMOVE: "messageReactionRemove"
    };

    if (!events.hasOwnProperty(event.t)) return;

    const { d: data } = event;
    const user = bot.users.get(data.user_id);
    const channel = bot.channels.get(data.channel_id);
    if (channel.id != "636575925575745546") return;
    const message = await channel.fetchMessage(data.message_id);
    const member = message.guild.members.get(user.id);

    const emojiKey = data.emoji.id
      ? `${data.emoji.name}:${data.emoji.id}`
      : data.emoji.name;
    const reaction = message.reactions.get(emojiKey);

    let embedFooterText;
    if (message.embeds[0]) embedFooterText = message.embeds[0].footer.text;
    if (member.id !== bot.user.id) {
      if (reaction.emoji.name === "🇷🇺") {
        if (event.t === "MESSAGE_REACTION_ADD") {
          member.addRole("615518783620251670");
          member.removeRole("625682718662852608");
          member.removeRole("615867385328697349");
          member.removeRole("640927409427841072");
          member.removeRole("640927595277320223");
          return;
        } else {
          member.removeRole("615518783620251670");
          return;
        }
      } else if (reaction.emoji.name === "🇺🇦") {
        if (event.t === "MESSAGE_REACTION_ADD") {
          member.addRole("625682718662852608");
          member.removeRole("615518783620251670");
          member.removeRole("615867385328697349");
          member.removeRole("640927409427841072");
          member.removeRole("640927595277320223");
          return;
        } else {
          member.removeRole("625682718662852608");
          return;
        }
      } else if (reaction.emoji.name === "🇺🇸") {
        if (event.t === "MESSAGE_REACTION_ADD") {
          member.addRole("615867385328697349");
          member.removeRole("625682718662852608");
          member.removeRole("615518783620251670");
          member.removeRole("640927409427841072");
          member.removeRole("640927595277320223");
          return;
        } else {
          member.removeRole("615867385328697349");
          return;
        }
      } else if (reaction.emoji.name === "🇧🇾") {
        if (event.t === "MESSAGE_REACTION_ADD") {
          member.addRole("640927409427841072");
          member.removeRole("625682718662852608");
          member.removeRole("615518783620251670");
          member.removeRole("615867385328697349");
          member.removeRole("640927595277320223");
        } else {
          member.removeRole("640927409427841072");
        }
      } else if (reaction.emoji.name === "🇰🇿") {
        if (event.t === "MESSAGE_REACTION_ADD") {
          member.addRole("640927595277320223");
          member.removeRole("625682718662852608");
          member.removeRole("615518783620251670");
          member.removeRole("615867385328697349");
          member.removeRole("640927409427841072");
        } else {
          member.removeRole("640927595277320223");
        }
      }
    }
  });
} catch (err) {
  console.log(err.stack);
}
