/**
 * A programming competition stores participants' scores in the following array.
 * 
 * 
 * Competition Rules
 * Gold Medal : score ≥ 95
 * Silver Medal : score 85–94
 * Bronze Medal : score 75–84
 * No Medal : below 75
 * 
 * 
 * Student Tasks
 * Using a loop, calculate:
 * - Number of Gold Medal winners
 * - Number of Silver Medal winners
 * - Number of Bronze Medal winners
 * - Number of students without medals
 * - Average competition score
 */


const scores: number[] = [
    98, 87, 76, 65, 92, 100, 81, 70, 89, 95, 60, 78, 84, 91, 73
]

let goldCount: number = 0
let silverCount: number = 0
let bronzeCount: number = 0
let noMedalCount: number = 0
let totalScore: number = 0

for (let i = 0; i < scores.length; i++) {
    totalScore += scores[i]

    if (scores[i] >= 95) {
        goldCount++
    } else if (scores[i] >= 85) {
        silverCount++
    } else if (scores[i] >= 75) {
        bronzeCount++
    } else {
        noMedalCount++
    }
}

const averageScore: number = totalScore / scores.length

console.log(`Gold Medal Winners: ${goldCount}`)
console.log(`Silver Medal Winners: ${silverCount}`)
console.log(`Bronze Medal Winners: ${bronzeCount}`)
console.log(`No Medal: ${noMedalCount}`)
console.log(`Average Score: ${averageScore.toFixed(2)}`)