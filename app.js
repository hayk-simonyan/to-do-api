const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const Important = require('./models/important');
const myDay = require('./models/myDay');
const planned = require('./models/planned');
const Tasks = require('./models/tasks');
const sequelize = require('./util/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const userRoutes = require('./routes/user');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(userRoutes);

app.use(errorController.get404);

sequelize
  .sync()
  .then(result => {
    app.listen(3000, () => console.log(`Example app listening on port 3000`));
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// sequelize
//   .authenticate()
//   .then(() => {
//     // listen on port 3000;
//     app.listen(3000, () => console.log(`Example app listening on port 3000`));
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });