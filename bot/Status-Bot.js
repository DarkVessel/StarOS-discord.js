try {
  bot.on("ready", async () => {
    bot.setInterval(async () => {
      let Status = [
        ",-,",
        ",_,",
        "<_<",
        ";-;",
        ";_;",
        ":D",
        "D:",
        ":<",
        ":>",
        "ツ",
        ">_>",
        ";d",
        ":/",
        " ( ͡° ͜ʖ ͡°)",
        " ( ͠° ͟ʖ ͡°)",
        "( ͡~ ͜ʖ ͡°)",
        "( ͡ʘ ͜ʖ ͡ʘ)",
        "(° ͜ʖ °)",
        "( ‾ʖ̫‾)",
        "( ಠ ͜ʖ ಠ)",
        "凸༼ຈل͜ຈ༽凸",
        "(ᗒᗣᗕ)՞",
        "( ͡° ʖ̯ ͡°)",
        "( ͡ಥ ͜ʖ ͡ಥ)",
        "༼  ͡° ͜ʖ ͡°  ༽",
        "(▀̿Ĺ̯▀̿ ̿)",
        "( ✧≖ ͜ʖ≖)",
        "(ง ͠° ͟ل͜ ͡°)ง",
        "(͡ ͡° ͜ つ ͡͡°)",
        "[̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅]",
        "(✿❦ ͜ʖ ❦)",
        "ᕦ( ͡° ͜ʖ ͡°)ᕤ",
        "( ͡° ͜ʖ ͡°)╭∩╮",
        "(╯ ͠° ͟ʖ ͡°)╯",
        "ツ",
        "(ಠಠ)",
        "ʕ ͡° ʖ̯ ͡°ʔ",
        "(☞ ͡° ͜ʖ ͡°)☞",
        "(‡▼益▼)",
        "(‡▼益▼)",
        "ᕕ( ͡° ͜ʖ ͡°)ᕗ",
        "◕‿↼",
        "(ó﹏ò｡)",
        "٩(^ᴗ^)۶",
        "ↀᴥↀ",
        "(ﾉ◕ヮ◕)ﾉ:･ﾟ✧",
        " (^-^) /",
        "ᕦ(òóˇ)ᕤ",
        "во что-то",
        "xD",
        "ленни",
        "ботов",
        "шо",
        "/help",
        "жорика"
      ];
      let random = Math.floor(Math.random() * Status.length);
      let random2 = Math.floor(Math.random() * 4);
      bot.user.setPresence({ game: { name: Status[random], type: random2 } });
    }, 60000);
  });
} catch (err) {
  console.log(err.stack);
}
