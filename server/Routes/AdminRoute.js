import express from 'express';
import db from '../utils/db.js';


const router = express.Router();

router.get('/users', (req, res) => {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, result) => {
        if (err) {
            console.error('Error executing the query:', err.message);
            return res.status(500).json({ error: 'Failed to fetch data from the database' });
        }
        res.status(200).json(result);
    }
    );
});


// BEGINNING OF DEVICE ROUTES

router.get('/device', (req, res) => {
    const sql = "SELECT * FROM devices";
    db.query(sql, (err, result) => {
        if (err) {
            console.error('Error executing the query:', err.message);
            return res.status(500).json({ error: 'Failed to fetch data from the database' });
        }
        res.status(200).json(result);
    });
});

router.get('/devices/:device_id', (req, res) => {
    const sql = "SELECT * FROM devices WHERE device_id = ?";
    db.query(sql, [req.params.device_id], (err, result) => {
        if (err) {
            console.error('Error executing the query:', err.message);
            return res.status(500).json({ error: 'Failed to fetch data from the database' });
        }
        res.status(200).json(result[0]);
    });
});

router.post('/device/submit', (req, res) => {
    const sql = "INSERT INTO devices (unique_identifier, batch_id, type_id, brand, model, serial_number, vra_tag, purchase_date, location, status, assigned_to_user_id, date_assigned) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    
    const values = [
        req.body.unique_identifier,
        req.body.batch_id,
        req.body.type_id,
        req.body.brand, 
        req.body.model,
        req.body.serial_number,
        req.body.vra_tag,
        req.body.purchase_date,
        req.body.location,
        req.body.status,
        req.body.assigned_to_user_id,  // ✅ Fixed typo
        req.body.date_assigned
    ];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error inserting data:', err.message);
            return res.status(500).json({ error: 'Failed to save data to the database' });
        }
        res.status(200).json({
            message: 'Data saved successfully',
            data: {
                id: result.insertId, // Return the inserted ID (optional)
                unique_identifier: req.body.unique_identifier,  
                batch_id: req.body.batch_id,
                type_id: req.body.type_id,
                brand: req.body.brand,
                model: req.body.model,
                serial_number: req.body.serial_number,
                vra_tag: req.body.vra_tag,
                purchase_date: req.body.purchase_date,
                location: req.body.location,
                status: req.body.status,
                assigned_to_user_id: req.body.assigned_to_user_id, 
                date_assigned: req.body.date_assigned
            }
        });
    });
});


//END OF USER ROUTES 

export { router as AdminRoute };