require('custom-env').env(); // un-comment / comment this when needed
const { Client } = require("discord.js");

const client = new Client({ disableEveryone: true });
client.music = require("discord.js-musicbot-addon");

client.music.start(client, {
  youtubeKey: process.env.GOOGLE_API_KEY,
  maxQueueSize: 0,
  anyoneCanSkip: true,
  anyoneCanAdjust: true,
  anyoneCanLeave: true,
  logging: true,
  musicPresence: true,
  clearPresence: true
});


client.on("warn", console.warn);

client.on("error", console.error);

client.on("ready", () => {
  client.user.setGame('with them hoes and some cocaine')
  console.log("Suicide gang-chan at your service")
});

client.on("disconnect", () =>
  console.log(
    "I just disconnected, making sure you know, I will reconnect now..."
  )
);

client.on("reconnecting", () => console.log("I am reconnecting now!"));

client.on("message", async msg => {
  // eslint-disable-line
  if (msg.author.bot) return undefined;
  if (!msg.content.startsWith(process.env.PREFIX)) return undefined;

  const args = msg.content.split(" ");
  const length = args.length
  let hast, mich, gefragt;
  if(length >= 2) {
    hast = args[1].toLowerCase();
  }
  if(length >= 3) {
    mich = args[2].toLowerCase();
    console.log(mich)
  }
  if(length >= 4) {
    gefragt = args[3].toLowerCase();
  }
  let yeee = "und ich hab nichts gesagt"
  let command = msg.content.toLowerCase().split(" ")[0];
  command = command.slice(1);
  if (command ==="credit") {
    return msg.channel.send(
      "Sadokaah is a god"
    );
  }
  if (command ==="help") {
    return msg.channel.send(
      "- !help: list of commands \n- !credit: credit to the author \n - !woah: woah  \n - !feelsbadman: sad reacts only  \n - !kiss: <3  \n- !roger: roger roger \n- !slap1: slap dat ass \n- !slap2: can never have too many slaps \n- !ree: sends ree gif \n- !slapb: slap that b-ass \n- !naughtyslap: can never have too many slaps \n-!sigh: oof \n- !ree: sends ree gif \n- !du: hast (easter egg) \n- !yemen: ye men \n - !nani: sends nani gif \n- !jesus: our lord and saviour \n- !play: song name/youtube song link/youtube playlist link (you need to be in a voice channel to activate this command) \n Commands available while a song is playing \n - !skip \n - !stop \n - !volume (0-infinity)  \n - !pause \n - !resume  \n - !np (now playing, shows the current playing track)"
    );
  }
  if (command ==="ricardo") {
    return msg.channel.send(
      "https://tenor.com/view/flick-esfand-esfandtv-ricardo-milos-ricardo-flick-gif-13730968"
    );
  }
  if (command ==="woah") {
    return msg.channel.send(
      "https://tenor.com/view/shocked-bitch-please-what-umm-gif-8179914"
    );
  }
  if (command ==="feelsbadman") {
    return msg.channel.send(
      "https://tenor.com/view/frog-cry-gif-5275849"
    );
  }
  if (command ==="kiss") {
    return msg.channel.send(
      "https://tenor.com/view/selenagomez-gomez-selena-kiss-blowkiss-gif-7520436"
    );
  }
  if (command === "roger") {
    return msg.channel.send(
      "https://tenor.com/view/roger-roger-roger-star-wars-the-phantom-menace-droids-gif-4890643"
    )
  }
  if (command === "slap1") {
    return msg.channel.send(
      "https://tenor.com/sWaE.gif"
    )
  }
  if (command === "slap2") {
    return msg.channel.send(
      "https://tenor.com/vX72.gif"
    )
  }
  if (command === "slapb") {
    return msg.channel.send(
      "https://giphy.com/gifs/guitar-bass-9Q3EmYkMu4Fvq"
    )
  }
  if (command === "sigh") {
    return msg.channel.send(
      "https://tenor.com/sL9X.gif"
    )
  }
  if (command === "naughtyslap") {
    return msg.channel.send(
      "https://giphy.com/gifs/kevin-mccarthy-insticatorcom-nv9Udp8t61RF6"
    )
  }
  if (command ==="ree") {
    return msg.channel.send(
      "https://i.kym-cdn.com/photos/images/newsfeed/000/915/652/b49.gif"
    );
  }
  if (command === "communism") {
    return msg.channel.send(
      "https://gph.is/1chYNed"
    )
  }
  if (command === "wow") {
    console.log(command)
    return msg.channel.send(
      "https://tenor.com/view/umm-confused-wtf-blinking-okay-gif-7513882"
    );
  }
  if (command === "nani") {
    console.log(command)
    return msg.channel.send(
      "https://tenor.com/ZflB.gif"
    );
  }
  if(hast === "hast" && command === "du" && mich === "mich" && gefragt === "gefragt"){
    return msg.channel.send(
      yeee.toUpperCase()
    )
  }
  if(hast === "hast" && command === "du" && mich === "mich"){
    return msg.channel.send(
      "GEFRAGT"
    )
  }
  if(hast === "hast" && command === "du"){
    return msg.channel.send(
      "MICH"
    )
  }
  if (command ==="du" || command ==="DU" || command === "Du" || command === "dU") {
    return msg.channel.send(
      "HAST"
    );
  }
  if(command === "jesus" || command === "Jesus" || command === "Holy") {
    console.log("i got ot jesusx2")
    return msg.channel.send(
      "https://tenor.com/UkBV.gif"
    );
  }
  if(command === "yemen") {
    return msg.channel.send(
      "https://media.giphy.com/media/3ohzdRVxJdYbiAYgVi/giphy.gif"
    )
  }

  if(command === "f") {
    return msg.channel.send(
      "https://tenor.com/16lb.gif"
    )
  }

  return undefined;
});

client.login(process.env.TOKEN);
