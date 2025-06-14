const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        Completed: true
    }
]

  // Example course data
const course = [
    { name: "WDD 130 - Web Fundamentals", credits: 3, completed: true },
    { name: "WDD 131 - Dynamic Web Fundamentals", credits: 3, completed: true },
    { name: "WDD 231 - Web Frontend Development I", credits: 3, completed: true },
    { name: "CSE 121b - JavaScript Language", credits: 3, completed: false },
    { name: "CSE 110 - Introduction to Programming", credits: 2, completed: true},
    { name: "CSE 111 - Programming with functions", credits: 2, completed: false}
];

function renderCourses(filter) {
    let filteredCourses = courses;
    if (filter === "WDD") {
    filteredCourses = courses.filter(course => course.name.startsWith("WDD"));
    } else if (filter === "CSE") {
        filteredCourses = courses.filter(course => course.name.startsWith("CSE"));
}
const coursesDiv = document.getElementById("courses");
coursesDiv.innerHTML = filteredCourses.map(course => `
    <div class="course-card${course.completed ? ' completed' : ''}">
    <h3>${course.name}</h3>
    <p>Credits: ${course.credits}</p>
        ${course.completed ? '<span class="badge">Completed</span>' : ''}
    </div>
    `).join('');
    document.getElementById("course-count").textContent = `The total number of courses listed below is ${filteredCourses.length}`;

const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    document.getElementById("total-credits").textContent = `Total Credits: ${totalCredits}`;
}

    document.getElementById("all-courses-btn").addEventListener("click", () => renderCourses("ALL"));
    document.getElementById("wdd-courses-btn").addEventListener("click", () => renderCourses("WDD"));
    document.getElementById("cse-courses-btn").addEventListener("click", () => renderCourses("CSE"));

    renderCourses("ALL");