const express = require('express')
const routes = require('./api/routes/routes')
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());

routes(app)

app.listen(3001);
console.log("servidor rodando na porta http://localhost:3001/")