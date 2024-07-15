const express = require("express");
const router = express.Router();
const orderController = require("./order.controlleur");
// const { isAdmin, requireSignIn } = require("../middlewares/authmiddleware");

// Orders for a specific user
router.get("/all",  orderController.getAllOrdersController);
router.get("/buyer/:id", orderController.getOrdersController);

// All orders (admin)
router.get('/:orderId', orderController.getOrderByIdController);
// Create a new order
router.post("/",orderController.createOrderController);

// Delete an order
router.delete("/:orderId",  orderController.deleteOrderController);

// Update order status (admin)
router.put("/order-status/:orderId",  orderController.orderStatusController);

module.exports = router;
