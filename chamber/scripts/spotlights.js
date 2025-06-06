const coursesDiv = document.getElementById("gold-member");
coursesDiv.innerHTML = filteredCourses.map(course => `
    <div class="course-card${course.level=3 ? ' completed' : ''}">
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