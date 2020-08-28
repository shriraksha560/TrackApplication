// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const authRoutes = require('./routes/authRoutes');

// const app = express();

// app.use(bodyParser.json());
// app.use(authRoutes);
// console.log('1');
// const mongoUri =
//   'mongodb+srv://raksha:raksha@cluster0.coxmw.mongodb.net/test?retryWrites=true&w=majority';
// mongoose.connect(mongoUri, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
// });
// console.log('2');

// mongoose.set('useUnifiedTopology', true);
// console.log('3');

// mongoose.connection.on('connected', () => {
//   console.log('Connected to Mongo instance !!!');
// });

// mongoose.connection.on('error', (err) => {
//   console.error('Error connecting to mongose ', err);
// });

// app.get('/',requireAuth, (req, res) => {
//   res.send(`Your email:${req.user.email}`);
// });

// app.listen(3000, () => {
//   console.log('Listening on port 3000');
// });
require('./models/User');
require('./models/Track');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');
const requireAuth = require('./middlewares/requireAuth');

const app = express();
app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri =
  'mongodb+srv://raksha:raksha@cluster0.coxmw.mongodb.net/test?retryWrites=true&w=majority';
mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database Connected'))
  .catch((err) => console.log(err));

// mongoose.connection.on('connected', () => {
//   console.log('Connected to Mongo instance !!!');
// });
// mongoose.connection.on('error', (err) => {
//   console.error('Error connecting to mongose : ', err);
// });

app.get('/', requireAuth, (req, res) => {
  res.send(`Your email:${req.user.email}`);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
