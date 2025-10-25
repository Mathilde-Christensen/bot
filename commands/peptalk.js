const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('peptalk')
    .setDescription('Få en kort peptalk'),

  async execute(interaction) {
    const lines = [
      'Du gør det godt. Tag ét skridt mere.',
      'Det er okay at starte småt.',
      'Fokusér på næste handling, ikke hele planen.',
      'Du har klaret sværere ting før.',
      'Lyt til din mavefornemmelse og fortsæt.',
      'Hold en kort pause og prøv igen.',
      'Du lærer, hver gang du prøver.',
      'Bed om hjælp, hvis du har brug for det.'
    ];

    const msg = lines[Math.floor(Math.random() * lines.length)];
    await interaction.reply(msg);
  },
};
