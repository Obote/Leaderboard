// index.js

import { fetchLeaderboard } from './module/leaderboard.js';
import { handleSubmit } from './module/form.js';

document.querySelector('.refresh-button').addEventListener('click', async () => {
  const leaderboardData = await fetchLeaderboard();
  updateLeaderboard(leaderboardData);
});

document.getElementById('score-form').addEventListener('submit', async (event) => {
  const leaderboardData = await handleSubmit(event);
  updateLeaderboard(leaderboardData);
});

function updateLeaderboard(leaderboardData) {
  const scoreList = document.getElementById('score-list');
  scoreList.innerHTML = '';

  leaderboardData.forEach((score, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `${index + 1}. ${score.user} - ${score.score}`;
    scoreList.appendChild(listItem);
  });
}

fetchLeaderboard().then((leaderboardData) => {
  updateLeaderboard(leaderboardData);
});
