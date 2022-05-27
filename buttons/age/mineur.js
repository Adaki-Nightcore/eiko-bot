module.exports = {
    name: 'mineur',
    async runInteraction(client, interaction) {
        await interaction.member.roles.add('948740493704069230');
        await interaction.reply({ content: 'Vous avez pris le rôle **__mineur__** !', ephemeral: true });
    }
};