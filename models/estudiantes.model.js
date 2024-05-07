import { pool } from "../database/connection.js"


const all = async() => {
   const {rows} = await pool.query("SELECT * FROM estudiantes")
   return rows
}

const create = async (estudiantes) => {
    const querySQL = 'INSERT INTO estudiantes (nombre, rut, curso, nivel) VALUES ($1, $2, $3, $4) RETURNING *';
    const { rows } = await pool.query(querySQL, [estudiantes.nombre, estudiantes.rut, estudiantes.curso, estudiantes.nivel]);
    return rows[0]; // Devolver la primera fila (el estudiante recién insertado)
};

const update = async (estudiantes) => {
    try {
        const querySQL = 'UPDATE estudiantes SET nombre = $1, curso = $2, nivel = $3 WHERE rut = $4 RETURNING *';
        const { rows } = await pool.query(querySQL, [estudiantes.nombre, estudiantes.curso, estudiantes.nivel, estudiantes.rut]);
        return rows;
    } catch (error) {
        // Manejar errores aquí si es necesario
        throw error;
    }
};

const remove = async (rut) => {
    try {
        const querySQL = 'DELETE FROM estudiantes WHERE rut = $1 RETURNING *';
        await pool.query(querySQL, [rut]);
        return { message: 'Estudiante eliminado correctamente' };
    } catch (error) {
        // Manejar errores aquí si es necesario
        throw error;
    }
};



export const estudiantesModel = {
    all,
    create,
    remove,
    update

}