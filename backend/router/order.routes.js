
import { Router } from "express";
import OrderModel from '../schemas/orderSchema.js';
import userJWTDTO from "../controllers/JWT.js";
import twilio from 'twilio';


/// Falta definir el mensaje

const accountSid = 'ACaa76dd59405afa5b19e42a5e0135d227'; 
const authToken = 'e0f69bfabd05788f9ccb250d45719585';

const client = twilio(accountSid, authToken);

const orderRouter = Router();

orderRouter.post("/", async(req, res) => {
  const {id ,orden, address, phone,price} = req.body;
  const order = new OrderModel({orden, address,phone ,price});
  await order.save();

  const url = sendMenssage(order.id);
  // falta definir como enviar el mensaje
  return res.status(200).send(url);
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