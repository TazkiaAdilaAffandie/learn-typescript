/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */


type Attendance = {
    employeeId: string
    employeeName:string
    date: string
    checkinTime: string
    checkoutTime: string
    totalWorkinghours: number
    isPresent: boolean
}

const attendance1: Attendance = {
    employeeId: `ST039837`,
    employeeName: `Tazkia Adila Affandie`,
    date: `24-07-2026`,
    checkinTime: `07:00`,
    checkoutTime:`13:00`,
    totalWorkinghours: 6,
    isPresent: true,
}

const attendance2: Attendance = {
    employeeId: `ST039838`,
    employeeName: `Shabrina`,
    date: `24-04-2026`,
    checkinTime: `08:00`,
    checkoutTime: `13:00`,
    totalWorkinghours: 5,
    isPresent: false,
}

const attendance3: Attendance = {
    employeeId: `ST039839`,
    employeeName: `Intazar Lintang`,
    date:`24-07-2026`,
    checkinTime: `08:00`,
    checkoutTime:`13:00`,
    totalWorkinghours:6,
    isPresent: true,

}

console.log(`Employee ID ${attendance1.employeeId}`)
console.log(`Employee Name ${attendance1.employeeName}`)
console.log(`Date of the day ${attendance1.date}`)
console.log(`Check in Time ${attendance1.checkinTime}`)
console.log(`Check out Time ${attendance1.checkoutTime}`)
console.log(`Total Working Hours ${attendance1.totalWorkinghours}`)
console.log(`Status ${attendance1.isPresent}`)

console.log(`Employee ID ${attendance2.employeeId}`)
console.log(`Employee Name ${attendance2.employeeName}`)
console.log(`Date of the day ${attendance2.date}`)
console.log(`Check in Time ${attendance2.checkinTime}`)
console.log(`Check out Time ${attendance2.checkoutTime}`)
console.log(`Total Working Hours ${attendance2.totalWorkinghours}`)
console.log(`Status ${attendance2.isPresent}`)

console.log(`Employee ID ${attendance3.employeeId}`)
console.log(`Employee Name ${attendance3.employeeName}`)
console.log(`Date of the day ${attendance3.date}`)
console.log(`Check in Time ${attendance3.checkinTime}`)
console.log(`Check out Time ${attendance3.checkoutTime}`)
console.log(`Total Working Hours ${attendance3.totalWorkinghours}`)
console.log(`Status ${attendance3.isPresent}`)

