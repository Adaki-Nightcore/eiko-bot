module.exports = {
    name: 'compl',
    async runInteraction(client, interaction) {
        await interaction.member.roles.add('948740493704069226');
        await interaction.reply({ content: 'Vous avez pris le rôle **__compliqué__** !', ephemeral: true });
    }
};