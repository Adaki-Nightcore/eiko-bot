const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

const buttons = new MessageActionRow()
    .addComponents(
        new MessageButton()
            .setCustomId('homme')
            .setLabel('👔・Homme')
            .setStyle('SECONDARY'),
    )
    .addComponents(
        new MessageButton()
            .setCustomId('femme')
            .setLabel('🎀・Femme')
            .setStyle('SECONDARY'),
    )
    .addComponents(
        new MessageButton()
            .setCustomId('autre')
            .setLabel('✨・Autre')
            .setStyle('SECONDARY'),
    )

const rolesEmbed = new MessageEmbed()
        .setDescription("**__Rôles Genres :__**")
        .addFields(

                { name: 'Un homme:', value: '・<@&948740493725024310>', inline: true },

                { name: 'Une femme:', value: '・<@&948740493725024309>', inline: true },

                { name: 'Autre:', value: '・<@&948740493725024308>', inline: true },
            )  
        .setFooter({ text: 'Rôles du serveur Adakou.' })

module.exports = {
    name: 'roles' ,
    category: 'utils',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'roles',
    examples: ['roles'],
    description: 'La commande roles permet d\'envoyer l\'embed des roles',
    async run(client, message, args) {
        await message.channel.send({ embeds: [rolesEmbed], components: [buttons] });
    },
    async runInteraction(client, interaction) {
        await interaction.reply({ embeds: [rolesEmbed], components: [buttons] });
    }
};