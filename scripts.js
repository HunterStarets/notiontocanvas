const courseIds = ["189387", "189166", "190605", "187783", "190687", "188090"];
const courseNames = [
  "ITIS-3135",
  "ITIS-3310",
  "ITSC-2600",
  "KNES-1231",
  "LBST-2301",
  "MATH-2164",
];
getAssignments(courseIds[0]);
function getAssignments(COURSE_ID) {
  // Set up the Canvas API endpoint and your API key
  const API_URL =
    "https://cors-anywhere.herokuapp.com/https://uncc.instructure.com/api/v1";
  const API_KEY =
    "7301~kT6q0x1iBLQ0oDo0c3nsJHHWbDawgLN76MK0Pj2GckJflPBOCnk2aSBX0b8LY7HI";

  // Get the assignments for the course using the Canvas API
  fetch(`${API_URL}/courses/${COURSE_ID}/assignments?per_page=100`, {
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
