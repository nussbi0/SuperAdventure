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