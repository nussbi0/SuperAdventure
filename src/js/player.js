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