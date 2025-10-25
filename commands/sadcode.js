const { SlashCommandBuilder } = require('discord.js');

const SONGS = [
  // Smid dine egne Spotify-track-links her (1 pr. linje)
  // Eksempler:
  'https://open.spotify.com/track/3oEkrIfXfSh9zGnEIN8hQ9',
  'https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b',
  'https://open.spotify.com/track/6M6N6YExKyWi3pCKdoPlcJ',
  'https://open.spotify.com/track/2Rk4JlNc2TPmZe2af99d45'
];

module.exports = {
  data: new SlashCommandBuilder()
    .setName('sadcode')
    .setDescription('Få en tilfældig sang fra din kodekrise-liste'),

  async execute(interaction) {
    if (SONGS.length === 0) {
      return interaction.reply({ content: 'Der er ingen sange i listen endnu.', ephemeral: true });
    }
    const pick = SONGS[Math.floor(Math.random() * SONGS.length)];
    await interaction.reply(`Her er en sang til dig:\n${pick}`);
  },
};
