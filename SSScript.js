
/* When the form is submitted, run this function */
document.getElementById("resultForm").onsubmit = function(e) {

    // Stop the page from refreshing after form submission
    e.preventDefault();

    // Get the student's name and remove extra spaces
    let name = document.getElementById("name").value.trim();

    // Get marks directly as numbers
    // valueAsNumber returns a number, or NaN if the field is empty
    let a = document.getElementById("english").valueAsNumber;
    let b = document.getElementById("math").valueAsNumber;
    let c = document.getElementById("computer").valueAsNumber;
    let d = document.getElementById("physics").valueAsNumber;
    let f = document.getElementById("urdu").valueAsNumber;

    // Get the HTML elements where messages and results will appear
    let msg = document.getElementById("message");
    let result = document.getElementById("result");

    // Check if the name or any marks are missing
    // isNaN() returns true when a mark is not a valid number
    if (!name || isNaN(a) || isNaN(b) || isNaN(c) ||
        isNaN(d) || isNaN(f)) {

        // Show an error message
        msg.innerText = "Please fill all fields!";

        // Clear any previous result
        result.innerHTML = "";

        // Stop running the function
        return;
    }

    // Check whether any subject has marks below 0 or above 100
    if (a < 0 || a > 100 || b < 0 || b > 100 ||
        c < 0 || c > 100 || d < 0 || d > 100 ||
        f < 0 || f > 100) {

        // Tell the user the allowed marks range
        msg.innerText = "Marks must be between 0 and 100!";

        // Clear the previous result
        result.innerHTML = "";

        // Stop the function
        return;
    }

    // Maximum marks are 100 for each of 5 subjects
    let total = 500;

    // Add all subject marks together
    let obtained = a + b + c + d + f;

    // Calculate percentage using the percentage formula
    let percentage = (obtained / total) * 100;

    // Create a variable to store the grade
    let grade;

    // Assume the student passes unless a subject mark is below 40
    let status = "Pass";

    // Decide the grade according to the percentage
    if (percentage >= 80)
        grade = "A";
    else if (percentage >= 70)
        grade = "B";
    else if (percentage >= 60)
        grade = "C";
    else if (percentage >= 50)
        grade = "D";
    else
        grade = "F";

    // If even one subject has less than 40 marks, the student fails
    if (a < 40 || b < 40 || c < 40 || d < 40 || f < 40)
        status = "Fail";

    // Remove any old error message
    msg.innerText = "";

    // Display the student's complete result on the page
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
