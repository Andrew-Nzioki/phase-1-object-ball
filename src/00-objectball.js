function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}
gameObject()
function homeTeamName() {
  return gameObject()["home"]["teamName"];
}

console.log(homeTeamName());
// logs "Brooklyn Nets"

// Function to get the number of points scored for a player
function numPointsScored(playerName) {
  for (let team in gameObject) {
    if (gameObject[team].players[playerName]) {
      return gameObject[team].players[playerName].points;
    }
  }
}

// Function to get the shoe size for a player
function shoeSize(playerName) {
  for (let team in gameObject) {
    if (gameObject[team].players[playerName]) {
      return gameObject[team].players[playerName].shoe;
    }
  }
}

// Function to get an array of a team's colors
function teamColors(teamName) {
  for (let team in gameObject) {
    if (gameObject[team].teamName === teamName) {
      return gameObject[team].colors;
    }
  }
}

// Function to get an array of team names
function teamNames() {
  return [gameObject.home.teamName, gameObject.away.teamName];
}

// Function to get an array of jersey numbers for a team
function playerNumbers(teamName) {
  let numbers = [];
  for (let player in gameObject.home.players) {
    if (gameObject.home.players[player].teamName === teamName) {
      numbers.push(gameObject.home.players[player].number);
    }
  }
  for (let player in gameObject.away.players) {
    if (gameObject.away.players[player].teamName === teamName) {
      numbers.push(gameObject.away.players[player].number);
    }
  }
  return numbers;
}

// Function to get an object of a player's stats
function playerStats(playerName) {
  for (let team in gameObject) {
    if (gameObject[team].players[playerName]) {
      return gameObject[team].players[playerName];
    }
  }
}


// Call numPointsScored with player name "Jason Terry"
console.log(numPointsScored("Jason Terry")); // Output: 19

// Call shoeSize with player name "Ben Gordon"
console.log(shoeSize("Ben Gordon")); // Output: 15

// Call teamColors with team name "Brooklyn Nets"
console.log(teamColors("Brooklyn Nets")); // Output: ["Black", "White"]

// Call teamNames
console.log(teamNames()); // Output: ["Brooklyn Nets", "Charlotte Hornets"]

// Call playerNumbers with team name "Brooklyn Nets"
console.log(playerNumbers("Brooklyn Nets")); // Output: [0, 11, 31, 1, 30]

// Call playerStats with player name "Reggie Evans"
console.log(playerStats("Reggie Evans"));