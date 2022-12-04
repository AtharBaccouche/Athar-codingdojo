const express = require("express");
const app = express();
const port = 8000;
import { faker } from '@faker-js/faker';
app.listen(port, () => console.log(`Listening on port: ${port}`));