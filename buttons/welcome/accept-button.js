const { MessageEmbed } = require("discord.js");

module.exports = {
  name: 'accept-button',
  async runInteraction(client, interaction) {
      let embed = new MessageEmbed()
      .setTitle('__Serveur Adakou__:')
      .setDescription(`
        **Merci d'avoir accepté le règlement du serveur Adakou, n'hésite pas a inviter tous tes amis sur notre serveur !
        L'équipe Adakou te souhaite une bonne aventure sur notre serveur.** `)
      .setImage('https://discord.com/channels/941746802149949541/975585014500720672/980261238556741693')
      await interaction.member.send({embeds: [embed]})
      await interaction.member.roles.add('948740493725024313');
      await interaction.reply({ content: 'Vous avez accepté les règles! Vous pouvez maintenant accéder au serveur, SO COMMENT!', ephemeral: true });
  }
};