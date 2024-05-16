const Discord = require('discord.js');

module.exports = async (client) => {
    client.on(Discord.Events.InteractionCreate, async (interaction) => {
        if (!interaction.isStringSelectMenu()) return;

        if (interaction.customId == "Bot-helppanel") {
            if (interaction.values == "invite-Bothelp") {
                interaction.deferUpdate();

                const row2 = new Discord.ActionRowBuilder()
                    .addComponents( 
                        new Discord.StringSelectMenuBuilder()
                            .setCustomId('Bot-helppanel')
                            .setPlaceholder('❌┆Nothing selected')
                            .addOptions([
                                {
                                    label: `Commands`,
                                    description: `Show the commands of ${client.user.username}!`,
                                    emoji: "<:Commands:1240401083914780743>",
                                    value: "commands-Bothelp",
                                },
                                {
                                    label: `Invite`,
                                    description: `Invite ${client.user.username} to your server`,
                                    emoji: "<:invitesss:1240749167530348554>",
                                    value: "invite-Bothelp",
                                },
                                {
                                    label: `Support server`,
                                    description: `Join the suppport server`,
                                    emoji: "<:Support:1239465172524077087>",
                                    value: "support-Bothelp",
                                },
                                {
                                    label: `Changelogs`,
                                    description: `Show the ${client.user.username} bot changelogs`,
                                    emoji: "<:Commands:1240401083914780743>",
                                    value: "changelogs-Bothelp",
                                },
                            ]),
                    );

                let row = new Discord.ActionRowBuilder()
                    .addComponents(
                        new Discord.ButtonBuilder()
                            .setLabel("Invite")
                            .setURL(client.config.discord.botInvite)
                            .setStyle(Discord.ButtonStyle.Link),

                        new Discord.ButtonBuilder()
                            .setLabel("Support server")
                            .setURL(client.config.discord.serverInvite)
                            .setStyle(Discord.ButtonStyle.Link),
                    );

                client.embed({
                    title: `<:invitesss:1240749167530348554>・Invite`,
                    desc: `Make your server even better with the ${client.user.username} bot!`,
                    image: "https://cdn.discordapp.com/attachments/1235849726780379148/1240750173500608563/d601713de8002b9be1d0c1d72b60c759.jpg?ex=6647b225&is=664660a5&hm=614651533ddd22713c354e819b79e6b6c5125f5d8ba829af4349e8e4d71130ac&",
                    url: client.config.discord.botInvite,
                    components: [row2, row],
                    type: 'edit'
                }, interaction.message)
            }
        }
    }).setMaxListeners(0);
}

 
