class CalculateVotes {
    private totalVoters: number;
    private validVotes: number;
    private whiteVotes: number;
    private nullVotes: number;

    constructor(totalVoters: number, validVotes: number, whiteVotes:number, nullVotes:number) {
        this.totalVoters = totalVoters;
        this.validVotes = validVotes;
        this.whiteVotes = whiteVotes;
        this.nullVotes = nullVotes;
    }

    calculateValidVotesPercent(): number {
        return (this.validVotes / this.totalVoters) * 100
    }

    calculateWhiteVotesPercent(): number {
        return (this.whiteVotes / this.totalVoters) * 100
    }

    calculateNullVotesPercent(): number {
        return (this.nullVotes / this.totalVoters) * 100
    }
}

const totalVoters = 1000;
const validVotes = 800;
const whiteVotes = 150;
const nullVotes = 50

const calculator = new CalculateVotes(totalVoters, validVotes, whiteVotes, nullVotes);

console.log('Percentual de votos válidos:' + calculator.calculateValidVotesPercent() + '%')
console.log('Percentual de votos brancos:' + calculator.calculateWhiteVotesPercent() + '%')
console.log('Percentual de votos nulos:' + calculator.calculateNullVotesPercent() + '%')