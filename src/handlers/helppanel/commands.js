const Discord = require('discord.js');

module.exports = async (client) => {
    const fields = [
        {
            name: `<:icons_activities:1240751535965863947>┆Activities`,
            value: `\`/activities\``,
            inline: true
        },
        {
            name: `<:afk5:1240751681960935486>┆AFK`,
            value: `\`/afk help\``,
            inline: true
        },
        {
            name: `<a:ANNOUNCEMENT:1240751841717784707>┆Announcement`,
            value: `\`/announcement help\``,
            inline: true
        },
        {
            name: `<:AutoMod:1240751915999170590>┆Auto mod`,
            value: `\`/automod help\``,
            inline: true
        },
        {
            name: `<a:Utility:1240400629013418096>┆Auto setup`,
            value: `\`/autosetup help\``,
            inline: true
        },
        {
            name: `<:happy_birthday:1240752009842524280>┆Birthday`,
            value: `\`/birthdays help\``,
            inline: true
        },
        {
            name: `<a:bots:1240752120257450134>┆Bot`,
            value: `\`/bot help\``,
            inline: true
        },
        {
            name: `<a:casino:1240752294694490113>┆Casino`,
            value: `\`/casino help\``,
            inline: true
        },
        {
            name: `<a:Utility:1240400629013418096>┆Configuration`,
            value: `\`/config help\``,
            inline: true
        },
        {
            name: `<:Commands:1240401083914780743>┆Custom commands`,
            value: `\`/custom-commands help\``,
            inline: true
        },
        {
            name: `<a:Dcredits:1240752657354850336>┆Dcredits`,
            value: `\`/dcredits help\``,
            inline: true
        },
        {
            name: `<:Economy:1240752742708809770>┆Economy`,
            value: `\`/economy help\``,
            inline: true
        },
        {
            name: `<:family:1240752878746992672>┆Family`,
            value: `\`/family help\``,
            inline: true
        },
        {
            name: `<:funwaa:1240755140538007602>┆Fun`,
            value: `\`/fun help\``,
            inline: true
        },
        {
            name: `<a:games:1240753006081867787>┆Games`,
            value: `\`/games help\``,
            inline: true
        },
        {
            name: `<a:giveaway:1240755355655602326>┆Giveaway`,
            value: `\`/giveaway help\``,
            inline: true
        },
        {
            name: `<a:Utility:1240400629013418096>┆Guild settings`,
            value: `\`/guild help\``,
            inline: true
        },
        {
            name: `<:image:1240753230971928670>┆Images`,
            value: `\`/images help\``,
            inline: true
        },
        {
            name: `<:invitesss:1240749167530348554>┆Invites`,
            value: `\`/invites help\``,
            inline: true
        },
        {
            name: `<:leveling:1240753525995343954>┆Leveling`,
            value: `\`/levels help\``,
            inline: true
        },
        {
            name: `<:message:1240753767683723285>┆Messages`,
            value: `\`/messages help\``,
            inline: true
        },
        {
            name: `<:moderation:1240753675949969580>┆Moderation`,
            value: `\`/moderation help\``,
            inline: true
        },
        {
            name: `<a:music:1240755806845010033>┆Music`,
            value: `\`/music help\``,
            inline: true
        },
        {
            name: `<:notepad:1240753972818608278>┆Notepad`,
            value: `\`/notepad help\``,
            inline: true
        },
        {
            name: `<:profile:1240757878051176448>┆Profile`,
            value: `\`/profile help\``,
            inline: true
        },
        {
            name: `<a:radio:1240758006996795403>┆Radio`,
            value: `\`/radio help\``,
            inline: true
        },
        {
            name: `<a:reaction:1240758156976455763>┆Reaction roles`,
            value: `\`/reactionroles help\``,
            inline: true
        },
        {
            name: `<a:searching:1240758471637336234>┆Search`,
            value: `\`/search help\``,
            inline: true
        },
        {
            name: `<:stats:1240758644144865360>┆Server stats`,
            value: `\`/serverstats help\``,
            inline: true
        },
        {
            name: `<a:Utility:1240400629013418096>┆Setup`,
            value: `\`/setup help\``,
            inline: true
        },
        {
            name: `🎛┆Soundboard`,
            value: `\`/soundboard help\``,
            inline: true
        },
        {
            name: `<:message:1240753767683723285>┆Sticky messages`,
            value: `\`/stickymessages help\``,
            inline: true
        },
        {
            name: `💡┆Suggestions`,
            value: `\`/sugestions help\``,
            inline: true
        },
        {
            name: `🤝┆Thanks`,
            value: `\`/thanks help\``,
            inline: true
        },
        {
            name: `🎫┆Tickets`,
            value: `\`/tickets help\``,
            inline: true
        },
        {
            name: `<a:Utility:1240400629013418096>┆Tools`,
            value: `\`/tools help\``,
            inline: true
        },
        {
            name: `🔊┆Voice`,
            value: `\`/voice help\``,
            inline: true
        },
    ];

    client.on(Discord.Events.InteractionCreate, async (interaction) => {
        if (!interaction.isStringSelectMenu()) return;

        if (interaction.customId == "Bot-helppanel") {
            if (interaction.values == "commands-Bothelp") {
                interaction.deferUpdate();
                let page = 1;

                const row = new Discord.ActionRowBuilder()
                    .addComponents(
                        new Discord.ButtonBuilder()
                            .setCustomId('helpPrev')
                            .setEmoji('⬅️')
                            .setStyle(Discord.ButtonStyle.Secondary),

                        new Discord.ButtonBuilder()
                            .setCustomId('helpNext')
                            .setEmoji('➡️')
                            .setStyle(Discord.ButtonStyle.Secondary),

                        new Discord.ButtonBuilder()
                            .setLabel("Invite")
                            .setURL(client.config.discord.botInvite)
                            .setStyle(Discord.ButtonStyle.Link),

                        new Discord.ButtonBuilder()
                            .setLabel("Support server")
                            .setURL(client.config.discord.serverInvite)
                            .setStyle(Discord.ButtonStyle.Link),
                    );

                const row2 = new Discord.ActionRowBuilder()
                    .addComponents(
                        new Discord.StringSelectMenuBuilder()
                            .setCustomId('Bot-helppanel')
                            .setPlaceholder('❌┆Nothing selected')
                            .addOptions([
                                {
                                    label: `Commands`,
                                    description: `Show the commands of Bot!`,
                                    emoji: "<:Commands:1240401083914780743>",
                                    value: "commands-Bothelp",
                                },
                                {
                                    label: `Invite`,
                                    description: `Invite Bot to your server`,
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
                                    description: `Show the bot changelogs`,
                                    emoji: "<:Commands:1240401083914780743>",
                                    value: "changelogs-Bothelp",
                                },
                            ]),
                    );

                client.embed({
                    title: `<:Commands:1240401083914780743>・Help panel`,
                    desc: `View all command categories in the bot here! \n\n[Website](https://corwindev.nl) | [Invite](${client.config.discord.botInvite}) | [Vote](https://top.gg/bot/798144456528363550/vote)`,
                    image: "https://cdn.discordapp.com/attachments/843487478881976381/874694194474668052/Bot_banner_invite.jpg",
                    fields: fields.slice(0, 24),
                    components: [row2, row],
                    type: 'edit'
                }, interaction.message).then(msg => {
                    const filter = i => i.user.id === interaction.user.id;

                    const collector = interaction.channel.createMessageComponentCollector({ filter, time: 100000 });

                    collector.on('collect', async i => {
                        if (i.customId == "helpNext") {
                            if (page == 1) {
                                client.embed({
                                    title: `❓・Help panel`,
                                    desc: `View all command categories in the bot here! \n\n[Website](https://corwindev.nl) | [Invite](${client.config.discord.botInvite}) | [Vote](https://top.gg/bot/798144456528363550/vote)`,
                                    fields: fields.slice(25, 49),
                                    components: [row2, row],
                                    type: 'update'
                                }, i)
                                page += 1;
                            }
                        }

                        else if (i.customId == "helpPrev") {
                            if (page == 2) {
                                client.embed({
                                    title: `❓・Help panel`,
                                    desc: `View all command categories in the bot here! \n\n[Website](https://corwindev.nl) | [Invite](${client.config.discord.botInvite}) | [Vote](https://top.gg/bot/798144456528363550/vote)`,
                                    fields: fields.slice(0, 24),
                                    components: [row2, row],
                                    type: 'update'
                                }, i)
                                page -= 1;
                            }
                        }
                    });
                })
            }
        }
    }).setMaxListeners(0);
}

 
