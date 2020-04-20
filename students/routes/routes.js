const express = require('express');
const router = express.Router();


const studentsControllers = require('../controllers/studentsControllers');

router.get('/', (req, res) => {
    res.send('Welcome to Students API');
});
router.get('/students/', studentsControllers.getAll);
router.post('/students/', studentsControllers.create);
router.get('/students/:id', studentsControllers.findById);
router.put('/students/:id', studentsControllers.update);
router.delete('/students/:id', studentsControllers.delete);
router.post('/students/replace', studentsControllers.updateMany);
router.get('/students/avg/:sub', studentsControllers.getAverage);
module.exports = router;