module.exports = {
    name: 'celib',
    async runInteraction(client, interaction) {
        await interaction.member.roles.add('948740493704069227');
        await interaction.reply({ content: 'Vous avez pris le rôle **__célibataire__** !', ephemeral: true });
    }
};