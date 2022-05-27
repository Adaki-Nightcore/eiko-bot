const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

const buttons = new MessageActionRow()
    .addComponents(
        new MessageButton()
            .setCustomId('majeur')
            .setLabel('🔞・Majeur')
            .setStyle('SECONDARY'),
    )
    .addComponents(
        new MessageButton()
            .setCustomId('mineur')
            .setLabel('🍼・Mineur')
            .setStyle('SECONDARY'),
    )

const ageEmbed = new MessageEmbed()
        .setDescription("**__Vous êtes :__**")
        .addFields(

                { name: 'Un/e majeur(e):', value: '・<@&948740493725024306>', inline: true },

                { name: 'Un/e mineur(e):', value: '・<@&948740493704069230>', inline: true },
            )
        .setFooter({ text: 'Rôles du serveur Adakou.' })

module.exports = {
    name: 'age' ,
    category: 'utils',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'age',
    examples: ['age'],
    description: 'La commande age permet d\'envoyer l\'embed des age',
    async run(client, message, args) {
        await message.channel.send({ embeds: [ageEmbed], components: [buttons] });
    },
    async runInteraction(client, interaction) {
        await interaction.reply({ embeds: [ageEmbed], components: [buttons] });
    }
};