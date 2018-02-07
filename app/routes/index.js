let express = require('express');
let router = express.Router();
//require  controller
const control = require('../controllers/index.js');

/* GET home page. */
router.get('/',(req, res) => {
   control.index(req,res)});
router.get('/feedback', (req, res) => {
   control.feedback(req,res)});
 router.get('/thankyou', (req, res) => {
   control.thankyou(req,res)});

module.exports = router;
