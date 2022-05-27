module.exports = {
    name: 'autre',
    async runInteraction(client, interaction) {
        await interaction.member.roles.add('948740493725024308');
        await interaction.reply({ content: 'Vous avez pris le rôle **__autre__** !', ephemeral: true });
    }
};