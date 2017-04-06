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