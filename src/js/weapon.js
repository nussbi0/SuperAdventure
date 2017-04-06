class Weapon extends Item {
    constructor(id, name, name_pl, max_dmg, min_dmg){
        super(id, name, name_pl)
        this.MaximumDamage = max_dmg
        this.MinimumDamage = min_dmg
    }
}