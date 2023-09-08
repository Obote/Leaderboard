const getScore = async () => {
  const scoreURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/7UyWMdCgHZ87wkTWCz0G/scores/';
  const response = await fetch(scoreURL);
  const data = await response.json();
  const gamesData = data.result;
  return gamesData;
};

export default getScore;
