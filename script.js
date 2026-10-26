
let results = JSON.parse(localStorage.getItem("results")) || [],
    result = document.getElementById("result");

function showResults() {
    result.innerHTML = "";

    results.forEach((r, i) => {
        result.innerHTML += `
            <h6>Student Result</h6>
            <p>Name: ${r.name}</p>
            <p>Total Marks: ${r.total}</p>
            <p>Obtained Marks: ${r.obtained}</p>
            <p>Percentage: ${Number(r.percentage).toFixed(1)}%</p>
            <p>Grade: ${r.grade}</p>
            <p>Status: ${r.status}</p>
            <button class="btn btn-danger btn-sm" onclick="deleteResult(${i})">Delete</button>
            <hr>`;
    });

    if (results.length === 0) result.innerText = "No results yet.";
}

function deleteResult(i) {
    results.splice(i, 1);
    localStorage.setItem("results", JSON.stringify(results));
    showResults();
}

document.getElementById("resultForm").onsubmit = (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value.trim(),
        a = document.getElementById("english").valueAsNumber,
        b = document.getElementById("math").valueAsNumber,
        c = document.getElementById("computer").valueAsNumber,
        d = document.getElementById("physics").valueAsNumber,
        f = document.getElementById("urdu").valueAsNumber;

    let total = 500,
        obtained = a + b + c + d + f,
        percentage = obtained / total * 100,
        grade, status = "Pass";

    if (percentage >= 90) grade = "A+";
    else if (percentage >= 85) grade = "A";
    else if (percentage >= 80) grade = "B+";
    else if (percentage >= 75) grade = "B";
    else if (percentage >= 70) grade = "C+";
    else if (percentage >= 65) grade = "C";
    else if (percentage >= 55) grade = "D+";
    else if (percentage >= 40) grade = "D";
    else grade = "F";

    if (a < 40 || b < 40 || c < 40 || d < 40 || f < 40)
        status = "Fail";

    results.push({name, total, obtained, percentage, grade, status});
    localStorage.setItem("results", JSON.stringify(results));
    showResults();
};

showResults();
