const Order = require('./Order.model');

const getUserOrders = async (userId) => {
  try {
    const orders = await Order
      .find({ buyer: userId })
      .populate("products", "-photo")
      .populate("buyer", "name");
    return orders;
  } catch (error) {
    console.error("Error while getting user orders:", error);
    throw error;
  }
};

const getAllOrders = async () => {
  try {
    const orders = await Order
      .find({})
      .populate("products", "-photo")
      .populate("buyer", "name")
  
    return orders;
  } catch (error) {
    console.error("Error while getting all orders:", error);
    throw error;
  }
};

const getOrderById = async (orderId) => {
  try {
    const order = await Order
      .findById(orderId)
      .populate('products', '-photo')
      .populate('buyer', 'name');

    if (!order) {
      throw new Error('Order not found');
    }

    return order;
  } catch (error) {
    console.error('Error while getting order by ID:', error);
    throw error;
  }
};

const createOrder = async (orderData) => {
  try {
    const newOrder = new Order(orderData);
    const savedOrder = await newOrder.save();
    return savedOrder;
  } catch (error) {
    console.error("Error while creating order:", error);
    throw error;
  }
};

const deleteOrder = async (orderId) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(orderId);
    return deletedOrder;
  } catch (error) {
    console.error("Error while deleting order:", error);
    throw error;
  }
};

const updateOrderStatus = async (orderId, newStatus) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { status: newStatus },
      { new: true }
    );
    return updatedOrder;
  } catch (error) {
    console.error("Error while updating order status:", error);
    throw error;
  }
};

module.exports = {
  getUserOrders,
  getAllOrders,
  createOrder,
  deleteOrder,
  updateOrderStatus,
  getOrderById
};
