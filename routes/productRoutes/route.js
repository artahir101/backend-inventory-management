const express = require("express");
const router = express.Router();
const productController = require("../../controllers/productController/controller.js");

router.get("/get", productController.get);
router.get("/get/made-by", productController.getMadeBy);
router.post("/create", productController.create);
router.post("/update", productController.update);
router.delete("/delete", productController.delete);

module.exports = router;