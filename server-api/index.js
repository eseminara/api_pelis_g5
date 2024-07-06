const express = require('express');
const db = require('./data/db')
const cors = require('cors');
const path = require('path');
//Routes
const userRoutes = require('./routes/userRoutes');
const movieRoutes = require('./routes/movieRoutes');
const seriesRoutes = require('./routes/seriesRoutes');
const commentRoutes = require('./routes/commentRoutes');
// Models
const commentModels = require ('./models/Comment.js');
const movieModels = require ('./models/Movie.js');
const seriesModels = require ('./models/Series.js');
const userModels = require ('./models/User.js');

const app = express();

// Sincroniza todos los modelos definidos con la base de datos.
db.sync({ force: false })  // Cambia a true si quieres que las tablas sean recreadas cada vez que corras la app.
  .then(() => {
    console.log("Database & tables created!");
  })
  .catch((error) => {
    console.error("Error creating database & tables: ", error);
  });


app.use(cors());
app.use(express.json());

// archivos státicos
app.use(express.static(path.join(__dirname, 'public')))

//rutas de la api
app.use('/api', userRoutes);
app.use('/api', movieRoutes);
app.use('/api', seriesRoutes);
app.use('/api', commentRoutes);

//archivos státicos desde public
app.use(express.static(path.join(__dirname, 'public')));

//rutas de las paginas 
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/series', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'series.html'));
});

app.get('/peliculas', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'peliculas.html'));
});

app.get('/favoritos', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'favoritos.html'));
});

app.get('/cuenta', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'cuenta.html'));
});

app.get('/video', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'video.html'));
});

db.sync()
.then(() => {
  console.log('Base de datos sincronizada');
})
.catch(err => {
  console.error('Error al sincornizar la base de datos:', err);
});

const port = 3030;
app.listen(port, () => {
  console.log(`Servidor escuchado en ${port}`);
});
