
import { Router } from "express";
import OrderModel from '../schemas/orderSchema.js';

const orderRouter = Router();

orderRouter.post("/", async(req, res) => {
  const {id ,orden, address, phone,price} = req.body;
  const order = new OrderModel({orden, address,phone ,price});
  await order.save();
  return res.sendStatus(200);
});

orderRouter.patch("/", async(req, res) => {
  const { id } = req;
    const { orden, address, phone,price } = req.body;

    const existingOrder = await OrderModel.findById(id).exec();
    if (!existingOrder)
        return res.status(401).send({ errors: ['pedido no existente'] });

    existingOrder.orden = orden;
    existingOrder.address = address;
    existingOrder.phone = phone;
    existingOrder.price = price;

    await existingOrder.save();

    return res.send('Orden actualizado');
});


orderRouter.get('/:id', async (req, res) => {
  const order = await OrderModel.findById(req.params.id);
  res.json(order);
});

orderRouter.delete('/:id', async (req, res) => {
  await OrderModel.findByIdAndRemove(req.params.id);
  res.json({status: 'order deleted'});
});

export default orderRouter;