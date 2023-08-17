const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const projectRoutes = require('./routes/projectRoutes');
const userRoutes = require('./routes/userRoutes');
const applicatesRoutes=require('./routes/applicatesRoutes')

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/projects', projectRoutes);
app.use('/api/users', userRoutes);
app.use('/api/apply',applicatesRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
