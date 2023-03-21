const courseIds = ["189387", "189166", "190605", "187783", "190687", "188090"];
const courseNames = [
  "ITIS-3135",
  "ITIS-3310",
  "ITSC-2600",
  "KNES-1231",
  "LBST-2301",
  "MATH-2164",
];
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
/*
    Important variables 
        "due_at", 
        "due_date_required", 
        "has_submitted_submissions", 
        "html_url", 
        "lock_at"
        "lock_info.lock_at", 
        "locked_for_user", 
        "name", 
        "omit_from_final_grade", 
        "submission_types",
        "unlock_at"

const { Client } = require('@notionhq/client');

// Initialize a new Notion client with your API key
const notion = new Client({ auth: process.env.NOTION_API_KEY });

// The ID of your database
const databaseId = 'YOUR_DATABASE_ID';

// Retrieve all the assignments in the database
const response = await notion.databases.query({
  database_id: databaseId,
});

// Log the results
console.log(response.results);
*/

const NOTION_API_KEY = secret_qexxFPpXBEejliAZ0l8cAEUL3U4QWEQYolqXLg7JbmF;
getDatabases();
function getDatabases() {
  const request = require("request");

  const options = {
    url: "https://api.notion.com/databases",
    headers: {
      "Notion-Version": "2022-03-16",
      Authorization: "Bearer " + NOTION_API_KEY,
    },
  };

  request.get(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
  });
  console.log("Outout");
}
