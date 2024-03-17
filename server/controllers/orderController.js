const Order = require("../models/OrderModel");

const { ObjectId } = require("mongoose").Types;
const getUserOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({
      user: new ObjectId("64254517656b8f8af0a15fdc"),
    }).sort({ createdAt: -1 });
    res.send(orders);
  } catch (error) {
    next(error);
  }
};

const getOrder = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("user", "-password --_id -__v -createdAt -updatedAt")
      .orFail();
    res.send(order);
  } catch (err) {
    next(err);
  }
};

const createOrder = async (req, res, next) => {
  try {
    const { cartItems, orderTotal, shippingAddress } = req.body;
    if (!cartItems || !orderTotal || !shippingAddress) {
      return res.status(400).send("All inputs are required");
    }

    const order = new Order({
      user: new ObjectId("64254517656b8f8af0a15fdc"),
      orderTotal: orderTotal,
      shippingAddress: shippingAddress,
      cartItems: cartItems,
    });
    const createdOrder = await order.save();
    res.status(201).send(createdOrder);
  } catch (err) {
    next(err);
  }
};

const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({}).populate("user", "-password");

    res.send(orders);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getUserOrders,
  getOrder,
  createOrder,

  getOrders,
};
