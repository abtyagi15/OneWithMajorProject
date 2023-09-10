const express = require("express");
router = express.Router();

const {createPrediction} = require("../controllers/predictionController");

router.post("/predict",createPrediction);

module.exports = router;