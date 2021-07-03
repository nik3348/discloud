module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message, client) {
		message.channel.send('Pinging...').then(sent => {
			message.channel.send('Pong.');
			sent.edit(`Roundtrip latency: ${sent.createdTimestamp - message.createdTimestamp}ms`);
		});
		message.channel.send(`Websocket heartbeat: ${client.ws.ping}ms.`);
	},

	// Arguments
	args: false,
	usage: '<user> <role>',

	// Guild only commands
	guildOnly: false,

	// Cooldown
	cooldown: 5,

	// Aliases
	aliases: ['icon', 'pfp'],

	// Permissions
	permissions: 'KICK_MEMBERS',
};
