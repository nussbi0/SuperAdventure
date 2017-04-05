class Player {
    constructor(){
        this.CurrentHitPoints = 10
        this.MaximumHitPoints = 10
        this.Gold = 20
        this.ExperiencePoints = 0
        this.Level = 1
    }
}
var player = new Player()

var playerHP = document.getElementById('player-HP')
var playerGold = document.getElementById('player-Gold')
var playerEXP = document.getElementById('player-EXP')
var playerLevel = document.getElementById('player-Level')

playerHP.innerHTML = player.CurrentHitPoints
playerGold.innerHTML = player.Gold
playerEXP.innerHTML = player.ExperiencePoints
playerLevel.innerHTML = player.Level
// var testButton = document.getElementById('test');
//     testButton.addEventListener('click', function(e) {
//         debugGame(player.CurrentHitPoints)
//     });

// function debugGame(data) {
//     var box = document.getElementById('debug-game');
//     box.innerHTML = data;
// }