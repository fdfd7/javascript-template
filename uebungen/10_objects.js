function averageGrade(report) {
    let a = 0
    let round = 0
    for (const index of report) {
        a = a + index.grade
        round = round + 1
        if (round == report.length) {
            return a / report.length
        }
    }
}
function bestGradePosition(report) {
    let bestCurrentGradePosition = 0
    let index = 1
    while (index < report.length) {
        if (report[bestCurrentGradePosition].grade > report[index].grade) {
            bestCurrentGradePosition = index
        }
        if (index == report.length - 1) {
            return bestCurrentGradePosition
        }
        index = index + 1
    }
}

export function analyzeGrades(report) {
    let summary = {
        averageGrade: averageGrade(report),
        bestSubject: {
            subject: report[bestGradePosition(report)].subject,
            grade: report[bestGradePosition(report)].grade,
        },
    }
    return summary
}
