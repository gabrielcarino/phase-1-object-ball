function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["black", "white"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1
        }
      }
    },
    away: {
      teamName: "Charolette Hornets",
      colors: ["turquoise", "purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12
        }
      }
    }
  }
};

function homeTeam() {
  return gameObject().home
};

function awayTeam() {
  return gameObject().away
};

function players() {
  return Object.assign({}, homeTeam().players, awayTeam().players)
};

function teamSelector(team) {
  if (homeTeam().teamName === team) {
    return 'home'
  }
  else if (awayTeam().teamName === team) {
    return 'away'
  }
};

function numPointsScored(player) {
  return players()[player].points
};

function shoeSize(player) {
  return players()[player].shoe
};

function playerStats(player) {
  return players()[player]
};

function teamNames() {
  return [homeTeam().teamName, awayTeam().teamName]
};

function teamColors(team) {
  if (teamSelector(team) === 'home') {
    return homeTeam().colors
  }
  else if (teamSelector(team) === 'away') {
    return awayTeam().colors
  }
};

function playerNumbers(team) {
  const teamNumbers = []
  if (teamSelector(team) === 'home') {
    const playerObj = homeTeam().players
    for (let playerKey in playerObj) {
        teamNumbers.push(playerObj[playerKey].number)
    }
  }
  else if (teamSelector(team) === 'away') {
    const playerObj = awayTeam().players
    for (let playerKey in playerObj) {
        teamNumbers.push(playerObj[playerKey].number)
    }
  }
  return teamNumbers;
};

function bigShoeRebounds() {
  const shoes = [];
  for (const playerObj in players()) {
    shoes.push(shoeSize(playerObj))
  }
  const max = Math.max(...shoes);
  let bigFoot = ''
  for (let playerKey in players()) {
    if (players()[playerKey].shoe === max) {
    bigFoot += playerKey;
    console.log('This is the playerKey ', playerKey);
    console.log(bigFoot);
    }
  }
  return players()[bigFoot].rebounds
}