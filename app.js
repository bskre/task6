 const getLetterGrade = (score) => (
    60 > score? 'F':
    70 > score? 'D':
    80 > score? 'C':
    90 > score? 'B': 'A'
 )

const hasPassed = (score) => score >= 60

const getFeedback = (grade) => (
    'A' == grade? "Excellent work":
    'F' == grade? "Keep practicing": "You passed"
)

function createGradeReport(name, score){
    const grade = getLetterGrade(score)

    return {name: name,
    score: score,
    grade: grade,
    passed: hasPassed(score),
    feedback: getFeedback(grade)}}

console.log(createGradeReport('Ava', 92));
console.log(createGradeReport('Noah', 48));
console.log(createGradeReport('Mina', 75));
console.log(createGradeReport('Sam', 60));