const express = require('express');
const authMiddleware = require('../middlewares/auth.middleware');
const habitController = require('../controllers/habits.controller');

const router = express.Router();



router.post('/createhabit',authMiddleware.authUser,habitController.createHabit)
router.patch('/updatehabit/:id',authMiddleware.authUser,habitController.updateHabit)
router.delete('/deletehabit/:id',authMiddleware.authUser,habitController.deleteHabit)
router.patch('/markcompleted/:id',authMiddleware.authUser,habitController.markCompletedHabit)





module.exports = router;