
 // Find the form and run this arrow function when submitted
document.getElementById("resultForm").onsubmit = (e) => {

    e.preventDefault(); // Stop the page from refreshing

    // Get the student's name from the input field
    let name = document.getElementById("name").value.trim();

    // Get marks from each subject (input values are strings)
    let a = document.getElementById("english").value;
    let b = document.getElementById("math").value;
    let c = document.getElementById("computer").value;
    let d = document.getElementById("physics").value;
    let f = document.getElementById("urdu").value;

    // Find the message and result areas in HTML
    let msg = document.getElementById("message");
    let result = document.getElementById("result");

    // Check if the name or any marks field is empty
    if (!name || a === "" || b === "" || c === "" || d === "" || f === "") {

        msg.innerText = "Please fill all fields!"; // Show an error
        result.innerHTML = ""; // Clear the old result
        return; // Stop the function here
    }

    // Convert marks from strings into numbers
    a = Number(a);
    b = Number(b);
    c = Number(c);
    d = Number(d);
    f = Number(f);

    // Check if any subject has marks below 0 or above 100
    if (a < 0 || a > 100 || b < 0 || b > 100 ||
        c < 0 || c > 100 || d < 0 || d > 100 || f < 0 || f > 100) {

        msg.innerText = "Marks must be between 0 and 100!"; // Show error
        result.innerHTML = ""; // Clear the old result
        return; // Stop if marks are invalid
    }

    // Add all five subjects to get obtained marks
    let obtained = a + b + c + d + f;

    // Each subject is out of 100, so total marks are 500
    let total = 500;

    // Calculate percentage using division and multiplication
    let percentage = obtained / total * 100;

    // Assign grade according to the percentage
    let grade = percentage >= 80 ? "A" :
                percentage >= 70 ? "B" :
                percentage >= 60 ? "C" :
                percentage >= 50 ? "D" : "F";

    // Pass only if every subject has at least 40 marks
    let status = (a >= 40 && b >= 40 && c >= 40 &&
                  d >= 40 && f >= 40) ? "Pass" : "Fail";

    // Clear any previous error message
    msg.innerText = "";

    // Display the complete result inside the result element
    result.innerHTML = `
        <h6>Student Result</h6>
        <p>Name: ${name}</p>
        <p>Total Marks: ${total}</p>
        <p>Obtained Marks: ${obtained}</p>
        <p>Percentage: ${percentage.toFixed(2)}%</p>
        <p>Grade: ${grade}</p>
        <p>Status: ${status}</p>
    `;
};
