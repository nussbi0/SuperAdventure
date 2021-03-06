class RandomNumberGenerator {
    constructor(min, max){
        this.number = Math.round(Math.random()*(max - min) + min)
    }
}
class Item {
    constructor(id, name, name_pl){
        this.ID = id
        this.Name = name
        this.NamePlural = name_pl
    }
}
class LivingCreature {
    constructor(hp, max_hp){
        this.MaximumHitPoints = max_hp
        this.CurrentHitPoints = hp
    }
}
class GameLocation {
    constructor(id, name, desc){
        this.ID = id
        this.Name = name
        this.Description = desc
        
        this.ItemRequiredToEnter = {}
        this.QuestAvailableHere = {}
        this.MonsterLivingHere = {}
        this.LocationToNorth = {}
        this.LocationToEast = {}
        this.LocationToSouth = {}
        this.LocationToWest = {}
    }
}
class Monster extends LivingCreature {
    constructor(id, name, hp, max_hp, max_dmg, rew_gold, rew_exp){
        super(hp, max_hp)
        this.ID = id
        this.Name = name
        this.MaximumDamage = max_dmg
        this.RewardExperiencePoints = rew_exp
        this.RewardGold = rew_gold

        this.LootTable = []
    }
}
class Quest {
    constructor(id, name, desc, rew_exp, rew_gold, rew_item){
        this.ID = id
        this.Name = name
        this.Description = desc
        this.RewardExperiencePoints = rew_exp
        this.RewardGold = rew_gold

        this.RewardItem = rew_item
        this.QuestCompletionItems = []
    }
}
class Weapon extends Item {
    constructor(id, name, name_pl, max_dmg, min_dmg){
        super(id, name, name_pl)
        this.MaximumDamage = max_dmg
        this.MinimumDamage = min_dmg
    }
}
class Player extends LivingCreature {
    constructor(hp, max_hp, gold, exp, lvl){
        super(hp, max_hp)
        this.Gold = gold
        this.ExperiencePoints = exp
        this.Level = lvl

        this.CurrentLocation = {}
        this.Inventory = []
        this.Quests = []
    }
}
class HealingPotion extends Item {
    constructor(id, name, name_pl, amtheal){
        super(id, name, name_pl)
        this.AmountToHeal = amtheal
    }
}
class InventoryItem {
    constructor(details = null, quantity){
        this.Details = details
        this.Quantity = quantity
    }
}
class LootItem {
    constructor(details = null, drp_prc, isdefault){
        this.Details = details
        this.DropPercentage = drp_prc
        this.IsDefaultItem = isdefault
    }
}
class PlayerQuest {
    constructor(details = null, iscompl){
        this.Details = details
        this.IsCompleted = iscompl
    }
}
class QuestCompletionItem {
    constructor(details = null, quantity){
        this.Details = details
        this.Quantity = quantity
    }
}
class World {
    constructor(){
        this.Items = []
        this.Monsters = []
        this.Quests = []
        this.Locations = []

        this.ITEM_ID_RUSTY_SWORD = 1;
        this.ITEM_ID_RAT_TAIL = 2;
        this.ITEM_ID_PIECE_OF_FUR = 3;
        this.ITEM_ID_SNAKE_FANG = 4;
        this.ITEM_ID_SNAKESKIN = 5;
        this.ITEM_ID_CLUB = 6;
        this.ITEM_ID_HEALING_POTION = 7;
        this.ITEM_ID_SPIDER_FANG = 8;
        this.ITEM_ID_SPIDER_SILK = 9;
        this.ITEM_ID_ADVENTURER_PASS = 10;

        this.MONSTER_ID_RAT = 1;
        this.MONSTER_ID_SNAKE = 2;
        this.MONSTER_ID_GIANT_SPIDER = 3;

        this.QUEST_ID_CLEAR_ALCHEMIST_GARDEN = 1;
        this.QUEST_ID_CLEAR_FARMERS_FIELD = 2;

        this.LOCATION_ID_HOME = 1;
        this.LOCATION_ID_TOWN_SQUARE = 2;
        this.LOCATION_ID_GUARD_POST = 3;
        this.LOCATION_ID_ALCHEMIST_HUT = 4;
        this.LOCATION_ID_ALCHEMISTS_GARDEN = 5;
        this.LOCATION_ID_FARMHOUSE = 6;
        this.LOCATION_ID_FARM_FIELD = 7;
        this.LOCATION_ID_BRIDGE = 8;
        this.LOCATION_ID_SPIDER_FIELD = 9;

        this.PopulateItems()
        this.PopulateMonsters()
        this.PopulateQuests()
        this.PopulateLocations()
    }

    static get Location_Id_Home(){
        return this.LOCATION_ID_HOME
    }

    PopulateItems(){
        this.Items.push(new Weapon(this.ITEM_ID_RUSTY_SWORD, "Rusty sword", "Rusty swords", 5, 0))
        this.Items.push(new Weapon(this.ITEM_ID_CLUB, "Club", "Clubs", 10, 3))
        this.Items.push(new Item(this.ITEM_ID_RAT_TAIL, "Rat tail", "Rat tails"))
        this.Items.push(new Item(this.ITEM_ID_PIECE_OF_FUR, "Piece of fur", "Pieces of fur"))
        this.Items.push(new Item(this.ITEM_ID_SNAKE_FANG, "Snake fang", "Snake fangs"))
        this.Items.push(new Item(this.ITEM_ID_SNAKESKIN, "Snake skin", "Snake skins"))
        this.Items.push(new Item(this.ITEM_ID_SPIDER_FANG, "Spider fang", "Spider fangs"))
        this.Items.push(new Item(this.ITEM_ID_SPIDER_SILK, "Spider silk", "Spider silks"))
        this.Items.push(new Item(this.ITEM_ID_ADVENTURER_PASS, "Adventurer pass", "Adventurer passes"))
        this.Items.push(new HealingPotion(this.ITEM_ID_HEALING_POTION, "Healing potion", "Healing potions", 5))
    }

    PopulateMonsters(){
        let rat = new Monster(this.MONSTER_ID_RAT, "Rat", 5, 5, 10, 3, 3)
        rat.LootTable.push(new LootItem(this.ItemById(this.ITEM_ID_RAT_TAIL), 75, false))
        rat.LootTable.push(new LootItem(this.ItemById(this.ITEM_ID_PIECE_OF_FUR), 75, true))

        let snake = new Monster(this.MONSTER_ID_SNAKE, "Snake", 5, 5, 10, 3, 3)
        snake.LootTable.push(new LootItem(this.ItemById(this.ITEM_ID_SNAKE_FANG), 75, false))
        snake.LootTable.push(new LootItem(this.ItemById(this.ITEM_ID_SNAKESKIN), 75, true))

        let giantSpider = new Monster(this.MONSTER_ID_GIANT_SPIDER, "Giant Spider", 20, 20, 40, 10, 10)
        giantSpider.LootTable.push(new LootItem(this.ItemById(this.ITEM_ID_SPIDER_FANG), 75, true))
        giantSpider.LootTable.push(new LootItem(this.ItemById(this.ITEM_ID_SPIDER_SILK), 75, false))

        this.Monsters.push(rat, snake, giantSpider)
    }

    PopulateQuests(){
        let clearAlchemistGarden = new Quest(this.QUEST_ID_CLEAR_ALCHEMIST_GARDEN, "Clear the alchemist's garden", "Kill rats in the alchemist's garden and bring back 3 rat tails. You will receive a healing potion and 10 gold pieces.", 20, 10)
        clearAlchemistGarden.QuestCompletionItems.push(new QuestCompletionItem(this.ItemById(this.ITEM_ID_RAT_TAIL), 3))
        clearAlchemistGarden.RewardItem = this.ItemById(this.ITEM_ID_HEALING_POTION)

        let clearFarmersField = new Quest(this.QUEST_ID_CLEAR_FARMERS_FIELD, "Clear the farmer's field", "Kill snakes in the farmer's field and bring back 3 snake fangs. You will receive an adventurer's pass and 20 gold pieces.", 20, 20)
        clearFarmersField.QuestCompletionItems.push(new QuestCompletionItem(this.ItemById(this.ITEM_ID_SNAKE_FANG), 3))
        clearFarmersField.RewardItem = this.ItemById(this.ITEM_ID_ADVENTURER_PASS)

        this.Quests.push(clearAlchemistGarden, clearFarmersField)
    }

    PopulateLocations(){
        let home = new GameLocation(this.LOCATION_ID_HOME, "Home", "Your House. You really need to clean up the place.")
        let townSquare = new GameLocation(this.LOCATION_ID_TOWN_SQUARE, "Town square", "You see a fountain.")
        let alchemistHut = new GameLocation(this.LOCATION_ID_ALCHEMIST_HUT, "Alchemist's hut", "There are many strange plants on the shelves.")
        alchemistHut.QuestAvailableHere = this.QuestById(this.QUEST_ID_CLEAR_ALCHEMIST_GARDEN)

        home.LocationToNorth = townSquare

        townSquare.LocationToNorth = alchemistHut
        townSquare.LocationToSouth = home

        this.Locations.push(home, townSquare, alchemistHut)
    }

    ItemById(id) {
        for(let i of this.Items) {
            if(i.ID==id){
                return i
            }
        }
    }

    MonsterById(id) {
        for(let i of this.Monsters) {
            if(i.ID==id){
                return i
            }
        }
    }

    QuestById(id) {
        for(let i of this.Quests) {
            if(i.ID==id){
                return i
            }
        }
    }

    LocationById(id) {
        for(let i of this.Locations) {
            if(i.ID==id){
                return i
            }
        }
    }
}
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