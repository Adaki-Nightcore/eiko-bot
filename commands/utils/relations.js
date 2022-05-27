const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

const buttons = new MessageActionRow()
    .addComponents(
        new MessageButton()
            .setCustomId('couple')
            .setLabel('❤️・Couple')
            .setStyle('SECONDARY'),
    )
    .addComponents(
        new MessageButton()
            .setCustomId('celib')
            .setLabel('💔・Célibataire')
            .setStyle('SECONDARY'),
    )
    .addComponents(
        new MessageButton()
            .setCustomId('compl')
            .setLabel('🌩・Compliqué')
            .setStyle('SECONDARY'),
    )

const relationsEmbed = new MessageEmbed()
        .setDescription("**__Rôles Genres :__**")
        .addFields(

                { name: 'En couple:', value: '・<@&948740493704069228>', inline: true },

                { name: 'Célibataire:', value: '・<@&948740493704069227>', inline: true },

                { name: 'Compliqué:', value: '・<@&948740493704069226>', inline: true },
            )  
        .setFooter({ text: 'Rôles du serveur Adakou.' })

module.exports = {
    name: 'relations' ,
    category: 'utils',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'relations',
    examples: ['relations'],
    description: 'La commande relations permet d\'envoyer l\'embed des relations',
    async run(client, message, args) {
        await message.channel.send({ embeds: [relationsEmbed], components: [buttons] });
    },
    async runInteraction(client, interaction) {
        await interaction.reply({ embeds: [relationsEmbed], components: [buttons] });
    }
};