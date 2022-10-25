import { Router } from "express";
import products from '../products/products.js'
const productsRouter = Router();

productsRouter.get("/",(req,res)=>{
    res.send(products);
});

export default productsRouter;