const express = require("express");

const carsRouter = require("./cars.routes");
const manufacturesRouter = require("./manufactures.routes");
const typesRouter = require("./types.routes");
const authRouter = require("./auth.routes");

const router = express.Router();

router.use("/types", typesRouter);
router.use("/cars", carsRouter);
router.use("/manufactures", manufacturesRouter);
router.use("/auth", authRouter);

module.exports = router;
