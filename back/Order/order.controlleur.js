const orderService = require('./order.services');

const getOrdersController = async (req, res) => {
  try {
    const orders = await orderService.getUserOrders(req.params.id);
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error while getting orders",
      error,
    });
  }
};
const getOrderByIdController = async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await orderService.getOrderById(orderId);

    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: 'Error while getting order by ID',
      error: error.message,
    });
  }
};

const getAllOrdersController = async (req, res) => {
  try {
    console.log('rrrrrrrrrrrrrrrrrrrrrrrrr')
    const orders = await orderService.getAllOrders();
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error while getting all orders",
      error,
    });
  }
};

const createOrderController = async (req, res) => {
  try {
    const orderData = req.body;
    console.log('orderData',orderData);
    const createdOrder = await orderService.createOrder(orderData);
    res.json(createdOrder);
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error while creating order",
      error,
    });
  }
};

const deleteOrderController = async (req, res) => {
  try {
    const { orderId } = req.params;
    const deletedOrder = await orderService.deleteOrder(orderId);
    res.json(deletedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting order",
      error,
    });
  }
};

const orderStatusController = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;
    const updatedOrder = await orderService.updateOrderStatus(orderId, status);
    res.json(updatedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error while updating order status",
      error,
    });
  }
};

module.exports = {
  getOrdersController,
  getAllOrdersController,
  createOrderController,
  deleteOrderController,
  orderStatusController,
  getOrderByIdController
};
