document.getElementById("submitData").addEventListener("click", function() {
    const jsonData = document.getElementById("jsonInput").value;
    try {
        const parsedData = JSON.parse(jsonData); // Parse the JSON data
        const { studentNames, studentMarks } = extractData(parsedData); // Extract names and marks
        createChart(studentNames, studentMarks);  // Create the chart once data is processed
    } catch (error) {
        document.getElementById("error-message").innerText = "Invalid JSON data.";  // Show error message if JSON is invalid
    }
});

// Function to extract student names and marks from the parsed JSON
function extractData(jsonData) {
    const studentNames = [];
    const studentMarks = [];

    jsonData.forEach(item => {
        const studentName = item["Student Name"];
        const studentMark = item["Marks"];

        if (studentName && !isNaN(studentMark)) {
            studentNames.push(studentName);
            studentMarks.push(studentMark);
        }
    });

    return { studentNames, studentMarks };
}

// Function to create a chart using the Chart.js library
function createChart(studentNames, studentMarks) {
    const ctx = document.getElementById('chart').getContext('2d');

    new Chart(ctx, {
        type: 'bar', // You can change the type of the chart here (e.g., 'line', 'pie', etc.)
        data: {
            labels: studentNames, // Labels (student names)
            datasets: [{
                label: 'Marks', // The label for the dataset
                data: studentMarks, // Data (marks)
                backgroundColor: 'rgba(75, 192, 192, 0.2)', // Color for the bars
                borderColor: 'rgba(75, 192, 192, 1)', // Border color for the bars
                borderWidth: 1 // Width of the borders of the bars
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true // Make sure the y-axis starts at zero
                }
            }
        }
    });
}