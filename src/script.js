// app.js
function startModule(moduleId) {
    alert("Starting Module " + moduleId);
    // Add logic to load module content dynamically
}

function startQuiz() {
    alert("Quiz started");
    // Implement quiz functionality
}

function openForum() {
    alert("Opening discussion forum");
    // Implement forum functionality
}
// server.js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
