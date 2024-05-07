import 'dotenv/config'
import pg from 'pg';


const { Pool } = pg;

export const pool = new Pool ({
    allowExitOnIdle: true,
    connectionString: process.env.CONNECTION_STRING
});

const testConection = async () => {
    
    try {
        const response = await pool.query("SELECT NOW()")
        console.log(response.rows)
    } catch (error) {
        console.log(error)
    }
    
    
}

testConection()
