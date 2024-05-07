import { Router } from "express";
import { estudiantesController } from "../controllers/estudiantes.controller.js";


const router = Router()


//Path

router.get('/', estudiantesController.getEstudiantes)
router.post('/', estudiantesController.createEstudiante)
router.put('/:rut', estudiantesController.updateEstudiante)
router.delete('/:rut', estudiantesController.deleteEstudiante)
export default router;