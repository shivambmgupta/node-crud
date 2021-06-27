import express from 'express'
import { 
    addData, updateData, getStats
 } from '../controllers/user.js';
 import { tracker } from '../util/common.js';
 
const router = express.Router();

router.post('/data', tracker, addData);
router.put('/data', tracker, updateData);
router.get('/getStats', getStats);

export default router;