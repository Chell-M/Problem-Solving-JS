//1. getNumberOfGrades should return the number of grades.
const getNumberOfGrades = grades => grades.length

console.log(getNumberOfGrades([12, 19, 10, 4, 15, 9]))

//2. getSumGrades should return the sum of all the grades.
const getSumGrades = grades => {
  let sum = 0
  grades.forEach(grade => sum += grade)
  return sum

}
console.log(getSumGrades([12, 19, 10, 4, 15, 9]))

//3. getAverageValue should return the average value of all grades 
const getAverageValue = grades => getSumGrades(grades) / grades.length

console.log(getAverageValue([12, 19, 10, 4, 15, 9]))

//4. getPassingGrades should return all passing grades (10 and above).
const getPassingGrades = grades => {
  return grades.filter(grade => grade >= 10)
}

console.log(getPassingGrades([12, 19, 10, 4, 15, 9]))

//5. getFailingGrades should return all failing grades (9 and below). 
const getFailingGrades = grades => {
  return grades.filter(grade => grade < 10)
}

console.log(getFailingGrades([12, 19, 10, 4, 15, 9]))

//6. getRaisedGrades should return all the grades raised by 1 
const getRaisedGrades = grades => {
  return grades.map(grade => grade + 1)
}

console.log(getRaisedGrades([12, 19, 10, 4, 15, 9]))
