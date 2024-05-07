import express from 'express'

//Importacion de rutas
import estudiantesRoutes from './routes/estudiantes.route.js'


const app = express()

// habilitar req.body
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// rutas

app.use('/estudiantes', estudiantesRoutes)



const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log('Servidor andando...'))