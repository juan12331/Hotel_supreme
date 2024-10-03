const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');
const usuarios = require('./models/users');
const quartos = require('./models/quartos');
const imagens = require('./models/imagens')
const cookieParser = require('cookie-parser')

usuarios.sync();
quartos.sync();
imagens.sync();



const app = express();

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3001, () => console.log('servidor rodando na porta 3001'));