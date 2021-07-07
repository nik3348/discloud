module.exports = {
	name: 'play',
	description: 'Play song',
	execute(message) {
		const ytdl = require('ytdl-core');
		const channel = message.member.voice.channel;
		if (channel) {
			channel.join().then(connection => {
				const stream = ytdl('https://www.youtube.com/watch?v=dQw4w9WgXcQ', { filter: 'audioonly' });
				const dispatcher = connection.play(stream);

				dispatcher.on('finish', () => channel.leave());
			});
		}
		else {
			message.channel.send(`You're not in a channel', ${message.author}!`);
		}
	},
	args: true,
	usage: '<song>',
	guildOnly: true,
	cooldown: 5,
	aliases: ['queue'],
};
