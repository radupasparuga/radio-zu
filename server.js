//require('custom-env').env(); // un-comment / comment this when needed
const { Client, Util } = require("discord.js");
const YouTube = require("simple-youtube-api");
const ytdl = require("ytdl-core");

const client = new Client({ disableEveryone: true });

const youtube = new YouTube(process.env.GOOGLE_API_KEY);

const queue = new Map();

client.on("warn", console.warn);

client.on("error", console.error);

client.on("ready", () => {
  client.user.setGame('with them hoes and some cocaine')
  console.log("Yo this ready!")
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
  const searchString = args.slice(1).join(" ");
  const url = args[1] ? args[1].replace(/<(.+)>/g, "$1") : "";
  const serverQueue = queue.get(msg.guild.id);
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
  console.log(mich)
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
  if (command === "play") {
    const voiceChannel = msg.member.voiceChannel;
    if (!voiceChannel)
      return msg.channel.send(
        "I'm sorry but you need to be in a voice channel to play music!"
      );
    const permissions = voiceChannel.permissionsFor(msg.client.user);
    if (!permissions.has("CONNECT")) {
      return msg.channel.send(
        "I cannot connect to your voice channel, make sure I have the proper permissions!"
      );
    }
    if (!permissions.has("SPEAK")) {
      return msg.channel.send(
        "I cannot speak in this voice channel, make sure I have the proper permissions!"
      );
    }

    if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
      const playlist = await youtube.getPlaylist(url);
      const videos = await playlist.getVideos();
      for (const video of Object.values(videos)) {
        const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
        await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
      }
      return msg.channel.send(
        `✅ Playlist: **${playlist.title}** has been added to the queue!`
      );
    } else {
      try {
        var video = await youtube.getVideo(url);
      } catch (error) {
        try {
          var videos = await youtube.searchVideos(searchString, 10);
          let index = 0;
          msg.channel.send(`
__**Song selection:**__
${videos.map(video2 => `**${++index} -** ${video2.title}`).join("\n")}
Please provide a value to select one of the search results ranging from 1-10.
					`);
          // eslint-disable-next-line max-depth
          try {
            var response = await msg.channel.awaitMessages(
              msg2 => msg2.content > 0 && msg2.content < 11,
              {
                maxMatches: 1,
                time: 10000,
                errors: ["time"]
              }
            );
          } catch (err) {
            console.error(err);
            return msg.channel.send(
              "No or invalid value entered, cancelling video selection."
            );
          }
          const videoIndex = parseInt(response.first().content);
          var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
        } catch (err) {
          console.error(err);
          return msg.channel.send("🆘 I could not obtain any search results.");
        }
      }
      return handleVideo(video, msg, voiceChannel);
    }
  } else if (command === "skip") {
    if (!msg.member.voiceChannel)
      return msg.channel.send("You are not in a voice channel!");
    if (!serverQueue)
      return msg.channel.send(
        "There is nothing playing that I could skip for you."
      );
    serverQueue.connection.dispatcher.end("Skip command has been used!");
    return undefined;
  } else if (command === "stop") {
    if (!msg.member.voiceChannel)
      return msg.channel.send("You are not in a voice channel!");
    if (!serverQueue)
      return msg.channel.send(
        "There is nothing playing that I could stop for you."
      );
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end("Stop command has been used!");
    return undefined;
  } else if (command === "volume") {
    if (!msg.member.voiceChannel)
      return msg.channel.send("You are not in a voice channel!");
    if (!serverQueue) return msg.channel.send("There is nothing playing.");
    if (!args[1])
      return msg.channel.send(
        `The current volume is: **${serverQueue.volume}**`
      );
    serverQueue.volume = args[1];
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
    return msg.channel.send(`I set the volume to: **${args[1]}**`);
  } else if (command === "np") {
    if (!serverQueue) return msg.channel.send("There is nothing playing.");
    return msg.channel.send(
      `🎶 Now playing: **${serverQueue.songs[0].title}**`
    );
  } else if (command === "queue") {
    if (!serverQueue) return msg.channel.send("There is nothing playing.");
    return msg.channel.send(`
__**Song queue:**__
${serverQueue.songs.map(song => `**-** ${song.title}`).join("\n")}
**Now playing:** ${serverQueue.songs[0].title}
		`);
  } else if (command === "pause") {
    if (serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause();
      return msg.channel.send("⏸ Paused the music for you!");
    }
    return msg.channel.send("There is nothing playing.");
  } else if (command === "resume") {
    if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      return msg.channel.send("▶ Resumed the music for you!");
    }
    return msg.channel.send("There is nothing playing.");
  }

  return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
  const serverQueue = queue.get(msg.guild.id);
  console.log(video);
  const song = {
    id: video.id,
    title: Util.escapeMarkdown(video.title),
    url: `https://www.youtube.com/watch?v=${video.id}`
  };
  if (!serverQueue) {
    const queueConstruct = {
      textChannel: msg.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    };
    queue.set(msg.guild.id, queueConstruct);

    queueConstruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueConstruct.connection = connection;
      play(msg.guild, queueConstruct.songs[0]);
    } catch (error) {
      console.error(`I could not join the voice channel: ${error}`);
      queue.delete(msg.guild.id);
      return msg.channel.send(`I could not join the voice channel: ${error}`);
    }
  } else {
    serverQueue.songs.push(song);
    console.log(serverQueue.songs);
    if (playlist) return undefined;
    else
      return msg.channel.send(
        `✅ **${song.title}** has been added to the queue!`
      );
  }
  return undefined;
}

function play(guild, song) {
  const serverQueue = queue.get(guild.id);

  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }
  console.log(serverQueue.songs);

  const dispatcher = serverQueue.connection
    .playStream(ytdl(song.url))
    .on("end", reason => {
      if (reason === "Stream is not generating quickly enough.")
        console.log("Song ended.");
      else console.log(reason);
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    })
    .on("error", error => console.error(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

  serverQueue.textChannel.send(`🎶 Start playing: **${song.title}**`);
}

client.login(process.env.TOKEN);
