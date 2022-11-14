import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

/*
aca me falta definir bien el esquema de pedido con Rod
 */

const OrderModel = sequelize.define(
  "OrderModel",
  {
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    },
  number:{
    type: DataTypes.STRING,
    require:true,
    unique:true
  },
  order:{
    require:true,
    type: DataTypes.STRING
  },
  phone:{
    type: DataTypes.STRING,
    require:true
  }
  ,
  address:{
      type: DataTypes.STRING,
    require:true
    },
  price:{
      type: DataTypes.STRING,
    require:true
    },
  comment:{
      type: DataTypes.STRING,
    require:true
  }
},{
 timestamps:true
});

export default OrderModel;