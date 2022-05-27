module.exports = {
    name: 'homme',
    async runInteraction(client, interaction) {
        await interaction.member.roles.add('948740493725024310');
        await interaction.reply({ content: 'Vous avez pris le rôle **__homme__** !', ephemeral: true });
    }
};