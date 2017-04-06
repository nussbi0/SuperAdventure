class RandomNumberGenerator {
    constructor(min, max){
        this.number = Math.round(Math.random()*(max - min) + min)
    }
}