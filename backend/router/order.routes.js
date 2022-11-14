import { Router } from "express";
import OrderModel from '../schemas/orderSchema.js';
import sendMenssage from '../helpers/menssage.js'
import idGen from "../helpers/idgen.js";
import { SignJWT } from 'jose';
import dotenv from 'dotenv';
import userJWTDTO from "../helpers/JWT.js";

dotenv.config({path:'../.env'})

const orderRouter = Router();

orderRouter.post("/", async(req, res) => {
  const {
    order,
    address,
    phone,
    price,
    comment
      } = req.body;
      
   const number = idGen();

  const newOrder =  await OrderModel.create({ 
     order,
     address,
     phone,
     price,
     comment,
     number
     });

 
  const url = sendMenssage(newOrder);

  const jwtConstructor = new SignJWT({ id: newOrder.number });
  
  const encoder = new TextEncoder();
  const jwt = await jwtConstructor
      .setProtectedHeader({
          alg: 'HS256',
          typ: 'JWT',
      })
      .setIssuedAt()
      .setExpirationTime('15m')
      .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));

  return res.status(200).send({ jwt, url });
});

orderRouter.put('/order:id', userJWTDTO, async (req, res) => {
  console.log(req.params.id);
  const number = req.params.id.substring(1);
 const newOrder = OrderModel.findOne({
  where:{
    number
  }
 })

 if(!newOrder) return res.status(404).send({
  error:'pedido inexistente'
 })

  const {
    order,
    address,
    phone,
    price,
    comment
      } = req.body;

    newOrder.order = order
    newOrder.address = address
    newOrder.phone = phone
    newOrder.price = price
    newOrder.comment = comment
      

  
 newOrder.save();
  //const url = sendMenssage(newOrder);
  
  return res.status(200).send('pedido editado exitosamente');
});



orderRouter.get('/order:id', userJWTDTO, async (req, res) => {

  const number = req.params.id.substring(1);

  console.log(number); 
  const order = await OrderModel.findOne({
    where:{
      number
    }
   })
 console.log(order)
  if (!order)
      return res.status(401).send({ errors: ['no existe ese pedido'] });

  return res.status(200).json(
    order
  );
});

orderRouter.delete('/order:id', userJWTDTO, async (req, res) => {
  const number = req.params.id.substring(1);

  if(!number) return res.status(404).res('pedido no encontrado')
 
  await OrderModel.destroy({
    where: {
     number
    },
  });

return res
.status(200)
.send('Pedido cancelado');
})

export default orderRouter;