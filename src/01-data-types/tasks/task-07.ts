/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

type Registration = {
    studentId: string
    fullName: string
    gradeLevel: number
    courseId: string
    courseTitle: string
    instructorName: string
    totalLearningHours: number
    registrationDate: string
    isPaymentCompleted: boolean
}

const registration1: Registration = {
    studentId: `ST2026010`,
    fullName: `Rangga Pratama`,
    gradeLevel: 11,
    courseId: `CRS-101`,
    courseTitle: `Introduction to TypeScript`,
    instructorName: `Fajar Nugroho`,
    totalLearningHours: 20,
    registrationDate: `2026-07-20`,
    isPaymentCompleted: true,
}

const registration2: Registration = {
    studentId: `ST2026011`,
    fullName: `Maya Anindya`,
    gradeLevel: 12,
    courseId: `CRS-102`,
    courseTitle: `Web Development Fundamentals`,
    instructorName: `Sari Wulandari`,
    totalLearningHours: 30,
    registrationDate: `2026-07-21`,
    isPaymentCompleted: false,
}

const registration3: Registration = {
    studentId: `ST2026012`,
    fullName: `Doni Setiawan`,
    gradeLevel: 10,
    courseId: `CRS-103`,
    courseTitle: `Python for Beginners`,
    instructorName: `Fajar Nugroho`,
    totalLearningHours: 25,
    registrationDate: `2026-07-22`,
    isPaymentCompleted: true,
}

console.log(`Student ID ${registration1.studentId}`)
console.log(`Full Name of the Student ${registration1.fullName}`)
console.log(`Grade Level of the Student ${registration1.gradeLevel}`)
console.log(`Course ID ${registration1.courseId}`)
console.log(`Course Title ${registration1.courseTitle}`)
console.log(`Instructor Name of the Course ${registration1.instructorName}`)
console.log(`Total Learning Hours of the Course ${registration1.totalLearningHours}`)
console.log(`Registration Date ${registration1.registrationDate}`)
console.log(`Payment Status ${registration1.isPaymentCompleted}`)

console.log(`Student ID ${registration2.studentId}`)
console.log(`Full Name of the Student ${registration2.fullName}`)
console.log(`Grade Level of the Student ${registration2.gradeLevel}`)
console.log(`Course ID ${registration2.courseId}`)
console.log(`Course Title ${registration2.courseTitle}`)
console.log(`Instructor Name of the Course ${registration2.instructorName}`)
console.log(`Total Learning Hours of the Course ${registration2.totalLearningHours}`)
console.log(`Registration Date ${registration2.registrationDate}`)
console.log(`Payment Status ${registration2.isPaymentCompleted}`)

console.log(`Student ID ${registration3.studentId}`)
console.log(`Full Name of the Student ${registration3.fullName}`)
console.log(`Grade Level of the Student ${registration3.gradeLevel}`)
console.log(`Course ID ${registration3.courseId}`)
console.log(`Course Title ${registration3.courseTitle}`)
console.log(`Instructor Name of the Course ${registration3.instructorName}`)
console.log(`Total Learning Hours of the Course ${registration3.totalLearningHours}`)
console.log(`Registration Date ${registration3.registrationDate}`)
console.log(`Payment Status ${registration3.isPaymentCompleted}`)

