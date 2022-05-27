const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'majeur',
    async runInteraction(client, interaction) {
        await interaction.member.roles.add('948740493725024306');
        await interaction.reply({ content: 'Vous avez pris le rôle **__majeur__** !', ephemeral: true });
    }
};