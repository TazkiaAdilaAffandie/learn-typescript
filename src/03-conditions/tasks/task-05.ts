/**
 * A university is selecting students for a full scholarship.
 * The first screening requires:
 *  - GPA ≥ 3.75
 *  - Family income < Rp5,000,000
 * 
 * If the student passes the first screening, the university performs a second screening.
 * The second screening requires:
 *  - Competition participation ≥ 3
 *  - No disciplinary violations
 *  - Administrative documents are complete
 * 
 * Only students who pass both screening stages receive the scholarship.
 * Student information:
 * | Information             | Value         |
 * | ----------------------- | ------------- |
 * | Student Name            | Fajar Hidayat |
 * | GPA                     | 3.86          |
 * | Family Income           | 4200000       |
 * | Competition Count       | 4             |
 * | Has Disciplinary Record | No            |
 * | Documents Complete      | Yes           |
 * 
 * Display one of the following messages:
 *  - Scholarship Approved
 *  - Passed First Screening, but Failed Second Screening
 *  - Passed First Screening, but Failed Second Screening
 * 
 * Student Tasks
 *  - Declare all variables.
 *  - Implement the first screening.
 *  - Implement the second screening only if the first screening is passed.
 *  - Display the correct result.
 */

const studentName: string = `Fajar Hidayat`
const gpa: number = 3.86
const familyIncome: number = 4200000
const competitionCount: number = 4
const hasDisciplinaryRecord: boolean = false
const documentsComplete: boolean = true

let resultMessage: string = ``


const passedFirstScreening: boolean = gpa >= 3.75 && familyIncome < 5000000

if (passedFirstScreening) {
    const passedSecondScreening: boolean =
        competitionCount >= 3 &&
        hasDisciplinaryRecord === false &&
        documentsComplete === true

    if (passedSecondScreening) {
        resultMessage = `Scholarship Approved`
    } else {
        resultMessage = `Passed First Screening, but Sadly Failed Second Screening`
    }
} else {
    resultMessage = `Failed First Screening`
}

console.log(`Student Name: ${studentName}`)
console.log(`GPA: ${gpa}`)
console.log(`Family Income: Rp${familyIncome}`)
console.log(`Competition Count: ${competitionCount}`)
console.log(`Disciplinary Record: ${hasDisciplinaryRecord ? "Yes" : "No"}`)
console.log(`Documents Complete: ${documentsComplete ? "Yes" : "No"}`)
console.log(`Result: ${resultMessage}`)