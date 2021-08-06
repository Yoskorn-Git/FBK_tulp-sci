require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const { MessageEmbed } = require('discord.js');
const TOKEN = process.env.TOKEN;

// bot.login(TOKEN);

// bot.on('ready', () => {
//   console.info(`Logged in as ${bot.user.tag}!`);
// });

// bot.on('message', msg => {
//   if (msg.content === 'ping') {
//     msg.reply('pong');
//     msg.channel.send('pong');

//   } else if (msg.content.startsWith('!kick')) {
//     if (msg.mentions.users.size) {
//       const taggedUser = msg.mentions.users.first();
//       msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
//     } else {
//         msg.reply('Please tag a valid user!');
//     }
//   }
// });


client = new Discord.Client(),
settings = {
    prefix: "fbk!",
    token: TOKEN
};

client.on("ready", () => {
    console.log("I'm ready !");
});

client.on('message', msg => {
    if (msg.content === 'ping') {
      msg.reply('pong');
      msg.channel.send('pong');
  
    } else if (msg.content.startsWith('!kick')) {
      if (msg.mentions.users.size) {
        const taggedUser = msg.mentions.users.first();
        msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
      } else {
          msg.reply('Please tag a valid user!');
      }
    }
  });


const { ReactionRole } = require("reaction-role");
const system = new ReactionRole(TOKEN);

// SETTING CUSTOM DATABASE START
const db = require("quick.db");
system
	.onGet(async () => {
		const saved = (await db.get("reaction_roles")) || {};
		return saved;
	})
	.onSet(async (data) => {
		await db.set("reaction_roles", data);
	})
	.onDelete(async (message_id) => {
		await db.delete(`reaction_roles.${message_id}`);
	});
// SETTING CUSTOM DATABASE END

// NORMAL REACTION-ROLE CODE
const aca1 = system.createOption(
	"📘",
	["873207705286881351"],
	"You got a role", // add message
	"removed role", // remove message
);

const aca2 = system.createOption(
	"📒",
	["873207831694831726"],
	"You got a role", // add message
	"removed role", // remove message
);

const aca3 = system.createOption(
	"📗",
	["873207897214054460"],
	"You got a role", // add message
	"removed role", // remove message
);

// create option with messages
const aca4 = system.createOption(
	"📚",
	["873207966701080636"],
	"You got a role", // add message
	"removed role", // remove message
);

const year1 = system.createOption(
	"🟣",
	["872497989258719302"],
	"You got a role", // add message
	"removed role", // remove message
);

const year2 = system.createOption(
	"🟡",
	["733599767803723797"],
	"You got a role", // add message
	"removed role", // remove message
);

const year3 = system.createOption(
	"🟠",
	["741845464801869964"],
	"You got a role", // add message
	"removed role", // remove message
);

// create option with messages
const year4 = system.createOption(
	"🟢",
	["740767266475474996"],
	"You got a role", // add message
	"removed role", // remove message
);

const game1 = system.createOption(
	"<:apexlegends:873216918750912512>",
	["873222218283356212"],
	"You got a role Apex", // add message
	"removed role", // remove message
);

const game2 = system.createOption(
	"<:pubg:873216918847389696>",
	["873222303750701097"],
	"You got a role pubg", // add message
	"removed role", // remove message
);

const game3 = system.createOption(
	"<:dota2:873216917538754620>",
	["873222353075720274"],
	"You got a role Doda2", // add message
	"removed role", // remove message
);

// create option with messages
const game4 = system.createOption(
	"<:rov:873216917287084103>",
	["873222427369410580"],
	"You got a role rov", // add message
	"removed role", // remove message
);

const game5 = system.createOption(
	"<:lol:873234806153019452>",
	["873235082398298192"],
	"You got a role LOL", // add message
	"removed role", // remove message
);

// create option with messages
const game6 = system.createOption(
	"<:valo:873234805196730508>",
	["873235143136010330"],
	"You got a role Valorant", // add message
	"removed role", // remove message
);


const exampleEmbed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Welcome to the Community!')
	.setURL('https://lampang.tu.ac.th/')
	.setAuthor('Welcome to the Community!', 'https://i.imgur.com/AfFp7pu.png', 'https://lampang.tu.ac.th/')
	.setDescription('We offer way for members to showcase their background by using roles. Members will also be assigned a new color of their rank on the member list.')
	.setThumbnail('https://i.imgur.com/AfFp7pu.png')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/AfFp7pu.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/AfFp7pu.png');

// inside a command, event listener, etc.
const welcometext = new MessageEmbed()
	.setColor('#FFF119')
	.setTitle('Welcome to the Community!')
	.setURL('https://lampang.tu.ac.th/')
	.setAuthor('Gnat', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Emblem_of_Thammasat_University.svg/2048px-Emblem_of_Thammasat_University.svg.png', 'https://lampang.tu.ac.th/')
	.setDescription('We offer way for members to groupe their interest by using roles. Members will also be assigned a new color of their rank on the member list. Ask questions about computer science and broaden or deepen your knowledge through discussion with other learners')
	.setImage('https://lh3.googleusercontent.com/proxy/vpjyoaAHpDPgQ0LUWmhpzqwu39_WD15ISxZlS2tD5KhtvF-4I1nJ8HGs9-2YCz9xMbmkeweQyXtDwVnPEv4sXpQh20sVKH6XkQbZj6znqcQzhij6SgTA0zMg')

const ruletext = new MessageEmbed()
	.setColor('#FF2719')
	.setAuthor('Community Guidelines!', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Emblem_of_Thammasat_University.svg/2048px-Emblem_of_Thammasat_University.svg.png', 'https://lampang.tu.ac.th/')
    .addFields(
		{ name: ':pushpin: Rule 1: Stay on topic!', value: 'Please visit our Channel descriptions and Channel Pins as you become more familiar with our server. It will help you find the appropriate places for specific discussions. Incorrect and/or inappropriate content are subjected to removal!' },
        { name: ':sparkling_heart: Rule 2: Be mindful of others!', value: 'Do not spam or flood discussions with consecutive separate messages of single letters, words, images, emoticons, or large blocks of text in one or multiple channels. Other Fans are also sharing this server, and we must be considerate of each other.Certain links are blacklisted to help enforce our guidelines.' },
        { name: ':shield: Rule 3: Be respectful to each other!', value: 'Flaming, harassment and abuse will NOT be tolerated. This includes but isnt limited to: threatening, obscene, defamatory, condescending, libelous, racial, religious, political, sexually objectionable, doctored, or bigotry content. Do not attempt to promote unrelated discussions that divides our community.' },
	)

const classtext = new MessageEmbed()
	.setColor('#FFF119')
	.setAuthor('SECOND STEP')
	.setThumbnail('https://www.pazar-estate-marketing.com/model/upload/img/IMGProduct/V1161318342021048064821.png')
	.addFields(
		{ name: 'If you are Undergraduate, please select your level: \n', value: '🟣 Year 1 \n 🟡 Year 2 \n 🟠 Year 3 \n 🟢 Year 4' },
	)

const instructiontext = new MessageEmbed()
	.setColor('#FFF119')
    .addFields(
		{ name: ':notebook_with_decorative_cover: Instruction', value: 'Use the chat to initiate a role by react. If you do not see your role on the list, please contact a staff and let us know!' },
	)

const academics = new MessageEmbed()
    .setColor('#FF2719')
	.setAuthor('FIRST STEP')
	.setThumbnail('https://yuemmai.com/wp-content/uploads/2019/06/num-1.png')
    .addFields(
		{ name: 'Please select your academic level: \n', value: ':blue_book: High School (มัธยม) \n :orange_book: Independent (อิสระ) \n :green_book: Undergraduate (ปริญญาตรี) \n\n 📚 Graduated or Postgraduate (จบการศึกษา หรือสูงกว่า)' },
	)

const gametext = new MessageEmbed()
    .setColor('#FF2719')
	.setAuthor('LAST STEP')
	.setThumbnail('https://cdn.pixabay.com/photo/2012/04/23/17/07/three-39116_1280.png')
    .addFields(
		{ name: 'What games do you play? for finding groups: \n', value: '<:apexlegends:873216918750912512> Apex Legends\n <:pubg:873216918847389696> Player Unknow Battlegroud \n <:dota2:873216917538754620> Dota2 \n <:rov:873216917287084103> ROV \n <:lol:873234806153019452> league of legends \n <:valo:873234805196730508> Valorant'  },
	)

client.on("message", async (message) => {
	if (message.author.bot) return;
	if (!message.content.startsWith(settings.prefix)) return;
	const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
	const command = args.shift();

    if (command === 'welcome') {
        await message.channel.send("", {files: ["https://cdn.discordapp.com/attachments/184140444677046274/795376272254959636/image.png"]});
		await message.channel.send("", {files: ["https://cdn.discordapp.com/attachments/184140444677046274/795376273382965298/image.png"]});
        await message.channel.send(welcometext) // without mention
        await message.channel.send("", {files: ["https://cdn.discordapp.com/attachments/184140444677046274/795376294317260800/image.png"]});
		await message.channel.send(ruletext)
    }

	if (command === 'role') {
        await message.channel.send("", {files: ["https://cdn.discordapp.com/attachments/403231821896220672/866205476374970399/image.png"]});
        await message.channel.send(instructiontext)
        await message.channel.send(academics)
		await message.channel.send(classtext)
		await message.channel.send(gametext)
    }

	if (command === 'update') {
		system.createMessage(
			"770665755619360798",
			"873236725391056896",
			1, // reaction limit
			aca1,
			aca2,
			aca3,
			aca4,
		);

		system.createMessage(
			"770665755619360798",
			"873236745792155719",
			1, // reaction limit
			year1,
			year2,
			year3,
			year4,
		);

		system.createMessage(
			"770665755619360798",
			"873236747432112149",
			4, // reaction limit
			game1,
			game2,
			game3,
			game4,
			game5,
			game6
		);

		system.init();
	}
})

const DisTube = require('distube')

const distube = new DisTube(client, { searchSongs: true, emitNewSongOnly: true });

client.on("message", async (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(settings.prefix)) return;
    const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
    const command = args.shift();

    if (command == "play")
        distube.play(message, args.join(" "));

    if (["repeat", "loop"].includes(command))
        distube.setRepeatMode(message, parseInt(args[0]));

    if (command == "stop") {
        distube.stop(message);
        message.channel.send("Stopped the music!");
    }

    if (command == "skip")
        distube.skip(message);

    if (command == "queue") {
        let queue = distube.getQueue(message);
        message.channel.send('Current queue:\n' + queue.songs.map((song, id) =>
            `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
        ).slice(0, 10).join("\n"));
    }

    if ([`3d`, `bassboost`, `echo`, `karaoke`, `nightcore`, `vaporwave`].includes(command)) {
        let filter = distube.setFilter(message, command);
        message.channel.send("Current queue filter: " + (filter || "Off"));
    }
});

// Queue status template
const status = (queue) => `Volume: \`${queue.volume}%\` | Filter: \`${queue.filter || "Off"}\` | Loop: \`${queue.repeatMode ? queue.repeatMode == 2 ? "All Queue" : "This Song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``;

// DisTube event listeners, more in the documentation page
distube
    .on("playSong", (message, queue, song) => message.channel.send(
        `Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}\n${status(queue)}`
    ))
    .on("addSong", (message, queue, song) => message.channel.send(
        `Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`
    ))
    .on("playList", (message, queue, playlist, song) => message.channel.send(
        `Play \`${playlist.name}\` playlist (${playlist.songs.length} songs).\nRequested by: ${song.user}\nNow playing \`${song.name}\` - \`${song.formattedDuration}\`\n${status(queue)}`
    ))
    .on("addList", (message, queue, playlist) => message.channel.send(
        `Added \`${playlist.name}\` playlist (${playlist.songs.length} songs) to queue\n${status(queue)}`
    ))
    // DisTubeOptions.searchSongs = true
    .on("searchResult", (message, result) => {
        let i = 0;
        message.channel.send(`**Choose an option from below**\n${result.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}\n*Enter anything else or wait 60 seconds to cancel*`);
    })
    // DisTubeOptions.searchSongs = true
    .on("searchCancel", (message) => message.channel.send(`Searching canceled`))
    .on("error", (message, e) => {
        console.error(e)
        message.channel.send("An error encountered: " + e);
    });


client.login(settings.token);