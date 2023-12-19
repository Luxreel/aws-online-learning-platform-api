const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;
const frontend_port = 3000;

const allowedOrigins = [`http://localhost:${frontend_port}`, 'https://www.aws-online-learning-platform-app.cloudns.eu'];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});