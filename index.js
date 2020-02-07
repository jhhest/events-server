const express = require("express");
const app = express();

const port = 4000;

app.listen(port, () => console.log(`
/**
 * Events server
 * Listens to port ${4000}
 **/
 `
 ))
