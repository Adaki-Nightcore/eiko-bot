module.exports = {
    name: 'couple',
    async runInteraction(client, interaction) {
        await interaction.member.roles.add('948740493704069228');
        await interaction.reply({ content: 'Vous avez pris le rôle **__couple__** !', ephemeral: true });
    }
};