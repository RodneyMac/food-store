
import { Router } from "express";
import sendMenssage from "../api/menssage.js";
import OrderModel from '../schemas/orderSchema.js';
import userJWTDTO from "../controllers/JWT.js";

const orderRouter = Router();

orderRouter.post("/", async(req, res) => {
  const {id ,orden, address, phone,price} = req.body;
  const order = new OrderModel({orden, address,phone ,price});
  await order.save();

  sendMenssage();
  // falta definir como enviar el mensaje
  return res.sendStatus(200);
});
// falta testear
orderRouter.patch("/", userJWTDTO ,async(req, res) => {
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

// falta definir con Rod
orderRouter.get('/:id', userJWTDTO, async (req, res) => {
  const order = await OrderModel.findById(req.params.id);
  res.json(order);
});

orderRouter.delete('/:id',userJWTDTO, async (req, res) => {
  await OrderModel.findByIdAndRemove(req.params.id);
  res.json({status: 'order deleted'});
});

export default orderRouter;