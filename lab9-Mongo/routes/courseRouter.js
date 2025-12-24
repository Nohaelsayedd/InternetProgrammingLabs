const express = require('express');
const router = express.Router(); 
const Course = require('../models/Course');

//CREATE: POST /courses 
router.post('/', async (req, res) => {
    try {
        const newCourse = await Course.create(req.body); 
        res.status(201).json(newCourse); 
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// READ: GET /courses 
router.get('/', async (req, res) => {
    try {
        const allCourses = await Course.find(); 
        res.json(allCourses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//  UPDATE: PUT /courses/:id 
router.put('/:id', async (req, res) => {
    try {
        const updatedCourse = await Course.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true } 
        );
        if (!updatedCourse) return res.status(404).json({ message: 'Course not found' });
        res.json(updatedCourse);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE: DELETE /courses/:id 
router.delete('/:id', async (req, res) => {
    try {
        const result = await Course.deleteOne({ _id: req.params.id }); 
        
        if (result.deletedCount === 0) return res.status(404).json({ message: 'Course not found' });
        
        res.json({ message: 'Course deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;