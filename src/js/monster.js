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