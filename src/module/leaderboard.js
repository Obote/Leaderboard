const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/7UyWMdCgHZ87wkTWCz0G/scores/';

async function fetchLeaderboard() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (response.ok) {
      return data.result;
    } else {
      throw new Error('Failed to fetch leaderboard data');
    }
  } catch (error) {
    throw new Error('Error:', error);
  }
}

export { fetchLeaderboard };
