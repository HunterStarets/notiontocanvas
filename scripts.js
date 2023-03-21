function getCareers() {
  // Set up the Canvas API endpoint and your API key
  const API_URL =
    "https://cors-anywhere.herokuapp.com/https://uncc.instructure.com/api/v1";
  const API_KEY =
    "7301~kT6q0x1iBLQ0oDo0c3nsJHHWbDawgLN76MK0Pj2GckJflPBOCnk2aSBX0b8LY7HI";

  // Set up the course ID for which you want to retrieve assignments
  const COURSE_ID = "190605";

  // Get the assignments for the course using the Canvas API
  fetch(`${API_URL}/courses/${COURSE_ID}/assignments`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      Origin: "https://hunterstarets.github.io",
    },
  })
    .then((response) => response.json())
    .then((assignments) => {
      // Do something with the assignments data
      console.log(assignments);
    })
    .catch((error) => console.error(error));
}
getCareers();
