const express = require("express");
const { authorization } = require("../middlewares/auth.middlewares");

const {
  validateGetCars,
  validateGetCarById,
  validateDeleteCarById,
  validateCreateCar,
  validateUpdateCar,
} = require("../middlewares/cars.middlewares");
const {
  getCars,
  getCarById,
  deleteCarById,
  createCar,
  updateCar,
} = require("../controllers/cars.controllers");
const { adminRole, userRole } = require("../constants/auth");

const router = express.Router();

router
  .route("/")
  .get(authorization(adminRole, userRole), validateGetCars, getCars)
  .post(authorization(adminRole), validateCreateCar, createCar);

router
  .route("/:id")
  .get(authorization(adminRole, userRole), validateGetCarById, getCarById)
  .put(authorization(adminRole), validateUpdateCar, updateCar)
  .delete(authorization(adminRole), validateDeleteCarById, deleteCarById);

module.exports = router;
