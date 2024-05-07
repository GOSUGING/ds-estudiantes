import { estudiantesModel } from "../models/estudiantes.model.js";

const getEstudiantes = async (req, res) => {
    try {
       const estudiantes = await estudiantesModel.all();
        return res.json({ ok: true, estudiantes });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ ok: false });
    }
};

const createEstudiante = async (req, res) => { 
    try {
        const { nombre, rut, curso, nivel } = req.body
        const newEstudiante = {
            nombre,
            rut,
            curso, 
            nivel
        }
        const estudiante = await estudiantesModel.create(newEstudiante)
        return res.json(estudiante)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
        
    }
    
 }


 const deleteEstudiante = async (req, res) => {
    try {
        const { rut } = req.params;
        await estudiantesModel.remove(rut); // Eliminar al estudiante
        return res.json({ message: 'Estudiante eliminado correctamente' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ ok: false });
    }
};


const updateEstudiante = async (req, res) => {
    try {
        const { nombre, curso, nivel } = req.body;
        const { rut } = req.params;
        
        // Construir objeto con los datos de actualización
        const updateEstudiante = {
            nombre,
            curso,
            nivel,
            rut // Asegúrate de incluir el rut
        };

        // Llamar a la función correcta del modelo para actualizar al estudiante
        const estudianteActualizado = await estudiantesModel.update(updateEstudiante);

        return res.json(estudianteActualizado);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ ok: false });
    }
};


export const estudiantesController = {
    getEstudiantes,
    createEstudiante,
    deleteEstudiante,
    updateEstudiante
};
