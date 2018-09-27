type RankingInfo = [number, string, boolean];

let score: number = 10;
let playerName: string = "test";
let isQualified: boolean = true;

let allRankings: Array<RankingInfo> = [];

let ranking1: RankingInfo = [ 1, "foo", true];
let ranking2: RankingInfo = [ 2, "foo", false];

allRankings.push(ranking1);
allRankings.push(ranking2);
allRankings.push([3, "sam", true]);

// print only index values
for (let index in allRankings) {
    console.log(`for in : ${index}`);
}

printRankingInformation(allRankings);

/**
 * Print ranking information.
 * 
 * @param rankings 
 */
function printRankingInformation(rankings: Array<RankingInfo>): void {
    // print array elements using for loop
    for (let ranking of rankings) {
        console.log(`for of : ${ranking}`);
    }
}

export { RankingInfo, printRankingInformation };