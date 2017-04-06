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