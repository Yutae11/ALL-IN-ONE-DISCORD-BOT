const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');
const moment = require("moment");
require("moment-duration-format");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Get help with the bot'),

    /** 
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async (client, interaction, args) => {
        await interaction.deferReply({ fetchReply: true });
        const row = new Discord.ActionRowBuilder()
            .addComponents(
                new Discord.StringSelectMenuBuilder()
                    .setCustomId('Bot-helppanel')
                    .setPlaceholder('<a:info:1240401708799230004>┆Nothing selected')
                    .addOptions([
                        {
                            label: `Commands`,
                            description: `Show the commands of Bot!`,
                            emoji: "<:commands:1240401187333865594>",
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
                            emoji: "<a:logserver:1240749850082148392>",
                            value: "changelogs-Bothelp",
                        },
                    ]),
            );

        return client.embed({
            title: `<:commands:1240401187333865594>・Help panel`,
            desc: `Welcome to Bot's help panel! We have made a small overview to help you! Make a choice via the menu below`,
            image: "https://cdn.discordapp.com/attachments/1235849726780379148/1240750173500608563/d601713de8002b9be1d0c1d72b60c759.jpg?ex=6647b225&is=664660a5&hm=614651533ddd22713c354e819b79e6b6c5125f5d8ba829af4349e8e4d71130ac&",
            fields: [
                {
                    name: `<a:Utility:1240400629013418096>┆Menu doesn't work?`,
                    value: `Try resending the command. If you get no reaction, make sure you report the bug!`
                },
                {
                    name: `<a:bug:1240747649762594877>┆Found a bug?`,
                    value: `Report this with \`/report bug\``
                },
                {
                    name: `🔗┆Links`,
                    value: `[insta](https://www.instagram.com/yuta.xae?igsh=MTVzenNodGt3MmE5cw==) | [Invite](${client.config.discord.botInvite}) | [discord](https://discord.com/invite/sbFJCnQzJz)`
                },
            ],
            components: [row],
            type: 'editreply'
        }, interaction)
    },
};

 
