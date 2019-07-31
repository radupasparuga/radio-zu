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
  let yeee = "und ich hab nichts gesagt"
  switch (msg.content.substring(1).toLowerCase() ) {
  case `credit`:
        msg.channel.send("Sadokaah is a god");
        break;
 
  case `help`:
  msg.channel.send("- !help: list of commands \n- !credit: credit to the author \n - !woah: woah  \n - !feelsbadman: sad reacts only  \n - !kiss: <3  \n- !roger: roger roger \n- !slap1: slap dat ass \n- !slap2: can never have too many slaps \n- !ree: sends ree gif \n- !slapb: slap that b-ass \n- !naughtyslap: can never have too many slaps \n-!sigh: oof \n- !ree: sends ree gif \n- !du: hast (easter egg) \n- !yemen: ye men \n - !nani: sends nani gif \n- !jesus: our lord and saviour \n- !play: song name/youtube song link/youtube playlist link (you need to be in a voice channel to activate this command) \n Commands available while a song is playing \n - !skip \n - !stop \n - !volume (0-infinity)  \n - !pause \n - !resume  \n - !np (now playing, shows the current playing track)");
    break;
 
    case `ricardo`:
        msg.channel.send(`https://tenor.com/view/flick-esfand-esfandtv-ricardo-milos-ricardo-flick-gif-13730968`);
        break;
 
    case `woah`:
        msg.channel.send(`https://tenor.com/view/shocked-bitch-please-what-umm-gif-8179914`);
        break;
 
        case `feelsbadman`:
        msg.channel.send(`https://tenor.com/view/frog-cry-gif-5275849`);
        break;
 
            case `kiss`:
            msg.channel.send(`https://tenor.com/view/selenagomez-gomez-selena-kiss-blowkiss-gif-7520436`);
            break;
 
            case `roger`:
            msg.channel.send(`https://tenor.com/view/roger-roger-roger-star-wars-the-phantom-menace-droids-gif-4890643`);
            break;
 
            case `slap1`:
             msg.channel.send(`https://tenor.com/sWaE.gif`);
            break;
 
            case `slap2`:
            msg.channel.send(`https://tenor.com/vX72.gif`);
            break;
 
            case `slapb`:
            msg.channel.send(`https://giphy.com/gifs/guitar-bass-9Q3EmYkMu4Fvq`);
            break;
 
            case `sigh`:
            msg.channel.send(`https://tenor.com/sL9X.gif`);
            break;
 
            case `naughtyslap`:
            msg.channel.send(`https://giphy.com/gifs/kevin-mccarthy-insticatorcom-nv9Udp8t61RF6`);
            break;
 
            case `ree`:
            msg.channel.send(`https://i.kym-cdn.com/photos/images/newsfeed/000/915/652/b49.gif`);
            break;
 
            case `communism`:
            msg.channel.send(`https://gph.is/1chYNed`);
            break;
 
            case `wow`:
            msg.channel.send(`https://tenor.com/view/umm-confused-wtf-blinking-okay-gif-7513882`);
            break;
 
            case `nani`:
            msg.channel.send(`https://tenor.com/ZflB.gif`);
            break;
 
            case `jesus` || `Jesus` || `Holy` || `holy`:
            msg.channel.send(`yemen`);
            break;
 
            case `yemen`:
            msg.channel.send(`https://media.giphy.com/media/3ohzdRVxJdYbiAYgVi/giphy.gif`);
            break;
 
            case `f`:
            msg.channel.send(`https://tenor.com/16lb.gif`);
            break;
 
            case `du`:
                msg.channel.send(`HAST`);
                break;
 
            case `du hast`:
              msg.channel.send(`DU HAST MICH`);
              break;
 
            case `du hast mich`:
            msg.channel.send(`DU HACH MIST GEFRAGT`);
            break;
  }
 
 
});
 
client.login(process.env.TOKEN);
