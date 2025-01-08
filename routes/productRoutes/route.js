const express = require("express");
const router = express.Router();
const productController = require("../../controllers/productController/controller.js");

router.get("/get", productController.get);
router.get("/create", productController.create);
router.get("/update", productController.update);
router.get("/delete", productController.delete);

module.exports = router;