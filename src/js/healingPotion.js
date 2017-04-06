class HealingPotion extends Item {
    constructor(id, name, name_pl, amtheal){
        super(id, name, name_pl)
        this.AmountToHeal = amtheal
    }
}