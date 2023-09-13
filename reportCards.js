const n = parseInt(readline());
for (let i = 0; i < n; i++) {
    const [student, ...grades] = readline().split(' ')

    let total = grades.reduce((a,c) => a + +c, 0)

    let avg = (total / grades.length).toFixed(2)
    
    let grade = ''

    if(avg >= 90) grade = 'A'
    else if(avg >= 80) grade = 'B'
    else if(avg >= 70) grade = 'C'
    else if(avg >= 60) grade = 'D'
    else grade = 'F'

    console.log(student, avg, grade)
}

