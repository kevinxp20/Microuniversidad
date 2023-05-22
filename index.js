const {getConnection} = require('./db/Conexion-mongo');
const express = require('express')
const cors = require('cors');
const app = express()

const port = process.env.PORT || 3001

//process.evn.port ||
app.use(cors());
getConnection();

//Parseo Json
app.use(express.json());

app.use('/universidad',require('./router/Universidad'));

app.listen(port, () => {
    console.log(`Ejecución en el Puerto ${port}`)
  })


