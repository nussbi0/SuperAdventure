var player = new Player(10,10,20,0,1)

var playerHP = document.getElementById('player-HP')
var playerGold = document.getElementById('player-Gold')
var playerEXP = document.getElementById('player-EXP')
var playerLevel = document.getElementById('player-Level')

playerHP.innerHTML = player.CurrentHitPoints;
playerGold.innerHTML = player.Gold
playerEXP.innerHTML = player.ExperiencePoints
playerLevel.innerHTML = player.Level;

// var testButton = document.getElementById('test');
//     testButton.addEventListener('click', function(e) {
//         debugGame(player.CurrentHitPoints)
//     });

// function debugGame(data) {
//     var box = document.getElementById('debug-game');
//     box.innerHTML = data;
// }