const express = require("express");
const { authorization } = require("../middlewares/auth.middlewares");
const {
  validateGetAll,
  validateGetById,
  validateCreate,
  validateUpdate,
  validateDelete,
} = require("../middlewares/manufactures.middlewares");
const {
  getAll,
  getById,
  create,
  update,
  delete: deleteManufacture,
} = require("../controllers/manufactures.controllers");
const { adminRole, userRole } = require("../constants/auth");

const router = express.Router();

router
  .route("/")
  .get(authorization(adminRole, userRole), validateGetAll, getAll)
  .post(authorization(adminRole), validateCreate, create);

router
  .route("/:id")
  .get(authorization(adminRole, userRole), validateGetById, getById)
  .put(authorization(adminRole), validateUpdate, update)
  .delete(authorization(adminRole), validateDelete, deleteManufacture);

module.exports = router;
