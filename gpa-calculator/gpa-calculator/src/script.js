let courses = [];

function calculateGPA() {
    const gradeInput = document.getElementById('grade').value.toUpperCase();
    const creditInput = parseInt(document.getElementById('credit').value);

    if (gradeInput === '' || isNaN(creditInput) || creditInput <= 0) {
        alert('Please enter valid grade and credit hours.');
        return;
    }

    courses.push({ grade: gradeInput, credit: creditInput });

    displayCourses();
    calculateResult();
}

function displayCourses() {
    const coursesContainer = document.getElementById('courses');
    coursesContainer.innerHTML = '';

    courses.forEach(course => {
        const courseDiv = document.createElement('div');
        courseDiv.classList.add('course');
        courseDiv.textContent = `${course.grade} - ${course.credit} credit(s)`;
        coursesContainer.appendChild(courseDiv);
    });
}

function calculateResult() {
    let totalPoints = 0;
    let totalCredits = 0;

    courses.forEach(course => {
        let points = 0;
        switch (course.grade) {
            case 'A':
                points = 4.0;
                break;
            case 'B':
                points = 3.0;
                break;
            case 'C':
                points = 2.0;
                break;
            case 'D':
                points = 1.0;
                break;
            case 'F':
                points = 0.0;
                break;
        }
        totalPoints += points * course.credit;
        totalCredits += course.credit;
    });

    const gpa = totalPoints / totalCredits;
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Your GPA: ${gpa.toFixed(2)}`;
}
