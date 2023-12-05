class User {
    constructor() {
        this.rank = -8;
        this.progress = 0;
    }

    #validRanks = [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8];

    #getDifferenceInRanks(rank1, rank2) {
        return Math.abs(this.#validRanks.indexOf(rank1) - this.#validRanks.indexOf(rank2));
    }

    incProgress(activityRank) {
        if (!this.#validRanks.includes(activityRank)) {
            throw new Error('Invalid Rank!');
        }

        if (activityRank == this.rank) {
            this.progress += 3;
        } else if (this.#validRanks.indexOf(activityRank) + 1 == this.#validRanks.indexOf(this.rank)) {
            this.progress += 1;
        } else if (this.#validRanks.indexOf(activityRank) + 2 > this.#validRanks.indexOf(this.rank)) {
            this.progress += 10 * Math.pow(this.#getDifferenceInRanks(activityRank, this.rank), 2);
        }

        while (this.progress >= 100 && this.rank < 8) {
            this.rank = this.#validRanks[this.#validRanks.indexOf(this.rank) + 1]
            this.progress -= 100;
        }

        if (this.rank == 8) {
            this.progress = 0;
        }
    }
}