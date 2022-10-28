import mongoose from 'mongoose';

/*
aca me falta definir bien el esquema de pedido con Rod
 */
const orderSchema = new mongoose.Schema({
 
  orden:{
      require:true,
      type:Object,
      default:{}
  },
  phone:{
    type:String,
    require:true
  }
  ,
  address:{
    city:{
        type: String,
        require: true
      },
    street:{
        type: String,
        require: true
      },
    number:{
        type: String,
        require: true
      },
     dto:String
      
    },
    price:{
      type:Number,
      require:true
    }
},{
 timestamps:true
});


const OrderModel = mongoose.model('order',orderSchema);

export default OrderModel;