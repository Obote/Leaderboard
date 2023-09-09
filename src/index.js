import './style.css';

const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/7UyWMdCgHZ87wkTWCz0G/scores/';

const fetchLeaderboard = async () => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (response.ok) {
      const scoreList = document.getElementById('score-list');
      scoreList.innerHTML = '';

      data.result.forEach((score, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('score-item');
        listItem.innerHTML = `${index + 1}. ${score.user} - ${score.score}`;
        scoreList.appendChild(listItem);
      });
    } else {
      Error('Failed to fetch leaderboard data');
    }
  } catch (error) {
    Error('Error:', error);
  }
};

const handleSubmit = async (event) => {
  event.preventDefault();

  const playerName = document.getElementById('player-name').value;
  const playerScore = parseInt(document.getElementById('player-score').value, 10);

  if (playerName && !Number.isNaN(playerScore)) {
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
        Error('Failed to submit the score');
      }
    } catch (error) {
      Error('Error:', error);
    }
  }
};

document.querySelector('.refresh-button').addEventListener('click', fetchLeaderboard);
document.getElementById('score-form').addEventListener('submit', handleSubmit);

fetchLeaderboard();
