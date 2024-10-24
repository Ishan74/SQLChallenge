import { connectToDb } from './src/connection.js';
import Db from './db.js';

const main = async () => {
    await connectToDb();

    const db = new Db();

    // Example usage of your methods
    try {
        // Fetch all employees
        const employees = await db.findAllEmployees();
        console.log('Employees:', employees.rows); // Access rows from the result
        
        // Add other function calls here as needed
        
    } catch (error) {
        console.error('Error during database operation:', error);
    } finally {
        // Close the connection when done (if needed)
        await db.pool.end();
    }
};

main();
