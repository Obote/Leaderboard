import { fetchLeaderboard } from './leaderboard.js';

async function handleSubmit(event) {
  event.preventDefault();

  const playerName = document.getElementById('player-name').value;
  const playerScore = parseInt(document.getElementById('player-score').value, 10);

  if (playerName && !isNaN(playerScore)) {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: playerName, score: playerScore }),
      });

      if (response.ok) {
        // Clear form fields
        document.getElementById('player-name').value = '';
        document.getElementById('player-score').value = '';

        // Fetch updated leaderboard data
        const leaderboardData = await fetchLeaderboard();
        return leaderboardData;
      } else {
        throw new Error('Failed to submit the score');
      }
    } catch (error) {
      throw new Error('Error:', error);
    }
  }
}

export { handleSubmit };
