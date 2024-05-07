import { pool } from "../database/connection.js"


const all = async() => {
    try {
        const querySQL = 'SELECT * FROM estudiantes';
        const result = await pool.query({ text: querySQL });
        console.log('Estudiantes registrados:', result.rows);
    } catch (error) {
        console.error('Error al consultar estudiantes:', error.message);
    }
}

const create = async (estudiantes) => {
    try {
        const querySQL = 'INSERT INTO estudiantes (nombre, rut, curso, nivel) VALUES ($1, $2, $3, $4)';
        const values = [estudiante.nombre, estudiante.rut, estudiante.curso, estudiante.nivel];
        const result = await pool.query({ text: querySQL, values });
        console.log('Estudiante agregado correctamente:', result.rows[0]);
    } catch (error) {
        console.error('Error al agregar estudiante:', error.message);
    }
};

const update = async (estudiantes) => {
    try {
        const querySQL = 'UPDATE estudiantes SET nombre = $1, curso = $2, nivel = $3 WHERE rut = $4';
        const values = [estudiante.nombre, estudiante.curso, estudiante.nivel, estudiante.rut];
        const result = await pool.query({ text: querySQL, values });
        console.log('Estudiante actualizado correctamente:', result.rows[0]);
    } catch (error) {
        console.error('Error al actualizar estudiante:', error.message);
    }
};

const remove = async (rut) => {
    try {
        const querySQL = 'DELETE FROM estudiantes WHERE rut = $1';
        const result = await pool.query({ text: querySQL, values: [rut] });
        console.log('Estudiante eliminado correctamente:', result.rows[0]);
    } catch (error) {
        console.error('Error al eliminar estudiante:', error.message);
    }
};



export const estudiantesModel = {
    all,
    create,
    remove,
    update

}