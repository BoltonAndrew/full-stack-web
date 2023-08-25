const { db, port } = require("./config");
const app = require("./src/app.js");

app.listen(port, async function () {
  await db.sync();
  console.log(`Listening on port ${port}`);
});
