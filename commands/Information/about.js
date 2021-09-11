const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");

module.exports = {
    name: "about",
    category: "Information",
    aliases: [ "botinfo" ],
    description: "See description about this project",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
     
    const row = new MessageActionRow()
			.addComponents(
        new MessageButton()
    .setLabel("Invite")
    .setStyle("LINK")
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot`),
			new MessageButton()
    .setLabel("GitHub")
    .setStyle("LINK")
    .setURL("https://github.com/Pranav6966/lavalink-musicbot-with-buttons.git"),
    new MessageButton()
    .setLabel("Support")
    .setStyle("LINK")
    .setURL("https://discord.gg/jgnwPGTQ6j")
			);

      const mainPage = new MessageEmbed()
            .setAuthor('Geeky World', 'http://msurguy.github.io/gifloopcoder.com/example2.gif')
            .setThumbnail('http://msurguy.github.io/gifloopcoder.com/example2.gif')
            .setColor('#303236')
            .addField('CREATOR', '[PRANAV#7066](https://github.com/PRANAV6966) \n [INFERNOᴱˢᶜ ˢᵈᶠ ˢᵠ#9999](https://github.com/ishuraj28)', true)
            .addField('SERVER', '[GEEKY WORLD](https://discord.gg/jgnwPGTQ6j)', true)
            .addField('SOURCE CODE', '[**CLICK HERE**](https://github.com/Pranav6966/lavalink-musicbot-with-buttons.git)', true)
            .addField('\u200b',
                `The bot is [**CREATED BY**](https://discord.gg/jgnwPGTQ6j) geeky world . This code is open source and is free for everyone .. `
            )
        return message.channel.send({embeds: [mainPage], components: [row]});
    }
}
