async function getAssignments() {
  const canvasBaseUrl = "https://uncc.instructure.com/api/v1";
  const canvasApiKey =
    "7301~kT6q0x1iBLQ0oDo0c3nsJHHWbDawgLN76MK0Pj2GckJflPBOCnk2aSBX0b8LY7HI";
  const courseId = "190605"; //2600 ID

  // Retrieve a list of all the assignments for the given course
  const assignmentsUrl = `${canvasBaseUrl}/courses/${courseId}/assignments`;
  const response = await fetch(assignmentsUrl, {
    headers: { Authorization: `Bearer ${canvasApiKey}` },
  });
  const assignments = await response.json();

  console.log(assignments);
}

// Set up the Canvas API endpoint and your API key
const API_URL = "https://uncc.instructure.com/api/v1";
const API_KEY =
  "7301~kT6q0x1iBLQ0oDo0c3nsJHHWbDawgLN76MK0Pj2GckJflPBOCnk2aSBX0b8LY7HI";

// Set up the course ID for which you want to retrieve assignments
const COURSE_ID = "190605";

// Get the assignments for the course using the Canvas API
fetch(`${API_URL}/courses/${COURSE_ID}/assignments`, {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
})
  .then((response) => response.json())
  .then((assignments) => {
    // Do something with the assignments data
    console.log(assignments);
  })
  .catch((error) => console.error(error));
