/* === External Modules === */
const express = require("express");
const path = require("path");

/* === Internal Modules === */

/* === Server Configuration === */
const PORT = 4000;

/* === Instanced Modules === */
const app = express();

/* === Middleware === */
app.use(express.json());

/* === Routes === */

// serve react frontend

// api routes

/* === Server Listener === */
app.listen(PORT, function(){
  console.log(`Server is live at localhost:${PORT}.`);
});
