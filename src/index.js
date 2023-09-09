import './style.css';
import Data from './module/data.js';
import addScore from './module/addscore.js';
import getScore from './module/getscore.js';

const formData = document.getElementById('score-form');
const refreshBtn = document.getElementById('submit-button');
const scoreList = document.getElementById('score-list');

formData.addEventListener('submit', async (e) => {
  e.preventDefault();
  const inputName = document.getElementById('player-name');
  const inputScore = document.getElementById('player-score');
  const name = inputName.value;
  const score = inputScore.value;
  const newData = new Data(name, score);
  await addScore(newData);
  document.getElementById('player-name').value = '';
  document.getElementById('player-score').value = '';
});

refreshBtn.addEventListener('click', () => {
  scoreList.innerHTML = '';
  getScore();
});

window.addEventListener('load', () => {
  scoreList.innerHTML = '';
  getScore();
});
