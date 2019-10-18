try {
  bot.on("ready", async () => {
    bot.setInterval(() => {
      let vremya = strftime.timezone(180);
      if (`${vremya("%H:%M", new Date())}` == `00:00`) {
          db.collection("daily").deleteMany({ daliy: true }, function(
            err,
            result
          ) {
            console.log(result);
          });
      }
    }, 5000);
  });
} catch (err) {
  console.log(err.stack);
}
