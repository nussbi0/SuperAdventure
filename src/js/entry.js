let player = new Player(10, 10, 20, 0, 1)

let playerHP = document.getElementById('player-HP')
let playerGold = document.getElementById('player-Gold')
let playerEXP = document.getElementById('player-EXP')
let playerLevel = document.getElementById('player-Level')

let text_location = document.getElementById('text-location')

let world = new World()

MoveTo(world.LocationById(world.LOCATION_ID_HOME))
player.Inventory.push(new InventoryItem(world.ItemById(world.ITEM_ID_RUSTY_SWORD), 1))

playerHP.innerHTML = player.CurrentHitPoints;
playerGold.innerHTML = player.Gold
playerEXP.innerHTML = player.ExperiencePoints
playerLevel.innerHTML = player.Level;

function MoveTo(newLocation) {
    player.CurrentLocation = newLocation

    text_location.value = newLocation.Name + '\r\n'
    text_location.value += newLocation.Description

    playerHP.innerHTML = player.CurrentHitPoints;
}

let btnGoNorth = document.getElementById('btn-go-north');
btnGoNorth.addEventListener('click', function(e) {
    MoveTo(player.CurrentLocation.LocationToNorth)
});