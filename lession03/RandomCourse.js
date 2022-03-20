const courses = [
    { course: "c4e" },
    { course: "ci" },
    { course: "web57" }
]

function RandomCourse() {
    const course = courses[Math.floor(Math.random() * courses.length)];
    return course;
}

module.exports = RandomCourse;