import express from 'express'

//Importacion de rutas
import estudiantesRoutes from './routes/estudiantes.route.js'


const app = express()

// rutas

app.use('/estudiantes', estudiantesRoutes)

// habilitar req.body
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log('Servidor andando...'))