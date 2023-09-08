import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  const scoreList = document.querySelector('.score-list');

  const LeaderBoardData = [
    { name: 'Manchester City', score: 12 },
    { name: 'Tottenham Hotspur', score: 10 },
    { name: 'Liverpool', score: 10 },
    { name: 'Westhan United', score: 10 },
  ];

  const displayLeaderBoard = () => {
    scoreList.innerHTML = '';

    LeaderBoardData.forEach((team) => {
      const listItem = document.createElement('li');
      listItem.className = 'score-item';
      listItem.textContent = `${team.name}: ${team.score}`;
      scoreList.appendChild(listItem);
    });
  };
  displayLeaderBoard();
});