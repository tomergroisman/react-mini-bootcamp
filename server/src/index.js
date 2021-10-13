/**
 * TODO: (Server Basics)
 * - Set a simple server with '/' route, listening on port 3000
 * - Cover the basics of REST API:
 *      request and response
 *      query
 *      body
 *      dynamic route
 *
 * TODO: (Client-Server App)
 * - Review the /pokemons GET route
 * - Add search query to the route
 */

const express = require("express");
const db = require("./db.json");
const constants = require("./constants");

const { PAGE_SIZE } = constants;

const app = express();
app.set("json spaces", 2);
app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  next();
});

const PORT = 3000;

app.get("/pokemons", (req, res) => {
  const { page } = req.query;
  const startIndex = page ? (page - 1) * PAGE_SIZE : 0;
  const endIndex = page ? page * PAGE_SIZE : undefined;
  const results = db.slice(startIndex, endIndex);
  res.json(results);
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
