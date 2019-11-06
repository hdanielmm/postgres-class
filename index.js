const { Client } = require('pg');
const client = new Client({ database: "courses" });

const fetchCourses = async () => {
  await client.connect();
  const res = await client.query("select * from courses");
  console.log(res.rows);
  await client.end();
}

// const insertCourse = async () => {
//   await client.connect();
//   await client.query("insert into courses (name) values ('HTML5 and CSS')");
//   await client.end();
// }

// insertCourse();