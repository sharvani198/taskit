const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/db');
const tasks = require('./routes/tasks');

const app = express();

dbConnect();

app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ extended: false }));

app.use('/api/tasks', tasks);

app.get('/', (req, res) => {
	res.send("Hello world!");
});

const port = process.env.PORT || 8084;

app.listen(port, () => console.log(`Server running on port ${port}`));