module.exports = {
    name: 'femme',
    async runInteraction(client, interaction) {
        await interaction.member.roles.add('948740493725024309');
        await interaction.reply({ content: 'Vous avez pris le rôle **__femme__** !', ephemeral: true });
    }
};