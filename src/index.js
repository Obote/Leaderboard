const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/7UyWMdCgHZ87wkTWCz0G/scores/';

async function fetchLeaderboard() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (response.ok) {
      const scoreList = document.getElementById('score-list');
      scoreList.innerHTML = '';

      data.result.forEach((score, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${index + 1}. ${score.user} - ${score.score}`;
        scoreList.appendChild(listItem);
      });
    } else {
      console.error('Failed to fetch leaderboard data');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

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
        document.getElementById('player-name').value = '';
        document.getElementById('player-score').value = '';

        fetchLeaderboard();
      } else {
        console.error('Failed to submit the score');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
}

document.querySelector('.refresh-button').addEventListener('click', fetchLeaderboard);
document.getElementById('score-form').addEventListener('submit', handleSubmit);

fetchLeaderboard();
