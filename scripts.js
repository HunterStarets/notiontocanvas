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
