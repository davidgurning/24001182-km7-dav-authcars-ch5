const express = require("express");
const { authorization } = require("../middlewares/auth.middlewares");

const {
  validateGetTypes,
  validateGetTypeById,
  validateDeleteTypeById,
  validateCreateType,
  validateUpdateType,
} = require("../middlewares/types.middlewares");
const {
  getTypes,
  getTypeById,
  deleteTypeById,
  createType,
  updateType,
} = require("../controllers/types.controllers");
const { adminRole, userRole } = require("../constants/auth");

const router = express.Router();

router
  .route("/")
  .get(authorization(adminRole, userRole), validateGetTypes, getTypes)
  .post(authorization(adminRole), validateCreateType, createType);

router
  .route("/:id")
  .get(authorization(adminRole, userRole), validateGetTypeById, getTypeById)
  .put(authorization(adminRole), validateUpdateType, updateType)
  .delete(authorization(adminRole), validateDeleteTypeById, deleteTypeById);

module.exports = router;
