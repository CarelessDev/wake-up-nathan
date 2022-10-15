require("dotenv").config();

const { Client, Intents } = require("discord.js");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.login(process.env.DISCORD_TOKEN);

client.on("ready", () => {
  console.log("READY");
});

let count = 0;

client.on("messageCreate", (msg) => {
  if (msg.content.startsWith("!wakeup")) {
    setInterval(() => {
      msg.channel.send(
        `<@!${process.env.TARGET_COMRADE}> SOVIET UNION NEEDS YOU`
      );
      console.log(++count);
    }, 2000);
  }
});
