// 1 metNumberOfGrades: return the number of grades 
function getNumberOfGrades(grades) {
  for (i = 0; i < grades.length; i++) {
    return grades[i]
  }
}
console.log(getNumberOfGrades([12, 19, 10, 4, 15, 9]), ("getNumberOfGrades"))

// i used .length to get the amount of items in the array
//output: 6 getNumberOfGrades

//2 getSumGrades: return the sum of all the grades.
function getSumGrades(grades) {
  let sum = 0
  for (i = 0; i < grades.length; i++) {
    sum += grades[i]
  }
  return sum
}
console.log(getSumGrades([12, 19, 10, 4, 15, 9]), ("getSumGrades"))

// i did sum += grades[i] to get the sum of all grades
//output: 69 getSumGrades

//3 getAverageValue: return the average value of all grades
function getAverageValue(grades) {
  let average = 0
  let sum = 0
  let gradeLength = []
  for (i = 0; i < grades.length; i++) {
    gradeLength = grades.length
    sum += grades[i]
    average = sum / gradeLength
  }
  return average
}
console.log(getAverageValue([12, 19, 10, 4, 15, 9]), ("getAverageValue"))

// i created 3 different variables
// 1. sum += grades is to = the sum
// 2. gradeLength is to create a new empty array.
// 3. gradeLength = grades.length for the value of total items in the new array
// 4. sum += grades is for getting the sum of the entire array.
// 5. average= sum / gradeLength to get the average of all the grades
// the gradeLength seemed pointless at first but that was the only way i would get a correct decimal... couldve used math.floor but it worked without.
// output: 11.5 getAverageValue

//4 getPassingGrades: return all passing grades (10 and above).
function getPassingGrades(grades) {
  let grade = []
  for (i = 0; i < grades.length; i++) {
    if (grades[i] > 9) {
      grade.push(grades[i])
    }
  }
  return grade
}
console.log(getPassingGrades([12, 19, 10, 4, 15, 9]), ("getPassingGrades"))

//  grades for a new empty array
// grades[i] > 9 to get any items with passing grades(10 or greater).
// grade.push to create a new array containing passing grades only
//output: [12, 19, 10, 15] getPassingGrades

//5 getFailingGrades: return all failing grades (9 and below).
function getFailingGrades(grades) {
  let grade = []
  for (i = 0; i < grades.length; i++) {
    if (grades[i] < 10) {
      grade.push(grades[i])
    }
  }
  return grade
}
console.log(getFailingGrades([12, 19, 10, 4, 15, 9]), ("getFailingGrades"))
// same thing as problem above exept flipped if statment
// output: [ 4, 9 ] getFailingGrades

//6 getRaisedGrades: should return all the grades raised by 1 (grades should not exceed 20)
function getRaisedGrades(grades) {
  let addOne = []
  for (i = 0; i < grades.length; i++) {
    if (grades[i] === grades[i]) {
      addOne.push(grades[i] + 1)
    }
  }
  return addOne
}
console.log(getRaisedGrades([12, 19, 10, 4, 15, 9]), ("getRaisedGrades"))
//  addOne = empty array
// my if statement is so i can take the entire grades array..
//questioning my own reasoning, just went back into the code,
// the grades===grades is completely usless. oh well ill leave it here to show my thought process
// addOne.push to greate a new array with the existing grades[i] array adding + 1 to each item
//output: [13, 20, 11, 5, 16, 10] getRaisedGrades
